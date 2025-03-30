import React, { useEffect, useState } from 'react'
import {
  Box, Card, CardHeader, Paper, Table, TableBody, Button,
  TableCell, TableContainer, TableHead, TableRow, Avatar, AvatarGroup, Chip, Menu, MenuItem
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurantOrder, updateOrderStatus } from '../../component/State/Restaurant Order/Action'

const orderStatus = [
  { label: "Pending", value: "PENDING" },
  { label: "Completed", value: "COMPLETED" },
  { label: "Cancelled", value: "CANCELLED" }
];

export default function OrderTable() {
  const [anchorEl, setAnchorEl] = useState({}); // Maintain separate anchorEl for each order

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant, restaurantOrder } = useSelector(store => store);

  useEffect(() => {
    dispatch(fetchRestaurantOrder({
      jwt,
      restaurantId: restaurant.usersRestaurant?.id,
    }));
  }, []);

  const handleClick = (event, orderId) => {
    setAnchorEl((prev) => ({ ...prev, [orderId]: event.currentTarget }));
  };

  const handleClose = (orderId) => {
    setAnchorEl((prev) => ({ ...prev, [orderId]: null }));
  };

  const handleUpdateOrder = (orderId, orderStatus) => {
    dispatch(updateOrderStatus({ orderId, orderStatus, jwt }));
    handleClose(orderId);
  };

  return (
    <Box>
      <Card className='mt-1'>
        <CardHeader title="All Orders" sx={{ pt: 2, alignItems: "center" }} />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Image</TableCell>
                <TableCell align="right">Customer</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Ingredients</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Update Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {restaurantOrder?.orders?.map((item) => (
                <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell align="right">
                    <AvatarGroup>
                      {item.items.map((orderItem, index) => (
                        <Avatar key={index} src={orderItem.food?.images[0]} />
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align="right">{item.customer?.fullName}</TableCell>
                  <TableCell align="right">₹{item.totalPrice}</TableCell>
                  <TableCell align="right">
                    {item.items.map((orderItem, index) => (
                      <p key={index}>{orderItem.food?.name}</p>
                    ))}
                  </TableCell>
                  <TableCell align="right">
                    {item.items.map((orderItem, index) => (
                      <div key={index}>
                        {orderItem.ingredients.map((ingredient, i) => (
                          <Chip key={i} label={ingredient} />
                        ))}
                      </div>
                    ))}
                  </TableCell>
                  <TableCell align="right">{item.orderStatus}</TableCell>
                  <TableCell align="right">
                    <Button
                      id={`basic-button-${item.id}`}
                      aria-controls={anchorEl[item.id] ? `basic-menu-${item.id}` : undefined}
                      aria-haspopup="true"
                      aria-expanded={anchorEl[item.id] ? "true" : undefined}
                      onClick={(event) => handleClick(event, item.id)}
                    >
                      Update
                    </Button>
                    <Menu
                      id={`basic-menu-${item.id}`}
                      anchorEl={anchorEl[item.id]}
                      open={Boolean(anchorEl[item.id])}
                      onClose={() => handleClose(item.id)}
                    >
                      {orderStatus.map((status) => (
                        <MenuItem key={status.value} onClick={() => handleUpdateOrder(item.id, status.value)}>
                          {status.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
}
