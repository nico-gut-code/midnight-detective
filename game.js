const scenes = {

start: {
text: "Regen fällt auf die Stadt. Ein Anruf um 3 Uhr nachts. Mord im Hafen.",
choices: [
{ text: "Zum Hafen fahren", next: "harbor" },
{ text: "Polizei anrufen", next: "police" },
{ text: "Weiter schlafen", next: "badEnd" }
]
},

harbor: {
text: "Nebel liegt über dem Wasser. Eine Gestalt rennt davon.",
choices: [
{ text: "Verfolgen", next: "chase" },
{ text: "Tatort untersuchen", next: "investigate" }
]
},

police: {
text: "Die Polizei ist misstrauisch. Du verlierst wertvolle Zeit.",
choices: [
{ text: "Trotzdem zum Hafen", next: "harbor" }
]
},

badEnd: {
text: "Am Morgen ist der Killer verschwunden. Fall gescheitert.",
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