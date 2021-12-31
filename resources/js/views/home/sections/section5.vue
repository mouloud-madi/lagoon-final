<template>
    <div id="section5">
        <div class="container-fluid" style="margin-top: 0">
            <div class="row">
                <div class="col-md-6" :data-aos="$store.state.lang === 'en' ? 'fade-left' : 'fade-right'">
                   <div class="about-content">
                       <h2 :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'"
                           :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''"
                       >
                           {{ $store.state.lang === 'en' ? $store.state.section.section_four_title_en :$store.state.section.section_four_title_ar  }}
                       </h2>
                       <p class="p-section" :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'">
                           {{ $store.state.lang === 'en' ? $store.state.section.section_four_description_en :$store.state.section.section_four_description_ar  }}
                       </p>
                       <div v-if="$store.state.lang ==='ar'"  style="float:right">
                           <router-link to="/about-us">
                                 اقرأ أكثر <i class="bi bi-arrow-right"></i>
                           </router-link>
                       </div>
                       <div v-else>
                           <router-link to="/about-us">
                              Read more    <i class="bi bi-arrow-right"></i>
                           </router-link>
                       </div>
                   </div>
                </div>
                <div class="col-md-6" :data-aos="$store.state.lang === 'en' ? 'fade-up' : 'fade-up'" data-aos-delay="100">
                    <iframe class="vedio" :src="'https://www.youtube.com/embed/'+$store.state.section.section_four_vedio"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
a {
    color: #808285;
}
a:hover {
    color: #B3965A;
}
.p-section {
    color: #B3965A;
    font-size: 22px;
}
#section5 {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin-top: 0;
}
.vedio{
    height: 100vh;
    width: 100%;
    margin-right: -400px;
    margin-top: -25px;
}
.about-content{
    margin-top: 200px;
    margin-left: 50px;
}
@media only screen and (max-width: 600px) {
    #section5 {
        min-height: 0;
        margin-top: 20px;
    }
    .vedio{
        height: 100%;
        width: 100% ;
        margin-bottom: 40px;
    }
    .p-section {
        font-size: 19px;
    }
    .about-content{
        margin-top: 20px !important;
        margin-left: 5px !important;
    }
}
</style>
