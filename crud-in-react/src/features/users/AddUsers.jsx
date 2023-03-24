import React, { useState } from 'react'
import TextField from '../../components/TextField'
import Buttons from '../../components/Buttons'
import { useNavigate } from 'react-router-dom'

const AddUsers = ({children}) => {
    const navigate = useNavigate();

    const [values,setValues] = useState({
        name: '',
        email: '',
    })

    const handleAddUser = () => {
        setValues({name: '', email: ''})
        console.log(values);
        navigate('/');
       
    }
  return (
    <div className='mt-10 max-w-full mx-auto'>
        <TextField 
        label = "Name"
        value={values.name}
        onChange={(e) => setValues({...values, name: e.target.value})}
        inputProps={{type: 'text',placeholder: 'Enter your name'}}
        
        />
        
        <br/>
         <TextField 
         label = "Email"
         value={values.email}
         onChange={(e) => setValues({...values, email: e.target.value})}
         

        inputProps={{type: 'email',placeholder: 'Enter your email'}}
        
        />
        <Buttons onClick={ handleAddUser }>Submit</Buttons>
    </div>
  )
}

export default AddUsers
