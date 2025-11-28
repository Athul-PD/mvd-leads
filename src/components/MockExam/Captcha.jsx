import { useEffect, useState } from 'react';
import '../../styles/Captcha.css'

const Captcha = ({ getCaptchaCode,setInputvalue }) => {

    const [inputWord,setInputWord] = useState('');

    const inputHandler = (e) => {
        const value = e.target.value
        setInputWord(value)
        setInputvalue(value)
    }

  return (
    <div className='captcha_inputs'>
    <div className='captcha_code'>
        <h3 inert>{getCaptchaCode}</h3>
    </div>
    <p>Type the word above</p>
    <input placeholder='Enter the captcha here' 
    type="text" 
    value={inputWord}
    onChange={inputHandler}
    />
    </div>
  )
}

export default Captcha
