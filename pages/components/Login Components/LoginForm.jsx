import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useFormik } from "formik";
import db from "../../../firebase";

function LoginForm() {
  const colors = [
    "#17b978",
    "#feb062",
    "#c5e3f6",
    "#46c3db",
    "#f3558e",
    "#faee1c",
    "#22d1ee",
    "#f3cf7a",
    "#cabbe9",
    "#ffb174",
  ];
  const sendUsers = async (values) => {
    await db.collection("Users").add({
      name: values.name,
      email: values.email,
      password: values.password,
      color: colors[Math.floor(Math.random() * colors.length)],
    });
    localStorage.setItem("user", JSON.stringify(values));
    window.location.replace("ayoubsdiscord.vercel.app");
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => sendUsers(values),

    validate: (values) => {
      let errors = {};

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid Email Format";
      }
      if (!values.password) {
        errors.password = "Required";
      }
      return errors;
      if (!values.name) {
        errors.name = "Required";
      }
    },
  });

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <FormControl id='name'>
          <FormLabel color='gray' fontWeight='bold'>
            Username
          </FormLabel>
          <Input
            type='text'
            name='name'
            borderColor='gray.800'
            color='white'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <Box color='red' fontSize='12px'>
              {formik.errors.name}
            </Box>
          ) : null}
        </FormControl>
        <FormControl id='email'>
          <FormLabel color='gray' fontWeight='bold'>
            Email
          </FormLabel>
          <Input
            type='email'
            name='email'
            borderColor='gray.800'
            color='white'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <Box color='red' fontSize='12px'>
              {formik.errors.email}
            </Box>
          ) : null}
        </FormControl>
        <FormControl id='password' marginTop='20px'>
          <FormLabel color='gray' fontWeight='bold'>
            Password
          </FormLabel>
          <Input
            type='password'
            name='password'
            borderColor='gray.800'
            color='white'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <Box fontSize='12px' color='red'>
              {formik.errors.password}
            </Box>
          ) : null}
        </FormControl>
        <Button type='submit' colorScheme='blue' marginTop='30px' w='430px'>
          Login
        </Button>
      </form>
    </Box>
  );
}

export default LoginForm;
