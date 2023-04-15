import  Store  from './Store';
import ViewAccounts from './Components/ViewAccounts/ViewAccounts';
import { Provider, useSelector } from 'react-redux';
import AddAcounts from './Components/AddAcounts';
import { FetchAccounts } from './Features/Accounts';
Store.dispatch(FetchAccounts)
function App() {
 
  return (
  
    <div className="App">
     {/* <AddAcounts/>*/}
      <ViewAccounts/>
    </div>
   
  );
}

export default App;
