import{h as A,aN as p,o as j,a0 as H}from"./BwdVtbq4.js";function M(e,n,t){var a=e==null?"":""+e;return a===""?null:a}function be(e,n,t,a,r,o){var l=e.__className;if(A||l!==t||l===void 0){var d=M(t);(!A||d!==e.getAttribute("class"))&&(d==null?e.removeAttribute("class"):e.className=d),e.__className=t}return o}const h={default:{name:"default",text:{primary:"text-green-400",secondary:"text-gray-200",username:"text-yellow-400",path:"text-blue-400",success:"text-green-400",error:"text-red-400",warning:"text-yellow-400",info:"text-green-200"},bg:{primary:"bg-gray-900",cursor:"bg-gray-300",topBar:"bg-neutral-950",topBarBorder:"border-gray-500"},components:{topBarText:"text-gray-500",keyboardBorder:"border-gray-400",keyboardBg:"bg-neutral-950"}},dark:{name:"dark",text:{primary:"text-gray-100",secondary:"text-gray-500",username:"text-purple-400",path:"text-purple-400",success:"text-green-400",error:"text-red-500",warning:"text-orange-400",info:"text-sky-300"},bg:{primary:"bg-black",cursor:"bg-white",topBar:"bg-gray-900",topBarBorder:"border-gray-700"},components:{topBarText:"text-gray-400",keyboardBorder:"border-gray-600",keyboardBg:"bg-gray-900"}},light:{name:"light",text:{primary:"text-gray-900",secondary:"text-gray-600",username:"text-blue-600",path:"text-purple-600",success:"text-green-600",error:"text-red-600",warning:"text-orange-500",info:"text-sky-600"},bg:{primary:"bg-white",cursor:"bg-gray-800",topBar:"bg-gray-100",topBarBorder:"border-gray-300"},components:{topBarText:"text-gray-600",keyboardBorder:"border-gray-400",keyboardBg:"bg-gray-50"}}};let C=p({value:h.default});function L(e){return e in h?(C.value=h[e],!0):!1}function s(){return C.value}function k(){return Object.keys(h)}function F(){return j(U)}const m="march";let i=p({value:`/home/${m}`}),U=H(()=>{const e=s();return`<span class="${e.text.secondary} text-xs sm:text-base"><span class="${e.text.username} font-semibold">${m}</span> @ <span class="${e.text.username} font-semibold">MESh</span> : <span class="${e.text.path} font-semibold">${i.value}</span> $</span>`}),v=p({value:[]}),O=p({value:-1});const S=100;let N=p({value:""}),ye=p({value:0}),$e=p({value:!1}),ve=p({value:!1});const Se="https://stream.radiojar.com/2fa4wbch308uv";p({value:null});const f={"":{home:{[m]:{".secret":{},Documents:{files:["resume.pdf","env.txt"]},Pictures:{files:["canine.jpg","feline.png"]},Music:{files:["daftendirekt.mp3"]},Videos:{files:["sarod.mp4"]},Downloads:{files:["magisk.img","_bitcoin_wallet_2013.exe"]},files:["cat.txt"]}},tmp:{files:["cache.tgz"]},opt:{},usr:{},etc:{},var:{},boot:{}}},u={USER:m,HOME:`/home/${m}`,SHELL:"/bin/mesh",PATH:"/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",LANG:"en_US.UTF-8",TERM:"MESh",HISTSIZE:"100",UID:"1000",GID:"1000",HOSTNAME:"meghraj-goswami",VERSION:"0.0.2"},x=["helloWorld","collatz","three","resume","calc","paint","radio","thunar"];function T(){const e=s();return`<div class="text-xs/2.5 sm:text-base/3.75 font-black ${e.text.username}">
    ##::::'##:'########::'######::'##::::::::
    ###::'###: ##.....::'##... ##: ##::::::::
    ####'####: ##::::::: ##:::..:: ##::::::::
    ## ### ##: ######:::. ######:: #########:
    ##. #: ##: ##...:::::..... ##: ##.... ##:
    ##:.:: ##: ##:::::::'##::: ##: ##:::: ##:
    ##:::: ##: ########:. ######:: ##:::: ##:
    .:::::..::........:::......:::..:::::..::</div>
    <span class="font-black text-xl ${e.text.username}">M</span>egh's <span class="font-black text-xl ${e.text.username}">E</span>mulated <span class="font-black text-xl ${e.text.username}">Sh</span>ell -- <span class="${e.text.info}">v${u.VERSION}</span>
    Type <span class="${e.text.username}">'banner'</span> to see this message again
    Type <span class="${e.text.username}">'help'</span> for a list of <span class="${e.text.info}">commands</span> and <span class="${e.text.info}">installed programs</span>

    Use <span class="${e.text.username}">Left</span>, <span class="${e.text.username}">Right</span> arrow keys & <span class="${e.text.username}">Home</span>, <span class="${e.text.username}">End</span> to move the <span class="${e.text.info}">cursor</span>
    Use <span class="${e.text.username}">Up</span> and <span class="${e.text.username}">Down</span> arrow keys to navigate <span class="${e.text.info}">command history</span>
    Use <span class="${e.text.username}">Tab</span> key for command <span class="${e.text.info}">suggestions</span> and <span class="${e.text.info}">autocompletion</span>
                `}function W(e){const n=s();if(e.length==0)return`cat: <span class="${n.text.error}">No file specified</span>`;{let t=f[""],a=e[0];a.startsWith("/")||(a=`${i.value}/${a}`);const r=a.split("/").filter(Boolean),o=r.pop();return o.startsWith(".")?`cat: Illegal action: ${o} is not in the sudoers file.
<span class="${n.text.error}">This incident will be reported.</span>`:(r.forEach(l=>{t[l]&&(t=t[l])}),t.files&&t.files.includes(o)?`Contents of ${a}:
Map simulated file content in the future.
            
Placeholder:<div class="text-base/3.75">
⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣠⣤⣤⣼⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀
⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠘⣿⣿⣿⣿⠟⠁⠀⠀⠀⠹⣿⣿⣿⣿⣿⠟⠁⠀⠀⠹⣿⣿⡿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣿⣿⣿⡇⠀⠀⠀⢼⣿⠀⢿⣿⣿⣿⣿⠀⣾⣷⠀⠀⢿⣿⣷⠀⠀⠀⠀⠀
⠀⠀⠀⢠⣿⣿⣿⣷⡀⠀⠀⠈⠋⢀⣿⣿⣿⣿⣿⡀⠙⠋⠀⢀⣾⣿⣿⠀⠀⠀⠀⠀
⢀⣀⣀⣀⣿⣿⣿⣿⣿⣶⣶⣶⣶⣿⣿⣿⣿⣾⣿⣷⣦⣤⣴⣿⣿⣿⣿⣤⠤⢤⣤⡄
⠈⠉⠉⢉⣙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⣀⣀⣀⡀⠀
⠐⠚⠋⠉⢀⣬⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣥⣀⡀⠈⠀⠈⠛
⠀⠀⠴⠚⠉⠀⠀⠀⠉⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠋⠁⠀⠀⠀⠉⠛⠢⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀meow⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇</div>⠀`:`cat: ${a}: <span class="${n.text.error}">No such file</span>`)}}function b(e){const n=document.getElementById("outputHistory");n.innerHTML+=`</div><pre class="break-all whitespace-pre-wrap"> &gt&gt ${e}</pre>`}function E(){const e=F();document.getElementById("prompt").innerHTML=e}function J(e){const n=s();if(e.length!=0&&e[0]!=".")if(e.length>1)b(`cd: <span class="${n.text.error}">too many arguments</span>`);else if(e[0]=="..")i.value=="/"||(i.value=i.value.split("/").slice(0,-1).join("/")||"/",E());else{let t=f[""],a=e[0],r=!0;if(i.value=="/"&&(a=`/${a}`),!a.startsWith("/")&&i.value!="/"&&(a=`${i.value}/${a}`),a.includes("/."))return b(`cd: <span class="${n.text.error}">Illegal action:</span> ${m} is not in the sudoers file.
<span class="${n.text.error}">This incident will be reported.</span>`),"";a.split("/").slice(1).forEach(o=>{t[o]?t=t[o]:r=!1}),a=="/"&&(r=!0,t=f[""]),r?(i.value=a,E()):b(`cd: not a directory: <span class="${n.text.error}">${a}<span>`)}return""}function B(){const e=document.getElementById("outputHistory");return e.innerHTML="",N.value="",""}function V(){return v.value=[],O.value=-1,"Sneaky, going incognito..."}function G(e){let n="moooOoooOo";const t=s();if(e.length>0&&(n=e.join(" "),e[0][0]=="$")){const a=e[0].slice(1);u[a]&&(n=u[a])}return`
<span class="${t.text.secondary}">(</span>${n}<span class="${t.text.secondary}">)</span>
   <span class="${t.text.secondary}">|</span>         <span class="${t.text.warning}">^__^</span>
   <span class="${t.text.secondary}">\\_______</span> <span class="${t.text.warning}"> (oO)\\_______</span>
             <span class="${t.text.warning}">(__)\\       )<span class="${t.text.warning}">\\/\\</span></span>
             <span class="${t.text.warning}">   ||----<span class="${t.text.warning}">w</span> |</span>
   <span class="${t.text.success}">^^ ^^^  ^^</span>   ||     ||`}function q(){const e=new Date,n={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:"short"};return e.toLocaleString("en-US",n)}function z(e){const n=s();if(e.length===0)return"";if(e[0][0]=="$"){const t=e[0].slice(1);return u[t]?u[t]:`echo: No such environment variable: <span class="${n.text.error}">${t}</span>`}return e.join(" ")}function Y(){return`<span class="${s().text.error}">Too many packages NOT ENOUGH RAM</span>
 >> Please use 'nano' instead.`}const Q=""+new URL("../assets/one_does_not_simply.DQN08aYP.webp",import.meta.url).href;function Z(){return`<img src='${Q}' alt='one does not simply' class="w-96" />
One does not simply exit MESh.
Have you tried REISUB?

`}function K(){return`<span class="${s().text.error}">Auto-merging src/components/Button.js
CONFLICT (content): Merge conflict in src/components/Button.js
error: could not apply 3f4a1b2... Fix button styling
hint: You have divergent branches and need to specify how to reconcile them.
hint: You can do so by running one of the following commands:
hint:
hint:   git config pull.rebase false  # merge (the default strategy)
hint:   git config pull.rebase true   # rebase
hint:   git config pull.ff only       # fast-forward only
hint:
hint: You can replace "git config" with "git branch" to set the merge strategy for a specific branch.
Auto-merging docs/README.md
CONFLICT (content): Merge conflict in docs/README.md
error: Failed to merge in the changes.
Patch failed at 5 Fix button styling
The copy of the patch that failed is found in:
   .git/rebase-apply/patch
When you have resolved this problem, run "git rebase --continue".
If you prefer to skip this patch, run "git rebase --skip".
To check out the original branch and stop rebasing, run "git rebase --abort".</span>`}const X={"File & Directory":["ls","cd","pwd","cat","rm"],"Text Editors":["vim","nano","emacs"],"Sys Info":["neofetch","banner","whoami","cal","date","printenv"],Development:["git","sudo","echo","test"],Terminal:["clear","exit","theme","cowsay"],Documentation:["resume","cv","hist","clshist","help","man"],"Work in Progress":["define","matrix","pacman","radio"]};function _(e){const n=s();if(e.length===0){let t=`<span class="${n.text.primary}">[ ${Object.keys($).length} ] Available commands:</span>

`;for(const[a,r]of Object.entries(X)){t+=`<span class="${n.text.success} font-semibold">${a}</span>
`;for(const o of r){const l=$[o];l&&(t+=`	<span class="${n.text.warning}">${o.padEnd(10)}:</span> ${l.man.replaceAll("[ WIP ]",`<span class='${n.text.error}'>[ WIP ]</span>`)}
`)}t+=`
`}t+=`<span class="${n.text.primary}">[ ${x.length} ] Installed programs:
`;for(let a=0;a<x.length;a++)t+=`	${a+1}. <span class="${n.text.warning}">${x[a].padEnd(12)}</span>
`;return t+=`
<span class="${n.text.primary}">Note: To run a program, type "./" followed by the program name
Example usage:</span> <span class="${n.text.warning}">./helloWorld</span>
`,t}else if(e.length===1){const t=$[e[0]];return t?`<span class="${n.text.warning}">${e[0]}:</span> ${t.man.replaceAll("[ WIP ]",`<span class='${n.text.error}'>[ WIP ]</span>`)}`:`help: <span class="${n.text.error} font-semibold">no manual entry for ${e[0]}</span>
	just google it`}else return`<span class="${n.text.error} font-semibold">just google it</span>`}function ee(){return`Last ${v.value.length} commands (max ${S}):
${v.value.join(`
`)}`}function te(e){let n=f[""],t=i.value,a=!0;if(e.length!=0&&(t=e.at(-1),t.startsWith("/")||(t=`${i.value}/${t}`)),t.split("/").slice(1).forEach(r=>{n[r]?n=n[r]:a=!1}),t=="/"&&(a=!0,n=f[""]),a)return["",".","..",...Object.keys(n).filter(r=>r!="files"),...n.files||[]].join(`
`);{const r=s();return`ls: cannot access '${t}': <span class="${r.text.error}">No such file or directory</span>`}}function ne(){const e=s();return`<span class="${e.text.error}">man has been deprecated.</span>
    
In an effort to encourage more meaningful and inclusive language in the MESh project,
we have replaced the term "man" with "person". Better yet, just Google it.
    
See: <a class="${e.text.info} underline" href="https://sfconservancy.org/news/2020/jun/23/gitbranchname/">https://sfconservancy.org/news/2020/jun/23/gitbranchname/</a> for inspiration.
    
`}function ae(){return`<span class="${s().text.error}">User is too advanced for nano.</span>
 >> Please use 'vim' instead.`}function se(){return`<span class="${s().text.error}">Neofetch has been deprecated.</span>
Please use 'banner' instead.`}function re(e){const n=s();return`System environment variables:
${Object.entries(u).map(([t,a])=>`<span class="${n.text.warning}">${t}</span>=${a}`).join(`
`)}`}function oe(){return i.value}function ie(e){return"TBD"}function le(e){const n=s();return`rm: cannot remove ${e.join(" ")}: <span class="${n.text.error}">User should take a bath</span>

Tip: To remove French language packs system-wide, use:
<span class="${n.text.warning}">sudo rm -fr ./*</span>

`}const ce="data:image/webp;base64,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";function pe(e){const n=s();return e.length==0?"sudo: no command specified":`<img src='${ce}' alt='HAL 9000' class="w-24 h-24 m-2" />
    <span class="${n.text.error}">"I'm sorry, Dave. I'm afraid I can't do that."</span>
    
`}const me=""+new URL("../assets/trooper.FKB3m4By.webp",import.meta.url).href;function de(){return`<img src='${me}' alt='stormtrooper' class="w-96" />
Nothing to test here, move along, move along.

`}function ue(e){const n=s();if(e.length===0){const a=k().join(", ");return`Current theme: <span class="${n.text.info}">${s().name}</span>

Available themes: ${a}

Usage: theme <name>`}const t=e[0].toLowerCase();return L(t)?(B(),T()):`<span class="${n.text.error}">X</span> Theme not found: <span class="${n.text.error}">${t}</span>

Available themes: ${k().join(", ")}`}function fe(){return`<span class="${s().text.error}">User will not be able to exit vim.</span>
 >> Please use 'emacs' instead.`}function ge(){return m}function P(){const e=s();return`
<span class="text-2xl font-black ${e.text.username}">Meghraj Goswami</span>
<span class="${e.text.info}">Civil Engineer | Applied Mathematics | Developer | Musician</span>
<span><a href="https://github.com/megz15" target="_blank" class="underline decoration-dotted">GitHub</a> | <a href="mailto:meghraj.g16@gmail.com" class="underline decoration-dotted">Email</a> | <a href="https://orcid.org/0009-0007-4895-2747" target="_blank" class="underline decoration-dotted">ORCID</a> | <a href="https://www.linkedin.com/in/m-goswami/" target="_blank" class="underline decoration-dotted">LinkedIn</a></span>

<span class="text-lg font-bold ${e.text.username}">--- EDUCATION ---</span>
<span class="font-bold">BITS Pilani, Hyderabad Campus, India <span class="${e.text.info}">(2022 - 2027)</span></span>
B.E. <span class="${e.text.info}">Civil Engineering</span>
M.Sc. <span class="${e.text.info}">Mathematics</span>
CGPA: <span class="${e.text.info}">8.46 / 10.0</span> (Current)

<span class="text-lg font-bold ${e.text.username}">--- RESEARCH INTERESTS ---</span>
• <span class="${e.text.info}">Engineering:</span> Continuum & Computational Mechanics, Fluid Dynamics, Remote Sensing & GIS
• <span class="${e.text.info}">Mathematics:</span> Numerical Analysis, Cryptography, Graphs & Networks, AI/ML, Modelling

<span class="text-lg font-bold ${e.text.username}">--- TECHNICAL STACK ---</span>
<span class="font-bold w-32 inline-block">Languages:</span> <span class="${e.text.info}">Python, R, C/C++, JavaScript/TypeScript, Dart, Kotlin, Java, Julia</span>
<span class="font-bold w-32 inline-block">Libraries:</span> <span class="${e.text.info}">NumPy, Pandas, SciPy, Google Earth Engine, MatPlotLib / Seaborn, Scikit-learn</span>
<span class="font-bold w-32 inline-block">Web / Mobile:</span> <span class="${e.text.info}">SvelteKit, VueJS, React, NodeJS, ExpressJS, Flask / Django, Flutter, Jetpack Compose</span>
<span class="font-bold w-32 inline-block">Tools:</span> <span class="${e.text.info}">Linux (Arch/Debian/RHEL), Git, Docker, LaTeX, Redis, SQL, Selenium / Playwright</span>
<span class="font-bold w-32 inline-block">Engineering:</span> <span class="${e.text.info}">MATLAB/GNU Octave, AutoCAD, Revit, QGIS, OpenFOAM, STAAD.Pro, ETABS, WaterGEMS</span>

<div class="w-7/8 break-normal"><span class="text-lg font-bold ${e.text.username}">--- PROJECTS ---</span>
1. <span class="${e.text.info}"><strong>Fluid Simulation</strong></span>
(Ongoing) To understand and apply the lattice Boltzmann method for fluid flow simulation

2. <span class="${e.text.info}"><strong>Green's Function for Elastic Wave Equation</strong></span>
   Simulated and derived analytical solutions for wave propagation in elastic media with analysis of Surface & Interfacial Waves

3. <span class="${e.text.info}"><strong>Sea-Ice Concentration Prediction (ML)</strong></span>
   Developed a Multi-Layer Perceptron (MLP) framework with hyperparameter optimization and GUI tool to predict sea-ice concentration using meteorological reanalysis data

4. <span class="${e.text.info}"><strong>HydrologyFFA: Flood Frequency Analysis</strong></span>
   Interactive R Shiny tool for Extreme Value Statistics and hydrological risk assessment

5. <span class="${e.text.info}"><strong>Land Use/Land Cover Change Detection</strong></span>
   Quantified LULC changes using DynamicWorld dataset for environmental monitoring and urban planning applications
</div>

<div class="w-7/8 break-normal"><span class="text-lg font-bold ${e.text.username}">--- PUBLICATIONS ---</span>
1. Goswami M., et al. (2025). <span class="${e.text.info}"><em>Impacts of Building Rehabilitation by Horizontal and Vertical Extensions of framed Structures  Risks and Realities.</em></span><br>Presented at <span class="${e.text.info}">CARRS2025</span> (Accepted for Springer Lecture Notes)

2. Goswami M., et al. (2025). <span class="${e.text.info}"><em>Performance Comparison of Linear Relation Based and Machine Learning Based Rainfall-Runoff Models for FLow-Simulation for a Data-Scarce River Valley Project.</em></span><br>Presented at <span class="${e.text.info}">ICCCNet2025</span> (Under processing for Springer Lecture Notes)

3. Goswami M., et al. (2024). <span class="${e.text.info}"><em>Future Precipitation Characteristics of Designated Smart Cities of India for Integrated Urban Water Management Under Selected 'Shared Socio-Economic Pathways' of Climatic Variations.</em></span><br>Presented at <span class="${e.text.info}">SUWM2024</span> (Accepted for publication)
</div>
<span class="text-lg font-bold ${e.text.username}">--- WORKSHOPS & LEADERSHIP ---</span>
• Music Head, <a href="https://swaranjali.vercel.app/" class="underline decoration-dotted ${e.text.info}">Swaranjali</a> (Classical Music & Dance Club)
• Instructor, <span class="${e.text.info}"><a href="https://megz15.github.io/ntru-slides/" target="_blank" class="underline decoration-dotted">NTRU: Lattice-Based Post Quantum Cryptography</a></span>
• Instructor, <span class="${e.text.info}"><a href="https://megz15.github.io/intro-to-webdev/" target="_blank" class="underline decoration-dotted">Introduction to Web Development</a></span> (cruX: Programming and Computing club, BPHC)
• Instructor, <span class="${e.text.info}"><a href="https://megz15.github.io/classical-music-workshop/" target="_blank" class="underline decoration-dotted">Introduction to Classical Music</a></span> (Swaranjali, BPHC)
• Co-Instructor, <span class="${e.text.info}"><a href="https://github.com/megz15/acm-dart-ws" target="_blank" class="underline decoration-dotted">App Dev using Dart / Flutter</a></span> (Association for Computing Machinery {ACM} Student Chapter)
• Co-Instructor, <span class="${e.text.info}"><a href="https://megz15.github.io/intro-to-p2p/" target="_blank" class="underline decoration-dotted">Introduction to Peer-to-Peer Networking</a></span> (Society for Open Software {BITS-SOS}, BPHC)
• Co-Instructor, <span class="${e.text.info}"><a href="https://bits-sos.github.io/slides/dualboot" target="_blank" class="underline decoration-dotted">Linux Dual-Booting Workshop</a></span>  (Society for Open Software {BITS-SOS}, BPHC)

<div class="w-7/8 break-normal"><span class="text-lg font-bold ${e.text.username}">--- EXTRACURRICULAR SKILLS ---</span>
• <span class="${e.text.info}"><strong>Indian Classical Music:</strong></span> Sarod player with 10+ years of training and performances
• <span class="${e.text.info}"><strong>Self-Motivated Projects:</strong></span> Developed <a href="https://naadgen.vercel.app/" class="underline decoration-dotted ${e.text.info}">NaadGen</a> (music documentation web-app) & <a href="https://play.google.com/store/apps/details?id=megh.dailyraga" class="underline decoration-dotted ${e.text.info}">DailyRaga</a> (ICM companion app)
• <span class="${e.text.info}"><strong>Int'l Experience:</strong></span> Travelled to US, UK, Ireland, France, Switzerland, and Italy. <span class="${e.text.info}">EN / HI / BN / FR</span> speaker
</div>
<div class="w-7/8 break-normal"><span class="text-lg font-bold ${e.text.username}">--- PROFESSIONAL EXPERIENCE ---</span>
1. <span class="${e.text.info}"><strong>National Centre for Polar and Ocean Research (NCPOR)</strong></span>
   Research Intern (2024). Conducted quantitative data analysis in Earth Sciences to model climatological trends.
2. <span class="${e.text.info}"><strong>India Space Academy (ISA)</strong></span>
   Summer Training on Remote Sensing & GIS (Jul 2025 - Aug 2025).
3. <span class="${e.text.info}"><strong>Smart India Hackathon (2024)</strong></span>
   Finalist. Collaborated on rapid prototyping of engineering systems for government initiatives.
</div>
`}function he(e){const n=s(),t=new Date;let a=t.getMonth();const r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o=["Su","Mo","Tu","We","Th","Fr","Sa"];if(e.length!=0&&(a=r.findIndex(c=>c.toLowerCase()===e[0].toLowerCase()),a===-1))return`<span class="${n.text.error} font-semibold">cal: invalid month "${e[0]}"</span>`;const l=new Date(t.getFullYear(),a+1,0).getDate(),d=new Date(t.getFullYear(),a,1).getDay();let w=`${r[a]} ${t.getFullYear()}
`;w+=`${o.join(" ")}
`;let g="";for(let c=0;c<d;c++)g+="   ";for(let c=1;c<=l;c++){const D=c===t.getDate()&&a===t.getMonth(),I=c.toString().padStart(2," "),R=D?`<span class="${n.bg.topBar} ${n.text.warning} font-semibold">${I}</span>`:`<span class="${n.text.primary}">${I}</span>`;g+=R+" ",(d+c)%7===0&&(g+=`
`)}return w+g}const y=s(),$={banner:{man:"Show the banner message",cmd:T},cat:{man:"[ WIP ] View file contents (partially implemented)",cmd:W},cal:{man:"Display calendar for specified month",cmd:he},cd:{man:"Change the current working directory",cmd:J},clear:{man:"Clear the terminal output",cmd:B},clshist:{man:`Clear session command history <span class="${y.text.error}">(HISTSIZE = ${S})</span>`,cmd:V},cowsay:{man:"cow ASCII!",cmd:G},date:{man:"Show the current date and time",cmd:q},define:{man:"[ WIP ] Look up a word definition (not implemented yet)",cmd:()=>"[ WIP ] Look up a word definition (not implemented yet)"},echo:{man:"Print text to the terminal",cmd:z},emacs:{man:"Editing MACroS, extensible real-time editor",cmd:Y},exit:{man:"Exit the terminal (buggy)",cmd:Z},git:{man:"Version control system",cmd:K},help:{man:"Show this message",cmd:_},hist:{man:`Show command history <span class="${y.text.error}">(HISTSIZE = ${S})</span>`,cmd:ee},ls:{man:"List files in the specified directory",cmd:te},man:{man:"Show manual pages. Alternatively, use `help`",cmd:ne},matrix:{man:"[ WIP ] 🚫🥄 (not implemented yet)",cmd:()=>"[ WIP ] 🚫🥄 (not implemented yet)"},nano:{man:"Pico editor clone with enhancements",cmd:ae},neofetch:{man:"CLI system information tool",cmd:se},pacman:{man:"[ WIP ] Package manager (not implemented yet)",cmd:()=>"[ WIP ] Package manager (not implemented yet)"},printenv:{man:"Print all environment variables",cmd:re},pwd:{man:"Print current working directory",cmd:oe},resume:{man:"Show resume/CV of Meghraj Goswami",cmd:P},cv:{man:`alias for <span class="${y.text.info}">resume</span>`,cmd:P},rm:{man:"Remove files or directories",cmd:le},sudo:{man:"Run a command with superuser privileges",cmd:pe},test:{man:"O_O",cmd:de},theme:{man:"Change the terminal theme",cmd:ue},vim:{man:"Improved version of the vi text editor",cmd:fe},whoami:{man:"Show the current user",cmd:ge},radio:{man:"Show current track info",cmd:ie}};export{S as H,N as a,ye as b,v as c,$ as d,O as e,s as f,F as g,u as h,L as i,ve as j,C as k,x as p,Se as r,be as s,$e as t};
