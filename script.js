const quiz=[
    {
        question:"Q1._______ is the smallest unit of data in a computer ?",
        a:"GB",
        b:"Bit",
        c:"Byte",
        d:"TB",
        ans:"ans3"

    },
    {
        question:"Q2.Which of the following is NOT an anti-virus software ?",
        a:"Avast ",
        b:"Linux",
        c:"Norton",
        d:"Kaspersky",
        ans:"ans2"

    },
    {
        question:"Q3.In the context of digital computer, which of the following pairs of digits is referred to as binary code ?",
        a:"3 and 4",
        b:"0 and 1",
        c:"2 and 3",
        d:"1 and 2",
        ans:"ans2"

    },
    {
        question:"Q4.Which unit of the computer is considered as the brain of the computer ?",
        a:"Memory unit ",
        b:"Input unit",
        c:"CPU",
        d:"Output unit",
        ans:"ans3"

    },
    {
        question:"Q5.What is the full form of PROM ?",
        a:"Program read-only memory",
        b:"Primary read-only memory",
        c:"Program read-output memory",
        d:"Programmable read-only memory",
        ans:"ans4"

    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers=document.querySelectorAll('.answer');

const result=document.querySelector('#Result');

let qCount=0;
let Score=0;

const loadQuestion= () =>{
    const qList=quiz[qCount];
    
    question.innerText=qList.question;
    option1.innerText=qList.a;
    option2.innerText=qList.b;
    option3.innerText=qList.c;
    option4.innerText=qList.d;

}
loadQuestion();

const getCheck = () => {
    let answer;
    answers.forEach((curAnsEle)=>{
        if(curAnsEle.checked){
            answer=curAnsEle.id;
        }
    });
    return answer;
};

const resetall = () => {
    answers.forEach((curAnsEle) => curAnsEle.checked = false);
};

submit.addEventListener('click', () =>{
    const checkAns=getCheck();
    console.log(checkAns);

    if(checkAns == quiz[qCount].ans){
        Score++;
    };

    qCount++;

    resetall();

    if(qCount < quiz.length){
        loadQuestion();
    }else{
            Result.innerHTML=`
                <h3>You scored ${Score}/${quiz.length}</h3>
                <button class="btn" onclick="location.reload()">Play Again</button>
            `;
            Result.classList.remove('score');
    };
});
