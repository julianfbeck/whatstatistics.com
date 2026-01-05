export type FaqItem = {
  slug: string;
  question: string;
  summary: string;
  body: string[];
  steps?: string[];
};

const faqs: FaqItem[] = [
  {
    slug: "data-privacy",
    question: "Is my data safe and private?",
    summary: "Yes. Everything runs locally on your device and your chats never leave your phone.",
    body: [
      "Absolutely. WhatStats processes all chat data locally on your device.",
      "Your conversations never leave your phone and are not uploaded to any server.",
      "We do not collect, store, or have access to your personal chat data."
    ]
  },
  {
    slug: "how-to-import-chats",
    question: "How to import chats",
    summary: "Export a chat without media and share it to WhatStats.",
    body: [
      "This is the fastest import flow and the most reliable. Export without media to keep the file small and the analysis quick."
    ],
    steps: [
      "Open WhatsApp and select a chat",
      "Tap the menu and choose Export Chat",
      "Select \"Without Media\"",
      "Share the file to WhatStats",
      "Tap Yes to add the chat"
    ]
  },
  {
    slug: "what-is-chat-wrapped",
    question: "What is Chat Wrapped?",
    summary: "A story-style recap inspired by Spotify Wrapped, built from your chat export.",
    body: [
      "Chat Wrapped is a visual story of your chat history.",
      "It highlights message patterns, emoji usage, active times, and conversation dynamics in a swipeable recap."
    ]
  },
  {
    slug: "missing-person",
    question: "One person does not show up in the analytics",
    summary: "They need at least one message in the chat to appear.",
    body: [
      "A person must send at least one message to appear in analytics.",
      "If someone was added to a group but never posted, they will not show up."
    ]
  },
  {
    slug: "supported-platforms",
    question: "Which platforms does WhatStats support?",
    summary: "The app is available on iOS and works with WhatsApp exports from any platform.",
    body: [
      "WhatStats is currently available for iOS.",
      "The app works with WhatsApp chat exports created on any platform."
    ]
  },
  {
    slug: "group-chats",
    question: "Can I analyze group chats?",
    summary: "Yes. Group chats are fully supported with per-person analytics.",
    body: [
      "Yes. WhatStats works with both individual and group chats.",
      "You can see per-person activity, response time patterns, and conversation dynamics."
    ]
  },
  {
    slug: "analytics-accuracy",
    question: "How accurate are the analytics?",
    summary: "We read directly from WhatsApp exports, so the results are as accurate as the file.",
    body: [
      "WhatStats reads data directly from the exported chat file.",
      "Accuracy depends on the completeness of the export, but the parsing is precise."
    ]
  },
  {
    slug: "share-chat-wrapped",
    question: "Can I share my Chat Wrapped?",
    summary: "Yes. Export images or a video without including message content.",
    body: [
      "Yes. Chat Wrapped is designed to be shareable.",
      "You can export images or a video recap, and no personal message content is included."
    ]
  },
  {
    slug: "multiple-chats",
    question: "What if I have multiple chats to analyze?",
    summary: "Import and analyze as many chats as you want. Each chat stays separate.",
    body: [
      "You can import and analyze multiple chats independently.",
      "Each chat is processed and stored separately, so you can compare them later."
    ]
  },
  {
    slug: "analysis-time",
    question: "Why does the analysis need so much time?",
    summary: "Large chats take longer because the app reads every message.",
    body: [
      "Analysis time depends on chat size.",
      "Large chats with thousands of messages take longer to parse and summarize."
    ]
  },
  {
    slug: "no-ai",
    question: "Do we use AI?",
    summary: "No. All analytics are computed locally with standard data processing.",
    body: [
      "No. WhatStats does not use AI.",
      "All analytics run locally using traditional data processing methods."
    ]
  },
  {
    slug: "whatsapp-business",
    question: "Does the app work with WhatsApp Business?",
    summary: "Yes. Export flow is the same for WhatsApp and WhatsApp Business.",
    body: [
      "Yes. WhatStats works with exports from WhatsApp Business.",
      "The export flow is the same and all analytics are supported."
    ]
  }
];

export default faqs;
