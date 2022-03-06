import Button from '../../components/Button'
import { Container, Title, Content, ContainerButton } from './styles'
import {vetData} from '../../data/data'

function Home() {  
  return (
    <Container>
      <Title>Component Button - Example</Title>
      {vetData.map((button) => (
        <Content key={button.id}>
          <ContainerButton width={button.width}>
            <Button color={button.type} icon={button.icon} disabled={button.disabled} isLoading={button.isLoading} onHandleFunction={button.onHandleFunction}>
              {button.child}
            </Button>
        </ContainerButton>
        </Content>
      ))}

    </Container>
  )
}

export default Home