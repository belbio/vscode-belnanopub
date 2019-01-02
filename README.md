# BEL Nanopub extension for VSCode
Visual studio code extension for BEL Nanopubs

![](demo.gif)

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

## FAQ
1. What files will the JSONSchema validation be applied against?
*Any JSON or YAML files which end in `nanopub` will be validated against the BEL Nanopub JSONSchema, ie. `*nanopub.json`, `*nanopub.yaml`, `*nanopub.yml`.*

2. Where is the syntax highlighting feature applied?
*Syntax highlighting will currently be applied to all JSON and YAML files regardless of file name.*

## Credits
* Conversion between JSON and YAML based upon [openapi-lint](https://github.com/Mermade/openapi-lint-vscode)
