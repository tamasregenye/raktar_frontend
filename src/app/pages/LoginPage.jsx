import { useNavigate } from "react-router";
import { LoginForm } from "../../features/auth/components/LoginForm";
import { authApi } from "../../features/auth/api/authApi";
import { toast } from "sonner";
import { useAuth } from "../../features/auth/stores/authProvider";

export function LoginPage() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const handleLogin = async (email, password) => {

        try {
            //1. kérés indítása
            const data = await authApi.login(email, password);

            login(data.token);
            
            const successMessage = data.valasz ? data.valasz : "Sikeres bejelentkezés";
            toast.success(successMessage);
            navigate("/");
        }
        catch (error) {
            const errorMessage = error.response?.data?.valasz;
            if(errorMessage){
                toast.error(errorMessage);
            }
            else{
                toast.error("Szerver hiba történt!");
            }
        }
    }

    return (
        <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
                <LoginForm onLogin={handleLogin} />
                <p className="mt-3 text-center">
                    Nincs még fiókod? 
                    <a href="/regisztracio">Regisztráció</a>
                </p>
            </div>
        </div>
    )
}