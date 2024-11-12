import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomCalendar from './customCalender';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div >
      <h1> Calendar</h1>
      <CustomCalendar/>
    </div>

  )
}

export default App
