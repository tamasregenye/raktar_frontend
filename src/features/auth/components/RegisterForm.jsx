import { useState } from "react";

export function RegisterForm ({onRegister}){
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userPasswordConfirm, setUserPasswordConfirm] = useState('');
    const [userFullName, setUserFullName] = useState('');

    const handleRegister = (e) => {
        //oldal újratöltés megakadályozása (submit gomb alapértelmezetten ezt eredményezné)
        e.preventDefault();

        //validáció
        if(userEmail.trim() === "" || userPassword.trim() === "" || userFullName.trim() === ""){
            return;
        }

        //jelszavak egyezésének ellenőrzése
        if(userPassword !== userPasswordConfirm){
            return;
        }

        onRegister(userEmail, userPassword, userFullName);
    }

    return(
        <form className="bg-light shadow" onSubmit={handleRegister}>
            <h3 className="text-center mb-3">Regisztráció</h3>

            {/* email */}
            <div className="p-3 form-group">
                <label className="form-label" htmlFor="email">Email cím:</label>
                <input className="form-control" type="email" required id="email" value={userEmail} onChange={ (e) => { setUserEmail(e.target.value) }}/>
            </div>

            {/* név */}
            <div className="p-3 form-group">
                <label className="form-label" htmlFor="fullName">Név</label>
                <input className="form-control" type="text" required id="fullName" value={userFullName} onChange={ (e) => { setUserFullName(e.target.value) }}/>
            </div>

            {/* jelszó */}
            <div className="p-3 form-group">
                <label className="form-label" htmlFor="password">Jelszó:</label>
                <input className="form-control" type="password" required id="password" value={userPassword} onChange={ (e) => { setUserPassword(e.target.value) }}/>
            </div>

            {/* jelszó megerősítés */}
            <div className="p-3 form-group">
                <label className="form-label" htmlFor="passwordConfirm">Jelszó újra:</label>
                <input className="form-control" type="password" required id="passwordConfirm" value={userPasswordConfirm} onChange={ (e) => { setUserPasswordConfirm(e.target.value) }}/>
            </div>

            {/* regisztrálok gomb */}
            <div className="p-3">
                <button type="submit" className="btn btn-success w-100">Regisztráció</button>
            </div>
            
        </form>
    )
}