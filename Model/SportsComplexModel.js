const mongoose = require("mongoose");

const SportsComplexSchema = new mongoose.Schema(
  {
    name: String,
    location: String,
    district: { type: mongoose.SchemaTypes.ObjectId, ref: "districts" },
    taluka: String,
    area: String, //in acres
    operationalSince: String,
    sports: [
      {
        sport: { type: mongoose.SchemaTypes.ObjectId, ref: "sports" },
        images: [String],
        rating: Number,
        fees: String,
      },
    ],
    manager: { type: mongoose.SchemaTypes.ObjectId, ref: "users" },
    // assignedBy: { type: mongoose.SchemaTypes.ObjectId, ref: "authorities" },

    timings: { openingTime: String, closingTime: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("sportscomplexes", SportsComplexSchema);
