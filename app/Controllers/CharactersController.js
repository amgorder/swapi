import { ProxyState } from "../AppState.js";
import { charactersService } from "../Services/CharactersService.js";



function _draw() {
    let characters = ProxyState.characters;
    let template = ''
    characters.forEach(v => template += v.Template)
    document.getElementById("app").innerHTML =  /*html*/`
    <div className="card-columns characters">
        ${template}
    </div>
    <button class="btn btn-primary" onclick="app.charactersController.next()">Next</button>
    <button class="btn btn-warning" onclick="app.charactersController.prev()">Previous</button>
    
    
    `



}


export default class CharactersController {
    constructor() {
        ProxyState.on("characters", _draw);
    }
    next() {
        charactersService.next()
    }
    prev() {
        charactersService.prev()
    }
}