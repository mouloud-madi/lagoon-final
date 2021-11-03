<template>
    <div>
        <section class="about" style="padding: 5px 0;">
            <div class="container">
                <div id="section4" class="row">
                    <div class="col-lg-12 pt-lg-0" data-aos="fade-left">
                        <p style="font-size: 22px">{{$store.state.section.section_three_title_en}} </p>
                        <p style="color:#b99658;margin-top: -20px;max-width: 600px">
                           {{$store.state.section.section_three_description_en}}
                        </p>
                    </div>
                    <div class="col-lg-8" data-aos="fade-right">
                        <img src="images/ABOUT.jpg" class="img-fluid" alt="">
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
