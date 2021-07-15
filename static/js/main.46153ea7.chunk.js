(this["webpackJsonpreact-18"]=this["webpackJsonpreact-18"]||[]).push([[0],{17:function(t,e,n){t.exports={input:"ContactForm_input__1F5Eu",btn:"ContactForm_btn__-_7P_"}},34:function(t,e,n){t.exports={container:"Filter_container__1raHU"}},35:function(t,e,n){t.exports=n(76)},7:function(t,e,n){t.exports={container:"ContactsList_container__3HJON",item:"ContactsList_item__1IG_9",name:"ContactsList_name__2RrGB",btn:"ContactsList_btn__1DMiC",item__container:"ContactsList_item__container__1WrjR"}},75:function(t,e,n){},76:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),u=n(3),i=(n(46),n(12)),l=n(13),s=n(16),m=n(14),b=n(5),f=n(32),d=n.n(f),p=n(21),h=n.n(p),C=n(33),j=n(8),v=n.n(j),O=n(1),_=Object(O.b)("contacts/fetchContactRequest"),E=Object(O.b)("contacts/fetchContactSuccess"),y=Object(O.b)("contacts/fetchContactError"),g=Object(O.b)("contacts/addContactRequest"),N=Object(O.b)("contacts/addContactSuccess"),k=Object(O.b)("contacts/addContactError"),w=Object(O.b)("contacts/deleteContactRequest"),S=Object(O.b)("contacts/deleteContactSuccess"),L=Object(O.b)("contacts/deleteContactError"),x=Object(O.b)("contacts/filter");v.a.defaults.baseURL="http://localhost:4040";var A,I=function(){return function(){var t=Object(C.a)(h.a.mark((function t(e){var n,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(_()),t.prev=1,t.next=4,v.a.get("/contacts");case 4:n=t.sent,a=n.data,e(E(a)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(y(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},D=function(t){return function(e){e(g()),v.a.post("/contacts",t).then((function(t){var n=t.data;return e(N(n))})).catch((function(t){return e(k(t))}))}},F=function(t){return function(e){e(w()),v.a.delete("/contacts/".concat(t)).then((function(){return e(S(t))})).catch((function(t){return e(L(t))}))}},R=n(17),q=n.n(R),z=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={id:"",name:"",number:""},t.nameInputId=d.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(b.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmitProps(t.state),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("label",{htmlFor:this.nameInputID},"Name",c.a.createElement("input",{type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,id:this.nameInputId,className:q.a.input})),c.a.createElement("label",null,"Number",c.a.createElement("input",{type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,className:q.a.input})),c.a.createElement("button",{type:"submit",className:q.a.input},"Add contact")))}}]),n}(a.Component),J=Object(u.b)(null,(function(t){return{onSubmitProps:function(e){return t(D(e))}}}))(z),M=n(7),P=n.n(M),B=n(11),Z=function(t){return t.filter},G=Object(B.a)([function(t){return t.contacts},Z],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),H=Object(u.b)((function(t){return{contacts:G(t)}}),(function(t){return{onDeleteContact:function(e){return t(F(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return c.a.createElement("div",{className:P.a.container},c.a.createElement("h2",null,"Contacts"),c.a.createElement("ul",null,e.map((function(t){var e=t.id,a=t.name,r=t.number;return c.a.createElement("li",{key:e,className:P.a.item},c.a.createElement("div",{className:P.a.item__container},c.a.createElement("p",{className:P.a.name},a,": ",r),c.a.createElement("button",{type:"button",className:P.a.btn,onClick:function(){n(e)}},"Delete")))}))))})),T=n(34),U=n.n(T),W=Object(u.b)((function(t){return{value:Z(t)}}),(function(t){return{onChange:function(e){return t(x(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return c.a.createElement("label",{className:U.a.container},"Find contacts by name ",c.a.createElement("input",{type:"text",value:e,onChange:n}))})),$=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={filter:""},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement(J,null),c.a.createElement(W,null),c.a.createElement(H,null)))}}]),n}(a.Component),K=Object(u.b)(null,(function(t){return{fetchContacts:function(){return t(I())}}}))($),Q=n(15),V=n(4),X=Object(O.c)([],(A={},Object(b.a)(A,E,(function(t,e){return e.payload})),Object(b.a)(A,N,(function(t,e){var n=e.payload,a=n.name;if(console.log(n),!t.find((function(t){return t.name.toLowerCase()===a.toLowerCase()})))return[n].concat(Object(Q.a)(t));alert("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 !")})),Object(b.a)(A,S,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),A)),Y=Object(O.c)("",Object(b.a)({},x,(function(t,e){return e.payload}))),tt=Object(V.b)({contacts:X,filter:Y}),et=n(6),nt=Object(Q.a)(Object(O.d)({serializableCheck:{ignoredActions:[et.a,et.f,et.b,et.c,et.d,et.e]}})),at=Object(O.a)({reducer:tt,middleware:nt,devTools:!1});n(74),n(75);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u.a,{store:at},c.a.createElement(K,null))),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.46153ea7.chunk.js.map