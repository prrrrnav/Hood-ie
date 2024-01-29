import React from 'react'

const Product = (props) => {
    let title = props.title
    let shortTitle = title.substring(0,25).concat("...")
    let des = props.desc;
    let shortDescription = des.substring(0,20).concat("...")
  return (
    <div className='product-outer-box'>
        <div className='product-inner-box'>
            <div className='p-img-box'><img className='p-image' src={props.image}></img></div>
            {/* <img className='p-image' src={props.image}></img> */}
            <p className='p-title'>{shortTitle}</p>
            <p>{shortDescription}</p>
            <div>
                <p>{props.category}</p>
            </div>
            <div className='price-cart-btn'>
                <p>Price: {props.price}</p>
                <div className='button'>Add to cart</div>
            </div>


        </div>
        
    </div>
  )
}

export default Product
