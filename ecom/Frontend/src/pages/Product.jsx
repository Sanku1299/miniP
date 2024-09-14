import React, { useContext } from 'react'
import ProductHD from '../components/ProductHD'
import ProductDisplay from '../components/ProductDisplay'
import ProductDescription from '../components/ProductDescription'
import RelatedProducts from '../components/RelatedProducts'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  console.log(all_products, productId);
  const product = all_products.find((e) => e._id === productId);

  if (!product) {
    return <div>Product not found!</div>
  }

  return (
    <section className='max-padd-container'>
      <div className='max-padd-container bg-primary rounded-3xl py-20'>
        <ProductHD product={product}/>
        <ProductDisplay product={product}/>
        <ProductDescription />
        <RelatedProducts />
      </div>
    </section>
  )
}

export default Product