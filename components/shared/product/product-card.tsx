'use client'

//import { useState } from 'react'
import Link from 'next/link'
import ProductPrice from './product-price'
import Rating from './rating'
import { Product } from '@/types'

const ProductCard = ({ product }: { product: Product }) => {
  // Limit product name to 70 characters
  const truncatedName =
    product.name.length > 70 ? product.name.slice(0, 70) + '...' : product.name

  return (
    <Link href={`/product/${product.slug}`}>
      <div
        style={{ height: '330px' }}
        className="flex flex-wrap gap-4 bg-white rounded-lg shadow-md overflow-hidden 
      hover:shadow-lg transition-shadow duration-300 p-0"
      >
        <img
          src={product.images![0]}
          alt={product.name}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="p-2">
          <p className="text-1xl font-semibold hover:text-gray-500 transition-colors duration-300">
            {product.name}
          </p>
          <div className="w-1/3 p-1">
            <Rating value={Number(product.rating)} />
          </div>
          {product.stock > 0 ? (
            <div className="w-1/3 p-1">
              <ProductPrice value={Number(product.price)} />
            </div>
          ) : (
            <div className="w-1/3 p-1">
              <p className="text-red-500">Out of Stock</p>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
