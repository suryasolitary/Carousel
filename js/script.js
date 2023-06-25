let SliderPosition = 0;
let Sliders=document.querySelectorAll('.slider-item');
let totalSlider = Sliders.length;
const PreviousSlider = document.querySelector('#previous-btn');
const NextSlider = document.querySelector('#next-btn');

PreviousSlider.addEventListener('click',function(){
    previousfun();
})
NextSlider.addEventListener('click',function(){
    nextfun();
})

function UpdatePosition(){
  Sliders.forEach(slider=>{
    slider.classList.remove('active');
    slider.classList.add('hidden');
  })
 Sliders[SliderPosition].classList.add('active') 
 
 dots.forEach(dot=>{
    dot.classList.remove('dot-active');
 });

 dots[SliderPosition].classList.add('dot-active')

}

function previousfun(){
    if(SliderPosition==0){
       SliderPosition=totalSlider-1;
    }else{
      SliderPosition--
    }
UpdatePosition();
}
function nextfun(){
    
    if(SliderPosition==totalSlider-1){
        SliderPosition=0;
    }else{
        SliderPosition++
    }
UpdatePosition();
}
 
const dotContainer =document.querySelector('.dots');
Sliders.forEach(slide=>{
    const dot=document.createElement('div');
     dot.classList.add('dot')
    dotContainer.appendChild(dot);

});

const dots=document.querySelectorAll('.dot');

dots[SliderPosition].classList.add('dot-active')

dots.forEach((dot,index)=>{
    dot.addEventListener('click',function(){
        SliderPosition=index
        UpdatePosition()
        console.log(dot);
    })

})

setInterval(()=>{
    if(SliderPosition==totalSlider-1){
        SliderPosition=0;
    }else{
        SliderPosition++;
    }
    UpdatePosition()
},5000)
