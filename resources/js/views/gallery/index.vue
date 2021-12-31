<template>
    <div>
        <navbar/>
        <div class="portfolio bg-white" style="min-height: 100vh;">
            <div class="container">
                <div class="section-title text-center">
                    <br><br><br><br>
                    <h2 :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''">
                        <span v-if="$store.state.lang === 'ar'">معرض الصور</span>
                        <img v-else src="/images/gallery.gif" width="250">
                    </h2>
                </div>
                <div class="row justify-content-center" :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'">
                    <div class="col-12 text-center">
                        <button
                            :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''"
                            class="btn" @click="filter('all')" :class="{selected: selectedCat === 'all'}">
                            {{ $store.state.lang === 'ar' ? 'جميع الصور' : 'All' }}
                        </button>
                        <button
                            :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''"
                            class="btn" v-for="category in categories" @click="filter(category.id)"
                                :class="{selected: selectedCat === category.id}">
                            {{ $store.state.lang === 'en' ?  category.name_en : category.name_ar }}
                        </button>
                    </div>
                </div>
                <div class="row mt-5">
                    <a class="col-md-4 mb-4" :href="image.image_url" data-fancybox="gallery" data-aos="fade-in"
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
        window.history.replaceState(null, null, '?lang='+ this.$store.state.lang);
        window.scrollTo(0, 0);
        this.getImages()
        this.getCategories()
    }
}
</script>

<style scoped>
.section-title h2 {
    color: #808285;
}
.section-title h2::after {
    left: 48%;
}
.btn {
    color: #808285;
}
.btn.selected {
    background-color: #B3965A;
    color: white;
}
</style>
