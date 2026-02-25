import { useNavigate } from "react-router";
import { LoginForm } from "../../features/auth/components/LoginForm";

export function LoginPage(){

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/");
    }

    return(
        <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
                <LoginForm onLogin={handleLogin}/>
            </div>
        </div>
    )
}