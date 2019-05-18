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
        // Set up the payment:
        // 1. Add a payment callback
        payment: function(data, actions) {
          // 2. Make a request to your server
          return actions.request.post('http://localhost:3000/my-api/create-payment/')
            .then(function(res) {
              // 3. Return res.id from the response
              return res.id;
            });
        },
        // Execute the payment:
        // 1. Add an onAuthorize callback
        onAuthorize: function(data, actions) {
          // 2. Make a request to your server
          return actions.request.post('http://localhost:3000/my-api/execute-payment/', {
            paymentID: data.paymentID,
            payerID:   data.payerID
          })
            .then(function() {
              // 3. Show the buyer a confirmation message.
            });
        }
      }, '#paypal-button');
    }
  }
</script>
