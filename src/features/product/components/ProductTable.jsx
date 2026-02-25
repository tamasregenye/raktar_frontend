import { Product } from "../models/Product";
import { Category } from "../../category/models/Category";

/**
 * 
 * @param {Object} props
 * @param {Product[]} props.products Termékek tömb
 * @param {Category[]} props.categories Kategóriák tömb
 */
export default function ProductTable({ products, categories }) {

    /**
     * Kategória nevének lekérése ID alapján.
     * @param {Number} catId - Keresett kategória azonosítója
     * @returns {string} A keresett kategória neve.
     * @description Kategória nevének lekérése ID alapján.
     */
    const getCategoryName = (catId) => {
        const category = categories.find(cat => cat.id == catId);

        return category ? category.nev : "ismeretlen kategória!";

        if (category) {
            return category.nev;
        }
        else {
            return "ismeretlen kategória!";
        }
    }

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Kategória</th>
                    <th>Terméknév</th>
                    <th>Ár</th>
                    <th>Mennyiség</th>
                </tr>
            </thead>
            <tbody>
                {products.map(
                    (product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{getCategoryName(product.kategoriaId)}</td>
                            <td>{product.nev}</td>
                            <td>{product.ar}</td>
                            <td>{product.keszleten}</td>
                        </tr>
                    )
                )}

            </tbody>
        </table>
    )
}