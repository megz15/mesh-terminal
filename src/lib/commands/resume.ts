import { getTheme } from "$lib/theme.svelte"

export default function resume(): string {
    const theme = getTheme();
    
    return `
<span class="text-2xl font-black ${theme.text.username}">Meghraj Goswami</span>
<span class="${theme.text.info}">Civil Engineer | Applied Mathematics | Developer | Musician</span>
<span><a href="https://github.com/megz15" target="_blank" class="underline decoration-dotted">GitHub</a> | <a href="mailto:meghraj.g16@gmail.com" class="underline decoration-dotted">Email</a> | <a href="https://orcid.org/0009-0007-4895-2747" target="_blank" class="underline decoration-dotted">ORCID</a> | <a href="https://www.linkedin.com/in/m-goswami/" target="_blank" class="underline decoration-dotted">LinkedIn</a></span>

<span class="text-lg font-bold ${theme.text.username}">--- EDUCATION ---</span>
<span class="font-bold">BITS Pilani, Hyderabad Campus, India <span class="${theme.text.info}">(2022 - 2027)</span></span>
B.E. <span class="${theme.text.info}">Civil Engineering</span>
M.Sc. <span class="${theme.text.info}">Mathematics</span>
CGPA: <span class="${theme.text.info}">8.46 / 10.0</span> (Current)

<span class="text-lg font-bold ${theme.text.username}">--- RESEARCH INTERESTS ---</span>
• <span class="${theme.text.info}">Engineering:</span> Continuum & Computational Mechanics, Fluid Dynamics, Remote Sensing & GIS
• <span class="${theme.text.info}">Mathematics:</span> Numerical Analysis, Cryptography, Graphs & Networks, AI/ML, Modelling

<span class="text-lg font-bold ${theme.text.username}">--- TECHNICAL STACK ---</span>
<span class="font-bold w-32 inline-block">Languages:</span> <span class="${theme.text.info}">Python, R, C/C++, JavaScript/TypeScript, Dart, Kotlin, Java, Julia</span>
<span class="font-bold w-32 inline-block">Libraries:</span> <span class="${theme.text.info}">NumPy, Pandas, SciPy, Google Earth Engine, MatPlotLib / Seaborn, Scikit-learn</span>
<span class="font-bold w-32 inline-block">Web / Mobile:</span> <span class="${theme.text.info}">SvelteKit, VueJS, React, NodeJS, ExpressJS, Flask / Django, Flutter, Jetpack Compose</span>
<span class="font-bold w-32 inline-block">Tools:</span> <span class="${theme.text.info}">Linux (Arch/Debian/RHEL), Git, Docker, LaTeX, Redis, SQL, Selenium / Playwright</span>
<span class="font-bold w-32 inline-block">Engineering:</span> <span class="${theme.text.info}">MATLAB/GNU Octave, AutoCAD, Revit, QGIS, OpenFOAM, STAAD.Pro, ETABS, WaterGEMS</span>

<div class="w-7/8 break-normal"><span class="text-lg font-bold ${theme.text.username}">--- PROJECTS ---</span>
1. <span class="${theme.text.info}"><strong>Fluid Simulation</strong></span>
(Ongoing) To understand and apply the lattice Boltzmann method for fluid flow simulation

2. <span class="${theme.text.info}"><strong>Green's Function for Elastic Wave Equation</strong></span>
   Simulated and derived analytical solutions for wave propagation in elastic media with analysis of Surface & Interfacial Waves

3. <span class="${theme.text.info}"><strong>Sea-Ice Concentration Prediction (ML)</strong></span>
   Developed a Multi-Layer Perceptron (MLP) framework with hyperparameter optimization and GUI tool to predict sea-ice concentration using meteorological reanalysis data

4. <span class="${theme.text.info}"><strong>HydrologyFFA: Flood Frequency Analysis</strong></span>
   Interactive R Shiny tool for Extreme Value Statistics and hydrological risk assessment

5. <span class="${theme.text.info}"><strong>Land Use/Land Cover Change Detection</strong></span>
   Quantified LULC changes using DynamicWorld dataset for environmental monitoring and urban planning applications
</div>

<div class="w-7/8 break-normal"><span class="text-lg font-bold ${theme.text.username}">--- PUBLICATIONS ---</span>
1. Goswami M., et al. (2025). <span class="${theme.text.info}"><em>Impacts of Building Rehabilitation by Horizontal and Vertical Extensions of framed Structures  Risks and Realities.</em></span><br>Presented at <span class="${theme.text.info}">CARRS2025</span> (Accepted for Springer Lecture Notes)

2. Goswami M., et al. (2025). <span class="${theme.text.info}"><em>Performance Comparison of Linear Relation Based and Machine Learning Based Rainfall-Runoff Models for FLow-Simulation for a Data-Scarce River Valley Project.</em></span><br>Presented at <span class="${theme.text.info}">ICCCNet2025</span> (Under processing for Springer Lecture Notes)

3. Goswami M., et al. (2024). <span class="${theme.text.info}"><em>Future Precipitation Characteristics of Designated Smart Cities of India for Integrated Urban Water Management Under Selected 'Shared Socio-Economic Pathways' of Climatic Variations.</em></span><br>Presented at <span class="${theme.text.info}">SUWM2024</span> (Accepted for publication)
</div>
<span class="text-lg font-bold ${theme.text.username}">--- WORKSHOPS & LEADERSHIP ---</span>
• Music Head, <a href="https://swaranjali.vercel.app/" class="underline decoration-dotted ${theme.text.info}">Swaranjali</a> (Classical Music & Dance Club)
• Instructor, <span class="${theme.text.info}"><a href="https://megz15.github.io/ntru-slides/" target="_blank" class="underline decoration-dotted">NTRU: Lattice-Based Post Quantum Cryptography</a></span>
• Instructor, <span class="${theme.text.info}"><a href="https://megz15.github.io/intro-to-webdev/" target="_blank" class="underline decoration-dotted">Introduction to Web Development</a></span> (cruX: Programming and Computing club, BPHC)
• Instructor, <span class="${theme.text.info}"><a href="https://megz15.github.io/classical-music-workshop/" target="_blank" class="underline decoration-dotted">Introduction to Classical Music</a></span> (Swaranjali, BPHC)
• Co-Instructor, <span class="${theme.text.info}"><a href="https://github.com/megz15/acm-dart-ws" target="_blank" class="underline decoration-dotted">App Dev using Dart / Flutter</a></span> (Association for Computing Machinery {ACM} Student Chapter)
• Co-Instructor, <span class="${theme.text.info}"><a href="https://megz15.github.io/intro-to-p2p/" target="_blank" class="underline decoration-dotted">Introduction to Peer-to-Peer Networking</a></span> (Society for Open Software {BITS-SOS}, BPHC)
• Co-Instructor, <span class="${theme.text.info}"><a href="https://bits-sos.github.io/slides/dualboot" target="_blank" class="underline decoration-dotted">Linux Dual-Booting Workshop</a></span>  (Society for Open Software {BITS-SOS}, BPHC)

<div class="w-7/8 break-normal"><span class="text-lg font-bold ${theme.text.username}">--- EXTRACURRICULAR SKILLS ---</span>
• <span class="${theme.text.info}"><strong>Indian Classical Music:</strong></span> Sarod player with 10+ years of training and performances
• <span class="${theme.text.info}"><strong>Self-Motivated Projects:</strong></span> Developed <a href="https://naadgen.vercel.app/" class="underline decoration-dotted ${theme.text.info}">NaadGen</a> (music documentation web-app) & <a href="https://play.google.com/store/apps/details?id=megh.dailyraga" class="underline decoration-dotted ${theme.text.info}">DailyRaga</a> (ICM companion app)
• <span class="${theme.text.info}"><strong>Int'l Experience:</strong></span> Travelled to US, UK, Ireland, France, Switzerland, and Italy. <span class="${theme.text.info}">EN / HI / BN / FR</span> speaker
</div>
<div class="w-7/8 break-normal"><span class="text-lg font-bold ${theme.text.username}">--- PROFESSIONAL EXPERIENCE ---</span>
1. <span class="${theme.text.info}"><strong>National Centre for Polar and Ocean Research (NCPOR)</strong></span>
   Research Intern (2024). Conducted quantitative data analysis in Earth Sciences to model climatological trends.
2. <span class="${theme.text.info}"><strong>India Space Academy (ISA)</strong></span>
   Summer Training on Remote Sensing & GIS (Jul 2025 - Aug 2025).
3. <span class="${theme.text.info}"><strong>Smart India Hackathon (2024)</strong></span>
   Finalist. Collaborated on rapid prototyping of engineering systems for government initiatives.
</div>
`;
}