# Nick Starter Gatsby

This is a starter for Gatsby with the file structure and plugins already added

## Installation

Use npm install to download the node_modules

```bash

npm i

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT]

{
resolve: `gatsby-plugin-manifest`,
options: {
name: `UCtel`,
short_name: `UCtel`,
description: `UCtel`,
start_url: `/`,
lang: `en`,
background_color: `#162129`,
theme_color: `#1bbc9b`,
display: `minimal-ui`,
icon: `./src/static/icon.ico`,
},
},

    box-shadow: 0 1.1111rem 1.1111rem 0.2778rem rgb(0 0 0 / 5%);



    <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/"
              >



                <div className="form--section">
                  <section>
                    <p htmlFor="Companyname">
                      Company name<span>*</span>
                    </p>
                    <input
                      type="text"
                      name="Companyname"
                      id="Companyname"
                      required
                    />
                  </section>
                  <section>
                    <p htmlFor="jobTitle">Job title</p>
                    <input type="text" name="jobTitle" id="jobTitle" />
                  </section>
                </div>
                <p htmlFor="floorPlans">Upload floor plans (PDF)</p>
                <input
                  type="file"
                  id="floorPlans"
                  name="floorPlans"
                  accept="application/pdf"
                />
                <p htmlFor="message">
                  Messages <span>*</span>
                </p>
                <textarea name="message" id="message" required />
                <div className="btn--wrapper">
                  <button type="submit" className="btn btn--main">
                    <span>Submit</span>
                  </button>
                </div>
              </form>

[build]
publish = "public"

[[plugins]]
package = "netlify-plugin-gatsby-cache"
