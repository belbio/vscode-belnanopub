'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "bel" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let wordCounter = new WordCounter();
    new WordCounterController(wordCounter);
    let disposable = vscode.commands.registerCommand('extension.sayHello', () => {
        // The code you place here will be executed every time your command is executed

        // let editor = vscode.window.activeTextEditor;
        // if (!editor) {
        //     return; // No open text editor
        // }

        // let selection = editor.selection;
        // let text = editor.document.getText(selection);

        // // Display a message box to the user
        // vscode.window.showInformationMessage('Selected characters: ' + text.length);
        wordCounter.updateWordCount();

    });
    wordCounter.updateWordCount();
    context.subscriptions.push(wordCounter);
    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}

class WordCounter {
    private _statusBarItem: vscode.StatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);

    public updateWordCount() {
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            this._statusBarItem.hide();
            return;
        }

        let doc = editor.document;
        let wordCount = this._getWordCount(doc);

        this._statusBarItem.text = wordCount !== 1 ? `${wordCount} Words` : '1 Word';
        this._statusBarItem.show();
        // if (doc.languageId === "markdown") {
        //     let wordCount = this._getWordCount(doc);
            
        //     this._statusBarItem.text = wordCount !== 1 ? `${wordCount} Words` : '1 Word';
        //     this._statusBarItem.show();
        // } else {
        //     // this._statusBarItem.hide();
            
        // }
    }

    public _getWordCount(doc: vscode.TextDocument): number {
        let docContent = doc.getText();

        docContent = docContent.replace(/(< ([^>]+)<)/g, '').replace(/\s+/g, ' ');
        docContent = docContent.replace(/^\s\s*/, '').replace(/\s\s*$/, '');

        let wordCount = 0;
        if (docContent !== "") {
            wordCount = docContent.split(" ").length;
        }

        return wordCount;
    }
    
    dispose() {
        this._statusBarItem.dispose();
    }
}

class WordCounterController {
    private _wordCounter: WordCounter;
    private _disposable: vscode.Disposable;

    constructor(wordCounter: WordCounter) {
        this._wordCounter = wordCounter;

        let subscriptions: vscode.Disposable[] = [];
        vscode.window.onDidChangeTextEditorSelection(this._onEvent, this, subscriptions);
        vscode.window.onDidChangeActiveTextEditor(this._onEvent, this, subscriptions);

        this._wordCounter.updateWordCount();

        this._disposable = vscode.Disposable.from(...subscriptions);
    }

    dispose() {
        this._disposable.dispose();
    }

    private _onEvent() {
        this._wordCounter.updateWordCount();
    }
}