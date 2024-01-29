const signup= document.getElementById('signup')
signup.addEventListener("click",()=>{
   const back=document.getElementById("back")
   back.style.display="block"
   signup.addEventListener("click",()=>{
      back.style.display='none'
      location.reload()
   })
})

const menu=document.getElementById("menu")

const img_menu=document.getElementById("img_menu")
img_menu.addEventListener("click",()=>{
 menu.style.display='grid'
 img_menu.addEventListener("click",()=>{
    menu.style.display='none'
    location.reload()
 })
})

