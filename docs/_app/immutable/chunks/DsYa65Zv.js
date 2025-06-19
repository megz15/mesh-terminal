import{J as y,B as p,ab as b,aq as l,aA as x}from"./CCO0EpHD.js";function $(e){var t=b(0);return function(){return arguments.length===1?(y(t,p(t)+1),arguments[0]):(p(t),e())}}function v(){return p(w)}const i="march";let a=l({value:`/home/${i}`});const w=x(()=>`<span class="text-gray-200">oh no <span class="text-yellow-400 font-semibold">${i}</span> is in <span class="text-blue-400 font-semibold">${a.value}</span> $</span>`);let d=l({value:[]}),I=l({value:-1});const f=100;let A=l({value:""}),K=l({value:0}),_=l({value:!1});const c={"":{home:{[i]:{".secret":{},Documents:{files:["resume.pdf","env.txt"]},Pictures:{files:["canine.jpg","feline.png"]},Music:{files:["daftendirekt.mp3"]},Videos:{files:["sarod.mp4"]},Downloads:{files:["magisk.img","bitcoin.exe"]},files:["cat.txt"]}},tmp:{files:["cache.tgz"]},opt:{},usr:{},etc:{},var:{},boot:{}}},r={USER:i,HOME:`/home/${i}`,SHELL:"/bin/mesh",PATH:"/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",LANG:"en_US.UTF-8",TERM:"MESh",HISTSIZE:"100",UID:"1000",GID:"1000",HOSTNAME:"march3000",VERSION:"0.0.1"};function S(){return`<div class="text-base/3.75 font-black text-yellow-400">
    ##::::'##:'########::'######::'##::::::::
    ###::'###: ##.....::'##... ##: ##::::::::
    ####'####: ##::::::: ##:::..:: ##::::::::
    ## ### ##: ######:::. ######:: #########:
    ##. #: ##: ##...:::::..... ##: ##.... ##:
    ##:.:: ##: ##:::::::'##::: ##: ##:::: ##:
    ##:::: ##: ########:. ######:: ##:::: ##:
    .:::::..::........:::......:::..:::::..::</div>
    <span class="font-black text-xl text-yellow-400">M</span>egh's <span class="font-black text-xl text-yellow-400">E</span>mulated <span class="font-black text-xl text-yellow-400">Sh</span>ell - v${r.VERSION||"0.0.1"}</span>
    Type <span class="text-yellow-400">'banner'</span> to see this message again
    Type <span class="text-yellow-400">'help'</span> for a list of commands

    Use <span class="text-yellow-400">Left</span>, <span class="text-yellow-400">Right</span> arrow keys & <span class="text-yellow-400">Home</span>, <span class="text-yellow-400">End</span> to move the cursor
    Use <span class="text-yellow-400">Up</span> and <span class="text-yellow-400">Down</span> arrow keys to navigate command history
    Use <span class="text-yellow-400">Tab</span> key for command suggestions and autocompletion
                `}function P(e){if(e.length==0)return'cat: <span class="text-red-400">No file specified</span>';{let t=c[""],n=e[0];n.startsWith("/")||(n=`${a.value}/${n}`);const o=n.split("/").filter(Boolean),s=o.pop();return s.startsWith(".")?`cat: Illegal action: ${s} is not in the sudoers file.
<span class="text-red-400">This incident will be reported.</span>`:(o.forEach(h=>{t[h]&&(t=t[h])}),t.files&&t.files.includes(s)?`Contents of ${n}:
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
⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇</div>⠀`:`cat: ${n}: <span class="text-red-400">No such file</span>`)}}function m(e){const t=document.getElementById("outputHistory");t.innerHTML+=`</div><pre class="break-all whitespace-pre-wrap"> &gt&gt ${e}</pre>`}function g(){const e=v();document.getElementById("prompt").innerHTML=e}function j(e){if(e.length!=0&&e[0]!=".")if(e.length>1)m('cd: <span class="text-red-400">too many arguments</span>');else if(e[0]=="..")a.value=="/"||(a.value=a.value.split("/").slice(0,-1).join("/")||"/",g());else{let t=c[""],n=e[0],o=!0;!n.startsWith("/")&&a.value!="/"&&(n=`${a.value}/${n}`),n.includes("/.")&&m(`cd: Illegal action: ${i} is not in the sudoers file.
<span class="text-red-400">This incident will be reported.</span>`),n.split("/").slice(1).forEach(s=>{t[s]?t=t[s]:o=!1}),n=="/"&&(o=!0,t=c[""]),o?(a.value=n,g()):m(`cd: not a directory: <span class="text-red-400">${n}<span>`)}return""}function k(){const e=document.getElementById("outputHistory");return e.innerHTML="",A.value="",""}function E(){return d.value=[],I.value=-1,"Sneaky. Going incognito, no traces left behind."}function H(e){let t="moooOoooOo";if(e.length>0&&(t=e.join(" "),e[0][0]=="$")){const n=e[0].slice(1);r[n]&&(t=r[n])}return`
(${t})
   │         ^__^
   ┕━━━━━━━  (oO)\\_______
             (__)\\       )\\/\\
                ||----w |
   ^^ ^^^  ^^   ||     ||`}function T(e){if(e.length===0)return"";if(e[0][0]=="$"){const t=e[0].slice(1);return r[t]?r[t]:`echo: No such environment variable: <span class="text-red-400">${t}</span>`}return e.join(" ")}function D(){return`<span class="text-red-400">Too many packages NOT ENOUGH RAM</span>
 >> Please use 'nano' instead.`}const B=""+new URL("../assets/one_does_not_simply.DQN08aYP.webp",import.meta.url).href;function U(){return`<img src='${B}' alt='one does not simply' class="w-96" />
One does not simply exit MESh.
Have you tried REISUB?

`}function O(){return`<span class="text-red-400">Auto-merging src/components/Button.js
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
To check out the original branch and stop rebasing, run "git rebase --abort".</span>`}function F(e){if(e.length===0)return`[ ${Object.keys(u).length} ] Available commands:
${Object.entries(u).map(([t,{man:n}])=>`	<span class="text-yellow-400">${t.padEnd(8)}:</span> ${n}`).join(`
`).replaceAll("[ WIP ]","<span class='text-red-400'>[ WIP ]</span>")}
        
`;if(e.length===1){const t=u[e[0]];return t?`<span class="text-yellow-400">${e[0]}:</span> ${t.man.replaceAll("[ WIP ]","<span class='text-red-400'>[ WIP ]</span>")}`:`help: <span class="text-red-400 font-semibold">no manual entry for ${e[0]}</span>
	just google it`}else return'<span class="text-red-400 font-semibold">just google it</span>'}function V(){return`Last ${d.value.length} commands (max ${f}):
${d.value.join(`
`)}`}function R(e){let t=c[""],n=a.value,o=!0;return e.length!=0&&(n=e.at(-1),n.startsWith("/")||(n=`${a.value}/${n}`)),n.split("/").slice(1).forEach(s=>{t[s]?t=t[s]:o=!1}),n=="/"&&(o=!0,t=c[""]),o?["",".","..",...Object.keys(t).filter(s=>s!="files"),...t.files||[]].join(`
`):`ls: cannot access '${n}': <span class="text-red-400">No such file or directory</span>`}function W(){return`<span class="text-red-400">man has been deprecated.</span>
    
In an effort to encourage more meaningful and inclusive language in the MESh project,
we have replaced the term "man" with "person" - or better yet, just Google TFM.
    
See: <a class="text-blue-300 underline" href="https://sfconservancy.org/news/2020/jun/23/gitbranchname/">https://sfconservancy.org/news/2020/jun/23/gitbranchname/</a> for inspiration.
    
`}function q(){return`<span class="text-red-400">User is too advanced for nano.</span>
 >> Please use 'vim' instead.`}function J(){return`<span class="text-red-400">Neofetch has been deprecated.</span>
Please use 'banner' instead.`}function L(e){return`System environment variables:
${Object.entries(r).map(([t,n])=>`<span class="text-yellow-400">${t}</span>=${n}`).join(`
`)}`}function C(){return a.value}function M(e){return`rm: cannot remove ${e.join(" ")}: <span class="text-red-400">User should take a bath</span>

Tip: To remove French language packs system-wide, use:
<span class="text-yellow-400">sudo rm -fr ./*</span>

`}const N="data:image/webp;base64,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";function Y(e){return e.length==0?"sudo: no command specified":`<img src='${N}' alt='HAL 9000' class="w-24 h-24 m-2" />
    <span class="text-red-400">"I'm sorry, Dave. I'm afraid I can't do that."</span>
    
`}const G=""+new URL("../assets/trooper.FKB3m4By.webp",import.meta.url).href;function z(){return`<img src='${G}' alt='stormtrooper' class="w-96" />
Nothing to test here, move along, move along.

`}function Z(){return`<span class="text-red-400">User will not be able to exit vim.</span>
 >> Please use 'emacs' instead.`}function Q(){return i}const u={banner:{man:"Show the banner message",cmd:S},cat:{man:"[ WIP ] View file contents (partially implemented)",cmd:P},cd:{man:"Change the current working directory",cmd:j},clear:{man:"Clear the terminal output",cmd:k},clshist:{man:`Clear session command history <span class="text-red-400">(HISTSIZE = ${f})</span>`,cmd:E},cowsay:{man:"cow ASCII! 🐮",cmd:H},define:{man:"[ WIP ] Look up a word definition (not implemented yet)",cmd:()=>"[ WIP ] Look up a word definition (not implemented yet)"},echo:{man:"Print text to the terminal",cmd:T},emacs:{man:"Editing MACroS, the extensible, customizable, self-documenting real-time display editor",cmd:D},exit:{man:"Exit the terminal (buggy)",cmd:U},git:{man:"Version control system",cmd:O},help:{man:"Show this message",cmd:F},hist:{man:`Show command history <span class="text-red-400">(HISTSIZE = ${f})</span>`,cmd:V},ls:{man:"List files in the specified directory (or current directory if none specified)",cmd:R},man:{man:"Show manual pages. Alternatively, use `help`",cmd:W},matrix:{man:"[ WIP ] 🚫🥄 (not implemented yet)",cmd:()=>"[ WIP ] 🚫🥄 (not implemented yet)"},nano:{man:"Nano, the Pico editor clone with enhancements",cmd:q},neofetch:{man:"CLI system information tool",cmd:J},pacman:{man:"[ WIP ] Package manager (not implemented yet)",cmd:()=>"[ WIP ] Package manager (not implemented yet)"},printenv:{man:"Print all environment variables",cmd:L},pwd:{man:"Print current working directory",cmd:C},resume:{man:"[ WIP ] Show resume (not implemented yet)",cmd:()=>"[ WIP ] Show resume (not implemented yet)"},rm:{man:"Remove files or directories",cmd:M},sudo:{man:"Run a command with superuser privileges",cmd:Y},test:{man:"O_O",cmd:z},theme:{man:"[ WIP ] Change the terminal theme (not implemented yet)",cmd:()=>"[ WIP ] Change the terminal theme (not implemented yet)"},vim:{man:"Vi Improved, a highly configurable, improved version of the vi text editor",cmd:Z},whoami:{man:"Show the current user",cmd:Q}};export{f as H,A as a,K as b,u as c,I as d,d as e,r as f,v as g,$ as r,_ as t};
