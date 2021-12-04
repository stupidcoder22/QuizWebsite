let quiz = [
    {
        question: "HTML stands for?",
        option:[
            "Hyper Text Markup Language",
            "High Text Markup Language",
            "Hyper Tabular Markup Language",
            "None of these",
        ],
        answer: "one",
        no: 0,
    },

    
    {
        question: "The hr tag in HTML is used for ",
        option:[
            "New Line",
            "Paragraph",
            "Horizontal line",
            "New Paragraph",
        ],
        answer: "three",
        no: 1,
    },

    {
        question: "A program in HTML can be rendered and read by",
        option:[
            "Web Browser",
            "Server",
            "Interpreter",
            "None of the above",
        ],
        answer: "one",
        no: 2,
    },

    {
        question: "The tags in HTML are",
        option: [
            "case sensitive",
            "in upper case",
            "in lower case",
            "not case sensitive",
        ],
        answer: "four",
        no: 3,
    },

    {
        question: "HTML is a subset of ______",
        option: [
            "SGMD",
            "SGML",
            "SGMH",
            "None of the above",
        ],
        answer: "three",
        no: 4,
    },
]

let totaltime = 200;
let minute = 0;
let second = 0;
let counter = 0;
let index = 0;
let attempt = 0;
let questions = quiz;
let score = 0;
let wrong = 0;
let tp = 0;

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');

let timer = setInterval(function() {
    counter++;
    minute = Math.floor((totaltime-counter) / 60);
    second = totaltime - (minute*60) - counter;
    document.getElementById('timeval').innerHTML = minute+":"+second; 

    if(counter==totaltime){
        alert('Time is up, click ok to see the result');
        Scoreccard();
        clearInterval(timer);
    }

}, 1000);

    questionlist();
    function questionlist(){
        document.getElementById('boxquestion').innerHTML = quiz[index].question;
        one.innerHTML= quiz[index].option[0];
        two.innerHTML= quiz[index].option[1];
        three.innerHTML= quiz[index].option[2];
        four.innerHTML= quiz[index].option[3];
    }


    function reply_click(event){
        
        var currentAns = quiz[index].answer;
         if(event == currentAns){
             attempt++;
             score++;
             document.querySelector('.scorebox').innerHTML = "Score "+score;
             showNext();
            }
            else{
                wrong++;
                showNext();
         }
    }


    function showNext(){
        index++;
        console.log('shownext'+tp);
        if(index<quiz.length){
            questionlist();
        }
        else{
            Scoreccard();   
        }
    }

    function Scoreccard(){
        document.getElementById('main').style.display = "none";   
        document.getElementById('scoreScreen').style.display = "block";
        showResult();
    }


    function showResult(){
        var totl = document.getElementById('totalquestion');
        totl.innerHTML = quiz.length;
        var wrongattempt = document.getElementById('Wrong');
        wrongattempt.innerHTML = wrong;
        wrongattempt.style.color = 'red';

        var finalattempt = document.getElementById('attempt');
        finalattempt.innerHTML = attempt;

        var wrongattempt = document.getElementById('correct');
        wrongattempt.innerHTML = score;
        wrongattempt.style.color = 'green';
    }



    