import { useContext, useEffect, useState } from "react";
import { productApi } from "../api/productApi";
import { Product } from "../models/Product";
import { createContext } from "react";

const ProductContext = createContext(null);

export function ProductProvider({ children }) {
    //állapotváltozók
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    //függvények
    const refreshProducts = async () => {
        setIsLoading(true);
        try {
            const data = await productApi.getAll();
            setProducts(data);
        }
        catch (error) {
            console.error("Hiba a termékek lekérdezése során", error);
        }
        finally {
            setIsLoading(false);
        }
    }

    /**
     * 
     * @param {Product} product 
     */
    const updateProduct = async (product) => {
        try {
            await productApi.update(product.id, product);
            await refreshProducts();
        }
        catch (error) {
            console.error("Hiba a termék módosítása során", error);
        }
    }

    /**
     * 
     * @param {Number} id törlendő termék azonosítója
     */
    const deleteProduct = async (id) => {
        try {
            await productApi.delete(id);
            await refreshProducts();
        }
        catch (error) {
            console.error("Hiba a termék törlése során", error);
        }
    }

    useEffect(() => {
        refreshProducts()
    }, []);

    return (
        <ProductContext.Provider value={ { products, isLoading, refreshProducts, updateProduct, deleteProduct } }>
            {children}
        </ProductContext.Provider>
    );
}

export const useProducts = () => {
    const context = useContext(ProductContext);

    if(!context){
        throw new Error("A ProductProvideren belül tudod csak használni a useProductot!")
    }

    return context;
}