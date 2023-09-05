require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

const React = require("react"); // Add this line to import React
const { ReactDOMServer } = require("react-dom/server");
const Sitemap = require("react-router-sitemap").default;
const routes = require("./src/routes.js"); // Import your app's routes

function generateSitemap() {
  const sitemap = new Sitemap(routes)
    .build("https://hardikdaim.netlify.app") // Replace with your website's URL
    .save("./public/sitemap.xml"); // Save the sitemap in the 'public' folder

  console.log("Sitemap generated successfully!");
}

generateSitemap();
