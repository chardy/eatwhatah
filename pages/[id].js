import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../components/Layout'
import oddle from '../data/oddle'
import Button from '../components/Button'

const menus = oddle.pageProps.menus

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function decideWhatToEat(value){
  const random = randomIntFromInterval(0, 478);
  const whattoeat = menus[random]
  // console.log(whattoeat.name)
  // console.log(value)
  // console.log(whattoeat.tagsName.includes(value))
  if(value){
    if(value == "Anything"){
      return whattoeat
    } else {
      if(whattoeat.tagsName.includes(value)){
        return whattoeat
      } else {
        decideWhatToEat(value)
      }
    }
  }
  return whattoeat
}

function details() {
  const router = useRouter()
  const [slugId, setSlugId] = useState(null)
  const [menu, setMenu] = useState(null)
  useEffect(() => {
    setSlugId(router.query.id)
  }, [])
  useEffect(() => {
    const whattoeat = decideWhatToEat(slugId)
    setMenu(whattoeat)
  }, []);

  return (
    <Layout>
      <div className="max-w-xs mx-auto">
        <div className="grid grid-cols-6 gap-4 pt-20 pb-10">
          <div className="col-span-1">
            <Link href="/"><a className="absolute center-0 left-5"><img src="/back.svg"/></a></Link>
          </div>
          <div className="col-span-5">
            <h1 className="relative text-5xl font-bold text-white leading-8">
              eat what ah?
            </h1>
          </div>
        </div>
        <h3 className="text-center pb-5 text-white">You have selected {slugId}</h3>
        <h2 className="text-5xl font-bold text-white pb-5 text-center">Can or not?</h2>
        { menu ? (<>
          <img className="imgFixedHeight rounded-full mx-auto border-white border-2" src={menu.cover[0].thumbnails.large.url} alt={menu.name} />
        <h3 className="text-center text-white text-3xl font-bold pt-5">{menu.name}</h3>
        <p className="text-center text-white">Min. Order ${menu.minimumOrder}. Delivery ${menu.deliveryFee}</p>
        <div className="grid grid-cols-2 gap-4 pt-10">
          <Button onClick={() => window.location = menu.link }>✅ Ok Can</Button>
          <Button onClick={() => router.push('/')}>❌ Cannot</Button>
        </div>
        </>) : <div>Loading ...</div>}
      </div>
    </Layout>
  )
}

export default details;
