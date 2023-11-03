const { default: mongoose } = require("mongoose");

const complaintSchema = new mongoose.Schema(
  {
    type: String, // , Maintenance Requirement
    Description: String,
    photo: String,
    Sremarks: String,
    Mremarks: String,
    Aremarks: String,
    userId: { type: mongoose.SchemaTypes.ObjectId, ref: "users" },
    sportsComplex: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "sportsComplexes",
    },
    level: Number, //0 - Supervisor, 1 - Manager, 2 - Authority, 3 - Admin
    status: Number, //0 - Active(Not Solved), 1 - Solved
    // baseUrl: {
    //     type: String,
    //   }
  },

  { timestamps: true }
);

module.exports = mongoose.model("Complaints", complaintSchema);
