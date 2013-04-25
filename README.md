CKEditor4Snipped
================

Example config:
```
    config.snippedConfig =
            {
                contents: [
                    {
                        // Definition of the Basic Settings dialog tab (page).
                        id: 'tab-snippets',
                        label: 'Basic Settings',
                        // The tab contents.
                        elements: [
                            {
                                type: 'radio',
                                id: 'items',
                                items: [['France', 'FR'], ['Germany', 'DE'], ['Bulgaria', 'BG']],
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
                ]
            };
```

Will produce dialog with 3 snippets:
France, Germany and Bulgaria
Each country key is inserted in editor (FR, DE, BG)
