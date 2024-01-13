import React from 'react'
import { users } from '../../datas'


export default function Users() {
  return (
    <div className='cms-main'>
      <h1 className='cms-title'>لیست کاربران</h1>
      <table className='cms-table'>
        <thead>
          <tr>
            <th>نام و نام خانوادگی</th>
            <th>نام کاربری</th>
            <th>شماره تماس</th>
            <th>ایمیل</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => {

             return <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.phone}</td>
                <td>{user.mail}</td>
              </tr>
            })
          }

        </tbody>
      </table>
    </div>
  )
}
