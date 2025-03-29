import React, {useState} from 'react'
import { TextField, Button } from '@mui/material'

export const CreateIngredientCategoryForm = () => {
    const [formData, setFormData] = useState({
        name:"", 
    });
    const handleSubmit = () => {
        console.log(formData)
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
                <h1 className='text-gray-400 text-center text-xl pb-10'>Create Ingredient Category</h1>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            id='name'
                            name='name'
                            label='Ingredient Category'
                            variant='outlined'
                            onChange={handleInputChange}
                            value={formData.name}
                        >
                        </TextField>
                        <Button variant='contained' type='submit'>
                            Create Ingredient
                        </Button>
                    </form>
            </div>
        </div>
    )
}
export default CreateIngredientCategoryForm
