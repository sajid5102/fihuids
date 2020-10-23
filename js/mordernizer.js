var A,e=createElement("input");if(e.setAttribute("oninput","return"),hasEvent("oninput",docElement)||"function"==typeof e.oninput)return!0;try{var t=document.createEvent("KeyboardEvent");A=!1;var n=function(e){A=!0,e.preventDefault(),e.stopPropagation()};t.initKeyEvent("keypress",!0,!0,window,!1,!1,!1,!1,0,"e".charCodeAt(0)),docElement.appendChild(e),e.addEventListener("input",n,!1),e.focus(),e.dispatchEvent(t),e.removeEventListener("input",n,!1),docElement.removeChild(e)}catch(r){A=!1}return A}),Modernizr.addTest("formvalidation",function(){var A=createElement("form");if(!("checkValidity"in A&&"addEventListener"in A))return!1;if("reportValidity"in A)return!0;var e,t=!1;return Modernizr.formvalidationapi=!0,A.addEventListener("submit",function(A){(!window.opera||window.operamini)&&A.preventDefault(),A.stopPropagation()},!1),A.innerHTML='<input name="modTest" required="required" /><button></button>',testStyles("#modernizr form{position:absolute;top:-99999em}",function(n){n.appendChild(A),e=A.getElementsByTagName("input")[0],e.addEventListener("invalid",function(A){t=!0,A.preventDefault(),A.stopPropagation()},!1),Modernizr.formvalidationmessage=!!e.validationMessage,A.getElementsByTagName("button")[0].click()}),t});var inputElem=createElement("input"),inputattrs="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),attrs={};Modernizr.input=function(A){for(var e=0,t=A.length;t>e;e++)attrs[A[e]]=!!(A[e]in inputElem);return attrs.list&&(attrs.list=!(!createElement("datalist")||!window.HTMLDataListElement)),attrs}(inputattrs),Modernizr.addTest("datalistelem",Modernizr.input.list);var inputtypes="search tel url email datetime date month week time datetime-local number range color".split(" "),inputs={};Modernizr.inputtypes=function(A){for(var e,t,n,r=A.length,o="1)",i=0;r>i;i++)inputElem.setAttribute("type",e=A[i]),n="text"!==inputElem.type&&"style"in inputElem,n&&(inputElem.value=o,inputElem.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(e)&&inputElem.style.WebkitAppearance!==undefined?(docElement.appendChild(inputElem),t=document.defaultView,n=t.getComputedStyle&&"textfield"!==t.getComputedStyle(inputElem,null).WebkitAppearance&&0!==inputElem.offsetHeight,docElement.removeChild(inputElem)):/^(search|tel)$/.test(e)||(n=/^(url|email)$/.test(e)?inputElem.checkValidity&&inputElem.checkValidity()===!1:inputElem.value!=o)),inputs[A[i]]=!!n;return inputs}(inputtypes),Modernizr.addTest("localizednumber",function(){if(!Modernizr.inputtypes.number)return!1;if(!Modernizr.formvalidation)return!1;var A,e=createElement("div"),t=getBody(),n=function(){return docElement.insertBefore(t,docElement.firstElementChild||docElement.firstChild)}();e.innerHTML='<input type="number" value="1.0" step="0.1"/>';var r=e.childNodes[0];n.appendChild(e),r.focus();try{document.execCommand("SelectAll",!1),document.execCommand("InsertText",!1,"1,1")}catch(o){}return A="number"===r.type&&1.1===r.valueAsNumber&&r.checkValidity(),n.removeChild(e),t.fake&&n.parentNode.removeChild(n),A});var modElem={elem:createElement("modernizr")};Modernizr._q.push(function(){delete modElem.elem}),Modernizr.addTest("csschunit",function(){var A,e=modElem.elem.style;try{e.fontSize="3ch",A=-1!==e.fontSize.indexOf("ch")}catch(t){A=!1}return A}),Modernizr.addTest("cssexunit",function(){var A,e=modElem.elem.style;try{e.fontSize="3ex",A=-1!==e.fontSize.indexOf("ex")}catch(t){A=!1}return A}),Modernizr.addTest("hsla",function(){var A=createElement("a").style;return A.cssText="background-color:hsla(120,40%,100%,.5)",contains(A.backgroundColor,"rgba")||contains(A.backgroundColor,"hsla")}),Modernizr.addTest("bdi",function(){var A=createElement("div"),e=createElement("bdi");e.innerHTML="&#1573;",A.appendChild(e),docElement.appendChild(A);var t="rtl"===computedStyle(e,null,"direction");return docElement.removeChild(A),t}),testStyles("#modernizr { height: 50vh; }",function(A){var e=parseInt(window.innerHeight/2,10),t=parseInt(computedStyle(A,null,"height"),10);Modernizr.addTest("cssvhunit",roundedEquals(t,e))}),testStyles("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(A){var e=A.childNodes[2],t=A.childNodes[1],n=A.childNodes[0],r=parseInt((t.offsetWidth-t.clientWidth)/2,10),o=n.clientWidth/100,i=n.clientHeight/100,a=parseInt(50*Math.max(o,i),10),d=parseInt(computedStyle(e,null,"width"),10);Modernizr.addTest("cssvmaxunit",roundedEquals(a,d)||roundedEquals(a,d-r))},3),testStyles("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(A){var e=A.childNodes[2],t=A.childNodes[1],n=A.childNodes[0],r=parseInt((t.offsetWidth-t.clientWidth)/2,10),o=n.clientWidth/100,i=n.clientHeight/100,a=parseInt(50*Math.min(o,i),10),d=parseInt(computedStyle(e,null,"width"),10);Modernizr.addTest("cssvminunit",roundedEquals(a,d)||roundedEquals(a,d-r))},3),testStyles("#modernizr { width: 50vw; }",function(A){var e=parseInt(window.innerWidth/2,10),t=parseInt(computedStyle(A,null,"width"),10);Modernizr.addTest("cssvwunit",roundedEquals(t,e))});var toStringFn={}.toString;Modernizr.addTest("svgclippaths",function(){return!!document.createElementNS&&/SVGClipPath/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("svgforeignobject",function(){return!!document.createElementNS&&/SVGForeignObject/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")))}),Modernizr.addTest("smil",function(){return!!document.createElementNS&&/SVGAnimate/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg","animate")))});var testXhrType=function(A){if("undefined"==typeof XMLHttpRequest)return!1;var e=new XMLHttpRequest;e.open("get","/",!0);try{e.responseType=A}catch(t){return!1}return"response"in e&&e.responseType==A};Modernizr.addTest("xhrresponsetypearraybuffer",testXhrType("arraybuffer")),Modernizr.addTest("xhrresponsetypeblob",testXhrType("blob")),Modernizr.addTest("xhrresponsetypedocument",testXhrType("document")),Modernizr.addTest("xhrresponsetypejson",testXhrType("json")),Modernizr.addTest("xhrresponsetypetext",testXhrType("text"));var mStyle={style:modElem.elem.style};Modernizr._q.unshift(function(){delete mStyle.style});var testProp=ModernizrProto.testProp=function(A,e,t){return testProps([A],undefined,e,t)};Modernizr.addTest("textshadow",testProp("textShadow","1px 1px")),ModernizrProto.testAllProps=testPropsAll;var prefixed=ModernizrProto.prefixed=function(A,e,t){return 0===A.indexOf("@")?atRule(A):(-1!=A.indexOf("-")&&(A=cssToDOM(A)),e?testPropsAll(A,e,t):testPropsAll(A,"pfx"))},prefixedCSS=ModernizrProto.prefixedCSS=function(A){var e=prefixed(A);return e&&domToCSS(e)};Modernizr.addTest("batteryapi",!!prefixed("battery",navigator),{aliases:["battery-api"]});var crypto=prefixed("crypto",window);Modernizr.addTest("crypto",!!prefixed("subtle",crypto)),Modernizr.addTest("dart",!!prefixed("startDart",navigator)),Modernizr.addTest("forcetouch",function(){return hasEvent(prefixed("mouseforcewillbegin",window,!1),window)?MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN&&MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN:!1}),Modernizr.addTest("fullscreen",!(!prefixed("exitFullscreen",document,!1)&&!prefixed("cancelFullScreen",document,!1))),Modernizr.addTest("gamepads",!!prefixed("getGamepads",navigator)),Modernizr.addAsyncTest(function(){var A;try{A=prefixed("indexedDB",window)}catch(e){}if(A){var t="modernizr-"+Math.random(),n=A.open(t);n.onerror=function(){n.error&&"InvalidStateError"===n.error.name?addTest("indexeddb",!1):(addTest("indexeddb",!0),detectDeleteDatabase(A,t))},n.onsuccess=function(){addTest("indexeddb",!0),detectDeleteDatabase(A,t)}}else addTest("indexeddb",!1)}),Modernizr.addAsyncTest(function(){var A,e,t,n,r="detect-blob-support",o=!1;try{A=prefixed("indexedDB",window)}catch(i){}if(!Modernizr.indexeddb||!Modernizr.indexeddb.deletedatabase)return!1;try{A.deleteDatabase(r).onsuccess=function(){e=A.open(r,1),e.onupgradeneeded=function(){e.result.createObjectStore("store")},e.onsuccess=function(){t=e.result;try{n=t.transaction("store","readwrite").objectStore("store").put(new Blob,"key"),n.onsuccess=function(){o=!0},n.onerror=function(){o=!1}}catch(i){o=!1}finally{addTest("indexeddbblob",o),t.close(),A.deleteDatabase(r)}}}}catch(i){addTest("indexeddbblob",!1)}}),Modernizr.addTest("intl",!!prefixed("Intl",window)),Modernizr.addTest("pagevisibility",!!prefixed("hidden",document,!1)),Modernizr.addTest("performance",!!prefixed("performance",window)),Modernizr.addTest("pointerlock",!!prefixed("exitPointerLock",document)),Modernizr.addTest("quotamanagement",function(){var A=prefixed("temporaryStorage",navigator),e=prefixed("persistentStorage",navigator);return!(!A||!e)}),Modernizr.addTest("requestanimationframe",!!prefixed("requestAnimationFrame",window),{aliases:["raf"]}),Modernizr.addTest("vibrate",!!prefixed("vibrate",navigator)),Modernizr.addTest("webintents",!!prefixed("startActivity",navigator)),Modernizr.addTest("lowbattery",function(){var A=.2,e=prefixed("battery",navigator);return!!(e&&!e.charging&&e.level<=A)});var crypto=prefixed("crypto",window),supportsGetRandomValues;if(crypto&&"getRandomValues"in crypto&&"Uint32Array"in window){var array=new Uint32Array(10),values=crypto.getRandomValues(array);supportsGetRandomValues=values&&is(values[0],"number")}Modernizr.addTest("getrandomvalues",!!supportsGetRandomValues),Modernizr.addTest("backgroundblendmode",prefixed("backgroundBlendMode","text")),Modernizr.addTest("objectfit",!!prefixed("objectFit"),{aliases:["object-fit"]}),Modernizr.addTest("regions",function(){if(isSVG)return!1;var A=prefixed("flowFrom"),e=prefixed("flowInto"),t=!1;if(!A||!e)return t;var n=createElement("iframe"),r=createElement("div"),o=createElement("div"),i=createElement("div"),a="modernizr_flow_for_regions_check";o.innerText="M",r.style.cssText="top: 150px; left: 150px; padding: 0px;",i.style.cssText="width: 50px; height: 50px; padding: 42px;",i.style[A]=a,r.appendChild(o),r.appendChild(i),docElement.appendChild(r);var d,s,l=o.getBoundingClientRect();return o.style[e]=a,d=o.getBoundingClientRect(),s=parseInt(d.left-l.left,10),docElement.removeChild(r),42==s?t=!0:(docElement.appendChild(n),l=n.getBoundingClientRect(),n.style[e]=a,d=n.getBoundingClientRect(),l.height>0&&l.height!==d.height&&0===d.height&&(t=!0)),o=i=r=n=undefined,t}),Modernizr.addTest("wrapflow",function(){var A=prefixed("wrapFlow");if(!A||isSVG)return!1;var e=A.replace(/([A-Z])/g,function(A,e){return"-"+e.toLowerCase()}).replace(/^ms-/,"-ms-"),t=createElement("div"),n=createElement("div"),r=createElement("span");n.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+e+":end;",r.innerText="X",t.appendChild(n),t.appendChild(r),docElement.appendChild(t);var o=r.offsetLeft;return docElement.removeChild(t),n=r=t=undefined,150==o}),Modernizr.addTest("filesystem",!!prefixed("requestFileSystem",window)),Modernizr.addTest("requestautocomplete",!!prefixed("requestAutocomplete",createElement("form"))),Modernizr.addTest("speechrecognition",!!prefixed("SpeechRecognition",window));var url=prefixed("URL",window,!1);url=url&&window[url],Modernizr.addTest("bloburls",url&&"revokeObjectURL"in url&&"createObjectURL"in url),Modernizr.addAsyncTest(function(){function A(){addTest("transferables",!1),e()}function e(){a&&URL.revokeObjectURL(a),d&&d.terminate(),r&&clearTimeout(r)}var t=!!(Modernizr.blobconstructor&&Modernizr.bloburls&&Modernizr.webworkers&&Modernizr.typedarrays);if(!t)return addTest("transferables",!1);try{var n,r,o='var hello = "world"',i=new Blob([o],{type:"text/javascript"}),a=URL.createObjectURL(i),d=new Worker(a);d.onerror=A,r=setTimeout(A,200),n=new ArrayBuffer(1),d.postMessage(n,[n]),addTest("transferables",0===n.byteLength),e()}catch(s){A()}}),Modernizr.addTest("peerconnection",!!prefixed("RTCPeerConnection",window)),Modernizr.addTest("datachannel",function(){if(!Modernizr.peerconnection)return!1;for(var A=0,e=domPrefixes.length;e>A;A++){var t=window[domPrefixes[A]+"RTCPeerConnection"];if(t){var n=new t(null);return"createDataChannel"in n}}return!1}),Modernizr.addTest("matchmedia",!!prefixed("matchMedia",window)),ModernizrProto.testAllProps=testAllProps,Modernizr.addTest("ligatures",testAllProps("fontFeatureSettings",'"liga" 1')),Modernizr.addTest("cssanimations",testAllProps("animationName","a",!0)),Modernizr.addTest("csspseudoanimations",function(){var A=!1;if(!Modernizr.cssanimations||!window.getComputedStyle)return A;var e=["@",Modernizr._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/\@$/,""),'#modernizr:before { content:" "; font-size:5px;',Modernizr._prefixes.join("animation:csspseudoanimations 1ms infinite;"),"}"].join("");return Modernizr.testStyles(e,function(e){A="10px"===window.getComputedStyle(e,":before").getPropertyValue("font-size")}),A}),Modernizr.addTest("appearance",testAllProps("appearance")),Modernizr.addTest("backdropfilter",testAllProps("backdropFilter")),Modernizr.addTest("backgroundcliptext",function(){return testAllProps("backgroundClip","text")}),Modernizr.addTest("bgpositionxy",function(){return testAllProps("backgroundPositionX","3px",!0)&&testAllProps("backgroundPositionY","5px",!0)}),Modernizr.addTest("bgrepeatround",testAllProps("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",testAllProps("backgroundRepeat","space")),Modernizr.addTest("backgroundsize",testAllProps("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",testAllProps("backgroundSize","cover")),Modernizr.addTest("borderimage",testAllProps("borderImage","url() 1",!0)),Modernizr.addTest("borderradius",testAllProps("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",testAllProps("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",testAllProps("boxSizing","border-box",!0)&&(document.documentMode===undefined||document.documentMode>7)),function(){Modernizr.addTest("csscolumns",function(){var A=!1,e=testAllProps("columnCount");try{A=!!e,A&&(A=new Boolean(A))}catch(t){}return A});for(var A,e,t=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],n=0;n<t.length;n++)A=t[n].toLowerCase(),e=testAllProps("column"+t[n]),("breakbefore"===A||"breakafter"===A||"breakinside"==A)&&(e=e||testAllProps(t[n])),Modernizr.addTest("csscolumns."+A,e)}(),Modernizr.addTest("cssgridlegacy",testAllProps("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",testAllProps("grid-template-rows","none",!0)),Modernizr.addTest("displayrunin",testAllProps("display","run-in"),{aliases:["display-runin"]}),Modernizr.addTest("ellipsis",testAllProps("textOverflow","ellipsis")),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return testAllProps("filter","blur(2px)");var A=createElement("a");return A.style.cssText=prefixes.join("filter:blur(2px); "),!!A.style.length&&(document.documentMode===undefined||document.documentMode>9)}),Modernizr.addTest("flexbox",testAllProps("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",testAllProps("boxDirection","reverse",!0)),Modernizr.addTest("flexboxtweener",testAllProps("flexAlign","end",!0)),Modernizr.addTest("flexwrap",testAllProps("flexWrap","wrap",!0)),Modernizr.addAsyncTest(function(){function A(){function t(){try{var A=createElement("div"),e=createElement("span"),t=A.style,n=0,r=0,o=!1,i=document.body.firstElementChild||document.body.firstChild;return A.appendChild(e),e.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",document.body.insertBefore(A,i),t.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",n=e.offsetHeight,r=e.offsetWidth,t.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+prefixes.join("hyphens:auto; "),o=e.offsetHeight!=n||e.offsetWidth!=r,document.body.removeChild(A),A.removeChild(e),o}catch(a){return!1}}function n(A,e){try{var t=createElement("div"),n=createElement("span"),r=t.style,o=0,i=!1,a=!1,d=!1,s=document.body.firstElementChild||document.body.firstChild;return r.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",t.appendChild(n),document.body.insertBefore(t,s),n.innerHTML="mm",o=n.offsetHeight,n.innerHTML="m"+A+"m",a=n.offsetHeight>o,e?(n.innerHTML="m<br />m",o=n.offsetWidth,n.innerHTML="m"+A+"m",d=n.offsetWidth>o):d=!0,a===!0&&d===!0&&(i=!0),document.body.removeChild(t),t.removeChild(n),i}catch(l){return!1}}function r(A){try{var e,t=createElement("input"),n=createElement("div"),r="lebowski",o=!1,i=document.body.firstElementChild||document.body.firstChild;n.innerHTML=r+A+r,document.body.insertBefore(n,i),document.body.insertBefore(t,n),t.setSelectionRange?(t.focus(),t.setSelectionRange(0,0)):t.createTextRange&&(e=t.createTextRange(),e.collapse(!0),e.moveEnd("character",0),e.moveStart("character",0),e.select());try{window.find?o=window.find(r+r):(e=window.self.document.body.createTextRange(),o=e.findText(r+r))}catch(a){o=!1}return document.body.removeChild(n),document.body.removeChild(t),o}catch(a){return!1}}return document.body||document.getElementsByTagName("body")[0]?(addTest("csshyphens",function(){if(!testAllProps("hyphens","auto",!0))return!1;try{return t()}catch(A){return!1}}),addTest("softhyphens",function(){try{return n("&#173;",!0)&&n("&#8203;",!1)}catch(A){return!1}}),void addTest("softhyphensfind",function(){try{return r("&#173;")&&r("&#8203;")}catch(A){return!1}})):void setTimeout(A,e)}var e=300;setTimeout(A,e)}),Modernizr.addTest("cssmask",testAllProps("maskRepeat","repeat-x",!0)),Modernizr.addTest("overflowscrolling",testAllProps("overflowScrolling","touch",!0)),Modernizr.addTest("cssreflections",testAllProps("boxReflect","above",!0)),Modernizr.addTest("cssresize",testAllProps("resize","both",!0)),Modernizr.addTest("scrollsnappoints",testAllProps("scrollSnapType")),Modernizr.addTest("shapes",testAllProps("shapeOutside","content-box",!0)),Modernizr.addTest("textalignlast",testAllProps("textAlignLast")),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&testAllProps("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){return!!testAllProps("perspective","1px",!0)}),Modernizr.addTest("csstransformslevel2",function(){return testAllProps("translate","45px",!0)}),Modernizr.addTest("csstransitions",testAllProps("transition","all",!0)),Modernizr.addTest("csspseudotransitions",function(){var A=!1;if(!Modernizr.csstransitions||!window.getComputedStyle)return A;var e='#modernizr:before { content:" "; font-size:5px;'+Modernizr._prefixes.join("transition:0s 100s;")+"}#modernizr.trigger:before { font-size:10px; }";return Modernizr.testStyles(e,function(e){window.getComputedStyle(e,":before").getPropertyValue("font-size"),e.className+="trigger",A="5px"===window.getComputedStyle(e,":before").getPropertyValue("font-size")}),A}),Modernizr.addTest("userselect",testAllProps("userSelect","none",!0)),Modernizr.addTest("variablefonts",testAllProps("fontVariationSettings")),testRunner(),setClasses(classes),delete ModernizrProto.addTest,delete ModernizrProto.addAsyncTest;for(var i=0;i<Modernizr._q.length;i++)Modernizr._q[i]();window.Modernizr=Modernizr}(window,document);