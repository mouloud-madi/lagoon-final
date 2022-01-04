<template>
    <div>
        <div style="background: rgba(0, 0, 0, 0.01);margin-top: 100px">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 my-3"  :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'">
                        <img class="mb-4" :src="app_url+'/images/logo.png'" width="100" data-aos="fade-up">
                        <p data-aos="fade-up" data-aos-delay="200"
                           :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'"
                           :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''">
                            {{
                                $store.state.lang === 'ar' ? 'لاجون ديزاين هو استديو تصميم داخلي رفيع المستوى يعمل في قطر، وهو مختص في الحلول المبتكرة والجودة وفعالية الأداء.' : 'Lagoon Design is a premium interior design studio in Qatar specialized in quality,innovative solutions and efficient performance.'
                            }}
                        </p>
                    </div>
                    <div class="col-md-3 my-5 ft"  :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'">
                        <h5 :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''"
                            data-aos="fade-up">{{ $store.state.lang === 'ar' ? 'التنقل' : 'Navigation' }}</h5>
                        <router-link :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''"
                                     data-aos="fade-up" data-aos-delay="200" to="/">
                            {{ $store.state.lang === 'ar' ? 'الصفحة الرئيسية' : 'Home' }}
                        </router-link>
                        <br>
                        <router-link :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''"
                                     data-aos="fade-up" data-aos-delay="300" to="/about-us">
                            {{ $store.state.lang === 'ar' ? 'عن لاجون ديزاين' : 'About Us' }}
                        </router-link>
                        <br>
                        <router-link :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''"
                                     data-aos="fade-up" data-aos-delay="400" to="/our-services">
                            {{ $store.state.lang === 'ar' ? 'خدماتنا' : 'Our Services' }}
                        </router-link>
                        <br>
                        <router-link :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''"
                                     data-aos="fade-up" data-aos-delay="500" to="/gallery">
                            {{ $store.state.lang === 'ar' ? 'معرض الصور' : 'Gallery' }}
                        </router-link>
                        <br>
                        <router-link :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''"
                                     data-aos="fade-up" data-aos-delay="600" to="/contact-us">
                            {{ $store.state.lang === 'ar' ? 'تواصل معنا' : 'Contact Us' }}
                        </router-link>
                        <br>
                    </div>
                    <div class="col-md-3 my-5"  :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'">
                        <h5 data-aos="fade-up"
                            :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''">
                            {{ $store.state.lang === 'ar' ? 'تواصل معنا' : 'Contact Us' }}
                        </h5>
                        <span data-aos="fade-up" data-aos-delay="200"><i
                            class="bi bi-telephone"></i>  {{ this.$store.state.siteInfo.phone1 }}</span> <br>
                        <span v-if="this.$store.state.siteInfo.phone2" data-aos="fade-up" data-aos-delay="300"> <i
                            class="bi bi-telephone"></i> {{ this.$store.state.siteInfo.phone2 }}</span> <br>
                        <span data-aos="fade-up" data-aos-delay="400"> <i
                            class="bi bi-envelope"></i>  {{ this.$store.state.siteInfo.contact_email1 }}</span> <br>
                        <span v-if="this.$store.state.siteInfo.contact_email2" data-aos="fade-up"
                              data-aos-delay="500"><i
                            class="bi bi-envelope"></i>  {{ this.$store.state.siteInfo.contact_email2 }}</span> <br>
                    </div>
                    <div class="col-md-3 my-5"  :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'">
                        <h5 data-aos="fade-up"
                            :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''">
                            {{ $store.state.lang === 'ar' ? 'العنوان' : 'Address' }}
                        </h5>
                        <p data-aos="fade-up" data-aos-delay="100"
                           :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'"
                           :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''">
                            <i class="bi bi-pin-map"></i> {{
                                $store.state.lang === 'en' ? this.$store.state.siteInfo.address_en : this.$store.state.siteInfo.address_ar
                            }}
                        </p>
                        <div class="flex-column" data-aos="fade-up" data-aos-delay="200"  :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'">
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
                            <a class="btn btn-link" v-if="whatsapp" :href="'https://wa.me/'+whatsapp"  target="_blank">
                                <i class="bi bi-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" style="background: rgba(0, 0, 0, 0.01)">
            <div class="row justify-content-center">
                <div class="col-12 p-3 text-center"
                     :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''">
                    {{$store.state.lang === 'ar' ? '© حقوق الطبع والنشر 2021 - جميع الحقوق محفوظة ' : ' © Copyright 2021 - All Rights Reserved'}}
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
            whatsapp: this.$store.state.siteInfo.whatsapp,
            app_url: process.env.MIX_APP_URL
        }
    },
}
</script>

<style scoped>
.btn-link {
    color: #B3965A;
}

a:hover {
    color: #b17c1f;
}
h5{
    font-size: 1.4rem;
}
a {
    color: #808285;
}
.ft {
    padding-left: 80px;
}
@media only screen and (max-width: 600px) {
    .ft {
        padding-left: 13px;
    }
}
</style>
