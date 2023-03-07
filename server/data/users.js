import bcrypt from 'bcrypt';

const users = [
    {
        name: 'Admin User',
        email: 'admin@getnada.com',
        phoneNumber: '0458126352',
        password: bcrypt.hashSync('helloduck', 10),
        isAdmin: true
    },
    {
        name: 'Maya Murray',
        email: 'maya@getnada.com',
        phoneNumber: '0406256321',
        password: bcrypt.hashSync('helloduck', 10),
    },
    {
        name: 'Groucho Marx',
        email: 'groucho@getnada.com',
        phoneNumber: '0483215635',
        password: bcrypt.hashSync('helloduck', 10),
    },
    {
        name: 'Gummo Marx',
        email: 'gummo@getnada.com',
        phoneNumber: '0402586963',
        password: bcrypt.hashSync('helloduck', 10),
    },
    {
        name: 'Harpo Marx',
        email: 'harpo@getnada.com',
        phoneNumber: '0452963456',
        password: bcrypt.hashSync('helloduck', 10),
    },
    {
        name: 'Chico Marx',
        email: 'chico@getnada.com',
        phoneNumber: '0406896452',
        password: bcrypt.hashSync('helloduck', 10),
    }
];

export default users;
