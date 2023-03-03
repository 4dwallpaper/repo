import React, { useEffect, useState } from 'react'
import { readProduct } from '../api/product'
import {FcDownload} from "react-icons/fc"
const Product = () => {
    const [products, setProducts] = useState("")
    useEffect(() => {
        loadProducts()
      }, [])  
      const loadProducts=()=>{
        readProduct()
        .then(response=>{
          setProducts(response.data.wallpapers)
          console.log(response.data.wallpapers)
        })
        .catch(error=>{
          console.log(error)
        })
      }
    return (
    <div style={{backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)"}} >
    { products && products.map(product=>(
      <div className='row p-3 px-5'>
      <div className='col'>
        <p className='fw-bold'>Category</p>
        <p className='fw-bold'> {product.cat_name} </p>
      </div>
      <div className='col'>
        <p className='fw-bold'> Name </p>
        <p>{product.name}</p>
      </div>
      <div className='col mb-3' style={{height:"150px"}}>
        <p className='fw-bold '>Thumbnail</p>
        <img src={"http://localhost:4000/"+product.thumbnail} alt="Theme thumbnail" height="100%" className='p-2 rounded'/>
      </div>      
      <div className='col text-end button'>
        <button className="btn btn-danger me-5" type="button"  data-bs-toggle="collapse" data-bs-target={"#collapseExample"+product._id} aria-expanded="false" aria-controls={"collapseExample"+product._id}>View Details
        </button>
      </div>
                <div className="collapse mt-3" id={"collapseExample"+product._id}  >
                    <div className="card card-body mt-3" >
                        <p className='fw-bold mb-1'>Meta Title</p>
                        <p className='mb-1 '>{product.meta_title}</p>
                        <div className='row'>
                            <div className='col'>
                                <p className='fw-bold'>Likes</p>
                                <p className=''>{product.likes}</p>
                                <p className='fw-bold'>Price</p>
                                <p className=''>{product.price}</p>

                            </div>
                            <div className='col'>
                            <p className='fw-bold'>Downloads</p>
                                <p className=''>{product.download}</p>
                                <p className='fw-bold'>Model</p>
                                <p className=''>{product.model}</p>
                                <p className='fw-bold'>Tags</p>
                                {product.tag.map(element=>{return <span className='pe-3'>{element}</span>})}
                            </div>
                            <div className='col'>
                            <p>Download Zip</p>
                            <a href={"http://localhost:4000/"+product.file}><FcDownload /></a>
                            </div>
                        </div>
                    </div>
                </div>
      </div>
    ))
    }
    </div>
  )
}

export default Product