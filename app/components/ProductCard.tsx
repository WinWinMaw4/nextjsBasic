'use client';
import React from 'react'
import AddToCard from './AddToCard';
import styles from "./ProductCard.module.css"

const ProductCard = () => {
  return (
    <div className='p-5 my-5 bg-sky-500 text-white text-xl hover:bg-sky-400'>
      <AddToCard />
    </div>
  )
}

export default ProductCard