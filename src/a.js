var m = require('mithril')

var Home = {
    view: function () {
        return m('#wrapper', {
            
        }, "This is A")
    }
}

var B = require('./b')

m.route(document.body, "/", {
    "/": Home,
    "/b": B
})