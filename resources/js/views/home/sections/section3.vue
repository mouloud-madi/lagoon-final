<template>
    <div id="section3">
        <div class="container">
            <div class="row" :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'">
                <div class="col-lg-6" :data-aos="$store.state.lang === 'en' ? 'fade-left' : 'fade-right'">
                    <img :src="$store.state.lang === 'en' ? $store.state.section.section_two_gif_en : $store.state.section.section_two_gif_ar " class="gif">
                    <p class="p-section">
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
    color: #b99658;
}

#section3 {
    min-height: 100vh;
}

.p-section {
    font-size: 30px;
}

.gif {
    width: 500px;
    margin-left: -32px;
    margin-bottom: -70px;
}

.image {
    margin-top: 150px;
}

@media only screen and (max-width: 600px) {
    #section3 {
        min-height: 0 !important;
    }

    .p-section {
        font-size: 19px;
    }

    .gif {
        width: 250px;
        margin-left: -10px;
        margin-bottom: -28px;
        margin-top: -20px;
    }

    .image {
        margin-top: 0;
    }
}
</style>
