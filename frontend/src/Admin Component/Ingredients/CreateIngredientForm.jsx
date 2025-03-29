import React, {useState} from 'react'
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

export const CreateIngredientForm = () => {
    const [formData, setFormData] = useState({
        name:"", 
        ingredientCategoryId:""
    });
    const handleSubmit = () => {
        const data = {
            name: "", 
            restaurantId:{
                id:1
            }
        }
        console.log(data)
    }
    const handleInputChange =()=>{
        const {name, value}=e.target
        setFormData({
            ...formData,[name]:value
        })

    }
    return (
        <div className=''>
            <div className='p-5'>
                <h1 className='text-gray-400 text-center text-xl pb-10'>Create Ingredient</h1>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            id='categoryName'
                            name='categoryName'
                            label='Category Name'
                            variant='outlined'
                            onChange={handleInputChange}
                            value={formData.categoryName}
                        >
                        </TextField>
                        
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Ingredients</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={formData.ingredientCategoryId}
                                    label="Ingredient"
                                    onChange={handleInputChange}
                                    name="ingredientCategoryId"
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        <Button variant='contained' type='submit'>
                            Create Category
                        </Button>
                    </form>
            </div>
        </div>
    )
}
export default CreateIngredientForm
