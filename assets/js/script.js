//initial data
let head = false;
let leftHand = false;
let rightHand = false;
let leftLeg = false;
let rightLeg = false;
let cancelAnimation = false;

//events
document.querySelectorAll('input').forEach((input)=>{
    input.addEventListener('change', check);
})

//functions
function check(e){
    if(!cancelAnimation){
        let id = e.currentTarget.getAttribute('id');
        switch(id){
            case 'head':
                if(head === false){
                    head = true;
                }else{
                    head = false;
                }
                break;
            case 'leftHand':
                if(leftHand === false){
                    leftHand = true;
                }else{
                    leftHand = false;
                }
                break;
            case 'rightHand':
                if(rightHand === false){
                    rightHand = true;
                }else{
                    rightHand = false;
                }
                break;
            case 'leftLeg':
                if(leftLeg === false){
                    leftLeg = true;
                }else{
                    leftLeg = false;
                }
                break;
            case 'rightLeg':
                if(rightLeg === false){
                    rightLeg = true;
                }else{
                    rightLeg = false;
                }
                break;
        }
        
        if(head && leftHand&& rightHand && leftLeg && rightLeg){
            setTimeout(() => {
                animation();
            }, 400);
        }
    }  
}
function animation(){
    let anim1 = document.querySelector('.animation1')
    let anim2 = document.querySelector('.animation2')
    anim1.style.display = 'block';
    anim2.style.display = 'block';

    anim1.classList.add('flash');
    anim2.classList.add('opacity')
    document.querySelectorAll('.card').forEach((card)=>{
        card.classList.add('opacityCard')
    })

    setTimeout(() => {
        endAnimation()
    }, 3300);
}
function endAnimation(){
    cancelAnimation = true;
    document.querySelector('.up').style.display = 'none'
    document.querySelector('.low').style.display = 'none'
    document.querySelector('.animation1').style.display = 'none'

    document.querySelector('.end').style.display = 'block'
    document.querySelector('.end').classList.add('rotate')

    setTimeout(() => {
        document.querySelector('.animation2').style.display = 'none'
        document.querySelector('.end').style.zIndex = 0;
    }, 6000);
}