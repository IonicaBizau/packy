
[![packy](http://i.imgur.com/fDrtuz7.png)](#)

# `$ packy`

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/packy.svg)](https://www.npmjs.com/package/packy) [![Downloads](https://img.shields.io/npm/dt/packy.svg)](https://www.npmjs.com/package/packy)

> Set default fields in your package.json files.


This is useful to me especially to autofill my `author` and

`license` fields, so I don't have to type my long name, email

address and website each time when I start a new `npm` package.

Yes, it bumps your productivity! :rocket:


## :cloud: Installation

You can install the package globally and use it as command line tool:


```sh
$ npm i -g packy
```


Then, run `packy --help` and see what the CLI tool can do.


```
$ packy --help
Usage: packy [options]

Set default fields in your package.json files.

Options:
  -v, --version  Displays version information.
  -h, --help     Displays this help.

Examples:
  $ packy

Make sure the config file is available at ~/.packy.js or ~/pack.json.

Documentation can be found at https://github.com/IonicaBizau/packy#readme.
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

## :memo: Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`np-init`](https://github.com/IonicaBizau/np-init#readme)—Easily start a npm package from scratch.
 - I developed `packy` to save me some time when having to create
    the `package.json` files. Usually, now, I do `npm init`, without
    filling the `author` and `license` fields (because they are repetitive
    things) and then `packy`. It automagically fills the additional
    fields from my config file (`~/.packy.json`). :sparkling_heart:

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
