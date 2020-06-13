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
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-6">
          <img className="text-center mx-auto" src="/logo.svg"/>
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
      <Button value="Anything" onClick={handleClick}>
        I don't know
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
      <Link href="/about">
        <a>Who do this site one ah?</a>
      </Link>
    </div>
  </Layout>
  )
}

