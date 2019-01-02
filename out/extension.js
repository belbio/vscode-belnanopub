'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const yaml = require('js-yaml');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "bel" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    // let wordCounter = new WordCounter();
    // new WordCounterController(wordCounter);
    let convertToYAML = vscode.commands.registerCommand('extension.convertToYAML', () => {
        convert(true);
    });
    let convertToJSON = vscode.commands.registerCommand('extension.convertToJSON', () => {
        convert(false);
    });
    context.subscriptions.push(convertToYAML);
    context.subscriptions.push(convertToJSON);
}
exports.activate = activate;
function convert(toYAML) {
    var editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }
    let text = editor.document.getText();
    try {
        let obj = yaml.safeLoad(text, { json: true });
        if (toYAML) {
            vscode.workspace.openTextDocument({ language: 'yaml', content: yaml.safeDump(obj) })
                .then(function (doc) {
                vscode.window.showTextDocument(doc);
            })
                .then(function (ex) {
                console.error(ex);
            });
        }
        else {
            vscode.workspace.openTextDocument({ language: 'json', content: JSON.stringify(obj, null, 4) })
                .then(function (doc) {
                vscode.window.showTextDocument(doc);
            })
                .then(function (ex) {
                console.error(ex);
            });
        }
    }
    catch (exception) {
        vscode.window.showErrorMessage("Error converting to yaml: " + exception.message);
    }
}
// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map