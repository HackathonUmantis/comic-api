export default class Tag {

    constructor(uuid, name = null) {
        this.uuid = uuid;
        this.name = setName(name);
    }
    // // Getter
    // get coordinates() {
    //     return this.coordinates;
    // }
}

function setName(name) {
    if (!name) {
        name = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 5; i++) {
            name += possible.charAt(Math.floor(Math.random() * possible.length));
        }
    }
    return name;
}