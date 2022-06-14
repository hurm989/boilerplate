import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SMButton from "../cofig/components/button";
import SMInput from "../cofig/components/input";
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { signUp, sendData } from "../cofig/firebaseMethod";
function SignupScreen() {
    const [userObj, setUserObj] = useState({});
    const navigate = useNavigate();
    let signupUser = () => {
        if (!userObj.email) {
            alert("Email is Required");
            return;
        }
        if (!userObj.password || userObj.password.length < 6) {
            alert(
                "Password is Required and Password Must be greater that 6 characters"
            );
            return;
        }
        signUp(userObj)
            .then((res) => {
                console.log(res);
                alert("User Create")
                sendData(userObj, "Users","abcd")
                navigate('/login')
                // console.log(navigate('/login',res.user.uid))
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            <Grid item xs={12} sm={12} lg={4} md={4} xl={4} sx={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ boxShadow: 10, borderRadius: 1, width: 500, }}>
                    <Box sx={{ padding: 3 }}>
                        <Typography variant="h5">Sign Up</Typography>
                    </Box>
                    <Box sx={{ padding: 3 }}>
                        <SMInput
                            onChange={(e) => setUserObj({ ...userObj, name: e.target.value })}
                            label="Name"
                            required="true"
                        />
                    </Box>
                    <Box sx={{ padding: 3 }}>
                        <SMInput
                            onChange={(e) => setUserObj({ ...userObj, email: e.target.value })}
                            label="Email"
                            required="true"
                        />
                    </Box>
                    <Box sx={{ padding: 3 }}>
                        <SMInput
                            onChange={(e) =>
                                setUserObj({ ...userObj, password: e.target.value })
                            }
                            label="Password"
                            type="password"
                            required="true"
                        />
                    </Box>
                    <Box sx={{ padding: 3 }}>
                        <SMButton onClick={signupUser} label="Sign Up" />
                    </Box>
                </Box>
            </Grid>
        </>
    );
}
export default SignupScreen;