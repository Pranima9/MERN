const sideBtn = document.querySelector(".sideBtn")
const sidebar = document.querySelector(".sidebar")
const sideBtn1 = document.querySelector(".sideBtn1")
const sidebarS = document.querySelector(".sidebarS")


sideBtn.addEventListener("click",function(){
    sidebar.style.display = "none"
    sidebarS.style.display = "flex"
})

sideBtn1.addEventListener("click",function(){
    sidebar.style.display = "flex"
    sidebarS.style.display = "none"
})




