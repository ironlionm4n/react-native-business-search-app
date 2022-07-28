const filterResultsByPrice = (restaurants, price) => {
    return restaurants.filter(restaurant => {
        return restaurant.price === price
    })
}

export default filterResultsByPrice