import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Header = ({ data }) => {



    return(
        <>
            <header className="container-fluid d-flex justify-content-center align-items-center" style={{backgroundColor: '#F6F7F8'}}>
                <h1 className="fs-4 p-2" style={{color: "#715442"}}> Alimentos disponíveis ({ data.lenght == (0) ? 0 : data.length })</h1>
            </header>
        </>
    )
}

export default Header;