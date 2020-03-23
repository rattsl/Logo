import React from 'react';
import {Link} from 'react-router-dom'
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(awsconfig);

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

export default withAuthenticator(App, true);
