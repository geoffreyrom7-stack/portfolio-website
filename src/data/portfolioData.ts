export interface GalleryItem {
  id: string;
  title: string;
  category: "powerplant" | "airframe" | "ground_ops" | "avionics";
  aircraftModel: string;
  ataChapter: string;
  location: string;
  facility: string;
  coordinates: string;
  icao: string;
  imageUrl: string;
  date: string;
  description: string;
  toolsUsed: string[];
  signoffStatus: "AIRWORTHINESS RELEASED" | "INSPECTION PASSED" | "OVERHAUL COMPLETED";
}

export interface CompetencyCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  accentColor: string;
  description: string;
  skills: {
    name: string;
    description: string;
    standard: string;
  }[];
  tooling: string[];
  ataChapters: string[];
}

export const PERSONAL_INFO = {
  name: "Geoffrey Lee P. Rom",
  title: "Aircraft Maintenance Professional",
  tagline: "Precision in Flight. Excellence in Maintenance.",
  subTagline:
    "Trained at the Philippine State College of Aeronautics (PhilSCA). Dedicated to uncompromised airworthiness, zero-defect engineering, and strict CAAP & FAA regulatory compliance across Airframe, Powerplant, and Ground Support systems.",
  education: {
    institution: "Philippine State College of Aeronautics (PhilSCA)",
    degree: "Bachelor of Science in Aviation Maintenance Technology",
    description:
      "Premier public state college specializing in aeronautical education in the Philippines, established at Piccio Field, Villamor Air Base. Comprehensive theoretical mastery and hands-on flightline training in turbine engines, airframe structures, and modern aircraft systems.",
    campus: "Piccio Field, Villamor Air Base, Pasay City, Metro Manila",
    honors: "Aviation Safety & Airworthiness Excellence Awardee",
  },
  status: "Active // Available for MRO & Line Maintenance Deployments",
  location: "Metro Manila & Clark Aviation Corridor, Philippines",
  email: "geoffrey.rom.aviation@gmail.com",
  linkedin: "https://www.linkedin.com/in/geoffrey-lee-rom",
  phone: "+63 (917) 829-4501",
  stats: [
    { label: "Flightline & Hangar Hours", value: "1,200+", detail: "Hands-on maintenance log" },
    { label: "Inspections Conducted", value: "480+", detail: "Zero discrepancy escapes" },
    { label: "Airworthiness Adherence", value: "100%", detail: "Zero CAAP/FAA safety defects" },
    { label: "ATA Chapters Mastered", value: "24", detail: "Airframe, Powerplant & GSE" },
  ],
};

export const COMPETENCIES: CompetencyCategory[] = [
  {
    id: "airframe",
    title: "Airframe Technology",
    subtitle: "Structural Integrity, Composites & Sheet Metal",
    iconName: "ShieldCheck",
    accentColor: "from-blue-500/20 to-cyan-500/10 border-cyan-500/40 text-cyan-400",
    description:
      "Expertise in structural airframe repairs, skin flush riveting, structural alignment, non-destructive testing (NDT), and composite matrix remediation following Structural Repair Manuals (SRM).",
    skills: [
      {
        name: "Structural Inspection & NDT",
        description: "Dye penetrant, eddy current, and ultrasonic inspection for microscopic fatigue cracks and stress fractures.",
        standard: "FAA AC 43.13-1B / CAAP Part 5",
      },
      {
        name: "Composite & Honeycomb Repair",
        description: "Vacuum bagging, carbon fiber and fiberglass structural patching, core splice, and resin curing cycle control.",
        standard: "SRM Chapter 51",
      },
      {
        name: "Sheet Metal Fabrication & Riveting",
        description: "Precision bend radius calculation, solid rivet (2117-T, 2024-T) driving and bucking, Hi-Lok and CherryMAX fastener installation.",
        standard: "ATA Chapter 53 (Fuselage)",
      },
      {
        name: "Flight Control Rigging",
        description: "Cable tension measurement using tensiometers, bellcrank alignment, travel angle indexing for ailerons, elevators, and rudder.",
        standard: "ATA Chapter 27 (Flight Controls)",
      },
    ],
    tooling: ["Digital Cable Tensiometer", "Pneumatic Rivet Gun 3X/4X", "Eddy Current Detector", "Hot-Bonder Composite Cure System", "Mitutoyo Precision Micrometers"],
    ataChapters: ["ATA 51 (Structures)", "ATA 52 (Doors)", "ATA 53 (Fuselage)", "ATA 57 (Wings)", "ATA 32 (Landing Gear)"],
  },
  {
    id: "powerplant",
    title: "Powerplant Diagnostics",
    subtitle: "Turbine Maintenance, Reciprocating & Systems Overhaul",
    iconName: "Flame",
    accentColor: "from-amber-500/20 to-orange-500/10 border-amber-500/40 text-amber-400",
    description:
      "Comprehensive turbine engine maintenance, high-pressure compressor and turbine borescope evaluations, ignition and fuel metering diagnostics, and Auxiliary Power Unit (APU) servicing.",
    skills: [
      {
        name: "Turbine Borescope Diagnostics",
        description: "Internal video-borescope inspection of high-pressure turbine (HPT) nozzle guide vanes, combustion liner thermal barrier coatings, and compressor blades.",
        standard: "AMM Chapter 72 (Engine Core)",
      },
      {
        name: "Fuel Metering & Ignition Calibration",
        description: "Hydromechanical Unit (HMU) and Full Authority Digital Engine Control (FADEC) sensor verification, spark igniter gap verification, exciter box testing.",
        standard: "ATA Chapter 73 & 74",
      },
      {
        name: "Engine Ground Run & Parameter Analysis",
        description: "N1/N2 spool-up monitoring, Exhaust Gas Temperature (EGT) margin tracking, oil pressure differential, and vibration analysis.",
        standard: "Engine Maintenance Manual (EMM)",
      },
      {
        name: "Hot Section Inspection (HSI)",
        description: "Disassembly and dimension verification of turbine disks, shroud segments, and fuel nozzles for coking and erosion.",
        standard: "CAAP Advisory Circular 05-001",
      },
    ],
    tooling: ["Olympus Industrial Videoscope", "Snap-on Calibrated Torque Multipliers", "Barfield Digital Pressure Calibrator", "Turbine Alignment Gauges", "Digital Tachometer & Vibration Transducer"],
    ataChapters: ["ATA 71 (Powerplant)", "ATA 72 (Turbine Engine)", "ATA 73 (Engine Fuel)", "ATA 74 (Ignition)", "ATA 49 (APU)"],
  },
  {
    id: "ground_ops",
    title: "Ground Operations Tech",
    subtitle: "Tarmac Safety, Aircraft Marshaling & GSE Handling",
    iconName: "Truck",
    accentColor: "from-emerald-500/20 to-teal-500/10 border-emerald-500/40 text-emerald-400",
    description:
      "Zero-incident tarmac operations, precision aircraft marshaling, heavy ground support equipment handling, pre-departure walkarounds, and rigorous Foreign Object Debris (FOD) sweeps.",
    skills: [
      {
        name: "Aircraft Marshaling & Headset Comms",
        description: "Standardized ICAO wand signals for ramp arrival, gate alignment, towbarless pushback clearance, and cockpit interphone communication.",
        standard: "ICAO Annex 2 / IATA AHM",
      },
      {
        name: "Ground Support Equipment (GSE) Handling",
        description: "Safe operation and coupling of 400Hz Ground Power Units (GPU), Air Start Units (ASU), high-pressure nitrogen servicing carts, and pushback tugs.",
        standard: "IATA Airport Handling Manual 910",
      },
      {
        name: "Foreign Object Debris (FOD) Mitigation",
        description: "Systematic magnetic sweepers, visual ramp walkdowns, engine cowl intake debris prevention, and tire tread stone extraction.",
        standard: "FAA Advisory Circular 150/5210-24",
      },
      {
        name: "Pre-Flight & Turnaround Safety Walkaround",
        description: "Rapid turnaround safety audits: pitot-static covers, static wicks, tire cord wear, hydraulic shock strut leak detection, landing gear pins.",
        standard: "Line Maintenance Protocol LMP-04",
      },
    ],
    tooling: ["Towbarless Tug & Shear Pin Adapters", "Hobart 400Hz 90kVA GPU", "Aviation Nitrogen Servicing Manifold", "Marshaling Day/Night LED Lighted Wands", "Hydraulic Fluid Servicing Mule"],
    ataChapters: ["ATA 12 (Servicing)", "ATA 09 (Towing & Taxiing)", "ATA 10 (Parking/Mooring)", "ATA 06 (Dimensions/Areas)"],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "CFM56-7B Turbofan Borescope & Blade Profiling",
    category: "powerplant",
    aircraftModel: "Boeing 737-800 Next-Gen",
    ataChapter: "ATA 72-31 Compressor & Turbine",
    location: "Pasay City, Metro Manila, Philippines",
    facility: "PhilSCA Main Hangar Facility, Piccio Field, Villamor Air Base",
    coordinates: "14.5204° N, 121.0189° E",
    icao: "RPLL / MNL",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    date: "12 OCT 2026",
    description:
      "Detailed stage-1 fan blade leading edge blending and high-pressure turbine borescope diagnostic scan following a 1,000-flight-cycle scheduled airworthiness inspection. Zero thermal barrier spalling observed.",
    toolsUsed: ["Olympus IPLEX G Lite Borescope", "Titanium Blade Blending Files", "White-Light Inspection Array"],
    signoffStatus: "AIRWORTHINESS RELEASED",
  },
  {
    id: "gal-2",
    title: "Fuselage Stringer & Skin Flush Rivet Repair",
    category: "airframe",
    aircraftModel: "Airbus A320-200",
    ataChapter: "ATA 53-10 Fuselage Structures",
    location: "Clark Freeport Zone, Pampanga, Philippines",
    facility: "Clark International Airport MRO Bay 4 (RPLC)",
    coordinates: "15.1860° N, 120.5596° E",
    icao: "RPLC / CRK",
    imageUrl: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80",
    date: "28 SEP 2026",
    description:
      "Installation of 2024-T3 aluminum doubler plate with flush NAS countersunk solid rivets along station 382 fuselage lap joint. Structural NDT dye penetrant inspection confirmed zero stress micro-cracks.",
    toolsUsed: ["Chicago Pneumatic 3X Rivet Gun", "Tungsten Bucking Bar", "Magnaflux Spotcheck SKD-S2"],
    signoffStatus: "OVERHAUL COMPLETED",
  },
  {
    id: "gal-3",
    title: "Tarmac Gate Pushback & Dual GSE Coordination",
    category: "ground_ops",
    aircraftModel: "Airbus A321neo",
    ataChapter: "ATA 09-10 Towing & Pushback",
    location: "Pasay City, Metro Manila, Philippines",
    facility: "Ninoy Aquino International Airport (NAIA) Terminal Ramp Line",
    coordinates: "14.5086° N, 121.0194° E",
    icao: "RPLL / MNL",
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    date: "04 OCT 2026",
    description:
      "Supervised ramp departure procedure with 90kVA 400Hz GPU disconnect, nose-gear bypass pin verification, and pushback maneuvering coordination with ramp control tower.",
    toolsUsed: ["David Clark Noise-Attenuating Headset", "LED Marshalling Wands", "Towbarless Tractor Interface"],
    signoffStatus: "INSPECTION PASSED",
  },
  {
    id: "gal-4",
    title: "High-Bypass Turbofan Exhaust & Reverser Actuator Inspection",
    category: "powerplant",
    aircraftModel: "Boeing 777-300ER",
    ataChapter: "ATA 78-30 Thrust Reverser",
    location: "Subic Bay Freeport Zone, Zambales, Philippines",
    facility: "Subic Bay International Airport Heavy Maintenance Bay (RPLB)",
    coordinates: "14.7944° N, 120.2714° E",
    icao: "RPLB / SBF",
    imageUrl: "https://images.unsplash.com/photo-1519074069444-1ba4ea16e877?auto=format&fit=crop&w=1200&q=80",
    date: "19 AUG 2026",
    description:
      "Hydraulic actuator synchronization test for cascade-type thrust reverser sleeves. Verified auto-restow pressure switch thresholds and mechanical lock pin tolerances.",
    toolsUsed: ["Digital Differential Pressure Gauge", "Snap-on Aviation Torque Multiplier", "Skydrol-Resistant Seal Kit"],
    signoffStatus: "AIRWORTHINESS RELEASED",
  },
  {
    id: "gal-5",
    title: "Wing Trailing Edge Composite Slat & Flap Track Overhaul",
    category: "airframe",
    aircraftModel: "Cessna Citation CJ4",
    ataChapter: "ATA 57-50 Flaps & Control Surfaces",
    location: "Pasay City, Metro Manila, Philippines",
    facility: "PhilSCA Aeronautical Laboratory Airframe Workshop",
    coordinates: "14.5215° N, 121.0175° E",
    icao: "RPLL / MNL",
    imageUrl: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80",
    date: "15 JUL 2026",
    description:
      "Carbon fiber reinforced polymer (CFRP) trailing-edge delamination remediation using vacuum-assisted hot bonding at 121°C cure cycle. Flap roller bearing clearances measured to 0.002-inch precision.",
    toolsUsed: ["Wichita Thermal Hot-Bonder", "Vacuum Port Manifold", "Mitutoyo Dial Indicator & Stand"],
    signoffStatus: "OVERHAUL COMPLETED",
  },
  {
    id: "gal-6",
    title: "Turnaround Ramp Service & GSE GPU 400Hz Coupling",
    category: "ground_ops",
    aircraftModel: "Boeing 737-800",
    ataChapter: "ATA 24-40 External Ground Power",
    location: "Clark Freeport Zone, Pampanga, Philippines",
    facility: "Clark International Airport (CRK) Apron Stand 12",
    coordinates: "15.1872° N, 120.5580° E",
    icao: "RPLC / CRK",
    imageUrl: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80",
    date: "02 JUN 2026",
    description:
      "35-minute rapid turnaround operations: External power cable coupling, high-pressure tire nitrogen servicing (195 PSI mains), and pre-departure exterior FOD check.",
    toolsUsed: ["Hobart 400Hz Digital Power Analyzer", "Amflo Calibrated Nitrogen Chuck", "High-Vis Ramp Hazard Vest"],
    signoffStatus: "INSPECTION PASSED",
  },
  {
    id: "gal-7",
    title: "Modern Glass Cockpit EFIS & Pitot-Static Line Calibration",
    category: "avionics",
    aircraftModel: "Airbus A320neo / CFM LEAP-1A",
    ataChapter: "ATA 34-10 Air Data & Pitot-Static",
    location: "Pasay City, Metro Manila, Philippines",
    facility: "PhilSCA Avionics Systems Simulator Bay, Villamor Air Base",
    coordinates: "14.5209° N, 121.0182° E",
    icao: "RPLL / MNL",
    imageUrl: "https://images.unsplash.com/photo-1582650625119-3a31f841839d?auto=format&fit=crop&w=1200&q=80",
    date: "14 MAY 2026",
    description:
      "Systematic barometric altimeter leak test down to 50 ft/min leak rate standard. Electronic Flight Instrument System (EFIS) attitude and heading cross-check with standby instruments.",
    toolsUsed: ["Laversab 6300 Automated Pitot-Static Tester", "Avionics Multi-bus Analyzer", "Ground Test Barometric Chamber"],
    signoffStatus: "AIRWORTHINESS RELEASED",
  },
  {
    id: "gal-8",
    title: "Aircraft Main Gear Strut Seal Replacement & Nitrogen Servicing",
    category: "airframe",
    aircraftModel: "De Havilland Dash 8-Q400",
    ataChapter: "ATA 32-11 Main Landing Gear",
    location: "Subic Bay Freeport Zone, Zambales, Philippines",
    facility: "Subic Regional Aviation MRO Hangar Bay 1",
    coordinates: "14.7952° N, 120.2725° E",
    icao: "RPLB / SBF",
    imageUrl: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80",
    date: "22 APR 2026",
    description:
      "Complete oleo-pneumatic strut teardown, chevron seal repacking with Royco 756 aviation hydraulic fluid, and high-pressure dry nitrogen charging to exact 4.25-inch extension spec.",
    toolsUsed: ["Tronair 15-Ton Aircraft Axle Jack", "High-Pressure Nitrogen Charging Kit", "Lockwire Safety Pliers 6-inch"],
    signoffStatus: "OVERHAUL COMPLETED",
  },
];

export const PREFLIGHT_CHECKLIST = [
  {
    id: "chk-1",
    item: "Pitot-Static Probes & AOA Sensors",
    action: "Remove protective red covers, inspect drain holes, verify zero obstruction or foreign matter.",
    standard: "AMM 34-11-00",
  },
  {
    id: "chk-2",
    item: "Turbofan Engine Intake & Fan Blades",
    action: "Rotate N1 fan by hand, inspect 24 titanium blades for leading edge nicking, bird strike or FOD.",
    standard: "AMM 72-21-00",
  },
  {
    id: "chk-3",
    item: "Main Landing Gear & Brake Assemblies",
    action: "Check tire tread wear grooves, verify brake wear pin extension, confirm oleo strut dimension.",
    standard: "AMM 32-41-00",
  },
  {
    id: "chk-4",
    item: "Cowling Latches & Fastener Flushness",
    action: "Verify all secondary safety latch pins locked, zero loose camloc or structural quarter-turn fasteners.",
    standard: "AMM 71-11-00",
  },
  {
    id: "chk-5",
    item: "Control Surface Static Dischargers & Hinges",
    action: "Verify bonding braided straps attached, 100% static wicks intact on ailerons, elevators, and rudder.",
    standard: "AMM 23-60-00",
  },
  {
    id: "chk-6",
    item: "Aircraft Flight Logbook & Release Sign-Off",
    action: "Review deferred defect list (MEL/CDL), verify maintenance release sign-off by Geoffrey Lee P. Rom.",
    standard: "CAAP PCAR Part 8",
  },
];
