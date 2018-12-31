# BEL Nanopub extension for VSCode
Visual studio code extension for BEL Nanopubs

![](https://lh5.googleusercontent.com/uEnq93rkLaBERHGeOC3A0gv9n0Q55YuHmEWOApxylZuK2WLfrCTSX9gBgO1HJ75xTA4YbPZACZMVpUFmULs5=w3360-h1880-rw)

## Features

* Validation against the BEL Nanopub JSONSchema
* Support for both JSON and YAML
* Snippets 
* Syntax Highlighting
* Commands for converting between JSON and YAML

### Snippets

Snippets provided are:
* `!start`  - starts a new nanopub document
* `!nano`   - creates a new nanopub stub
* `!anno`   - adds an annotation
* `!assert` - adds an assertion
* `!cite`   - adds a citation

### Commands

Commands can be run by first typing `ctrl + shift + P` or `cmd + shift + P` on macOS.
Commands provided are:
* `Convert to YAML` - converts the current document from JSON to YAML
* `Convert to JSON` - converts the current document from YAML to JSON

**Note:** When converting from an *Untitled* document, the command will overwrite the current file instead of creating a new one.

## Credits
* Conversion between JSON and YAML based upon [openapi-lint](https://github.com/Mermade/openapi-lint-vscode)
