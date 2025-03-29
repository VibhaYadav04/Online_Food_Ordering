import React from 'react'
import CreateIcon from '@mui/icons-material/Create';

import { Box,Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, IconButton, TableHead, TableRow } from '@mui/material'
const order=[1,1,1,1,1,1,1]
export default function IngredientCategoryTable(){
    return (
        <Box>
           <Card className='mt-1'>
             <CardHeader
             action={
                <IconButton aria-label="settings">
                  <CreateIcon />
                </IconButton>
              }
              title={"Ingredient Category"}
              sx={{pt:2,alignItems:"center"}}
              />
              
               <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">id</TableCell>
            <TableCell align="left">name</TableCell>
          



          </TableRow>
        </TableHead>
        <TableBody>
          {order.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {1}
              </TableCell>
              <TableCell align="left">{"name"}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
           </Card>
        </Box>
    )
}