const mongoose = require("mongoose");
const DaySchema = mongoose.Schema({
  
  id: {
    type:"number",
    require:"true",
    unique : "true",
  },
  day: "number",

});
const Day = mongoose.model("day", DaySchema);

module.exports = Day;
