import React from 'react'
import {Card, CardMedia, CardContent, Typography, CardActions, IconButton} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
export const EventCard = () => {
  return (
    <div>
       <Card sx={{width:250}}>
        <CardMedia
        sx={{height:250}}
        image='https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600' />
          <CardContent>
            <Typography variant='h5'>
              Indian Fast Food
            </Typography>
            <Typography variant='body2'>
              50% off on your first order
            </Typography>
            <div className='py-2 space-y-2'>
                <p>{"Kolkata"}</p>
                <p  className='text-sm text-blue-500'> February 08, 2025 12:00PM</p>
                <p className='text-sm text-red-500'>February 09, 2025 12:00PM</p>
            </div>
          </CardContent>
         { false && <CardActions>
          <IconButton>
            <DeleteIcon></DeleteIcon>
          </IconButton>
         </CardActions>

         }
        </Card> 
    </div>
  )
}
