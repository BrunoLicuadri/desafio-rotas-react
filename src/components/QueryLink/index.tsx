import { NavLink } from "react-router-dom";

export default function QueryLink({to, ...props}: any){
    return(
        <NavLink to={"/products" + to} {...props} />
    );
}