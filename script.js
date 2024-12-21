let input1=document.querySelector("#input1");
let input2=document.querySelector("#input2");

let submit=document.querySelector("#submit")

// let player1a=document.querySelector("#player1a")
let player1b=document.querySelector("#player1b")
// let player2a=document.querySelector("#player2a")
let player2b=document.querySelector("#player2b")

let name1="";
let name2="";
submit.addEventListener("click",()=>{
    name1=input1.value.trim();
    name2=input2.value.trim();
    if(input1.value.trim()==="" || input2.value.trim()==="" ){
        alert("Username Can't be Empty")
    }
    else{
        // player1a.textContent=`Player1: ${name1}`;
        player1b.textContent=`${name1} : 0`;
        // player2a.textContent=`Player2: ${name2}`;
        player2b.textContent=`${name2} : 0`;
    }

})

let data=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[3,5,7],[1,5,9]];

let grid=document.querySelector('#grid')
let boxes=Array.from(document.querySelectorAll('.box'));
console.log(boxes)


let winner="";
let p1score=0;
let p2score=0;
let roundno=1;
let round=document.querySelector('#round')


round.innerText+=`${roundno}`;
let c=0;
let flag2=1;
function match(){
    data.map((elem)=>{
        let val1=boxes[elem[0]-1].innerText.trim();
        let val2=boxes[elem[1]-1].innerText.trim();
        let val3=boxes[elem[2]-1].innerText.trim();
       

        if(val1!="" && val2!="" && val3!=""){
            if(val1===val2 && val2===val3){
                if(boxes[elem[0]-1].textContent==="⭕" ){
                    winner=name1;
                    p1score++;
                }
                else if(boxes[elem[0]-1].textContent==="❌" ){
                    winner=name2;
                    p2score++;
                }
                console.log("abhay")
                flag2=0;
                winnerHeading.textContent=`Winner: ${winner}`;
                player1b.innerText=`Player1: ${p1score}`;
                player2b.innerText=`Player2: ${p2score}`;
                
                setTimeout(() => {
                    for(let i=0;i<9;i++){
                        boxes[i].innerText="";
                    }
                }, 500);

                setTimeout(() => {
                    roundno++;
                    rematch.click();
                    round.innerText=`Round: ${roundno}`;
                    
                }, 2000);
                return 1;
            }
        }
    })
    if(c===9 && flag2){
        winnerHeading.textContent=`Draw`;
    }
    return null;
}

let winnerHeading=document.querySelector('#winnerHeading');


let flag=0;
grid.addEventListener('click',(details)=>{
    c++;
    let box=boxes.filter((elem)=>elem===details.target)
    if(box[0].textContent.trim().length===0){

        if(flag===0){
            box[0].textContent="⭕";
            flag=1;
           
        }
        else{
            box[0].textContent="❌";
            flag=0;
           
        }
    }
    if(c>=5){
        match()
    }


})
let rematch=document.querySelector('#Rematch');
rematch.addEventListener('click',()=>{
    for(let i=0;i<9;i++){
        boxes[i].innerText="";
    }
    winner="";
    winnerHeading.innerText="Winner: ";
    if(c%2===0){
        flag=!flag;
    }
    c=0;
})

let reset=document.querySelector('#Reset');
reset.addEventListener('click',()=>{
    location.reload();
})



