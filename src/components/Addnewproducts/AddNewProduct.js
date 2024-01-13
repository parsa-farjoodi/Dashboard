import React from 'react'
import"./AddNewProduct.css"
import { MdOutlineDriveFileRenameOutline } from "react-icons/md"
import { FaSackDollar } from "react-icons/fa6";
import { AiOutlineStock } from "react-icons/ai";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FcSalesPerformance } from "react-icons/fc";
import { IoColorPalette } from "react-icons/io5";

export default function AddNewProduct() {
  return (
    <div className='products-main'>
        <h1 className='product-title'>افزودن محصول جدید</h1>
        <form action='#' className='add-products-form'>
            <div className='add-products-form-wrap'>
                <div className='add-products-form-group'>
                    <MdOutlineDriveFileRenameOutline />
                    <input type='text' placeholder='نام محصول را بنویسید' className='add-products-input' />
                </div>
                <div className='add-products-form-group'>
                    <FaSackDollar />
                    <input type='text' placeholder='قیمت محصول را بنویسید' className='add-products-input' />
                </div>
                <div className='add-products-form-group'>
                    <AiOutlineStock />
                    <input type='text' placeholder='موجودی محصول را بنویسید' className='add-products-input' />
                </div>
                <div className='add-products-form-group'>
                    <MdOutlineDriveFileRenameOutline />
                    <input type='text' placeholder='آدرس عکس محصول را بنویسید' className='add-products-input' />
                </div>
                <div className='add-products-form-group'>
                    <MdProductionQuantityLimits />
                    <input type='text' placeholder='میزان محبوبیت محصول را بنویسید' className='add-products-input' />
                </div>
                <div className='add-products-form-group'>
                    <FcSalesPerformance />
                    <input type='text' placeholder='میزان فروش محصول را بنویسید' className='add-products-input' />
                </div>
                <div className='add-products-form-group'>
                    <IoColorPalette />
                    <input type='text' placeholder='تعداد رنگ‌‌بندی محصول را بنویسید' className='add-products-input' />
                </div>
            </div>
            <button className='add-new-product'>ثبت محصول</button>
        </form>
    </div>
  )
}
