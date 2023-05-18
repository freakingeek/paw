import PawStorage from "..";

describe("Testing Set and Get methods", () => {
  const paw = new PawStorage();

  it("Return string on passing string", () => {
    paw.set("name", "Lucy");

    expect(paw.get("name")).toBe("Lucy");
  });

  it("Return number on passing number", () => {
    paw.set("age", 1.5);

    expect(paw.get("age")).toBe(1.5);
  });

  it("Return object on passing object", () => {
    paw.set("cat", { name: "Lucy", age: 1.5 });

    expect(paw.get("cat")).toEqual({ name: "Lucy", age: 1.5 });
  });

  it("Return null on passing undefined and null", () => {
    paw.set("empty", null);
    paw.set("notFound", null);

    expect(paw.get("empty")).toBe(null);
    expect(paw.get("notFound")).toBe(null);
  });
});
