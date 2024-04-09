import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const RestaurantDetails = () => {

  const restaurantId = useParams()
  
  const restaurants = [
    {
      id: 1,
      name: "Taste of India",
      cuisine: "Indian",
      rating: 4.7,
      menu: [
        {dish: "Butter Chicken", price: 12},
        {dish: "Lamb Biriyani", price: 16},
        {dish: "Garlic Naan", price: 7}
      ],
      isOpen: true,
      description: "Enjoy authentic Indian cuisine at Taste of India. Explore a variety of dellcious dishes from different regions of India.",
      location: "12/10, Urban Street, Brokeback Mountain"
    },
    {
      id: 2,
        name: "Pizza Paradise",
        cuisine: "Italian",
        rating: 4.5,
        menu: [
          {dish: "Margherita Pizza", price: 12},
          {dish: "Pizza Napoletana", price: 15},
          {dish: "Tiramisu", price: 8}
        ],
        isOpen: true,
        description:  "Indulge in mouth-watering pizzas at Pizza Paradise. With a variety of toppings and crusts. It's a pizza lover's dream.",
        location: "22nd Street, Brooklyn, New York City"
    },
    {
      id: 3,
        name: "Sushi Saito",
        cuisine: "Japanese",
        rating: 4.8,
        menu: [
          {dish: "Uni Sushi", price: 8},
          {dish: "Premium Tuna Sushi", price: 15},
          {dish: "Dorayaki", price: 6}
        ],
        isOpen: true,
        description:  "Familiar sushi & other raw fish dishes are served at this stylish restaurant with a warm vibe.",
        location: "Minato City, Roppongi, Tokyo"
    },
    {
        id: 4,
          name: "Black's BBQ",
          cuisine: "American",
          rating: 4.7,
          menu: [
            {dish: "Brisket", price: 29.99},
            {dish: "Pork Spare Ribs", price: 20.99},
            {dish: "Original Sausage", price: 4.25},
            {dish: "Mac & Cheese", price: 2.99},
          ],
          isOpen: false,
          description:  "WHERE LEGENDARY TEXAS BBQ IS MADE.",
          location: "215 N Main Street, Lockhart, Texas"
    }
  ]

  const restaurantData = restaurants.find(restaurant => restaurant.id == restaurantId.restaurantId)
  
  return (
    <>
    <Header/>
    <main className='container py-4'>
      <h3 className='display-3 fw-normal'>{restaurantData.name}</h3>
      <p className='fs-5 fw-normal'>Cuisine: {restaurantData.cuisine}</p>
      <p className='fs-5 fw-normal'>Location: {restaurantData.location}</p>
      <p className='fs-5 fw-normal'>Rating: {restaurantData.rating}</p>
      <p className='fs-5 fw-normal'>{restaurantData.description}</p>
      <hr/>
      <h5 className='display-5 fw-normal'>Menu</h5>
      <div className='row pt-3'>
        {restaurantData.menu.map(dish => {
      return (
        <div key={dish.dish} className='col-4 mt-3'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>{dish.dish}</h5>
              <p>Price: ${dish.price}</p>
            </div>
          </div>
        </div>
      )
        })}
      </div>
    </main>
    <Footer/>
    </>
  )
}

export default RestaurantDetails;