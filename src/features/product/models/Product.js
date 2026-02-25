/**
 * Termék modell osztály
 */
export class Product {
    /**
     * @type {Number} A termék egyedi azonosítója.
     */
    id;

    /**
     * @type {Number} A termékhez tartozó kategória azonosítója.
     */
    kategoriaId;

    /**
     * @type {string} A termék neve
     */
    nev;

    /**
     * @type {float} A termék egységára (törtszám)
     */
    ar;

    /**
    * @type {Number} A raktáron lévő mennyiség (darabszám)
    */
    keszleten;

    constructor(id, katId, nev, ar, keszleten) {
        this.id = id,
        this.kategoriaId = katId,
        this.nev = nev,
        this.ar = ar,
        this.keszleten = keszleten
    }

        // this.id = data.id,
        // this.kategoriaId = data.kategoriaAzonosito,
        // this.nev = data.termekNev,
        // this.ar = data.ar,
        // this.keszleten = data.keszleten

    static fromApi(data){
        const product = new Product(data.id, data.kategoriaAzonosito, data.termekNev, data.ar, data.keszleten)
        return product;
    }
}