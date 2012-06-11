define([
    'libs/ember'
], function(Em) {
    return Em.TextField.extend({
        items: [],

        classNames: ['create-item-input'],
        insertNewline: function() {
            var value = this.get('value');
            if (value) {
                this.items.push(value);
                //itemControllers.itemsArray.createItem(value);
                this.set('value', '');
            }
        },
        didInsertElement: function() {
            this.$().focus();
        }
    });
});