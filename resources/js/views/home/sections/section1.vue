<template>
    <div>
        <section id="section1" style="padding: 0">
            <div class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div v-for="(slider,i) in sliders" class="carousel-item" :class="i=== 0 ? 'active' : '' ">
                        <img :src="slider.image_url" class="d-block w-100">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sliders: []
        }
    },
    methods: {
        getSliders() {
            axios.get('slider').then(res => {
                this.sliders = res.data
            }).catch(err => {
                console.log(err)
            })
        }
    },
    created() {
        this.getSliders()
    }
}
</script>

<style scoped>

</style>
