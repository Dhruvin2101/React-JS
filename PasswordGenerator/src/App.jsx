import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const[password, setPassword] = useState();

  // use ref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*-_=+()[]{}`'"

    for(let i=0; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1 )
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 21)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])


  return (
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-7 py-3 my-10 text-orange-500 bg-gray-800 '>
    <h1 className='text-white text-center my-4 text-3xl'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-gray-600'>
      <input 
      type='text'
      value={password}
      className='outline-none w-full py-1 px-3 text-white'
      placeholder='Password'
      readOnly  
      ref={passwordRef}
      />
      <button 
      onClick={copyPasswordToClipboard}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-1 flex margin-b-3'>Copy</button>
    </div>
      <div className='flex text-sm gap-x-2 '>

                
        {/* lenth og trhe password  */}
        <div className='flex item-center gap-x-1'>
          <input 
          type='range'
          min={6}
          max={20}
          value={length}
          className='cursor-pointer' 
          onChange={(e) => {setLength(e.target.value)}}/>
          <label>Length: {length}</label>
        </div>

        {/* number allowed */}
        <div className='flex items-center gap-x-1'>
          <input
           type="checkbox"
           defaultChecked={numberAllowed} 
           id='numberInput'
           onChange={ () => {
            setNumberAllowed((prev) => !prev)
           }}/>
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        
         {/* charAllowed */}
        <div className='flex items-center gap-x-1'>
          <input
           type="checkbox"
           defaultChecked={charAllowed} 
           id='charInput'
           onChange={ () => {
            setCharAllowed((prev) => !prev)
           }}/>
          <label htmlFor='charInpur'>Character</label>
        </div>
      </div>
   </div>
  )
}

export default App
