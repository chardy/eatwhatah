import Layout from '../components/Layout'
import Button from '../components/Button'
import { useRouter } from 'next/router'
export default function index() {
  const menus = ["Western", "Chinese", "Indian", "Malay", "Japanese", "Desserts", "Fast Food", "Asian"]
  const router = useRouter()
  const handleClick = (e) => {
    const value = e.currentTarget.getAttribute('value');
    router.push(`/${value}`);
  }
  return (
  <Layout>
    <div className="max-w-xs mx-auto">
      <h1 className="text-5xl font-bold text-white pt-20 pb-10 text-center">eat what ah?</h1>
      <h2 className="text-5xl font-bold text-white pb-20 text-center">What you feel like eating?</h2>
      <div className="grid grid-cols-2 gap-4">
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
    </div>
  </Layout>
  )
}

