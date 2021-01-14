import { Amplify, API, Auth, withSSRContext } from "aws-amplify";
import awsExports from "../../src/aws-exports";
// import { createPost } from "../src/graphql/mutations";
import { listTodos } from "../../src/graphql/queries";
Amplify.configure({ ...awsExports, ssr: true });

export default async (req, res) => {
    console.log("the request...");
    console.log("this is all ran on the server (in a lambdaaaaaaaaaaa)");

    console.log(req);


    const SSR = withSSRContext({ req });
    const response = await SSR.API.graphql({ query: listTodos });
  
    res.status(200).json({ text: 'Hello' + JSON.stringify(response) });
}
