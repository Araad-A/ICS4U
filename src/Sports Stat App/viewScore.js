let newTeamScoreboard = JSON.parse(JSON.stringify(window.localStorage.getItem("teamScoreboard")));
let teamScoreboard = newTeamScoreboard != null ? JSON.parse(newTeamScoreboard) : [];  

let homeTeamName = window.localStorage.getItem("homeTeamName");
let homeTeamScore = window.localStorage.getItem("homeTeamScore");
let homeTeamWins = window.localStorage.getItem("homeTeamWins");
let homeTeamLosses = window.localStorage.getItem("homeTeamLosses");
let homeTeamDraws = window.localStorage.getItem("homeTeamDraws");

let awayTeamName = window.localStorage.getItem("awayTeamName");
let awayTeamScore = window.localStorage.getItem("awayTeamScore");
let awayTeamWins = window.localStorage.getItem("awayTeamWins");
let awayTeamLosses = window.localStorage.getItem("awayTeamLosses");
let awayTeamDraws = window.localStorage.getItem("awayTeamDraws");

let gameDate = window.localStorage.getItem("gameDate")

console.log(gameDate)
console.log(homeTeamName)

let homeTeamRecord = (homeTeamWins.toString() + "-" + homeTeamLosses.toString() + "-" + homeTeamDraws.toString());
let awayTeamRecord = (awayTeamWins.toString() + "-" + awayTeamLosses.toString() + "-" + awayTeamDraws.toString());

createPage();

function createPage(){
   let container = document.getElementById('start')
   let i = 0;
   if (teamScoreboard.length == 0){
      container.appendChild(createHTML(teamScoreboard, i))
   }else{
      while (i <= teamScoreboard.length-1){
        container.appendChild(createHTML(teamScoreboard, i))
        i++
     }
  }
}


function checkTeam(scoreboard){
    let answer = true;
    for (i = 0; i < scoreboard[scoreboard.length-1].length; i++){
       try  {if (scoreboard[scoreboard.length-1][i] == scoreboard[scoreboard.length-2][i]){
                answer = true;
             }else if (scoreboard[scoreboard.length-1][i] != scoreboard[scoreboard.length-2][i]){
                answer = false;
             }
       }  catch (TypeError){
          return scoreboard;
       }
    }
 
    if (answer == true){
       scoreboard.pop(); 
       return scoreboard;
    }else if (answer == false){
       return scoreboard;
    }
 }
 
function createHTML(teamScoreboard, i){
   let name = [gameDate,awayTeamName,homeTeamName,awayTeamScore,homeTeamScore,awayTeamRecord,homeTeamRecord]
   
   teamScoreboard.push(name)
   checkTeam(teamScoreboard)
   console.log(teamScoreboard)
   sortData();

    //add index to check it does fit in the current pageNum
    //then add a teamScoreboard.push thing
    //add things to html using teamScoreboard array using index
 
    //add try catch(TypeError) and use 
 
    let ul = document.createElement("ul");
    ul.className = "bg-white p-0 m-0 mx-auto mb-3";
    ul.style = "height:300px; width:50%;";
 
    let boxDiv = document.createElement("div");
    boxDiv.className = "mb-5 space";
    boxDiv.style = "width:100%;"
 
    let personalDiv1 = document.createElement("div");
    personalDiv1.className = "d-flex";
 
    let date = document.createElement("h3")
    date.className = "py-3 bg-white mx-4";
    date.style = "position:relative;"
    date.appendChild(document.createTextNode(teamScoreboard[i][0]));
 
    let personalDiv2 = document.createElement("div")
    personalDiv2.className = "d-flex"
 
    let subDiv1 = document.createElement("div")
 
    let homeName = document.createElement("h4")
    homeName.className = "mx-4 mt-3"
    homeName.appendChild(document.createTextNode(teamScoreboard[i][2]));
 
    let homeRecord = document.createElement("h6")
    homeRecord.className = "text-info mx-4"
    homeRecord.appendChild(document.createTextNode("(" + teamScoreboard[i][6] + ")"));
 
    let homeScore = document.createElement("h3")
    homeScore.className = "score mt-4"
    homeScore.style = "margin-left:auto; margin-right:1em;"
    homeScore.appendChild(document.createTextNode(teamScoreboard[i][4]));
 
    let personalDiv3 = document.createElement("div")
    personalDiv3.className = "d-flex"
 
    let subDiv2 = document.createElement("div")
 
    let awayName = document.createElement("h4")
    awayName.className = "mx-4 mt-5"
    awayName.appendChild(document.createTextNode(teamScoreboard[i][1]));
 
    let awayRecord = document.createElement("h6")
    awayRecord.className = "text-info mx-4"
    awayRecord.appendChild(document.createTextNode("(" + teamScoreboard[i][5] + ")"));
 
    let awayScore = document.createElement("h3")
    awayScore.className = "score mt-5"
    awayScore.style = "margin-left:auto; margin-right:1em;"
    awayScore.appendChild(document.createTextNode(teamScoreboard[i][3]));
 
    if (parseInt(teamScoreboard[i][4]) > parseInt(teamScoreboard[i][3])){
       homeName.className = "mx-4 mt-3 fw-bold"
    }else if (parseInt(teamScoreboard[i][4]) < parseInt(teamScoreboard[i][3])){
       awayName.className = "mx-4 mt-5 fw-bold"
    }else if (parseInt(teamScoreboard[i][4]) == parseInt(teamScoreboard[i][3])){
       
    }
 
    ul.appendChild(boxDiv)
    boxDiv.appendChild(personalDiv1)
    boxDiv.appendChild(personalDiv2)
    boxDiv.appendChild(personalDiv3)
    personalDiv1.appendChild(date)
    personalDiv2.appendChild(subDiv1);  
    subDiv1.appendChild(homeName)
    subDiv1.appendChild(homeRecord)
    personalDiv2.appendChild(homeScore)
    personalDiv3.appendChild(subDiv2)
    subDiv2.appendChild(awayName)
    subDiv2.appendChild(awayRecord)
    personalDiv3.appendChild(awayScore)
    
    

    return ul;

    
}
 
function sortData(){
    window.localStorage.setItem('teamScoreboard', JSON.stringify(teamScoreboard));
}

 