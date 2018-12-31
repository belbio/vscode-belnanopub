# Publishing the extension

*This is a condensation of what can be found [here](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)*

## Publishing

*It is important to maintain a good `CHANGELOG.md`. [Keep a Changelog](http://keepachangelog.com/) has a good set of recommendations to follow. Make sure that the version numbers match up in both the `CHANGELOG.md` and in the `package.json`.*

Publishers are identities who can publish extensions to the Visual Studio Code Marketplace.
The publisher name associated with this extension is **belbio**.

First, a tool called `vsce` is needed, which can be installed using `npm`:
`npm install -g vsce`

>`vsce` will use the Personal Access Token for future references to this publisher.

If you've already logged in before, it may not be required, but the following command will log you into the publisher.
`vsce login (publisher name)`
You will then be prompted to provide a **Personal Access Token**.

Finally, to publish, run the command:
`vsce publish`

You can also run the `publish` command with `major`, `minor`, and `patch`, or the version number, which will automatically increment the version number by editing the **version** attribute in the `package.json` file.

Ex: `vsce publish minor` will increment from version 1.1.0 to 1.2.0.


## Editing the extension
#### Snippets
Snippets can be edited from the `/snippets/` files. [Here](https://code.visualstudio.com/docs/editor/userdefinedsnippets)'s some documentation on that.

#### Syntax Highlighting
Syntax highlighting is done through **grammar injections**, which can be edited from the `/syntaxes/` files. A guide on syntax highlighting can be found [here](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide).

#### Commands
Commands were created in the `extension.ts` file.


## User Setup
### Azure DevOps

To publish an extension, the first step is to create an [Azure DevOps organization](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/create-organization?view=vsts), which can be started [here](https://go.microsoft.com/fwlink/?LinkId=307137).

### Personal Access Token

Once you have an organization, you can create a Personal Access Token under the security page of the organization.

![](https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/token1.png)

Select `Personal access tokens`, click **New Token**

![](https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/token2.png)

Give the Personal Access a name, make it accessible to every organization, select a ***custom defined** scope ruleset and click **Show all scopes**

![](https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/token3.png)

Scroll down to **Marketplace** and select both **Acquire** and **Manage**, (**Read** and **Publish** should already be selected).

Click **Create**, and you now your new **Personal Access Token**.
