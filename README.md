# eslint-plugin-cltjs

example for CLTJS

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-cltjs`:

```
$ npm install eslint-plugin-cltjs --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-cltjs` globally.

## Usage

Add `cltjs` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "cltjs"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "cltjs/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





