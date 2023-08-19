const container = document.getElementById("container")

function card() {
    const cardc = document.createElement('div');
    cardc.classList.add("card")
    
    const cardTitle = document.createElement("h2");
    cardTitle.textContent = 'Hola';

    const cardImg = document.createElement("img")
    cardImg.src = "https://i.ytimg.com/vi/2plofLxXL60/maxresdefault.jpg"
    cardImg.style.width = "100%"

    const cardContent = document.createElement("p");
    cardContent.textContent  = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam inventore quaerat architecto dolor molestias, distinctio est qui in ad! Eum iste unde id totam cumque omnis molestias! Vero, ipsam accusamus!"


    cardc.appendChild(cardTitle);
    cardc.appendChild(cardImg)
    cardc.appendChild(cardContent);

    container.appendChild(cardc)
}

