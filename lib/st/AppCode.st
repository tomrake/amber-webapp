Smalltalk current createPackage: 'AppCode' properties: #{}!
Widget subclass: #AppCode
	instanceVariableNames: ''
	package: 'AppCode'!
!AppCode commentStamp!
An AppCode is sample framework for and web application written in amber. AppCode is a Canvas subclass.

To create see the web application in amber use an html page, See the develop.html file in this project.
    amber is loaded and then loadAmber is called with the files of your app.
    The ready function creates and begins the app.
At this point the AppCode inserts itself at the end of the <body> element of the browser..!

!AppCode methodsFor: 'not yet classified'!

begin
    "Start the webApp by appending yourself to the body of the browser page."
	self appendToJQuery:'body' asJQuery.
!

renderBrowserButtonForClass: aClass on: html
	"A render helper method that adds a button to open the Class Browser on aClass."
	html
		button with:'Class Browser';
				onClick:[Browser openOn: aClass]
!

renderBrowserButtonOn: html
	"A helper method to render a button to open the Class Browser empty."
	html
		button with:'Class Browser';
					onClick:[Browser open]
!

renderOn: html
	"Render the contents of the WebApp on html browser"
	html
    	h1:'Welcome to the AppCode world!!'.
	html  p
    			with:'This is example code for an ';
        		with:[
						html a
								href:'http://amber-lang.net/';
								with:'Amber'];
				with: ' web application that you can modify to produce your own custom app!!'.
	html h2: 'How to start coding'.
	html p
    	with:'To start coding open the Class Browser with the following button and modify the AppCode, You will find the code that generates this page in AppCode>>renderOn:'.
    self renderBrowserButtonForClass:self class on: html.
! !

