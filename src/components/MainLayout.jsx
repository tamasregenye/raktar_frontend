import { Outlet } from "react-router";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

export function MainLayout(){
    return(
        <div>
            <NavigationBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
}