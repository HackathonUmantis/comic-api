import Coordinate from './coordinate';
export default class Tile {

    constructor(uuid, coordinates = null) {
        this.uuid = uuid;
        this.coordinates = setCoordinates(coordinates);
    }
    // // Getter
    // get coordinates() {
    //     return this.coordinates;
    // }
}

function setCoordinates(coordinates) {
    if (!coordinates) {
        coordinates = new Array();
        for (let index = 0, length = Math.floor(Math.random() * 10) + 2; index < length; index++) {
            coordinates.push(new Coordinate(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)));
        }
    }
    return coordinates;
}