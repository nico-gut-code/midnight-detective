const scenes = {

start: {
text: "Rain falls on the city. A call at 3 AM. Murder at the harbor.",
choices: [
{ text: "Drive to harbor", next: "harbor" },
{ text: "Call police", next: "police" },
{ text: "Keep sleeping", next: "badEnd" }
]
},

harbor: {
text: "Fog lies over the water. A figure runs away.",
choices: [
{ text: "Chase", next: "chase" },
{ text: "Investigate crime scene", next: "investigate" }
]
},

police: {
text: "The police are suspicious. You waste precious time.",
choices: [
{ text: "Go to harbor anyway", next: "harbor" }
]
},

badEnd: {
text: "In the morning the killer is gone. Case failed.",
choices: []
},

chase: {
text: "You chase the figure through dark alleys. Your heart races.",
choices: [
{ text: "Run faster", next: "caughtSuspect" },
{ text: "Call for backup", next: "backup" }
]
},

caughtSuspect: {
text: "You catch the figure! A suspicious man with a weapon. What now?",
choices: [
{ text: "Disarm", next: "goodEnd" },
{ text: "Negotiate", next: "escape" }
]
},

backup: {
text: "Police arrive. The suspect is cornered.",
choices: [
{ text: "Interrogate", next: "goodEnd" }
]
},

escape: {
text: "The man flees. You lost him.",
choices: [
{ text: "Return to crime scene", next: "investigate" }
]
},

investigate: {
text: "At the crime scene you find important evidence.",
choices: [
{ text: "Catch the killer", next: "goodEnd" }
]
},

goodEnd: {
text: "The case is solved! You are a real detective.",
choices: []
}

};

let currentScene = "start";

function showScene() {
const scene = scenes[currentScene];

document.getElementById("sceneText").innerText = scene.text;

const choicesDiv = document.getElementById("choices");
choicesDiv.innerHTML = "";

scene.choices.forEach(choice => {
const button = document.createElement("button");
button.innerText = choice.text;
button.onclick = () => {
currentScene = choice.next;
showScene();
};
choicesDiv.appendChild(button);
});
}

showScene();