import { RouterProvider } from "react-router"
import { router } from "./router";
import { CategoryProvider } from "../features/category/stores/categoryProvider";
import { ProductProvider } from "../features/product/stores/productProvider";
import { Toaster } from "sonner";
import { AuthProvider } from "../features/auth/stores/authProvider";

export function AppProvider() {
    return (
        <AuthProvider>
            <ProductProvider>
                <CategoryProvider>
                    <Toaster richColors position="bottom-right" />
                    <RouterProvider router={router} />
                </CategoryProvider>
            </ProductProvider>
        </AuthProvider>
    );
};