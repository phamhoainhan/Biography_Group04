import{d as e,N as t,w as s,p as a,b as o}from"./p-41fe6408.js";(()=>{const o=Array.from(e.querySelectorAll("script")).find((e=>new RegExp(`/${t}(\\.esm)?\\.js($|\\?|#)`).test(e.src)||e.getAttribute("data-stencil-namespace")===t)),n={};return n.resourcesUrl=new URL(".",new URL(o.getAttribute("data-resources-url")||o.src,s.location.href)).href,((a,o)=>{const n="__sc_import_"+t.replace(/\s|-/g,"_");try{s[n]=new Function("w","return import(w);//"+Math.random())}catch(t){const i=new Map;s[n]=t=>{const r=new URL(t,a).href;let c=i.get(r);if(!c){const t=e.createElement("script");t.type="module",t.crossOrigin=o.crossOrigin,t.src=URL.createObjectURL(new Blob([`import * as m from '${r}'; window.${n}.m = m;`],{type:"application/javascript"})),c=new Promise((e=>{t.onload=()=>{e(s[n].m),t.remove()}})),i.set(r,c),e.head.appendChild(t)}return c}}})(n.resourcesUrl,o),s.customElements?a(n):__sc_import_chat_widget("./p-b4e039be.js").then((()=>n))})().then((e=>o([["p-4b36b750",[[1,"chat-widget",{heading:[1],subHeading:[1,"sub-heading"],thankYouMsg:[1,"thank-you-msg"],successMsg:[1,"success-msg"],locationId:[1,"location-id"],serverURL:[1,"server-u-r-l"],marketplaceURL:[1,"marketplace-u-r-l"],legalMsg:[1,"legal-msg"],useEmailField:[4,"use-email-field"],usePhoneField:[4,"use-phone-field"],countryCode:[1,"country-code"],autoCountryCode:[4,"auto-country-code"],openIconUrl:[1,"open-icon-url"],closeIconUrl:[1,"close-icon-url"],promptAvatar:[1,"prompt-avatar"],showPrompt:[4,"show-prompt"],promptMsg:[1,"prompt-msg"],enableRevisitMessage:[4,"enable-revisit-message"],revisitPromptMsg:[1,"revisit-prompt-msg"],supportContact:[1,"support-contact"],nextPromptTimer:[2,"next-prompt-timer"],agencyName:[1,"agency-name"],agencyWebsite:[1,"agency-website"],inlineMode:[4,"inline-mode"],inlinePromptMode:[4,"inline-prompt-mode"],inlineSuccessMode:[4,"inline-success-mode"],languageCode:[1,"language-code"],i18nLabels:[1,"i-1-8n-labels"],gaCaptchaSiteKey:[1,"ga-captcha-site-key"],enableCaptcha:[4,"enable-captcha"],enableImageCompression:[4,"enable-image-compression"],active:[32],requestState:[32],submittingResponse:[32],inputValues:[32],showPromptState:[32],innerElements:[32],isMobile:[32],userSessionAttribution:[32],countryCodeLoaded:[32],intelTelLoaded:[32],isCaptchaVerified:[32]}]]]],e)));