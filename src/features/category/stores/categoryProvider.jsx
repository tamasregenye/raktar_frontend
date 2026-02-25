import { createContext, useContext, useEffect, useState } from "react";
import { categoryApi } from "../api/categoryApi";

const CategoryContext = createContext(null);

export function CategoryProvider({children}) {
    //állapotváltozók
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    //függvények
    const refreshCategories = async () => {
        setIsLoading(true);
        try {
            const data = await categoryApi.getAll();
            setCategories(data);
        }
        catch (error) {
            console.error("Hiba a kategóriák lekérdezése során", error);
        }
        finally {
            setIsLoading(false);
        }
    }

    const addCategory = async (categoryName) => {
        try {
            await categoryApi.create(categoryName);
            await refreshCategories();
        }
        catch (error) {
            console.error("Hiba a kategória létrehozása során", error);
        }
    }

    useEffect(
        () => { refreshCategories() },
        []
    )

    return (
        <CategoryContext.Provider value={ {categories, isLoading, refreshCategories, addCategory} }>
            {children}
        </CategoryContext.Provider>
    )
}

export const useCategories = () =>{
    const context = useContext(CategoryContext);

    if(!context){
        throw new Error("A CategoryProvideren belül tudod csak használni a useCategories-t!")
    }

    return context;
}