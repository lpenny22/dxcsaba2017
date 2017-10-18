/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 *//*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}
body{margin:0}
article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}
audio,canvas,progress,video{display:inline-block;vertical-align:baseline}
audio:not([controls]){display:none;height:0}
[hidden],template{display:none}
a{background-color:transparent}
a:active,a:hover{outline:0}
abbr[title]{border-bottom:1px dotted}
b,strong{font-weight:bold}
dfn{font-style:italic}
h1{font-size:2em;margin:.67em 0}
mark{background:#ff0;color:#000}
small{font-size:80%}
sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}
sup{top:-0.5em}
sub{bottom:-0.25em}
img{border:0}
svg:not(:root){overflow:hidden}
figure{margin:1em 40px}
hr{box-sizing:content-box;height:0}
pre{overflow:auto}
code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}
button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}
button{overflow:visible}
button,select{text-transform:none}
button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}
button[disabled],html input[disabled]{cursor:default}
button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}
input{line-height:normal}
input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}
input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}
input[type="search"]{-webkit-appearance:textfield;box-sizing:content-box}
input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}
fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}
legend{border:0;padding:0}
textarea{overflow:auto}
optgroup{font-weight:bold}
table{border-collapse:collapse;border-spacing:0}
td,th{padding:0}
/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */@media print{*,*:before,*:after{background:transparent !important;color:#000 !important;box-shadow:none !important;text-shadow:none !important}
a,a:visited{text-decoration:underline}
a[href]:after{content:" (" attr(href) ")"}
abbr[title]:after{content:" (" attr(title) ")"}
a[href^="#"]:after,a[href^="javascript:"]:after{content:""}
pre,blockquote{border:1px solid #999;page-break-inside:avoid}
thead{display:table-header-group}
tr,img{page-break-inside:avoid}
img{max-width:100% !important}
p,h2,h3{orphans:3;widows:3}
h2,h3{page-break-after:avoid}
.navbar{display:none}
.btn>.caret,.dropup>.btn>.caret,.nc-filters__toggle>.caret,.dropup>.nc-filters__toggle>.caret{border-top-color:#000 !important}
.label{border:1px solid #000}
.table{border-collapse:collapse !important}
.table td,.table th{background-color:#fff !important}
.table-bordered th,.table-bordered td{border:1px solid #ddd !important}
}
@font-face{font-family:'Glyphicons Halflings';src:url('clientlib-site/bootstrap/fonts/glyphicons-halflings-regular.eot');src:url('clientlib-site/bootstrap/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'),url('clientlib-site/bootstrap/fonts/glyphicons-halflings-regular.woff2') format('woff2'),url('clientlib-site/bootstrap/fonts/glyphicons-halflings-regular.woff') format('woff'),url('clientlib-site/bootstrap/fonts/glyphicons-halflings-regular.ttf') format('truetype'),url('clientlib-site/bootstrap/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg')}
.glyphicon{position:relative;top:1px;display:inline-block;font-family:'Glyphicons Halflings';font-style:normal;font-weight:normal;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
.glyphicon-asterisk:before{content:"\002a"}
.glyphicon-plus:before{content:"\002b"}
.glyphicon-euro:before,.glyphicon-eur:before{content:"\20ac"}
.glyphicon-minus:before{content:"\2212"}
.glyphicon-cloud:before{content:"\2601"}
.glyphicon-envelope:before{content:"\2709"}
.glyphicon-pencil:before{content:"\270f"}
.glyphicon-glass:before{content:"\e001"}
.glyphicon-music:before{content:"\e002"}
.glyphicon-search:before{content:"\e003"}
.glyphicon-heart:before{content:"\e005"}
.glyphicon-star:before{content:"\e006"}
.glyphicon-star-empty:before{content:"\e007"}
.glyphicon-user:before{content:"\e008"}
.glyphicon-film:before{content:"\e009"}
.glyphicon-th-large:before{content:"\e010"}
.glyphicon-th:before{content:"\e011"}
.glyphicon-th-list:before{content:"\e012"}
.glyphicon-ok:before{content:"\e013"}
.glyphicon-remove:before{content:"\e014"}
.glyphicon-zoom-in:before{content:"\e015"}
.glyphicon-zoom-out:before{content:"\e016"}
.glyphicon-off:before{content:"\e017"}
.glyphicon-signal:before{content:"\e018"}
.glyphicon-cog:before{content:"\e019"}
.glyphicon-trash:before{content:"\e020"}
.glyphicon-home:before{content:"\e021"}
.glyphicon-file:before{content:"\e022"}
.glyphicon-time:before{content:"\e023"}
.glyphicon-road:before{content:"\e024"}
.glyphicon-download-alt:before{content:"\e025"}
.glyphicon-download:before{content:"\e026"}
.glyphicon-upload:before{content:"\e027"}
.glyphicon-inbox:before{content:"\e028"}
.glyphicon-play-circle:before{content:"\e029"}
.glyphicon-repeat:before{content:"\e030"}
.glyphicon-refresh:before{content:"\e031"}
.glyphicon-list-alt:before{content:"\e032"}
.glyphicon-lock:before{content:"\e033"}
.glyphicon-flag:before{content:"\e034"}
.glyphicon-headphones:before{content:"\e035"}
.glyphicon-volume-off:before{content:"\e036"}
.glyphicon-volume-down:before{content:"\e037"}
.glyphicon-volume-up:before{content:"\e038"}
.glyphicon-qrcode:before{content:"\e039"}
.glyphicon-barcode:before{content:"\e040"}
.glyphicon-tag:before{content:"\e041"}
.glyphicon-tags:before{content:"\e042"}
.glyphicon-book:before{content:"\e043"}
.glyphicon-bookmark:before{content:"\e044"}
.glyphicon-print:before{content:"\e045"}
.glyphicon-camera:before{content:"\e046"}
.glyphicon-font:before{content:"\e047"}
.glyphicon-bold:before{content:"\e048"}
.glyphicon-italic:before{content:"\e049"}
.glyphicon-text-height:before{content:"\e050"}
.glyphicon-text-width:before{content:"\e051"}
.glyphicon-align-left:before{content:"\e052"}
.glyphicon-align-center:before{content:"\e053"}
.glyphicon-align-right:before{content:"\e054"}
.glyphicon-align-justify:before{content:"\e055"}
.glyphicon-list:before{content:"\e056"}
.glyphicon-indent-left:before{content:"\e057"}
.glyphicon-indent-right:before{content:"\e058"}
.glyphicon-facetime-video:before{content:"\e059"}
.glyphicon-picture:before{content:"\e060"}
.glyphicon-map-marker:before{content:"\e062"}
.glyphicon-adjust:before{content:"\e063"}
.glyphicon-tint:before{content:"\e064"}
.glyphicon-edit:before{content:"\e065"}
.glyphicon-share:before{content:"\e066"}
.glyphicon-check:before{content:"\e067"}
.glyphicon-move:before{content:"\e068"}
.glyphicon-step-backward:before{content:"\e069"}
.glyphicon-fast-backward:before{content:"\e070"}
.glyphicon-backward:before{content:"\e071"}
.glyphicon-play:before{content:"\e072"}
.glyphicon-pause:before{content:"\e073"}
.glyphicon-stop:before{content:"\e074"}
.glyphicon-forward:before{content:"\e075"}
.glyphicon-fast-forward:before{content:"\e076"}
.glyphicon-step-forward:before{content:"\e077"}
.glyphicon-eject:before{content:"\e078"}
.glyphicon-chevron-left:before{content:"\e079"}
.glyphicon-chevron-right:before{content:"\e080"}
.glyphicon-plus-sign:before{content:"\e081"}
.glyphicon-minus-sign:before{content:"\e082"}
.glyphicon-remove-sign:before{content:"\e083"}
.glyphicon-ok-sign:before{content:"\e084"}
.glyphicon-question-sign:before{content:"\e085"}
.glyphicon-info-sign:before{content:"\e086"}
.glyphicon-screenshot:before{content:"\e087"}
.glyphicon-remove-circle:before{content:"\e088"}
.glyphicon-ok-circle:before{content:"\e089"}
.glyphicon-ban-circle:before{content:"\e090"}
.glyphicon-arrow-left:before{content:"\e091"}
.glyphicon-arrow-right:before{content:"\e092"}
.glyphicon-arrow-up:before{content:"\e093"}
.glyphicon-arrow-down:before{content:"\e094"}
.glyphicon-share-alt:before{content:"\e095"}
.glyphicon-resize-full:before{content:"\e096"}
.glyphicon-resize-small:before{content:"\e097"}
.glyphicon-exclamation-sign:before{content:"\e101"}
.glyphicon-gift:before{content:"\e102"}
.glyphicon-leaf:before{content:"\e103"}
.glyphicon-fire:before{content:"\e104"}
.glyphicon-eye-open:before{content:"\e105"}
.glyphicon-eye-close:before{content:"\e106"}
.glyphicon-warning-sign:before{content:"\e107"}
.glyphicon-plane:before{content:"\e108"}
.glyphicon-calendar:before{content:"\e109"}
.glyphicon-random:before{content:"\e110"}
.glyphicon-comment:before{content:"\e111"}
.glyphicon-magnet:before{content:"\e112"}
.glyphicon-chevron-up:before{content:"\e113"}
.glyphicon-chevron-down:before{content:"\e114"}
.glyphicon-retweet:before{content:"\e115"}
.glyphicon-shopping-cart:before{content:"\e116"}
.glyphicon-folder-close:before{content:"\e117"}
.glyphicon-folder-open:before{content:"\e118"}
.glyphicon-resize-vertical:before{content:"\e119"}
.glyphicon-resize-horizontal:before{content:"\e120"}
.glyphicon-hdd:before{content:"\e121"}
.glyphicon-bullhorn:before{content:"\e122"}
.glyphicon-bell:before{content:"\e123"}
.glyphicon-certificate:before{content:"\e124"}
.glyphicon-thumbs-up:before{content:"\e125"}
.glyphicon-thumbs-down:before{content:"\e126"}
.glyphicon-hand-right:before{content:"\e127"}
.glyphicon-hand-left:before{content:"\e128"}
.glyphicon-hand-up:before{content:"\e129"}
.glyphicon-hand-down:before{content:"\e130"}
.glyphicon-circle-arrow-right:before{content:"\e131"}
.glyphicon-circle-arrow-left:before{content:"\e132"}
.glyphicon-circle-arrow-up:before{content:"\e133"}
.glyphicon-circle-arrow-down:before{content:"\e134"}
.glyphicon-globe:before{content:"\e135"}
.glyphicon-wrench:before{content:"\e136"}
.glyphicon-tasks:before{content:"\e137"}
.glyphicon-filter:before{content:"\e138"}
.glyphicon-briefcase:before{content:"\e139"}
.glyphicon-fullscreen:before{content:"\e140"}
.glyphicon-dashboard:before{content:"\e141"}
.glyphicon-paperclip:before{content:"\e142"}
.glyphicon-heart-empty:before{content:"\e143"}
.glyphicon-link:before{content:"\e144"}
.glyphicon-phone:before{content:"\e145"}
.glyphicon-pushpin:before{content:"\e146"}
.glyphicon-usd:before{content:"\e148"}
.glyphicon-gbp:before{content:"\e149"}
.glyphicon-sort:before{content:"\e150"}
.glyphicon-sort-by-alphabet:before{content:"\e151"}
.glyphicon-sort-by-alphabet-alt:before{content:"\e152"}
.glyphicon-sort-by-order:before{content:"\e153"}
.glyphicon-sort-by-order-alt:before{content:"\e154"}
.glyphicon-sort-by-attributes:before{content:"\e155"}
.glyphicon-sort-by-attributes-alt:before{content:"\e156"}
.glyphicon-unchecked:before{content:"\e157"}
.glyphicon-expand:before{content:"\e158"}
.glyphicon-collapse-down:before{content:"\e159"}
.glyphicon-collapse-up:before{content:"\e160"}
.glyphicon-log-in:before{content:"\e161"}
.glyphicon-flash:before{content:"\e162"}
.glyphicon-log-out:before{content:"\e163"}
.glyphicon-new-window:before{content:"\e164"}
.glyphicon-record:before{content:"\e165"}
.glyphicon-save:before{content:"\e166"}
.glyphicon-open:before{content:"\e167"}
.glyphicon-saved:before{content:"\e168"}
.glyphicon-import:before{content:"\e169"}
.glyphicon-export:before{content:"\e170"}
.glyphicon-send:before{content:"\e171"}
.glyphicon-floppy-disk:before{content:"\e172"}
.glyphicon-floppy-saved:before{content:"\e173"}
.glyphicon-floppy-remove:before{content:"\e174"}
.glyphicon-floppy-save:before{content:"\e175"}
.glyphicon-floppy-open:before{content:"\e176"}
.glyphicon-credit-card:before{content:"\e177"}
.glyphicon-transfer:before{content:"\e178"}
.glyphicon-cutlery:before{content:"\e179"}
.glyphicon-header:before{content:"\e180"}
.glyphicon-compressed:before{content:"\e181"}
.glyphicon-earphone:before{content:"\e182"}
.glyphicon-phone-alt:before{content:"\e183"}
.glyphicon-tower:before{content:"\e184"}
.glyphicon-stats:before{content:"\e185"}
.glyphicon-sd-video:before{content:"\e186"}
.glyphicon-hd-video:before{content:"\e187"}
.glyphicon-subtitles:before{content:"\e188"}
.glyphicon-sound-stereo:before{content:"\e189"}
.glyphicon-sound-dolby:before{content:"\e190"}
.glyphicon-sound-5-1:before{content:"\e191"}
.glyphicon-sound-6-1:before{content:"\e192"}
.glyphicon-sound-7-1:before{content:"\e193"}
.glyphicon-copyright-mark:before{content:"\e194"}
.glyphicon-registration-mark:before{content:"\e195"}
.glyphicon-cloud-download:before{content:"\e197"}
.glyphicon-cloud-upload:before{content:"\e198"}
.glyphicon-tree-conifer:before{content:"\e199"}
.glyphicon-tree-deciduous:before{content:"\e200"}
.glyphicon-cd:before{content:"\e201"}
.glyphicon-save-file:before{content:"\e202"}
.glyphicon-open-file:before{content:"\e203"}
.glyphicon-level-up:before{content:"\e204"}
.glyphicon-copy:before{content:"\e205"}
.glyphicon-paste:before{content:"\e206"}
.glyphicon-alert:before{content:"\e209"}
.glyphicon-equalizer:before{content:"\e210"}
.glyphicon-king:before{content:"\e211"}
.glyphicon-queen:before{content:"\e212"}
.glyphicon-pawn:before{content:"\e213"}
.glyphicon-bishop:before{content:"\e214"}
.glyphicon-knight:before{content:"\e215"}
.glyphicon-baby-formula:before{content:"\e216"}
.glyphicon-tent:before{content:"\26fa"}
.glyphicon-blackboard:before{content:"\e218"}
.glyphicon-bed:before{content:"\e219"}
.glyphicon-apple:before{content:"\f8ff"}
.glyphicon-erase:before{content:"\e221"}
.glyphicon-hourglass:before{content:"\231b"}
.glyphicon-lamp:before{content:"\e223"}
.glyphicon-duplicate:before{content:"\e224"}
.glyphicon-piggy-bank:before{content:"\e225"}
.glyphicon-scissors:before{content:"\e226"}
.glyphicon-bitcoin:before{content:"\e227"}
.glyphicon-btc:before{content:"\e227"}
.glyphicon-xbt:before{content:"\e227"}
.glyphicon-yen:before{content:"\00a5"}
.glyphicon-jpy:before{content:"\00a5"}
.glyphicon-ruble:before{content:"\20bd"}
.glyphicon-rub:before{content:"\20bd"}
.glyphicon-scale:before{content:"\e230"}
.glyphicon-ice-lolly:before{content:"\e231"}
.glyphicon-ice-lolly-tasted:before{content:"\e232"}
.glyphicon-education:before{content:"\e233"}
.glyphicon-option-horizontal:before{content:"\e234"}
.glyphicon-option-vertical:before{content:"\e235"}
.glyphicon-menu-hamburger:before{content:"\e236"}
.glyphicon-modal-window:before{content:"\e237"}
.glyphicon-oil:before{content:"\e238"}
.glyphicon-grain:before{content:"\e239"}
.glyphicon-sunglasses:before{content:"\e240"}
.glyphicon-text-size:before{content:"\e241"}
.glyphicon-text-color:before{content:"\e242"}
.glyphicon-text-background:before{content:"\e243"}
.glyphicon-object-align-top:before{content:"\e244"}
.glyphicon-object-align-bottom:before{content:"\e245"}
.glyphicon-object-align-horizontal:before{content:"\e246"}
.glyphicon-object-align-left:before{content:"\e247"}
.glyphicon-object-align-vertical:before{content:"\e248"}
.glyphicon-object-align-right:before{content:"\e249"}
.glyphicon-triangle-right:before{content:"\e250"}
.glyphicon-triangle-left:before{content:"\e251"}
.glyphicon-triangle-bottom:before{content:"\e252"}
.glyphicon-triangle-top:before{content:"\e253"}
.glyphicon-console:before{content:"\e254"}
.glyphicon-superscript:before{content:"\e255"}
.glyphicon-subscript:before{content:"\e256"}
.glyphicon-menu-left:before{content:"\e257"}
.glyphicon-menu-right:before{content:"\e258"}
.glyphicon-menu-down:before{content:"\e259"}
.glyphicon-menu-up:before{content:"\e260"}
*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}
*:before,*:after{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}
html{font-size:10px;-webkit-tap-highlight-color:rgba(0,0,0,0)}
body{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857143;color:#000;background-color:#fff}
input,button,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}
a{color:#000;text-decoration:none}
a:hover,a:focus{color:#262626;text-decoration:underline}
a:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}
figure{margin:0}
img{vertical-align:middle}
.img-responsive,.carousel-inner>.item>img,.carousel-inner>.item>a>img{display:block;max-width:100%;height:auto}
.img-rounded{border-radius:0}
.img-thumbnail{padding:4px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:0;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;display:inline-block;max-width:100%;height:auto}
.img-circle{border-radius:50%}
hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}
.sr-only{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0}
.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}
[role="button"]{cursor:pointer}
h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{font-family:inherit;font-weight:500;line-height:1.1;color:inherit}
h1 small,h2 small,h3 small,h4 small,h5 small,h6 small,.h1 small,.h2 small,.h3 small,.h4 small,.h5 small,.h6 small,h1 .small,h2 .small,h3 .small,h4 .small,h5 .small,h6 .small,.h1 .small,.h2 .small,.h3 .small,.h4 .small,.h5 .small,.h6 .small{font-weight:normal;line-height:1;color:#777}
h1,.h1,h2,.h2,h3,.h3{margin-top:20px;margin-bottom:10px}
h1 small,.h1 small,h2 small,.h2 small,h3 small,.h3 small,h1 .small,.h1 .small,h2 .small,.h2 .small,h3 .small,.h3 .small{font-size:65%}
h4,.h4,h5,.h5,h6,.h6{margin-top:10px;margin-bottom:10px}
h4 small,.h4 small,h5 small,.h5 small,h6 small,.h6 small,h4 .small,.h4 .small,h5 .small,.h5 .small,h6 .small,.h6 .small{font-size:75%}
h1,.h1{font-size:36px}
h2,.h2{font-size:30px}
h3,.h3{font-size:24px}
h4,.h4{font-size:18px}
h5,.h5{font-size:14px}
h6,.h6{font-size:12px}
p{margin:0 0 10px}
.lead{margin-bottom:20px;font-size:16px;font-weight:300;line-height:1.4}
@media(min-width:768px){.lead{font-size:21px}
}
small,.small{font-size:85%}
mark,.mark{background-color:#fcf8e3;padding:.2em}
.text-left{text-align:left}
.text-right{text-align:right}
.text-center{text-align:center}
.text-justify{text-align:justify}
.text-nowrap{white-space:nowrap}
.text-lowercase{text-transform:lowercase}
.text-uppercase{text-transform:uppercase}
.text-capitalize{text-transform:capitalize}
.text-muted{color:#777}
.text-primary{color:#337ab7}
a.text-primary:hover,a.text-primary:focus{color:#286090}
.text-success{color:#3c763d}
a.text-success:hover,a.text-success:focus{color:#2b542c}
.text-info{color:#31708f}
a.text-info:hover,a.text-info:focus{color:#245269}
.text-warning{color:#8a6d3b}
a.text-warning:hover,a.text-warning:focus{color:#66512c}
.text-danger{color:#a94442}
a.text-danger:hover,a.text-danger:focus{color:#843534}
.bg-primary{color:#fff;background-color:#337ab7}
a.bg-primary:hover,a.bg-primary:focus{background-color:#286090}
.bg-success{background-color:#dff0d8}
a.bg-success:hover,a.bg-success:focus{background-color:#c1e2b3}
.bg-info{background-color:#d9edf7}
a.bg-info:hover,a.bg-info:focus{background-color:#afd9ee}
.bg-warning{background-color:#fcf8e3}
a.bg-warning:hover,a.bg-warning:focus{background-color:#f7ecb5}
.bg-danger{background-color:#f2dede}
a.bg-danger:hover,a.bg-danger:focus{background-color:#e4b9b9}
.page-header{padding-bottom:9px;margin:40px 0 20px;border-bottom:1px solid #eee}
ul,ol{margin-top:0;margin-bottom:10px}
ul ul,ol ul,ul ol,ol ol{margin-bottom:0}
.list-unstyled{padding-left:0;list-style:none}
.list-inline{padding-left:0;list-style:none;margin-left:-5px}
.list-inline>li{display:inline-block;padding-left:5px;padding-right:5px}
dl{margin-top:0;margin-bottom:20px}
dt,dd{line-height:1.42857143}
dt{font-weight:bold}
dd{margin-left:0}
@media(min-width:768px){.dl-horizontal dt{float:left;width:160px;clear:left;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.dl-horizontal dd{margin-left:180px}
}
abbr[title],abbr[data-original-title]{cursor:help;border-bottom:1px dotted #777}
.initialism{font-size:90%;text-transform:uppercase}
blockquote{padding:10px 20px;margin:0 0 20px;font-size:17.5px;border-left:5px solid #eee}
blockquote p:last-child,blockquote ul:last-child,blockquote ol:last-child{margin-bottom:0}
blockquote footer,blockquote small,blockquote .small{display:block;font-size:80%;line-height:1.42857143;color:#777}
blockquote footer:before,blockquote small:before,blockquote .small:before{content:'\2014 \00A0'}
.blockquote-reverse,blockquote.pull-right{padding-right:15px;padding-left:0;border-right:5px solid #eee;border-left:0;text-align:right}
.blockquote-reverse footer:before,blockquote.pull-right footer:before,.blockquote-reverse small:before,blockquote.pull-right small:before,.blockquote-reverse .small:before,blockquote.pull-right .small:before{content:''}
.blockquote-reverse footer:after,blockquote.pull-right footer:after,.blockquote-reverse small:after,blockquote.pull-right small:after,.blockquote-reverse .small:after,blockquote.pull-right .small:after{content:'\00A0 \2014'}
address{margin-bottom:20px;font-style:normal;line-height:1.42857143}
code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,"Courier New",monospace}
code{padding:2px 4px;font-size:90%;color:#c7254e;background-color:#f9f2f4;border-radius:0}
kbd{padding:2px 4px;font-size:90%;color:#fff;background-color:#333;border-radius:0;box-shadow:inset 0 -1px 0 rgba(0,0,0,0.25)}
kbd kbd{padding:0;font-size:100%;font-weight:bold;box-shadow:none}
pre{display:block;padding:9.5px;margin:0 0 10px;font-size:13px;line-height:1.42857143;word-break:break-all;word-wrap:break-word;color:#333;background-color:#f5f5f5;border:1px solid #ccc;border-radius:0}
pre code{padding:0;font-size:inherit;color:inherit;white-space:pre-wrap;background-color:transparent;border-radius:0}
.pre-scrollable{max-height:340px;overflow-y:scroll}
.container{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}
@media(min-width:768px){.container{width:750px}
}
@media(min-width:992px){.container{width:970px}
}
@media(min-width:1200px){.container{width:1170px}
}
.container-fluid{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}
.row{margin-left:-15px;margin-right:-15px}
.col-xs-1,.col-sm-1,.col-md-1,.col-lg-1,.col-xs-2,.col-sm-2,.col-md-2,.col-lg-2,.col-xs-3,.col-sm-3,.col-md-3,.col-lg-3,.col-xs-4,.col-sm-4,.col-md-4,.col-lg-4,.col-xs-5,.col-sm-5,.col-md-5,.col-lg-5,.col-xs-6,.col-sm-6,.col-md-6,.col-lg-6,.col-xs-7,.col-sm-7,.col-md-7,.col-lg-7,.col-xs-8,.col-sm-8,.col-md-8,.col-lg-8,.col-xs-9,.col-sm-9,.col-md-9,.col-lg-9,.col-xs-10,.col-sm-10,.col-md-10,.col-lg-10,.col-xs-11,.col-sm-11,.col-md-11,.col-lg-11,.col-xs-12,.col-sm-12,.col-md-12,.col-lg-12{position:relative;min-height:1px;padding-left:15px;padding-right:15px}
.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12{float:left}
.col-xs-12{width:100%}
.col-xs-11{width:91.66666667%}
.col-xs-10{width:83.33333333%}
.col-xs-9{width:75%}
.col-xs-8{width:66.66666667%}
.col-xs-7{width:58.33333333%}
.col-xs-6{width:50%}
.col-xs-5{width:41.66666667%}
.col-xs-4{width:33.33333333%}
.col-xs-3{width:25%}
.col-xs-2{width:16.66666667%}
.col-xs-1{width:8.33333333%}
.col-xs-pull-12{right:100%}
.col-xs-pull-11{right:91.66666667%}
.col-xs-pull-10{right:83.33333333%}
.col-xs-pull-9{right:75%}
.col-xs-pull-8{right:66.66666667%}
.col-xs-pull-7{right:58.33333333%}
.col-xs-pull-6{right:50%}
.col-xs-pull-5{right:41.66666667%}
.col-xs-pull-4{right:33.33333333%}
.col-xs-pull-3{right:25%}
.col-xs-pull-2{right:16.66666667%}
.col-xs-pull-1{right:8.33333333%}
.col-xs-pull-0{right:auto}
.col-xs-push-12{left:100%}
.col-xs-push-11{left:91.66666667%}
.col-xs-push-10{left:83.33333333%}
.col-xs-push-9{left:75%}
.col-xs-push-8{left:66.66666667%}
.col-xs-push-7{left:58.33333333%}
.col-xs-push-6{left:50%}
.col-xs-push-5{left:41.66666667%}
.col-xs-push-4{left:33.33333333%}
.col-xs-push-3{left:25%}
.col-xs-push-2{left:16.66666667%}
.col-xs-push-1{left:8.33333333%}
.col-xs-push-0{left:auto}
.col-xs-offset-12{margin-left:100%}
.col-xs-offset-11{margin-left:91.66666667%}
.col-xs-offset-10{margin-left:83.33333333%}
.col-xs-offset-9{margin-left:75%}
.col-xs-offset-8{margin-left:66.66666667%}
.col-xs-offset-7{margin-left:58.33333333%}
.col-xs-offset-6{margin-left:50%}
.col-xs-offset-5{margin-left:41.66666667%}
.col-xs-offset-4{margin-left:33.33333333%}
.col-xs-offset-3{margin-left:25%}
.col-xs-offset-2{margin-left:16.66666667%}
.col-xs-offset-1{margin-left:8.33333333%}
.col-xs-offset-0{margin-left:0}
@media(min-width:768px){.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12{float:left}
.col-sm-12{width:100%}
.col-sm-11{width:91.66666667%}
.col-sm-10{width:83.33333333%}
.col-sm-9{width:75%}
.col-sm-8{width:66.66666667%}
.col-sm-7{width:58.33333333%}
.col-sm-6{width:50%}
.col-sm-5{width:41.66666667%}
.col-sm-4{width:33.33333333%}
.col-sm-3{width:25%}
.col-sm-2{width:16.66666667%}
.col-sm-1{width:8.33333333%}
.col-sm-pull-12{right:100%}
.col-sm-pull-11{right:91.66666667%}
.col-sm-pull-10{right:83.33333333%}
.col-sm-pull-9{right:75%}
.col-sm-pull-8{right:66.66666667%}
.col-sm-pull-7{right:58.33333333%}
.col-sm-pull-6{right:50%}
.col-sm-pull-5{right:41.66666667%}
.col-sm-pull-4{right:33.33333333%}
.col-sm-pull-3{right:25%}
.col-sm-pull-2{right:16.66666667%}
.col-sm-pull-1{right:8.33333333%}
.col-sm-pull-0{right:auto}
.col-sm-push-12{left:100%}
.col-sm-push-11{left:91.66666667%}
.col-sm-push-10{left:83.33333333%}
.col-sm-push-9{left:75%}
.col-sm-push-8{left:66.66666667%}
.col-sm-push-7{left:58.33333333%}
.col-sm-push-6{left:50%}
.col-sm-push-5{left:41.66666667%}
.col-sm-push-4{left:33.33333333%}
.col-sm-push-3{left:25%}
.col-sm-push-2{left:16.66666667%}
.col-sm-push-1{left:8.33333333%}
.col-sm-push-0{left:auto}
.col-sm-offset-12{margin-left:100%}
.col-sm-offset-11{margin-left:91.66666667%}
.col-sm-offset-10{margin-left:83.33333333%}
.col-sm-offset-9{margin-left:75%}
.col-sm-offset-8{margin-left:66.66666667%}
.col-sm-offset-7{margin-left:58.33333333%}
.col-sm-offset-6{margin-left:50%}
.col-sm-offset-5{margin-left:41.66666667%}
.col-sm-offset-4{margin-left:33.33333333%}
.col-sm-offset-3{margin-left:25%}
.col-sm-offset-2{margin-left:16.66666667%}
.col-sm-offset-1{margin-left:8.33333333%}
.col-sm-offset-0{margin-left:0}
}
@media(min-width:992px){.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12{float:left}
.col-md-12{width:100%}
.col-md-11{width:91.66666667%}
.col-md-10{width:83.33333333%}
.col-md-9{width:75%}
.col-md-8{width:66.66666667%}
.col-md-7{width:58.33333333%}
.col-md-6{width:50%}
.col-md-5{width:41.66666667%}
.col-md-4{width:33.33333333%}
.col-md-3{width:25%}
.col-md-2{width:16.66666667%}
.col-md-1{width:8.33333333%}
.col-md-pull-12{right:100%}
.col-md-pull-11{right:91.66666667%}
.col-md-pull-10{right:83.33333333%}
.col-md-pull-9{right:75%}
.col-md-pull-8{right:66.66666667%}
.col-md-pull-7{right:58.33333333%}
.col-md-pull-6{right:50%}
.col-md-pull-5{right:41.66666667%}
.col-md-pull-4{right:33.33333333%}
.col-md-pull-3{right:25%}
.col-md-pull-2{right:16.66666667%}
.col-md-pull-1{right:8.33333333%}
.col-md-pull-0{right:auto}
.col-md-push-12{left:100%}
.col-md-push-11{left:91.66666667%}
.col-md-push-10{left:83.33333333%}
.col-md-push-9{left:75%}
.col-md-push-8{left:66.66666667%}
.col-md-push-7{left:58.33333333%}
.col-md-push-6{left:50%}
.col-md-push-5{left:41.66666667%}
.col-md-push-4{left:33.33333333%}
.col-md-push-3{left:25%}
.col-md-push-2{left:16.66666667%}
.col-md-push-1{left:8.33333333%}
.col-md-push-0{left:auto}
.col-md-offset-12{margin-left:100%}
.col-md-offset-11{margin-left:91.66666667%}
.col-md-offset-10{margin-left:83.33333333%}
.col-md-offset-9{margin-left:75%}
.col-md-offset-8{margin-left:66.66666667%}
.col-md-offset-7{margin-left:58.33333333%}
.col-md-offset-6{margin-left:50%}
.col-md-offset-5{margin-left:41.66666667%}
.col-md-offset-4{margin-left:33.33333333%}
.col-md-offset-3{margin-left:25%}
.col-md-offset-2{margin-left:16.66666667%}
.col-md-offset-1{margin-left:8.33333333%}
.col-md-offset-0{margin-left:0}
}
@media(min-width:1200px){.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12{float:left}
.col-lg-12{width:100%}
.col-lg-11{width:91.66666667%}
.col-lg-10{width:83.33333333%}
.col-lg-9{width:75%}
.col-lg-8{width:66.66666667%}
.col-lg-7{width:58.33333333%}
.col-lg-6{width:50%}
.col-lg-5{width:41.66666667%}
.col-lg-4{width:33.33333333%}
.col-lg-3{width:25%}
.col-lg-2{width:16.66666667%}
.col-lg-1{width:8.33333333%}
.col-lg-pull-12{right:100%}
.col-lg-pull-11{right:91.66666667%}
.col-lg-pull-10{right:83.33333333%}
.col-lg-pull-9{right:75%}
.col-lg-pull-8{right:66.66666667%}
.col-lg-pull-7{right:58.33333333%}
.col-lg-pull-6{right:50%}
.col-lg-pull-5{right:41.66666667%}
.col-lg-pull-4{right:33.33333333%}
.col-lg-pull-3{right:25%}
.col-lg-pull-2{right:16.66666667%}
.col-lg-pull-1{right:8.33333333%}
.col-lg-pull-0{right:auto}
.col-lg-push-12{left:100%}
.col-lg-push-11{left:91.66666667%}
.col-lg-push-10{left:83.33333333%}
.col-lg-push-9{left:75%}
.col-lg-push-8{left:66.66666667%}
.col-lg-push-7{left:58.33333333%}
.col-lg-push-6{left:50%}
.col-lg-push-5{left:41.66666667%}
.col-lg-push-4{left:33.33333333%}
.col-lg-push-3{left:25%}
.col-lg-push-2{left:16.66666667%}
.col-lg-push-1{left:8.33333333%}
.col-lg-push-0{left:auto}
.col-lg-offset-12{margin-left:100%}
.col-lg-offset-11{margin-left:91.66666667%}
.col-lg-offset-10{margin-left:83.33333333%}
.col-lg-offset-9{margin-left:75%}
.col-lg-offset-8{margin-left:66.66666667%}
.col-lg-offset-7{margin-left:58.33333333%}
.col-lg-offset-6{margin-left:50%}
.col-lg-offset-5{margin-left:41.66666667%}
.col-lg-offset-4{margin-left:33.33333333%}
.col-lg-offset-3{margin-left:25%}
.col-lg-offset-2{margin-left:16.66666667%}
.col-lg-offset-1{margin-left:8.33333333%}
.col-lg-offset-0{margin-left:0}
}
table{background-color:transparent}
caption{padding-top:8px;padding-bottom:8px;color:#777;text-align:left}
th{text-align:left}
.table{width:100%;max-width:100%;margin-bottom:20px}
.table>thead>tr>th,.table>tbody>tr>th,.table>tfoot>tr>th,.table>thead>tr>td,.table>tbody>tr>td,.table>tfoot>tr>td{padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd}
.table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #ddd}
.table>caption+thead>tr:first-child>th,.table>colgroup+thead>tr:first-child>th,.table>thead:first-child>tr:first-child>th,.table>caption+thead>tr:first-child>td,.table>colgroup+thead>tr:first-child>td,.table>thead:first-child>tr:first-child>td{border-top:0}
.table>tbody+tbody{border-top:2px solid #ddd}
.table .table{background-color:#fff}
.table-condensed>thead>tr>th,.table-condensed>tbody>tr>th,.table-condensed>tfoot>tr>th,.table-condensed>thead>tr>td,.table-condensed>tbody>tr>td,.table-condensed>tfoot>tr>td{padding:5px}
.table-bordered{border:1px solid #ddd}
.table-bordered>thead>tr>th,.table-bordered>tbody>tr>th,.table-bordered>tfoot>tr>th,.table-bordered>thead>tr>td,.table-bordered>tbody>tr>td,.table-bordered>tfoot>tr>td{border:1px solid #ddd}
.table-bordered>thead>tr>th,.table-bordered>thead>tr>td{border-bottom-width:2px}
.table-striped>tbody>tr:nth-of-type(odd){background-color:#f9f9f9}
.table-hover>tbody>tr:hover{background-color:#f5f5f5}
table col[class*="col-"]{position:static;float:none;display:table-column}
table td[class*="col-"],table th[class*="col-"]{position:static;float:none;display:table-cell}
.table>thead>tr>td.active,.table>tbody>tr>td.active,.table>tfoot>tr>td.active,.table>thead>tr>th.active,.table>tbody>tr>th.active,.table>tfoot>tr>th.active,.table>thead>tr.active>td,.table>tbody>tr.active>td,.table>tfoot>tr.active>td,.table>thead>tr.active>th,.table>tbody>tr.active>th,.table>tfoot>tr.active>th{background-color:#f5f5f5}
.table-hover>tbody>tr>td.active:hover,.table-hover>tbody>tr>th.active:hover,.table-hover>tbody>tr.active:hover>td,.table-hover>tbody>tr:hover>.active,.table-hover>tbody>tr.active:hover>th{background-color:#e8e8e8}
.table>thead>tr>td.success,.table>tbody>tr>td.success,.table>tfoot>tr>td.success,.table>thead>tr>th.success,.table>tbody>tr>th.success,.table>tfoot>tr>th.success,.table>thead>tr.success>td,.table>tbody>tr.success>td,.table>tfoot>tr.success>td,.table>thead>tr.success>th,.table>tbody>tr.success>th,.table>tfoot>tr.success>th{background-color:#dff0d8}
.table-hover>tbody>tr>td.success:hover,.table-hover>tbody>tr>th.success:hover,.table-hover>tbody>tr.success:hover>td,.table-hover>tbody>tr:hover>.success,.table-hover>tbody>tr.success:hover>th{background-color:#d0e9c6}
.table>thead>tr>td.info,.table>tbody>tr>td.info,.table>tfoot>tr>td.info,.table>thead>tr>th.info,.table>tbody>tr>th.info,.table>tfoot>tr>th.info,.table>thead>tr.info>td,.table>tbody>tr.info>td,.table>tfoot>tr.info>td,.table>thead>tr.info>th,.table>tbody>tr.info>th,.table>tfoot>tr.info>th{background-color:#d9edf7}
.table-hover>tbody>tr>td.info:hover,.table-hover>tbody>tr>th.info:hover,.table-hover>tbody>tr.info:hover>td,.table-hover>tbody>tr:hover>.info,.table-hover>tbody>tr.info:hover>th{background-color:#c4e3f3}
.table>thead>tr>td.warning,.table>tbody>tr>td.warning,.table>tfoot>tr>td.warning,.table>thead>tr>th.warning,.table>tbody>tr>th.warning,.table>tfoot>tr>th.warning,.table>thead>tr.warning>td,.table>tbody>tr.warning>td,.table>tfoot>tr.warning>td,.table>thead>tr.warning>th,.table>tbody>tr.warning>th,.table>tfoot>tr.warning>th{background-color:#fcf8e3}
.table-hover>tbody>tr>td.warning:hover,.table-hover>tbody>tr>th.warning:hover,.table-hover>tbody>tr.warning:hover>td,.table-hover>tbody>tr:hover>.warning,.table-hover>tbody>tr.warning:hover>th{background-color:#faf2cc}
.table>thead>tr>td.danger,.table>tbody>tr>td.danger,.table>tfoot>tr>td.danger,.table>thead>tr>th.danger,.table>tbody>tr>th.danger,.table>tfoot>tr>th.danger,.table>thead>tr.danger>td,.table>tbody>tr.danger>td,.table>tfoot>tr.danger>td,.table>thead>tr.danger>th,.table>tbody>tr.danger>th,.table>tfoot>tr.danger>th{background-color:#f2dede}
.table-hover>tbody>tr>td.danger:hover,.table-hover>tbody>tr>th.danger:hover,.table-hover>tbody>tr.danger:hover>td,.table-hover>tbody>tr:hover>.danger,.table-hover>tbody>tr.danger:hover>th{background-color:#ebcccc}
.table-responsive{overflow-x:auto;min-height:.01%}
@media screen and (max-width:767px){.table-responsive{width:100%;margin-bottom:15px;overflow-y:hidden;-ms-overflow-style:-ms-autohiding-scrollbar;border:1px solid #ddd}
.table-responsive>.table{margin-bottom:0}
.table-responsive>.table>thead>tr>th,.table-responsive>.table>tbody>tr>th,.table-responsive>.table>tfoot>tr>th,.table-responsive>.table>thead>tr>td,.table-responsive>.table>tbody>tr>td,.table-responsive>.table>tfoot>tr>td{white-space:nowrap}
.table-responsive>.table-bordered{border:0}
.table-responsive>.table-bordered>thead>tr>th:first-child,.table-responsive>.table-bordered>tbody>tr>th:first-child,.table-responsive>.table-bordered>tfoot>tr>th:first-child,.table-responsive>.table-bordered>thead>tr>td:first-child,.table-responsive>.table-bordered>tbody>tr>td:first-child,.table-responsive>.table-bordered>tfoot>tr>td:first-child{border-left:0}
.table-responsive>.table-bordered>thead>tr>th:last-child,.table-responsive>.table-bordered>tbody>tr>th:last-child,.table-responsive>.table-bordered>tfoot>tr>th:last-child,.table-responsive>.table-bordered>thead>tr>td:last-child,.table-responsive>.table-bordered>tbody>tr>td:last-child,.table-responsive>.table-bordered>tfoot>tr>td:last-child{border-right:0}
.table-responsive>.table-bordered>tbody>tr:last-child>th,.table-responsive>.table-bordered>tfoot>tr:last-child>th,.table-responsive>.table-bordered>tbody>tr:last-child>td,.table-responsive>.table-bordered>tfoot>tr:last-child>td{border-bottom:0}
}
fieldset{padding:0;margin:0;border:0;min-width:0}
legend{display:block;width:100%;padding:0;margin-bottom:20px;font-size:21px;line-height:inherit;color:#333;border:0;border-bottom:1px solid #e5e5e5}
label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:bold}
input[type="search"]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}
input[type="radio"],input[type="checkbox"]{margin-top:1px \9;line-height:normal}
input[type="file"]{display:block}
input[type="range"]{display:block;width:100%}
select[multiple],select[size]{height:auto}
input[type="file"]:focus,input[type="radio"]:focus,input[type="checkbox"]:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}
output{display:block;padding-top:7px;font-size:14px;line-height:1.42857143;color:#555}
.form-control{display:block;width:100%;height:34px;padding:6px 12px;font-size:14px;line-height:1.42857143;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);-webkit-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;-o-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s}
.form-control:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,0.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,0.6)}
.form-control::-moz-placeholder{color:#999;opacity:1}
.form-control:-ms-input-placeholder{color:#999}
.form-control::-webkit-input-placeholder{color:#999}
.form-control::-ms-expand{border:0;background-color:transparent}
.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control{background-color:#eee;opacity:1}
.form-control[disabled],fieldset[disabled] .form-control{cursor:not-allowed}
textarea.form-control{height:auto}
input[type="search"]{-webkit-appearance:none}
@media screen and (-webkit-min-device-pixel-ratio:0){input[type="date"].form-control,input[type="time"].form-control,input[type="datetime-local"].form-control,input[type="month"].form-control{line-height:34px}
input[type="date"].input-sm,input[type="time"].input-sm,input[type="datetime-local"].input-sm,input[type="month"].input-sm,.input-group-sm input[type="date"],.input-group-sm input[type="time"],.input-group-sm input[type="datetime-local"],.input-group-sm input[type="month"]{line-height:30px}
input[type="date"].input-lg,input[type="time"].input-lg,input[type="datetime-local"].input-lg,input[type="month"].input-lg,.input-group-lg input[type="date"],.input-group-lg input[type="time"],.input-group-lg input[type="datetime-local"],.input-group-lg input[type="month"]{line-height:46px}
}
.form-group{margin-bottom:15px}
.radio,.checkbox{position:relative;display:block;margin-top:10px;margin-bottom:10px}
.radio label,.checkbox label{min-height:20px;padding-left:20px;margin-bottom:0;font-weight:normal;cursor:pointer}
.radio input[type="radio"],.radio-inline input[type="radio"],.checkbox input[type="checkbox"],.checkbox-inline input[type="checkbox"]{position:absolute;margin-left:-20px;margin-top:4px \9}
.radio+.radio,.checkbox+.checkbox{margin-top:-5px}
.radio-inline,.checkbox-inline{position:relative;display:inline-block;padding-left:20px;margin-bottom:0;vertical-align:middle;font-weight:normal;cursor:pointer}
.radio-inline+.radio-inline,.checkbox-inline+.checkbox-inline{margin-top:0;margin-left:10px}
input[type="radio"][disabled],input[type="checkbox"][disabled],input[type="radio"].disabled,input[type="checkbox"].disabled,fieldset[disabled] input[type="radio"],fieldset[disabled] input[type="checkbox"]{cursor:not-allowed}
.radio-inline.disabled,.checkbox-inline.disabled,fieldset[disabled] .radio-inline,fieldset[disabled] .checkbox-inline{cursor:not-allowed}
.radio.disabled label,.checkbox.disabled label,fieldset[disabled] .radio label,fieldset[disabled] .checkbox label{cursor:not-allowed}
.form-control-static{padding-top:7px;padding-bottom:7px;margin-bottom:0;min-height:34px}
.form-control-static.input-lg,.form-control-static.input-sm{padding-left:0;padding-right:0}
.input-sm{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:0}
select.input-sm{height:30px;line-height:30px}
textarea.input-sm,select[multiple].input-sm{height:auto}
.form-group-sm .form-control{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:0}
.form-group-sm select.form-control{height:30px;line-height:30px}
.form-group-sm textarea.form-control,.form-group-sm select[multiple].form-control{height:auto}
.form-group-sm .form-control-static{height:30px;min-height:32px;padding:6px 10px;font-size:12px;line-height:1.5}
.input-lg{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:0}
select.input-lg{height:46px;line-height:46px}
textarea.input-lg,select[multiple].input-lg{height:auto}
.form-group-lg .form-control{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:0}
.form-group-lg select.form-control{height:46px;line-height:46px}
.form-group-lg textarea.form-control,.form-group-lg select[multiple].form-control{height:auto}
.form-group-lg .form-control-static{height:46px;min-height:38px;padding:11px 16px;font-size:18px;line-height:1.3333333}
.has-feedback{position:relative}
.has-feedback .form-control{padding-right:42.5px}
.form-control-feedback{position:absolute;top:0;right:0;z-index:2;display:block;width:34px;height:34px;line-height:34px;text-align:center;pointer-events:none}
.input-lg+.form-control-feedback,.input-group-lg+.form-control-feedback,.form-group-lg .form-control+.form-control-feedback{width:46px;height:46px;line-height:46px}
.input-sm+.form-control-feedback,.input-group-sm+.form-control-feedback,.form-group-sm .form-control+.form-control-feedback{width:30px;height:30px;line-height:30px}
.has-success .help-block,.has-success .control-label,.has-success .radio,.has-success .checkbox,.has-success .radio-inline,.has-success .checkbox-inline,.has-success.radio label,.has-success.checkbox label,.has-success.radio-inline label,.has-success.checkbox-inline label{color:#3c763d}
.has-success .form-control{border-color:#3c763d;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}
.has-success .form-control:focus{border-color:#2b542c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #67b168;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #67b168}
.has-success .input-group-addon{color:#3c763d;border-color:#3c763d;background-color:#dff0d8}
.has-success .form-control-feedback{color:#3c763d}
.has-warning .help-block,.has-warning .control-label,.has-warning .radio,.has-warning .checkbox,.has-warning .radio-inline,.has-warning .checkbox-inline,.has-warning.radio label,.has-warning.checkbox label,.has-warning.radio-inline label,.has-warning.checkbox-inline label{color:#8a6d3b}
.has-warning .form-control{border-color:#8a6d3b;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}
.has-warning .form-control:focus{border-color:#66512c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #c0a16b;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #c0a16b}
.has-warning .input-group-addon{color:#8a6d3b;border-color:#8a6d3b;background-color:#fcf8e3}
.has-warning .form-control-feedback{color:#8a6d3b}
.has-error .help-block,.has-error .control-label,.has-error .radio,.has-error .checkbox,.has-error .radio-inline,.has-error .checkbox-inline,.has-error.radio label,.has-error.checkbox label,.has-error.radio-inline label,.has-error.checkbox-inline label{color:#a94442}
.has-error .form-control{border-color:#a94442;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}
.has-error .form-control:focus{border-color:#843534;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #ce8483;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #ce8483}
.has-error .input-group-addon{color:#a94442;border-color:#a94442;background-color:#f2dede}
.has-error .form-control-feedback{color:#a94442}
.has-feedback label ~ .form-control-feedback{top:25px}
.has-feedback label.sr-only ~ .form-control-feedback{top:0}
.help-block{display:block;margin-top:5px;margin-bottom:10px;color:#404040}
@media(min-width:768px){.form-inline .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}
.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}
.form-inline .form-control-static{display:inline-block}
.form-inline .input-group{display:inline-table;vertical-align:middle}
.form-inline .input-group .input-group-addon,.form-inline .input-group .input-group-btn,.form-inline .input-group .form-control{width:auto}
.form-inline .input-group>.form-control{width:100%}
.form-inline .control-label{margin-bottom:0;vertical-align:middle}
.form-inline .radio,.form-inline .checkbox{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}
.form-inline .radio label,.form-inline .checkbox label{padding-left:0}
.form-inline .radio input[type="radio"],.form-inline .checkbox input[type="checkbox"]{position:relative;margin-left:0}
.form-inline .has-feedback .form-control-feedback{top:0}
}
.form-horizontal .radio,.form-horizontal .checkbox,.form-horizontal .radio-inline,.form-horizontal .checkbox-inline{margin-top:0;margin-bottom:0;padding-top:7px}
.form-horizontal .radio,.form-horizontal .checkbox{min-height:27px}
.form-horizontal .form-group{margin-left:-15px;margin-right:-15px}
@media(min-width:768px){.form-horizontal .control-label{text-align:right;margin-bottom:0;padding-top:7px}
}
.form-horizontal .has-feedback .form-control-feedback{right:15px}
@media(min-width:768px){.form-horizontal .form-group-lg .control-label{padding-top:11px;font-size:18px}
}
@media(min-width:768px){.form-horizontal .form-group-sm .control-label{padding-top:6px;font-size:12px}
}
.btn,.nc-filters__toggle{display:inline-block;margin-bottom:0;font-weight:normal;text-align:center;vertical-align:middle;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;white-space:nowrap;padding:6px 12px;font-size:14px;line-height:1.42857143;border-radius:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}
.btn:focus,.btn:active:focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn.active.focus,.nc-filters__toggle:focus,.nc-filters__toggle:active:focus,.nc-filters__toggle.active:focus,.nc-filters__toggle.focus,.nc-filters__toggle:active.focus,.nc-filters__toggle.active.focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}
.btn:hover,.btn:focus,.btn.focus,.nc-filters__toggle:hover,.nc-filters__toggle:focus,.nc-filters__toggle.focus{color:#333;text-decoration:none}
.btn:active,.btn.active,.nc-filters__toggle:active,.nc-filters__toggle.active{outline:0;background-image:none;-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,0.125);box-shadow:inset 0 3px 5px rgba(0,0,0,0.125)}
.btn.disabled,.btn[disabled],fieldset[disabled] .btn,.nc-filters__toggle.disabled,.nc-filters__toggle[disabled],fieldset[disabled] .nc-filters__toggle{cursor:not-allowed;opacity:.65;filter:alpha(opacity=65);-webkit-box-shadow:none;box-shadow:none}
a.btn.disabled,fieldset[disabled] a.btn,a.nc-filters__toggle.disabled,fieldset[disabled] a.nc-filters__toggle{pointer-events:none}
.btn-default{color:#333;background-color:#fff;border-color:#ccc}
.btn-default:focus,.btn-default.focus{color:#333;background-color:#e6e6e6;border-color:#8c8c8c}
.btn-default:hover{color:#333;background-color:#e6e6e6;border-color:#adadad}
.btn-default:active,.btn-default.active,.open>.dropdown-toggle.btn-default{color:#333;background-color:#e6e6e6;border-color:#adadad}
.btn-default:active:hover,.btn-default.active:hover,.open>.dropdown-toggle.btn-default:hover,.btn-default:active:focus,.btn-default.active:focus,.open>.dropdown-toggle.btn-default:focus,.btn-default:active.focus,.btn-default.active.focus,.open>.dropdown-toggle.btn-default.focus{color:#333;background-color:#d4d4d4;border-color:#8c8c8c}
.btn-default:active,.btn-default.active,.open>.dropdown-toggle.btn-default{background-image:none}
.btn-default.disabled:hover,.btn-default[disabled]:hover,fieldset[disabled] .btn-default:hover,.btn-default.disabled:focus,.btn-default[disabled]:focus,fieldset[disabled] .btn-default:focus,.btn-default.disabled.focus,.btn-default[disabled].focus,fieldset[disabled] .btn-default.focus{background-color:#fff;border-color:#ccc}
.btn-default .badge{color:#fff;background-color:#333}
.btn-primary,.nc-filters__toggle{color:#fff;background-color:#000;border-color:#000}
.btn-primary:focus,.btn-primary.focus,.nc-filters__toggle:focus,.nc-filters__toggle.focus{color:#fff;background-color:#000;border-color:#000}
.btn-primary:hover,.nc-filters__toggle:hover{color:#fff;background-color:#000;border-color:#000}
.btn-primary:active,.btn-primary.active,.open>.dropdown-toggle.btn-primary,.nc-filters__toggle:active,.nc-filters__toggle.active,.open>.dropdown-toggle.nc-filters__toggle{color:#fff;background-color:#000;border-color:#000}
.btn-primary:active:hover,.btn-primary.active:hover,.open>.dropdown-toggle.btn-primary:hover,.btn-primary:active:focus,.btn-primary.active:focus,.open>.dropdown-toggle.btn-primary:focus,.btn-primary:active.focus,.btn-primary.active.focus,.open>.dropdown-toggle.btn-primary.focus,.nc-filters__toggle:active:hover,.nc-filters__toggle.active:hover,.open>.dropdown-toggle.nc-filters__toggle:hover,.nc-filters__toggle:active:focus,.nc-filters__toggle.active:focus,.open>.dropdown-toggle.nc-filters__toggle:focus,.nc-filters__toggle:active.focus,.nc-filters__toggle.active.focus,.open>.dropdown-toggle.nc-filters__toggle.focus{color:#fff;background-color:#000;border-color:#000}
.btn-primary:active,.btn-primary.active,.open>.dropdown-toggle.btn-primary,.nc-filters__toggle:active,.nc-filters__toggle.active,.open>.dropdown-toggle.nc-filters__toggle{background-image:none}
.btn-primary.disabled:hover,.btn-primary[disabled]:hover,fieldset[disabled] .btn-primary:hover,.btn-primary.disabled:focus,.btn-primary[disabled]:focus,fieldset[disabled] .btn-primary:focus,.btn-primary.disabled.focus,.btn-primary[disabled].focus,fieldset[disabled] .btn-primary.focus,.nc-filters__toggle.disabled:hover,.nc-filters__toggle[disabled]:hover,fieldset[disabled] .nc-filters__toggle:hover,.nc-filters__toggle.disabled:focus,.nc-filters__toggle[disabled]:focus,fieldset[disabled] .nc-filters__toggle:focus,.nc-filters__toggle.disabled.focus,.nc-filters__toggle[disabled].focus,fieldset[disabled] .nc-filters__toggle.focus{background-color:#000;border-color:#000}
.btn-primary .badge,.nc-filters__toggle .badge{color:#000;background-color:#fff}
.btn-success{color:#fff;background-color:#5cb85c;border-color:#4cae4c}
.btn-success:focus,.btn-success.focus{color:#fff;background-color:#449d44;border-color:#255625}
.btn-success:hover{color:#fff;background-color:#449d44;border-color:#398439}
.btn-success:active,.btn-success.active,.open>.dropdown-toggle.btn-success{color:#fff;background-color:#449d44;border-color:#398439}
.btn-success:active:hover,.btn-success.active:hover,.open>.dropdown-toggle.btn-success:hover,.btn-success:active:focus,.btn-success.active:focus,.open>.dropdown-toggle.btn-success:focus,.btn-success:active.focus,.btn-success.active.focus,.open>.dropdown-toggle.btn-success.focus{color:#fff;background-color:#398439;border-color:#255625}
.btn-success:active,.btn-success.active,.open>.dropdown-toggle.btn-success{background-image:none}
.btn-success.disabled:hover,.btn-success[disabled]:hover,fieldset[disabled] .btn-success:hover,.btn-success.disabled:focus,.btn-success[disabled]:focus,fieldset[disabled] .btn-success:focus,.btn-success.disabled.focus,.btn-success[disabled].focus,fieldset[disabled] .btn-success.focus{background-color:#5cb85c;border-color:#4cae4c}
.btn-success .badge{color:#5cb85c;background-color:#fff}
.btn-info{color:#fff;background-color:#5bc0de;border-color:#46b8da}
.btn-info:focus,.btn-info.focus{color:#fff;background-color:#31b0d5;border-color:#1b6d85}
.btn-info:hover{color:#fff;background-color:#31b0d5;border-color:#269abc}
.btn-info:active,.btn-info.active,.open>.dropdown-toggle.btn-info{color:#fff;background-color:#31b0d5;border-color:#269abc}
.btn-info:active:hover,.btn-info.active:hover,.open>.dropdown-toggle.btn-info:hover,.btn-info:active:focus,.btn-info.active:focus,.open>.dropdown-toggle.btn-info:focus,.btn-info:active.focus,.btn-info.active.focus,.open>.dropdown-toggle.btn-info.focus{color:#fff;background-color:#269abc;border-color:#1b6d85}
.btn-info:active,.btn-info.active,.open>.dropdown-toggle.btn-info{background-image:none}
.btn-info.disabled:hover,.btn-info[disabled]:hover,fieldset[disabled] .btn-info:hover,.btn-info.disabled:focus,.btn-info[disabled]:focus,fieldset[disabled] .btn-info:focus,.btn-info.disabled.focus,.btn-info[disabled].focus,fieldset[disabled] .btn-info.focus{background-color:#5bc0de;border-color:#46b8da}
.btn-info .badge{color:#5bc0de;background-color:#fff}
.btn-warning{color:#fff;background-color:#f0ad4e;border-color:#eea236}
.btn-warning:focus,.btn-warning.focus{color:#fff;background-color:#ec971f;border-color:#985f0d}
.btn-warning:hover{color:#fff;background-color:#ec971f;border-color:#d58512}
.btn-warning:active,.btn-warning.active,.open>.dropdown-toggle.btn-warning{color:#fff;background-color:#ec971f;border-color:#d58512}
.btn-warning:active:hover,.btn-warning.active:hover,.open>.dropdown-toggle.btn-warning:hover,.btn-warning:active:focus,.btn-warning.active:focus,.open>.dropdown-toggle.btn-warning:focus,.btn-warning:active.focus,.btn-warning.active.focus,.open>.dropdown-toggle.btn-warning.focus{color:#fff;background-color:#d58512;border-color:#985f0d}
.btn-warning:active,.btn-warning.active,.open>.dropdown-toggle.btn-warning{background-image:none}
.btn-warning.disabled:hover,.btn-warning[disabled]:hover,fieldset[disabled] .btn-warning:hover,.btn-warning.disabled:focus,.btn-warning[disabled]:focus,fieldset[disabled] .btn-warning:focus,.btn-warning.disabled.focus,.btn-warning[disabled].focus,fieldset[disabled] .btn-warning.focus{background-color:#f0ad4e;border-color:#eea236}
.btn-warning .badge{color:#f0ad4e;background-color:#fff}
.btn-danger{color:#fff;background-color:#d9534f;border-color:#d43f3a}
.btn-danger:focus,.btn-danger.focus{color:#fff;background-color:#c9302c;border-color:#761c19}
.btn-danger:hover{color:#fff;background-color:#c9302c;border-color:#ac2925}
.btn-danger:active,.btn-danger.active,.open>.dropdown-toggle.btn-danger{color:#fff;background-color:#c9302c;border-color:#ac2925}
.btn-danger:active:hover,.btn-danger.active:hover,.open>.dropdown-toggle.btn-danger:hover,.btn-danger:active:focus,.btn-danger.active:focus,.open>.dropdown-toggle.btn-danger:focus,.btn-danger:active.focus,.btn-danger.active.focus,.open>.dropdown-toggle.btn-danger.focus{color:#fff;background-color:#ac2925;border-color:#761c19}
.btn-danger:active,.btn-danger.active,.open>.dropdown-toggle.btn-danger{background-image:none}
.btn-danger.disabled:hover,.btn-danger[disabled]:hover,fieldset[disabled] .btn-danger:hover,.btn-danger.disabled:focus,.btn-danger[disabled]:focus,fieldset[disabled] .btn-danger:focus,.btn-danger.disabled.focus,.btn-danger[disabled].focus,fieldset[disabled] .btn-danger.focus{background-color:#d9534f;border-color:#d43f3a}
.btn-danger .badge{color:#d9534f;background-color:#fff}
.btn-link{color:#000;font-weight:normal;border-radius:0}
.btn-link,.btn-link:active,.btn-link.active,.btn-link[disabled],fieldset[disabled] .btn-link{background-color:transparent;-webkit-box-shadow:none;box-shadow:none}
.btn-link,.btn-link:hover,.btn-link:focus,.btn-link:active{border-color:transparent}
.btn-link:hover,.btn-link:focus{color:#262626;text-decoration:underline;background-color:transparent}
.btn-link[disabled]:hover,fieldset[disabled] .btn-link:hover,.btn-link[disabled]:focus,fieldset[disabled] .btn-link:focus{color:#777;text-decoration:none}
.btn-lg,.btn-group-lg>.btn,.btn-group-lg>.nc-filters__toggle{padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:0}
.btn-sm,.btn-group-sm>.btn,.btn-group-sm>.nc-filters__toggle{padding:5px 10px;font-size:12px;line-height:1.5;border-radius:0}
.btn-xs,.btn-group-xs>.btn,.btn-group-xs>.nc-filters__toggle{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:0}
.btn-block{display:block;width:100%}
.btn-block+.btn-block{margin-top:5px}
input[type="submit"].btn-block,input[type="reset"].btn-block,input[type="button"].btn-block{width:100%}
.fade{opacity:0;-webkit-transition:opacity .15s linear;-o-transition:opacity .15s linear;transition:opacity .15s linear}
.fade.in{opacity:1}
.collapse{display:none}
.collapse.in{display:block}
tr.collapse.in{display:table-row}
tbody.collapse.in{display:table-row-group}
.collapsing{position:relative;height:0;overflow:hidden;-webkit-transition-property:height,visibility;transition-property:height,visibility;-webkit-transition-duration:.35s;transition-duration:.35s;-webkit-transition-timing-function:ease;transition-timing-function:ease}
.caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:5px dashed;border-top:5px solid \9;border-right:5px solid transparent;border-left:5px solid transparent}
.dropup,.dropdown{position:relative}
.dropdown-toggle:focus{outline:0}
.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;list-style:none;font-size:14px;text-align:left;background-color:#fff;border:1px solid #ccc;border:1px solid rgba(0,0,0,0.15);border-radius:0;-webkit-box-shadow:0 6px 12px rgba(0,0,0,0.175);box-shadow:0 6px 12px rgba(0,0,0,0.175);background-clip:padding-box}
.dropdown-menu.pull-right{right:0;left:auto}
.dropdown-menu .divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}
.dropdown-menu>li>a{display:block;padding:3px 20px;clear:both;font-weight:normal;line-height:1.42857143;color:#333;white-space:nowrap}
.dropdown-menu>li>a:hover,.dropdown-menu>li>a:focus{text-decoration:none;color:#262626;background-color:#f5f5f5}
.dropdown-menu>.active>a,.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus{color:#fff;text-decoration:none;outline:0;background-color:#337ab7}
.dropdown-menu>.disabled>a,.dropdown-menu>.disabled>a:hover,.dropdown-menu>.disabled>a:focus{color:#777}
.dropdown-menu>.disabled>a:hover,.dropdown-menu>.disabled>a:focus{text-decoration:none;background-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabled = false);cursor:not-allowed}
.open>.dropdown-menu{display:block}
.open>a{outline:0}
.dropdown-menu-right{left:auto;right:0}
.dropdown-menu-left{left:0;right:auto}
.dropdown-header{display:block;padding:3px 20px;font-size:12px;line-height:1.42857143;color:#777;white-space:nowrap}
.dropdown-backdrop{position:fixed;left:0;right:0;bottom:0;top:0;z-index:990}
.pull-right>.dropdown-menu{right:0;left:auto}
.dropup .caret,.navbar-fixed-bottom .dropdown .caret{border-top:0;border-bottom:5px dashed;border-bottom:5px solid \9;content:""}
.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu{top:auto;bottom:100%;margin-bottom:2px}
@media(min-width:768px){.navbar-right .dropdown-menu{left:auto;right:0}
.navbar-right .dropdown-menu-left{left:0;right:auto}
}
.btn-group,.btn-group-vertical{position:relative;display:inline-block;vertical-align:middle}
.btn-group>.btn,.btn-group-vertical>.btn,.btn-group>.nc-filters__toggle,.btn-group-vertical>.nc-filters__toggle{position:relative;float:left}
.btn-group>.btn:hover,.btn-group-vertical>.btn:hover,.btn-group>.btn:focus,.btn-group-vertical>.btn:focus,.btn-group>.btn:active,.btn-group-vertical>.btn:active,.btn-group>.btn.active,.btn-group-vertical>.btn.active,.btn-group>.nc-filters__toggle:hover,.btn-group-vertical>.nc-filters__toggle:hover,.btn-group>.nc-filters__toggle:focus,.btn-group-vertical>.nc-filters__toggle:focus,.btn-group>.nc-filters__toggle:active,.btn-group-vertical>.nc-filters__toggle:active,.btn-group>.nc-filters__toggle.active,.btn-group-vertical>.nc-filters__toggle.active{z-index:2}
.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group,.btn-group .nc-filters__toggle+.nc-filters__toggle,.btn-group .nc-filters__toggle+.btn-group,.btn-group .btn-group+.nc-filters__toggle{margin-left:-1px}
.btn-toolbar{margin-left:-5px}
.btn-toolbar .btn,.btn-toolbar .btn-group,.btn-toolbar .input-group,.btn-toolbar .nc-filters__toggle{float:left}
.btn-toolbar>.btn,.btn-toolbar>.btn-group,.btn-toolbar>.input-group,.btn-toolbar>.nc-filters__toggle{margin-left:5px}
.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle),.btn-group>.nc-filters__toggle:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}
.btn-group>.btn:first-child,.btn-group>.nc-filters__toggle:first-child{margin-left:0}
.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle),.btn-group>.nc-filters__toggle:first-child:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-top-right-radius:0}
.btn-group>.btn:last-child:not(:first-child),.btn-group>.dropdown-toggle:not(:first-child),.btn-group>.nc-filters__toggle:last-child:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}
.btn-group>.btn-group{float:left}
.btn-group>.btn-group:not(:first-child):not(:last-child)>.btn,.btn-group>.btn-group:not(:first-child):not(:last-child)>.nc-filters__toggle{border-radius:0}
.btn-group>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group>.btn-group:first-child:not(:last-child)>.dropdown-toggle,.btn-group>.btn-group:first-child:not(:last-child)>.nc-filters__toggle:last-child{border-bottom-right-radius:0;border-top-right-radius:0}
.btn-group>.btn-group:last-child:not(:first-child)>.btn:first-child,.btn-group>.btn-group:last-child:not(:first-child)>.nc-filters__toggle:first-child{border-bottom-left-radius:0;border-top-left-radius:0}
.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle{outline:0}
.btn-group>.btn+.dropdown-toggle,.btn-group>.nc-filters__toggle+.dropdown-toggle{padding-left:8px;padding-right:8px}
.btn-group>.btn-lg+.dropdown-toggle{padding-left:12px;padding-right:12px}
.btn-group.open .dropdown-toggle{-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,0.125);box-shadow:inset 0 3px 5px rgba(0,0,0,0.125)}
.btn-group.open .dropdown-toggle.btn-link{-webkit-box-shadow:none;box-shadow:none}
.btn .caret,.nc-filters__toggle .caret{margin-left:0}
.btn-lg .caret{border-width:5px 5px 0;border-bottom-width:0}
.dropup .btn-lg .caret{border-width:0 5px 5px}
.btn-group-vertical>.btn,.btn-group-vertical>.btn-group,.btn-group-vertical>.btn-group>.btn,.btn-group-vertical>.nc-filters__toggle,.btn-group-vertical>.btn-group>.nc-filters__toggle{display:block;float:none;width:100%;max-width:100%}
.btn-group-vertical>.btn-group>.btn,.btn-group-vertical>.btn-group>.nc-filters__toggle{float:none}
.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group,.btn-group-vertical>.nc-filters__toggle+.nc-filters__toggle,.btn-group-vertical>.nc-filters__toggle+.btn-group,.btn-group-vertical>.btn-group+.nc-filters__toggle{margin-top:-1px;margin-left:0}
.btn-group-vertical>.btn:not(:first-child):not(:last-child),.btn-group-vertical>.nc-filters__toggle:not(:first-child):not(:last-child){border-radius:0}
.btn-group-vertical>.btn:first-child:not(:last-child),.btn-group-vertical>.nc-filters__toggle:first-child:not(:last-child){border-top-right-radius:0;border-top-left-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0}
.btn-group-vertical>.btn:last-child:not(:first-child),.btn-group-vertical>.nc-filters__toggle:last-child:not(:first-child){border-top-right-radius:0;border-top-left-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0}
.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn,.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.nc-filters__toggle{border-radius:0}
.btn-group-vertical>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group-vertical>.btn-group:first-child:not(:last-child)>.dropdown-toggle,.btn-group-vertical>.btn-group:first-child:not(:last-child)>.nc-filters__toggle:last-child{border-bottom-right-radius:0;border-bottom-left-radius:0}
.btn-group-vertical>.btn-group:last-child:not(:first-child)>.btn:first-child,.btn-group-vertical>.btn-group:last-child:not(:first-child)>.nc-filters__toggle:first-child{border-top-right-radius:0;border-top-left-radius:0}
.btn-group-justified{display:table;width:100%;table-layout:fixed;border-collapse:separate}
.btn-group-justified>.btn,.btn-group-justified>.btn-group,.btn-group-justified>.nc-filters__toggle{float:none;display:table-cell;width:1%}
.btn-group-justified>.btn-group .btn,.btn-group-justified>.btn-group .nc-filters__toggle{width:100%}
.btn-group-justified>.btn-group .dropdown-menu{left:auto}
[data-toggle="buttons"]>.btn input[type="radio"],[data-toggle="buttons"]>.btn-group>.btn input[type="radio"],[data-toggle="buttons"]>.btn input[type="checkbox"],[data-toggle="buttons"]>.btn-group>.btn input[type="checkbox"],[data-toggle="buttons"]>.nc-filters__toggle input[type="radio"],[data-toggle="buttons"]>.btn-group>.nc-filters__toggle input[type="radio"],[data-toggle="buttons"]>.nc-filters__toggle input[type="checkbox"],[data-toggle="buttons"]>.btn-group>.nc-filters__toggle input[type="checkbox"]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}
.input-group{position:relative;display:table;border-collapse:separate}
.input-group[class*="col-"]{float:none;padding-left:0;padding-right:0}
.input-group .form-control{position:relative;z-index:2;float:left;width:100%;margin-bottom:0}
.input-group .form-control:focus{z-index:3}
.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn,.input-group-lg>.input-group-btn>.nc-filters__toggle{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:0}
select.input-group-lg>.form-control,select.input-group-lg>.input-group-addon,select.input-group-lg>.input-group-btn>.btn,select.input-group-lg>.input-group-btn>.nc-filters__toggle{height:46px;line-height:46px}
textarea.input-group-lg>.form-control,textarea.input-group-lg>.input-group-addon,textarea.input-group-lg>.input-group-btn>.btn,select[multiple].input-group-lg>.form-control,select[multiple].input-group-lg>.input-group-addon,select[multiple].input-group-lg>.input-group-btn>.btn,textarea.input-group-lg>.input-group-btn>.nc-filters__toggle,select[multiple].input-group-lg>.input-group-btn>.nc-filters__toggle{height:auto}
.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn,.input-group-sm>.input-group-btn>.nc-filters__toggle{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:0}
select.input-group-sm>.form-control,select.input-group-sm>.input-group-addon,select.input-group-sm>.input-group-btn>.btn,select.input-group-sm>.input-group-btn>.nc-filters__toggle{height:30px;line-height:30px}
textarea.input-group-sm>.form-control,textarea.input-group-sm>.input-group-addon,textarea.input-group-sm>.input-group-btn>.btn,select[multiple].input-group-sm>.form-control,select[multiple].input-group-sm>.input-group-addon,select[multiple].input-group-sm>.input-group-btn>.btn,textarea.input-group-sm>.input-group-btn>.nc-filters__toggle,select[multiple].input-group-sm>.input-group-btn>.nc-filters__toggle{height:auto}
.input-group-addon,.input-group-btn,.input-group .form-control{display:table-cell}
.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child),.input-group .form-control:not(:first-child):not(:last-child){border-radius:0}
.input-group-addon,.input-group-btn{width:1%;white-space:nowrap;vertical-align:middle}
.input-group-addon{padding:6px 12px;font-size:14px;font-weight:normal;line-height:1;color:#555;text-align:center;background-color:#eee;border:1px solid #ccc;border-radius:0}
.input-group-addon.input-sm{padding:5px 10px;font-size:12px;border-radius:0}
.input-group-addon.input-lg{padding:10px 16px;font-size:18px;border-radius:0}
.input-group-addon input[type="radio"],.input-group-addon input[type="checkbox"]{margin-top:0}
.input-group .form-control:first-child,.input-group-addon:first-child,.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group>.btn,.input-group-btn:first-child>.dropdown-toggle,.input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group-btn:last-child>.btn-group:not(:last-child)>.btn,.input-group-btn:first-child>.nc-filters__toggle,.input-group-btn:first-child>.btn-group>.nc-filters__toggle,.input-group-btn:last-child>.nc-filters__toggle:not(:last-child):not(.dropdown-toggle),.input-group-btn:last-child>.btn-group:not(:last-child)>.nc-filters__toggle{border-bottom-right-radius:0;border-top-right-radius:0}
.input-group-addon:first-child{border-right:0}
.input-group .form-control:last-child,.input-group-addon:last-child,.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group>.btn,.input-group-btn:last-child>.dropdown-toggle,.input-group-btn:first-child>.btn:not(:first-child),.input-group-btn:first-child>.btn-group:not(:first-child)>.btn,.input-group-btn:last-child>.nc-filters__toggle,.input-group-btn:last-child>.btn-group>.nc-filters__toggle,.input-group-btn:first-child>.nc-filters__toggle:not(:first-child),.input-group-btn:first-child>.btn-group:not(:first-child)>.nc-filters__toggle{border-bottom-left-radius:0;border-top-left-radius:0}
.input-group-addon:last-child{border-left:0}
.input-group-btn{position:relative;font-size:0;white-space:nowrap}
.input-group-btn>.btn,.input-group-btn>.nc-filters__toggle{position:relative}
.input-group-btn>.btn+.btn,.input-group-btn>.nc-filters__toggle+.nc-filters__toggle{margin-left:-1px}
.input-group-btn>.btn:hover,.input-group-btn>.btn:focus,.input-group-btn>.btn:active,.input-group-btn>.nc-filters__toggle:hover,.input-group-btn>.nc-filters__toggle:focus,.input-group-btn>.nc-filters__toggle:active{z-index:2}
.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group,.input-group-btn:first-child>.nc-filters__toggle{margin-right:-1px}
.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group,.input-group-btn:last-child>.nc-filters__toggle{z-index:2;margin-left:-1px}
.nav,.nc-filter__filters{margin-bottom:0;padding-left:0;list-style:none}
.nav>li,.nc-filter__filters>li{position:relative;display:block}
.nav>li>a,.nc-filter__filters>li>a{position:relative;display:block;padding:10px 15px}
.nav>li>a:hover,.nav>li>a:focus,.nc-filter__filters>li>a:hover,.nc-filter__filters>li>a:focus{text-decoration:none;background-color:#eee}
.nav>li.disabled>a,.nc-filter__filters>li.disabled>a{color:#777}
.nav>li.disabled>a:hover,.nav>li.disabled>a:focus,.nc-filter__filters>li.disabled>a:hover,.nc-filter__filters>li.disabled>a:focus{color:#777;text-decoration:none;background-color:transparent;cursor:not-allowed}
.nav .open>a,.nav .open>a:hover,.nav .open>a:focus,.nc-filter__filters .open>a,.nc-filter__filters .open>a:hover,.nc-filter__filters .open>a:focus{background-color:#eee;border-color:#000}
.nav .nav-divider,.nc-filter__filters .nav-divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}
.nav>li>a>img,.nc-filter__filters>li>a>img{max-width:none}
.nav-tabs{border-bottom:1px solid #ddd}
.nav-tabs>li{float:left;margin-bottom:-1px}
.nav-tabs>li>a{margin-right:2px;line-height:1.42857143;border:1px solid transparent;border-radius:0}
.nav-tabs>li>a:hover{border-color:#eee #eee #ddd}
.nav-tabs>li.active>a,.nav-tabs>li.active>a:hover,.nav-tabs>li.active>a:focus{color:#555;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent;cursor:default}
.nav-tabs.nav-justified{width:100%;border-bottom:0}
.nav-tabs.nav-justified>li{float:none}
.nav-tabs.nav-justified>li>a{text-align:center;margin-bottom:5px}
.nav-tabs.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}
@media(min-width:768px){.nav-tabs.nav-justified>li{display:table-cell;width:1%}
.nav-tabs.nav-justified>li>a{margin-bottom:0}
}
.nav-tabs.nav-justified>li>a{margin-right:0;border-radius:0}
.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:hover,.nav-tabs.nav-justified>.active>a:focus{border:1px solid #ddd}
@media(min-width:768px){.nav-tabs.nav-justified>li>a{border-bottom:1px solid #ddd;border-radius:0}
.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:hover,.nav-tabs.nav-justified>.active>a:focus{border-bottom-color:#fff}
}
.nav-pills>li{float:left}
.nav-pills>li>a{border-radius:0}
.nav-pills>li+li{margin-left:2px}
.nav-pills>li.active>a,.nav-pills>li.active>a:hover,.nav-pills>li.active>a:focus{color:#fff;background-color:#337ab7}
.nav-stacked>li{float:none}
.nav-stacked>li+li{margin-top:2px;margin-left:0}
.nav-justified{width:100%}
.nav-justified>li{float:none}
.nav-justified>li>a{text-align:center;margin-bottom:5px}
.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}
@media(min-width:768px){.nav-justified>li{display:table-cell;width:1%}
.nav-justified>li>a{margin-bottom:0}
}
.nav-tabs-justified{border-bottom:0}
.nav-tabs-justified>li>a{margin-right:0;border-radius:0}
.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:hover,.nav-tabs-justified>.active>a:focus{border:1px solid #ddd}
@media(min-width:768px){.nav-tabs-justified>li>a{border-bottom:1px solid #ddd;border-radius:0}
.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:hover,.nav-tabs-justified>.active>a:focus{border-bottom-color:#fff}
}
.tab-content>.tab-pane{display:none}
.tab-content>.active{display:block}
.nav-tabs .dropdown-menu{margin-top:-1px;border-top-right-radius:0;border-top-left-radius:0}
.navbar{position:relative;min-height:50px;margin-bottom:20px;border:1px solid transparent}
@media(min-width:768px){.navbar{border-radius:0}
}
@media(min-width:768px){.navbar-header{float:left}
}
.navbar-collapse{overflow-x:visible;padding-right:15px;padding-left:15px;border-top:1px solid transparent;box-shadow:inset 0 1px 0 rgba(255,255,255,0.1);-webkit-overflow-scrolling:touch}
.navbar-collapse.in{overflow-y:auto}
@media(min-width:768px){.navbar-collapse{width:auto;border-top:0;box-shadow:none}
.navbar-collapse.collapse{display:block !important;height:auto !important;padding-bottom:0;overflow:visible !important}
.navbar-collapse.in{overflow-y:visible}
.navbar-fixed-top .navbar-collapse,.navbar-static-top .navbar-collapse,.navbar-fixed-bottom .navbar-collapse{padding-left:0;padding-right:0}
}
.navbar-fixed-top .navbar-collapse,.navbar-fixed-bottom .navbar-collapse{max-height:340px}
@media(max-device-width:480px) and (orientation:landscape){.navbar-fixed-top .navbar-collapse,.navbar-fixed-bottom .navbar-collapse{max-height:200px}
}
.container>.navbar-header,.container-fluid>.navbar-header,.container>.navbar-collapse,.container-fluid>.navbar-collapse{margin-right:-15px;margin-left:-15px}
@media(min-width:768px){.container>.navbar-header,.container-fluid>.navbar-header,.container>.navbar-collapse,.container-fluid>.navbar-collapse{margin-right:0;margin-left:0}
}
.navbar-static-top{z-index:1000;border-width:0 0 1px}
@media(min-width:768px){.navbar-static-top{border-radius:0}
}
.navbar-fixed-top,.navbar-fixed-bottom{position:fixed;right:0;left:0;z-index:1030}
@media(min-width:768px){.navbar-fixed-top,.navbar-fixed-bottom{border-radius:0}
}
.navbar-fixed-top{top:0;border-width:0 0 1px}
.navbar-fixed-bottom{bottom:0;margin-bottom:0;border-width:1px 0 0}
.navbar-brand{float:left;padding:15px 15px;font-size:18px;line-height:20px;height:50px}
.navbar-brand:hover,.navbar-brand:focus{text-decoration:none}
.navbar-brand>img{display:block}
@media(min-width:768px){.navbar>.container .navbar-brand,.navbar>.container-fluid .navbar-brand{margin-left:-15px}
}
.navbar-toggle{position:relative;float:right;margin-right:15px;padding:9px 10px;margin-top:8px;margin-bottom:8px;background-color:transparent;background-image:none;border:1px solid transparent;border-radius:0}
.navbar-toggle:focus{outline:0}
.navbar-toggle .icon-bar{display:block;width:22px;height:2px;border-radius:1px}
.navbar-toggle .icon-bar+.icon-bar{margin-top:4px}
@media(min-width:768px){.navbar-toggle{display:none}
}
.navbar-nav{margin:7.5px -15px}
.navbar-nav>li>a{padding-top:10px;padding-bottom:10px;line-height:20px}
@media(max-width:767px){.navbar-nav .open .dropdown-menu{position:static;float:none;width:auto;margin-top:0;background-color:transparent;border:0;box-shadow:none}
.navbar-nav .open .dropdown-menu>li>a,.navbar-nav .open .dropdown-menu .dropdown-header{padding:5px 15px 5px 25px}
.navbar-nav .open .dropdown-menu>li>a{line-height:20px}
.navbar-nav .open .dropdown-menu>li>a:hover,.navbar-nav .open .dropdown-menu>li>a:focus{background-image:none}
}
@media(min-width:768px){.navbar-nav{float:left;margin:0}
.navbar-nav>li{float:left}
.navbar-nav>li>a{padding-top:15px;padding-bottom:15px}
}
.navbar-form{margin-left:-15px;margin-right:-15px;padding:10px 15px;border-top:1px solid transparent;border-bottom:1px solid transparent;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,0.1),0 1px 0 rgba(255,255,255,0.1);box-shadow:inset 0 1px 0 rgba(255,255,255,0.1),0 1px 0 rgba(255,255,255,0.1);margin-top:8px;margin-bottom:8px}
@media(min-width:768px){.navbar-form .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}
.navbar-form .form-control{display:inline-block;width:auto;vertical-align:middle}
.navbar-form .form-control-static{display:inline-block}
.navbar-form .input-group{display:inline-table;vertical-align:middle}
.navbar-form .input-group .input-group-addon,.navbar-form .input-group .input-group-btn,.navbar-form .input-group .form-control{width:auto}
.navbar-form .input-group>.form-control{width:100%}
.navbar-form .control-label{margin-bottom:0;vertical-align:middle}
.navbar-form .radio,.navbar-form .checkbox{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}
.navbar-form .radio label,.navbar-form .checkbox label{padding-left:0}
.navbar-form .radio input[type="radio"],.navbar-form .checkbox input[type="checkbox"]{position:relative;margin-left:0}
.navbar-form .has-feedback .form-control-feedback{top:0}
}
@media(max-width:767px){.navbar-form .form-group{margin-bottom:5px}
.navbar-form .form-group:last-child{margin-bottom:0}
}
@media(min-width:768px){.navbar-form{width:auto;border:0;margin-left:0;margin-right:0;padding-top:0;padding-bottom:0;-webkit-box-shadow:none;box-shadow:none}
}
.navbar-nav>li>.dropdown-menu{margin-top:0;border-top-right-radius:0;border-top-left-radius:0}
.navbar-fixed-bottom .navbar-nav>li>.dropdown-menu{margin-bottom:0;border-top-right-radius:0;border-top-left-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0}
.navbar-btn{margin-top:8px;margin-bottom:8px}
.navbar-btn.btn-sm{margin-top:10px;margin-bottom:10px}
.navbar-btn.btn-xs{margin-top:14px;margin-bottom:14px}
.navbar-text{margin-top:15px;margin-bottom:15px}
@media(min-width:768px){.navbar-text{float:left;margin-left:15px;margin-right:15px}
}
@media(min-width:768px){.navbar-left{float:left !important}
.navbar-right{float:right !important;margin-right:-15px}
.navbar-right ~ .navbar-right{margin-right:0}
}
.navbar-default{background-color:#f8f8f8;border-color:#e7e7e7}
.navbar-default .navbar-brand{color:#777}
.navbar-default .navbar-brand:hover,.navbar-default .navbar-brand:focus{color:#5e5e5e;background-color:transparent}
.navbar-default .navbar-text{color:#777}
.navbar-default .navbar-nav>li>a{color:#777}
.navbar-default .navbar-nav>li>a:hover,.navbar-default .navbar-nav>li>a:focus{color:#333;background-color:transparent}
.navbar-default .navbar-nav>.active>a,.navbar-default .navbar-nav>.active>a:hover,.navbar-default .navbar-nav>.active>a:focus{color:#555;background-color:#e7e7e7}
.navbar-default .navbar-nav>.disabled>a,.navbar-default .navbar-nav>.disabled>a:hover,.navbar-default .navbar-nav>.disabled>a:focus{color:#ccc;background-color:transparent}
.navbar-default .navbar-toggle{border-color:#ddd}
.navbar-default .navbar-toggle:hover,.navbar-default .navbar-toggle:focus{background-color:#ddd}
.navbar-default .navbar-toggle .icon-bar{background-color:#888}
.navbar-default .navbar-collapse,.navbar-default .navbar-form{border-color:#e7e7e7}
.navbar-default .navbar-nav>.open>a,.navbar-default .navbar-nav>.open>a:hover,.navbar-default .navbar-nav>.open>a:focus{background-color:#e7e7e7;color:#555}
@media(max-width:767px){.navbar-default .navbar-nav .open .dropdown-menu>li>a{color:#777}
.navbar-default .navbar-nav .open .dropdown-menu>li>a:hover,.navbar-default .navbar-nav .open .dropdown-menu>li>a:focus{color:#333;background-color:transparent}
.navbar-default .navbar-nav .open .dropdown-menu>.active>a,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:hover,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:focus{color:#555;background-color:#e7e7e7}
.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:hover,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:focus{color:#ccc;background-color:transparent}
}
.navbar-default .navbar-link{color:#777}
.navbar-default .navbar-link:hover{color:#333}
.navbar-default .btn-link{color:#777}
.navbar-default .btn-link:hover,.navbar-default .btn-link:focus{color:#333}
.navbar-default .btn-link[disabled]:hover,fieldset[disabled] .navbar-default .btn-link:hover,.navbar-default .btn-link[disabled]:focus,fieldset[disabled] .navbar-default .btn-link:focus{color:#ccc}
.navbar-inverse{background-color:#222;border-color:#080808}
.navbar-inverse .navbar-brand{color:#9d9d9d}
.navbar-inverse .navbar-brand:hover,.navbar-inverse .navbar-brand:focus{color:#fff;background-color:transparent}
.navbar-inverse .navbar-text{color:#9d9d9d}
.navbar-inverse .navbar-nav>li>a{color:#9d9d9d}
.navbar-inverse .navbar-nav>li>a:hover,.navbar-inverse .navbar-nav>li>a:focus{color:#fff;background-color:transparent}
.navbar-inverse .navbar-nav>.active>a,.navbar-inverse .navbar-nav>.active>a:hover,.navbar-inverse .navbar-nav>.active>a:focus{color:#fff;background-color:#080808}
.navbar-inverse .navbar-nav>.disabled>a,.navbar-inverse .navbar-nav>.disabled>a:hover,.navbar-inverse .navbar-nav>.disabled>a:focus{color:#444;background-color:transparent}
.navbar-inverse .navbar-toggle{border-color:#333}
.navbar-inverse .navbar-toggle:hover,.navbar-inverse .navbar-toggle:focus{background-color:#333}
.navbar-inverse .navbar-toggle .icon-bar{background-color:#fff}
.navbar-inverse .navbar-collapse,.navbar-inverse .navbar-form{border-color:#101010}
.navbar-inverse .navbar-nav>.open>a,.navbar-inverse .navbar-nav>.open>a:hover,.navbar-inverse .navbar-nav>.open>a:focus{background-color:#080808;color:#fff}
@media(max-width:767px){.navbar-inverse .navbar-nav .open .dropdown-menu>.dropdown-header{border-color:#080808}
.navbar-inverse .navbar-nav .open .dropdown-menu .divider{background-color:#080808}
.navbar-inverse .navbar-nav .open .dropdown-menu>li>a{color:#9d9d9d}
.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:hover,.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:focus{color:#fff;background-color:transparent}
.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:hover,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:focus{color:#fff;background-color:#080808}
.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:hover,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:focus{color:#444;background-color:transparent}
}
.navbar-inverse .navbar-link{color:#9d9d9d}
.navbar-inverse .navbar-link:hover{color:#fff}
.navbar-inverse .btn-link{color:#9d9d9d}
.navbar-inverse .btn-link:hover,.navbar-inverse .btn-link:focus{color:#fff}
.navbar-inverse .btn-link[disabled]:hover,fieldset[disabled] .navbar-inverse .btn-link:hover,.navbar-inverse .btn-link[disabled]:focus,fieldset[disabled] .navbar-inverse .btn-link:focus{color:#444}
.breadcrumb{padding:8px 15px;margin-bottom:20px;list-style:none;background-color:#f5f5f5;border-radius:0}
.breadcrumb>li{display:inline-block}
.breadcrumb>li+li:before{content:"/\00a0";padding:0 5px;color:#ccc}
.breadcrumb>.active{color:#777}
.pagination{display:inline-block;padding-left:0;margin:20px 0;border-radius:0}
.pagination>li{display:inline}
.pagination>li>a,.pagination>li>span{position:relative;float:left;padding:6px 12px;line-height:1.42857143;text-decoration:none;color:#000;background-color:#fff;border:1px solid #ddd;margin-left:-1px}
.pagination>li:first-child>a,.pagination>li:first-child>span{margin-left:0;border-bottom-left-radius:0;border-top-left-radius:0}
.pagination>li:last-child>a,.pagination>li:last-child>span{border-bottom-right-radius:0;border-top-right-radius:0}
.pagination>li>a:hover,.pagination>li>span:hover,.pagination>li>a:focus,.pagination>li>span:focus{z-index:2;color:#262626;background-color:#eee;border-color:#ddd}
.pagination>.active>a,.pagination>.active>span,.pagination>.active>a:hover,.pagination>.active>span:hover,.pagination>.active>a:focus,.pagination>.active>span:focus{z-index:3;color:#fff;background-color:#337ab7;border-color:#337ab7;cursor:default}
.pagination>.disabled>span,.pagination>.disabled>span:hover,.pagination>.disabled>span:focus,.pagination>.disabled>a,.pagination>.disabled>a:hover,.pagination>.disabled>a:focus{color:#777;background-color:#fff;border-color:#ddd;cursor:not-allowed}
.pagination-lg>li>a,.pagination-lg>li>span{padding:10px 16px;font-size:18px;line-height:1.3333333}
.pagination-lg>li:first-child>a,.pagination-lg>li:first-child>span{border-bottom-left-radius:0;border-top-left-radius:0}
.pagination-lg>li:last-child>a,.pagination-lg>li:last-child>span{border-bottom-right-radius:0;border-top-right-radius:0}
.pagination-sm>li>a,.pagination-sm>li>span{padding:5px 10px;font-size:12px;line-height:1.5}
.pagination-sm>li:first-child>a,.pagination-sm>li:first-child>span{border-bottom-left-radius:0;border-top-left-radius:0}
.pagination-sm>li:last-child>a,.pagination-sm>li:last-child>span{border-bottom-right-radius:0;border-top-right-radius:0}
.pager{padding-left:0;margin:20px 0;list-style:none;text-align:center}
.pager li{display:inline}
.pager li>a,.pager li>span{display:inline-block;padding:5px 14px;background-color:#fff;border:1px solid #ddd;border-radius:15px}
.pager li>a:hover,.pager li>a:focus{text-decoration:none;background-color:#eee}
.pager .next>a,.pager .next>span{float:right}
.pager .previous>a,.pager .previous>span{float:left}
.pager .disabled>a,.pager .disabled>a:hover,.pager .disabled>a:focus,.pager .disabled>span{color:#777;background-color:#fff;cursor:not-allowed}
.label{display:inline;padding:.2em .6em .3em;font-size:75%;font-weight:bold;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25em}
a.label:hover,a.label:focus{color:#fff;text-decoration:none;cursor:pointer}
.label:empty{display:none}
.btn .label,.nc-filters__toggle .label{position:relative;top:-1px}
.label-default{background-color:#777}
.label-default[href]:hover,.label-default[href]:focus{background-color:#5e5e5e}
.label-primary{background-color:#337ab7}
.label-primary[href]:hover,.label-primary[href]:focus{background-color:#286090}
.label-success{background-color:#5cb85c}
.label-success[href]:hover,.label-success[href]:focus{background-color:#449d44}
.label-info{background-color:#5bc0de}
.label-info[href]:hover,.label-info[href]:focus{background-color:#31b0d5}
.label-warning{background-color:#f0ad4e}
.label-warning[href]:hover,.label-warning[href]:focus{background-color:#ec971f}
.label-danger{background-color:#d9534f}
.label-danger[href]:hover,.label-danger[href]:focus{background-color:#c9302c}
.badge{display:inline-block;min-width:10px;padding:3px 7px;font-size:12px;font-weight:bold;color:#fff;line-height:1;vertical-align:middle;white-space:nowrap;text-align:center;background-color:#777;border-radius:10px}
.badge:empty{display:none}
.btn .badge,.nc-filters__toggle .badge{position:relative;top:-1px}
.btn-xs .badge,.btn-group-xs>.btn .badge,.btn-group-xs>.nc-filters__toggle .badge{top:0;padding:1px 5px}
a.badge:hover,a.badge:focus{color:#fff;text-decoration:none;cursor:pointer}
.list-group-item.active>.badge,.nav-pills>.active>a>.badge{color:#000;background-color:#fff}
.list-group-item>.badge{float:right}
.list-group-item>.badge+.badge{margin-right:5px}
.nav-pills>li>a>.badge{margin-left:3px}
.alert{padding:15px;margin-bottom:20px;border:1px solid transparent;border-radius:0}
.alert h4{margin-top:0;color:inherit}
.alert .alert-link{font-weight:bold}
.alert>p,.alert>ul{margin-bottom:0}
.alert>p+p{margin-top:5px}
.alert-dismissable,.alert-dismissible{padding-right:35px}
.alert-dismissable .close,.alert-dismissible .close{position:relative;top:-2px;right:-21px;color:inherit}
.alert-success{background-color:#dff0d8;border-color:#d6e9c6;color:#3c763d}
.alert-success hr{border-top-color:#c9e2b3}
.alert-success .alert-link{color:#2b542c}
.alert-info{background-color:#d9edf7;border-color:#bce8f1;color:#31708f}
.alert-info hr{border-top-color:#a6e1ec}
.alert-info .alert-link{color:#245269}
.alert-warning{background-color:#fcf8e3;border-color:#faebcc;color:#8a6d3b}
.alert-warning hr{border-top-color:#f7e1b5}
.alert-warning .alert-link{color:#66512c}
.alert-danger{background-color:#f2dede;border-color:#ebccd1;color:#a94442}
.alert-danger hr{border-top-color:#e4b9c0}
.alert-danger .alert-link{color:#843534}
.panel{margin-bottom:20px;background-color:#fff;border:1px solid transparent;border-radius:0;-webkit-box-shadow:0 1px 1px rgba(0,0,0,0.05);box-shadow:0 1px 1px rgba(0,0,0,0.05)}
.panel-body{padding:15px}
.panel-heading{padding:10px 15px;border-bottom:1px solid transparent;border-top-right-radius:-1px;border-top-left-radius:-1px}
.panel-heading>.dropdown .dropdown-toggle{color:inherit}
.panel-title{margin-top:0;margin-bottom:0;font-size:16px;color:inherit}
.panel-title>a,.panel-title>small,.panel-title>.small,.panel-title>small>a,.panel-title>.small>a{color:inherit}
.panel-footer{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #ddd;border-bottom-right-radius:-1px;border-bottom-left-radius:-1px}
.panel>.list-group,.panel>.panel-collapse>.list-group{margin-bottom:0}
.panel>.list-group .list-group-item,.panel>.panel-collapse>.list-group .list-group-item{border-width:1px 0;border-radius:0}
.panel>.list-group:first-child .list-group-item:first-child,.panel>.panel-collapse>.list-group:first-child .list-group-item:first-child{border-top:0;border-top-right-radius:-1px;border-top-left-radius:-1px}
.panel>.list-group:last-child .list-group-item:last-child,.panel>.panel-collapse>.list-group:last-child .list-group-item:last-child{border-bottom:0;border-bottom-right-radius:-1px;border-bottom-left-radius:-1px}
.panel>.panel-heading+.panel-collapse>.list-group .list-group-item:first-child{border-top-right-radius:0;border-top-left-radius:0}
.panel-heading+.list-group .list-group-item:first-child{border-top-width:0}
.list-group+.panel-footer{border-top-width:0}
.panel>.table,.panel>.table-responsive>.table,.panel>.panel-collapse>.table{margin-bottom:0}
.panel>.table caption,.panel>.table-responsive>.table caption,.panel>.panel-collapse>.table caption{padding-left:15px;padding-right:15px}
.panel>.table:first-child,.panel>.table-responsive:first-child>.table:first-child{border-top-right-radius:-1px;border-top-left-radius:-1px}
.panel>.table:first-child>thead:first-child>tr:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child{border-top-left-radius:-1px;border-top-right-radius:-1px}
.panel>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table:first-child>thead:first-child>tr:first-child th:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:first-child{border-top-left-radius:-1px}
.panel>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table:first-child>thead:first-child>tr:first-child th:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:last-child{border-top-right-radius:-1px}
.panel>.table:last-child,.panel>.table-responsive:last-child>.table:last-child{border-bottom-right-radius:-1px;border-bottom-left-radius:-1px}
.panel>.table:last-child>tbody:last-child>tr:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child{border-bottom-left-radius:-1px;border-bottom-right-radius:-1px}
.panel>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:first-child{border-bottom-left-radius:-1px}
.panel>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:last-child{border-bottom-right-radius:-1px}
.panel>.panel-body+.table,.panel>.panel-body+.table-responsive,.panel>.table+.panel-body,.panel>.table-responsive+.panel-body{border-top:1px solid #ddd}
.panel>.table>tbody:first-child>tr:first-child th,.panel>.table>tbody:first-child>tr:first-child td{border-top:0}
.panel>.table-bordered,.panel>.table-responsive>.table-bordered{border:0}
.panel>.table-bordered>thead>tr>th:first-child,.panel>.table-responsive>.table-bordered>thead>tr>th:first-child,.panel>.table-bordered>tbody>tr>th:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:first-child,.panel>.table-bordered>tfoot>tr>th:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:first-child,.panel>.table-bordered>thead>tr>td:first-child,.panel>.table-responsive>.table-bordered>thead>tr>td:first-child,.panel>.table-bordered>tbody>tr>td:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:first-child,.panel>.table-bordered>tfoot>tr>td:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:first-child{border-left:0}
.panel>.table-bordered>thead>tr>th:last-child,.panel>.table-responsive>.table-bordered>thead>tr>th:last-child,.panel>.table-bordered>tbody>tr>th:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:last-child,.panel>.table-bordered>tfoot>tr>th:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:last-child,.panel>.table-bordered>thead>tr>td:last-child,.panel>.table-responsive>.table-bordered>thead>tr>td:last-child,.panel>.table-bordered>tbody>tr>td:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:last-child,.panel>.table-bordered>tfoot>tr>td:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:last-child{border-right:0}
.panel>.table-bordered>thead>tr:first-child>td,.panel>.table-responsive>.table-bordered>thead>tr:first-child>td,.panel>.table-bordered>tbody>tr:first-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>td,.panel>.table-bordered>thead>tr:first-child>th,.panel>.table-responsive>.table-bordered>thead>tr:first-child>th,.panel>.table-bordered>tbody>tr:first-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>th{border-bottom:0}
.panel>.table-bordered>tbody>tr:last-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>td,.panel>.table-bordered>tfoot>tr:last-child>td,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>td,.panel>.table-bordered>tbody>tr:last-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>th,.panel>.table-bordered>tfoot>tr:last-child>th,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>th{border-bottom:0}
.panel>.table-responsive{border:0;margin-bottom:0}
.panel-group{margin-bottom:20px}
.panel-group .panel{margin-bottom:0;border-radius:0}
.panel-group .panel+.panel{margin-top:5px}
.panel-group .panel-heading{border-bottom:0}
.panel-group .panel-heading+.panel-collapse>.panel-body,.panel-group .panel-heading+.panel-collapse>.list-group{border-top:1px solid #ddd}
.panel-group .panel-footer{border-top:0}
.panel-group .panel-footer+.panel-collapse .panel-body{border-bottom:1px solid #ddd}
.panel-default{border-color:#ddd}
.panel-default>.panel-heading{color:#333;background-color:#f5f5f5;border-color:#ddd}
.panel-default>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ddd}
.panel-default>.panel-heading .badge{color:#f5f5f5;background-color:#333}
.panel-default>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ddd}
.panel-primary{border-color:#337ab7}
.panel-primary>.panel-heading{color:#fff;background-color:#337ab7;border-color:#337ab7}
.panel-primary>.panel-heading+.panel-collapse>.panel-body{border-top-color:#337ab7}
.panel-primary>.panel-heading .badge{color:#337ab7;background-color:#fff}
.panel-primary>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#337ab7}
.panel-success{border-color:#d6e9c6}
.panel-success>.panel-heading{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}
.panel-success>.panel-heading+.panel-collapse>.panel-body{border-top-color:#d6e9c6}
.panel-success>.panel-heading .badge{color:#dff0d8;background-color:#3c763d}
.panel-success>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#d6e9c6}
.panel-info{border-color:#bce8f1}
.panel-info>.panel-heading{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}
.panel-info>.panel-heading+.panel-collapse>.panel-body{border-top-color:#bce8f1}
.panel-info>.panel-heading .badge{color:#d9edf7;background-color:#31708f}
.panel-info>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#bce8f1}
.panel-warning{border-color:#faebcc}
.panel-warning>.panel-heading{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}
.panel-warning>.panel-heading+.panel-collapse>.panel-body{border-top-color:#faebcc}
.panel-warning>.panel-heading .badge{color:#fcf8e3;background-color:#8a6d3b}
.panel-warning>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#faebcc}
.panel-danger{border-color:#ebccd1}
.panel-danger>.panel-heading{color:#a94442;background-color:#f2dede;border-color:#ebccd1}
.panel-danger>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ebccd1}
.panel-danger>.panel-heading .badge{color:#f2dede;background-color:#a94442}
.panel-danger>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ebccd1}
.embed-responsive{position:relative;display:block;height:0;padding:0;overflow:hidden}
.embed-responsive .embed-responsive-item,.embed-responsive iframe,.embed-responsive embed,.embed-responsive object,.embed-responsive video{position:absolute;top:0;left:0;bottom:0;height:100%;width:100%;border:0}
.embed-responsive-16by9{padding-bottom:56.25%}
.embed-responsive-4by3{padding-bottom:75%}
.close{float:right;font-size:21px;font-weight:bold;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.2;filter:alpha(opacity=20)}
.close:hover,.close:focus{color:#000;text-decoration:none;cursor:pointer;opacity:.5;filter:alpha(opacity=50)}
button.close{padding:0;cursor:pointer;background:transparent;border:0;-webkit-appearance:none}
.modal-open{overflow:hidden}
.modal{display:none;overflow:hidden;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0}
.modal.fade .modal-dialog{-webkit-transform:translate(0,-25%);-ms-transform:translate(0,-25%);-o-transform:translate(0,-25%);transform:translate(0,-25%);-webkit-transition:-webkit-transform .3s ease-out;-moz-transition:-moz-transform .3s ease-out;-o-transition:-o-transform .3s ease-out;transition:transform .3s ease-out}
.modal.in .modal-dialog{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);transform:translate(0,0)}
.modal-open .modal{overflow-x:hidden;overflow-y:hidden}
.modal-dialog{position:relative;width:auto;margin:10px}
.modal-content{position:relative;background-color:#fff;border:1px solid #999;border:1px solid rgba(0,0,0,0.2);border-radius:0;-webkit-box-shadow:0 3px 9px rgba(0,0,0,0.5);box-shadow:0 3px 9px rgba(0,0,0,0.5);background-clip:padding-box;outline:0}
.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}
.modal-backdrop.fade{opacity:0;filter:alpha(opacity=0)}
.modal-backdrop.in{opacity:.5;filter:alpha(opacity=50)}
.modal-header{padding:15px;border-bottom:1px solid #e5e5e5}
.modal-header .close{margin-top:-2px}
.modal-title{margin:0;line-height:1.42857143}
.modal-body{position:relative;padding:15px}
.modal-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}
.modal-footer .btn+.btn,.modal-footer .nc-filters__toggle+.nc-filters__toggle{margin-left:5px;margin-bottom:0}
.modal-footer .btn-group .btn+.btn,.modal-footer .btn-group .nc-filters__toggle+.nc-filters__toggle{margin-left:-1px}
.modal-footer .btn-block+.btn-block{margin-left:0}
.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}
@media(min-width:768px){.modal-dialog{width:600px;margin:30px auto}
.modal-content{-webkit-box-shadow:0 5px 15px rgba(0,0,0,0.5);box-shadow:0 5px 15px rgba(0,0,0,0.5)}
.modal-sm{width:300px}
}
@media(min-width:992px){.modal-lg{width:900px}
}
.tooltip{position:absolute;z-index:1070;display:block;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-style:normal;font-weight:normal;letter-spacing:normal;line-break:auto;line-height:1.42857143;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;word-wrap:normal;font-size:12px;opacity:0;filter:alpha(opacity=0)}
.tooltip.in{opacity:.9;filter:alpha(opacity=90)}
.tooltip.top{margin-top:-3px;padding:5px 0}
.tooltip.right{margin-left:3px;padding:0 5px}
.tooltip.bottom{margin-top:3px;padding:5px 0}
.tooltip.left{margin-left:-3px;padding:0 5px}
.tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;background-color:#000;border-radius:0}
.tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}
.tooltip.top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0;border-top-color:#000}
.tooltip.top-left .tooltip-arrow{bottom:0;right:5px;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}
.tooltip.top-right .tooltip-arrow{bottom:0;left:5px;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}
.tooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#000}
.tooltip.left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000}
.tooltip.bottom .tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px;border-bottom-color:#000}
.tooltip.bottom-left .tooltip-arrow{top:0;right:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}
.tooltip.bottom-right .tooltip-arrow{top:0;left:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}
.popover{position:absolute;top:0;left:0;z-index:1060;display:none;max-width:276px;padding:1px;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-style:normal;font-weight:normal;letter-spacing:normal;line-break:auto;line-height:1.42857143;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;word-wrap:normal;font-size:14px;background-color:#fff;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,0.2);border-radius:0;-webkit-box-shadow:0 5px 10px rgba(0,0,0,0.2);box-shadow:0 5px 10px rgba(0,0,0,0.2)}
.popover.top{margin-top:-10px}
.popover.right{margin-left:10px}
.popover.bottom{margin-top:10px}
.popover.left{margin-left:-10px}
.popover-title{margin:0;padding:8px 14px;font-size:14px;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-radius:-1px -1px 0 0}
.popover-content{padding:9px 14px}
.popover>.arrow,.popover>.arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}
.popover>.arrow{border-width:11px}
.popover>.arrow:after{border-width:10px;content:""}
.popover.top>.arrow{left:50%;margin-left:-11px;border-bottom-width:0;border-top-color:#999;border-top-color:rgba(0,0,0,0.25);bottom:-11px}
.popover.top>.arrow:after{content:" ";bottom:1px;margin-left:-10px;border-bottom-width:0;border-top-color:#fff}
.popover.right>.arrow{top:50%;left:-11px;margin-top:-11px;border-left-width:0;border-right-color:#999;border-right-color:rgba(0,0,0,0.25)}
.popover.right>.arrow:after{content:" ";left:1px;bottom:-10px;border-left-width:0;border-right-color:#fff}
.popover.bottom>.arrow{left:50%;margin-left:-11px;border-top-width:0;border-bottom-color:#999;border-bottom-color:rgba(0,0,0,0.25);top:-11px}
.popover.bottom>.arrow:after{content:" ";top:1px;margin-left:-10px;border-top-width:0;border-bottom-color:#fff}
.popover.left>.arrow{top:50%;right:-11px;margin-top:-11px;border-right-width:0;border-left-color:#999;border-left-color:rgba(0,0,0,0.25)}
.popover.left>.arrow:after{content:" ";right:1px;border-right-width:0;border-left-color:#fff;bottom:-10px}
.carousel{position:relative}
.carousel-inner{position:relative;overflow:hidden;width:100%}
.carousel-inner>.item{display:none;position:relative;-webkit-transition:.6s ease-in-out left;-o-transition:.6s ease-in-out left;transition:.6s ease-in-out left}
.carousel-inner>.item>img,.carousel-inner>.item>a>img{line-height:1}
@media all and (transform-3d),(-webkit-transform-3d){.carousel-inner>.item{-webkit-transition:-webkit-transform .6s ease-in-out;-moz-transition:-moz-transform .6s ease-in-out;-o-transition:-o-transform .6s ease-in-out;transition:transform .6s ease-in-out;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000px;-moz-perspective:1000px;perspective:1000px}
.carousel-inner>.item.next,.carousel-inner>.item.active.right{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);left:0}
.carousel-inner>.item.prev,.carousel-inner>.item.active.left{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);left:0}
.carousel-inner>.item.next.left,.carousel-inner>.item.prev.right,.carousel-inner>.item.active{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);left:0}
}
.carousel-inner>.active,.carousel-inner>.next,.carousel-inner>.prev{display:block}
.carousel-inner>.active{left:0}
.carousel-inner>.next,.carousel-inner>.prev{position:absolute;top:0;width:100%}
.carousel-inner>.next{left:100%}
.carousel-inner>.prev{left:-100%}
.carousel-inner>.next.left,.carousel-inner>.prev.right{left:0}
.carousel-inner>.active.left{left:-100%}
.carousel-inner>.active.right{left:100%}
.carousel-control{position:absolute;top:0;left:0;bottom:0;width:15%;opacity:.5;filter:alpha(opacity=50);font-size:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,0.6);background-color:rgba(0,0,0,0)}
.carousel-control.left{background-image:-webkit-linear-gradient(left,rgba(0,0,0,0.5) 0,rgba(0,0,0,0.0001) 100%);background-image:-o-linear-gradient(left,rgba(0,0,0,0.5) 0,rgba(0,0,0,0.0001) 100%);background-image:linear-gradient(to right,rgba(0,0,0,0.5) 0,rgba(0,0,0,0.0001) 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000',endColorstr='#00000000',GradientType=1)}
.carousel-control.right{left:auto;right:0;background-image:-webkit-linear-gradient(left,rgba(0,0,0,0.0001) 0,rgba(0,0,0,0.5) 100%);background-image:-o-linear-gradient(left,rgba(0,0,0,0.0001) 0,rgba(0,0,0,0.5) 100%);background-image:linear-gradient(to right,rgba(0,0,0,0.0001) 0,rgba(0,0,0,0.5) 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000',endColorstr='#80000000',GradientType=1)}
.carousel-control:hover,.carousel-control:focus{outline:0;color:#fff;text-decoration:none;opacity:.9;filter:alpha(opacity=90)}
.carousel-control .icon-prev,.carousel-control .icon-next,.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right{position:absolute;top:50%;margin-top:-10px;z-index:5;display:inline-block}
.carousel-control .icon-prev,.carousel-control .glyphicon-chevron-left{left:50%;margin-left:-10px}
.carousel-control .icon-next,.carousel-control .glyphicon-chevron-right{right:50%;margin-right:-10px}
.carousel-control .icon-prev,.carousel-control .icon-next{width:20px;height:20px;line-height:1;font-family:serif}
.carousel-control .icon-prev:before{content:'\2039'}
.carousel-control .icon-next:before{content:'\203a'}
.carousel-indicators{position:absolute;bottom:10px;left:50%;z-index:15;width:60%;margin-left:-30%;padding-left:0;list-style:none;text-align:center}
.carousel-indicators li{display:inline-block;width:10px;height:10px;margin:1px;text-indent:-999px;border:1px solid #fff;border-radius:10px;cursor:pointer;background-color:#000 \9;background-color:rgba(0,0,0,0)}
.carousel-indicators .active{margin:0;width:12px;height:12px;background-color:#fff}
.carousel-caption{position:absolute;left:15%;right:15%;bottom:20px;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,0.6)}
.carousel-caption .btn,.carousel-caption .nc-filters__toggle{text-shadow:none}
@media screen and (min-width:768px){.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right,.carousel-control .icon-prev,.carousel-control .icon-next{width:30px;height:30px;margin-top:-10px;font-size:30px}
.carousel-control .glyphicon-chevron-left,.carousel-control .icon-prev{margin-left:-10px}
.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next{margin-right:-10px}
.carousel-caption{left:20%;right:20%;padding-bottom:30px}
.carousel-indicators{bottom:20px}
}
.clearfix:before,.clearfix:after,.dl-horizontal dd:before,.dl-horizontal dd:after,.container:before,.container:after,.container-fluid:before,.container-fluid:after,.row:before,.row:after,.form-horizontal .form-group:before,.form-horizontal .form-group:after,.btn-toolbar:before,.btn-toolbar:after,.btn-group-vertical>.btn-group:before,.btn-group-vertical>.btn-group:after,.nav:before,.nav:after,.navbar:before,.navbar:after,.navbar-header:before,.navbar-header:after,.navbar-collapse:before,.navbar-collapse:after,.pager:before,.pager:after,.panel-body:before,.panel-body:after,.modal-header:before,.modal-header:after,.modal-footer:before,.modal-footer:after,.nc-filter__filters:before,.nc-filter__filters:after{content:" ";display:table}
.clearfix:after,.dl-horizontal dd:after,.container:after,.container-fluid:after,.row:after,.form-horizontal .form-group:after,.btn-toolbar:after,.btn-group-vertical>.btn-group:after,.nav:after,.navbar:after,.navbar-header:after,.navbar-collapse:after,.pager:after,.panel-body:after,.modal-header:after,.modal-footer:after,.nc-filter__filters:after{clear:both}
.clearfix:before,.clearfix:after,.dl-horizontal dd:before,.dl-horizontal dd:after,.container:before,.container:after,.container-fluid:before,.container-fluid:after,.row:before,.row:after,.form-horizontal .form-group:before,.form-horizontal .form-group:after,.btn-toolbar:before,.btn-toolbar:after,.btn-group-vertical>.btn-group:before,.btn-group-vertical>.btn-group:after,.nav:before,.nav:after,.navbar:before,.navbar:after,.navbar-header:before,.navbar-header:after,.navbar-collapse:before,.navbar-collapse:after,.pager:before,.pager:after,.panel-body:before,.panel-body:after,.modal-header:before,.modal-header:after,.modal-footer:before,.modal-footer:after,.nc-filter__filters:before,.nc-filter__filters:after{content:" ";display:table}
.clearfix:after,.dl-horizontal dd:after,.container:after,.container-fluid:after,.row:after,.form-horizontal .form-group:after,.btn-toolbar:after,.btn-group-vertical>.btn-group:after,.nav:after,.navbar:after,.navbar-header:after,.navbar-collapse:after,.pager:after,.panel-body:after,.modal-header:after,.modal-footer:after,.nc-filter__filters:after{clear:both}
.center-block{display:block;margin-left:auto;margin-right:auto}
.pull-right{float:right !important}
.pull-left{float:left !important}
.hide{display:none !important}
.show{display:block !important}
.invisible{visibility:hidden}
.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}
.hidden{display:none !important}
.affix{position:fixed}
@-ms-viewport{width:device-width}
.visible-xs,.visible-sm,.visible-md,.visible-lg{display:none !important}
.visible-xs-block,.visible-xs-inline,.visible-xs-inline-block,.visible-sm-block,.visible-sm-inline,.visible-sm-inline-block,.visible-md-block,.visible-md-inline,.visible-md-inline-block,.visible-lg-block,.visible-lg-inline,.visible-lg-inline-block{display:none !important}
@media(max-width:767px){.visible-xs{display:block !important}
table.visible-xs{display:table !important}
tr.visible-xs{display:table-row !important}
th.visible-xs,td.visible-xs{display:table-cell !important}
}
@media(max-width:767px){.visible-xs-block{display:block !important}
}
@media(max-width:767px){.visible-xs-inline{display:inline !important}
}
@media(max-width:767px){.visible-xs-inline-block{display:inline-block !important}
}
@media(min-width:768px) and (max-width:991px){.visible-sm{display:block !important}
table.visible-sm{display:table !important}
tr.visible-sm{display:table-row !important}
th.visible-sm,td.visible-sm{display:table-cell !important}
}
@media(min-width:768px) and (max-width:991px){.visible-sm-block{display:block !important}
}
@media(min-width:768px) and (max-width:991px){.visible-sm-inline{display:inline !important}
}
@media(min-width:768px) and (max-width:991px){.visible-sm-inline-block{display:inline-block !important}
}
@media(min-width:992px) and (max-width:1199px){.visible-md{display:block !important}
table.visible-md{display:table !important}
tr.visible-md{display:table-row !important}
th.visible-md,td.visible-md{display:table-cell !important}
}
@media(min-width:992px) and (max-width:1199px){.visible-md-block{display:block !important}
}
@media(min-width:992px) and (max-width:1199px){.visible-md-inline{display:inline !important}
}
@media(min-width:992px) and (max-width:1199px){.visible-md-inline-block{display:inline-block !important}
}
@media(min-width:1200px){.visible-lg{display:block !important}
table.visible-lg{display:table !important}
tr.visible-lg{display:table-row !important}
th.visible-lg,td.visible-lg{display:table-cell !important}
}
@media(min-width:1200px){.visible-lg-block{display:block !important}
}
@media(min-width:1200px){.visible-lg-inline{display:inline !important}
}
@media(min-width:1200px){.visible-lg-inline-block{display:inline-block !important}
}
@media(max-width:767px){.hidden-xs{display:none !important}
}
@media(min-width:768px) and (max-width:991px){.hidden-sm{display:none !important}
}
@media(min-width:992px) and (max-width:1199px){.hidden-md{display:none !important}
}
@media(min-width:1200px){.hidden-lg{display:none !important}
}
.visible-print{display:none !important}
@media print{.visible-print{display:block !important}
table.visible-print{display:table !important}
tr.visible-print{display:table-row !important}
th.visible-print,td.visible-print{display:table-cell !important}
}
.visible-print-block{display:none !important}
@media print{.visible-print-block{display:block !important}
}
.visible-print-inline{display:none !important}
@media print{.visible-print-inline{display:inline !important}
}
.visible-print-inline-block{display:none !important}
@media print{.visible-print-inline-block{display:inline-block !important}
}
@media print{.hidden-print{display:none !important}
}
.nc-page--brand-guide .nc-component-container,.nc-page--brand-public .nc-component-container{margin-left:30px;margin-right:30px}
@media screen and (min-width:1140px){.nc-page--brand-guide .nc-component-container,.nc-page--brand-public .nc-component-container{margin-left:215px}
}
@media screen and (min-width:1400px){.nc-page--brand-guide .nc-component-container,.nc-page--brand-public .nc-component-container{margin-left:380px}
}
.nc-component-container.scf{color:black}
.nc-component-container.scf h6,.nc-component-container.scf a,.nc-component-container.scf span,.nc-component-container.scf ul,.nc-component-container.scf li{color:black}
.nc-component-container.scf h5,.nc-component-container.scf a,.nc-component-container.scf span,.nc-component-container.scf ul,.nc-component-container.scf li{color:black}
.nc-component-container.scf h4,.nc-component-container.scf a,.nc-component-container.scf span,.nc-component-container.scf ul,.nc-component-container.scf li{color:black}
.nc-component-container.scf h3,.nc-component-container.scf a,.nc-component-container.scf span,.nc-component-container.scf ul,.nc-component-container.scf li{color:black}
.nc-component-container.scf h2,.nc-component-container.scf a,.nc-component-container.scf span,.nc-component-container.scf ul,.nc-component-container.scf li{color:black}
.nc-component-container.scf h1,.nc-component-container.scf a,.nc-component-container.scf span,.nc-component-container.scf ul,.nc-component-container.scf li{color:black}
.nc-page--intranet .nc-component-container{margin:0 30px;max-width:1440px}
@media screen and (min-width:1500px){.nc-page--intranet .nc-component-container{margin:auto}
}
@media screen and (max-width:959px){.nc-page--brand-guide .nc-page__content,.nc-page--brand-public .nc-page__content{padding-top:60px}
}
.nc-heading-1{margin:0;font-weight:bold;font-size:64px;line-height:68px}
.nc-heading-1--margin-lg{margin-bottom:60px}
.nc-heading-1--margin-md{margin-bottom:30px}
.nc-heading-1--margin-sm{margin-bottom:15px}
@media screen and (max-width:959px){.nc-heading-1{font-size:36px;line-height:40px}
}
.nc-heading-2{margin:0;font-weight:bold;font-size:48px;line-height:54px}
.nc-heading-2--margin-lg{margin-bottom:60px}
.nc-heading-2--margin-md{margin-bottom:30px}
.nc-heading-2--margin-sm{margin-bottom:15px}
@media screen and (max-width:959px){.nc-heading-2{font-size:28px;line-height:32px}
}
.nc-heading-3{margin:0;font-weight:bold;font-size:22px;line-height:28px;margin-bottom:25px}
.nc-heading-3--margin-lg{margin-bottom:60px}
.nc-heading-3--margin-md{margin-bottom:30px}
.nc-heading-3--margin-sm{margin-bottom:15px}
@media screen and (min-width:960px){.nc-heading-3{font-size:30px;line-height:40px;margin-bottom:22px}
}
.nc-heading-4{margin:0;font-weight:bold;font-size:24px;line-height:30px}
.nc-heading-4--margin-lg{margin-bottom:60px}
.nc-heading-4--margin-md{margin-bottom:30px}
.nc-heading-4--margin-sm{margin-bottom:15px}
.nc-heading-5{margin:0;font-weight:bold;font-size:16px;line-height:26px;margin-bottom:13px}
.nc-heading-5--margin-lg{margin-bottom:60px}
.nc-heading-5--margin-md{margin-bottom:30px}
.nc-heading-5--margin-sm{margin-bottom:15px}
@media screen and (min-width:960px){.nc-heading-5{font-size:18px;line-height:28px;margin-bottom:15px}
}
.nc-sidebar{min-height:1px}
@media screen and (min-width:960px){.nc-sidebar{width:19vw;padding-right:30px;float:left}
}
@media screen and (min-width:1101px){.nc-sidebar{width:230px}
.nc-sidebar--placeholder{margin-left:230px}
}
@media screen and (min-width:960px){.nc-sidebar-content{float:left;width:calc(100% - 19vw)}
}
@media screen and (min-width:1101px){.nc-sidebar-content{width:calc(100% - 230px)}
}
.nc-searchbar{margin-bottom:30px;position:relative;display:flex}
.nc-searchbar:before,.nc-searchbar:after{content:" ";display:table}
.nc-searchbar:after{clear:both}
.nc-searchbar:before,.nc-searchbar:after{content:" ";display:table}
.nc-searchbar:after{clear:both}
.nc-searchbar:before,.nc-searchbar:after{content:" ";display:table}
.nc-searchbar:after{clear:both}
.nc-searchbar:before,.nc-searchbar:after{content:" ";display:table}
.nc-searchbar:after{clear:both}
.nc-searchbar__input{float:left;width:calc(100% - 45px);padding:0 20px;border:0;height:45px;background:#f5f5f5}
@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.nc-searchbar__input{padding:0 20px !important}
}
@media screen and (min-width:960px){.nc-searchbar__input{max-width:290px}
}
.nc-searchbar__input::-ms-clear{display:none}
.nc-searchbar__button{display:inline-block;background-color:#feed00;color:#000;transition:background-color 200ms ease;height:70px;line-height:70px;border:0;padding:0 60px;text-transform:uppercase;font-size:12px;font-weight:bold;text-align:center;outline:0;width:45px;height:45px;padding:0;line-height:55px;float:left}
.nc-searchbar__button:hover,.nc-searchbar__button:focus{color:#feed00;background-color:#000}
.nc-searchbar__button .nc-icon--search{top:0}
.nc-searchbar .nc-icon--search{width:20px;height:20px}
.nc-searchbar__clear{background:0;border:0;position:absolute;right:0;right:11px;top:50%;margin-top:-11px;height:22px;width:22px}
.nc-filter--hidden{display:none}
.nc-filter__filters>li{margin-bottom:15px}
.nc-filter__filters>li>a{padding:0 0 0 39px}
.nc-filter__filters>li>a:hover{background:0}
.nc-filter__heading{font-size:14px;line-height:26px;margin:0;margin-bottom:15px}
.nc-filter__heading__hidden{display:none}
.nc-filter__input{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}
.nc-filter__input:hover+.nc-filter__label:before,.nc-filter__input:focus+.nc-filter__label:before{background-color:#e9e9e9}
.nc-filter__input:checked:hover+.nc-filter__label:before,.nc-filter__input:checked:focus+.nc-filter__label:before{border:#000;background:#000}
.nc-filter__input:checked:hover+.nc-filter__label:after,.nc-filter__input:checked:focus+.nc-filter__label:after{border-color:#feed00}
.nc-filter__input:checked+.nc-filter__label:before,.nc-filter .nc-filter__label.checked:before{border:#feed00;background:#feed00}
.nc-filter__input:checked+.nc-filter__label:after,.nc-filter .nc-filter__label.checked:after{display:block}
.nc-filter__label{position:relative;display:block;font-weight:bold;padding-left:39px;cursor:pointer;vertical-align:middle;text-transform:uppercase;font-size:12px;line-height:26px}
.nc-filter__label--error{border:2px solid #fe0000}
.nc-filter__label:before,.nc-filter__label:after{position:absolute;top:0;left:0;content:''}
.nc-filter__label:before{border:1px solid #999;border-radius:3px;width:24px;height:24px;background-color:#f5f5f5;border:2px solid #ebebeb;display:block}
.nc-filter__label:after{top:4px;left:9px;width:7px;height:14px;transform:rotate(45deg);border:3px solid #000;border-top:0;border-left:0;display:none}
.nc-filter__filters--modal-filter .nc-filter__label{display:none}
.nc-filter__filters--modal-filter .nc-filter__input[type="checkbox"]:checked+.nc-filter__label{font-weight:bold;letter-spacing:.9px;text-transform:uppercase;padding:13px 35px 8px 13px;margin-bottom:10px;background-color:#f5f5f5;line-height:1.5em;display:block}
.nc-filter__filters--modal-filter .nc-filter__input[type="checkbox"]:checked+.nc-filter__label:before{display:none}
.nc-filter__filters--modal-filter .nc-filter__input[type="checkbox"]:checked+.nc-filter__label:after{border:0;transform:none;position:absolute;right:25px;left:inherit;top:.3em;content:'×';text-align:right;display:block;padding-right:0;font-size:2.5em;font-weight:100}
.nc-filter__filters--modal-filter .nc-filter__input[type="checkbox"]:checked:hover+.nc-filter__label,.nc-filter__filters--modal-filter .nc-filter__input[type="checkbox"]:checked:focus+.nc-filter__label{background-color:#e9e9e9}
@media screen and (max-width:959px){.nc-filters{display:none}
}
@media screen and (max-width:959px){.nc-filters{position:absolute;top:0;left:0;width:100%;padding:30px;background-color:#f7f7f7;border:1px solid #666;z-index:40}
.nc-filters.collapse.in{display:block !important}
}
.nc-filters__toggle{float:right}
@media screen and (min-width:1101px){.nc-filters__toggle{display:none !important}
}
.nc-filters__close{position:absolute;top:10px;right:10px;border:1px solid black;padding:7.5px 12.5px}
@media screen and (min-width:1101px){.nc-filters__close{display:none}
}
@media screen and (min-width:960px){.nc-sidebar .nc-filters fieldset.nc-filter{margin-bottom:25px}
}
.nc-modal-filter{padding-right:0 !important}
.nc-modal-filter .modal-dialog{margin:20vh auto !important}
@media screen and (max-width:959px){.nc-modal-filter .modal-dialog{height:100%;width:100%;margin:0 !important}
}
.nc-modal-filter button.close{position:absolute;top:15px;right:15px}
.nc-modal-filter__mobile-expand{display:none;float:right;margin-top:20px;margin-right:-15px}
@media screen and (max-width:959px){.nc-modal-filter__mobile-expand{display:inline}
}
.nc-modal-filter__content{background:#fff}
.nc-modal-filter__content:before,.nc-modal-filter__content:after{content:" ";display:table}
.nc-modal-filter__content:after{clear:both}
.nc-modal-filter__content:before,.nc-modal-filter__content:after{content:" ";display:table}
.nc-modal-filter__content:after{clear:both}
.nc-modal-filter__content:before,.nc-modal-filter__content:after{content:" ";display:table}
.nc-modal-filter__content:after{clear:both}
.nc-modal-filter__content:before,.nc-modal-filter__content:after{content:" ";display:table}
.nc-modal-filter__content:after{clear:both}
@media screen and (max-width:959px){.nc-modal-filter__content{height:100%}
}
.nc-modal-filter__header{padding:30px;border-bottom:1px solid #b7b7b7}
.nc-modal-filter__heading{margin:0 !important;font-weight:bold !important;font-size:24px !important;line-height:30px !important}
.nc-modal-filter__badge__hidden{display:none}
.nc-modal-filter__input{background-color:#f5f5f5;padding:15px;border:0;display:block;width:100%;margin-bottom:15px}
.nc-modal-filter__list{display:block;height:245px;border:0;overflow-y:scroll;padding:0}
.nc-modal-filter__aside{width:212px;float:left;height:340px;background-color:#f5f5f5;border-right:1px solid #e9e9e9}
.nc-modal-filter__main{width:calc(100% - 212px);float:left;padding:30px;height:340px}
.nc-modal-filter .nav-tabs{border:0}
.nc-modal-filter .nav-tabs>li{float:none;display:block;border:0;margin:0}
.nc-modal-filter .nav-tabs>li.active{border:0}
.nc-modal-filter .nav-tabs>li.active>a{color:inherit;border:0;background-color:#fff;font-weight:bold;margin-right:-1px;border-top:1px solid #e9e9e9;border-bottom:1px solid #e9e9e9}
.nc-modal-filter .nav-tabs>li:first-child.active>a{border-top:0}
.nc-modal-filter .nav-tabs>li>a{border:0;padding:0 30px;height:60px;line-height:60px;margin:0}
.nc-modal-filter__badge{font-size:12px;float:right;width:24px;height:24px;border:solid 2px #b7b7b7;font-weight:bold;text-align:center;line-height:24px;margin-top:15px;margin-right:-15px}
@media screen and (max-width:959px){.nc-modal-filter__badge{margin-right:15px}
}
.nc-modal-filter__footer{background:#fff;padding:15px 30px;border-top:1px solid #b7b7b7}
.nc-modal-filter__footer:before,.nc-modal-filter__footer:after{content:" ";display:table}
.nc-modal-filter__footer:after{clear:both}
.nc-modal-filter__footer:before,.nc-modal-filter__footer:after{content:" ";display:table}
.nc-modal-filter__footer:after{clear:both}
.nc-modal-filter__footer:before,.nc-modal-filter__footer:after{content:" ";display:table}
.nc-modal-filter__footer:after{clear:both}
.nc-modal-filter__footer:before,.nc-modal-filter__footer:after{content:" ";display:table}
.nc-modal-filter__footer:after{clear:both}
.nc-modal-filter__footer .nc-button{float:left;width:calc(50% - 15px)}
.nc-modal-filter__footer .nc-button:first-child{margin-right:15px}
.nc-modal-filter__footer .nc-button:last-child{margin-left:15px}
.nc-modal-filter .nc-modal-filter__back-button{display:none;width:100%;margin-right:15px}
.nc-modal-filter .tab-content{overflow:hidden}
@media screen and (max-width:959px){.nc-modal-filter__tab-wrapper{position:relative;width:200%}
}
@media screen and (max-width:959px){.nc-modal-filter__tab-wrapper.right{left:-100%}
}
@media screen and (max-width:959px){.nc-modal-filter__tab-wrapper.left{left:0}
}
@media screen and (max-width:959px){.nc-modal-filter #nc-modal-filter__filters-aside{width:50%}
}
@media screen and (max-width:959px){.nc-modal-filter #nc-modal-filter__filters-main{width:50%}
}
.nc-pagination__pager{padding-left:0;margin:15px 0;list-style:none;text-align:center}
.nc-pagination__pager>li{height:40px;width:40px;line-height:40px;display:inline-block}
.nc-pagination__page-number{background-color:#000;color:#fff;margin:0 30px}
.nc-logo{backface-visibility:hidden;position:fixed;top:0}
.nc-select{-webkit-appearance:none;display:block;width:100%;border:2px solid #000;padding:15px;background:transparent;margin-bottom:15px;font-weight:bold;text-transform:uppercase;height:50px;max-width:280px;padding-right:30px;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAr9JREFUeJzt2jFOG0EYhuHPWOIOnCMVZQ6QijNAkRvFt6BKS5N03AJhiRtAQwpvEF68/tfemfnnn3kf6ZPFro0GrYTewhIAAAAAAAAAAAAAAAAAAAAAAIhqJWkj6db7IHCxWUm6lPQg6dr3LCjsr6Tvq+GHK0mPwyvat5X0TdL24tOFG0lvbkdCKW/aPeutJK0/3XiS9CLph8OhUM5PSffH3rCR9M6a3C/NcKldIHgflqXdn+HZ7lmNLwyIwrZ8RN/4xsXX9358gChsw170ja0PXRwQhW0wo89CFMbdrOizEIUxdzD6xqYicIwojGUy+samIvDQLyQKYzgafUvdyf9fGzu+u8mnlwhRWO+SRJ+FKKxzs6IvlStJz5n/IDZ/z3II9GtJrwsPzpbvVY5f5iEK/Zc9+ixEod+KRJ+FKPRZ0eizEIVl5xJ9FqKwzFyjz0IU5p979FmIwnyrIvosRGGeVRV9FqIw7aqMPgtRmGZVR5+FKFy+6qPPQhSevxDRZyEKz1uo6LMQhactZPRZiMJ5Cx19FqLQXvjosxCF02si+ixE4eE1FX0WonB/TUafhSjcrenosxCFHUSfpeco7CL6LL1GYVfRZ+ktCruMPksvUdh19Fl6iMLuo8/SchQSfTO0GoVE3wlai0Ki7wytRCHRt0ALUUj0LRQ5Com+BKJGIdGXULQoJPoyiBKFRF9GEaKQ6Mus5igk+gqoNQqJvoJqi0Kiz0EtUUj0OaohCok+Z55RSPRVwCsKib6KlI5Coq9CpaKQ6KtYiSgk+iqXMwqJvgByRSHRF0jqKCT6AkoVhURfYCmikOgLbkkUEn0NODcKib6GnBqFRF+D5kYh0dewOVFI9DXuWBQSfR2YikKiryPjKCT6OvQ/CruOvrX3ARw9SXqR9FvSvfNZAAAAAAAAAAAAAAAAAAAAAAAATvYPvwx6o6j7abcAAAAASUVORK5CYII=');background-size:16px 16px;background-repeat:no-repeat;background-position:95%}
.nc-select--dark{color:#fff;border-color:#fff}
.nc-select::-ms-expand{display:none}
.nc-input{display:block;width:100%;border:0;padding:15px;background:#f5f5f5;margin-bottom:15px;font-weight:bold;height:50px}
.nc-input:focus{outline:0}
.nc-input--error{border:2px solid #fe0000}
.nc-input__textarea-wrap{border:2px solid #fe0000 !important}
.nc-input__error-wrap:after{position:absolute;font-family:Glyphicons Halflings;content:"\e101";font-size:18px;top:78px;right:45px;color:#fe0000}
.nc-input--dark{color:#fff;border-color:#fff}
legend.nc-label,.nc-label{color:#4a4a4a;display:block;margin-bottom:15px;font-size:14px;font-weight:bold;border:0}
.nc-button{display:inline-block;background-color:#feed00;color:#000;transition:background-color 200ms ease;height:70px;line-height:70px;border:0;padding:0 60px;text-transform:uppercase;font-size:12px;font-weight:bold;text-align:center;outline:0}
.nc-button:hover,.nc-button:focus{color:#feed00;background-color:#000}
.nc-button--xs{height:30px;padding:0 30px;line-height:30px}
.nc-button--sm{height:40px;line-height:40px;padding:0 15px}
@media screen and (min-width:960px){.nc-button--sm{height:45px;line-height:45px;padding:0 30px}
}
.nc-button--wide{padding-left:10px;padding-right:10px;width:100%}
.nc-button--transparent{background-color:transparent;border:1px solid #000}
.nc-collection__heading{margin:0;font-weight:bold;font-size:48px;line-height:54px;margin-bottom:60px}
@media screen and (max-width:959px){.nc-collection__heading{font-size:28px;line-height:32px}
}
.nc-collection__subheading{margin:0;font-weight:bold;font-size:16px;line-height:26px;margin-bottom:13px;text-transform:capitalize;margin-bottom:5px}
@media screen and (min-width:960px){.nc-collection__subheading{font-size:18px;line-height:28px;margin-bottom:15px}
}
.nc-collection__categories{list-style:none;margin:0;padding:0}
.nc-collection__category{margin-bottom:60px}
.nc-collection__link{font-size:12px;line-height:1.67;font-weight:bold;color:inherit;text-transform:uppercase;letter-spacing:.06em;position:relative;font-family:'proxima-nova','arial','helvetica',sans-serif;display:inline-block;line-height:1px;vertical-align:middle;margin-left:30px}
.nc-collection-category__heading{margin:0;font-weight:bold;font-size:48px;line-height:54px;margin-bottom:60px}
@media screen and (max-width:959px){.nc-collection-category__heading{font-size:28px;line-height:32px}
}
.nc-collection-category__subheading{margin:0;font-weight:bold;font-size:16px;line-height:26px;margin-bottom:13px;text-transform:capitalize;margin-bottom:5px}
@media screen and (min-width:960px){.nc-collection-category__subheading{font-size:18px;line-height:28px;margin-bottom:15px}
}
.nc-collection-category__categories{list-style:none;margin:0;padding:0}
.nc-collection-category__category{margin-bottom:60px}
.nc-collection-category__link{font-size:12px;line-height:1.67;font-weight:bold;color:inherit;text-transform:uppercase;letter-spacing:.06em;position:relative;font-family:'proxima-nova','arial','helvetica',sans-serif;display:inline-block}
.nc-asset-list{margin:0;padding:0;margin-bottom:30px;margin-right:-30px;list-style:none}
.nc-asset-list:before,.nc-asset-list:after{content:" ";display:table}
.nc-asset-list:after{clear:both}
.nc-asset-list:before,.nc-asset-list:after{content:" ";display:table}
.nc-asset-list:after{clear:both}
.nc-asset-list:before,.nc-asset-list:after{content:" ";display:table}
.nc-asset-list:after{clear:both}
.nc-asset-list:before,.nc-asset-list:after{content:" ";display:table}
.nc-asset-list:after{clear:both}
@media screen and (max-width:959px){.nc-asset-list{margin-right:0}
}
.nc-asset-list__asset{float:left;margin-right:30px;margin-bottom:30px}
@media screen and (max-width:959px){.nc-asset-list__asset{float:none;margin-right:0;text-align:center;width:100%;border:0}
}
.nc-asset-list__asset img{border:1px solid #e5e5e5;height:250px;width:250px;object-fit:cover}
@media screen and (max-width:959px){.nc-asset-list__asset img{margin:auto}
}
.nc-asset-list__asset-description{width:250px;text-overflow:ellipsis;padding-top:5px;overflow:hidden;height:2em;white-space:nowrap}
.nc-asset-view{width:100%;display:none;position:fixed;top:0;background:#fff;bottom:0;left:0;z-index:40;padding-top:60px}
.nc-asset-view__heading{margin:0;font-weight:bold;font-size:48px;line-height:54px}
@media screen and (max-width:959px){.nc-asset-view__heading{font-size:28px;line-height:32px}
}
.nc-asset-view__description{font-size:16px;line-height:26px;margin-bottom:30px}
@media screen and (max-width:959px){.nc-asset-view__description{font-size:14px;line-height:22px}
}
.nc-asset-view__back{font-size:14px;line-height:30px;font-weight:bold;color:inherit;text-transform:uppercase;letter-spacing:.06em;position:relative;font-family:'proxima-nova','arial','helvetica',sans-serif;margin-left:30px}
.nc-asset-view__back:after{content:'';width:0;height:0;background-color:transparent;position:absolute;left:-29px;top:-1px;border-right:12px solid #000;border-bottom:7px solid transparent;border-top:7px solid transparent}
.nc-asset-view__image{width:100%}
.nc-asset-view__asset-container{margin-top:60px;width:50%;float:left}
@media screen and (max-width:959px){.nc-asset-view__asset-container{margin-top:30px;width:auto;float:none}
}
.nc-asset-view__text-container{margin-top:100px;float:left;width:50%;padding-left:60px;padding-right:30px}
@media screen and (max-width:959px){.nc-asset-view__text-container{margin-top:15px;float:none;width:auto;padding:0}
}
.nc-text h1{margin:0;font-weight:bold;font-size:22px;line-height:28px;margin-bottom:25px}
@media screen and (min-width:960px){.nc-text h1{font-size:30px;line-height:40px;margin-bottom:22px}
}
.nc-text h2{margin:0;font-weight:bold;font-size:24px;line-height:30px}
.nc-text h3{margin:0;font-weight:bold;font-size:16px;line-height:26px;margin-bottom:13px}
@media screen and (min-width:960px){.nc-text h3{font-size:18px;line-height:28px;margin-bottom:15px}
}
.nc-text p{font-size:16px;line-height:26px;margin-bottom:15px}
@media screen and (max-width:959px){.nc-text p{font-size:14px;line-height:22px}
}
.nc-text h1,.nc-text h2,.nc-text h3,.nc-text h4,.nc-text h5{margin-bottom:15px}
.nc-text ul li{font-size:16px;line-height:26px;margin-bottom:7.5px}
@media screen and (max-width:959px){.nc-text ul li{font-size:14px;line-height:22px}
}
.nc-text a{text-decoration:underline}
.nc-error__page{background-color:rgba(254,0,0,0.04);box-shadow:inset 0 0 0 2px #fe0000;color:#fe0000;font-size:14px;padding:12px 0 15px 15px;margin:15px 0 0}
.nc-error__page:before{font-family:Glyphicons Halflings;content:"\e101";padding-left:5px;padding-right:10px;font-size:18px;top:4px;position:relative;color:#fe0000}
.nc-error--text{color:#fe0000}
.nc-notrack{background:black;color:white;width:100%;display:none}
.nc-notrack .vertical-align{display:inline-flex;display:flex;align-items:center;height:45px}
.nc-notrack__alert{flex:1;transition:all .3s ease;font-size:.8em}
@media screen and (min-width:960px){.nc-notrack__alert{padding-left:0;font-size:13px}
}
@media screen and (min-width:1101px){.nc-notrack__alert{padding-left:50px}
}
.nc-notrack__alert strong{padding-right:5px}
.nc-notrack__left-col{width:35px}
@media screen and (min-width:960px){.nc-notrack__left-col{width:45px}
}
.nc-notrack__side-col{width:32px;flex:0 0 32px}
.nc-notrack .nc-icon__button{display:inline-flex;display:flex;align-items:center}
.nc-notrack .glyphicon-menu-right:last-of-type{left:-10px}
.nc-text table th,.nc-table table th,.nc-text table.table th,.nc-table table.table th{background:black;color:white}
.nc-text table th,.nc-table table th,.nc-text table.table th,.nc-table table.table th,.nc-text table td,.nc-table table td,.nc-text table.table td,.nc-table table.table td{padding:3px 5px;border:1px solid black}
.nc-video-player .modal-dialog{top:50%;transform:translateY(-50%) !important}
.nc-video-player .modal-header{padding:10px 15px 0 15px;border-bottom:0}
.nc-video-player .modal-content{background:black}
.nc-video-player .modal-body{padding:0;margin-top:10px;margin-bottom:-5px}
.nc-video-player .close{font-size:30px;color:white}
.nc-video-player--video{width:100%;height:65vh}
@media screen and (max-width:959px){.nc-video-player--video{height:30vh}
}
.util-no-padding{padding:0}
.util-no-padding--right{padding-right:0}
.util-no-padding--left{padding-left:0}
.util--pull-right{float:right}
.util--pull-left{float:left}
.util--pad-top{padding-top:10px}
.util--pad-bottom{padding-bottom:10px}
.util--relative{position:relative}
.util-no-outline{outline:0}
@media screen and (max-width:959px){.util-hidden-mobile{display:none !important}
}
@media screen and (max-width:959px){.util-visible-desktop{display:none !important}
}
@media screen and (min-width:960px){.util-visible-desktop{display:none !important}
}
@media screen and (min-width:1101px){.util-visible-desktop{display:block !important}
}
@keyframes fade-in{0{opacity:0}
100%{opacity:1}
}
@keyframes fade-out{0{opacity:1}
100%{opacity:0}
}
@keyframes drawer-open{0{transform:translateY(100%);opacity:0}
50%{opacity:1}
100%{transform:translateY(0)}
}
@font-face{font-family:'gt-walsheim-pro';src:url('clientlib-site/fonts/GTWalsheimProRegular.svg') format('svg'),url('clientlib-site/fonts/GTWalsheimProRegular.woff') format('woff');font-weight:normal;font-style:normal}
@font-face{font-family:'gt-walsheim-pro';src:url('clientlib-site/fonts/GTWalsheimProBold.svg') format('svg'),url('clientlib-site/fonts/GTWalsheimProBold.woff') format('woff');font-weight:bold;font-style:normal}
@font-face{font-family:'proxima-nova';src:url('clientlib-site/fonts/ProximaNova-Regular.eot?#iefix') format('embedded-opentype'),url('clientlib-site/fonts/ProximaNova-Regular.otf') format('opentype'),url('clientlib-site/fonts/ProximaNova-Regular.woff') format('woff'),url('clientlib-site/fonts/ProximaNova-Regular.ttf') format('truetype'),url('clientlib-site/fonts/ProximaNova-Regular.svg#ProximaNova-Regular') format('svg');font-weight:normal;font-style:normal}
@font-face{font-family:'proxima-nova';src:url('clientlib-site/fonts/ProximaNova-Bold.eot?#iefix') format('embedded-opentype'),url('clientlib-site/fonts/ProximaNova-Bold.otf') format('opentype'),url('clientlib-site/fonts/ProximaNova-Bold.woff') format('woff'),url('clientlib-site/fonts/ProximaNova-Bold.ttf') format('truetype'),url('clientlib-site/fonts/ProximaNova-Bold.svg#ProximaNova-BoldIt') format('svg');font-weight:bold;font-style:normal}
.nc-icon{display:inline-block;width:30px;height:30px;stroke-width:0;stroke:inherit;fill:inherit}
.nc-icon--search{position:relative;top:4px;pointer-events:none;margin-right:0}
.nc-icon--close{width:16px;height:16px}
.nc-icon--grid{width:23px}
.nc-icon--grid-small{width:14px;height:14px}
.nc-icon--play{vertical-align:middle;width:20px;height:20px}
.nc-icon--play--lg{width:30px;height:30px}
.nc-icon--chat_bubble{vertical-align:middle;width:12px;height:12px}
.nc-icon--list{vertical-align:middle;width:15px;height:15px}
.nc-icon--location-pin{width:12px;height:18px}
.nc-icon--left{margin-right:11px}
.nc-icon--right{margin-left:11px}
.nc-icon__link,.nc-icon__button{border:0}
.nc-icon__link:focus,.nc-icon__button:focus{outline:0}
.nc-icon__link__button--close,.nc-icon__button__button--close{float:right}
.nc-icon__link--black,.nc-icon__button--black{color:#000}
.nc-icon__link--black:hover,.nc-icon__button--black:hover,.nc-icon__link--black:focus,.nc-icon__button--black:focus{color:#767676}
.nc-icon__link--yellow,.nc-icon__button--yellow{color:#000;background-color:#feed00}
.nc-icon__link--yellow:hover,.nc-icon__button--yellow:hover,.nc-icon__link--yellow:focus,.nc-icon__button--yellow:focus{color:#feed00;background-color:#000}
.nc-icon__link--white,.nc-icon__button--white{color:#fff;background:#000}
.nc-icon__link--white:hover,.nc-icon__button--white:hover,.nc-icon__link--white:focus,.nc-icon__button--white:focus{color:#feed00}
#icon-grid,#icon-grid-small,#icon-list,#icon-close,#logo-svg,#icon-menu,#icon-search{fill:currentColor}
#icon-play{fill:#feed00}
#icon-play #arrow{fill:#000}
#icon-chat_bubble{fill:#666}
html,body,.nc-sidenav__content{height:100%}
html.aem-AuthorLayer-Edit,html.aem-AuthorLayer-Preview,html.aem-AuthorLayer-Targeting,html.aem-AuthorLayer-Scaffolding,html.aem-AuthorLayer-Developer,html.aem-AuthorLayer-Design{height:auto;min-height:50vh}
body,body .scf{font-family:'gt-walsheim-pro','arial','helvetica',sans-serif}
a,a:hover,a:focus{color:inherit}
.nc-rte-output p,.nc-rte-output ul,.nc-rte-output li{font-size:16px;line-height:26px}
@media screen and (max-width:959px){.nc-rte-output p,.nc-rte-output ul,.nc-rte-output li{font-size:14px;line-height:22px}
}
.nc-rte-output p{margin-bottom:15px}
@media screen and (min-width:960px){.nc-main,.nc-rail{float:left}
}
@media screen and (min-width:1101px){.nc-main{width:calc(100% - 320px)}
}
@media screen and (min-width:960px) and (max-width:1100px){.nc-main{width:calc(100% - 260px)}
}
.nc-main>.parbase:not(.nc-anchor){margin-bottom:30px}
.nc-rail>.parbase{padding-bottom:30px;border-bottom:1px solid #b7b7b7;margin-bottom:30px}
.nc-rail>.parbase:first-child{padding-top:30px;border-top:1px solid #b7b7b7}
@media screen and (min-width:960px){.nc-rail>.parbase{border:0;padding-bottom:0}
.nc-rail>.parbase:first-child{padding-top:0;border-top:0}
}
@media screen and (min-width:960px){.nc-rail{padding-left:30px}
}
@media screen and (min-width:1101px){.nc-rail{width:320px}
}
@media screen and (min-width:960px) and (max-width:1100px){.nc-rail{width:260px}
}
.modal-header{padding:30px;padding-bottom:0;border-bottom:0}
.modal-body{padding:30px}
.close{opacity:1}
.cq-searchpromote-facet-checkboxlist{margin-bottom:30px}
.pagination>.active>a,.pagination>.active>span,.pagination>.active>a:hover,.pagination>.active>span:hover,.pagination>.active>a:focus,.pagination>.active>span:focus{background-color:#feed00;border-color:#feed00}
.nc-page--page-content-with-sidebar .nc-page__content:before,.nc-page--page-content-with-sidebar .nc-page__content:after{content:" ";display:table}
.nc-page--page-content-with-sidebar .nc-page__content:after{clear:both}
.nc-page--page-content-with-sidebar .nc-page__content:not(.parbase){transition:padding .3s ease;padding:90px 0;background-color:#fff;color:#000}
.nc-page--page-content-with-sidebar .nc-page__content:not(.parbase):before,.nc-page--page-content-with-sidebar .nc-page__content:not(.parbase):after{content:" ";display:table}
.nc-page--page-content-with-sidebar .nc-page__content:not(.parbase):after{clear:both}
@media screen and (min-width:960px){.nc-page--page-content-with-sidebar .nc-page__content:not(.parbase){padding:147px 0 60px}
}
.nc-page--page-content-with-sidebar.nc-page--has-alert .nc-page__content:not(.parbase){transition:padding .3s ease;padding:90px 0;padding-top:135px;background-color:#fff;color:#000}
.nc-page--page-content-with-sidebar.nc-page--has-alert .nc-page__content:not(.parbase):before,.nc-page--page-content-with-sidebar.nc-page--has-alert .nc-page__content:not(.parbase):after{content:" ";display:table}
.nc-page--page-content-with-sidebar.nc-page--has-alert .nc-page__content:not(.parbase):after{clear:both}
@media screen and (min-width:960px){.nc-page--page-content-with-sidebar.nc-page--has-alert .nc-page__content:not(.parbase){padding:147px 0 60px;padding-top:192px}
}
.nc-page__content--narrow{max-width:980px;margin:auto}
.nc-page--content .nc-page__content:before,.nc-page--page-content .nc-page__content:before,.nc-page--content .nc-page__content:after,.nc-page--page-content .nc-page__content:after{content:" ";display:table}
.nc-page--content .nc-page__content:after,.nc-page--page-content .nc-page__content:after{clear:both}
.nc-page--content .nc-page__content:not(.parbase),.nc-page--page-content .nc-page__content:not(.parbase){transition:padding .3s ease;padding:90px 0;background-color:#fff;color:#000}
.nc-page--content .nc-page__content:not(.parbase):before,.nc-page--page-content .nc-page__content:not(.parbase):before,.nc-page--content .nc-page__content:not(.parbase):after,.nc-page--page-content .nc-page__content:not(.parbase):after{content:" ";display:table}
.nc-page--content .nc-page__content:not(.parbase):after,.nc-page--page-content .nc-page__content:not(.parbase):after{clear:both}
@media screen and (min-width:960px){.nc-page--content .nc-page__content:not(.parbase),.nc-page--page-content .nc-page__content:not(.parbase){padding:147px 0 60px}
}
.nc-page--content.nc-page--has-alert .nc-page__content:not(.parbase),.nc-page--page-content.nc-page--has-alert .nc-page__content:not(.parbase){transition:padding .3s ease;padding:90px 0;padding-top:135px;background-color:#fff;color:#000}
.nc-page--content.nc-page--has-alert .nc-page__content:not(.parbase):before,.nc-page--page-content.nc-page--has-alert .nc-page__content:not(.parbase):before,.nc-page--content.nc-page--has-alert .nc-page__content:not(.parbase):after,.nc-page--page-content.nc-page--has-alert .nc-page__content:not(.parbase):after{content:" ";display:table}
.nc-page--content.nc-page--has-alert .nc-page__content:not(.parbase):after,.nc-page--page-content.nc-page--has-alert .nc-page__content:not(.parbase):after{clear:both}
@media screen and (min-width:960px){.nc-page--content.nc-page--has-alert .nc-page__content:not(.parbase),.nc-page--page-content.nc-page--has-alert .nc-page__content:not(.parbase){padding:147px 0 60px;padding-top:192px}
}
.nc-page__header{padding:0 0 20px 0;border-bottom:1px solid #999;margin-bottom:20px}
.nc-page__header h1{display:inline-block}
.nc-page__content{min-height:100%}
.nc-page__footer{background-color:#000;color:#fff;padding:20px 0}
.nc-page__footer .nav>li>a{background-color:transparent;padding:0;margin-right:15px}
.nc-page__footer .nav>li>a:focus,.nc-page__footer .nav>li>ahover{text-decoration:underline}
.body--no-scroll{overflow-y:scroll}
.wrapper{height:100%}
.nc-redirect{margin:0;font-weight:bold;font-size:16px;line-height:26px;margin-bottom:13px;text-align:center;position:absolute;top:40%;left:50%;transform:translateY(-50%) translateX(-50%)}
@media screen and (min-width:960px){.nc-redirect{font-size:18px;line-height:28px;margin-bottom:15px}
}
.nc-redirect--active a{font-weight:bold;font-size:20px;color:inherit;padding:2px 10px;background-color:#feed00;display:inline-block}
@media screen and (max-width:959px){.nc-redirect--active a{font-size:16px}
}
.nc-topnav{height:60px;margin:0;color:#000;z-index:20;width:100%;position:fixed}
@media screen and (max-width:959px){.nc-topnav{border-bottom:2px solid #000;background-color:#fff}
}
@media screen and (min-width:960px){.nc-topnav{height:87px;position:absolute}
}
.nc-topnav__button{float:left;padding:5px 15px;background:0;border:0}
@media screen and (min-width:960px){.nc-topnav__button{padding:10px 15px;margin:5px 0}
}
.nc-topnav .open .nc-topnav__button{background-color:#feed00}
.nc-topnav .nc-svg{fill:#000;height:auto;width:40px}
@media screen and (min-width:1140px){.nc-topnav .nc-svg{width:102px}
}
@media screen and (min-width:1400px){.nc-topnav .nc-svg{width:182px;height:124px}
}
.nc-topnav .nc-svg--mydxc{display:none}
.nc-topnav .navbar-brand{padding:30px;left:0;top:0;position:absolute;height:auto}
@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.nc-topnav .navbar-brand{height:100px}
}
@media screen and (max-width:959px) and (-ms-high-contrast:none),(-ms-high-contrast:active){.nc-topnav .navbar-brand{height:67px}
}
@media screen and (min-width:1101px){.nc-topnav .navbar-brand{position:fixed}
}
@media screen and (max-width:959px){.nc-topnav .navbar-brand{padding:18px 30px}
}
.nc-topnav .navbar-nav{float:right}
@media screen and (max-width:959px){.nc-topnav .navbar-nav{margin-top:5px;margin-bottom:5px}
}
.nc-topnav .navbar-nav li{float:left}
@media screen and (min-width:960px){.nc-topnav .nc-component-container{border-bottom:1px solid #000;padding-top:10px;padding-bottom:10px}
}
.nc-topnav .glyphicon{font-size:30px}
.nc-topnav li.dropdown{position:static}
.nc-topnav #quick-links{min-width:240px;background-color:#000;padding:15px}
.nc-topnav #quick-links>li{float:none;display:block}
.nc-topnav #quick-links>li>a{padding:15px;color:#fff;line-height:normal}
.nc-topnav #quick-links>li>a:hover,.nc-topnav #quick-links>li>a:focus,.nc-topnav #quick-links>li>a:active{text-decoration:underline;background-color:transparent}
.nc-topnav #quick-links li.all{width:100%;margin-top:15px;font-weight:bold}
.nc-topnav #quick-links li.all>a{display:inline-block;background-color:#feed00;color:#000;transition:background-color 200ms ease;height:70px;line-height:70px;border:0;padding:0 60px;text-transform:uppercase;font-size:12px;font-weight:bold;text-align:center;outline:0;height:50px;line-height:50px;padding:0 30px;width:100%}
.nc-topnav #quick-links li.all>a:hover,.nc-topnav #quick-links li.all>a:focus{color:#feed00;background-color:#000}
.nc-topnav #quick-links:after{position:absolute;top:-15px;right:76px;content:'';display:block;width:0;height:0;border-left:10px solid transparent;border-bottom:15px solid #000;border-right:10px solid transparent}
@media screen and (min-width:960px){.nc-topnav--dark{color:#fff}
.nc-topnav--dark .nc-icon,.nc-topnav--dark .nc-svg{fill:#fff !important;color:#fff}
.nc-topnav--dark .nc-topnav__breadcrumbs li>a:after{border-left-color:#fff}
.nc-topnav--dark .nc-component-container{border-bottom:1px solid #fff}
}
.nc-topnav .nav>li>a{color:inherit;outline:0;background-color:transparent}
.nc-topnav .nav>li>a:hover,.nc-topnav .nav>li>a:focus{text-decoration:underline}
.nc-topnav__breadcrumbs{margin-left:60px}
.nc-topnav__breadcrumbs li>a{padding:15px 7.5px}
@media screen and (min-width:960px){.nc-topnav__breadcrumbs li>a{line-height:35px}
}
.nc-topnav__breadcrumbs li>a:after{content:'';display:inline-block;width:0;height:0;border-left:7px solid #000;border-top:5px solid transparent;border-bottom:5px solid transparent;margin-left:15px}
.nc-topnav__breadcrumbs li:first-child>a{padding-left:0}
.nc-topnav__breadcrumbs li:last-child>a:after{display:none}
@media screen and (min-width:1140px){.nc-topnav__breadcrumbs{margin-left:0}
}
.nc-topnav__breadcrumbs li{display:none}
.nc-topnav__breadcrumbs li:last-child{display:block}
@media screen and (min-width:960px){.nc-topnav__breadcrumbs li{display:block}
.nc-topnav__breadcrumbs li:last-child{font-weight:normal}
}
.nc-page--intranet .nc-topnav{background:#fff;transition:padding .3s ease;position:fixed;z-index:20}
@media screen and (min-width:960px){.nc-page--intranet .nc-topnav{padding-left:19vw}
}
@media screen and (min-width:1101px){.nc-page--intranet .nc-topnav{padding-left:230px}
}
.nc-page--intranet .nc-topnav__breadcrumbs{margin-left:120px}
@media screen and (max-width:959px){.nc-page--intranet .nc-topnav__breadcrumbs li{display:none}
}
.nc-page--intranet .nc-topnav .nc-svg{height:auto;transition:all .3s ease;width:102px}
@media screen and (min-width:960px){.nc-page--intranet .nc-topnav .nc-svg{width:16vw;max-width:180px}
}
.nc-page--intranet .nc-topnav .nc-svg--brandsite{display:none}
.nc-page--intranet .nc-topnav .nc-svg--mydxc{display:block}
.nc-page--intranet .nc-topnav .navbar-brand{padding:15px 0;transition:left .3s ease}
@media screen and (min-width:960px){.nc-page--intranet .nc-topnav .navbar-brand{padding:20px 0;position:absolute;left:-19vw}
}
@media screen and (min-width:1101px){.nc-page--intranet .nc-topnav .navbar-brand{left:-230px}
}
.nc-page--intranet .nc-topnav .nc-component-container{position:relative;transition:max-width .3s ease}
@media screen and (min-width:960px){.nc-page--intranet .nc-topnav .nc-component-container{max-width:1081px}
}
@media screen and (min-width:1101px){.nc-page--intranet .nc-topnav .nc-component-container{max-width:1210px}
}
.nc-page--intranet .nc-topnav__breadcrumbs{transition:margin .3s ease}
@media screen and (min-width:960px){.nc-page--intranet .nc-topnav__breadcrumbs{margin-left:0}
}
@media screen and (min-width:960px){.nc-page--intranet .nc-topnav--collapsed{padding-left:0}
.nc-page--intranet .nc-topnav--collapsed .navbar-brand{left:0}
.nc-page--intranet .nc-topnav--collapsed .nc-svg{width:115px;margin-top:7px}
.nc-page--intranet .nc-topnav--collapsed .nc-topnav__breadcrumbs{margin-left:145px}
.nc-page--intranet .nc-topnav--collapsed .nc-component-container{max-width:1100px}
}
@media screen and (min-width:1101px){.nc-page--intranet .nc-topnav--collapsed .nc-component-container{max-width:1440px}
}
@media screen and (max-width:959px) and (-ms-high-contrast:none),(-ms-high-contrast:active){.nc-page--intranet .nc-topnav--collapsed .navbar-brand{height:60px}
}
@media screen and (min-width:1101px) and (-ms-high-contrast:none),(-ms-high-contrast:active){.nc-page--intranet .nc-topnav--collapsed .navbar-brand{height:72px}
}
@media screen and (min-width:960px){html.mix-blend-mode-on .nc-page--brand-guide .nc-topnav{color:#fff;mix-blend-mode:difference}
html.mix-blend-mode-on .nc-page--brand-guide .nc-topnav .nc-svg,html.mix-blend-mode-on .nc-page--brand-guide .nc-topnav .nc-icon{fill:#fff}
html.mix-blend-mode-on .nc-page--brand-guide .nc-topnav .nc-component-container{border-bottom:1px solid #fff}
html.mix-blend-mode-on .nc-page--brand-guide .nc-topnav__breadcrumbs li>a:after{border-left-color:#fff}
}
@media screen and (max-width:959px){.nc-subnav{position:absolute;top:60px;width:100%;background-color:#fff}
}
.nc-subnav .nc-component-container{border:0;padding:0}
@media screen and (max-width:959px){.nc-subnav .nc-component-container{margin:0}
}
.nc-subnav__mobile-toggle{display:block;width:100%;height:60px;line-height:60px;text-transform:uppercase;font-weight:bold;background:transparent;border:0;text-align:left;padding:0 30px;border-bottom:1px solid #c6c6c6}
.nc-subnav__mobile-toggle .nc-subnav__icon{float:right;margin-top:20px}
@media screen and (min-width:960px){.nc-subnav__mobile-toggle{display:none}
}
.nc-subnav__close{background:0;border:0;position:absolute;right:30px;top:30px}
@media screen and (min-width:960px){.nc-subnav__close{display:none}
}
.nc-subnav__wrapper{display:flex}
.nc-subnav__wrapper.in{display:block}
@media screen and (max-width:959px){.nc-subnav__wrapper{display:none;position:fixed;top:0;left:0;width:100%;height:100%;padding:90px 30px;background-color:#fff}
}
.nc-subnav .dropdown .glyphicon-triangle-top{display:none}
@media screen and (min-width:960px){.nc-subnav .open>a.dropdown-toggle{border-left:1px solid #ddd;border-right:1px solid #ddd;padding-left:15px;margin-left:-15px;margin-right:-15px;padding-right:15px;background:#e9e9e9;z-index:1111;margin-bottom:-1px;text-decoration:none !important}
}
.nc-subnav .open.dropdown .glyphicon-triangle-top{display:inline-block}
.nc-subnav .open.dropdown .glyphicon-triangle-bottom{display:none}
@media screen and (min-width:960px){.nc-subnav .open>.dropdown-menu{display:block;padding:15px;left:-15px;margin:0;box-shadow:none;min-width:125%}
.nc-subnav .open>.dropdown-menu>li>a{text-transform:none;padding:15px 20px;border-bottom:1px solid #b7b7b7}
.nc-subnav .open>.dropdown-menu>li>a:last-child{border-bottom:0}
}
@media screen and (max-width:959px){.nc-subnav .open>.dropdown-menu{display:block;position:relative;float:none;background:0;border:0;box-shadow:none;padding:15px 30px;padding-bottom:0}
.nc-subnav .open>.dropdown-menu>li>a{background:0;padding:7.5px 0}
.nc-subnav .open>.dropdown-menu>li{margin-bottom:15px}
}
.nc-subnav .nav{background:#fff}
@media screen and (min-width:960px){.nc-subnav .nav{display:inline-block;vertical-align:top}
}
@media screen and (min-width:960px){.nc-subnav__subnav-more-section .open>.dropdown-menu{min-width:350%}
}
.nc-subnav__subnav-more-section .open>.dropdown-menu .nc-subnav__panel-trigger{border:0;position:relative;background-color:#f5f5f5}
.nc-subnav__subnav-more-section .open>.dropdown-menu .nc-subnav__panel-trigger.collapsed{background-color:#fff}
.nc-subnav__subnav-more-section .open>.dropdown-menu .nc-subnav__panel-trigger.collapsed .glyphicon-triangle-top{display:none}
.nc-subnav__subnav-more-section .open>.dropdown-menu .nc-subnav__panel-trigger.collapsed .glyphicon-triangle-bottom{display:block}
.nc-subnav__subnav-more-section .open>.dropdown-menu .nc-subnav__panel-trigger:hover{background-color:#f5f5f5}
.nc-subnav__subnav-more-section .open>.dropdown-menu .nc-subnav__panel-trigger .glyphicon-triangle-top{display:block}
.nc-subnav__subnav-more-section .open>.dropdown-menu .nc-subnav__panel-trigger .glyphicon-triangle-bottom{display:none}
.nc-subnav__subnav-more-section .open>.dropdown-menu .nc-subnav__panel-trigger .nc-subnav__icon{top:50%;right:0;position:absolute;transform:translateY(-50%)}
.nc-subnav__subnav-more-section .open>.dropdown-menu .nc-subnav__collapse-panel ul{padding:15px;list-style:none}
.nc-subnav__subnav-more-section .open>.dropdown-menu .nc-subnav__collapse-panel li{font-size:12px;margin-bottom:7px}
.nc-subnav__subnav-more-section .open>.dropdown-menu .nc-subnav__collapse-panel li:last-child{margin-bottom:0}
.nc-subnav__icon{font-size:12px !important;float:right;margin-top:2px;margin-left:5px}
.nc-subnav .nav>li{float:left;text-transform:uppercase;letter-spacing:.9px;font-weight:bold;margin-right:30px;position:relative}
@media screen and (max-width:959px){.nc-subnav .nav>li{float:none;display:block;margin-bottom:30px}
}
.nc-subnav .nav>li>a{font-size:12px;padding:10px 0 5px;line-height:20px}
@media screen and (max-width:959px){.nc-subnav .nav>li>a{padding:7.5px 0}
}
.nc-subnav .nav>li.active{border-bottom:3px solid #000}
@media screen and (max-width:959px){.nc-subnav .nav>li.active{border-bottom:0}
.nc-subnav .nav>li.active>a{text-decoration:underline}
}
.nc-subnav .caret{margin-top:-6px}
.nc-subnav .dropdown-menu>li>a{text-transform:none}
.nc-sidenav{border-left:1px solid #ccc;width:365px;position:fixed;right:0;display:block;-webkit-transform:translate(365px,0);-ms-transform:translate(365px,0);-o-transform:translate(365px,0);transform:translate(365px,0);-webkit-transition:transform 300ms ease;-o-transition:transform 300ms ease;transition:transform 300ms ease;height:100%;z-index:30;background-color:#fff;overflow:auto;padding:30px;top:0}
.nc-sidenav__overlay{display:block;position:fixed;right:365px;top:0;width:100%;height:100%;background-color:rgba(255,255,255,0.4);content:'';opacity:0;pointer-events:none;z-index:29}
@media screen and (max-width:959px){.nc-sidenav__overlay{display:none}
}
.nc-sidenav__overlay--visible{-webkit-transition:opacity 150ms ease 300ms;-o-transition:opacity 150ms ease 300ms;transition:opacity 150ms ease 300ms;opacity:1;pointer-events:unset}
.nc-sidenav__close-btn{padding:0;background:0;border:0;position:absolute;top:30px;right:45px}
.nc-sidenav__close-btn .nc-icon{width:30px;height:30px}
.nc-sidenav--visible{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);transform:translate(0,0);pointer-events:unset}
@media screen and (max-width:959px){.nc-sidenav--visible{width:100%;left:0}
}
.nc-sidenav__content{background:white}
.nc-sidenav__content,.nc-sidenav .nc-page__footer{width:100%;transition:padding 300ms ease}
.nc-sidenav__top-level-nav,.nc-sidenav__inner-nav{margin:0;padding:0;list-style:none}
.nc-sidenav__root-link{margin-top:60px;font-weight:bold;display:block;padding:15px 0;font-size:16px}
.nc-sidenav__root-link--logout{margin-top:0;margin-bottom:60px}
.nc-sidenav__spacer{height:60px}
.nc-sidenav__nav-item>a{display:block;padding:15px 30px;color:#000;text-decoration:none;font-weight:bold;font-size:16px;margin:0 -30px}
.nc-sidenav__nav-item>a:hover,.nc-sidenav__nav-item>a:focus{background-color:#f5f5f5;outline:0}
.nc-sidenav__nav-item .nc-sidenav__nav-item>a{padding-left:60px;font-weight:normal}
.nc-sidenav__nav-item .nc-sidenav__nav-item .nc-sidenav__nav-item>a{padding-left:75px;background:#f5f5f5;margin-left:-30px;margin-right:-30px;font-weight:normal}
.nc-sidenav__nav-item .nc-sidenav__nav-item .nc-sidenav__nav-item>a:hover,.nc-sidenav__nav-item .nc-sidenav__nav-item .nc-sidenav__nav-item>a:focus{background:#e9e9e9}
.nc-sidenav__inner-nav{display:none}
.nc-sidenav__inner-nav .nc-sidenav__nav-item>a{background-color:#f5f5f5}
.nc-sidenav__inner-nav .nc-sidenav__nav-item>a:hover,.nc-sidenav__inner-nav .nc-sidenav__nav-item>a:focus{background:#e9e9e9}
.nc-sidenav__section-toggle .glyphicon-triangle-top{display:none}
.nc-sidenav__section-toggle--active .glyphicon-triangle-bottom{display:none}
.nc-sidenav__section-toggle--active .glyphicon-triangle-top{display:block}
.nc-sidenav__section-toggle--active+.nc-sidenav__inner-nav{display:block}
.nc-sidenav__icon{float:right}
.scf-commentsystem{color:black !important}
.scf-commentsystem .scf-comments-list{marin-top:40px}
.scf-commentsystem .scf-comments-list,.scf-commentsystem .scf-comments-list:last-child{border-top:1px solid #999}
.scf-commentsystem .scf-comments-list .reply-component{display:none !important}
.scf-commentsystem .scf-comment-data.withTopLevel>.scf-comment-body>.scf-comment-toolbar>.reply-component{display:inline-block !important}
.scf-commentsystem .scf-comment-data.withTopLevel>.scf-comment-body>.scf-comment-toolbar>.reply-component--block{display:block !important}
.scf-commentsystem .scf-link{color:black;text-transform:uppercase;font-weight:bold}
.scf-commentsystem .scf-comment-msg{padding:15px 0}
.scf-commentsystem h2.reply-header{margin:0;font-size:16px;line-height:26px;margin-bottom:13px;color:#000;font-weight:bold;margin-top:30px;margin-bottom:0 !important}
@media screen and (min-width:960px){.scf-commentsystem h2.reply-header{font-size:18px;line-height:28px;margin-bottom:15px}
}
.scf-commentsystem .scf-js-comment-reply-box .cke{border:1px solid #a0a0a0}
.scf-commentsystem .scf-comment-data{margin-left:0}
.scf-commentsystem .scf-comment-replies .scf-comments-list{margin-top:30px}
.scf-commentsystem .reply{float:left}
.scf-commentsystem textarea{padding:15px}
.news-comments__title{font-weight:bold}
.news-comments__buttons{text-align:left !important}
.news-comments__post-button{height:30px;width:189px;font-size:12px;line-height:12px}
.news-comments__comment-author{font-weight:bold;text-transform:uppercase}
.news-comments__composer-block{margin-bottom:15px}
.news-comments textarea{outline:none !important}
.scf a.scf-page{border:0;background:black;color:white;min-width:24px;text-align:center}
.scf a.scf-currentPage{color:black;background:transparent}
.scf .scf-link{color:black !important}
.scf-is-new{background-color:transparent !important}
.nc-upcoming-calendar__heading{margin:0;font-weight:bold;font-size:16px;line-height:26px;margin-bottom:13px;margin-bottom:15px}
@media screen and (min-width:960px){.nc-upcoming-calendar__heading{font-size:18px;line-height:28px;margin-bottom:15px}
}
.nc-upcoming-calendar__events{list-style:none;padding-left:15px;line-height:3em}
.nc-upcoming-calendar__event{padding-left:5em;position:relative}
.nc-upcoming-calendar__no-results{padding:10px 0}
.nc-upcoming-calendar__date-string{position:absolute;left:0;min-width:55px;display:inline-block;text-transform:uppercase;font-weight:bold;color:#999;margin-right:10px}
.nc-upcoming-calendar__title-string{line-height:1.5em;display:inline-block}
.nc-two-col-one-row{padding:0}
.nc-top-questions__heading{margin:0;font-weight:bold;font-size:16px;line-height:26px;margin-bottom:13px;margin-bottom:15px;margin-top:15px;display:block}
@media screen and (min-width:960px){.nc-top-questions__heading{font-size:18px;line-height:28px;margin-bottom:15px}
}
@media screen and (min-width:1101px){.nc-top-questions__heading{margin-bottom:14px;margin-top:0}
}
.nc-top-questions__list{list-style:none;padding:0;margin:0 60px 0 15px;font-size:14px;line-height:22px}
.nc-top-questions__list-item{display:block;position:relative;margin-bottom:18px}
.nc-top-questions__list-item a{font-weight:bold;padding:5px 5px 5px 0}
.nc-top-questions__list-item>a i{position:absolute;right:15px;top:50%;margin-top:-7px}
.nc-top-questions__responses{color:#a7a7a7;margin-top:5px}
.nc-top-links__list{padding:0;margin:0;list-style:none;margin-left:15px}
.nc-top-links__list-item{margin-bottom:15px}
.nc-top-links__heading{margin:0;font-weight:bold;font-size:16px;line-height:26px;margin-bottom:13px;margin-bottom:15px}
@media screen and (min-width:960px){.nc-top-links__heading{font-size:18px;line-height:28px;margin-bottom:15px}
}
.nc-top-links__paragraph{font-size:16px;line-height:26px;margin-bottom:30px}
@media screen and (max-width:959px){.nc-top-links__paragraph{font-size:14px;line-height:22px}
}
.nc-top-links__link{font-size:12px;line-height:1.67;font-weight:bold;color:inherit;text-transform:uppercase;letter-spacing:.06em;position:relative;font-family:'proxima-nova','arial','helvetica',sans-serif;display:inline-block;padding-left:32px}
.nc-top-links__link .nc-icon{margin-left:-35px}
.nc-three-col-one-row{padding:0}
.nc-tag-link-list__list-container{margin:0;padding:0;list-style:none}
.nc-tag-link-list__list-item{width:48%;height:40px;display:inline-block}
.nc-tag-link-list__heading{margin:0;font-size:30px;line-height:40px;font-weight:bold;margin-bottom:20px}
.nc-stock-ticker__widget{border-top:1px solid #b7b7b7;border-bottom:1px solid #b7b7b7;padding:35px 0;max-width:500px}
.nc-stock-ticker__heading{margin:0;font-weight:bold;font-size:16px;line-height:26px;margin-bottom:13px;margin-bottom:15px}
@media screen and (min-width:960px){.nc-stock-ticker__heading{font-size:18px;line-height:28px;margin-bottom:15px}
}
.nc-stock-ticker__results{padding-left:14px}
.nc-stock-ticker__left-content{float:left}
.nc-stock-ticker__right-content{float:right}
.nc-stock-ticker__symbol{margin-bottom:2px;font-weight:bold;font-size:18px}
.nc-stock-ticker__last-price{position:relative;margin-bottom:2px;font-size:20px}
.nc-stock-ticker__last-price:before{content:" ";width:0;height:0;border-style:solid;border-width:6px 6px 0 6px;border-color:#fe0000 transparent transparent transparent;position:absolute;left:-20px;top:10px}
.nc-stock-ticker__last-price--up:before{border-color:#73cc00 transparent transparent transparent;transform:rotate(180deg)}
.nc-stock-ticker__date{font-size:12px;color:#767676}
.nc-stock-ticker__change{font-size:12px;color:#fe0000}
.nc-stock-ticker__change--up{color:#73cc00}
.nc-rss-feed__title{font-size:18px;font-weight:bold;line-height:28px;margin-bottom:15px;text-transform:capitalize}
.nc-rss-feed__feed-container{margin:0;padding:0 0 0 15px}
.nc-rss-feed__feed-item{line-height:1.8em;list-style:none}
.nc-rss-feed__item-link{font-weight:bold}
.nc-rss-feed__item-date{color:#a7a7a7}
.nc-recent-qa__heading{margin:0;font-weight:bold;font-size:16px;line-height:26px;margin-bottom:13px;margin-bottom:15px;margin-top:15px;display:block}
@media screen and (min-width:960px){.nc-recent-qa__heading{font-size:18px;line-height:28px;margin-bottom:15px}
}
@media screen and (min-width:1101px){.nc-recent-qa__heading{margin-bottom:14px;margin-top:0}
}
.nc-recent-qa__list{list-style:none;padding:0;margin:0 60px 0 15px;font-size:14px;line-height:22px}
.nc-recent-qa__list-item{display:block;position:relative;margin-bottom:18px}
.nc-recent-qa__list-item a{font-weight:bold;padding:5px 5px 5px 0}
.nc-recent-qa__list-item>a i{position:absolute;right:15px;top:50%;margin-top:-7px}
.nc-recent-qa__responses{color:#a7a7a7;margin-top:5px}
@media screen and (min-width:1101px){.nc-recent-links{border:0;padding:0}
}
.nc-recent-links__list{padding:0;margin:0;list-style:none;margin-left:15px}
.nc-recent-links__list-item{margin-bottom:15px}
.nc-recent-links__heading{margin:0;font-weight:bold;font-size:16px;line-height:26px;margin-bottom:13px;margin-bottom:15px}
@media screen and (min-width:960px){.nc-recent-links__heading{font-size:18px;line-height:28px;margin-bottom:15px}
}
.nc-recent-links__link{font-size:12px;line-height:1.67;font-weight:bold;color:inherit;text-transform:uppercase;letter-spacing:.06em;position:relative;font-family:'proxima-nova','arial','helvetica',sans-serif;display:inline-block;padding-left:32px}
.nc-recent-links__link .nc-icon{margin-left:-35px}
.nc-pinned-questions{position:relative}
.nc-pinned-questions:not(.no-search){margin-top:30px}
@media screen and (min-width:960px){.nc-pinned-questions:not(.no-search){margin-top:60px}
}
@media screen and (min-width:1101px){.nc-pinned-questions:not(.no-search){margin-top:100px}
}
.nc-pinned-questions>.nc-pinned-questions:first-child{margin-top:0}
.nc-pinned-questions__heading{margin:0;font-weight:bold;font-size:16px;line-height:26px;margin-bottom:13px;margin-bottom:0}
@media screen and (min-width:960px){.nc-pinned-questions__heading{font-size:18px;line-height:28px;margin-bottom:15px}
}
.nc-pinned-questions__list{list-style:none;padding:0}
.nc-pinned-questions__list-item{display:block;padding:15px 60px 15px 15px;margin-bottom:5px;font-size:14px;font-weight:bold;line-height:22px;position:relative}
.nc-pinned-questions__list-item span{display:block;color:#a7a7a7;margin-top:5px}
.nc-pinned-questions__list-item>a i{position:absolute;right:15px;top:50%;margin-top:-7px}
.nc-link-list__list{padding:0;margin:0;list-style:none}
.nc-link-list__list-item{margin-bottom:24px}
.nc-link-list__heading{margin:0;font-weight:bold;font-size:16px;line-height:26px;margin-bottom:13px;margin-bottom:36px}
@media screen and (min-width:960px){.nc-link-list__heading{font-size:18px;line-height:28px;margin-bottom:15px}
}
.nc-link-list__link{text-transform:uppercase;font-weight:bold}
.nc-leader-profile{background-color:#f2f2f2;max-width:290px}
.nc-leader-profile:before,.nc-leader-profile:after{content:" ";display:table}
.nc-leader-profile:after{clear:both}
@media screen and (max-width:959px){.nc-leader-profile{background-color:transparent}
}
.nc-leader-profile__list{padding:0;margin:0;list-style:none}
.nc-leader-profile__list--email{margin-bottom:10px}
.nc-leader-profile__list--email i{top:2px}
.nc-leader-profile__list--email a{text-decoration:none}
.nc-leader-profile__bio-link{display:block}
@media screen and (max-width:959px){.nc-leader-profile__bio-link{float:left;width:100px;margin-right:30px}
}
.nc-leader-profile__image{background-color:#ddd;width:100%}
.nc-leader-profile__text-container{padding:30px}
@media screen and (max-width:959px){.nc-leader-profile__text-container{padding:0}
}
.nc-leader-profile__list-item{display:inline-block;margin-right:15px}
.nc-leader-profile__heading{margin:0;font-size:14px;text-transform:uppercase;font-weight:bold;margin-bottom:5px}
@media screen and (max-width:959px){.nc-leader-profile__heading{margin-top:5px;font-weight:bold}
}
.nc-leader-profile__paragraph{font-size:16px;line-height:26px;font-size:14px;margin-bottom:5px}
@media screen and (max-width:959px){.nc-leader-profile__paragraph{font-size:14px;line-height:22px}
}
.nc-leader-profile__subtext{color:#a0a0a0}
@media screen and (max-width:959px){.nc-leader-profile__subtext{margin-bottom:5px}
}
.nc-leader-profile__link--linkedin{width:17px;height:17px;position:relative;top:1px}
.nc-leader-profile__link--external{width:17px;height:17px;position:relative;top:1px}
.nc-instagram{padding:30px 0}
.nc-instagram__title{font-size:18px;font-weight:bold;line-height:1.56;margin:0 0 22px 0}
.nc-instagram__elements-container{display:flex;flex-wrap:wrap}
.nc-instagram__element{margin-right:2%;width:48%;margin-bottom:2%}
.nc-instagram__element:nth-child(2n){margin-right:0}
.nc-instagram__image{width:100%}
@media screen and (min-width:768px){.nc-instagram__element{width:32%}
.nc-instagram__element:nth-child(2n){margin-right:2%}
.nc-instagram__element:nth-child(3n){margin-right:0}
}
@media screen and (min-width:1024px){.nc-instagram__element{width:23.5%}
.nc-instagram__element:nth-child(3n),.nc-instagram__element:nth-child(2n){margin-right:2%}
.nc-instagram__element:nth-child(4n){margin-right:0}
}
.nc-info-text__heading{margin:0;font-weight:bold;font-size:16px;line-height:26px;margin-bottom:13px;display:inline-block;margin-bottom:15px;margin-top:15px}
@media screen and (min-width:960px){.nc-info-text__heading{font-size:18px;line-height:28px;margin-bottom:15px}
}
@media screen and (min-width:1101px){.nc-info-text__heading{margin-top:0;margin-bottom:5px}
}
.nc-image-link__image-container{display:inline-block;padding:0;width:60px}
.nc-image-link__image{background-size:cover;width:60px;height:60px;background-color:#ddd}
.nc-image-link__title{display:inline-block;font-weight:bold;padding-left:15px}
.nc-image-link__row{display:flex;align-items:center;height:60px}
.nc-help-contact__container{padding:30px 0;border-bottom:1px solid #999;border-top:1px solid #999}
.nc-help-contact__heading{margin:0;font-weight:bold;font-size:16px;line-height:26px;margin-bottom:13px}
@media screen and (min-width:960px){.nc-help-contact__heading{font-size:18px;line-height:28px;margin-bottom:15px}
}
.nc-help-contact__email-link{text-decoration:underline}
.nc-four-col-one-row{padding:0}
.nc-dashboard-image-text__image{background-size:cover;width:100%;height:170px;background-color:#ddd;background-position:50%}
@media screen and (max-width:959px){.nc-dashboard-image-text__image{width:100%;margin-bottom:15px}
}
.nc-dashboard-image-text__image-orig-size{max-width:100%;display:inline-block}
@media screen and (max-width:959px){.nc-dashboard-image-text__image-orig-size{width:100%;margin-bottom:15px}
}
.nc-dashboard-image-text__title{margin:0;font-weight:bold;font-size:16px;line-height:26px;margin-bottom:13px}
@media screen and (min-width:960px){.nc-dashboard-image-text__title{font-size:18px;line-height:28px;margin-bottom:15px}
}
@media screen and (min-width:960px){.nc-dashboard-image-text__image-col{display:inline-block;padding-left:0;width:100%}
}
@media screen and (min-width:960px){.nc-dashboard-image-text__text-col{display:inline-block;width:100%}
}
.nc-dashboard-image-text__text-col__orig-size{padding-left:unset}
.nc-dashboard-image-text__text{font-size:16px;line-height:26px}
@media screen and (max-width:959px){.nc-dashboard-image-text__text{font-size:14px;line-height:22px}
}
@media screen and (min-width:960px){.nc-dashboard-image-text__row{display:flex;align-items:center}
}
@media screen and (min-width:960px){.nc-dashboard-image-text .col-sm-4{max-width:320px}
}
.nc-contact-profile{padding:0;margin:30px 0}
.nc-contact-profile__title{font-weight:bold;padding-bottom:15px;font-size:18px}
.nc-contact-profile__contact-name{font-weight:bold;font-size:16px}
.nc-contact-profile__contact-email,.nc-contact-profile__contact-phone{color:#999}
.nc-contact-profile__image-container{display:inline-block;padding:0}
.nc-contact-profile__image{border-radius:50%;background-size:cover;width:45px;height:45px;background-color:#ddd}
.nc-contact-profile__information-container{display:inline-block;padding-left:15px}
.nc-contact-profile__information-container .glyphicon{margin-right:7.5px}
.nc-contact-profile__row{display:flex;align-items:flex-start}
.nc-contact-profile__job-title{height:40px}
.nc-contact-profile p{margin:3px}
.nc-contact-profile__list{margin:3px;padding:5px 0 0 0}
.nc-cafe-featured-content__title{margin:0;font-weight:bold;font-size:22px;line-height:28px;margin-bottom:25px}
@media screen and (min-width:960px){.nc-cafe-featured-content__title{font-size:30px;line-height:40px;margin-bottom:22px}
}
.nc-cafe-featured-content__container{display:block}
@media screen and (min-width:960px){.nc-cafe-featured-content__container{display:flex;flex-wrap:wrap}
}
.nc-cafe-featured-content__image{width:100%;height:290px;margin-bottom:15px;background-size:cover;background-position:center;background-repeat:no-repeat}
@media screen and (min-width:960px){.nc-cafe-featured-content__image{width:30%;margin:0}
}
.nc-cafe-featured-content__content{width:100%}
@media screen and (min-width:960px){.nc-cafe-featured-content__content{width:68%;margin-left:2%}
}
.nc-cafe-featured-content__date{color:#767676}
.nc-cafe-featured-content__article-title{font-size:18px;font-weight:bold;margin:0 0 10px 0}
.nc-cafe-featured-content__summary{font-size:16px;line-height:26px}
.nc-cafe-content{margin-bottom:45px}
.nc-cafe-content__title{margin:0;font-weight:bold;font-size:22px;line-height:28px;margin-bottom:25px}
@media screen and (min-width:960px){.nc-cafe-content__title{font-size:30px;line-height:40px;margin-bottom:22px}
}
.nc-cafe-content__title--small-title{line-height:1;font-size:18px}
.nc-cafe-content__grid{display:flex;flex-wrap:wrap}
.nc-cafe-content__main-article{margin:0 0 20px 0;position:relative;background-size:cover;background-position:center;background-repeat:no-repeat}
.nc-cafe-content__main-information{bottom:20px;color:#fff;padding:20px;position:absolute;background-color:#000;width:calc(100% - 40px)}
.nc-cafe-content__main-information-title{margin:0;font-weight:bold;font-size:16px;line-height:26px;margin-bottom:13px}
@media screen and (min-width:960px){.nc-cafe-content__main-information-title{font-size:18px;line-height:28px;margin-bottom:15px}
}
.nc-cafe-content__main-information-author{font-size:16px;line-height:26px}
@media screen and (max-width:959px){.nc-cafe-content__main-information-author{font-size:14px;line-height:22px}
}
.nc-cafe-content__main-information-read-more{position:relative;margin-top:25px}
.nc-cafe-content__main-information-link{padding-left:40px}
.nc-cafe-content__sub-articles-container{display:flex;flex-wrap:wrap}
.nc-cafe-content__sub-article{margin:0 0 20px 0}
.nc-cafe-content__sub-article-thumbnail{width:100%;height:170px;background-size:cover;background-position:center;background-repeat:no-repeat}
.nc-cafe-content__sub-articles-container--side-items{width:100%}
@media screen and (min-width:1101px){.nc-cafe-content__sub-articles-container--side-items{width:32%}
}
.nc-cafe-content__sub-article--side-items{height:auto;padding-bottom:15px;margin-bottom:15px;border-bottom:1px solid #b7b7b7}
.nc-cafe-content__sub-article--side-items:last-child{margin-bottom:0;padding-bottom:0;border-bottom:0}
@media screen and (min-width:1101px){.nc-cafe-content__sub-article--side-items{height:98px}
}
.nc-cafe-content__sub-article-thumbnail--side-items{width:150px;height:150px;vertical-align:top;display:inline-block;background-size:cover}
@media screen and (min-width:1101px){.nc-cafe-content__sub-article-thumbnail--side-items{width:85px;height:85px}
}
.nc-cafe-content__sub-article-information--side-items{width:100%}
.nc-cafe-content__sub-article-title,.nc-cafe-content__sub-article-title--side-items{font-size:20px;color:inherit;margin:0;font-size:16px;font-weight:bold}
@media screen and (max-width:959px){.nc-cafe-content__sub-article-title,.nc-cafe-content__sub-article-title--side-items{font-size:16px}
}
@media screen and (min-width:1101px){.nc-cafe-content__sub-article-title--side-items{font-size:14px}
}
.nc-cafe-content__sub-article-date{margin:5px 0 0 0;color:#767676}
.nc-cafe-content__sub-article-information{height:100%;padding:20px;margin-top:5px;border:1px solid black}
.nc-cafe-content__sub-article-read-more{position:relative;font-size:16px;font-weight:bold;margin-top:20px}
.nc-cafe-content__sub-article-read-more>a{padding-left:40px}
.nc-cafe-content .nc-icon{top:50%;left:0;position:absolute;transform:translateY(-50%)}
.nc-cafe-content--layout1 .nc-cafe-content__main-article{width:100%;height:430px}
@media screen and (min-width:1101px){.nc-cafe-content--layout1 .nc-cafe-content__main-article{width:64%;margin:0 20px 0 0}
}
.nc-cafe-content--layout1 .nc-cafe-content__main-information{left:50%;transform:translateX(-50%)}
.nc-cafe-content--layout1 .nc-cafe-content__sub-articles-container{margin-top:15px}
.nc-cafe-content--layout1 .nc-button{margin-top:15px}
.nc-cafe-content--layout2 .nc-cafe-content__main-article,.nc-cafe-content--layout3 .nc-cafe-content__main-article{height:520px}
.nc-cafe-content--layout2 .nc-cafe-content__main-information,.nc-cafe-content--layout3 .nc-cafe-content__main-information{left:20px}
@media screen and (min-width:1101px){.nc-cafe-content--layout2 .nc-cafe-content__main-information,.nc-cafe-content--layout3 .nc-cafe-content__main-information{top:22px;left:22px;width:40%;bottom:auto}
}
.nc-playlist{margin-bottom:30px}
.nc-playlist__title{font-size:30px;font-weight:bold;line-height:1.33;margin-bottom:20px}
.nc-playlist__container{margin-bottom:40px}
@media screen and (min-width:960px){.nc-playlist__container{display:flex;height:170px;margin-bottom:30px}
}
.nc-playlist__image{position:relative;background-size:cover;background-repeat:no-repeat;height:170px;margin-bottom:5px}
@media screen and (min-width:960px){.nc-playlist__image{width:289px;margin-bottom:0;margin-right:30px}
}
.nc-playlist__total-videos{height:40px;width:125px;background:#000;color:#fff;font-size:14px;font-weight:bold;line-height:1.57;text-align:center;position:absolute;top:15px;right:15px;display:flex;justify-content:center;align-items:center}
.nc-playlist__total-videos__icon{position:relative;top:-3px;width:24px;margin-right:9px}
.nc-playlist__content{display:flex;flex-direction:column;justify-content:center;max-width:680px}
.nc-playlist__created-date{font-size:14px;color:#767676;margin-bottom:4px}
.nc-playlist__content-title{margin:0;font-weight:bold;font-size:16px;line-height:26px;margin-bottom:13px;margin-bottom:3px}
@media screen and (min-width:960px){.nc-playlist__content-title{font-size:18px;line-height:28px;margin-bottom:15px}
}
@media screen and (min-width:960px){.nc-playlist__content-title{font-size:16px;margin-bottom:3px}
}
.nc-playlist__description{margin-bottom:10px;font-size:14px}
@media screen and (min-width:960px){.nc-playlist__description{margin-bottom:15px}
}
.nc-playlist__link{cursor:pointer;font-size:12px;font-weight:bold;line-height:1.67;text-transform:uppercase;letter-spacing:.9px}
.nc-playlist__no-results{font-size:16px;line-height:26px}
@media screen and (max-width:959px){.nc-playlist__no-results{font-size:14px;line-height:22px}
}
.nc-featured-video{padding-right:15px;margin-bottom:60px}
.nc-featured-video__video-container{width:100%;height:400px;position:relative;background-size:cover;background-position:center;background-repeat:no-repeat}
@media screen and (min-width:1101px){.nc-featured-video__video-container{height:530px}
}
.nc-featured-video__video-information{top:25px;left:25px;color:#fff;padding:10px;position:absolute;background-color:#000;width:calc(100% - 50px)}
@media screen and (min-width:1101px){.nc-featured-video__video-information{padding:20px;width:calc(40% - 50px)}
}
.nc-featured-video__video-title{font-weight:bold;font-size:16px;line-height:26px;margin-bottom:13px;margin:0}
@media screen and (min-width:960px){.nc-featured-video__video-title{font-size:18px;line-height:28px;margin-bottom:15px}
}
.nc-featured-video__video-date-author{font-size:16px;line-height:26px;margin:0}
@media screen and (max-width:959px){.nc-featured-video__video-date-author{font-size:14px;line-height:22px}
}
.nc-featured-video__video-length{right:25px;bottom:25px;color:white;padding:10px 15px;position:absolute;background-color:black}
.nc-featured-video .nc-icon{top:50%;left:50%;width:50px;height:50px;cursor:pointer;position:absolute;transform:translateX(-50%) translateY(-50%)}
@media screen and (min-width:1101px){.nc-featured-video .nc-icon{width:80px;height:80px}
}
.nc-channel{margin-bottom:60px}
.nc-channel__title{margin:0;font-weight:bold;font-size:22px;line-height:28px;margin-bottom:25px;margin-bottom:60px}
@media screen and (min-width:960px){.nc-channel__title{font-size:30px;line-height:40px;margin-bottom:22px}
}
.nc-channel__videos-container{display:flex;flex-wrap:wrap}
.nc-channel__video{width:100%;margin:0 0 15px 0;padding:0 30px 0 0}
.nc-channel__video .dxctv-video,.nc-channel__video .dxctv-playlist{cursor:pointer}
@media screen and (min-width:960px){.nc-channel__video{width:48%;margin:0 1% 15px 1%}
.nc-channel__video:nth-of-type(2n+1){margin-left:0}
.nc-channel__video:nth-of-type(2n){margin-right:0}
}
@media screen and (min-width:1101px){.nc-channel__video{width:32%}
.nc-channel__video:nth-of-type(2n+1){margin-left:1%}
.nc-channel__video:nth-of-type(2n){margin-right:1%}
.nc-channel__video:nth-of-type(3n+1){margin-left:0}
.nc-channel__video:nth-of-type(3n){margin-right:0}
}
.nc-channel__video-thumbnail{min-height:225px;position:relative;margin-bottom:15px;background-size:cover;background-position:center;background-repeat:no-repeat}
.nc-channel__play{top:50%;left:50%;width:50px;height:50px;position:absolute;transform:translateX(-50%) translateY(-50%)}
.nc-channel__length{right:10px;bottom:10px;color:#fff;padding:4px 10px;position:absolute;background-color:#000}
.nc-channel__video-title{margin:0;font-weight:bold;font-size:16px;line-height:26px;margin-bottom:13px;margin-bottom:0 !important}
@media screen and (min-width:960px){.nc-channel__video-title{font-size:18px;line-height:28px;margin-bottom:15px}
}
.nc-channel__date-and-author{font-size:14px;color:#767676}
.nc-tools__heading{margin:0;font-weight:bold;font-size:22px;line-height:28px;margin-bottom:25px;margin-bottom:30px}
@media screen and (min-width:960px){.nc-tools__heading{font-size:30px;line-height:40px;margin-bottom:22px}
}
.nc-tools .nc-searchbar{float:right}
.nc-tools__list{padding:0;margin:0;list-style:none}
.nc-tools__list:before,.nc-tools__list:after{content:" ";display:table}
.nc-tools__list:after{clear:both}
.nc-tools__list-item{display:block;margin-bottom:15px}
@media screen and (min-width:1101px){.nc-tools__list-item{overflow:hidden;height:48px;float:left;width:50%}
}
.nc-tools__link{padding-right:60px;line-height:24px;display:block}
.nc-tools__link:before{margin-bottom:5px}
.nc-qna-dayone__heading{margin:0;font-weight:bold;font-size:48px;line-height:54px;margin-bottom:30px}
@media screen and (max-width:959px){.nc-qna-dayone__heading{font-size:28px;line-height:32px}
}
.nc-qna-dayone__list{list-style:none;padding:0}
.nc-qna-dayone__list-item{margin-bottom:15px}
.nc-qna-dayone__list-item>a{display:block;text-decoration:none;position:relative;margin:0;font-weight:bold;font-size:16px;line-height:26px;margin-bottom:13px}
@media screen and (min-width:960px){.nc-qna-dayone__list-item>a{font-size:18px;line-height:28px;margin-bottom:15px}
}
.nc-qna-dayone__list-item span{display:block;color:#666}
.nc-channels .nc-questions-container{width:100%}
@media screen and (min-width:1101px){.nc-channels .nc-questions-container{float:left;width:calc(100% - 320px)}
}
.nc-channels__instructions{font-size:20px;line-height:30px;margin-bottom:30px}
.nc-channels__main-heading{margin:0;font-weight:bold;font-size:22px;line-height:28px;margin-bottom:25px}
@media screen and (min-width:960px){.nc-channels__main-heading{font-size:30px;line-height:40px;margin-bottom:22px}
}
.nc-channels .nc-question-column{margin-bottom:30px}
@media screen and (min-width:960px){.nc-channels .nc-question-column{margin-bottom:60px}
}
.nc-channels .nc-search__form{padding:0}
.nc-channels .nc-search__form .nc-searchbar{margin-bottom:0;display:flex}
.nc-channels .nc-search__form .nc-searchbar__input{width:100%;max-width:100%}
@media screen and (min-width:960px){.nc-channels .nc-search__form .nc-searchbar__input{width:calc(50% - 60px)}
}
@media screen and (min-width:1101px){.nc-channels .nc-search__form .nc-searchbar__input{width:50%}
}
.nc-channels__heading{margin:0;font-weight:bold;font-size:16px;line-height:26px;margin-bottom:13px}
@media screen and (min-width:960px){.nc-channels__heading{font-size:18px;line-height:28px;margin-bottom:15px}
}
.nc-channels__list{padding:0;list-style:none;margin-bottom:30px}
.nc-channels__list:before,.nc-channels__list:after{content:" ";display:table}
.nc-channels__list:after{clear:both}
@media screen and (min-width:960px){.nc-channels__list{margin-right:-30px;margin-bottom:40px}
}
.nc-channels__list-item{display:block;margin-bottom:5px;background-color:#f5f5f5}
@media screen and (min-width:960px){.nc-channels__list-item{width:calc(50% - 30px);margin-right:15px;margin-bottom:15px;float:left}
}
.nc-channels__link{font-size:12px;line-height:1.67;font-weight:bold;color:inherit;text-transform:uppercase;letter-spacing:.06em;position:relative;font-family:'proxima-nova','arial','helvetica',sans-serif;display:inline-block;display:block;display:flex;padding:15px}
.nc-channels__link:hover,.nc-channels__link:focus{background-color:#e9e9e9;outline:0}
.nc-channels .nc-rail>.parbase{margin-bottom:0 !important;border-top:1px solid #b7b7b7}
.nc-channels .nc-rail>.parbase :last-child(.parbase){border-bottom:1px solid #b7b7b7}
@media screen and (min-width:1101px){.nc-channels .nc-rail>.parbase{margin-bottom:30px !important;border:none !important}
}
.nc-news-home:not(.parbase){transition:padding .3s ease;padding:90px 0;background-color:#fff;color:#000}
.nc-news-home:not(.parbase):before,.nc-news-home:not(.parbase):after{content:" ";display:table}
.nc-news-home:not(.parbase):after{clear:both}
@media screen and (min-width:960px){.nc-news-home:not(.parbase){padding:147px 0 60px}
}
.nc-news-home.nc-page--has-alert .nc-page__content:not(.parbase){transition:padding .3s ease;padding:90px 0;padding-top:135px;background-color:#fff;color:#000}
.nc-news-home.nc-page--has-alert .nc-page__content:not(.parbase):before,.nc-news-home.nc-page--has-alert .nc-page__content:not(.parbase):after{content:" ";display:table}
.nc-news-home.nc-page--has-alert .nc-page__content:not(.parbase):after{clear:both}
@media screen and (min-width:960px){.nc-news-home.nc-page--has-alert .nc-page__content:not(.parbase){padding:147px 0 60px;padding-top:192px}
}
@media screen and (max-width:959px){.nc-news-home__open-filter-modal{float:right}
}
.nc-news-home__page-heading{margin:0;font-weight:bold;font-size:22px;line-height:28px;margin-bottom:25px}
@media screen and (min-width:960px){.nc-news-home__page-heading{font-size:30px;line-height:40px;margin-bottom:22px}
}
.nc-news-home .nc-sidebar-content{max-width:920px}
.nc-news-home__header-row{padding:0 0 20px 0;border-bottom:1px solid #999;margin-bottom:20px}
.nc-news-home__article-list,.nc-news-home__article-tag-list{list-style:none;padding:0}
.nc-news-home__article-item{padding:30px 0;border-bottom:1px solid #c6c6c6}
.nc-news-home__article-item:first-child{border-top:1px solid #c6c6c6}
.nc-news-home__article-tag-item{display:inline-block;height:30px;line-height:30px;background-color:#f7f7f7;font-weight:bold;font-size:12px;text-align:left;text-transform:uppercase}
.nc-news-home__article-tag-item>a{padding:0 15px;display:block;text-decoration:none}
.nc-news-home__article-tag-item:hover{background-color:#ccc}
.nc-news-home__article-header{margin:0;font-weight:bold;font-size:22px;line-height:28px;margin-bottom:25px;display:block;margin-bottom:15px}
@media screen and (min-width:960px){.nc-news-home__article-header{font-size:30px;line-height:40px;margin-bottom:22px}
}
.nc-news-home__article-img{background-size:cover;background-position:50% 50%;width:100%;height:200px;background-color:#ddd}
.nc-news-home__article-summary{font-size:16px;line-height:26px;margin-bottom:20px}
@media screen and (max-width:959px){.nc-news-home__article-summary{font-size:14px;line-height:22px}
}
.nc-news-home__article-published-date{color:#999;text-align:left}
.nc-news-home__pagination-container{padding:25px 0 10px 0;text-align:center}
.nc-news-home__pagination,.nc-news-home__pagination-previous-page,.nc-news-home__pagination-next-page{cursor:pointer;font-weight:bold}
.nc-news-home__pagination-previous-page-link,.nc-news-home__pagination-next-page-link{padding:.5em 1em;text-decoration:none !important}
.nc-news-home__pagination-previous-page-link:hover,.nc-news-home__pagination-next-page-link:hover{background-color:#feed00;color:#000}
.nc-news-home__pagination-previous-page-link__disabled,.nc-news-home__pagination-next-page-link__disabled{color:#999}
.nc-news-home__pagination-previous-page-link__disabled:hover,.nc-news-home__pagination-next-page-link__disabled:hover{color:#999;text-decoration:none;cursor:not-allowed}
.nc-news-home__pagination-link{padding:.5em .25em;text-decoration:none !important}
.nc-news-home__pagination-link:hover{background-color:#feed00;color:#000}
.nc-news-home__pagination-link__active{background-color:#000;color:#fff}
.nc-news-home__pagination-link__active:hover{background-color:#000;color:#fff}
.nc-page--news-home-template.nc-page--has-alert .nc-news-home:not(.parbase){transition:padding .3s ease;padding:90px 0;padding-top:135px;background-color:#fff;color:#000}
.nc-page--news-home-template.nc-page--has-alert .nc-news-home:not(.parbase):before,.nc-page--news-home-template.nc-page--has-alert .nc-news-home:not(.parbase):after{content:" ";display:table}
.nc-page--news-home-template.nc-page--has-alert .nc-news-home:not(.parbase):after{clear:both}
@media screen and (min-width:960px){.nc-page--news-home-template.nc-page--has-alert .nc-news-home:not(.parbase){padding:147px 0 60px;padding-top:192px}
}
.nc-page--news-article-freeform-template .comments .scf-comment-data.withTopLevel,.nc-page--news-article-freeform-template .comments .scf-composer{margin-left:0}
.nc-page--news-article-freeform-template .comments .nc-component-container{max-width:920px}
.nc-page--news-article-freeform-template .comments .scf-composer-block{padding:0}
.nc-page--news-article-freeform-template .comments .scf-comment{padding:30px 0}
.nc-news-article-freeform:not(.parbase){transition:padding .3s ease;padding:90px 0;background-color:#fff;color:#000}
.nc-news-article-freeform:not(.parbase):before,.nc-news-article-freeform:not(.parbase):after{content:" ";display:table}
.nc-news-article-freeform:not(.parbase):after{clear:both}
@media screen and (min-width:960px){.nc-news-article-freeform:not(.parbase){padding:147px 0 60px}
}
.nc-news-article-freeform .nc-component-container{max-width:920px}
@media screen and (min-width:768px){.nc-news-article-freeform .nc-component-container{margin:auto !important;padding:0 30px}
}
.nc-news-article-freeform:not(.parbase){padding-bottom:60px}
.nc-news-article-freeform__seperator{margin:0 15px}
.nc-news-article-freeform__heading{margin:0;font-weight:bold;font-size:48px;line-height:54px;margin-bottom:15px}
@media screen and (max-width:959px){.nc-news-article-freeform__heading{font-size:28px;line-height:32px}
}
.nc-news-article-freeform__content{text-align:left}
.nc-news-article-freeform__text-container{padding:60px 0;max-width:820px}
.nc-news-article-freeform__text-container h1,.nc-news-article-freeform__text-container h2,.nc-news-article-freeform__text-container h3,.nc-news-article-freeform__text-container h4,.nc-news-article-freeform__text-container h5{font-weight:bold;margin-top:30px;margin-bottom:15px}
.nc-news-article-freeform__text-container p{font-size:16px;line-height:26px;margin-bottom:30px}
@media screen and (max-width:959px){.nc-news-article-freeform__text-container p{font-size:14px;line-height:22px}
}
.nc-news-article-freeform__img-container{padding-top:20px}
.nc-news-article-freeform__top-img{max-width:100%}
.nc-news-article-freeform__tag-list{list-style:none;padding:0;margin:0}
.nc-news-article-freeform__tag{display:inline-block;height:30px;line-height:30px;background-color:#f7f7f7;font-weight:bold;font-size:12px;text-align:left;text-transform:uppercase}
.nc-news-article-freeform__tag>span{padding:0 15px;display:block;text-decoration:none}
.nc-page--news-article-freeform-template.nc-page--has-alert .nc-news-article-freeform:not(.parbase){transition:padding .3s ease;padding:90px 0;padding-top:135px;background-color:#fff;color:#000}
.nc-page--news-article-freeform-template.nc-page--has-alert .nc-news-article-freeform:not(.parbase):before,.nc-page--news-article-freeform-template.nc-page--has-alert .nc-news-article-freeform:not(.parbase):after{content:" ";display:table}
.nc-page--news-article-freeform-template.nc-page--has-alert .nc-news-article-freeform:not(.parbase):after{clear:both}
@media screen and (min-width:960px){.nc-page--news-article-freeform-template.nc-page--has-alert .nc-news-article-freeform:not(.parbase){padding:147px 0 60px;padding-top:192px}
}
.nc-page--news-article-template .comments .scf-comment-data.withTopLevel,.nc-page--news-article-template .comments .scf-composer{margin-left:0}
.nc-page--news-article-template .comments .nc-component-container{max-width:920px}
.nc-page--news-article-template .comments .scf-composer-block{padding:0}
.nc-page--news-article-template .comments .scf-comment{padding:30px 0}
.nc-article-page-component:not(.parbase){transition:padding .3s ease;padding:90px 0;background-color:#fff;color:#000}
.nc-article-page-component:not(.parbase):before,.nc-article-page-component:not(.parbase):after{content:" ";display:table}
.nc-article-page-component:not(.parbase):after{clear:both}
@media screen and (min-width:960px){.nc-article-page-component:not(.parbase){padding:147px 0 60px}
}
.nc-article-page-component .nc-component-container{max-width:920px}
@media screen and (min-width:768px){.nc-article-page-component .nc-component-container{margin:auto !important;padding:0 30px}
}
.nc-article-page-component:not(.parbase){padding-bottom:60px}
.nc-article-page-component__seperator{margin:0 15px}
.nc-article-page-component__heading{margin:0;font-weight:bold;font-size:48px;line-height:54px;margin-bottom:15px}
@media screen and (max-width:959px){.nc-article-page-component__heading{font-size:28px;line-height:32px}
}
.nc-article-page-component__content{text-align:left}
.nc-article-page-component__text-container{padding:60px 0;max-width:920px}
.nc-article-page-component__text-container h1,.nc-article-page-component__text-container h2,.nc-article-page-component__text-container h3,.nc-article-page-component__text-container h4,.nc-article-page-component__text-container h5{font-weight:bold;margin-top:30px;margin-bottom:15px}
.nc-article-page-component__text-container p{font-size:16px;line-height:26px;margin-bottom:30px}
@media screen and (max-width:959px){.nc-article-page-component__text-container p{font-size:14px;line-height:22px}
}
.nc-article-page-component__img-container{max-width:calc(100% + 120px);padding-top:20px;margin:0 -60px}
@media screen and (max-width:959px){.nc-article-page-component__img-container{margin:0}
}
.nc-article-page-component__top-img{max-width:100%}
.nc-article-page-component__tag-list{list-style:none;padding:0;margin:0}
.nc-article-page-component__tag{display:inline-block;height:30px;line-height:30px;background-color:#f7f7f7;font-weight:bold;font-size:12px;text-align:left;text-transform:uppercase}
.nc-article-page-component__tag>span{padding:0 15px;display:block;text-decoration:none}
.nc-page--news-article-template.nc-page--has-alert .nc-article-page-component:not(.parbase){transition:padding .3s ease;padding:90px 0;padding-top:135px;background-color:#fff;color:#000}
.nc-page--news-article-template.nc-page--has-alert .nc-article-page-component:not(.parbase):before,.nc-page--news-article-template.nc-page--has-alert .nc-article-page-component:not(.parbase):after{content:" ";display:table}
.nc-page--news-article-template.nc-page--has-alert .nc-article-page-component:not(.parbase):after{clear:both}
@media screen and (min-width:960px){.nc-page--news-article-template.nc-page--has-alert .nc-article-page-component:not(.parbase){padding:147px 0 60px;padding-top:192px}
}
.nc-directory__heading{margin:0;font-weight:bold;font-size:22px;line-height:28px;margin-bottom:25px}
@media screen and (min-width:960px){.nc-directory__heading{font-size:30px;line-height:40px;margin-bottom:22px}
}
.nc-directory__header-row:before,.nc-directory__header-row:after{content:" ";display:table}
.nc-directory__header-row:after{clear:both}
@media screen and (min-width:960px){.nc-directory__header-left{float:left}
}
@media screen and (max-width:959px){.nc-directory__open-filter-modal{float:right}
}
@media screen and (min-width:960px){.nc-directory__header-right{float:right}
}
.nc-directory__title{margin-bottom:30px}
.nc-directory__table{width:100%;max-width:100%;border:0}
.nc-directory__table-heading{font-size:12px;line-height:20px;text-transform:uppercase;color:#767676}
@media screen and (max-width:959px){.nc-directory__table-heading{display:none}
}
.nc-directory__table-row{cursor:pointer;font-size:16px;border-bottom:1px solid;border-color:#999}
.nc-directory__table-row .glyphicon-remove{display:none}
.nc-directory__table-row .glyphicon-info-sign{display:inline-block}
.nc-directory__table-row:hover td{background-color:#f5f5f5}
.nc-directory__table-row--expanded{background-color:#f5f5f5;border:0}
@media screen and (max-width:959px){.nc-directory__table-row--expanded{background-color:#fff}
}
.nc-directory__table-row--expanded .glyphicon-remove{display:inline-block}
.nc-directory__table-row--expanded .glyphicon-info-sign{display:none}
.nc-directory__table-row--expanded>.nc-directory__table-cell{color:transparent}
.nc-directory__table-row--expanded>.nc-directory__table-cell:first-child,.nc-directory__table-row--expanded>.nc-directory__table-cell:last-child{visibility:visible;color:inherit;font-weight:bold}
.nc-directory__table-cell,.nc-directory__accordion-cell,.nc-directory__table-heading{padding:15px;vertical-align:top}
@media screen and (max-width:959px){.nc-directory__table-cell,.nc-directory__accordion-cell,.nc-directory__table-heading{padding:15px 0}
}
.nc-directory__table-cell:last-child,.nc-directory__table-heading:last-child{width:50px}
@media(max-width:991px){.nc-directory__table-cell,.nc-directory__table-heading{display:none}
.nc-directory__table-cell:first-child,.nc-directory__table-heading:first-child{display:table-cell}
}
.nc-directory__accordion-cell{display:none;background-color:#f5f5f5;border-bottom:1px solid;border-color:#999;padding:0 15px 15px}
.nc-directory__accordion-cell.collapse.in{display:table-cell}
@media screen and (max-width:959px){.nc-directory__accordion-cell{padding:10px 20px}
}
.nc-directory__subheading{font-size:12px;font-weight:bold;line-height:1.67;letter-spacing:.9px;color:#767676;text-transform:uppercase;margin-top:0;margin-bottom:15px}
.nc-directory__employee-details{margin:0 0 15px 0}
.nc-directory__employee-details:before,.nc-directory__employee-details:after{content:" ";display:table}
.nc-directory__employee-details:after{clear:both}
.nc-directory__employee-details dt{font-weight:normal;padding-bottom:7px}
@media screen and (min-width:960px){.nc-directory__employee-details dt{float:left;width:250px}
}
.nc-directory__employee-details dd{font-weight:bold;padding-bottom:7px}
@media screen and (min-width:960px){.nc-directory__employee-details dd{width:calc(100% - 250px);float:left}
}
.nc-directory__link{font-size:12px;line-height:1.67;font-weight:bold;color:inherit;text-transform:uppercase;letter-spacing:.06em;position:relative;font-family:'proxima-nova','arial','helvetica',sans-serif;display:inline-block;font-size:14px;text-transform:none}
.nc-directory__link .nc-icon--play{margin-right:9px}
.nc-directory__filters{max-width:240px}
.nc-directory__column{min-height:1px}
.nc-directory__column:before,.nc-directory__column:after{content:" ";display:table}
.nc-directory__column:after{clear:both}
@media screen and (min-width:1101px){.nc-directory__column{padding-left:250px}
}
.nc-calendar__heading{margin:0;font-weight:bold;font-size:22px;line-height:28px;margin-bottom:25px}
@media screen and (min-width:960px){.nc-calendar__heading{font-size:30px;line-height:40px;margin-bottom:22px}
}
.nc-calendar__header-row:before,.nc-calendar__header-row:after{content:" ";display:table}
.nc-calendar__header-row:after{clear:both}
.nc-calendar__list{padding:0;margin:0;list-style:none}
.nc-calendar #event-tooltip{padding:20px;position:absolute;z-index:9999999;background:white;border:1px solid black;max-width:400px}
.nc-calendar #event-tooltip .nc-event-tooltip-title{display:block}
.nc-calendar #event-tooltip .calendar-single-item__info{width:100%}
.nc-calendar #event-tooltip .calendar-single-item__group{margin-bottom:12px}
.nc-calendar #event-tooltip .calendar-single-item__group:last-of-type{margin-bottom:0}
.fc-title{width:100%;overflow:hidden;text-overflow:ellipsis;box-sizing:border-box;padding:7px;background-color:#000;color:#fff;display:inline-block}
.nc-video{padding-bottom:15px}
.nc-video__video iframe{max-width:100%}
.nc-video__droptarget{background:#ddd;padding:10px;width:100%;min-height:200px}
.nc-title{color:#000}
.nc-title h1{margin:0;font-weight:bold;font-size:64px;line-height:68px;margin-bottom:30px}
@media screen and (max-width:959px){.nc-title h1{font-size:36px;line-height:40px}
}
.nc-title h2,.nc-title h3,.nc-title h4,.nc-title h5{margin-bottom:15px}
.nc-title h2{margin:0;font-weight:bold;font-size:48px;line-height:54px}
@media screen and (max-width:959px){.nc-title h2{font-size:28px;line-height:32px}
}
.nc-title h3{margin:0;font-weight:bold;font-size:22px;line-height:28px;margin-bottom:25px}
@media screen and (min-width:960px){.nc-title h3{font-size:30px;line-height:40px;margin-bottom:22px}
}
.nc-title h4{margin:0;font-weight:bold;font-size:24px;line-height:30px}
.nc-title h5{margin:0;font-weight:bold;font-size:16px;line-height:26px;margin-bottom:13px}
@media screen and (min-width:960px){.nc-title h5{font-size:18px;line-height:28px;margin-bottom:15px}
}
.nc-title--dark{padding:30px;color:#fff;background-color:#000;margin-bottom:60px}
.nc-title--dark h1,.nc-title--dark h2,.nc-title--dark h3,.nc-title--dark h4,.nc-title--dark h5{margin-bottom:0}
@media screen and (max-width:959px){.nc-title--dark{margin-top:60px;padding:15px}
}
.nc-tabbed-content__tab-title-content-container.published{padding:30px 30px 30px 0}
@media screen and (max-width:959px){.nc-tabbed-content__tab-title-content-container.published{padding:0}
}
.nc-tabbed-content__tab-title-content{font-size:18px;font-weight:bold}
.nc-tabbed-content__nc-text.edit{overflow:hidden;max-height:28.75px}
.nc-tabbed-content__tab-title-nav{text-transform:uppercase;font-weight:bold;font-size:12px;letter-spacing:.9px}
.nc-tabbed-content__rte-container table,.nc-tabbed-content__rte-container table td{border:1px solid black}
.nc-tabbed-content__rte-container table th{color:white;background:black}
.nc-tabbed-content__rte-container table th,.nc-tabbed-content__rte-container table td{padding:7px 10px}
.nc-tabbed-content__rte-container.published{padding:0 0 45px 0}
@media screen and (max-width:959px){.nc-tabbed-content__rte-container.published{padding:0}
}
.nc-tabbed-content .tabs-left>.nav-tabs{border:solid 1px #cacaca;width:245px;background-color:#f5f5f5;color:#767676}
.nc-tabbed-content .nav-tabs.edit{display:none}
@media screen and (max-width:959px){.nc-tabbed-content .tab-content.published{height:auto !important}
}
.nc-tabbed-content .tab-content.published>.tab-pane{display:none}
.nc-tabbed-content .tab-pane.edit{display:block}
.nc-tabbed-content .tab-pane.published{padding:0 46px}
.nc-tabbed-content .tab-content.published>.active{display:block;overflow:auto;border:solid 1px;height:100%;border-color:#cacaca #cacaca #cacaca transparent}
@media screen and (max-width:959px){.nc-tabbed-content .tab-content.published>.active{border-left-color:#cacaca;padding:15px}
}
.nc-tabbed-content .tabs-left>.nav-tabs>li{float:none;border-bottom:1px solid #cacaca}
@media screen and (max-width:959px){.nc-tabbed-content .tabs-left>.nav-tabs>li{border-color:#cacaca #cacaca transparent #cacaca}
}
.nc-tabbed-content .tabs-left>.nav-tabs{float:left;border-right:1px solid #ddd}
@media screen and (max-width:959px){.nc-tabbed-content .tabs-left>.nav-tabs{height:auto !important;min-height:0;float:none;width:100%;border-color:#cacaca transparent transparent transparent}
}
.nc-tabbed-content .tabs-left>.nav-tabs>li>a{min-width:74px;margin-right:-1px;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;height:60px;display:flex;align-items:center}
@media screen and (max-width:959px){.nc-tabbed-content .tabs-left>.nav-tabs>li>a{border-color:#cacaca #cacaca transparent #cacaca}
}
@media screen and (max-width:959px){.nc-tabbed-content .tabs-left>.nav-tabs>li.first>a{border-top-color:transparent}
}
.nc-tabbed-content .tabs-left>.nav-tabs>li>a:hover,.nc-tabbed-content .tabs-left>.nav-tabs>li>a:focus{border-color:#cacaca #cacaca transparent transparent}
@media screen and (max-width:959px){.nc-tabbed-content .tabs-left>.nav-tabs>li>a:hover,.nc-tabbed-content .tabs-left>.nav-tabs>li>a:focus{border-color:#cacaca #cacaca transparent #cacaca}
}
.nc-tabbed-content .tabs-left>.nav-tabs>li.first>a:hover,.nc-tabbed-content .tabs-left>.nav-tabs>li.first>a:focus{border-top:transparent}
.nc-tabbed-content .tabs-left>.nav-tabs .active>a,.nc-tabbed-content .tabs-left>.nav-tabs .active>a:hover,.nc-tabbed-content .tabs-left>.nav-tabs .active>a:focus{border-color:#cacaca transparent transparent transparent;color:#000}
@media screen and (max-width:959px){.nc-tabbed-content .tabs-left>.nav-tabs .active>a,.nc-tabbed-content .tabs-left>.nav-tabs .active>a:hover,.nc-tabbed-content .tabs-left>.nav-tabs .active>a:focus{border-color:#cacaca #cacaca transparent #cacaca}
}
.nc-tabbed-content .tabs-left>.nav-tabs .active.first>a,.nc-tabbed-content .tabs-left>.nav-tabs .active.first>a:hover,.nc-tabbed-content .tabs-left>.nav-tabs .active.first>a:focus{border-top:transparent}
.nc-structured-text__header-text{padding-bottom:15px}
.nc-structured-text__style-4-header{padding-bottom:15px;float:left}
.nc-structured-text__style-4-header-title,.nc-structured-text__style-4-header-text{max-width:300px;padding-right:15px}
.nc-separator__rule{border-top:1px solid #b7b7b7;margin:60px 0}
.nc-paragraph__text{margin-bottom:30px}
.nc-paragraph .paragraph-style-1{font-size:16px;line-height:26px}
@media screen and (max-width:959px){.nc-paragraph .paragraph-style-1{font-size:14px;line-height:22px}
}
.nc-paragraph .paragraph-style-2{font-size:20px;line-height:30px}
@media screen and (max-width:959px){.nc-paragraph .paragraph-style-2{font-size:18px;line-height:24px}
}
.nc-latest-news__heading{margin:0;font-weight:bold;font-size:22px;line-height:28px;margin-bottom:25px;margin-bottom:15px}
@media screen and (min-width:960px){.nc-latest-news__heading{font-size:30px;line-height:40px;margin-bottom:22px}
}
.nc-latest-news__article-list{list-style:none;padding:0}
.nc-latest-news__article-header{margin:0;font-weight:bold;font-size:16px;line-height:26px;margin-bottom:13px}
@media screen and (min-width:960px){.nc-latest-news__article-header{font-size:18px;line-height:28px;margin-bottom:15px}
}
.nc-latest-news__article-summary{font-size:16px;line-height:26px}
@media screen and (max-width:959px){.nc-latest-news__article-summary{font-size:14px;line-height:22px}
}
@media screen and (min-width:960px){.nc-latest-news .col-sm-4{max-width:320px}
}
.nc-latest-news__article-img{background-size:cover;width:100%;height:170px;background-color:#ddd;background-position:50%}
@media screen and (max-width:959px){.nc-latest-news__article-img{width:100%;margin-bottom:15px}
}
.nc-latest-news__article-item{padding-bottom:30px}
.nc-latest-news__article-read-more{font-weight:bold}
.nc-latest-news__link{font-size:12px;line-height:1.67;font-weight:bold;color:inherit;text-transform:uppercase;letter-spacing:.06em;position:relative;font-family:'proxima-nova','arial','helvetica',sans-serif;display:inline-block}
.nc-latest-news__no-results-container.published{display:none}
.nc-latest-news__no-results-container.edit{display:block}
@media screen and (min-width:960px){.nc-latest-news__row{display:flex;align-items:center}
}
.nc-rail .nc-latest-news__heading{margin:0;font-weight:bold;font-size:16px;line-height:26px;margin-bottom:13px;margin-bottom:15px}
@media screen and (min-width:960px){.nc-rail .nc-latest-news__heading{font-size:18px;line-height:28px;margin-bottom:15px}
}
.nc-rail .nc-latest-news__article-img{width:85px;height:85px}
.nc-rail .nc-latest-news__article-header{font-size:14px}
.nc-rail .nc-latest-news__article-summary{display:none}
.nc-rail .nc-latest-news__article-read-more{display:none}
.nc-rail .nc-latest-news__row{display:flex;align-items:flex-start}
.nc-image-text>.container{max-width:100%}
.nc-image-text__image{width:100%;object-fit:cover}
.nc-image-grid__image-container{display:flex;height:150px;align-items:center;justify-content:center}
.nc-image-grid__image img{max-width:90%;height:auto}
@media screen and (max-width:767px){.nc-image-grid__image img{max-width:300px}
}
.nc-image-grid .row{display:flex;margin-bottom:30px}
.nc-image-grid .row:last-child{margin-bottom:0}
@media screen and (max-width:767px){.nc-image-grid .row{display:block;margin-bottom:0}
}
.nc-image{padding-bottom:15px}
.nc-image__link-wrapper{display:inline-block}
.nc-image__image{max-width:100%;height:auto}
@media screen and (max-width:959px){.nc-image__image{max-width:100% !important}
}
.nc-iframe{width:100%;min-height:30px}
.nc-hero-slider{margin-top:-30px}
.nc-hero-slider--addMarginBelow{margin-bottom:45px}
@media screen and (min-width:960px){.nc-hero-slider{margin-top:0}
}
.nc-hero-slider__image-container{width:100%;height:57vw}
@media screen and (min-width:960px){.nc-hero-slider__image-container{height:510px}
}
.nc-hero-slider__image{background-size:cover;background-position:50%;height:57vw}
@media screen and (min-width:960px){.nc-hero-slider__image{height:510px}
}
.nc-hero-slider__list{padding:0;margin:0;min-height:300px}
@media screen and (max-width:959px){.nc-hero-slider__list{margin-left:-30px;margin-right:-30px;width:auto;margin-top:-30px}
}
.nc-hero-slider__heading{margin:0;font-weight:bold;font-size:22px;line-height:28px;margin-bottom:25px;word-wrap:break-word;margin-bottom:15px}
@media screen and (min-width:960px){.nc-hero-slider__heading{font-size:30px;line-height:40px;margin-bottom:22px}
}
.nc-hero-slider__paragraph{font-size:16px;line-height:26px;word-wrap:break-word;margin-bottom:30px}
@media screen and (max-width:959px){.nc-hero-slider__paragraph{font-size:14px;line-height:22px}
}
.nc-hero-slider__content-link{font-weight:bold;text-transform:uppercase}
.nc-hero-slider__caption{background-color:#fff;padding:50px 30px;position:relative;margin-left:15px;margin-right:15px;margin-top:-60px;border-bottom:1px solid #b7b7b7;min-height:243px}
@media screen and (min-width:960px){.nc-hero-slider__caption{position:absolute;top:30px;left:30px;height:450px;width:450px;margin:0;padding:60px 130px 60px 30px;border-radius:0 300px 300px 0;background:#000;color:#fff;border:0}
}
.nc-hero-slider__indicators{list-style:none;position:absolute;margin:0;padding:0;top:20px;left:0;width:100%;height:20px}
.nc-hero-slider__indicators li{display:inline-block;width:10px;height:10px;border-radius:50%;border:2px solid #000;margin:1px 5px 1px 1px;border-color:#000}
@media screen and (min-width:960px){.nc-hero-slider__indicators li{border-color:#fff}
}
.nc-hero-slider__indicators li .current-slide{display:none}
.nc-hero-slider__indicators li.active{display:inline-block;width:10px;height:10px;border-radius:50%;border:2px solid #000;margin:1px 5px 1px 1px;background-color:#000;border-color:transparent}
@media screen and (min-width:960px){.nc-hero-slider__indicators li.active{background-color:#fff}
}
.nc-hero-slider__indicators li.active .current-slide{display:block}
@media screen and (min-width:960px){.nc-hero-slider__indicators{display:flex;align-items:center;left:30px;top:auto;bottom:25px;width:auto;height:30px}
}
.nc-hero-slider__next-feature-container{position:absolute;right:30px;bottom:20px;border:0;background-color:transparent}
@media screen and (min-width:960px){.nc-hero-slider__next-feature-container{position:absolute;right:150px;bottom:25px}
}
.nc-hero-slider__next-feature-paragraph{margin-bottom:0;border:0}
.nc-hero-slider__next-feature-paragraph:hover,.nc-hero-slider__next-feature-paragraph:focus{outline:0}
.nc-hero-slider__next-feature-paragraph:hover span,.nc-hero-slider__next-feature-paragraph:focus span{text-decoration:underline}
.nc-hero-slider__next-feature{font-size:12px;line-height:1.67;font-weight:bold;color:inherit;text-transform:uppercase;letter-spacing:.06em;position:relative;font-family:'proxima-nova','arial','helvetica',sans-serif;display:inline-block}
.nc-hero-banner:not(.hasVideo):not(.parbase){position:relative;height:742px;background-size:cover;background-repeat:no-repeat;background-color:#fff;color:#000}
.nc-hero-banner:not(.hasVideo):not(.parbase):before,.nc-hero-banner:not(.hasVideo):not(.parbase):after{content:" ";display:table}
.nc-hero-banner:not(.hasVideo):not(.parbase):after{clear:both}
@media screen and (max-width:959px){.nc-hero-banner:not(.hasVideo):not(.parbase){height:auto}
}
.nc-hero-banner--smaller,.nc-hero-banner--smaller:not(.parbase){max-height:371px}
@media screen and (max-width:959px){.nc-hero-banner:not(.parbase):not(.hasVideo){padding:30px 0;min-height:300px}
}
.nc-hero-banner__heading{margin:0;font-weight:bold;font-size:64px;line-height:68px;max-width:422px;margin-bottom:35px}
@media screen and (max-width:959px){.nc-hero-banner__heading{font-size:36px;line-height:40px}
}
@media screen and (max-width:959px){.nc-hero-banner__heading{max-width:250px;margin-bottom:15px}
}
.nc-hero-banner__link{font-size:12px;line-height:1.67;font-weight:bold;color:inherit;text-transform:uppercase;letter-spacing:.06em;position:relative;font-family:'proxima-nova','arial','helvetica',sans-serif;display:inline-block}
@media screen and (min-width:960px){.nc-hero-banner .nc-component-container{position:relative;top:50%;transform:translateY(-50%)}
}
.nc-hero-banner--video-wrapper{max-height:742px;overflow:hidden}
.nc-main .nc-hero-banner:not(.parbase):not(.hasVideo){height:320px}
@media screen and (min-width:960px){.nc-main .nc-hero-banner:not(.parbase):not(.hasVideo){height:450px}
}
.nc-main .nc-hero-banner:not(.parbase):not(.hasVideo) .nc-component-container{margin:0 30px}
.video-js .vjs-big-play-button .vjs-icon-placeholder:before,.vjs-button>.vjs-icon-placeholder:before,.video-js .vjs-modal-dialog,.vjs-modal-dialog .vjs-modal-dialog-content{position:absolute;top:0;left:0;width:100%;height:100%}
.video-js .vjs-big-play-button .vjs-icon-placeholder:before,.vjs-button>.vjs-icon-placeholder:before{text-align:center}
@font-face{font-family:VideoJS;src:url("../../../apps/newco/components/content/nc-hero-banner/clientlibs/css/font/VideoJS.eot?#iefix") format("eot")}
@font-face{font-family:VideoJS;src:url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAA54AAoAAAAAFmgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAAA9AAAAD4AAABWUZFeBWNtYXAAAAE0AAAAOgAAAUriMBC2Z2x5ZgAAAXAAAAouAAAPUFvx6AdoZWFkAAALoAAAACsAAAA2DIPpX2hoZWEAAAvMAAAAGAAAACQOogcgaG10eAAAC+QAAAAPAAAAfNkAAABsb2NhAAAL9AAAAEAAAABAMMg06m1heHAAAAw0AAAAHwAAACABMAB5bmFtZQAADFQAAAElAAACCtXH9aBwb3N0AAANfAAAAPwAAAGBZkSN43icY2BkZ2CcwMDKwMFSyPKMgYHhF4RmjmEIZzzHwMDEwMrMgBUEpLmmMDh8ZPwoxw7iLmSHCDOCCADvEAo+AAB4nGNgYGBmgGAZBkYGEHAB8hjBfBYGDSDNBqQZGZgYGD7K/f8PUvCREUTzM0DVAwEjG8OIBwCPdwbVAAB4nI1Xe1CU1xX/zv1eLItLln0JwrIfC7sJGET2hRJ2N1GUoBJE8AESQEEhmBHjaB7UuBMTO4GMaSu7aY3RNlOdRPNqO2pqRmuTaSZtR6JJILUZk00a/4imjpmiecB303O/XUgMJOPufvd+99xzzz33nN855y4HHH7EfrGfIxwHRiANvF/sH71I9BzHszmpW+rGOQOXxXE6YhI4PoMT8zkT4cDFuf1cwMrZJI5cglM0HKVv0MaUFDgIFfg9mJJCG+kbKn1JkqBOVaFOkuhLpARq8fu0Nnc9/zdvfY9PxXW4PdH0C6N+PCejhorxFjAqRjgFRXSINEARbBGsoxcFK7IJmr4OycFJnInL59zIXwxui80fkGRbEHyosMWaATJKUfCskmwJQsAWANkmnIGOhlf514h7U8HNIv3owoHB0WMt0Eb3sx0guLi5pq/8Ny1q6969fKR9X9GBV6dPv6dp04K99SOwtmyPl47ApRa6n4ZpP1yjr5fn7MmYP/vXLUJs715UguklHBaHOZHZmG1N9FAIW2mf0MqWCIdo/8RZ1yGfxKUldDcGIbFA7ICO+vqOMSPTh/ZrSqgHi/bB/O8E8Mnzp+M+acxfpsTShBwej26TiGxBn7m4eEIO+Rueu6Hj+IFBnh88cAEUEQ//nVLx5C7kf+yIR47QEe+eMlhz9SqsGbe3hh2R03NGzoY6O42Kz8l7fB6fAk6LYnTyFo/FYyT6GGyNx2Jx2sdH4rA1Fo/HyCXaFyOp8dhYBCfJb2NIn1ImE6CYNGmgSTb52DawJR6jfXEmDU4xyTEmpgHHOIStoxfjSGdkbsK2w2jbdMQG4sgAstEONgURYCwGHhEhhscioQaAhhCf7McifEQc0l6+mxj9nI+gmSdiQ0Zbm7gZnIO7GSMEXG6UDAVocxAV8GcEXCKg1a02RcTtwANWRGIAyElor6n/+ZU2yOB3+T77Hb1MLqhn4KHVnQBjJnqe9QZSon6Kc5DxAD2vMdPL/BXSmQGwspa67z9wLUjdi9TN7QC7lyyBr9rpt7uXVC1CMpyjKRoXnGPHTuiaPLsNdc2dbAFQLAooPkXEh33FodHl4XpC6sPCIa0ftUIhHSYXVSu5iME+DIXsbZJ51BeidCgajcai43jU9nVzoSn2dPqcFvSoxSzJzgRKAx47WMRxOrIj3Wf0+hndxhJTiOkSEqxar3b3RKM9hY64oxBA64ieURLvCfpkDb8siBdUJ1bgT+urJ5PGfewQrmm5R5+0HmfyIPySD7OYkT0WxRePah8oEiyjlxIP74thVoRTURpmL6QhGuWS+QDjdANXjIM8SQa/1w128ODx0Qp4aLMNg9+JL3joUn8AMxW+aLNiuKjarn4uyyTdXjOzZTsh21uwldUvJoYza+zELALfu3p1L8/3krtyZ0Ag058J3hxHghvbGZn0dHZy6Mim/7Blre4lpHd1c28yVqRViO153F2oIWoXCIKbL4Z0cM1iaQn9mI5KuV2SzEvWXJDMNtkANpMdQoDDhIdD4A/YrP6Aye9ysxyE+uOEAcTDorgvVZJjcua043PnZ/PmdDqcbibZlXOOT8uSo7Kof0YUn9GL+Jo17ficymxiTofC6znUso0DhAxs1Fo+kF+d36vLmgZ8mk5cdGv2mwYj5k3Dm9m3LhJ1aVRNm6HrTbLgYAoWXDhDd/u4PGy5CT+xGMdiaBovewUCF/1BiWNljI9MLn7jeScpg+WyH6mfU62eVDql7hsrmvx1ezp/YldE2LhjbkiDnAn8tGy/MW3IXRMYJduvq9HpmIcKuFt+JCtgdGEGKAcF6UacVwIYbVPGfw/+YuNBS4cx/CUHcnyfc+wRDMtTr72mMSBjT/yn/GKSdeDWQUCH6Xoqq5R10RE60gV6erUL0iCti16d0hZjxut4QI/rEpgSh6WjnJXdBXRg1GKCucGJPtFqM27aD1tOqqKonsQ2KsFSSmEpmvRlsR+TcD9OFwrqXxIclL4sJTnGMSuG8KpkZvKdeVIOKDyWSyPLV16/p1QMPbP8NihwUzr47bdnXtwtjdCvqqpO0H+pOvIl3Pzv46e5CT/tQjklXCXXym1AaWY7bzHLkuDMc7ldKCvgxzLn8wYkJLBhEDyK7MT8bTbwbkxbfp+3mKAGsmTBpabSIEECzMIcQlzOPAMKsxMs7uhsnxPLuofPDTc1hkuq6MX9j16YU7CqegcYHbmWYuvAP6tCS97tgWf7dlQvnl25YPavXLVZvrzQPeHCpZmzzEUVq/xzu5sChnSTPTW7oOYmh69z4zL/gk3b+O6hoa733uviP82vnFcbqWlc9tDmZa23LVzaV1yXURi+JX+28NeBuj3+O8IrQ080Vm1eWB4OKjPmrJu7c1udWynvKF6/vs479lSW9+5gZkn+dKfellNGDPllzeULustz+A0bPvhgw7lkvEUwn/N4Ty7U7nhGsEpFkOfy+kutbOh1JQxhVDJumoW11hnkPThznh6FFlhfT+ra1x9sF56kx5YuDzVY9PQYAYA7iblw4frQ4TPCk2MK/xGU3rlmze62trHz6lsko+v+So/do74PT8KVkpJfOErKcv8znrMGsHTNxoEkWy1mYgDB6XBbPaWsuiS6CryGaL6zCjaXBgvtkuyXBua1wOKnh+k7L9AvPnYWffxK18FcJbuosGf3/Jo7amY+CE1vppzY+UTrva0FXc1i55pKQ/YjVL187N5fCn1kW5uot/1hi+DiZ+5atnJR9E+prvydJ9ZZ5mwOpU5gM4KYysMBQ71UzPuMTl9QQOyUo5nwioeYCPjFklrbK6s6X+ypUZ6rum9+CZYzWRiBJfSP0xzzSmrg7f86g0DKVj/wwFzieD9rRfPGFbeKMl05pn5j9/rsQJJ2iEgRrpohlyBo3f4QK7Kl+EcAYZgAoNVmZWXK704YAa3FwBxgSGUOs5htvGRz4Sgj3yFkSJFBuv/sxu5yk998T8WDJzvv/2RX19HtTUW1S+wpKRKRjJ6zzz/1/OPdFdWGlAKbvzS4PHOtURikg9AGz0LbIB85S/cPOpoXvuue8/iV2H1vPTy3ddvOeZ37HGmO3OmSzVzR+NS53+84dHlFhXPLqtzSO+5ruHM2vXtBdxP87LOzKAD359j/INYIbyPabIi3Cq6Wa+SaGe78diIzu7qcblcAa6/fJRvNopXFJnO+U9KKM5bqH5LM0iQSVmpPCPDu7ZT4Aoubz3709EBTyrTDjyx8MQXgUH1nqm7TWng4TzE4i4AsKskBITXfSyC4Fkl5MxnJDiKSIDSJAsGvd1y+/eNDp2e+A+5d8HeiiunrTkT6TqWLIs+/QRoWr98s0qj8uuzLuS22Ytufg3rdTaHn1m46sfgGKHXt0MGnLaRHdnwN37tvHcWKo2V6lnPxL4UvUQcRdOzmZSQs8X5CH5OxXMXpkATuDz8Et0SH4uyCRR+TjmBDP1GvsVrWEGVzEj33YVQ9jAtIKpqsl/s/0xrocwAAeJxjYGRgYADig3cEzsTz23xl4GZnAIHLRucNkWl2BrA4BwMTiAIAF4IITwB4nGNgZGBgZwCChWASxGZkQAXyABOUANh4nGNnYGBgHyAMADa8ANoAAAAAAAAOAFAAZgCyAMYA5gEeAUgBdAGcAfICLgKOAroDCgOOA7AD6gQ4BHwEuAToBQwFogXoBjYGbAbaB3IHqHicY2BkYGCQZ8hlYGcAASYg5gJCBob/YD4DABbVAaoAeJxdkE1qg0AYhl8Tk9AIoVDaVSmzahcF87PMARLIMoFAl0ZHY1BHdBJIT9AT9AQ9RQ9Qeqy+yteNMzDzfM+88w0K4BY/cNAMB6N2bUaPPBLukybCLvleeAAPj8JD+hfhMV7hC3u4wxs7OO4NzQSZcI/8Ltwnfwi75E/hAR7wJTyk/xYeY49fYQ/PztM+jbTZ7LY6OWdBJdX/pqs6NYWa+zMxa13oKrA6Uoerqi/JwtpYxZXJ1coUVmeZUWVlTjq0/tHacjmdxuL90OR8O0UEDYMNdtiSEpz5XQGqzlm30kzUdAYFFOb8R7NOZk0q2lwAyz1i7oAr1xoXvrOgtYhZx8wY5KRV269JZ5yGpmzPTjQhvY9je6vEElPOuJP3mWKnP5M3V+YAAAB4nG2P2XLCMAxFfYFspGUp3Te+IB9lHJF4cOzUS2n/voaEGR6qB+lKo+WITdhga/a/bRnDBFPMkCBFhhwF5ihxg1sssMQKa9xhg3s84BFPeMYLXvGGd3zgE9tZr/hveXKVkFYoSnoeHJXfRoWOqi54mo9ameNFdrK+dLSyaVf7oJQTlkhXpD3Z5XXhR/rUfQVuKXO91Jps4cLOS6/I5YL3XhodRRsVWZe4NnZOhWnSAWgxhMoEr6SmzZieF43Mk7ZOBdeCVGrp9Eu+54J2xhySplfB5XHwQLXUmT9KH6+kPnQ7ZYuIEzNyfs1DLU1VU4SWZ6LkXGHsD1ZKbMw=) format("woff"),url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMlGRXgUAAAEoAAAAVmNtYXDiMBC2AAAB/AAAAUpnbHlmW/HoBwAAA4gAAA9QaGVhZAyD6V8AAADQAAAANmhoZWEOogcgAAAArAAAACRobXR42QAAAAAAAYAAAAB8bG9jYTDINOoAAANIAAAAQG1heHABMAB5AAABCAAAACBuYW1l1cf1oAAAEtgAAAIKcG9zdGZEjeMAABTkAAABgQABAAAHAAAAAKEHAAAAAAAHAAABAAAAAAAAAAAAAAAAAAAAHwABAAAAAQAAwdxheF8PPPUACwcAAAAAANMyzzEAAAAA0zLPMQAAAAAHAAcAAAAACAACAAAAAAAAAAEAAAAfAG0ABwAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQcAAZAABQAIBHEE5gAAAPoEcQTmAAADXABXAc4AAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA8QHxHgcAAAAAoQcAAAAAAAABAAAAAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAAAAAMAAAADAAAAHAABAAAAAABEAAMAAQAAABwABAAoAAAABgAEAAEAAgAA8R7//wAAAADxAf//AAAPAAABAAAAAAAAAAABBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAFAAZgCyAMYA5gEeAUgBdAGcAfICLgKOAroDCgOOA7AD6gQ4BHwEuAToBQwFogXoBjYGbAbaB3IHqAABAAAAAAWLBYsAAgAAAREBAlUDNgWL++oCCwAAAwAAAAAGawZrAAIADgAaAAAJAhMEAAMSAAUkABMCAAEmACc2ADcWABcGAALrAcD+QJX+w/5aCAgBpgE9AT0BpggI/lr+w/3+rgYGAVL9/QFSBgb+rgIwAVABUAGbCP5a/sP+w/5aCAgBpgE9AT0BpvrIBgFS/f0BUgYG/q79/f6uAAAAAgAAAAAFQAWLAAMABwAAASERKQERIREBwAEr/tUCVQErAXUEFvvqBBYAAAAEAAAAAAYgBiAABgATACQAJwAAAS4BJxUXNjcGBxc+ATUmACcVFhIBBwEhESEBEQEGBxU+ATcXNwEHFwTQAWVVuAO7AidxJSgF/t/lpc77t18BYf6fASsBdQE+TF1OijuZX/1gnJwDgGSeK6W4GBhqW3FGnFT0AWM4mjT+9AHrX/6f/kD+iwH2/sI7HZoSRDGYXwSWnJwAAAEAAAAABKsF1gAFAAABESEBEQECCwEqAXb+igRg/kD+iwSq/osAAAACAAAAAAVmBdYABgAMAAABLgEnET4BAREhAREBBWUBZVRUZfwRASsBdf6LA4Bkniv9piueAUT+QP6LBKr+iwAAAwAAAAAGIAYPAAUADAAaAAATESEBEQEFLgEnET4BAxUWEhcGAgcVNgA3JgDgASsBdf6LAsUBZVVVZbqlzgMDzqXlASEFBf7fBGD+QP6LBKr+i+Bkniv9piueAvOaNP70tbX+9DSaOAFi9fUBYgAAAAQAAAAABYsFiwAFAAsAEQAXAAABIxEhNSMDMzUzNSEBIxUhESMDFTMVMxECC5YBduCWluD+igOA4AF2luDglgLr/oqWAgrglvyAlgF2AqCW4AF2AAQAAAAABYsFiwAFAAsAEQAXAAABMxUzESETIxUhESMBMzUzNSETNSMRITUBdeCW/org4AF2lgHAluD+ipaWAXYCVeABdgHAlgF2++rglgHA4P6KlgAAAAACAAAAAAXWBdYADwATAAABIQ4BBxEeARchPgE3ES4BAyERIQVA/IA/VQEBVT8DgD9VAQFVP/yAA4AF1QFVP/yAP1UBAVU/A4A/VfvsA4AAAAYAAAAABmsGawAHAAwAEwAbACAAKAAACQEmJw4BBwElLgEnAQUhATYSNyYFAQYCBxYXIQUeARcBMwEWFz4BNwECvgFkTlSH8GEBEgOONemh/u4C5f3QAXpcaAEB/BP+3VxoAQEOAjD95DXpoQESeP7dTlSH8GH+7gPwAmgSAQFYUP4nd6X2Pv4nS/1zZAEBk01NAfhk/v+TTUhLpfY+Adn+CBIBAVhQAdkAAAAFAAAAAAZrBdYADwATABcAGwAfAAABIQ4BBxEeARchPgE3ES4BASEVIQEhNSEFITUhNSE1IQXV+1ZAVAICVEAEqkBUAgJU+xYBKv7WAur9FgLqAcD+1gEq/RYC6gXVAVU//IA/VQEBVT8DgD9V/ayV/tWVlZWWlQADAAAAAAYgBdYADwAnAD8AAAEhDgEHER4BFyE+ATcRLgEBIzUjFTM1MxUUBgcjLgEnET4BNzMeARUFIzUjFTM1MxUOAQcjLgE1ETQ2NzMeARcFi/vqP1QCAlQ/BBY/VAICVP1rcJWVcCog4CAqAQEqIOAgKgILcJWVcAEqIOAgKiog4CAqAQXVAVU//IA/VQEBVT8DgD9V/fcl4CVKICoBASogASogKgEBKiBKJeAlSiAqAQEqIAEqICoBASogAAAGAAAAAAYgBPYAAwAHAAsADwATABcAABMzNSMRMzUjETM1IwEhNSERITUhERUhNeCVlZWVlZUBKwQV++sEFfvrBBUDNZb+QJUBwJX+QJb+QJUCVZWVAAAAAQAAAAAGIAZsAC4AAAEiBgcBNjQnAR4BMz4BNy4BJw4BBxQXAS4BIw4BBx4BFzI2NwEGBx4BFz4BNy4BBUArSh797AcHAg8eTixffwICf19ffwIH/fEeTixffwICf18sTh4CFAUBA3tcXHsDA3sCTx8bATcZNhkBNB0gAn9fX38CAn9fGxn+zRwgAn9fX38CIBz+yhcaXHsCAntcXXsAAAIAAAAABlkGawBDAE8AAAE2NCc3PgEnAy4BDwEmLwEuASchDgEPAQYHJyYGBwMGFh8BBhQXBw4BFxMeAT8BFh8BHgEXIT4BPwE2NxcWNjcTNiYnBS4BJz4BNx4BFw4BBasFBZ4KBgeWBxkNujpEHAMUD/7WDxQCHEU5ug0aB5UHBQudBQWdCwUHlQcaDbo5RRwCFA8BKg8UAhxFOboNGgeVBwUL/ThvlAIClG9vlAIClAM3JEokewkaDQEDDAkFSy0cxg4RAQERDsYcLUsFCQz+/QwbCXskSiR7CRoN/v0MCQVLLRzGDhEBAREOxhwtSwUJDAEDDBsJQQKUb2+UAgKUb2+UAAAAAAEAAAAABmsGawALAAATEgAFJAATAgAlBACVCAGmAT0BPQGmCAj+Wv7D/sP+WgOA/sP+WggIAaYBPQE9AaYICP5aAAAAAgAAAAAGawZrAAsAFwAAAQQAAxIABSQAEwIAASYAJzYANxYAFwYAA4D+w/5aCAgBpgE9AT0BpggI/lr+w/3+rgYGAVL9/QFSBgb+rgZrCP5a/sP+w/5aCAgBpgE9AT0BpvrIBgFS/f0BUgYG/q79/f6uAAADAAAAAAZrBmsACwAXACMAAAEEAAMSAAUkABMCAAEmACc2ADcWABcGAAMOAQcuASc+ATceAQOA/sP+WggIAaYBPQE9AaYICP5a/sP9/q4GBgFS/f0BUgYG/q4dAn9fX38CAn9fX38Gawj+Wv7D/sP+WggIAaYBPQE9Aab6yAYBUv39AVIGBv6u/f3+rgJPX38CAn9fX38CAn8AAAAEAAAAAAYgBiAADwAbACUAKQAAASEOAQcRHgEXIT4BNxEuAQEjNSMVIxEzFTM1OwEhHgEXEQ4BByE3MzUjBYv76j9UAgJUPwQWP1QCAlT9a3CVcHCVcJYBKiAqAQEqIP7WcJWVBiACVD/76j9UAgJUPwQWP1T8gpWVAcC7uwEqIP7WICoBcOAAAgAAAAAGawZrAAsAFwAAAQQAAxIABSQAEwIAEwcJAScJATcJARcBA4D+w/5aCAgBpgE9AT0BpggI/lo4af70/vRpAQv+9WkBDAEMaf71BmsI/lr+w/7D/loICAGmAT0BPQGm/BFpAQv+9WkBDAEMaf71AQtp/vQAAQAAAAAF1ga2ABYAAAERCQERHgEXDgEHLgEnIxYAFzYANyYAA4D+iwF1vv0FBf2+vv0FlQYBUf7+AVEGBv6vBYsBKv6L/osBKgT9v779BQX9vv7+rwYGAVH+/gFRAAAAAQAAAAAFPwcAABQAAAERIyIGHQEhAyMRIREjETM1NDYzMgU/nVY8ASUn/v7O///QrZMG9P74SEi9/tj9CQL3ASjaus0AAAAABAAAAAAGjgcAADAARQBgAGwAAAEUHgMVFAcGBCMiJicmNTQ2NzYlLgE1NDcGIyImNTQ2Nz4BMyEHIx4BFRQOAycyNjc2NTQuAiMiBgcGFRQeAxMyPgI1NC4BLwEmLwImIyIOAxUUHgIBMxUjFSM1IzUzNTMDH0BbWkAwSP7qn4TlOSVZSoMBESAfFS4WlMtIP03TcAGiioNKTDFFRjGSJlAaNSI/akAqURkvFCs9WTY6a1s3Dg8THgocJU4QIDVob1M2RnF9A2vV1WnU1GkD5CRFQ1CATlpTenNTYDxHUYouUhIqQCkkMQTBlFKaNkJAWD+MWkhzRztAPiEbOWY6hn1SJyE7ZS5nZ1I0/JcaNF4+GTAkGCMLFx04Ag4kOF07Rms7HQNsbNvbbNkAAwAAAAAGgAZsAAMADgAqAAABESERARYGKwEiJjQ2MhYBESERNCYjIgYHBhURIRIQLwEhFSM+AzMyFgHd/rYBXwFnVAJSZGemZASP/rdRVj9VFQv+twIBAQFJAhQqR2c/q9AEj/whA98BMkliYpNhYfzd/cgCEml3RTMeM/3XAY8B8DAwkCAwOB/jAAABAAAAAAaUBgAAMQAAAQYHFhUUAg4BBCMgJxYzMjcuAScWMzI3LgE9ARYXLgE1NDcWBBcmNTQ2MzIXNjcGBzYGlENfAUyb1v7SrP7x4SMr4bBpph8hHCsqcJNETkJOLHkBW8YIvYaMYG1gJWldBWhiRQ4cgv797rdtkQSKAn1hBQsXsXUEJgMsjlNYS5WzCiYkhr1mFTlzPwoAAAABAAAAAAWABwAAIgAAARcOAQcGLgM1ESM1PgQ3PgE7AREhFSERFB4CNzYFMFAXsFlorXBOIahIckQwFAUBBwT0AU3+sg0gQzBOAc/tIz4BAjhceHg6AiDXGlddb1ctBQf+WPz9+h40NR4BAgABAAAAAAaABoAASgAAARQCBCMiJzY/AR4BMzI+ATU0LgEjIg4DFRQWFxY/ATY3NicmNTQ2MzIWFRQGIyImNz4CNTQmIyIGFRQXAwYXJgI1NBIkIAQSBoDO/p/Rb2s7EzYUaj15vmh34o5ptn9bK1BNHggIBgIGETPRqZepiWs9Sg4IJRc2Mj5WGWMRBM7+zgFhAaIBYc4DgNH+n84gXUfTJzmJ8JZyyH46YH2GQ2ieIAwgHxgGFxQ9WpfZpIOq7lc9I3VZHzJCclVJMf5eRmtbAXzp0QFhzs7+nwAABwAAAAAHAATPAA4AFwAqAD0AUABaAF0AAAERNh4CBw4BBwYmIycmNxY2NzYmBxEUBRY2Nz4BNy4BJyMGHwEeARcOARcWNjc+ATcuAScjBh8BHgEXFAYXFjY3PgE3LgEnIwYfAR4BFw4BBTM/ARUzESMGAyUVJwMchM2UWwgNq4JHrQgBAapUaAoJcWMBfiIhDiMrAQJLMB0BBAokNAIBPmMiIQ4iLAECSzAeAQUKJDQBP2MiIQ4iLAECSzAeAQUKJDQBAT75g+5B4arNLNIBJ44ByQL9BQ9mvYCKwA8FBQMDwwJVTGdzBf6VB8IHNR08lld9uT4LCRA/qGNxvUwHNR08lld9uT4LCRA/qGNxvUwHNR08lld9uT4LCRA/qGNxvVJkAWUDDEf+tYP5AQAAAAEAAAAABiAGtgAbAAABBAADER4BFzMRITU2ADcWABcVIREzPgE3EQIAA4D+4v6FBwJ/X+D+1QYBJ97eAScG/tXgX38CB/6FBrUH/oX+4v32X38CAlWV3gEnBgb+2d6V/asCf18CCgEeAXsAAAAAEADGAAEAAAAAAAEABwAAAAEAAAAAAAIABwAHAAEAAAAAAAMABwAOAAEAAAAAAAQABwAVAAEAAAAAAAUACwAcAAEAAAAAAAYABwAnAAEAAAAAAAoAKwAuAAEAAAAAAAsAEwBZAAMAAQQJAAEADgBsAAMAAQQJAAIADgB6AAMAAQQJAAMADgCIAAMAAQQJAAQADgCWAAMAAQQJAAUAFgCkAAMAAQQJAAYADgC6AAMAAQQJAAoAVgDIAAMAAQQJAAsAJgEeVmlkZW9KU1JlZ3VsYXJWaWRlb0pTVmlkZW9KU1ZlcnNpb24gMS4wVmlkZW9KU0dlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAFYAaQBkAGUAbwBKAFMAUgBlAGcAdQBsAGEAcgBWAGkAZABlAG8ASgBTAFYAaQBkAGUAbwBKAFMAVgBlAHIAcwBpAG8AbgAgADEALgAwAFYAaQBkAGUAbwBKAFMARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABzAHYAZwAyAHQAdABmACAAZgByAG8AbQAgAEYAbwBuAHQAZQBsAGwAbwAgAHAAcgBvAGoAZQBjAHQALgBoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAAAAAgAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfAAABAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVARYBFwEYARkBGgEbARwBHQEeAR8EcGxheQtwbGF5LWNpcmNsZQVwYXVzZQt2b2x1bWUtbXV0ZQp2b2x1bWUtbG93CnZvbHVtZS1taWQLdm9sdW1lLWhpZ2gQZnVsbHNjcmVlbi1lbnRlcg9mdWxsc2NyZWVuLWV4aXQGc3F1YXJlB3NwaW5uZXIJc3VidGl0bGVzCGNhcHRpb25zCGNoYXB0ZXJzBXNoYXJlA2NvZwZjaXJjbGUOY2lyY2xlLW91dGxpbmUTY2lyY2xlLWlubmVyLWNpcmNsZQJoZAZjYW5jZWwGcmVwbGF5CGZhY2Vib29rBWdwbHVzCGxpbmtlZGluB3R3aXR0ZXIGdHVtYmxyCXBpbnRlcmVzdBFhdWRpby1kZXNjcmlwdGlvbgVhdWRpbwAAAAAA) format("truetype");font-weight:normal;font-style:normal}
.vjs-icon-play,.video-js .vjs-big-play-button .vjs-icon-placeholder:before,.video-js .vjs-play-control .vjs-icon-placeholder{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-play:before,.video-js .vjs-big-play-button .vjs-icon-placeholder:before,.video-js .vjs-play-control .vjs-icon-placeholder:before{content:"\f101"}
.vjs-icon-play-circle{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-play-circle:before{content:"\f102"}
.vjs-icon-pause,.video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-pause:before,.video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder:before{content:"\f103"}
.vjs-icon-volume-mute,.video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-volume-mute:before,.video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder:before{content:"\f104"}
.vjs-icon-volume-low,.video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-volume-low:before,.video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder:before{content:"\f105"}
.vjs-icon-volume-mid,.video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-volume-mid:before,.video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder:before{content:"\f106"}
.vjs-icon-volume-high,.video-js .vjs-mute-control .vjs-icon-placeholder{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-volume-high:before,.video-js .vjs-mute-control .vjs-icon-placeholder:before{content:"\f107"}
.vjs-icon-fullscreen-enter,.video-js .vjs-fullscreen-control .vjs-icon-placeholder{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-fullscreen-enter:before,.video-js .vjs-fullscreen-control .vjs-icon-placeholder:before{content:"\f108"}
.vjs-icon-fullscreen-exit,.video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-fullscreen-exit:before,.video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder:before{content:"\f109"}
.vjs-icon-square{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-square:before{content:"\f10a"}
.vjs-icon-spinner{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-spinner:before{content:"\f10b"}
.vjs-icon-subtitles,.video-js .vjs-subtitles-button .vjs-icon-placeholder,.video-js .vjs-subs-caps-button .vjs-icon-placeholder,.video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-subtitles:before,.video-js .vjs-subtitles-button .vjs-icon-placeholder:before,.video-js .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder:before{content:"\f10c"}
.vjs-icon-captions,.video-js .vjs-captions-button .vjs-icon-placeholder,.video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-captions:before,.video-js .vjs-captions-button .vjs-icon-placeholder:before,.video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder:before{content:"\f10d"}
.vjs-icon-chapters,.video-js .vjs-chapters-button .vjs-icon-placeholder{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-chapters:before,.video-js .vjs-chapters-button .vjs-icon-placeholder:before{content:"\f10e"}
.vjs-icon-share{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-share:before{content:"\f10f"}
.vjs-icon-cog{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-cog:before{content:"\f110"}
.vjs-icon-circle,.video-js .vjs-play-progress,.video-js .vjs-volume-level{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-circle:before,.video-js .vjs-play-progress:before,.video-js .vjs-volume-level:before{content:"\f111"}
.vjs-icon-circle-outline{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-circle-outline:before{content:"\f112"}
.vjs-icon-circle-inner-circle{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-circle-inner-circle:before{content:"\f113"}
.vjs-icon-hd{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-hd:before{content:"\f114"}
.vjs-icon-cancel,.video-js .vjs-control.vjs-close-button .vjs-icon-placeholder{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-cancel:before,.video-js .vjs-control.vjs-close-button .vjs-icon-placeholder:before{content:"\f115"}
.vjs-icon-replay,.video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-replay:before,.video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder:before{content:"\f116"}
.vjs-icon-facebook{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-facebook:before{content:"\f117"}
.vjs-icon-gplus{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-gplus:before{content:"\f118"}
.vjs-icon-linkedin{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-linkedin:before{content:"\f119"}
.vjs-icon-twitter{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-twitter:before{content:"\f11a"}
.vjs-icon-tumblr{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-tumblr:before{content:"\f11b"}
.vjs-icon-pinterest{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-pinterest:before{content:"\f11c"}
.vjs-icon-audio-description,.video-js .vjs-descriptions-button .vjs-icon-placeholder{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-audio-description:before,.video-js .vjs-descriptions-button .vjs-icon-placeholder:before{content:"\f11d"}
.vjs-icon-audio,.video-js .vjs-audio-button .vjs-icon-placeholder{font-family:VideoJS;font-weight:normal;font-style:normal}
.vjs-icon-audio:before,.video-js .vjs-audio-button .vjs-icon-placeholder:before{content:"\f11e"}
.video-js{display:block;vertical-align:top;box-sizing:border-box;color:#fff;background-color:#000;position:relative;padding:0;font-size:10px;line-height:1;font-weight:normal;font-style:normal;font-family:Arial,Helvetica,sans-serif}
.video-js:-moz-full-screen{position:absolute}
.video-js:-webkit-full-screen{width:100% !important;height:100% !important}
.video-js[tabindex="-1"]{outline:0}
.video-js *,.video-js *:before,.video-js *:after{box-sizing:inherit}
.video-js ul{font-family:inherit;font-size:inherit;line-height:inherit;list-style-position:outside;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}
.video-js.vjs-fluid,.video-js.vjs-16-9,.video-js.vjs-4-3{width:100%;max-width:100%;height:0}
.video-js.vjs-16-9{padding-top:56.25%}
.video-js.vjs-4-3{padding-top:75%}
.video-js.vjs-fill{width:100%;height:100%}
.video-js .vjs-tech{position:absolute;top:0;left:0;width:100%;height:100%}
body.vjs-full-window{padding:0;margin:0;height:100%;overflow-y:auto}
.vjs-full-window .video-js.vjs-fullscreen{position:fixed;overflow:hidden;z-index:1000;left:0;top:0;bottom:0;right:0}
.video-js.vjs-fullscreen{width:100% !important;height:100% !important;padding-top:0 !important}
.video-js.vjs-fullscreen.vjs-user-inactive{cursor:none}
.vjs-hidden{display:none !important}
.vjs-disabled{opacity:.5;cursor:default}
.video-js .vjs-offscreen{height:1px;left:-9999px;position:absolute;top:0;width:1px}
.vjs-lock-showing{display:block !important;opacity:1;visibility:visible}
.vjs-no-js{padding:20px;color:#fff;background-color:#000;font-size:18px;font-family:Arial,Helvetica,sans-serif;text-align:center;width:300px;height:150px;margin:0 auto}
.vjs-no-js a,.vjs-no-js a:visited{color:#66a8cc}
.video-js .vjs-big-play-button{font-size:3em;line-height:1.5em;height:1.5em;width:3em;display:block;position:absolute;top:10px;left:10px;padding:0;cursor:pointer;opacity:1;border:.06666em solid #fff;background-color:#2b333f;background-color:rgba(43,51,63,0.7);-webkit-border-radius:.3em;-moz-border-radius:.3em;border-radius:.3em;-webkit-transition:all .4s;-moz-transition:all .4s;-ms-transition:all .4s;-o-transition:all .4s;transition:all .4s}
.vjs-big-play-centered .vjs-big-play-button{top:50%;left:50%;margin-top:-0.75em;margin-left:-1.5em}
.video-js:hover .vjs-big-play-button,.video-js .vjs-big-play-button:focus{border-color:#fff;background-color:#73859f;background-color:rgba(115,133,159,0.5);-webkit-transition:all 0;-moz-transition:all 0;-ms-transition:all 0;-o-transition:all 0;transition:all 0}
.vjs-controls-disabled .vjs-big-play-button,.vjs-has-started .vjs-big-play-button,.vjs-using-native-controls .vjs-big-play-button,.vjs-error .vjs-big-play-button{display:none}
.vjs-has-started.vjs-paused.vjs-show-big-play-button-on-pause .vjs-big-play-button{display:block}
.video-js button{background:0;border:0;color:inherit;display:inline-block;overflow:visible;font-size:inherit;line-height:inherit;text-transform:none;text-decoration:none;transition:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}
.video-js .vjs-control.vjs-close-button{cursor:pointer;height:3em;position:absolute;right:0;top:.5em;z-index:2}
.video-js .vjs-modal-dialog{background:rgba(0,0,0,0.8);background:-webkit-linear-gradient(-90deg,rgba(0,0,0,0.8),rgba(255,255,255,0));background:linear-gradient(180deg,rgba(0,0,0,0.8),rgba(255,255,255,0));overflow:auto;box-sizing:content-box}
.video-js .vjs-modal-dialog>*{box-sizing:border-box}
.vjs-modal-dialog .vjs-modal-dialog-content{font-size:1.2em;line-height:1.5;padding:20px 24px;z-index:1}
.vjs-menu-button{cursor:pointer}
.vjs-menu-button.vjs-disabled{cursor:default}
.vjs-workinghover .vjs-menu-button.vjs-disabled:hover .vjs-menu{display:none}
.vjs-menu .vjs-menu-content{display:block;padding:0;margin:0;font-family:Arial,Helvetica,sans-serif;overflow:auto;box-sizing:content-box}
.vjs-menu .vjs-menu-content>*{box-sizing:border-box}
.vjs-scrubbing .vjs-menu-button:hover .vjs-menu{display:none}
.vjs-menu li{list-style:none;margin:0;padding:.2em 0;line-height:1.4em;font-size:1.2em;text-align:center;text-transform:lowercase}
.vjs-menu li.vjs-menu-item:focus,.vjs-menu li.vjs-menu-item:hover{background-color:#73859f;background-color:rgba(115,133,159,0.5)}
.vjs-menu li.vjs-selected,.vjs-menu li.vjs-selected:focus,.vjs-menu li.vjs-selected:hover{background-color:#fff;color:#2b333f}
.vjs-menu li.vjs-menu-title{text-align:center;text-transform:uppercase;font-size:1em;line-height:2em;padding:0;margin:0 0 .3em 0;font-weight:bold;cursor:default}
.vjs-menu-button-popup .vjs-menu{display:none;position:absolute;bottom:0;width:10em;left:-3em;height:0;margin-bottom:1.5em;border-top-color:rgba(43,51,63,0.7)}
.vjs-menu-button-popup .vjs-menu .vjs-menu-content{background-color:#2b333f;background-color:rgba(43,51,63,0.7);position:absolute;width:100%;bottom:1.5em;max-height:15em}
.vjs-workinghover .vjs-menu-button-popup:hover .vjs-menu,.vjs-menu-button-popup .vjs-menu.vjs-lock-showing{display:block}
.video-js .vjs-menu-button-inline{-webkit-transition:all .4s;-moz-transition:all .4s;-ms-transition:all .4s;-o-transition:all .4s;transition:all .4s;overflow:hidden}
.video-js .vjs-menu-button-inline:before{width:2.222222222em}
.video-js .vjs-menu-button-inline:hover,.video-js .vjs-menu-button-inline:focus,.video-js .vjs-menu-button-inline.vjs-slider-active,.video-js.vjs-no-flex .vjs-menu-button-inline{width:12em}
.vjs-menu-button-inline .vjs-menu{opacity:0;height:100%;width:auto;position:absolute;left:4em;top:0;padding:0;margin:0;-webkit-transition:all .4s;-moz-transition:all .4s;-ms-transition:all .4s;-o-transition:all .4s;transition:all .4s}
.vjs-menu-button-inline:hover .vjs-menu,.vjs-menu-button-inline:focus .vjs-menu,.vjs-menu-button-inline.vjs-slider-active .vjs-menu{display:block;opacity:1}
.vjs-no-flex .vjs-menu-button-inline .vjs-menu{display:block;opacity:1;position:relative;width:auto}
.vjs-no-flex .vjs-menu-button-inline:hover .vjs-menu,.vjs-no-flex .vjs-menu-button-inline:focus .vjs-menu,.vjs-no-flex .vjs-menu-button-inline.vjs-slider-active .vjs-menu{width:auto}
.vjs-menu-button-inline .vjs-menu-content{width:auto;height:100%;margin:0;overflow:hidden}
.video-js .vjs-control-bar{display:none;width:100%;position:absolute;bottom:0;left:0;right:0;height:3em;background-color:#2b333f;background-color:rgba(43,51,63,0.7)}
.vjs-has-started .vjs-control-bar{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;visibility:visible;opacity:1;-webkit-transition:visibility .1s,opacity .1s;-moz-transition:visibility .1s,opacity .1s;-ms-transition:visibility .1s,opacity .1s;-o-transition:visibility .1s,opacity .1s;transition:visibility .1s,opacity .1s}
.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{visibility:visible;opacity:0;-webkit-transition:visibility 1s,opacity 1s;-moz-transition:visibility 1s,opacity 1s;-ms-transition:visibility 1s,opacity 1s;-o-transition:visibility 1s,opacity 1s;transition:visibility 1s,opacity 1s}
.vjs-controls-disabled .vjs-control-bar,.vjs-using-native-controls .vjs-control-bar,.vjs-error .vjs-control-bar{display:none !important}
.vjs-audio.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{opacity:1;visibility:visible}
.vjs-has-started.vjs-no-flex .vjs-control-bar{display:table}
.video-js .vjs-control{position:relative;text-align:center;margin:0;padding:0;height:100%;width:4em;-webkit-box-flex:none;-moz-box-flex:none;-webkit-flex:none;-ms-flex:none;flex:none}
.vjs-button>.vjs-icon-placeholder:before{font-size:1.8em;line-height:1.67}
.video-js .vjs-control:focus:before,.video-js .vjs-control:hover:before,.video-js .vjs-control:focus{text-shadow:0 0 1em white}
.video-js .vjs-control-text{border:0;clip:rect(0 0 0 0);height:1px;overflow:hidden;padding:0;position:absolute;width:1px}
.vjs-no-flex .vjs-control{display:table-cell;vertical-align:middle}
.video-js .vjs-custom-control-spacer{display:none}
.video-js .vjs-progress-control{cursor:pointer;-webkit-box-flex:auto;-moz-box-flex:auto;-webkit-flex:auto;-ms-flex:auto;flex:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;min-width:4em}
.vjs-live .vjs-progress-control{display:none}
.vjs-no-flex .vjs-progress-control{width:auto}
.video-js .vjs-progress-holder{-webkit-box-flex:auto;-moz-box-flex:auto;-webkit-flex:auto;-ms-flex:auto;flex:auto;-webkit-transition:all .2s;-moz-transition:all .2s;-ms-transition:all .2s;-o-transition:all .2s;transition:all .2s;height:.3em}
.video-js .vjs-progress-control .vjs-progress-holder{margin:0 10px}
.video-js .vjs-progress-control:hover .vjs-progress-holder{font-size:1.666666666666666666em}
.video-js .vjs-progress-holder .vjs-play-progress,.video-js .vjs-progress-holder .vjs-load-progress,.video-js .vjs-progress-holder .vjs-load-progress div{position:absolute;display:block;height:100%;margin:0;padding:0;width:0;left:0;top:0}
.video-js .vjs-play-progress{background-color:#fff}
.video-js .vjs-play-progress:before{font-size:.9em;position:absolute;right:-0.5em;top:-0.333333333333333em;z-index:1}
.video-js .vjs-load-progress{background:#bfc7d3;background:rgba(115,133,159,0.5)}
.video-js .vjs-load-progress div{background:white;background:rgba(115,133,159,0.75)}
.video-js .vjs-time-tooltip{background-color:#fff;background-color:rgba(255,255,255,0.8);-webkit-border-radius:.3em;-moz-border-radius:.3em;border-radius:.3em;color:#000;float:right;font-family:Arial,Helvetica,sans-serif;font-size:1em;padding:6px 8px 8px 8px;pointer-events:none;position:relative;top:-3.4em;visibility:hidden;z-index:1}
.video-js .vjs-progress-holder:focus .vjs-time-tooltip{display:none}
.video-js .vjs-progress-control:hover .vjs-time-tooltip,.video-js .vjs-progress-control:hover .vjs-progress-holder:focus .vjs-time-tooltip{display:block;font-size:.6em;visibility:visible}
.video-js .vjs-progress-control .vjs-mouse-display{display:none;position:absolute;width:1px;height:100%;background-color:#000;z-index:1}
.vjs-no-flex .vjs-progress-control .vjs-mouse-display{z-index:0}
.video-js .vjs-progress-control:hover .vjs-mouse-display{display:block}
.video-js.vjs-user-inactive .vjs-progress-control .vjs-mouse-display{visibility:hidden;opacity:0;-webkit-transition:visibility 1s,opacity 1s;-moz-transition:visibility 1s,opacity 1s;-ms-transition:visibility 1s,opacity 1s;-o-transition:visibility 1s,opacity 1s;transition:visibility 1s,opacity 1s}
.video-js.vjs-user-inactive.vjs-no-flex .vjs-progress-control .vjs-mouse-display{display:none}
.vjs-mouse-display .vjs-time-tooltip{color:#fff;background-color:#000;background-color:rgba(0,0,0,0.8)}
.video-js .vjs-slider{position:relative;cursor:pointer;padding:0;margin:0 .45em 0 .45em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#73859f;background-color:rgba(115,133,159,0.5)}
.video-js .vjs-slider:focus{text-shadow:0 0 1em white;-webkit-box-shadow:0 0 1em #fff;-moz-box-shadow:0 0 1em #fff;box-shadow:0 0 1em #fff}
.video-js .vjs-mute-control{cursor:pointer;-webkit-box-flex:none;-moz-box-flex:none;-webkit-flex:none;-ms-flex:none;flex:none;padding-left:2em;padding-right:2em;padding-bottom:3em}
.video-js .vjs-volume-control{cursor:pointer;margin-right:1em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}
.video-js .vjs-volume-control.vjs-volume-horizontal{width:5em}
.video-js .vjs-volume-panel .vjs-volume-control{visibility:visible;opacity:0;width:1px;height:1px;margin-left:-1px}
.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical{-ms-filter:"alpha(opacity=0)"}
.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical .vjs-volume-bar,.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical .vjs-volume-level{-ms-filter:"alpha(opacity=0)"}
.video-js .vjs-volume-panel{-webkit-transition:width 1s;-moz-transition:width 1s;-ms-transition:width 1s;-o-transition:width 1s;transition:width 1s}
.video-js .vjs-volume-panel:hover .vjs-volume-control,.video-js .vjs-volume-panel:active .vjs-volume-control,.video-js .vjs-volume-panel:focus .vjs-volume-control,.video-js .vjs-volume-panel .vjs-volume-control:hover,.video-js .vjs-volume-panel .vjs-volume-control:active,.video-js .vjs-volume-panel .vjs-volume-control:focus,.video-js .vjs-volume-panel .vjs-mute-control:hover ~ .vjs-volume-control,.video-js .vjs-volume-panel .vjs-mute-control:active ~ .vjs-volume-control,.video-js .vjs-volume-panel .vjs-mute-control:focus ~ .vjs-volume-control,.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active{visibility:visible;opacity:1;position:relative;-webkit-transition:visibility .1s,opacity .1s,height .1s,width .1s,left 0,top 0;-moz-transition:visibility .1s,opacity .1s,height .1s,width .1s,left 0,top 0;-ms-transition:visibility .1s,opacity .1s,height .1s,width .1s,left 0,top 0;-o-transition:visibility .1s,opacity .1s,height .1s,width .1s,left 0,top 0;transition:visibility .1s,opacity .1s,height .1s,width .1s,left 0,top 0}
.video-js .vjs-volume-panel:hover .vjs-volume-control.vjs-volume-horizontal,.video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-horizontal,.video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-horizontal,.video-js .vjs-volume-panel .vjs-volume-control:hover.vjs-volume-horizontal,.video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-horizontal,.video-js .vjs-volume-panel .vjs-volume-control:focus.vjs-volume-horizontal,.video-js .vjs-volume-panel .vjs-mute-control:hover ~ .vjs-volume-control.vjs-volume-horizontal,.video-js .vjs-volume-panel .vjs-mute-control:active ~ .vjs-volume-control.vjs-volume-horizontal,.video-js .vjs-volume-panel .vjs-mute-control:focus ~ .vjs-volume-control.vjs-volume-horizontal,.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-horizontal{width:5em;height:3em}
.video-js .vjs-volume-panel:hover .vjs-volume-control.vjs-volume-vertical,.video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-vertical,.video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-vertical,.video-js .vjs-volume-panel .vjs-volume-control:hover.vjs-volume-vertical,.video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-vertical,.video-js .vjs-volume-panel .vjs-volume-control:focus.vjs-volume-vertical,.video-js .vjs-volume-panel .vjs-mute-control:hover ~ .vjs-volume-control.vjs-volume-vertical,.video-js .vjs-volume-panel .vjs-mute-control:active ~ .vjs-volume-control.vjs-volume-vertical,.video-js .vjs-volume-panel .vjs-mute-control:focus ~ .vjs-volume-control.vjs-volume-vertical,.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-vertical{-ms-filter:"alpha(opacity=100)"}
.video-js .vjs-volume-panel:hover .vjs-volume-control.vjs-volume-vertical .vjs-volume-bar,.video-js .vjs-volume-panel:hover .vjs-volume-control.vjs-volume-vertical .vjs-volume-level,.video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-vertical .vjs-volume-bar,.video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-vertical .vjs-volume-level,.video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-vertical .vjs-volume-bar,.video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-vertical .vjs-volume-level,.video-js .vjs-volume-panel .vjs-volume-control:hover.vjs-volume-vertical .vjs-volume-bar,.video-js .vjs-volume-panel .vjs-volume-control:hover.vjs-volume-vertical .vjs-volume-level,.video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-vertical .vjs-volume-bar,.video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-vertical .vjs-volume-level,.video-js .vjs-volume-panel .vjs-volume-control:focus.vjs-volume-vertical .vjs-volume-bar,.video-js .vjs-volume-panel .vjs-volume-control:focus.vjs-volume-vertical .vjs-volume-level,.video-js .vjs-volume-panel .vjs-mute-control:hover ~ .vjs-volume-control.vjs-volume-vertical .vjs-volume-bar,.video-js .vjs-volume-panel .vjs-mute-control:hover ~ .vjs-volume-control.vjs-volume-vertical .vjs-volume-level,.video-js .vjs-volume-panel .vjs-mute-control:active ~ .vjs-volume-control.vjs-volume-vertical .vjs-volume-bar,.video-js .vjs-volume-panel .vjs-mute-control:active ~ .vjs-volume-control.vjs-volume-vertical .vjs-volume-level,.video-js .vjs-volume-panel .vjs-mute-control:focus ~ .vjs-volume-control.vjs-volume-vertical .vjs-volume-bar,.video-js .vjs-volume-panel .vjs-mute-control:focus ~ .vjs-volume-control.vjs-volume-vertical .vjs-volume-level,.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-vertical .vjs-volume-bar,.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-vertical .vjs-volume-level{-ms-filter:"alpha(opacity=100)"}
.video-js .vjs-volume-panel.vjs-volume-panel-horizontal:hover,.video-js .vjs-volume-panel.vjs-volume-panel-horizontal:focus,.video-js .vjs-volume-panel.vjs-volume-panel-horizontal:active,.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active{width:9em;-webkit-transition:width .1s;-moz-transition:width .1s;-ms-transition:width .1s;-o-transition:width .1s;transition:width .1s}
.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical{height:8em;width:3em;left:-3.5em;-webkit-transition:visibility 1s,opacity 1s,height 1s 1s,width 1s 1s,left 1s 1s,top 1s 1s;-moz-transition:visibility 1s,opacity 1s,height 1s 1s,width 1s 1s,left 1s 1s,top 1s 1s;-ms-transition:visibility 1s,opacity 1s,height 1s 1s,width 1s 1s,left 1s 1s,top 1s 1s;-o-transition:visibility 1s,opacity 1s,height 1s 1s,width 1s 1s,left 1s 1s,top 1s 1s;transition:visibility 1s,opacity 1s,height 1s 1s,width 1s 1s,left 1s 1s,top 1s 1s}
.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal{-webkit-transition:visibility 1s,opacity 1s,height 1s 1s,width 1s,left 1s 1s,top 1s 1s;-moz-transition:visibility 1s,opacity 1s,height 1s 1s,width 1s,left 1s 1s,top 1s 1s;-ms-transition:visibility 1s,opacity 1s,height 1s 1s,width 1s,left 1s 1s,top 1s 1s;-o-transition:visibility 1s,opacity 1s,height 1s 1s,width 1s,left 1s 1s,top 1s 1s;transition:visibility 1s,opacity 1s,height 1s 1s,width 1s,left 1s 1s,top 1s 1s}
.video-js.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal{width:5em;height:3em;visibility:visible;opacity:1;position:relative;-webkit-transition:none;-moz-transition:none;-ms-transition:none;-o-transition:none;transition:none}
.video-js.vjs-no-flex .vjs-volume-control.vjs-volume-vertical,.video-js.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical{position:absolute;bottom:3em;left:.5em}
.video-js .vjs-volume-panel{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}
.video-js .vjs-volume-bar{margin:1.35em .45em}
.vjs-volume-bar.vjs-slider-horizontal{width:5em;height:.3em}
.vjs-volume-bar.vjs-slider-vertical{width:.3em;height:5em;margin:1.35em auto}
.video-js .vjs-volume-level{position:absolute;bottom:0;left:0;background-color:#fff}
.video-js .vjs-volume-level:before{position:absolute;font-size:.9em}
.vjs-slider-vertical .vjs-volume-level{width:.3em}
.vjs-slider-vertical .vjs-volume-level:before{top:-0.5em;left:-0.3em}
.vjs-slider-horizontal .vjs-volume-level{height:.3em}
.vjs-slider-horizontal .vjs-volume-level:before{top:-0.3em;right:-0.5em}
.video-js .vjs-volume-panel.vjs-volume-panel-vertical{width:4em}
.vjs-volume-bar.vjs-slider-vertical .vjs-volume-level{height:100%}
.vjs-volume-bar.vjs-slider-horizontal .vjs-volume-level{width:100%}
.video-js .vjs-volume-vertical{width:3em;height:8em;bottom:8em;background-color:#2b333f;background-color:rgba(43,51,63,0.7)}
.video-js .vjs-volume-horizontal .vjs-menu{left:-2em}
.vjs-poster{display:inline-block;vertical-align:middle;background-repeat:no-repeat;background-position:50% 50%;background-size:contain;background-color:#000;cursor:pointer;margin:0;padding:0;position:absolute;top:0;right:0;bottom:0;left:0;height:100%}
.vjs-poster img{display:block;vertical-align:middle;margin:0 auto;max-height:100%;padding:0;width:100%}
.vjs-has-started .vjs-poster{display:none}
.vjs-audio.vjs-has-started .vjs-poster{display:block}
.vjs-using-native-controls .vjs-poster{display:none}
.video-js .vjs-live-control{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:flex-start;-webkit-align-items:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-flex:auto;-moz-box-flex:auto;-webkit-flex:auto;-ms-flex:auto;flex:auto;font-size:1em;line-height:3em}
.vjs-no-flex .vjs-live-control{display:table-cell;width:auto;text-align:left}
.video-js .vjs-time-control{-webkit-box-flex:none;-moz-box-flex:none;-webkit-flex:none;-ms-flex:none;flex:none;font-size:1em;line-height:3em;min-width:2em;width:auto;padding-left:1em;padding-right:1em}
.vjs-live .vjs-time-control{display:none}
.video-js .vjs-current-time,.vjs-no-flex .vjs-current-time{display:none}
.vjs-no-flex .vjs-remaining-time.vjs-time-control.vjs-control{width:0 !important;white-space:nowrap}
.video-js .vjs-duration,.vjs-no-flex .vjs-duration{display:none}
.vjs-time-divider{display:none;line-height:3em}
.vjs-live .vjs-time-divider{display:none}
.video-js .vjs-play-control .vjs-icon-placeholder{cursor:pointer;-webkit-box-flex:none;-moz-box-flex:none;-webkit-flex:none;-ms-flex:none;flex:none}
.vjs-text-track-display{position:absolute;bottom:3em;left:0;right:0;top:0;pointer-events:none}
.video-js.vjs-user-inactive.vjs-playing .vjs-text-track-display{bottom:1em}
.video-js .vjs-text-track{font-size:1.4em;text-align:center;margin-bottom:.1em;background-color:#000;background-color:rgba(0,0,0,0.5)}
.vjs-subtitles{color:#fff}
.vjs-captions{color:#fc6}
.vjs-tt-cue{display:block}
video::-webkit-media-text-track-display{-moz-transform:translateY(-3em);-ms-transform:translateY(-3em);-o-transform:translateY(-3em);-webkit-transform:translateY(-3em);transform:translateY(-3em)}
.video-js.vjs-user-inactive.vjs-playing video::-webkit-media-text-track-display{-moz-transform:translateY(-1.5em);-ms-transform:translateY(-1.5em);-o-transform:translateY(-1.5em);-webkit-transform:translateY(-1.5em);transform:translateY(-1.5em)}
.video-js .vjs-fullscreen-control{cursor:pointer;-webkit-box-flex:none;-moz-box-flex:none;-webkit-flex:none;-ms-flex:none;flex:none}
.vjs-playback-rate>.vjs-menu-button,.vjs-playback-rate .vjs-playback-rate-value{position:absolute;top:0;left:0;width:100%;height:100%}
.vjs-playback-rate .vjs-playback-rate-value{pointer-events:none;font-size:1.5em;line-height:2;text-align:center}
.vjs-playback-rate .vjs-menu{width:4em;left:0}
.vjs-error .vjs-error-display .vjs-modal-dialog-content{font-size:1.4em;text-align:center}
.vjs-error .vjs-error-display:before{color:#fff;content:'X';font-family:Arial,Helvetica,sans-serif;font-size:4em;left:0;line-height:1;margin-top:-0.5em;position:absolute;text-shadow:.05em .05em .1em #000;text-align:center;top:50%;vertical-align:middle;width:100%}
.vjs-loading-spinner{display:none;position:absolute;top:50%;left:50%;margin:-25px 0 0 -25px;opacity:.85;text-align:left;border:6px solid rgba(43,51,63,0.7);box-sizing:border-box;background-clip:padding-box;width:50px;height:50px;border-radius:25px}
.vjs-seeking .vjs-loading-spinner,.vjs-waiting .vjs-loading-spinner{display:block}
.vjs-loading-spinner:before,.vjs-loading-spinner:after{content:"";position:absolute;margin:-6px;box-sizing:inherit;width:inherit;height:inherit;border-radius:inherit;opacity:1;border:inherit;border-color:transparent;border-top-color:white}
.vjs-seeking .vjs-loading-spinner:before,.vjs-seeking .vjs-loading-spinner:after,.vjs-waiting .vjs-loading-spinner:before,.vjs-waiting .vjs-loading-spinner:after{-webkit-animation:vjs-spinner-spin 1.1s cubic-bezier(0.6,0.2,0,0.8) infinite,vjs-spinner-fade 1.1s linear infinite;animation:vjs-spinner-spin 1.1s cubic-bezier(0.6,0.2,0,0.8) infinite,vjs-spinner-fade 1.1s linear infinite}
.vjs-seeking .vjs-loading-spinner:before,.vjs-waiting .vjs-loading-spinner:before{border-top-color:white}
.vjs-seeking .vjs-loading-spinner:after,.vjs-waiting .vjs-loading-spinner:after{border-top-color:white;-webkit-animation-delay:.44s;animation-delay:.44s}
@keyframes vjs-spinner-spin{100%{transform:rotate(360deg)}
}
@-webkit-keyframes vjs-spinner-spin{100%{-webkit-transform:rotate(360deg)}
}
@keyframes vjs-spinner-fade{0{border-top-color:#73859f}
20%{border-top-color:#73859f}
35%{border-top-color:white}
60%{border-top-color:#73859f}
100%{border-top-color:#73859f}
}
@-webkit-keyframes vjs-spinner-fade{0{border-top-color:#73859f}
20%{border-top-color:#73859f}
35%{border-top-color:white}
60%{border-top-color:#73859f}
100%{border-top-color:#73859f}
}
.vjs-chapters-button .vjs-menu ul{width:24em}
.video-js .vjs-subs-caps-button+.vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder{position:absolute}
.video-js .vjs-subs-caps-button+.vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before{font-family:VideoJS;content:"\f10d";font-size:1.5em;line-height:inherit}
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-custom-control-spacer{-webkit-box-flex:auto;-moz-box-flex:auto;-webkit-flex:auto;-ms-flex:auto;flex:auto}
.video-js.vjs-layout-tiny:not(.vjs-fullscreen).vjs-no-flex .vjs-custom-control-spacer{width:auto}
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-current-time,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-time-divider,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-duration,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-remaining-time,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-playback-rate,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-progress-control,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-mute-control,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-volume-control,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-chapters-button,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-descriptions-button,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-captions-button,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-subtitles-button,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-audio-button{display:none}
.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-current-time,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-time-divider,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-duration,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-remaining-time,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-playback-rate,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-mute-control,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-volume-control,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-chapters-button,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-descriptions-button,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-captions-button,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-subtitles-button,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-audio-button{display:none}
.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-current-time,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-time-divider,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-duration,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-remaining-time,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-playback-rate,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-mute-control,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-volume-control,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-chapters-button,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-descriptions-button,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-captions-button,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-subtitles-button .vjs-audio-button{display:none}
.vjs-modal-dialog.vjs-text-track-settings{background-color:#2b333f;background-color:rgba(43,51,63,0.75);color:#fff;height:70%}
.vjs-text-track-settings .vjs-modal-dialog-content{display:table}
.vjs-text-track-settings .vjs-track-settings-colors,.vjs-text-track-settings .vjs-track-settings-font,.vjs-text-track-settings .vjs-track-settings-controls{display:table-cell}
.vjs-text-track-settings .vjs-track-settings-controls{text-align:right;vertical-align:bottom}
.vjs-text-track-settings fieldset{margin:5px;padding:3px;border:0}
.vjs-text-track-settings fieldset span{display:inline-block;margin-left:5px}
.vjs-text-track-settings legend{color:#fff;margin:0 0 5px 0}
.vjs-text-track-settings .vjs-label{position:absolute;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px);display:block;margin:0 0 5px 0;padding:0;border:0;height:1px;width:1px;overflow:hidden}
.vjs-track-settings-controls button:focus,.vjs-track-settings-controls button:active{outline-style:solid;outline-width:medium;background-image:linear-gradient(0,#fff 88%,#73859f 100%)}
.vjs-track-settings-controls button:hover{color:rgba(43,51,63,0.75)}
.vjs-track-settings-controls button{background-color:#fff;background-image:linear-gradient(-180deg,#fff 88%,#73859f 100%);color:#2b333f;cursor:pointer;border-radius:2px}
.vjs-track-settings-controls .vjs-default-button{margin-right:1em}
@media print{.video-js>*:not(.vjs-tech):not(.vjs-poster){visibility:hidden}
}
@media \0creen{.vjs-user-inactive.vjs-playing .vjs-control-bar:before{content:""}
}
@media \0creen{.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{visibility:hidden}
}
.nc-featured-content__heading{margin:0;font-weight:bold;font-size:22px;line-height:28px;margin-bottom:25px;margin-bottom:15px}
@media screen and (min-width:960px){.nc-featured-content__heading{font-size:30px;line-height:40px;margin-bottom:22px}
}
.nc-featured-content__article-list{list-style:none;padding:0}
.nc-featured-content__article-header{margin:0;font-weight:bold;font-size:16px;line-height:26px;margin-bottom:13px}
@media screen and (min-width:960px){.nc-featured-content__article-header{font-size:18px;line-height:28px;margin-bottom:15px}
}
.nc-featured-content__article-summary{font-size:16px;line-height:26px}
@media screen and (max-width:959px){.nc-featured-content__article-summary{font-size:14px;line-height:22px}
}
@media screen and (min-width:960px){.nc-featured-content .col-sm-4{max-width:320px}
}
.nc-featured-content__article-img{background-size:cover;width:100%;height:170px;background-color:#ddd;background-position:50%}
@media screen and (max-width:959px){.nc-featured-content__article-img{width:100%;margin-bottom:15px}
}
.nc-featured-content__article-item{padding-bottom:30px}
.nc-featured-content__article-read-more{font-weight:bold}
.nc-featured-content__link{font-size:12px;line-height:1.67;font-weight:bold;color:inherit;text-transform:uppercase;letter-spacing:.06em;position:relative;font-family:'proxima-nova','arial','helvetica',sans-serif;display:inline-block}
@media screen and (min-width:960px){.nc-featured-content__row{display:flex;align-items:center}
}
.nc-rail .nc-featured-content__heading{margin:0;font-weight:bold;font-size:16px;line-height:26px;margin-bottom:13px;margin-bottom:15px}
@media screen and (min-width:960px){.nc-rail .nc-featured-content__heading{font-size:18px;line-height:28px;margin-bottom:15px}
}
.nc-rail .nc-featured-content__article-img{width:85px;height:85px}
.nc-rail .nc-featured-content__article-header{font-size:14px}
.nc-rail .nc-featured-content__article-summary{display:none}
.nc-rail .nc-featured-content__article-read-more{display:none}
.nc-rail .nc-featured-content__row{display:flex;align-items:flex-start}
.nc-anchor-sections__sections-container{display:flex;justify-content:center;flex-wrap:wrap;margin-bottom:22px}
@media screen and (min-width:960px){.nc-anchor-sections__sections-container{display:block}
}
.nc-anchor-sections__section{margin:10px}
@media screen and (min-width:960px){.nc-anchor-sections__section{margin:0 15px 0 0}
.nc-anchor-sections__section:last-child{margin-right:0}
}
.nc-anchor{min-height:5px}
.nc-anchor__placeholder{margin:0;font-weight:bold}
.nc-accordion__panel-title{padding:10px;display:block;font-size:18px;font-weight:bold;border:1px solid #767676;background-color:#000}
.nc-accordion__panel-title,.nc-accordion__panel-title:hover,.nc-accordion__panel-title:focus{color:#fff;text-decoration:none}
.nc-accordion__panel-content{padding:10px;border:1px solid #767676;border-top:0}
.nc-accordion__panel-content table,.nc-accordion__panel-content table td{border:1px solid black}
.nc-accordion__panel-content table th{color:white;background:black}
.nc-accordion__panel-content table th,.nc-accordion__panel-content table td{padding:7px 10px}
.nc-two-column-list:not(.parbase){position:relative;height:742px;background-size:cover;background-repeat:no-repeat;background-color:#000;color:#fff}
.nc-two-column-list:not(.parbase):before,.nc-two-column-list:not(.parbase):after{content:" ";display:table}
.nc-two-column-list:not(.parbase):after{clear:both}
@media screen and (max-width:959px){.nc-two-column-list:not(.parbase){height:auto}
}
.nc-two-column-list__heading{margin:0;font-weight:bold;font-size:48px;line-height:54px;color:#feed00}
@media screen and (max-width:959px){.nc-two-column-list__heading{font-size:28px;line-height:32px}
}
.nc-two-column-list__link{font-size:12px;line-height:1.67;font-weight:bold;color:inherit;text-transform:uppercase;letter-spacing:.06em;position:relative;font-family:'proxima-nova','arial','helvetica',sans-serif;display:inline-block}
.nc-two-column-list__paragraph{font-size:16px;line-height:26px;margin-top:16px;margin-bottom:40px}
@media screen and (max-width:959px){.nc-two-column-list__paragraph{font-size:14px;line-height:22px}
}
.nc-two-column-list__nav{list-style:none;padding:0}
.nc-two-column-list__nav>li{margin-bottom:24px}
.nc-two-column-list__column--two{margin-top:30px}
@media screen and (min-width:1101px){.nc-two-column-list__column--two{margin-top:152px}
}
.nc-two-column-list .nc-component-container{padding-top:60px;padding-bottom:60px;position:relative;height:100%}
@media screen and (min-width:960px){.nc-two-column-list .nc-component-container:before,.nc-two-column-list .nc-component-container:after{content:'';width:0;height:0;position:absolute}
.nc-two-column-list .nc-component-container:before{border-left:20px solid transparent;border-right:20px solid transparent;border-top:36px solid #fff;top:0;left:0}
.nc-two-column-list .nc-component-container:after{border-left:134px solid transparent;border-right:134px solid transparent;border-bottom:230px solid #fff;bottom:0;left:50%;margin-left:-106px}
}
.nc-three-content:not(.parbase){transition:padding .3s ease;padding:90px 0;background-color:#fff;color:#000}
.nc-three-content:not(.parbase):before,.nc-three-content:not(.parbase):after{content:" ";display:table}
.nc-three-content:not(.parbase):after{clear:both}
@media screen and (min-width:960px){.nc-three-content:not(.parbase){padding:147px 0 60px}
}
.nc-three-content__heading{margin:0;font-weight:bold;font-size:22px;line-height:28px;margin-bottom:25px}
@media screen and (min-width:960px){.nc-three-content__heading{font-size:30px;line-height:40px;margin-bottom:22px}
}
.nc-three-content__link{font-size:12px;line-height:1.67;font-weight:bold;color:inherit;text-transform:uppercase;letter-spacing:.06em;position:relative;font-family:'proxima-nova','arial','helvetica',sans-serif;display:inline-block}
.nc-three-content__paragraph{font-size:16px;line-height:26px;margin-top:16px;margin-bottom:40px}
@media screen and (max-width:959px){.nc-three-content__paragraph{font-size:14px;line-height:22px}
}
.nc-three-content__nav{list-style:none;padding:0}
.nc-three-content__nav>li{margin-bottom:24px}
.nc-library-hero-banner:not(.parbase){position:relative;height:742px;background-size:cover;background-repeat:no-repeat;background-color:#fff;color:#000}
.nc-library-hero-banner:not(.parbase):before,.nc-library-hero-banner:not(.parbase):after{content:" ";display:table}
.nc-library-hero-banner:not(.parbase):after{clear:both}
@media screen and (max-width:959px){.nc-library-hero-banner:not(.parbase){height:auto}
}
.nc-library-hero-banner:not(.parbase){height:580px}
@media screen and (max-width:959px){.nc-library-hero-banner:not(.parbase){padding:60px 0}
}
.nc-library-hero-banner__heading{margin:0;font-weight:bold;font-size:48px;line-height:54px;margin-bottom:30px}
@media screen and (max-width:959px){.nc-library-hero-banner__heading{font-size:28px;line-height:32px}
}
.nc-library-hero-banner__nav{list-style:none;padding:0}
.nc-library-hero-banner__nav-item{margin-bottom:15px}
.nc-library-hero-banner__nav-item>a{font-weight:bold;font-size:20px;color:inherit}
@media screen and (max-width:959px){.nc-library-hero-banner__nav-item>a{font-size:16px}
}
.nc-library-hero-banner .nc-component-container{position:relative;top:50%;transform:translateY(-50%)}
.nc-library-hero-banner__next-link{font-size:12px;line-height:1.67;font-weight:bold;color:inherit;text-transform:uppercase;letter-spacing:.06em;position:relative;font-family:'proxima-nova','arial','helvetica',sans-serif;display:inline-block}
.nc-library-hero-banner__next-link-container{position:absolute;bottom:30px;left:30px}
@media screen and (max-width:959px){.nc-library-hero-banner__next-link-container{display:none}
}
.nc-library-feature:not(.parbase){transition:padding .3s ease;padding:90px 0;background-color:#fff;color:#000}
.nc-library-feature:not(.parbase):before,.nc-library-feature:not(.parbase):after{content:" ";display:table}
.nc-library-feature:not(.parbase):after{clear:both}
@media screen and (min-width:960px){.nc-library-feature:not(.parbase){padding:147px 0 60px}
}
.nc-library-feature__container:before,.nc-library-feature__container:after{content:" ";display:table}
.nc-library-feature__container:after{clear:both}
.nc-library-feature__asset{float:left;margin-right:60px;width:400px;max-width:100%}
@media screen and (max-width:959px){.nc-library-feature__asset{margin-bottom:30px}
}
.nc-library-feature__heading{margin:0;font-weight:bold;font-size:48px;line-height:54px;margin-top:60px;margin-bottom:30px}
@media screen and (max-width:959px){.nc-library-feature__heading{font-size:28px;line-height:32px}
}
.nc-library-feature__description{font-size:16px;line-height:26px;margin-bottom:30px}
@media screen and (max-width:959px){.nc-library-feature__description{font-size:14px;line-height:22px}
}
.nc-library-feature__link{font-size:12px;line-height:1.67;font-weight:bold;color:inherit;text-transform:uppercase;letter-spacing:.06em;position:relative;font-family:'proxima-nova','arial','helvetica',sans-serif;display:inline-block}
@media screen and (max-width:959px){.nc-library-feature__link{margin-bottom:30px}
}
.nc-library-feature__button{display:inline-block;background-color:#feed00;color:#000;transition:background-color 200ms ease;height:70px;line-height:70px;border:0;padding:0 60px;text-transform:uppercase;font-size:12px;font-weight:bold;text-align:center;outline:0;position:absolute;right:30px}
.nc-library-feature__button:hover,.nc-library-feature__button:focus{color:#feed00;background-color:#000}
@media screen and (max-width:959px){.nc-library-feature__button{width:100%;position:static}
}
.nc-guidelines-hero-banner:not(.parbase){position:relative;height:742px;background-size:cover;background-repeat:no-repeat;background-color:#000;color:#fff}
.nc-guidelines-hero-banner:not(.parbase):before,.nc-guidelines-hero-banner:not(.parbase):after{content:" ";display:table}
.nc-guidelines-hero-banner:not(.parbase):after{clear:both}
@media screen and (max-width:959px){.nc-guidelines-hero-banner:not(.parbase){height:auto}
}
@media screen and (max-width:959px){.nc-guidelines-hero-banner:not(.parbase){padding:60px 0}
}
.nc-guidelines-hero-banner--dark:not(.parbase){color:#000;background-color:#fff}
.nc-guidelines-hero-banner--two-columns .nc-guidelines-hero-banner__nav:before,.nc-guidelines-hero-banner--two-columns .nc-guidelines-hero-banner__nav:after{content:" ";display:table}
.nc-guidelines-hero-banner--two-columns .nc-guidelines-hero-banner__nav:after{clear:both}
.nc-guidelines-hero-banner--two-columns .nc-guidelines-hero-banner__nav-item{float:left;width:50%;padding-right:30px}
.nc-guidelines-hero-banner--nobgimage{background-image:none !important}
.nc-guidelines-hero-banner__image{margin:auto;margin-bottom:30px;max-width:80%}
@media screen and (min-width:1101px){.nc-guidelines-hero-banner__image{max-width:50%;position:absolute;right:0}
}
.nc-guidelines-hero-banner__heading{margin:0;font-weight:bold;font-size:48px;line-height:54px;margin-bottom:30px}
@media screen and (max-width:959px){.nc-guidelines-hero-banner__heading{font-size:28px;line-height:32px}
}
.nc-guidelines-hero-banner__nav{list-style:none;padding:0}
.nc-guidelines-hero-banner__nav-item{margin-bottom:15px}
.nc-guidelines-hero-banner__nav-item>a{font-weight:bold;font-size:20px;color:inherit}
@media screen and (max-width:959px){.nc-guidelines-hero-banner__nav-item>a{font-size:16px}
}
.nc-guidelines-hero-banner__button{display:inline-block;background-color:#feed00;color:#000;transition:background-color 200ms ease;height:70px;line-height:70px;border:0;padding:0 60px;text-transform:uppercase;font-size:12px;font-weight:bold;text-align:center;outline:0;position:absolute;bottom:-35px;right:30px;height:60px;line-height:60px}
.nc-guidelines-hero-banner__button:hover,.nc-guidelines-hero-banner__button:focus{color:#feed00;background-color:#000}
@media screen and (min-width:960px){.nc-guidelines-hero-banner .nc-component-container{position:relative;top:50%;transform:translateY(-50%)}
}
.nc-guidelines-footer{margin:0 30px;border-top:1px solid #000;padding:60px 0}
.nc-guidelines-footer:before,.nc-guidelines-footer:after{content:" ";display:table}
.nc-guidelines-footer:after{clear:both}
.nc-guidelines-footer__nav--prev{float:left;text-align:left}
.nc-guidelines-footer__nav--next{float:right;text-align:right}
.nc-guidelines-footer__nav--prev .nc-guidelines-footer__link{font-size:12px;line-height:1.67;font-weight:bold;color:inherit;text-transform:uppercase;letter-spacing:.06em;position:relative;font-family:'proxima-nova','arial','helvetica',sans-serif;display:inline-block}
.nc-guidelines-footer__nav--prev .nc-guidelines-footer__link .nc-icon{-moz-transform:scale(-1,-1);-o-transform:scale(-1,-1);-webkit-transform:scale(-1,-1);transform:scale(-1,-1);filter:FlipH;-ms-filter:"FlipH"}
.nc-guidelines-footer__nav--next .nc-guidelines-footer__link{font-size:12px;line-height:1.67;font-weight:bold;color:inherit;text-transform:uppercase;letter-spacing:.06em;position:relative;font-family:'proxima-nova','arial','helvetica',sans-serif;display:inline-block}
.nc-guidelines-footer__nav--prev .nc-guidelines-footer__label{padding-left:36px}
.nc-guidelines-footer__nav--next .nc-guidelines-footer__label{padding-right:36px}
.nc-guidelines-footer__label{display:block}
.nc-asset-drawer{display:none;top:0;left:0;width:100%;height:100%;position:fixed;z-index:40;background-color:#fff;color:#000;padding-top:60px;overflow:auto;overflow-x:hidden}
.nc-asset-drawer__animation-container{animation:drawer-open 700ms ease-in-out}
.nc-asset-drawer--open{display:block}
.nc-asset-drawer__close-button{display:inline-block;background-color:#feed00;color:#000;transition:background-color 200ms ease;height:70px;line-height:70px;border:0;padding:0 60px;text-transform:uppercase;font-size:12px;font-weight:bold;text-align:center;outline:0;font-size:20px;width:70px;padding:0;position:absolute;right:36px;top:36px;animation:fade-in 700ms ease-in-out}
.nc-asset-drawer__close-button:hover,.nc-asset-drawer__close-button:focus{color:#feed00;background-color:#000}
.nc-asset-drawer__round-container{background-color:#f6f6f6;width:100%;min-height:100%;padding-bottom:60px}
.nc-asset-drawer__round{background-color:#f6f6f6;display:block;margin-left:-30px;margin-right:-30px;height:182px;border-radius:100% / 200%;border-bottom-left-radius:0;border-bottom-right-radius:0}
.nc-asset-drawer__container{max-width:988px;padding:0 30px;margin:auto}
.nc-asset-drawer__container:before,.nc-asset-drawer__container:after{content:" ";display:table}
.nc-asset-drawer__container:after{clear:both}
.nc-asset-drawer__heading{margin:0;font-weight:bold;font-size:48px;line-height:54px;margin-bottom:30px}
@media screen and (max-width:959px){.nc-asset-drawer__heading{font-size:28px;line-height:32px}
}
.nc-asset-drawer__subheading{margin:0;font-weight:bold;font-size:24px;line-height:30px;margin-bottom:30px}
.nc-asset-drawer__description{font-size:16px;line-height:26px}
@media screen and (max-width:959px){.nc-asset-drawer__description{font-size:14px;line-height:22px}
}
.nc-asset-drawer__asset-viewer:before,.nc-asset-drawer__asset-viewer:after{content:" ";display:table}
.nc-asset-drawer__asset-viewer:after{clear:both}
.nc-asset-drawer__text-container,.nc-asset-drawer__asset-container{float:left}
.nc-asset-drawer__text-container{width:calc(100% - 556px);padding-right:30px}
.nc-asset-drawer__asset-container{width:556px}
.nc-asset-drawer__related-assets{padding:30px 0}
.nc-asset-drawer__grid{margin:0;padding:0;list-style:none;margin-right:-30px}
.nc-asset-drawer__grid:before,.nc-asset-drawer__grid:after{content:" ";display:table}
.nc-asset-drawer__grid:after{clear:both}
.nc-asset-drawer__grid-item{float:left;width:207px;margin-right:30px;margin-bottom:30px}
.nc-asset-drawer__grid-item img{max-width:100%}
.nc-featured-text:not(.section){margin-top:60px;padding:30px;color:#feed00;background-color:#000;margin-bottom:60px;position:relative;height:420px}
.nc-featured-text:not(.section):before{content:'';position:absolute;width:200px;border-top-left-radius:99999px;border-bottom-left-radius:99999px;height:100%;top:0;left:-200px;background:#000}
@media screen and (max-width:959px){.nc-featured-text:not(.section):before{display:none}
}
.nc-featured-text h1{margin:0;font-weight:bold;font-size:64px;line-height:68px;font-size:120px;line-height:120px}
@media screen and (max-width:959px){.nc-featured-text h1{font-size:36px;line-height:40px}
}
.nc-featured-text h2{margin:0;font-weight:bold;font-size:48px;line-height:54px}
@media screen and (max-width:959px){.nc-featured-text h2{font-size:28px;line-height:32px}
}
.nc-featured-text h3{margin:0;font-weight:bold;font-size:22px;line-height:28px;margin-bottom:25px}
@media screen and (min-width:960px){.nc-featured-text h3{font-size:30px;line-height:40px;margin-bottom:22px}
}
.nc-featured-text h4{margin:0;font-weight:bold;font-size:24px;line-height:30px}
.nc-featured-text h5{margin:0;font-weight:bold;font-size:16px;line-height:26px;margin-bottom:13px}
@media screen and (min-width:960px){.nc-featured-text h5{font-size:18px;line-height:28px;margin-bottom:15px}
}
.nc-featured-text h1,.nc-featured-text h2,.nc-featured-text h3,.nc-featured-text h4,.nc-featured-text h5,.nc-featured-text h6{position:relative;top:50%;transform:translateY(-50%)}
.nc-featured-pages:not(.parbase){transition:padding .3s ease;padding:90px 0;background-color:#000;color:#fff}
.nc-featured-pages:not(.parbase):before,.nc-featured-pages:not(.parbase):after{content:" ";display:table}
.nc-featured-pages:not(.parbase):after{clear:both}
@media screen and (min-width:960px){.nc-featured-pages:not(.parbase){padding:147px 0 60px}
}
.nc-featured-pages__heading{margin:0;font-weight:bold;font-size:48px;line-height:54px}
@media screen and (max-width:959px){.nc-featured-pages__heading{font-size:28px;line-height:32px}
}
.nc-featured-pages__paragraph{font-size:16px;line-height:26px;margin-top:16px;margin-bottom:40px}
@media screen and (max-width:959px){.nc-featured-pages__paragraph{font-size:14px;line-height:22px}
}
.nc-featured-pages__nav{margin-bottom:0;margin-top:44px;list-style:none;padding:0}
.nc-featured-pages__nav-item{max-width:313px;display:block;margin:15px auto}
@media screen and (min-width:1101px){.nc-featured-pages__nav-item{float:left;width:calc(33% - 34px);margin-right:34px}
}
.nc-featured-pages__asset{max-width:100%}
.nc-d-hero-banner:not(.parbase){position:relative;height:742px;background-size:cover;background-repeat:no-repeat;background-color:#fff;color:#000}
.nc-d-hero-banner:not(.parbase):before,.nc-d-hero-banner:not(.parbase):after{content:" ";display:table}
.nc-d-hero-banner:not(.parbase):after{clear:both}
@media screen and (max-width:959px){.nc-d-hero-banner:not(.parbase){height:auto}
}
@media screen and (max-width:959px){.nc-d-hero-banner:not(.parbase){margin-top:250px;height:250px}
}
.nc-d-hero-banner__heading{margin:0;font-weight:bold;font-size:48px;line-height:54px}
@media screen and (max-width:959px){.nc-d-hero-banner__heading{font-size:28px;line-height:32px}
}
.nc-d-hero-banner__link{font-size:12px;line-height:1.67;font-weight:bold;color:inherit;text-transform:uppercase;letter-spacing:.06em;position:relative;font-family:'proxima-nova','arial','helvetica',sans-serif;display:inline-block}
@media screen and (min-width:960px){.nc-d-hero-banner__offset{margin-left:80px}
}
.nc-d-hero-banner__paragraph{font-size:16px;line-height:26px;margin-top:30px;margin-bottom:30px}
@media screen and (max-width:959px){.nc-d-hero-banner__paragraph{font-size:14px;line-height:22px}
}
.nc-d-hero-banner__the-d{background:#fff;padding:30px}
@media screen and (min-width:960px){.nc-d-hero-banner__the-d{max-width:600px;border-top-right-radius:9999px;border-bottom-right-radius:9999px;padding:150px;padding-left:50px}
}
@media screen and (max-width:959px){.nc-d-hero-banner__the-d{margin-top:-250px;margin-left:-30px;margin-right:-30px}
}
@media screen and (min-width:960px){.nc-d-hero-banner .nc-component-container{position:relative;top:50%;transform:translateY(-50%)}
}
.nc-color-swatch:not(.parbase){height:200px;border:1px solid #000;padding:30px;margin-bottom:15px}
.nc-color-swatch--large:not(.parbase){height:350px}
.owl-carousel{display:none;width:100%;-webkit-tap-highlight-color:transparent;position:relative;z-index:1}
.owl-carousel .owl-stage{position:relative;-ms-touch-action:pan-Y}
.owl-carousel .owl-stage:after{content:".";display:block;clear:both;visibility:hidden;line-height:0;height:0}
.owl-carousel .owl-stage-outer{position:relative;overflow:hidden;-webkit-transform:translate3d(0,0,0)}
.owl-carousel .owl-item{position:relative;min-height:1px;float:left;-webkit-backface-visibility:hidden;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}
.owl-carousel .owl-item img{display:block;width:100%;-webkit-transform-style:preserve-3d}
.owl-carousel .owl-nav.disabled,.owl-carousel .owl-dots.disabled{display:none}
.owl-carousel .owl-nav .owl-prev,.owl-carousel .owl-nav .owl-next,.owl-carousel .owl-dot{cursor:pointer;cursor:hand;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}
.owl-carousel.owl-loaded{display:block}
.owl-carousel.owl-loading{opacity:0;display:block}
.owl-carousel.owl-hidden{opacity:0}
.owl-carousel.owl-refresh .owl-item{visibility:hidden}
.owl-carousel.owl-drag .owl-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}
.owl-carousel.owl-grab{cursor:move;cursor:grab}
.owl-carousel.owl-rtl{direction:rtl}
.owl-carousel.owl-rtl .owl-item{float:right}
.no-js .owl-carousel{display:block}
.owl-carousel .animated{-webkit-animation-duration:1000ms;animation-duration:1000ms;-webkit-animation-fill-mode:both;animation-fill-mode:both}
.owl-carousel .owl-animated-in{z-index:0}
.owl-carousel .owl-animated-out{z-index:1}
.owl-carousel .fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}
@-webkit-keyframes fadeOut{0{opacity:1}
100%{opacity:0}
}
@keyframes fadeOut{0{opacity:1}
100%{opacity:0}
}
.owl-height{transition:height 500ms ease-in-out}
.owl-carousel .owl-item .owl-lazy{opacity:0;transition:opacity 400ms ease}
.owl-carousel .owl-item img.owl-lazy{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}
.owl-carousel .owl-video-wrapper{position:relative;height:100%;background:#000}
.owl-carousel .owl-video-play-icon{position:absolute;height:80px;width:80px;left:50%;top:50%;margin-left:-40px;margin-top:-40px;background:url("../../../apps/newco/components/brand-guide/nc-carousel/clientlibs/css/owl.video.play.png") no-repeat;cursor:pointer;z-index:1;-webkit-backface-visibility:hidden;transition:-webkit-transform 100ms ease;transition:transform 100ms ease}
.owl-carousel .owl-video-play-icon:hover{-webkit-transform:scale(1.3,1.3);-ms-transform:scale(1.3,1.3);transform:scale(1.3,1.3)}
.owl-carousel .owl-video-playing .owl-video-tn,.owl-carousel .owl-video-playing .owl-video-play-icon{display:none}
.owl-carousel .owl-video-tn{opacity:0;height:100%;background-position:center center;background-repeat:no-repeat;background-size:contain;transition:opacity 400ms ease}
.owl-carousel .owl-video-frame{position:relative;z-index:1;height:100%;width:100%}
.owl-theme .owl-nav{margin-top:10px;text-align:center;-webkit-tap-highlight-color:transparent}
.owl-theme .owl-nav [class*='owl-']{color:#FFF;font-size:14px;margin:5px;padding:4px 7px;background:#d6d6d6;display:inline-block;cursor:pointer;border-radius:3px}
.owl-theme .owl-nav [class*='owl-']:hover{background:#869791;color:#FFF;text-decoration:none}
.owl-theme .owl-nav .disabled{opacity:.5;cursor:default}
.owl-theme .owl-nav.disabled+.owl-dots{margin-top:10px}
.owl-theme .owl-dots{text-align:center;-webkit-tap-highlight-color:transparent}
.owl-theme .owl-dots .owl-dot{display:inline-block;zoom:1;*display:inline}
.owl-theme .owl-dots .owl-dot span{width:10px;height:10px;margin:5px 7px;background:#d6d6d6;display:block;-webkit-backface-visibility:visible;transition:opacity 200ms ease;border-radius:30px}
.owl-theme .owl-dots .owl-dot.active span,.owl-theme .owl-dots .owl-dot:hover span{background:#869791}
.nc-carousel:not(.parbase){transition:padding .3s ease;padding:90px 0;background-color:#fff;color:#000}
.nc-carousel:not(.parbase):before,.nc-carousel:not(.parbase):after{content:" ";display:table}
.nc-carousel:not(.parbase):after{clear:both}
@media screen and (min-width:960px){.nc-carousel:not(.parbase){padding:147px 0 60px}
}
.nc-carousel__heading{margin:0;font-weight:bold;font-size:48px;line-height:54px}
@media screen and (max-width:959px){.nc-carousel__heading{font-size:28px;line-height:32px}
}
.nc-carousel__container{margin:60px 0;position:relative}
.nc-carousel__nav{position:absolute;top:0;height:100%;width:100%}
.nc-carousel__nav .owl-next,.nc-carousel__nav .owl-prev{position:absolute;margin-top:-20px;top:50%;font-size:40px;z-index:2;cursor:pointer}
@media screen and (max-width:959px){.nc-carousel__nav .owl-next,.nc-carousel__nav .owl-prev{margin-top:30px;top:100%}
}
.nc-carousel__nav .owl-next.disabled,.nc-carousel__nav .owl-prev.disabled{opacity:.4;cursor:default}
.nc-carousel__nav .owl-next{right:0}
@media screen and (min-width:1101px){.nc-carousel .owl-stage{padding-top:220px}
}
.nc-carousel__item{transition:transform .3s ease}
@media screen and (min-width:1101px){.nc-carousel__item{width:210px;margin:auto}
}
.nc-carousel__item img{max-width:100%}
@media screen and (min-width:1101px){.owl-item.center .nc-carousel__item{transform:scale(2);transform-origin:50% 100%}
}
.nc-asset-grid:not(.parbase){transition:padding .3s ease;padding:90px 0;background-color:#fff;color:#000}
.nc-asset-grid:not(.parbase):before,.nc-asset-grid:not(.parbase):after{content:" ";display:table}
.nc-asset-grid:not(.parbase):after{clear:both}
@media screen and (min-width:960px){.nc-asset-grid:not(.parbase){padding:147px 0 60px}
}
.nc-asset-grid--cross .nc-asset-grid__grid-item:after{content:'';display:block;width:459.61940777px;height:2px;position:absolute;top:0;left:0;background:#000;transform:rotate(45deg);transform-origin:0 0}
.nc-asset-grid__heading{margin:0;font-weight:bold;font-size:48px;line-height:54px;margin-bottom:30px}
@media screen and (max-width:959px){.nc-asset-grid__heading{font-size:28px;line-height:32px}
}
.nc-asset-grid__grid{list-style:none;padding:0;margin-right:-30px}
.nc-asset-grid__grid:before,.nc-asset-grid__grid:after{content:" ";display:table}
.nc-asset-grid__grid:after{clear:both}
.nc-asset-grid__grid-item{width:325px;float:left;margin-right:30px;margin-bottom:60px;position:relative}
.nc-asset-grid__asset{width:325px;height:325px;object-fit:cover}
.nc-asset-grid__description{font-size:16px;line-height:26px;min-height:60px;margin-top:15px}
@media screen and (max-width:959px){.nc-asset-grid__description{font-size:14px;line-height:22px}
}
.nc-asset-description:not(.parbase){transition:padding .3s ease;padding:90px 0;background-color:#fff;color:#000}
.nc-asset-description:not(.parbase):before,.nc-asset-description:not(.parbase):after{content:" ";display:table}
.nc-asset-description:not(.parbase):after{clear:both}
@media screen and (min-width:960px){.nc-asset-description:not(.parbase){padding:147px 0 60px}
}
.nc-asset-description__heading{margin:0;font-weight:bold;font-size:48px;line-height:54px;margin-bottom:15px}
@media screen and (max-width:959px){.nc-asset-description__heading{font-size:28px;line-height:32px}
}
.nc-asset-description__nav{list-style:none;padding:0}
.nc-asset-description__nav-item{width:325px;height:325px;display:inline-block;margin-right:25px;margin-bottom:25px}
.nc-asset-description__asset{width:100%;height:100%;object-fit:cover}
.nc-asset-description__text-container{float:left}
@media screen and (min-width:1101px){.nc-asset-description__text-container{width:40%}
}
.nc-asset-description__asset-container{float:left;width:100%}
.nc-asset-description__asset-container:before,.nc-asset-description__asset-container:after{content:" ";display:table}
.nc-asset-description__asset-container:after{clear:both}
@media screen and (min-width:1101px){.nc-asset-description__asset-container{padding-left:60px;width:60%}
}
.nc-asset.parbase{float:left;margin-bottom:15px}
@media screen and (min-width:960px){.nc-asset.parbase{width:calc(50% - 30px);margin-right:60px}
}
.nc-asset.parbase:nth-child(2n+2){margin-right:0}
.nc-asset--full-width{width:100%;clear:both}
.nc-asset .nc-rte-output{padding-top:15px}
.nc-asset img{max-width:100%}
.nc-searchpromote:before,.nc-searchpromote:after{content:" ";display:table}
.nc-searchpromote:after{clear:both}
.nc-searchpromote .nc-search__form{padding:10px}
@media screen and (max-width:959px){.nc-searchpromote .nc-search__form{padding:0}
}
.nc-search{float:left;font-family:'gt-walsheim-pro','arial','helvetica',sans-serif;color:#000}
.nc-search__mobile-close{display:none}
.nc-search--main{padding:5px 0;width:100%}
.nc-search__wrapper{display:inline-block;float:right;position:relative;top:-4px;height:44px}
.nc-search__wrapper__clear{font-size:12px;font-weight:bold;line-height:1.67;letter-spacing:.9px;background-color:transparent;border:0;vertical-align:middle;padding:0;position:absolute;right:60px;top:12px;display:none;transition:all .14s ease-out}
.nc-search__wrapper__submit{background-color:transparent;border:0}
.nc-search__input{float:right;transition:all .22s ease-out;opacity:0;width:0 !important;background-color:#f5f5f5;border:0;padding:0;height:44px;font-size:16px;font-weight:bold;line-height:1.33;top:-4px;position:relative;border:solid 1px #ebebeb}
.nc-search__input::-ms-clear{display:none}
.nc-search__input:focus{outline:0}
.nc-search__input-wrapper{display:inline-block;width:0;float:right}
.nc-search__input-open{width:496px !important;padding:0 15px;outline:0;opacity:1}
@media screen and (max-width:959px){.nc-search__input-open{width:100% !important}
}
.nc-search__icon-open{background-color:#feed00}
.nc-searchpromote--body .nc-search--main{background-color:#f5f5f5;padding:0;margin:5px 0}
.nc-searchpromote--body .nc-search__form{padding:0;width:100%}
.nc-searchpromote--body .nc-search__wrapper__submit{background-color:#feed00;height:75px;width:75px;position:absolute;top:4px;right:0}
.nc-searchpromote--body .nc-search__wrapper__clear{display:none;font-size:14px;right:100px;top:4px;height:75px}
.nc-searchpromote--body .nc-search__wrapper__clear:focus{outline:0}
.nc-searchpromote--body .nc-search__input{font-size:30px;width:calc(100% - 45px) !important;float:left;opacity:1;top:0;padding:16px 30px;height:75px;border:0}
.nc-searchpromote--body .nc-search__input-wrapper{float:left;width:calc(100% - 110px)}
@media screen and (min-width:960px){.nc-searchpromote--body .nc-sharepoint__cont{top:75px;left:0;width:100%}
.nc-searchpromote--body .nc-sharepoint__cont .nc-sharepoint__block{width:100% !important}
.nc-searchpromote--body .yui-skin-sam .yui-ac-container{top:75px !important}
.nc-searchpromote--body .yui-skin-sam .yui-ac-container .yui-ac-content{width:inherit !important}
}
@media screen and (max-width:959px){.nc-searchpromote--body{display:none}
}
.nc-sharepoint__cont{display:none}
@media screen and (min-width:960px){.nc-sharepoint__cont{position:relative;top:40px;width:496px;z-index:1}
}
.nc-sharepoint__cont .nc-sharepoint__block{background-color:#fff;overflow:hidden;z-index:9050;display:block !important;border:1px solid gray;padding:12px 15px}
@media screen and (min-width:960px){.nc-sharepoint__cont .nc-sharepoint__block{position:absolute;width:496px}
}
.nc-sharepoint__cont .nc-sharepoint__block__icon{float:left;display:inline-block;background:#e9e9e9;width:21px;height:21px;border-radius:50%;margin-right:8px}
.nc-sharepoint__cont .nc-sharepoint__block__icon svg{display:block;width:12px;height:inherit;margin:0 auto}
.nc-sharepoint__cont .nc-sharepoint__block__icon span{float:left}
.nc-sharepoint__cont .nc-sharepoint__block__icon:hover{font-weight:normal !important;text-decoration:underline;background-color:transparent !important}
@media screen and (min-width:960px){.yui-skin-sam .yui-ac-container{top:40px !important;width:inherit !important}
}
.yui-skin-sam .yui-ac-container .yui-ac-content{background:#fff;overflow:hidden;z-index:9050;width:100%}
@media screen and (min-width:960px){.yui-skin-sam .yui-ac-container .yui-ac-content{padding:15px;border:1px solid gray;width:496px;position:absolute}
}
.yui-skin-sam .yui-ac-container .yui-ac-content .yui-ac{position:relative}
.yui-skin-sam .yui-ac-container .yui-ac-content ul{margin:0;padding:0;width:100%;list-style:none}
.yui-skin-sam .yui-ac-container .yui-ac-content ul li{margin:0;padding:10px 15px;cursor:default;white-space:nowrap;width:100%}
.yui-skin-sam .yui-ac-container .yui-ac-content ul li.yui-ac-highlight{background-color:#f5f5f5;color:#000;font-weight:bold;cursor:pointer}
.yui-skin-sam .yui-ac-container .yui-ac-content__sharepoint{padding-top:15px !important;padding-left:13px !important;margin-top:15px !important;border-top:1px solid #b7b7b7;display:list-item !important}
@media screen and (max-width:959px){.yui-skin-sam .yui-ac-container .yui-ac-content__sharepoint{display:none !important}
}
.yui-skin-sam .yui-ac-container .yui-ac-content__sharepoint__icon{float:left;display:inline-block;background:#e9e9e9;width:21px;height:21px;border-radius:50%;margin-right:8px}
.yui-skin-sam .yui-ac-container .yui-ac-content__sharepoint__icon svg{display:block;width:12px;height:inherit;margin:0 auto}
.yui-skin-sam .yui-ac-container .yui-ac-content__sharepoint__icon span{float:left}
.yui-skin-sam .yui-ac-container .yui-ac-content__sharepoint__icon:hover{font-weight:normal !important;text-decoration:underline;background-color:transparent !important}
@media screen and (max-width:959px){.nc-search__input-wrapper--open{padding:10px;position:fixed;top:0;left:0;background:#fff;width:100%;height:100%;z-index:99}
.nc-search__input-wrapper--open .nc-search__mobile-close{display:block;position:absolute;right:0;top:0;background:0;border:0}
.nc-search__input-wrapper--open .nc-search__form{position:relative}
.nc-search__input-wrapper--open .nc-search__input-wrapper{display:block;width:100%;float:none;padding-right:50px}
.nc-search__input-wrapper--open div#autocomplete{top:0 !important;position:static !important}
.nc-search__input-wrapper--open #search-container{position:absolute;right:50px}
.nc-search__input-wrapper--open .nc-sharepoint__cont{display:block;position:static;bottom:10px;left:10px;width:calc(100% - 20px)}
.nc-search__input-wrapper--open .yui-ac-content{display:block !important}
.nc-search__input-wrapper--open .nc-icon{width:25px}
}
.nc-searchpromote-results{margin-top:45px !important}
.nc-searchpromote-results__title{margin:0;font-weight:bold;font-size:16px;line-height:26px;margin-bottom:13px}
@media screen and (min-width:960px){.nc-searchpromote-results__title{font-size:18px;line-height:28px;margin-bottom:15px}
}
.nc-searchpromote-results__description{font-size:16px;line-height:26px}
@media screen and (max-width:959px){.nc-searchpromote-results__description{font-size:14px;line-height:22px}
}
.nc-searchpromote-results__item{margin:0;padding:38px 0;border-bottom:1px solid #c6c6c6}
.nc-searchpromote-results__item:first-child{border-top:1px solid #c6c6c6}
.nc-searchpromote-results .nc-icon--external-link{height:20px;width:20px;position:relative;top:5px;left:10px}
.pagination.section{width:100%}
.nc-searchpromote-pagination{text-align:center;font-family:'gt-walsheim-pro','arial','helvetica',sans-serif;font-weight:bold;cursor:pointer}
.nc-searchpromote-pagination__page{display:inline-block;padding:5px 12px;text-decoration:none}
.nc-searchpromote-pagination__page:hover{text-decoration:none}
.nc-searchpromote-pagination__page:hover{color:#000;background-color:#feed00}
.nc-searchpromote-pagination__page--selected{color:#fff;background-color:#000}
.nc-searchpromote-pagination__arrow{display:inline-block;width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent}
.nc-searchpromote-pagination__arrow--next{border-left:7px solid #000}
.nc-searchpromote-pagination__arrow--prev{border-right:7px solid #000}
.nc-facets{float:left;height:auto;overflow:unset;padding-bottom:20px;font-family:'gt-walsheim-pro','arial','helvetica',sans-serif}
.nc-facets .nc-heading-4{font-size:22px;margin-bottom:18px}
.nc-facets ul{margin:0;padding:0;margin-left:8px}
.nc-facets .facet-title{margin-bottom:13px;margin-top:9px;list-style-type:none}
.nc-facets .nc-filter__input{margin-right:14px}
.nc-facets .nc-button{margin-top:11px;text-transform:uppercase}