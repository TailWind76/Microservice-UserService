// user-service.js
const Seneca = require('seneca')();
const PORT = 3001;

Seneca.add({ role: 'user', cmd: 'getUser' }, (msg, respond) => {
  const userId = msg.userId;
  // Code to fetch user data from the database based on userId

  const user = {
    id: userId,
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  respond(null, { success: true, data: user });
});

Seneca.listen({ type: 'tcp', port: PORT });
console.log(`User Service is listening on port ${PORT}`);
