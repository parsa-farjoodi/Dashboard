import React from 'react'
import "./Header.css"
import { FaRegBell } from "react-icons/fa";
import { CiBrightnessUp } from "react-icons/ci";


export default function Header() {
  return (
    <div className='header'>
        <div className='admin-profile'>
            <img src='./img/profile1.jpg' />
            <div>
                <h1>سینا ملکی</h1>
                <h3>developer</h3>
            </div>
        </div>
        <div className='header-left-section'>
            <div className='search-box'>
                <input type='text' placeholder='جست‌وجو کنید' />
                <button>جست‌وجو</button>
            </div>
            <button className='header-left-icon'><FaRegBell /></button>
            <button className='header-left-icon'><CiBrightnessUp /></button>
        </div>
    </div>
  )
}
