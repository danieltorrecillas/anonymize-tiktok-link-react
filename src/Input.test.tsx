import { render, screen } from '@testing-library/react'
import Input from './Input'

test('renders search box for label "Original:"', () => {
  render(<Input text='' onChange={jest.fn()}/>)
  const element = screen.getByRole('textbox', {name: 'Original:'})
  expect(element).toBeInTheDocument()
})

test('renders button for name "Submit"', () => {
  render(<Input text='' onChange={jest.fn()}/>)
  const element = screen.getByRole('button', {name: 'Submit'})
  expect(element).toBeInTheDocument()
})

test('renders button for name "Reset"', () => {
  render(<Input text='' onChange={jest.fn()}/>)
  const element = screen.getByRole('button', {name: 'Reset'})
  expect(element).toBeInTheDocument()
})
