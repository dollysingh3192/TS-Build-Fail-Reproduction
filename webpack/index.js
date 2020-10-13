let finalConfig;

if (process.env.NODE_ENV === 'development') {
    const devConfig = require('./dev');
    finalConfig = devConfig;
} else {
    const prodConfig = require('./prod');
    finalConfig = prodConfig;
}

module.exports = finalConfig;
