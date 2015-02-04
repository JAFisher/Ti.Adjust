/**
 * Author: Jamie Fisher
 * Properties: maxHeight, minHeight
 * Purpose: to allow css style max-min height properties on Ti elements.
 * example: <Label module="adjust" id="title" maxHeight="60" />
 */

var _properties;
var _instance;
/*
    Is a postlayout function, when the views are laid out all the CGRECT values are final.
    so for size properties we can work out the height and adjust them to go over or under if greater
    than the max.
 */
function heightAdjust(e){
    e.source.removeEventListener("postlayout", heightAdjust);
    var source = e.source;
    var instanceHeight = source.size.height;
    var max = _properties.maxHeight;
    var min = _properties.minHeight;
    if (max && instanceHeight > max){
        source.setHeight(max);
    }
    if (min && _properties.minHeight < instanceHeight){
        source.setHeight(min);
    }
    source.opacity = 1;
}

/*
    Adjust is a module for moving views to there correct max-min positions in titanium.
    This handles all the initalizion.
 */
var types = ["Label", "View", "ImageView"];
_.each(types , function(method){
    var methodName = "create"+method;
    exports[methodName] = function(args){
        args.opacity = 0;
        _instance = Ti.UI[methodName](args);
        if (args.maxHeight || args.minHeight){
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