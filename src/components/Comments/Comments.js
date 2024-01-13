import React, { useState } from 'react'
import Comment from './Comment'

export default function Comments() {


  const [isShowComment, setIsShowComment] = useState(false)

  const deleteModalComment = () => {
    setIsShowComment(false);
  }


  return (
    <div className='cms-main'>
      <h1 className='cms-title'>لیست نظرات</h1>
      <table className='cms-table'>
        <tr>
          <thead>
            <th>نام کاربر</th>
            <th>محصول</th>
            <th>نظر</th>
            <th>تاریخ</th>
            <th>ساعت</th>
          </thead>
        </tr>
        <tr>
          <tbody>
            <td>علی عظیمی</td>
            <td>مانیتور سامسونگ</td>
            <td>
              <button onClick={() => setIsShowComment(true)}>دیدن متن</button>
            </td>
            <td>11/10/2023</td>
            <td>23:45</td>
          </tbody>
        </tr>
      </table>
      {
        isShowComment && (
          <Comment  cancelAction={deleteModalComment}/>
        ) 
      }
    </div >
  )
}
