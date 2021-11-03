<template>
    <div>
        <section style="padding: 5px 0;">
            <div class="container">
                <div class="row" id="section5">
                    <div class="col-md-6" data-aos="fade-left">
                        <h2 class="section-5">{{ $store.state.section.section_four_title_en }}</h2>
                        <p style="color: rgb(185, 150, 88);font-size: 20px">{{ $store.state.section.section_four_description_en }}</p>
                        <router-link style="margin-top: -100px" to="/about-us"> Read more <i
                            class="bi bi-arrow-right"></i></router-link>
                    </div>
                    <div class="col-md-6" data-aos="fade-right" data-aos-delay="100">
                        <video class="vedio" controls width="600" height="500">
                            <source src="site/vedios/vedio.mp4" type="video/mp4">
                        </video>
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
a {
    color: #272829;
}

a:hover {
    color: rgb(185, 150, 88);
}
</style>
