import { Link, NavLink } from "react-router";

export default function NavigationBar() {
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
                                    <li><NavLink className="dropdown-item" to="/kategoriak/letrehozas">létrehozás</NavLink></li>
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
                    </div>
                </div>
            </nav>
        </div>
    )
}