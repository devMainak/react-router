// generating & displaying restaurants cards
const RestaurantCards = ({restaurants}) => {
  return (
    <div>
      {restaurants.map(restaurant => {
      return (
        <div key={restaurant.id} className="card d-flex flex-row mb-3">
           <img className="card-image img-fluid rounded" src={restaurant.img.src} width="30%"/>
          <div className="card-body">
             <h5>{restaurant.name}</h5>
             <p className="card-text">{restaurant.description}</p>
            <p className="text-secondary card-text">Rating: {restaurant.rating} | {restaurant.isOpen ? "Open Now" : "Closed"}</p>
          </div>
        </div>
      )
      })}
    </div>
  )
}

export default function Restaurants(){

  const restaurants = [
    {
      id: 1,
      name: "Taste of India",
      rating: 4.7,
      img: {
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Taste of India"
      },
      isOpen: true,
      description: "Enjoy authentic Indian cuisine at Taste of India. Explore a variety of dellcious dishes from different regions of India."
    },
    {
      id: 2,
      name: "Pizza Paradise",
      rating: 4.5,
      img: {
        src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
        alt: "Pizza Paradise"
      },
      isOpen: true,
      description: "Indulge in mouth-watering pizzas at Pizza Paradise. With a variety of toppings and crusts. It's a pizza lover's dream."
    }
  ]
  
  return (
    <main className="container py-4">
      <h2 className="display-2 fw-normal">Restaurants</h2>
      <RestaurantCards restaurants={restaurants}/>
    </main>
  )
}