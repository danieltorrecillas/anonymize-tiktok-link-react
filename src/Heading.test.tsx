import {render, screen} from '@testing-library/react'
import Heading from './Heading'

test('renders Heading text', () => {
  render(<Heading/>)
  const element = screen.getByRole('heading', {level: 1})
  expect(element).toHaveTextContent('Enter TikTok link to anonymize:')
})
