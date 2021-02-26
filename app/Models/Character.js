export default class Character {
    constructor(data) {
        console.log('hello from the model');
        this.name = data.name
        this.mass = data.mass
        this.hair_color = data.hair_color
        this.eye_color = data.eye_color
    }

    get Template() {

        return /*html*/ `
        <div class="card p-2">
                <div class="row">
                    <div class="col">
                       <h3> ${this.name}</h3>
                        <li>mass: ${this.mass}</li>
                        <li>hair color: ${this.hair_color}</li>
                        <li>eye color: ${this.eye_color}</li>
                    </div>
                </div>
            </div>
        `
    }
}