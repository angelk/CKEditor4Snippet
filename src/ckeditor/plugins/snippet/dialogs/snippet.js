CKEDITOR.dialog.add('snippetDialog', function(editor) {

    var title = 'Choose Snipped';
    if (editor.config.snippetConfig.title) {
        title = editor.config.snippetConfig.title;
    }

    var noAvailableSnippets = 'no available snippets';
    if (editor.config.snippetConfig.noAvailableSnippets) {
        noAvailableSnippets = editor.config.snippetConfig.noAvailableSnippets;
    }

    var contents = null;
    if (editor.config.snippetConfig.contentsIsCallback) {
        contents = editor.config.snippetConfig.contents();
    } else {
        contents = editor.config.snippetConfig.contents;
    }


    if (0 === contents[0].elements[0].items.length) {
        contents[0].elements[0].items = [[noAvailableSnippets, '']];
    }

    return {
        // Basic properties of the dialog window: title, minimum size.
        title: title,
        minWidth: 400,
        minHeight: 200,
        // Dialog window contents definition.
        contents: contents,
        // This method is invoked once a user clicks the OK button, confirming the dialog.
        onOk: function() {

            // The context of this function is the dialog object itself.
            // http://docs.ckeditor.com/#!/api/CKEDITOR.dialog

            var selectedValue = this.getValueOf('tab-snippets', 'items');
//          Validator notEmpty doesn't work for radio buttons, uncomment these lines for ugly fix :)
//			if (!selectedValue) {
//				return false;
//			}
            editor.insertHtml(selectedValue);
        }
    };
});