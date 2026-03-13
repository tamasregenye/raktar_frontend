import { api } from "../../../lib/api"

export const authApi = {
    login: async (userEmail, userPassword) => {
        const response = await api.post("/felhasznalok/bejelentkezes", {
            email: userEmail,
            jelszo: userPassword
        });

        return response.data;
    },

    register: async (userEmail, userPassword, userFullName) => {
        const response = await api.post("felhasznalok/regisztracio", {
            email: userEmail,
            jelszo: userPassword,
            nev: userFullName
        });

        return response.data;
    }
}