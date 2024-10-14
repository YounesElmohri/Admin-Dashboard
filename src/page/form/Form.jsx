import { Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import React from "react";

const currencies = [
  {
    value: "admin",
    label: "Admin",
  },
  {
    value: "manager",
    label: "Manager",
  },
  {
    value: "user",
    label: "User",
  },
];

export default function Form() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data), handleClick();
  };
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      noValidate
      autoComplete="off"
    >
      <Stack direction="row" spacing={2}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={
            errors.firstName ? "This field is required & min 3 character" : null
          }
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />
        <TextField
          error={Boolean(errors.lastName)}
          helperText={
            errors.lastName ? "This field is required & min 3 character" : null
          }
          {...register("lastName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>

      <TextField
        error={Boolean(errors.email)}
        helperText={errors.email ? "Invalid email address" : null}
        {...register("email", {
          required: true,
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Invalid email address",
          },
        })}
        label="Email"
        variant="filled"
      />

      <TextField
        error={Boolean(errors.phone)}
        helperText={errors.phone ? "Phone number is required" : null}
        {...register("phone", {
          required: true,
          pattern: {
            value: /^\+?[1-9]\d{1,14}$/,
            message: "Invalid phone number format",
          },
        })}
        label="Contact Number"
        variant="filled"
      />

      <TextField label="Adress 1" variant="filled" />
      <TextField label="Adress 2" variant="filled" />
      <TextField
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="user"
        variant="filled"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ display: "flex", justifyContent: "right" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          create new user
        </Button>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity="info"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Account created successfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}
