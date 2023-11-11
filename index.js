
let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","green","black"];
let started=false;
let level=0;

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
 if(started==false)
 {
  console.log("game is started");

  started=true;
  levelup();
 }

});

function levelup() 
{
  userSeq=[];
   level++;
   h2.innerText=`level ${level}`;

   let  randidx=Math.floor(Math.random()*3);
   let  randcolor=btns[randidx];
   let  randbtn=document.querySelector(`.${randcolor}`);
  
  gameSeq.push(randcolor);
   console.log(gameSeq);
   gameflash(randbtn);
}

function gameflash(btn)
{
   btn.classList.add("flash");
   setTimeout(() => {
    btn.classList.remove("flash");
   }, 250);
}

function userflash(btn)
{
   btn.classList.add("userflash");
   setTimeout(() => {
    btn.classList.remove("userflash");
   }, 250);
}


 function checkans(idx)
 {
 

   if(userSeq[idx]===gameSeq[idx])
   {
     if(userSeq.length==gameSeq.length)
     {
       setTimeout(levelup,1000);
    }
   console.log("same value");
   }
   else{
    h2.innerHTML=`Game Over!<b> your score ${level}</b> <br>Press any key to start.`;
     Reset();
   }
  
 }

function btnpress()
{
 console.log(this);
  let btn=this;
 userflash(btn);

  usercolor=btn.getAttribute("id");
  console.log(usercolor);
  userSeq.push(usercolor);
 checkans(userSeq.length-1);
 
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
{
  btn.addEventListener("click",btnpress);

}

function Reset()
{
  started=false;
  gameSeq=[];
  userSeq=[];
  level=0;
}

 


