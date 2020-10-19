// create map
const map = L.map('mapid').setView([-27.8123658,-50.3283711], 15);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create and add icon
const icon =L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

// create and ad marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker) 

    // add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map);
})

// adicionar o campo de fotos
function addPhotoField() {
    // Pegar o container de fotos #images
    const container = document.querySelector('#images')
    // Pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // Realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    // Verificar se o campo esta vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }
    // Limpar o campo antes de adicionar ao container de imagens
    input.value = ""
    // Adicioanr o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        // limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // deletar o campo
    span.parentNode.remove()
}

// select yes or no
function toggleSelect(event) {
    // retirar a classe .active (dos botões)
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    })

    // colocar a classe .active no botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    // atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value
}

function validate(event) {
    // validar se lat e lng estão preenchidos
    const needsLatAndLng = false;
    if(needsLatAndLng) {
        event.preventDefault()
        alert("Selecione um ponto no mapa!")
    }
}