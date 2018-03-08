import Tile from './tile';
export default class Page {

    constructor(uuid, path = null, tiles = null) {
        this.uuid = uuid;
        this.path = setPath(path);
        this.tiles = setTiles(tiles);
    }
    // // Getter
    // get coordinates() {
    //     return this.coordinates;
    // }
}

function setTiles(tiles) {
    if (!tiles) {
        tiles = new Array();
        for (let index = 0; index < 10; index++) {
            tiles.push(new Tile(index));
        }
    }
    return tiles;
}

function setPath(path) {
    if (!path) {
        path = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 5; i++) {
            path += possible.charAt(Math.floor(Math.random() * possible.length));
        }
    }
    return path;
}