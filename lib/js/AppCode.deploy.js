smalltalk.addPackage('AppCode', {});
smalltalk.addClass('AppCode', smalltalk.Widget, [], 'AppCode');
smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._appendToJQuery_(_st("body")._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"begin",{}, smalltalk.AppCode)})}
}),
smalltalk.AppCode);

smalltalk.addMethod(
"_renderBrowserButtonForClass_on_",
smalltalk.method({
selector: "renderBrowserButtonForClass:on:",
fn: function (aClass,html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._button();
_st($1)._with_("Class Browser");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st((smalltalk.Browser || Browser))._openOn_(aClass);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderBrowserButtonForClass:on:",{aClass:aClass,html:html}, smalltalk.AppCode)})}
}),
smalltalk.AppCode);

smalltalk.addMethod(
"_renderBrowserButtonOn_",
smalltalk.method({
selector: "renderBrowserButtonOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._button();
_st($1)._with_("Class Browser");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st((smalltalk.Browser || Browser))._open();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderBrowserButtonOn:",{html:html}, smalltalk.AppCode)})}
}),
smalltalk.AppCode);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
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
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.AppCode)})}
}),
smalltalk.AppCode);



