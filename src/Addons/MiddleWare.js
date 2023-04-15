

const  asyncFunctionMiddleWare = Store=>next=>action=>{
if(typeof action=='function'){
    return action(Store.dispatch,Store.getSate)
}
return next(action)
}