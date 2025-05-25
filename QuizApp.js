const QuizData=[
     {
    question: "What is the capital of France?",
    a: "London",
    b: "Paris",
    c: "Berlin",
    d: "Madrid",
    correct: "b"
  },
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d"
  },
  {
    question: "What does CSS stand for?",
    a: "Cascading Style Sheets",
    b: "Creative Style System",
    c: "Computer Style Sheet",
    d: "Colorful Style Syntax",
    correct: "a"
  }
];
const answersLst=document.querySelectorAll(".answer");
const questionEl=document.getElementById("question");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const submit=document.getElementById("submit");
let score=0;
let currentQuest=0;
function loadQuiz(){
   deleteChecks();
   const currentdata= QuizData[currentQuest];
   questionEl.innerText=currentdata.question;
   a_text.innerText=currentdata.a;
    b_text.innerText=currentdata.b;
     c_text.innerText=currentdata.c;
      d_text.innerText=currentdata.d;
   
}
function deleteChecks(){
   answersLst.forEach(el=> el.checked=false);
}
function getselected(){
    let answer;
    answersLst.forEach(el=>{
        if(el.checked){
            answer=el.id;
        }
    });
    return answer;
}
submit.addEventListener("click", ()=>{
    const answer=getselected();
    if(answer==QuizData[currentQuest].correct){
        score++;
       
    }
     currentQuest++;
        if(currentQuest<QuizData.length){
            loadQuiz();
        }
        else{
            document.querySelector(".quiz-container").innerHTML=
            `<h2>You Scored ${score}/${QuizData.length}</h2>
            <button onclick="location.reload()"> Reload</button>`;
        }
    
})
loadQuiz();