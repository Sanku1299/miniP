import React from 'react'

const ProductDescription = () => {
  return (
    <div className='mt-12'>
      <div className='flex gap-3 mb-4'>
        <button className='btn-dark rounded-full !text-xs !py-[6px] w-36'>Description</button>
        <button className='btn-dark rounded-full !text-xs !py-[6px] w-36'>Care Guide</button>
        <button className='btn-dark rounded-full !text-xs !py-[6px] w-36'>Size Guide</button>
      </div>
      <div className='flex flex-col pb-16'>
        <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi voluptatibus quas sint. Quae facere ut illo sint dolor veritatis hic laborum quaerat excepturi rerum temporibus aspernatur, atque voluptatibus, magnam adipisci.</p>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quaerat placeat harum voluptate quo, aspernatur, totam ex qui atque id perferendis doloribus nostrum architecto! Enim perspiciatis ad explicabo ipsam accusamus!</p>
      </div>
    </div>
  )
}

export default ProductDescription