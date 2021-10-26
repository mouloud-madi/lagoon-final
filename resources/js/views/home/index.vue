<template>
    <div>
        <div id="loader" class="loader"></div>
        <top/>
        <section1/>
        <main id="main">
            <section2/>
            <section3/>
            <section4/>
            <!--  <section5/>-->
        </main>
        <footer id="footer">
            <div class="container" style=" padding: 0 23px">
                <a href="#section4"><i class="bi bi-chevron-double-down"></i></a>
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

export default {
    components: {Top, Section5, Section4, Section3, Section2, Section1},
    mounted() {
        setTimeout(function () {
            document.getElementById('loader').style.display = 'none'
        }, 2500);
    }
}
</script>

<style scoped>

</style>
