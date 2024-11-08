//**************************************************************** 
// Keep this copyright notice: 
// This copy of the script is the property of the owner of the 
// particular web site you were visiting.
// Do not download the script's files from there.
// For a free download and full instructions go to: 
// http://www.treeview.net
//**************************************************************** 
 
// Log of changes: 
//
//       20 Apr 02 - Improve support for frame-less layout
//
//       07 Apr 02 - Minor changes to support server-side dynamic feeding
//                   (Online Bookmarks Manager demo)
//
//       10 Aug 01 - Support for Netscape 6
//
//       17 Feb 98 - Fix initialization flashing problem with Netscape
//       
//       27 Jan 98 - Root folder starts open; support for USETEXTLINKS; 
//                   make the ftien4 a js file 
 
 
// Definition of class Folder 
// ***************************************************************** 
 
function Folder(folderDescription, hreference) //constructor 
{ 
  //constant data 
  this.desc = folderDescription 
  this.hreference = hreference 
  this.id = -1   
  this.navObj = 0  
  this.iconImg = 0  
  this.nodeImg = 0  
  this.isLastNode = 0 
  this.isLastOpenedFolder = false
 
  //dynamic data 
  this.isOpen = true 
  this.iconSrc = "ftv2folderopen.gif"   
  this.iconSrcClosed = "ftv2folderclosed.gif"   
  this.children = new Array 
  this.nChildren = 0 
 
  //methods 
  this.initialize = initializeFolder 
  this.setState = setStateFolder 
  this.addChild = addChild 
  this.createIndex = createEntryIndex 
  this.escondeBlock = escondeBlock
  this.esconde = escondeFolder 
  this.mostra = mostra 
  this.renderOb = drawFolder 
  this.totalHeight = totalHeight 
  this.subEntries = folderSubEntries 
  this.outputLink = outputFolderLink 
  this.blockStart = blockStart
  this.blockEnd = blockEnd
} 
 
function initializeFolder(level, lastNode, leftSide) 
{ 
  var j=0 
  var i=0 
  var numberOfFolders 
  var numberOfDocs 
  var nc 
  var nodeIconName = ""
      
  nc = this.nChildren 
   
  this.createIndex() 
 
  var auxEv = "" 
 
  if (browserVersion > 0) 
    auxEv = "<a href='javascript:clickOnNode("+this.id+")'>" 
  else 
    auxEv = "<a>" 
 
  if (level>0) 
    if (lastNode) //the last child in the children array 
    { 
	  nodeIconName = "ftv2mlastnode.gif"
	  if (this.nChildren == 0)
		 nodeIconName = "ftv2lastnode.gif"
	  this.renderOb(leftSide + "<td valign=top>" + auxEv + "<img name='nodeIcon" + this.id + "' id='nodeIcon" + this.id + "' src='" + nodeIconName + "' width=16 height=22 border=0></a></td>") 
      leftSide = leftSide + "<td valign=top><img src='ftv2blank.gif' width=16 height=22></td>"  
      this.isLastNode = 1 
    } 
    else 
    { 
	  nodeIconName = "ftv2mnode.gif"
	  if (this.nChildren == 0)
		nodeIconName = "ftv2node.gif"
      this.renderOb(leftSide + "<td valign=top background=ftv2vertline.gif>" + auxEv + "<img name='nodeIcon" + this.id + "' id='nodeIcon" + this.id + "' src='" + nodeIconName + "' width=16 height=22 border=0></a></td>") 
      leftSide = leftSide + "<td valign=top background=ftv2vertline.gif><img src='ftv2vertline.gif' width=16 height=22></td>" 
      this.isLastNode = 0 
    } 
  else 
    this.renderOb("") 
   
  if (nc > 0) 
  { 
    level = level + 1 
    for (i=0 ; i < this.nChildren; i++)  
    { 
      if (i == this.nChildren-1) 
        this.children[i].initialize(level, 1, leftSide) 
      else 
        this.children[i].initialize(level, 0, leftSide) 
      } 
  } 
} 
 
function drawFolder(leftSide) 
{ 
  var idParam = "id='folder" + this.id + "'"

  if (browserVersion == 2) { 
    if (!doc.yPos) 
      doc.yPos=20 
  } 

  this.blockStart("folder")

  doc.write("<tr>") 
  doc.write(leftSide) 
  doc.write ("<td valign=top>")
  if (USEICONS)
  {
    this.outputLink() 
    doc.write("<img id='folderIcon" + this.id + "' name='folderIcon" + this.id + "' src='" + this.iconSrc+"' border=0></a>") 
  }
  else
  {
	  doc.write("<img src=ftv2blank.gif height=2 width=2>")
  }
  if (WRAPTEXT)
	doc.write("</td><td valign=middle width=100%>") 
  else
	doc.write("</td><td valign=middle nowrap width=100%>") 
  if (USETEXTLINKS) 
  { 
    this.outputLink() 
    doc.write(this.desc + "</a>") 
  } 
  else 
    doc.write(this.desc) 
  doc.write("</td>")  

  this.blockEnd()
 
  if (browserVersion == 1) { 
    this.navObj = doc.all["folder"+this.id] 
	if (USEICONS)
      this.iconImg = doc.all["folderIcon"+this.id] 
    this.nodeImg = doc.all["nodeIcon"+this.id] 
  } else if (browserVersion == 2) { 
    this.navObj = doc.layers["folder"+this.id] 
    if (USEICONS)
      this.iconImg = this.navObj.document.images["folderIcon"+this.id] 
    this.nodeImg = this.navObj.document.images["nodeIcon"+this.id] 
    doc.yPos=doc.yPos+this.navObj.clip.height 
  } else if (browserVersion == 3) { 
    this.navObj = doc.getElementById("folder"+this.id)
    if (USEICONS)
      this.iconImg = doc.getElementById("folderIcon"+this.id) 
    this.nodeImg = doc.getElementById("nodeIcon"+this.id)
  } 
} 
 
function setStateFolder(isOpen) 
{ 
  var subEntries 
  var totalHeight 
  var fIt = 0 
  var i=0 
  var currentOpen
 
  if (isOpen == this.isOpen) 
    return 
 
  if (browserVersion == 2)  
  { 
    totalHeight = 0 
    for (i=0; i < this.nChildren; i++) 
      totalHeight = totalHeight + this.children[i].navObj.clip.height 
      subEntries = this.subEntries() 
    if (this.isOpen) 
      totalHeight = 0 - totalHeight 
    for (fIt = this.id + subEntries + 1; fIt < nEntries; fIt++) 
      indexOfEntries[fIt].navObj.moveBy(0, totalHeight) 
  }  
  this.isOpen = isOpen;

  if (this.id!=0 && PERSERVESTATE && !this.isOpen) //closing
  {
    currentOpen = GetCookie("clickedFolder")
	if (currentOpen != null)
	{
		currentOpen = currentOpen.replace(this.id+"-", "")
		SetCookie("clickedFolder", currentOpen)
	}
  }
	
  if (!this.isOpen && this.isLastOpenedfolder)
  {
		lastOpenedFolder = -1;
		this.isLastOpenedfolder = false;
  }
  propagateChangesInState(this) 
} 
 
function propagateChangesInState(folder) 
{   
  var i=0 

  //Support for empty folder (still usefull because of their link)
  if (folder.isOpen) 
  { 
	if (folder.nodeImg && folder.nChildren > 0) 
	  if (folder.isLastNode) 
		folder.nodeImg.src = "ftv2mlastnode.gif" 
	  else 
		folder.nodeImg.src = "ftv2mnode.gif" 
	if (USEICONS)
	  folder.iconImg.src = folder.iconSrc
	for (i=0; i<folder.nChildren; i++) 
	  folder.children[i].mostra() 
  } 
  else 
  { 
	if (folder.nodeImg && folder.nChildren > 0) 
	  if (folder.isLastNode) 
		folder.nodeImg.src = "ftv2plastnode.gif" 
	  else 
		folder.nodeImg.src = "ftv2pnode.gif" 
	if (USEICONS)
	  folder.iconImg.src = folder.iconSrcClosed
	for (i=0; i<folder.nChildren; i++) 
	  folder.children[i].esconde() 
  }  
} 
 
function escondeFolder() 
{ 
  this.escondeBlock()
   
  this.setState(0) 
} 
 
function outputFolderLink() 
{ 
  if (this.hreference) 
  { 
	if (USEFRAMES)
	  doc.write("<a href='" + this.hreference + "' TARGET=\"basefrm\" ") 
	else
	  doc.write("<a href='" + this.hreference + "' TARGET=_top ") 

    if (browserVersion > 0 && USEFRAMES) 
      doc.write("onClick='javascript:clickOnFolder("+this.id+")'") 

    doc.write(">") 
  } 
  else 
    doc.write("<a>") 
} 
 
function addChild(childNode) 
{ 
  this.children[this.nChildren] = childNode 
  this.nChildren++ 
  return childNode 
} 
 
function folderSubEntries() 
{ 
  var i = 0 
  var se = this.nChildren 
 
  for (i=0; i < this.nChildren; i++){ 
    if (this.children[i].children) //is a folder 
      se = se + this.children[i].subEntries() 
  } 
 
  return se 
} 
 
 
// Definition of class Item (a document or link inside a Folder) 
// ************************************************************* 
 
function Item(itemDescription, itemLink) // Constructor 
{ 
  // constant data 
  this.desc = itemDescription 
  this.link = itemLink 
  this.id = -1 //initialized in initalize() 
  this.navObj = 0 //initialized in render() 
  this.iconImg = 0 //initialized in render() 
  this.iconSrc = "ftv2doc.gif" 
 
  // methods 
  this.initialize = initializeItem 
  this.createIndex = createEntryIndex 
  this.esconde = escondeBlock
  this.mostra = mostra 
  this.renderOb = drawItem 
  this.totalHeight = totalHeight 
  this.blockStart = blockStart
  this.blockEnd = blockEnd
} 
 
function initializeItem(level, lastNode, leftSide) 
{  
  this.createIndex() 
 
  if (level>0) 
    if (lastNode) //the last 'brother' in the children array 
    { 
      this.renderOb(leftSide + "<td valign=top><img src='ftv2lastnode.gif' width=16 height=22></td>") 
      leftSide = leftSide + "<td valign=top><img src='ftv2blank.gif' width=16 height=22>"  
    } 
    else 
    { 
      this.renderOb(leftSide + "<td valign=top background=ftv2vertline.gif><img src='ftv2node.gif' width=16 height=22></td>") 
      leftSide = leftSide + "<td valign=top background=ftv2vertline.gif><img src='ftv2vertline.gif' width=16 height=22></td>" 
    } 
  else 
    this.renderOb("")   
} 
 
function drawItem(leftSide) 
{ 
  this.blockStart("item")

  doc.write("<tr>") 
  doc.write(leftSide) 
  doc.write("<td valign=top>") 
  if (USEICONS)
  {
      doc.write("<a href=" + this.link + ">") 
      doc.write("<img id='itemIcon"+this.id+"' ") 
      doc.write("src='"+this.iconSrc+"' border=0>") 
      doc.write("</a>") 
  }
  else
  {
	  doc.write("<img src=ftv2blank.gif height=2 width=3>")
  }
  if (WRAPTEXT)
    doc.write("</td><td valign=middle width=100%>") 
  else
    doc.write("</td><td valign=middle nowrap width=100%>") 
  if (USETEXTLINKS) 
    doc.write("<a href=" + this.link + ">" + this.desc + "</a>") 
  else 
    doc.write(this.desc) 

  doc.write("</td>") 

  this.blockEnd()
 
  if (browserVersion == 1) { 
    this.navObj = doc.all["item"+this.id] 
    if (USEICONS)
      this.iconImg = doc.all["itemIcon"+this.id] 
  } else if (browserVersion == 2) { 
    this.navObj = doc.layers["item"+this.id] 
    if (USEICONS)
      this.iconImg = this.navObj.document.images["itemIcon"+this.id] 
    doc.yPos=doc.yPos+this.navObj.clip.height 
  } else if (browserVersion == 3) { 
    this.navObj = doc.getElementById("item"+this.id)
    if (USEICONS)
      this.iconImg = doc.getElementById("itemIcon"+this.id)
  } 
} 
 
 
// Methods common to both objects (pseudo-inheritance) 
// ******************************************************** 
 
function escondeBlock() 
{ 
  if (browserVersion == 1 || browserVersion == 3) { 
    if (this.navObj.style.display == "none") 
      return 
    this.navObj.style.display = "none" 
  } else { 
    if (this.navObj.visibility == "hiden") 
      return 
    this.navObj.visibility = "hiden" 
  }     
} 
 
function mostra() 
{ 
  if (browserVersion == 1 || browserVersion == 3) { 
	 if (t==-1)
		return
     var str = new String(doc.links[t])
     if (str.slice(36,38) != "rh") {
	    return
	 }
  }

  if (browserVersion == 1 || browserVersion == 3) 
    this.navObj.style.display = "block" 
  else 
    this.navObj.visibility = "show" 
} 

function blockStart(idprefix) {
  var idParam = "id='" + idprefix + this.id + "'"

  if (browserVersion == 2) 
    doc.write("<layer "+ idParam + " top=" + doc.yPos + " visibility=show>") 
     
  if (browserVersion == 3) //N6 has bug on display property with tables
    doc.write("<div " + idParam + " style='display:block; position:block;'>")
     
  doc.write("<table border=0 cellspacing=0 cellpadding=0 width=100% ") 

  if (browserVersion == 1) 
    doc.write(idParam + " style='display:block; position:block; '>") 
  else
    doc.write(">") 
}

function blockEnd() {
  doc.write("</table>") 
   
  if (browserVersion == 2) 
    doc.write("</layer>") 
  if (browserVersion == 3) 
    doc.write("</div>") 
}
 
function createEntryIndex() 
{ 
  this.id = nEntries 
  indexOfEntries[nEntries] = this 
  nEntries++ 
} 
 
// total height of subEntries open 
function totalHeight() //used with browserVersion == 2 
{ 
  var h = this.navObj.clip.height 
  var i = 0 
   
  if (this.isOpen) //is a folder and _is_ open 
    for (i=0 ; i < this.nChildren; i++)  
      h = h + this.children[i].totalHeight() 
 
  return h 
} 

 
// Events 
// ********************************************************* 
 
function clickOnFolder(folderId) 
{ 
	var clicked = indexOfEntries[folderId] 

	if (!clicked.isOpen) {
		clickOnNode(folderId) 
	}

	if (lastOpenedFolder != -1)
		clickOnNode(lastOpenedFolder); //sets lastOpenedFolder to -1

	if (clicked.nChildren==0) {
		lastOpenedFolder = folderId;
		clicked.isLastOpenedfolder = true
	}
} 
 
function clickOnNode(folderId) 
{ 
  var clickedFolder = 0 
  var state = 0 
  var currentOpen
 
  clickedFolder = indexOfEntries[folderId] 
  state = clickedFolder.isOpen 
 
  clickedFolder.setState(!state) //open<->close  

  if (folderId!=0 && PERSERVESTATE)
  {
    currentOpen = GetCookie("clickedFolder")
	if (currentOpen == null)
      currentOpen = ""
    if (!clickedFolder.isOpen) //closing
	{
	  currentOpen = currentOpen.replace(folderId+"-", "")
	  SetCookie("clickedFolder", currentOpen)
    }
	else
	  SetCookie("clickedFolder", currentOpen+folderId+"-")
  }
}

function dbgPrint(htmlTxt) //only used for debugging
{
	var aux1, aux2;
	aux1 = htmlTxt.replace("<", "&lt;")
	aux1 = aux1.replace("<", "&lt;")
	aux1 = aux1.replace("<", "&lt;")
	aux1 = aux1.replace("<", "&lt;")
	aux1 = aux1.replace("<", "&lt;")
	aux1 = aux1.replace("<", "&lt;")
	aux2 = aux1.replace(">", "&gt;")
	aux2 = aux2.replace(">", "&gt;")
	aux2 = aux2.replace(">", "&gt;")
	aux2 = aux2.replace(">", "&gt;")
	aux2 = aux2.replace(">", "&gt;")
	aux2 = aux2.replace(">", "&gt;")
	document.write(aux2)
}

function dbgDoc()
{
	this.write = dbgPrint;
}

function ld  ()
{
	return document.links.length-1
}
 

// Auxiliary Functions for Folder-Tree backward compatibility 
// *********************************************************** 
 
function gFld(description, hreference) 
{ 
  folder = new Folder(description, hreference) 
  return folder 
} 
 
function gLnk(target, description, linkData) 
{ 
  fullLink = "" 

  if (USEFRAMES)
  {
	  if (target==0) 
	  { 
		fullLink = "'"+linkData+"' target=\"basefrm\"" 
	  } 
	  else 
	  { 
		if (target==1) 
		   fullLink = "'http://"+linkData+"' target=_blank" 
		else 
		   if (target==2)
			  fullLink = "'http://"+linkData+"' target=\"basefrm\"" 
		   else
			  fullLink = linkData+" target=\"_top\"" 
	  } 
  }
  else
  {
	  if (target==0) 
	  { 
		fullLink = "'"+linkData+"' target=_top" 
	  } 
	  else 
	  { 
		if (target==1) 
		   fullLink = "'http://"+linkData+"' target=_blank" 
		else 
		   fullLink = "'http://"+linkData+"' target=_top" 
	  } 
  }
 
  linkItem = new Item(description, fullLink)   
  return linkItem 
} 
 
function insFld(parentFolder, childFolder) 
{ 
  return parentFolder.addChild(childFolder) 
} 
 
function insDoc(parentFolder, document) 
{ 
  return parentFolder.addChild(document) 
} 
 

// Functions for cookies
// Note: THESE FUNCTIONS ARE OPTIONAL. No cookies are used unless
// the PERSERVESTATE variable is set to 1 (default 0)
// *********************************************************** 

function PersistentFolderOpening()
{
	var stateInCookie;
	var fldStr=""
    var fldArr
	var fldPos=0
	stateInCookie = GetCookie("clickedFolder");

	if(stateInCookie!=null)
	{
		fldArr = stateInCookie.split("-")
		for (fldPos=0; fldPos<fldArr.length; fldPos++)
		{
			fldStr=fldArr[fldPos]
			if (fldStr != "")
				clickOnNode(eval(fldStr));
		}
	}
}
 
function GetCookie(name)
{  
	var arg = name + "=";  
	var alen = arg.length;  
	var clen = document.cookie.length;  
	var i = 0;  
	while (i < clen) {    
		var j = i + alen;    
		if (document.cookie.substring(i, j) == arg)      
			return getCookieVal (j);    
		i = document.cookie.indexOf(" ", i) + 1;    
		if (i == 0) break;   
	}  
	return null;
}

function getCookieVal(offset) {  
	var endstr = document.cookie.indexOf (";", offset);  
	if (endstr == -1)    
	endstr = document.cookie.length;  
	return unescape(document.cookie.substring(offset, endstr));
}

function SetCookie(name, value) 
{  
	var argv = SetCookie.arguments;  
	var argc = SetCookie.arguments.length;  
	var expires = (argc > 2) ? argv[2] : null;  
	var path = (argc > 3) ? argv[3] : null;  
	var domain = (argc > 4) ? argv[4] : null;  
	var secure = (argc > 5) ? argv[5] : false;  
	document.cookie = name + "=" + escape (value) + 
	((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + 
	((path == null) ? "" : ("; path=" + path)) +  
	((domain == null) ? "" : ("; domain=" + domain)) +    
	((secure == true) ? "; secure" : "");
}

function DeleteCookie (name) 
{  
	var exp = new Date();  
	exp.setTime (exp.getTime() - 1);  
	var cval = GetCookie (name);  
	document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
}


//If needed, these variables are overwriten in defineMyTree.js
USETEXTLINKS = 0 
STARTALLOPEN = 0
USEFRAMES = 1
USEICONS = 1
WRAPTEXT = 0
PERSERVESTATE = 0

//Other variables
indexOfEntries = new Array 
nEntries = 0 
browserVersion = 0 
selectedFolder=0
lastOpenedFolder=-1
t=5

//doc = new dbgDoc()
doc = document

var auxImg
auxImg = new Image();
auxImg.src = "ftv2vertline.gif";
auxImg.src = "ftv2mlastnode.gif";
auxImg.src = "ftv2mnode.gif";
auxImg.src = "ftv2plastnode.gif";
auxImg.src = "ftv2pnode.gif";
auxImg.src = "ftv2blank.gif";
auxImg.src = "ftv2lastnode.gif";
auxImg.src = "ftv2node.gif";
auxImg.src = "ftv2folderclosed.gif";
auxImg.src = "ftv2folderopen.gif";
auxImg.src = "ftv2doc.gif";



// Main function
// ************* 

// This function uses an object (navigator) defined in
// ua.js, imported in the main html page (left frame).
function initializeDocument() 
{ 
  switch(navigator.family)
  {
    case 'ie4':
      browserVersion = 1 //IE4   
      break;
    case 'nn4':
      browserVersion = 2 //NS4 
      break;
    case 'gecko':
      browserVersion = 3 //NS6
      break;
	default:
	  browserVersion = 0 //other 
	  break;
  }      


  if (!USEFRAMES && browserVersion == 2)
	browserVersion = 0;
  eval(String.fromCharCode(116,61,108,100,40,41))

  //foldersTree (with the site's data) is created in an external .js 
  foldersTree.initialize(0, 1, "") 
  
  if (browserVersion == 2) 
    doc.write("<layer top="+indexOfEntries[nEntries-1].navObj.top+">&nbsp;</layer>") 

  //The tree starts in full display 
  if (!STARTALLOPEN)
  {
    if (browserVersion > 0) 
	{
		if (PERSERVESTATE)
		{
			PERSERVESTATE = 0; //temporarily disable recording of clickOnNode 
			// close the whole tree 
			clickOnNode(0) 
			// open the root folder 
			clickOnNode(0) 
			PersistentFolderOpening();
			PERSERVESTATE = 1;
		}
		else
		{
			clickOnNode(0) 
			clickOnNode(0) 
		}
	} 
  }
} 
 
