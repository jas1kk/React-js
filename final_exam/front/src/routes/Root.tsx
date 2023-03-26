import {Outlet, Link} from 'react-router-dom'
import '../styles/style.css'

const Root = () => {
    return(
        <div>
            <div>
                <nav className='navhead'>
                    <Link to={'/'}>Главная</Link>
                    <Link to={'/stock'}>Склад</Link>
                    <Link to={'/operations'}>Операции</Link>
                </nav>
            </div>
            <Outlet />
        </div>
    )
}

export default Root