import React, { useState } from 'react'

const Product = (props) => {
    let title = props.title
    let shortTitle = title.substring(0, 25).concat("...")
    let des = props.desc;
    let shortDescription = des.substring(0, 20).concat("...")

    // const [btnStructure,setBtnStructure] =useState('default')
    const [flag, setFlag] = useState(0)


    function handleCarting() {
        if(flag == 0){
            setFlag(flag + 1)
            console.log(flag)
        }
        
        
    }
    function incrementingCart(){
        setFlag(flag + 1)
    }
    function decrementingCart(){
        setFlag(flag - 1)
    }



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
                    {(flag === 0) ?
                        (<div className='button' onClick={handleCarting}>Add to cart</div>)
                        :
                        (<div className='button procedureCarting' onClick={handleCarting}>
                            <div onClick={decrementingCart}>-</div>
                            <div>{flag}</div>
                            <div onClick={incrementingCart}>+</div>
                            </div>)
                    }

                </div>


            </div>

        </div>
    )
}

export default Product
