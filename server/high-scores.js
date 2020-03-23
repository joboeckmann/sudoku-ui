const fs = require('fs');
let express = require('express');



var app = express();

app.get('/', function(req, res){
    const highScores = JSON.parse(fs.readFileSync(`high-scores.json`));
    var difficulty  = req.query.difficulty;
    var score =  req.query.score;
    if (difficulty == "EASY"){
        if (score < highScores.easy){
            highScores.easy = score
        }
    }
    if (difficulty == "MEDIUM"){
        if (score < highScores.medium){
            highScores.medium = score
        }
    }
    if (difficulty == "HARD"){
        if (score < highScores.hard){
            highScores.hard = score
        }
    }
    fs.writeFileSync('high-scores.json', JSON.stringify(highScores))
    res.header("Access-Control-Allow-Origin", "*");
  res.send( highScores);
});

app.listen(3000);