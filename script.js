
let faqs = document.querySelectorAll(".faq");
let answer = document.querySelectorAll(".answer");


for(let i=0; i<faqs.length; i++){
    faqs[i].addEventListener("click", () =>{
        answer[i].classList.toggle("active");
    })
}



// faqs.forEach((faq) => {
//     faq.addEventListener("click",()=>{
//         answer.classList.toggle("active");
//     })
// })
