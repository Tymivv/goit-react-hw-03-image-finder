(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,a){t.exports={backdrop:"Modal_backdrop__1CD8K",modal:"Modal_modal__1nm47"}},46:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),c=a(3),s=a(4),l=a(6),u=a(5),h=a(21),g=a(22),m=a(1),p={form:{marginBottom:20}},d=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={image:""},t.handleNameChange=function(e){t.setState({image:e.currentTarget.value.toLowerCase()})},t.handleSubmit=function(e){e.preventDefault(),""!==t.state.image.trim()?(t.props.onSubmit(t.state.image),t.setState({image:""})):g.a.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438.")},t}return Object(s.a)(a,[{key:"render",value:function(){return Object(m.jsx)("header",{className:"searchbar",children:Object(m.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,style:p.form,children:[Object(m.jsx)("input",{type:"text",name:"image",value:this.state.image,onChange:this.handleNameChange,placeholder:"Search images and photos"}),Object(m.jsxs)("button",{type:"submit",className:"button",children:[Object(m.jsx)(h.a,{style:{marginRight:8}}),Object(m.jsx)("span",{className:"button-label",children:"Search"}),"\u041d\u0430\u0439\u0442\u0438"]})]})})}}]),a}(n.Component),b=a(11),j=a.n(b),f=document.querySelector("#modal-root"),O=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).onEscPress=function(e){"Escape"===e.code&&(console.log("Escape"),t.props.onClose())},t.handleBackdropClick=function(e){e.target===e.currentTarget&&t.props.onClose()},t}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onEscPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onEscPress)}},{key:"render",value:function(){var t=this.props.img;return Object(o.createPortal)(Object(m.jsx)("div",{className:j.a.backdrop,onClick:this.handleBackdropClick,children:Object(m.jsx)("div",{className:j.a.modal,children:Object(m.jsx)("img",{src:t,alt:""})})}),f)}}]),a}(n.Component),v=O,y=void 0,k=function(t){t.articles.map((function(t){var e=t.id,a=t.webformatURL;t.largeImageURL;return Object(m.jsx)("li",{onClick:function(){return y.onClickLargeImageURL(e)},children:Object(m.jsx)("img",{src:a,alt:""})},e)}))},S=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={openModal:!1,largeImage:""},t.getImglarge=function(e){if(e.target!==e.currentTarget){var a=e.target.closest("li").getAtribute("largeImage");t.setState({largeImage:a}),t.setState({openModal:!0})}},t}return Object(s.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("ul",{onClick:this.getImglarge,children:[this.setState.openModal&&Object(m.jsx)(v,{largeImage:this.setState.largeImage}),Object(m.jsx)(k,{articles:this.props.articles})]})}}]),a}(n.Component),x=S,w=a(12),C=a.n(w),L=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={articles:[],isLoading:!1,error:null,image:"cat",page:1},t.handleFormSubmit=function(e){t.setState({image:e}),console.log(e)},t.onClickLargeImageURL=function(e){t.setState({openModal:!0}),t.setState((function(t){return{contacts:t.articles.filter((function(t){return t.id===e}))}}))},t}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.setState({isLoading:!0}),C.a.get("https://pixabay.com/api/?q=".concat(this.state.image,"&page=").concat(this.state.page,"&key=24480500-399700875c121f80bab96d725&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return t.setState({articles:e.data.hits})})).catch((function(e){return t.setState({error:e})})).finally((function(){return t.setState({isLoading:!1})}))}},{key:"componentDidUpdate",value:function(t,e){var a=this,n=this.state.image;e.image!==n&&(this.setState({isLoading:!0}),C.a.get("https://pixabay.com/api/?q=".concat(this.state.image,"&page=").concat(this.state.page,"&key=24480500-399700875c121f80bab96d725&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return a.setState({articles:t.data.hits})})).catch((function(t){return a.setState({error:t})})).finally((function(){return a.setState({isLoading:!1})})))}},{key:"render",value:function(){var t=this.state,e=t.articles,a=t.isLoading,n=t.error;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(d,{onSubmit:this.handleFormSubmit}),this.state.openModal&&Object(m.jsx)(v,{img:this.state.articles.largeImageURL}),n&&Object(m.jsxs)("p",{children:["Whoops, something went wrong: ",n.message]}),a&&Object(m.jsx)("p",{children:"Loading..."}),e.length>0&&Object(m.jsx)(x,{articles:e})]})}}]),a}(n.Component),I=L;i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(I,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.5ca90eee.chunk.js.map