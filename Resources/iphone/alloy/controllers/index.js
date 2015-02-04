function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId0 = Ti.UI.createScrollView({
        left: 30,
        right: 30,
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 24,
            fontWeight: "bold"
        },
        text: "Ti.Adjust.",
        top: "50",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.__alloyId2 = require("adjust").createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Erat diam phasellus sed vehicula eu ante, integer maecenas risus sed, aliquam felis magna in. Est phasellus blandit est dolor. Maecenas elit porta aliquam vestibulum, diam vestibulum neque. Nec ante mi quisque iure ornare augue, libero cum quam justo erat vitae in, vitae lacus. Rutrum vel sit leo leo erat, ultrices wisi, viverra risus, consequat tellus nam nam sapien, nec et porta ante. Erat suspendisse, mollis ut, vel urna odio phasellus nec, aliquam leo id voluptatem in, vitae justo amet non a dolor. Arcu ac cursus accumsan mi augue pulvinar. Ut in aliquam, dis blandit sed tempus ligula, fermentum purus cursus pede nibh. In netus id vel fugiat, ut rutrum ac auctor, mauris in donec massa fames vitae felis, amet risus nulla, sit parturient adipiscing. Aliquet purus tellus. Lorem lorem vel pellentesque, blandit adipiscing ante nullam at convallis dictum, vitae luctus vulputate urna aut integer.",
        top: "10",
        module: "adjust",
        maxHeight: "60",
        id: "__alloyId2"
    });
    $.__views.__alloyId0.add($.__views.__alloyId2);
    $.__views.__alloyId3 = require("adjust").createView({
        top: "10",
        backgroundColor: "blue",
        height: Ti.UI.SIZE,
        maxHeight: "50",
        id: "__alloyId3"
    });
    $.__views.__alloyId0.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: "400",
        color: "#000",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.__alloyId5 = require("adjust").createView({
        top: "10",
        backgroundColor: "orange",
        height: Ti.UI.SIZE,
        minHeight: "50",
        id: "__alloyId5"
    });
    $.__views.__alloyId0.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: "20",
        color: "#000",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;