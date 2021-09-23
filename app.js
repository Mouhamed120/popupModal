const btns = document.querySelector(".btns").querySelectorAll(".btn")

btns.forEach(btn => btn.onclick =  () => document.body.className = "" )

document.getElementById("btn").onclick = () => document.body.className = "show"

