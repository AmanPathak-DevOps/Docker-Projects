const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json([
	{
		name: 'Bill',
		email: 'billy.gates@gates.com'
	},
	{
		name: 'Jeff',
		email: 'bezos.jeff@bezos.com'
	},
	{
		name: 'Mark',
		email: 'zuckerberg.mark@fb.com'
	}
]))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
