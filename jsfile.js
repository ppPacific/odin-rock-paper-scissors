//add 5 rounds at bottom
//last step

const getCompChoice=()=>{
    let ans = Math.floor(Math.random() * 9)
    if (ans>=0 && ans<=2){
        ans = 'Rock'; return ans
    } else if (ans>=3 && ans<=5){
        ans = 'Paper';return ans
    } else if (ans>=6 && ans<=8){
        ans = 'Scissors';return ans
    }
}
let result = '';
let pscores = 0;
let cscores = 0;
const playRound=(playerSelection, computerSelection)=>{
    if (playerSelection === computerSelection){
        result = 'Tie!';
        console.log(playerSelection,computerSelection,result);
        return result;
    } else if(playerSelection==='Rock'){
        if (computerSelection==='Scissors'){
            result = 'You Wooonn! Rock beats Scissors';
            pscores+=1;
            console.log(playerSelection,computerSelection,result);
            return result;
        } else { result = 'You Loooose! Paper beats Rock';
            cscores+=1;
            console.log(playerSelection,computerSelection,result);
            return result;}

    } else if(playerSelection==='Scissors'){
        if (computerSelection==='Rock'){
            result = 'You Loooose! Rock beats Scissors';
            cscores+=1;
            console.log(playerSelection,computerSelection,result);
            return result;
        } else { result = 'You Wooonn! Scissors beats Paper';
            pscores+=1;
            console.log(playerSelection,computerSelection,result);
            return result;}
    }else if(playerSelection==='Paper'){
        if (computerSelection==='Rock'){
            result = 'You Wooonn! Paper beats Rocks';
            pscores+=1;
            console.log(playerSelection,computerSelection,result);
            return result;
        } else { result = 'You Loooose! Scissors beats Paper';
            cscores+=1;
            console.log(playerSelection,computerSelection,result);
            return result;}
    }
}

const game=()=>{
    for (let i=0;i<5;i++) {
        let sign = prompt('Choose Paper, Rock or Scissors');
            playRound(sign,getCompChoice())
        console.log(pscores,cscores,i)
    }
}
game();
console.log('player'+pscores,'comp'+cscores)
