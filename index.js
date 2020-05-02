const path = require("path");

class IdWordnet {
  constructor() {
    this.versions = {
      "1.2": path.join(__dirname, "database", "1.2"),
    };
  }

  get(version) {
    return this.versions[version];
  }
}

const idWordnet = new IdWordnet();
module.exports = idWordnet;
