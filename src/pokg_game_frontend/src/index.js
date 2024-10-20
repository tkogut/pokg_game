import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory as pokg_game_backend_idl } from "../../declarations/pokg_game_backend/pokg_game_backend.did.js";

const agent = new HttpAgent({ host: 'http://127.0.0.1:4943' });
agent.fetchRootKey(); // Disable certificate verification in development mode

const randomPosition = Actor.createActor(pokg_game_backend_idl, { agent, canisterId: "bkyz2-fmaaa-aaaaa-qaaaq-cai" });

async function movePoint() {
    const point = document.getElementById('point');
    const result = await randomPosition.getRandomPosition();
    if (result) {
        const [x, y] = result;
        point.style.left = `${x}px`;
        point.style.top = `${y}px`;
    } else {
        console.error("Undefined result from backend");
    }
}

setInterval(movePoint, 1000);
