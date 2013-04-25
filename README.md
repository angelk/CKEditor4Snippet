CKEditor4Snipped
================

Version 0.2

Changes:<br/>
0.2:<br/>
added custom text for input/labels

Install:
add `config.extraPlugins = 'snipped';` in config.js file

Example config:
```
    snippedConfig: {
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
                                    items: [['France', '{France}'], ['Germany', '{Germany}'], ['Bulgaria', 'BG']],
                                    label: 'Click me DE',
                                    title: 'My title DE',
                                    onClick: function() {
                                        // this = CKEDITOR.ui.dialog.button
                                    }
                                    // Strange, but validator do not work for radio
                                    // validate: CKEDITOR.dialog.validate.notEmpty( "Abbreviation field cannot be empty" )
                                }
                            ]
                        }
                    ],
                    button: {
                                label: 'Insert Snippet DE'
                    },
                    title: 'title DE'
                }
```

Will produce dialog with 3 snippets:
France, Germany and Bulgaria<br/>
Each country key is inserted in editor (FR, DE, BG)

button.label: label for UI button

title: title for modal window
