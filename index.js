const kindof = require("kind-of");
const path = require("path");

export default {
  install(Vue, req) {
    if (kindof(req) == "object") {
      req = [req];
    }

    req.forEach(entry => {
      entry.src.keys().forEach(key => {
        const item = entry.src(key);
        var prefix = entry.prefix;

        switch (prefix) {
          case undefined:
          case false:
            prefix = "";
            break;
          case true:
            prefix =
              path
                .dirname(key)
                .substr(2)
                .replace(/(?!^)[A-Z]/g, s => "-" + s)
                .replace(/\//, "-")
                .replace(/\-\-/, "-")
                .replace(/\.\w+$/, "")
                .toLowerCase() + "-";
            break;
          default:
            prefix = prefix + "-";
        }

        const name =
          prefix +
          path
            .basename(key)
            .replace(/(?!^)[A-Z]/g, s => "-" + s)
            .replace(/\//, "-")
            .replace(/\-\-/, "-")
            .replace(/\.\w+$/, "")
            .toLowerCase();

        console.log(name);

        Vue.component(name, item.default || item);
      });
    });
  }
};
