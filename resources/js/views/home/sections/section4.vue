<template>
    <div id="section4" class="my-4">
        <div class="container">
            <div class="row">
                <div class="col-lg-8" :data-aos="$store.state.lang === 'en' ? 'fade-left' : 'fade-right'">
                    <h4  :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'"
                       :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''">
                        {{ $store.state.lang === 'en' ? $store.state.section.section_three_title_en :$store.state.section.section_three_title_ar  }}
                    </h4>
                    <p  :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'"
                       :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''">
                        {{ $store.state.lang === 'en' ? $store.state.section.section_three_description_en :$store.state.section.section_three_description_ar }}
                    </p>
                </div>
                <div class="col-lg-8" :data-aos="$store.state.lang === 'en' ? 'fade-right' : 'fade-left'">
                    <img :src="$store.state.section.section_three_image" width="100%">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {}
</script>
<style scoped>
#section4 {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
h4 {
    font-size: 1.4rem;
    color: #B3965A;
}
@media only screen and (max-width: 600px) {
    #section4 {
        min-height: 0;
        margin-top: 20px;
    }
}
</style>
