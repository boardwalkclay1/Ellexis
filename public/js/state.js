export const state = {
  profile: {
    name: "Student",
    major: "Undeclared",
    targetGrad: "TBD"
  },
  courses: [],
  sections: [],
  watchlist: [],
  degreePlan: {},
  finance: {},
  gpa: {},
  workShifts: [],
  notificationPrefs: {}
};

export function initState() {
  // later: load from IndexedDB/localStorage
}
