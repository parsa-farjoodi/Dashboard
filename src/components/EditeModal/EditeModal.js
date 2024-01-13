import React, {useEffect} from 'react'
import "./EditeModal.css"
import { Children } from 'react'

export default function EditeModal({ children, onClose, onSubmit }) {

    useEffect(() => {
        const checkKey = (event) => {
            if (event.keyCode === 27) {
                onClose();
            }
        };

        window.addEventListener("keydown", checkKey);

        return () => window.removeEventListener("keydown", checkKey);
    });



    return (
        <div className='modal-parent active'>
            <form className='edit-modal-form'>
                <h1>اطلاعات جدید را وارد نمایید</h1>

                {children}

                <button className='edit-form-submit' onClick={onSubmit}>ثبت اطلاعات جدید</button>
                <p style={{fontSize:"12px",marginTop:"12px"}}>برای خروچ دکمه esc را از کیبورد خود فشار دهید</p>
            </form>
        </div>
    )
}
