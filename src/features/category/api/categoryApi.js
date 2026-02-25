import { api } from "../../../lib/api";
import { Category } from "../models/Category";

export const categoryApi = {
    /**
     * 
     * @returns {Category[]} kategóriák tömb
     */
    getAll: async() => {
        const response = await api.get("/kategoriak");
        const categories = response.data.map(item => Category.fromApi(item));
        return categories;
    },

    /**
     * @param {String} categoryName 
     */
    create: (categoryName) => api.post("/kategoriak", {
        kategoriaNev: categoryName
    })
}