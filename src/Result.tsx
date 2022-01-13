import {MouseEventHandler} from 'react'

type ResultProps = {
  text: string,
}

const Result = ({text}: ResultProps) => {
  const handleCopy: MouseEventHandler<HTMLButtonElement> = async event => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (error) {
      console.error('Failed to copy: ', error)
      alert(`Sorry, there was a problem trying to access your clipboard`)
    }
  }

  return (
    <>
      <label htmlFor="result">
        Anonymized:
      </label>
      <input
        name="result"
        id="result"
        value={text}
        readOnly
      />
      <button
        type="button"
        onClick={handleCopy}
      >
        Copy
      </button>
    </>
  )
}

export default Result
