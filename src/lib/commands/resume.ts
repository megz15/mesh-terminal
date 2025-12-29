import { getTheme } from "$lib/theme.svelte"

export default function resume(): string {
    const theme = getTheme();
    
    return `
<span class="text-2xl font-black ${theme.text.username}">Meghraj Goswami</span>
<span class="${theme.text.info}">Civil Engineer | Developer | Musician</span>
<span><a href="https://github.com/megz15" target="_blank" class="underline decoration-dotted">GitHub</a> | <a href="mailto:meghraj.g16@gmail.com" class="underline decoration-dotted">Email</a> | <a href="https://orcid.org/0009-0007-4895-2747" target="_blank" class="underline decoration-dotted">ORCID</a></span>

<span class="text-lg font-bold ${theme.text.username}">--- EDUCATION ---</span>
<span class="font-bold">BITS Pilani, Hyderabad Campus <span class="${theme.text.info}">(2022 - 2027)</span></span>
B.E. <span class="${theme.text.info}">Civil Engineering</span>
M.Sc. <span class="${theme.text.info}">Mathematics</span>

<span class="text-lg font-bold ${theme.text.username}">--- RESEARCH INTERESTS ---</span>
• <span class="${theme.text.info}">Engineering:</span> Continuum Mechanics, Fluid Dynamics
• <span class="${theme.text.info}">Mathematics:</span> Cryptography, AI/ML, Modelling

<span class="text-lg font-bold ${theme.text.username}">--- TECHNICAL STACK ---</span>
<span class="font-bold w-32 inline-block">Langs:</span> <span class="${theme.text.info}">Python, R, C/C++, JavaScript/TypeScript, Dart (Flutter), Kotlin</span>
<span class="font-bold w-32 inline-block">Libraries:</span> <span class="${theme.text.info}">Numpy, Pandas, Scipy, Google Earth Engine, MatPlotLib / Seaborn</span>
<span class="font-bold w-32 inline-block">Web / Mobile:</span> <span class="${theme.text.info}">SvelteKit, VueJS, React, NodeJS, ExpressJS, Flask / Django, Flutter</span>
<span class="font-bold w-32 inline-block">Tools:</span> <span class="${theme.text.info}">Linux (Arch/Debian/RHEL), Docker, LaTeX, Git, QGIS, Redis, SQL, Selenium, Playwright</span>

<span class="text-lg font-bold ${theme.text.username}">--- PROJECTS ---</span>
Shortlist and add later

<div class="w-3/4"><span class="text-lg font-bold ${theme.text.username}">--- PUBLICATIONS ---</span>
1. Goswami M., et al. (2024). <span class="${theme.text.info}"><em>Future Precipitation Characteristics of Designated Smart Cities of India for Integrated Urban Water Management Under Selected 'Shared Socio-Economic Pathways' of Climatic Variations.</em></span><br>Presented at <span class="${theme.text.info}">SUWM2024</span>.

2. Goswami M., et al. (2025). <span class="${theme.text.info}"><em>Performance Comparison of Linear Relation Based and Machine Learning Based Rainfall-Runoff Models for FLow-Simulation for a Data-Scarce River Valley Project.</em></span><br>Presented at <span class="${theme.text.info}">ICCCNet2025</span>.

3. Goswami M., et al. (2025). <span class="${theme.text.info}"><em>Impacts of Building Rehabilitation by Horizontal and Vertical Extensions of framed Structures  Risks and Realities.</em></span><br>Presented at <span class="${theme.text.info}">CARRS2025</span>.
</div>
<span class="text-lg font-bold ${theme.text.username}">--- WORKSHOPS & LEADERSHIP ---</span>
• Instructor, <span class="${theme.text.info}"><a href="https://megz15.github.io/intro-to-webdev/" target="_blank" class="underline decoration-dotted">Introduction to Web Development</a></span> (cruX, BPHC)
• Co-Instructor, <span class="${theme.text.info}"><a href="https://github.com/megz15/acm-dart-ws" target="_blank" class="underline decoration-dotted">App Dev using Dart / Flutter</a></span> (Association for Computing Machinery {ACM} BPHC)
• Co-Instructor, <span class="${theme.text.info}"><a href="https://megz15.github.io/intro-to-p2p/" target="_blank" class="underline decoration-dotted">Introduction to Peer-to-Peer Networking</a></span> (Society for Open Software {BITS-SOS}, BPHC)
• Instructor, <span class="${theme.text.info}"><a href="https://megz15.github.io/classical-music-workshop/" target="_blank" class="underline decoration-dotted">Introduction to Classical Music</a></span> (Swaranjali, BPHC)
`;
}