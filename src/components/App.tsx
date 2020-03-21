import React from 'react';
import {Link} from 'react-router-dom'

let message: string = "helloworld" 

const App = () => {
  return (
    <>
     <div>
      {message}
     </div>
     <div>
       <Link to="/login">登録</Link>
     </div>
    </>
  );
}

export default App;
