# Snapshot of airbnb eslint rules for eslint 9

An extract of eslint airbnb base rules (eslint-config-airbnb-base v15) for use with eslint 9.


## Usage
1. Add `@eslint/compat` and `globals` npm packages as dev dependencies to your project if you haven't yet:
```
npm install @eslint/compat globals -D --save
```

2. Add the following to the top of your `eslint.config.mjs`
```
import airbnbConfig from "eslint-config-airbnb-base-extract/airbnb-config.mjs";
```

3. Add `airbnbConfig` to your default like:
```
export default [
    ...airbnbConfig,
    {
```

## Refresh the snapshot for minor version updates of eslint-config-airbnb-base
```
npm install
npm run refreshMjs
```
