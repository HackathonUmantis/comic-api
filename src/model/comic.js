import Page from './page';
import Tag from './tag';
export default class Comic {

    constructor(uuid, name = null, date, author, illustrator, publisher, tags = null, pages = null) {
        this.uuid = uuid;
        this.name = setName(name);
        this.date = date;
        this.author = author;
        this.illustrator = illustrator;
        this.publisher = publisher;
        this.pages = setPages(pages);
        this.tags = setTags(tags);
    }
    // // Getter
    // get coordinates() {
    //     return this.coordinates;
    // }
}

function setPages(pages) {
    if (!pages) {
        pages = new Array();
        for (let index = 0, length = Math.floor(Math.random() * 10) + 10; index < length; index++) {
            pages.push(new Page(index + 1));
        }
    }
    return pages;
}

function setTags(tags) {
    if (!tags) {
        tags = new Array();
        for (let index = 0, length = Math.floor(Math.random() * 10); index < length; index++) {
            tags.push(new Tag(index + 1));
        }
    }
    return tags;
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
