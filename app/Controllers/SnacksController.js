import { appState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";
import { setHTML } from "../Utils/Writer.js";

function _drawSnacks() {
    console.log('drawing snacks', appState.snacks.img);
    let snacks = appState.snacks
    let template = ``
    snacks.forEach(s => template += s.SnackTemplate)

    setHTML('snack-machine', template)
}



export class SnacksController {
    constructor() {
        console.log('snacks controller')
        _drawSnacks()
    }


    buySnack(name) {
        console.log("buying snack")
        snacksService.buySnack(name)
    }


}