import LoginForm from "../ui/loginForm"

export default function Login() {


    return (
        <div className="flex flex-col-reverse md:flex-row h-screen py-5">
            <div className="flex-2 text-[3rem] md:content-center text-center">Illustration</div>
            <LoginForm className="flex-3 flex md:items-center justify-center" />
        </div>
    )
}