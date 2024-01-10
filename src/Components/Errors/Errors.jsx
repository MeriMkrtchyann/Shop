export default function Errors({isValidEmailResult, isValidUserNameResult , isValidPasswordResult}){
    
    if (!isValidEmailResult){
        return "sxal name"
    }

    if (!isValidUserNameResult){
        return "sxal email"
    }

    if (!isValidPasswordResult){
        return "sxal password"
    }
 
}