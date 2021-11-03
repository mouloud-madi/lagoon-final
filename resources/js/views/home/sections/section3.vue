<template>
    <div>
        <section class="about">
            <div class="container">
                <div class="row" id="section3">
                    <div class="col-lg-6" data-aos="fade-left">
                        <img class="img-gif img-gif-2" src="images/lagoon_2.gif" width="600" style="margin-left: -45px;margin-top: -100px">
                        <p class="paragraph paragraph-section3" style="margin-top: -70px;font-size: 22px">
                            {{$store.state.section.section_two_description_en}}
                        </p>
                            <span class="text--primary">●</span> Interior designing, styling and decorating <br>
                        <span class="text--primary">●</span> Outdoor space design <br>
                        <span class="text--primary">●</span> Exterior designing and detailing <br>
                        <span class="text--primary">●</span> Fitout projects <br>
                        <span class="text--primary">●</span> Material suppliers from many reputed firms <br>
                    </div>
                    <div class="col-lg-6" data-aos="fade-right">
                        <img src="images/history.png" class="img-fluid img-about" alt="" width="100%" style="margin-top: 100px">
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
.text--primary {
    color: #b99658;
}
</style>
