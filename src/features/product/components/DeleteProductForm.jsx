import { useState } from "react"

export default function DeleteProductForm({ deleteProduct }) {
    //állapotok definiálása
    const [productId, setProductId] = useState('');

    const changeInputValue = (e) => {
        setProductId(e.target.value);
    }

    const handleDeleteProduct = (e) => {
        e.preventDefault();

        if( productId.trim() === '' ){
            return;
        }
        
        if(isNaN( Number(productId) )){
            return;
        }

        //űrlap visszaállítása csak akkor, ha valóban sikeres a törlés
        try{
            deleteProduct(Number(productId));
            setProductId('');
        }
        catch{
            console.log("Törlés sikertelen")
        }
        
    }

    return (
        <form className="my-3 bg-light border input-group" onSubmit={handleDeleteProduct}>
            <span className="input-group-text">Törlendő termék ID: </span>
            <input onChange={changeInputValue} className="form-control" type="number" value={productId} required min={1} />
            <button type="submit" className="btn btn-danger">Törlés</button>
        </form>
    )
}