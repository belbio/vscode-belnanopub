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

## Install
To install, search for this extension in the Extension Marketplace by going to the Extensions View (![](https://code.visualstudio.com/assets/docs/editor/extension-gallery/extensions-view-icon.png)) in VS Code searching for "BEL Nanopub".

## Usage
* For files to be validated against the BEL Nanopub JSONSchema, the file must be in either JSON or YAML and the name must end with `nanopub`, ie. `*nanopub.json`, `*nanopub.yaml`, `*nanopub.yml`.
* Syntax highlighting will currently be applied to all JSON and YAML files regardless of file name.
* To use snippets, the current file must be in either JSON or YAML, so any files ending in `.json`, `.yaml` or `.yml` will have access to the snippets.

## Developing
To get started developing:
1. Clone this repo.
2. Go into the directory
3. Run `npm install`

## Credits
* Conversion between JSON and YAML based upon [openapi-lint](https://github.com/Mermade/openapi-lint-vscode)
