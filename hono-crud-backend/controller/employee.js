
const fs = require('fs');
const dataPath = "./config/employee.json";
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateMobileNumber(mobileNumber) {
    const mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    return mobileRegex.test(mobileNumber);
}



const readFile = (filePath = dataPath, encoding = "utf8") => {
  try {
    let data = fs.readFileSync(filePath,encoding);
    return { status: 1, data: JSON.parse(data) };
  } catch (error) {
    console.log(error);
    return { status: 0, data: error };
  }
};
// const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
//   fs.readFile(filePath, encoding, (err, data) => {
//       if (err) {
//           throw err;
//       }

//       callback(returnJson ? JSON.parse(data) : data);
//   });
// };

// const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {

//   fs.writeFile(filePath, fileData, encoding, (err) => {
//       if (err) {
//           throw err;
//       }

//       callback();
//   });
// };
const writeFile = (fileData, filePath = dataPath, encoding = "utf8") => {  
  try {
    let data = fs.writeFileSync(filePath, JSON.stringify(fileData));
    return { status: 1, data: data };
  } catch (error) {
    console.log(error);
    return { status: 0, data: error };
  }
};

exports.register = async (req, res) => {
  const { name, email, phone, position, department } = req.body;
  let obj = {
    name: name,
    email: email,
    phone: phone,
    position: position,
    department: department,
  };
  try {
    const isEmailValid = validateEmail(email);
    const isMobileValid = validateMobileNumber(phone);
    if (!isEmailValid) {
      return res.send({ status: 0, message: "please enter correct email" });
    }
    if (!isMobileValid) {
      return res.send({ status: 0, message: "please enter correct phone number" });
    }
    const newUserId = Date.now().toString();
    let readAllData = readFile(dataPath);
    console.log(readAllData);
    if (readAllData.status == 0) {
      return res.send({ status: 0, message: "something went wrong" });
    }
    let dataInsert = readAllData.data;
    dataInsert[newUserId.toString()] = obj;
    const data = writeFile(dataInsert, dataPath);
    if (data.status == 0) {
      return res.send({ status: 0, message: "something went wrong" });
    }

    return res.send({
      status: 1,
      message: "created",
      data: obj,
    });
  } catch (error) {
    console.log(error);
    return res.send({ status: 0, message: "something went wrong" });
  }
};


exports.getEmployeeById = async (req, res) => {
  const id=req.params.id
  try {
    const result = readFile(dataPath)
    if(result && result.data[id.toString()]){
      return res.send({ status: 1, message: "success",data:result.data[id.toString()] });
    }
    return res.send({ status: 0, message: "no data found" });
    
  } catch (error) {
    console.log(error);
    return res.send({ status: 0, message: "something went wrong" });
  }
};

exports.getAllEmployee = async (req, res) => {
  try {
    const result = readFile(dataPath)
    if(result && result.status==1){
      return res.send({ status: 1, message: "success",data:result.data });
    }
    return res.send({ status: 0, message: "no data found" });
    
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
};

exports.updateById = async (req, res) => {
  const id=req.params.id
  const { name, email, phone, position, department } = req.body;
  let obj = {
    name: name,
    email: email,
    phone: phone,
    position: position,
    department: department,
  };
  try {
    const isEmailValid = validateEmail(email);
    const isMobileValid = validateMobileNumber(phone);
    if (!isEmailValid) {
      return res.send({ status: 0, message: "please enter correct email" });
    }
    if (!isMobileValid) {
      return res.send({ status: 0, message: "please enter correct phone number" });
    }
    const result = readFile(dataPath)
    if(result && result.data[id.toString()]){
      let dataInsert = result.data;
      dataInsert[id.toString()] = obj;
      const data = writeFile(dataInsert, dataPath);
      return res.send({ status: 1, message: "success",data:obj });
    }
    return res.send({ status: 0, message: "no data found" });
    
  } catch (error) {
    console.log(error);
    return res.send({ status: 0, message: "something went wrong" });
  }
};

exports.deleteById = async (req, res) => {
  const id=req.params.id
  try {
    const result = readFile(dataPath)
    if(result && result.data[id.toString()]){
      let dataInsert = result.data;
     delete dataInsert[id.toString()]
      const data = writeFile(dataInsert, dataPath);
      return res.send({ status: 1, message: "success" });
    }
    return res.send({ status: 0, message: "no data found" });
    
  } catch (error) {
    console.log(error);
    return res.send({ status: 0, message: "something went wrong" });
  }
};