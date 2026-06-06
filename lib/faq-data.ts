// Single source of truth for FAQ Q/A. Consumed by both the FAQ
// component (rendered accordion) and the /faq page's FAQPage JSON-LD
// schema. Keeping these in one file means the rich-result accordion
// Google shows in search results can't drift out of sync with the
// on-page accordion users see.
export const FAQ_ITEMS = [
  {
    q: "What exactly is Heclus?",
    a: "Heclus is an AI-powered content creation platform that helps creators generate trending, high-retention videos using AI workflows, automation, and viral content systems.",
  },
  {
    q: "Is it only for YouTube Niches?",
    a: "Yes, for now. Heclus is focused specifically on helping creators discover and create trending YouTube content. More platforms and content formats are planned for future updates.",
  },
  {
    q: "What AI models does Heclus use?",
    a: "Heclus uses a number of models including popular text generation tools, text-to-speech tools, as well as the top image and video generation models.",
  },
  {
    q: "Do I need any technical knowledge to use it?",
    a: "None whatsoever. Heclus is designed to be user-friendly for both first-time and experienced creators.",
  },
  {
    q: "What do I get at the end?",
    a: "You receive a complete content package: a DOCX script file, an MP3 voiceover, all AI-generated images (PNG), thumbnails, and the full assembled video clips. Everything bundled in a ZIP file you can download and extract.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Your projects and generated content are stored under your account and are never shared with other users.",
  },
];
