import React from 'react'
import "./Sidebar.css"
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TfiCommentAlt } from "react-icons/tfi";
import { LuUsers2 } from "react-icons/lu";
import { IoBagAddOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <h1 className='sidebar-title'>به داشبورد خود خوش آمدید</h1>

            <ul className='sidebar-links'>
                <NavLink to="/"> <IoHomeOutline className='sidebar-icon' />صفحه اصلی  </NavLink>
                <NavLink to="/products"> <MdOutlineProductionQuantityLimits className='sidebar-icon' /> محصولات</NavLink>
                <NavLink to="/comments"> <TfiCommentAlt className='sidebar-icon' /> نظرات</NavLink>
                <NavLink to="/users"> <LuUsers2 className='sidebar-icon' /> کاربران </NavLink>
                <NavLink to="/orders"> <IoBagAddOutline className='sidebar-icon' /> سفارشات</NavLink>
                <NavLink to="/offs"> <AiOutlineDollarCircle className='sidebar-icon' /> تخفیف‌ها </NavLink>
            </ul>
        </div>
    )
}
