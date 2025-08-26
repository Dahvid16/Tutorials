import React, { useState } from 'react'

const Calculator = () => {
    const [value, setValue] = useState("");

  return (
    <div className='container'>
        <form className="cal-container">
            <div className="input_area">
                <input type="text" name="" id="cal_text" value={value || 0} />
            </div>
            <div className='calculator'>
                <div>
                    <input type="button" value="CE" onClick={e => setValue("")}/>
                    <input type="button" value="CLEAR" onClick={e => setValue(value.slice(0, -2))}/>
                    <input type="button" value="DEL" onClick={e => setValue(value.slice(0, -1))}/>
                    <input type="button" className="ard_btn" value="/" onClick={e => setValue(value + e.target.value)}/>
                </div>

                <div>
                    <input type="button" value="9" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="8" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="7" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" className="ard_btn" value="*" onClick={e => setValue(value + e.target.value)}/>
                </div>
                <div>
                    <input type="button" value="6" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="5" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="4" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" className="ard_btn" value="-" onClick={e => setValue(value + e.target.value)}/>
                </div>
                
                <div>
                    <input type="button" value="3" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="2" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="1" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" className="ard_btn" value="+" onClick={e => setValue(value + e.target.value)}/>
                </div>
                <div>
                    <input type="button" value="0" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" className="ard_btn" value="." onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" className="ard_btn equal-btn" value="=" onClick={e => setValue(eval(value))}/>
                </div>
            </div>
        </form>
        <footer>
            <em>Dahvid</em> @2025
        </footer>
    </div>
  )
}

export default Calculator