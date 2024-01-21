import { useContext } from "react"
import { AuthContext } from "../authcontext"
import { MainLayout } from "../layouts/mylayouts"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MyHome } from "../pages/home"
import { SignIn } from "../componets/signin-in/signinIn"

export const Main = () => {
    const { isLoggedIn } = useContext(AuthContext)
    console.log(isLoggedIn)
    if (isLoggedIn) {
        return (
            <MainLayout>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MyHome />} />
                    </Routes>
                </BrowserRouter>
            </MainLayout>
        )
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    )
}