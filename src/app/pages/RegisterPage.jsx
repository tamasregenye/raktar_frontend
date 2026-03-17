import { toast } from "sonner";
import { authApi } from "../../features/auth/api/authApi";
import { RegisterForm } from "../../features/auth/components/RegisterForm";
import { useNavigate } from "react-router";

export function RegisterPage() {
    const navigate = useNavigate();

    const handleRegister = async (email, password, name) => {
        try {
            //kérés indítása
            const data = await authApi.register(email, password, name);

            const successMessage = data.valasz ? data.valasz : "Sikeres regisztráció";
            toast.success(successMessage);
            navigate("/login");
        }
        catch (error) {
            const errorMessage = error.response?.data?.valasz;
            if (errorMessage) {
                toast.error(errorMessage);
            }
            else {
                toast.error("Szerver hiba történt!");
            }
        }
    }

    return (
        <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
                <RegisterForm onRegister={handleRegister} />
                <p className="mt-3 text-center">
                    Van már fiókod? 
                    <a href="/login">Bejelentkezés</a>
                </p>
            </div>
        </div>
    )
}