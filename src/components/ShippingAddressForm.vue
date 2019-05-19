<template>
    <form id="shipping-address row">
        <div class="input-field col s12 l5">
            <input type="text" class="validate" name="country" :value="shippingAddress.country" required />
            <label for="country">Country/Region*</label>
            <span class="helper-text" data-error="Required field"></span>
        </div>
        <div class="input-field col s12 l7">
            <input type="text" class="validate" name="city" :value="shippingAddress.city" required />
            <label for="city">City*</label>
            <span class="helper-text" data-error="Required field"></span>
        </div>
        <div class="input-field col s12 l7">
            <input type="text" class="validate" name="state" :value="shippingAddress.state" required />
            <label for="state">State/Province/Region*</label>
            <span class="helper-text" data-error="Required field"></span>
        </div>
        <div class="input-field col s12 l5">
            <input type="text" class="validate" name="zip-code" :value="shippingAddress.zipcode" maxlength="5" pattern="[0-9]{5}" required />
            <label for="zip-code">Zip Code*</label>
            <span class="helper-text" data-error="Should be a valid zip code"></span>
        </div>
        <div class="input-field col s12 l12">
            <input type="text" class="validate" name="address-line-1" :value="shippingAddress.address1" required />
            <label for="address-line-1">Address Line 1*</label>
            <span class="helper-text" data-error="Required field"></span>
        </div>
        <div class="input-field col s12 l12">
            <input type="text" class="validate" name="address-line-2" :value="shippingAddress.address2" />
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
