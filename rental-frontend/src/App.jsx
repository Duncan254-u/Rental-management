import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 bg-green-100 text-green-900 rounded">
      Tailwind is working!
    </div>
  );
}

export default App;
