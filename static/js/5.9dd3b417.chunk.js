(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[5],{83:function(e,a,t){"use strict";t.r(a);var n=t(70),r=t(71),l=t(73),c=t(72),s=t(0),m=t.n(s),i=t(7),o=t(78),u=t(79),p=t(75),h=t(80),d=t(21),b=t(19),g=t(12),E=t(22),f=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={name:"",email:"",password:"",mobile:"",msg:null},e.handleChange=function(a){e.setState(Object(d.a)({},a.target.name,a.target.value))},e.handleSubmit=function(a){a.preventDefault();var t=e.state,n={name:t.name,email:t.email,password:t.password,mobile:t.mobile};Object(E.c)(n).then((function(a){e.context.dispatch({type:"REGISTER_SUCCESS",payload:a.data}),e.props.history.goBack()})).catch((function(a){return e.setState((function(e){return{msg:a.msg}}))}))},e}return Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement("main",{className:"signup"},m.a.createElement("h3",null,"Sign Up"),m.a.createElement("div",{className:"signup-form grid"},m.a.createElement("form",{onSubmit:this.handleSubmit,className:"grid"},this.state.msg?m.a.createElement("label",{className:"error"},this.state.msg):null,m.a.createElement("label",{htmlFor:"name"},"Name : "),m.a.createElement("input",{type:"text",name:"name",placeholder:"name",onChange:this.handleChange,required:!0}),m.a.createElement("label",{htmlFor:"email"},"Email Address : "),m.a.createElement("input",{type:"email",name:"email",placeholder:"example@email.com",onChange:this.handleChange,required:!0}),m.a.createElement("label",{htmlFor:"password"},"Password : "),m.a.createElement("input",{type:"password",name:"password",placeholder:"password",onChange:this.handleChange,required:!0}),m.a.createElement("label",{htmlFor:"mobile"},"Mobile Number: "),m.a.createElement("input",{type:"tel",name:"mobile",placeholder:"0123456789",onChange:this.handleChange,required:!0}),m.a.createElement("input",{type:"submit",value:"Register",className:"button but-col"})),m.a.createElement("div",{className:"existinguser"},"Existing User? ",m.a.createElement(b.b,{to:"/user/signin"},"Sign in"))))}}]),t}(s.Component);f.contextType=g.a;var y=Object(i.i)(f),v=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={email:"",password:"",msg:null},e.handleChange=function(a){e.setState(Object(d.a)({},a.target.name,a.target.value))},e.handleSubmit=function(a){a.preventDefault();var t=e.state,n={email:t.email,password:t.password};Object(E.b)(n).then((function(a){e.context.dispatch({type:"LOGIN_SUCCESS",payload:a.data}),e.props.history.goBack()})).catch((function(a){return e.setState((function(e){return{msg:a.msg}}))}))},e}return Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement("main",{className:"signup"},m.a.createElement("h3",null,"Sign In"),m.a.createElement("div",{className:"signup-form grid"},m.a.createElement("form",{onSubmit:this.handleSubmit,className:"grid"},this.state.msg?m.a.createElement("label",{className:"error"},this.state.msg):null,m.a.createElement("label",{htmlFor:"email"},"Email Address : "),m.a.createElement("input",{type:"email",name:"email",placeholder:"example@email.com",onChange:this.handleChange,required:!0}),m.a.createElement("label",{htmlFor:"password"},"Password : "),m.a.createElement("input",{type:"password",name:"password",placeholder:"password",onChange:this.handleChange,required:!0}),m.a.createElement("input",{type:"submit",value:"Login",className:"button but-col"})),m.a.createElement("div",{className:"existinguser"},"New User? ",m.a.createElement(b.b,{to:"/user/signup"},"Sign up"))))}}]),t}(s.Component);v.contextType=g.a;var w=Object(i.i)(v),C=t(76),S=t(77),O=t(81),j=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement(o.a,null),m.a.createElement(i.d,null,m.a.createElement(i.b,{exact:!0,path:"/",component:S.a}),m.a.createElement(i.b,{path:"/query/:queryName",component:O.a}),m.a.createElement(i.b,{exact:!0,path:"/category/:categoryName",component:h.a}),m.a.createElement(i.b,{exact:!0,path:"/user/cart",component:p.a}),m.a.createElement(i.b,{path:"/user/signup",component:y}),m.a.createElement(i.b,{path:"/user/signin",component:w}),m.a.createElement(i.b,{exact:!0,path:"/user",component:N}),m.a.createElement(i.b,{exact:!0,path:"/user/orders",component:N}),m.a.createElement(i.b,{exact:!0,path:"/user/addresses",component:N}),m.a.createElement(i.b,{exact:!0,path:"/user/cart/checkout",component:N}),m.a.createElement(i.b,{path:"/user/address/createaddress",component:N}),m.a.createElement(i.b,{path:"*"},m.a.createElement(C.a,null))),m.a.createElement(u.a,null))}}]),t}(s.Component),N=function(){return m.a.createElement(i.a,{to:"/user/signin"})};a.default=j}}]);
//# sourceMappingURL=5.9dd3b417.chunk.js.map