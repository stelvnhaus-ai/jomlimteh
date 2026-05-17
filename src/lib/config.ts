// All wedding details in one place. Edit this file to update content site-wide.

export const wedding = {
  // The couple
  groom: {
    nameEn: "Lim Yan Yang",
    nameZh: "林彦扬",
    firstNameEn: "Yan Yang",
  },
  bride: {
    nameEn: "Teh Bee Hui",
    nameZh: "郑美惠",
    firstNameEn: "Bee Hui",
  },

  // Date & time
  date: {
    iso: "2026-09-20T19:30:00+08:00", // Used for countdown
    dayOfWeekEn: "Sunday",
    dayOfWeekZh: "星期日",
    full: "20 September 2026",
    short: "20.09.26",
    lunarZh: "丙午年八月初十",
    lunarEn: "10th day, 8th lunar month",
  },
  schedule: {
    cocktailEn: "Cocktails",
    cocktailZh: "恭候",
    cocktailTime: "6:30 PM",
    dinnerEn: "Dinner",
    dinnerZh: "入席",
    dinnerTime: "7:30 PM",
  },

  // Venue
  venue: {
    nameEn: "Count Cuisine",
    nameZh: "伯爵薈",
    addressLine1: "LG 06, 07 & 08, Sunway Square",
    addressLine2: "Jalan Lagoon Selatan, Bandar Sunway",
    addressLine3: "47500 Petaling Jaya, Malaysia",
    parking: "Sunway Square basement parking",
    mapsQuery: "Count Cuisine Sunway Square Bandar Sunway",
    googleMapsUrl: "https://maps.google.com/?q=Count+Cuisine+Sunway+Square+Bandar+Sunway",
  },

  // Parents — back side / story
  parents: {
    groom: {
      father: { en: "Lim Hong Beng", zh: "林鸿猛", deceased: false },
      mother: { en: "Tan Meng Poo", zh: "陈明宝", deceased: false },
    },
    bride: {
      father: { en: "Teh Han Pin", zh: "郑汉彬", deceased: true },
      mother: { en: "Khoo Guik Kiew", zh: "邱月娇", deceased: false },
    },
  },

  // RSVP
  rsvp: {
    deadline: "18 August 2026",
    deadlineShort: "18.08.26",
  },

  // Dress code
  dressCode: {
    en: "Smart casual",
    zh: "衣着得体",
    note: "Suggested: muted tones · please avoid white",
  },

  // Domain
  domain: "jomlimteh.com",
  url: "https://jomlimteh.com",
};

// Google Form integration — DO NOT edit unless re-creating the Form
export const googleForm = {
  formId: "1FAIpQLSc6hu3LAHWePP4hBuESFuZmnoIBoQ6Wa4pH5MYGK8HOaLirPg",
  submitUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSc6hu3LAHWePP4hBuESFuZmnoIBoQ6Wa4pH5MYGK8HOaLirPg/formResponse",
  fields: {
    name: "entry.644454628",
    attending: "entry.1481169112",
    guests: "entry.1542915054",
    relationship: "entry.1551613006",
    message: "entry.192480659",
  },
  // These must match the Google Form's exact option labels
  attendingOptions: {
    yes: "Yes, I'll be there / 出席",
    no: "No, I can't make it / 无法出席",
  },
  relationshipOptions: [
    "Groom's family & relatives / 男方家属及亲戚",
    "Bride's family & relatives / 女方家属及亲戚",
    "Groom's friends & colleagues / 男方朋友及同事",
    "Bride's friends & colleagues / 女方朋友及同事",
    "Mutual friends / 共同朋友",
  ],
};
