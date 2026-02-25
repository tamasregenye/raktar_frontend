export default function CategoryList({ categories }) {
    return (
        <div>
            <ul className="list-group">
                {categories.map(
                    (cat) => (
                        <li key={cat.id} className="list-group-item">{cat.nev}</li>
                    )
                )}
            </ul>
        </div>
    )
}