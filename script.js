// navbar-animaion 

window.addEventListener('scroll',(event)=>{
    const navBar = document.querySelector(".nav-menu")
    let position = this.scrollY;
    if(position>=550){
        navBar.classList.add("custom-navbar")
    }else{
        navBar.classList.remove("custom-navbar")
    }
})


// image-scroll animation 

window.addEventListener('scroll',(event)=>{
    const imgClass = document.querySelector(".camera-img")
    const imgPara = document.querySelector(".mission-text")
    let position = this.scrollY;
    if(position>=900){
        imgClass.classList.add("fromLeft")
        imgPara.classList.add("fromRight")
    }else{
        imgClass.classList.remove("fromLeft")
        imgPara.classList.remove("fromRight")
    }
})


// card-scroll animation 

window.addEventListener('scroll',(event)=>{
    const card1 = document.querySelector(".card-1")
    const card2 = document.querySelector(".card-2")
    const card3 = document.querySelector(".card-3")
    let position = this.scrollY;
    if(position>=4800){
        card1.classList.add("moveFromLeft")
        card2.classList.add("moveFromBottom")
        card3.classList.add("moveFromRight")
    }else{
        card1.classList.remove("moveFromLeft")
        card2.classList.remove("moveFromBottom")
        card3.classList.remove("moveFromRight")
    }
})
