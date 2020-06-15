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

function whatToEat(value, halal, vegetarian){
  const menus = oddle.pageProps.menus
  let allItems = []

  allItems = menus.filter(menu => {
    if(halal){
      return menu.tagsName.includes(value) && menu.tagsName.includes("Halal")
    }
    if(vegetarian){
      return menu.tagsName.includes(value) && menu.tagsName.includes("Vegetarian")
    }
    return menu.tagsName.includes(value)
  })

  return allItems
}

function decideWhatToEat(value, halal, vegetarian){
  const random = randomIntFromInterval(0, 478);
  const whattoeat = menus[random]

  // if use array
  // const allwhattoeat = whatToEat(value, halal, vegetarian);
  // console.log(allwhattoeat);
  // const random = randomIntFromInterval(0, allwhattoeat.length);
  // const whattoeat = allwhattoeat[random]

  // console.log(halal);
  // console.log(vegetarian);
  // console.log(whattoeat.name)
  // console.log(value)
  // console.log(whattoeat.tagsName.includes(value))

  if(value){
    if(value == "I dunno"){
      return whattoeat
    } else {
      if(whattoeat.tagsName.includes(value)){
        if(halal == "true"){
          // console.log("Halal - 1")
          if(whattoeat.tagsName.includes("Halal")){
            // console.log("Halal - 2")
            return whattoeat
          } else {
            // console.log("Halal - 3")
            return decideWhatToEat(value, halal, vegetarian)
          }
        }
        if(vegetarian == "true"){
          // console.log("Vegs - 1")
          if(whattoeat.tagsName.includes("Vegetarian")){
            // console.log("Vegs - 2")
            return whattoeat
          } else {
            // console.log("Vegs - 3")
            return decideWhatToEat(value, halal, vegetarian)
          }
        }
        return whattoeat
      } else {
        return decideWhatToEat(value, halal, vegetarian)
      }
    }
  }
  return whattoeat
}

function details() {
  const router = useRouter()
  const { halal, vegetarian, id } = router.query
  const [slugId, setSlugId] = useState(null)
  const [menu, setMenu] = useState(null)
  useEffect(() => {
    setSlugId(id)
  }, [slugId])

  useEffect(() => {
    setMenu(decideWhatToEat(slugId, halal, vegetarian))
  }, [slugId]);

  return (
    <Layout>
      <div className="max-w-xs mx-auto">
        <div className="grid grid-cols-6 gap-4 pb-5">
          <div className="col-span-1">
            <Link href="/"><a><img className="pt-8" src="/back.svg"/></a></Link>
          </div>
          <div className="col-span-5">
            <img className="pl-3" src="/logo.svg"/>
          </div>
        </div>
        <h3 className="text-center pb-3 text-white">You have selected { slugId }</h3>
        <h2 className="text-4xl font-bold text-white pb-3 text-center">Can or not?</h2>
        { menu ? (<>
          <img className="imgFixedHeight rounded-full mx-auto border-white border-2" src={menu.cover[0].thumbnails.large.url} alt={menu.name} />
        <h3 className="text-center text-white text-3xl font-bold pt-3">{menu.name}</h3>
        <p className="text-center text-white">Min. order ${menu.minimumOrder} • Delivery ${menu.deliveryFee}</p>
        <p className="text-center text-white">{ menu.tagsName.split(",").map(tag => 
          tag.includes("Oddle") ? "" : <span className="text-xs mr-2 font-bold inline-block">• {tag}</span>
        ) }</p>
        <div className="grid grid-cols-2 gap-4 pt-5">
          <Button onClick={() => window.location = menu.link }><img src="/ic-check-green.svg"/> Ok can</Button>
          <Button onClick={() => {
            setMenu(decideWhatToEat(slugId, halal, vegetarian));
          }}><img src="/ic-close-red.svg"/> Cannot</Button>
        </div>
        </>) : <div></div>}

        <div className="pt-5 pb-10 text-center">
          <Link href="/about">
            <a className="text-white text-center">Who do this site one ah?</a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default details;
