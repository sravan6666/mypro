// Variables
const propertySellingType = {
  sell: "Sell",
  rent: "Rent/Lease",
};

///////////////////////////////////////////////
const propertyKind = {
  residential: "Residential",
  commercial: "Commercial",
  agriculture: "Agriculture",
};
const residential = {
  house: "Independent House",
  villa: "Villa",
  apartment: "Apartment",
  openPlot: "Open Plot",
};
const commercial = {
  openPlot: "Open Plot",
  shopPlot: "Shop/Plot",
  office: "Office Space",
  showRoom: "Show Room",
  godown: "Godown",
  wareHouse: "Ware House",
  industrialLands: "Industrial Land",
  industrialSheds: "Industrial Shed",
};
const agriculture = {
  dryLand: "Dry Land",
  wetLand: "Wet Land",
  farmLand: "Farm Land",
  farmHouse: "Land With Farm House",
};

/////////////////////////////////////////////////
const furnishingTypes = {
  unFurnished: "Un Furnished",
  semiFurnished: "Semi Furnished",
  Furnished: "Furnished",
};
const availability = {
  readyToMove: "Ready To Move",
  _45Days: "45 Days",
  underConstruction: "Under Construction",
  anyone: "Anyone",
  family: "Family",
  bachelors: "Bachelors",
};
const expectedTimeofPossession = {
  readyToMove: "Ready To Move",
  _45Days: "45 Days",
  _3months: "Within 3 Months",
  _6months: "Within 6 Months",
  _nextYear: `Within ${new Date().getFullYear() + 1}`,
  _nextYearplus1: `Within ${new Date().getFullYear() + 2}`,
  _nextYearplus2: `Within ${new Date().getFullYear() + 3}`,
};
const ownerShip = { owner: "Owner", leaseHold: "lease/agent" };
const usp = {
  mainteinance: "Mainteinance Staff",
  water: "Water Storage",
  security: "Security/Fire Alarm",
  parking: "Parking",
  lift: "Lift/s",
};
const waterSource = {
  municipal: "Municipal Corporation",
  bore: "Borewell/Tank",
  _24: "24*7 Water",
};
const overLooking = {
  park: "Park/garden",
  road: "Main/Road",
  club: "Club",
  pool: "Pool",
  seaFacing: "SeaFacing",
};
const otherFeatures = {
  gated: "Gated Society",
  corner: "Corner Property",
  pet: "Pet Friendly",
};
const powerBackup = {
  none: "None",
  partial: "Partial",
  full: "Full",
};
const propertyFacing = {
  n: "North",
  ne: "North - East",
  e: "East",
  w: "West",
  s: "South",
  se: "South-East",
  sw: "South - West",
  nw: "North - West",
};
const localAdvantages = {
  metro: "Close to metro station",
  school: "Close to school",
  hospital: "Close to hospital",
  market: "Close to market",
  railwaystation: "Close to railway-station",
};

export default {
  propertySellingType,
  propertyKind,
  residential,
  commercial,
  agriculture,
  furnishingTypes,
  availability,
  expectedTimeofPossession,
  ownerShip,
  usp,
  waterSource,
  overLooking,
  otherFeatures,
  powerBackup,
  propertyFacing,
  localAdvantages,
};
