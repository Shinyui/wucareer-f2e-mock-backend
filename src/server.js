const http = require("http");
const app = require("./app");

// chagne the port number if needed
const PORT = 8000;

const server = http.createServer(app);

const startServer = async () => {
  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
};

startServer();
