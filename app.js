const escenarios = document.getElementsByClassName('escenario__horarios')
console.log(escenarios)

for(i = 0; i < escenarios.length; i++){
    let lista = escenarios[i].children
    for(e = 0; e < lista.length; e++){
        let array = lista[e].textContent.split('|')
            let span = document.createElement('span')
            let texto = document.createTextNode(array[1])
            span.style.fontWeight = '700'
            span.textContent = array[0] + '|'
            lista[e].textContent = ''
            lista[e].append(span)
            lista[e].append(texto)
        if((i == 0 || i == 3) & e % 2 == 0){
            lista[e].style.backgroundColor = '#fdee21'
        }else if((i == 1 || i == 2) & e % 2 == 0){
            lista[e].style.backgroundColor = '#3b9691'
        }
    }
}

// GALERIA
const galeria = document.querySelector('.galeria__interior')
const total = document.querySelector('.total')
total.addEventListener('click', () => { total.classList.toggle('opacidad') })
const popupWebp = document.querySelector('#popup__webp')
const popupImg = document.querySelector('#popup__img')
let contador = 1
for(i = 0; i < 12; i++){
    let picture = document.createElement('picture')
    let source = document.createElement('source')
    let img = document.createElement('img')
    source.setAttribute('srcset', `build/img/thumb/${i+1}.webp`)
    source.dataset.numero = contador
    contador++
    img.setAttribute('src', `src/img/thumb/${i+1}.jpg`)

    picture.addEventListener('click', () => {
        total.classList.toggle('opacidad')
        popupWebp.setAttribute('srcset', `build/img/grande/${source.dataset.numero}.webp`)
        popupImg.setAttribute('src', `src/img/grande/${source.dataset.numero}.jpg`)
    })

    galeria.append(picture)
    picture.append(source)
    picture.append(img)
}

//SCROLL
const main = document.querySelector('main')
const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    console.log(main.getBoundingClientRect().top)
    console.log(window.innerHeight)
    if(main.getBoundingClientRect().top < 80){
        header.style.position = 'fixed'
        header.style.top = '0'
        header.style.left = '0'
        header.style.right = '0'
        
    }else{
        header.style.position = 'static'
    }
})