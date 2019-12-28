(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(37)},33:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(20),s=a.n(r),c=a(9),l=a(10),i=a(12),u=a(11),h=a(13),f=a(7),m=a(3),d=a(17),b="https://reactnd-books-api.udacity.com",p=localStorage.token;p||(p=localStorage.token=Math.random().toString(36).substr(-8));var k={Accept:"application/json",Authorization:p},v=function(e,t){return fetch("".concat(b,"/books/").concat(e),{method:"PUT",headers:Object(d.a)({},k,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},E=function(e){return fetch("".concat(b,"/search"),{method:"POST",headers:Object(d.a)({},k,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},y=function(e,t){var a=e.split(/(?=[A-Z])/).join(" ").toLowerCase();return"uppercase"===t?a.toUppercase():"lowercase"===t?a:a.charAt(0).toUpperCase()+a.slice(1)};var g=function(e){return o.a.createElement("li",null,o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(e.img,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{defaultValue:e.shelf,onChange:function(t){return e.updateShelf(t.target.value,e.book)}},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),["currentlyReading","wantToRead","read","none"].map(function(t){return o.a.createElement("option",{value:t,key:e.id+t},y(t))})))),o.a.createElement("div",{className:"book-title"},e.title),o.a.createElement("div",{className:"book-authors"},e.authors)))},N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={queryResults:[]},a.queryBooks=function(e){var t=[];e&&E(e).then(function(e){e&&e.length?(t=e.map(function(e){return e.shelf=a.addBookShelf(e),e}),a.setState({queryResults:t})):(a.setState({queryResults:[]}),console.log("Nothing"))})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"addBookShelf",value:function(e){var t=this.props.books.filter(function(t){return t.id===e.id});return t.length?t[0].shelf:"none"}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(f.b,{className:"close-search",to:"/"},"Close"),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",onChange:function(t){return e.queryBooks(t.target.value)}}))),this.state.queryResults.length?o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},this.state.queryResults.map(function(t){return o.a.createElement(g,{updateShelf:e.props.updateShelf,book:t,key:t.id,id:t.id,shelf:t.shelf,img:t.imageLinks.thumbnail,title:t.title,authors:t.authors})}))):null)}}]),t}(o.a.Component);var S=function(e){var t=e.books,a=[t.filter(function(e){return"currentlyReading"===e.shelf}),t.filter(function(e){return"read"===e.shelf}),t.filter(function(e){return"wantToRead"===e.shelf})];return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),a.map(function(t,a){if(t.length)return o.a.createElement("div",{className:"list-books-content",key:"shelf_"+a+t},o.a.createElement("div",null,o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},y(t[0].shelf)),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},t.map(function(t){return o.a.createElement(g,{updateShelf:e.updateShelf,book:t,key:t.id,id:t.id,shelf:t.shelf,img:t.imageLinks.thumbnail,title:t.title,authors:t.authors})}))))))}),o.a.createElement("div",{className:"open-search"},o.a.createElement(f.b,{to:"/search"},"Add a book")))},j=(a(33),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[]},a.updateShelf=function(e,t){t.shelf=e,v(t.id,e).then(function(e){a.setState(function(e){return{books:e.books.filter(function(e){return e.id!==t.id}).concat([t])}})})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(b,"/books"),{headers:k}).then(function(e){return e.json()}).then(function(e){return e.books}).then(function(t){e.setState({books:t})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app"},o.a.createElement(f.a,{basename:"/my-reads"},o.a.createElement(m.a,{exact:!0,path:"/",render:function(){return o.a.createElement(S,{books:e.state.books,updateShelf:e.updateShelf})}}),o.a.createElement(m.a,{path:"/search",render:function(){return o.a.createElement(N,{books:e.state.books,updateShelf:e.updateShelf})}})))}}]),t}(o.a.Component));a(35);s.a.render(o.a.createElement(j,null),document.getElementById("root"))}},[[23,2,1]]]);
//# sourceMappingURL=main.4c68ff9a.chunk.js.map