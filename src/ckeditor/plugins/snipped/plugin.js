/**
 * @author Angel Koilov <a.koilov@viscomp.bg> <angel.koilov@gmail.com>
 * @description https://github.com/angelk/CKEditor4Snipped
 * @version 0.2
 */

CKEDITOR.plugins.add('snipped', {
    icons: 'snipped',
    init: function(editor) {

        var snippedConfig = editor.config.snippedConfig;
        if (!snippedConfig) {
            return;
        }

        var buttonLabel = 'Insert Snipped';
        if (snippedConfig.button && snippedConfig.button.label) {
            buttonLabel = snippedConfig.button.label;
        }

        editor.addCommand('showSnipped', new CKEDITOR.dialogCommand('snippedDialog'));

        editor.ui.addButton('snipped', {
            label: buttonLabel,
            command: 'showSnipped',
            toolbar: 'insert'
        });

        CKEDITOR.dialog.add('snippedDialog', this.path + 'dialogs/snipped.js');

    }
});


