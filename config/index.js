module.exports = {
    development: {
        DatabaseConfig: {
            port: 27017,
            host: 'mongodb',
            name: 'kevin_poll',
            user: 'root',
            pass: 'root'
        },
        EnvConfig: {
            port: 5000
        }
    },
    production: {
        DatabaseConfig: {
            port: 29017,
            host: '::mongo host::',
            name: '::collection name::',
            user: '::db username::',
            pass: '::db password::'
        },
        EnvConfig: {
            port: 80
        }
    }
};