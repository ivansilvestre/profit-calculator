import { Box, Button, Grid, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

const App = () => {
  const [initialValue, setInitialValue] = useState(null);
  const [time, setTime] = useState(null);
  const [hasError, setHasError] = useState(false);
  // const [taxRate, setTaxRate] = useState(null);
  // const [netProfits, setNetProfits] = useState(null); // lucros líquidos
  // const [grossProfits, setGrossProfits] = useState(null); // lucros brutos
  // // percentagem num certo tempo (4% em 6, 12 meses, etc.)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ initialValue, time });
  };

  return (
    <>
      <Box>Calculadora de juros</Box>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="initial-value"
              onChange={(event) => setInitialValue(event.target.value)}
              required
              label="Investimento Inicial"
              autoFocus
              InputProps={{
                endAdornment: <InputAdornment position="end">€</InputAdornment>,
              }}
              error={!/^\d*\.?\d*$/.test(initialValue)}
              helperText={
                !/^\d*\.?\d*$/.test(initialValue)
                  ? "Insira um valor válido"
                  : ""
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="time"
              onChange={(event) => setTime(event.target.value)}
              required
              label="Dias"
              error={!/^\d*$/.test(time)}
              helperText={
                !/^\d*$/.test(time) ? "Insira apenas números inteiros" : ""
              }
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={hasError}
        >
          Calcular
        </Button>
      </Box>
    </>
  );
};

export default App;
