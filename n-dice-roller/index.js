function diceRoll(){
    const number=document.getElementById("number").value ;
    const rollResult=document.getElementById("rollResult");
    const diceImages=document.getElementById("diceImages");
    let result=[];
    let images=[];
    let j=0;
    for(let i=0;i<number;i++){
        j++;
        let random=Math.floor(Math.random()*6)+1;
        result.push(random);
       
        images.push(`<img src="./img/${random}.png" alt="Dice ${random}" title="Dice ${j}" class="dice-animate">`);
    }
    rollResult.textContent=`Roll Results : ${result.join(", ")}`;
     
    diceImages.innerHTML=images.join("");

}


/*
Another way of doing the same (using create element)
function diceRoll(){
    const number=document.getElementById("number").value ;
    const rollResult=document.getElementById("rollResult");
    const diceImages=document.getElementById("diceImages");
    diceImages.innerHTML='';
    let result=[];
    let images=[];
    let j=0;
    for(let i=0;i<number;i++){
        j++;
        let random=Math.floor(Math.random()*6)+1;
        result.push(random);
        const diceImg = document.createElement("img");
        diceImg.src = `./img/${random}.png`;
        diceImg.classList.add("dice-animate");
        diceImages.append(diceImg);
     }
    rollResult.textContent=`Roll Results : ${result.join(", ")}`;
     
 
}
*/