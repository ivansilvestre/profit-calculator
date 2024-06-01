import { Grid, TextField } from "@mui/material";

const Input = (props) => {
  return (
    <Grid item xs={6} sm={12}>
      <TextField
        sx={props.sx}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        required
        label={props.label}
        InputProps={props.InputProps}
        error={props.error}
        helperText={props.helperText}
      />
    </Grid>
  );
};

export default Input;
