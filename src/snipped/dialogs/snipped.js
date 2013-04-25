CKEDITOR.dialog.add( 'snippedDialog', function( editor ) {
	return {

		// Basic properties of the dialog window: title, minimum size.
		title: 'Abbreviation Properties',
		minWidth: 400,
		minHeight: 200,

		// Dialog window contents definition.
		contents: [
			{
				// Definition of the Basic Settings dialog tab (page).
				id: 'tab-basic',
				label: 'Basic Settings',

				// The tab contents.
				elements: [
					{
						type: 'radio',
						id: 'items',
						items: [ [ 'France', 'FR' ], [ 'Germany', 'DE' ] ],
						label: 'Click me',
						title: 'My title',
						onClick: function() {
							// this = CKEDITOR.ui.dialog.button
						}
						// Strange, but validator do not work for radio
						// validate: CKEDITOR.dialog.validate.notEmpty( "Abbreviation field cannot be empty" )
					}
				]
			}
		],
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

			var dialog = this;

			// Creates a new <abbr> element.
			var abbr = editor.document.createElement( 'abbr' );

			// Set element attribute and text, by getting the defined field values.
			abbr.setAttribute( 'title', dialog.getValueOf( 'tab-basic', 'title' ) );
			abbr.setText( dialog.getValueOf( 'tab-basic', 'abbr' ) );

			// Now get yet another field value, from the advanced tab.
			var id = dialog.getValueOf( 'tab-adv', 'id' );
			if ( id )
				abbr.setAttribute( 'id', id );

			// Finally, inserts the element at the editor caret position.
			editor.insertElement( abbr );
		}
	};
});