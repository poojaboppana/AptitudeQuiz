const quizUrls = {
  numberSystem: "https://run.mocky.io/v3/89201e36-2eca-46ea-951b-3a449b997e35",
  percentages: "https://run.mocky.io/v3/7b02d64c-4a1c-41e4-84b2-d8f8c86d197f",
  profitLoss: "https://run.mocky.io/v3/7ad63aee-899a-4dd2-9cff-68afbbaf08dd",
  trains: "https://run.mocky.io/v3/55353694-40bb-475c-bf6b-734d6a16650d"
};

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
let quizData=[];
function startQuiz(){
  const subject=document.getElementById("subjectSelector").value;
  const url= quizUrls[subject];
  fetch(url).then(res=>res.json()).then(data=>{
    QuizData= data;
    currentQuest=0;
    score=0;
    loadQuiz();
  }
  ) .catch(err => alert("Failed to load quiz. Please try again."));

}
