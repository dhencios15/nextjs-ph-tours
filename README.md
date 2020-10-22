1.ADD TAILWIND

```
yarn add -D postcss-preset-env tailwindcss
```

2. ININT tailwind.config.js

```
npx tailwind init
```

3. Inside your project root, create the file postcss.config.js and add the following:

```
module.exports = {
  plugins: ['tailwindcss', 'postcss-preset-env'],
}
```

4. Create a CSS file inside your project. I’ve created the directory and file styles/index.css and added the following:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Import Css to \_app.js

```
import '../styles/index.css'
```

6. ADD EMOTION / TW STYLED

```
yarn add @emotion/babel-preset-css-prop @emotion/core @emotion/styled @zeit/next-css twin.macro
```

then add this to package.json

```
 "babelMacros": {
    "twin": {
      "config": "tailwind.config.js",
      "preset": "emotion",
      "debugProp": true,
      "debugPlugins": false,
      "debug": false
    }
  }
```

create .babel.rc

```
{
    "presets": [
      "next/babel",
      "@emotion/babel-preset-css-prop"
    ],
    "plugins": [
      "babel-plugin-macros"
    ]
  }

```
