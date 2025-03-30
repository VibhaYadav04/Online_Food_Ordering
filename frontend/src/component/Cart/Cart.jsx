import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Modal,
  TextField,
} from "@mui/material";
import React from "react";
import { CartItem } from "./CartItem";
import { AddressCard } from "./AddressCard";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import {createOrder} from "../State/Order/Action"
import { useNavigate } from "react-router-dom";

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "grey.900",
  outline: "none",
  boxShadow: 24,
  p: 4,
};


const initialValue = {
  streetAddress: "",
  state: "",
  pincode: "",
  city: "",
};
// const validationSchema=Yup.object.shape({
//  streetAddress:Yup.string().required("Street address is required"),
//  state:Yup.string().required("State  is required"),
//  pincode:Yup.required("Pincode is required"),
//  city:Yup.string().required("City is required")
// })

export const Cart = () => {
  const createOrderUsingSelectedAddress = () => {};
  const handleOpenAddressModal = () => setOpen(true);
  const [open, setOpen] = React.useState(false);
  const { auth, cart } = useSelector(store => store);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    const data = {
      jwt:localStorage.getItem("jwt"),
      order:{
        restaurantId:cart.cartItems[0].food?.restaurant.id,
        deliveryAddress:{
          fullName:auth.user?.fullName,
          streetAddress:values.streetAddress,
          city:values.city,
          state:values.state,
          postalCode:values.pincode,
          country:"India"
        }
      }
    }
    dispatch(createOrder(data))
    console.log("Form value", values);
    navigate("/order-success")
  };
  return (
    <>
      <main className="lg:flex justify-center">
        {/* Showing all elemnt in cart which we have selected */}
        <section className="lg:w-[30%] space-y-6 min-h-screen pt-10">
          {cart.cartItems.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}

          <Divider />
          <div className="billDetails px-5 text-sm">
            <p className="font-extralight py-5">Bill Details</p>
            <div className="flex justify-between text-gray-400">
              <p>Item Total</p>
              <p>₹{cart.cart?.total}</p>
            </div>
            <div className="flex justify-between text-gray-400">
              <p>Delivery Fee</p>
              <p>₹21</p>
            </div>
            <div className="flex justify-between text-gray-400">
              <p>GST and Restaurant Charges</p>
              <p>₹33</p>
            </div>
            <Divider />
            <div className="flex justify-between text-gray-400 py-5">
              <p>Total Pay</p>
              <p>₹{cart.cart?.total+21+33}</p>
            </div>
          </div>
        </section>
        <Divider orientation="vertical" flexItem />
        <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
          <div>
            <h1 className="text-center font-semibold text-2xl py-10">
             Delivery Address
            </h1>
            <div className="flex  gap-5 flex-wrap justify-center">
              {/* {[1].map((item, index) => (
                <AddressCard
                  key={index}
                  handleSelectAddress={createOrderUsingSelectedAddress}
                  item={item}
                  showButton={true}
                />
              ))} */}

              <Card className="flex gap-5 w-64 p-5">
                <AddLocationAltIcon />
                <div className="space-y-3 text-gray-500">
                  <h1 className="font-semibold text-lg text-white">
                    Enter Address
                  </h1>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={handleOpenAddressModal}
                  >
                    Click
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValue}
            //   validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="streetAddress"
                    label="Street Address"
                    fullWidth
                    variant="outlined"
                  >
                    {/* error={!ErrorMessage("streetAddress")}
                helperText={
                    <ErrorMessage>
                        {(msg)=><span className="text-red-600">{msg}</span>}
                    </ErrorMessage>
                } */}
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="state"
                    label="State"
                    fullWidth
                    variant="outlined"
                  >
                    {/* error={!ErrorMessage("streetAddress")}
                helperText={
                    <ErrorMessage>
                        {(msg)=><span className="text-red-600">{msg}</span>}
                    </ErrorMessage>
                } */}
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="city"
                    label="City"
                    fullWidth
                    variant="outlined"
                  >
                    {/* error={!ErrorMessage("streetAddress")}
                helperText={
                    <ErrorMessage>
                        {(msg)=><span className="text-red-600">{msg}</span>}
                    </ErrorMessage>
                } */}
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="pincode"
                    label="Pin Code"
                    fullWidth
                    variant="outlined"
                  >
                    {/* error={!ErrorMessage("streetAddress")}
                helperText={
                    <ErrorMessage>
                        {(msg)=><span className="text-red-600">{msg}</span>}
                    </ErrorMessage>
                } */}
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    color="primary"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </>
  );
};
