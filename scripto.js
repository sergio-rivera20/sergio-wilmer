const quizData = [
    {
        question: 'En el último mes, ¿con qué frecuencia ha estado afectado por algo que ha ocurrido inesperadamente?',
        a: 'Nunca',
        b: 'Casi Nunca',
        c: 'De vez en cuando',
        d: 'A menudo',
        e: 'Muy a menudo',
        

        
    },{
        question: 'En el último mes, ¿con qué frecuencia se ha sentido nervioso o estresado?',
        a: 'Nunca',
        b: 'Casi Nunca',
        c: 'De vez en cuando',
        d: 'A menudo',
        e: 'Muy a menudo',
        
    },{
        question: 'En el último mes, ¿con qué frecuencia ha estado seguro sobre su capacidad para manejar sus problemas personales?',
        a: 'Nunca',
        b: 'Casi Nunca',
        c: 'De vez en cuando',
        d: 'A menudo',
        e: 'Muy a menudo',
        
    },{
        question: 'En el último mes, ¿con qué frecuencia ha sentido que las cosas le van bien?',
        a: 'Nunca',
        b: 'Casi Nunca',
        c: 'De vez en cuando',
        d: 'A menudo',
        e: 'Muy a menudo',
        
    },{
        question: 'En el ultimo mes, ¿con que frecuencia se ha sentido que tenia todo bajo control?',
        a: 'Nunca',
        b: 'Casi Nunca',
        c: 'De vez en cuando',
        d: 'A menudo',
        e: 'Muy a menudo',
        
    },{
        question: 'En el último mes, ¿con qué frecuencia ha estado enfadado porque  las cosas que le han ocurrido estaban fuera de su control?',
        a: 'Nunca',
        b: 'Casi Nunca',
        c: 'De vez en cuando',
        d: 'A menudo',
        e: 'Muy a menudo',
        
    },{
        question: 'En el último mes, ¿con qué frecuencia ha  pensado sobre las cosas que le quedan  por hacer?',
        a: 'Nunca',
        b: 'Casi Nunca',
        c: 'De vez en cuando',
        d: 'A menudo',
        e: 'Muy a menudo',
        
    },{
        question: 'En el último mes, ¿con qué frecuencia ha podido controlar la forma  de  pasar  el tiempo?',
        a: 'Nunca',
        b: 'Casi Nunca',
        c: 'De vez en cuando',
        d: 'A menudo',
        e: 'Muy a menudo',
        
    },{
        question: 'En el último mes, ¿con qué frecuencia ha sentido que las dificultades se acumulan tanto que no puede superarlas?',
        a: 'Nunca',
        b: 'Casi Nunca',
        c: 'De vez en cuando',
        d: 'A menudo',
        e: 'Muy a menudo',
        
    },{
        question: 'En el último mes, ¿con qué frecuencia ha sentido que ha afrontado efectivamente los cambios importantes que han estado ocurriendo en su vida?',
        a: 'Nunca',
        b: 'Casi Nunca',
        c: 'De vez en cuando',
        d: 'A menudo',
        e: 'Muy a menudo',
        
    }
];


const quiz = document.getElementById('quiz');
//radio btn
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
//text
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');


const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

//Se va a llamar a esta función cada vez que oprimamos "Enviar"
loadQuz();

function loadQuz(){
    deselectAsnswers()
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    

   
}

function getSelected(){

    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer =  answerEl.id;
        }
    });

    return answer;
}

function deselectAsnswers(){
    answersEls.forEach((answerEl) => {
       answerEl.checked = false;
        });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    console.log(answer);
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuz();
        }else{
            quiz.innerHTML = `
            <h3>¡Respondiste bien las preguntas!</h3>
            
            <button onclick="window.location.href = 'fotografia/base.html'">¡Tomate una foto!</button>
        `; 
        }
    }        
});

