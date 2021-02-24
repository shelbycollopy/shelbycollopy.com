const contentful = require("contentful");

const client = contentful.createClient({
  host: "cdn.contentful.com",
  accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  space: `${process.env.CONTENTFUL_SPACE_ID}`,
});

export const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default client;
