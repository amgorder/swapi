import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";
import Character from "../Models/Character.js";

class CharctersService {

    constructor() {
        this.getCharacters()
    }

    getCharacters() {
        api.get('people').then(res => {
            console.log(res);
            ProxyState.characters = res.data.results.map(rawCharacterData => new Character(rawCharacterData))
            ProxyState.next = res.data.next
            ProxyState.prev = res.data.previous
        }).catch(err => console.error(err))
    }

    next() {
        api.get(ProxyState.next).then(res => {
            ProxyState.characters = res.data.results.map(rawCharacterData => new Character(rawCharacterData))
            ProxyState.next = res.data.next
            ProxyState.prev = res.data.previous
        }).catch(err => console.error(err))
    }

    prev() {


        api.get(ProxyState.prev).then(res => {
            ProxyState.characters = res.data.results.map(rawCharacterData => new Character(rawCharacterData))
            ProxyState.next = res.data.next
            ProxyState.prev = res.data.previous
        }).catch(err => console.error(err))

    }

}

export const charactersService = new CharctersService();