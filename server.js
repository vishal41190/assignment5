#!/usr/bin/env node

"use strict";
var weapon = [
            "scissors",
             "paper",
            "rock",
             "lizard",
             "spock"]


var outcome;
var wins=0;
var losses=0;
var ties=0;
var random;
var randomAns;
var http = require("http"),
    querystring = require("querystring"),
    child_process = require("child_process");


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function frontPage(req, res) {
    res.writeHead(200, {
        "Content-Type": "application/json"
    });

   
    
    if(req.url === "/play/rock"){
        random = getRandomInt(0,4);       
        randomAns =   weapon[random];
        switch(randomAns){
                case "rock":
                outcome="tie";
                ties++;
                break;
                case "paper":
                outcome="lose";
                losses++;
                break;
                case "scissors":
                outcome="win";
                wins++;
                break;
                case "lizard":
                outcome="win";
                wins++;
                break;
                case "spock":
                outcome="lose";
                losses++;
                break;
        }
       
    }else if(req.url === "/play/paper"){
        random = getRandomInt(0,4);       
        randomAns =   weapon[random];
        switch(randomAns){
                case "rock":
                outcome="win";
                wins++;
                break;
                case "paper":
                outcome="tie";
                ties++;
                break;
                case "scissors":
                outcome="lose";
                losses++;
                break;
                case "lizard":
                outcome="lose";
                losses++;
                break;
                case "spock":
                outcome="win";
                wins++;
                break;
        }
    }else if (req.url === "/play/scissors"){
         random = getRandomInt(0,4);       
        randomAns =   weapon[random];
        switch(randomAns){
                case "rock":
                outcome="lose";
                losses++;
                break;
                case "paper":
                outcome="win";
                wins++;
                break;
                case "scissors":
                outcome="tie";
                ties++;
                break;
                case "lizard":
                outcome="win";
                wins++;
                break;
                case "spock":
                outcome="lose";
                losses++;
                break;
        }
    }else if (req.url === "/play/lizard"){   
        random = getRandomInt(0,4);       
        randomAns =   weapon[random];
        switch(randomAns){
                case "rock":
                outcome="lose";
                losses++;
                break;
                case "paper":
                outcome="win";
                wins++;
                break;
                case "scissors":
                outcome="lose";
                losses++;
                break;
                case "lizard":
                outcome="tie";
                ties++;
                break;
                case "spock":
                outcome="win";
                wins++;
                break;
        }
    }else if (req.url === "/play/spock"){
        random = getRandomInt(0,4);       
        randomAns =   weapon[random];
        switch(randomAns){
                case "rock":
                outcome="win";
                wins++;
                break;
                case "paper":
                outcome="lose";
                losses++;
                break;
                case "scissors":
                outcome="win";
                wins++;
                break;
                case "lizard":
                outcome="lose";
                losses++;
                break;
                case "spock":
                outcome="tie"
                ties++;
                break;
        }
    }
    
 
    res.write(JSON.stringify({outcome:outcome, wins:wins,losses:losses,ties:ties}));
    res.end();
}

var server = http.createServer(frontPage);
server.listen(3000);
var address = server.address();
console.log("game is listening at http://localhost:" + address.port + "/");
