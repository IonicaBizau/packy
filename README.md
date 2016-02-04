[![packy](http://i.imgur.com/fDrtuz7.png)](#)

# `$ packy` [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/packy.svg)](https://www.npmjs.com/package/packy) [![Downloads](https://img.shields.io/npm/dt/packy.svg)](https://www.npmjs.com/package/packy) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Set default fields in your package.json files.

## Installation

You can install the package globally and use it as command line tool:

```sh
$ npm i -g packy
```

Then, run `packy --help` and see what the CLI tool can do.

```sh
$ packy --help
Usage: packy [options]

Options:
  -h, --help     Displays this help.          
  -v, --version  Displays version information.

Examples:
  packy

Make sure the config file is available at ~/.packy.js or ~/pack.json.

Documentation can be found at https://github.com/IonicaBizau/packy#readme
```

### Configuring `~/.packy.js` or `~/.packy.json`

To make `packy` usable on your machine, you have to create a
file named `packy.js` or `packy.json` in your home directory
(`$HOME` sweet `~` :joy:). :house_with_garden: If you always to override your
`package.json` fields with static data, the `json`format is easier for
you. If you need some dynamic fields (e.g. if the `license` field
from `package.json` contains `GPL`, then return `"GPL-3"`
otherwise return `"MIT"` (see the example below).
It should work for subfields (deep merge) too. :four_leaf_clover:

#### JSON Format (`~/.packy.json`)

My `~/.packy.json` could look like this:

```json
{
    "author": "Ionică Bizău <bizauionica@gmail.com> (http://ionicabizau.net)"
  , "license": "MIT"
}
```
#### JS Format (`~/.packy.js`)

My `~/.packy.js` *looks* like this:

```js
module.exports = {
    author: "Ionică Bizău <bizauionica@gmail.com> (http://ionicabizau.net)"
  , license: function (license) {
       // Few of my projects are licensed under GPL,
       // so don't override the license field
        if (/gpl/i.test(license)) {
            return license;
        }
        return "MIT";
    }
};
```

## Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md