const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://localhost/sldb');

  const studentSchema = new mongoose.Schema({
    name: String
  });

  const Student = mongoose.model('Student', studentSchema);

  const patrick = new Student({name: 'Patrick' });
  console.log(patrick.name);
}