exports.list = (event, context, callback) => {
    callback(null, {
        statusCode: '200',
        body: 'It is list'
    });
};
