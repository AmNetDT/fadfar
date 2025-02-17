'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProductPrice from './product-price'
import Rating from './rating'
//import React from 'react'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Product } from '@/types'

const ProductCard = ({ product }: { product: Product }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  // Limit to 50 characters
  const truncatedName = product.name.slice(0, 70)

  return (
    <Card className="w-full max-w-sm radius-0">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            alt={product.name}
            className="aspect-square object-cover"
            height={300}
            src={product.images![0]}
            width={300}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        {/* <div className="grid gap-1.5 text-sm leading-4">
          {/* Brand Link with Lighter-Black Hover */}
        {/* <Link
            href={`/product/${product.slug}`}
            className="hover:text-gray-500"
          >
            <p className="text-[1.3rem] sm:text-[1.4rem] md:text-[1.5rem] lg:text-[1.6rem]">
              {product.brand}
            </p>
          </Link> */}
        {/* </div> */}

        <div className="grid gap-1.5 text-sm leading-4">
          {/* Product Name Link with Lighter-Black Hover */}
          <Link
            href={`/product/${product.slug}`}
            className="hover:text-gray-500"
          >
            <p className="text-[16px] leading-[1.5] capitalize">
              {isExpanded ? product.name : truncatedName}
              {!isExpanded && product.name.length > 70 && (
                <>
                  {' '}
                  <span
                    onClick={() => setIsExpanded(true)}
                    className="text-blue-500 cursor-pointer"
                  >
                    ...
                  </span>
                </>
              )}
            </p>
          </Link>
        </div>

        <div className="flex justify-between gap-4 flex-wrap">
          <Rating value={Number(product.rating)} />
          {product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <p className="text-red-500">Out of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCard
