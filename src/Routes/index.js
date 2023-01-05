
import Cart from "../Pages/Cart"
import Home  from "../Pages/Home"
import Product from "../Pages/Product"


const publicRoutes=[
    { path: '/', component: Home },
    { path: '/cart', component: Cart },
    { path: '/product', component: Product }
]

export {
    publicRoutes
}