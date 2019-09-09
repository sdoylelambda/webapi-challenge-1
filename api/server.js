const router = express.Router();

const actionRouter = require('./routers/actionRouter');
const projectRouter = require('./routers/projectRouter');

express.json()

server.get('/', (req, res) => {
    res.status(200).json({yo: 'its up'})
});