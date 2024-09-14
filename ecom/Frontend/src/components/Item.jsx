import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Item = ({ id, name, image, old_price, new_price }) => {
    return (
        <div className='overflow-hidden p-3 rounded-3xl bg-white ring-1 ring-slate-900/5 '>
            <div className='relative flexCenter overflow-hidden transition-all duration-100 rounded-3xl '>
                <img src={image} alt='productImage' className='w-full block object-cover transition-all duration-1000' />
            </div>
            <div className='px-5 pt-3'>
                <h4 className='medium-18 line-clamp-2'>{name}</h4>
                <p className='my-2 line-clamp-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, voluptatem autem amet natus asperiores explicabo aut quaerat ducimus, quas vitae iusto praesentium doloribus facere beatae ex ad at laudantium. Magni.</p>
                <div className='flexBetween'>
                    <div className='xl:flex gap-3'>
                        <div className='bold-16'>${new_price}.00</div>
                        <div className='text-secondary bold-16 line-through'>${old_price}.00</div>
                    </div>
                    <Link onClick={window.scrollTo(0,0)} to={`/product/${id}`} className='group'><FaArrowRightLong className='bg-secondary text-white rounded-full h-10 w-10 p-3 group-hover:-rotate-45 transition-all duration-500' /></Link>
                </div>
            </div>
        </div>
    )
}

export default Item