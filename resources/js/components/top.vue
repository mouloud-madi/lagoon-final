<template>
    <div>
        <navbar class="mobile-navbar" style="display: none"/>
        <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow"
             :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'"
             :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''"
             style="z-index: 9998;display: block; transition: all 5s ease-in;">
            <div class="container-fluid">
                <a class="navbar-brand" href="javascript:void(0)" @click="hideNavbar()">
                    <i class="bi bi-text-paragraph" style="color: #b99658;margin-right: 23px;margin-left: 23px"></i>
                    <img src="images/logo.png" width="100">
                </a>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                    <span>
               <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                           <li class="nav-item">
                                <router-link class="nav-link" :class="$route.name ==='home' ? 'active' : '' " to="/">
                                    {{ $store.state.lang === 'ar' ? 'الصفحة الرئيسية' : 'Home' }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :class="$route.name ==='about-us' ? 'active' : '' "
                                             to="/about-us">
                                    {{ $store.state.lang === 'ar' ? 'عن لاجون ديزاين' : 'About Us' }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/our-services"
                                             :class="$route.name ==='our-services' ? 'active' : '' ">
                                    {{ $store.state.lang === 'ar' ? 'خدماتنا' : 'Our Services' }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/gallery"
                                             :class="$route.name ==='gallery' ? 'active' : '' ">
                                    {{ $store.state.lang === 'ar' ? 'معرض الصور' : 'Gallery' }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/contact-us"
                                             :class="$route.name ==='contact-us' ? 'active' : '' ">
                                    {{ $store.state.lang === 'ar' ? 'تواصل معنا' : 'Contact Us' }}
                                </router-link>
                            </li>
                       <li class="nav-item">
                           <span class="nav-link"></span>
                       </li>
                      <li class="nav-item">
                       <a v-if="$store.state.lang ==='en'" class="nav-link" href="javascript:void(0)"
                          style="font-family: 'Tajawal', sans-serif;"
                          @click="[$store.dispatch('lang','ar'),changeUrl()]">
                                      العربية
                           <img class="flag" :src="app_url+'/images/Flag-Qatar.jpg'">
                                </a>
                                <a v-else class="nav-link" href="javascript:void(0)"
                                   @click="[$store.dispatch('lang','en'),changeUrl()]">
                                    English   <img class="flag" :src="app_url+'/images/flagen.jpg'">
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
                {
                    active: false,
                    to: '#section5',
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
        changeUrl() {
            window.history.replaceState(null, null, '?lang=' + this.$store.state.lang);
        }
    },
}
</script>

<style scoped>

#header {
    margin-top: 0;
    background: url(/images/sidebar.png) right
}

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
