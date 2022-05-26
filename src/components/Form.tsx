import {ChangeEventHandler, FormEventHandler, useState} from 'react'
import Input from './Input'
import Result from './Result'
import {Constants} from '../Constants'

const Form = () => {
  const [inputText, setInputText] = useState('')
  const [resultText, setResultText] = useState('')

  const handleInputTextChange: ChangeEventHandler<HTMLInputElement> = event => {
    setInputText(event.target.value)
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault()

    const response = await fetch(`${Constants.apiUrl}${Constants.apiQueryString}${inputText}`)
    if (!response.ok) {
      throw new Error('Network response was not OK')
    }
    const json = await response.json()
    setResultText(json.url)
  }

  const handleReset: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()
    setInputText('')
    setResultText('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <p>
        <Input text={inputText} onChange={handleInputTextChange}/>
      </p>
      <p>
        <Result text={resultText}/>
      </p>
    </form>
  )
}

export default Form
