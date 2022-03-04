import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
  color?: 'primary' | 'secondary';
  icon?: string;
}

function Button({children, color = 'primary', icon, disabled = false, ...rest}: ButtonProps) {
  return (
    <Container {...rest} color={color} disabled={disabled}>
      {children}
      {(icon && children) && <img src={icon} alt="icon" />}
    </Container>
  )
}

export default Button