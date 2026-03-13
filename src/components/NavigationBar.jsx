import { Link, NavLink, useNavigate } from "react-router";
import { useAuth } from "../features/auth/stores/authProvider";
import { toast } from "sonner";

export default function NavigationBar() {
    const { role, logout } = useAuth();
    const navigate = useNavigate();

    //TODO kilépés
    const handleLogout = () => {
        logout();
        navigate("/login");
        toast.info("Sikeres kijelentkezés");
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand">Raktár rendszer</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Főoldal</NavLink>
                            </li>

                            {/* Kategóriák */}
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="/kategoriak" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Kategóriák
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/kategoriak">lista</NavLink></li>

                                    {/* kategória létrehozás menüpont elérése csak admin jogosultsággal */}

                                    {role === 'admin' && (
                                        <li><NavLink className="dropdown-item" to="/kategoriak/letrehozas">létrehozás</NavLink></li>
                                    )}

                                </ul>
                            </li>
                            {/* Kategóriák vége*/}

                            {/* termékek */}
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="/termekek" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Termékek
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/termekek">lista</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/termekek/modositas">módosítás</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/termekek/torles">törlés</NavLink></li>
                                </ul>
                            </li>
                            {/* termékek vége */}

                        </ul>

                        {role && (
                            <button type="button" className="btn btn-outline-danger btn-sm" onClick={handleLogout}>
                                Kijelentkezés
                            </button>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    )
}