import React from 'react'
import CreateIcon from '@mui/icons-material/Create';

import { Box,Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer,
    TableHead,TableRow, IconButton
 } from '@mui/material'
const order=[1,1,1,1,1,1,1]
export default function IngredientTable(){
    return (
        <Box>
           <Card className='mt-1'>
             <CardHeader
             action={
                <IconButton aria-label="settings">
                  <CreateIcon />
                </IconButton>
              }
              title={"Menu"}
              sx={{pt:2,alignItems:"center"}}
              />
              
               <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">id</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">category</TableCell>
            <TableCell align="right">Availability</TableCell>
           



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
              <TableCell align="right">{"image"}</TableCell>
              <TableCell align="right">{"price"}</TableCell>
              <TableCell align="right">{"pizza"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
           </Card>
        </Box>
    )
}