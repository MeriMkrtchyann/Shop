import {Link} from "react-router-dom"
import "./Nav.style.css"

export default function Nav(){
    return (
    <nav className="nav">
        <Link to = {"/"}> All </Link>
        <Link to = {"/mens"}> Mens </Link>
        <Link to = {"/womens"}> Womens </Link>
        <Link to = {"/jewelery"}> Jewelery </Link>
        <Link to = {"/electronics"}> Electronics </Link>
    </nav>
    )
}
            