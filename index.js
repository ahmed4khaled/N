let parent = document.getElementsByName("elements")[0]
form = document.forms
type = document.querySelector("select")[0]    
text = document.getElementsByName("texts")[0]
result = document.querySelector(".results")
color = document.querySelector("select")[1] 
form[0].onsubmit = function (el) {
    el.preventDefault();
    document.querySelectorAll(".box").forEach(el => el.remove());

    for (let i = 1; i <= parent.value; i++) {
        let myEl = document.createElement(type.value)  
        let mytext = document.createTextNode(` Hello ${text.value} `)

       
        myEl.className = "box";
        myEl.title = "Element";
        myEl.id = `id-${i}`;
     console.log(color);
        // myEl.style.display = "inline-block";
        // myEl.style.width = "200px";
        // myEl.style.margin = "20px";
        // myEl.style.padding = "10px";
        // myEl.style.color = "white";
        // myEl.style.backgroundColor = "blue";
        // myEl.style.textAlign = "center";
        // myEl.style.borderRadius = ".5rem";
     
         myEl.appendChild(mytext)
         result.appendChild(myEl)
     
        
     }
}
