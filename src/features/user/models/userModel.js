export class User {
    constructor(id, email, nev, szerepkor, lejarToken){
        this.id = id,
        this.email = email,
        this.nev = nev,
        this.szerepkor = szerepkor
        this.lejarToken = lejarToken
    }

    isExpired(){
        if(!this.lejarToken) return true;

        return (Date.now() >= this.lejarToken * 1000);
    }

    isAdmin(){
        return this.szerepkor === 'admin';
    }

    static fromToken(decodedToken){
        if(!decodedToken) return null;

        return new User(
            decodedToken.id,
            decodedToken.email,
            decodedToken.nev,
            decodedToken.szerepkor,
            decodedToken.exp
        );
    }
}