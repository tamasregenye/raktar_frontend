import { useState } from "react"

export default function AddCategoryForm({ addCategory }) {

    const [categoryName, setCategoryName] = useState('');

    const changeInputValue = (e) => {
        setCategoryName(e.target.value);
    }

    const handleAddCategory = (e) => {
        e.preventDefault();

        //validáció
        if(categoryName.trim() === ""){
            return;
        }
        else if( categoryName.trim().length < 3){
            return;
        }

        addCategory(categoryName);
        //miután hozzáadtuk az új kategóriát, resetelem a categoryName értékét
        setCategoryName('');
    }

    return (
        <form className="my-3 bg-light border input-group" onSubmit={handleAddCategory}>
            <span className="input-group-text">Új kategória neve: </span>
            <input onChange={changeInputValue} className="form-control" type="text" value={categoryName} required minLength={3}/>
            <button type="submit" className="btn btn-success">Hozzáad</button>
        </form>
    )
}