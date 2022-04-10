//modules
import express from 'express';
import cors from 'cors'
import helmet from 'helmet'

import apiErrorHandler from './src/utils/apiErrorHandler';

//routes
import contactsRouter from './src/routes/contactsRouter'
import userRouter from './src/routes/userRouter'

//app
const app = express()

app.use(helmet())
app.use(cors({
    origin: [process.env.CLIENT_ORIGIN_URL, process.env.AUTH0_DOMAIN]
}))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))


app.use('/user', userRouter)
app.use('/contacts', contactsRouter)


app.use(apiErrorHandler)

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
  })

app.listen(process.env.SERVER_PORT || 3000)




