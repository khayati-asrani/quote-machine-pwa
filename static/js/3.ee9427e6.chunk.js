(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{353:function(e,t,o){"use strict";o.r(t);var a=o(52),n=o(53),c=o(55),i=o(54),r=o(56),u=o(102),s=o(362),l=o(29),d=o.n(l),p=o(354),h=o.n(p),m=o(355),b=o(360),w=o(361),f=[];function y(e){var t=e.quotes;f.push.apply(f,Object(s.a)(t))}function v(e){console.log("Looks like there was a problem:",e),h()("#subs, #Q, #new-quote").css({opacity:0});h()("#text").text("Oops! Looks like there was a problem. Please reload the page and try again.")}function k(e){if(!e.ok)throw Error(e.statusText);return e}function x(e){return e.json()}var g=function(e){function t(e){var o;return Object(a.a)(this,t),(o=Object(c.a)(this,Object(i.a)(t).call(this,e))).copyText=o.copyText.bind(Object(u.a)(Object(u.a)(o))),o.handleClick=o.handleClick.bind(Object(u.a)(Object(u.a)(o))),o.tweet=o.tweet.bind(Object(u.a)(Object(u.a)(o))),o.currentQuote="Too many of us are not living our dreams because we are living our fears.",o}return Object(r.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then(k).then(x).then(y).catch(v)}},{key:"handleClick",value:function(){var e=f[Math.floor(Math.random()*f.length)],t=e.quote,o=e.author;this.currentQuote=t,h()("#text, #author, #copy-quote, .card-wrapper").animate({opacity:0},2e3,function(){h()(this).animate({opacity:1},2e3),h()("#text").text(t),h()("#author").html(o)}),document.getElementById("new-quote").disabled=!0,setTimeout(function(){document.getElementById("new-quote").disabled=!1},4e3)}},{key:"copyText",value:function(){var e=document.getElementById("text"),t=h()("<input>");h()("body").append(t),t.val(h()(e).text()).select(),document.execCommand("copy"),t.remove(),h()(".tooltiptext").css({opacity:1}),setTimeout(function(){h()(".tooltiptext").css("opacity",0)},1e3)}},{key:"tweet",value:function(){var e;(function(){try{return window.self!==window.top}catch(e){return!0}})()||(e="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+encodeURIComponent('"'+this.currentQuote+'"'),window.open(e,"Share","width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0"))}},{key:"render",value:function(){return d.a.createElement("div",{className:"card"},d.a.createElement("div",{id:"Q"},"Q"),d.a.createElement("div",{id:"text"},"Too many of us are not living our dreams because we are living our fears."),d.a.createElement("span",{class:"tooltiptext"},"Copied!"),d.a.createElement("div",{id:"subs"},d.a.createElement("div",{id:"icons"},d.a.createElement(m.a,{id:"copy-quote",icon:b.a,onClick:this.copyText}),d.a.createElement(m.a,{id:"tweet-quote",icon:w.a,onClick:this.tweet})),d.a.createElement("div",{id:"author"},"Les Brown")),d.a.createElement("button",{id:"new-quote",onClick:this.handleClick},"New  Quote"))}}]),t}(d.a.Component);t.default=g}}]);
//# sourceMappingURL=3.ee9427e6.chunk.js.map