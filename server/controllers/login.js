const UserSchema = require("../models/LoginModel");

exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  const regdata = UserSchema({
    username: username,
    email: email,
    password: password,
  });

  try {
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    const check = await UserSchema?.findOne({ email: email });
    if (check) {
      res.send({ message: "EmailAlreadyExist"});
    } else {
      await regdata.save();
      res.send({ message: "Registered"});
    }
  } catch (e) {
    res.json(e.message);
  }
};

// exports.loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   const logdata = UserSchema({
//     email: email,
//     password: password,
//   });

//   try {
//     //validations
//     if (!email || !password) {
//       return res.status(400).json({ message: "All fields are required!" });
//     }
//     const check = await UserSchema?.findOne({ email: email });
//     if (check) {
//       //res.json("Email Already Exist");
//       if (check.password === password) {
//         const token = jwt.sign(
//           {
//             name: user.username,
//             email: user.email,
//           },
//           'secret123'
//         )
//         res.send({ message: "valid", user: check });
//       } else {
//         res.send({ message: "invalid" });
//       }
//     } else {
//       res.send({ message: "NotExist" });
//     }
//   } catch (e) {
//     console.log(e.message);
//   }
//};
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const logdata = UserSchema({
    email: email,
    password: password,
  });

  try {
    //validations
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    const check = await UserSchema?.findOne({ email: email });
    if (check) {
      //res.json("Email Already Exist");
      if (check.password === password) {
        res.send({ message: "valid", user: check });
      } else {
        res.send({ message: "invalid" });
      }
    } else {
      res.send({ message: "NotExist" });
    }
  } catch (e) {
    console.log(e.message);
  }
};
