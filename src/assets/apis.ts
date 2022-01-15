// ============== login/signUp Api==============================

// POST
let payload = {
  email: '',
  password: '',
};

let response = {
  success: true,
};


//======================register========================

let payloadregiter = {
email : '',
name : '',
password : '',
confirmPassword : '',
contactNo : ''
}

let responseregister = {
  success: true,
};

// ==================== buy gift card==========================

//POST
let payload1 = {
  currency: '',
  amount: '',
  deliveryType: 'email',
  deliveryTime: '',
  recipientName: '',
  recipientEmail: '',
  message: '',
};

let response1 = {
  success: true,
};

//==================== Redeem gift card==========================

//POST
let payload2 = {
  redeemCode: '',
};

let response2 = {
  currency: '',
  amount: '',
};

//=======================currency Prize =================
// for all the lsit of currencies that vishal has provided
// GET 
let responsep = [
  {
    currency : '',
    prize : ''
  },
  {
    currency : '',
    prize : ''
  },
  {
    currency : '',
    prize : ''
  }
]

//=============== History api====================================

// GET
let response3 = {
  orders: [
    {
      currency: '',
      amount: '',
      deliveryType: 'email',
      deliveryTime: '',
      deliveryDate: '',
      recipientName: '',
      senderName: '',
      recipientEmail: '',
      message: '',
      dateOfpurchage: '',
    },
    {
      currency: '',
      amount: '',
      deliveryType: 'email',
      deliveryTime: '',
      recipientName: '',
      recipientEmail: '',
      message: '',
    },
  ],
};

//=================== Profile Api =======================

// GET
let response4 = {
  email: '',
  name: '',
  contactNo: '',
  currencies: [
    {
      currency: '',
      amount: ''
    },
    {
      currency: '',
      amount: ''
    },
    {
      currency: '',
      amount: '',
    },
  ],
  bankDetails : {
    ifscCode :'',
    address: '',
    branch: '',
    bankName: '',
    accountNumber: '',
    confirmAccountNumber: '',
    accountHolderName: '',
  }
};

//====================== Update Profile ===================
// name or email or contactNo or bankdetails , any combination can come
// POST
let payload5 = {
  name: '',
  email: '',
  contactNo: '',
  bankDetails : {
    ifscCode :'',
    address: '',
    branch: '',
    bankName: '',
    accountNumber: '',
    confirmAccountNumber: '',
    accountHolderName: '',
  }
};

let response5 = {
  success: true,
};



//===================forgot password API=======================
//POST
let payloadF = {
  email : '',
}

let responseF = {
  success: true,
};

//===================reset password API=======================
//POST
let payloadR = {
  email : '',
  newPassword: ''
}

let responseR = {
  success: true,
};

