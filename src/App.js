import React from "react";
import { signInFn } from "./firebase/firebase.util";
import {InputLabel, Grid, Input, FormControl , Button} from "@material-ui/core";

const App = () => {
    return (
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <div
                    style={{marginTop: "100px", padding: "50px", borderRadius: "2px", background: "#f50057"}} 
                >
                    <Grid xs={12}>
                        <FormControl style={{margin: "20px"}}>
                            <InputLabel htmlFor="username"  style={{color: "#fff4f4", fontSize: "400"}}>
                                Enter Username
                            </InputLabel>
                            <Input id="username" type="text"/>
                        </FormControl >
                    </Grid>
                    <Grid xs={12}>
                        <FormControl style={{margin: "20px"}}>
                            <InputLabel htmlFor="password"  style={{color: "#fff4f4", fontSize: "400"}}>
                                Enter Password
                            </InputLabel>
                            <Input id="password" type="text"/>
                        </FormControl >
                    </Grid>
                <Button style={{margin: "20px", color: "#fff4f4"}} variant="contained" color="primary" onClick={signInFn}>Sign in with google</Button>
                </div>
            </Grid>
        // <form>
        //     <input type="email" placeholder="Enter your email" />
        //     <input type="text" placeholder="Enter password" />
        //     <input onClick={signInFn} value="Sign in with google" />
        // </form>
    )
};

export default App;
