export class Snacks {
    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.remaining = data.remaining
        this.img = data.img

    }

    get SnackTemplate() {
        return `
        <div class="col-3 text-center">
        <img onclick="app.snacksController.buySnack('${this.name}')" class="snack-img" src="${this.img}" alt="">
        <p class="">${this.price}</p>
        </div>
`
    }
}
