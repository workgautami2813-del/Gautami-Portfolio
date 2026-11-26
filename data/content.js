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
    cardImage: { src: "/screens/Inbox%20v3A%20%E2%80%93%20Monochrome.png", alt: "Apycue Inbox where the AI agent answers a guest's room question on WhatsApp" },
    period: "2025 – now",
    tags: "AI · SaaS · Hospitality",
    cardTitle: "Apycue: an AI agent platform for hotels",
    cardText:
      "I designed the whole product on my own, from the first idea to every screen.",
    chips: ["Apycue", "Aug 2025 – now"],
    title: "Designing Apycue, an AI agent for hotels, as the only designer",
    intro:
      "Many hotels give a big part of every booking to online travel sites. Apycue helps them get more guests to book direct. It gives a hotel its own website, marketing, and an AI agent that talks to guests.",
    facts: [
      ["Role", "Only product designer"],
      ["Scope", "The whole product, from zero"],
      ["Team", "Founders and developers"],
      ["Tools", "Figma, Figma MCP, Claude"],
    ],
    impact: [
      ["10+", "hotels joined in the first year"],
      ["40–50%", "less design time for new features"],
      ["6+", "website templates for the builder"],
    ],
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "Hotel staff are busy, and most of them are not technical. An AI agent that chats with guests only helps if the staff can see what it said, trust it, and jump in when they need to. So I had to make the agent's work easy to follow. Nobody should have to learn how AI works to use it.",
        ],
      },
      {
        heading: "My role",
        paragraphs: [
          "I am the only designer on this product. I talk about new features with the founders and developers, plan how the product works, pick the colours and fonts, and design every screen. When a developer builds a screen, I check it against my design.",
        ],
      },
      {
        heading: "What I focused on",
        decisions: [
          ["Show what the agent did.", "Every chat shows who wrote each message. That way the team can trust the agent, and take over when they need to."],
          ["Set up the basics first.", "I made the look and a design system from scratch. Now new features are quick to design and they still match the rest."],
          ["Use AI to go faster, not to decide.", "I use Claude and the Figma MCP to find ideas and make first drafts of screens. I make the final choices myself."],
          ["Stay close to the build.", "I write notes for the developers and check the built screens. If something in the flow feels wrong, I tell them before release."],
        ],
      },
      {
        heading: "The Inbox",
        paragraphs: [
          "The Inbox is the screen hotel staff use the most. Messages from WhatsApp, the hotel website and phone calls all come into one list. The AI agent answers most of them. Staff only step in when a guest needs a real person. So the screen has to show quickly who needs help, and give that person what they need to reply.",
        ],
        decisions: [
          ["Group chats by who needs to act.", "The list has Needs you, With your team, and Handled by agent. Staff start at the top with Needs you."],
          ["Make taking over easy.", "One button, Take over, pauses the agent. When the work is done, Hand over to agent gives the chat back."],
          ["Always show who is replying.", "The top of the chat says Agent is Answering or Handled by your team. Each message is marked as the guest, the AI agent, or a team member by name. When Priya takes over, a small note in the chat says so."],
          ["Keep the guest's details close.", "The right side shows a short AI summary, the contact details and the team notes. Staff don't have to scroll up and read the whole chat to know what is going on."],
          ["Make hot leads easy to find.", "One tab shows only the guests who are most likely to book. For example, a wedding group of 30, or a guest who already said yes to the price."],
        ],
      },
      {
        gallery: [
          {
            src: "/screens/Inbox%20v3A%20%E2%80%93%20Monochrome.png",
            title: "The agent is answering",
            caption: "The agent gave Abhishek a price and said it would check the rooms. Two days later he is still waiting, so he shows up under Needs you. The reply box tells staff to take over.",
            alt: "Apycue Inbox with the AI agent answering a guest who wants 2 deluxe rooms for 12 to 14 December",
          },
          {
            src: "/screens/inbox-team.webp",
            title: "A team member takes over",
            caption: "Priya from the front desk takes over. A small note in the chat shows when she joined, and her messages carry her name. Abhishek moves to With your team. She tells him the rooms are free, he asks her to hold them, and the summary updates.",
            alt: "Apycue Inbox after a staff member took over the conversation from the AI agent",
          },
          {
            src: "/screens/Inbox%20v3A%20%E2%80%93%20Hot%20leads.png",
            title: "Hot leads",
            caption: "The Hot leads tab shows only the three guests most likely to book, so staff can look at them first. Abhishek is still waiting, so the Take over button is right there.",
            alt: "Apycue Inbox filtered to show three hot leads, with a Take over button",
          },
        ],
      },
      {
        heading: "What I learned",
        paragraphs: [
          "AI can make a screen in seconds. Deciding what the product should do is still my job. On Apycue, the hard part was deciding how much of the agent's work a hotel team needs to see.",
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
