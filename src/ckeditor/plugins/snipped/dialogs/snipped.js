CKEDITOR.dialog.add('snippedDialog', function(editor) {

    ddd = editor;
    return {
        // Basic properties of the dialog window: title, minimum size.
        title: 'Abbreviation Properties',
        minWidth: 400,
        minHeight: 200,
        // Dialog window contents definition.
        contents: editor.config.snippedConfig.contents,
        // This method is invoked once a user clicks the OK button, confirming the dialog.
        onOk: function() {

            // The context of this function is the dialog object itself.
            // http://docs.ckeditor.com/#!/api/CKEDITOR.dialog

            var selectedValue = this.getValueOf('tab-basic', 'items');
//			if (!selectedValue) {
//				ddd = this;
//				return false;
//			}
            console.log(selectedValue);
            this._.editor.insertHtml(selectedValue);

            return;
        }
    };
});