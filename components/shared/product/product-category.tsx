'use client'

//import { useState } from 'react'
import Link from 'next/link'
import { Product } from '@/types'

const ProductCategory = ({ product }: { product: Product }) => {
  // Limit product name to 70 characters

  return (
    <Link href={`/product/${product.slug}`}>
      <div
        style={{ height: '250px' }}
        className="flex flex-wrap rounded-lg shadow-md overflow-hidden
      hover:shadow-lg transition-shadow duration-300 p-0"
      >
        <img
          src={product.images![0]}
          alt={product.brand}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="m-0 mx-auto">
          <p
            className="text-1xl truncate text-slate-900 p-4 rounded-full
           hover:text-gray-500 transition-colors duration-300"
          >
            {product.brand}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCategory
