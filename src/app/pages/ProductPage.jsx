import { useState, useEffect } from "react";
import { categoryApi } from "../../features/category/api/categoryApi";
import { productApi } from "../../features/product/api/productApi";
import { Product } from "../../features/product/models/Product";
import ProductTable from "../../features/product/components/ProductTable";
import ProductEditForm from "../../features/product/components/ProductEditForm";
import DeleteProductForm from "../../features/product/components/DeleteProductForm";
import { useProducts } from "../../features/product/stores/productProvider";
import { useCategories } from "../../features/category/stores/categoryProvider";

export function ProductPage() {

    const { products, isLoading: isLoadingProducts, refreshProducts, updateProduct, deleteProduct } = useProducts();
    const { categories, isLoading: isLoadingCategories, refreshCategories, addCategory} = useCategories();

    return (
        <div>
            <ProductTable categories={categories} products={products}/>
            <ProductEditForm categories={categories} updateProduct={updateProduct}/>
            <DeleteProductForm deleteProduct={deleteProduct}/>
        </div>
    );
}