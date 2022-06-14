import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SMButton from "../cofig/components/button";
import SMInput from "../cofig/components/input";
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { logIn } from "../cofig/firebaseMethod";

function LogInScreen() {
    const [userObj, setUserObj] = useState({});
    const navigate = useNavigate();
    // const param=useParams()
    let loginUser = () => {
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
        // console.log(res.uid.id)
        logIn(userObj)
            .then((res) => {
                console.log(res);
                alert("User logged In")
                navigate('/error')
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
                        <Typography variant="h5">Log In</Typography>
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
                        <SMButton onClick={loginUser} label="Log In" />
                    </Box>
                </Box>
            </Grid>
        </>
    );
}
export default LogInScreen;