<template>
    <div>
        <div id="section1">
            <div class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div v-for="(slider,i) in sliders" class="carousel-item" :class="i=== 0 ? 'active' : '' ">
                        <img :src="slider.image_url" class="d-block w-100">
                    </div>
                </div>
            </div>
        </div>
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
#section1 {
    height: 100vh;
}

.d-block {
    height: 100vh;
}

@media only screen and (max-width: 600px) {
    .d-block {
        height: 100% !important;
    }
    #section1 {
        height: 100% !important;
    }
}
</style>
