const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

const listOfPlayers = []
const blueTeam = []
const redTeam = []

//class creating template for each players stats

class Player {
  constructor(id, name, age, player){
    this.id = id;
    this.name = name;
    this.age = age;
    this.player = player;
  }
}

class BlueTeammate extends Player {
  constructor(id, name, age, player, color, mascot){
    super(id, name, age, player);
    this.color = color;
    this.mascot = mascot;
  }
}

class RedTeammate extends Player {
  constructor(id, name, age, player, color, mascot){
    super(id, name, age, player);
    this.color = color;
    this.mascot = mascot;
  }
}

const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  listElement.innerHTML = '';
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person.id)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}
// console.log(listPeopleChoices())
const makePlayer = (id) => {
  for(let i = 0; i < arrOfPeople.length; i++){
    if(id === arrOfPeople[i].id){
      let player = new Player(arrOfPeople[i].id, arrOfPeople[i].name, arrOfPeople[i].age, "player")
      listOfPlayers.push(player);
      arrOfPeople.splice(i, 1);
      listPeopleChoices();
      console.log(listOfPlayers, arrOfPeople)
      playerListUpdate();
    } 
  }
}

const playerListUpdate = () => {
  const playerlist = document.getElementById("players");
  playerlist.innerHTML = "";
  listOfPlayers.map(person => {
    const li = document.createElement("li");
    const blueButton = document.createElement("button");
    const redButton = document.createElement("button");
    blueButton.innerHTML = "Blue Team";
    blueButton.style.background = "blue"
    blueButton.style.color = "white"
    redButton.innerHTML = "Red Team";
    redButton.style.background = 'red';
    blueButton.addEventListener('click', function() {createBluePlayer(person.id)} );
    redButton.addEventListener('click', function() {createRedPlayer(person.id)} );
    li.appendChild(blueButton);
    li.appendChild(redButton);
    li.appendChild(document.createTextNode(person.name + " - " + person.id));
    playerlist.append(li);
  })
}

const createRedPlayer = (id)  => { 
  for(let i = 0; i < listOfPlayers.length; i++){
    if(id === listOfPlayers[i].id){
      let redPlayer = new RedTeammate(listOfPlayers[i].id, listOfPlayers[i].name, listOfPlayers[i].age, listOfPlayers[i].player, "red", "combat wombats")
      redTeam.push(redPlayer);
      listOfPlayers.splice(i, 1);
      listPeopleChoices();
      console.log(listOfPlayers, redTeam)
      playerListUpdate();
      addToTeam();
    } 
  }
};

const createBluePlayer  = (id)  => {
  for(let i = 0; i < listOfPlayers.length; i++){
    if(id === listOfPlayers[i].id){
      let bluePlayer = new BlueTeammate(listOfPlayers[i].id, listOfPlayers[i].name, listOfPlayers[i].age, listOfPlayers[i].player, "blue", "fat cats")
      blueTeam.push(bluePlayer);
      listOfPlayers.splice(i, 1);
      listPeopleChoices();
      console.log(listOfPlayers, blueTeam)
      playerListUpdate();
      addToTeam();
    } 
  }
};

const addToTeam = () => {
  const blueList = document.getElementById("blue");
  const redList = document.getElementById("red");
  blueList.innerHTML = "";
  redList.innerHTML = "";
  blueTeam.map(person => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(person.name + " - " + person.id));
    blueList.append(li);
  })
  redTeam.map(person => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(person.name + " - " + person.id));
    redList.append(li);
  })
}