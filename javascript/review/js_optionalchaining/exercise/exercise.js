const order = {
  customer: {
    address: {
      //city: "Paris"
    }
  }
}

if (!order.customer?.address?.city) {
  console.log('City is required');
}