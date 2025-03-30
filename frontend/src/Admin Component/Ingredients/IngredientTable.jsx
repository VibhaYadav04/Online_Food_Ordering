import React, { useState, useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { CreateIngredientForm } from '../Ingredients/CreateIngredientForm'
import {
  Box, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, IconButton, Modal, Button
} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import { getIngredientsOfRestaurant, updateStockOfIngredient } from '../../component/State/Ingredients/Action';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#1e1e1e',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function IngredientTable() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const dispatch= useDispatch();
  const jwt= localStorage.getItem("jwt")
  const {restaurant, ingredients} = useSelector(store=>store)

  useEffect(()=>{
     dispatch(getIngredientsOfRestaurant({jwt,id:restaurant.usersRestaurant.id}))
  },[])

  // handle stock of ingredients
  const handleUpdateStock=(id)=>{
    dispatch(updateStockOfIngredient({id, jwt}))
  }
  return (
    <Box>
      <Card className='mt-1'>
        <CardHeader
          action={
            <IconButton onClick={handleOpen} aria-label="settings">
              <AddIcon />
            </IconButton>
          }
          title={"Ingredients"}
          sx={{ pt: 2, alignItems: "center" }}
        />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">Availability</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ingredients.ingredients.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.id}
                  </TableCell>
                  <TableCell align="right">{item.name}</TableCell>
                  <TableCell align="right">{item.category.id}</TableCell>
                  <TableCell align="right">
                    <Button onClick={()=>handleUpdateStock(item.id)}> {item.inStock?"in_stock":"out_of_stock"}</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CreateIngredientForm handleClose={handleClose}/>
        </Box>
      </Modal>
    </Box>
  )
}