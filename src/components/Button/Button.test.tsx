import { render, screen } from '@testing-library/react'
import Button from './'

describe('Button Component', () => {

  it('should render Button correctly', () => {
    render (
      <Button color='primary' isLoading>
        Text
      </Button>
    )
  
    expect(screen.getByText('Text')).toBeInTheDocument()
  })

})