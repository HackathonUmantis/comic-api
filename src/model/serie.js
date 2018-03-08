import Comic from './comic';
export default class Serie {

    constructor(uuid, name = null, comics = null) {
        this.uuid = uuid;
        this.name = setName(name);
        this.comics = setComics(comics);
    }
    // // Getter
    // get coordinates() {
    //     return this.coordinates;
    // }
}

function setComics(comics) {
    if (!comics) {
        comics = new Array();
        for (let index = 0, length = Math.floor(Math.random() * 10); index < length; index++) {
            comics.push(new Comic(index + 1));
        }
    }
    return comics;
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
