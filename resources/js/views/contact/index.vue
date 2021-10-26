<template>
    <div>
        <navbar/>
        <div class="portfolio section-bg" style="min-height: 100vh;">
            <div class="container">
                <br><br><br><br>
                <div class="section-title text-center">
                    <h2>Contact Us</h2>
                </div>
                <div class="row">
                    <div class="col-md-4  mb-3 text-center">
                        <div class="card h-100" data-aos="fade-up" data-aos-delay="100">
                            <div class="card-title my-4" style="font-size: 25px">
                                <i class="bi bi-pin-map" style="font-size: 25px;color: #b99658;"></i> Address
                            </div>
                            <div class="card-text">
                                {{ address_en }}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 text-center">
                        <div class="card h-100" data-aos="fade-up" data-aos-delay="100">
                            <div class="card-title my-4" style="font-size: 25px">
                                <i class="bi bi-telephone-outbound" style="font-size: 25px;color: #b99658;"></i> Get in
                                Touch
                                with Us
                            </div>
                            <div class="card-text">
                                <p v-if="phone1">{{ phone1 }}</p>
                                <p v-if="phone2">{{ phone2 }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 text-center">
                        <div class="card h-100" data-aos="fade-up" data-aos-delay="100">
                            <div class="card-title my-4" style="font-size: 25px">
                                <i class="bi bi-envelope" style="font-size: 25px;color: #b99658;"></i> Email
                            </div>
                            <div class="card-text">
                                <p v-if="contact_email1">{{ contact_email1 }}</p>
                                <p v-if="contact_email2">{{ contact_email2 }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-6 mb-3" data-aos="fade-up" data-aos-delay="600">
                        <div class="card h-100">
                            <div class="card-body">
                                <p style="font-size: 25px"> Leave a Message</p>
                                <div v-if="successMessages" class="alert alert-success fade show" role="alert">
                                    <strong>Thank you!</strong> your message was successfully sent.
                                </div>
                                <form @submit.prevent="sendMail">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="text" v-model="form.name"
                                                       :class="errMessages && errMessages.name ? 'is-invalid' : ''"
                                                       class="form-control form-control-lg"
                                                       placeholder="Name *">
                                                <div class="invalid-feedback">
                                                    <i class="fa fa-info-circle"></i>
                                                    {{ errMessages && errMessages.name ? errMessages.name[0] : '' }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="email" v-model="form.email"
                                                       :class="errMessages && errMessages.email ? 'is-invalid' : ''"
                                                       class="form-control form-control-lg"
                                                       placeholder="Email *">
                                                <div class="invalid-feedback">
                                                    <i class="fa fa-info-circle"></i>
                                                    {{ errMessages && errMessages.email ? errMessages.email[0] : '' }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12 mt-3">
                                            <div class="form-group">
                                            <textarea v-model="form.message"
                                                      :class="errMessages && errMessages.message ? 'is-invalid' : ''"
                                                      class="form-control form-control-lg"
                                                      placeholder="Your Message..."
                                                      rows="5"></textarea>
                                                <div class="invalid-feedback">
                                                    <i class="fa fa-info-circle"></i>
                                                    {{errMessages && errMessages.message ? errMessages.message[0] : ''}}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button :disabled="btnLoading" type="submit"
                                                    class="btn btn-primary btn-lg float-end mt-3">
                                                Send <i v-if="!btnLoading" class="bi bi-arrow-right"></i><span v-else>...</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3" data-aos="fade-up" data-aos-delay="900">
                        <div class="card h-100" data-aos="fade-up" data-aos-delay="100">
                            <div class="card-body">
                                <GmapMap :center="{
                                     lat:markers[0].position.lat,
                                     lng:markers[0].position.lng
                                }"
                                         :zoom="7"
                                         style="width: 100%; height: 100%">
                                    <GmapMarker
                                        :key="index"
                                        v-for="(m, index) in markers"
                                        :position="m.position"
                                        :clickable="true"
                                        :draggable="true"
                                        @click="center=m.position"
                                    />
                                </GmapMap>
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
            phone1: this.$store.state.siteInfo.phone1,
            phone2: this.$store.state.siteInfo.phone2,
            address_en: this.$store.state.siteInfo.address_en,
            contact_email1: this.$store.state.siteInfo.contact_email1,
            contact_email2: this.$store.state.siteInfo.contact_email2,
            errMessages: [],
            successMessages: false,
            btnLoading: false,
            form: {},
            markers: [{
                position: {
                    lat: parseFloat(this.$store.state.siteInfo.latitude),
                    lng: parseFloat(this.$store.state.siteInfo.longitude)
                }
            }]
        }
    },
    methods: {
        sendMail() {
            this.successMessages = false
            this.btnLoading = true
            axios.post('/contact', this.form).then(res => {
                this.successMessages = true
                this.btnLoading = false
                this.errMessages = false
            }).catch(err => {
                this.successMessages = false
                this.btnLoading = false
                this.errMessages = err.response.data.errors
            })
        }
    },
}
</script>

<style scoped>
.section-title h2 {
    color: #0d0d0e;
}

.section-title h2::after {
    left: 48%;
}

.card {
    border: 1px solid rgba(67, 62, 62, 0.06);
}

.card-text {
    color: #4f5050;
}

.btn-primary {
    background: #b99658;
    border: none;
}

.btn-primary:hover {
    background: #bc9f6c;
    border: none;
}
</style>
