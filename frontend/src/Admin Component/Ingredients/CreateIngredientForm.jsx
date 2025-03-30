import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { createIngredient } from '../../component/State/Ingredients/Action'


export const CreateIngredientForm = ({handleClose}) => {
    const dispatch= useDispatch();
    const jwt= localStorage.getItem("jwt")
    const {restaurant, ingredients} = useSelector(store=>store)
    const [formData, setFormData] = useState({
        name:"", 
        categoryId:""
    });
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            ...formData, 
            restaurantId:restaurant.usersRestaurant.id
        }
        dispatch(createIngredient({data, jwt}))
        console.log(data)
        handleClose()
    }
    const handleInputChange =(e)=>{
        const {name, value}=e.target
        setFormData({
            ...formData,[name]:value
        })

    }
    return (
        <div className=''>
            <div className='p-5'>
                <h1 className='text-gray-400 text-center text-xl pb-10'>Create Ingredient</h1>
                    <form className='space-y-4' onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            id='name'
                            name='name'
                            label='Ingredient'
                            variant='outlined'
                            onChange={handleInputChange}
                            value={formData.name}
                        >
                        </TextField>
                        
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Ingredient Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={formData.ingredientCategoryId}
                                    label="Ingredient"
                                    onChange={handleInputChange}
                                    name="categoryId"
                                >
                                    {
                                        ingredients.category.map((item, index)=><MenuItem value={item.id} key={index}>{item.name}</MenuItem>)
                                    }
                                </Select>
                            </FormControl>
                        <Button variant='contained' type='submit'>
                            Create Ingredient
                        </Button>
                    </form>
            </div>
        </div>
    )
}
export default CreateIngredientForm
