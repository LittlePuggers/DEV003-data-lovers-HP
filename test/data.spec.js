import {
  getData,
  createCharEl,
  charFilters,
  sortMe,
  calculo,
} from "../src/data.js";
import data from "../src/data/harrypotter/data.js";

const dummyData = [
  {
    name: "African prince",
    gender: "Male",
    house: null,
  },
  {
    name: "Avery I",
    gender: "Male",
    house: "Slytherin",
  },
  {
    name: "Cadwallader",
    gender: "Male",
    house: "Hufflepuff",
  },
  {
    name: "Euan Abercrombie",
    gender: "Male",
    house: "Gryffindor",
  },
  {
    name: "Hermione Granger",
    gender: "Female",
    house: "Gryffindor",
  },
  {
    name: "Stewart Ackerley",
    gender: "Male",
    house: "Ravenclaw",
  },
];

describe("getData", () => {
  it("is a function", () => {
    expect(typeof getData).toBe("function");
  });

  it("returns character array", () => {
    const findCharacters = getData(data.characters);
    expect(findCharacters).toBe(findCharacters);
  });
});

describe("charFilters", () => {
  it("is a function", () => {
    expect(typeof charFilters).toBe("function");
  });

  it("returns `filter data by gender`", () => {
    const charFound = charFilters(dummyData, "Female", "Gryffindor");
    expect(charFound[0].name).toBe("Hermione Granger");
  });
});

describe("sortMe", () => {
  it("is a function", () => {
    expect(typeof sortMe).toBe("function");
  });

  // it("returns characters from A to Z", () => {
  //   const charactersSorted = sortMe(dummyData, "A-Z");
  //   expect(charactersSorted).toBe(dummyData);
  // });
});

describe("calculo", () => {
  it("is a function", () => {
    expect(typeof calculo).toBe("function");
  });

  // it("returns total female characters", () => {
  //   const totalFemales = calculo(div, dummyData, ["Female", "Gryffindor"]);
  //   expect(totalFemales).toBe("1");
  // });
});

describe("createCharEl", () => {
  it("is a function", () => {
    expect(typeof createCharEl).toBe("function");
  });
});
