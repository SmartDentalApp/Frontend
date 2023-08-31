"use client";

import RouteGuard from "@/components/RouteGuard";
import SidebarLayout from "@/layouts/Sidebar";
import theme from "@/theme";
import { hasFormDataError, hasRequiredFormData } from "@/utils/form";
import {
  CPFRegex,
  RGRegex,
  alphaNumericRegex,
  emailRegex,
  fullNameRegex,
} from "@/utils/regex";
import { delayedValidation } from "@/utils/validation";
import { ThemeProvider } from "@emotion/react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { useState, ChangeEvent, FormEvent } from "react";
import { Dayjs } from "dayjs";
import 'dayjs/locale/pt-br';

export default function Customer() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [fullName, setFullName] = useState("");
  const [isFullNameValid, setIsFullNameValid] = useState(true);
  const [birthDate, setBirthDate] = useState<Dayjs | null>();
  const [RG, setRG] = useState("");
  const [isRGValid, setIsRGValid] = useState(true);
  const [CPF, setCPF] = useState("");
  const [isCPFValid, setIsCPFValid] = useState(true);
  const [address, setAddress] = useState("");
  const [dateTreatmentStart, setDateTreatmentStart] = useState<Dayjs | null>();

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    delayedValidation(setIsEmailValid, emailRegex, newEmail);
  };

  const handleRGChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newRG = event.target.value;
    setRG(newRG);

    delayedValidation(setIsRGValid, RGRegex, newRG);
  };

  const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newAddress = event.target.value;
    setAddress(newAddress);
  };

  const handleFullNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newFullName = event.target.value;
    if (alphaNumericRegex.test(newFullName)) {
      return;
    }
    setFullName(newFullName);

    delayedValidation(setIsFullNameValid, fullNameRegex, newFullName);
  };

  const handleCPFChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newCPF = event.target.value;

    setCPF(newCPF);

    delayedValidation(setIsCPFValid, CPFRegex, newCPF);
  };

  const handleBirthDateChange = (dayJsEvent: Dayjs | null) => {
    setBirthDate(dayJsEvent);
  };

  const handleDateTreatmentStart = (dayJsEvent: Dayjs | null) => {
    setDateTreatmentStart(dayJsEvent);
  };

  const saveCustomer = (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      
      const customerData = {
        email,
        fullName,
        CPF,
        birthDate,
        RG,
        address,
        dateTreatmentStart
      }

      console.log(customerData)
    } catch (error) {
      
    }
  }

  return (
    <RouteGuard>
      <ThemeProvider theme={theme}>
        <SidebarLayout>
          <Box className="flex flex-col items-center mt-8">
            <Typography component="h1" fontSize={20}>
              Cadastro de cliente
            </Typography>
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
                helperText={!isFullNameValid ? "Informe um nome válido" : ""}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="CPF"
                label="CPF"
                type="text"
                id="CPF"
                value={CPF}
                onChange={handleCPFChange}
                error={!isCPFValid}
                helperText={!isCPFValid ? "Informe um CPF válido" : ""}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    label="Data de nascimento"
                    sx={{ width: "100%" }}
                    value={birthDate}
                    onChange={handleBirthDateChange}
                    disableFuture
                    slotProps={{
                      textField: {
                        required: true,
                      },
                    }}
                    views={['day', 'month', 'year']}
                  />
                </DemoContainer>
              </LocalizationProvider>
              <TextField
                margin="normal"
                required
                fullWidth
                name="RG"
                label="RG"
                type="text"
                id="RG"
                value={RG}
                onChange={handleRGChange}
                error={!isRGValid}
                helperText={!isRGValid ? "Informe um RG válido" : ""}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="address"
                label="Endereço"
                type="text"
                id="address"
                value={address}
                onChange={handleAddressChange}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    label="Data de ínicio do tratamento"
                    sx={{ width: "100%" }}
                    value={dateTreatmentStart}
                    onChange={handleDateTreatmentStart}
                    disableFuture
                    slotProps={{
                      textField: {
                        required: true,
                      },
                    }}
                    views={['day', 'month', 'year']}
                  />
                </DemoContainer>
              </LocalizationProvider>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
                disabled={
                  !hasRequiredFormData([email, fullName, CPF, birthDate, RG, address, dateTreatmentStart ]) ||
                  hasFormDataError([
                    isEmailValid,
                    isFullNameValid,
                    isCPFValid,
                    isRGValid,
                  ])
                }
              >
                Salvar
              </Button>
            </Box>
          </Box>
        </SidebarLayout>
      </ThemeProvider>
    </RouteGuard>
  );
}
