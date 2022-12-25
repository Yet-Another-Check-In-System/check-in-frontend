import React, { useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { countries } from "../../utils/countries";

const Register = () => {
  const [givenName, setGivenName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div className="flex flex-col w-3/5">
      <Box className="flex flex-col justify-center items-center p-2">
        <Typography variant="h6" className="p-2">
          Register a new YACIS account
        </Typography>

        <TextField
          label="Email"
          aria-label="Email"
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
          aria-label="Password"
          fullWidth
          type="password"
          variant="outlined"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ m: 1 }}
        />
        <TextField
          label="Repeat password"
          aria-label="Repeat password"
          fullWidth
          type="password"
          variant="outlined"
          required
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          sx={{ m: 1 }}
        />

        <Divider variant="middle" sx={{ width: "100%", m: 1 }} />

        <TextField
          label="Given name"
          fullWidth
          type="text"
          variant="outlined"
          required
          value={givenName}
          onChange={(e) => setGivenName(e.target.value)}
          sx={{ m: 1 }}
        />
        <TextField
          label="Family name"
          fullWidth
          type="text"
          variant="outlined"
          required
          value={familyName}
          onChange={(e) => setFamilyName(e.target.value)}
          sx={{ m: 1 }}
        />
        <TextField
          label="Company"
          fullWidth
          type="text"
          variant="outlined"
          required
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          sx={{ m: 1 }}
        />
        <Autocomplete
          fullWidth
          sx={{ m: 1 }}
          options={countries}
          autoHighlight
          getOptionLabel={(option) => option.label}
          onChange={(_, value) => setCountry(value?.code || "")}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{
                "& > img": { mr: 2, flexShrink: 0 },
                backgroundColor: "#F6FFF8",
              }}
              {...props}
            >
              <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                alt=""
              />
              {option.label} ({option.code})
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Country"
              required
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
            />
          )}
        />

        <Button
          aria-label="register"
          size="large"
          variant="outlined"
          sx={{ m: 1 }}
        >
          Register
        </Button>

        <Divider variant="middle" sx={{ width: "100%", m: 1 }} />

        <Typography variant="body1" className="p-1">
          Already have an account?{" "}
          <u>
            <a href="/auth/login">Login</a>
          </u>
        </Typography>
      </Box>
    </div>
  );
};

export default Register;
