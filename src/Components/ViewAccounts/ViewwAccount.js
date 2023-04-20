import { Avatar, Card, CardActions, CardContent, CardHeader, Icon, IconButton, Typography } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import AppleIcon from '@mui/icons-material/Apple';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
function ViewwAccount({account,DeleteAccounts}) {



  const accounts=[
   {
      color:'#4867aa',
      letter:'f',
      icon:''
   } ,
   {
    color:'black',
    letter:'G',
    icon:<GoogleIcon/>
 } ,
 {
  color:'#1da1f2',
  letter:'',
  icon:<TwitterIcon/>
} ,
{
  color:'#0077b5',
  letter:'in',
  icon:''
} ,
{
  color:'Black',
  letter:'Ln',
  icon:<GitHubIcon/>
},
{
  color:'#25b1ff',
  letter:'M',
  icon:''
} ,
{
  color:'#6001d2',
  letter:'Y',
  icon:''
} ,
{
  color:'#e96100',
  letter:'A',
  icon:''
} ,
{
  color:'black',
  letter:'Appl',
  icon:<Icon><AppleIcon/></Icon>
} 
  ]

  let accountType=''
  
  if(account.Account_By=='Facebook'){
    accountType=<Avatar sx={{background:accounts[0].color}}>{accounts[0].letter}</Avatar>
  }
  else if(account.Account_By=='Google'){
    accountType=<Avatar sx={{background:accounts[1].color}}>{accounts[1].icon}</Avatar>
  }
  else if(account.Account_By=='Twitter'){
    accountType=<Avatar sx={{background:accounts[2].color}}>{accounts[2].icon}</Avatar>
  }
  else if(account.Account_By=='LinkedIn'){
    accountType=<Avatar sx={{background:accounts[3].color}}>{accounts[3].letter}</Avatar>
  } else if(account.Account_By=='GitHub'){
    accountType=<Avatar sx={{background:accounts[4].color}}>{accounts[4].icon}</Avatar>
  } else if(account.Account_By=='Microsoft'){
    accountType=<Avatar sx={{background:accounts[5].color}}>{accounts[5].letter}</Avatar>
  } else if(account.Account_By=='Yahoo'){
    accountType=<Avatar sx={{background:accounts[6].color}}>{accounts[6].letter}</Avatar>
  } else if(account.Account_By=='Amazon'){
    accountType=<Avatar sx={{background:accounts[7].color}}>{accounts[7].letter}</Avatar>
  }
  else if(account.Account_By=='Apple'){
    accountType=<Avatar sx={{background:accounts[7].color}}>{accounts[7].letter}</Avatar>
  }
const [hovered,setHovered]=React.useState(false)

function HandleEnter(){
  
setHovered(true)
}
function HandleLeave(){
  setHovered(false)
}
function HandleClick(){
  
  DeleteAccounts(account.id)
 
}
  return (
   
      <Card
      sx={{width:350}}
      elevation={10}
      >
      <CardHeader
     sx={{background:'silver'}}
     avatar={
      accountType
    }
      >
       
      
      </CardHeader>
       <CardContent>
        <Typography
        
        >Account_Email:-{account.Account_Email}</Typography>
        <Typography>Account_password:-{account.Account_Password}</Typography>
        <Typography>Account_By:-{account.Account_By}</Typography>
        
       </CardContent>
       <CardActions>
            <IconButton onMouseEnter={HandleEnter} onMouseLeave={HandleLeave} onClick={HandleClick}>
              
              {hovered ? <DeleteForeverOutlinedIcon/> : <DeleteIcon/>}
            
            </IconButton>

       </CardActions>
      </Card>
    
    
  )
}

export default ViewwAccount
