var App = Backbone.Router.extend({
    routes: {
        '': 'home',
        'items': 'list',
        'item/add': 'add'
    },

    initialize: function() {
        // Initialize here.
        this.nav = new Navigation({ el: $('#navigation') });
    },

    home: function() {
        $('#main').text('Home view');
        this.nav.$el.find('.active').removeClass('active');
    },

    add: function() {
        $('#main').text('Add view');
        this.nav.$el.find('.active').removeClass('active');
        this.nav.$el.find('.link-add').addClass('active');
    },

    list: function(id) {
        // Setup the views and collections
        var items = new Items();
        var view = new ItemsView({ model: items });
        $('#main').empty().append(view.el);

        // Fetch the data
        items.fetch();

        // Update the navigation bar
        this.nav.$el.find('.active').removeClass('active');
        this.nav.$el.find('.link-list').addClass('active');
    }
});

$(function() {
    var app = new App();
    Backbone.history.start();
});
