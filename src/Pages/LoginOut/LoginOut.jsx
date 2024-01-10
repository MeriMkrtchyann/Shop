import { useNavigate } from "react-router-dom";

export default function LoginOut (){

    const navigation = useNavigate();

    const handleLogout = () => {
        navigation("/login")
    }

    handleLogout()
     return null;
}