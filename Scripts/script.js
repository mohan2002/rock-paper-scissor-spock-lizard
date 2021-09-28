var demo = document.getElementById('click');
var start = document.getElementById('start');
var after = document.getElementById('after');
var humanchoiceimg = document.getElementById('humanchoiceimg');
var botchoiceimg = document.getElementById('botchoiceimg')
var human = document.getElementById('human');
var bot = document.getElementById('bot')
var points = 0;
var displayres = document.getElementById('res')
var score = document.getElementById('points')
var human1 = document.getElementById('human1')
var human2 = document.getElementById('human2')
var human3 = document.getElementById('human3')
var bot1 = document.getElementById('bot1')
var bot2 = document.getElementById('bot2')
var bot3 = document.getElementById('bot3')

var fivestart = document.getElementById('5-start');
var fiveafter = document.getElementById('5-after');
var humanfive = document.getElementById('human-five');
var botfive = document.getElementById('bot-five')
var human1five = document.getElementById('human1-five')
var human2five = document.getElementById('human2-five')
var human3five = document.getElementById('human3-five')
var bot1five = document.getElementById('bot1-five')
var bot2five = document.getElementById('bot2-five')
var bot3five = document.getElementById('bot3-five')
var displayresfive = document.getElementById('res-five')

var three_top = document.getElementById('three-top-one')
var five_top = document.getElementById('five-top-one')
var three = document.getElementById('three')
var five = document.getElementById('five')
var adv = document.getElementById('adv')
demo.addEventListener('click',() => {
    demo.classList.toggle('active')
    three_top.classList.toggle('hide')
    five_top.classList.toggle('hide')
    three.classList.toggle('hide')
    five.classList.toggle('hide')
})



function Game(choice){
    start.classList.add('hide')
    after.classList.remove('hide')
    after.classList.add('after')
    var Humanchoice,Botchoice;
    Humanchoice = choice.id;
    Botchoice = findBotpreference();
    evaluatescore(Humanchoice,Botchoice);
    displayFrontEnd(Humanchoice,Botchoice);
}

function findBotpreference(){
    choices = ['rock','paper','scissors'];
    random = Math.floor(Math.random() * 3)
    return choices[random];
}


function evaluatescore(humanchoice,botchoice){
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1,'paper': 0.5,'scissors': 0},
        'scissors': {'paper': 1,'scissors': 0.5,'rock': 0}
    };

    var humanscore = rpsDatabase[humanchoice][botchoice];
    var botscore = rpsDatabase[botchoice][humanchoice];

    
    evaluateswinner(humanscore,botscore);
    displaycolor(humanscore,botscore)

}

function displaycolor(humanscore,botscore)
{
    if(humanscore === 1){
        human1.classList.add('first')
        human2.classList.add('second')
        human3.classList.add('third')
        bot1.classList.remove('first')
        bot2.classList.remove('second')
        bot3.classList.remove('third')
    }
    else if(botscore === 1){
        bot1.classList.add('first')
        bot2.classList.add('second')
        bot3.classList.add('third')
        human1.classList.remove('first')
        human2.classList.remove('second')
        human3.classList.remove('third')
    }
    else{
        bot1.classList.remove('first')
        bot2.classList.remove('second')
        bot3.classList.remove('third')
        human1.classList.remove('first')
        human2.classList.remove('second')
        human3.classList.remove('third')
    }
}

function evaluateswinner(humanscore,botscore){
    var message;
    if(humanscore === botscore){
        message = "TIED"
        points = points + 0
    }
    else if(humanscore === 1 & botscore === 0){
        message = "YOU WIN"
        points = points + humanscore
    }
    else{
        message = "YOU LOSE"
        points = points - botscore
    }

    displayres.innerText = message
    score.innerText = points
    console.log(points,message);
}

function displayFrontEnd(Humanchoice,Botchoice){
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
        'lizard': document.getElementById('lizard').src,
        'spock':document.getElementById('spock').src,
        
    }
    human.innerHTML = "<img src='" + imageDatabase[Humanchoice] + "' height=150 width=150/>"
    human.classList.add('paper-image')
    bot.innerHTML = "<img src='" + imageDatabase[Botchoice] + "' height=150 width=150/>"
    bot.classList.add('paper-image')
}


function restart(){
    start.classList.remove('hide')
    after.classList.add('hide')
    after.classList.remove('after')
}



function fivegame(fivechoice){
    fivestart.classList.remove('five-level')
    fivestart.classList.add('hide')
    fivestart.classList.remove('five-level')
    fiveafter.classList.remove('hide')
    fiveafter.classList.add('after')
    var Humanchoice,Botchoice;
    Humanchoice = fivechoice.id
    Botchoice = fiverandom()
    fiveevaluatescore(Humanchoice,Botchoice)
    fivedisplayFrontEnd(Humanchoice,Botchoice)
}

function fiverandom(){
    choices = ['rock','paper','scissors','lizard','spock'];
    random = Math.floor(Math.random() * 5)
    return choices[random];
}

function fivedisplayFrontEnd(Humanchoice,Botchoice){
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
        'lizard': document.getElementById('lizard').src,
        'spock':document.getElementById('spock').src,
        
    }
    humanfive.innerHTML = "<img src='" + imageDatabase[Humanchoice] + "' height=150 width=150/>"
    humanfive.classList.add('paper-image')
    botfive.innerHTML = "<img src='" + imageDatabase[Botchoice] + "' height=150 width=150/>"
    botfive.classList.add('paper-image')

}

function fiveevaluatescore(humanchoice,botchoice){
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0, 'lizard':1,'spock':0},
        'paper': {'rock': 1,'paper': 0.5,'scissors': 0,'lizard':0,'spock':1},
        'scissors': {'paper': 1,'scissors': 0.5,'rock': 0,'lizard':1,'spock':0},
        'lizard': {'paper': 1,'scissors': 0,'rock': 0,'lizard':0.5,'spock':1},
        'spock': {'paper': 0,'scissors': 1,'rock': 1,'lizard':0,'spock':0.5},
    };

    var humanscore = rpsDatabase[humanchoice][botchoice];
    var botscore = rpsDatabase[botchoice][humanchoice];

    console.log(humanscore,botscore);
    
    fiveevaluateswinner(humanscore,botscore);
    fivedisplaycolor(humanscore,botscore)
}
function fiveevaluateswinner(humanscore,botscore){
    var message;
    if(humanscore === botscore){
        message = "TIED"
        points = points + 0
    }
    else if(humanscore === 1 & botscore === 0){
        message = "YOU WIN"
        points = points + humanscore
    }
    else{
        message = "YOU LOSE"
        points = points - botscore
    }

    displayresfive.innerText = message
    score.innerText = points
    console.log(points,message);
}
function fivedisplaycolor(humanscore,botscore){
    if(humanscore === 1){
        human1five.classList.add('first')
        human2five.classList.add('second')
        human3five.classList.add('third')
        bot1five.classList.remove('first')
        bot2five.classList.remove('second')
        bot3five.classList.remove('third')
    }
    else if(botscore === 1){
        bot1five.classList.add('first')
        bot2five.classList.add('second')
        bot3five.classList.add('third')
        human1five.classList.remove('first')
        human2five.classList.remove('second')
        human3five.classList.remove('third')
    }
    else{
        bot1five.classList.remove('first')
        bot2five.classList.remove('second')
        bot3five.classList.remove('third')
        human1five.classList.remove('first')
        human2five.classList.remove('second')
        human3five.classList.remove('third')
    }
}

function restartfive(){
    fivestart.classList.add('five-level')
    fivestart.classList.add('five-level')
    fivestart.classList.remove('hide')
    fiveafter.classList.add('hide')
    fiveafter.classList.remove('after')
}