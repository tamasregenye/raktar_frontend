import { api } from "../../../lib/api";
import { Product } from "../models/Product";

export const productApi = {
    /**
     * 
     * @returns {Product[]} termékek tömb
     */
    getAll: async () => {
        const response = await api.get("/termekek");
        const products = response.data.map(item => Product.fromApi(item));
        return products;
    },

    /**
     * 
     * @param {Number} id 
     * @param {Product} product 
     */
    update: (id, product) => api.put(`/termekek/${id}`, {
        kategoriaId: product.kategoriaId,
        termekNev: product.nev,
        ar: product.ar,
        darabSzam: product.keszleten
    }),
    delete: (id) => api.delete(`/termekek/${id}`)
}