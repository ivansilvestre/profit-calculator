import { Box, Button, Grid, InputAdornment, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { dark, light } from "../theme";
import Navbar from "./components/Navbar";
import { calculateInterestRate } from "./utils/calculations";
import {
  daysNumberValidation,
  numberValidation,
} from "./utils/inputValidations";

const App = () => {
  const [t] = useTranslation();
  const [darkMode, setDarkMode] = useState(true);
  const [initialValue, setInitialValue] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [days, setDays] = useState("");
  const [taxRate, setTaxRate] = useState("");
  const [hasError, setHasError] = useState(false);
  const theme = darkMode ? dark : light;
  // netProfits, lucros líquidos
  // grossProfits, lucros brutos
  // percentagem num certo tempo (4% em 6, 12 meses, etc.)

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log({ initialValue, days, taxRate, interestRate });
    //console.log(calculateInterestRate(initialValue, days, interestRate));
    //calculateInterestRate(initialValue, days, interestRate);
    setInitialValue("");
    setDays("");
    setTaxRate("");
    setInterestRate("");
  };

  const handleThemeMode = () => {
    setDarkMode(!darkMode);
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
            <Grid item xs={12} sm={12}>
              <TextField
                name="initial-value"
                onChange={(event) => setInitialValue(event.target.value)}
                value={initialValue}
                required
                label={t("INITIAL_INVESTMENT")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">€</InputAdornment>
                  ),
                }}
                error={numberValidation(initialValue)}
                helperText={
                  numberValidation(initialValue) ? t("VALID_INITIAL_VALUE") : ""
                }
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                name="interest-rate"
                onChange={(event) => setInterestRate(event.target.value)}
                value={interestRate}
                required
                label={t("INTEREST_RATE")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
                error={numberValidation(interestRate)}
                helperText={
                  numberValidation(interestRate) ? t("VALID_INITIAL_VALUE") : ""
                }
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                name="days"
                onChange={(event) => setDays(event.target.value)}
                value={days}
                required
                label={t("DAYS")}
                error={daysNumberValidation(days)}
                helperText={daysNumberValidation(days) ? t("VALID_TIME") : ""}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                name="tax-rate"
                onChange={(event) => setTaxRate(event.target.value)}
                value={taxRate}
                label={t("TAX_RATE")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
                error={numberValidation(taxRate)}
                helperText={
                  numberValidation(taxRate) ? t("VALID_INITIAL_VALUE") : ""
                }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={
              daysNumberValidation(days) ||
              numberValidation(initialValue) ||
              numberValidation(taxRate) ||
              numberValidation(interestRate)
            }
          >
            {t("CALCULATE")}
          </Button>
        </Box>
      </>
    </ThemeProvider>
  );
};

export default App;
