<template>
    <div>
        <navbar class="mobile-navbar" style="display: none"/>
        <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow"
             style="z-index: 9998;display: none; transition: all 5s ease-in;">
            <div class="container-fluid">
                <a class="navbar-brand" href="javascript:void(0)" @click="hideNavbar()">
                    <i class="bi bi-x-lg" style="color: #b99658;margin-right: 23px;margin-left: 23px"></i>
                    <img src="images/logo.png" width="100">
                </a>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                    <span>
               <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
            </span>
                </div>
            </div>
        </nav>
        <header id="header" class="shadow">
            <div class="d-flex flex-column">
                <div class="profile mt-4">
                    <a href="javascript:void(0)" @click="showNavbar()">
                        <i class="bi bi-text-paragraph" style="font-size: 28px;padding: 14px;color: #fff"></i>
                    </a>
                </div>
                <nav id="navbar" class="nav-menu navbar" style="margin-top: 140px">
                    <ul>
                        <scrollactive class="my-nav">
                            <a v-for="link in links" :href="link.to" class="scrollactive-item nav-link">
                                <i class="bx bi-circle-fill"></i>
                            </a>
                        </scrollactive>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
</template>
<script>
import Navbar from "../components/navbar";

export default {
    components: {Navbar},
    data() {
        return {
            links: [
                {
                    active: true,
                    to: '#section1',
                },
                {
                    active: false,
                    to: '#section2',
                },
                {
                    active: false,
                    to: '#section3',
                },
                {
                    active: false,
                    to: '#section4',
                },
            ],
            app_url: process.env.MIX_APP_URL
        }
    },
    methods: {
        hideNavbar() {
            document.getElementById('nav').style.display = 'none'
        },
        showNavbar() {
            document.getElementById('nav').style.display = 'block'
        },
    },
}
</script>

<style scoped>
.scrollactive-item.nav-link.is-active i {
    color: #b99658;
    font-size: 20px;
}

.scrollactive-item.nav-link i:hover {
    color: #b99658;
    font-size: 20px;
}

@media only screen and (max-width: 600px) {
    .mobile-navbar {
        display: block !important;
        margin-bottom: 85px !important;
    }
}

.scrollactive-item.nav-link i {
    color: #fff;
    font-size: 20px;
}
</style>
