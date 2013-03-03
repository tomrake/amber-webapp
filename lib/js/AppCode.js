smalltalk.addPackage('AppCode', {});
smalltalk.addClass('AppCode', smalltalk.Widget, [], 'AppCode');
smalltalk.AppCode.comment="An AppCode is sample framework for and web application written in amber. AppCode is a Canvas subclass.\x0a\x0aTo create see the web application in amber use an html page, See the develop.html file in this project.\x0a    amber is loaded and then loadAmber is called with the files of your app.\x0a    The ready function creates and begins the app.\x0aAt this point the AppCode inserts itself at the end of the <body> element of the browser.."
smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._appendToJQuery_(_st("body")._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"begin",{}, smalltalk.AppCode)})},
args: [],
source: "begin\x0a    \x22Start the webApp by appending yourself to the body of the browser page.\x22\x0a\x09self appendToJQuery:'body' asJQuery.",
messageSends: ["appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.AppCode);

smalltalk.addMethod(
"_renderBrowserButtonForClass_on_",
smalltalk.method({
selector: "renderBrowserButtonForClass:on:",
category: 'not yet classified',
fn: function (aClass,html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._button();
_st($1)._with_("Class Browser");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st((smalltalk.Browser || Browser))._openOn_(aClass);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderBrowserButtonForClass:on:",{aClass:aClass,html:html}, smalltalk.AppCode)})},
args: ["aClass", "html"],
source: "renderBrowserButtonForClass: aClass on: html\x0a\x09\x22A render helper method that adds a button to open the Class Browser on aClass.\x22\x0a\x09html\x0a\x09\x09button with:'Class Browser';\x0a\x09\x09\x09\x09onClick:[Browser openOn: aClass]",
messageSends: ["with:", "button", "onClick:", "openOn:"],
referencedClasses: ["Browser"]
}),
smalltalk.AppCode);

smalltalk.addMethod(
"_renderBrowserButtonOn_",
smalltalk.method({
selector: "renderBrowserButtonOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._button();
_st($1)._with_("Class Browser");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st((smalltalk.Browser || Browser))._open();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderBrowserButtonOn:",{html:html}, smalltalk.AppCode)})},
args: ["html"],
source: "renderBrowserButtonOn: html\x0a\x09\x22A helper method to render a button to open the Class Browser empty.\x22\x0a\x09html\x0a\x09\x09button with:'Class Browser';\x0a\x09\x09\x09\x09\x09onClick:[Browser open]",
messageSends: ["with:", "button", "onClick:", "open"],
referencedClasses: ["Browser"]
}),
smalltalk.AppCode);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
_st(html)._h1_("Welcome to the AppCode world!");
$1=_st(html)._p();
_st($1)._with_("This is example code for an ");
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {$2=_st(html)._a();
_st($2)._href_("http://amber-lang.net/");
$3=_st($2)._with_("Amber");
return $3;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$4=_st($1)._with_(" web application that you can modify to produce your own custom app!");
_st(html)._h2_("How to start coding");
_st(_st(html)._p())._with_("To start coding open the Class Browser with the following button and modify the AppCode, You will find the code that generates this page in AppCode>>renderOn:");
_st(self)._renderBrowserButtonForClass_on_(_st(self)._class(),html);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.AppCode)})},
args: ["html"],
source: "renderOn: html\x0a\x09\x22Render the contents of the WebApp on html browser\x22\x0a\x09html\x0a    \x09h1:'Welcome to the AppCode world!'.\x0a\x09html  p\x0a    \x09\x09\x09with:'This is example code for an ';\x0a        \x09\x09with:[\x0a\x09\x09\x09\x09\x09\x09html a\x0a\x09\x09\x09\x09\x09\x09\x09\x09href:'http://amber-lang.net/';\x0a\x09\x09\x09\x09\x09\x09\x09\x09with:'Amber'];\x0a\x09\x09\x09\x09with: ' web application that you can modify to produce your own custom app!'.\x0a\x09html h2: 'How to start coding'.\x0a\x09html p\x0a    \x09with:'To start coding open the Class Browser with the following button and modify the AppCode, You will find the code that generates this page in AppCode>>renderOn:'.\x0a    self renderBrowserButtonForClass:self class on: html.",
messageSends: ["h1:", "with:", "p", "href:", "a", "h2:", "renderBrowserButtonForClass:on:", "class"],
referencedClasses: []
}),
smalltalk.AppCode);



