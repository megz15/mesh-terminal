import{u as k,o as g,aA as E,aN as i,aI as P}from"./CLgYDTrq.js";function le(e){var t=E(0);return function(){return arguments.length===1?(k(t,g(t)+1),arguments[0]):(g(t),e())}}const d={default:{text:{primary:"text-green-400",secondary:"text-gray-400",username:"text-yellow-400",path:"text-blue-400",success:"text-green-400",error:"text-red-400",warning:"text-yellow-400",info:"text-green-200"},bg:{primary:"bg-gray-900",cursor:"bg-gray-300",topBar:"bg-neutral-950",topBarBorder:"border-gray-500"},components:{topBarText:"text-gray-500",keyboardBorder:"border-gray-400",keyboardBg:"bg-neutral-950"}},dark:{text:{primary:"text-gray-100",secondary:"text-gray-500",username:"text-purple-400",path:"text-purple-400",success:"text-green-400",error:"text-red-500",warning:"text-orange-400",info:"text-sky-300"},bg:{primary:"bg-black",cursor:"bg-white",topBar:"bg-gray-900",topBarBorder:"border-gray-700"},components:{topBarText:"text-gray-400",keyboardBorder:"border-gray-600",keyboardBg:"bg-gray-900"}}};let p=i({value:d.default});function j(e){return e in d?(p.value=d[e],!0):!1}function s(){return p.value}function v(){return Object.keys(d)}function T(){return g(B)}const l="march";let o=i({value:`/home/${l}`}),B=P(()=>{const e=p.value;return`<span class="text-gray-200">oh no <span class="${e.text.username} font-semibold">${l}</span> is in <span class="${e.text.path} font-semibold">${o.value}</span> $</span>`}),x=i({value:[]}),H=i({value:-1});const b=100;let C=i({value:""}),ce=i({value:0}),pe=i({value:!1}),me=i({value:!1});const ue="https://stream.radiojar.com/2fa4wbch308uv";i({value:null});const u={"":{home:{[l]:{".secret":{},Documents:{files:["resume.pdf","env.txt"]},Pictures:{files:["canine.jpg","feline.png"]},Music:{files:["daftendirekt.mp3"]},Videos:{files:["sarod.mp4"]},Downloads:{files:["magisk.img","bitcoin.exe"]},files:["cat.txt"]}},tmp:{files:["cache.tgz"]},opt:{},usr:{},etc:{},var:{},boot:{}}},m={USER:l,HOME:`/home/${l}`,SHELL:"/bin/mesh",PATH:"/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",LANG:"en_US.UTF-8",TERM:"MESh",HISTSIZE:"100",UID:"1000",GID:"1000",HOSTNAME:"meghraj-goswami",VERSION:"0.0.2"},w=["helloWorld","collatz","three","resume","calc","paint","radio","thunar"];function I(){const e=s();return`<div class="text-base/3.75 font-black ${e.text.username}">
    ##::::'##:'########::'######::'##::::::::
    ###::'###: ##.....::'##... ##: ##::::::::
    ####'####: ##::::::: ##:::..:: ##::::::::
    ## ### ##: ######:::. ######:: #########:
    ##. #: ##: ##...:::::..... ##: ##.... ##:
    ##:.:: ##: ##:::::::'##::: ##: ##:::: ##:
    ##:::: ##: ########:. ######:: ##:::: ##:
    .:::::..::........:::......:::..:::::..::</div>
    <span class="font-black text-xl ${e.text.username}">M</span>egh's <span class="font-black text-xl ${e.text.username}">E</span>mulated <span class="font-black text-xl ${e.text.username}">Sh</span>ell -- <span class="${e.text.info}">v${m.VERSION}</span>
    Type <span class="${e.text.username}">'banner'</span> to see this message again
    Type <span class="${e.text.username}">'help'</span> for a list of <span class="${e.text.info}">commands</span> and <span class="${e.text.info}">installed programs</span>

    Use <span class="${e.text.username}">Left</span>, <span class="${e.text.username}">Right</span> arrow keys & <span class="${e.text.username}">Home</span>, <span class="${e.text.username}">End</span> to move the <span class="${e.text.info}">cursor</span>
    Use <span class="${e.text.username}">Up</span> and <span class="${e.text.username}">Down</span> arrow keys to navigate <span class="${e.text.info}">command history</span>
    Use <span class="${e.text.username}">Tab</span> key for command <span class="${e.text.info}">suggestions</span> and <span class="${e.text.info}">autocompletion</span>
                `}function D(e){const t=s();if(e.length==0)return`cat: <span class="${t.text.error}">No file specified</span>`;{let n=u[""],a=e[0];a.startsWith("/")||(a=`${o.value}/${a}`);const r=a.split("/").filter(Boolean),c=r.pop();return c.startsWith(".")?`cat: Illegal action: ${c} is not in the sudoers file.
<span class="${t.text.error}">This incident will be reported.</span>`:(r.forEach(y=>{n[y]&&(n=n[y])}),n.files&&n.files.includes(c)?`Contents of ${a}:
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
⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇</div>⠀`:`cat: ${a}: <span class="${t.text.error}">No such file</span>`)}}function f(e){const t=document.getElementById("outputHistory");t.innerHTML+=`</div><pre class="break-all whitespace-pre-wrap"> &gt&gt ${e}</pre>`}function $(){const e=T();document.getElementById("prompt").innerHTML=e}function R(e){const t=s();if(e.length!=0&&e[0]!=".")if(e.length>1)f(`cd: <span class="${t.text.error}">too many arguments</span>`);else if(e[0]=="..")o.value=="/"||(o.value=o.value.split("/").slice(0,-1).join("/")||"/",$());else{let n=u[""],a=e[0],r=!0;if(!a.startsWith("/")&&o.value!="/"&&(a=`${o.value}/${a}`),a.includes("/."))return f(`cd: <span class="${t.text.error}">Illegal action:</span> ${l} is not in the sudoers file.
<span class="${t.text.error}">This incident will be reported.</span>`),"";a.split("/").slice(1).forEach(c=>{n[c]?n=n[c]:r=!1}),a=="/"&&(r=!0,n=u[""]),r?(o.value=a,$()):f(`cd: not a directory: <span class="${t.text.error}">${a}<span>`)}return""}function A(){const e=document.getElementById("outputHistory");return e.innerHTML="",C.value="",""}function U(){return x.value=[],H.value=-1,"Sneaky. Going incognito, no traces left behind."}function O(e){let t="moooOoooOo";if(e.length>0&&(t=e.join(" "),e[0][0]=="$")){const n=e[0].slice(1);m[n]&&(t=m[n])}return`
<span class="text-gray-200">(</span>${t}<span class="text-gray-200">)</span>
   <span class="text-gray-200">|</span>         <span class="text-yellow-400">^__^</span>
   <span class="text-gray-200">\\_______</span> <span class="text-yellow-400"> (oO)\\_______</span>
             <span class="text-yellow-400">(__)\\       )<span class="text-yellow-400">\\/\\</span></span>
             <span class="text-yellow-400">   ||----<span class="text-yellow-400">w</span> |</span>
   <span class="text-green-400">^^ ^^^  ^^</span>   ||     ||`}function M(){const e=new Date,t={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:"short"};return e.toLocaleString("en-US",t)}function F(e){const t=s();if(e.length===0)return"";if(e[0][0]=="$"){const n=e[0].slice(1);return m[n]?m[n]:`echo: No such environment variable: <span class="${t.text.error}">${n}</span>`}return e.join(" ")}function L(){return`<span class="${s().text.error}">Too many packages NOT ENOUGH RAM</span>
 >> Please use 'nano' instead.`}const V=""+new URL("../assets/one_does_not_simply.DQN08aYP.webp",import.meta.url).href;function N(){return`<img src='${V}' alt='one does not simply' class="w-96" />
One does not simply exit MESh.
Have you tried REISUB?

`}function W(){return`<span class="${s().text.error}">Auto-merging src/components/Button.js
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
To check out the original branch and stop rebasing, run "git rebase --abort".</span>`}function J(e){const t=s();if(e.length===0)return`<span class="${t.text.primary}">[ ${Object.keys(h).length} ] Available commands:</span>
${Object.entries(h).map(([n,{man:a}])=>`	<span class="${t.text.warning}">${n.padEnd(8)}:</span> ${a}`).join(`
`).replaceAll("[ WIP ]",`<span class='${t.text.error}'>[ WIP ]</span>`)}

    <span class="${t.text.primary}">[ ${w.length} ] Installed programs:
    ${w.entries().map(([n,a])=>`${n+1}. <span class="${t.text.warning}">${a.padEnd(8)}</span>`).toArray().join(`
	`)}
    
    Note: To run a program, type "./" followed by the program name
    Example usage:</span> <span class="${t.text.warning}">./helloWorld</span>
    
`;if(e.length===1){const n=h[e[0]];return n?`<span class="${t.text.warning}">${e[0]}:</span> ${n.man.replaceAll("[ WIP ]",`<span class='${t.text.error}'>[ WIP ]</span>`)}`:`help: <span class="${t.text.error} font-semibold">no manual entry for ${e[0]}</span>
	just google it`}else return`<span class="${t.text.error} font-semibold">just google it</span>`}function q(){return`Last ${x.value.length} commands (max ${b}):
${x.value.join(`
`)}`}function G(e){let t=u[""],n=o.value,a=!0;if(e.length!=0&&(n=e.at(-1),n.startsWith("/")||(n=`${o.value}/${n}`)),n.split("/").slice(1).forEach(r=>{t[r]?t=t[r]:a=!1}),n=="/"&&(a=!0,t=u[""]),a)return["",".","..",...Object.keys(t).filter(r=>r!="files"),...t.files||[]].join(`
`);{const r=s();return`ls: cannot access '${n}': <span class="${r.text.error}">No such file or directory</span>`}}function z(){const e=s();return`<span class="${e.text.error}">man has been deprecated.</span>
    
In an effort to encourage more meaningful and inclusive language in the MESh project,
we have replaced the term "man" with "person". Better yet, just Google it.
    
See: <a class="${e.text.info} underline" href="https://sfconservancy.org/news/2020/jun/23/gitbranchname/">https://sfconservancy.org/news/2020/jun/23/gitbranchname/</a> for inspiration.
    
`}function Y(){return`<span class="${s().text.error}">User is too advanced for nano.</span>
 >> Please use 'vim' instead.`}function Q(){return`<span class="${s().text.error}">Neofetch has been deprecated.</span>
Please use 'banner' instead.`}function Z(e){const t=s();return`System environment variables:
${Object.entries(m).map(([n,a])=>`<span class="${t.text.warning}">${n}</span>=${a}`).join(`
`)}`}function K(){return o.value}function X(e){return"TBD"}function _(e){const t=s();return`rm: cannot remove ${e.join(" ")}: <span class="${t.text.error}">User should take a bath</span>

Tip: To remove French language packs system-wide, use:
<span class="${t.text.warning}">sudo rm -fr ./*</span>

`}const ee="data:image/webp;base64,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";function te(e){const t=s();return e.length==0?"sudo: no command specified":`<img src='${ee}' alt='HAL 9000' class="w-24 h-24 m-2" />
    <span class="${t.text.error}">"I'm sorry, Dave. I'm afraid I can't do that."</span>
    
`}const ne=""+new URL("../assets/trooper.FKB3m4By.webp",import.meta.url).href;function ae(){return`<img src='${ne}' alt='stormtrooper' class="w-96" />
Nothing to test here, move along, move along.

`}function se(e){const t=s();if(e.length===0){const a=v().join(", ");return`Current theme: <span class="${t.text.info}">${s()===s()?"default":"unknown"}</span>

Available themes: ${a}

Usage: theme <name>`}const n=e[0].toLowerCase();return j(n)?(A(),I()):`<span class="${t.text.error}">X</span> Theme not found: <span class="${t.text.error}">${n}</span>

Available themes: ${v().join(", ")}`}function re(){return`<span class="${s().text.error}">User will not be able to exit vim.</span>
 >> Please use 'emacs' instead.`}function oe(){return l}function S(){const e=s();return`
<span class="text-2xl font-black ${e.text.username}">Meghraj Goswami</span>
<span class="${e.text.info}">Civil Engineer | Developer | Musician</span>
<span><a href="https://github.com/megz15" target="_blank" class="underline decoration-dotted">GitHub</a> | <a href="mailto:meghraj.g16@gmail.com" class="underline decoration-dotted">Email</a> | <a href="https://orcid.org/0009-0007-4895-2747" target="_blank" class="underline decoration-dotted">ORCID</a></span>

<span class="text-lg font-bold ${e.text.username}">--- EDUCATION ---</span>
<span class="font-bold">BITS Pilani, Hyderabad Campus <span class="${e.text.info}">(2022 - 2027)</span></span>
B.E. <span class="${e.text.info}">Civil Engineering</span>
M.Sc. <span class="${e.text.info}">Mathematics</span>

<span class="text-lg font-bold ${e.text.username}">--- RESEARCH INTERESTS ---</span>
• <span class="${e.text.info}">Engineering:</span> Continuum Mechanics, Fluid Dynamics
• <span class="${e.text.info}">Mathematics:</span> Cryptography, AI/ML, Modelling

<span class="text-lg font-bold ${e.text.username}">--- TECHNICAL STACK ---</span>
<span class="font-bold w-32 inline-block">Langs:</span> <span class="${e.text.info}">Python, R, C/C++, JavaScript/TypeScript, Dart (Flutter), Kotlin</span>
<span class="font-bold w-32 inline-block">Libraries:</span> <span class="${e.text.info}">Numpy, Pandas, Scipy, Google Earth Engine, MatPlotLib / Seaborn</span>
<span class="font-bold w-32 inline-block">Web / Mobile:</span> <span class="${e.text.info}">SvelteKit, VueJS, React, NodeJS, ExpressJS, Flask / Django, Flutter</span>
<span class="font-bold w-32 inline-block">Tools:</span> <span class="${e.text.info}">Linux (Arch/Debian/RHEL), Docker, LaTeX, Git, QGIS, Redis, SQL, Selenium, Playwright</span>

<span class="text-lg font-bold ${e.text.username}">--- PROJECTS ---</span>
Shortlist and add later

<div class="w-3/4"><span class="text-lg font-bold ${e.text.username}">--- PUBLICATIONS ---</span>
1. Goswami M., et al. (2024). <span class="${e.text.info}"><em>Future Precipitation Characteristics of Designated Smart Cities of India for Integrated Urban Water Management Under Selected 'Shared Socio-Economic Pathways' of Climatic Variations.</em></span><br>Presented at <span class="${e.text.info}">SUWM2024</span>.

2. Goswami M., et al. (2025). <span class="${e.text.info}"><em>Performance Comparison of Linear Relation Based and Machine Learning Based Rainfall-Runoff Models for FLow-Simulation for a Data-Scarce River Valley Project.</em></span><br>Presented at <span class="${e.text.info}">ICCCNet2025</span>.

3. Goswami M., et al. (2025). <span class="${e.text.info}"><em>Impacts of Building Rehabilitation by Horizontal and Vertical Extensions of framed Structures  Risks and Realities.</em></span><br>Presented at <span class="${e.text.info}">CARRS2025</span>.
</div>
<span class="text-lg font-bold ${e.text.username}">--- WORKSHOPS & LEADERSHIP ---</span>
• Instructor, <span class="${e.text.info}"><a href="https://megz15.github.io/intro-to-webdev/" target="_blank" class="underline decoration-dotted">Introduction to Web Development</a></span> (cruX, BPHC)
• Co-Instructor, <span class="${e.text.info}"><a href="https://github.com/megz15/acm-dart-ws" target="_blank" class="underline decoration-dotted">App Dev using Dart / Flutter</a></span> (Association for Computing Machinery {ACM} BPHC)
• Co-Instructor, <span class="${e.text.info}"><a href="https://megz15.github.io/intro-to-p2p/" target="_blank" class="underline decoration-dotted">Introduction to Peer-to-Peer Networking</a></span> (Society for Open Software {BITS-SOS}, BPHC)
• Instructor, <span class="${e.text.info}"><a href="https://megz15.github.io/classical-music-workshop/" target="_blank" class="underline decoration-dotted">Introduction to Classical Music</a></span> (Swaranjali, BPHC)
`}const h={banner:{man:"Show the banner message",cmd:I},cat:{man:"[ WIP ] View file contents (partially implemented)",cmd:D},cd:{man:"Change the current working directory",cmd:R},clear:{man:"Clear the terminal output",cmd:A},clshist:{man:`Clear session command history <span class="${p.value.text.error}">(HISTSIZE = ${b})</span>`,cmd:U},cowsay:{man:"cow ASCII! 🐮",cmd:O},date:{man:"Show the current date and time",cmd:M},define:{man:"[ WIP ] Look up a word definition (not implemented yet)",cmd:()=>"[ WIP ] Look up a word definition (not implemented yet)"},echo:{man:"Print text to the terminal",cmd:F},emacs:{man:"Editing MACroS, the extensible, customizable, self-documenting real-time display editor",cmd:L},exit:{man:"Exit the terminal (buggy)",cmd:N},git:{man:"Version control system",cmd:W},help:{man:"Show this message",cmd:J},hist:{man:`Show command history <span class="${p.value.text.error}">(HISTSIZE = ${b})</span>`,cmd:q},ls:{man:"List files in the specified directory (or current directory if none specified)",cmd:G},man:{man:"Show manual pages. Alternatively, use `help`",cmd:z},matrix:{man:"[ WIP ] 🚫🥄 (not implemented yet)",cmd:()=>"[ WIP ] 🚫🥄 (not implemented yet)"},nano:{man:"Nano, the Pico editor clone with enhancements",cmd:Y},neofetch:{man:"CLI system information tool",cmd:Q},pacman:{man:"[ WIP ] Package manager (not implemented yet)",cmd:()=>"[ WIP ] Package manager (not implemented yet)"},printenv:{man:"Print all environment variables",cmd:Z},pwd:{man:"Print current working directory",cmd:K},resume:{man:"Show resume/CV of Meghraj Goswami",cmd:S},cv:{man:`alias for <span class="${p.value.text.info}">resume</span>`,cmd:S},rm:{man:"Remove files or directories",cmd:_},sudo:{man:"Run a command with superuser privileges",cmd:te},test:{man:"O_O",cmd:ae},theme:{man:"Change the terminal theme",cmd:se},vim:{man:"Vi Improved, a highly configurable, improved version of the vi text editor",cmd:re},whoami:{man:"Show the current user",cmd:oe},radio:{man:"Show current track info",cmd:X}};export{b as H,T as a,C as b,h as c,ce as d,H as e,x as f,s as g,m as h,me as i,p as j,ue as k,w as p,le as r,pe as t};
