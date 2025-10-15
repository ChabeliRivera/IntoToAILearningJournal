LECTURE NOTES 10/06


Install Node.js


To check if you do or don’t have it type in terminal node-V. It will tell you what version you have. 


Required to run modern web frameworks. Allows JavaScript to run on a server (not just the browser).



•	Understanding framework-based web development (Svelte + Node.js)

•	Creating and running local web projects

•	Building reusable components and reactive elements

•	Using AI to enhance, not replace, developer understanding

•	Web Framework: Prewritten code that helps you write applications faster and cleaner.

•	Common ones: React, Vue, Angular, Svelte, Next.js, and even TikTok’s Lynx.

•	Frameworks exist for frontend, backend, and databases.

•	Benefits: Write fewer lines of code and focus on logic instead of boilerplate.

•	JavaScript is interpreted and single-threaded (only one CPU core).



IN-CLASS-DEMO:  SVELTE PROJECT


Make sure you are in the correct folder before creating or running the project.

npx sv create <project-name>

npm install

npm run dev

•	Choose minimal, TypeScript, Tailwind, and NPM during setup.

Inside lib/ → create a file called Header.svelte

Move <h1> from main page into Header.svelte

Import it back into +page.svelte 


Goal: Use AI to assist with coding new features.

Challenge: Without understanding the codebase, AI can generate broken code.

Lesson: Learn how the framework works first, then use AI wisely. 


“What you'll quickly learn is that when programming something in a programming language you don't know.

When trying to use AI to develop or use Ad features, it's frustrating, because you cannot fix the problem

yourself. And what I really want to drill home is that AI can be useful to learn something? But it's… 

More harmful than good if you use it incorrectly, or if you don't know what you're doing. You’re going 

to just write a ton of code, and none of it's going to work.”




SUMMARY:


Today in class we learned about AI-driven development, web frameworks, and setting up projects using Node.js and Svelte. 
The instructor began by comparing the modern “AI bubble” to the dot-com bubble of the early 2000s, emphasizing how 
companies that power AI models like AWS and Azure are the ones generating real profit. Then we began by installing Node.
js.  One way to verify if you had NodeJS is by typing in the terminal node -v command. Then we used npx sv create to 
build a Svelte project. The importance of working within the correct directory and understanding how package managers 
like NPM work. We practiced creating a component (Header.svelte), importing it into the main page, and adding 
interactivity with buttons and state changes using functions and Boolean toggling. The professor also expressed the 
importance of knowing the framework of coding because while AI coding may work on bigger projects it may give you broken 
code. It is important to know the framework, so you know how to troubleshoot it.







LECUTURE NOTES 10/07



Talked about how Taylor Swift had used AI to create promotional videos and asked what our thoughts were. Some may say 

its shows laziness others see it as a reflection of technological advancements.




IN-CLASS-DEMO: AI-driven development using Svelte.


npx sv create props-in-class

cd props-in-class

npm install

npm run dev


•Always run the commands inside the project folder

Create Event Page

Prompt: create a simple webpage for the Iowa Tech Summit event.

Page included:

•	Event title (“Iowa Tech Summit”)

•	Description, date, time, location

•	Styled using Tailwind CSS


Takeaway: be specific with prompts (colors, fonts, structure

Refactoring with Components

Goal: make code modular and reusable.

“Vibe coding” (AI-assisted coding): Found it frustrating and less responsive than direct coding.




Agentic AI tools (like GitHub Copilot):

Can directly edit project files.

Caution: they can also accidentally delete or break files.

Version control (Git) is essential for recovery and tracking changes.

Always test small steps before moving forward- “If you make 3 changes and it breaks, you won’t know which one did it.”




Instructor’s AI Coding Flow:

1.	Write a clear prompt with context and requirements.

2.	AI generates code.

3.	Review the output carefully.

4.	Test the code before moving on.

5.	If errors occur, refine the prompt or fix it manually.

6.	Once working, refactor to clean up code structure.

“Don’t just copy and paste — understand what the code is doing.”





SUMMMARY:



The class began with a discussion about AI-generated media. Such as Taylor Swift’s AI video and Coca-Cola’s AI 
commercials starting a debate about authenticity, artistic integrity, and the growing role of AI in creative industries. 
We created a new project using npx sv create, TypeScript, and Tailwind CSS, learning how to structure and style a simple 
webpage for the Iowa Tech Summit. Through AI prompting we attempted to finalize the event page to our liking, but the AI 
was not fully creating what we wanted it to do. This method of AI assistance is called vibe coding, which was not as 
responsive as we would have wished it was and caused frustration. Some useful tips to when it comes to vibe coding are 
making sure your prompt is clear and reviewing the code. Testing out the code before moving on to the next thing. This 
goes to say that even though it’s great tool to utilize sometimes it might easier to just create the code yourself.
.




LECTURE NOTE 10/09



Sora and AI Videos- Trending on social media and they look pretty real

Could lead people to more easily fall for scams.



IN-CLASS-DEMO: REGISTRATION FORM/IHCC

Features

Collects student name, address, program, and preferred class format.

Options for face-to-face, live virtual, or online.

If “face-to-face” is chosen → display additional dorm and meal plan options.


COMMANDS:

npx sv create register

cd register

npm install

npm run dev


Created a Header.svelte and Form.svelte file for the registration form. 

Professor gave us a couple prompts to give AI to help us create our page.

In the end AI did help us create the registration, but it wasn’t the best quality.



Instructor showed his hand-coded version of the registration app.

Differences:

His version passed data correctly through props and reused imported lists.

AI’s version duplicated the same data and ignored passed-in variables.

AI-generated code lacked scalability and proper logic flow.

Lesson: AI can write “something that works,” but not necessarily something maintainable.


Always back up your work using Git version control.

Avoid giving AI access to sensitive directories or databases.

Limit AI’s file access to the folder you’re actively working in.



AI-assisted coding is not a replacement for understanding.

Developers must:


Know framework versions and syntax.

Review and debug AI-generated code.

Use version control and testing after every change.

AI can speed up simple tasks, but complex, dynamic apps still require human reasoning and structure.




SUMMARY:


The class starts by talking about Sora and how it’s trending. Sora videos seem very realistic and could cause potential 
misuse to spread misinformation. The class demo we did was a Registration Form for IHCC students. We used “vibe coding” 
with tools like GitHub Copilot. We gave AI a couple prompts and processed the suggestions one by one and saw how 
gradually our page was built. Our page came out decent but wasn’t the greatest per usual. One thing to note is that AI 
is trained on old code which is why the code looks different. The professor stressed the importance of understanding 
syntax, starting projects early, using version control (Git), and testing each step rather than relying entirely on 
automation.

