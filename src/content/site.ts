import { APP_STORE_URL, SUPPORT_EMAIL, SUPPORT_EMPTY_STATE } from '../lib/config';

const supportPath = '/support/';
const supportMailto = SUPPORT_EMAIL ? `mailto:${SUPPORT_EMAIL}?subject=Replay%20Rally` : '';
const faqHelpAnswer = `Through the support page at ${supportPath}. A short clip of the footage that gave the detector trouble helps enormously${
  SUPPORT_EMAIL ? `, or email ${SUPPORT_EMAIL}` : ''
}.`;
const faqHelpMarkdown = `Through the support page at [${supportPath}](${supportPath}). A short clip of the footage that gave the detector trouble helps enormously${
  SUPPORT_EMAIL ? `, or email [${SUPPORT_EMAIL}](${supportMailto})` : ''
}.`;
const faqPlatformsLead = 'Not yet. Currently iPhone only; iPad support is planned. There is no Android version';
const faqPlatformsAnswer = `${faqPlatformsLead}${SUPPORT_EMAIL ? ` — email ${SUPPORT_EMAIL} to request it` : ''}.`;
const faqPlatformsMarkdown = `${faqPlatformsLead}${
  SUPPORT_EMAIL ? ` — email [${SUPPORT_EMAIL}](${supportMailto}) to request it` : ''
}.`;
const faqSportsLead =
  'Not yet. The detector is tuned to the sound of a pickleball paddle, so other racket sports aren’t supported';
const faqSportsAnswer = `${faqSportsLead}${SUPPORT_EMAIL ? ` — email ${SUPPORT_EMAIL} to request one` : ''}.`;
const faqSportsMarkdown = `${faqSportsLead}${
  SUPPORT_EMAIL ? ` — email [${SUPPORT_EMAIL}](${supportMailto}) to request one` : ''
}.`;

export const appStoreCtaText = {
  available: 'Download on the App Store',
  availableShort: 'App Store',
  comingSoon: 'Coming soon to the App Store',
  comingSoonShort: 'Coming soon',
} as const;

export const pageMeta = {
  home: {
    path: '/',
    label: 'Home',
    title: 'Replay Rally — Skip to the good parts of your pickleball videos',
    description:
      'Replay Rally is a $19.99 iPhone app that finds every rally in a pickleball video on-device in seconds, so you can jump point to point, watch in slow motion, and export a highlight reel with the dead time removed.',
    llmsDescription: 'Product overview, features, price, privacy, and common questions.',
  },
  howItWorks: {
    path: '/how-it-works/',
    label: 'How it works',
    title: 'How on-device rally detection works',
    description:
      'Replay Rally detects pickleball rallies from the sound of paddle contact using on-device signal processing. Here’s what it listens for, how accurate it is, and what happens when you mark a rally.',
    llmsDescription: 'How on-device audio detection, manual marking, and export work.',
  },
  faq: {
    path: '/faq/',
    label: 'FAQ',
    title: 'FAQ — pickleball video review on iPhone',
    description:
      'Answers about Replay Rally: what it costs, what it uploads, supported phones and videos, accuracy, AI plans, and refunds.',
    llmsDescription: 'Answers about price, privacy, compatibility, detection, exports, AI plans, and support.',
  },
  support: {
    path: '/support/',
    label: 'Support',
    title: 'Support',
    description:
      'Get help with Replay Rally for iPhone: contact, troubleshooting missed or extra rallies, and export.',
    llmsDescription: 'Contact information and fixes for common detection and export issues.',
  },
  privacy: {
    path: '/privacy/',
    label: 'Privacy',
    title: 'Privacy policy',
    description:
      'Replay Rally works on your iPhone without an account. Optional feedback sharing, on by default, sends your rally corrections and numeric detection measurements — not video or audio — only to improve rally detection.',
    llmsDescription: 'Privacy policy: on-device video processing; optional corrections and detection measurements (on by default) and optional full videos (off by default), used only to improve rally detection.',
  },
  press: {
    path: '/press/',
    label: 'Press',
    title: 'Press kit',
    description:
      'Boilerplate, screenshots, and app icon for Replay Rally, the $19.99 iPhone app that finds pickleball rallies on-device.',
    llmsDescription: 'Press boilerplate, product facts, downloadable screenshots, icon, and usage terms.',
  },
} as const;

export const screenMedia = {
  rallyTimeline: {
    file: 'rally-timeline.png',
    alt: 'Replay Rally on iPhone showing a pickleball court, the rally bar reading Rally 16 of 90 · 7 shots, and the jog wheel with a yellow rally band and shot dots.',
    caption: 'Every rally is a band on the wheel; every shot is a dot.',
    width: 1260,
    height: 2736,
  },
  clipMenu: {
    file: 'clip-menu.png',
    alt: 'The Clip menu in Replay Rally with All rallies (no dead time), Last 15 seconds, Last 10 seconds, and Rally options.',
    caption: 'One tap saves the rally — or the whole game without the waiting.',
    width: 1260,
    height: 2736,
  },
  findingRallies: {
    file: 'finding-rallies.png',
    alt: 'Replay Rally mid-detection, showing Finding rallies… above the jog wheel while a player swings on court.',
    caption: 'Detection runs on the phone and takes seconds.',
    width: 1260,
    height: 2736,
  },
  scrub: {
    file: 'scrub.png',
    alt: 'Scrubbing in Replay Rally: the controls fade, leaving the time readout 4:30.9 and the jog wheel, while a player lunges for a low ball.',
    caption: 'Drag the wheel and everything else gets out of the way.',
    width: 1260,
    height: 2736,
  },
  slowMotion: {
    file: 'slow-motion.png',
    alt: 'Replay Rally playing at ¼× speed with the speed picker, rally bar, and jog wheel visible below the court.',
    caption: '¼×, ½×, 1×, 1.5× — pitch-corrected, full resolution.',
    width: 1260,
    height: 2736,
  },
  landscape: {
    file: 'landscape.png',
    alt: 'Replay Rally in landscape: a full-screen pickleball court with a thin control strip along the bottom and the Clip button in the side gutter.',
    caption: 'Landscape keeps every control out of the lower half of the frame.',
    width: 2736,
    height: 1260,
  },
} as const;

export const pressFrames = [
  { file: '01-skip-to-the-good-parts.png', caption: 'Skip to the good parts.', width: 1320, height: 2868 },
  { file: '02-minus-the-dead-time.png', caption: 'Your whole game, minus the dead time.', width: 1320, height: 2868 },
  { file: '03-found-in-seconds.png', caption: 'Every rally, found in seconds.', width: 1320, height: 2868 },
  { file: '04-feel-every-shot.png', caption: 'Scrub with your thumb. Feel every shot.', width: 1320, height: 2868 },
  { file: '05-stays-sharp.png', caption: 'Slow motion that stays sharp.', width: 1320, height: 2868 },
  { file: '06-built-for-court-footage.png', caption: 'Built for court footage.', width: 2868, height: 1320 },
] as const;

export const home = {
  eyebrow: 'REPLAY RALLY FOR IPHONE · $19.99 ONE TIME',
  heading: { before: 'Skip to the ', band: 'good parts.', after: '' },
  directAnswer:
    'Replay Rally is an iPhone app for reviewing pickleball videos. Open any game recording from Photos and it finds every rally on your phone in seconds — no upload, no account — so you can jump point to point, slow the fast ones down, and save a highlight reel with the standing-around cut out.',
  secondaryCta: 'See how it works →',
  proofs: [
    {
      value: '10:06 → 6:31',
      label: 'Ten minutes of open play became a 6½-minute reel of 60 rallies',
    },
    {
      value: '90',
      label: 'Rallies found in one 18:58 game, in seconds, with nothing uploaded',
    },
    {
      value: 'Seconds',
      label: 'To process a whole game — review it between games, not the next day',
    },
  ],
  featuresHeading: 'What Replay Rally does',
  features: [
    {
      eyebrow: 'ON-DEVICE DETECTION',
      heading: { before: 'Every rally found in ', band: 'seconds,', after: ' by listening for the paddle.' },
      body:
        'Replay Rally detects rallies from the sound of paddle contact — the pop that lives between 1 and 8 kHz — using signal processing that runs entirely on your iPhone. A full game is processed in seconds, not an hour, so you can review it on the bench before the next one. Your video never leaves the phone.',
      screen: 'findingRallies',
    },
    {
      eyebrow: 'RALLY TIMELINE',
      heading: { before: 'Jump point to point. Scrub ', band: 'frame by frame.', after: '' },
      body:
        'Every rally shows up as a yellow band on a frame-accurate jog wheel, with a dot for every shot. Tap the arrows to jump between rallies like chapters. Then drag the wheel to scrub frame by frame — fine enough to catch the paddle angle on a dink or the exact moment a ball clips the net — with a haptic tick on every paddle strike.',
      screen: 'rallyTimeline',
    },
    {
      eyebrow: 'PLAYBACK',
      heading: { before: 'Slow motion that ', band: 'stays sharp.', after: '' },
      body:
        'Play at ¼×, ½×, 1×, or 1.5× with pitch-corrected audio, in the original resolution — nothing is transcoded. Pinch to zoom up to 8× and follow the ball. Double-tap either side of the video to skip five seconds.',
      screen: 'slowMotion',
    },
    {
      eyebrow: 'EXPORT',
      heading: { before: 'Your whole game, ', band: 'minus the dead time.', after: '' },
      body:
        'One tap saves the rally you just watched to Photos, full quality, near-instant. Or export every rally stitched into a single reel with the dead time removed — a 10-minute session becomes a 6-minute highlight video.',
      screen: 'clipMenu',
    },
  ],
  howHeading: 'How it works',
  steps: [
    {
      title: 'Pick a video.',
      body: 'Choose any pickleball recording from your Photos library. Replay Rally reads only the video you pick, never your library.',
    },
    {
      title: 'Rallies appear in seconds.',
      body: 'The detector listens for paddle strikes and marks every rally on the jog wheel.',
    },
    {
      title: 'Review.',
      body: 'Tap between rallies, scrub frame by frame, slow the fast exchanges down, zoom in on the kitchen.',
    },
    {
      title: 'Save the good parts.',
      body: 'Clip a single rally or export the whole game as one dead-time-free reel to Photos.',
    },
  ],
  howLink: 'Read how rally detection works →',
  audienceHeading: 'Who it’s for',
  audiences: [
    {
      title: 'Made for',
      body: 'Rec players who film open play or league games on a phone or tripod and want to review them without scrubbing. Coaches and partners breaking down points together. Anyone who has ever fast-forwarded through 40 minutes of camcorder footage looking for one rally.',
    },
    {
      title: 'Not for',
      body: 'Live scoring or line calls. Ball tracking or shot-speed overlays. Sports other than pickleball — the detector is tuned to the sound of a pickleball paddle.',
    },
  ],
  priceHeading: 'Price',
  price: '$19.99',
  priceEyebrow: 'ONE-TIME PURCHASE',
  priceBody:
    'Replay Rally costs $19.99 once on the App Store. There is no subscription, no account, and no in-app purchase. Every feature above works offline, forever. That’s less than most players pay for a single session of open play.',
  aiHeading: 'AI coaching is on the roadmap',
  aiBody:
    'A future update will add optional AI coaching — how the point ended, what to work on, the patterns that cost you games — as a paid subscription, because running it costs real money. Rally detection, playback, and export are included in the one-time price and will stay that way.',
  privacyHeading: 'Private by design',
  privacyFacts: [
    'No account, no advertising, no tracking. Detection, editing, and export all run on your iPhone.',
    'Add-only Photos access: Replay Rally can save clips but cannot read your library.',
    'Feedback sharing is on by default: when you correct a rally, your corrections and numeric detection measurements — not video or audio — are sent only to improve detection. Turn it off anytime in Settings.',
  ],
  privacyLink: 'Privacy policy →',
  questionsHeading: 'Questions',
  questions: [
    {
      question: 'Does Replay Rally upload my video?',
      answer:
        'Not by default. Detection, playback, marking, and export all run on your iPhone. Feedback sharing is on by default, but it sends your corrections and numeric detection measurements, not video or audio. Uploading the full video of recordings you correct is a separate setting, off unless you turn it on. Both are in Settings → Improve rally detection.',
    },
    {
      question: 'What if it misses a rally or picks up the next court?',
      answer:
        'Mark the rally by hand with two taps — at the serve and when the ball is dead. With feedback sharing on, your marks help improve the detector.',
    },
    {
      question: 'What phones and videos does it support?',
      answer:
        'Any iPhone running iOS 17 or later, and any video that plays in the Photos app — including footage imported from a GoPro, DJI, or camera. iPad support is planned.',
    },
    { question: 'Is it a subscription?', answer: 'No. Your first three videos are free; one $19.99 purchase unlocks the rest.' },
  ],
  questionsLink: 'All questions →',
  finalHeading: { before: 'Stop scrolling. ', band: 'Start replaying.', after: '' },
  finalNote: 'iPhone · iOS 17 or later · $19.99 one time',
} as const;

export const howItWorks = {
  eyebrow: 'HOW IT WORKS',
  heading: { before: 'It finds rallies by ', band: 'listening,', after: ' not watching.' },
  directAnswer:
    'Replay Rally finds rallies by analyzing the audio track of your video for the distinctive pop of a pickleball paddle, then grouping those strikes into points. The analysis runs on your iPhone in seconds and nothing is uploaded.',
  sections: {
    audio: {
      heading: 'Why audio instead of video?',
      paragraphs: [
        'A pickleball paddle strike is one of the most recognizable sounds in sport: a short, sharp pop with most of its energy between 1 and 8 kHz. Finding that sound is far cheaper than tracking a ball across 30 frames per second, which is why Replay Rally can process an hour of footage in seconds on a phone, with no cloud, no model download, and no battery drain. It also means the camera angle doesn’t matter — behind the baseline, on a fence, at floor level — as long as the microphone can hear the court.',
      ],
    },
    detector: {
      heading: 'What does the detector actually do?',
      steps: [
        {
          title: 'Onset detection.',
          body: 'It computes spectral flux — how quickly the sound spectrum changes — restricted to the 1–8 kHz band, so it responds to paddle pops and mostly ignores voices, shoes, and HVAC.',
        },
        {
          title: 'Adaptive threshold.',
          body: 'Strikes are kept when they stand well above a rolling median of the surrounding sound, which lets the same detector work in a quiet park and a loud gym.',
        },
        {
          title: 'Clustering into rallies.',
          body: 'Strikes that fall within a rally’s rhythm are joined into one point; gaps longer than a point can plausibly pause split them.',
        },
        {
          title: 'Rejecting what isn’t your rally.',
          body: 'Strikes from an adjacent court are quieter and cluster at a different amplitude, so they’re separated out. Pre-serve dribbling — the fast, regular bounce before a serve — is recognized by its tempo and dropped.',
        },
      ],
      after:
        'The result is a list of rallies with a timestamp for every shot, which is what draws the bands and dots on the jog wheel and drives the haptic tick on each strike.',
    },
    accuracy: {
      heading: 'How accurate is it?',
      paragraphs: [
        'On a court with one game and a phone within earshot, Replay Rally finds almost every rally with edges within a few tenths of a second of the serve and the ball going dead. The hard case is a busy rec center with games on both sides and a far-away phone: some quiet, far-side points can be missed and occasional strikes from the next court can be picked up. Both have a fix: a missed rally takes two taps to mark by hand, a false one is one tap on the trash button to remove. With feedback sharing on, those corrections help improve the detector — see the next section.',
      ],
    },
    calibration: {
      heading: 'What happens when you mark a rally?',
      paragraphs: [
        'Mark any rally by hand — tap Mark at the serve, tap again when the ball is dead — and it is added to the timeline right away. Drag a rally’s edges on the wheel to trim it, or delete one the detector picked up from the next court. With feedback sharing on, those corrections are sent to improve the detector in future updates.',
      ],
    },
    highlight: {
      heading: 'How to make a pickleball highlight reel on iPhone',
      steps: [
        'Open Replay Rally and choose a game video from Photos.',
        'Wait a few seconds while the rallies are found; they appear as yellow bands on the wheel.',
        'Optionally delete any false rally with the trash button, or trim an edge by holding it on the wheel and dragging.',
        'Long-press the Clip button and choose “All rallies (no dead time)”. The reel is saved to Photos with the standing-around removed.',
      ],
    },
    ai: {
      heading: 'What about AI coaching?',
      paragraphs: [
        'Not in this version. AI coaching — what ended a point, what to work on, the patterns that cost you games — is planned as an optional paid subscription in a future update, because running it costs real money. Nothing on this page depends on it.',
      ],
    },
  },
  ctaHeading: 'See it on your own footage.',
} as const;

export const faq = {
  eyebrow: 'FAQ',
  heading: { before: 'Questions, ', band: 'answered.', after: '' },
  directAnswer:
    'Replay Rally is an iPhone app that finds rallies in pickleball videos on-device — free for your first three videos, $19.99 once to unlock the rest. Below are the questions people ask before and after buying it.',
  items: [
    {
      question: 'What is Replay Rally?',
      answer:
        'Replay Rally is an iPhone app for reviewing pickleball videos. It automatically finds every rally in a recording, lets you jump between points, watch in slow motion, and export individual rallies or a full highlight reel with the dead time removed.',
    },
    {
      question: 'How much does it cost?',
      answer: 'Free to download, and your first three videos work in full. One $19.99 in-app purchase unlocks every video after that and removes the export watermark. No subscription, no account.',
    },
    {
      question: 'Does Replay Rally upload my video anywhere?',
      answer:
        'Not by default. Detection, playback, marking, and export all run on your iPhone. Feedback sharing, on by default, sends your corrections, numeric pose, motion and sound measurements the detector computed (not video or audio), and app diagnostics, used only to improve rally detection. “Also send full videos” is a separate setting, off by default: only if you turn it on does the original video, with its audio, of each recording you correct upload over Wi-Fi. Both are in Settings → Improve rally detection; everything keeps working with them off. Feedback already sent stays stored.',
    },
    {
      question: 'Which iPhones and videos are supported?',
      answer:
        'Any iPhone on iOS 17 or later. Any video that plays in the Photos app works, including footage imported from a GoPro, DJI, or dedicated camera. The original file is used as-is — no transcoding, no quality loss.',
    },
    {
      question: 'Is there an iPad or Android version?',
      answer: faqPlatformsAnswer,
      markdownAnswer: faqPlatformsMarkdown,
      answerParts: [
        faqPlatformsLead,
        ...(SUPPORT_EMAIL
          ? ([' — email ', { label: SUPPORT_EMAIL, url: supportMailto }, ' to request it'] as const)
          : []),
        '.',
      ],
    },
    {
      question: 'How long does detection take?',
      answer:
        'Seconds. The detector analyzes the audio track rather than every video frame, so an hour of footage takes only a few seconds on a modern iPhone — fast enough to review a game between games instead of the next day.',
    },
    {
      question: 'How accurate is rally detection?',
      answer:
        'On a court with one game and a phone within earshot it finds almost every rally. Busy rec centers with games on adjacent courts are the hard case — some far-side points can be missed and the next court can occasionally be picked up. Mark missed rallies by hand and delete ones from the next court; with sharing on, those corrections help improve the detector.',
    },
    {
      question: 'What if it misses a rally?',
      answer:
        'Tap Mark at the serve and again when the ball is dead. The rally is added to the timeline immediately.',
    },
    {
      question: 'Can I fix a rally that starts or ends at the wrong time?',
      answer:
        'Yes. Hold your finger on the rally’s edge on the jog wheel until it latches, then drag to trim it. The new length shows live while you drag.',
    },
    {
      question: 'What does “All rallies (no dead time)” do?',
      answer:
        'It stitches every rally in order into one video with the time between points removed and saves it to your Photos library. A 10-minute session typically becomes a 6-minute reel. The export is passthrough — full original quality, no re-encoding — so it takes seconds.',
    },
    {
      question: 'Does Replay Rally need access to my photo library?',
      answer:
        'Only add-only access, which lets it save clips. It cannot read, browse, or scan your library. The video you open is handed over by the system picker one file at a time.',
    },
    {
      question: 'Does Replay Rally have AI coaching?',
      answer:
        'Not yet. AI coaching — what ended a point, what to work on, the patterns that cost you games — is planned as an optional paid subscription in a future update, because running it costs real money. Everything in the app today is included in the one-time unlock and will stay that way.',
    },
    {
      question: 'Does it work for tennis, padel, or table tennis?',
      answer: faqSportsAnswer,
      markdownAnswer: faqSportsMarkdown,
      answerParts: [
        faqSportsLead,
        ...(SUPPORT_EMAIL
          ? ([' — email ', { label: SUPPORT_EMAIL, url: supportMailto }, ' to request one'] as const)
          : []),
        '.',
      ],
    },
    {
      question: 'Can I get a refund?',
      answer: 'Purchases are handled by Apple. Request a refund at reportaproblem.apple.com within 14 days of purchase.',
    },
    {
      question: 'How do I get help?',
      answer: faqHelpAnswer,
      markdownAnswer: faqHelpMarkdown,
      answerParts: [
        'Through the support page at ',
        { label: supportPath, url: supportPath },
        '. A short clip of the footage that gave the detector trouble helps enormously',
        ...(SUPPORT_EMAIL
          ? ([', or email ', { label: SUPPORT_EMAIL, url: supportMailto }] as const)
          : []),
        '.',
      ],
    },
  ],
} as const;

export const support = {
  eyebrow: 'SUPPORT',
  heading: { before: 'We’ll get you ', band: 'back on court.', after: '' },
  directAnswer:
    'Replay Rally is made by one developer, and support requests go straight to the person who wrote the detector.',
  contact: {
    heading: 'Contact',
    body: SUPPORT_EMAIL || SUPPORT_EMPTY_STATE,
  },
  troubleshootingHeading: 'Troubleshooting',
  items: [
    {
      question: 'It missed a rally.',
      answer:
        'Tap Mark at the serve and again when the ball is dead. With feedback sharing on, the correction helps improve detection in future updates.',
    },
    {
      question: 'It found rallies from the court next to mine.',
      answer:
        'Delete them with the trash button on the rally bar. A far-away phone in a busy rec center picks up more of the neighbors; filming closer to your own court helps.',
    },
    {
      question: 'Detection found nothing at all.',
      answer:
        'Check that the video has an audio track and that the phone wasn’t muted or in a case that blocks the microphone. If the audio is fine, mark the rallies by hand and email us so we can look at why.',
    },
    {
      question: 'The export didn’t appear in Photos.',
      answer:
        'The first export asks for add-only Photos permission; if it was declined, enable it in iPhone Settings → Privacy & Security → Photos → Replay Rally → “Add Photos Only”.',
    },
  ],
  links: 'FAQ and Privacy.',
} as const;

export const privacy = {
  eyebrow: 'PRIVACY POLICY · EFFECTIVE OCTOBER 5, 2026',
  heading: { before: 'Your footage, ', band: 'your choice.', after: '' },
  directAnswer:
    'Replay Rally detects rallies, plays videos, saves your edits, and exports clips on your iPhone. No account or upload is needed for any of that. Optional feedback sharing, on by default, sends your corrections and numeric detection measurements — not video or audio — only to improve rally detection. Sending full videos is a separate setting, off by default.',
  sections: [
    {
      heading: 'Your videos',
      body: 'You choose a recording with the system picker. Detection, playback, marking, and clip export run on your iPhone. Clips are saved with add-only Photos access; the app cannot read or browse your library.',
    },
    {
      heading: 'Feedback to improve the model',
      body: 'Feedback sharing is optional and on by default. While “Share rally corrections” is on in Settings, Replay Rally uploads your existing and future corrections to our feedback service. Each edit sends a snapshot of both detectors’ results, your edits, which parts of the video you watched, and app, build, model, and performance diagnostics; each snapshot replaces the previous one, so an undone correction does not remain your latest feedback. The first time you correct a video, its detection features are sent too: numeric pose, motion, and sound measurements the detector computed from the whole recording. They are not video or audio. A random installation identifier authorizes sending.',
    },
    {
      heading: '“I checked the whole video”',
      body: 'Optionally, you can mark a video as checked: every rally’s start and end is right and none is missing. With sharing on, that confirmation is sent with your corrections. It does not upload the video.',
    },
    {
      heading: 'Optional full videos',
      body: '“Also send full videos” is off by default and separate from sharing corrections. Only if you turn it on, Replay Rally also uploads the original file, including its audio, of each recording you correct, over Wi-Fi when iOS chooses, so we can label games by hand. Undoing every correction or turning the setting off cancels an unfinished upload; videos already sent stay stored.',
    },
    {
      heading: 'How we use it',
      body: 'Only to investigate detection mistakes and improve Replay Rally’s rally-detection model. Never for advertising or tracking. Footage is not anonymized: video can show people.',
    },
    {
      heading: 'Your choice',
      body: 'Turn off Settings → Improve rally detection → “Share rally corrections” at any time to stop further uploads; every feature keeps working. Feedback already sent stays stored; turning sharing off does not delete it. You do not need to check a whole video to contribute.',
    },
    {
      heading: 'Recording metadata',
      body: 'Corrections and detection features carry no camera metadata. A full video, if you turn that setting on, is the original file and keeps its embedded metadata, which may include location. Video excerpts sent by earlier test builds may also retain recording metadata.',
    },
    {
      heading: 'Purchases',
      body: 'Apple handles purchases through the App Store. AI coaching is not available in this version.',
    },
    {
      heading: 'Data on your device',
      body: 'Rally markers and edits are stored on your device so you don’t redo work. Deleting the app deletes them.',
    },
    {
      heading: 'This website',
      body: 'This site is static, sets no cookies, loads nothing from third parties, and runs no analytics.',
    },
    {
      heading: 'Changes',
      body: 'If this policy changes, the new version will be posted at this address with a new effective date.',
    },
    { heading: 'Contact', body: SUPPORT_EMAIL || 'Contact: see the support page.' },
  ],
} as const;

export const press = {
  eyebrow: 'PRESS KIT',
  heading: { before: 'Everything you need to ', band: 'write about it.', after: '' },
  directAnswer:
    'Replay Rally is a $19.99 iPhone app that finds every rally in a pickleball video on-device in seconds and exports highlight reels with the dead time removed. It launched in September 2026 and is made by an independent developer who plays recreational pickleball.',
  boilerplateHeading: 'Boilerplate',
  boilerplate: [
    {
      label: 'One line',
      body: 'Replay Rally finds every rally in your pickleball videos on your iPhone, in seconds, so you can skip to the good parts.',
    },
    {
      label: 'Short',
      body: 'Replay Rally is an iPhone app for reviewing pickleball videos. It detects rallies from the sound of paddle contact — entirely on-device, no upload — then lets players jump point to point, watch in slow motion at full resolution, and export single rallies or a dead-time-free highlight reel to Photos. It costs $19.99 once. Optional feedback sharing, on by default, sends corrections and numeric detection measurements, not video, to improve detection.',
    },
    {
      label: 'Maker',
      body: 'Replay Rally is built by an independent developer and recreational pickleball player who got tired of scrubbing through camcorder footage at 2× looking for one good point.',
    },
  ],
  factsHeading: 'Facts',
  facts: [
    ['Platform', 'iPhone, iOS 17 or later'],
    ['Price', '$19.99 one-time'],
    ['Category', 'Sports'],
    ['Launch', 'September 2026'],
    ['Detection', 'on-device audio signal processing'],
    ['Network use', 'optional feedback: corrections and detection measurements on by default, full videos off by default'],
    ['Developer', 'Independent'],
    ['Contact', SUPPORT_EMAIL || 'via the support page'],
  ],
  screenshotsHeading: 'Screenshots',
  screenshotsNote: 'Real footage, real detections — nothing in these images is mocked.',
  iconHeading: 'App icon',
  usageHeading: 'Usage',
  usageBody: 'Screenshots and the icon may be used in coverage of Replay Rally without permission. Please don’t alter the icon.',
} as const;

export const llmsFacts = [
  'Replay Rally is an iPhone app (iOS 17+) for reviewing pickleball videos; $19.99 one-time on the App Store; no subscription, no account.',
  'Finds rallies from the audio of paddle contact (1–8 kHz), on-device, in seconds; detection needs no upload.',
  'Features: rally timeline with per-shot dots, frame-accurate jog wheel with haptics, ¼×–1.5× playback at original resolution, 8× zoom, one-tap rally clips, and “All rallies (no dead time)” highlight-reel export to Photos.',
  'Manual marking, trimming, and deleting fix missed or extra rallies.',
  'No AI features in 1.0; optional AI coaching is planned as a future paid subscription.',
  'Privacy: optional feedback sharing (on by default) sends corrections and numeric detection measurements, not video or audio; full-video upload is a separate setting, off by default; used only to improve detection; no advertising or tracking; add-only Photos access.',
] as const;

export type PageKey = keyof typeof pageMeta;
export type ScreenKey = keyof typeof screenMedia;

const joinHeading = (heading: { before: string; band: string; after: string }) =>
  `${heading.before}${heading.band}${heading.after}`;

const numbered = (items: readonly { title: string; body: string }[]) =>
  items.map((item, index) => `${index + 1}. **${item.title}** ${item.body}`).join('\n');

const qaMarkdown = (
  items: readonly { question: string; answer: string; markdownAnswer?: string }[],
) => items.map((item) => `### ${item.question}\n\n${item.markdownAnswer ?? item.answer}`).join('\n\n');

const ctaMarkdown = () =>
  APP_STORE_URL
    ? `[${appStoreCtaText.available}](${APP_STORE_URL})`
    : appStoreCtaText.comingSoon;

export function pageMarkdown(key: PageKey): string {
  if (key === 'home') {
    return [
      `# ${joinHeading(home.heading)}`,
      home.eyebrow,
      home.directAnswer,
      `${ctaMarkdown()} · [${home.secondaryCta}](/how-it-works/)`,
      home.proofs.map((proof) => `- **${proof.value}** — ${proof.label}`).join('\n'),
      `## ${home.featuresHeading}`,
      home.features
        .map((feature) => {
          const media = screenMedia[feature.screen];
          return `### ${joinHeading(feature.heading)}\n\n${feature.eyebrow}\n\n${feature.body}\n\n*${media.caption}*`;
        })
        .join('\n\n'),
      `## ${home.howHeading}`,
      numbered(home.steps),
      `[${home.howLink}](/how-it-works/)`,
      `## ${home.audienceHeading}`,
      home.audiences.map((item) => `### ${item.title}\n\n${item.body}`).join('\n\n'),
      `## ${home.priceHeading}`,
      `**${home.price}**\n\n${home.priceEyebrow}\n\n${home.priceBody}`,
      `### ${home.aiHeading}`,
      home.aiBody,
      `## ${home.privacyHeading}`,
      home.privacyFacts.map((fact) => `- ${fact}`).join('\n'),
      `[${home.privacyLink}](/privacy/)`,
      `## ${home.questionsHeading}`,
      qaMarkdown(home.questions),
      `[${home.questionsLink}](/faq/)`,
      `## ${joinHeading(home.finalHeading)}`,
      ctaMarkdown(),
      home.finalNote,
    ].join('\n\n');
  }

  if (key === 'howItWorks') {
    const { sections } = howItWorks;
    return [
      `# ${joinHeading(howItWorks.heading)}`,
      howItWorks.eyebrow,
      howItWorks.directAnswer,
      `## ${sections.audio.heading}`,
      sections.audio.paragraphs.join('\n\n'),
      `## ${sections.detector.heading}`,
      numbered(sections.detector.steps),
      sections.detector.after,
      `## ${sections.accuracy.heading}`,
      sections.accuracy.paragraphs.join('\n\n'),
      `## ${sections.calibration.heading}`,
      sections.calibration.paragraphs.join('\n\n'),
      `## ${sections.highlight.heading}`,
      sections.highlight.steps.map((step, index) => `${index + 1}. ${step}`).join('\n'),
      `## ${sections.ai.heading}`,
      sections.ai.paragraphs.join('\n\n'),
      `## ${howItWorks.ctaHeading}`,
      ctaMarkdown(),
    ].join('\n\n');
  }

  if (key === 'faq') {
    return [`# ${joinHeading(faq.heading)}`, faq.eyebrow, faq.directAnswer, qaMarkdown(faq.items)].join('\n\n');
  }

  if (key === 'support') {
    return [
      `# ${joinHeading(support.heading)}`,
      support.eyebrow,
      support.directAnswer,
      `## ${support.contact.heading}`,
      SUPPORT_EMAIL ? `[${SUPPORT_EMAIL}](${supportMailto})` : support.contact.body,
      `## ${support.troubleshootingHeading}`,
      qaMarkdown(support.items),
      support.links,
    ].join('\n\n');
  }

  if (key === 'privacy') {
    return [
      `# ${joinHeading(privacy.heading)}`,
      privacy.eyebrow,
      privacy.directAnswer,
      privacy.sections
        .map((section) => {
          if (section.heading !== 'Contact') return `## ${section.heading}\n\n${section.body}`;
          const contact = SUPPORT_EMAIL
            ? `[${SUPPORT_EMAIL}](${supportMailto})`
            : 'Contact: see the [support page](/support/).';
          return `## ${section.heading}\n\n${contact}`;
        })
        .join('\n\n'),
    ].join('\n\n');
  }

  return [
    `# ${joinHeading(press.heading)}`,
    press.eyebrow,
    press.directAnswer,
    `## ${press.boilerplateHeading}`,
    press.boilerplate.map((item) => `### ${item.label}\n\n${item.body}`).join('\n\n'),
    `## ${press.factsHeading}`,
    press.facts
      .map(([term, value]) => {
        if (term !== 'Contact') return `- **${term}:** ${value}`;
        const contact = SUPPORT_EMAIL
          ? `[${SUPPORT_EMAIL}](${supportMailto})`
          : '[via the support page](/support/)';
        return `- **${term}:** ${contact}`;
      })
      .join('\n'),
    `## ${press.screenshotsHeading}`,
    pressFrames.map((frame) => `- [${frame.caption}](/press/${frame.file})`).join('\n'),
    press.screenshotsNote,
    `## ${press.iconHeading}`,
    '[Download PNG](/brand/icon-1024.png)',
    `## ${press.usageHeading}`,
    press.usageBody,
  ].join('\n\n');
}
