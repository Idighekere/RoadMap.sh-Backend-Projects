import express from "express"
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public/'))
app.set('view engine', 'ejs')

app.set('views', './views')

app.get('/', (req, res) => {
    res.redirect('length')
})


app.get("/length", (req, res) => {

    res.render('length', { result: null })


})

app.post('/length', (req, res) => {

    const { from, to, value } = req.body

    // console.log(req.body);


    const result = convertLength(parseFloat(value), from, to)
    console.log(result)
    res.render('length', { result, to })


})


app.get("/weight", (req, res) => {

    res.render('weight', { result: null })


})

app.post('/weight', (req, res) => {

    const { from, to, value } = req.body

    const result = convertWeight(parseFloat(value), from, to)
    console.log(result)
    res.render('weight', { result, to })


})


app.get("/temperature", (req, res) => {

    res.render('temperature', { result: null })


})

app.post('/temperature', (req, res) => {

    const { from, to, value } = req.body

    const result = convertTemperature(parseFloat(value), from, to)
    console.log(result)
    res.render('temperature', { result, to })


})

const convertLength = (value, from, to) => {
    if (from == to) {
        return value
    }

    //The conversion is relative to 1meteres
    const conversionRate = {
        m: 1,
        cm: 100,
        mm: 1000,
        km: 0.001,
        yd: 1.093613298,
        in: 39.3700874,
        ft: 3.280839895,
        mile: 6.213711922e-4
    }

    const fromValue = conversionRate[from]
    const toValue = conversionRate[to]

    return (value / fromValue) * toValue
}



const convertWeight = (value, from, to) => {

    if (from == to) {
        return value
    }
    //The conversion is relative to 1meteres
    const conversionRate = {
        g: 1,
        mg: 1000,
        kg: 0.001,
        oz: 0.03527396584,
        lb: 2.204622476e-3,
    }

    const fromValue = conversionRate[from]
    const toValue = conversionRate[to]

    return (value / fromValue) * toValue
}
const convertTemperature = (value, from, to) => {

    // if (from=='C'&&to=='K'){
    //     return value+273
    // }
    // if(from =='K'&&to=='C'){
    //     return value-273


    // }

    const fahrenheitToCelcius = (value - 32) * 5 / 9
    const celciusToFahrenheit = (value * 9 / 5) + 32
    const celciusToKelvin = value + 273.15
    const kelvinToCelcius = value - 273.15
    const fahrenheitToKelvin = fahrenheitToCelcius + 273.15
    const kelvinToFahrenheit = kelvinToCelcius * 9 / 5 + 32
    if (from == to) return value
    if (from == 'C') return to == 'F' ? celciusToFahrenheit : celciusToKelvin
    if (from == 'F') return to == 'C' ? fahrenheitToCelcius : fahrenheitToKelvin
    if (from == 'K') return to == 'C' ? kelvinToCelcius : kelvinToFahrenheit
}


app.listen(3000, () => console.log('Server listening at port 3000'))
