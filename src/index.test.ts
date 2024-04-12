import { test, expect } from "bun:test";
import idWordnet from './index'

test("Test if the package is usable", () => {
    expect(idWordnet.get("1.2")).toContain("id-wordnet/database/1.2");
});
