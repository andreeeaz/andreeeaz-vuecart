const app = new Vue({
    el: '#app',
    data: {
        image: 'https://images.pexels.com/photos/251454/pexels-photo-251454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        product: 'Socks',
        description: 'This is a pair of warm cozy socks',
        inStock: true,
        details: 
        [
            "-80% Cotton",
            "-20% Polyester",
            "-Gender Neutral"
        ],
        cart: 0,
        variants:[
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: 'https://media.mysockfactory.ch/1313-thickbox_default/plain-green-socks.jpg'
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: 'https://images-na.ssl-images-amazon.com/images/I/71898eJP6eL._AC_UL1024_.jpg'

            }
        ],
        sizes:['S', 'M', 'L', 'XL', 'XXL']
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        removeFromCart(){
            this.cart -= 1
        },
        clearCart(){
            this.cart = 0
        },
        updateProduct(variantImage){
            this.image = variantImage
        }
    }
})