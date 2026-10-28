/**
 * Clinic Configuration
 * 
 * Central configuration file for Star Chiropractic & Physiotherapy Center.
 * 
 * Business Name: Star Chiropractic & Physiotherapy Center
 * Location: Amla Nagar, Dilsukhnagar, Hyderabad, Telangana, India
 * 
 * Update this file with verified details from the business owner.
 */

export interface TreatmentCategory {
  id: string;
  title: string;
  tagline: string;
  shortDescription: string;
  keyFocus: string[];
  imageUrl: string;
}

export interface ValuePillar {
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export interface ClinicConfig {
  name: string;
  brandName: string;
  tagline: string;
  heroHeadline: string;
  heroSupportingText: string;
  location: {
    area: string;
    subLocality: string;
    city: string;
    state: string;
    country: string;
    fullAreaDisplay: string;
    mapsSearchUrl: string;
  };
  contact: {
    /** Set to verified clinic phone number (e.g., "+91 98765 43210") or null */
    phone: string | null;
    /** Set to verified WhatsApp number (e.g., "919876543210") or null */
    whatsapp: string | null;
    /** Set to verified email or null */
    email: string | null;
  };
  hours: {
    confirmed: boolean;
    notice: string;
  };
  proposedTreatments: TreatmentCategory[];
  proposedValues: ValuePillar[];
}

export const clinicConfig: ClinicConfig = {
  name: "Star Chiropractic & Physiotherapy Center",
  brandName: "STAR",
  tagline: "Move Better. Feel Stronger. Live Fully.",
  heroHeadline: "Move Better. Feel Stronger. Live Fully.",
  heroSupportingText:
    "Discover a thoughtful approach to movement, mobility and physical rehabilitation. Evidence-guided spinal alignment and active therapy in a calm, modern clinic setting.",
  location: {
    area: "Amla Nagar",
    subLocality: "Dilsukhnagar",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    fullAreaDisplay: "Amla Nagar, Dilsukhnagar, Hyderabad, Telangana, India",
    mapsSearchUrl:
      "https://www.google.com/maps/search/?api=1&query=Star+Chiropractic+and+Physiotherapy+Center+Amla+Nagar+Dilsukhnagar+Hyderabad+Telangana",
  },
  contact: {
    // Phone & WhatsApp are kept null until verified by the clinic owner.
    // Entering a phone string (e.g. "+91 90000 00000") automatically enables live call & chat CTAs.
    phone: null,
    whatsapp: null,
    email: null,
  },
  hours: {
    confirmed: false,
    notice: "Consultation hours will be confirmed upon owner verification.",
  },
  proposedTreatments: [
    {
      id: "physiotherapy",
      title: "Physiotherapy",
      tagline: "Active Musculoskeletal Restoration",
      shortDescription:
        "Individualized exercise therapy, targeted muscle reactivation, and structured rehabilitation protocols designed to relieve discomfort and restore functional movement.",
      keyFocus: ["Therapeutic Movement", "Joint Mobilization", "Functional Recovery"],
      imageUrl:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "chiropractic-care",
      title: "Chiropractic Care",
      tagline: "Spinal Biomechanics & Alignment",
      shortDescription:
        "Specialized musculoskeletal and spine-focused joint articulations aimed at restoring biomechanical balance, easing nerve tension, and improving range of motion.",
      keyFocus: ["Spinal Articulation", "Nerve Pathway Relief", "Biomechanical Balance"],
      imageUrl:
        "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "back-neck-care",
      title: "Back and Neck Care",
      tagline: "Targeted Cervical & Lumbar Relief",
      shortDescription:
        "Careful assessment and targeted care pathways for chronic spinal stiffness, postural stress from desk work, lumbar fatigue, and tension headaches.",
      keyFocus: ["Cervical Decompression", "Lumbar Stabilization", "Stiffness Reduction"],
      imageUrl:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "mobility-rehabilitation",
      title: "Mobility and Rehabilitation",
      tagline: "Progressive Functional Conditioning",
      shortDescription:
        "Gradual, monitored reconditioning designed to restore physical flexibility, rebuild balance confidence, and assist post-procedure movement independence.",
      keyFocus: ["Range of Motion", "Gait & Balance", "Functional Strength"],
      imageUrl:
        "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "posture-assessment",
      title: "Posture Assessment",
      tagline: "Biomechanical Screening & Ergonomics",
      shortDescription:
        "Thorough movement screenings and workstation posture reviews to pinpoint mechanical compensations and correct strain before chronic pain sets in.",
      keyFocus: ["Static & Dynamic Analysis", "Ergonomic Review", "Movement Quality"],
      imageUrl:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "sports-rehabilitation",
      title: "Sports Rehabilitation",
      tagline: "Conditioning & Return-to-Activity",
      shortDescription:
        "Tailored recovery roadmaps for active individuals and athletes seeking to safely rebuild tissue resilience, stamina, and movement confidence.",
      keyFocus: ["Tissue Resilience", "Dynamic Conditioning", "Return-to-Play Plans"],
      imageUrl:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80",
    },
  ],
  proposedValues: [
    {
      number: "01",
      title: "Personalized 1-on-1 Attention",
      tagline: "No Assembly-Line Care",
      description:
        "Every body possesses a unique mechanical signature. Consultations provide dedicated, unhurried attention to diagnose root causes rather than merely treating superficial symptoms.",
    },
    {
      number: "02",
      title: "Integrated Spine & Muscular Therapy",
      tagline: "Chiropractic Meets Active Physio",
      description:
        "Spinal alignment without muscular reinforcement is short-lived. We blend gentle joint articulations with active strengthening exercises to sustain long-term structural health.",
    },
    {
      number: "03",
      title: "Calm, Restorative Environment",
      tagline: "Designed for Comfort & Healing",
      description:
        "A quiet, private clinic space in Amla Nagar created to make every visit stress-free, welcoming, and centered entirely around your physical well-being.",
    },
    {
      number: "04",
      title: "Empowering Self-Care Education",
      tagline: "Long-Term Physical Autonomy",
      description:
        "We equip you with actionable posture habits, ergonomic advice, and custom home routines so you remain confident and resilient long after your session concludes.",
    },
  ],
};
