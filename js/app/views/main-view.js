define([
    'libs/ember',
    'app/views/item-view',
    'plugins/text!app/templates/main.handlebars'
], function(Em, itemView, mainTemplate) {
    console.log(itemView.create());

    return Em.View.extend({
        template: Em.Handlebars.compile(mainTemplate),

        ItemView: itemView.create(),

        items: [
            {
                name: 'Foo'
            },
            {
                name: 'Bar'
            }
        ],

        mouseDown: function() {
            window.alert("hello world!");
        }
    });
});
