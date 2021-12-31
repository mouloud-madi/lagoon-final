<template>
    <div id="section3">
        <div class="container">
            <div class="row content-center" :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'">
                <div class="col-lg-6" :data-aos="$store.state.lang === 'en' ? 'fade-left' : 'fade-right'">
                    <h4 v-if="$store.state.lang === 'ar'" :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'"
                        :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''">
                        معاييرنا العالية
                    </h4>
                    <img v-else :src="$store.state.lang === 'en' ? $store.state.section.section_two_gif_en : $store.state.section.section_two_gif_ar " class="gif">
                    <p class="mt-3">
                        {{ $store.state.lang ==='ar' ? $store.state.section.section_two_description_ar : $store.state.section.section_two_description_en }}
                    </p>
                    <span class="text--primary">●</span> {{$store.state.lang === 'en' ? 'Interior designing, styling and decorating' : 'التصميم الداخلي والتزيين وإعداد الديكور'}}<br>
                    <span class="text--primary">●</span> {{$store.state.lang === 'en' ? 'Outdoor space design' : 'تصميم المساحات الخارجية'}}  <br>
                    <span class="text--primary">●</span> {{$store.state.lang === 'en' ? 'Fit-out' : 'الفيت أوت'}}  <br>
                    <span class="text--primary">●</span> {{$store.state.lang === 'en' ? 'Material suppliers from many firms ' : 'عدد كبير من مزودي المواد'}}  <br>
                </div>
                <div class="col-lg-6" :data-aos="$store.state.lang === 'en' ? 'fade-right' : 'fade-left'">
                    <img :src="$store.state.section.section_two_image" width="100%" class="image">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.text--primary {
    color: #B3965A;
}
h4{
    font-size: 1.4rem;
    color: #B3965A;
}
#section3 {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
.content-center{
    display: flex;
    justify-content: center;
    align-items: center;
}
.gif {
    width: 450px;
}
@media only screen and (max-width: 600px) {
    #section3 {
        min-height: 0 !important;
    }
    .gif {
        width: 300px;
    }
}
</style>
