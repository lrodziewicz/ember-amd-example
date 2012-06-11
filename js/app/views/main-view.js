define([
    'libs/ember',
    'app/views/item-view',
    'app/views/new-item-view',
    'plugins/text!app/templates/main.handlebars'
], function(Em, itemView, newItemView, mainTemplate) {
    return Em.View.extend({
        template: Em.Handlebars.compile(mainTemplate),

        ItemView: itemView.extend({}),

        NewItemView: newItemView.extend({
            items: this.items
        }),

        items: [
            {
                name: 'Foo'
            },
            {
                name: 'Bar'
            }
        ],

        mouseDown: function() {
            console.log("hello world!");
        }
    });
});
