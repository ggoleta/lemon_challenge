import { ButtonHTMLAttributes, ReactNode } from "react";
import Loader from "../Loader";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
  color?: 'primary' | 'secondary';
  icon?: 'arrow-right' | 'check' | 'refresh';
  onHandleFunction?: () => void;
  isLoading?: boolean;
}

function Button({children, color = 'primary', icon, disabled = false, onHandleFunction, isLoading = false, ...rest}: ButtonProps) {
  function handleCallExternalFunction() {
    if(!isLoading && onHandleFunction) {
      onHandleFunction()
    }
  }
  return (
    <Container {...rest} color={color} disabled={disabled} icon={icon} onClick={handleCallExternalFunction} isLoading={isLoading}>
      {isLoading && <Loader />} 
      {!isLoading && children}
      {(!isLoading && icon && children) && <img src={`./assets/${icon}.svg`} alt="icon" />}
    </Container>
  )
}

export default Button