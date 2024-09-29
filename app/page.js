import Image from 'next/image'
import Header from '@/components/Header'
import CategoriesSection from '@/components/categoriesSection'
import FoodSection from '@/components/FoodSection'
import TopRestaurants from '@/components/Restaurants'



export default function Home() {
  return (
    <>
    <Header/>
      <CategoriesSection  limitOnHomepage={true}/>
      <FoodSection limitDisplay={true}/>
      <TopRestaurants/>
    </>
  )
}
