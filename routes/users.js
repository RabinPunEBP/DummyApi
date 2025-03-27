const userRoutes = (app, fs) => {

    // variables
    const dataPath = './data/users.json';
    const portfolioPath = './data/portfolio.json';
    const chartdataPath = './data/chartdata.json';
    const assetsPath = './data/assets.json';

    // READ
    app.get('/userPortfolio', (req, res) => {
        fs.readFile(portfolioPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });

    app.get('/chartData', (req, res) => {
        fs.readFile(chartdataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });

    app.get('/assets', (req, res) => {
        fs.readFile(assetsPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });
    // READ
    app.get('/user', (req, res) => {
        let id = req.query.id;
        console.log(id);
        // console.log(req);
        let validId = id < 3 ? id : 0;
        fs.readFile(`./data/user${validId}.json`, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data));
        });
    });
    // READ
    app.get('/recommendations', (req, res) => {
        fs.readFile('./data/recommendations.json', 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data));
        });
    });
    // READ
    app.get('/advertisements', (req, res) => {
        fs.readFile('./data/advertisements.json', 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });
    app.get('/minigames', (req, res) => {
        fs.readFile('./data/minigames.json', 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data));
        });
    });
};

module.exports = userRoutes;