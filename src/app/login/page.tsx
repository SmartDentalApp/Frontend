'use client';
import { Box, Button, Checkbox, Container, FormControlLabel, TextField, ThemeProvider, Typography, debounce } from "@mui/material";
import LogoIcon from "@/components/icons/Logo";
import theme from '@/theme'
import Copyright from "@/components/Copyright";
import { ChangeEvent, FormEvent, useState } from "react";
import { emailRegex, passwordRegex } from "@/utils/regex";
import { delayedValidation } from "@/utils/validation";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value
    setEmail(newEmail)

    delayedValidation(setIsEmailValid, emailRegex, newEmail)
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value
    setPassword(newPassword)

    delayedValidation(setIsPasswordValid, passwordRegex, newPassword)
  }

  const handleRememberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newRemember = event.target.checked
    setRemember(newRemember);
  };

  const loginSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(remember)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box className="flex flex-col items-center mt-8">
          <LogoIcon size="100px" />
          <Typography component="h1" fontSize={20}>
            Entre
          </Typography>
          <Box className="mt-1" component="form" noValidate onSubmit={loginSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              onChange={handleEmailChange}
              value={email}
              error={!isEmailValid}
              helperText={!isEmailValid ? 'Informe um e-mail válido' : ''}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
              error={!isPasswordValid}
              helperText={!isPasswordValid ? 'Informe uma senha válida (mínimo 4 caracteres sendo um deles especial)' : ''}
            />
            <FormControlLabel
              control={<Checkbox checked={remember} onChange={handleRememberChange} color="primary" />}
              label="Lembrar usuário"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
            >
              Login
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}