let win = document.querySelectorAll(".win")
let dataArr=[]
win.forEach(element=>{
 element.addEventListener("click",(e)=>{
  if(e.target.parentElement.classList.contains("win")){
      e.target.parentElement.classList.toggle("active")
      dataArr.push(e.target)
  }
  else{
   e.target.parentElement.parentElement.classList.toggle("active")
   e.target.parentElement.parentElement.classList.toggle("open")
   console.log(dataArr.length)
   if(dataArr.length>1){
    if(dataArr[0].src!==dataArr[1].src){
     dataArr[0].parentElement.classList.toggle("open")
     dataArr[1].parentElement.classList.toggle("open")
    }
    dataArr.shift()
    dataArr.shift()

   }
  }
 })
})