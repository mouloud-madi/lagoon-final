<template>
    <div id="section2" class="my-4">
        <div class="container">
            <div class="row content-center" :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'">
                <div class="col-lg-6 pt-4" :data-aos="$store.state.lang === 'en' ? 'fade-left' : 'fade-right'">
                    <h4 v-if="$store.state.lang === 'ar'" :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'"
                        :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''">
                        الشغف والتفاني
                    </h4>
                    <img v-else :src="$store.state.lang === 'en' ? $store.state.section.section_one_gif_en : $store.state.section.section_one_gif_ar"
                        class="gif">
                    <p class="p-section mt-3">
                        {{
                            $store.state.lang === 'ar' ? $store.state.section.section_one_description_ar : $store.state.section.section_one_description_en
                        }}
                    </p>
                </div>
                <div class="col-lg-6" :data-aos="$store.state.lang === 'en' ? 'fade-right' : 'fade-left'">
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

.content-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.gif {
    width: 450px;
}

h4 {
    font-size: 1.4rem;
    color: #B3965A;
}

@media only screen and (max-width: 600px) {
    #section2 {
        min-height: 0 !important;
    }

    .gif {
        width: 300px;
    }
}
</style>
