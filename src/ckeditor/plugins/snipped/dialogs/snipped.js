CKEDITOR.dialog.add('snippedDialog', function(editor) {

    var title = 'Choose Snipped';
    if (editor.config.snippedConfig.title) {
        title = editor.config.snippedConfig.title;
    }

    var noAvailableSnippets = 'no available snippets';
    if (editor.config.snippedConfig.noAvailableSnippets) {
        noAvailableSnippets = editor.config.snippedConfig.noAvailableSnippets;
    }

    var contents = null;
    if (editor.config.snippedConfig.contentsIsCallback) {
        contents = editor.config.snippedConfig.contents();
    } else {
        contents = editor.config.snippedConfig.contents;
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