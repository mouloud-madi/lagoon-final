<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-6 p-3">
                    © Copyright 2021 - All Rights Reserved
                </div>
                <div class="col-6 p-3" align="right">
                    <div class="flex-column">
                        <a class="btn btn-link" v-if="facebook" :href="facebook" target="_blank">
                            <i class="bi bi-facebook"></i>
                        </a>
                        <a class="btn btn-link" v-if="instagram" :href="instagram" target="_blank">
                            <i class="bi bi-instagram"></i>
                        </a>
                        <a class="btn btn-link" v-if="linkedin" :href="linkedin" target="_blank">
                            <i class="bi bi-linkedin"></i>
                        </a>
                        <a class="btn btn-link" v-if="youtube" :href="youtube" target="_blank">
                            <i class="bi bi-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            youtube: this.$store.state.siteInfo.youtube,
            facebook: this.$store.state.siteInfo.facebook,
            instagram: this.$store.state.siteInfo.instagram,
            linkedin: this.$store.state.siteInfo.linkedin,
        }
    },
}
</script>

<style scoped>
.btn-link {
    background-color: #f3f3f3;
    color: #b99658;
}
</style>
