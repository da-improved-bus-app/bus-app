"use client"

import dynamic from 'next/dynamic'
const OpenStreetMap = dynamic(() => import('./OpenStreetMap'), {
  ssr: false,
})
const Home = () => {
  return (
    <>
      <h1 className='text-center'>dabus3.0</h1>
      <OpenStreetMap />
    </>
  )
}
export default Home