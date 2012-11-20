var Item = Backbone.Model.extend({
    defaults: {
        title: "",
        body: ""
    },
    urlRoot: '/api/item/'
});

var Items = Backbone.Collection.extend({
    url: '/api/items',
    model: Item
});
