var scrollingItems = new Array();
var intLast = -1;
var intScrollingLines = 10;
var strPathHome = '/';

function LoadScrollingDivs() {
  var xmlDoc = parent.submenuframe.document.all("XMLScroller");
  if((xmlDoc == null) ||
    (xmlDoc.XMLDocument == null) ||
    (xmlDoc.XMLDocument.documentElement == null) ||
    (xmlDoc.XMLDocument.documentElement.lastChild == null) ||
    (xmlDoc.XMLDocument.documentElement.lastChild.childNodes == null))
    return;
  var xmlNodes = xmlDoc.XMLDocument.documentElement.lastChild.childNodes;
  var xmlNodesCount = xmlNodes.length - 1;
  var xmlAttributes, itemsCount;
  try                                               // Gestione errori
  {                                                 // A volte alcuni nodi non vengono trovati
    for(itemsCount=0;itemsCount<intScrollingLines;itemsCount++)
    {
      xmlAttributes = xmlNodes[Math.floor(Math.random() * xmlNodesCount)].attributes; 
      scrollingItems[itemsCount] = new CreateDivItem(
        xmlAttributes[1].nodeValue,                 // title
        strPathHome + xmlAttributes[2].nodeValue,   // link
        xmlAttributes[3].nodeValue,                 // category
        xmlAttributes[4].nodeValue,                 // creation date
        xmlAttributes[5].nodeValue,                 // author
        xmlAttributes[6].nodeValue,                 // descr
        xmlAttributes[7].nodeValue,                 // descr2
        strPathHome + xmlAttributes[8].nodeValue    // image
      );
    }
  }
  catch(e) { }                                      // Ignora l'errore e termina lo script
  return(itemsCount);
}

function UpdateDescr(itemIndex)
{
  var HTMLText;
  var item = scrollingItems[itemIndex];
  HTMLText = '<b>' + item.title + '</b><br>'
  HTMLText += 'Autore: <b>' + item.author + '</b><br>';
  HTMLText += 'Sezione: ' + item.category + '<br>';
  HTMLText += 'Data: ' + item.date + '<hr>';
  if(item.descr.length > 0)
    HTMLText += item.descr + '<br>';
  if(item.image.length > 0)
    HTMLText += '<a href="/popimage.htm?' + item.image + '" target="_blank"><img src="/images/icons/screen.gif" border="0" align="absmiddle">Vedi anteprima</a><br>';
  HTMLText += '<img src="/images/icons/goto.gif" border="0" align="absmiddle">';
  HTMLText += '<a href="' + item.url + '">Articolo</a> | ';
  HTMLText += '<a href="' + item.url + '" target="_blank">Nuova pagina</a>';
  explain.innerHTML = HTMLText
  return;
}

function SwitchVisibility(DivIndex, Redraw)
{
  var div = eval('div' + DivIndex);
  if(DivIndex != intLast && intLast != -1 && Redraw != 0)
    SwitchVisibility(intLast, 0);
  div.style.display=(div.style.display=='none'?'inline':'none');
  intLast = (intLast == DivIndex?-1:DivIndex);
  if(Redraw != 0)
    UpdateDescr(DivIndex);
  return;
}

function CreateDivItem(title, url, category, date, author, descr, descr2, image)
{
   this.title = title;
   this.url = url;
   this.category = category;
   this.author = author;
   this.date = date.substring(8, 10) + '/' + date.substring(5, 7) + '/' + date.substring(0, 4);
   this.descr = (descr.length > 0?descr:descr2);
   this.image = (image!=strPathHome?image:'');
   return this;
}

function CreateDivs()
{
  var j;
  LoadScrollingDivs();
  for(j=0; j < scrollingItems.length; j++)
  {
    document.write('<p class="scrollitem">');
    document.write('<a href="#" onClick="SwitchVisibility(' + j + ', 1);">' + scrollingItems[j].title + '</a>');
    document.write('<div class="scrolldivs" id="div' + j + '"><a class="gotopage" href="' + scrollingItems[j].url + '">Vai alla pagina</a></div>');
    document.write('</p>');
    SwitchVisibility(j, 0);
    intLast = -1;
  }
  document.write('</marquee>');
  return;
}

function CloseArticlesScroller()
{
  if(!confirm('Hai scelto di chiudere la finestra scorrevole.\nChiudere la finestra adesso?'))
    return;
  if(!confirm('Desideri che venga automaticamente riaperta alla prossima pagina?'))
    ScriviCookieTemp('ArticlesScroller', 'hide');
  eval('TableScroller').style.display = 'none';
  return;
}

function MinMaxArticlesScroller()
{
  if(eval('BodyScroller1').style.display=='none')
  {
    eval('BodyScroller1').style.display='inline';
    eval('BodyScroller2').style.display='inline';
    MinMaxButton.src='/images/icons/wndmin2.gif';
//    MinMaxButton.src='/images/icons/pullup.gif';
    MinMaxButton.alt='Nascondi';
    ScriviCookieTemp('ArticlesScroller', '');
  }
  else
  {
    eval('BodyScroller1').style.display='none';
    eval('BodyScroller2').style.display='none';
    MinMaxButton.src='/images/icons/wndmax2.gif';
//    MinMaxButton.src='/images/icons/pulldown.gif';
    MinMaxButton.alt='Mostra';
    ScriviCookieTemp('ArticlesScroller', 'minimize');
  }
  return;
}

function ShowArticlesScroller()
{
  if(Browser() != 'explorer')
    return;
  if(LeggiCookie('ArticlesScroller') == 'hide')
    return;
  document.write('<table border="1" cellpadding="2" cellspacing="1" bordercolor="#000000" width="175" id="TableScroller" align="right" class="dontprint">');
  document.write('<tr><td align="center" nowrap>');
  document.write('  <a href="javascript:CloseArticlesScroller();"><img src="/images/icons/wndclos2.gif" align="right" alt="Chiudi" border="0"></a>');
  document.write('  <a href="javascript:MinMaxArticlesScroller();"><img ');
  if(LeggiCookie('ArticlesScroller') == 'minimize')
    document.write('src="/images/icons/wndmax2.gif" alt="Mostra"');
//    document.write('src="/images/icons/pulldown.gif" alt="Mostra"');
  else
    document.write('src="/images/icons/wndmin2.gif" alt="Nascondi"');
//    document.write('src="/images/icons/pullup.gif" alt="Nascondi"');
  document.write(' align="right" border="0" name="MinMaxButton"></a>');
  document.write('  <b>Alcuni nostri articoli</b></td></tr>');
  document.write('<tr id="BodyScroller1">');
  document.write('  <td align="center">');
  document.write('    <marquee onmouseover="this.stop();" onmouseout="this.start();" scrollAmount="1" scrollDelay="60" direction="up" width="140" height="100" class="scrollitem">');
  document.write('      <script language="JavaScript">CreateDivs();</script>');
  document.write('    </marquee>');
  document.write('</td></tr>');
  document.write('<tr id="BodyScroller2"><td bgcolor="#d4d0c8"><div id="explain" class="size1">&nbsp;</div></td></tr>');
  document.write('</table>');
  if(LeggiCookie('ArticlesScroller') == 'minimize')
    MinMaxArticlesScroller();
  return;
}
