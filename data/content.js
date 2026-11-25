// All portfolio text lives here. Edit this file to update the site.

export const profile = {
  name: "Gautami Kharwar",
  title: "Senior Product Designer",
  location: "Surat, India",
  email: "work.gautami2813@gmail.com",
  linkedin: "https://www.linkedin.com/in/gautamikharwar/",
  moreWork: "https://bento.me/gautamiuiux",
  availability: "Open to Senior Product Designer roles · remote, hybrid or on-site",
  quote:
    "AI can generate a screen in seconds. Deciding what the product should actually do is still a designer's job, and that's the part I love.",
};

export const highlights = [
  { value: "8+", label: "years designing web and mobile products" },
  { value: "60+", label: "e-commerce stores designed end to end" },
  { value: "10+", label: "hotels onboarded in Apycue's first year" },
  { value: "40–50%", label: "less design time with my AI workflow" },
];

export const projects = [
  {
    slug: "apycue",
    color: "apycue",
    wide: true,
    art: "agent",
    cardImage: { src: "/screens/inbox-agent.webp", alt: "Apycue Inbox, where the AI agent answers a guest's room enquiry on WhatsApp" },
    period: "2025 – now",
    tags: "AI · SaaS · Hospitality",
    cardTitle: "Apycue: an AI-agent platform for hotels",
    cardText:
      "Designed the whole product from scratch as a design team of one, from information architecture to every screen.",
    chips: ["Apycue", "Aug 2025 – now"],
    title: "Designing an AI-agent platform for hotels, as a team of one",
    intro:
      "Independent hotels lose a large share of each booking to OTA commissions. Apycue helps them win bookings directly, with their own website, marketing and AI agents that follow up on guest enquiries.",
    facts: [
      ["Role", "Sole product designer"],
      ["Scope", "Whole product, 0 to 1"],
      ["Team", "Founders and developers"],
      ["Tools", "Figma, Figma MCP, Claude"],
    ],
    impact: [
      ["10+", "hotel clients onboarded in the first year"],
      ["40–50%", "less design time for new features"],
      ["6+", "website templates powering the builder"],
    ],
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "Hotel teams are busy and not technical. An AI agent that talks to their guests is only useful if the team can see what it did, trust it, and step in when needed. The product had to make agent behaviour clear without making the hotel team learn how AI works.",
        ],
      },
      {
        heading: "My role",
        paragraphs: [
          "I own the product end to end: product and feature discussions, information architecture, user flows, the visual language (colour and typography), every screen, and design QA with developers.",
        ],
      },
      {
        heading: "Key decisions",
        decisions: [
          ["Show the agent's work, not just its result.", "Each conversation shows what the agent did and why, so the hotel team can trust it and take over when a human is needed."],
          ["Build the foundation first.", "I set up the visual language and a design system from scratch, so new features could ship fast and stay consistent."],
          ["Use AI to go faster, not to decide.", "I use Claude and the Figma MCP to explore best practices and generate starting screens. The final design decisions stay with me."],
          ["Stay with the build.", "I write UI specs, review built screens against the design, and flag UX and flow issues before release."],
        ],
      },
      {
        heading: "Designing the Inbox",
        paragraphs: [
          "The Inbox is where a hotel team works side by side with the AI agent. Every guest conversation, from WhatsApp, the hotel website or a phone call, lands in one list. The agent answers most of them. The team only steps in when a guest needs a person, so the screen has to show at a glance who needs to act, and give them everything they need to reply without scrolling back through the chat.",
        ],
        decisions: [
          ["Sort by who needs to act.", "Conversations are grouped into Needs you, With your team and Handled by agent. Staff see the two that need them first, not all nine."],
          ["One clear handover.", "Take over pauses the agent and Hand over to agent gives the conversation back. The header always shows who is answering, and the thread records the moment it changed hands."],
          ["Every message shows who sent it.", "Guest, AI agent or a named team member, each with its own style, so nobody has to guess what the guest has already been told."],
          ["The context sits next to the chat.", "The side panel shows the stay request with dates, rooms and the quoted price, an AI summary of where things stand, contact details and team notes."],
          ["Hot leads in one tap.", "A filter pulls out the guests most likely to book, such as a 30-guest wedding block or a guest who has accepted a quote."],
        ],
      },
      {
        gallery: [
          {
            src: "/screens/inbox-agent.webp",
            title: "The agent is answering",
            caption: "The AI agent quoted Abhishek a rate and is waiting on an availability check, so his conversation moves to Needs you. The reply box tells staff the agent has paused and is waiting for them.",
            alt: "Apycue Inbox with the AI agent answering a guest who wants 2 deluxe rooms for 12 to 14 December",
          },
          {
            src: "/screens/inbox-team.webp",
            title: "A team member takes over",
            caption: "Priya takes over from the agent. The thread marks the handover, the conversation moves to With your team, and the summary updates: both rooms are on hold until tonight.",
            alt: "Apycue Inbox after a staff member took over the conversation from the AI agent",
          },
          {
            src: "/screens/inbox-hot-leads.webp",
            title: "Hot leads",
            caption: "One tap narrows the Inbox to the three guests most likely to book, so the team spends its time where it can win a direct booking.",
            alt: "Apycue Inbox filtered to show three hot leads",
          },
        ],
      },
      {
        heading: "Reflection",
        paragraphs: [
          "AI can generate a screen in seconds. On this project the real design work was deciding what the product should do, and how much of the agent's thinking a hotel team needs to see.",
        ],
      },
    ],
  },
  {
    slug: "hotel-templates",
    color: "hotel",
    art: "sites",
    period: "2025 – now",
    tags: "Website builder",
    cardTitle: "6+ hotel website templates",
    cardText:
      "The templates behind Apycue's website builder, so any hotel can launch an SEO-friendly site.",
    chips: ["Apycue", "Website builder"],
    title: "6+ website templates that let any hotel launch a direct-booking site",
    intro:
      "A hotel's own website is where direct bookings start. I designed the templates behind Apycue's website builder, so hotels get a polished, SEO-friendly site without starting from scratch.",
    facts: [
      ["Role", "Sole designer"],
      ["Output", "6+ templates"],
      ["Used by", "Apycue's website builder"],
      ["Focus", "Direct bookings, SEO"],
    ],
    impact: [
      ["6+", "templates designed for the builder"],
      ["10+", "hotels onboarded onto Apycue in year one"],
      ["SEO", "friendly structure built into every template"],
    ],
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "Many independent hotels have outdated websites that send guests to OTAs. They need a site that looks like their brand and pushes guests to book direct, but they don't have a design team.",
        ],
      },
      {
        heading: "Key decisions",
        decisions: [
          ["Different looks, one system.", "Every template is built on the same components, so a hotel can change its look without rebuilding its content."],
          ["Booking first.", "Each template keeps the path to a direct booking visible on every page."],
          ["SEO from the start.", "The page structure is set up for search in the product, so hotels get it without extra work."],
        ],
      },
      {
        shot: ["Add the template set here", "Show 3–6 template home pages side by side, plus one on mobile."],
      },
    ],
  },
  {
    slug: "ecommerce",
    color: "shop",
    art: "flow",
    period: "2020 – 2025",
    tags: "E-commerce · Design systems",
    cardTitle: "60+ online stores, home page to checkout",
    cardText:
      "The full shopping journey for B2C brands at Aureate Labs and Ayu Developers, plus the design systems behind them.",
    chips: ["Aureate Labs · Ayu Developers", "2020 – 2025"],
    title: "60+ online stores, from home page to checkout",
    intro:
      "Five years of designing B2C e-commerce: the full shopping journey, the design systems that kept it consistent, and later leading junior designers on it.",
    facts: [
      ["Role", "Senior UI/UX Designer"],
      ["Scope", "Full shopping journey"],
      ["Team", "Developers, PMs, junior designers"],
      ["Tools", "Figma, Adobe XD"],
    ],
    impact: [
      ["30+", "stores designed end to end at Aureate Labs"],
      ["35+", "web and mobile projects led at Ayu Developers"],
      ["1", "design system per project, set before the inner pages"],
    ],
    sections: [
      {
        heading: "What I did",
        paragraphs: [
          "At Aureate Labs I designed stores end to end: home page, product pages, cart and checkout. I ran usability testing and changed designs based on what we learned.",
          "At Ayu Developers I moved into a senior role. I designed each project's home page and set its design system, colours and typography. Junior designers then built the inner pages on that system, and I reviewed their work and helped them improve it.",
        ],
      },
      {
        heading: "Key decisions",
        decisions: [
          ["Design system first.", "Setting colours, type and components before the inner pages kept 35+ projects consistent and made junior designers faster."],
          ["Checkout gets the most care.", "It is the step where a store wins or loses the sale, so it got the most testing and iteration."],
          ["Review, don't redo.", "Giving junior designers specific feedback raised quality across the team instead of creating a bottleneck."],
        ],
      },
      {
        shot: ["Add one store's journey here", "Home page, product page, cart and checkout for one brand you can show."],
      },
    ],
  },
];

export const experience = [
  { when: "Aug 2025 – Present", role: "Product Designer", current: true, company: "Apycue", text: "Sole designer for an AI-agent platform for hotels. Product flow, website templates, design system and design QA." },
  { when: "Aug 2023 – Aug 2025", role: "Senior UI/UX Designer", company: "Ayu Developers", text: "35+ web and mobile projects, mostly e-commerce. Owned home pages and design systems, guided junior designers." },
  { when: "Aug 2020 – Aug 2023", role: "Senior UI/UX Designer", company: "Aureate Labs", text: "30+ e-commerce stores end to end, from home page to checkout. Design systems and usability testing." },
  { when: "Aug 2018 – Aug 2020", role: "UI/UX Designer, 2D Games & Web", company: "3WP Infosystem", text: "Game UI, 2D assets and interaction flows for casual games; UI for internal web tools." },
  { when: "Jan 2018 – Aug 2018", role: "UI/UX Designer", company: "Aspirebit Technolab", text: "App flows and screens for client mobile apps, plus 2D game flows and in-app graphics." },
];

export const skills = {
  "What I do": ["Product design", "Information architecture", "User flows", "Design systems", "Prototyping", "Usability testing", "Design handoff"],
  Tools: ["Figma", "Figma MCP", "Claude Code", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "After Effects"],
  Education: ["B.E. Computer Engineering, Gujarat Technological University", "Google UX Design Foundations"],
};
