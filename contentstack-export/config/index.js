require("dotenv").config({
  path: `../.env.management`,
})
const {
  CONTENTSTACK_API_KEY,
  MANAGEMENT_TOKEN,
} = process.env
module.exports = {
  master_locale: {
    // master locale of the stack
    name: 'English - United States',
    code: 'en-us'
  },
  // Credentials
  email: '',   // (optional)
  password: '', // (optional)
  // Stack API KEY
  source_stack: CONTENTSTACK_API_KEY,             // mandatory
  management_token:MANAGEMENT_TOKEN ,    
  // Path where the exported data will be stored (relative path)
  data: './contents'
};

//npm run export OR  

/*
$ npm run export-assets
$ npm run export-env
$ npm run export-locales
$ npm run export-extensions
$ npm run export-webhooks
$ npm run export-globalfields
$ npm run export-contenttypes
$ npm run export-entries
$ npm run export-labels
*/