const pages = Array.from(document.querySelectorAll('main > div'))
let currentPage = 0


function reset() {
    const curretY = window.scrollY
    console.log(-curretY)
    window.scrollTo({
        top: -curretY,
        left: 0,
        behavior: 'smooth'
    })
}


const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const clickedButton = parseInt(button.dataset.page)
        const height = window.innerHeight

        if(clickedButton == currentPage) {
            return
        }


        
        pages[currentPage].classList.replace('set', 'scroll')
        setTimeout(() => {                    

           
            pages.forEach(page => {
                if(page.dataset.page == clickedButton) {
                    let oldPage = currentPage;
                    currentPage = clickedButton
                    buttons[oldPage].classList.remove('active')
                    buttons[currentPage].classList.add('active')
                    
                    window.scrollTo({
                        top: height * currentPage,
                        left: 0,
                        behavior: 'smooth'
                    })

                    pages[currentPage].classList.replace('scroll', 'set')
                }
            })

        }, 500);
        
        
    })
})



const container = document.getElementById('word')
const words = ["Developer", "Designer", "Entrepreneur"]
let delay = 300
let word = 0
let typing = true
let char = 0

const type = () => {
    if(!typing) {
        if(container.innerText == '') {
            typing = true
            delay = 300
        }
        let current = container.innerText
        let replaceWith = current.substring(0, current.length -1)
        container.innerText = replaceWith
    } else if(container.innerText === words[word]) {
            word += 1
            if(word >= words.length) word = 0
            typing = false
            delay = 100
            char = 0
            setTimeout(type, 2000)
            return
        } else {
            container.innerText += words[word][char]
            char += 1
        }

    setTimeout(type, delay)
}

type()

const aside = document.querySelector('aside')

document.querySelector('.toggleBtn').addEventListener('click', (e) => {
    if(aside.classList.contains('open')) {
        aside.classList.remove('open')
        e.target.classList.remove('btn-open')
    } else {
        aside.classList.add('open')
        e.target.classList.add('btn-open')
    }
})