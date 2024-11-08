// You can find instructions for this file here:
// http://www.treeview.net

// Decide if the names are links or just the icons
USETEXTLINKS = 1  //replace 0 with 1 for hyperlinks

// Decide if the tree is to start all open or just showing the root folders
STARTALLOPEN = 0 //replace 0 with 1 to show the whole tree


foldersTree = gFld("<b><i>Home Page</i></b>", "../home.htm")
  doc1 = insDoc(foldersTree, gLnk(1, "Sezione riservata", "www.vbsimple.net/asp/default.htm"))
    doc1.iconSrc = "icoreserved.gif"
  doc1 = insDoc(foldersTree, gLnk(1, "Forum", "www.vbsimple.net/forum/default.asp"))
    doc1.iconSrc = "icoforum.gif"
  ramo1 = insFld(foldersTree, gFld("<b>Corso base</b>", "../base/index.htm"))
    ramo1.iconSrc = "icobookopen.gif"
    ramo1.iconSrcClosed = "icobookclosed.gif"
    insDoc(ramo1, gLnk(0, "Indice", "../base/index.htm"))
    insDoc(ramo1, gLnk(0, "Capitolo 1", "../base/bas_01.htm"))
    insDoc(ramo1, gLnk(0, "Capitolo 2", "../base/bas_02.htm"))
    insDoc(ramo1, gLnk(0, "Capitolo 3", "../base/bas_03.htm"))
    insDoc(ramo1, gLnk(0, "Capitolo 4", "../base/bas_04.htm"))
    insDoc(ramo1, gLnk(0, "Capitolo 5", "../base/bas_05.htm"))
    insDoc(ramo1, gLnk(0, "Capitolo 6", "../base/bas_06.htm"))
    insDoc(ramo1, gLnk(0, "Capitolo 7", "../base/bas_07.htm"))
    insDoc(ramo1, gLnk(0, "Capitolo 8", "../base/bas_08.htm"))
    insDoc(ramo1, gLnk(0, "Capitolo 9", "../base/bas_09.htm"))
    insDoc(ramo1, gLnk(0, "Capitolo 10", "../base/bas_10.htm"))
    insDoc(ramo1, gLnk(0, "Capitolo 11", "../base/bas_11.htm"))
    insDoc(ramo1, gLnk(0, "Capitolo 12", "../base/bas_12.htm"))
    insDoc(ramo1, gLnk(0, "Capitolo 13", "../base/bas_13.htm"))
    insDoc(ramo1, gLnk(0, "Capitolo 14", "../base/bas_14.htm"))
    insDoc(ramo1, gLnk(0, "Capitolo 15", "../base/bas_15.htm"))
    insDoc(ramo1, gLnk(0, "Capitolo 16", "../base/bas_16.htm"))
    insDoc(ramo1, gLnk(0, "Capitolo 17", "../base/bas_17.htm"))

  ramo1 = insFld(foldersTree, gFld("<b>Corso Intermedio</b>", "../intermed/index.htm"))
    ramo1.iconSrc = "icobookopen.gif"
    ramo1.iconSrcClosed = "icobookclosed.gif"
    insDoc(ramo1, gLnk(0, "Indice", "../intermed/index.htm"))
    insDoc(ramo1, gLnk(0, "Capitolo 1", "../intermed/int_01.htm"))
    insDoc(ramo1, gLnk(0, "Capitolo 2", "../intermed/int_02.htm"))
    insDoc(ramo1, gLnk(0, "Capitolo 3", "../intermed/int_03.htm"))
    insDoc(ramo1, gLnk(0, "Capitolo 4", "../intermed/int_04.htm"))
    insDoc(ramo1, gLnk(0, "Capitolo 5", "../intermed/int_05.htm"))

  ramo1 = insFld(foldersTree, gFld("<strike>Corso Avanzato</strike>", ""))
    ramo1.iconSrc = "icofoldererr.gif"
    ramo1.iconSrcClosed = "icofoldererr.gif"

  ramo1 = insFld(foldersTree, gFld("<b>Controlli Thunder</b>", "../thunder/index.htm"))
    ramo1.iconSrc = "icothunder.gif"
    ramo1.iconSrcClosed = "icothunder.gif"
    insDoc(ramo1, gLnk(0, "Indice", "../thunder/index.htm"))
    doc1 = insDoc(ramo1, gLnk(0, "<strike>Form</strike>", "../err404.htm"))
      doc1.iconSrc = "icodocerr.gif"
    ramo2 = insFld(ramo1, gFld("<b>Label</b>", "../thunder/thnd_01.htm"))
      insDoc(ramo2, gLnk(0, "Introduzione", "../thunder/thnd_01.htm"))
      insDoc(ramo2, gLnk(0, "Propriet&agrave;", "../thunder/thnd_01_2.htm"))
      insDoc(ramo2, gLnk(0, "Metodi", "../thunder/thnd_01_3.htm"))
      insDoc(ramo2, gLnk(0, "Eventi", "../thunder/thnd_01_4.htm"))
      insDoc(ramo2, gLnk(0, "Note", "../thunder/thnd_01_5.htm"))
    doc1 = insDoc(ramo1, gLnk(0, "<strike>CommandButton</strike>", "../err404.htm"))
      doc1.iconSrc = "icodocerr.gif"
    doc1 = insDoc(ramo1, gLnk(0, "<strike>TextBox</strike>", "../err404.htm"))
      doc1.iconSrc = "icodocerr.gif"
    doc1 = insDoc(ramo1, gLnk(0, "<strike>Frame</strike>", "../err404.htm"))
      doc1.iconSrc = "icodocerr.gif"
    doc1 = insDoc(ramo1, gLnk(0, "<strike>PictureBox</strike>", "../err404.htm"))
      doc1.iconSrc = "icodocerr.gif"
    doc1 = insDoc(ramo1, gLnk(0, "<strike>CheckBox</strike>", "../err404.htm"))
      doc1.iconSrc = "icodocerr.gif"
    doc1 = insDoc(ramo1, gLnk(0, "<strike>OptionButton</strike>", "../err404.htm"))
      doc1.iconSrc = "icodocerr.gif"
    doc1 = insDoc(ramo1, gLnk(0, "<strike>ComboBox</strike>", "../err404.htm"))
      doc1.iconSrc = "icodocerr.gif"
    doc1 = insDoc(ramo1, gLnk(0, "<strike>ListBox</strike>", "../err404.htm"))
      doc1.iconSrc = "icodocerr.gif"
    doc1 = insDoc(ramo1, gLnk(0, "<strike>HScrollBar</strike>", "../err404.htm"))
      doc1.iconSrc = "icodocerr.gif"
    doc1 = insDoc(ramo1, gLnk(0, "<strike>VScrollBar</strike>", "../err404.htm"))
      doc1.iconSrc = "icodocerr.gif"
    doc1 = insDoc(ramo1, gLnk(0, "<strike>Timer</strike>", "../err404.htm"))
      doc1.iconSrc = "icodocerr.gif"
    doc1 = insDoc(ramo1, gLnk(0, "<strike>DriveListBox</strike>", "../err404.htm"))
      doc1.iconSrc = "icodocerr.gif"
    doc1 = insDoc(ramo1, gLnk(0, "<strike>DirListBox</strike>", "../err404.htm"))
      doc1.iconSrc = "icodocerr.gif"
    doc1 = insDoc(ramo1, gLnk(0, "<strike>FileListBox</strike>", "../err404.htm"))
      doc1.iconSrc = "icodocerr.gif"
    doc1 = insDoc(ramo1, gLnk(0, "<strike>Shape</strike>", "../err404.htm"))
      doc1.iconSrc = "icodocerr.gif"
    doc1 = insDoc(ramo1, gLnk(0, "<strike>Line</strike>", "../err404.htm"))
      doc1.iconSrc = "icodocerr.gif"
    doc1 = insDoc(ramo1, gLnk(0, "<strike>Image</strike>", "../err404.htm"))
      doc1.iconSrc = "icodocerr.gif"
    doc1 = insDoc(ramo1, gLnk(0, "<strike>Data</strike>", "../err404.htm"))
      doc1.iconSrc = "icodocerr.gif"
    doc1 = insDoc(ramo1, gLnk(0, "<strike>OLE</strike>", "../err404.htm"))
      doc1.iconSrc = "icodocerr.gif"
    doc1 = insDoc(ramo1, gLnk(0, "<strike>MDIForm</strike>", "../err404.htm"))
      doc1.iconSrc = "icodocerr.gif"

  ramo1 = insFld(foldersTree, gFld("<b>Controlli Utente</b>", "../userctls/index.htm"))
    ramo1.iconSrc = "icousrctl.gif"
    ramo1.iconSrcClosed = "icousrctl.gif"
    insDoc(ramo1, gLnk(0, "Indice", "../userctls/index.htm"))
    insDoc(ramo1, gLnk(0, "FBI Horizontal Separator", "../userctls/usrctl_01.htm"))
    insDoc(ramo1, gLnk(0, "FBI Hyperlink", "../userctls/usrctl_02.htm"))
    insDoc(ramo1, gLnk(0, "FBI Shape Progress Bar", "../userctls/usrctl_03.htm"))
    insDoc(ramo1, gLnk(0, "FBI Change Resolution", "../userctls/usrctl_04.htm"))
    insDoc(ramo1, gLnk(0, "FBI IP Address", "../userctls/usrctl_05.htm"))
    insDoc(ramo1, gLnk(0, "FBI Graph Progress Bar", "../userctls/usrctl_06.htm"))
    insDoc(ramo1, gLnk(0, "FBI Edit FlexGrid", "../userctls/usrctl_07.htm"))
    insDoc(ramo1, gLnk(0, "FBI Select Window", "../userctls/usrctl_08.htm"))
    insDoc(ramo1, gLnk(0, "FBI Properties Browser", "../userctls/usrctl_09.htm"))
    insDoc(ramo1, gLnk(0, "FBI Tray Icon", "../userctls/usrctl_10.htm"))

  ramo1 = insFld(foldersTree, gFld("<b>HowTo - Come Fare?</b>", "../howto/index.htm"))
    ramo1.iconSrc = "icohowto.gif"
    ramo1.iconSrcClosed = "icohowto.gif"
    insDoc(ramo1, gLnk(0, "Indice", "../howto/index.htm"))
    insDoc(ramo1, gLnk(0, "TextBox numeriche", "../howto/ht_000.htm"))
    insDoc(ramo1, gLnk(0, "Pulsanti di sistema", "../howto/ht_001.htm"))
    insDoc(ramo1, gLnk(0, "TextBox selezionanti", "../howto/ht_002.htm"))
    insDoc(ramo1, gLnk(0, "Leggere un file", "../howto/ht_003.htm"))
    insDoc(ramo1, gLnk(0, "Spostamento di campo", "../howto/ht_004.htm"))
    insDoc(ramo1, gLnk(0, "Centrare un form", "../howto/ht_005.htm"))
    insDoc(ramo1, gLnk(0, "Click da un altro form", "../howto/ht_006.htm"))
    insDoc(ramo1, gLnk(0, "Sposta un controllo", "../howto/ht_007.htm"))
    insDoc(ramo1, gLnk(0, "Giorni lavorativi", "../howto/ht_008.htm"))
    insDoc(ramo1, gLnk(0, "Sfoglia cartelle", "../howto/ht_009.htm"))
    insDoc(ramo1, gLnk(0, "Disabilita Chiudi", "../howto/ht_010.htm"))
    insDoc(ramo1, gLnk(0, "File esistente?", "../howto/ht_011.htm"))
    insDoc(ramo1, gLnk(0, "Spegnere il computer", "../howto/ht_012.htm"))
    insDoc(ramo1, gLnk(0, "Ottenere Path DOS", "../howto/ht_013.htm"))
    insDoc(ramo1, gLnk(0, "Elencare files - 1", "../howto/ht_014.htm"))
    insDoc(ramo1, gLnk(0, "Elencare files - 2", "../howto/ht_014_2.htm"))
    insDoc(ramo1, gLnk(0, "Creare controlli", "../howto/ht_015.htm"))
    insDoc(ramo1, gLnk(0, "Utilizzo file risorse", "../howto/ht_016.htm"))
    insDoc(ramo1, gLnk(0, "Programma gi&agrave; attivo", "../howto/ht_017.htm"))
    insDoc(ramo1, gLnk(0, "Riga di comando", "../howto/ht_018.htm"))
    insDoc(ramo1, gLnk(0, "Tempo avvio Windows", "../howto/ht_019.htm"))
    insDoc(ramo1, gLnk(0, "Invio di E-Mail", "../howto/ht_020.htm"))
    insDoc(ramo1, gLnk(0, "Sfondo Windows", "../howto/ht_021.htm"))
    insDoc(ramo1, gLnk(0, "Pulsante barra titolo", "../howto/ht_022.htm"))
    insDoc(ramo1, gLnk(0, "Ordinare Collection", "../howto/ht_023.htm"))
    insDoc(ramo1, gLnk(0, "Finestra propriet&agrave; file", "../howto/ht_024.htm"))
    insDoc(ramo1, gLnk(0, "Finestra formatta unit&agrave;", "../howto/ht_025.htm"))
    insDoc(ramo1, gLnk(0, "Scrivere un file", "../howto/ht_026.htm"))
    insDoc(ramo1, gLnk(0, "Aggiungere un menu", "../howto/ht_027.htm"))
    insDoc(ramo1, gLnk(0, "Gestisci Ctrl+Alt+Canc", "../howto/ht_028.htm"))
    insDoc(ramo1, gLnk(0, "Invertire una stringa", "../howto/ht_029.htm"))
    insDoc(ramo1, gLnk(0, "Creare threads", "../howto/ht_030.htm"))
    insDoc(ramo1, gLnk(0, "Estrazione bytes", "../howto/ht_031.htm"))
    insDoc(ramo1, gLnk(0, "Apri e Chiudi EXE - 1", "../howto/ht_032.htm"))
    insDoc(ramo1, gLnk(0, "Apri e Chiudi EXE - 2", "../howto/ht_032_2.htm"))
    insDoc(ramo1, gLnk(0, "Apri e Chiudi EXE - 3", "../howto/ht_032_3.htm"))
    insDoc(ramo1, gLnk(0, "Immagine da Internet", "../howto/ht_033.htm"))
    insDoc(ramo1, gLnk(0, "Pausa", "../howto/ht_034.htm"))
    insDoc(ramo1, gLnk(0, "Colore pixel", "../howto/ht_035.htm"))
    insDoc(ramo1, gLnk(0, "Zoom schermo", "../howto/ht_036.htm"))
    insDoc(ramo1, gLnk(0, "Scrittura console", "../howto/ht_037.htm"))
    insDoc(ramo1, gLnk(0, "Gestire i colori RGB", "../howto/ht_038.htm"))
    insDoc(ramo1, gLnk(0, "Apri e Chiudi CD", "../howto/ht_039.htm"))
    insDoc(ramo1, gLnk(0, "Avvia Applet CPL", "../howto/ht_040.htm"))
    insDoc(ramo1, gLnk(0, "Da secondi a minuti", "../howto/ht_041.htm"))
    insDoc(ramo1, gLnk(0, "Trascinamento OLE", "../howto/ht_042.htm"))
    insDoc(ramo1, gLnk(0, "Form in primo piano", "../howto/ht_043.htm"))
    insDoc(ramo1, gLnk(0, "Utilizzare il Registry - 1", "../howto/ht_044.htm"))
    insDoc(ramo1, gLnk(0, "Utilizzare il Registry - 2", "../howto/ht_044_2.htm"))
    insDoc(ramo1, gLnk(0, "Utilizzare il Registry - 3", "../howto/ht_044_3.htm"))
    insDoc(ramo1, gLnk(0, "Utilizzare il Registry - 4", "../howto/ht_044_4.htm"))
    insDoc(ramo1, gLnk(0, "Utilizzare il Registry - 5", "../howto/ht_044_5.htm"))
    insDoc(ramo1, gLnk(0, "Affiancare un'immagine", "../howto/ht_045.htm"))
    insDoc(ramo1, gLnk(0, "Convertire misure", "../howto/ht_046.htm"))
    insDoc(ramo1, gLnk(0, "Menu con icone", "../howto/ht_047.htm"))
    insDoc(ramo1, gLnk(0, "Puntatori a funzione", "../howto/ht_048.htm"))
    insDoc(ramo1, gLnk(0, "Estrazione icone da file", "../howto/ht_049.htm"))
    insDoc(ramo1, gLnk(0, "Ottieni info da FAT12/16", "../howto/ht_050.htm"))
    insDoc(ramo1, gLnk(0, "Esporta da AS400 in Excel", "../howto/ht_051.htm"))
    insDoc(ramo1, gLnk(0, "Limitare ComboBox", "../howto/ht_052.htm"))
    insDoc(ramo1, gLnk(0, "Array Pubblici in Form", "../howto/ht_053.htm"))
    insDoc(ramo1, gLnk(0, "Registrare Estensione - 1", "../howto/ht_054.htm"))
    insDoc(ramo1, gLnk(0, "Registrare Estensione - 2", "../howto/ht_054_2.htm"))
    
  ramo1 = insFld(foldersTree, gFld("<b>Database</b>", "../database/index.htm"))
    ramo1.iconSrc = "icodatabase.gif"
    ramo1.iconSrcClosed = "icodatabase.gif"
    insDoc(ramo1, gLnk(0, "Indice", "../database/index.htm"))
    insDoc(ramo1, gLnk(0, "Introduzione ai Database", "../database/db_001.htm"))
    insDoc(ramo1, gLnk(0, "Il punto di vista aziendale", "../database/db_002.htm"))
    ramo2 = insFld(ramo1, gFld("Panoramica generale", "../database/db_003.htm"))
      ramo2.iconSrc = "icobookopen.gif"
      ramo2.iconSrcClosed = "icobookclosed.gif"
      insDoc(ramo2, gLnk(0, "Introduzione", "../database/db_003.htm"))
      insDoc(ramo2, gLnk(0, "Microsoft Access", "../database/db_003_01.htm"))
      insDoc(ramo2, gLnk(0, "Microsoft SQL Server", "../database/db_003_02.htm"))
      insDoc(ramo2, gLnk(0, "Oracle", "../database/db_003_03.htm"))
      insDoc(ramo2, gLnk(0, "IBM DB2 UDB", "../database/db_003_04.htm"))
      insDoc(ramo2, gLnk(0, "MySQL", "../database/db_003_05.htm"))
      insDoc(ramo2, gLnk(0, "Interbase/Firebird", "../database/db_003_06.htm"))
      insDoc(ramo2, gLnk(0, "PostgreSQL", "../database/db_003_07.htm"))
      insDoc(ramo2, gLnk(0, "FoxPro", "../database/db_003_08.htm"))
      insDoc(ramo2, gLnk(0, "Paradox", "../database/db_003_09.htm"))
      insDoc(ramo2, gLnk(0, "dBase", "../database/db_003_10.htm"))
      insDoc(ramo2, gLnk(0, "Microsoft Excel", "../database/db_003_11.htm"))
    insDoc(ramo1, gLnk(0, "Struttura del progetto", "../database/db_004.htm"))
    insDoc(ramo1, gLnk(0, "Interfacciamento", "../database/db_005.htm"))
    insDoc(ramo1, gLnk(0, "ODBC", "../database/db_006.htm"))

  ramo1 = insFld(foldersTree, gFld("<b>Client / Server</b>", "../cliserv/index.htm"))
    ramo1.iconSrc = "icocliserv.gif"
    ramo1.iconSrcClosed = "icocliserv.gif"
    insDoc(ramo1, gLnk(0, "Indice", "../cliserv/index.htm"))
    insDoc(ramo1, gLnk(0, "Introduzione", "../cliserv/clser_00.htm"))
    insDoc(ramo1, gLnk(0, "Chat senza protocolli", "../cliserv/clser_01.htm"))
    insDoc(ramo1, gLnk(0, "Tutorial sul Winsock", "../cliserv/clser_02.htm"))
    insDoc(ramo1, gLnk(0, "Utilizzo FTP con INet", "../cliserv/clser_03.htm"))
    insDoc(ramo1, gLnk(0, "Trasferimento files - 1", "../cliserv/clser_04.htm"))
    insDoc(ramo1, gLnk(0, "Trasferimento files - 2", "../cliserv/clser_04_2.htm"))
    insDoc(ramo1, gLnk(0, "Cartelle remote - 1", "../cliserv/clser_05.htm"))
    insDoc(ramo1, gLnk(0, "Cartelle remote - 2", "../cliserv/clser_05_2.htm"))
    insDoc(ramo1, gLnk(0, "Nagle Algorithm", "../cliserv/clser_06.htm"))
    insDoc(ramo1, gLnk(0, "Winsock in classe", "../cliserv/clser_07.htm"))
    insDoc(ramo1, gLnk(0, "Winsock multipli in classe", "../cliserv/clser_08.htm"))

  ramo1 = insFld(foldersTree, gFld("<b>Richieste dei lettori</b>", "../activity/index.htm"))
    ramo1.iconSrc = "icoactivity.gif"
    ramo1.iconSrcClosed = "icoactivity.gif"
    insDoc(ramo1, gLnk(0, "Indice", "../activity/index.htm"))
    insDoc(ramo1, gLnk(0, "Controlli utente", "../activity/act_01.htm"))
    insDoc(ramo1, gLnk(0, "Testo in ottetti - 1", "../activity/act_02.htm"))
    insDoc(ramo1, gLnk(0, "Testo in ottetti - 2", "../activity/act_02_2.htm"))
    insDoc(ramo1, gLnk(0, "Configurazione DSN", "../activity/act_03.htm"))
    insDoc(ramo1, gLnk(0, "Connessioni ADO", "../activity/act_04.htm"))
    insDoc(ramo1, gLnk(0, "Controlli nelle classi", "../activity/act_05.htm"))
    insDoc(ramo1, gLnk(0, "OptionButtons e forms", "../activity/act_06.htm"))
    insDoc(ramo1, gLnk(0, "Cartelle remote", "../activity/act_07.htm"))
    insDoc(ramo1, gLnk(0, "Eseguire un file *.INF", "../activity/act_08.htm"))
    insDoc(ramo1, gLnk(0, "Carica pagina Web", "../activity/act_09.htm"))
    insDoc(ramo1, gLnk(0, "L'impiccato", "../activity/act_10.htm"))
    insDoc(ramo1, gLnk(0, "Data Parser - 1", "../activity/act_11.htm"))
    insDoc(ramo1, gLnk(0, "Data Parser - 2", "../activity/act_11_2.htm"))
    insDoc(ramo1, gLnk(0, "Data Parser - 3", "../activity/act_11_3.htm"))
    insDoc(ramo1, gLnk(0, "Data Parser - 4", "../activity/act_11_4.htm"))
    insDoc(ramo1, gLnk(0, "Data Parser - 5", "../activity/act_11_5.htm"))
    insDoc(ramo1, gLnk(0, "Eseguire programma", "../activity/act_12.htm"))
    insDoc(ramo1, gLnk(0, "Creare un DSN", "../activity/act_13.htm"))
    insDoc(ramo1, gLnk(0, "Invio files con Winsock", "../activity/act_14.htm"))
    insDoc(ramo1, gLnk(0, "Leggere un DB remoto", "../activity/act_15.htm"))
    insDoc(ramo1, gLnk(0, "Ascolta MIDI da risorse", "../activity/act_16.htm"))
    insDoc(ramo1, gLnk(0, "Apri DB con password", "../activity/act_17.htm"))
    insDoc(ramo1, gLnk(0, "Calcolo del CRC32", "../activity/act_18.htm"))
    insDoc(ramo1, gLnk(0, "Crea collegamento", "../activity/act_19.htm"))
    insDoc(ramo1, gLnk(0, "Connetti unit&agrave; di rete", "../activity/act_20.htm"))
    insDoc(ramo1, gLnk(0, "Suonare con VB", "../activity/act_21.htm"))
    insDoc(ramo1, gLnk(0, "Cartelle di sistema", "../activity/act_22.htm"))
    insDoc(ramo1, gLnk(0, "Invio dati a Processo - 1", "../activity/act_23.htm"))
    insDoc(ramo1, gLnk(0, "Invio dati a Processo - 2", "../activity/act_23_2.htm"))
    insDoc(ramo1, gLnk(0, "Ricercare dati da ListBox", "../activity/act_24.htm"))

  ramo1 = insFld(foldersTree, gFld("<b>Articoli - News</b>", "../news/index.htm"))
    ramo1.iconSrc = "iconews.gif"
    ramo1.iconSrcClosed = "iconews.gif"
    insDoc(ramo1, gLnk(0, "Indice", "../news/index.htm"))
    insDoc(ramo1, gLnk(0, "Open Source - 1", "../news/news_01.htm"))
    insDoc(ramo1, gLnk(0, "Open Source - 2", "../news/news_02.htm"))
    insDoc(ramo1, gLnk(0, "Open Source - 3", "../news/news_09.htm"))
    insDoc(ramo1, gLnk(0, "Schedulare task", "../news/news_03.htm"))
    insDoc(ramo1, gLnk(0, "TCP/IP FAQ - Indice", "../news/news_04.htm"))
    insDoc(ramo1, gLnk(0, "TCP/IP FAQ - 1", "../news/news_04_2.htm"))
    insDoc(ramo1, gLnk(0, "TCP/IP FAQ - 2", "../news/news_04_3.htm"))
    insDoc(ramo1, gLnk(0, "TCP/IP FAQ - 3", "../news/news_04_4.htm"))
    insDoc(ramo1, gLnk(0, "Licenza GPL", "../news/news_05.htm"))
    insDoc(ramo1, gLnk(0, "Piccole cattiverie", "../news/news_06.htm"))
    insDoc(ramo1, gLnk(0, "Operazioni di BitShift", "../news/news_07.htm"))
    insDoc(ramo1, gLnk(0, "Autorun", "../news/news_08.htm"))
    insDoc(ramo1, gLnk(0, "Stringhe API", "../news/news_10.htm"))
    insDoc(ramo1, gLnk(0, "Analisi di un Variant", "../news/news_11.htm"))
    insDoc(ramo1, gLnk(0, "Il piano Zero OCX", "../news/news_12.htm"))

  ramo1 = insFld(foldersTree, gFld("<b>Weird Things - Stranezze</b>", "../weird/index.htm"))
    ramo1.iconSrc = "icoweird.gif"
    ramo1.iconSrcClosed = "icoweird.gif"
    insDoc(ramo1, gLnk(0, "Indice", "../weird/index.htm"))
    insDoc(ramo1, gLnk(0, "Doppia vita dei Forms", "../weird/wrd_01.htm"))
    insDoc(ramo1, gLnk(0, "Capienza massima Textbox", "../weird/wrd_02.htm"))
    insDoc(ramo1, gLnk(0, "Eventi con Variant", "../weird/wrd_03.htm"))
    insDoc(ramo1, gLnk(0, "Enabled e ScrollBars", "../weird/wrd_04.htm"))
    insDoc(ramo1, gLnk(0, "Forms Untiding", "../weird/wrd_05.htm"))

  ramo1 = insFld(foldersTree, gFld("<b>Informazioni aggiuntive</b>", ""))
    ramo1.iconSrc = "icoinfo.gif"
    ramo1.iconSrcClosed = "icoinfo.gif"
    insDoc(ramo1, gLnk(0, "Estensioni files VB", "../info/info_01.htm"))
    insDoc(ramo1, gLnk(0, "ActiveX", "../info/info_02.htm"))
    insDoc(ramo1, gLnk(0, "Sistemi di numerazione", "../info/info_03.htm"))
    insDoc(ramo1, gLnk(0, "Tipi di dati", "../info/info_04.htm"))
    insDoc(ramo1, gLnk(0, "Funzioni", "../info/info_05.htm"))
    insDoc(ramo1, gLnk(0, "Algebra booleana", "../info/info_06.htm"))
    insDoc(ramo1, gLnk(0, "Files e FAT", "../info/info_07.htm"))
    insDoc(ramo1, gLnk(0, "Estrazione bit a bit", "../info/info_08.htm"))
    insDoc(ramo1, gLnk(0, "DLL ed API", "../info/info_09.htm"))
    insDoc(ramo1, gLnk(0, "File di risorse", "../info/info_10.htm"))
    insDoc(ramo1, gLnk(0, "Modalit&agrave; avvio", "../info/info_11.htm"))
    insDoc(ramo1, gLnk(0, "Bubble sort", "../info/info_12.htm"))
    insDoc(ramo1, gLnk(0, "Little e Big Endian", "../info/info_13.htm"))
    insDoc(ramo1, gLnk(0, "Processi e Threads", "../info/info_14.htm"))
    insDoc(ramo1, gLnk(0, "Edizioni di VB 5.0 e 6.0", "../info/info_15.htm"))
    insDoc(ramo1, gLnk(0, "Conven. di denominazione", "../info/info_16.htm"))
    insDoc(ramo1, gLnk(0, "Finestre di Windows", "../info/info_17.htm"))
    insDoc(ramo1, gLnk(0, "Compilazione condizionale", "../info/info_18.htm"))

  ramo1 = insFld(foldersTree, gFld("<b>Glossario</b>", "../glossary/index.htm"))
    ramo1.iconSrc = "icobookopen.gif"
    ramo1.iconSrcClosed = "icobookclosed.gif"
    insDoc(ramo1, gLnk(0, "Indice", "../glossary/index.htm"))
    insDoc(ramo1, gLnk(0, "&gt;&gt;A&lt;&lt;", "../glossary/a.htm"))
    insDoc(ramo1, gLnk(0, "&gt;&gt;B&lt;&lt;", "../glossary/b.htm"))
    insDoc(ramo1, gLnk(0, "&gt;&gt;C&lt;&lt;", "../glossary/c.htm"))
    insDoc(ramo1, gLnk(0, "&gt;&gt;D&lt;&lt;", "../glossary/d.htm"))
    insDoc(ramo1, gLnk(0, "&gt;&gt;E&lt;&lt;", "../glossary/e.htm"))
    insDoc(ramo1, gLnk(0, "&gt;&gt;F&lt;&lt;", "../glossary/f.htm"))
    insDoc(ramo1, gLnk(0, "&gt;&gt;G&lt;&lt;", "../glossary/g.htm"))
    insDoc(ramo1, gLnk(0, "&gt;&gt;H&lt;&lt;", "../glossary/h.htm"))
    insDoc(ramo1, gLnk(0, "&gt;&gt;I&lt;&lt;", "../glossary/i.htm"))
    insDoc(ramo1, gLnk(0, "&gt;&gt;J&lt;&lt;", "../glossary/j.htm"))
    insDoc(ramo1, gLnk(0, "&gt;&gt;K&lt;&lt;", "../glossary/k.htm"))
    insDoc(ramo1, gLnk(0, "&gt;&gt;L&lt;&lt;", "../glossary/l.htm"))
    insDoc(ramo1, gLnk(0, "&gt;&gt;M&lt;&lt;", "../glossary/m.htm"))
    insDoc(ramo1, gLnk(0, "&gt;&gt;N&lt;&lt;", "../glossary/n.htm"))
    insDoc(ramo1, gLnk(0, "&gt;&gt;O&lt;&lt;", "../glossary/o.htm"))
    insDoc(ramo1, gLnk(0, "&gt;&gt;P&lt;&lt;", "../glossary/p.htm"))
    insDoc(ramo1, gLnk(0, "&gt;&gt;Q&lt;&lt;", "../glossary/q.htm"))
    insDoc(ramo1, gLnk(0, "&gt;&gt;R&lt;&lt;", "../glossary/r.htm"))
    insDoc(ramo1, gLnk(0, "&gt;&gt;S&lt;&lt;", "../glossary/s.htm"))
    insDoc(ramo1, gLnk(0, "&gt;&gt;T&lt;&lt;", "../glossary/t.htm"))
    insDoc(ramo1, gLnk(0, "&gt;&gt;U&lt;&lt;", "../glossary/u.htm"))
    insDoc(ramo1, gLnk(0, "&gt;&gt;V&lt;&lt;", "../glossary/v.htm"))
    insDoc(ramo1, gLnk(0, "&gt;&gt;W&lt;&lt;", "../glossary/w.htm"))
    insDoc(ramo1, gLnk(0, "&gt;&gt;X&lt;&lt;", "../glossary/x.htm"))
    insDoc(ramo1, gLnk(0, "&gt;&gt;Y&lt;&lt;", "../glossary/y.htm"))
    insDoc(ramo1, gLnk(0, "&gt;&gt;Z&lt;&lt;", "../glossary/z.htm"))

  ramo1 = insFld(foldersTree, gFld("<b>Links utili</b>", "../links.htm"))
    ramo1.iconSrc = "icolink.gif"
    ramo1.iconSrcClosed = "icolink.gif"
    insDoc(ramo1, gLnk(0, "Indice", "../links.htm"))
    doc1 = insDoc(ramo1, gLnk(0, "I migliori siti su VB", "../links2.htm"))
        doc1.iconSrc = "icolink.gif"
    doc1 = insDoc(ramo1, gLnk(0, "Altri siti su VB", "../links3.htm"))
        doc1.iconSrc = "icolink.gif"
    doc1 = insDoc(ramo1, gLnk(0, "Siti di altro genere", "../links4.htm"))
        doc1.iconSrc = "icolink.gif"

  ramo1 = insFld(foldersTree, gFld("<b>Downloads</b>", "../risorse/index.htm"))
    ramo1.iconSrc = "icozip.gif"
    ramo1.iconSrcClosed = "icozip.gif"
    insDoc(ramo1, gLnk(0, "Risorse articoli", "../risorse/index.htm"))
    ramo2 = insFld(ramo1, gFld("Testi degli articoli", "../risorse/pdf/index.htm"))
      ramo2.iconSrc = "icobookopen.gif"
      ramo2.iconSrcClosed = "icobookclosed.gif"
      insDoc(ramo2, gLnk(0, "Indice", "../risorse/pdf/index.htm"))
      insDoc(ramo2, gLnk(0, "Corso Base", "../risorse/pdf/base.htm"))
      insDoc(ramo2, gLnk(0, "Corso Intermedio", "../risorse/pdf/intermed.htm"))
      insDoc(ramo2, gLnk(0, "Controlli Thunder", "../risorse/pdf/thunder.htm"))
      insDoc(ramo2, gLnk(0, "Controlli Utente", "../risorse/pdf/userctls.htm"))
      insDoc(ramo2, gLnk(0, "HowTo - Come Fare?", "../risorse/pdf/howto.htm"))
      insDoc(ramo2, gLnk(0, "Database", "../risorse/pdf/database.htm"))
      insDoc(ramo2, gLnk(0, "Client / Server", "../risorse/pdf/cliserv.htm"))
      insDoc(ramo2, gLnk(0, "Richieste dei Lettori", "../risorse/pdf/activity.htm"))
      insDoc(ramo2, gLnk(0, "Articoli - News", "../risorse/pdf/news.htm"))
      insDoc(ramo2, gLnk(0, "Weird Things", "../risorse/pdf/weird.htm"))
      insDoc(ramo2, gLnk(0, "Informazioni Aggiuntive", "../risorse/pdf/infos.htm"))
    insDoc(ramo1, gLnk(0, "L'angolo VBUP 2", "../risorse/vbup2/index.htm"))

  ramo1 = insFld(foldersTree, gFld("<b>Enumerazioni</b>", "../enum/index.htm"))
    ramo1.iconSrc = "icoenum.gif"
    ramo1.iconSrcClosed = "icoenum.gif"
    insDoc(ramo1, gLnk(0, "Indice", "../enum/index.htm"))
    insDoc(ramo1, gLnk(0, "AlignConstants", "../enum/001.htm"))
    insDoc(ramo1, gLnk(0, "AlignmentConstants", "../enum/002.htm"))
    insDoc(ramo1, gLnk(0, "ApplicationStartConstants", "../enum/003.htm"))
    insDoc(ramo1, gLnk(0, "AsyncTypeConstants", "../enum/004.htm"))
    insDoc(ramo1, gLnk(0, "BorderStyleConstants", "../enum/005.htm"))
    insDoc(ramo1, gLnk(0, "ButtonConstants", "../enum/006.htm"))
    insDoc(ramo1, gLnk(0, "CheckBoxConstants", "../enum/007.htm"))
    insDoc(ramo1, gLnk(0, "ClipBoardConstants", "../enum/008.htm"))
    insDoc(ramo1, gLnk(0, "ColorConstants", "../enum/009.htm"))
    insDoc(ramo1, gLnk(0, "ComboBoxConstants", "../enum/010.htm"))
    insDoc(ramo1, gLnk(0, "DataBOFconstants", "../enum/011.htm"))
    insDoc(ramo1, gLnk(0, "DataEOFConstants", "../enum/012.htm"))
    insDoc(ramo1, gLnk(0, "DataErrorConstants", "../enum/013.htm"))
    insDoc(ramo1, gLnk(0, "DataValidateConstants", "../enum/014.htm"))
    insDoc(ramo1, gLnk(0, "DefaultCursorTypeConstants", "../enum/015.htm"))
    insDoc(ramo1, gLnk(0, "DragConstants", "../enum/016.htm"))
    insDoc(ramo1, gLnk(0, "DragModeConstants", "../enum/017.htm"))
    insDoc(ramo1, gLnk(0, "DragOverConstants", "../enum/018.htm"))
    insDoc(ramo1, gLnk(0, "DrawModeConstants", "../enum/019.htm"))
    insDoc(ramo1, gLnk(0, "DrawStyleConstants", "../enum/020.htm"))
    insDoc(ramo1, gLnk(0, "FillStyleConstants", "../enum/021.htm"))
    insDoc(ramo1, gLnk(0, "FormArrangeConstants", "../enum/022.htm"))
    insDoc(ramo1, gLnk(0, "FormBorderStyleConstants", "../enum/023.htm"))
    insDoc(ramo1, gLnk(0, "FormShowConstants", "../enum/024.htm"))
    insDoc(ramo1, gLnk(0, "FormWindowStateConstants", "../enum/025.htm"))
    insDoc(ramo1, gLnk(0, "KeyCodeConstants", "../enum/026.htm"))
    insDoc(ramo1, gLnk(0, "LinkErrorConstants", "../enum/027.htm"))
    insDoc(ramo1, gLnk(0, "LinkModeConstants", "../enum/028.htm"))
    insDoc(ramo1, gLnk(0, "ListBoxConstants", "../enum/029.htm"))
    insDoc(ramo1, gLnk(0, "LoadResConstants", "../enum/030.htm"))
    insDoc(ramo1, gLnk(0, "LogEventTypeConstants", "../enum/031.htm"))
    insDoc(ramo1, gLnk(0, "MenuAccelConstants", "../enum/032.htm"))
    insDoc(ramo1, gLnk(0, "MenuControlConstants", "../enum/033.htm"))
    insDoc(ramo1, gLnk(0, "MouseButtonConstants", "../enum/034.htm"))
    insDoc(ramo1, gLnk(0, "MousePointerConstants", "../enum/035.htm"))
    insDoc(ramo1, gLnk(0, "MultiSelectConstants", "../enum/036.htm"))
    insDoc(ramo1, gLnk(0, "OldLinkModeConstants", "../enum/037.htm"))
    insDoc(ramo1, gLnk(0, "OLEContainerConstants", "../enum/038.htm"))
    insDoc(ramo1, gLnk(0, "OLEDragConstants", "../enum/039.htm"))
    insDoc(ramo1, gLnk(0, "OLEDropConstants", "../enum/040.htm"))
    insDoc(ramo1, gLnk(0, "OLEDropEffectConstants", "../enum/041.htm"))
    insDoc(ramo1, gLnk(0, "PaletteModeConstants", "../enum/042.htm"))
    insDoc(ramo1, gLnk(0, "ParentControlsType", "../enum/043.htm"))
    insDoc(ramo1, gLnk(0, "PictureTypeConstants", "../enum/044.htm"))
    insDoc(ramo1, gLnk(0, "PrinterObjectConstants", "../enum/045.htm"))
    insDoc(ramo1, gLnk(0, "QueryUnloadConstants", "../enum/046.htm"))
    insDoc(ramo1, gLnk(0, "RasterOpConstants", "../enum/047.htm"))
    insDoc(ramo1, gLnk(0, "ScaleModeConstants", "../enum/048.htm"))
    insDoc(ramo1, gLnk(0, "ScrollBarConstants", "../enum/049.htm"))
    insDoc(ramo1, gLnk(0, "ShapeConstants", "../enum/050.htm"))
    insDoc(ramo1, gLnk(0, "ShiftConstants", "../enum/051.htm"))
    insDoc(ramo1, gLnk(0, "StartUpPositionConstants", "../enum/052.htm"))
    insDoc(ramo1, gLnk(0, "SystemColorConstants", "../enum/053.htm"))
    insDoc(ramo1, gLnk(0, "VariantTypeConstants", "../enum/054.htm"))
    insDoc(ramo1, gLnk(0, "ZOrderConstants", "../enum/055.htm"))

  insDoc(foldersTree, gLnk(0, "Ringraziamenti (IT)", "../grazieit.htm"))
  insDoc(foldersTree, gLnk(0, "Thanks (US)", "../grazieus.htm"))

  doc1 = insDoc(foldersTree, gLnk(0, "Effettua una ricerca", "../cerca2.htm"))
    doc1.iconSrc = "icocerca.gif"
  doc1 = insDoc(foldersTree, gLnk(0, "Aiuto", "../help.htm"))
    doc1.iconSrc = "icohelp.gif"

  ramo1 = insFld(foldersTree, gFld("<b>Storia e Aggiornamenti</b>", "../hist02.htm"))
    ramo1.iconSrc = "icohistory.gif"
    ramo1.iconSrcClosed = "icohistory.gif"
    insDoc(ramo1, gLnk(0, "Anno 2000", "../hist00.htm"))
    insDoc(ramo1, gLnk(0, "Anno 2001", "../hist01.htm"))
    insDoc(ramo1, gLnk(0, "Anno 2002", "../hist02.htm"))
  doc1 = insDoc(foldersTree, gLnk(0, "Scrivi al gruppo", "../scrivici.htm"))
    doc1.iconSrc = "icoemail.gif"
