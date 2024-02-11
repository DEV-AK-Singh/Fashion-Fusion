import React from 'react'
import CategoryCard from './CategoryCard'

export default function HomeContent() {
  return (
    <div>
        <h1 className='cs-text-primary text-center my-lg-5 my-2 display-5'>Shop By Category</h1>
        <div className='container-fluid px-lg-5 row p-0 m-0 d-flex justify-content-center'>
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
