const Pet = require('../models/Pet');

// GET - listar todos os pets
const getPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar pets' });
  }
};

// GET - buscar pet por id
const getPetById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);

    if (!pet) {
      return res.status(404).json({ message: 'Pet não encontrado' });
    }

    res.json(pet);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar pet' });
  }
};

// POST - criar pet
const createPet = async (req, res) => {
  try {
    const { name, breed, age } = req.body;

    const newPet = new Pet({
      name,
      breed,
      age
    });

    const savedPet = await newPet.save();
    res.status(201).json(savedPet);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar pet' });
  }
};

// PUT - atualizar pet
const updatePet = async (req, res) => {
  try {
    const { name, breed, age } = req.body;

    const updatedPet = await Pet.findByIdAndUpdate(
      req.params.id,
      { name, breed, age },
      { new: true, runValidators: true }
    );

    if (!updatedPet) {
      return res.status(404).json({ message: 'Pet não encontrado' });
    }

    res.json(updatedPet);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar pet' });
  }
};

// DELETE - excluir pet
const deletePet = async (req, res) => {
  try {
    const deletedPet = await Pet.findByIdAndDelete(req.params.id);

    if (!deletedPet) {
      return res.status(404).json({ message: 'Pet não encontrado' });
    }

    res.json({ message: 'Pet removido com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir pet' });
  }
};

module.exports = {
  getPets,
  getPetById,
  createPet,
  updatePet,
  deletePet
};