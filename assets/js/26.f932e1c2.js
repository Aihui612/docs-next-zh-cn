(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{397:function(t,e,i){},405:function(t,e,i){"use strict";i(397)},512:function(t,e,i){"use strict";i.r(e);i(214),i(9);var r=i(391),s={components:{VuerLanguage:function(){return i.e(21).then(i.bind(null,511))},SocialIcon:function(){return Promise.all([i.e(0),i.e(6)]).then(i.bind(null,452))}},props:{profile:Object,useMiles:Boolean},computed:{workHtml:function(){var t=this.profile.work,e="";return t.orgUrl?(e+='<a href="'.concat(t.orgUrl,'" target="_blank" rel="noopener noreferrer">'),t.org?e+=t.org:this.minimizeLink(t.orgUrl),e+="</a>"):t.org&&(e+=t.org),t.role&&(e=e.length>0?"".concat(t.role," @ ").concat(e):t.role),e},textDistance:function(){var t=this.profile.distanceInKm||0;return this.useMiles?"".concat(Object(r.f)(Object(r.d)(t))," miles"):"".concat(Object(r.f)(t),"km")},hasSocialLinks:function(){return this.profile.github||this.profile.twitter||this.profile.codepen||this.profile.linkedin}},methods:{minimizeLink:r.e,generateGithubUrl:r.a}},a=(i(405),i(56)),n=Object(a.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vuer"},[i("div",{staticClass:"avatar"},[t.profile.imageUrl?i("img",{attrs:{src:t.profile.imageUrl,alt:t.profile.name,width:"80",height:"80"}}):t.profile.github?i("img",{attrs:{src:"https://github.com/"+t.profile.github+".png",alt:t.profile.name,width:"80",height:"80"}}):t.profile.twitter?i("img",{attrs:{src:"https://avatars.io/twitter/"+t.profile.twitter,alt:t.profile.name,width:"80",height:"80"}}):t._e()]),t._v(" "),i("div",{staticClass:"profile"},[i("h3",{attrs:{"data-official-title":t.profile.title}},[t._v(t._s(t.profile.name))]),t._v(" "),i("dl",[t.profile.reposOfficial?[i("dt",[t._v("Core focus")]),t._v(" "),i("dd",[i("ul",t._l(t.profile.reposOfficial,(function(e){return i("li",[i("a",{attrs:{href:t.generateGithubUrl("vuejs",e),target:"_blank"}},[t._v(t._s(e.name||e))])])})),0)])]:t._e(),t._v(" "),t.profile.github&&t.profile.reposPersonal?[i("dt",[t._v("Ecosystem")]),t._v(" "),i("dd",[i("ul",t._l(t.profile.reposPersonal,(function(e){return i("li",[i("a",{attrs:{href:t.generateGithubUrl(t.profile.github,e),target:"_blank"}},[t._v(t._s(e.name||e))])])})),0)])]:t._e(),t._v(" "),t.profile.work?[t._m(0),t._v(" "),i("dd",{domProps:{innerHTML:t._s(t.workHtml)}})]:t._e(),t._v(" "),t.profile.distanceInKm?i("span",{staticClass:"distance"},[t._m(1),t._v(" "),i("dd",[t._v("\n          About\n          "),t.profile.distanceInKm<=150?i("span",{staticClass:"highlighted",attrs:{title:t.profile.name+" is close enough to commute to your location."}},[t._v(t._s(t.textDistance)+" away")]):[t._v(t._s(t.textDistance)+" away")],t._v("\n          in "+t._s(t.profile.city)+"\n        ")],2)]):t.profile.city?[t._m(2),t._v(" "),i("dd",[t._v("\n          "+t._s(t.profile.city)+"\n        ")])]:t._e(),t._v(" "),t.profile.languages?[t._m(3),t._v(" "),i("dd",{staticClass:"language-list"},[i("ul",t._l(t.profile.languages,(function(e){return i("VuerLanguage",{key:e,tag:"li",attrs:{code:e,vuerName:t.profile.name}})})),1)])]:t._e(),t._v(" "),t.profile.links?[t._m(4),t._v(" "),i("dd",[i("ul",t._l(t.profile.links,(function(e){return i("li",[i("a",{attrs:{href:e,target:"_blank"}},[t._v(t._s(t.minimizeLink(e)))])])})),0)])]:t._e(),t._v(" "),t.hasSocialLinks?i("footer",{staticClass:"social"},[t.profile.github?i("SocialIcon",{attrs:{type:"GitHub",link:t.generateGithubUrl(t.profile.github)}}):t._e(),t._v(" "),t.profile.twitter?i("SocialIcon",{attrs:{type:"Twitter",link:"https://twitter.com/"+t.profile.twitter}}):t._e(),t._v(" "),t.profile.codepen?i("SocialIcon",{attrs:{type:"CodePen",link:"https://codepen.io/"+t.profile.codepen}}):t._e(),t._v(" "),t.profile.linkedin?i("SocialIcon",{attrs:{type:"LinkedIn",link:"https://www.linkedin.com/in/"+t.profile.linkedin}}):t._e()],1):t._e()],2)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("dt",[e("i",{staticClass:"fa fa-briefcase"}),this._v(" "),e("span",{staticClass:"sr-only"},[this._v("Work")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("dt",[e("i",{staticClass:"fa fa-map-marker"}),this._v(" "),e("span",{staticClass:"sr-only"},[this._v("Distance")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("dt",[e("i",{staticClass:"fa fa-map-marker"}),this._v(" "),e("span",{staticClass:"sr-only"},[this._v("City")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("dt",[e("i",{staticClass:"fa fa-globe"}),this._v(" "),e("span",{staticClass:"sr-only"},[this._v("Languages")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("dt",[e("i",{staticClass:"fa fa-link"}),this._v(" "),e("span",{staticClass:"sr-only"},[this._v("Links")])])}],!1,null,"f50d1baa",null);e.default=n.exports}}]);