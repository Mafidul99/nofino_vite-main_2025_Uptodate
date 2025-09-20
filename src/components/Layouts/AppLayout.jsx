import { Outlet, useNavigation } from "react-router-dom";
import Headers from "../UI/Headers";
import Footers from "../UI/Footers";
import ScrollTop from "./ScrollTop";
import Loader from "./Loader";

export const AppLayout = () => {

    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    
    return (
        <>
            {isLoading && <Loader />}
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