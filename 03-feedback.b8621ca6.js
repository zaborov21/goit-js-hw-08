function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return l.Date.now()};function v(e,t,n){var o,r,i,a,u,f,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function j(e){return c=e,u=setTimeout(w,t),l?y(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function w(){var e=g();if(S(e))return x(e);u=setTimeout(w,function(e){var n=t-(e-f);return s?m(n,i-(e-c)):n}(e))}function x(e){return u=void 0,v&&o?y(e):(o=r=void 0,a)}function O(){var e=g(),n=S(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return j(f);if(s)return u=setTimeout(w,t),y(f)}return void 0===u&&(u=setTimeout(w,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},O.flush=function(){return void 0===u?a:x(g())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".js-feedback-form"),j=document.querySelector(".js-user-email"),S=document.querySelector(".js-textarea");window.addEventListener("load",(()=>{const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);e&&(j.value=t.email,S.textContent=t.message)})),y.addEventListener("input",e(t)((function(e){const t=e.currentTarget.elements,n=t.email.value,o=t.message.value,r={email:n,message:o},i=JSON.stringify(r);localStorage.setItem("feedback-form-state",i)}),500)),y.addEventListener("submit",(e=>{e.preventDefault();const t=localStorage.getItem("feedback-form-state"),n=JSON.parse(t);t&&(j.value=t.email,S.textContent=t.message,localStorage.removeItem("feedback-form-state")),e.target.reset(),console.log("email:",n.email,"message:",n.message)}));
//# sourceMappingURL=03-feedback.b8621ca6.js.map