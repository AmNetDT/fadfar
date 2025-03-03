'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProductPrice from './product-price'
import Rating from './rating'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Product } from '@/types'

const ProductCard = ({ product }: { product: Product }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  // Limit product name to 70 characters
  const truncatedName =
    product.name.length > 70 ? product.name.slice(0, 70) + '...' : product.name

  return (
    <Link href={`/product/${product.slug}`}>
      <div
        style={{ height: '250px' }}
        className="bg-white rounded-lg shadow-md overflow-hidden 
      hover:shadow-lg transition-shadow duration-300 p-4"
      >
        <img
          src={product.images![0]}
          alt={product.name}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4">
          <p className="text-1xl font-semibold hover:text-gray-500 transition-colors duration-300">
            {product.name}
          </p>
          <div className="flex justify-between items-center">
            <Rating value={Number(product.rating)} />
            {product.stock > 0 ? (
              <ProductPrice value={Number(product.price)} />
            ) : (
              <p className="text-red-500">Out of Stock</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
