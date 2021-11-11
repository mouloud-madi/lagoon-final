<template>
    <div>
        <navbar/>
        <div class="portfolio section-bg" style="min-height: 100vh;" :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'"
             :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''">
            <div class="container">
                <br><br><br><br>
                <div class="section-title text-center">
                    <h2 :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''">
                        {{ $store.state.lang === 'ar' ? 'عن لاجون ديزاين' : ' About Us' }}</h2>
                </div>
                <div class="row">
                    <div class="col-md-7">
                        <h2 :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''"
                            data-aos="fade-right" style="color:#b99658">
                            {{ $store.state.lang === 'ar' ? 'انعكاس لذاتك' : 'A REFLECTION OF YOU' }}
                        </h2>
                        <h5 :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''"
                            data-aos="fade-right" data-aos-delay="200">
                            {{
                                $store.state.lang === 'ar' ? 'تصاميم فريدة واستثنائية' : 'EXCEPTIONAL AND UNIQUE DESIGNS'
                            }}
                        </h5>
                        <p data-aos="fade-right" data-aos-delay="200">
                            {{ $store.state.lang === 'ar' ? 'لاجون ديزاين هو استديو تصميم داخلي رفيع المستوى في قطر، مختص في الحلول المبتكرة والجودة وفعالية الأداء.' : 'Lagoon Design is a premium interior design studio in Qatar specialized in quality,innovative solutions andefficient performance.' }}
                        <h2 :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''"
                            data-aos="fade-right" style="color:#b99658">
                            {{ $store.state.lang === 'ar' ? 'تاريخنا' : 'OUR HISTORY' }}</h2>
                        <p data-aos="fade-right">
                            {{
                                $store.state.lang === 'ar' ? 'تمكنا من بناء علاقات صلبة ووثيقة مع شركائنا، الذين يسرهم التأكيد على أن خدماتنا ستفوق احتياجاتك وتوقعاتك عند تسليم المشاريع، خاصة فيما يتعلق بالوقت والمهنية. ' : ' We have built solid, trustworthy relationships with our partners, who will be happy to reassure you thatwe will exceed your needs and expectations in delivering your project in a timely and professional manner.'
                            }}
                        </p>
                        <p data-aos="fade-right">
                            {{
                                $store.state.lang === 'ar' ? 'فخورون بأن نكون أحد الاستوديوهات الرائدة في دول مجلس التعاون الخليجي وذلك لالتزامنا بالمعايير العالمية للصناعة, تاريخنا يحتوي العديد من المشاريع في حقول التصميم المختلفة:' : ' We are proud to be one of the leading studios in the GCC, always committed to major international standards in the industry, Our history includes many complex projects, in many designing fields:'
                            }}

                        </p>
                        <div data-aos="fade-up" style="font-weight: bold">
                            <i style="color: #b99658" class="bi  bi-check2-circle"></i>
                            {{
                                $store.state.lang === 'ar' ? 'التصميم الداخلي والتزيين وإعداد الديكور' : 'Interior designing, styling and decorating'
                            }}
                            <br>
                            <i style="color: #b99658" class="bi  bi-check2-circle"></i>
                            {{ $store.state.lang === 'ar' ? 'تصميم المساحات الخارجية' : 'Outdoor space design' }}
                            <br>
                            <i style="color: #b99658" class="bi  bi-check2-circle"></i>
                            {{ $store.state.lang === 'ar' ? 'مشاريع "الفيت أوت" ' : 'Fitout projects' }}
                            <br>
                            <i style="color: #b99658" class="bi  bi-check2-circle"></i>
                            {{
                                $store.state.lang === 'ar' ? 'عدد كبير من مزودي المواد' : '  Material suppliers from many reputed firms'
                            }}
                        </div>
                        <br>
                        <br>
                    </div>
                    <div class="col-md-5">
                        <img :src="url+'/images/about/about1.jpg'" data-aos="fade-left" data-aos-delay="100"
                             width="100%">
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white">
            <div class="container">
                <div class="row my-5">
                    <div class="col-md-5">
                        <img :src="url+'/images/03.jpg'" style="width: 100%" data-aos="fade-right" data-aos-delay="100">
                    </div>
                    <div class="col-md-7" style="margin-top: 50px">
                        <h1 :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'"
                            :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''"
                            data-aos="fade-left" style="color:#b99658" data-aos-delay="100">
                            {{ $store.state.lang === 'ar' ? 'مهمتنا' : 'Mission' }}
                        </h1>
                        <p v-if="$store.state.lang ==='ar'" dir="rtl" style="font-family:'Tajawal', sans-serif;"
                           data-aos="fade-left" data-aos-delay="300">
                            مهمتنا هي تجاوز توقعات عملائنا ومنحهم تصاميم فخمة ومريحة فى ذات الوقت
                        </p>
                        <p v-else data-aos="fade-left" data-aos-delay="300">
                            Our mission is to go
                            beyond our clients <br> expectations and
                            deliver the most luxury yet cozy designs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-bg">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 my-5">
                        <h1 :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'"
                            :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''"
                            data-aos="fade-right" data-aos-delay="100" style="margin-top: 50px;color:#b99658">
                            {{ $store.state.lang === 'ar' ? 'رؤيتنا' : 'VISION' }}
                        </h1>
                        <p v-if="$store.state.lang ==='ar'" dir="rtl" style="font-family:'Tajawal', sans-serif;"
                           data-aos="fade-left" data-aos-delay="300">
                            رؤيتنا هي أن نصمم وننفذ بسلاسة واتقان بالجمع بين أفضل الخامات و أسلوبنا الفني المميز.
                        </p>
                        <p v-else data-aos="fade-left" data-aos-delay="300">
                            Our vision is to design
                            and execute with simplicity and
                            refinement combining the best materials with our own
                            style.
                        </p>
                    </div>
                    <div class="col-md-5 my-5">
                        <img :src="url+'/images/02.jpg'" style="width: 100%" data-aos="fade-left" data-aos-delay="100">
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white">
            <div class="container">
                <div class="row my-5">
                    <div class="col-md-6 mb-4">
                        <h4 :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''"
                            :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'"
                            data-aos="fade-up" data-aos-delay="100" style="color:#b99658">
                            <i class="bi bi-exclude" style="color: #b99658"></i>
                             {{ $store.state.lang === 'ar' ? 'عملية التصميم' : 'Design progress' }}
                        </h4>
                        <p :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'" :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''"
                           data-aos="fade-up" data-aos-delay="100">
                            {{ $store.state.lang === 'ar' ? 'نستخدم أحدث تقنيات التخيل ثنائية وثلاثية الأبعاد، لتقريب الأفكار لعملائنا خلال المراحل المختلفة من تنفيذ المشروع.' : 'We use the latest 2D &amp; 3D imaging technology to demonstrate our ideas to clients throughout the progression of projects.' }}
                        </p>
                    </div>
                    <div class="col-md-6 mb-4">
                        <h4 :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''"
                            :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'"
                            data-aos="fade-up" data-aos-delay="100" style="color:#b99658">
                            <i class="bi bi-exclude" style="color: #b99658"></i>
                             {{ $store.state.lang === 'ar' ? 'تصاميم مخصصة' : 'Specialized design' }}
                        </h4>
                        <p :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'"
                           :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''"
                           data-aos="fade-up" data-aos-delay="100">
                            {{ $store.state.lang === 'ar' ? 'كواحد من أنجح الاستديوهات المتخصصة في التصميم الداخلي، نضع الإبداع والتطوير نصب أعيننا في كل ما نقوم به.' : 'As one of the most specialized top interior design studios, creativity and development are both at the forefront of what we do.' }}
                        </p>
                    </div>
                    <div class="col-md-6 mb-4">
                        <h4 :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''"
                            :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'"
                            data-aos="fade-up" style="color:#b99658" data-aos-delay="100">
                            <i class="bi bi-exclude" style="color: #b99658"></i>
                             {{ $store.state.lang === 'ar' ? 'ذوق فريد من نوعه' : 'Unique sense of taste ' }}
                        </h4>
                        <p style="font-family:'Tajawal', sans-serif;"
                            v-if="$store.state.lang ==='ar'" dir="rtl" data-aos="fade-up" data-aos-delay="100">
                            ذوقنا يأتي من تاريخنا الطويل وخبرتنا في استخدام أدوات التصميم. حيث نستخدم الرسوم الأولية للتعبير عن فهمنا لأفكار عملائنا وتخيلاتهم حين نجتمع بهم. <br>
                            أمر طبيعي أن يكون لديك منزل مؤقت، لكن بيت الأحلام يجب أن يكون مميزاً. وهذا تحديداً ما نريد أن نحققه لك..
                        </p>
                        <p v-else data-aos="fade-up" data-aos-delay="100">
                            Our taste comes from our long history and experience in the use of design tools.<br> We use
                            sketches
                            to demonstrate
                            our understanding of our clients’ thoughts and imagination during meetings. <br>
                            Having a house is normal, but having a home is something special. This is what we aim to
                            create for
                            you..
                        </p>
                    </div>
                    <div class="col-md-6 mb-4">
                        <h4 :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''"
                            :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'"
                            data-aos="fade-up" data-aos-delay="100" style="color:#b99658">
                            <i class="bi bi-exclude" style="color: #b99658"></i>
                            {{ $store.state.lang === 'ar' ? 'عن طريق التصميم و القرارات، التصورية نصنع القيمة لمشاريعنا' : 'With design &amp; conceptual decisions , we create value for our projects' }}
                        </h4>
                        <p v-if="$store.state.lang ==='ar'"
                           style="font-family: 'Tajawal', sans-serif"
                           dir="rtl" data-aos="fade-up" data-aos-delay="100">
                            كل شخص متفرد بذاته ويرى الأشياء بشكل مختلف، ونحن نعمل على فهم الذوق الخاص بكل عميل، حول الكيفية التي يريد أن يكون عليها منزله. <br>
                            هدفنا الأساسي هو أن نعكس رؤيتك على أرض الواقع، لهذا نهتم بكافة التفاصيل، مهما بلغت ضآلتها. ونعامل كل تفصيلة صغيرة باهتمام كبير، لنقدم لك تجربة متكاملة.
                        </p>
                        <p v-else data-aos="fade-up" data-aos-delay="100">
                            Everyone is unique and sees things differently, we work on understanding each client’s
                            unique sense
                            of how they want their home to be.<br>
                            Our main goal is to reflect your vision. That’s why we take care of every detail. No matter
                            how
                            small it is, we treat every detail with concern to make sure we create a wholesome
                            experience for
                            you.
                        </p>
                    </div>
                    <div class="col-md-6 mb-4">
                        <h4 :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''"
                            :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'"
                            data-aos="fade-up" data-aos-delay="100" style="color:#b99658">
                            <i class="bi bi-exclude" style="color: #b99658"></i>
                            {{ $store.state.lang === 'ar' ? 'عن طريق التصميم و القرارات، التصورية نصنع القيمة لمشاريعنا' : 'It’s all about Subtle, Discreet, Hidden details.' }}
                        </h4>
                        <p v-if="$store.state.lang ==='ar'" dir="rtl" data-aos="fade-up"
                           style="font-family: 'Tajawal', sans-serif"
                           data-aos-delay="100">
                            جمالية المظهر هي الأساس. مزيج متوازن ومحسوب بين الشكل والوظيفة، يخدم هدفاً محدداً وينتج عنه مخرجاً نهائياً يتسم بالحداثة والفرادة وجمالية الأسلوب
                        </p>
                        <p v-else data-aos="fade-up" data-aos-delay="100">
                            It’s all about what looks good. A calculated and balanced blend of form and function that
                            serves a
                            specific purpose and ultimately results in a final outcome that is modern, stylish and
                            unique.
                        </p>
                    </div>
                    <div class="col-md-6 mb-4">
                        <h4 :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''"
                            :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'"
                            data-aos="fade-up" style="color:#b99658" data-aos-delay="100">
                            <i class="bi bi-exclude" style="color: #b99658"></i>
                              {{ $store.state.lang === 'ar' ? 'فريق محترف' : 'Professional team' }}
                        </h4>
                        <p :dir="$store.state.lang === 'en' ? 'ltr' : 'rtl'"
                           :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''"
                           data-aos="fade-up" data-aos-delay="100">
                            {{ $store.state.lang === 'ar' ? 'جمعنا فريقاً من المحترفين في المجال، يمكنهم دائماً ابتكار التصاميم التي تلبي طموحاتك.' : 'We gathered a team of professionals in the field who can provide you with the design of your dreams.' }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-bg">
            <div class="container">
                <div class="row no-gutters justify-content-center">
                    <div class="col-lg-4 my-5 col-md-6 d-md-flex justify-content-center" data-aos="fade-up"
                         data-aos-delay="100">
                        <div class="text-center">
                            <i class="bi bi-journal-richtext" style="font-size: 44px;color: #b99658;"></i>
                            <span class="purecounter my-2"
                                  style="font-size: 48px;line-height: 40px;display: block;font-weight: 700;">{{
                                    projects
                                }} +</span>
                            <p :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''"><strong>{{ $store.state.lang === 'ar' ? 'مشروع مكتمل' : 'Completed Projects' }}</strong></p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 my-5 d-md-flex justify-content-center" data-aos="fade-up">
                        <div class="text-center">
                            <i class="bi bi-emoji-smile" style="font-size: 44px;color: #b99658;"></i>
                            <span class="purecounter my-2"
                                  style="font-size: 48px;line-height: 40px;display: block;font-weight: 700;">{{
                                    clients
                                }} +</span>
                            <p :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''"><strong>{{ $store.state.lang === 'ar' ? 'عملاء سعداء' : 'Happy Clients' }} </strong></p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 my-5 d-md-flex justify-content-center" data-aos="fade-up"
                         data-aos-delay="200">
                        <div class="text-center">
                            <i class="bi bi-journal-richtext" style="font-size: 44px;color: #b99658;"></i>
                            <span class="purecounter my-2"
                                  style="font-size: 48px;line-height: 40px;display: block;font-weight: 700;">{{
                                    projects_in_progress
                                }} +</span>
                            <p :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''"><strong>{{ $store.state.lang === 'ar' ? 'مشاريع قيد الإنجاز' : 'Projects in Progress' }}</strong></p>
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
            url: process.env.MIX_APP_URL,
            clients: this.$store.state.siteInfo.clients,
            projects: this.$store.state.siteInfo.projects,
            projects_in_progress: this.$store.state.siteInfo.projects_in_progress,
        }
    },
    mounted() {
        window.history.replaceState(null, null, '?lang='+ this.$store.state.lang);
        window.scrollTo(0, 0);
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

.card {
    border: 1px solid rgba(67, 62, 62, 0.06);
}

.card-text {
    color: #4f5050;
}
</style>
