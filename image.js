let currentSlide=0;
const slides=document.querySelectorAll('.slide');

function showSlide(index){
    slides.forEach((slide,i)=>{
        slide.classList.toggle('active',i===index);
    });
}
function nextSlide(){
    currentSlide=(currentSlide+1)%slides.length;
    if(currentSlide==4)
        alert("Reached Last Slide...!!")
    showSlide(currentSlide);
}
function prevSlide(){
    currentSlide=(currentSlide-1+slides.length)%slides.length;
    if(currentSlide==0)
        alert("No previous Slide as this is first...!!")
    showSlide(currentSlide);
}