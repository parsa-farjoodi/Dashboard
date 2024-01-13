import React, { useState } from 'react';
import "./ProductsTable.css"
import DeleteModal from '../DeleteModal/DeleteModal';
import EditeModal from '../EditeModal/EditeModal';
import { FaSackDollar } from "react-icons/fa6";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";
import { products } from '../../datas';
import ErrorBox from '../Errorbox/ErrorBox';

export default function ProductsTable() {

    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
    const [isShowEditeModal, setIsShowEditeModal] = useState(false);

    const deleteModalCancelAction = () => {
        setIsShowDeleteModal(false);
    };
    const deleteModalSubmitAction = () => {
        setIsShowDeleteModal(false);
    };
    const updateProductInfos = (event) => {
        event.preventDefault()
        console.log("اطلاعات جدید وارد شد");
    }
    return (
        <>
            {
                products.length ? (
                    <table className='products-table'>
                        <thead>
                            <tr className='products-table-heading-tr'>
                                <th>عکس</th>
                                <th>نام محصول</th>
                                <th>قیمت</th>
                                <th>موجودی</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product) => {

                                    return <tr key={product.id} className='products-table-tr'>
                                        <td>
                                            <img src={product.img} className='products-table-image' alt='' />
                                        </td>
                                        <td>{product.title}</td>
                                        <td>{product.price} تومان</td>
                                        <td>{product.count}</td>
                                        <td>
                                            <button className='products-table-btn'>جزییات</button>
                                            <button className='products-table-btn' onClick={() => setIsShowDeleteModal(true)}>حذف</button>
                                            <button className='products-table-btn' onClick={() => setIsShowEditeModal(true)}>ویرایش</button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                ) : (
                    <ErrorBox message={"هیچ محصولی یافت نشد"} />
                )
            };

            {isShowDeleteModal && <DeleteModal submitAction={deleteModalSubmitAction} cancelAction={deleteModalCancelAction} /> }
            {isShowEditeModal && <EditeModal
                onClose={() => setIsShowEditeModal(false)}
                onSubmit={updateProductInfos}
            >
                <div className='edit-products-form-group'>
                    <span>
                        <MdOutlineDriveFileRenameOutline />
                    </span>
                    <input type='text' placeholder='عنوان جدید را وارد کنید' className='edit-product-input' />
                </div>
                <div className='edit-products-form-group'>
                    <span>
                        <FaSackDollar />
                    </span>
                    <input type='text' placeholder='قیمت جدید را وارد کنید' className='edit-product-input' />
                </div>
                <div className='edit-products-form-group'>
                    <span>
                        <MdOutlinePhotoLibrary />
                    </span>
                    <input type='text' placeholder='عکس جدید را وارد کنید' className='edit-product-input' />
                </div>
                <div className='edit-products-form-group'>
                    <span>
                        <AiOutlineStock />
                    </span>
                    <input type='text' placeholder='موجودی جدید را وارد کنید' className='edit-product-input' />
                </div>

            </EditeModal>}
        </>
    )
}
