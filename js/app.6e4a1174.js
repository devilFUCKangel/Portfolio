(function(e){function t(t){for(var n,o,l=t[0],s=t[1],c=t[2],u=0,m=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,l=1;l<a.length;l++){var s=a[l];0!==i[s]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},i={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/Portfolio/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=s;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("0cdd");var n=a("2b0e"),i=a("5f5b"),r=a("b1e0");a("ab8b"),a("2dd8");n["default"].use(i["a"]),n["default"].use(r["a"]);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("b-navbar",{staticClass:"red darken-4",attrs:{sticky:"",toggleable:"lg",type:"dark",variant:"info"}},[a("b-navbar-brand",{attrs:{href:"#top"}},[e._v("Nang Wei Lun")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("v-item-group",{staticClass:"shrink",attrs:{mandatory:"",tag:"v-flex"},model:{value:e.tabVmodel,callback:function(t){e.tabVmodel=t},expression:"tabVmodel"}},[a("b-navbar-nav",e._l(e.mainContents,(function(t,n){return a("v-item",{key:n,scopedSlots:e._u([{key:"default",fn:function(n){var i=n.active,r=n.toggle;return[a("v-tab",{attrs:{"input-value":i,icon:""},on:{click:r}},[e._v(e._s(t.title))])]}}],null,!0)})})),1)],1)],1)],1),a("v-content",[a("HelloWorld"),a("v-window",{staticClass:"elevation-24",attrs:{align:"center","show-arrows":""},model:{value:e.tabVmodel,callback:function(t){e.tabVmodel=t},expression:"tabVmodel"}},e._l(e.mainContents,(function(e,t){return a("v-window-item",{key:t},[a("Card",{staticClass:"w-75",attrs:{cardContent:e}})],1)})),1)],1)],1)},l=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{staticClass:"mb-4"},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v(" Welcome to My Portfolio ")]),a("p",{staticClass:"subheading font-weight-regular"},[e._v(" I am Malaysian, 24 years old male and still look like a kid. "),a("br"),e._v(" Study in local university and graduated with a bachelor's degree in computer science. "),a("br"),e._v(" A chinese boy, know to speak Malay and English but not fluently. The language I can “spoke fluent” is Python. "),a("br"),e._v(" Live in Tanjong Sepat, Selangor. A small fishing village. "),a("br"),e._v("You can visit my "),a("a",{attrs:{href:"https://nangweilun.blogspot.com/",target:"_blank"}},[e._v("Blogspot")])])]),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v(" What's next? ")]),a("v-row",{attrs:{justify:"center"}},e._l(e.whatsNext,(function(t,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v(" "+e._s(t.text)+" ")])})),0)],1)],1)],1)},c=[],d={name:"HelloWorld",data:function(){return{whatsNext:[{text:"I am looking for job",href:"https://www.linkedin.com/in/wei-lun-nang-164728186/"},{text:"Cryptography and Linguistics research with data science techniques and applications, project focus on Liber Primus Cicada 3301 and Voynich manuscript",href:"https://github.com/devilFUCKangel"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},u=d,m=a("2877"),p=a("6544"),b=a.n(p),g=a("62ad"),v=a("a523"),h=a("0fd9"),f=Object(m["a"])(u,s,c,!1,null,null,null),y=f.exports;b()(f,{VCol:g["a"],VContainer:v["a"],VRow:h["a"]});var C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"flex"},[a("v-card-title",[e._v(e._s(e.cardContent.title))]),a("v-card-text",[e._v(e._s(e.cardContent.subtitle))]),a("v-tabs",{attrs:{"background-color":"deep-purple accent-4","center-active":"",dark:"",centered:""}},[e._l(e.cardContent.tabs,(function(t,n){return a("v-tab",{key:n},[e._v(e._s(t.title))])})),e._l(e.cardContent.tabs,(function(e,t){return a("v-tab-item",{key:t},[a(e.content,{tag:"component"})],1)}))],2)],1)},T=[],I={name:"Card",props:{cardContent:Object},data:function(){return{}}},A=I,E=a("b0af"),w=a("99d9"),S=a("71a3"),P=a("c671"),N=a("fe57"),L=Object(m["a"])(A,C,T,!1,null,null,null),O=L.exports;b()(L,{VCard:E["a"],VCardText:w["a"],VCardTitle:w["b"],VTab:S["a"],VTabItem:P["a"],VTabs:N["a"]});var _=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-list",e._l(e.itemList,(function(t,n){return a("v-list-item",{key:n,attrs:{"three-line":""}},[a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:e._s(t.title)}}),a("v-list-item-subtitle",{domProps:{textContent:e._s(t.subtitle)}})],1)],1)})),1)},R=[],M={name:"Basic",data:function(){return{itemList:[{title:"Nationality",subtitle:"Malaysian"},{title:"Gender",subtitle:"Male"},{title:"Age",subtitle:"24"},{title:"Race",subtitle:"Chinese"},{title:"Education",subtitle:"Bachelor of Computer Science (Artificial Intelligence)"},{title:"Hobbies",subtitle:"Meme, Dreaming, Googling"}]}}},j=M,x=a("8860"),V=a("da13"),k=a("5d23"),D=Object(m["a"])(j,_,R,!1,null,null,null),G=D.exports;b()(D,{VList:x["a"],VListItem:V["a"],VListItemContent:k["a"],VListItemSubtitle:k["b"],VListItemTitle:k["c"]});var H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-divider"),a("b-card-title",[e._v("Personality Trait Scores")]),a("b-card-sub-title",[e._v(" The big five personality theory is by far the most scientifically validated and reliable psychological model to measure personality. This is valuable information for choosing a career and better understand about me. ")]),a("v-divider"),a("v-list",{attrs:{dense:""}},[a("v-subheader",[e._v('"The theory identifies five factors:')]),a("v-list-item",{staticClass:"v-btn--outlined",attrs:{color:"rgba(0,0,0,0.5)",disabled:""}},[a("a",{staticStyle:{color:"red"}},[e._v("O")]),a("b-icon",{staticClass:"ma-1",attrs:{icon:"circle-fill",variant:"primary","font-scale":"0.3",animation:"cylon"}}),a("a",{staticStyle:{color:"rgba(255,255,255,0.5)"}},[e._v("openness to experience (inventive/curious vs. consistent/cautious)")])],1),a("v-list-item",{staticClass:"v-btn--outlined",attrs:{color:"rgba(0,0,0,0.5)",disabled:""}},[a("a",{staticStyle:{color:"red"}},[e._v("C")]),a("b-icon",{staticClass:"ma-1",attrs:{icon:"circle-fill",variant:"primary","font-scale":"0.3",animation:"cylon"}}),a("a",{staticStyle:{color:"rgba(255,255,255,0.5)"}},[e._v("conscientiousness (efficient/organized vs. extravagant/careless)")])],1),a("v-list-item",{staticClass:"v-btn--outlined",attrs:{color:"rgba(0,0,0,0.5)",disabled:""}},[a("a",{staticStyle:{color:"red"}},[e._v("E")]),a("b-icon",{staticClass:"ma-1",attrs:{icon:"circle-fill",variant:"primary","font-scale":"0.3",animation:"cylon"}}),a("a",{staticStyle:{color:"rgba(255,255,255,0.5)"}},[e._v("extraversion (outgoing/energetic vs. solitary/reserved)")])],1),a("v-list-item",{staticClass:"v-btn--outlined",attrs:{color:"rgba(0,0,0,0.5)",disabled:""}},[a("a",{staticStyle:{color:"red"}},[e._v("A")]),a("b-icon",{staticClass:"ma-1",attrs:{icon:"circle-fill",variant:"primary","font-scale":"0.3",animation:"cylon"}}),a("a",{staticStyle:{color:"rgba(255,255,255,0.5)"}},[e._v("agreeableness (friendly/compassionate vs. challenging/callous)")])],1),a("v-list-item",{staticClass:"v-btn--outlined",attrs:{color:"rgba(0,0,0,0.5)",disabled:""}},[a("a",{staticStyle:{color:"red"}},[e._v("N")]),a("b-icon",{staticClass:"ma-1",attrs:{icon:"circle-fill",variant:"primary","font-scale":"0.3",animation:"cylon"}}),a("a",{staticStyle:{color:"rgba(255,255,255,0.5)"}},[e._v("neuroticism (sensitive/nervous vs. resilient/confident)")])],1)],1),a("v-divider"),a("b-card-sub-title",[e._v(" Below result is averaged score taken from "),a("a",{attrs:{href:"https://bigfive-test.com/result/5ed7cf58bc509600070f0d1c"}},[e._v("bigfive-test.com")]),e._v(" , "),a("a",{attrs:{href:"https://www.truity.com/personality-test/17315/test-results/21215808"}},[e._v("truity.com")]),e._v(", "),a("a",{attrs:{href:"https://www.123test.com/report/3G3X0N1CKVYCOHQM0F/"}},[e._v("123test.com")]),e._v(", "),a("a",{attrs:{href:"https://openpsychometrics.org/tests/IPIP-BFFM/results.php?r=2.7,4.2,3.9,4,4.1"}},[e._v("openpsychometrics.org")]),e._v(" . Click on the hyperlinks for more details of the results. To conclude that, I am friendly, like to learn new things, organized, a bit shy, and steady person. ")]),a("Plotly",{attrs:{data:e.aveRadarRForRadarSummary,layout:e.big5layout}}),a("b-card-sub-title",[e._v("The next chart show results taken from each website, remind that openpsychometrics.org using term Emotional stability instead of Neuroticism. The score of Neuroticism is calculated with 100% - score of Emotional stability.")]),a("Plotly",{attrs:{data:e.big5data,layout:e.big5layout}})],1)},U=[],B=(a("13d5"),a("04d1")),F={name:"BigFive",components:{Plotly:B["Plotly"]},data:function(){return{big5data:[{type:"scatterpolar",r:[90,95,78,94,53],theta:["O","C","E","A","N"],fill:"toself",name:"Bigfive-test"},{type:"scatterpolar",r:[90,69,33,81,31],theta:["O","C","E","A","N"],fill:"toself",name:"Truity"},{type:"scatterpolar",r:[69,76,42,67,13],theta:["O","C","E","A","N"],fill:"toself",name:"123test"},{type:"scatterpolar",r:[65,80,37,56,7],theta:["O","C","E","A","N"],fill:"toself",name:"Open Source Psychometrics Project"}],big5layout:{polar:{radialaxis:{visible:!0,range:[0,100]},bgcolor:"rgba(0,0,0,0)"},plot_bgcolor:"rgba(0,0,0,0)",paper_bgcolor:"rgba(0,0,0,0)",showlegend:!0,font:{color:"white"},legend:{x:0,y:0},margin:{l:30,r:30,t:30,b:30}}}},computed:{aveRadarRForRadarSummary:function(){for(var e=[],t=0;t<this.big5data[0].r.length;t++)e.push(this.big5data.reduce((function(e,a){return e+a.r[t]}),0)/this.big5data.length);return[{type:"scatterpolar",r:e,theta:["O","C","E","A","N"],fill:"toself",name:"Score Average"}]}}},W=F,Y=a("ce7e"),J=a("e0c7"),Q=Object(m["a"])(W,H,U,!1,null,null,null),$=Q.exports;b()(Q,{VCard:E["a"],VDivider:Y["a"],VList:x["a"],VListItem:V["a"],VSubheader:J["a"]});var K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{dense:""}},e._l(e.textFieldData,(function(e,t){return a("v-col",{key:t,attrs:{cols:"12"}},[a("CardListTextArea",{attrs:{cardContent:e}})],1)})),1)],1)},z=[],q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-img",{staticClass:"white--text align-end",attrs:{src:e.cardContent.imgsrc,gradient:"to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.8)",height:84*e.cardContent.detail.length+16+120}},[a("v-card-title",[e._v(e._s(e.cardContent.title))]),a("v-card-text",[e._l(e.cardContent.detail,(function(e,t){return[a("customTextDisplayArea",{key:t,attrs:{label:e.label,value:e.value}})]}))],2)],1)],1)},X=[],Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-textarea",{attrs:{"hide-details":"",filled:"",readonly:"",dense:"","row-height":"6",rows:"1","auto-grow":"",label:e.label,value:e.value}})},ee=[],te={name:"customTextDisplayArea",props:{label:String,value:String}},ae=te,ne=a("a844"),ie=Object(m["a"])(ae,Z,ee,!1,null,null,null),re=ie.exports;b()(ie,{VTextarea:ne["a"]});var oe={name:"CardListTextArea",props:{cardContent:Object},components:{customTextDisplayArea:re}},le=oe,se=a("adda"),ce=Object(m["a"])(le,q,X,!1,null,null,null),de=ce.exports;b()(ce,{VCard:E["a"],VCardText:w["a"],VCardTitle:w["b"],VImg:se["a"]});var ue={name:"Education",components:{CardListTextArea:de},data:function(){return{textFieldData:[{title:"Degree",imgsrc:"https://www.utem.edu.my/images/2020/pages/imageWelcomeUTeM.jpg",detail:[{value:"Technical University of Malaysia Malacca | Universiti Teknikal Malaysia Melaka (UTeM)",label:"University"},{value:"2016 - 2020",label:"Date"},{value:"Study Bachelor of Computer Science (Artificial Intelligence), CGPA 3.69",label:"Course"},{value:"Robotics, Machine Learning, Image Processing, Statistics, Calculus",label:"Core Subjects"}]},{title:"Postsecondary (pre-university)",imgsrc:"https://fastly.4sqi.net/img/general/width960/7303610_opXm6TkQdEhforn4d0smqlHZMx8ell1mhdQLVyC2cbw.jpg",detail:[{value:"SMK Telok Datok",label:"Secondary school"},{value:"2014-2015",label:"Date"},{value:"Sijil Tinggi Persekolahan Malaysia (STPM), CGPA 2.33",label:"Examination"},{value:"Physics, Pure Mathematics, Chemistry",label:"Core Subjects"}]},{title:"Secondary",imgsrc:"http://2.bp.blogspot.com/_sN-poQ4oF0w/THd5KJc0H1I/AAAAAAAAAFY/PjgIsFm5QXk/s1600/CIMG1233.JPG",detail:[{value:"SMK Tanjong Sepat",label:"Secondary school"},{value:"2009 - 2013",label:"Date"},{value:"Study Sijil Pelajaran Malaysia (SPM), 5A",label:"Examination"},{value:"Physics, Additional Mathematics, Chemistry, Biology",label:"Core Subjects"}]}]}}},me=ue,pe=Object(m["a"])(me,K,z,!1,null,null,null),be=pe.exports;b()(pe,{VCol:g["a"],VContainer:v["a"],VRow:h["a"]});var ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{dense:""}},e._l(e.textFieldData,(function(e,t){return a("v-col",{key:t,attrs:{cols:"12"}},[a("CardListTextArea",{attrs:{cardContent:e}})],1)})),1)],1)},ve=[],he={name:"Career",components:{CardListTextArea:de},data:function(){return{textFieldData:[{title:"Top Glove",imgsrc:"https://graduan.sgp1.cdn.digitaloceanspaces.com/media/381023/original/26f6ac75-c70b-4f2f-b5ed-8eaab0c871fb-MzgxMDIz.jpeg",detail:[{value:"Data Scientist (Trainee)",label:"Position"},{value:"Sept 2019 - Mar 2020",label:"Date"},{value:"Full-Stack Python Developer, Image Processing Project",label:"Job"},{value:"Python Programming, Neural Network, Machine Learning, Image Processing, Network Server",label:"Core skill"},{value:"Handle project alone. Learnt many new things related to Business and Economics such as stock market and business skill.",label:"Experience"}]}]}}},fe=he,ye=Object(m["a"])(fe,ge,ve,!1,null,null,null),Ce=ye.exports;b()(ye,{VCol:g["a"],VContainer:v["a"],VRow:h["a"]});var Te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"flex-wrap d-flex",attrs:{fluid:""}},[a("v-card",{attrs:{width:"370",height:"370"}},[a("p",[e._v(e._s(e.selected))])]),a("v-card",{staticClass:"col-lg-8",attrs:{height:"370"}},[a("v-list",{staticClass:"text-left overflow-y-auto",attrs:{height:"350",dense:"","single-line":""}},[a("v-list-item-group",{attrs:{color:"primary"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[e._l(e.subjectData,(function(t){return[a("v-subheader",{key:t,attrs:{inset:""}},[e._v(e._s(t.title))]),e._l(t.subItem,(function(t){return a("v-list-item",{key:t,attrs:{value:t.detail}},[a("b-icon-dot"),a("v-list-item-content",[e._v(e._s(t.name))])],1)}))]}))],2)],1)],1)],1)},Ie=[],Ae={name:"UTeM",data:function(){return{selected:0,subjectData:[{title:"Major Subject",subItem:[{name:"INDUSTRIAL TRAINING",detail:"Internship, data science job at Top Glove. Field included image processing, machine learning and python project"},{name:"INDUSTRIAL TRAINING REPORT",detail:"Report about the tasks done in internship. Report included CCTV monitoring project"},{name:"PROJECT II",detail:"Complete or enchance the final year project. Project replicate LipNet Model with python."},{name:"PROJECT I",detail:"Literature review and startup for final year project. Research Lipreading Model, in field of Automated Visual Speech Recognition"},{name:"INTELLIGENT AGENT",detail:"Learn how the agent react to environment to achieve goal. Teaching material included JADE (Environment), Jason, AnyLogic (Supply Chain GIS), LogixPro, Trsoccerbots, TeamBots, NetBean (Java Develop Software)."},{name:"EVOLUTIONARY COMPUTING",detail:"Learn about the genetic algorithm and its use case. Project develop C++ software and implement genetic algorithm to solve problem."},{name:"IMAGE PROCESSING AND PATTERN RECOGNITION",detail:"Learn about how the image represented in digital form, how to analysis and process the image (background subtraction, edge detection, blur filter and so on). Teaching material included Image-J, Microsoft Excel. Project use python train CNN model to recognize ripeness tomato."},{name:"FUZZY LOGIC",detail:"Learn the concept of fuzzy logic, fuzzy clustering. Teaching material included MatLab."},{name:"NEURAL NETWORK",detail:"Learn about the basic of neural network, the structure of a neural network and math behide. Teaching material included MatLab. Project python to train a iris flower classification model."},{name:"WORKSHOP II",detail:"Use Lego Mindstorm EV3, TETRIX, HiTechnic to build a robot project. Project auto farming with computer vision."},{name:"KNOWLEDGE BASED SYSTEM",detail:"Learn the concept of knowledge-based systems, knowledge representations and expert system. Project develop expert system (Eye Disease Diagnosis System) using CLIPS."},{name:"MACHINE LEARNING",detail:"Learn how to build a computer system that learns from experience, topics such as decision tree learning, Bayesian learning, linear model. Teaching material using RapidMiner Studio. Project cooperate with Bangsar Village to share electrical data for student to build machine learning project (predict electrical peek usage)."},{name:"ARTIFICIAL INTELLIGENCE IN ROBOTIC AND AUTOMATION",detail:"Learn how to build a automated-robot, the history and type of robot, and ethics in Robotics & Automation. Teaching material included Lego Mindstorm EV3, develop with C# language."},{name:"LOGIC PROGRAMMING",detail:""},{name:"STATISTICS AND PROBABILITY",detail:""},{name:"OBJECT ORIENTED PROGRAMMING",detail:""},{name:"WORKSHOP I",detail:""},{name:"ARTIFICIAL INTELLIGENCE",detail:""},{name:"CALCULUS AND NUMERICAL METHODS",detail:""},{name:"DATA STRUCTURE AND ALGORITHM",detail:""},{name:"ALGEBRA LINEAR DISCRETE MATHEMATICS",detail:""},{name:"PROGRAMMING TECHNIQUE",detail:""}]},{title:"Minor Subject",subItem:[{name:"INFORMATION TECHNOLOGY SECURITY",detail:"Learn about the cryptographic, how encryption and decryption work. Teaching material included GnuPG"},{name:"TECHNOLOGY ENTREPRENEURSHIP",detail:"Learn about entrepreneur such as business plan. Assignment Entrepreneur Profiling, Project Business Plan"},{name:"ARTIFICIAL INTELLIGENCE PROJECT MANAGEMENT",detail:"Learn how to manage a project, manage work and resource. Project manage a project using Microsoft Project."},{name:"WEB APPLICATION DEVELOPMENT",detail:"Learn how to develop a web page with HTML, CSS, PHP. Project develop a order food website with domain and CPanel."},{name:"HUMAN-COMPUTER INTERACTION",detail:"Learn the concepts and theories of human computer interaction, conceptual thinking in problems solving related to application, website or product design. Project design and record video to promote a product."},{name:"SOFTWARE ENGINEERING",detail:"Learn about systematic application of engineering approaches to the development of software, such as software developing life cycles and use case diagram."},{name:"DATA COMMUNICATION AND NETWORKING",detail:""},{name:"DATABASE",detail:""},{name:"OPERATING SYSTEM",detail:""},{name:"MULTIMEDIA SYSTEM",detail:""},{name:"COMPUTER ARCHITECTURE AND ORGANIZATION",detail:""},{name:"CREATIVE & CRITICAL THINKING",detail:""},{name:"ENGLISH FOR PROFESSIONAL COMMUNICATION",detail:""},{name:"TECHNICAL ENGLISH",detail:""},{name:"ISLAMIC AND ASIAN CIVILIZATION",detail:""},{name:"ETHNIC RELATIONS",detail:""},{name:"JAPANESE I",detail:""},{name:"CHOIR",detail:""},{name:"RED CRESCENT",detail:""}]}]}}},Ee=Ae,we=a("1baa"),Se=Object(m["a"])(Ee,Te,Ie,!1,null,null,null),Pe=Se.exports;b()(Se,{VCard:E["a"],VContainer:v["a"],VList:x["a"],VListItem:V["a"],VListItemContent:k["a"],VListItemGroup:we["a"],VSubheader:J["a"]});var Ne=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Le=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",[e._v(" Learnt many computer languages in the field of Software, Web, Database. Programming Language: C++, R, Python, MATLAB, SQL, MySQL, PHP, HTML, JS, CSS, JAVA Software: Microsoft Visual Studio, Rapid Miner Studio, MATLAB, RStudio, Prolog, CLIPS, Eclipse, NetBeans, Adobe, Android Studio ")]),a("p",[e._v(" Event Planning 25 Communication 50 Leadership 50 Creativity 75 Computer 100 ")])])}],Oe={name:"Skill"},_e=Oe,Re=Object(m["a"])(_e,Ne,Le,!1,null,null,null),Me=Re.exports,je=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[e._l(e.data,(function(e){return[a("projectCardItem",{key:e,attrs:{project:e}})]}))],2)},xe=[],Ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-card-title",[e._v(e._s(e.project.title))]),a("v-card-text",[a("customTextDisplayArea",{attrs:{label:"Course",value:e.project.course}}),a("customTextDisplayArea",{attrs:{label:"Project Title",value:e.project.projectTitle}}),a("v-expansion-panels",{attrs:{hover:""}},[a("v-expansion-panel",[a("v-expansion-panel-header",{staticClass:"rounded",attrs:{color:"rgba(176, 69, 69, 0.1)"}},[e._v("Detail")]),a("v-expansion-panel-content",{attrs:{color:"rgba(176, 69, 69, 0.1)"}},[a("customTextDisplayArea",{attrs:{label:"Description",value:e.project.description}}),a("customTextDisplayArea",{attrs:{label:"Programming Language",value:e.project.programmingLanguage}}),a("customTextDisplayArea",{attrs:{label:"Systems",value:e.project.systems}}),a("customTextDisplayArea",{attrs:{label:"Hardware and Tools",value:e.project.hardwareAndTools}}),a("customTextDisplayArea",{attrs:{label:"Software Development Tools",value:e.project.softwareDevelopmentTools}})],1)],1)],1)],1)],1)},ke=[],De={name:"ProjectCardItem",components:{customTextDisplayArea:re},props:{project:Object}},Ge=De,He=a("cd55"),Ue=a("49e2"),Be=a("c865"),Fe=a("0393"),We=Object(m["a"])(Ge,Ve,ke,!1,null,null,null),Ye=We.exports;b()(We,{VCard:E["a"],VCardText:w["a"],VCardTitle:w["b"],VExpansionPanel:He["a"],VExpansionPanelContent:Ue["a"],VExpansionPanelHeader:Be["a"],VExpansionPanels:Fe["a"]});var Je={name:"Project",components:{ProjectCardItem:Ye},data:function(){return{data:[{title:"Online Police Reporting System",course:"Workshop 1",projectTitle:"Online Police Reporting System",description:"A system that help police store report data, share to all police station and analysis cases. This system lets residents to do police report without go to police station.",programmingLanguage:"C++, SQL",systems:"Windows 10, Relational Database Management System (MySQL)",hardwareAndTools:"Localhost server on laptop",softwareDevelopmentTools:"QtCreator (Qt Quick 2), Mysql Workbench, Visual Studio"},{title:"Auto Farming Robot",course:"Workshop 2",projectTitle:"INTELLIGENT FARMING ROBOT PROTOTYPE USING IoT APPLICATION",description:"A robot with arm and camera that can auto plant and harvest crop. A farm used vertical farming method with the help of robot.",programmingLanguage:"Python",systems:"ev3dev Debian, System Management Bus, Google Cloud Platform, Remote Python Call and Windows 10 as central place",hardwareAndTools:"Lego Mindstorm EV3, TETRIX, HiTechnic, Phone Camera, Laptop for RPyC administration",softwareDevelopmentTools:"Visual Studio Code, OpenCV, Android IPWebCam, Google Cloud Vision API, Keras API Tensorflow"},{title:"Lipreading Model",course:"Final Year Project",projectTitle:"REPLICATION OF LIPNET MODEL USING TENSORFLOW LIBRARY AND PYTHON",description:"A software that use a camera to perform lipreading to know what a person talking without input of sound. Research and review on LipNet model. Build a lipreading software to help people communicate in noisy environment. Build new dataset for train and test.",programmingLanguage:"Python",systems:"Ubuntu",hardwareAndTools:"Laptop with Nvidia GEFORCE 940M, laptop's camera",softwareDevelopmentTools:"Visual Studio Code, OpenCV, NVIDIA CUDA, Keras API Tensorflow"},{title:"EMPLOYEE ASSIGNATION FOR A PROJECT",course:"EVOLUTIONARY COMPUTING",projectTitle:"EMPLOYEE ASSIGNATION FOR A PROJECT BY USING GENETIC ALGORITHM",description:"A software that use to achieve the best solution which pay out the minimum of salary and get back the maximum of employees’ efficiency. Design genetic algorithm.",programmingLanguage:"C++",systems:"Windows 10",hardwareAndTools:"-",softwareDevelopmentTools:"Visual Studio"},{title:"Smartphone Inventory System",course:"Object Orientated Programming",projectTitle:"Smartphone Inventory System",description:"A system to help calculate price, store record in database, and transaction running efficiently.",programmingLanguage:"Java, SQL",systems:"Windows 10, Relational Database Management System (Apache Derby)",hardwareAndTools:"-",softwareDevelopmentTools:"Eclipse, Apache Derby"}]}}},Qe=Je,$e=Object(m["a"])(Qe,je,xe,!1,null,null,null),Ke=$e.exports;b()($e,{VCard:E["a"]});var ze={name:"App",components:{HelloWorld:y,Card:O},data:function(){return{mainContents:[{title:"About Me & SNS",subtitle:"People around me said I am a weird person, got a lot of weird idea, and cute...And I afraid to change people's minds, maybe this weird way of thinking cause me hard to communicate with others. A listener, but not always. Hard to maintain a relationship through long-distance because I didn't like texting.",tabs:[{title:"Basic",content:G},{title:"Big Five",content:$}]},{title:"Education & Career",subtitle:"Now I am unemployed after finish internship in March 2020. In internship period, I work as data scientist and full-stack developer in TopGlove, dealing with CCTV and image processing project.",tabs:[{title:"Education",content:be},{title:"UTeM",content:Pe},{title:"Career",content:Ce}]},{title:"Skill & Project",subtitle:"about me sub",tabs:[{title:"Skill",content:Me},{title:"Project",content:Ke}]},{title:"Contact & Comments",subtitle:"about me sub"},{title:"Blog & Other",subtitle:"about me sub"}],tabVmodel:0,swipeDirection:"None"}}},qe=ze,Xe=a("7496"),Ze=a("a75b"),et=a("d903"),tt=a("604c"),at=a("f665"),nt=a("1e6c"),it=Object(m["a"])(qe,o,l,!1,null,null,null),rt=it.exports;b()(it,{VApp:Xe["a"],VContent:Ze["a"],VItem:et["a"],VItemGroup:tt["b"],VTab:S["a"],VWindow:at["a"],VWindowItem:nt["a"]});var ot=a("f309");n["default"].use(ot["a"]);var lt=new ot["a"]({theme:{dark:!0}});n["default"].config.productionTip=!1,new n["default"]({vuetify:lt,render:function(e){return e(rt)}}).$mount("#app")}});
//# sourceMappingURL=app.6e4a1174.js.map