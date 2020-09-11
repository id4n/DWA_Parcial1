const main = document.getElementById('main')
const tittle = document.createElement('h1')
const divImg = document.createElement('div')
const divBtn = document.createElement('div')
var img = document.createElement('img')
divImg.appendChild(img)

window.onload = function() {
    tittle.innerText = 'sign lenguaje'
    this.main.appendChild(tittle)
    this.main.appendChild(divImg)
    this.main.appendChild(divBtn)
}

const url = 'https://dwaapi.juvasquez88.vercel.app/letters'
const http = new XMLHttpRequest()

http.open("GET", url)
http.responseType='json'
http.send()
http.onload = function() {
    const letters = http.response
    showBtn(letters)
  }

function showBtn(jsonObj){
    const letras = jsonObj['letters']

    for (var i = 0; i < letras.length; i++) {
        const btn = document.createElement('button')
        let image = letras[i].image
        btn.onclick= function() { postImg(image)}
        btn.textContent = letras[i].letter
        divBtn.appendChild(btn)
    }
}
function postImg(urlImg) {
    img.setAttribute('src', urlImg)
}