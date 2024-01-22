import { Navigate } from "react-router-dom";
// import { config } from "../utils/axiosconfig";
export const OpenRoute = ({ children }) => {
   const getTokenFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    return getTokenFromLocalStorage?.token === undefined ? children : (<Navigate to='/' replace={true} />);
}