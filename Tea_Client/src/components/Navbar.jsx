import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import { Path } from '../Commen/Path'

const Navbar = ({setAuth}) => {
    const navigate = useNavigate()

    const logout = () => {
        setAuth(null)
        localStorage.removeItem("token")
        navigate(Path.login)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={{ background: "#e4e4e4" }}>
            <div className="container">
                <div >
                    <NavLink to={Path.homescreen}>
                        <img src="/assets/WhatsApp_Image_2024-07-30_at_11.55.04_AM__1_-removebg-preview.png" alt="" width={100} />
                    </NavLink>
                </div>
                <div>
                    <NavLink to={Path.homescreen} className="nav-link">
                        <p style={{ position: "relative", top: "0.4em", fontWeight: "bold" }} className='fs-5' >Mevada Kalgi Tea</p>
                    </NavLink>
                </div>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center" style={{ fontWeight: "bold" }}>
                        <li className="nav-item" >
                            <NavLink className="nav-link" to={Path.homescreen}>Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={Path.product}>Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={Path.about}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={Path.contact}>Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        <NavLink to={Path.Orderdetails} className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Your Order </NavLink>
                        <NavLink to={Path.login} className="btn btn-outline-dark m-2" onClick={logout}><LogoutIcon /> Log Out </NavLink>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar