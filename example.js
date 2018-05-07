// ==UserScript==
// @name New Script
// @namespace Violentmonkey Scripts
// @include       http://reddit.com/*
// @include       https://reddit.com/*
// @include       http://*.reddit.com/*
// @include       https://*.reddit.com/*
// @resource      myCustomCss https://raw.githubusercontent.com/SlackSterity/DiscordCSS/master/front.css
// @grant         GM_addStyle
// @grant         GM_getResourceText
// ==/UserScript==

GM_addStyle (GM_getResourceText ("myCustomCss") );