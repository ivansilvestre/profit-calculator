import { Box, Button, Grid, InputAdornment } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { dark, light } from "../theme";
import Modal from "./components/Dialog";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import { calculateInterestRate } from "./utils/calculations";
import {
  monthsNumberValidation,
  numberValidation,
} from "./utils/inputValidations";

const App = () => {
  const [t] = useTranslation();
  const [darkMode, setDarkMode] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [initialValue, setInitialValue] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [months, setMonths] = useState("");
  const [taxRate, setTaxRate] = useState("");
  const theme = darkMode ? dark : light;

  const handleThemeMode = () => {
    setDarkMode(!darkMode);
  };

  const clearForm = () => {
    setInitialValue("");
    setMonths("");
    setTaxRate("");
    setInterestRate("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    calculateInterestRate(initialValue, months, interestRate);
    clearForm();
    setOpenDialog(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <Navbar
          darkMode={darkMode}
          handleTheme={handleThemeMode}
          projectLabel={t("INTEREST_CALCULATOR")}
        />
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container>
            <Input
              sx={{ mt: "1rem" }}
              name="initial-value"
              onChange={(event) => setInitialValue(event.target.value)}
              value={initialValue}
              label={t("INITIAL_INVESTMENT")}
              InputProps={{
                endAdornment: <InputAdornment position="end">€</InputAdornment>,
              }}
              error={numberValidation(initialValue)}
              helperText={
                numberValidation(initialValue) ? t("VALID_INITIAL_VALUE") : ""
              }
            />
            <Input
              sx={{ mt: "1rem" }}
              name="interest-rate"
              onChange={(event) => setInterestRate(event.target.value)}
              value={interestRate}
              label={t("INTEREST_RATE")}
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              error={numberValidation(interestRate)}
              helperText={
                numberValidation(interestRate) ? t("VALID_INITIAL_VALUE") : ""
              }
            />
            <Input
              sx={{ mt: "1rem", with: "100%" }}
              name="months"
              onChange={(event) => setMonths(event.target.value)}
              value={months}
              label={t("MONTHS")}
              error={monthsNumberValidation(months)}
              helperText={monthsNumberValidation(months) ? t("VALID_TIME") : ""}
            />
            <Input
              sx={{ mt: "1rem" }}
              name="tax-rate"
              onChange={(event) => setTaxRate(event.target.value)}
              value={taxRate}
              label={t("TAX_RATE")}
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              error={numberValidation(taxRate)}
              helperText={
                numberValidation(taxRate) ? t("VALID_INITIAL_VALUE") : ""
              }
            />
          </Grid>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={
              monthsNumberValidation(months) ||
              numberValidation(initialValue) ||
              numberValidation(taxRate) ||
              numberValidation(interestRate)
            }
          >
            {t("CALCULATE")}
          </Button>
        </Box>
        <Modal openDialog={openDialog} onClick={() => setOpenDialog(false)} />
      </>
    </ThemeProvider>
  );
};

export default App;
