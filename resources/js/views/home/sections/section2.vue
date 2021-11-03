<template>
    <div>
        <section id="section2" class="about">
            <div class="container center-section">
                <div class="row">
                    <div class="col-lg-7 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <img class="img-gif" :src="$store.state.section.section_one_gif_en" width="600" style="margin-left: -40px">
                        <p class="paragraph" style="margin-top: -90px;font-size: 22px">
                           {{$store.state.section.section_one_description_en}}
                        </p>
                    </div>
                    <div class="col-lg-5" data-aos="fade-right">
                        <div class="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="5000">
                                    <img :src="$store.state.section.section_one_image1" class="d-block w-100">
                                </div>
                                <div class="carousel-item" data-bs-interval="5000">
                                    <img :src="$store.state.section.section_one_image2" class="d-block w-100">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>

</style>
