import axios from "axios"
import { createSelector } from "reselect"

const initialState={
    status:'idle',
    entities:[]
}
    


const AccountLoaded = accounts =>{
    
    return{
        type:'Account/AccountLoaded',
        payload:accounts
    }
}
export const AddAcount=account=>{
    return{
        type:'Account/AddAccount',
        payload:account
    }
}
  export const RemoveAccount=id=>{
    return{
        type:'Account/DeleteAccount',
        payload:id
    }
  }
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'Account/AccountLoaded':{
         
            return {
                ...state,
                entities:[action.payload]
            }
            
          
        }
     case'Account/AddAccount':{
        
        return[ {
            ...state,
            entities:[...state.entities,action.payload] 
        }
          
        ]
     }
     case 'Account/DeleteAccount':{

        const newAccounts=state.filter(account=>account.id != action.payload)

        return {
          ...state,
          entities:[newAccounts]
        }
        
        
     }
     default: return state
    }
}
export function FetchAccounts() {
return  async function FetchAccountsThunk(dispatch,getSate){
    const res= await axios.get('http://localhost:8000/Accounts')
    const Accounts=res.data
    console.log('get request succesfull')
  
    dispatch(AccountLoaded(Accounts))
}
}

export function AddnewAcount(account){
    return async function Addacount(dispatch,action){
        console.log(` from Accounts `)
        console.log(account.Account_Password)
        
       
        const res= await axios.post('http://localhost:8000/Accounts',account)
       
    
       dispatch(AddAcount(res.data))
        console.log('here')
    }
}
export  function DeleteAccount(id){
    return async function DeleteAccount(dispatch,action){
        await axios.delete(`http://localhost:8000/Accounts/${id}`)
        dispatch(RemoveAccount(id))
    }
}
{/*export const SelectAccounts=createSelector(
    state=>state.entities,

    Accounts=>Accounts
)*/}

export default reducer