import {render, screen} from '@testing-library/react'
import Result from './Result'
import userEvent from '@testing-library/user-event'
import {Constants} from '../Constants'

test('renders search box for label "Anonymized:"', () => {
  render(<Result text=""/>)
  const element = screen.getByRole('textbox', {name: 'Anonymized:'})
  expect(element).toBeInTheDocument()
})

test('renders button for name "Copy"', () => {
  render(<Result text=""/>)
  const element = screen.getByRole('button', {name: 'Copy'})
  expect(element).toBeInTheDocument()
})

test('clicking Copy button copies result into clipboard', () => {
  Object.defineProperty(navigator, 'clipboard', {
    value: {
      writeText: () => {},
    }
  })
  const spy = jest.spyOn(navigator.clipboard, 'writeText')

  render(<Result text={Constants.anonymizedUrl}/>)
  const copyButton = screen.getByRole('button', {name: 'Copy'})
  userEvent.click(copyButton)
  expect(spy).toHaveBeenCalled()
  spy.mockRestore()
})
