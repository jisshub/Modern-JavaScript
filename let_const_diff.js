// let and const
// ----------------
// both r block scopped
// means it is accessible with in a block.
// for eg: it can be accessed with in a if statement
// or for loop



function discountPrices (prices, discount) {
    let discounted = []
  
    for (let i = 0; i < prices.length; i++) {
      let discountedPrice = prices[i] * (1 - discount)
      let finalPrice = Math.round(discountedPrice * 100) / 100
      discounted.push(finalPrice)
    }
  
    console.log(i) // 3
    console.log(discountedPrice) // 150
    console.log(finalPrice) // 150
  
    return discounted
  }
discountPrices([10,20,30], .7)


// above code shows reference error , since let can be accesses with in  a block ie. here it is svaaible inside the for loop



// to correct the code just i, discountprice and finalprice ouside the for loop not insdei the loop.
function discountPrices (prices, discount) {
    let discounted = []
  
    let i, discountPrices, finalPrice
    for (i = 0; i < prices.length; i++) {
      discountedPrice = prices[i] * (1 - discount)
      finalPrice = Math.round(discountedPrice * 100) / 100
      discounted.push(finalPrice)
    }
  
    console.log(i) // 3
    console.log(discountedPrice) // 150
    console.log(finalPrice) // 150
  
    return discounted
  }
discountPrices([10,20,30], .7)




function discountPrices (prices, discount) {
    let discounted = []
    let i
    for (i = 0; i < prices.length; i++) {
      const discountedPrice = prices[i] * (1 - discount)
      const finalPrice = Math.round(discountedPrice * 100) / 100
      discounted.push(finalPrice)
    }
  
    console.log(i) // 3
    console.log(discountedPrice) // 150
    console.log(finalPrice) // 150
  
    return discounted
  }
discountPrices([10,20,30], .7)

// it doesnt work since we increment i which is a constant. and in const v cant do reassignment.
// also causes other error since const can be accesses with in  a block ie. here it is only svaaible inside the for loop



// so not use const, and use let
// and delare all outside the loop 
function discountPrices (prices, discount) {
    let discounted = []
    let i, discountPrices, finalPrice
    for (i = 0; i < prices.length; i++) {
      discountedPrice = prices[i] * (1 - discount)
      finalPrice = Math.round(discountedPrice * 100) / 100
      discounted.push(finalPrice)
    }
  
    console.log(i) // 3
    console.log(discountedPrice) // 150
    console.log(finalPrice) // 150
  
    return discounted
  }
discountPrices([10,20,30], .7)