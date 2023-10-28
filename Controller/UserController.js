const UserModel = require("../Model/UsersModel");
const DistrictModel = require("../Model/DistrictsModel");
const SportComplexModel = require("../Model/SportsComplexModel");
const sendMail = require("../sendEmail");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const { ACCESS_TOKEN_SECRET } = process.env;

module.exports.signup = async function (req, res) {
  let User = new UserModel(req.body);

  console.log(User);

  if (User.Role == 4) {
    const password = sendMail.passwordGenerate(8);
    User.Password = password;
    sendMail.sendEmail(User.Email, password);

    let data = await User.save();
    // let did = new mongoose.Types.ObjectId(data.DistrictId);
    let district = await DistrictModel.findOne({ _id: data.DistrictId });
    district.authorityID = new mongoose.Types.ObjectId(data._id);
    let response = await district.save();
    console.log(response);
    res.json({ data: data, msg: "User Added(role:4)", rcode: 200 });
  } else if (User.Role == 3) {
    const password = sendMail.passwordGenerate(8);
    User.Password = password;
    sendMail.sendEmail(User.Email, password);
    let data = await User.save();

    let SportComplex = await SportComplexModel.findOne({
      _id: req.body.SportComplexId,
    });
    console.log(SportComplex);
    console.log(data._id);
    SportComplex.manager = new mongoose.Types.ObjectId(data._id);
    let response = await SportComplex.save();
    console.log(response);
    res.json({ data: data, msg: "User Added(role:3)", rcode: 200 });
  } else {
    res.json({ data: data, msg: "User Added", rcode: 200 });
  }
};

module.exports.login = async function (req, res) {
  const { Email, Password } = req.body;

  let User = await UserModel.findOne({ Email: Email });

  if (User && User.Password == Password) {
    const accesstoken = jwt.sign(
      { Email: User.Email, Password: User.Password },
      ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    res.json({ data: User, msg: "login done", token: accesstoken, rcode: 200 });
  } else {
    res.json({ data: req.body, msg: "Invalid credential", rcode: -9 });
  }
};

module.exports.getUser = function (req, res) {
  UserModel.find(req.query)
    .then((data) => {
      res.json({ data: data, msg: "User Retrived", rcode: 200 });
    })
    .catch((err) => {
      res.json({ data: err.msg, msg: "smw", rcode: -9 });
    });
};
