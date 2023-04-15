import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';

function ViewwAccount({account}) {
  const accounts=[
   {
      color:'blue',
      letter:'f',
      icon:''
   } ,
   {
    color:'Green',
    letter:'G',
    icon:''
 } ,
 {
  color:'blue',
  letter:'',
  icon:<TwitterIcon/>
} ,
{
  color:'blue',
  letter:'Ln',
  icon:''
} ,
{
  color:'#25b1ff',
  letter:'M',
  icon:''
} ,
{
  color:'purple',
  letter:'Y',
  icon:''
} ,
{
  color:'orange',
  letter:'AMz',
  icon:''
} ,
{
  color:'black',
  letter:'Appl',
  icon:''
} 
  ]

  let accountType=''
  
  if(account.Account_By=='Facebook'){
    accountType=<Avatar sx={{background:accounts[0].color}}>{accounts[0].letter}</Avatar>
  }
  else if(account.Account_By=='Google'){
    accountType=<Avatar sx={{background:accounts[1].color}}>{accounts[1].letter}</Avatar>
  }
  else if(account.Account_By=='Twitter'){
    accountType=<Avatar sx={{background:accounts[2].color}}>{accounts[2].icon}</Avatar>
  }
  else if(account.Account_By=='LinkedIn'){
    accountType=<Avatar sx={{background:accounts[3].color}}>{accounts[3].letter}</Avatar>
  } else if(account.Account_By=='GitHub'){
    accountType=<Avatar sx={{background:accounts[4].color}}>{accounts[4].letter}</Avatar>
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
        <icon></icon>
       </CardContent>
      </Card>
    
    
  )
}

export default ViewwAccount
