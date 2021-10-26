<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow">
            <div class="container-fluid">
                <a @click="goToHome" class="navbar-brand">
                    <img :src="app_url+'/images/logo.png'" width="100">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-4 mb-lg-0"></ul>
                    <div class="d-flex">
                        <ul class="navbar-nav me-auto mb-4 mb-lg-0">
                            <li class="nav-item">
                                <router-link class="nav-link" to="/">
                                    Home
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/about-us">
                                    About Us
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/our-services">
                                    Our Services
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/gallery">
                                    Gallery
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/contact-us">
                                    Contact Us
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link"></span>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                <img class="flag" :src="app_url+'/images/flagar.png'">
                                    AR
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            app_url: process.env.MIX_APP_URL
        }
    },
    methods: {
        goToHome() {
            this.$router.push({name: 'home'})
        }
    }
}
</script>
