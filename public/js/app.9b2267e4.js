(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],m=0,d=[];m<r.length;m++)o=r[m],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},i={app:0},a=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},"193d":function(t,e,n){t.exports=n.p+"img/brunjo-logo-weiß-mit-bildmarke-neu.cb11cf15.svg"},"1a12":function(t,e,n){},"2df6":function(t,e,n){"use strict";var s=n("81ae"),i=n.n(s);i.a},"2ed9":function(t,e,n){},"2f24":function(t,e,n){"use strict";var s=n("54c9"),i=n.n(s);i.a},"31f7":function(t,e,n){t.exports=n.p+"img/header.65a6a87e.png"},3219:function(t,e,n){"use strict";var s=n("2ed9"),i=n.n(s);i.a},"54c9":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("navbar"),n("div",{staticClass:"container"},[n("GameHeader"),t.connectedToGame?t._e():n("Home"),t.connectedToGame?n("InGame"):t._e(),n("GameFooter")],1)],1)},a=[],o=n("5530"),r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"custom-navbar"},[s("div",{staticClass:"custom-container"},[s("a",{attrs:{href:"https://brunjo.de"}},[s("img",{staticClass:"brand-in-custom-navbar",attrs:{src:n("193d")}})])])])])}],l={},u=l,m=(n("5dfc"),n("2877")),d=Object(m["a"])(u,r,c,!1,null,null,null),f=d.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page no-gutters"},[s("div",{staticClass:"col"},[s("div",{staticClass:"row mb-3"},[s("div",{staticClass:"col"},[s("button",{staticClass:"btn btn-secondary btn-block",class:{disabled:1==t.wantToJoin},on:{click:function(e){return t.setWantToJoin(!1)}}},[t._v("Spiel erstellen")])]),s("div",{staticClass:"col"},[s("button",{staticClass:"btn btn-secondary btn-block",class:{disabled:0==t.wantToJoin},on:{click:function(e){return t.setWantToJoin(!0)}}},[t._v("Spiel beitreten")])])]),s("img",{attrs:{src:n("d106"),width:"100%",alt:""}}),s("p",{staticClass:"mb-4 font-weight-light"},[t._v("Wähle aus ob du ein Spiel erstellen oder einem beitreten möchtest")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"form-group text-left"},[s("label",{attrs:{for:"playerNameInput"}},[t._v("Dein Nickname")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.playerName,expression:"playerName"}],staticClass:"form-control",attrs:{type:"text",maxlength:"12",id:"playerNameInput"},domProps:{value:t.playerName},on:{input:[function(e){e.target.composing||(t.playerName=e.target.value)},function(e){return t.checkFormToBeValid()}]}})])]),1==t.wantToJoin?s("div",{staticClass:"col"},[s("div",{staticClass:"form-group text-left"},[s("label",{attrs:{for:"playerNameInput"}},[t._v("Spielcode")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.gameCode,expression:"gameCode"}],staticClass:"form-control",attrs:{type:"number",id:"playerNameInput",maxlength:"12"},domProps:{value:t.gameCode},on:{input:[function(e){e.target.composing||(t.gameCode=e.target.value)},function(e){return t.checkFormToBeValid()}]}})])]):t._e()]),1==t.wantToJoin?s("button",{staticClass:"btn btn-primary btn-block btn-important",attrs:{disabled:!this.valid},on:{click:function(e){return t.joinGame()}}},[t._v("Spiel beitreten")]):t._e(),0==t.wantToJoin?s("button",{staticClass:"btn btn-primary btn-block btn-important",attrs:{disabled:!this.valid},on:{click:function(e){return t.createGame()}}},[t._v("Spiel erstellen")]):t._e()])])])},v=[],b=(n("4160"),n("ac1f"),n("1276"),n("159b"),n("2f62")),h={computed:Object(b["c"])(["socket"]),created:function(){var t=window.location.href.split("?");if(2==t.length){var e=t[1].split("&"),n={},s="";e.forEach((function(t){s=t.split("="),2==s.length&&(n[s[0]]=s[1])})),null!=n.join&&(this.gameCode=n.join,this.wantToJoin=!0)}document.addEventListener("keyup",(function(t){"Enter"===t.code&&"activeElement"in document&&document.activeElement.blur()}))},updated:function(){},methods:{setWantToJoin:function(t){this.wantToJoin=t},checkFormToBeValid:function(){return!this.playerName||this.playerName.length>12||this.wantToJoin&&!this.gameCode?(this.valid=!1,!1):(this.valid=!0,!0)},createGame:function(){this.socket.emit("CreateGame",this.playerName)},joinGame:function(){this.socket.emit("JoinGame",{playerName:this.playerName,gameId:this.gameCode})}},data:function(){return{wantToJoin:!1,valid:!1,gameCode:null,playerName:""}}},g=h,C=Object(m["a"])(g,p,v,!1,null,null,null),_=C.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page no-gutters"},[s("div",{staticClass:"col text-left"},[s("InGameHeader",{staticClass:"mb-4"}),null!=this.gameInfo.resolveOfLastRound&&null==this.gameInfo.round?s("div",{staticClass:"row no-gutters"},[s("div",{staticClass:"col"},[s("div",{staticClass:"my-3"},[s("p",{staticClass:"text-center h3 mb-3"},[t._v(t._s(this.gameInfo.resolveOfLastRound.questionText))]),s("br"),this.gameInfo.resolveOfLastRound.numberOfYes>1?s("p",{staticClass:"text-center h4 mb-4"},[t._v(t._s(this.gameInfo.resolveOfLastRound.numberOfYes)+" Spieler haben es gemacht")]):s("p",{staticClass:"text-center h4 mb-4"},[t._v(t._s(this.gameInfo.resolveOfLastRound.numberOfYes)+" Spieler hat es gemacht")])]),s("br"),s("p",{staticClass:"text-left h6"},[t._v("Schätzungen der Mitspieler:")]),s("table",{staticClass:"table"},[t._m(0),s("tbody",t._l(t.sortedPlayerList,(function(e){return s("tr",{key:e.playerName},[s("td",[t._v(t._s(e.playerName))]),s("td",[t._v(t._s(e.estimation))]),s("td",[t._v(t._s(e.difference))])])})),0)])])]):t._e(),null==this.gameInfo.round?s("div",{staticClass:"mb-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("button",{staticClass:"btn btn-block btn-primary btn-important",attrs:{disabled:!t.iAmAdmin||t.gameInfo.playerList.length<2},on:{click:function(e){return t.startRound()}}},[t._v("Neue Runde")])])]),t.iAmAdmin?t._e():s("p",{staticClass:"text-center"},[t._v("Warte bis der Admin die Runde startet")]),t.gameInfo.playerList.length<2?s("p",{staticClass:"text-center"},[t._v("Alleine spielen ist langweilig, lade noch Freunde ein ;)")]):t._e()]):t._e(),null!=this.gameInfo.round?s("InRound",{staticClass:"mb-4"}):t._e(),s("img",{staticClass:"my-3",attrs:{src:n("d106"),width:"100%",alt:""}}),s("PlayerList"),t.iAmAdmin&&null!=this.gameInfo.round?s("div",{staticClass:"row no-gutters mt-4"},[s("button",{staticClass:"btn btn-danger btn-block",on:{click:function(e){return t.resolveRound()}}},[t._v("Runde beenden")])]):t._e()],1)])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("Spieler")]),n("th",{attrs:{scope:"col"}},[t._v("Schätzung")]),n("th",{attrs:{scope:"col"}},[t._v("Differenz")])])])}],w=(n("fb6a"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page no-gutters"},[s("h2",[t._v("Mitspieler:")]),s("br"),s("div",{staticClass:"row row-cols-2"},t._l(this.gameInfo.playerList,(function(e){return s("div",{key:e.playerName,staticClass:"col"},[s("div",{class:{"text-secondary":null==t.gameInfo.round||null==e.estimation,"text-success":null!=t.gameInfo.round&&null!=e.estimation}},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"mr-1"},[t._v(t._s(e.playerName))]),e.isAdmin?s("div",[t._v("(admin)")]):t._e()])])])})),0),s("img",{staticClass:"my-3",attrs:{src:n("d106"),width:"100%",alt:""}})])}),I=[],A={computed:Object(b["c"])(["gameInfo"]),methods:{}},x=A,G=(n("3219"),Object(m["a"])(x,w,I,!1,null,null,null)),j=G.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-block btn-outline-secondary",on:{click:function(e){return t.leaveGame()}}},[t._v("Spiel verlassen")])]),n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-block btn-success",attrs:{id:"copyLinkButton"},on:{click:function(e){return t.copyInviteLink()}}},[t._v("Spielcode: "+t._s(this.gameInfo.id))])]),n("div",{staticClass:"outer"},[n("div",{staticClass:"inner"},[n("input",{directives:[{name:"model",rawName:"v-model",value:this.inviteLink,expression:"this.inviteLink"}],attrs:{id:"invite-link"},domProps:{value:this.inviteLink},on:{input:function(e){e.target.composing||t.$set(this,"inviteLink",e.target.value)}}})])])])])},O=[],S={computed:Object(b["c"])(["gameInfo","socket"]),methods:{generateInviteLinkt:function(){var t=window.location.href.split("?")[0];return t=t+"?join="+this.gameInfo.id,t},copyInviteLink:function(){this.inviteLink=this.generateInviteLinkt();var t=document.getElementById("invite-link"),e=document.getElementById("copyLinkButton");t.setAttribute("type","text"),t.setAttribute("value",this.inviteLink),t.select(),t.setSelectionRange(0,99999),document.execCommand("copy");var n=e.innerHTML;e.innerHTML="Link kopiert",t.blur(),setTimeout((function(){e.innerHTML=n}),1e3)},leaveGame:function(){confirm("Sicher dass du das Spiel verlassen willst?")&&this.socket.emit("LeaveGame")}},data:function(){return{inviteLink:""}}},L=S,E=(n("2f24"),Object(m["a"])(L,T,O,!1,null,"2434204a",null)),N=E.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page no-gutters"},[n("div",{staticClass:"col"},[n("br"),n("p",{staticClass:"text-center h3"},[t._v(t._s(t.gameInfo.round.questionText))]),n("br"),n("br"),t.estimationAccepted?t._e():n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-primary btn-block h-100",class:{disabled:1!=t.answer},on:{click:function(e){return t.setAnswer(1)}}},[t._v("Ja")])]),n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-secondary btn-block h-100",class:{disabled:2!=t.answer},on:{click:function(e){return t.setAnswer(2)}}},[t._v("Nein")])])]),n("br"),t.estimationAccepted?t._e():n("div",[n("p",{staticClass:"text-center"},[t._v("Schätze wie viele deiner Mitspieler mit Ja antworten")]),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.estimation,expression:"estimation"}],staticClass:"form-control h-100",attrs:{type:"number",max:t.gameInfo.playerList.length,min:0},domProps:{value:t.estimation},on:{blur:function(e){return t.handleUpdate(e)},input:function(e){e.target.composing||(t.estimation=e.target.value)}}})]),n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-primary btn-block h-100",attrs:{disabled:0==t.answer||1==t.loading},on:{click:function(e){return t.sendAnswer()}}},[t._v("Schätzung abgeben")])])]),n("br")]),t.answerAccepted&&t.estimationAccepted?n("div",[n("p",{staticClass:"text-center h3"},[t._v("Deine Antwort ist gespeichert!")]),n("p",{staticClass:"text-center"},[t._v("Warte auf deine Mitspieler...")])]):t._e()])])},P=[],$={computed:Object(b["c"])(["socket","gameInfo","iAmAdmin"]),mounted:function(){var t=this;this.socket.on("SendAnswer",(function(e){200==e.state?(console.log("Answer accepted"),t.answerAccepted=!0,t.sendEstimation()):t.loading=!1})),this.socket.on("SendEstimation",(function(e){200==e.state&&(t.estimationAccepted=!0,t.loading=!1)}))},destroyed:function(){this.socket.off("SendAnswer"),this.socket.off("SendEstimation")},methods:{sendAnswer:function(){this.loading=!0,console.log("Answer send"),this.socket.emit("SendAnswer",this.answer)},sendEstimation:function(){this.socket.emit("SendEstimation",this.estimation)},resolveRound:function(){this.socket.emit("ResolveRound")},setAnswer:function(t){this.answer=t},handleUpdate:function(t){t.target.value>t.target.max&&(this.estimation=t.target.max),t.target.value<t.target.min&&(this.estimation=t.target.min)}},data:function(){return{answerAccepted:!1,estimationAccepted:!1,estimation:0,answer:0,loading:!1}}},J=$,M=Object(m["a"])(J,R,P,!1,null,null,null),D=M.exports,H={components:{PlayerList:j,InGameHeader:N,InRound:D},computed:Object(o["a"])({sortedPlayerList:function(){return this.gameInfo.resolveOfLastRound.playerList.slice(0).sort((function(t,e){return t.difference<e.difference?-1:1}))}},Object(b["c"])(["socket","gameInfo","iAmAdmin"])),methods:{startRound:function(){this.socket.emit("StartRound",{gameId:this.gameInfo.id})},resolveRound:function(){this.socket.emit("ResolveRound")}}},z=H,B=Object(m["a"])(z,k,y,!1,null,null,null),F=B.exports,W=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{staticClass:"header-image mb-4",attrs:{src:n("31f7")}})])}],Y={},U=Y,q=(n("2df6"),Object(m["a"])(U,W,V,!1,null,null,null)),K=q.exports,Q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("br"),s("p",{staticClass:"text-justify"},[t._v("Der Partyklassiker ist jetzt auch online erreichbar. Hättsen Sie gedacht, dass vier ihrer Mitspieler schon mal geklaut haben, drei Intimschmuck tragen und alle schon mal jemanden ins Essen gespuckt haben? - bei Pricavy kommt alles ans Licht. Dabei bleiben eure Antworten geheim. Eins ist aber sicher: Sie werden aus dem Staunen kaum noch rauskommen!")]),s("br"),s("br"),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("a",{attrs:{href:"https://brunjo.de/impressum/"}},[t._v("Kontakt")])]),s("div",{staticClass:"col"},[s("a",{attrs:{href:"https://brunjo.de/impressum/"}},[t._v("Datenschutz")])]),s("div",{staticClass:"col"},[s("a",{attrs:{href:"https://brunjo.de/impressum/"}},[t._v("Impressum")])])]),s("br"),s("div",{staticClass:"row"},[s("img",{attrs:{src:n("d106"),width:"100%"}})]),s("br")])}],Z={},tt=Z,et=Object(m["a"])(tt,Q,X,!1,null,null,null),nt=et.exports,st={name:"App",components:{Navbar:f,Home:_,GameHeader:K,GameFooter:nt,InGame:F},methods:Object(o["a"])({},Object(b["b"])(["connect","setConnectedToGame","setGameInfo","setIAmAdmin"])),computed:Object(b["c"])(["socket","connectedToGame","gameInfo"]),created:function(){var t=this;this.connect(),this.socket.on("CreateGame",(function(e){200==e.state?(t.setGameInfo(e.gameInfo),t.setIAmAdmin(!0),t.setConnectedToGame(!0)):s["default"].$toast.open({message:e.msg,type:"error",position:"bottom",duration:4500})})),this.socket.on("JoinGame",(function(e){200==e.state?(t.setGameInfo(e.gameInfo),t.setConnectedToGame(!0)):s["default"].$toast.open({message:e.msg,type:"error",position:"bottom",duration:4500})})),this.socket.on("LeaveGame",(function(e){200==e.state?(t.setGameInfo({}),t.setConnectedToGame(!1),t.setIAmAdmin(!1),s["default"].$toast.open({message:"Spiel Verlassen",type:"info",position:"bottom",duration:4500})):s["default"].$toast.open({message:e.msg,type:"error",position:"bottom",duration:4500})})),this.socket.on("PingPong",(function(e){200!=e.state?(t.setGameInfo({}),t.setConnectedToGame(!1),t.setIAmAdmin(!1),s["default"].$toast.open({message:e.msg,type:"error",position:"bottom",duration:4500})):setTimeout((function(){t.socket.emit("PingPong",t.gameInfo.id)}),500)})),this.socket.on("YouAreAdmin",(function(){s["default"].$toast.open({message:"Du bist jetzt der Spieladmin",type:"info",position:"bottom",duration:4500}),t.setIAmAdmin(!0)})),this.socket.on("GameUpdate",(function(e){t.setGameInfo(e.gameInfo)}))}},it=st,at=(n("5c0b"),Object(m["a"])(it,i,a,!1,null,null,null)),ot=at.exports,rt=n("8055"),ct=n.n(rt),lt={socket:null},ut={socket:function(t){return t.socket},socketID:function(t){return t.socketID}},mt={connect:function(t){var e=t.commit;e("connect")}},dt={connect:function(t){var e;t.socket?t.socket.socket.connect():(e=ct()(),t.socketID=e.id,t.socket=e)}},ft={state:lt,getters:ut,actions:mt,mutations:dt},pt={connectedToGame:!1},vt={connectedToGame:function(t){return t.connectedToGame}},bt={setConnectedToGame:function(t,e){var n=t.commit;n("setConnectedToGame",e)}},ht={setConnectedToGame:function(t,e){t.connectedToGame=e}},gt={state:pt,getters:vt,actions:bt,mutations:ht},Ct={gameInfo:{},iAmAdmin:!1},_t={gameInfo:function(t){return t.gameInfo},iAmAdmin:function(t){return t.iAmAdmin}},kt={setGameInfo:function(t,e){var n=t.commit;n("setGameInfo",e)},setIAmAdmin:function(t,e){var n=t.commit;n("setIAmAdmin",e)}},yt={setGameInfo:function(t,e){t.gameInfo=e},setIAmAdmin:function(t,e){t.iAmAdmin=e}},wt={state:Ct,getters:_t,actions:kt,mutations:yt};s["default"].use(b["a"]);var It=new b["a"].Store({modules:{socketIOConnection:ft,gameConnectionState:gt,gameState:wt}}),At=(n("4989"),n("ce8c"),n("b079")),xt=n.n(At);s["default"].config.productionTip=!1,s["default"].use(xt.a),new s["default"]({store:It,render:function(t){return t(ot)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var s=n("9c0c"),i=n.n(s);i.a},"5dfc":function(t,e,n){"use strict";var s=n("1a12"),i=n.n(s);i.a},"81ae":function(t,e,n){},"9c0c":function(t,e,n){},d106:function(t,e,n){t.exports=n.p+"img/brunjo-trenner.47a46033.svg"}});
//# sourceMappingURL=app.9b2267e4.js.map