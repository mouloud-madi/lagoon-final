"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[451],{6200:(t,a,s)=>{s.d(a,{Z:()=>e});var i=s(3645),n=s.n(i)()((function(t){return t[1]}));n.push([t.id,".btn-link[data-v-681d4c05]{background-color:#f3f3f3;color:#b99658}",""]);const e=n},1031:(t,a,s)=>{s.d(a,{Z:()=>e});var i=s(3645),n=s.n(i)()((function(t){return t[1]}));n.push([t.id,".section-title h2[data-v-7521d63b]{color:#0d0d0e}.section-title h2[data-v-7521d63b]:after{left:48%}.btn.selected[data-v-7521d63b]{background-color:#b99658;color:#fff}.icon-service[data-v-7521d63b]{font-size:25px}.box-icon[data-v-7521d63b],.icon-service[data-v-7521d63b]{align-items:center;color:#fff;justify-content:center}.box-icon[data-v-7521d63b]{background:linear-gradient(90deg,#bc9e6fa6,#b89d6d 40%,rgba(0,0,0,.28) 60%);background-position:0;background-size:200px;border-radius:100%;display:flex;height:80px;margin:30px auto 0;max-width:80px;transition:all .8s ease;width:100%}.card[data-v-7521d63b]{border:1px solid rgba(67,62,62,.06)}.card-text[data-v-7521d63b]{color:#4f5050}",""]);const e=n},3869:(t,a,s)=>{s.d(a,{Z:()=>o});const i={data:function(){return{youtube:this.$store.state.siteInfo.youtube,facebook:this.$store.state.siteInfo.facebook,instagram:this.$store.state.siteInfo.instagram,linkedin:this.$store.state.siteInfo.linkedin}}};var n=s(3379),e=s.n(n),r=s(6200),l={insert:"head",singleton:!1};e()(r.Z,l);r.Z.locals;const o=(0,s(1900).Z)(i,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6 p-3"},[t._v("\n                © Copyright 2021 - All Rights Reserved\n            ")]),t._v(" "),s("div",{staticClass:"col-6 p-3",attrs:{align:"right"}},[s("div",{staticClass:"flex-column"},[t.facebook?s("a",{staticClass:"btn btn-link",attrs:{href:t.facebook,target:"_blank"}},[s("i",{staticClass:"bi bi-facebook"})]):t._e(),t._v(" "),t.instagram?s("a",{staticClass:"btn btn-link",attrs:{href:t.instagram,target:"_blank"}},[s("i",{staticClass:"bi bi-instagram"})]):t._e(),t._v(" "),t.linkedin?s("a",{staticClass:"btn btn-link",attrs:{href:t.linkedin,target:"_blank"}},[s("i",{staticClass:"bi bi-linkedin"})]):t._e(),t._v(" "),t.youtube?s("a",{staticClass:"btn btn-link",attrs:{href:t.youtube,target:"_blank"}},[s("i",{staticClass:"bi bi-youtube"})]):t._e()])])])])])}),[],!1,null,"681d4c05",null).exports},4706:(t,a,s)=>{s.d(a,{Z:()=>n});const i={data:function(){return{app_url:"https://demo.socialm.tv"}},methods:{goToHome:function(){this.$router.push({name:"home"})}}};const n=(0,s(1900).Z)(i,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-white fixed-top shadow"},[s("div",{staticClass:"container-fluid"},[s("a",{staticClass:"navbar-brand",on:{click:t.goToHome}},[s("img",{attrs:{src:t.app_url+"/images/logo.png",width:"100"}})]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav me-auto mb-4 mb-lg-0"}),t._v(" "),s("div",{staticClass:"d-flex"},[s("ul",{staticClass:"navbar-nav me-auto mb-4 mb-lg-0"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("\n                                Home\n                            ")])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/about-us"}},[t._v("\n                                About Us\n                            ")])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/our-services"}},[t._v("\n                                Our Services\n                            ")])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/gallery"}},[t._v("\n                                Gallery\n                            ")])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/contact-us"}},[t._v("\n                                Contact Us\n                            ")])],1),t._v(" "),t._m(1),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[s("img",{staticClass:"flag",attrs:{src:t.app_url+"/images/flagar.png"}}),t._v("\n                                AR\n                            ")])])])])])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"nav-item"},[a("span",{staticClass:"nav-link"})])}],!1,null,null,null).exports},4451:(t,a,s)=>{s.r(a),s.d(a,{default:()=>v});var i=s(4706);const n={components:{AppFooter:s(3869).Z,Navbar:i.Z},data:function(){return{services:[]}},methods:{getServices:function(){var t=this;axios.get("/service").then((function(a){t.services=a.data})).catch((function(t){console.log(t)}))}},created:function(){this.getServices()}};var e=s(3379),r=s.n(e),l=s(1031),o={insert:"head",singleton:!1};r()(l.Z,o);l.Z.locals;var c=(0,s(1900).Z)(n,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("navbar"),t._v(" "),s("div",{staticClass:"portfolio section-bg",staticStyle:{"min-height":"100vh"}},[s("div",{staticClass:"container"},[s("br"),s("br"),s("br"),s("br"),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"row"},t._l(t.services,(function(a){return s("div",{staticClass:"col-md-4 mb-4"},[s("div",{staticClass:"card text-center h-100",attrs:{"data-aos":"fade-up"}},[s("div",{staticClass:"box-icon"},[s("div",{staticClass:"icon-service",domProps:{innerHTML:t._s(a.icon)}})]),t._v(" "),s("div",{staticClass:"card-body"},[s("p",{staticStyle:{"font-size":"25px"}},[t._v(t._s(a.name_en))]),t._v(" "),s("p",{staticClass:"card-text"},[t._v(t._s(a.description_en))])])])])})),0)])]),t._v(" "),s("app-footer")],1)}),[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"section-title text-center"},[s("h2",[t._v("Our Services")])])}],!1,null,"7521d63b",null);const v=c.exports}}]);