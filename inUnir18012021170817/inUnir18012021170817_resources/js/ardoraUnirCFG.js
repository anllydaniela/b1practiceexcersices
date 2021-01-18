//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=300; timeIni=300; timeBon=0;
var successes=0; successesMax=7; attempts=0; attemptsMax=3;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="START";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#2769CB"; colorText="#000000"; colorSele="#308BE7";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=1; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Century Gothic, sans-serif";
var fActi="Century Gothic, sans-serif";
var fEnun="Century Gothic, sans-serif";
var timeOnMessage=2; messageOk="GREAT JOB!"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#2869FF"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aW5VbmlyMTgwMTIwMjExNzA4MTc="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["V29yZHMgdGhhdCB0YWtlIHRoZSBwbGFjZSBvZiBub3Vucw==", "UHJvbm91bnM="],["V29yZHMgdGhhdCBtb2RpZnkgdmVyYnMsIGFkamVjdGl2ZXMgYW5kIGFkdmVyYnM=", "QWR2ZXJicw=="],["V29yZHMgdGhhdCBzaG93IGFuIGFjdGlvbiBvciBhIHN0YXRlIG9mIGJlaW5n", "VmVyYnM="],["V29yZHMgdGhhdCBtb2RpZnkgbm91biBvciBwcm9ub3Vucw==", "QWRqZWN0aXZlcw=="],["V29yZHMgdGhhdCBuYW1lIHBlb3BsZSxwbGFjZXMsIHRoaW5ncyBvciBpZGVhcw==", "Tm91bnM="],["V29yZHMgdGhhdCBjb25uZWN0IHdvcmRzLCBwaHJhc2VzIG9yIGNsYXVzZXM=", "Q29ubmVjdG9ycyAvIENvbmp1Y3Rpb25z"],["V29yZHMgdGhhdCBkZXNjcmliZSBhIHJlbGF0aW9uc2hpcCBiZXR3ZWVuIGEgbm91biBvciBwcm9ub3VuIGFuZCBhbm90aGVyIGVsZW1lbnQgaW4gdGhlIHNlbnRlbmNl", "UHJlcG9zaXRpb25z"]];
var c=[[34,8],[47,7],[45,5],[34,10],[46,5],[44,24],[96,12]];
var con1=["Words that take the place of nouns","Words that modify verbs, adjectives and adverbs","Words that show an action or a state of being","Words that modify noun or pronouns","Words that connect words, phrases or clauses","Words that name people,places, things or ideas","Words that describe a relationship between a noun or pronoun and another element in the sentence"];
var con2=["Prepositions","Connectors / Conjuctions","Pronouns","Verbs","Adverbs","Nouns","Adjectives"];
var sel1=""; join1=[]; join2=[];
