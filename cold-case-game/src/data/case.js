// Case content — "The Peggy-Jo". A single, complete cold case for the desktop shell.
// Everything a player can find lives here: documents, transcripts, the four
// sites on the network, both MyCloud accounts, and the police verdicts.

export const CULPRIT_ID = 'c'; // Rian Cutter

export const caseInfo = {
  id: 'CASE 07-1116',
  terminal: 'Ellsmere Constabulary · Cold Case Archive · Terminal 04',
  location: 'PORT ELLSMERE',
  fileAge: '6 years, 7 months',
  framing:
    'Maren Doyle, 34, was found dead in the equipment shed at the Ellsmere dry dock on the morning of 12 February 2020. The original inquiry closed within four months, filed as an accidental fall. It has been reopened after an archive digitisation project recovered an access-log entry that was never in the original file.',
  lastSighting: '21:52, 11 Feb 2020 — leaving the Doyle & Kestrel office, carrying her laptop bag',
  timeOfDeath: '23:15 – 00:40, 11–12 Feb 2020',
  recovered: 'Her keys. A day-ledger, blood-marked on the cover. A cardigan, snagged on the dry dock railing.',
  neverRecovered: 'Her phone. Her laptop.',
};

export const suspects = [
  {
    id: 'a',
    name: 'Colm Doyle',
    role: 'Ex-husband · dock foreman',
    date: '14 Feb 2020',
    note:
      'Divorced from Maren eighteen months before her death, over a settlement that split the house down a line neither of them wanted. He kept working at the yard her family had partly built — a fact he says nobody ever let him forget.',
    alibi: 'The Anchor, darts league. Seen there by most of the team from half past nine until well after midnight.',
  },
  {
    id: 'b',
    name: 'Fen Kestrel',
    role: 'Managing partner, Doyle & Kestrel Freight',
    date: '15 Feb 2020',
    note:
      'Maren’s employer and, on paper, the person with the most to lose from her audit. Unbothered in interview to the point of rudeness. Confirms he knew about the fuel discrepancies weeks before she died and did nothing about them.',
    alibi: 'Harbour Board quarterly dinner, Anglers’ Hall — proposing a toast, by his own account, well inside the window the pathologist gives for her death.',
  },
  {
    id: 'c',
    name: 'Rian Cutter',
    role: 'Dockhand · holds the night keys',
    date: '13 Feb 2020',
    note:
      'Twenty-four. Night keyholder for the yard and the equipment shed. Almost nothing in the file beyond his shift record — no complaints, no history, nothing that would make an investigator look twice. That is the whole problem with him.',
    alibi: 'Home alone. His mother’s dog was staying with him. No one else can confirm it either way.',
  },
];

export const documents = [
  { id: 'summary', name: 'Doc 01', kind: 'Case summary' },
  { id: 'path', name: 'Doc 02', kind: 'Pathology' },
  { id: 'log', name: 'Doc 03', kind: 'Access log' },
  { id: 'scan', name: 'Doc 04', kind: 'Scan · damaged' },
  { id: 'poi', name: 'Doc 05', kind: 'Persons of interest' },
];

export const docSummary = {
  kicker: 'Document 01 · Narrative',
  title: 'Case Summary',
  paragraphs: [
    'Maren Doyle, 34, bookkeeper, Doyle & Kestrel Freight. Found at low tide in the equipment shed at the Ellsmere dry dock, 06:12, 12 February 2020, by dockhand P. Ahern arriving for the early shift. Cause of death, per the attending pathologist, was a single blow to the back of the head.',
    'The original investigation closed the file in June 2020 as an accidental fall, on the basis that the dry dock steps were wet and unlit. No forensic sweep of the shed itself was ordered. The file was reopened in 2026 after a records-digitisation project surfaced an access-log entry that was never included in the 2020 inquiry — an unattributed door event, twenty minutes before her estimated time of death.',
  ],
  facts: [
    ['Last sighting', '21:52, 11 Feb — leaving the Doyle & Kestrel office'],
    ['Time of death', '23:15 – 00:40 — every account of that night is measured against this window'],
    ['Recovered', 'Keys, a blood-marked day-ledger, a snagged cardigan'],
    ['Never recovered', 'Her phone, her laptop — the reason this file now runs through a cloud account'],
  ],
  closing:
    'Colleagues describe Doyle as meticulous to the point of unpopularity in the two months before she died — an accountant’s habit nobody at the yard ever thanked her for.',
};

export const docPath = {
  kicker: 'Document 02 · Technical',
  title: 'Pathology / Forensic Extract',
  paragraphs: [
    'Cause of death: blunt force trauma to the occipital region, a single blow. There is no evidence of a fall — no secondary bruising consistent with a stairway impact, no debris from the dry dock steps in the wound.',
  ],
  pullQuote:
    'The injury is a single blow, not a fall. Whatever caused it had a straight edge, and nothing matching that edge was recovered at the site where she was found.',
  footnote: 'The tide-gate winch handle in the equipment shed was catalogued in 2020 but never swept for residue.',
};

export const docLog = {
  kicker: 'Document 03 · Exhibit 03/06',
  title: 'Access Log / Timetable — Yard side door',
  rows: [
    { t: '07:58', e: 'R. Cutter, opening shift', d: 'IN' },
    { t: '08:15', e: 'M. Doyle, arrives', d: 'IN' },
    { t: '21:40', e: 'C. Doyle, dropping off a manifest, as he states', d: 'OUT' },
    { t: '21:52', e: 'M. Doyle, leaving — last confirmed sighting', d: 'OUT' },
    { t: '23:31', e: 'Shed side door — no badge logged', d: 'OPEN', hot: true },
    { t: '06:12', e: 'P. Ahern, arrival — finds the body', d: 'IN' },
  ],
  footnote: 'The 23:31 entry was recovered from raw controller data during the 2026 digitisation and does not appear in the original 2020 file.',
};

export const docScan = {
  kicker: 'Document 04 · Scan, 6 pages',
  title: 'Notebook / Handwritten Exhibit',
  intro:
    'Recovered from the pocket of Maren Doyle’s coat at her home, not from the scene. Her hand, confirmed against payroll signatures.',
  lines: [
    'R.C. — fuel 40/40 again. Third week running.',
    'Check ledger p.114 against gate log — 62L discrepancy',
    { credential: true, text: 'MYC — mdoyle77 / coyne1962  (do not lose this)' },
    'Told R. Tuesday. Gave him till Monday. He didn’t say much.',
  ],
  corruptNote: 'Scanner reported a fault on this page in 2019. The original was returned to the locker.',
};

export const docPoi = {
  kicker: 'Document 05 · Three named, none eliminated',
  title: 'Persons of Interest',
};

export const interviews = {
  a: [
    ['Q', 'Where were you the night of the eleventh, between ten and midnight?'],
    ['A', 'At The Anchor. Darts league. Ask anyone — half the yard was there.'],
    ['Q', 'You and Maren had a difficult year.'],
    ['A', 'We had a difficult marriage. That’s not news to anyone in this town.'],
    ['Q', 'How did she keep her records — the ledger, the accounts?'],
    ['A', 'She wrote everything down twice. Ledger, then her own notebook, in case the ledger "went missing." That’s how careful she’d got by the end. Password was always some version of her mother’s maiden name and a year — Coyne, and whichever year she felt sentimental about.'],
    ['Q', 'Did you go near the shed that night?'],
    ['A', 'I dropped the manifest at half nine and I left. I didn’t go near the water.'],
  ],
  b: [
    ['Q', 'Where were you between ten and midnight on the eleventh?'],
    ['A', 'At the Harbour Board dinner until gone eleven. You can check the sign-in, I imagine somebody already has.'],
    ['Q', 'Maren had flagged some irregularities in the accounts. Tell me about that.'],
    ['A', 'She flagged some numbers that didn’t reconcile. That happens. Fuel’s the worst account we keep, always has been.'],
    ['Q', 'What did you do about it?'],
    ['A', 'I told her I’d look at it. I was at the Anglers’ Hall till the dinner broke up, then home. I heard about her the next morning like everyone else.'],
    ['Q', 'If I wanted to check who took a boat out that night, where would I look?'],
    ['A', 'Not our books. The harbour authority keeps a public register for vessel movements — always has, all up this stretch. That’s not something we run.'],
  ],
  c: [
    ['Q', 'Walk me through your evening.'],
    ['A', 'Nothing to tell. I locked up and went home.'],
    ['Q', 'Were you alone?'],
    ['A', 'Home. Alone. My mum’s dog was staying with me, that’s the only company I had all night.'],
    ['Q', 'Do you keep any accounts online — cloud storage, anything like that?'],
    ['A', 'No. Don’t have any of that. Waste of time.'],
    ['Q', 'Anything else you want to tell me?'],
    ['A', 'That’s all I’ve got.'],
  ],
};

// ---- Network / sites ----------------------------------------------------

export const SITES = [
  {
    id: 'org',
    url: 'doylekestrel.example',
    title: 'Doyle & Kestrel Freight',
    desc: 'Harbour freight, cold storage, net repair. Found by searching the company name or "the yard."',
    keys: ['doyle', 'kestrel', 'freight', 'yard', 'harbour freight', 'employer', 'company'],
  },
  {
    id: 'records',
    url: 'ellsmereharbour.example',
    title: 'Ellsmere Harbour Authority — Public Register',
    desc: 'Public vessel movement register. Found by searching "harbour authority," "register," or "movements."',
    keys: ['harbour authority', 'harbour', 'register', 'public register', 'movements', 'records', 'vessel', 'berth'],
  },
  {
    id: 'forum',
    url: 'ellsmereboard.example',
    title: 'The Ellsmere Board',
    desc: 'Local message board. Found by searching "the board," a handle, or "forum."',
    keys: ['board', 'the board', 'forum', 'message board', 'local', 'duskrunner'],
  },
  {
    id: 'cloud',
    url: 'mycloud.example',
    title: 'MyCloud',
    desc: 'Files, messages and mail in one account. Sign in with credentials found elsewhere.',
    keys: ['mycloud', 'my cloud', 'cloud', 'myc', 'storage'],
  },
];

export const orgSite = {
  name: 'Doyle & Kestrel Freight',
  tagline: 'Net repair · Cold storage · Harbour freight',
  blurb: 'Family-run out of the Ellsmere yard since 1988. Two boats, one office, more paperwork than either.',
  staff: [
    { name: 'Fen Kestrel', role: 'Managing Partner' },
    { name: 'Ailish Munro', role: 'Office Administrator' },
    { name: 'Rian Cutter', role: 'Yard & Night Keys' },
    { name: 'Maren Doyle', role: 'Bookkeeper (contract)' },
  ],
  breadcrumb:
    'Vessel movements in and out of the yard are logged with the Harbour Authority’s public register, same as every berth on this stretch of water.',
};

export const recordsSite = {
  name: 'Ellsmere Harbour Authority',
  subtitle: 'Public register',
  heading: 'Ellsmere dry dock — 11–12 Feb 2020',
  note: 'Machine record. Retained indefinitely. Not editable by users.',
  rows: [
    { t: '09:10', s: 'F. Kestrel', r: 'KTL-2', e: 'Moored, unchanged' },
    { t: '14:45', s: 'Doyle & Kestrel Freight', r: 'FRT-6', e: 'Departed, routine run' },
    { t: '20:05', s: 'J. Vance', r: 'Osprey', e: 'Returned' },
    { t: '23:20', s: 'R. Cutter', r: 'Peggy-Jo', e: 'Departed', hot: true },
    { t: '00:52', s: 'R. Cutter', r: 'Peggy-Jo', e: 'Returned', hot: true },
  ],
  footnote: 'Doyle & Kestrel’s berth records list the Peggy-Jo as registered to R. Cutter since 2018.',
};

export const forumSite = {
  name: 'The Ellsmere Board',
  tagline: 'est. 2003 · still running on the same server',
  boardName: 'Harbour & Tides',
  threadTitle: 'Anyone know if the gate’s still on the Tuesday lock schedule?',
  posts: [
    { user: 'duskrunner', meta: 'Member · 41 posts', when: '9 Feb 2020, 22:04', text: 'Anyone know if the gate’s still on the Tuesday lock schedule, or did they change it back? Need to get the skiff out without waking the whole yard.' },
    { user: 'mdoyle', meta: 'Doyle & Kestrel — Bookkeeping', when: '9 Feb 2020, 22:31', text: 'Still Tuesdays, far as I know. Why, you planning something?' },
    { user: 'tidewatch_pete', meta: 'Member · 6 posts', when: '9 Feb 2020, 23:02', text: 'No reason. Storm’s coming in off the point Tuesday anyway, gate’ll be shut regardless.' },
  ],
  memberCard: {
    handle: 'duskrunner',
    realName: 'Rian Cutter',
    joined: '2016',
    contact: 'Same handle signs into MyCloud',
    other: 'Still talks about that dog like it’s family — Scupper, some kind of terrier.',
  },
};

export const mycloudAccounts = {
  mdoyle77: {
    label: 'userA',
    password: 'coyne1962',
    displayName: 'mdoyle77',
    files: [
      { name: 'ledger-p114.jpg', meta: 'Scan · 9 Feb 2020', body: 'Photo of ledger page 114. Fuel column, three weeks of entries under ‘R.C.’ all reading exactly 40 litres — the tank only takes 38. Circled twice in red.' },
      { name: 'fuel-report-draft.docx', meta: 'Draft · never sent · 10 Feb 2020', body: 'To the Harbour Board — I am writing to flag irregularities in the fuel account maintained under R. Cutter’s authorisation over the past six weeks, amounting to approximately 60 litres unaccounted for at current fuel prices. I have raised this directly with him and given him until Monday to account for it. If unresolved by then I will bring it to the Board in full, with the ledger pages attached.\n\n[unfinished]' },
    ],
    eventFile: { name: 'second-photo.jpg', meta: 'Uploaded just now', body: 'A second photograph of the same ledger page, better lit, timestamped after her death. Nobody uploaded it.' },
    msgsTitle: 'Thread · duskrunner · 6–9 Feb 2020',
    msgs: [
      { who: 'mdoyle', when: 'Mon 20:41', text: 'The fuel numbers don’t work. You know they don’t.' },
      { who: 'duskrunner', when: 'Mon 20:58', text: 'It’s not what it looks like.' },
      { who: 'mdoyle', when: 'Tue 09:03', text: 'Fix it by Monday or I put it in front of the board.' },
      { who: 'duskrunner', when: 'Tue 09:41', text: 'Don’t do that. I’ll sort it. Come by the shed tonight, alone, I’ll show you the real numbers.' },
    ],
    mails: [
      { from: 'mdoyle@ellsmeremail.example', to: 'fen.kestrel@doylekestrel.example', date: '3 Feb 2020', subject: 'Fuel account — third follow-up', body: 'Fen — this is the third time I’ve flagged the fuel discrepancy this month. I need ten minutes with you and the account before I take it further. — M' },
      { from: 'fen.kestrel@doylekestrel.example', to: 'mdoyle@ellsmeremail.example', date: '4 Feb 2020', subject: 'RE: Fuel account — third follow-up', body: 'I’ll look at it when I’m back from the Board dinner, don’t lose sleep over it. It’s a fuel account, Maren, not the crown jewels.' },
    ],
  },
  duskrunner: {
    label: 'userB',
    password: 'scupper',
    displayName: 'duskrunner',
    files: [
      { name: 'receipt.jpg', meta: 'Photograph · 14 Feb 2020', body: 'Receipt from Ellsmere Marine Supply. Cash. One boat hook, one tin of degreaser. No account customer name on file.' },
      { name: 'notes.txt', meta: 'Text · 9 Feb 2020', body: 'Low tide 23:40. Gate unmanned after eleven if nobody’s logged for the shift. Peggy-Jo draws nothing at half tide, can be back before first light.' },
    ],
    eventMsg: { who: 'duskrunner', when: '00:23', text: 'She wasn’t going to stop. I gave her the chance.' },
    msgsTitle: 'Saved, never sent · 12 Feb 2020',
    msgs: [
      { who: 'duskrunner', when: '00:14', text: 'I didn’t mean for it to go like that.' },
      { who: 'duskrunner', when: '00:19', text: 'Wrapped the hook and put it over the side past the second buoy. Wasn’t thinking straight.' },
    ],
    mailNote: 'The mailbox was never set up — worth noticing, given what he said in interview.',
  },
};

// ---- Police verdicts ------------------------------------------------------

export const verdicts = {
  a: {
    kicker: 'Attended · released without charge',
    name: 'Colm Doyle',
    body:
      'Colm Doyle’s evening is accounted for twice over — logged dropping a manifest at the yard at half nine, then seen at The Anchor by a room full of his own darts league from before ten until well past midnight. Nothing in the file places him within reach of the dry dock after nine-forty, and the harbour register shows no vessel movement under his name that night.\n\nThe arrest costs him what a wrongful one always does: neighbours don’t unlearn a name that easily, even once it’s cleared. His daughter changed schools that spring.',
  },
  b: {
    kicker: 'Attended · released without charge',
    name: 'Fen Kestrel',
    body:
      'Fen Kestrel had every reason to want the fuel account left alone, and no plausible way to have been at the dry dock that night — the Harbour Board’s own minute book has him proposing a toast at the Anglers’ Hall well inside the window the pathologist gives for her death, on the other side of town from the yard.\n\nHe kept the firm running through the appeal that followed and never spoke about that year again — not even, eventually, at the trial that got the right name.',
  },
  c: {
    kicker: 'Detained · charged',
    name: 'Rian Cutter',
    body:
      'The chain holds end to end: the Harbour Authority’s public register puts his boat, the Peggy-Jo, out of the yard at 23:20 and back at 00:52 — inside the window he told you he never left his flat. The MyCloud account signed in under his own forum handle holds two messages he never sent to anyone, describing exactly where he put the weapon. A receipt from two days later shows him buying a replacement boat hook, in cash, from a shop that never took his name.\n\nHe’d been skimming diesel from the yard’s fuel account for months. Maren’s audit was closing in on him specifically — not the firm, not Fen Kestrel, him — and rather than take it to the Board straight away, she gave him a deadline and a chance to put it right. He didn’t take it.',
  },
};
