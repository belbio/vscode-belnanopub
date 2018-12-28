# Publishing the extension

*This is a condensation of what can be found [here](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)*

### Azure DevOps

To publish an extension, the first step is to create an [Azure DevOps organization](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/create-organization?view=vsts), which can be started [here](https://go.microsoft.com/fwlink/?LinkId=307137).

### Personal Access Token

Once you have an organization, you need to create a Personal Access Token under the security page of the organization.

![](https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/token1.png)

Select `Personal access tokens`, click **New Token**

![](https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/token2.png)

Give the Personal Access a name, make it accessible to every organization, select a ***custom defined** scope ruleset and click **Show all scopes**

![](https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/token3.png)

Scroll down to **Marketplace** and select both **Acquire** and **Manage**, (**Read** and **Publish** should already be selected).

Click **Create**, and now copy your new **Personal Access Token**.

### Publisher

Publishers are identities who can publish extensions to the Visual Studio Code Marketplace. Once you create a publisher, fill the `publisher` name in the `package.json` file.

First, a tool called `vsce` is needed, which can be installed using `npm`:
`npm install -g vsce`

With `vsce`, create a new publisher:
`vsce create-publisher (publisher name)`

>`vsce` will use the Personal Access Token for future references to this publisher.

If you need to login to the publisher:

`vsce login (publisher name)`

###Publishing extension

Run the command:
`vsce publish`