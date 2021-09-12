require("dotenv").config({
  path: `../.env.management`,
})
const {
  CONTENTSTACK_API_KEY2,
  MANAGEMENT_TOKEN2,
} = process.env
module.exports = {
  master_locale: {
    // master locale of the stack
    name: 'English - United States',
    code: 'en-us'
  },
  // Credentials
  email: '',
  password: '',
  target_stack:  CONTENTSTACK_API_KEY2,
  management_token: MANAGEMENT_TOKEN2,
  // Folder in which exported contents are stored
  data: '../contentstack-export/contents'
};
