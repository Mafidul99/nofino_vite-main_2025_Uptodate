import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {

    const error = useRouteError();

    return (

        <div className="text-center content-box justify-content-center">            
            <div className="inner-box p_relative">
                <div className="items-center icon-box justify-items-center">
                    <img className="w-[30%]" src="assets/images/error/404-error.avif" alt="" />
                </div>
                <h1 className="text-[30px] font-bold capitalize ">Oops! An error occurred.</h1>
                <p className="text-[30px] text-red-600 font-semibold">
                     {error && <p>{error.data}</p>}
                </p>
                <p className="mb-4 text-[20px] text-blue-600">Try refining your search or use the navigation below to <br />return to the main home page.</p>
                <NavLink to="/" className="p-3 my-4 font-semibold text-white bg-red-500 rounded-lg hover:bg-green-800 "><span>
                    Back to Home</span>
                </NavLink>
            </div>
        </div>

    )
}

export default ErrorPage;

