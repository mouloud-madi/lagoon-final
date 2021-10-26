<template>
    <div>
        <navbar/>
        <div class="portfolio section-bg" style="min-height: 100vh;">
            <div class="container">
                <br><br><br><br>
                <div class="section-title text-center">
                    <h2>Our Services</h2>
                </div>
                <div class="row">
                    <div class="col-md-4 mb-4" v-for="service in  services">
                        <div class="card text-center h-100" data-aos="fade-up">
                            <div class="box-icon">
                                <div class="icon-service" v-html="service.icon"></div>
                            </div>
                            <div class="card-body">
                                <p style="font-size: 25px">{{ service.name_en }}</p>
                                <p class="card-text">{{ service.description_en }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <app-footer/>
    </div>
</template>
<script>
import Navbar from "../../components/navbar";
import AppFooter from "../../components/appFooter";

export default {
    components: {AppFooter, Navbar},
    data() {
        return {
            services: [],
        }
    },
    methods: {
        getServices() {
            axios.get('/service').then(res => {
                this.services = res.data
            }).catch(err => {
                console.log(err)
            })
        },
    },
    created() {
        this.getServices()
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

.icon-service {
    color: #fff;
    font-size: 25px;
    justify-content: center;
    align-items: center;
}

.box-icon {
    margin: 0 auto;
    margin-top: 30px;
    width: 100%;
    height: 80px;
    max-width: 80px;
    background: linear-gradient(90deg, #bc9e6fa6 0%, #b89d6d 40%, rgba(0, 0, 0, 0.28) 60%);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    transition: all 0.8s ease;
    background-position: 0px;
    background-size: 200px;
}

.card {
    border: 1px solid rgba(67, 62, 62, 0.06);
}

.card-text {
    color: #4f5050;
}
</style>
