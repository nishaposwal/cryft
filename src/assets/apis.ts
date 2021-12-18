// ============== login/signUp Api==============================

// POST
let payload = {
  email: '',
  password: '',
};

let response = {
  success: true,
};

// ==================== buy gift card==========================

//POST
let payload1 = {
  currency: '',
  amount: '',
  deliveryType: 'email',
  deliveryTime: '',
  deliveryDate: '',
  recipientName: '',
  senderName: '',
  recipientEmail: '',
  message: '',
  cardId: '',
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
      deliveryDate: '',
      recipientName: '',
      senderName: '',
      recipientEmail: '',
      message: '',
      dateOfpurchage: '',
    },
  ],
};

//=================== Profile Api =======================

// GET
let response4 = {
  email: '',
  name: '',
  currencies: [
    {
      currencyName: '',
      amount: '',
    },
    {
      currencyName: '',
      amount: '',
    },
    {
      currencyName: '',
      amount: '',
    },
  ],
};

//====================== Update Profile ===================

// POST
let payload5 = {
  name: '',
  email: '',
};

let response5 = {
  success: true,
};

// CA3F59 pink
