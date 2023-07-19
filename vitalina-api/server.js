import express from 'express'
import cors from 'cors'


const app = express();
app.use(express.json());
app.use(cors())


let database = {
	products: [
		{
			id: '1',
			name: 'Earthy Jasper',
			type: 'bracelette',
			picture: 'https://i.pinimg.com/564x/6d/06/16/6d0616ae6200700f26027f6d8dbda8fc.jpg',
			price: 30,
			quantity: '10',
			likes: '142',
			bio: 'Discover our stunning collection of handmade accessories, crafted with natural stones and organic materials. Each piece is a unique fusion of natures beauty and artistic craftsmanship. From captivating necklaces to elegant bracelets and enchanting earrings, our accessories radiate elegance and carry the positive energy of the stones they are made from. Embrace the beauty of nature and express your individuality with our exquisite homemade accessories'
		},
		{
			id: '2',
			name: 'Crystal Quartz Delight',
			type: 'bracelette',
			picture: 'https://i.pinimg.com/564x/ee/a8/df/eea8dffa8e9242f384e709f2f8045eca.jpg',
			price: 50,
			quantity: '6',
			likes: '123'
		},
		{
			id: '3',
			name: 'Amethyst Serenity',
			type: 'necklace',
			picture: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fc7%2F2c%2F48%2Fc72c480853c11c0fc4c08789654dd732.jpg&f=1&nofb=1&ipt=2c91bcb7a02647182bff2ba093fa188626654ca8fa42c0776d1ce3e58e111e46&ipo=images',
			price: 15,
			quantity: '0',
			likes: '441'
		},
		{
			id: '4',
			name: 'Rose Quartz Elegance',
			type: 'necklace',
			picture: 'https://i.pinimg.com/564x/60/c0/e6/60c0e6525063fabd5fb78f25be701bd4.jpg',
			price: 12,
			quantity: '23',
			likes: '23'
		},
	]
}

app.get('/', (req, res) => {
	res.json(database.products)
})

app.get('/test2', (req, res) => {
	res.json('aboba')
} )

app.post('/cart', (req, res) => {
	console.log('You have got a new order of: ' + req.body.cart)
	console.log('With total price of: ' + req.body.total)
	res.json('Sucessfully placed an order, email send to the owner')
})

app.post('/like', (req, res) => {
	const { name, id } = req.body
	database.products[id-1].likes ++
	console.log(name, 'just recieved a like!')
	res.json('recieved a like')
})


app.listen(5000, () => {
	console.log('server accesories API is running of port 5000')
})
