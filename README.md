# Seona Spash page React.js / Next.js

## Features
- React.js
- Next.js
- Single page web app
- Contact form
- Responsive
- Smooth sliding to sections clicked from the menu

## Installation
This repository is missing a .next.config.js file because it contains private environment variables for the form.
To start, please create a new file next.config.js in root, and add the following code:

```
module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  },
};
```

Now you can install like a normal 

```
npm install
```

```
npm run start
```