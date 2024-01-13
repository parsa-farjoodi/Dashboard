import React from 'react'
import ErrorBox from '../Errorbox/ErrorBox'
import AddNewProduct from '../Addnewproducts/AddNewProduct'
import ProductsTable from '../ProductsTable/ProductsTable'

export default function Products() {
  return (
    <>
      <AddNewProduct />
      <ProductsTable />
    </>
  )
}
