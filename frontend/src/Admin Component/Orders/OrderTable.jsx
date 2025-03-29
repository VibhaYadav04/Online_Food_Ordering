import React from 'react'
import { Box,Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
const order=[1,1,1,1,1,1,1]
export default function OrderTable(){
    return (
        <Box>
           <Card className='mt-1'>
             <CardHeader
              title={"All Oders"}
              sx={{pt:2,alignItems:"center"}}
              />
               <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">image</TableCell>
            <TableCell align="right">Customer</TableCell>
            <TableCell align="right">price</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">ingredients</TableCell>
            <TableCell align="right">status</TableCell>


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
              <TableCell align="right">{"Vibha@gmail.com"}</TableCell>
              <TableCell align="right">{"price"}</TableCell>
              <TableCell align="right">{"pizza"}</TableCell>
              <TableCell align="right">{"ingredients"}</TableCell>
              <TableCell align="right">{"completed"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
           </Card>
        </Box>
    )
}