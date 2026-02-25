import { RouterProvider } from "react-router"
import { router } from "./router";
import { CategoryProvider } from "../features/category/stores/categoryProvider";
import { ProductProvider } from "../features/product/stores/productProvider";

export function AppProvider() {
    return (
        <ProductProvider>
            <CategoryProvider>
                <RouterProvider router={router} />
            </CategoryProvider>
        </ProductProvider>
    );
};