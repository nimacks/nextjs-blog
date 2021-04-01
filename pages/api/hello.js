export default (req, res) => {
    console.log("the request...");
    console.log("this is all ran on the server (in a lambda)");

    const got = require('got');
    try {
        console.log("hit: https://6obli1j4bb.execute-api.us-west-2.amazonaws.com/Prod/hello");

        const response = await got('https://6obli1j4bb.execute-api.us-west-2.amazonaws.com/Prod/hello', { json: true });
        console.log("got restp" + JSON.stringify(response));
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world: ' + JSON.stringify(response),
                // location: ret.data.trim()
            })
        }
      } catch (error) {
        console.log(error.response.body);
        return error;
      }
}