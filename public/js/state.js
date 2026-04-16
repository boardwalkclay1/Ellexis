export const state = {
  profile: {
    name: "Student",
    major: "Undeclared",
    targetGrad: "TBD"
  },
  courses: [
    { code: "CSCI 1301", title: "Intro to Programming" },
    { code: "CSCI 1302", title: "Data Structures" }
  ],
  sections: [
    {
      id: "CSCI1301-01",
      crn: "10001",
      courseCode: "CSCI 1301",
      section: "01",
      label: "CSCI 1301 - 01",
      days: ["Mon", "Wed", "Fri"],
      startTime: "10:00",
      endTime: "10:50",
      seatsAvailable: 3,
      capacity: 30,
      waitlist: 0
    },
    {
      id: "CSCI1302-01",
      crn: "10002",
      courseCode: "CSCI 1302",
      section: "01",
      label: "CSCI 1302 - 01",
      days: ["Tue", "Thu"],
      startTime: "13:00",
      endTime: "14:15",
      seatsAvailable: 0,
      capacity: 30,
      waitlist: 5
    }
  ],
  watchlist: [],
  degreePlan: {},
  finance: {
    status: "ok",
    aidStatus: "Pending",
    balance: 0,
    nextDue: "N/A",
    holds: []
  },
  gpa: {
    current: 3.4,
    target: 3.5
  },
  workShifts: [
    {
      id: "work-1",
      label: "Work Shift",
      days: ["Tue", "Thu"],
      startTime: "14:00",
      endTime: "18:00"
    }
  ],
  notificationPrefs: {},
  portalConnection: {
    status: "disconnected", // disconnected | connecting | connected | error
    lastTest: null,
    lastError: null
  }
};

export function initState() {
  // later: load from storage
}
