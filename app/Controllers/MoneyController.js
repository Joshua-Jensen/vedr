import { appState } from "../AppState.js";
import { moneyService } from "../Services/MoneyService.js";
import { setText } from "../Utils/Writer.js";



function _drawMoney() {
    setText('money', appState.money.toString())
}

export class MoneyController {
    constructor() {
        console.log('money controller')

    }

    addMoney() {
        moneyService.addMoney()
        console.log('adding money', appState.money)
    }
}
