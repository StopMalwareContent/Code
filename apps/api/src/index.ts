import express from 'express';
import dotenv from 'dotenv';
import { H } from '@highlight-run/node';

const env = dotenv.config().parsed as unknown as Env

if (!env) throw new Error(`Error parsing .env file: ${dotenv.config().error!.code ?? dotenv.config().error?.message}`)

const highlightConfig = {
    projectID: env.HIGHLIGHT_PROJECT_ID!
}

H.init(highlightConfig)

const app = express()

app.get("/", (req, res) => {
  res.json({ test: "hello world" })
})

app.listen(3000, () => {
  console.log("Listening on port 3000")
})

app.listen(env.PORT ?? 3000, env.HOST ?? '127.0.0.1', (error?: Error) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    };
    console.log('Listening on port 3000');
});
