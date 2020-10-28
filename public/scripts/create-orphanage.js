//create map
const map = L.map('mapid').setView([-28.938322,-49.490706], 15);

//create and add titleKLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', ).addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

let marker

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)

})

//add images filed
function addPhotoField() {
    //get image container
    const container = document.querySelector('#images')
    //get container to double
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //double last add image
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //check if field is empty, if true dont add new field to container
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return 
    }
    //cleaning filed before adding to container
    input.value = ""
    //add double to container
    container.appendChild(newFieldContainer)
}


function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        //cleaning field
        span.parentNode.children[0].value = ""
        return
    }

    //delete field
    span.parentNode.remove()
}


//selecting yes or no
function toggleSelect(event) {

    //take off class .active of buttons
    document.querySelectorAll(".button-select button").forEach( button => button.classList.remove('active'))
    
    //put class .active on selected button
    const button = event.currentTarget
    button.classList.add('active')

    //update hidden input value
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value
}
/*
function validate(event) {
    const lat = document.getElementsByName('lat').value
    const lng = document.getElementsByName('lng').value
    //validar se lat e lng estao preenchidos
    if(lat == '' || lng == '') {
        event.preventDefault()
        alert('Selecione um ponto no mapa!')
    }
 
}
*/