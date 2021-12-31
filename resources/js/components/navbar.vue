<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow"
             :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'"
             :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''">
            <div class="container">
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
                                </a>
                                <a v-else class="nav-link" href="javascript:void(0)"
                                   @click="[$store.dispatch('lang','en'),changeUrl()]">
                                    English
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
        },
        changeUrl() {
            window.history.replaceState(null, null, '?lang=' + this.$store.state.lang);
        }
    },
}
</script>
