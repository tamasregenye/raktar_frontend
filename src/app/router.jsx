import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { CategoryPage } from "./pages/CategoryPage";
import { MainLayout } from "../components/MainLayout";
import { NotFoundPath } from "../components/NotFoundPath";
import { CategoryAddPage } from "./pages/CategoryAddPage";
import { ProductEditPage } from "./pages/ProductEditPage";
import { ProductDeletePage } from "./pages/ProductDeletePage";
import { LoginPage } from "./pages/LoginPage";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { RegisterPage } from "./pages/RegisterPage";

export const router = createBrowserRouter(
    [
        {
            path: "login",
            element: <LoginPage />
        },
        {
            path: "regisztracio",
            element: <RegisterPage/>
        },
        {
            element: <ProtectedRoute />,
            children: [
                {
                    path: "/",
                    element: <MainLayout />,
                    errorElement: <NotFoundPath />,
                    children: [
                        {
                            index: true,
                            element: <HomePage />
                        },
                        {
                            path: "termekek",
                            children: [
                                {
                                    index: true,
                                    element: <ProductPage />
                                },
                                {
                                    path: "modositas",
                                    element: <ProductEditPage />
                                },
                                {
                                    path: "torles",
                                    element: <ProductDeletePage />
                                }
                            ]
                        },
                        {
                            path: "kategoriak",
                            children: [
                                {
                                    index: true,
                                    element: <CategoryPage />,
                                },
                                {
                                    path: "letrehozas",
                                    element: <CategoryAddPage />
                                }
                            ]
                        },
                    ]
                }
            ]
        }

    ]
)