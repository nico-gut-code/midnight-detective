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
},

chase: {
text: "Du verfolgst die Gestalt durch die dunklen Gassen. Dein Herz rast.",
choices: [
{ text: "Schneller laufen", next: "caughtSuspect" },
{ text: "Um Verstärkung rufen", next: "backup" }
]
},

caughtSuspect: {
text: "Du erreichst die Gestalt! Ein verdächtiger Mann mit einer Waffe. Was nun?",
choices: [
{ text: "Entwaffnen", next: "goodEnd" },
{ text: "Verhandeln", next: "escape" }
]
},

backup: {
text: "Die Polizei kommt. Der Verdächtige wird gestellt.",
choices: [
{ text: "Befragen", next: "goodEnd" }
]
},

escape: {
text: "Der Mann flieht. Du hast ihn verloren.",
choices: [
{ text: "Zum Tatort zurück", next: "investigate" }
]
},

investigate: {
text: "Am Tatort findest du wichtige Beweise.",
choices: [
{ text: "Den Killer fassen", next: "goodEnd" }
]
},

goodEnd: {
text: "Der Fall ist gelöst! Du bist ein echter Detective.",
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