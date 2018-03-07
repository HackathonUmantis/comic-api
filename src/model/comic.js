import Page from './page';
export default class Comic {

    constructor(name, date, author, illustrator, publisher, tags = null, pages = null) {
        this.name = name;
        this.date = date;
        this.author = author;
        this.illustrator = illustrator;
        this.publisher = publisher,
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
        for (let index = 0, length = Math.floor(Math.random() * 10) * 10; index < length; index++) {
            pages.push(new Page());
        }
    }
    return pages;
}

function setPages(pages) {
    if (!pages) {
        pages = new Array();
        for (let index = 0, length = Math.floor(Math.random() * 10) * 10; index < length; index++) {
            pages.push(new Page());
        }
    }
    return pages;
}