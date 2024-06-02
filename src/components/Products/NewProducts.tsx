"use client"
import React from 'react'
import ProductCard from '../Card/ProductCard';

const ProductsData=[
    {
        img:"/New-Products/backpack.jpg",
        title:"Nike Backpack",
        desc:"Full water resistance dynamic backpack ",
        rating:4,
        price:"1200.00",

    },
    {
        img:"/New-Products/bsneakers.jpg",
        title:"Bata Sneakers",
        desc:"Long lasting bata leather sneakers ",
        rating:5,
        price:"3299",

    },
    {
        img:"/New-Products/glass.jpg",
        title:"Sunglass",
        desc:"A Sunglass with gray and golden combination",
        rating:3,
        price:"250",

    },
    {
        img:"/New-Products/red-t-shirt.jpg",
        title:"T-Shirt",
        desc:"A Red Color total cotton half T-Shirt.Premium quality!",
        rating:3,
        price:"350",

    },
    {
        img:"/New-Products/watch.jpg",
        title:"Titan Watch",
        desc:"A water resistence watch",
        rating:3,
        price:"2590",

    },
    {
        img:"/New-Products/watch2.jpg",
        title:"Quaran Watch",
        desc:"A dynamic and smart designable watch",
        rating:4,
        price:"1250",

    },
    {
        img:"/New-Products/wireless-headphones.jpg",
        title:"Basus wireless headphone",
        desc:"High quality basus headphone",
        rating:4,
        price:"1990",

    },
    {
        img:"/New-Products/BabyCloth.jpg",
        title:"Baby Cloth",
        desc:"One single part baby cloth",
        rating:5,
        price:"450",

    },
    {
        img:"/New-Products/lofer1.jpg",
        title:"Bata Loafer",
        desc:"High quality leather loafer",
        rating:5,
        price:"3200",

    },
];

const NewProducts = () => {

    // const { data,isSuccess,isError,isLoading} = useGetUserQuery(undefined)
  return (
    <div>
        <div className="container pt-16">

            <h2 className='font-medium text-2xl pb-4'>New Products</h2>
            <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-x-5 xl:gap-y-10'>


{ ProductsData.map((item,index)=><ProductCard 
key={index}
img={item.img}
title={item.title}
desc={item.desc}
rating={item.rating}
price={item.price}/>
)}
            </div>
        </div>
    </div>
  )
}

export default NewProducts