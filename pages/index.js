import Layout from '../components/Layout'
import Button from '../components/Button'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'

export default function index() {
  const menus = ["Western", "Chinese", "Indian", "Malay", "Japanese", "Desserts", "Fast Food", "Asian"]
  const [vegetarian, setVegetarian] = useState(null)
  const [halal, setHalal] = useState(null)
  const router = useRouter()
  const handleClick = (e) => {
    const value = e.currentTarget.getAttribute('value');
    router.push({
      pathname: `/${value}`,
      query: {
        halal: halal ? true : false,
        vegetarian: vegetarian ? true : false
      }
    });
  }
  const handleChange = (e) => {
    if(e.currentTarget.checked && (e.currentTarget.getAttribute('value') === "vegetarian")){
      setVegetarian("vegetarian");
    } else if(!e.currentTarget.checked && (e.currentTarget.getAttribute('value') === "vegetarian")){
      setVegetarian(null);
    }
    if(e.currentTarget.checked && (e.currentTarget.getAttribute('value') === "halal")){
      setHalal("halal");
    } else if(!e.currentTarget.checked && (e.currentTarget.getAttribute('value') === "halal")){
      setHalal(null);
    }
  }
  return (
  <Layout>
    <div className="max-w-xs mx-auto">
      <div className="grid grid-cols-6 gap-4 pb-5">
        <div className="col-span-1">
          &nbsp;
        </div>
        <div className="col-span-4">
          <img className="pl-3" src="/logo.svg"/>
        </div>
        <div className="col-span-1">
          <a href="https://forms.gle/MsS6mYu2z8n8ciG37" target="_blank"><img className="pt-8" src="/feedback.svg"/></a>
        </div>
      </div>
      <h2 className="text-3xl font-bold text-white pb-5 text-center">What you feel like eating?</h2>
      <div className="grid grid-cols-2 gap-5">
        { menus.map((menu, index) => (
          <Button key={index} value={menu} onClick={handleClick}>
            { menu }
          </Button>
        ))}
      </div>
      <br/>
      <Button value="I dunno" onClick={handleClick}>
        I dunno
      </Button>
      <br/>
      <div className="grid grid-cols-2 gap-5 pt-10">
        <div className="flex items-center">
          <input value="halal" id="halal" type="checkbox" className="form-checkbox h-5 w-5 text-black transition duration-150 ease-in-out" onChange={handleChange}/>
          <label htmlFor="halal" className="ml-2 block leading-5 text-white">
            I makan halal
          </label>
        </div>
        <div className="flex items-center">
          <input value="vegetarian" id="vegetarian" type="checkbox" className="form-checkbox h-5 w-5 text-black transition duration-150 ease-in-out" onChange={handleChange}/>
          <label htmlFor="vegetarian" className="ml-2 block leading-5 text-white">
            I am vegetarian
          </label>
        </div>
      </div>
      <div className="pt-5 pb-10 text-center">
        <Link href="/about">
          <a className="text-white text-center">Who do this site one ah?</a>
        </Link>
      </div>
    </div>
  </Layout>
  )
}

