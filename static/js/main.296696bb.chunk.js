(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(7),r=t.n(o),i=(t(14),t(1)),c=t(2),s=t(4),m=t(3),u=t(5),p=(t(15),function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("li",null,l.a.createElement("a",{href:this.props.url},l.a.createElement("i",{className:"fa fa-".concat(this.props.name)})))}}]),a}(l.a.Component)),d=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.sns,a=[];return e.forEach(function(e){a.push(l.a.createElement(p,{url:e.url,name:e.name,key:e.name}))}),l.a.createElement("ul",{className:this.props.listType},a)}}]),a}(l.a.Component),h=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))," ")," ",l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I'm ",e.name,"."),l.a.createElement("h3",null,"I'm a ",e.location," based ",l.a.createElement("span",null,e.role[0]),", ",l.a.createElement("span",null,e.role[1])," and ",l.a.createElement("span",null,e.role[2])," creating awesome and productive web application for enterprises around the globe. Let's ",l.a.createElement("a",{className:"smoothscroll",href:"#about"},"start scrolling")," and learn more ",l.a.createElement("a",{className:"smoothscroll",href:"#about"},"about me"),"."),l.a.createElement("hr",null),l.a.createElement(d,{sns:e.sns,listType:"social"}))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component),E=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData,a=new Date("July 2014").getFullYear(),t=(new Date).getFullYear();return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",alt:"Jongmin Kim profile on about me",src:"images/jongmin_profile.jpg"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,"I am an experienced consultant with ",t-a," years working within the IT Industry across multiple business domains including automotive, services, information technology and government as a certified Sitecore developer in a platinum Sitecore solution partner company. I also have a bachelor degree of information technology and have been certified as a developer programmer by ACS."),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address,l.a.createElement("br",null),e.city,", ",e.state," ",e.postcode," ",e.country),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("a",{href:"callto:".concat(e.mobile)},e.mobile)),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("a",{href:"mailto:".concat(e.email)},e.email)))),l.a.createElement("div",{className:"columns download"},l.a.createElement("p",null,l.a.createElement("a",{href:"download/Long.jongmin.kim.pdf",className:"button"},l.a.createElement("i",{className:"fa fa-download"}),"Download Resume"))))," ")," "))}}]),a}(l.a.Component),b=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand",style:{width:this.props.barwidth}}),l.a.createElement("em",null,this.props.skillname))}}]),a}(l.a.Component),g=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.historyItem,a=""===e.endDate?"Present":e.endDate;return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.name),l.a.createElement("p",{className:"info"},e.position," ",l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.startDate," - ",a)),l.a.createElement("p",null,e.workDescription)))}}]),a}(l.a.Component),f=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.skills,a=[];e.forEach(function(e){a.push(l.a.createElement(b,{skillname:e.skillname,barwidth:"".concat(e.barwidth,"%"),key:e.skillname}))});var t=this.props.workhistory,n=[];return t.forEach(function(e){n.push(l.a.createElement(g,{historyItem:e,key:e.name}))}),l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,"University of Canberra"),l.a.createElement("p",{className:"info"},"Bachelor of Information Technology ",l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},"Feb 2014")),l.a.createElement("p",null,"The course focuses on the systems development aspects of employment in the information technology profession. During the course I gained following experience."),l.a.createElement("ul",null,l.a.createElement("li",null,"Extensive experience in developing information technology to address the needs of modern organisations"),l.a.createElement("li",null,"Teamwork, project management and communication skills"),l.a.createElement("li",null,"Exploration of the technical and human aspects of information technology and its use"),l.a.createElement("li",null,"Information technology",l.a.createElement("ul",null,l.a.createElement("li",null,"Hardware concepts"),l.a.createElement("li",null,"Local and worldwide networks"),l.a.createElement("li",null,"Data structures and algorithms"),l.a.createElement("li",null,"Object-oriented software design"),l.a.createElement("li",null,"Operating systems"),l.a.createElement("li",null,"Programming theory and practice"),l.a.createElement("li",null,"Distributed systems theory"),l.a.createElement("li",null,"Software quality management"))),l.a.createElement("li",null,"Information Systems",l.a.createElement("ul",null,l.a.createElement("li",null,"Database management"),l.a.createElement("li",null,"Human-computer interaction"),l.a.createElement("li",null,"Information systems analysis and design"),l.a.createElement("li",null,"Document and workflow and management support"))),l.a.createElement("li",null,"Programming environments",l.a.createElement("ul",null,l.a.createElement("li",null,".Net and Linux"),l.a.createElement("li",null,"Various web design and programming tools"))),l.a.createElement("li",null,"Extensive practical experience using Visual Basic .Net, C++ and C# within the Microsoft .Net Framework"),l.a.createElement("li",null,"Analysis and specification methods include UML, XML, structured and soft systems methodologies."),l.a.createElement("li",null,"In final year of study, completed a team project, producing and implementing a substantial software-based system to address a need of a local business, government or community organisation."))))," ")," ")," ",l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},n)," ")," ",l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,"I have particular strengths in front end development including UI/UX prototyping, front end development, technical consultation, source code management, technical documentation and estimation. I have worked on a variety of projects maintaining, developing and integrating Australian websites and web services using latest technologies."),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},a)))," ")," ")}}]),a}(l.a.Component),v=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.portfolioItem;return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:"#modal-".concat(e.id),title:e.name},l.a.createElement("img",{alt:e.name,src:e.thumbnailImageUrl}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.metaDescription))),l.a.createElement("div",{className:"link-icon"},l.a.createElement("i",{className:"icon-plus"})))))}}]),a}(l.a.Component),w=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.portfolioItem;return l.a.createElement("div",{id:"modal-".concat(e.id),className:"popup-modal mfp-hide"},l.a.createElement("img",{className:"scale-with-grid",src:e.heroImage,alt:e.name}),l.a.createElement("div",{className:"description-box"},l.a.createElement("h4",null,e.jobname),l.a.createElement("p",null,e.jobdescription),l.a.createElement("span",{className:"categories"},l.a.createElement("i",{className:"fa fa-tag"}),e.jobcategory)),l.a.createElement("div",{className:"link-box"},e.joburl.length>0&&l.a.createElement("a",{href:e.joburl},"Details"),l.a.createElement("a",{className:"popup-modal-dismiss"},"Close")))}}]),a}(l.a.Component),y=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=[],a=[];return this.props.works.forEach(function(t){e.push(l.a.createElement(v,{portfolioItem:t,key:t.name})),a.push(l.a.createElement(w,{portfolioItem:t,key:t.name}))}),l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e)," ")," ",a)," ")}}]),a}(l.a.Component),j=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Client Testimonials"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("div",{className:"flexslider"},l.a.createElement("ul",{className:"slides"},l.a.createElement("li",null,l.a.createElement("blockquote",null,l.a.createElement("p",null,"The exceptional work done with NRMA over the past 6-8 months on the current project pipeline of work. He has been without question standouts from Oakton and a clear sign that his effort should be heard within Oakton. His attention to the job in hand and detail and efficiency/quality of work has been exceptional."),l.a.createElement("cite",null,"Paul Henry, Project Manager, NRMA"))),l.a.createElement("li",null,l.a.createElement("blockquote",null,l.a.createElement("p",null,"I've worked with Jongmin on the Hyundai intranet project and NSW Health Yes Survey project and found that Jongmin has a fantastic attitude towards his work and consistently aims to exceed expectations."),l.a.createElement("cite",null,"Michael Carey, Senior Consultant, Oakton")))))," ")," ")," "),"  ")}}]),a}(n.Component),N=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Get In Touch."))),l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"I'm open to new challenges and opportunities. Please leave your message below from provided or contact me via my contact details. I'll get back to you shortly."))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"eight columns"},l.a.createElement("iframe",{title:"contact me",src:"https://docs.google.com/forms/d/e/1FAIpQLScopB-JhDoNvHJ32rUexm_2MFzRGIlrLEM2_4vOeN5_U1yVUA/viewform?embedded=true",width:"100%",height:"1032",frameBorder:"0",marginHeight:"0",marginWidth:"0"},"Loading...")),l.a.createElement("aside",{className:"four columns footer-widgets"},l.a.createElement("div",{className:"widget widget_contact"},l.a.createElement("h4",null,"Address and Phone"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address,l.a.createElement("br",null),e.city,", ",e.state," ",e.postcode," ",e.country),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("a",{href:"callto:".concat(e.mobile)},e.mobile)))))))}}]),a}(n.Component),k=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement(d,{sns:this.props.resumeData.sns,listType:"social-links"}),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2014 CeeVee"),l.a.createElement("li",null,"Design by ",l.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),O={imagebaseurl:"http://localhost:3000/",name:"Jongmin Kim",email:"posthink2@gmail.com",mobile:"0422182898",address:"U 504 / 19 Epping Rd",city:"Epping",state:"NSW",postcode:"2121",location:"Sydney",country:"Australia",role:["Frontend Developer","Consultant","Sitecore / .Net Developer"],skills:[{skillname:"JavaScript",barwidth:"85"},{skillname:"CSS",barwidth:"90"},{skillname:"HTML5",barwidth:"95"},{skillname:"jQuery",barwidth:"90"},{skillname:"React",barwidth:"70"},{skillname:"AngularJS",barwidth:"50"},{skillname:"Sitecore",barwidth:"70"},{skillname:"ASP.NET MVC",barwidth:"65"}],works:[{id:1,name:"Thrifty",thumbnailImageUrl:"images/portfolio/thrifty.jpg",metaDescription:"Website development",heroImage:"images/portfolio/modals/thrifty.jpg",jobname:"thrifty.com.au",jobdescription:"UI implementation of brand new Thrifty website launched on June 2018",jobcategory:"Sitecore Web development",joburl:"http://www.thrifty.com.au"},{id:2,name:"MyNRMA",thumbnailImageUrl:"images/portfolio/nrma.jpg",metaDescription:"Website development",heroImage:"images/portfolio/modals/mynrma.jpg",jobname:"mynrma.com.au",jobdescription:"Implementing and integrating front end of Sitecore components",jobcategory:"Web development, Sitecore",joburl:"http://www.mynrma.com.au"},{id:3,name:"Avant Mutual",thumbnailImageUrl:"images/portfolio/avantmutual.jpg",metaDescription:"Intranet development",heroImage:"images/portfolio/modals/avant_mutual.jpg",jobname:"Avant Mutual Intranet",jobdescription:"Implementing web parts and page layouts",jobcategory:"Web development, Sharepoint",joburl:""},{id:4,name:"Hyundai",thumbnailImageUrl:"images/portfolio/hyundai.jpg",metaDescription:"Intranet development",heroImage:"images/portfolio/modals/hynet.jpg",jobname:"Avant Mutual Intranet",jobdescription:"Implementing web parts and page layouts",jobcategory:"Web development, Sharepoint",joburl:""},{id:5,name:"Get Healthy at Work",thumbnailImageUrl:"images/portfolio/ghaw.jpg",metaDescription:"Web development",heroImage:"images/portfolio/modals/ghaw.jpg",jobname:"gethealthyatwork.com.au",jobdescription:"Developing brief health check online survey, microsites and enhancement features on business portal",jobcategory:"Web development, Sitecore, AngularJS",joburl:"https://gethealthyatwork.com.au"},{id:6,name:"Your Experience of Service",thumbnailImageUrl:"images/portfolio/nswhealth.jpg",metaDescription:"Web development",heroImage:"images/portfolio/modals/yes.jpg",jobname:"www.yourexperience.health.nsw.gov.au/",jobdescription:"Developing multi-lingual support and sand box environments",jobcategory:"Web development, .Net, EF",joburl:"https://www.yourexperience.health.nsw.gov.au/"},{id:7,name:"Dimension Data",thumbnailImageUrl:"images/portfolio/dd.jpg",metaDescription:"Web development",heroImage:"images/portfolio/modals/dd.jpg",jobname:"Dimension Data Insights",jobdescription:"Developing front end of insights",jobcategory:"Web development, Sitecore",joburl:"https://www.dimensiondata.com/en/insights"},{id:8,name:"Toyota Australia",thumbnailImageUrl:"images/portfolio/toyota.jpg",metaDescription:"Web development",heroImage:"images/portfolio/toyota.jpg",jobname:"toyota.com.au",jobdescription:"Maintenance of legacy Toyota website, participation to Sitecore Website development which is the foundation of the current website",jobcategory:"Web development, Sitecore",joburl:"https://www.toyota.com.au"}],workhistory:[{name:"Oakton Ltd.",position:"Consultant",startDate:"January 2015",endDate:"",workDescription:"Providing an externally facing service to clients in the development of industry specific strategic business solutions aligned to projects and consulting assignments"},{name:"HotHouse Interactive",position:"Front end developer",startDate:"July 2014",endDate:"Jan 2015",workDescription:"Developing and maintaining public websites in an agile environment"}],sns:[{name:"facebook",url:"https://www.facebook.com/posthink2"},{name:"linkedin",url:"https://www.linkedin.com/in/jongmink/"},{name:"instagram",url:"https://www.instagram.com/lolplayer2718/"},{name:"github",url:"https://github.com/JongminKimSyd"},{name:"skype",url:"skype:posthink2@gmail.com?call"}]},I=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,{resumeData:O}),l.a.createElement(E,{resumeData:O}),l.a.createElement(f,{skills:O.skills,workhistory:O.workhistory}),l.a.createElement(y,{works:O.works}),l.a.createElement(j,null),l.a.createElement(N,{resumeData:O}),l.a.createElement(k,{resumeData:O}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.296696bb.chunk.js.map