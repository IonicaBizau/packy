"use strict";

const readJson = require("r-json")
    , writeJson = require("w-json")
    , mapO = require("map-o")
    , ul = require("ul")
    , findValue = require("find-value")
    ;

module.exports = function packy(path, def, fn) {
    readJson(path, (err, data) => {
        if (err) { return fn(err); }
        var merged = ul.deepMerge(def, data);
        let merge = (current, parents) => {
            return mapO(current, function (v, n) {
                var p = parents.concat([n])
                if (typeof v === "object") {
                    return merge(v, p);
                }
                if (typeof v === "function") {
                    return v(findValue(data, p.join(".")));
                }
                return v;
            });
        };
        merge(merged, []);
        writeJson(path, merged, fn);
    });
}
