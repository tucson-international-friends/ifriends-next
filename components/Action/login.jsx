import Button from "../Button";

const Login = ({ key, label }) => {
    return <Button
        variant="outline-light"
        key={key}
        disabled
        label={label || "Log in"}
        onClick={() => {
            
        }} />
}

export default Login;
