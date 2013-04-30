/**
 * @author Angel Koilov <a.koilov@viscomp.bg> <angel.koilov@gmail.com>
 * @description https://github.com/angelk/CKEditor4Snippet
 * @version 0.2
 */

CKEDITOR.plugins.add('snippet', {
    icons: 'snippet',
    init: function(editor) {

        var snippetConfig = editor.config.snippetConfig;
        if (!snippetConfig) {
            return;
        }

        var buttonLabel = 'Insert Snippet';
        if (snippetConfig.button && snippetConfig.button.label) {
            buttonLabel = snippetConfig.button.label;
        }

        editor.addCommand('showSnippet', new CKEDITOR.dialogCommand('snippetDialog'));

        editor.ui.addButton('snippet', {
            label: buttonLabel,
            command: 'showSnippet',
            toolbar: 'insert'
        });

        CKEDITOR.dialog.add('snippetDialog', this.path + 'dialogs/snippet.js');

    }
});


