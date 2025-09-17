import { Outlet  } from "react-router-dom";
import Headers from "../UI/Headers";
import Footers from "../UI/Footers";
import ScrollTop from "./ScrollTop";
// import NaviLoader from "./NaviLoader";

export const AppLayout = () => {

    // const navgation = useNavigation();
    // if (navgation.state === "loading")
    //     return <NaviLoader />;


    return (
        <>
            <Headers />
            <main>
                {
                    <Outlet />
                }
            </main>
            <Footers />
            <ScrollTop />
        </>
    );



}

export default AppLayout;