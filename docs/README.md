# Content Type: Blog Entry

## Fields:

Title
URL
Author
Category(in this case the category can be destinations or work because we have 2 types of blog posts)
Content
Date
Image(the image is chosen from the assets folder)



## Graphql Query
---
* used in src/pages/destinations.js in order to get all the blog posts details, filtered by category, in this case "destinations"
* same goes for src/pages/work.js but the category is "work"
* the result of the query is an object(data) that contains an object(allContentstackBlogEntry), that contains the nodes array(all the entries), the nodes array contains objects that each represent a blog entry
* in order to query a specific content type, we use allContentstack`${name_of_the_content_type}`
---

```javascript
allContentstackBlogEntry(
      sort: { fields: date, order: DESC }
      filter: { category: { eq: "destinations" } }
    ) {
      nodes {
        id
        title
        author
        category
        url
        date
        content
      
      }
    }
```

---

* used in src/templates/blog-post.js in order to get a single blog entry that matches the title given as a query variable

```javascript
query MyQuery($title: String) {
    contentstackBlogEntry(title: { eq: $title }) {
      url
      title
      date(formatString: "MMMM D, YYYY")
      content
      author
      image {
        id
        url
      }
    }
  }
```

# Content Type: NavElements

## Fields:

Title
NavElement( which is a reference field of content type: NavItem)
* the reference field accepts multiple entries of other content types if we check "Multiple" in Reference-Properties box

## Graphql Query

```javascript
query Nav {
      allContentstackNavbarelements {
        nodes {
          navelements {
            title
            url
          }
          title
        }
      }
    }
```

* the result of the query:
data:object,allContentstackNavbarelementsLobject,nodes:array that has only one element,navelements:array containing all the navItems
* 

* for the navbar and footer (components of Layout), I used StaticQuery in order to avoid passing down data from Layout to them, as Layout is reused in all the other pages

# Content Type: Footer

## Fields

Footer text

## Graphql Query

```javascript
query Footer {
      allContentstackFooter {
        nodes {
          title
        }
      }
    }
```

# Content Type: ContactSection

* the ContactSection is defined as a separate content type not a maodular block as it is unique, used only on the About page and modular blocks are created to be reused

## Fields

ContactHeader
Phone Number
Social Media
Email

## Graphql Query

```javascript
allContentstackContactsection {
      nodes {
        phone_number
        social_media
        email
        title
      }
    }

```




# Content Type: Page

---

## Entries: HomePage,Destination,Work,About

## Fields:

Title
Modular Blocks(they can be reused multiple times within a page, their order can be changed within an entry)

1. Contact(fields:header,contact_promo,button_text,link)
2. Section(fields:section_text,button_text,section_image,link)
3. Team(fields:header,name,job,image)

## HomePage
---
* the result of the query is an object(data) that contains an object(allContentstackPage), the nodes array has only one element (because we filtered by page title), an object containig the modular_blocks and modular_blocks is an array that contains all the modular blocks included in that specific page
* modular_blocks is a generic name, it can be changed as it is for the navbar elements, however if we make changes to fields that already exist in a content type after entries are created, the changes may not be visible for queries
* if there are more than one modular blocks of the same content type( eg: Section and Contact), then everytime a modular block is not null, all the others are null -> 
"modular_blocks": [
            {
              "Section": {
                "button_text": "See our Destinations",
                "link": "/destinations",
                "section_text": "No idea where to go next? Let us wander together around the world",
                "section_image": {
                  "url": "https://images.contentstack.io/v3/assets/bltdfe1da235f64eab1/blt89a2c01a54368d3d/6113afce47f87a1459856b94/travel.jpeg"
                }
              },
              "Contact": null
            },
            {
              "Section": null,
              "Contact": {
                "button_text": "Meet the Members",
                "contact_promo": "Meet our members and see if our community is what you are looking for.",
                "header": "Interested in joining our team?",
                "link": "/about"
              }
            }
          ]

---
## Graphql Query

```javascript
allContentstackPage(filter: {title: {eq: "HomePage"}}) {
    nodes {
      modular_blocks {
        Section {
          button_text
          link
          section_image {
            url
          }
          section_text
          
        }
        Contact {
          button_text
          link
          contact_promo
          header
        
        }
      }
    }
  }
}
```

## Destination
---
* for the Article component, a Section(modular block) is used to get the header of the component, the blog posts are taken from Blog Entry
* the blog entries cannot be modular blocks because the number of such blocks is quite limited
---
## Graphql Query

```javascript
  allContentstackPage(filter: { title: { eq: "Destination" } }) {
  nodes {
  modular_blocks {
  Section {
  section_text
  }
  Contact {
  button_text
  link
  contact_promo
  header

            }
          }
        }
      }
```

## Work
---
* for the Article component, a Section(modular block) is used to get the header of the component, the blog posts are taken from Blog Entry
---
## Graphql Query

```javascript
allContentstackPage(filter: { title: { eq: "Work" } }) {
      nodes {
        modular_blocks {
          Section {
            section_text
          }
          Contact {
            button_text
            link
            header
            contact_promo

          }
        }
      }
    }
```

## About Us

## Graphql Query


```javascript
allContentstackPage(filter: { title: { eq: "About" } }) {
      nodes {
        modular_blocks {
          Team {
            header
            image {
              url
            }
            job
            name
          }
        }
      }
    }
```


## gatsby-node.js

* blog-post.js from src/templates/blog-post.js is used as a template for each blog entry
* all the other paths /,/destinations,/work,/about remain unchanged, however for the blog entries, there needs to be a path that reflects their category and title (eg: /destinations/book-your-flight-to-tokyo,/work/eco-friendly-hotels-that-deserve-your-attention)
* using createPage these urls are dinamically created 

