let userScore = document.querySelector(".userScore");
let computerScore = document.querySelector(".computerScore");
let userImg = document.querySelector(".userImg");
let computerImg = document.querySelector(".computerImg");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let result = document.querySelector(".result")
let user_sc  = 0;
let computer_sc = 0;
let arr=["rock","paper","scissor"]
let random = Math.floor(Math.random() * arr.length);
console.log(arr[random]);

rock.addEventListener("click" ,function(){
    userImg.src="image/rock.png"
    if(arr[random]=="rock"){
        computerImg.src="image/rock.png"
        result.innerText="Match Tie Try Again"
    }else if(arr[random]=="paper"){
        computerImg.src="image/paper.png"
        result.innerText="Computer win"
        computer_sc++
        computerScore.innerText=`Computer score : ${computer_sc}`
    }else{
        computerImg.src="image/scissor.png"
        result.innerText="User win"
        user_sc++
        userScore.innerText=`User score : ${user_sc}`
    }
    random = Math.floor(Math.random() * arr.length);
    console.log(arr[random]);   
})
paper.addEventListener("click" ,function(){
    userImg.src="image/paper.png"
    if(arr[random]=="paper"){
        computerImg.src="image/paper.png"
        result.innerText="Match Tie Try Again"
    }else if(arr[random]=="scissor"){
        computerImg.src="image/scissor.png"
        result.innerText="Computer win"
        computer_sc++
        computerScore.innerText=`Computer score : ${computer_sc}`
    }else{
        computerImg.src="image/rock.png"
        result.innerText="User win"
        user_sc++
        userScore.innerText=`User score : ${user_sc}`
    }
    random = Math.floor(Math.random() * arr.length);
    console.log(arr[random]);
})
scissor.addEventListener("click" ,function(){
    userImg.src="image/scissor.png"
    if(arr[random]=="scissor"){
        computerImg.src="image/scissor.png"
        result.innerText="Match Tie Try Again"
        
    }else if(arr[random]=="rock"){
        computerImg.src="image/rock.png"
        result.innerText="Computer win"
        computer_sc++
        computerScore.innerText=`Computer score : ${computer_sc}`
    }else{
        computerImg.src="image/paper.png"
        result.innerText="User win"
        user_sc++
        userScore.innerText=`User score : ${user_sc}`
    }
    random = Math.floor(Math.random() * arr.length);
    console.log(arr[random]);
})