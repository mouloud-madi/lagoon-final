<template>
    <div>
        <navbar/>
        <div class="portfolio bg-white" style="min-height: 100vh;">
            <div class="container">
                <br><br><br><br>
                <div class="section-title text-center">
                    <h2 :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''">
                        <span v-if="$store.state.lang === 'ar'">خدماتنا</span>
                        <img v-else src="/images/services.gif" width="300">
                    </h2>
                </div>
                <div class="row">
                    <div class="col-md-4 mb-4" v-for="service in  services">
                        <div class="card h-100" data-aos="fade-up">
                            <div class="card-body  my-3">
                                <div class="p-3">
                                    <p class="text-center" :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'"
                                       :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''" style="font-size: 1.4rem;color:#B3965A">
                                        {{ $store.state.lang === 'en' ?  service.name_en : service.name_ar }}
                                    </p>
                                    <p  :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'" :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''" class="card-text">
                                        {{ $store.state.lang === 'en' ?  service.description_en : service.description_ar }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <app-footer/>
    </div>
</template>
<script>
import Navbar from "../../components/navbar";
import AppFooter from "../../components/appFooter";

export default {
    components: {AppFooter, Navbar},
    data() {
        return {
            services: [],
        }
    },
    methods: {
        getServices() {
            axios.get('/service').then(res => {
                this.services = res.data
            }).catch(err => {
                console.log(err)
            })
        },
    },
    created() {
        window.history.replaceState(null, null, '?lang='+ this.$store.state.lang);
        this.getServices()
    }
}
</script>

<style scoped>
.section-title h2 {
    color: #0d0d0e;
}

.section-title h2::after {
    left: 48%;
}

.btn.selected {
    background-color: #B3965A;
    color: white;
}

.icon-service {
    color: #fff;
    font-size: 25px;
    justify-content: center;
    align-items: center;
}

.box-icon {
    margin: 0 auto;
    margin-top: 30px;
    width: 100%;
    height: 80px;
    max-width: 80px;
    background: linear-gradient(90deg, #bc9e6fa6 0%, #b89d6d 40%, rgba(0, 0, 0, 0.28) 60%);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    transition: all 0.8s ease;
    background-position: 0px;
    background-size: 200px;
}
.card {
    border: none;
    box-shadow: 0 2px 30px -1px hsla(31, 36.8%, 50.4%, 0.08),0 4px 30px 0 hsla(44.4, 61%, 83.9%, 0.35),0 1px 30px 0 hsla(0,0%,100%,0) !important;
}
.card-text {
    color: #808285;
}
</style>
