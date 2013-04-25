CKEDITOR.dialog.add('snippedDialog', function(editor) {

    var title = 'Choose Snipped';
    if (editor.config.snippedConfig.title) {
        title = config.snippedConfig.title;
    }

    return {
        // Basic properties of the dialog window: title, minimum size.
        title: title,
        minWidth: 400,
        minHeight: 200,
        // Dialog window contents definition.
        contents: editor.config.snippedConfig.contents,
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