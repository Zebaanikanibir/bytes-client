import React, { useEffect, useState } from 'react'
import image1 from '../../images/image.png'
import image2 from '../../images/photos.png'
import image3 from '../../images/safari.png'
import './Product.css';
import { Container } from 'react-bootstrap';
const Product = () => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
fetch('http://localhost:5011/product')
.then(res=>res.json())
.then(data=> setProducts(data))


    },[])
    return (
        <Container className="mt-5">
            <h2>Our Products</h2>

            <div className="product mt-5">
            <div className="product-box">
                {
                    products.map(product =><div >
                        <img src={product.image} style={{width:'50px'}} alt="" srcset="" />
                <h3>{product.name}</h3>
                <p>{product.info}</p>
                    </div>)
                }
            </div>
            
            </div>
        </Container>
    )
}

export default Product
