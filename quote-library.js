(() => {
  const seeds = [
    [1, "You are tired, not finished.", "Dark Motivation", "Medium Madness"],
    [2, "Keep going. Your plot twist is still loading.", "Dark Motivation", "Medium Madness"],
    [3, "Survive today. Become suspiciously powerful tomorrow.", "Dark Motivation", "Full Moon Energy"],
    [4, "Your comeback does not need an announcement. Just arrive different.", "Dark Motivation", "Full Moon Energy"],
    [5, "Stay soft. Win anyway.", "Soft but Dangerous", "Soft Strange"],
    [6, "Kindness is not permission to test the fences.", "Soft but Dangerous", "Medium Madness"],
    [7, "Low battery. Big plans. Suspiciously good posture.", "Dead Inside, Still Trying", "Medium Madness"],
    [8, "Resting is still part of the dramatic training montage.", "Dead Inside, Still Trying", "Soft Strange"],
    [9, "Let the doubt watch. It clearly enjoys the show.", "Spite & Success", "Full Moon Energy"],
    [10, "Some emails are just haunted paper with deadlines.", "Workplace Survival", "Medium Madness"],
    [11, "This meeting could have been a respectful silence.", "Workplace Survival", "Full Moon Energy"],
    [12, "Existence is odd. Have a snack and continue.", "Existential Nonsense", "Soft Strange"],
    [13, "You are the plot twist. Try to act surprised.", "Existential Nonsense", "Medium Madness"],
    [14, "Tiny smile. Enormous boundaries.", "Cute but Concerning", "Soft Strange"],
    [15, "Wake up gently. Become alarming later.", "Morning Madness", "Medium Madness"],
  ].map(([id, text, category, mood]) => ({ id, text, category, mood }));

  const parts = {
    "Dark Motivation": {
      starts: [
        "The dark did not stop you.",
        "You have survived every strange chapter so far.",
        "Your courage may be quiet today.",
        "The plan can wobble without collapsing.",
        "You do not need perfect energy to continue.",
        "Even a haunted compass can point forward.",
        "Your future is not cancelled by a difficult morning.",
        "The comeback begins before anyone notices.",
        "You are allowed to move slowly through the fog.",
        "The version of you that almost quit is still here.",
      ],
      ends: [
        "Take the next step and let the shadows gossip.",
        "Progress still counts when it arrives wearing yesterday's coat.",
        "Keep building; the plot has not finished with you.",
        "A small move today can become a very dramatic reveal.",
        "Carry on gently and make persistence look mysterious.",
        "The door ahead only needs one brave knock.",
        "Your unfinished story is still collecting better pages.",
        "Do the possible thing, then quietly become difficult to stop.",
        "Let today be imperfect and still useful.",
        "Stand up again; your future has excellent timing.",
      ],
    },
    "Spite & Success": {
      starts: [
        "Let their doubt sit in the front row.",
        "Use the raised eyebrows as free lighting.",
        "Your quiet progress is already making noise.",
        "Nothing confuses a critic like consistent results.",
        "Keep the receipts and improve the ending.",
        "Turn every underestimate into extra mileage.",
        "You do not need revenge when growth has excellent posture.",
        "Let the side comments become background music.",
        "Success looks better when it arrives without warning.",
        "Make discipline your most elegant response.",
      ],
      ends: [
        "Win politely and leave everyone checking the scoreboard.",
        "Build something so solid that doubt needs a new hobby.",
        "Stay focused; the reveal will handle the explanation.",
        "Become the outcome they forgot to consider.",
        "Let results deliver the speech you never owed.",
        "Keep going until the surprise becomes undeniable.",
        "Turn that energy into something beautifully inconvenient.",
        "Smile softly while the evidence piles up.",
        "Do it for yourself, with a tiny decorative sprinkle of spite.",
        "Arrive improved and mysteriously unavailable for comment.",
      ],
    },
    "Dead Inside, Still Trying": {
      starts: [
        "Your battery is blinking.",
        "You may be operating on crumbs of enthusiasm.",
        "Today has the emotional texture of an old receipt.",
        "Your motivation wandered off without leaving a note.",
        "The sparkle is currently out for maintenance.",
        "You are tired in several creative directions.",
        "Your inner fire is presently a cautious candle.",
        "Everything feels heavier before breakfast.",
        "Your energy has entered witness protection.",
        "The enthusiasm department is temporarily closed.",
      ],
      ends: [
        "Do one small thing and call it suspiciously impressive.",
        "Showing up halfway still means you showed up.",
        "Rest, reset, and continue with theatrical reluctance.",
        "Tiny progress is welcome, even in wrinkled clothes.",
        "Keep the dream; lower the volume for today.",
        "Survival mode still earns points on the scoreboard.",
        "Move gently; persistence does not require fireworks.",
        "One completed task is enough evidence of life.",
        "You can be exhausted and still quietly becoming.",
        "Proceed slowly, like a ghost with an appointment.",
      ],
    },
    "Soft but Dangerous": {
      starts: [
        "Keep the soft heart.",
        "Your kindness can have a locked gate.",
        "Gentle does not mean endlessly available.",
        "You can speak softly and still mean every boundary.",
        "Protecting your peace is not a personality flaw.",
        "Your warmth is a gift, not public property.",
        "Stay tender without becoming easy to dismiss.",
        "A calm voice can still close the door.",
        "Your empathy does not require self-abandonment.",
        "You may forgive and still change the access code.",
      ],
      ends: [
        "Let your boundaries wear excellent shoes.",
        "Be gracious, clear, and wonderfully difficult to manipulate.",
        "Keep the flowers; reinforce the fence.",
        "Say no with the serenity of a moonlit castle.",
        "Choose peace without apologising for the security system.",
        "Remain lovely and unavailable for nonsense.",
        "Let respect be the price of admission.",
        "Carry compassion, but leave room for a backbone.",
        "Stay sweet enough to heal and sharp enough to notice.",
        "Offer kindness without handing over the keys.",
      ],
    },
    "Workplace Survival": {
      starts: [
        "This email has unnecessary weather around it.",
        "The calendar is full of decorative emergencies.",
        "Another meeting has entered the chat.",
        "Your inbox is rehearsing a minor haunting.",
        "The spreadsheet knows too much.",
        "Professionalism is doing impressive emotional gymnastics.",
        "The deadline has developed a dramatic personality.",
        "Someone has replied all with confidence.",
        "The office coffee is carrying the entire organisation.",
        "Your polite nod deserves an annual award.",
      ],
      ends: [
        "Respond clearly, then close the tab with dignity.",
        "Do the task, document it, and protect your lunch break.",
        "Breathe slowly; not every message deserves a sequel.",
        "Remain professional and privately fascinated.",
        "One sensible checklist can defeat several tiny disasters.",
        "Mute the chaos and finish the important part.",
        "Use complete sentences and emotionally unavailable punctuation.",
        "Survive the agenda and reclaim your afternoon.",
        "Keep your boundaries where the meeting invites can see them.",
        "Clock out before your soul starts drafting a resignation letter.",
      ],
    },
    "Existential Nonsense": {
      starts: [
        "You are a collection of atoms with opinions.",
        "Time is imaginary, but the appointment appears committed.",
        "The universe is enormous and your sock is still missing.",
        "Nobody fully understands what is happening.",
        "You exist on a spinning rock with passwords.",
        "Reality has once again declined to provide instructions.",
        "Your consciousness is wearing a human costume.",
        "Life is a group project with mysterious grading.",
        "The cosmos remains silent about your unread messages.",
        "Meaning is complicated and snacks are nearby.",
      ],
      ends: [
        "Choose a direction and look convincingly intentional.",
        "Have some water and continue the strange experiment.",
        "Laugh gently; certainty was never invited.",
        "Make a tiny plan before the universe changes the font.",
        "Enjoy the absurdity without giving it your parking space.",
        "Do your best and let mystery handle the paperwork.",
        "Take the scenic route through this temporary confusion.",
        "Be kind; everyone is improvising in formal clothing.",
        "Carry on as if the plot makes artistic sense.",
        "Find one good thing and call the day conceptually successful.",
      ],
    },
    "Cute but Concerning": {
      starts: [
        "Tiny smile, mysterious agenda.",
        "You look delightful and mildly unsupervised.",
        "Bring flowers and several thoughtful boundaries.",
        "Your sweetness has developed excellent instincts.",
        "Wear the cute outfit; keep the suspicious eyebrow.",
        "You are sunshine with a locked diary.",
        "Stay adorable enough to confuse the problem.",
        "Your charm is currently holding a tiny clipboard.",
        "Be soft, sparkly, and oddly prepared.",
        "The smile is genuine; the contingency plan is laminated.",
      ],
      ends: [
        "Proceed with kindness and a healthy amount of side-eye.",
        "Let the room wonder what the tiny plan might be.",
        "Keep being lovely in a slightly alarming way.",
        "Add a bow, then enforce the boundary.",
        "Charm the day without signing any suspicious paperwork.",
        "Be the pleasant surprise with excellent escape routes.",
        "Carry joy, snacks, and one unanswered question.",
        "Stay wholesome enough to pass inspection.",
        "Make good choices, or at least beautifully documented ones.",
        "Glow gently and remain difficult to categorise.",
      ],
    },
    "Morning Madness": {
      starts: [
        "Good morning to everyone except the alarm.",
        "The sun is up and asking personal questions.",
        "Your coffee has accepted the leadership position.",
        "Today has arrived without checking your availability.",
        "Open one eye and negotiate with the morning.",
        "The blanket has submitted a strong counteroffer.",
        "Your plans are awake; your personality is buffering.",
        "Morning is just night wearing brighter trousers.",
        "The day is fresh, suspicious, and full of notifications.",
        "Rise gently; the world is already being dramatic.",
      ],
      ends: [
        "Start small and become impressive after the second sip.",
        "Choose one task before the chaos chooses seven.",
        "Stretch, hydrate, and approach the plot carefully.",
        "Give yourself ten quiet minutes before becoming legendary.",
        "Begin softly; momentum can make its own entrance.",
        "Let breakfast handle the first emotional negotiation.",
        "Put on courage and whatever shoes are nearest.",
        "Do not rush; the day can wait while you load.",
        "Find your rhythm before answering the universe.",
        "Make the morning useful, not unnecessarily heroic.",
      ],
    },
  };

  const moods = ["Soft Strange", "Medium Madness", "Full Moon Energy"];
  const library = [...seeds];
  const used = new Set(library.map(({ text }) => text));
  let nextId = Math.max(...library.map(({ id }) => id)) + 1;

  Object.entries(parts).forEach(([category, { starts, ends }]) => {
    let categoryCount = library.filter((quote) => quote.category === category).length;
    for (let startIndex = 0; startIndex < starts.length && categoryCount < 100; startIndex += 1) {
      for (let endIndex = 0; endIndex < ends.length && categoryCount < 100; endIndex += 1) {
        const text = `${starts[startIndex]} ${ends[endIndex]}`;
        if (used.has(text)) continue;
        library.push({
          id: nextId,
          text,
          category,
          mood: moods[(startIndex + endIndex) % moods.length],
        });
        used.add(text);
        nextId += 1;
        categoryCount += 1;
      }
    }
  });

  window.SILENT_MADNESS_QUOTES = library;
})();
