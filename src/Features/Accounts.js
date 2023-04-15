import axios from "axios"

const initialState=[
]
  
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'Account/AccountLoaded':{
            return action.payload
        }
     case'Account/AddAccount':{
        
        return[
            ...state,
            action.payload
        ]
     }
     default: return state
    }
}

export async function FetchAccounts(dispatch,getSate){
    const res= await axios.get('http://localhost:8000/Accounts')
    const Accounts=res.data
    console.log('get request succesfull')
    dispatch({type:'Account/AccountLoaded',payload:Accounts})
}
export default reducer