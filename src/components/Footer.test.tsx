import {render, screen} from '@testing-library/react'
import Footer from './Footer'
import {Constants} from '../Constants'

test('renders author link', () => {
  render(<Footer/>)
  const element = screen.getByRole('link', {name: Constants.author})
  expect(element).toBeInTheDocument()
})

test('renders About link', () => {
  render(<Footer/>)
  const element = screen.getByRole('link', {name: 'About'})
  expect(element).toBeInTheDocument()
})
