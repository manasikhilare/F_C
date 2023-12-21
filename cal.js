let random = Math.floor(Math.random());
let div1 = document.querySelector('div');
let div2 = document.querySelector('.d');
   let a = prompt('enter first number');
   let b = prompt('enter second number');
   let o = prompt('enter arithmetic operation you want');
    div1.textContent = a.toString();
    div2.textContent= b.toString();
    const obj = {
        "+" : "-",
        "-" : "/",
        "*" : "+",
        "/" : "**"
    }
    if(random < 1){
       //performing wrong calculation
        o = obj[o];
        alert(`${eval(`${a} ${o} ${b}`)}`);
    }
    else{
        //jr random number less than 1 hoga to correct calculation honar
         alert(`the result is ${eval(`${a} ${o} ${b}`)}`);
    }
