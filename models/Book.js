const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    genre: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true,
      enum: ['Quero ler', 'Lendo', 'Lido']
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: null,
      validate: {
        validator: function (value) {
          if (this.status === 'Lido') {
            return value !== null && value !== undefined;
          }
          return value === null || value === undefined;
        },
        message: 'A nota só pode ser preenchida quando o livro estiver como Lido.'
      }
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Book', bookSchema);