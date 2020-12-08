# add-dashes

This is a npm package that will replace all whitespaces in a string with dashes (-).

# How to use
1. Install this npm package:
```shell
$ npm install replace-spaces-with-dashes
```

2. Initialize a node application:
```shell
$ npm init -y
```

3. Require this npm package at the top of index.js file as shown in the example below.

# Example

```js
const replaceSpacesWithDashes = require('replace-spaces-with-dashes');

console.log(replaceSpacesWithDashes("This sentence shouldnt have spaces."));
```

```shell
$ node index.js
$ > This-sentence-shouldnt-have-spaces.
```

Notes:
- Make updates to npm package
```markdown
$ npm version minor 
and then 
$ npm publish 
to update npm package
```
