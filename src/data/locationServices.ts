export interface ServiceDef {
  slug: string;
  name: string;
  shortName: string;
  intro: string;
  conditions: string[];
  treatments: string[];
  sessions: string;
}

export interface AreaDef {
  slug: string;
  name: string;
  distance: string;
  landmarks: string[];
}

export const services: ServiceDef[] = [
  {
    slug: "back-pain-physiotherapy",
    name: "Back Pain Physiotherapy",
    shortName: "back pain",
    intro:
      "Chronic lower back pain, slipped disc, sciatica and postural strain respond exceptionally well to a structured physiotherapy program. Our Guntur physiotherapists combine spinal mobilisation, IFT, dry needling and progressive core rehab so you get lasting relief — not just short-term painkillers.",
    conditions: [
      "Lumbar disc bulge / prolapse (PIVD)",
      "Sciatica & radiating leg pain",
      "Sacroiliac joint dysfunction",
      "Postural back pain from desk / driving jobs",
      "Pregnancy-related low back pain",
      "Post-spine-surgery rehabilitation",
    ],
    treatments: [
      "Manual therapy & spinal mobilisation",
      "IFT / TENS electrotherapy",
      "Ultrasound therapy",
      "Dry needling for muscle spasm",
      "McKenzie extension protocol",
      "Progressive core & glute strengthening",
    ],
    sessions: "Most patients feel 50–70% relief within 6 sessions and complete a full course in 10–15 sessions.",
  },
  {
    slug: "knee-pain-physiotherapy",
    name: "Knee Pain Physiotherapy",
    shortName: "knee pain",
    intro:
      "From early osteoarthritis to post-ACL surgery, knee pain needs a precise mix of strengthening, joint mobilisation and load management. Our Guntur clinic uses international OA and ACL rehab protocols to help you walk, climb stairs and return to sport without surgery whenever possible.",
    conditions: [
      "Knee osteoarthritis (OA)",
      "Post ACL / meniscus surgery rehab",
      "Patellofemoral pain syndrome (runner's knee)",
      "Ligament sprains (MCL, LCL)",
      "Post total knee replacement (TKR) rehab",
      "Chondromalacia patellae",
    ],
    treatments: [
      "Joint mobilisation & manual therapy",
      "Quadriceps & VMO strengthening",
      "IFT & ultrasound for inflammation",
      "Kinesio taping",
      "Gait re-training",
      "Progressive loading & return-to-sport testing",
    ],
    sessions: "A typical knee rehab course runs 8–20 sessions depending on whether you're managing OA, post-op or a sports injury.",
  },
  {
    slug: "sports-injury-physiotherapy",
    name: "Sports Injury Physiotherapy",
    shortName: "sports injuries",
    intro:
      "Ankle sprains, hamstring tears, tennis elbow, shoulder impingement — sports injuries need aggressive, evidence-based rehab so you return stronger and don't reinjure. We follow the same return-to-play protocols used by professional teams, adapted for weekend athletes and school/college players in Guntur.",
    conditions: [
      "Ankle sprains & instability",
      "Hamstring, quad & calf strains",
      "ACL / meniscus injuries",
      "Rotator cuff & shoulder impingement",
      "Tennis elbow & golfer's elbow",
      "Achilles & patellar tendinopathy",
    ],
    treatments: [
      "Acute injury (RICE) management",
      "Soft-tissue release & dry needling",
      "Neuromuscular re-education",
      "Sport-specific strength & plyometrics",
      "Kinesio & rigid taping",
      "Return-to-play performance testing",
    ],
    sessions: "Grade-1 strains typically resolve in 2–3 weeks; ligament and post-surgical rehab runs 6–12 weeks.",
  },
  {
    slug: "neck-and-cervical-pain-physiotherapy",
    name: "Neck & Cervical Pain Physiotherapy",
    shortName: "neck & cervical pain",
    intro:
      "Long hours at a desk, phone use and poor sleep posture make cervical pain and headaches one of the most common complaints in Guntur. We treat the root cause — joint stiffness, deep neck flexor weakness and forward-head posture — instead of just masking symptoms.",
    conditions: [
      "Cervical spondylosis",
      "Cervical disc bulge & radiculopathy",
      "Cervicogenic headaches & migraines",
      "Text-neck / tech-neck syndrome",
      "Whiplash after road accidents",
      "Frozen shoulder linked to neck pathology",
    ],
    treatments: [
      "Cervical mobilisation & mulligan SNAGs",
      "IFT, ultrasound & shortwave diathermy",
      "Trigger-point dry needling",
      "Deep neck flexor training",
      "Postural correction & workstation coaching",
      "Cervical traction (mechanical / manual)",
    ],
    sessions: "Most cervical pain cases settle in 6–10 sessions with a home-exercise plan for lasting posture change.",
  },
  {
    slug: "stroke-and-paralysis-rehabilitation",
    name: "Stroke & Paralysis Rehabilitation",
    shortName: "stroke & paralysis rehab",
    intro:
      "Recovery after a stroke, Bell's palsy or spinal cord injury depends on early, intensive and skilled neuro-rehabilitation. Our Guntur physiotherapists are trained in Bobath, PNF and task-oriented motor learning to help you regain movement, balance and independence — with home-visit options across Guntur.",
    conditions: [
      "Hemiplegia / hemiparesis after stroke",
      "Bell's palsy (facial paralysis)",
      "Parkinson's disease",
      "Spinal cord injury / paraplegia",
      "Guillain-Barré syndrome recovery",
      "Post-brain-surgery rehabilitation",
    ],
    treatments: [
      "Bobath / NDT-based handling",
      "PNF (Proprioceptive Neuromuscular Facilitation)",
      "Task-oriented motor re-training",
      "Balance & gait re-education",
      "Electrical stimulation for weak muscles",
      "Family / caregiver training",
    ],
    sessions: "Neuro rehab is a long-term journey; we plan in 4-week blocks with monthly outcome reviews.",
  },
];

export const areas: AreaDef[] = [
  {
    slug: "kothapeta",
    name: "Kothapeta",
    distance: "at our main clinic",
    landmarks: [
      "near Kamaraju Diagnostic Centre",
      "Gunturvari Thota",
      "walking distance from Kothapeta Main Road",
    ],
  },
  {
    slug: "brodipet",
    name: "Brodipet",
    distance: "just 5 minutes from",
    landmarks: [
      "opposite Brodipet Main Bazaar",
      "near Guntur Railway Station",
      "short auto ride from Brodipet 4th Line",
    ],
  },
  {
    slug: "arundelpet",
    name: "Arundelpet",
    distance: "10 minutes from",
    landmarks: [
      "close to Arundelpet 4th Lane",
      "near Big Bazaar & Arundelpet shopping area",
      "easy access from Arundelpet Main Road",
    ],
  },
  {
    slug: "lakshmipuram",
    name: "Lakshmipuram",
    distance: "under 10 minutes from",
    landmarks: [
      "near Lakshmipuram Main Road",
      "close to Guntur Medical College",
      "short drive via Kothapeta Road",
    ],
  },
];

export interface LocationServiceParams {
  service: ServiceDef;
  area: AreaDef;
}

/** Slug format: `{service-slug}-in-{area-slug}-guntur` */
export const buildSlug = (service: ServiceDef, area: AreaDef) =>
  `${service.slug}-in-${area.slug}-guntur`;

export const allLocationServiceSlugs = () =>
  services.flatMap((s) => areas.map((a) => buildSlug(s, a)));

export const findLocationService = (
  slug: string,
): LocationServiceParams | null => {
  for (const service of services) {
    for (const area of areas) {
      if (buildSlug(service, area) === slug) return { service, area };
    }
  }
  return null;
};