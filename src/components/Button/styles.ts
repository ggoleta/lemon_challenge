import styled from 'styled-components'

interface ContainerProps {
  isLoading: boolean;
  color: 'primary' | 'secondary';
  icon?: string | undefined;
}

const colorsStatusBtnNormal = {
  primary: '#026C00',
  secondary: '#F7C346'
}

const colorsStatusBtnHover = {
  primary: '#079504',
  secondary: '#FFDF77'
}

const colorsStatusBtnActive = {
  primary: '#013C00',
  secondary: '#DCAC0D'
}

const colorsStatusBtnDisabled = {
  primary: '#B7D0B6',
  secondary: '#FFE58D'
}

export const Container = styled.button<ContainerProps>`
  min-width: 19rem;
  width: 100%;
  height: 3.5rem;
  border: 0;
  font-size: 1rem;
  padding: 0 1rem;
  color: ${(props) => props.color === 'primary' ? '#FFF' : '#000'};
  background-color: ${(props) => colorsStatusBtnNormal[props.color]};
  transition: background-color 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => (props.icon === undefined) ? { justifyContent: "center" } : { justifyContent: "space-between" }}

  &:hover {
    background-color: ${(props) => colorsStatusBtnHover[props.color]};
  }
  
  &:active {
    background-color: ${(props) => colorsStatusBtnActive[props.color]};
  }

  &:disabled {
    background-color: ${(props) => colorsStatusBtnDisabled[props.color]};
  }

`