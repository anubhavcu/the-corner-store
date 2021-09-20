import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Anubhav',
    email: 'anubhav@admin.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'Johnnie White',
    email: 'Teagan34@hotmail.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: false,
  },
  {
    name: 'Cesar Schumm',
    email: 'Wava_Kunze@gmail.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: false,
  },
  {
    name: 'Elisa Hettinger',
    email: 'Mariane_Wintheiser72@hotmail.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: false,
  },
];

export default users;
