import { Outlet } from 'react-router-dom';
import NavProducts from '../../../components/NavProducts';

export default function ProductPg() {
    return (
        <>
            <NavProducts/>
            <Outlet/>
        </>
    );
}