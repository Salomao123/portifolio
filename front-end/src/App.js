import React from 'react';

import { RecoilRoot } from 'recoil';
import Routes from './routes';

class App extends React.Component {
  render(){
    return (
      <RecoilRoot>
        <Routes />
      </RecoilRoot>
    )
  }
}

export default App;

