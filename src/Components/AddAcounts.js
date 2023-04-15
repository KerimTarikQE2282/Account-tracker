import { Button, TextField } from '@mui/material'
import React from 'react'
import {useDispatch} from 'react-redux';
import Store from '../Store'

function AddAcounts() {
    const [account,setAccount]=React.useState(
        { Account_Email: " ", 
        Account_Password: " ", 
        Account_By: " " },
    )
const HandleChange=(e)=>{
    setAccount(state=>{
        return   {
                ...state,
                [e.target.name]:e.target.value
            }
           
        
    })
    console.log(account)
}
const dispatch=useDispatch()
const HandleSubmit=(e)=>{
  e.preventDefault()
console.log('submitted')
dispatch({type:'Account/AddAccount',payload:account})
}
  return (
    <div >
      <form className='form' onSubmit={HandleSubmit}>
        <TextField 
        label='Account Email'
        name='Account_Email'
        onChange={HandleChange}
        />
        <br/>
          <TextField 
        label='Account Password'
        name='Account_Password'
        onChange={HandleChange}
        />
        <br/>
          <TextField 
        label='Account By'
        name='Account_By'
        onChange={HandleChange}
        />
        <br/>
        <Button 
        variant='outlined'
        type='submit'
        > Add Account ! </Button>
      </form>
    </div>
  )
}

export default AddAcounts
