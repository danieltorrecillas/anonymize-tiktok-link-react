import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from './Form'
import {Constants} from '../Constants'

test('submitting form with good tracking URL fetches new anonymized URL and populates Anonymized textbox', async () => {
  render(<Form/>)
  const originalTextBox = screen.getByRole('textbox', {name: 'Original:'})
  userEvent.type(originalTextBox, Constants.testTrackingUrl)

  const submitButton = screen.getByRole('button', {name: 'Submit'})
  userEvent.click(submitButton)

  const anonymizedTextBox = screen.getByRole('textbox', {name: 'Anonymized:'})
  await waitFor(() => expect(anonymizedTextBox).toHaveValue(Constants.testAnonymizedUrl))
})

test('submitting form with URL with nonexistent video shows alert of error and clears Anonymized textbox', async () => {
  render(<Form/>)
  window.alert = jest.fn()

  const originalTextBox = screen.getByRole('textbox', {name: 'Original:'})
  userEvent.type(originalTextBox, Constants.testUrlWithNonExistentVideo)

  const submitButton = screen.getByRole('button', {name: 'Submit'})
  userEvent.click(submitButton)

  await waitFor(() => {
    expect(window.alert).toHaveBeenCalledWith(expect.not.stringMatching(/^$/))
    expect(window.alert).toHaveBeenCalledTimes(1)
  })

  const anonymizedTextBox = screen.getByRole('textbox', {name: 'Anonymized:'})
  await waitFor(() => expect(anonymizedTextBox).toHaveValue(''))
})

test('clicking Reset button clears all textboxes', async () => {
  render(<Form/>)
  const originalTextBox = screen.getByRole('textbox', {name: 'Original:'})
  userEvent.type(originalTextBox, Constants.testTrackingUrl)

  const submitButton = screen.getByRole('button', {name: 'Submit'})
  userEvent.click(submitButton)

  const anonymizedTextBox = screen.getByRole('textbox', {name: 'Anonymized:'})
  await waitFor(() => expect(anonymizedTextBox).toHaveValue(Constants.testAnonymizedUrl))

  const resetButton = screen.getByRole('button', {name: 'Reset'})
  userEvent.click(resetButton)

  expect(originalTextBox).toHaveValue('')
  expect(anonymizedTextBox).toHaveValue('')
})
