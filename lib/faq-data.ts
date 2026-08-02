// Single source of truth for FAQ Q/A. Consumed by both the FAQ
// component (rendered accordion) and the /faq page's FAQPage JSON-LD
// schema. Keeping these in one file means the rich-result accordion
// Google shows in search results can't drift out of sync with the
// on-page accordion users see.
//
// Several entries below were written from real support tickets and the
// answers support already gave (HS05-HS23). Where a question keeps coming
// back through the ticket queue, answering it here is cheaper than
// answering it again — so if support's stock answer changes, change it
// here too.
export type FaqItem = {
  q: string;
  /** Opening paragraph. Always present, and reads on its own. */
  a: string;
  /** Optional list, for answers that are genuinely several parallel points. */
  bullets?: string[];
  /** Optional closing paragraph after the list. */
  outro?: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What exactly is Heclus?",
    a: "Heclus is an AI-powered content creation platform that helps creators generate trending, high-retention videos using AI workflows, automation, and viral content systems.",
  },
  {
    q: "Is it only for YouTube Niches?",
    a: "Yes, for now. Heclus is focused specifically on helping creators discover and create trending YouTube content. More platforms and content formats are planned for future updates.",
  },
  {
    q: "Does \"5 niches per month\" mean 5 videos per month?",
    a: "No — a niche is a channel slot, not a video. It is the channel you model your content on, and your plan sets how many of those you get:",
    bullets: [
      "Starter — 5 channel slots a month.",
      "Pro — 10 channel slots a month.",
    ],
    outro: "For each channel you can create an unlimited number of videos. So if you run two channels, you are using two of your slots and can keep producing for both. What actually limits your output is the credit on your own provider account, since generation is billed there rather than by us.",
  },
  {
    q: "How long can my videos be?",
    a: "Up to 45 minutes at the moment. Within that, length follows your script — a longer script with more narration beats gives a longer video. In practice most videos made on Heclus land between 3 and 13 minutes, with the median around 8, so there is plenty of headroom for long-form.",
  },
  {
    q: "What AI models does Heclus use?",
    a: "Heclus uses a number of models including popular text generation tools, text-to-speech tools, as well as the top image and video generation models.",
  },
  {
    q: "Can I use my own voice, or a voice I cloned elsewhere?",
    a: "Yes. Add the API key for that ElevenLabs account in setup, and your own voice models — including any you have cloned there — become available in the voiceover step alongside the voices Heclus provides.",
  },
  {
    q: "Can I keep the same character across scenes?",
    a: "Automatic character consistency is not implemented yet. In the meantime you can import your own images for any scene you want to control, so a recurring character or a specific look can be dropped in by hand where it matters.",
  },
  {
    q: "Do I need any technical knowledge to use it?",
    a: "None whatsoever. Heclus is designed to be user-friendly for both first-time and experienced creators.",
  },
  {
    q: "What do I get at the end?",
    a: "A complete content package, bundled in a ZIP you can download and extract:",
    bullets: [
      "A DOCX script file.",
      "An MP3 voiceover.",
      "Every AI-generated image, as PNG.",
      "Thumbnails.",
      "The full assembled video.",
    ],
  },
  {
    q: "How long does it take to make a video?",
    a: "Most of the pipeline is quick. Script and prompt generation typically take a few minutes, and the final assembly — where everything is stitched into the finished file — usually takes a few minutes too, with nine in ten finishing inside about thirteen. The variable part is image, voice and clip generation, which queues against your provider and scales with the number of narration beats, so a long video means many more generations than a short one.",
    outro: "If a step sits for hours rather than minutes, that is not normal — stop it and run it again, and contact support if it persists. You do not have to sit and watch either way: progress is saved at every step, so you can close the tab and pick the project back up where you left off.",
  },
  {
    q: "Am I charged for failed generations?",
    a: "No. Providers do not charge for generations that fail, and when you press Retry only the failed beats are requeued — it does not start the whole step over. Depending on which step you are in, you may also be able to retry individual failed items rather than the batch.",
  },
  {
    q: "How much storage do I get?",
    a: "Your plan includes a standing allowance for everything your projects hold — generated images, video clips, voiceovers, thumbnails and the finished export:",
    bullets: [
      "Starter and Founder — 100 GB.",
      "Pro — 200 GB.",
    ],
    outro: "It is a standing allowance rather than a monthly one: it does not reset each month, and it does not run down on its own. Deleting a project you have already downloaded frees its space back up immediately.",
  },
  {
    q: "What happens when I reach my storage limit?",
    a: "Nothing you have made is deleted or locked. Your existing projects stay exactly as they are and you can still download any of them — what stops is new writes, so the next generation step will not run until you are back under the cap. You have two ways forward:",
    bullets: [
      "Download the ZIP for projects you have finished with, then delete them to reclaim the space.",
      "Move up to Pro for 200 GB.",
    ],
    outro: "There is no paid storage add-on to buy. Most accounts never come close — a typical project is a fraction of the allowance, and the heaviest accounts on the platform today sit well under 100 GB.",
  },
  {
    q: "Do I need my own API keys, and how am I billed for generation?",
    a: "Generation runs on your own provider keys, which you connect once in setup. The providers bill you directly at their own published rates — Heclus never resells credits or adds a markup, so there is nothing between you and the real price. Your subscription pays for the platform: the pipeline, the niches, the assembly and the storage. That also means your generation spend is yours to control, which the next question covers.",
  },
  {
    q: "How do I keep my generation costs down?",
    a: "Four things make most of the difference:",
    bullets: [
      "Turn video generation off. The project then assembles from stills, one AI image held for the length of its narration beat, with no video-model spend at all. The expensive layer is a choice, not a requirement.",
      "Pick cheaper models per step. Every image and video step lists its models with the cost printed on the card and sorts by cheapest, and the range across models runs more than twenty-fold. Run a premium model on the hook and a budget one everywhere else.",
      "Set your prompt prefix once, so your style is consistent from the start. Re-rolling images to fix drift is a large share of what people spend.",
      "Watch the numbers as you go. Each step shows what it cost and your remaining provider balance in the same view, so there is no end-of-month surprise.",
    ],
    outro: "In our own project data, going images-only and choosing the cheapest image models together cut the cost of a video by roughly 70%.",
  },
  {
    q: "Can I monetize Heclus videos on YouTube?",
    a: "Yes. Heclus is a tool that helps you make videos, and YouTube has no issue with creators using tools like it. Everything Heclus produces for you is generated originally rather than copied from anyone, so the assets are yours to use and monetize. As with any channel, the usual YouTube policies on original content still apply to what you publish.",
  },
  {
    q: "Can I cancel anytime, and can I get a refund?",
    a: "Yes to both, within a window:",
    bullets: [
      "Commitment — plans are strictly month-to-month. There is no minimum term.",
      "Cancelling — cancel anytime from your dashboard. You keep full access until the end of the billing period you have already paid for.",
      "Refunds — a full refund is available within 7 days of purchase, as long as you have not created a niche. Creating one triggers channel analysis and incurs real cost on our side, which is why that is the cut-off.",
    ],
    outro: "If your situation does not fit neatly into that, contact support anyway — partial refunds are considered case by case. The full policy is at heclus.com/refund.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Your projects and generated content are stored under your account and are never shared with other users.",
  },
];

/** Flattens an item to one string for the FAQPage JSON-LD, whose Answer
 *  text has no markup. Bullets are written as full sentences so they read
 *  correctly once run together. */
export function faqPlainText(item: FaqItem): string {
  return [item.a, ...(item.bullets ?? []), item.outro].filter(Boolean).join(" ");
}
