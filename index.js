const server = require('./server.js');

<<<<<<< HEAD
const PORT = process.env.PORT || 4005;
=======
const PORT = process.env.PORT || 4000;
>>>>>>> 188f878e5f336d2aff55c2859415ece0cc9e1ac7

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});