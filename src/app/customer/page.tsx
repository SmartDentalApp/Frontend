"use client";

import RouteGuard from "@/components/RouteGuard";
import SidebarLayout from "@/layouts/Sidebar";
import theme from "@/theme";
import { hasFormDataError, hasRequiredFormData } from "@/utils/form";
import { emailRegex, fullNameRegex } from "@/utils/regex";
import { delayedValidation } from "@/utils/validation";
import { ThemeProvider } from "@emotion/react";
import { Box, Button, TextField } from "@mui/material";
import { useState, ChangeEvent } from "react";

export default function Customer() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [fullName, setFullName] = useState('');
  const [isFullNameValid, setIsFullNameValid] = useState(true);

  const saveCustomer = () => {
    
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value
    setEmail(newEmail)

    delayedValidation(setIsEmailValid, emailRegex, newEmail)
  }

  const handleFullNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newFullName = event.target.value
    setFullName(newFullName)

    delayedValidation(setIsFullNameValid, fullNameRegex, newFullName)
  }

  return (
    <RouteGuard>
      <ThemeProvider theme={theme}>
        <SidebarLayout>
          <Box
            className="mt-1"
            component="form"
            noValidate
            onSubmit={saveCustomer}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              onChange={handleEmailChange}
              value={email}
              error={!isEmailValid}
              helperText={!isEmailValid ? "Informe um e-mail válido" : ""}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="fullName"
              label="Nome completo"
              type="text"
              id="fullName"
              value={fullName}
              onChange={handleFullNameChange}
              error={!isFullNameValid}
              helperText={
                !isFullNameValid
                  ? "Informe um nome válido"
                  : ""
              }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
              disabled={!hasRequiredFormData([email, fullName]) || hasFormDataError([isEmailValid, isFullNameValid])}
            >
              Login
            </Button>
          </Box>
        </SidebarLayout>
      </ThemeProvider>
    </RouteGuard>
  );
}
