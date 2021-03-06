(function() {
    //https://github.com/malko/l.js
    !function(t,e){var r=function(t,e){return t instanceof(e||Array)},i=document,n="getElementsByTagName",s="length",a="readyState",c="onreadystatechange",l=i[n]("script"),o=l[l[s]-1],u=o.innerHTML.replace(/^\s+|\s+$/g,"");if(!t.ljs){var f=o.src.match(/checkLoaded/)?1:0,h=i[n]("head")[0]||i.documentElement,d=function(t){var e={};return e.u=t.replace(/#(=)?([^#]*)?/g,function(t,r,i){return e[r?"f":"i"]=i,""}),e},p=function(t,e,r){var n,s=i.createElement(t);r&&(s[a]?s[c]=function(){("loaded"===s[a]||"complete"===s[a])&&(s[c]=null,r())}:s.onload=r);for(n in e)e[n]&&(s[n]=e[n]);h.appendChild(s)},v=function(t,e){if(this.aliases&&this.aliases[t]){var i=this.aliases[t].slice(0);return r(i)||(i=[i]),e&&i.push(e),this.load.apply(this,i)}if(r(t)){for(var n=t[s];n--;)this.load(t[n]);return e&&t.push(e),this.load.apply(this,t)}return t.match(/\.css\b/)?this.loadcss(t,e):this.loadjs(t,e)},y={},m={aliases:{},loadjs:function(t,r){var i=d(t);return t=i.u,y[t]===!0?(r&&r(),this):y[t]!==e?(r&&(y[t]=function(t,e){return function(){t&&t(),e&&e()}}(y[t],r)),this):(y[t]=function(e){return function(){y[t]=!0,e&&e()}}(r),r=function(){y[t]()},p("script",{type:"text/javascript",src:t,id:i.i,onerror:function(t){if(i.f){var e=t.currentTarget;e.parentNode.removeChild(e),p("script",{type:"text/javascript",src:i.f,id:i.i},r)}}},r),this)},loadcss:function(t,e){var r=d(t);return t=r.u,y[t]||p("link",{type:"text/css",rel:"stylesheet",href:t,id:r.i}),y[t]=!0,e&&e(),this},load:function(){var t=arguments,i=t[s];return 1===i&&r(t[0],Function)?(t[0](),this):(v.call(this,t[0],1>=i?e:function(){m.load.apply(m,[].slice.call(t,1))}),this)},addAliases:function(t){for(var e in t)this.aliases[e]=r(t[e])?t[e].slice(0):t[e];return this}};if(f){var g,j,x,A;for(g=0,j=l[s];j>g;g++)(A=l[g].getAttribute("src"))&&(y[A.replace(/#.*$/,"")]=!0);for(x=i[n]("link"),g=0,j=x[s];j>g;g++)("stylesheet"===x[g].rel||"text/css"===x[g].type)&&(y[x[g].getAttribute("href").replace(/#.*$/,"")]=!0)}t.ljs=m}o.src&&u&&p("script",{innerHTML:u})}(window);

    ljs.load(
        'https://unpkg.com/vue',
        'https://unpkg.com/vue-custom-element',
        'https://unpkg.com/http-vue-loader',
        function () {

            const countdown = httpVueLoader('./components/countdown.vue');

            Vue.customElement('widget-vue', {
                props: [
                    'prop1',
                    'prop2',
                    'prop3'
                ],
                components: {
                    countdown
                },
                data: function () {
                    return {
                        message: 'Hello Vue!'
                    }
                },
                template: '<div>' +
                '<div>{{ message }}, {{ prop1  }}, {{prop2}}, {{prop3}}</div>' +
                '<p>The countdown component is loaded from a .vue file</p>' +
                '<countdown :time="10" :autoplay="true"></countdown>' +
                '</div>'
            });

        });
}());