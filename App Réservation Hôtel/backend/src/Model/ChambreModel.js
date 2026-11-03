const prisma = require('../prisma');

const findAll = () => prisma.chambre.findMany();

const findById = (id) => prisma.chambre.findUnique({ where: { id } });

const create = (data) => prisma.chambre.create({ data });

module.exports = { findAll, findById, create };