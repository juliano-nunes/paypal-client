<template>
    <form id="shipping-address row">
        <div class="input-field col s12 l5">
            <input type="text" name="country" :value="shippingAddress.country" required />
            <label for="country">Country/Region</label>
        </div>
        <div class="input-field col s12 l7">
            <input type="text" name="city" :value="shippingAddress.city" required />
            <label for="city">City</label>
        </div>
        <div class="input-field col s12 l7">
            <input type="text" name="state" :value="shippingAddress.state" required />
            <label for="state">State/Province/Region</label>
        </div>
        <div class="input-field col s12 l5">
            <input type="text" name="zip-code" :value="shippingAddress.zipcode" pattern="[0-9]{5}" required />
            <label for="zip-code">Zip Code</label>
        </div>
        <div class="input-field col s12 l12">
            <input type="text" name="address-line-1" :value="shippingAddress.address1" required />
            <label for="address-line-1">Address Line 1</label>
        </div>
        <div class="input-field col s12 l12">
            <input type="text" name="address-line-2" :value="shippingAddress.address2" required />
            <label for="address-line-2">Address Line 2</label>
        </div>
    </form>
</template>
<script>
export default {
    name: "ShippingAddressForm",
    props: {
        shippingAddress: {
            type: Object
        }
    }
}
</script>
