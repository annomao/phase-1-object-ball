function gameObject(){
  const game ={
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black","White"],
      players: {
        "Alan Anderson":{
          number:0,
          shoe:16,
          points:22,
          rebounds:12,
          assists:12,
          steals:3,
          blocks:1,
          slamDunks:1,
        },
        "Reggie Evans":{
          number:30,
          shoe:14,
          points:12,
          rebounds:12,
          assists:12,
          steals:12,
          blocks:12,
          slamDunks:7,
        },
        "Brook Lopez":{
          number:11,
          shoe:17,
          points:17,
          rebounds:19,
          assists:10,
          steals:3,
          blocks:1,
          slamDunks:15,
        },
        "Mason Plumlee":{
          number:1,
          shoe:19,
          points:26,
          rebounds:12,
          assists:6,
          steals:3,
          blocks:8,
          slamDunks:5,
        },
        "Jason Terry":{
          number:31,
          shoe:15,
          points:19,
          rebounds:2,
          assists:2,
          steals:4,
          blocks:11,
          slamDunks:1,
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien":{
          number:4,
          shoe:18,
          points:10,
          rebounds:1,
          assists:1,
          steals:2,
          blocks:7,
          slamDunks:2,
        },
        "Bismak Biyombo":{
          number:0,
          shoe:16,
          points:12,
          rebounds:4,
          assists:7,
          steals:7,
          blocks:15,
          slamDunks:10,
        },
        "DeSagna Diop":{
          number:2,
          shoe:14,
          points:24,
          rebounds:12,
          assists:12,
          steals:4,
          blocks:5,
          slamDunks:5,
        },
        "Ben Gordon":{
          number:8,
          shoe:15,
          points:33,
          rebounds:3,
          assists:2,
          steals:1,
          blocks:1,
          slamDunks:0,
        },
        "Brendan Haywood":{
          number:33,
          shoe:15,
          points:6,
          rebounds:12,
          assists:12,
          steals:22,
          blocks:5,
          slamDunks:12,
        }
      }
    }
  }
  return game
}

function getPlayerObject(playerName){
  const game = gameObject();
  for (let gameKey in game){
    let team = game[gameKey];
    for(let teamKey in team){
      if (teamKey=== "players"){
        let teamPlayer = team[teamKey]
        for(let playerKey in teamPlayer){
          if (playerKey === playerName){
            return teamPlayer[playerKey]
          }
        }
      }  
    } 
  }
}

function numPointsScored(playerName){
  const player = getPlayerObject(playerName)
  return `${playerName} has ${player.points} points`
}

function shoeSize(playerName){
  const player = getPlayerObject(playerName)
  return player.shoe
}

function playerStats(playerName){
  return getPlayerObject(playerName)
}
///////////
function teamNames(){

  const teamNameArray = []
  const game = gameObject();

  for (let gameKey in game){
    let team = game[gameKey];
    for(let teamKey in team){
      if (teamKey === "teamName"){
        teamNameArray.push(team[teamKey])
      }
    }
  }

  return teamNameArray
}   
////////////
function getTeamObject(nameOfTeam){
  const game = gameObject();

  for (let gameKey in game){
    let team = game[gameKey];
    for(let teamKey in team){
      if (teamKey === "teamName"){
        let name = team[teamKey]
        if (name === nameOfTeam){
          return team
        }
      }
    }
  }
}

function teamColors(nameOfTeam){
  const team = getTeamObject(nameOfTeam)

  for(let teamKey1 in team){
    if (teamKey1 === "colors"){
      return team["colors"]
    }
  }
}



function playerNumbers(nameOfTeam){

  const playerNumberArray = []
  const team = getTeamObject(nameOfTeam)

  for(let teamKey in team){
    if (teamKey=== "players"){
      let teamPlayer = team[teamKey]
      for(let playerKey in teamPlayer){
        const player = teamPlayer[playerKey]
        playerNumberArray.push(player["number"])
      }
    }
  }
  return `Team ${nameOfTeam} has the following numbers ${playerNumberArray}`  
  }

function bigShoeRebounds(){

  const players = ["Alan Anderson","Reggie Evans","Brook Lopez","Mason Plumlee","Jason Terry",
  "Jeff Adrien","Bismak Biyombo","DeSagna Diop","Ben Gordon","Brendan Haywood"]
  const shoeSizes = []
  const rebounds = []

  for(const player of players){
    let size = shoeSize(player)
    shoeSizes.push(size)
    let rebound = playerRebounds(player)
    rebounds.push(rebound)
  }
  const largestShoeSize = Math.max(...shoeSizes)
  const index = shoeSizes.indexOf(largestShoeSize)
  console.log(index,shoeSizes,rebounds)

  return `Player: ${players[index]} with the largest shoe size:${largestShoeSize},has ${rebounds[index]} rebounds`
}

//get player rebound given player name
function playerRebounds(playerName){
  const player = getPlayerObject(playerName)
  return player.rebounds
}