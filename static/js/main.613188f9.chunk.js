(this["webpackJsonpway-of-samurai"]=this["webpackJsonpway-of-samurai"]||[]).push([[0],{12:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__2Amyw",dialogsItems:"Dialogs_dialogsItems__flAbO",dialog:"Dialogs_dialog__3UqrR",active:"Dialogs_active__3t-ta",messages:"Dialogs_messages__3vFfU",message:"Dialogs_message__2rGeh",newMessage:"Dialogs_newMessage__1cZti"}},13:function(e,t,a){e.exports={user:"User_user__33exD",userInfo:"User_userInfo__2Q7Km",about:"User_about__hMyZg",avatar:"User_avatar__2GD82",userPhoto:"User_userPhoto__2nmjf",toggleBtn:"User_toggleBtn__o621u"}},27:function(e,t,a){e.exports={nav:"Navbar_nav__3ilfA",item:"Navbar_item__1b_X3",active:"Navbar_active__2aGl6"}},28:function(e,t,a){e.exports={users:"Users_users__3Z0mU",page:"Users_page__Qu4ja",selectedPage:"Users_selectedPage__1v3FK"}},33:function(e,t,a){e.exports={backImage:"ProfileInfo_backImage__3GkEv",descriptionBlock:"ProfileInfo_descriptionBlock__3_uCC"}},34:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__1VYe5",posts:"MyPosts_posts__JjByF"}},44:function(e,t,a){e.exports={header:"Header_header__co2Jb"}},45:function(e,t,a){e.exports={item:"Post_item__3vv9E"}},48:function(e,t,a){},56:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var s=a(25),n=a(43),r=a(24),c=a(2),A=a(79),i={posts:[{id:Object(A.a)(),message:"It's my third post",likesCount:1},{id:Object(A.a)(),message:"It's my second post",likesCount:2},{id:Object(A.a)(),message:"It's my first post",likesCount:3}],newPostText:"",profile:null},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var a={id:Object(A.a)(),message:e.newPostText,likesCount:0};return Object(c.a)(Object(c.a)({},e),{},{posts:[a].concat(Object(r.a)(e.posts)),newPostText:""});case"UPDATE_NEW_POST_TEXT":return Object(c.a)(Object(c.a)({},e),{},{newPostText:t.newText});case"SET_USER_PROFILE":return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});default:return e}},l={dialogs:[{id:Object(A.a)(),name:"Dimych"},{id:Object(A.a)(),name:"Andrey"},{id:Object(A.a)(),name:"Sveta"},{id:Object(A.a)(),name:"Sasha"},{id:Object(A.a)(),name:"Viktor"},{id:Object(A.a)(),name:"Valera"}],messages:[{id:Object(A.a)(),message:"Hi"},{id:Object(A.a)(),message:"How are you?"},{id:Object(A.a)(),message:"What are you doing?"}],newMessageText:""},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var a={id:Object(A.a)(),message:e.newMessageText};return Object(c.a)(Object(c.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[a]),newMessageText:""});case"UPDATE_NEW_MESSAGE_TEXT":return Object(c.a)(Object(c.a)({},e),{},{newMessageText:t.newText});default:return e}},j={users:[],pageSize:15,totalUsersCount:0,currentPage:1,isFetching:!1},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_FOLLOW":return Object(c.a)(Object(c.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(c.a)(Object(c.a)({},e),{},{followed:!e.followed}):e}))});case"SET_USERS":return Object(c.a)(Object(c.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(c.a)(Object(c.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(c.a)(Object(c.a)({},e),{},{totalUsersCount:t.totalCount});case"TOGGLE_IS_FETCHING":return Object(c.a)(Object(c.a)({},e),{},{isFetching:t.isFetching});default:return e}},g=Object(s.combineReducers)({profilePage:o,dialogsPage:u,usersPage:d}),b=Object(s.createStore)(g,Object(n.devToolsEnhancer)({})),p=(a(48),a(18)),O=a.n(p),m=a(10),h=a(11),E=a(4),v=(a(56),a(44)),f=a.n(v),B=a(0);var x=function(){return Object(B.jsx)("header",{className:f.a.header,children:Object(B.jsx)("img",{src:"https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg",alt:"logo"})})},T=a(27),U=a.n(T);function S(e){var t=e.name,a=t[0].toUpperCase()+t.slice(1);return Object(B.jsx)("div",{className:U.a.item,children:Object(B.jsx)(m.b,{to:"/".concat(t),activeClassName:U.a.active,children:a})})}var C=function(){var e=["profile","dialogs","users","news","music","settings"].map((function(e,t){return Object(B.jsx)(S,{name:e},t)}));return Object(B.jsx)("nav",{className:U.a.nav,children:e})};var I=function(){return Object(B.jsx)("div",{children:"News"})};var Q=function(){return Object(B.jsx)("div",{children:"Music"})};var w=function(){return Object(B.jsx)("div",{children:"Settings"})},P=a(12),N=a.n(P);var q=function(e){var t="/dialogs/".concat(e.id);return Object(B.jsx)("div",{className:N.a.dialog,children:Object(B.jsx)(m.b,{to:t,activeClassName:N.a.active,children:e.name})})};var z=function(e){return Object(B.jsx)("div",{className:N.a.message,children:e.message})};var y=function(e){var t=e.dialogsPage,a=t.dialogs,s=t.messages,n=t.newMessageText,r=a.map((function(e){return Object(B.jsx)(q,{name:e.name,id:e.id},e.id)})),c=s.map((function(e){return Object(B.jsx)(z,{message:e.message},e.id)}));return Object(B.jsxs)("div",{className:N.a.dialogs,children:[Object(B.jsx)("div",{className:N.a.dialogsItems,children:r}),Object(B.jsxs)("div",{className:N.a.messages,children:[Object(B.jsx)("div",{children:c}),Object(B.jsx)("div",{className:N.a.newMessage,children:Object(B.jsx)("textarea",{value:n,onChange:function(t){var a=t.currentTarget.value;e.updateNewMessageText(a)},placeholder:"Enter your message"})}),Object(B.jsx)("div",{children:Object(B.jsx)("button",{onClick:function(){e.sendMessage()},children:"Send Message"})})]})]})},M=Object(h.b)((function(e){return{dialogsPage:e.dialogsPage}}),{sendMessage:function(){return{type:"SEND_MESSAGE"}},updateNewMessageText:function(e){return{type:"UPDATE_NEW_MESSAGE_TEXT",newText:e}}})(y),V=a(21),k=a(22),W=a(26),F=a(23),L=a(1),J=a(17),D=a.n(J),G=a(28),R=a.n(G),H=a(13),X=a.n(H),K="data:image/jpeg;base64,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";var Z=function(e){var t=e.user;return Object(B.jsxs)("div",{className:X.a.user,children:[Object(B.jsxs)("div",{className:X.a.avatar,children:[Object(B.jsx)(m.b,{to:"/profile/".concat(t.id),children:Object(B.jsx)("img",{src:t.photos.small||K,alt:"avatar",className:X.a.userPhoto})}),Object(B.jsx)("div",{className:X.a.toggleBtn,children:Object(B.jsxs)("button",{onClick:function(){return e.toggleFollow(t.id)},children:[" ",t.followed?"Unfollow":"Follow"]})})]}),Object(B.jsx)("div",{className:X.a.userInfo,children:Object(B.jsxs)("div",{className:X.a.about,children:[Object(B.jsx)("div",{children:t.name}),Object(B.jsx)("div",{children:t.status})]})})]})};var Y=function(e){var t=e.users,a=e.toggleFollow,s=e.totalUsersCount,n=e.pageSize,r=e.onPageChanged,c=e.currentPage,A=Math.ceil(s/n),i=function(e,t){var a=[1];e<13&&(e=13),e>t-12&&(e=t-12);var s=Math.floor((e-1)/11);if(s<=3)for(var n=1;n<=10;n++)a.push(1+s*n);else for(var r=Math.pow(e-2,1/11),c=10;c>=1;c--){var A=Math.ceil(e-1-Math.pow(r,c));a.push(A)}a.push(e-1,e,e+1);var i=Math.floor((t-e)/11);if(i<=3)for(var o=10;o>=1;o--)a.push(t-i*o);else for(var l=Math.pow(t-e-1,1/11),u=1;u<=10;u++){var j=Math.ceil(e+Math.pow(l,u));a.push(j)}return a.push(t),a}(c,A).map((function(e,t){return Object(B.jsx)("span",{onClick:function(){r(e)},className:"".concat(R.a.page," ").concat(e===c&&R.a.selectedPage),children:e},t)})),o=t.map((function(e){return Object(B.jsx)(Z,{user:e,toggleFollow:a},e.id)}));return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)("div",{children:[" ",i," "]}),Object(B.jsxs)("div",{className:R.a.users,children:[" ",o," "]})]})},_=a.p+"static/media/preloader.d05d646d.svg";var $=function(){return Object(B.jsx)("img",{src:_,alt:"preloader"})},ee=function(e){Object(W.a)(a,e);var t=Object(F.a)(a);function a(){var e;Object(V.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).onPageChanged=function(t){var a=e.props,s=a.setCurrentPage,n=a.setUsers,r=a.pageSize,c=a.toggleIsFetching;c(!0),s(t),D.a.get("https://social-network.samuraijs.com/api/1.0/users?count=".concat(r,"&page=").concat(t)).then((function(e){n(e.data.items),c(!1)}))},e}return Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.setUsers,a=e.currentPage,s=e.pageSize,n=e.setTotalUsersCount,r=e.toggleIsFetching;r(!0),D.a.get("https://social-network.samuraijs.com/api/1.0/users?count=".concat(s,"&page=").concat(a)).then((function(e){t(e.data.items),n(e.data.totalCount),r(!1)}))}},{key:"render",value:function(){var e=this.props,t=e.totalUsersCount,a=e.pageSize,s=e.users,n=e.toggleFollow,r=e.currentPage;return Object(B.jsxs)(B.Fragment,{children:[this.props.isFetching&&Object(B.jsx)($,{}),Object(B.jsx)(Y,{users:s,toggleFollow:n,totalUsersCount:t,pageSize:a,currentPage:r,onPageChanged:this.onPageChanged})]})}}]),a}(L.Component),te=Object(h.b)((function(e){var t=e.usersPage;return Object(c.a)({},t)}),{toggleFollow:function(e){return{type:"TOGGLE_FOLLOW",userId:e}},setUsers:function(e){return{type:"SET_USERS",users:e}},setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},setTotalUsersCount:function(e){return{type:"SET_TOTAL_USERS_COUNT",totalCount:e}},toggleIsFetching:function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}}})(ee),ae=a(46),se=a(33),ne=a.n(se);var re=function(e){var t=e.profile;return t?Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("div",{className:ne.a.backImage,children:Object(B.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fff2lftqIE077pFAKU1Mhbcj8YFvBbMvpA&usqp=CAU",alt:"background"})}),Object(B.jsxs)("div",{className:ne.a.descriptionBlock,children:[Object(B.jsx)("img",{src:t.photos.large||K,alt:"large avatar"}),Object(B.jsx)("div",{children:t.fullName}),Object(B.jsxs)("div",{children:[" ",t.aboutMe]}),Object(B.jsxs)("div",{children:[" ",t.lookingForAJob]}),Object(B.jsxs)("div",{children:[" ",t.lookingForAJobDescription]}),Object(B.jsx)("div",{children:Object.entries(t.contacts).map((function(e){var t=Object(ae.a)(e,2),a=t[0],s=t[1];return Object(B.jsxs)(L.Fragment,{children:[Object(B.jsx)("a",{target:"_blank",rel:"noreferrer",href:s||"/404",children:a})," "]},a)}))})]})]}):Object(B.jsx)($,{})},ce=a(34),Ae=a.n(ce),ie=a(45),oe=a.n(ie);var le=function(e){return Object(B.jsxs)("div",{className:oe.a.item,children:[Object(B.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzaMc-3F_Ey437EAdp97a4dPrHCI9HI33nA&usqp=CAU",alt:"avatar"}),e.message,Object(B.jsxs)("div",{children:[Object(B.jsx)("span",{children:"like "}),Object(B.jsx)("span",{children:e.likesCount})]})]})};var ue=function(e){var t=e.posts.map((function(e){return Object(B.jsx)(le,{message:e.message,likesCount:e.likesCount},e.id)}));return Object(B.jsxs)("div",{className:Ae.a.postsBlock,children:[Object(B.jsx)("h3",{children:"My Posts"}),Object(B.jsxs)("div",{children:[Object(B.jsx)("div",{children:Object(B.jsx)("textarea",{value:e.newPostText,onChange:function(t){var a=t.currentTarget.value;e.updateNewPostText(a)}})}),Object(B.jsx)("div",{children:Object(B.jsx)("button",{onClick:function(){e.addPost()},children:"Add Post"})})]}),Object(B.jsx)("div",{className:Ae.a.posts,children:t})]})},je=Object(h.b)((function(e){var t=e.profilePage;return Object(c.a)({},t)}),{addPost:function(){return{type:"ADD_POST"}},updateNewPostText:function(e){return{type:"UPDATE_NEW_POST_TEXT",newText:e}}})(ue);var de=function(e){return Object(B.jsxs)("div",{children:[Object(B.jsx)(re,{profile:e.profile}),Object(B.jsx)(je,{})]})},ge=function(e){Object(W.a)(a,e);var t=Object(F.a)(a);function a(){return Object(V.a)(this,a),t.apply(this,arguments)}return Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.setUserProfile,a=e.match.params.userId||2;D.a.get("https://social-network.samuraijs.com/api/1.0/profile/".concat(a)).then((function(e){t(e.data)}))}},{key:"render",value:function(){return Object(B.jsx)(de,{profile:this.props.profile})}}]),a}(L.Component),be=Object(h.b)((function(e){return{profile:e.profilePage.profile}}),{setUserProfile:function(e){return{type:"SET_USER_PROFILE",profile:e}}})(Object(E.e)(ge));var pe=function(){return Object(B.jsxs)("div",{className:"app-wrapper",children:[Object(B.jsx)(x,{}),Object(B.jsx)(C,{}),Object(B.jsxs)("div",{className:"app-wrapper-content",children:[Object(B.jsx)(E.a,{path:"/dialogs",render:function(){return Object(B.jsx)(M,{})}}),Object(B.jsx)(E.a,{path:"/profile/:userId?",render:function(){return Object(B.jsx)(be,{})}}),Object(B.jsx)(E.a,{path:"/users",render:function(){return Object(B.jsx)(te,{})}}),Object(B.jsx)(E.a,{path:"/news",render:I}),Object(B.jsx)(E.a,{path:"/music",render:Q}),Object(B.jsx)(E.a,{path:"/settings",render:w})]})]})};O.a.render(Object(B.jsx)(m.a,{children:Object(B.jsx)(h.a,{store:b,children:Object(B.jsx)(pe,{})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.613188f9.chunk.js.map