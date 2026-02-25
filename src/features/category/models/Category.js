/**
 * Kategória modell osztály
 */
export class Category {
    constructor(id, nev){
        this.id = id,
        this.nev = nev
    }

    static fromApi(data){
        const category = new Category(data.id, data.nev);
        return category;
    }
}