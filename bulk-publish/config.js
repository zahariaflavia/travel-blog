require("dotenv").config({
  path: `./.env.development`,
})
const {
  CONTENTSTACK_DELIVERY_TOKEN
} = process.env
module.exports = {
  alias: "management token",

  //PUBLISH UNPUBLISHED OR DRAFT ENTRIES
  publish_unpublished_env: {
    contentTypes: [
      "blog_entry",
      "contactsection",
      "footer",
      "navitem",
      "navbarelements",
      "page",
    ],
    sourceEnv: "development",
    locale: "en-us",
    environments: ["development", "production"],
    bulkPublish: true,
  },

  //PUBLISH ASSERTS
  publish_assets: {
    environments: ["development", "production"],
    folderUid: "cs_root",
    bulkPublish: true,
    locales: ["en-us"],
  },

  //PUBLISH ENTRIES
  publish_entries: {
    contentTypes: [
      "blog_entry",
      "contactsection",
      "footer",
      "navitem",
      "navbarelements",
      "page",
    ],
    locales: ["en-us"],
    bulkPublish: true,
    environments: ["development", "production"],
    publishAllContentTypes: false,
  },

  //UNPUBLISH
  Unpublish: {
    filter: {
      environment: "development",
      content_type_uid: "contactsection", //only one uid at a time
      locale: "en-us",
      type: "entry_published",
      
    },
    deliveryToken: CONTENTSTACK_DELIVERY_TOKEN,
    bulkUnpublish: true,
  },

  //PUBLISH FROM ONE ENV TO ANOTHER
  cross_env_publish: {
    filter: {
      environment: "development",
      content_type_uid:"contactsection", //only one uid at a time
      locale: "en-us",
      type: "entry_published",
    },
    deliveryToken: CONTENTSTACK_DELIVERY_TOKEN,
    destEnv: ["production"],
    bulkPublish: true,
  },

  //PUBLISH EDITED ENTRIES
  publish_edits_on_env: {
    contentTypes: [
      "blog_entry",
      "contactsection",
      "footer",
      "navitem",
      "navbarelements",
      "page",
    ],
    sourceEnv: "development",
    environments: ["development","production"],
    locales: ["en-us"],
    bulkPublish: true,
  },

  //PUBLISH ENTRIES AFTER NON-LOCALIZED FIELD IS UPDATED
  nonlocalized_field_changes: {
    sourceEnv: "development",
    contentTypes: [
      "blog_entry",
      "contactsection",
      "footer",
      "navitem",
      "navbarelements",
      "page",
    ],
    environments: ["development","production"],
    bulkPublish: true,
  },

  //PUBLISH ALL ENTRIES AFTER ADDING A NEW FIELD IN THE CONTENT TYPE
  addFields: {
    deleteFields: [
      "updated_by",
      "created_by",
      "created_at",
      "updated_at",
      "_version",
      "ACL",
    ],
    locales: ["en-us"],
    contentTypes: [
      "blog_entry",
      "contactsection",
      "footer",
      "navitem",
      "navbarelements",
      "page",
    ],
    environments: ["development", "production"],
    defaults: {
      number: null,
      boolean: false,
      isodate: [],
      file: null,
      reference: [],
    },
    bulkPublish: true,
  },
};
