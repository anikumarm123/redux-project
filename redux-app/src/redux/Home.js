import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

function Home() {
const [products,setProducts] =useState([])   
useEffect(()=>{
   getProduct()
},[])
 
async function  getProduct(){
    const getData =await axios.get('http://nammacart-dev-lb-1671514857.ap-south-1.elb.amazonaws.com:8080/products/seller?sellerId=6108fb29f58bf55437a79e44')
    setProducts(getData.data.data)
}
console.log(products);
  return (
    <div className='productList'>
    {products.map((data)=>
     <Card style={{width:'25vw',height:'60vh',margin:'10px',padding:'10px'}}>
      <img src={data.image} style={{width:'20vw',height:'28vh'}}></img>
      <h2 style={{fontSize:'1.7vw'}}>{data.name}</h2>
      <div className='cartFlx'>
      <div>
        <h2 style={{fontSize:'1.8vw'}}>Price :<s style={{color:'gray',paddingRight:'1vw'}}>$ 23</s><span>$ 56</span></h2>  
      </div>
      <div className='cartIcon'>
        <Button size="small"><i className="fa fa-cart-plus" aria-hidden="true"></i></Button>
        <Button size="small"><i className="fa fa-heart" aria-hidden="true"></i></Button>
     </div>
     </div>
     </Card>
    
    )}
    
    </div>
  );
  
}

export default Home