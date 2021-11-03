<template>
    <div>
        <div :style="$route.name === 'home' ? 'background: #f5f8fd' : ''">
            <div class="container">
                <div class="row">
                    <div class="text-center col-md-3 my-5">
                        <img :src="app_url+'/images/logo.png'" width="100" data-aos="fade-up">
                        <p data-aos="fade-up" data-aos-delay="200">
                            Lagoon Design is a premium interior design studio in Qatar specialized in quality,
                            innovative solutions and efficient performance.
                        </p>
                    </div>
                    <div class="text-center col-md-3 my-5">
                        <h4 data-aos="fade-up">Navigation</h4>
                        <router-link data-aos="fade-up" data-aos-delay="200" to="/">Home</router-link>
                        <br>
                        <router-link data-aos="fade-up" data-aos-delay="300" to="/about-us">About Us</router-link>
                        <br>
                        <router-link data-aos="fade-up" data-aos-delay="400" to="/our-services">Our Services</router-link>
                        <br>
                        <router-link data-aos="fade-up" data-aos-delay="500" to="/gallery">Gallery</router-link>
                        <br>
                        <router-link data-aos="fade-up" data-aos-delay="600" to="/contact-us">Contact Us</router-link>
                        <br>
                    </div>
                    <div class="text-center col-md-3 my-5">
                        <h4 data-aos="fade-up">Contact Us</h4>
                        <span data-aos="fade-up" data-aos-delay="200"><i class="bi bi-telephone"></i>  {{ this.$store.state.siteInfo.phone1 }}</span> <br>
                        <span v-if="this.$store.state.siteInfo.phone2" data-aos="fade-up" data-aos-delay="300"> <i class="bi bi-telephone"></i> {{ this.$store.state.siteInfo.phone2 }}</span> <br>
                        <span data-aos="fade-up" data-aos-delay="400"> <i class="bi bi-envelope"></i>  {{ this.$store.state.siteInfo.contact_email1 }}</span> <br>
                        <span v-if="this.$store.state.siteInfo.contact_email2"  data-aos="fade-up" data-aos-delay="500"><i class="bi bi-envelope"></i>  {{ this.$store.state.siteInfo.contact_email2 }}</span> <br>
                    </div>
                    <div class="text-center col-md-3 my-5">
                        <h4 data-aos="fade-up">Address</h4>
                        <p data-aos="fade-up" data-aos-delay="100">
                            <i class="bi bi-pin-map"></i> {{ this.$store.state.siteInfo.address_en }}
                        </p>
                        <div class="flex-column" data-aos="fade-up" data-aos-delay="200">
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
        <div :style="$route.name === 'home' ? 'background: #fff' : 'background: #f5f8fd'">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-6 p-3 text-center">
                        © Copyright 2021 - All Rights Reserved
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
            app_url: process.env.MIX_APP_URL
        }
    },
}
</script>

<style scoped>
.btn-link {
    background-color: #f3f3f3;
    color: #b99658;
}

a:hover {
    color: #b17c1f;
}

a {
    color: #272829;
}
</style>
