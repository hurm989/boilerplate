import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import SignupScreen from "../screen/signUpScreen";
import LogInScreen from "../screen/loginScreen";
import Error from "../screen/error";
export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LogInScreen />} />
                <Route path="/" element={<SignupScreen />} />
                <Route path="/error" element={<Error />} />
                <Route />
            </Routes>
        </Router>
    );
}

