window.onload = function() {
    const tittle = document.createElement('h1')
    const divImg = document.createElement('div')
    const divBtn = document.createElement('div')
    tittle.innerText = 'sign lenguaje'
    document.body.appendChild(tittle)
    document.body.appendChild(divImg)
    document.body.appendChild(divBtn)
}
const url = 'https://dwaapi.juvasquez88.vercel.app/letters'
const http = new XMLHttpRequest()

http.open("GET", url)
http.responseType='json'
http.send()
http.onload = function() {
    const letters = http.response;
    showBtn(letters);
  }
function showBtn(jsonObj){
    const letters = jsonObj['letters'];

    for (var i = 0; i < letters.length; i++) {
        const btn = document.createElement('button')
        btn.textContent = letters[i].letter
        divBtn.appendChild(btn)
    }
}