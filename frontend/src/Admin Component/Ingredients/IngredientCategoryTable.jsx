import React, { useState, useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Box, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, IconButton, TableHead, TableRow, Modal } from '@mui/material'
import { CreateIngredientCategoryForm } from '../Ingredients/CreateIngredientCategoryForm'
import { useDispatch, useSelector } from 'react-redux'
import { getIngredientCategory } from '../../component/State/Ingredients/Action'



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

export default function IngredientCategoryTable() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)


  const dispatch = useDispatch();
  const { restaurant, ingredients } = useSelector(store => store)
  const jwt = localStorage.getItem("jwt")

  useEffect(() => {
    dispatch(getIngredientCategory({ id: restaurant.usersRestaurant.id, jwt }))
  }, [])

  return (
    <Box>
      <Card className='mt-1'>
        <CardHeader
          action={
            <IconButton onClick={handleOpen} aria-label="settings">
              <AddIcon />
            </IconButton>
          }
          title={"Ingredient Category"}
          sx={{ pt: 2, alignItems: "center" }}
        />

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ingredients.category.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.id}
                  </TableCell>
                  <TableCell align="left">{item.name}</TableCell>

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
          <CreateIngredientCategoryForm handleClose={handleClose} />
        </Box>
      </Modal>
    </Box>
  )
}