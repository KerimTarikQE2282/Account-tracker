import React from 'react'
import ViewwAccount from './ViewwAccount'
import { useSelector } from 'react-redux'
import Store from '../../Store'
import { DeleteAccount, viewAccountId } from '../../Features/Accounts'
import { useDispatch } from 'react-redux'
import { Paper } from '@mui/material'
import {SelectAccounts }from '../../Features/Accounts'



function ViewAccounts() {
  const dispatch=useDispatch()
const Accounts=useSelector(Accounts=>Accounts.entities)



const DeleteAccounts=(id)=>{
  const DeletenewTodoThunk=DeleteAccount(id)
dispatch(DeletenewTodoThunk)

}
  return (
    <Paper
    style={{ display: 'inline-block' ,width:1900}}
    elevation={10}
    >
    <div className='UsersList'>
      {
        Accounts.map(account=>{
          
         return    <ViewwAccount account={account} DeleteAccounts={DeleteAccounts}/>
        })
      }
      <div>
        
      </div>
    </div>
    </Paper>
  )
}

export default ViewAccounts
