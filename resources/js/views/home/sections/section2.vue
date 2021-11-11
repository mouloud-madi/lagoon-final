<template>
    <div id="section2" class="my-4">
        <div class="container">
            <div class="row" :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'">
                <div class="col-lg-7 pt-4" :data-aos="$store.state.lang === 'en' ? 'fade-left' : 'fade-right'">
                    <img :src="$store.state.lang === 'en' ? $store.state.section.section_one_gif_en : $store.state.section.section_one_gif_ar" class="gif">
                    <p class="p-section">
                        {{ $store.state.lang ==='ar' ? $store.state.section.section_one_description_ar : $store.state.section.section_one_description_en }}
                    </p>
                </div>
                <div class="col-lg-5" :data-aos="$store.state.lang === 'en' ? 'fade-right' : 'fade-left'">
                    <div class="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="5000">
                                <img :src="$store.state.section.section_one_image1" width="100%">
                            </div>
                            <div class="carousel-item" data-bs-interval="5000">
                                <img :src="$store.state.section.section_one_image2" width="100%">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
#section2 {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.p-section {
    font-size: 30px;
}

.gif {
    width: 500px;
    margin-left: -25px;
    margin-bottom: -70px;
}

@media only screen and (max-width: 600px) {
    #section2 {
        min-height: 0 !important;
    }
    .p-section {
        font-size: 19px;
    }
    .gif {
        width: 250px;
        margin-left: -10px;
        margin-bottom: -28px;
        margin-top: -48px;
    }
}
</style>
