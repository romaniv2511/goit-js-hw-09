const t={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};let n=null;function e(t){t.disabled=!0}function o(t){t.disabled=!1}e(t.stopBtn);const r=()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`};t.startBtn.addEventListener("click",(()=>{r(),n=setInterval(r,1e3),e(t.startBtn),o(t.stopBtn)})),t.stopBtn.addEventListener("click",(()=>{clearInterval(n),e(t.stopBtn),o(t.startBtn)}));
//# sourceMappingURL=01-color-switcher.f50d1388.js.map