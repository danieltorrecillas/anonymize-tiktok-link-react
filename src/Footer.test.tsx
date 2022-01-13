import {render, screen} from '@testing-library/react'
import Footer from './Footer'
import {Constants} from './Constants'

test('renders copyright with current year and author', () => {
  const year = new Date().getFullYear()
  render(<Footer/>)
  const element = screen.getByText(`© ${year} ${Constants.author}`)
  expect(element).toBeInTheDocument()
})

test('renders About link', () => {
  render(<Footer/>)
  const element = screen.getByRole('link', {name: 'About'})
  expect(element).toBeInTheDocument()
})
