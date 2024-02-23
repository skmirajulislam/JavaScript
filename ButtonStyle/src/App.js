import React from 'react';
import { ButtonView } from './ButtonVariants.styled';
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <h3>Button Variants</h3>
      <div>
        <h3>Outlined Button</h3>
        <ButtonView>Click me</ButtonView>
      </div>
      <div>
        <h3>Filled Button</h3>
        <ButtonView filled bg="#3498db" color="#fff">
          Click me
        </ButtonView>
      </div>
    </div>
  );
}