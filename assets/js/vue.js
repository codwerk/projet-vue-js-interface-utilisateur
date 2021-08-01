const products = [
  {
    id:1,
    titre:'Nike Air Jordan 1',
    description: 'Nike Air Jordan Footwear basketball sneakers.',
    price: 99,
    img: './assets/img/img3.png'
  },
  {
    id:2,
    titre:'Nike Air Jordan 2',
    description: 'Nike Air Jordan Footwear basketball sneakers.',
    price: 40,
    img:'./assets/img/img2.png'
  },
  {
    id:3,
    titre:'Nike Air Jordan 2',
    description: 'Nike Air Jordan Footwear basketball sneakers.',
    price: 60,
    img: './assets/img/img1.png'
  },
  {
    id:4,
    titre:'Nike Air Jordan 4',
    description: 'Nike Air Jordan Footwear basketball sneakers.',
    price: 60,
    img: './assets/img/img4.png'
  },
  {
    id:5,
    titre:'Nike Air Jordan 5',
    description: 'Nike Air Jordan Footwear basketball sneakers.',
    price: 60,
    img: './assets/img/img6.png'
  }   
  ]

const Home = {
  template: '#home',
  name: 'Home',
  data:() => {
    return {
      products
    }
  }
}

const UserSettings = {
  template: '<h1>User Settings</h1>',
  name: 'UserSettings'
}

const WishList = {
  template: '<h1>Wish List</h1>',
  name: 'WishList'
}

const ShoppingCart = {
  template: '<h1>Shopping Cart</h1>',
  name: 'ShoppingCart'
}

// router

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/user-settings', component: UserSettings },
    { path: '/wish-list', component: WishList },
    { path: '/shopping-cart', component: ShoppingCart }
  ]
})

const vue = new Vue({
  router
}).$mount('#app');