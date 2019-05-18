<template>
    <form id="personal-info row">
        <div class="input-field col s12 l5">
            <input type="text" name="first-name" :value="personalInfo.firstName" required />
            <label for="first-name">First Name</label>
        </div>
        <div class="input-field col s12 l7">
            <input type="text" name="last-name" :value="personalInfo.lastName" required />
            <label for="last-name">Last Name</label>
        </div>
        <div class="input-field col s12 l7">
            <input type="email" name="email" :value="personalInfo.email" required />
            <label for="email">Email</label>
        </div>
        <div class="input-field col s12 l5">
            <input type="tel" name="phone" :value="personalInfo.phone" required />
            <label for="phone">Phone Number</label>
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
