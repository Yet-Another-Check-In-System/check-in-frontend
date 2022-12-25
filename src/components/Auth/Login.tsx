import React, { useState } from "react";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import SocialButtons from "./SocialButtons";
import { loginService } from "../../services/authService";
import { validateEmail } from "../../utils/validateEmail";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    if (!validateEmail(email) || password.length < 8) {
      return;
    }

    await loginService({ email, password });

    const siteId = searchParams.get("siteId");

    if (siteId) {
      navigate(`/checkin/${siteId}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col w-3/5">
      <Box className="flex flex-col justify-center items-center p-2">
        <Typography variant="h6" className="p-2">
          Login to your YACIS account
        </Typography>

        <TextField
          label="Email"
          fullWidth
          type="email"
          variant="outlined"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ m: 1 }}
        />
        <TextField
          label="Password"
          fullWidth
          type="password"
          variant="outlined"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ m: 1 }}
        />
        <Button
          aria-label="login"
          size="large"
          variant="outlined"
          sx={{ m: 1 }}
          onClick={handleLogin}
        >
          Login
        </Button>

        <Divider variant="middle" sx={{ width: "100%", m: 1 }} />

        <Typography variant="body1" className="p-1 text-center">
          Don't have an account?{" "}
          <u>
            <a href="/auth/register">Register</a>
          </u>
        </Typography>
      </Box>

      <SocialButtons />
    </div>
  );
};

export default Login;
