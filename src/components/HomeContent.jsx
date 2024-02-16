import React from 'react'
import CategoryCard from './CategoryCard'
// "https://cdn.shopify.com/s/files/1/1746/5485/products/1_568d0ae6-c5ca-412c-a266-25abedcad655_540x.jpg?v=1663073700"
// Women's Ethinic Wear
// 30-70% OFF
export default function HomeContent() {
  return (
    <div>
        <h1 className='cs-text-primary text-center my-lg-5 my-2 display-5'>Shop By Category</h1>
        <div className='container-fluid px-lg-5 row p-0 m-0 d-flex justify-content-center'>
            <CategoryCard link={'/category/oversized-tee'} title={'Oversized Tee'} sale={"30-40%"} imgUrl={"https://cdn.shopify.com/s/files/1/1746/5485/products/1_568d0ae6-c5ca-412c-a266-25abedcad655_540x.jpg?v=1663073700"}/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <br />
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <br />
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
        </div>
    </div>
  )
}
