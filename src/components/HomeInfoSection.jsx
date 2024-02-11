import React from 'react'
import HomeInfo from './HomeInfo'
import offerImage from '../assets/offer.jpg'

export default function HomeInfoSection() {
  return (
    <div className='row py-5 m-0'>
        <div className='col-lg-7'>
            <HomeInfo align={'start'} title={"Welcome to Fashion Fusion"} desc={"At Fashion Fusion, we believe that style is more than just what you wear; it's a statement, an expression of individuality, and a reflection of the latest trends. Our curated collection of clothing brings together the best of fashion and trend, offering you a one-stop destination for all your style needs."}/>
            <HomeInfo align={'start'} title={"Discover the Latest Trends"} desc={"Explore our diverse range of clothing collections, meticulously curated to keep you ahead of the curve. From casual chic to elegant evening wear, we have something for every occasion and every taste. Browse through our handpicked selection of apparel and accessories to find the perfect pieces that speak to your unique style."}/>
            <HomeInfo align={'start'} title={"Shop with Confidence"} desc={"With Fashion Fusion, shopping for fashion has never been easier or more enjoyable. Our user-friendly interface and intuitive navigation make it simple to browse, select, and purchase your favorite items with just a few clicks. Plus, with secure payment options and hassle-free returns, you can shop with confidence knowing that your satisfaction is our priority."}/>
            <HomeInfo align={'start'} title={"Stay Inspired"} desc={"Stay up-to-date with the latest fashion trends and style tips by following our blog and social media channels. From trend forecasts to styling advice, our fashion experts are here to help you elevate your wardrobe and express your individuality with confidence."}/>
            <HomeInfo title={'Join the Fashion Fusion Community'} align={"start"} desc={"Join our community of fashion enthusiasts and trendsetters to share your style inspiration, connect with like-minded individuals, and be the first to know about exclusive offers and promotions. Sign up for our newsletter to receive updates straight to your inbox and unlock special discounts on your favorite fashion finds."}/>
        </div>
        <div className='col-lg-5 d-flex flex-column'>
            <img src={offerImage} className='w-100 mb-5'/><br />
            <HomeInfo title={'Experience Fashion Fusion Today'} align={"end"} desc={"Whether you're seeking timeless classics or the hottest trends of the season, Fashion Fusion is your ultimate destination for all things fashion. Start exploring our collection now and discover the perfect pieces to elevate your style and make a statement wherever you go."}/>
        </div>
    </div>
  )
}
