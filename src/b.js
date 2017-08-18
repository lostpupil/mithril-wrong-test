var m = require('mithril')

var Home = {
    view: function () {
        return m('#wrapper', {
            
        }, "This is B")
    }
}

m.route(document.body, "/", {
    "/": Home,
})