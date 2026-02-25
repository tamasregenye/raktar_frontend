import CategoryList from "../../features/category/components/CategoryList";
import AddCategoryForm from "../../features/category/components/AddCategoryForm";
import { useCategories } from "../../features/category/stores/categoryProvider";

export function CategoryPage() {
    const {categories, isLoading, refreshCategories, addCategory} = useCategories();

    return (
        <div>
            <CategoryList categories={categories}/>
            <AddCategoryForm addCategory={addCategory}/>
        </div>
    );
}