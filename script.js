let sidebarMenu = document.getElementById('sidebarMenu')
let body = document.getElementsByTagName('body')


const openMenu = () =>{
    sidebarMenu.classList.toggle('hidden')
    sidebarMenu.classList.toggle('flex')
}

const closeMenu = () =>{
    sidebarMenu.classList.toggle('flex')
    sidebarMenu.classList.toggle('hidden')
}