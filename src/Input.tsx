import {ChangeEventHandler} from 'react'
import {Constants} from './Constants'

type InputProps = {
  text: string,
  onChange: ChangeEventHandler<HTMLInputElement>
}

const Input = ({text, onChange}: InputProps) => {
  return (
    <>
      <label htmlFor="url">
        Original:
      </label>
      <input
        type="url"
        name="url"
        id="url"
        placeholder={Constants.trackingUrl}
        value={text}
        onChange={onChange}
        pattern="https://.+.tiktok.com/.+"
        title="A valid url is https://something.tiktok.com/something"
        required
      />
      <button type="submit">
        Submit
      </button>
      <button type="reset">
        Reset
      </button>
    </>
  )
}

export default Input
