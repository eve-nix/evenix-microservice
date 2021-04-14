exports.getByIdHandler = async (event) => {
    if (httpMethod !== 'GET') {
        throw new Error(`getMethod only accept GET method, you tried: ${httpMethod}`);
    }

    console.log('received:', JSON.stringify(event));

    return {
        statusCode: 200,
        body: JSON.stringify({ url }),
    };
};
