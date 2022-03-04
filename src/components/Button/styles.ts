import styled from 'styled-components'

interface ContainerProps {
  color: 'primary' | 'secondary'
  icon?: string;
}

const colorsStatusBtnNormal = {
  primary: '#026C00',
  secondary: '#F7C346'
}

const colorsStatusBtnHover = {
  primary: '#079504',
  secondary: '#FFDF77'
}

const colorsStatusBtnDisabled = {
  primary: '#B7D0B6',
  secondary: '#FFE58D'
}

export const Container = styled.button<ContainerProps>`
  width: 19rem;
  height: 3.5rem;
  border: 0;
  font-size: 1rem;
  padding: 0 1rem;
  color: ${(props) => props.color === 'primary' ? '#FFF' : '#000'};
  background-color: ${(props) => colorsStatusBtnNormal[props.color]};
  transition: background-color 0.2s;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    border: 1px dashed blue;
  }

  &:hover {
    background-color: ${(props) => colorsStatusBtnHover[props.color]};;
  }

  &:disabled {
    background-color: ${(props) => colorsStatusBtnDisabled[props.color]};
  }

  img {
    border: 1px dashed red;
  }
`