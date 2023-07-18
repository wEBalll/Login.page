import { useLocation, Navigate, Outlet } from "react-router-dom";
import { usePersistentStore } from "../store";

const RequireStore = ({children}) => {
    const location = useLocation();
    const {user} = usePersistentStore();

    if (user) {
         return <Navigate to='/about' state={{from: location }} />
    }
    return (
        <>
        {children}
        </>)
};

export {RequireStore};