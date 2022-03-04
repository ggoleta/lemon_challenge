import { render, screen } from '@testing-library/react'
import Button from './'

describe('Button Component', () => {

  it('render Button correctly', () => {
    render (
      <Button>
        Text
      </Button>
    )
  
    expect(screen.getByText('Text')).toBeInTheDocument()
  })

})