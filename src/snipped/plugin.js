CKEDITOR.plugins.add('snipped', {
	icons: 'snipped',
	init: function(editor) {
		editor.addCommand('showSnipped', new CKEDITOR.dialogCommand('snippedDialog'));

		editor.ui.addButton('snipped', {
			label: 'snipped',
			command: 'showSnipped',
			toolbar: 'insert'
		});

		CKEDITOR.dialog.add( 'snippedDialog', this.path + 'dialogs/snipped.js' );

	}
});


