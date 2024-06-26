// --------------BOM - browser object model -----------------

// ---------------location---------------------------------
// ---------------will explore the most used property---------

// can use either window.location or location only
// console.log(location); // gives output as
// Location {ancestorOrigins: DOMStringList, href: 'http://127.0.0.1:5500/BOM.html', origin: 'http://127.0.0.1:5500', protocol: 'http:', host: '127.0.0.1:5500', …}

// ---------------------------------------------------------
// using location.reload() -  will reload the browser
// console.log(location.reload());

// ---------------------------------------------------------
// using the location.href = 'url' - will change the href location
// location.href = "www.google.com"; //as it is not present in the localhost so it won't direct to some page

// location.href =
//   "https://youtube.com/watch?v=hyIBB48aAws&list=PLfEr2kn3s-bo4LwlbyZugHPavhcdW8YMC&index=53";    // this will direct the browser to that youtube link

// ---------------------------------------------------------
// ---------------------------------------------------------

// -------------------------history------------------------
// history - back,forward - gives details about backward and forward pages from the current pages

// history.back();  // takes you back to the page from current page

// history.forward();

// history.go(-1); // - means backward and + means forward

// ---------------------------------------------------------
// ---------------------------------------------------------

// -----------------innerHeight and outerHeight----------------
// innerHeight calculates the height inside the browser where contents are visible
// outerHeight means the total height of the screen

// -----------------innerWidth and outerWidth----------------
// its same as height content
// ---------------------------------------------------------
// ---------------------------------------------------------

// -----------------open()----------------
// opens the a new window and if we pass the some url , it opens the that same site
// by default the name from open is an empty string i.e. ''
// passing the second argumnet in the open represents as name which overrites the default name
// the 3rd argument represents whether the window should be resizeable or not
// EG: open('https://www.youtube.com/','pk','resizeable')
// ---------------------------------------------------------
// ---------------------------------------------------------
// -----------------close()----------------
// closes the opened window only that which is being opened by that scripts
// VM2091:1 Scripts may close only the windows that were opened by them.
// ---------------------------------------------------------
// ---------------------------------------------------------

// -----------------resizeTo()----------------
// resizes the window size by the height and width you provide
// but needs to follow the certain conditions
// the window should have been opened using open method
// EG: resizeTo(400,400)
// ---------------------------------------------------------
// ---------------------------------------------------------

// -----------------momveTo()----------------
// moves the opened window using the x,y pixel
//EG: moveTo(600,700)

// ---------------------------------------------------------
// ---------------------------------------------------------

// -----------------scroll()----------------
// it scrolls the window by x,y

// ---------------------------------------------------------
// ---------------------------------------------------------

// -----------------print()----------------
// prints the page using print() function
// the same we do using ctrl+P

// ---------------------------------------------------------
// ---------------------------------------------------------

// -----------------documnet()----------------
// it is the DOM
// its a part of the BOM but it itself is a huge part

// ----------------------*************----------------------
