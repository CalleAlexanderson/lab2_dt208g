#Att göra lista

I denna laboration har jag skapat en att göra lista med typescript genom att använda klasser.

Min TS kod består av två filer, ena filen (main.ts) sköter all interaktion med webbsidans DOM och skickar vidare den informationen till den andra filen (todos.ts) när det behövs.

Funktionaliteten som finns på webbsidan är att visa de olika uppgifter som ligger på att göra listan samt lägga till nya uppgifter samt ta bort och markera redan tillagda uppgifter som avklarade.

Listan där de olika uppgifterna lagras ligger inom klassen todoList som sedan görs en instans av i main.ts filen. todoList har har implementerat interface som skapar datatypen "todo" som har properties: task: string, completed: boolean, priority: number, date: string. todoList har även en array(todos) av dessa todo och denna array är där de olika uppgifterna lagras.

Webbsidan använder localstorage och sparar todos mellan sessioner, när något uppdateras med todos sparas den på nytt i localstorage i sin uppdaterade version.

När DOMcontent på sidan laddats in hämtas todos från local storage och skrivs ut på webbsidan i form av article element med andra element i sig som innehåller data från den uppgift artikeln skapats ifrån. 

Det går att ta bort dessa uppgifter genom en "ta bort uppgift" knapp och det går att markera en uppgift som avklarade genom att trycka på en blank ruta på uppgift och det gör så en grön checkmark bild ersätter den tidigare vita bilden som legat i rutan (om använadren trycker igen ändras det tillbaka).

Tillägget av nya uppgifter sker via ett formulär som har TS kod där det används ett prevent default på event onsubmit.