/**
 * Site copy that is reused across pages.
 *
 * Every fact here comes from the client's current website (bisleyremovals.co.uk) or from
 * public records, as listed in CONTENT.md. Reviews are reproduced as published on the client's
 * site, with the few changes listed above the reviews below.
 */

export const services = [
  {
    href: "/removals",
    title: "Removals",
    line: "Full or part house moves, local or long distance",
  },
  {
    href: "/storage",
    title: "Containerised storage",
    line: "Packed and sealed at your home, kept in our guarded warehouse",
  },
  {
    href: "/packing",
    title: "Packing",
    line: "Full, fragile-only, or free materials to pack yourself",
  },
] as const;

/** From the client's Moving Day page. */
export const movingDay = [
  {
    time: "The day before",
    title: "Packing is done",
    text: "Any major packing is finished the day before, so the morning is just finishing touches and loading.",
  },
  {
    time: "8:30am",
    title: "The crew arrives",
    text: "The team introduces themselves and walks through your home with you to confirm what is going and what is staying.",
  },
  {
    time: "12:30 to 1pm",
    title: "Your home is cleared",
    text: "The house is usually empty and ready for completion. Anything going into storage heads to our warehouse now.",
  },
  {
    time: "Midday to 2pm",
    title: "Completion and unloading",
    text: "Completion usually happens in this window. The crew unloads, puts each item where you want it and rebuilds furniture.",
  },
  {
    time: "By 5pm",
    title: "Finished",
    text: "Our aim is to be done. Your team leader walks round the new house with you before the crew leaves.",
  },
] as const;

export const packingOptions = [
  {
    title: "Full packing service",
    text: "We wrap and box everything in your home, usually the day before you move.",
  },
  {
    title: "Fragile items only",
    text: "We pack glassware, china, ornaments, pictures and mirrors. You pack the rest.",
  },
  {
    title: "Pack it yourself",
    text: "We deliver boxes, bubble wrap and packing paper, then collect them afterwards, free of charge.",
  },
] as const;

export const packingMaterials = [
  "Double-walled boxes and premium packing cases",
  "Extra-strong cartons for china, glass and books",
  "Clean wrapping paper, soft tissue and bubble wrap",
  "Wardrobe cartons that keep clothes clean and crease-free",
  "Free delivery and collection of all packing materials",
] as const;

export const fleetEquipment = [
  "piano trolleys",
  "protective blankets",
  "tie-down straps",
  "wardrobe cartons",
  "floor protection",
] as const;

export const storageSteps = [
  "We bring empty containers to your home on one of our lorries. While the crew wraps and loads your belongings, your team leader keeps a full inventory, so anything can be found later.",
  "The filled containers are security sealed, driven back to our yard in Bisley and lifted into the warehouse by forklift.",
  "Your belongings stay there, insured, in a highly fire-resistant warehouse watched by security staff and CCTV around the clock, until you need them.",
] as const;

export const storagePromises = [
  "Clean, dry container units",
  "A full inventory of everything placed into store",
  "Every container security sealed",
  "Full insurance cover while your goods are stored",
  "24-hour security staff and CCTV",
] as const;

/** From the client's Moving Tips page, lightly edited. */
export const checklist = [
  {
    when: "Two to four weeks before",
    items: [
      "If you are packing yourself, start at least two weeks before. Label every box with what is in it and the room it is going to.",
      "Mix light and heavy items, don't overload boxes, and mark anything fragile so the crew can take extra care.",
      "Clear out the loft, garage and shed, and donate or sell anything you no longer need.",
      "Update your address with your bank and card providers; home, car and life insurers; schools, doctor, dentist and optician; the council tax office for both addresses; gas, electricity and water suppliers; broadband, phone and TV licence; the DVLA; anyone you pay by standing order or finance agreement; and kennels or pet sitters if you need them.",
      "Arrange mail redirection with the Post Office, giving at least 7 days' notice.",
      "Check your car is ready for the journey, especially for a long-distance move.",
    ],
  },
  {
    when: "One week before",
    items: [
      "Confirm disconnection and reconnection dates with your utility companies.",
      "Cancel milk and newspaper deliveries and settle any balances.",
      "Finish the laundry and ironing, and start running down the fridge and freezer.",
    ],
  },
  {
    when: "Three days before",
    items: [
      "Pack a first-night box: toiletries, a change of clothes, towels, medication, toilet rolls, cleaning wipes, light bulbs, kettle, mugs, tea, coffee, snacks, disposable plates, a few tools, matches, phone chargers and important documents.",
      "Keep that box with you, not on the lorry.",
      "Double-check that the keys to your new home will be ready on time.",
    ],
  },
  {
    when: "Two days before",
    items: [
      "Empty and defrost the fridge and freezer.",
      "Tape up open packets, jars and bottles so nothing spills.",
      "Gather valuables and important papers and keep them somewhere safe.",
    ],
  },
  {
    when: "The day before",
    items: [
      "Have appliances disconnected by qualified tradespeople.",
      "Get easy food and drinks ready for moving day.",
      "Get your plants ready to travel.",
      "Try to get a good night's sleep.",
    ],
  },
  {
    when: "Moving day",
    items: [
      "Arrange childcare or pet care, or keep one room aside with toys and snacks.",
      "Your team leader introduces the crew and walks through your home with you before loading starts.",
      "Keep drinks handy. Moving is thirsty work.",
      "Strip the beds and keep the bedding separate for the first night.",
      "Walk round the house with your team leader before the lorry leaves, so nothing is left behind.",
      "At the new house, the crew unloads into the right rooms, rebuilds furniture and unpacks if you have booked unpacking. Before leaving, your team leader checks you are happy and asks you to sign the delivery sheet.",
    ],
  },
] as const;

export type Review = { name: string; text: string; excerpt?: string };

/**
 * Reviews as published on bisleyremovals.co.uk (home page and Testimonials page), checked word for
 * word on 4 October 2026, typos included. Three changes were made to meet the build standard: the
 * em dash in Haoying Guo's review and in Geoff O'Shea's review became a comma, and the two emoji
 * at the end of Geoff O'Shea's review became a full stop. Excerpts trimmed for the home page are
 * marked with an ellipsis. See CONTENT.md.
 * CONFIRM: names and permission to republish with the client. The current site shows no dates
 * or sources. A review shown there under "George Rivett" but signed "The Atkinsons now of
 * Windlesham" is left out until the client confirms who wrote it.
 */
export const reviews: Review[] = [
  {
    name: "Jessica Jandrell",
    text: "I’ve moved 9 times in the last 15 years and this was the most stress free move, all thanks to Bisley removals! I originally chose them as I loved the fact that all of their employees are directly employed - they don’t use agency staff - and everyone has been with the business for years. This is really apparent with how well they work as a team. They have a laugh together, but work extremely hard and get the job done.",
    excerpt: "I’ve moved 9 times in the last 15 years and this was the most stress free move, all thanks to Bisley removals!",
  },
  {
    name: "Becky & Toby",
    text: "Could not believe how smooth, stress free and organised our move went thanks to the team at Bisley Removals. We were let down by another company, and within the same day of contacting Bisley we had a quote for our removals at quite short notice. We were happy with the price and very impressed that all boxes, packing paper and tape were included in the quote cost. The blokes on the day were very friendly, caring of all our belongings and would highly recommend them to any of my family and friends.",
    excerpt: "We were let down by another company, and within the same day of contacting Bisley we had a quote for our removals at quite short notice.",
  },
  {
    name: "Kreena Patel",
    text: "Kane, Stuart and Rob did such a fantastic job and took away so much of the stress of moving for us. Not only that, but I'm surprised and impressed they kept in good spirits the entire day. It must be such a tough job but they do it so well. They took care of all of our items, re-assembled our beds and the labels on boxes is made unpacking that bit easier. Highly recommend Bisley Removals.",
    excerpt: "Kane, Stuart and Rob did such a fantastic job and took away so much of the stress of moving for us.",
  },
  {
    name: "Thomas Fuller",
    text: "We just wanted to thank Mark and the team for such an amazing job over the last few days moving us from Surrey to Devon. You all provided a brilliant service right from the beginning and the team worked incrediblly hard to move us out efficiently and back in again with such care. We would thoroughly recommend Bisley removals and every one of the team who are so friendly and helpful.",
    excerpt: "…such an amazing job over the last few days moving us from Surrey to Devon.",
  },
  {
    name: "David Gale",
    text: "Everything about our move was done brilliantly by Bisley Removals. The gentleman who came to assess our needs was well informed and aware of issues that could arise (and, even better, how to resolve them). The move happened over three days and we saw a whole cast from the company under Mark’s leadership. All were unfailingly polite, cheerful and competent. They took real pains to ensure that everything was done to our liking including changing where items were in our new house after we changed our minds! They will do anything if given banana cake we discovered. Can’t recommend highly enough.",
    excerpt: "The gentleman who came to assess our needs was well informed and aware of issues that could arise (and, even better, how to resolve them).",
  },
  {
    name: "Alexandra D",
    text: "As soon as Bisley Removal Services arrived to pack up our house, everything was calm, the team were incredibly polite, helpful, professional, positive and proactive - huge efforts were made even to be quiet while they were packing so as not to disturb our unwell children, packing around them while they slept - we would never have expected such kindness. The boxes were organised beautifully, labelled clearly, done quickly, and frankly our house move was the least stressful part of that week because of Bisley Removals. Highly recommend.",
    excerpt: "…huge efforts were made even to be quiet while they were packing so as not to disturb our unwell children, packing around them while they slept…",
  },
  {
    name: "Roxie",
    text: "Phenomenal!! We had the full packing service and, from the first phone call to the final box, we were really taken care of by this incredibly hardworking, professional and friendly company. The quote for the work was very reasonable and we were so impressed by the speed and quality of the packing, the strength and stamina of the team and the way they actually made the process exciting and fun for our whole family. We couldn’t recommend Bisley Removals more highly - don’t hesitate in booking them and good luck with your move!",
    excerpt: "We had the full packing service and, from the first phone call to the final box, we were really taken care of…",
  },
  {
    name: "Debbie Wallace",
    text: "We used Bisley Removals for our move last Tuesday and they were absolutely brilliant from start to finish. They also packed everything for us, which made a huge difference and took so much stress out of the whole process. The entire team were professional, organised, friendly and incredibly hardworking throughout the day. Everything was packed carefully and handled with real attention, from fragile items to larger furniture, and everything arrived safely without any issues. What really stood out was how calm, efficient and capable the team were. Moving house can be overwhelming, but Bisley Removals made everything feel smooth and well managed. Nothing was too much trouble, and they worked tirelessly while remaining positive and courteous the entire time. If you are looking for a removals company that is reliable, careful, professional and genuinely excellent at what they do, I would highly recommend Bisley Removals. We would not hesitate to use them again and will definitely be recommending them to friends and family. A huge thank you again to the whole team for such a first-class service. Debbie & David.",
  },
  {
    name: "Geoff O'Shea",
    text: "We can’t recommend Bisley Removals highly enough. Three and a half years ago, I had a rather challenging experience with another removal company, where my belongings and cherished memories were not treated with the care they deserved. This time, however, I was advised to go with Bisley Removals, and I’m so glad I did. From the very beginning, the experience was marked by friendliness and helpfulness. The team that assisted with our move treated our possessions with great care, more than I might have done myself. It truly felt like our family and friends were helping us, rather than just a company focused on completing the job as quickly as possible for profit. Thank you.",
  },
  {
    name: "Jackie Liddiard",
    text: "From the beginning of the whole process Bisley Removals have been 5*. From providing the quote, supplying packing boxes to the actual moving day, everything was seamless. The day before moving the team arrived promptly and just about packed up everything except bed and sofa....Stuart and his team were absolutely brilliant! On moving day, apart from me having to wait for keys... the guys were so helpful. Placing boxes where I wanted, nothing was too much trouble. Amazing service, would definitely recommend",
  },
  {
    name: "Haoying Guo",
    text: "Absolutely the best money I've spent, they earned every penny they deserved. The team was punctual, professional, and incredibly hardworking. They handled all our belongings with care and made the whole moving process so much easier than we expected. We have short period between exchange and completion, they made what could have been a stressful experience feel smooth and well-organised. Nothing was too much trouble, and their positive attitude made a big difference on a stressful day. Truly excellent service from start to finish! I strongly recommend them to anyone looking for a reliable and trustworthy company!",
  },
  {
    name: "Richard Duncan",
    text: "Very helpful before the move, accommodating all of the last minute house move madness. The packing service was excellent and really took the pressure off. On the day an army of people worked tirelessly to make the day as easy as possible for us. Highly recommended!",
  },
  {
    name: "Peter Smith",
    text: "Excellent service for our move from Woking to Devon. A great team of guys who were all really friendly and polite. They also worked their socks off! Overall a great experience, we would definitley recommended them.",
  },
  {
    name: "Tina Cartwright",
    text: "The guys turned up promptly, were polite and considerate. Packed everything really carefully, even fragile glassware. They even helped move around furniture! Would most definitely recommend and would certainly use again in the future.",
  },
  {
    name: "Eva De Graaff",
    text: "Got lots of quotes, this company came out very competitive. The packers and movers were all very friendly, and our possessions made it to the new house in great condition. Would definitely recommend the packing service it was very stress free. Efficient service afterwards with collecting the boxes etc. Thankyou Cavan, Charlie and the three Dan's!",
  },
];

export const reviewByName = (name: string) => {
  const r = reviews.find((x) => x.name === name);
  if (!r) throw new Error(`Unknown review: ${name}`);
  return r;
};
