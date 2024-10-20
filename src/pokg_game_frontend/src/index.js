import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory as greet_idl } from "./greet.did.js";
import { idlFactory as random_idl } from "./random_position.did.js";

const agent = new HttpAgent();
const greet = Actor.createActor(greet_idl, { agent, canisterId: "YOUR_GREETING_CANISTER_ID" });
const randomPosition = Actor.createActor(random_idl, { agent, canisterId: "YOUR_RANDOM_POSITION_CANISTER_ID" });

document.getElementById("greetButton").addEventListener("click", async () => {
    const name = document.getElementById("name").value;
    const greeting = await greet.greet(name);
    document.getElementById("greeting").innerText = greeting;
});

async function movePoint() {
    const point = document.getElementById('point');
    const [x, y] = await randomPosition.getRandomPosition();
    point.style.left = `${x}px`;
    point.style.top = `${y}px`;
}

setInterval(movePoint, 1000);
