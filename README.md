empress-blog-ghost-helpers
==============================================================================

This addon implements the [Ghost template helpers](https://ghost.org/docs/api/v3/handlebars-themes/helpers/functional/) as Ember helpers so that we can more easly port Ghost templates to empress-blog


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install empress-blog-ghost-helpers
```


Usage
------------------------------------------------------------------------------

empress-blog originally started as a "shallow fork" of Ghost, and therefore it supported all the helpers that Ghost provided for templates by default. Now you can optionally add support for these helpers which is particularly useful if you are porting a template from Ghost. And if you are building a template from scratch there is no need to install this dependency.


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
