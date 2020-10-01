import React from "react";
import { signInFn } from "./firebase/firebase.util"

const App = () => {
    return (
        <form>
            <input type="email" placeholder="Enter your email" />
            <input type="text" placeholder="Enter password" />
            <input onClick={signInFn} value="Sign in with google" />
        </form>
    )
};

export default App;
