const replace = require('replace-in-file');
const options = {
    //you may need to modify the file address to suite your project
    files: './build/_next/static/css/*.css',
    from: ['/fonts/CoFoSans/CoFoSans-Regular.woff2', '/fonts/CoFoSans/CoFoSans-Medium.woff2'],
    to: ['../../../fonts/CoFoSans/CoFoSans-Regular.woff2', '../../../fonts/CoFoSans/CoFoSans-Medium.woff2'],
};
(async function () {
    try {
        const results = await replace(options);
        console.log('Replacement results:', results);
    } catch (error) {
        console.error('Error occurred:', error);
    }
})();