import express from 'express'

const app = express()

// const blogs = [
//     { id: 1, title: 'Blog 1', description: 'Description 1' },
//     { id: 2, title: 'Blog2', description: 'Description 2' },
//     { id: 3, title: 'Blog3', description: 'Description 3' },
// ]

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000')
})
