
// Arreglo de imágenes y nombres de familiares
var familyMembers = [
    {
        image: "coh.png",
        name: "Volando a la tierra"
    },
    {
        image: "w.jpeg",
        name: "Entrando a la nave"
    },
    {
        image: "https://th.bing.com/th/id/OIG.pHlcuKZH5rHyfjCXhJ6_?pid=ImgGn",
        name: "Regando las plantas y comunicándose con el exterior"
    },
];

var currentIndex = 0;
var familyImage = document.getElementById("family_member_image");
var familyName = document.getElementById("family_member_name");
var nextButton = document.getElementById("nextButton");

function update() {
    if (currentIndex < familyMembers.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    var member = familyMembers[currentIndex];
    familyImage.src = member.image;
    familyName.textContent = member.name;
}

nextButton.addEventListener("click", update);

// Mostrar el primer miembro de la familia al cargar la página
update();