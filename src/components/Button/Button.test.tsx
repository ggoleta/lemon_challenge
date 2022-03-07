import { render, screen } from '@testing-library/react'
import Button from './'

describe('Button Component', () => {

  test('render Button correctly', () => {
    render (
      <Button color='primary'>
        Button 1
      </Button>
    )
  
    expect(screen.getByText('Button 1')).toBeInTheDocument()
  })

  test('background color primary', () => {
    render (
      <Button color='primary'>
        Button 1
      </Button>
    )
  
    expect(screen.getByText('Button 1')).toHaveStyle('background-color: #026C00')
  })

  test('background color secondary', () => {
    render (
      <Button color='secondary'>
        Button 1
      </Button>
    )
  
    expect(screen.getByText('Button 1')).toHaveStyle('background-color: #F7C346')
  })

  test('component disabled', () => {
    render (
      <Button color='secondary' disabled>
        Button 1
      </Button>
    )
  
    expect(screen.getByText('Button 1')).toHaveStyle('background-color: #FFE58D')
  })

})