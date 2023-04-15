import React from 'react'
import ViewwAccount from './ViewwAccount'
import { useSelector } from 'react-redux'

function ViewAccounts() {
const Accounts=useSelector(Account=>Account)
console.log(Accounts)
  return (
    <div className='UsersList'>
      {
        Accounts.map(account=>{
         return    <ViewwAccount account={account}/>
        })
      }
    </div>
  )
}

export default ViewAccounts
