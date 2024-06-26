import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'

const Restaurants = ({restaurants}) => {
  const restaurantList = restaurants.map(restaurant => {
    return (
      <div key={restaurant.id} className='mb-4'>
        <img src={restaurant.img.src} alt={restaurant.img.name} className='img-fliud rounded w-100'/>
        <h6 className='display-6 fw-normal py-2'>{restaurant.name}</h6>
        <p>{restaurant.cuisine} | Rating: {restaurant.rating}</p>
        <p className='mt-3'>{restaurant.location}</p>
          
      </div>
    )
  })

  return (
    <div>
      {restaurantList}
    </div>
  )
}

export default function App() {

  const restaurants = [
    {
      id: 1,
      name: "Taste of Italy",
      cuisine: "Italian",
      img: {
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
        alt: "Taste of Italy"
      },
      rating: 4.5,
      location: "123 Main Street, Anytown, USA"
    },
    {
      id: 2,
      name: "Spice Village",
      cuisine: "Indian",
      img: {
        src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
        alt: "Spice Village"
      },
      rating: 4.3,
      location: "456 Elm Street, Anytown, USA"
    }
  ]
  
  return (
    <>
    <Header/>
    <main className='container py-4'>
      <h2 className='display-2 fw-normal'>Featured Restaurants</h2>
      <Restaurants restaurants={restaurants}/>
    </main>
      <Footer/>
    </>
  )
}
