import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as r}from"./assets/vendor-BbbuE1sJ.js";const n=document.querySelector(".form");function m(t,e){const o={delay:t,radioChecked:e};return new Promise((s,i)=>{setTimeout(()=>{e==="fulfilled"?s(o):i(o)},t)})}n.addEventListener("submit",l);function l(t){t.preventDefault();const e=t.target,o=Number(e.elements.delay.value),s=e.elements.state.value;if(o<=0){r.warning({title:"Caution",message:"⚠️ Delay must be greater than 0 ms",position:"topRight",color:"#FFA000"});return}m(o,s).then(({delay:i})=>{r.success({title:"OK",message:`✅ Fulfilled promise in ${i} ms`,position:"topRight",color:"#59a10d"})}).catch(({delay:i})=>{r.error({title:"Error",message:`❌ Rejected promise in ${i} ms`,position:"topRight",color:"#FF0000"})}),e.reset()}
//# sourceMappingURL=2-snackbar.js.map
