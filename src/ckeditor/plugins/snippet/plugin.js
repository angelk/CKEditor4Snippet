/**
 * @author Angel Koilov <a.koilov@viscomp.bg> <angel.koilov@gmail.com>
 * @description https://github.com/angelk/CKEditor4Snipped
 * @version 0.2
 */

CKEDITOR.plugins.add('snippet', {
    icons: 'snippet',
    init: function(editor) {

        var snippetConfig = editor.config.snippetConfig;
        if (!snippetConfig) {
            return;
        }

        var buttonLabel = 'Insert Snipped';
        if (snippetConfig.button && snippetConfig.button.label) {
            buttonLabel = snippetConfig.button.label;
        }

        editor.addCommand('showSnipped', new CKEDITOR.dialogCommand('snippetDialog'));

        editor.ui.addButton('snippet', {
            label: buttonLabel,
            command: 'showSnipped',
            toolbar: 'insert'
        });

        CKEDITOR.dialog.add('snippetDialog', this.path + 'dialogs/snippet.js');

    }
});


