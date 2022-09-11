import { Typography } from '@mui/material';
import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {
    const navigate = useNavigate();

    const { displayName, startLogout } = useContext(AuthContext);

    const isActive = ({ isActive }) =>
        `nav-item nav-link ${isActive ? 'active' : ''}`;

    const onLogout = async() => {
        await startLogout();

        navigate('/login', {
            replace: true,
        });
    };

    return (
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2 sticky-top'>
            <Link className='navbar-brand logo' to='/'>
                HeroesApp
            </Link>

            <div className='navbar-collapse'>
                <div className='navbar-nav ms-5 '>
                    <NavLink className={isActive} to='/search'>
                        SearchHero
                    </NavLink>

                    <NavLink className={isActive} to='/select'>
                        SelectPublisher
                    </NavLink>
                </div>
            </div>

            <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
                <ul className='navbar-nav ml-auto'>
                    <span className='nav-item nav-link text-light'>
                    <Typography>{displayName}</Typography>
                    </span>
                    <button
                        className='btn nav-item nav-link'
                        onClick={onLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    );
};
