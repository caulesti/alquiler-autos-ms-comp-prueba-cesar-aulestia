import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center fixed top-0 z-30 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li>
                    <NavLink to = '/'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/alquileres'>
                        Alquileres
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/autos'>
                        Autos
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/clientes'>
                        Clientes
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    caulesti@espol.edu.ec
                </li>
            </ul>
        </nav>
    )
}

export default Navbar