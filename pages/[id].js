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
  }, [slugId])
  useEffect(() => {
    setMenu(decideWhatToEat(slugId))
  }, [slugId]);

  return (
    <Layout>
      <div className="max-w-xs mx-auto">
        <div className="grid grid-cols-6 gap-4 pb-5">
          <div className="col-span-1">
            <Link href="/"><a><img className="pt-8" src="/back.svg"/></a></Link>
          </div>
          <div className="col-span-5">
            <img className="mx-auto" src="/logo.svg"/>
          </div>
        </div>
        <h3 className="text-center pb-3 text-white">You have selected { slugId }</h3>
        <h2 className="text-4xl font-bold text-white pb-3 text-center">Can or not?</h2>
        { menu ? (<>
          <img className="imgFixedHeight rounded-full mx-auto border-white border-2" src={menu.cover[0].thumbnails.large.url} alt={menu.name} />
        <h3 className="text-center text-white text-3xl font-bold pt-3">{menu.name}</h3>
        <p className="text-center text-white">Min. Order ${menu.minimumOrder}. Delivery ${menu.deliveryFee}</p>
        <div className="grid grid-cols-2 gap-4 pt-5">
          <Button onClick={() => window.location = menu.link }>✅ Ok Can</Button>
          <Button onClick={() => {
            setMenu(decideWhatToEat(slugId));
          }}>❌ Cannot</Button>
        </div>
        </>) : <div></div>}
      </div>
    </Layout>
  )
}

export default details;
