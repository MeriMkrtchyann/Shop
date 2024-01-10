import {Outlet} from "react-router-dom"
import Header from "./Header/header"
import Nav from "./Nav/Nav"

function Layout({cart , setCart , onLoginOut}){

    return (
        <>
            <header className="header">
                <Header cart={cart} setCart={setCart} onLoginOut = {onLoginOut}/>
            </header>
            <nav className="nav">
                <Nav/>
            </nav>
            <main className="main">
                <Outlet/>
            </main>
            <footer className="footer">
                2024
            </footer>
        </>
        
    )
}

export default Layout