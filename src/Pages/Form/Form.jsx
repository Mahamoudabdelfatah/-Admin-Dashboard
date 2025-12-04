import { Alert, Box, Button, MenuItem, Stack, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import Snackbar from '@mui/material/Snackbar';
import { useState } from "react";
import Header from '../../Components/Header/Header';






const data = [
  {
    value: 'Admin',
    label: 'Admin',
  },
  {
    value: 'Manager',
    label: 'Manager',
  },
  {
    value: 'User',
    label: 'User',
  },

];
const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const regMobile = /^01[0125]\d{8}$/


const Form = () => {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, watch, formState: { errors }, } = useForm()


  const onSubmit = () => {
    console.log("Done");
    setOpen(true);
  };




  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      noValidate
      autoComplete="off"
    >
      <Header title={"CREATE USER"} subTitle={"Create a New User Profile"} />


      <Stack sx={{ gap: 2 }} direction={"row"} >
        <TextField
          error={errors.firstName}
          helperText={errors.firstName ? "First Name Is Required & min 3 char" : null}
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled" />
        <TextField
          error={errors.lastName}
          helperText={errors.lastName ? "Last Name Is Required & min 3 char" : null}
          {...register("lastName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }} label="Last Name" variant="filled" />
      </Stack>
      <TextField
        error={errors.email}
        helperText={errors.email ? "Email Is Required " : null}
        {...register("email", { required: true, pattern: regEmail })}
        label="Email" variant="filled" />
      <TextField
        error={errors.mobile}
        helperText={errors.mobile ? "Mobile Is Required " : null}
        {...register("mobile", { required: true, pattern: regMobile })}
        label="Contact Number" variant="filled" />
      <TextField label="Address 1" variant="filled" />
      <TextField label="Address 2" variant="filled" />

      <TextField
        variant="filled"
        id="outlined-select-Role"
        select
        label="Role"
        defaultValue="User"
        helperText="Please select your Role"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: "right" }} >
        <Button type="submit" sx={{ textTransform: "capitalize" }} variant="contained" >
          Create New User
        </Button>
      </Box>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "right" }} >
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          User Created Successfully!
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Form
