const userRoutes = (app, fs) => {

    // variables
    const dataPath = './data/users.json';

    // READ
    app.get('/users', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });
    // READ
    app.get('/user', (req, res) => {
        fs.readFile('./data/user.json', 'utf8', (err, data) => {
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
};

module.exports = userRoutes;