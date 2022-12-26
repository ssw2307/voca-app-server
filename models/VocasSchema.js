const mongoose = require("mongoose");
const VocasSchema = mongoose.Schema({
  
  day: "String",
  kor: "String",
  eng: "String",
  done:"Boolean",


});
const Vocas = mongoose.model("vocas", VocasSchema);

module.exports = Vocas;
