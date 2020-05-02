const idWordnet = require("./index");

describe("Test if the package is usable", () => {
  test("Check path for the versiom", () => {
    expect(idWordnet.get("1.2")).toContain("id-wordnet/database/1.2");
  });
});
