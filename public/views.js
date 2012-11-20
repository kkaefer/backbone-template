var Navigation = Backbone.View.extend({
    events: {
        'click a': 'navigate'
    },

    navigate: function(el) {
        var href = $(el.target).attr('href');
        Backbone.history.navigate(href, { trigger: true });
        return false;
    }
});

var ItemsView = Backbone.View.extend({
    tagName: 'ul',
    initialize: function() {
        this.model.on('reset', this.render, this);
        this.model.on('add', this.render, this);
        this.model.on('remove', this.render, this);
    },
    render: function() {
        var ul = this.$el.empty();
        if (this.model.length) {
            this.model.each(function(item) {
                ul.append($('<li>').text(item.get('title')));
            });
        } else {
            ul.append($('<li><em>No items</em></li>'));
        }
    }
});

