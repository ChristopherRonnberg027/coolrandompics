const lightbox = document.createElement('div')

// för att lättare selecta den i css
lightbox.id = 'lightbox'

// lägger till den skapade div:en i bodyn i html
document.body.appendChild(lightbox)


// för att välja alla bilder img-taggen
const images = document.querySelectorAll('img')

// vi ska loopa igenom alla bilder
images.forEach(image => {
    // och för varje bild i loopen kör vi denna function
    // som varje gång vi klickar på en bild...
    image.addEventListener('click', e => {

        // skapar div:en en klass som heter active (vilket visar upp den mörkade bilden)
        lightbox.classList.add('active')

        // nu ska vi lägga bild i lightboxen
        // därför skapar vi en img tag i lightboxen
        const img = document.createElement('img')

        // och för att rätt bild ska läggas in i lightboxen, den bild vi klcikar på..
        // så får den nya img den current imga vi har klickat på
        img.src = image.src

        // while-loop som kikar att om lightbox har en "child", ta bort child
        while(lightbox.firstChild){
            // tar bort child från lightbox så att inget "sparas"
            lightbox.removeChild(lightbox.firstChild)
        }
        // sen lägger vi till den nya img-taggen i lightboxen
        lightbox.appendChild(img)
    })
})

// för att "klicka bort bilden"'
lightbox.addEventListener('click', e => {

    // e.target är vad vi clickar på 
    // och currentarget är de som vi har lagt på eventlIstenrr 
    if (e.target !== e.currentTarget) return
    // den här tar bort den skapade klassen active
    lightbox.classList.remove('active')
})
