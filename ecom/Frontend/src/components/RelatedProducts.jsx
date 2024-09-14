import POPULAR from '../assets/popular'
import Item from './Item'

const RelatedProducts = () => {
  return (
    <section className='bg-primary rounded-3xl'>
      <div className='py-12 mx-auto'>
        <h3 className='h3 font-ace text-secondary'>Latest <span className='font-ace font-[300] regular-20 text-tertiary'>Products</span></h3>
      {/* container */}
      <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-16'>
        {POPULAR.map((item)=>(
          <Item key={item._id} id={item._id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        ))}
      </div>
      </div>
    </section>
  )
}

export default RelatedProducts