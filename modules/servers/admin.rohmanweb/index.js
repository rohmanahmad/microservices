'use strict'

const Express = use('Express')
const Session = use('session')
const Cors = use('Cors')
const BodyParser = use('BodyParser')
const Http = use('Http')
const Compression = use('Compression')
const app = Express()
const server = Http.createServer(app)
const utils = use('Utils.Helper')
const HttpResponse = use('Http.Response')
const ErrorHandler = use('ErrorHandler')
const Env = useStatic('Env')

const {port} = require('./admin.conf')
const Routes = require('./admin.routes')

const prefix = '/rohmanwebid/admin'
const publicPath = basePath('public')
// set pug as default engine
app.use(Express.static('public'))
app.set('views', publicPath)
app.set('view engine', 'pug')

// setup session
app.use(Session({
    secret: Env.API_KEY,
    resave: false,
    saveUninitialized: true
}))

// set group routes
app.use(function (request, response, next) {
    utils.debugme(`accessing : ${request.originalUrl}`)
    request.router_group = 'shares'
    next()
})
// enable trust-proxy
app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal'])
// enable compression
app.use(Compression())
// enable cors in all routes
app.use(Cors())
// parse various different custom JSON types as JSON
app.use(BodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(BodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse application/x-www-form-urlencoded
app.use(BodyParser.urlencoded({ extended: true }))

// parse an HTML body into a string
app.use(BodyParser.text({ type: 'text/html' }))

app.use(HttpResponse)

app.use(ErrorHandler)
// registering user's routers
Routes.register(app, prefix)

module.exports = {
    start: function (newport) {
        const workerId = this.workerId ? ' |-- workerID: ' + this.workerId : false
        newport = newport || port
        server.listen(newport)
        utils.log('admin.rohmanwebid server listen on port: ' + newport)
        if (workerId) utils.log(workerId)
    },
    cluster: function (worker) {
        this.workerId = worker.id
        return this
    }
}