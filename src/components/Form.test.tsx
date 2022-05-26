import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from './Form'
import {Constants} from '../Constants'

test('submitting form fetches new URL and populates Anonymized textbox', async () => {
  render(<Form/>)
  const originalTextBox = screen.getByRole('textbox', {name: 'Original:'})
  userEvent.type(originalTextBox, Constants.trackingUrl)

  const submitButton = screen.getByRole('button', {name: 'Submit'})
  userEvent.click(submitButton)

  const anonymizedTextBox = screen.getByRole('textbox', {name: 'Anonymized:'})
  await waitFor(() => expect(anonymizedTextBox).toHaveValue(Constants.anonymizedUrl))
})

test('clicking Reset button clears all textboxes', async () => {
  render(<Form/>)
  const originalTextBox = screen.getByRole('textbox', {name: 'Original:'})
  userEvent.type(originalTextBox, Constants.trackingUrl)

  const submitButton = screen.getByRole('button', {name: 'Submit'})
  userEvent.click(submitButton)

  const anonymizedTextBox = screen.getByRole('textbox', {name: 'Anonymized:'})
  await waitFor(() => expect(anonymizedTextBox).toHaveValue(Constants.anonymizedUrl))

  const resetButton = screen.getByRole('button', {name: 'Reset'})
  userEvent.click(resetButton)

  expect(originalTextBox).toHaveValue('')
  expect(anonymizedTextBox).toHaveValue('')
})
