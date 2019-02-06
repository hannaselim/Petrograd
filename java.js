const template = document.querySelector("#myTemp").content;
const main = document.querySelector("main");
for(let i = 0; i<10; i++){
let clone = template.cloneNode(true);
    clone.querySelector("h1").textContent="Name of meal";
    clone.querySelector("h2").textContent="59,- kr.";
    clone.querySelector("img").src="guzni-md.jpg";
    main.appendChild(clone);
}
