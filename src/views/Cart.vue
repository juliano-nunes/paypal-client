<template>
    <section id="cart" class="container">
      <h2>Shopping Cart</h2>
      <div class="row">
      <section class="cart col s12 l12">
        <ProductsTableComponent :products="products" />
      </section>
      </div>
      <div class="row">
        <div class="col s12 l8">
          <section id="personal-info">
            <h3>Personal Information</h3>
            <PersonalInformationForm :personal-info="personalInfo" />
          </section>
          <section id="address">
            <h3>Shipping Address</h3>
            <ShippingAddressForm :shipping-address="shippingAdress" />
          </section>
        </div>
        <section id="payment" class="col s12 l4">
          <h3>Payment</h3>
          <PaypalComponent />
        </section>
      </div>
    </section>
</template>

<script>
import PaypalComponent from "../components/PaypalComponent.vue";
import ProductsTableComponent from "../components/ProductsTableComponent.vue";
import PersonalInformationForm from "../components/PersonalInformationForm.vue";
import ShippingAddressForm from "../components/ShippingAddressForm.vue";

export default {
  name: 'cart',
  components: {
    PaypalComponent,
    ProductsTableComponent,
    PersonalInformationForm,
    ShippingAddressForm
  },
  mounted() {
    this.getProducts();
  },
  data() {
    return {
      products: [],
      shippingAdress: {
        country: "US",
        city: "Redwood City",
        state: "CA",
        zipcode: "94065",
        address1: "4th Floor, One Lagoon Drive",
        address2: "Unit #34"
      },
      personalInfo: {
        firstName: "Brian",
        lastName: "Robinson",
        email: "julianomarquesnunes+1@gmail.com",
        phone: "011862212345678"
      }
    }
  },
  watch: {
    products() {
      if (this.products.length === 0) {
        localStorage.setItem('transactions', JSON.stringify(new Object()));
        return;
      }

      localStorage.setItem('transactions', JSON.stringify({
        itemsList: {
          items: this.products.map(product => {
            return {
              quantity: product.quantity,
              sku: product.sku
            }
          }),
          shippingAddress: {
            recipient_name: `${this.personalInfo.lastName}, ${this.personalInfo.firstName}`,
            line1: this.shippingAdress.address1,
            line2: this.shippingAdress.address2,
            city: this.shippingAdress.city,
            country_code: this.shippingAdress.country,
            postal_code: this.shippingAdress.zipcode,
            phone: this.personalInfo.phone,
            state: this.shippingAdress.state
          }
        },
        redirectUrls: 
        {
          return_url: `https://${window.location.hostname}/#/approved`,
          cancel_url: `https://${window.location.hostname}/#/refused`
        }
      }));
    }
  },
  methods: {
    getProducts() {
      this.$repository.getProductsList().then(function(res) {
        this.products = res.data;
        this.products.map(product => product.quantity = 1);
      }.bind(this));
    }
  }
}
</script>

<style lang="scss">
  section#cart h2 {
    font-size: 1.5rem;
    text-align: left;
    font-weight: 500;
    margin-bottom: 0;
  }
  section#cart h3 {
    font-size: 1rem;
    text-align: left;
    font-weight: 700;
  }
  section#cart.container {
    width: 85%;
  }
</style>
