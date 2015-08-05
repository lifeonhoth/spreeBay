// http://www.ebay.com/sch/i.html?_from=R40&_trksid=p2050601.m570.l1313.TR9.TRC0.A0.H0.Xamiga.TRS1&_nkw=amiga&_sacat=0
// http://www.ebay.com/sch/i.html?_from=R40&_trksid=p2050601.m570.l1313.TR11.TRC2.A0.H0.Xcommodore.TRS1&_nkw=commodore&_sacat=0
// http://www.ebay.com/sch/i.html?_from=R40&_trksid=p2050601.m570.l1313.TR10.TRC1.A0.H0.Xcommodore+64.TRS1&_nkw=commodore+64&_sacat=0

// logo inspiration from Stephan JB Thomas and the Noun Project

var text;
var throughput;
var toSearch;
var intervalID;
var isRunning = false;

var text = ["composer", "composition", "computer", "condition", "condor", "condom", "cone", "confirmation", "conga", "congo", "conifer", "connection", "consonant", "copper", "abyssinian", "accelerator", "accordian", "acoustic", "acrylic", "drywayll", "adapter", "aftershave", "age", "agenda", "airplane", "airship", "alarm", "albatross", "alloy", "alligator", "almanac", "anatomy", "anethesiologist", "bamboo", "banjo", "barber", "baritone", "baseball", "basket", "bathroom", "bracket", "battery", "button", "butane", "cabinet", "cable", "cactus", "calculator", "ceramic", "dipstick", "dish", "digger", "edger", "faucet", "ferryboat", "fertilizer", "fiberglass", "file", "golf", "grain", "grape", "graphic", "grass", "headlight", "icebreaker", "index", "kitchen", "ladybug", "keyboard"];


// setting interval, calling all functions every 5 seconds
// always call stop timer equivalently
function startTimer(){
  intervalID = setInterval(callingAllFunctions, 5000); 
  console.log("Here is a search query: " + toSearch)
}

function stopTimer(){
  clearInterval(intervalID);
}
 
// setting up functions to call   
function callingAllFunctions() {
  randomSelection();
  constructURL(); 

  chrome.tabs.update({ //talk to chrome tab, url = toSearch
    url: toSearch
  });

  //return throughput;
}

// selecting array index at random
function randomSelection(){
  throughput = text[Math.floor(Math.random()*text.length)];
  return throughput; 
}


// finalizing url to search 
function constructURL() {
  toSearch = "http://www.ebay.com/sch/i.html?_from=R40&_trksid=p2050601.m570.l1313.TR10.TRC1.A0.H0.X" + throughput + ".TRS1&_nkw=" + throughput + "&_sacat=0"; 
  return toSearch;
}

// Called when user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  if (isRunning == true) { // if on, and user clicks off, stop timer
    stopTimer()
    isRunning = false;
  } else {                 // if off, and user clicks on, start timer again
    startTimer();
    isRunning = true;
  } 
  console.log('Shop for: ' + tab.url);
});





















