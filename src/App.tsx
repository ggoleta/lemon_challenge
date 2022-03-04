import React from 'react';
import Button from './components/Button';
import { GlobalStyle } from './styles/global';
import iconImg from '../src/assets/check.svg'

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Processo Seletivo - Lemon Energy</h1>
      <Button 
        color={'primary'}
        icon={iconImg} 
      >
        Text
      </Button>
    </>
  );
}

export default App;
