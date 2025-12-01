const { PrismaClient } = require('@prisma/client');

// Singleton pattern to ensure Prisma Client is only instantiated once
const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

const getAllUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
}

const createUser = async (user) => {
    const newUser = await prisma.user.create({ data: user });
    return newUser;
}

module.exports = {
    getAllUsers,
    createUser
}