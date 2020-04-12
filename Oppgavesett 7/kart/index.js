mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXNibyIsImEiOiJjazg4azd5b2UwOWlqM21vMWxpbnNrdHgyIn0.iwMfzYXrV6LqJxtBgMHaxg';
    var map = new mapboxgl.Map({
    container: 'kartet',
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: 5,
    center: [10.683034, 59.988873]
    });


var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');


const drapsgåter = [
    {
        lng: 10.741913,
        lat: 59.907576,
        navn: "Norges første gangsterdrap",
        beskrivelse: "Omtrent klokka 00:45 natt til 11. januar 1934 ble Edvard Rustad funnet drept i bilen sin, som sto parkert i Glacisgata ved Grev Wedels plass i Oslo."  
    },
    {
        lng: 10.685850,
        lat: 59.956446,
        navn: "Drapet i Holmenkollen",
        beskrivelse: "24. april 1974 ble danskfødte Anni Nielsen Iranzo funnet drept i Holmenkollen i Oslo. Den 31 år gamle kvinnen lå på stuegulvet i huset der hun bodde sammen med sin mann, den spanske diplomaten Enrique Iranzo og parets datter."
    },
    {
        lng: 5.355471,
        lat: 60.311936,
        navn: "Mysteriet i Hollekim",
        beskrivelse: "Lørdag 18. januar 1958 forsvant frisørdamen Astrid Aardal fra sin bopel ved Skjoldskiftet i Bergen. Hun ble meldt savnet, men ble aldri funnet. I 1963 tilsto Sigurd Hollekim å ha tatt livet av henne, men hans forsvarsadvokat, Alf Nordhus, mente at tilståelsen var falsk, og Hollekim ble frikjent av retten."
    },
    {
        lng: 11.006364,
        lat: 59.948751,
        navn: "Suphammer-saken",
        beskrivelse: "Den 5. november 1963 kom ikke Helge Suphammer hjem til vanlig tid. Han ble funnet bevisstløs i en verkstedshall noen hundre meter fra der han bodde klokka 21:15. Hodet hans hadde tydelige merker etter slag med en stump gjenstand."
    },
    {
        lng: 5.345291,
        lat: 60.311496,
        navn: "Magnus-saken",
        beskrivelse: "Fredag 29. april 1966 ble den tilbakestående 40 år gamle bilmekanikeren Magnus Ellingsen overfalt og ranet på veien hjem fra travbanen Nesttunbanen i Bergen."
    },
    {
        lng: 10.937644,
        lat: 59.219614,
        navn: "Lilandsaken",
        beskrivelse: "Den 24. desember klokken 10.45 ble to personer funnet myrdet i Glemmengata 73 i Fredrikstad. Begge hadde store skader i hodet, og det var mye blod på åstedet."
    },
    {
        lng: 10.732950,
        lat: 59.929545,
        navn: "Dagmar Strand-saken",
        beskrivelse: "Den 79 år gamle kvinnen Dagmar Strand var kneblet, bundet på hender og føtter og slått ihjel i leiligheten sin på Bislett den 15.september 1981. Den eller de som tok livet av den eldre kvinnen, var trolig på jakt etter hennes sparepenger."
    },
    {
        lng: 10.872155,
        lat: 59.932937,
        navn: "Josef Horvath-saken",
        beskrivelse: "14. juni 1983 ble 41 år gamle Josef Horvath drept med kniv i leiligheten sin på Lindeberg i Oslo. Drapet ble oppdaget først 14 dager senere. En jevnaldrende mann fra byens uteliggermiljø var tiltalt, men ble frikjent."
    },
    {
        lng: 7.158800,
        lat: 62.746445,
        navn: "Laura-saken",
        beskrivelse: "En 94 år gammel dame fra Molde ble funnet bakbundet og kvalt i sin egen seng 27. desember 1991. Saken har flere ganger blitt gjenopptatt, uten videre resultat."
    },
    {
        lng: 5.355391,
        lat: 60.364010,
        navn: "Minde-drapet",
        beskrivelse: "Morgenen den 26 april 1994 skulle Fahimeh som vanlig til norskundervisning på Gimle skole. Hun skal ha følt seg syk, og valgt å bli hjemme denne dagen. Ektemannen dro på jobb, senere kom den fjorten år gamle datteren hjem fra skolen. Hun fant moren kvalt i sin seng. Det var ikke spor til innbrudd."
    },
    {
        lng: 10.776457,
        lat: 59.926874,
        navn: "Anita Hjertvik-saken",
        beskrivelse: "Onsdag 4. januar 1995 ble Anita Hjertvik, som da var 39 år gammel, funnet drept i sin leilighet. Det var moren og søsteren som fant henne. Flere naboer som kjente kvinnen, bekreftet overfor media at leiligheten var hyppig besøkt av menn."
    },
    {
        lng: 5.305463,
        lat: 59.284261,
        navn: "Birgitte-saken",
        beskrivelse: "Om morgenen lørdag 6. mai 1995 fant en lokal bonde, på leting etter noen sauer, 17 år gamle Birgitte Tengs voldtatt og drept i et buskas like ved Gamle Sundveg, noen få hundre meter fra hennes hjem ved Skår."
    },
    {
        lng: 8.939460,
        lat: 60.285351,
        navn: "Ramm-saken",
        beskrivelse: "Ramm ble sist sett i live 30. november 1995, åtte dager før han ble funnet drept i sitt hjem på Rødberg av sin datter. Han var bundet og slått ihjel, samt seksuelt misbrukt."
    },
    {
        lng: 10.014268,
        lat: 59.751475,
        navn: "Bandidos-drapet",
        beskrivelse: "Den 15. juli 1996 ble gjengmedlemet og motorsykkelklubblederen Jan Krogh Jensen skutt og drept på Steinberg i Nedre Eiker."
    },
    {
        lng: 7.207742,
        lat: 62.097693,
        navn: "Espås-saken",
        beskrivelse: "Trude Espås forsvant fra Geiranger 8. august 1996. Hun ble observert sittende på et utsiktspunkt like utenfor sentrum. Dagen etter ble det satt i gang en omfattende leteaksjon."
    },
    {
        lng: 9.167506,
        lat: 60.919169,
        navn: "Tonsåsen-Drapet",
        beskrivelse: "Øyvind Moe (34 år) ble skutt og drep i sitt eget hjem før den ukjente gjerningsmannen satte fyr på huset, den 9. januar 1999 i Nord-Aurdal kommune, Valdres, Oppland."
    },
    {
        lng: 5.598680,
        lat: 58.795438,
        navn: "Tina-saken",
        beskrivelse: "Tina forsvant natt til 24. september 2000 i Stavanger og ble funnet drept én måned senere i en dreneringskum ved Bore kirke på Jæren."
    },
    {
        lng: 11.654687,
        lat: 59.491163,
        navn: "Ørje-drapet",
        beskrivelse: "Marit Ødegaard (76) ble mandag 23. oktober 2000 funnet drept i sitt eget hjem. Politiet tror kvinnen ble overfalt av en ransmann da hun kom hjem fra jobb kvelden før."
    },
    {
        lng: 10.771033,
        lat: 59.944660,
        navn: "Sandaker-drapet",
        beskrivelse: "Hung Qouc Ngyen og hans 22 år gamle kamerat var på åpen soning og på vei til jobb på Sandaker i Oslo 3. februar 2004 da maskerte menn avfyrte en rekke skudd på åpen gate."
    },
    {
        lng: 5.362457,
        lat: 60.314301,
        navn: "Trine Frantzen-saken",
        beskrivelse: "Trine Frantzen hadde vært på fest sammen med hennes samboer og hans kamerat i en hybel i Øvsttunvegen 25 på Nesttun, natt til 7. mai 2004. Hun ble meldt savnet 13. mai."
    },
    {
        lng: 5.229740,
        lat: 60.391979,
        navn: "Dung Tran Larsen-saken",
        beskrivelse: "14. juli 2007 forsvant norsk-vietnamesiske Thi Phuong Dung Tran Larsen fra sitt hjem i Kjøkkelvik ved Bergen, og politiet satte raskt igang søk etter den 22 år gamle kvinnen."
    },
    {
        lng: 10.673639,
        lat: 59.930289,
        navn: "Skøyen-drapet",
        beskrivelse: "18.desember 2008 blir Vegard Bjerck funnet knivstukket og døende, av en nabo i garasjeanlegget på Hofftunet på Skøyen i Oslo."
    },
    {
        lng: 10.966519,
        lat: 59.932776,
        navn: "Lørenskog-forsvinningen",
        beskrivelse: "Anne-Elisabeth Falkevik Hagen ble bortført fra sitt hjem på Lørenskog 31. oktober 2018. I januar 2020 endret Kripos status i saken fra uoppklart forsvinningssak til uoppklart drapssak."
    },
    {
        lng: 5.383251,
        lat: 60.389803,
        navn: "Isdalskvinnen",
        beskrivelse: "Kvinnen ble funnet i en del av Isdalen kalt Dødsdalen, som ligger i retning opp mot Ulriken. Rundt bålet ble det blant annet funnet et utbrent pass."
    },
    {
        lng: 9.213570,
        lat: 58.719563,
        navn: "Marianne-saken",
        beskrivelse: "Saken startet i Risør 28. august 1981, da syv år gamle Marianne Rugaas Knutsen spaserte til Frydendal Varehandel for å kjøpe is og godteri. Hun kom aldri hjem igjen fra handleturen og er ikke sett igjen siden."
    },
    {
        lng: 10.224576,
        lat: 59.719928,
        navn: "Therese-saken",
        beskrivelse: "Saken startet i Drammen 3. juli 1988, da ni år gamle Therese Johannessen forsvant sporløst fra sitt hjem ved Fjell etter å ha gått til en kiosk i nærheten for å kjøpe godterier."
    },
    {
        lng: 10.491219,
        lat: 58.477131,
        navn: "Scandinavian Star",
        beskrivelse: "Natt til 7. april 1990 var «Scandinavian Star» underveis fra Oslo til Frederikshavn da det brøt ut brann ombord. 158 omkom ombord, og en person døde senere av skadene fra ulykken."
    },
    {
        lng: 10.772396,
        lat: 59.907846,
        navn: "Narkorelatert drap",
        beskrivelse: "Midt i det som for folk flest var inngangen til en travel førjulstid i 1999, ble den 46 år gamle kvinnen funnet død i Schweigaards gate 68. Hun ble funnet påkledd i sengen sin, med et pledd surret rundt hodet."
    },
    {
        lng: 19.189472,
        lat: 69.541086,
        navn: "Pengene i veggen",
        beskrivelse: "Erling Eriksen (85) stolte ikke på banken, så han gjemte sparepengene hjemme hos seg selv. 15. november 2002 brant huset ned og det var en påsatt brann. Eriksen døde i huset men var også utsatt for vold i forkant."
    },
  
]


const addMarker = (drapsgåter) => {
    const div = document.createElement("div")
    div.className = "marker"

    const marker = new mapboxgl.Marker(div)
    const minPopup = new mapboxgl.Popup()
    
    minPopup.setHTML(`
        <h2>${drapsgåter.navn}</h2>
        <p>${drapsgåter.beskrivelse}</p>
    `)
    marker.setPopup(minPopup)

    marker.setLngLat([drapsgåter.lng, drapsgåter.lat])    
    marker.addTo(map)


}

const addMarkers = () => {
    for(const gåte of drapsgåter) {
        addMarker(gåte)
    }
}    
map.on("load", addMarkers)





