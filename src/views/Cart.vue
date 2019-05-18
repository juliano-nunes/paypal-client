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
  data() {
    return {
      products: [
        {
          identifier: "Teste",
          productName: "Samsung 128GB 100MB/s (U3) MicroSD EVO Select Memory Card with Adapter (MB-ME128GA/AM)",
          unitPrice: 1.22,
          productUrl: "https://www.amazon.com/gp/product/B06XWZWYVP/ref=ox_sc_act_image_1?smid=ATVPDKIKX0DER&psc=1",
          productImg: "https://images-na.ssl-images-amazon.com/images/I/817wkPGulTL._AC_AA100_.jpg",
          quantity: 1
        }
      ],
      shippingAdress: {
        country: "Brazil",
        city: "São Paulo",
        state: "São Paulo",
        zipcode: "01332",
        address1: "Rua Itapeva, 220",
        address2: "Ap 16"
      },
      personalInfo: {
        firstName: "Juliano",
        lastName: "Nunes",
        email: "julianomarquesnunes@gmail.com",
        phone: "+5511992002315"
      }
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
