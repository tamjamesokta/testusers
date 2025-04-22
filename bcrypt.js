const bcrypt = require('bcryptjs'); // You can install bcryptjs via npm
const fs = require('fs');

// Example user data
const users = [
  {
    email: 'user1@example.com',
    password: 'user1password',
    connection: 'Username-Password-Authentication',
    email_verified: true,
    given_name: 'John',
    family_name: 'Doe',
    user_metadata: {
      company: 'Company A'
    }
  },
  {
    email: 'user2@example.com',
    password: 'user2password',
    connection: 'Username-Password-Authentication',
    email_verified: false,
    given_name: 'Jane',
    family_name: 'Smith',
    user_metadata: {
      company: 'Company B'
    }
  }
];

// Function to hash passwords and write JSON file
async function hashPasswords() {
  for (const user of users) {
    // Hash each password using bcrypt
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
  }

  // Write the updated users data with hashed passwords to a JSON file
  fs.writeFileSync('users.json', JSON.stringify({ users }, null, 2));
  console.log('Users with hashed passwords written to users.json');
}

// Run the function
hashPasswords();
