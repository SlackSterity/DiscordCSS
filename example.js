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

/*GM_addStyle ( `
    * {
        background-color: blue!important;
        background: url('http://www.pxleyes.com/images/contests/kiwis/fullsize/sourceimage.jpg') no-repeat center center fixed !important;
        -webkit-background-size: cover !important;
        -moz-background-size: cover !important;
        -o-background-size: cover !important;
        background-size: cover !important;
    }
` );
*/