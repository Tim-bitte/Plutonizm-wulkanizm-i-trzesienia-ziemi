const points = [
  {
    text: "Plutonizm to procesy geologiczne związane z powstawaniem gromadzeniem się przemieszczaniem i krystalizacją magmy Procesy te zachodzą w głębi litosfery Gorąca magma krąży pod powierzchnią Ziemi i powoli ochładza się Powstają różnorodne formy zwane intruzjami magmatycznymi Tworzą się przez wciskanie się magmy w pęknięcia i szczeliny skalne oraz powstają pomiędzy warstwami skał Mogą znajdować się głęboko bo nawet kilkadziesiąt kilometrów pod ziemią i mogą osiągać znaczne długości nawet 2000 km"
  },
  {
    text: "Lakolity wypychają w górę wyżej położone warstwy skalne co przypomina kapelusz grzyba Dajki przyjmują formę żył przecinających kolejne warstwy skalne Batolity to grube masy skalne sięgające często znacznych głębokości które tworzą się w wyniku zakrzepnięcia magmy"
  },
  {
    text: "Wulkanizm to procesy związane z wydobywaniem się magmy na powierzchnię ziemi Miejsca gdzie do tego dochodzi nazywamy wulkanami Magma po wydostaniu się na powierzchnię staje się lawą Z wulkanu wydobywają się lawa gazy głównie para wodna a oprócz niej także tlenek węgla siarkowodór czy metan"
  },
  {
    text: "Z wulkanu wydobywają się materiały piroklastyczne czyli różnej wielkości fragmenty lawy wyrzucane w powietrze Bomby wulkaniczne to bryły lawy zastygające w powietrzu lapille to okruchy skalne z rozdrobnionej lawy o średnicy około 6 cm a popioły wulkaniczne to drobne okruchy skalne o średnicy do 2mm Erupcja to wydobywanie się na powierzchnię ziemi produktów wulkanicznych Może przebiegać gwałtownie lub spokojnie"
  },
  {
    text: "Proces wybuchu polega na tym że pod ziemią w ognisku magmowym gromadzi się magma Następnie duże ciśnienie wypiera magmę w górę przez komin wulkaniczny Przez krater wydobywają się produkty wulkaniczne lawa gazy i materiały piroklastyczne Elementy budowy wulkanu to ognisko magmowe pod powierzchnią komin wulkaniczny komin boczny krater stożek wulkaniczny oraz potok lawy Następujące po sobie erupcje prowadzą do wytworzenia się stożka wulkanicznego"
  },
  {
    text: "Wulkany znajdują się na styku płyt litosfery gdzie dochodzi też do trzęsień ziemi i są to obszary aktywne sejsmicznie Występują także w miejscach pęknięć tektonicznych na kontynentach np Wielkie Rowy Afrykańskie oraz na podmorskich grzbietach Znajdują się również w miejscach występowania plam gorąca gdzie magma była w stanie przebić się przez cienką skorupę oceaniczną czego przykładem są hawajskie wyspy Na Ziemi znajduje się kilka tysięcy wulkanów z czego czynnych jest ok 600 Najwięcej wulkanów znajduje się w Ognistym Pierścieniu Pacyfiku wokół wybrzeży Oceanu Spokojnego Czynne wulkany w Europie znajdują się we Włoszech w Grecji i na Islandii"
  },
  {
    text: "Wulkan eksplozywny charakteryzuje się gwałtowną erupcją podczas której wydobywają się materiały piroklastyczne i gazy a stożek wulkaniczny jest niewielki i stromy Przykłady to Aquan w Gwatemali i Mayon na Filipinach Wulkan efuzywny cechuje spokojna erupcja z której wydobywa się tylko mało lepka magma płynąca na znaczne odległości Stożek wulkaniczny jest rozległy o łagodnych stokach Przykłady to Mauna Kea i Mauna Loa na Hawajach"
  },
  {
    text: "Stratowulkan ma erupcje raz gwałtowne a innym razem spokojne Stożek wulkaniczny ma znaczne rozmiary jest wysoki o stromych stokach Przykłady to Etna Wezuwiusz i Stromboli"
  },
  {
    text: "Mechanizm powstawania jest najczęściej wywołany przez przesuwanie się ogromnych mas skalnych pod powierzchnią ziemi Płyty litosfery zderzają się i napierają na siebie a siły tarcia je powstrzymują Wytwarzają się potężne naprężenia aż nagromadzona energia pokonuje siły tarcia Masy skalne gwałtownie się przemieszczają a powstałe drgania rozchodzą się jako fale sejsmiczne Fale docierają do powierzchni co jest odczuwalne jako wstrząsy Kluczowe pojęcia to hipocentrum czyli ognisko wstrząsów we wnętrzu ziemi z którego rozchodzą się fale sejsmiczne oraz epicentrum czyli miejsce na powierzchni ziemi leżące bezpośrednio nad hipocentrum W epicentrum wstrząsy są odczuwalne najmocniej i najszybciej"
  },
  {
    text: "Zwykle trwają krótko od kilku sekund do kilku minut ale zdarzają się trzęsienia ziemi trwające nawet dobę Siłę trzęsień ziemi określa się w skali Richtera i nie notuje się wstrząsów o magnitudzie przekraczającej 9,5 To jedno z najtragiczniejszych w skutkach klęsk żywiołowych powodujące ofiary śmiertelne liczone niekiedy w setkach tysięcy osób znisczenia infrastruktury oraz powstawanie tsunami czyli ogromnych fal zalewających i niszczących obszary przybrzeżne"
  }
];



const box = document.getElementById("infoBox");
const title = document.getElementById("infoTitle");
const text = document.getElementById("infoText");

function showPoint(index) {
    title.textContent = points[index].title;
    text.textContent = points[index].text;

    box.classList.remove("show");
    void box.offsetWidth; 
    box.classList.add("show");
}
