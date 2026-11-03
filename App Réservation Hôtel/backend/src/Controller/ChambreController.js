const Chambre = require('../models/chambre.model');

const getAll = async (req, res) => {
  try {
    const chambres = await Chambre.findAll();
    res.json(chambres);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

const getById = async (req, res) => {
  try {
    const chambre = await Chambre.findById(Number(req.params.id));
    if (!chambre) {
      return res.status(404).json({ message: 'Chambre introuvable' });
    }
    res.json(chambre);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

const create = async (req, res) => {
  try {
    const { numero, type, prix } = req.body;
    const chambre = await Chambre.create({ numero, type, prix });
    res.status(201).json(chambre);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Données invalides ou numéro déjà utilisé' });
  }
};

module.exports = { getAll, getById, create };