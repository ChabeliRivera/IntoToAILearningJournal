09/22-Lecture Notes Unit 5
Hardware for AI 

Raspberry Pi demo

Understand what hardware is needed to run AI locally (CPU vs GPU, RAM/VRAM, storage).

See how servers/headless systems are managed over the network.

Practice the flow: image OS → boot Pi → SSH in → update/install packages → run a tiny web server.

Need to Downloaded-VirtualBox 

AR/Smart glasses news: AI integrated within your glasses.

Computer hardware basics: motherboard, CPU, PCIe lanes, PSU, RAM (volatile), storage (HDD/SSD/NVMe).

Accelerators’ as parallel processors (graphics, video codecs, physics, AI).

Architecture: x86 vs ARM (reduced instruction set); mention of open RISC-V trend.

Servers: “just computers” with different specs; headless administration via SSH.

CPU = fast at sequential/general tasks.

GPU = many small cores for massively parallel tasks → great for AI and graphics.

Memory matters for AI

Model size is constrained by VRAM (GPU RAM) or shared/system RAM.

Non-gaming laptops often share graphics and system RAM → slower/lower headroom.

RAM vs Storage

RAM is volatile (wiped on power-off); save work to storage or you lose it.

SSD/NVMe are much faster/random-access than HDDs.

It’s a full computer on ARM; performance ≈ older phone.

Perfect for learning OS imaging, networking, and services.

Turn it off/on fixes a lot because RAM clears (volatile).

On Linux, they prefer package managers (apt, dnf) for predictable, scriptable installs.

Local web servers aren’t internet-reachable unless you open router ports (risk!).

Integrated vs discrete GPU: iGPU is fine for office/video; discrete GPU needed for heavy 3D/AI.

Power & heat: High-wattage PCs/servers act like space heaters; plan cooling.

Motherboard: main circuit board connecting all components.

CPU (processor): “brain” doing general computations [made from silicon aka sand]

PCIe lanes: data highways between CPU and devices (GPU, NVMe).

RAM: fast, volatile working memory.

VRAM/DRAM on GPU: RAM on the graphics card; crucial for AI model size.

Storage: long-term data (HDD/SSD/NVMe).

GPU (accelerator): parallel computing for graphics, video, physics, AI.

ARM vs x86: instruction sets (ARM common on phones/Pi; x86 on most PCs).

Headless: running a system without a local display/keyboard; managed remotely.

SSH: secure remote shell into another machine.

SUMMARY:
During this lecture we spent class getting familiar witht the Raspberry Pi and it parts. Especially
the motherboard and how everthing connects. The professor also explained what the different components do 
and how the Pi communicates as a separate little computer. 



09/23 Lecture notes 

Virtualization & Installing Debian in a Virtual Machine


NASA announced possible biosignatures on Mars (signs of past life, not current life).
Perseverance Rover drilled rock samples; Curiosity was the first nuclear rover.
We can’t bring samples back yet due to funding; they’re stored for potential future missions.
Historical anecdote: Apollo astronauts quarantined after returning from space in case of “space disease.”
Illustrates how new discoveries and technology (like Mars rovers) push boundaries but also have practical limitations.

Key point: communicating with a different computer (Pi) shows how not everything runs locally.
Builds the foundation for understanding remote computing and how virtualization mimics separate computers.

Virtualization

Definition: creating a virtual (software-based) version of computers, storage, networking, servers, or applications.
Used for compatibility (run different software on your hardware), splitting big machines into smaller units, and
security (isolate untrusted software).

Analogy: running Game Boy games on a PC via an emulator.

Virtualization lets you run software or operating systems not designed for your physical machine and keeps workloads isolated.
Hypervisors

Hypervisor = software that sits above the physical server and allocates resources to virtual machines.

Type 1 (bare metal) hypervisors: installed directly on physical hardware; lower latency, more secure 
(examples: VMware ESXi, Microsoft Hyper-V, KVM).

Type 2 (hosted) hypervisors: installed on top of an existing OS; used for end-user virtualization 
(examples: Oracle VirtualBox, VMware Workstation).

We will use Type 2 (VirtualBox) in class, so you don’t have to erase Windows.

Virtual Machines (VMs)

VMs are like containers software inside can’t see outside.
You can run multiple VMs on one hypervisor, each with a different OS.
VMs are portable can be moved between machines/hypervisors easily.
Security benefit: test untrusted software in a VM without risking your host system..

Downloading VirtualBox, configuring RAM/CPU/disk, installing Debian.

SUMMARY:
During this lecture we set up Debian Linux in our Virtual Box. We also talked about why virtualization is useful and 
the different between type 1 and type 2 hypervisor. Then we actually created VM, linked Debian ISO, picked a desktop enviroment, 
and learned a few basic Linux commands. So everyone could get Debian up and running.



09/24 Lecture notes

Finish installing & Using CasaOS in a Virtual Machine + Local AI

Younger students watch fewer movies/Tv

CasaOS is not an OS, but a bundle of preconfigured software: Docker, web server, file system, etc.

Allows you to quickly set up your own “cloud “file sharing, self-hosted apps, even Minecraft server.

Could do all pieces manually, but CasaOS combines them in one install command.

ARM vs x86  not all software compatible; VirtualBox mostly for x86.

When allocating storage/RAM to VMs, dynamic disks grow over time.

VM can’t use GPU directly unless special pass-through.

Added apps in CasaOS -JELLYFIN


SUMMARY:
Today in our Debian VM, we installed CasaOS, which has many tools that turn your VM into a 
mini-cloud server. we learned how to run the install command, fix common errors. Saw how CasaOS
let you host your own neflix with jellyfin. Then we also tried to install Ollama with is what AI uses 
to run.




09/25 Lecture Notes

LAB DAY- Catch up if the previous projects were not installed or need help getting set up.
