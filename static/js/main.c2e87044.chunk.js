(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){e.exports=t(30)},22:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){e.exports=t.p+"static/media/meBW.26d5b98a.png"},25:function(e,a,t){e.exports=t.p+"static/media/photo.0c9bb441.png"},30:function(e,a,t){"use strict";t.r(a);t(16),t(17);var n=t(0),r=t.n(n),l=t(13),i=t.n(l),s=(t(22),t(1)),c=t(2),o=t(5),m=t(3),u=t(4),d=(t(23),t(7)),p=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).handleScroll=t.handleScroll.bind(Object(d.a)(t)),t.state={isScrolling:!1},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll),this.handleScroll()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){this.setState({isScrolling:!0}),setTimeout(function(){this.setState({isScrolling:!1})}.bind(this),3e3)}},{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-light navbar-expand-lg fixed-top"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse center",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("h1",{className:"nav-header"},r.a.createElement("a",{className:"nav-link navbar-links",href:"#about"},"about ",r.a.createElement("span",{className:"sr-only"},"(current)")))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("h1",{className:"nav-header"},r.a.createElement("a",{className:"nav-link navbar-links",href:"#resume"},"resume"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("h1",{className:"nav-header"},r.a.createElement("a",{className:"nav-link navbar-links",href:"#projects"},"projects"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("h1",{className:"nav-header"},r.a.createElement("a",{className:"nav-link navbar-links",href:"#skills"},"skills"))))))}}]),a}(n.Component),h=(t(24),t(8)),g=t.n(h),b=(t(25),t(6)),E=t.n(b),v=(t(9),t(10),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).onChange=function(e){t.props.onViewportChange(e,"about")},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(E.a,{animateIn:"fadeIn",animateOut:"fadeOut",afterAnimatedIn:function(){e.props.onViewportChange(!0,"about")},afterAnimatedOut:function(){e.props.onViewportChange(!1,"about")}},r.a.createElement("div",{className:"row page",id:"about"},r.a.createElement("div",{className:"hidden-xs hidden-sm col-md-1 col-lg-1"}),r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-7"},r.a.createElement("div",{className:"about-flex-collapse"},r.a.createElement("div",{className:"flex-center-right"},r.a.createElement("h1",{className:"title"},"hi, i'm anne marie"),r.a.createElement("p",{className:"about-me-paragraph"},"I'm a Fullstack Software Engineer specializing in JavaScript and Front-End Engineering. Currently based in Chicago, Illinois and employed as a Software Engineer for JP Morgan Chase.")),r.a.createElement("img",{src:g.a,className:"me",alt:"logo"})))))}}]),a}(n.Component)),f=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).onChange=function(e){console.log("resume change"),t.props.onViewportChange(e,"resume")},t.handleEducationHover=t.handleEducationHover.bind(Object(d.a)(t)),t.handleExperienceHover=t.handleExperienceHover.bind(Object(d.a)(t)),t.state={isEducationHovering:!1,isExperienceHovering:!1},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"handleEducationHover",value:function(){this.setState(this.toggleEducationHoverState)}},{key:"toggleEducationHoverState",value:function(e){return{isEducationHovering:!e.isEducationHovering}}},{key:"handleExperienceHover",value:function(){this.setState(this.toggleExperienceHoverState)}},{key:"toggleExperienceHoverState",value:function(e){return{isExperienceHovering:!e.isExperienceHovering}}},{key:"render",value:function(){var e=this;return r.a.createElement(E.a,{animateIn:"fadeIn",animateOut:"fadeOut",afterAnimatedIn:function(){e.props.onViewportChange(!0,"resume")},afterAnimatedOut:function(){e.props.onViewportChange(!1,"resume")}},r.a.createElement("div",{className:"row page",id:"resume"},r.a.createElement("div",{className:"d-none d-lg-block col-lg-3"}),r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-7 resume-container"},r.a.createElement("div",{className:"experience-container"},r.a.createElement("p",{className:"text-right border-right padding-right"},r.a.createElement("b",null,r.a.createElement("u",null,"JP Morgan Chase"))," ",r.a.createElement("br",null),"Software Engineer | ",r.a.createElement("i",null,"November 2017 - Present"),r.a.createElement("br",null),r.a.createElement("b",null,r.a.createElement("u",null,"PricewaterhouseCoopers"))," ",r.a.createElement("br",null),"Assurance Associate | ",r.a.createElement("i",null,"August 2015 - May 2017"),r.a.createElement("br",null),"Assurance Intern | ",r.a.createElement("i",null,"June 2014 - August 2014"),r.a.createElement("br",null)),r.a.createElement("h1",{className:"padding-left experience-header"},"experience")),r.a.createElement("br",{className:"resume-break"}),r.a.createElement("br",{className:"resume-break"}),r.a.createElement("div",{className:"education-container"},r.a.createElement("h1",{className:"text-right padding-right education-header"},"education"),r.a.createElement("p",{className:"border-left padding-left"},r.a.createElement("b",null,r.a.createElement("u",null,"The Ohio State University")),r.a.createElement("br",null),r.a.createElement("i",null,"B.S. in Business Administration"),"  |  Accounting  |  3.6 GPA ",r.a.createElement("br",null),"Honors Cohort Program: 1 of 30 out of over 1000 business students selected to participate in a rigorous academic program that focused on leadership skills, team building, real-world experience, and service-learning opportunities ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,r.a.createElement("u",null,"Fullstack Academy"))," ",r.a.createElement("br",null),r.a.createElement("i",null,"Software Engineering")," ",r.a.createElement("br",null),"Intensive software development program focusing on JavaScript, Sequelize, Express, React, and related libraries. Created multiple fullstack applications.")))))}}]),a}(n.Component),N=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(E.a,{animateIn:"fadeIn",animateOut:"fadeOut",afterAnimatedIn:function(){e.props.onViewportChange(!0,"projects")},afterAnimatedOut:function(){e.props.onViewportChange(!1,"projects")}},r.a.createElement("div",{className:"page content-page row",id:"projects"},r.a.createElement("img",{src:g.a,className:"me",style:{marginBottom:"20px"},alt:"logo"}),r.a.createElement("div",{className:"header-bg"},r.a.createElement("h1",{className:"title"}," Projects ")),r.a.createElement("p",null,"(coming soon!)")))}}]),a}(n.Component),w=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).onChange=function(e){t.props.onViewportChange(e,"skills")},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(E.a,{animateIn:"fadeIn",animateOut:"fadeOut",afterAnimatedIn:function(){e.props.onViewportChange(!0,"skills")},afterAnimatedOut:function(){e.props.onViewportChange(!1,"skills")}},r.a.createElement("div",{className:"page content-page row",id:"skills"},r.a.createElement("img",{src:g.a,className:"me",style:{marginBottom:"20px"},alt:"logo"}),r.a.createElement("div",{className:"header-bg"},r.a.createElement("h1",{className:"title"}," Skills ")),r.a.createElement("p",null,"(also coming soon!)")))}}]),a}(n.Component),O=t(11),k=t.n(O),j=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).handleViewportChange=function(e,a){console.log(a,e),"about"===a?t.setState({aboutIsVisible:e}):"resume"===a?t.setState({resumeIsVisible:e}):"projects"===a?t.setState({projectsIsVisible:e}):"skills"===a&&t.setState({skillsIsVisible:e})},t.state={aboutIsVisible:!1,resumeIsVisible:!1,projectsIsVisible:!1,skillsIsVisible:!1},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=k()(".page").outerHeight();k()(".page").css({height:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("header",{className:"App-header"},r.a.createElement(p,{aboutIsVisible:this.state.aboutIsVisible,resumeIsVisible:this.state.resumeIsVisible,projectsIsVisible:this.state.projectsIsVisible,skillsIsVisible:this.state.skillsIsVisible}),r.a.createElement(v,{onViewportChange:this.handleViewportChange}),r.a.createElement(f,{onViewportChange:this.handleViewportChange}),r.a.createElement(N,{onViewportChange:this.handleViewportChange}),r.a.createElement(w,{onViewportChange:this.handleViewportChange})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t.p+"static/media/me.4c5f826b.png"}},[[15,1,2]]]);
//# sourceMappingURL=main.c2e87044.chunk.js.map