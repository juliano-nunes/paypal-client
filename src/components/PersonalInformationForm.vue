<template>
    <form id="personal-info row">
        <div class="input-field col s12 l5">
            <input type="text" class="validate" minlength="5" name="first-name" :value="personalInfo.firstName" required />
            <label for="first-name">First Name*</label>
            <span class="helper-text" data-error="Required field"></span>
        </div>
        <div class="input-field col s12 l7">
            <input type="text" class="validate" minlength="5" name="last-name" :value="personalInfo.lastName" required />
            <label for="last-name">Last Name*</label>
            <span class="helper-text" data-error="Required field"></span>
        </div>
        <div class="input-field col s12 l7">
            <input type="email" class="validate" name="email" :value="personalInfo.email" required />
            <label for="email">Email*</label>
            <span class="helper-text" data-error="Should be a valid email"></span>
        </div>
        <div class="input-field col s12 l5">
            <input type="tel" class="validate" name="phone" :value="personalInfo.phone" required />
            <label for="phone">Phone Number*</label>
            <span class="helper-text" data-error="Should be a valid phone number"></span>
        </div>
    </form>
</template>
<script>

export default {
    name: "PersonalInformationForm",
    props: {
        personalInfo: {
            type: Object
        }
    }
}
</script>
