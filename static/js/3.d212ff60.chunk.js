(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{353:function(e,t,n){"use strict";n.r(t);var o=n(52),a=n(53),c=n(55),i=n(54),r=n(56),u=n(102),s=n(362),l=n(29),d=n.n(l),h=n(354),p=n.n(h),m=n(355),b=n(360),f=n(361),w=[];function y(e){var t=e.quotes;t=t.filter(function(e){return e.quote.length<=254}),w.push.apply(w,Object(s.a)(t))}function v(e){console.log("Looks like there was a problem:",e),p()("#subs, #Q, #new-quote").css({opacity:0});p()("#text").text("Oops! Looks like there was a problem. Please reload the page and try again.")}function k(e){if(!e.ok)throw Error(e.statusText);return e}function x(e){return e.json()}var g=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(i.a)(t).call(this,e))).copyText=n.copyText.bind(Object(u.a)(Object(u.a)(n))),n.handleClick=n.handleClick.bind(Object(u.a)(Object(u.a)(n))),n.tweet=n.tweet.bind(Object(u.a)(Object(u.a)(n))),n.currentQuote="Too many of us are not living our dreams because we are living our fears.",n}return Object(r.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then(k).then(x).then(y).catch(v)}},{key:"handleClick",value:function(){var e=w[Math.floor(Math.random()*w.length)],t=e.quote,n=e.author;this.currentQuote=t,p()("#text, #author, #copy-quote, .card-wrapper").animate({opacity:0},2e3,function(){p()(this).animate({opacity:1},2e3),p()("#text").text(t),p()("#author").html(n)}),document.getElementById("new-quote").disabled=!0,setTimeout(function(){document.getElementById("new-quote").disabled=!1},4e3)}},{key:"copyText",value:function(){var e=document.getElementById("text"),t=p()("<input>");p()("body").append(t),t.val(p()(e).text()).select(),document.execCommand("copy"),t.remove(),p()(".tooltiptext").css({opacity:1}),setTimeout(function(){p()(".tooltiptext").css("opacity",0)},1e3)}},{key:"tweet",value:function(){var e;(function(){try{return window.self!==window.top}catch(e){return!0}})()||(e="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+encodeURIComponent('"'+this.currentQuote+'"'),window.open(e,"Share","width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0"))}},{key:"render",value:function(){return d.a.createElement("div",{className:"card"},d.a.createElement("div",{id:"Q"},"Q"),d.a.createElement("div",{id:"text"},"Too many of us are not living our dreams because we are living our fears."),d.a.createElement("span",{class:"tooltiptext"},"Copied!"),d.a.createElement("div",{id:"subs"},d.a.createElement("div",{id:"icons"},d.a.createElement(m.a,{id:"copy-quote",icon:b.a,onClick:this.copyText}),d.a.createElement(m.a,{id:"tweet-quote",icon:f.a,onClick:this.tweet})),d.a.createElement("div",{id:"author"},"Les Brown")),d.a.createElement("button",{id:"new-quote",onClick:this.handleClick},"New  Quote"))}}]),t}(d.a.Component);t.default=g}}]);
//# sourceMappingURL=3.d212ff60.chunk.js.map