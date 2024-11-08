// CONTROLLA IL NUMERO DEI FRAMES ED EVENTUALMENTE RIMANDA A /vbsimple LAUNCHER
{
  ScriviCookie('Visits', '1');              // ELIMINA POPUP
  if(document.location.href.substring(document.location.href.length - 3) != 'nof')
    if(window.parent.frames.length < 3 || window.parent.frames['basefrm'] == null)
    {
      switch(document.location.pathname)
      {
        case '/vbsimple.htm' : 
        case '/index.htm' : 
        case '/submenu.htm' :
        case '/cerca.htm' :
        case '/popimage.htm' :
        case '/ftv21/index.htm' : 
          break;
        default:
//          window.parent.location.href = '/vbsimple.htm?' + document.location.pathname;
;
      }
    }
}

var NumeroVociTreeView = 0;
var NumeroMembri = 0;
var VBUP2TotalSize = 0;

function Aggiorna(segno)
{
// Ridimensiona il testo utilizzando lo stile codicevb
  if(Browser() != 'explorer' || parent.frames['basefrm'] == null) return;
  if(parent.frames['basefrm'] == null) return;
  var actualfont = LeggiCookie("CODEFONT") * 1 + segno;
  if(actualfont == 0) actualfont = 8;
  if(actualfont == "") actualfont = 8;
  if(actualfont < 6) actualfont = 6;
  if(actualfont > 20) actualfont = 20;
  ScriviCookie("CODEFONT", actualfont);
  parent.frames['basefrm'].document.styleSheets[1].rules[0].style.fontSize = actualfont + 'pt';
  parent.frames['basefrm'].document.styleSheets[1].rules[1].style.fontSize = actualfont + 'pt';
//  alert(parent.frames['basefrm'].document.styleSheets[1].rules[0].style.fontSize);
  parent.frames['basefrm'].window.focus();
  return;
}

function Errore404()
{
// Rimanda alla pagina 404
  document.location.href="/err404.htm"
  return;
}

function FinestraCerca()
{
// Apre la finestra di ricerca
  document.open('cerca.htm', 'cercaframe', 'width=640, height=310, resizable=0, scrollbars=0, status=0');
  return;
}

function FibiaWebStats()
{
// Banner del Fibia WebStats
  document.write('<p align="center" class="dontprint">');
//  document.write('<a href="http://www.vbsimple.net/webstats/view.asp?USER=VBSIMPLE" target="WEBSTATS"><img src="http://www.vbsimple.net/webstats/default.asp?USER=VBSIMPLE&W=' + screen.width + "&H=" + screen.height + "&D=" + screen.colorDepth + "&R=" + Math.random() + '" alt="Powered by Fibia WebStats" width="90" height="30" border="0"></a>');
  document.write('<img src="/images/webstats.gif" alt="Powered by Fibia WebStats" width="90" height="30" border="0">');
  document.write('</p>');
//  var testo = '';
//  testo = 'http://www.vbsimple.net/webstats/default.asp?USER=VBSIMPLE&W=' + screen.width + "&H=" + screen.height + "&D=" + screen.colorDepth + "&R=" + Math.random();
//  alert(testo);
//  document.location.href = testo;
  return;
}

function FibiaWebStats2()
{
// Banner del Fibia WebStats (piccolo per SubMenu)
//  document.write('<a href="http://www.vbsimple.net/webstats/view.asp?USER=VBSIMPLE" target="WEBSTATS"><img src="http://www.vbsimple.net/webstats/default.asp?USER=VBSIMPLE&W=' + screen.width + "&H=" + screen.height + "&D=" + screen.colorDepth + "&R=" + Math.random() + '" alt="Powered by Fibia WebStats" width="90" height="30" border="0"></a>');
  document.write('<img src="images/webstats.gif" alt="Powered by Fibia WebStats" width="90" height="30" border="0">');
  return;
}

function LeggiCookie(nome)
{
// Legge un cookie
  var lunghezza = nome.length;
  var fine = null;
  var i = 0;
  while (i <= parent.document.cookie.length)
  {
    var j = (i + lunghezza);
    if (parent.document.cookie.substring(i, j) == nome)
    {
      fine = parent.document.cookie.indexOf(";", j);
      if (fine == -1)
        fine = parent.document.cookie.length;
      return parent.document.cookie.substring(j + 1, fine);
      break;
    }
    i++;
  }
  if (fine == null)
    return "";
  return '';
}

function ScriviCookie(nome, valore)
{
// Scrive un cookie
  var oggi = new Date();
  oggi.setDate(oggi.getDate() + 1);
  parent.document.cookie = nome + '=' + valore + ';expires=' + oggi.toGMTString();
  return;
}

function ScriviCookieTemp(nome, valore)
{
// Scrive un cookie temporaneo
  parent.document.cookie = nome + '=' + valore;
  return;
}

function LeggiOre(ore, minuti, secondi, separatore)
{
  var oggi = new Date();
  oggi.setDate(oggi.getDate());
  risultato = '';
  if(ore != 0) risultato += oggi.getHours() + separatore;
  if(minuti != 0) risultato += oggi.getMinutes() + separatore;
  if(secondi != 0) risultato += oggi.getSeconds() + separatore;
  return risultato;
}

function GetHostPath(path)
{ return "http://" + location.hostname + path; }

function CreaRisorse(titolo1, titolo2, pagina, data, risorsa, dimensione)
{
//  var URL = pagina;
//  if(GetHostPath('') != 'http://www.vbsimple.net/') URL = 'http://www.vbsimple.net/asp/'
  document.write('<tr>\n');
  document.write('  <td width="90%" align="left" valign="top"><b>' + titolo1 + '</b><br>' + titolo2);
  document.write('<br><a href="' + pagina + '">' + GetHostPath(pagina) + '</a>');
  if(data != "")
    document.write('<span class="size1"> - ' + data + '</span>');
  document.write('<br><br></td>\n');
  if(risorsa != "")
    document.write('  <td width="10%" align="center" valign="top"><a href="' + risorsa + '"><img src="../images/disco2.gif" width="43" height="32" border="0" alt="Scarica il file di risorse del progetto"></a><br><b>' + dimensione.toString() + ' KB</b></td>\n');
  else
    document.write('  <td width="10%" align="center" valign="top">&nbsp;</td>\n');
  document.write('</tr>\n');
//    document.write('  <td width="10%" align="center" valign="top"><img src="../images/discono.gif" width="43" height="32" border="0" alt="Nessun file di risorsa da scaricare"><br><b>NO</b></td>\n');
  return;
}

function CreaRisorsePDF(titolo1, titolo2, pagina, data, pdf, dimensionepdf)
{
  document.write('<tr>\n');
  document.write('  <td width="90%" align="left" valign="top"><b>' + titolo1 + '</b><br>' + titolo2);
  document.write('<br><a href="' + pagina + '">' + GetHostPath(pagina) + '</a>');
  if(data != "")
    document.write('<span class="size1"> - ' + data + '</size>');
  document.write('<br><br></td>\n');
  if(pdf != "")
    document.write('  <td width="10%" align="center" valign="top"><a href="' + pdf + '"><img src="../../images/icons/pdf.gif" width="32" height="32" border="0" alt="Scarica l\'articolo"></a><br><b>' + dimensionepdf.toString() + ' KB</b></td>\n');
  else
    document.write('  <td width="10%" align="center" valign="top">&nbsp;</td>\n');
  document.write('</tr>\n');
  return;
}

function InizioRisorse(categoria, indirizzo)
{
  document.write('<hr>\n');
  document.write('<table width="98%" border="0" cellspacing="1" cellpadding="0" border="1">\n');
  document.write('  <tr>\n');
  if(indirizzo != '')
    document.write('    <td colspan="3" align="center"><div class="size3"><a href="' + indirizzo + '">' + categoria + '</a></div></td>\n');
  else
    document.write('    <td colspan="3" align="center"><div class="size3">' + categoria + '</div></td>\n');
  document.write('  </tr>\n');
  return;
}

function FineRisorse()
{
  document.write('</table>\n');
  return;
}

function NORisorseVBUP2()
{
  alert('La risorsa non è al momento disponibile.');
  return;
}

function DataUltimaModifica()
{
  var modifica = document.lastModified;
  modifica = modifica.substring(0, modifica.indexOf(" "));
  var giorno = modifica.substring(3, 5);
  var mese = modifica.substring(0, 2);
  var anno = modifica.substring(modifica.lastIndexOf("/") + 1, modifica.length);
  document.write('Ultimo aggiornamento: ' + giorno + '/' + mese + '/' + anno + '');
//  alert(modifica);
  return;
}

function vbsimplenet()
{ return (location.hostname == "www.vbsimple.net") || (location.hostname == "www.vbsimple.fbi"); }

function Banner()
{
// Genera il banner simulato di Virtual Avenue
//  if(!vbsimplenet())
//  {
//    document.write("      <a href=\"http://www.virtualave.net\" target=\"_blank\" class=\"dontprint\">");
//    document.write("      <img src=\"/images/virtaves.png\" border=\"0\" width=\"468\" height=\"60\" class=\"dontprint\"><br>");
//    document.write("      Questo sito &egrave; ospitato su Virtual Avenue<br>");
//    document.write("      Clicca qui per visitare l'home page di Virtual Avenue</a>");
//  }
  return;
}

function IsMirror()
{
// Riproduce l'avviso riguardante il mirror
  if(vbsimplenet())
  {
    document.write("<div class=\"colorerosso\"><b>In caso di malfunzionamento di questo sito si ");
    document.write("suggerisce l'uso del sito Mirror:<br>");
    document.write("<a href=\"http://vbsimple.virtualave.net\" target=\"_top\">http://vbsimple.virtualave.net</a></b></div>");
  }
  else
  {
    document.write("<div class=\"colorerosso\"><b>Il sito che state visualizzando &egrave; il Mirror di ");
    document.write("VBSimple.<br>Si raccomanda l'uso del sito ufficiale:<br>");
    document.write("<a href=\"http://www.vbsimple.net\" target=\"_top\">http://www.vbsimple.net</a></b></div>");
  }
  return;
}

function AggiungiBookmark()
{
// Aggiunge il bookmark
  if(Browser() != 'explorer') return;
  var TitoloBookMark = "Visual Basic Simple";
  var image1= new Image();
  image1.src="favicon.ico";
  window.external.AddFavorite(GetHostPath(''), TitoloBookMark)
  return;
}

function SettaHomePage()
{  
// Imposta l'home page
  if(Browser() != 'explorer') return;
  document.body.style.behavior='url(#default#homepage)';
  document.body.setHomePage(GetHostPath(''));
  return;
}

function VoceTreeView(parametro)
{
// Aggiunge una voce al TreeView java
  document.write('  <PARAM NAME="I' + NumeroVociTreeView++ + '" VALUE="' + parametro + '">\n');
  return;
}

function MembriVBSimple(nome, email, data, UIN)
{
// Aggiunge un membro all'elenco di VBSimple
  NumeroMembri++;
  if(UIN == '')
    UIN = '&nbsp;'
  else
    UIN = '<img src="http://online.mirabilis.com/scripts/online.dll?icq=' + UIN + '&img=10" nosave align="absmiddle" alt="Connesso su ICQ? - ' + UIN + '" width="79" height="22">'
  document.write('        <tr>');
  document.write('          <td width="1%" height="40" align="center" valign="middle"><b>' + NumeroMembri + '</b></td>');
  document.write('          <td width="32%" height="40" align="left" valign="middle"><i><b>' + nome + '</b></i></td>');
  document.write('          <td width="28%" height="40" align="left" valign="middle"><a href="mailto:' + email + '">' + email + '</a></td>');
  document.write('          <td width="23%" height="40" align="center" valign="middle">' + data + '</td>');
  document.write('          <td width="78" height="40" align="left" valign="middle">' + UIN + '</td>');
  document.write('        </tr>');
  return;
}

function NomePagina()
{
// Descrive il nome della pagina
  var titolo = document.location.href;
  if(titolo.indexOf("#", 0) > 0)
    titolo = titolo.substring(0, titolo.indexOf("#", 0));
  document.write('<div class="nomepagina">' + titolo + '</div><hr>');
  Aggiorna(0);
  window.focus();
  return;
}

function Netscape()
{ return (navigator.appName == 'Netscape'); }

function Browser()
{
// Restituisce il browser utilizzato
  var strUA = navigator.userAgent.toLowerCase();
  var strAN = navigator.appName.toLowerCase();
  if(strUA.indexOf('opera') != -1) return 'opera';
  else if(strUA.indexOf('gecko') != -1) return 'mozilla';
  else if(strUA.indexOf('msie') != -1) return 'explorer';
  else if(strUA.indexOf('netscape') != -1) return 'netscape';
  else if(strUA.indexOf('mozilla') != -1 && strAN == 'netscape') return 'netscape';
  else return 'unknown';
}

function Lampeggia(paragrafo, speed)
{
  // La gestione è molto rozza ma per le operazioni elementari funziona
  // E' progettato per funzionare con un solo paragrafo ma può essere messo
  // facilmente a posto. Utilizzato l'operatore ?: invece che un if-else.
  // Modificare il valore di timeout per regolare la velocità
  var nomeparagrafo = paragrafo;
  if(Browser() == 'explorer')
    document.all[paragrafo].style.visibility = document.all[paragrafo].style.visibility ? "" : "hidden";
  setTimeout("Lampeggia('" + nomeparagrafo + "', " + speed + ")", speed);
  return;
}

function SceltaMenu(formato)
{
// Modifica il menu attivo
  var strFormato;
  var strURL;
  switch(formato.toLowerCase())
  {
    case 'jscript' : strFormato = 'JavaScript';
                     strURL = 'folderTreeLeftFrame.htm';
                     break;
    case 'java'    : strFormato = 'Java';
                     strURL = 'nav.htm';
                     break;
    default        : strFormato = 'HTML';
                     strURL = 'index.htm';
                     break;
  }
  if(confirm('Sei sicuro di voler richiamare il menu ' + strFormato + '?\n\nSe si presentano problemi di visualizzazione prova a scegliere un altro tipo di menu.'))
    parent.frames['treeframe'].window.document.location.href = strURL;
  return;
}

function FormatNumber(numero, posizioni, separatore)
{
  numero = numero.toString();
  var i = numero.length - posizioni;
  var ret = new String();
  for(ret = ''; i + posizioni > 0; i-=posizioni)
    ret = numero.substring(i, i + posizioni) + separatore + ret;
//  if((ret.substring(ret.length - 1, ret.length) == separatore) && (ret.length > 0))
    ret = ret.substring(0, ret.length - 1);
  return ret;
}

function NomeFilePagina()
{
  var filename = document.location.href;
  var i = filename.lastIndexOf("/");
  if(i > 0)
    filename = filename.substring(i+1);
  i = filename.indexOf("#");
  if(i > 0)
    filename = filename.substring(0, i);
  return(filename.toLowerCase());
}

function JumpMenuItem(url, descr)
{
  this.url = url;
  this.descr = descr;
  return this;
}

function JumpMenu()
{
  var itemcount;
  var i = 0;
  var menuitems = new Array();
  menuitems[i++] = new JumpMenuItem('index.htm',    'Menu Principale');
  menuitems[i++] = new JumpMenuItem('chat.htm',     'Chat');
  menuitems[i++] = new JumpMenuItem('base.htm',     'Corso Base');
  menuitems[i++] = new JumpMenuItem('intermed.htm', 'Corso Intermedio');
  menuitems[i++] = new JumpMenuItem('thunder.htm',  'Controlli Thunder');
  menuitems[i++] = new JumpMenuItem('userctls.htm', 'Controlli Utente');
  menuitems[i++] = new JumpMenuItem('howto.htm',    'HowTo - Come Fare?');
  menuitems[i++] = new JumpMenuItem('database.htm', 'Database');
  menuitems[i++] = new JumpMenuItem('cliserv.htm',  'Client / Server');
  menuitems[i++] = new JumpMenuItem('activity.htm', 'Richieste Lettori');
  menuitems[i++] = new JumpMenuItem('news.htm',     'Articoli - News');
  menuitems[i++] = new JumpMenuItem('weird.htm',    'Weird Things');
  menuitems[i++] = new JumpMenuItem('infos.htm',    'Info aggiuntive');
  menuitems[i++] = new JumpMenuItem('glossary.htm', 'Glossario');
  menuitems[i++] = new JumpMenuItem('links.htm',    'Links Utili');
  menuitems[i++] = new JumpMenuItem('risorse.htm',  'Downloads');
  menuitems[i++] = new JumpMenuItem('enum.htm',     'Enumerazioni');
  menuitems[i++] = new JumpMenuItem('history.htm',  'Aggiornamenti');
  itemcount = i;

  document.write('<div align="right"><b class="textboxblue">Vai a </b><select name="jumpmenu" class="textboxblue">');
  i = document.location.href.lastIndexOf("/")
  for(i=0; i<itemcount; i++)
  {
    document.write('<option value="' + menuitems[i].url + '"');
    if(NomeFilePagina() == menuitems[i].url)
      document.write(' selected');
    document.write('>' + menuitems[i].descr + '</option>\n');
    delete(menuitems[i]);
  }
  document.write('</select>');
  document.write('<a href="javascript: document.location.href = (document.forms[\'formjumpmenu\'].jumpmenu.value);"><img src="dotarrow.gif" alt="Vai" align="absmiddle" width="25" height="25" border="0"></a></div>');
  delete(menuitems);
}

function ScaricaPDF()
{
  var pagina = NomeFilePagina();
  pagina = pagina.substring(0, pagina.indexOf(".htm")) + '.zip'
//  alert(pagina);
  document.location.href = GetHostPath('/risorse/pdf/' + pagina);
}

function ScaricaZIP()
{
  var pagina = NomeFilePagina();
  if(pagina.lastIndexOf("_") != pagina.indexOf("_"))
    pagina = pagina.substring(0, pagina.lastIndexOf("_")) + '.zip'
  else
    pagina = pagina.substring(0, pagina.indexOf(".htm")) + '.zip';
//  alert(pagina);
  document.location.href = GetHostPath('/risorse/' + pagina);
  return;
}

function Stampa()
{
  switch(Browser())
  {
    case 'explorer' :
    case 'opera' :
    case 'netscape' :
    case 'mozilla' :
      window.print();
      break;
    default:
      alert('Funzionalità non supportata per questo browser');
  }
  return;
}

function ShowInStatus(message) {
  window.status=message;
  return true;
}

