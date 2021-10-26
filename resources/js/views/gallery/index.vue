<template>
    <div>
        <navbar/>
        <div class="portfolio section-bg" style="min-height: 100vh;">
            <div class="container">
                <div class="section-title text-center">
                    <br><br><br><br>
                    <h2>Gallery</h2>
                </div>
                <div class="row justify-content-center">
                    <div class="col-12 text-center">
                        <button class="btn" @click="filter('all')" :class="{selected: selectedCat === 'all'}">All
                        </button>
                        <button class="btn" v-for="category in categories" @click="filter(category.id)"
                                :class="{selected: selectedCat === category.id}">{{ category.name_en }}
                        </button>
                    </div>
                </div>
                <div class="row mt-5">
                    <a class="col-md-4 mb-4"  :href="image.image_url" data-fancybox="gallery" data-aos="fade-in"
                       v-if="selectedCat === image.category_id || selectedCat === 'all'"
                       v-for="image in images"
                       :class="'image ' + image.category_id">
                        <img :src="image.image_url" width="100%">
                    </a>
                </div>
            </div>
        </div>
        <app-footer/>
    </div>
</template>
<script>
import {Fancybox} from "@fancyapps/ui";
import Navbar from "../../components/navbar";
import AppFooter from "../../components/appFooter";
import "@fancyapps/ui/dist/fancybox.css";
import _ from "lodash";

export default {
    components: {AppFooter, Navbar},
    data() {
        return {
            images: [],
            categories: [],
            selectedCat: 'all',
        }
    },
    methods: {
        getImages() {
            axios.get('/gallery').then(res => {
                this.images = res.data
            }).catch(err => {
                console.log(err)
            })
        },
        getCategories() {
            axios.get('/category').then(res => {
                this.categories = res.data
            }).catch(err => {
                console.log(err)
            })
        },
        filter(selection) {
            this.selectedCat = selection;
        }
    },
    mounted() {
        this.images = _.shuffle(this.images);
        Fancybox
    },
    created() {
        this.getImages()
        this.getCategories()
    }
}
</script>

<style scoped>
.section-title h2 {
    color: #0d0d0e;
}

.section-title h2::after {
    left: 48%;
}

.btn.selected {
    background-color: #b99658;
    color: white;
}
</style>
