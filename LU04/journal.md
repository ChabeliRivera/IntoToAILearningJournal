NOTES 09/15  

Lecture – AI-Assisted Development (Unit 4)
Focus of Unit 4: how to use AI effectively in software development, what it’s good for, its limits, and how to integrate it into real coding work.
•	Tomorrow’s class will build “Cookie Clicker” together; it will be a graded exercise and will go slower.
Each group showed off their AI-generated content projects (Unit 3)
What “Vibe Coding” Is
•	Idea: you can “manage” AI-written code without knowing how to code.
•	Reality: people quickly hit a wall when debugging or scaling still need real coding knowledge.
“10x Developer” Concept
•	Some claim AI makes them 10× faster, but often they build 10× more complex, harder-to-maintain code.
•	Businesses care about maintainable, stable software, not quick hacks.
Why You Can’t Fully Outsource Coding to AI
•	Hallucinations: AI invents non-existent methods, libraries, or data.
•	Context limits: AI can’t hold an entire large project in memory.
•	Outdated training data: Often produces older, less efficient code.
•	Skill atrophy: Over-reliance makes you a “soft developer.”
•	Cost: Tools like Vercel B0 charge per prompt (examples: $0.18–$2.64 per message; can reach $35/day with no refunds).
Where AI Is Useful
•	Generating boilerplates or prototype code quickly.
•	Testing different approaches.
•	Learning aid when you still understand the fundamentals.
•	Converting or refactoring (e.g., CSS → Tailwind CSS).

In-Class Demo: Building a “Hot Dog Stand on the Moon” Website
1.	Prompt: “Build a static website using HTML/CSS, no JavaScript, header/navbar/menu/footer.”
2.	Outcome: AI generated hundreds of lines of code in seconds.
3.	Refactor: Instructor cut CSS into its own file; code shrank drastically.
4.	Update to Tailwind CSS: Prompted AI to convert CSS to Tailwind → code reduced from ~500 to ~100 lines while looking the same.
5.	Key Lesson: With a little know-how (choosing Tailwind, structuring prompts), AI can do tedious work for you, but you still must understand what it’s producing.

Carousel Example (Limitation)
•	Prompted AI for a JavaScript image carousel.
•	AI inserted placeholder images, but no real image links howed AI’s weakness in sourcing actual data.

Key Takeaways
•	You cannot outsource your understanding of code to AI; you still need to think and learn.
•	Prompt quality matters: Provide context, wireframes, desired tech stack to get better output.
•	AI loves redundant/old code be ready to clean and refactor.
•	Cost & errors add up: especially with paid models.
•	AI is powerful for small, static or prototype projects, but struggles with large, real-world systems and non-deterministic tasks (images, unique data sets).
•	Tomorrow you’ll apply these concepts slowly with a Cookie Clicker clone.

SUMMARY:
Today in class we wrapped up Unit 3 and everyone’s groups presented their AI-generated podcast projects. We then started Unit 4 on AI-assisted development, focusing on how to use AI tools effectively in coding while understanding their limits. Key points were that you still need real coding knowledge to debug and maintain projects, AI often produces outdated or redundant code, and paid AI services can get expensive. We also practiced by prompting ChatGPT to build a simple “hot dog stand on the moon” website, then refactoring it (CSS → Tailwind) to see how AI can speed up routine tasks but still needs our input and clean-up.


NOTES 9/16

Continuing Unit 4: AI-Assisted Development 
Hands-on practice adding features to a Cookie Clicker clone using AI.
Intro to AI-enhanced IDEs and workflows (Zed, Cursor, Copilot).
Class Activity: Cookie Clicker + AI Tools
	Starting Point: Download and unzip the Cookie Clicker starter code from Blackboard.
	Tools Discussed:
	Zed (AI-integrated IDE; early access, MacOS/Linux only)
	Cursor
	Copilot
	Traditional IDEs like VS Code/PyCharm still fine (just copy-paste code into AI).

	First Prompt Example: Add header, footer, logo, navigation bar, Tailwind CSS but explicitly tell AI not to use frameworks like React.
	Agentic vs. Non-Agentic AI:
	Non-agentic (like plain ChatGPT): you copy/paste code, AI doesn’t see your files.
	Agentic (like Zed): AI can see/edit files, lets you “accept” or “reject” code changes directly.
	Second Prompt Example: Add “grandmas” for $100 cookies each; passive cookie generation; UI to show cookies/second.
	Third Prompt Example (optional): Add an achievement system (first click, 10 clicks, grandma purchases, pop-ups).

 Key Concepts Explaine
 	Vibe Coding Revisited: Trend of letting AI build everything (“just vibes”), but it produces “AI slop” and breaks at scale.
	AI-Enhanced IDEs: Let you integrate AI more directly into your coding workflow, but they’re OS-limited and still require oversight.
Prompting Tips:
	Break projects into small, clear features.o	Upload or paste your files so AI has context.
	Re-state “no frameworks” if you want plain JavaScript/CSS.
Limits of AI:
	AI can’t track entire projects well without file access.
	Placeholder images/links often break.
	More complex tasks = more bugs.
	It’s usually faster to fix small issues yourself
Workflow Shown by Instructor:
Create the project skeleton yourself (faster & up to date)
Define UI outline and data structures.
Prompt AI for one feature at a time.
Review code before accepting.
Test immediately.
Decide which features to let AI handle vs. coding yourself.

Key Takeaways
	Managing AI is a skill: You become an AI “project manager,” accepting/rejecting code changes and testing constantly.
	Smaller tasks work better: AI does fine on small, simple prompts (like the Hot Dog Stand site), but falters on more complex features.
	Context matters: Without file access, AI “loses track” like playing chess blindfolded.
	Customization pays off: A wireframe/mockup helps AI match your design; otherwise, output will be “ugly” or off-target.
	You still need coding knowledge: To debug, fix links, and refactor, especially as projects grow.


SUMMARY:
Today we started adding features to our Cookie Clicker clone as part of Unit 4 on AI-assisted development. The instructor reminded us to submit our podcast audio files, transcripts, and reflections with good notes. We learned about new AI-enhanced IDEs (like Zed, Cursor, and Copilot) and how they can add or change code directly, but also their downsides on Windows and with larger projects. In class we practiced giving AI small, clear prompts (like adding a header, footer, grandmas, and achievements to Cookie Clicker) and saw how AI can quickly generate code but often breaks things, requires manual fixes, and loses track of files. The key takeaway was to manage AI carefully break work into small pieces, review code before accepting it, and decide which parts to code yourself versus offloading to AI.



NOTES 09/17

Debugging with AI: when to use it, where it helps, and where it fails.
Hands-on lab: fix a broken “Skyrim Store” web app using AI + browser dev tools.
Discussion: AI in Hiring
Reference to an Atlantic piece: applicants use AI to write resumes; HR uses AI to screen; hiring loop feels broken.
Some companies now use AI interviewers that score answers automatically—concerns about fairness, “buzzword gaming,” and scam vibes.
Job applications are already risky for privacy
Privacy & Security Using AI
Do NOT paste proprietary/company code into public chatbots (ownership & training risks).
Many orgs prefer local or sandboxed AI to protect code/data.


Debugging with AI – What & Why
Why use AI:
Fast at spotting common patterns (missing semicolons, flipped operators).
Can suggest approaches/libraries/tech stacks to fill knowledge gaps.
Useful for brainstorming alternatives (easier paths).
Pitfalls:
Lazy outputs: fixes only the first instance; “explains” without actually fixing.
“Fixes” by disabling or deleting code → feature stops working.
Hallucinations: invents APIs/methods/libraries that don’t exist.
Band-aid fixes: removes the error message but not the root cause.
Best uses (ranked):
Syntax errors – AI is good, but your IDE already handles most of these.
Simple logic bugs – decent if you give clear context and expected behavior.
Knowledge gaps – great for “where do I start?” (then verify in docs/tutorials).

 Lab: Skyrim Store (Broken App) – What We Did
Goal: AI to diagnose and fix a few planted bugs.
Bug 1: Store items not showing
Symptom: Page loads; product list is empty.
Diagnosis: Script runs before the DOM exists.
Fix: Load JS after the HTML (move <script> to bottom) or add defer to the script tag.
Lesson: HTML loads top→bottom; DOM timing matters.
Bug 2: Checkout always says “insufficient funds”
Symptom: You have 5000 gold, item costs 100, but checkout fails.
Diagnosis/Edits:
Comparison operator was flipped (> vs <).
After purchase, code added gold instead of subtracting.
Fix: Correct the comparison and change + to -.
Lesson: Classic logic errors, AI can help if you point to the exact lines or paste console errors.

Other issues noted
Filenames/paths (e.g., assets/..., misspelled items like horsearmor.png) can derail AI’s guesses.
One-file multipage approach (hide/show via CSS) “works” but is clunky; better to split pages or routes in real apps.
Order summary/cart clearing ensure state resets at the right time (render after update, not before).
Process emphasized:
1.	Reproduce the bug.
2.	Use DevTools: Console + Network tabs.
3.	Explain the exact error to AI (paste stack trace/message).
4.	Review diffs AI proposes; accept/reject thoughtfully.
5.	Test immediately; don’t trust unverified output.
6.	Prefer root-cause fixes over silencing symptoms.

Key Takeaways
AI is a tool, not a substitute for understanding, especially for timing, state, and data-flow bugs.
Give AI full context (files, error text, expected behavior) and small, specific prompts.
Be wary of hallucinated APIs and “fixes” that simply remove functionality.
IDE hints + DevTools are your first line; AI is a helpful second opinion.
For learning and confidence, balance AI help with manual debugging so you still build the skill.

SUMMARRY: 
Today we focused on debugging with AI using a broken Skyrim Store app. We used DevTools to find issues (like scripts running before the DOM, flipped comparison operators, and incorrect gold math), then leveraged AI to suggest fixes, while double-checking for lazy or hallucinated changes. We discussed where AI helps (syntax patterns, simple logic, knowledge gaps) and where it fails (disabling code, invented APIs, band-aids). Also, don’t paste proprietary code into public AI tools.
