Lecture notes 09/29


 Introduction to Docker

Purpose: Run applications reliably across different systems/environments.

Problem solved: Avoid “it works on my machine” issues by packaging apps with their dependencies.


Docker	Virtual Machines


Emulates full hardware + OS	Share host OS kernel

Heavy and slow (GB-sized images)	Lightweight and fast

Mutable (you can break configs	Immutable – cannot change the base image

Each VM has its own OS	All containers share one kernel


Immutable system: Like iOS or Android – you can’t alter core files, ensuring consistency.

Mutable system: Like Windows/macOS – you can change settings that may cause issues.


Installing Docker


Install Docker Desktop (includes the Docker Engine).

Know your system type: x86 (AMD64) vs ARM.

Docker on Windows uses WSL (Windows Subsystem for Linux), not Hyper-V.

May need to enable hardware virtualization in BIOS.

No need to log in or create a Docker account.

On macOS, check if you have Intel or Apple Silicon and download the matching installer



Basic Docker Commands


Command	                                                                                  Purpose

docker --version	                                                          Check Docker installation.

docker help or man docker	                                                 View documentation/help.

docker ps -a	                                                                List all containers (active + stopped).

docker run <image>	                                                             Download (“pull”) and run a container.

docker rm <container>	                                                         Remove a container.

docker rmi <image>	                                                            Remove an image from your system.

docker images	                                                                Show all downloaded images.




Hands-On Demo: Running a Container


a. “Hello World” Example


Command: docker run hello-world

→ Downloads and runs a small test image.

Demonstrated difference between image and container.

Learned how to delete the container and image afterward.



Why Docker Matters:


Used in future classes (cloud, databases, Java, .NET).


Allows running and testing software without breaking your system.

Common for deploying apps on servers and in the cloud.

Standard practice in modern AI and software development.

Docker simplifies app deployment by bundling everything the app needs to run.

Containers = lightweight, fast, and consistent compared to virtual machines.

Immutable images reduce bugs from misconfiguration.

Key skills learned: installing Docker, running containers, accessing shells, serving content via NGINX.

Preparation for future units: will use Docker to run databases and AI apps in the cloud.



SUMMARY:

We began Unit 6, focusing on deploying AI through Docker. The instructor explained how Docker allows developers to package 

applications with all their dependencies so they can run consistently across different systems, unlike bulky virtual machines. 

We learned the core concepts of Docker: images, containers, Docker files, and volumes and how Docker uses a shared operating 

system kernel to make applications lightweight and efficient. The class walked through installing Docker (including setting up 

WSL on Windows), running basic commands, and creating containers using “Hello World” and NGINX examples to host a simple 

webpage. The instructor emphasized Docker’s importance for future courses in cloud computing, databases, and software 

development, as it’s widely used for building, testing, and deploying software in real-world environments.





Lecture Notes 09/30



Hardware and AI Performance:


Running AI models depends heavily on hardware capability.


GPUs = better performance (faster token generation).

CPUs = slower, but still functional.

VRAM (for GPUs) or RAM (for CPUs) limits the model size you can run.


Commands:

docker run -d --name ollama ollama/ollama

docker –version

docker exec -it ollama bash      # enter container

ollama pull qwen:3b              # download model

ollama run qwen:3b               # run model

docker compose up -d



Understanding Ollama:


Ollama = open-source tool (originally by Meta/Facebook) for running models locally, similar to Docker for AI.

Two flavors: Ollama (main version) and Ollama CPP (more raw/technical).

Models are free to run locally but must be open source — you can’t run ChatGPT or other closed models.


Quantization (Compression of Models)


Reducing model size = compressing data (like shrinking images/videos).

Pros: less storage + lower RAM use.

cons: reduced accuracy and creativity.

Common trade-off in running models on consumer hardware



Privacy and Offline Use

Models run locally inside Docker → no internet access by default.

Keeps sensitive data private.

You can add network access if needed, but default mode is secure and offline.

Ideal for private or client data projects.




SUMMARY:

In class we learned how to use Ollama with Docker to run open-source AI models locally. The lecture discussed how hardware 

affects AI performance and why using Docker keeps systems clean and portable. We installed Ollama inside a Docker container, 

explored model selection and quantization, and ran a smaller model like Qwen 3 to measure speed in tokens per second. The class 

also covered Docker Compose and a simple web interface that connected to Ollama, demonstrating how AI applications can run 

securely offline on personal hardware.






Lecture Notes 10/1
	


Fine-tuning	Retraining a model on custom data to change its knowledge or behavior. Requires large compute power; rarely done 

outside of research.


Configuration (Model File)	Adjusting parameters and prompts to guide how an existing model behaves. Lightweight and practical 

for everyday development.




The class performed configuration, not fine-tuning, due to hardware limits.

Fine-tuning = “teaching” the model new data.

Configuration = “guiding” the model’s personality and format.




A model file is a plain-text file that defines:

•	Base model to use (FROM field).

•	Parameters (temperature, repetition penalty, etc.).

•	System prompt (the background instruction that always runs).

•	Template/output format for responses.




Parameter	


temperature:	Controls randomness; higher = more creative, lower = more predictable.

repeat penalty:	 Prevents repetitive wording.

template:	Defines exact output structure (lists, word counts, punctuation rules, etc.).

system:	Sets overall role and behavior (e.g., “You are an email-writing assistant”).




NPM = Node Package Manager — automates downloading libraries instead of visiting many websites.

A package. Json file lists all required libraries (dependencies).

The project used an Ollama connector library to send prompts from the website to the custom model

Model files are the foundation of AI customization — easier and faster than full retraining.

Docker keeps everything portable and isolated.

Front-end UIs can easily connect to local AI models for testing or demos.

Even small AI models can perform useful tasks locally with the right prompts.




SUMMARY:


In class we learned how to customize AI behavior by creating and deploying personalized models with Ollama model files inside 

Docker. Instead of fine-tuning with data, they modified parameters, system prompts, and output templates to shape model 

responses. We also built a sample “Email Guru” model that generated subject lines from email bodies, demonstrating how a simple 

configuration can change an AI’s purpose. We then explored how to connect that model to a small front-end web app using Node.js 

and Svelte, learning how websites can communicate with local AI systems.
