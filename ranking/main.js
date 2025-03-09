let cajaPrincipal = document.getElementById("rating");

for (let i = 1; i <= 10; i++) {
    let imagen = document.createElement("img");
    imagen.src = "feliz.png";
    cajaPrincipal.appendChild(imagen);
    imagen.classList.add("item");
    imagen.setAttribute("pos", i);
    imagen.id = "item-" + i;

    imagen.addEventListener("mouseover", function () {
        let posicion = parseInt(this.getAttribute("pos"));
        for (let j = 1; j <= 10; j++) {
            let nuevo = document.getElementById("item-" + j);
            if (j <= posicion) {
                nuevo.src = "fill.png";
            } else {
                nuevo.src = "feliz.png";
            }
        }
    });

}
