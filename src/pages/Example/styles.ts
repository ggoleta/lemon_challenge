import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0.5rem;
`
export const Title = styled.h1`
  margin-bottom: 2rem;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + div{
    margin-top: 2rem;
  }
`
interface ContainerButtonProps {
  width?: 'full' | undefined;
}
export const ContainerButton = styled.div<ContainerButtonProps>`
  ${(props) => props.width === 'full' && { width: '100%' }}
`