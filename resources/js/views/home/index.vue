<template>
    <div :style="$store.state.lang === 'ar' ?'font-family: \'Tajawal\', sans-serif;' : ''">
        <div id="loader" class="loader"></div>
        <top/>
        <section1/>
        <main id="main">
            <section2/>
            <section3/>
            <section4/>
            <section5/>
            <app-footer/>
        </main>
        <footer id="footer">
            <div class="container" style=" padding: 0 23px">
                <a href="#section5"><i class="bi bi-chevron-double-down"></i></a>
<!--                <img src="/images/l.png">-->
            </div>
        </footer>
    </div>
</template>
<script>
import Section1 from "./sections/section1";
import Section2 from "./sections/section2";
import Section3 from "./sections/section3";
import Section4 from "./sections/section4";
import Section5 from "./sections/section5";
import Top from "../../components/top";
import AppFooter from "../../components/appFooter";

export default {
    components: {AppFooter, Top, Section5, Section4, Section3, Section2, Section1},
    mounted() {
        window.history.replaceState(null, null, '?lang='+ this.$store.state.lang);
        setTimeout(function () {
            document.getElementById('loader').style.display = 'none'
        }, 2500);
    }
}
</script>

<style scoped>

</style>
