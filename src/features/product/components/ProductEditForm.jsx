import { useState } from "react"
import { Product } from "../models/Product";

export default function ProductEditForm({ updateProduct, categories }) {
    const [id, setId] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        //validáció
        
        //üres string ellenőrzése
        if(id.trim() === '' || categoryId.trim() === '' || name.trim() === '' || price.trim() === '' || quantity.trim() === ''){
            return;
        }

        //átalakítás(castolás) ellenőrzése
        if( isNaN(Number(id)) || isNaN(Number(categoryId)) || isNaN(parseFloat(price)) || isNaN(Number(quantity))) {
            return;
        }

        //termék módosítás
        const product = new Product(Number(id), Number(categoryId), name, parseFloat(price), Number(quantity));

        try{
            updateProduct(product);

            //űrlap reset
            setId('');
            setCategoryId('');
            setName('');
            setPrice('');
            setQuantity('');
        }
        catch(error){
            console.log("Sikertelen módosítás", error);
        }
    }

    return (
        <form className="bg-dark shadow rounded p-2" onSubmit={handleSubmit}>
            {/* input elemek létrehozása */}
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="editProductId">Módosítandó termék ID-ja</label>
                <input type="number" className="form-control" id="editProductId" value={id} onChange={(e) => setId(e.target.value)} required />
            </div>

            {/* kategória... */}

            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="editCategory">Új kategória</label>
                <select className="form-control" id="editCategory" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
                    <option disabled={true} value="">Válasszon kategóriát a listából!</option>
                    {
                        categories.map(
                            cat => (
                                <option key={cat.id} value={cat.id}>{cat.nev}</option>
                            )
                        )
                    }
                </select>
            </div>


            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="newName">Új név</label>
                <input type="text" className="form-control" id="newName" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>

            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="newPrice">Új ár</label>
                <input type="number" className="form-control" id="newPrice" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>

            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="newQuantity">Új mennyiség</label>
                <input type="number" className="form-control" id="newQuantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
            </div>

            <button type="submit" className="btn btn-primary w-100">Termék módosítása</button>
        </form>
    )
}