import { createServer } from 'lwr';

createServer()
    .listen(({ port, serverMode }) => {
        // Server started
        console.log(`LWR application running on port ${port} in ${serverMode} mode\n`);
    })
    .catch((e) => {
        // Error starting server
        console.error(`ERROR: could not start server\n${e}`);
        process.exit(1);
    });