<template>
  <div>
    <div id="paypal-button"></div>
  </div>
</template>

<script>
  import paypal from "paypal-checkout";
  export default {
    name: "PaypalComponent",
    mounted() {
      paypal.Button.render({
        env: 'sandbox', // Or 'production'
        style: {
          size: 'medium',
          color: 'gold',
          shape: 'rect',
          label: 'checkout',
          tagline: 'true'
        },
        payment: this.$repository.createPayment,
        onAuthorize: this.$repository.executePayment
      }, '#paypal-button');
    }
  }
</script>
