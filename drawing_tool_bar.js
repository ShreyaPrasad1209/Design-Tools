// Make the DIV element draggable:
dragElement(document.getElementById("toolbar"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
   console.log("Grab not reached yet")
  if (document.getElementById("grabarea")) {
    // if present, the header is where you move the DIV from:
    document.getElementById("grabarea").onmousedown = dragMouseDown;
    console.log("Grab reached");
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// creating class for toolbar
class DrawingToolbar {

	constructor(
        initialTopPx=0,
        initialRightPx=0, 
        pencil=true, 
        eraser=true, 
        mirror=true,
        gear=true, 
        clear=true,
        undo=true,
        redo=true,
        stamp=false,
        clear=true,
        preview=true
    )
  {
		// set all of the default and set parameters
 		 this.initialTopPx = initialTopPx;
 		 this.initialRightPx = initialRIghtPx;
         this.pencil = pencil;
         this.eraser=eraser;
         this.mirror=mirror;
         this.gear=gear; 
         this.clear=clear;
         this.undo=undo; 
         this.redo=redo;
         this.stamp=stamp;
         this.clear=clear;
         this.preview=preview;   
 		// set all of the default parameters
 		currentDrawerOpen = ‘’; // default to all closed
 		currentDrawingTool = ‘p1’; // smallest pencil tool
 		mirrorMode = false; // initial set mirror to false
 		stampMode = false;  // initial set stamp mode to false
		
 	}
	
 /* Add methods to set and obtain values within the class object */
 mirrorMode(mirrorModeStatus) {
    if(this.mirrorMode)
    {
        this.mirrorMode=false;      
    }
    else
    {
        this.mirrorMode=true;
    }
 this.mirrorMode = mirrorModeStatus;	
 }

 mirrorMode() {
  return this.mirrorModeStatus;
 }

setStampMode(stampModeStatus) {
	this.stampModeStatus = mirrorVal;	
 	// when stamp mode is on, the draw tools show as inactive
 	// clicking on a pencil/eraser tool will turn off stamp mode
 }

toggleDrawerStatus(drawer_name ) {
     // will need logic in here:
    
    var settings = {
      speedOpen: 50,
      speedClose: 350,
      activeClass: 'is-active',
      visibleClass: 'is-visible',
      selectorTarget: '[data-drawer-target]',
      selectorTrigger: '[data-drawer-trigger]',
      selectorClose: '[data-drawer-close]',

    };


    //                                 
    // Methods
    //

    // Toggle accessibility
    var toggleAccessibility = (drawer_name)=> {
      if (drawer_name.getAttribute('aria-expanded') === 'true') {
        drawer_name.setAttribute('aria-expanded', false);
      } else {
        drawer_name.setAttribute('aria-expanded', true);
      }   
    };
                                    
    // Open Drawer
    var openDrawer = (trigger)=> {
                                         
      // Find target
      var target = document.getElementById(trigger.getAttribute('aria-controls'));

      // Make it active
      target.classList.add(settings.activeClass);

      // Make body overflow hidden so it's not scrollable
      document.documentElement.style.overflow = 'hidden';

      // Toggle accessibility
      toggleAccessibility(trigger);

      // Make it visible
      setTimeout(function () {
        target.classList.add(settings.visibleClass);
      }, settings.speedOpen); 
                               
    };

    // Close Drawer
    var closeDrawer = function (event) {

      // Find target
      var closestParent = event.closest(settings.selectorTarget),
        childrenTrigger = document.querySelector('[aria-controls="' + closestParent.id + '"');

      // Make it not visible
      closestParent.classList.remove(settings.visibleClass);

      // Remove body overflow hidden
       document.documentElement.style.overflow = '';

      // Toggle accessibility
      toggleAccessibility(childrenTrigger);

      // Make it not active
      setTimeout(function () {    
        closestParent.classList.remove(settings.activeClass);
      }, settings.speedClose);             

    };
      	/* -----------------------------------------------
 		If pencil clicked, open or close drawer and ensure stamp mode is off
 		If eraser clicked, open or close drawer and ensure stamp mode is off
 		If mirror is clicked, (no drawer) turn on/off and ensure stamp mode is off
 		If gear is clicked, open or close drawer and ensure stamp mode is off
 		If stamp is clicked, open or close drawer and turn on stamp mode
 		If clear is clicked, (no drawer  no status to change)
 		If preview is clicked, open or close drawer and ensure stamp mode is off
 	----------------------------------------------- */
 	// when a main tool icon is clicked, toggle open or closed
 	//  get current status
 	// if open set to closed and call a function to close the drawer.
 	// if closed set to open and call a function to get the current
 //  	tool and open the drawer.
 // If stamp mode is on then turn it off unless it is 
 // 	drawer_name == [stamp drawer name] that was clicked
 }

 getStampMode(stampModeStatus) {
// Etc...



 // the following methods are likely required but it may change as
// development progresses:
// - closeAllDrawers() 
 // - openDrawer()
// - setToolIconStatus() | loop through and set active/inactive class
// - setCurrentDrawingTool(toolName) | specify current active tool
// - resetPosition() | snap the tool back to the TOP/LEFT coordinates

}
}
