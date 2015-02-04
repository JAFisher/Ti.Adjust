function heightAdjust(e) {
    e.source.removeEventListener("postlayout", heightAdjust);
    var source = e.source;
    var instanceHeight = source.size.height;
    var max = _properties.maxHeight;
    var min = _properties.minHeight;
    max && instanceHeight > max && source.setHeight(max);
    min && instanceHeight > _properties.minHeight && source.setHeight(min);
    source.opacity = 1;
}

var _properties;

var _instance;

var types = [ "Label", "View", "ImageView" ];

_.each(types, function(method) {
    var methodName = "create" + method;
    exports[methodName] = function(args) {
        args.opacity = 0;
        _instance = Ti.UI[methodName](args);
        if (args.maxHeight || args.minHeight) {
            _properties = {
                maxHeight: args.maxHeight,
                minHeight: args.minHeight
            };
            _instance.opacity = 0;
            _instance.addEventListener("postlayout", heightAdjust);
        }
        return _instance;
    };
});