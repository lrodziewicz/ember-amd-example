define([
    'libs/ember',
    'plugins/text!app/templates/item.handlebars'
], function(Em, itemTemplate) {
    return Em.View.extend({
        template: Em.Handlebars.compile(itemTemplate)
    });
});