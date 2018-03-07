import Coordinate from '../model/coordinate';
export default class Tile {

    constructor(coordinates) {
        this.coordinates = setCoordinates();
    }
    // // Getter
    // get coordinates() {
    //     return this.coordinates;
    // }
}

function setCoordinates() {
    let coordinates = new Array();
    for (let index = 0, length = Math.floor(Math.random() * 10); index < length; index++) {
        coordinates.push(new Coordinate(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)));
    }
    return coordinates;
}