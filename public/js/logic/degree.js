export function getDegreePlanView() {
  return {
    terms: [
      {
        label: "Year 1 · Fall",
        status: "in-progress",
        courses: [
          { code: "ENGL 1101", title: "English Composition I" },
          { code: "MATH 1111", title: "College Algebra" },
          { code: "CSCI 1301", title: "Intro to Programming" }
        ]
      },
      {
        label: "Year 1 · Spring",
        status: "planned",
        courses: [
          { code: "ENGL 1102", title: "English Composition II" },
          { code: "MATH 1113", title: "Precalculus" },
          { code: "CSCI 1302", title: "Data Structures" }
        ]
      }
    ]
  };
}
