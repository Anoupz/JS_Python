import React, { useRef } from 'react'

const DEBOUNCE_THRESHOLD = 500

export default function App() {
  const timeoutHandler = useRef(null)

  const handleChange = (event) => {
    if (timeoutHandler.current) {
      clearTimeout(timeoutHandler.current)
    }
    timeoutHandler.current = setTimeout(() => {
      console.log(event.target.value)
    }, DEBOUNCE_THRESHOLD)
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <form>
        <input
          type="search"
          onChange={handleChange}
          id="input-text"
          placeholder="Start typing...."
        />
      </form>
    </div>
  )
}
