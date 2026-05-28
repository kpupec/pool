        /* ── I18N ──────────────────────────────────────────── */
        let currentLang = localStorage.getItem('pool-lang') || 'pl';

        const i18n = {
            pl: {
                'page.title': 'Czysty Basen — Poradnik Ogrodowy',
                'header.h1': '🏊 Czysty Basen',
                'header.lead': 'Praktyczny poradnik pielęgnacji basenu ogrodowego. Dowiedz się jak utrzymać wodę w idealnej kondycji przez cały sezon kąpielowy.',
                'theme.dark': 'Tryb ciemny', 'theme.light': 'Jasny',
                'auth.login': 'Zaloguj',
                'auth.loginError': 'Błąd logowania',
                'toast.saved': '✓ Zapisano w chmurze',
                'tab.start': '🚀 Start', 'tab.equipment': '💡 Wyposażenie',
                'tab.routine': '🧭 Pielęgnacja',
                'tab.chemistry': '⚖️ Chemia & Filtry', 'tab.problems': '🩺 Problemy z Wodą',
                'start.badge': 'Krok 0',
                'start.modeOpen': '🌞 Otwarcie sezonu',
                'start.modeWinter': '❄️ Zimowanie',
                'start.heading': 'Jak przygotować wodę w nowym basenie?',
                'start.desc': 'Zanim wskoczysz do wody — wykonaj te cztery kroki. Pominięcie któregokolwiek z nich często prowadzi do zielonej lub mętnej wody już po kilku dniach.',
                'start.step1.title': 'Krok 1: Napełnij i zmierz', 'start.step1.short': 'Po nalaniu wody od razu sprawdź jej parametry — nie czekaj na „następny dzień".', 'start.step1.detail': 'Woda z wodociągu często ma podwyższone pH. Ze studni może zawierać żelazo — jeśli po dodaniu chloru woda zbrązowieje, konieczny będzie kwas askorbinowy. Pierwsza rzecz: pomiar pH.',
                'start.step2.title': 'Krok 2: Ustaw pH', 'start.step2.short': 'Wyreguluj odczyn do zakresu 7.0–7.4 — bez tego cała chemia basenowa działa o wiele słabiej.', 'start.step2.detail': 'Przy złym pH chlor traci nawet 80% skuteczności. Za wysokie? Użyj pH Minus. Za niskie? Sięgnij po pH Plus. Odczekaj jeden pełny obieg wody przed kolejnym pomiarem.',
                'start.step3.title': 'Krok 3: Szok chlorowy', 'start.step3.short': 'Zdezynfekuj wodę udarowo — zabij bakterie i zanieczyszczenia biologiczne zanim się zadomowią.', 'start.step3.detail': 'Rozpuść granulat Chlor Szok w wiadrze wody, wlej powoli wzdłuż ścianek i włącz pompę filtrującą na kilka godzin. Do wody wchodź dopiero gdy wolny chlor spadnie poniżej 1 mg/l.',
                'start.step4.title': 'Krok 4: Antyglon i tabletka', 'start.step4.short': 'Zabezpiecz wodę przed glonami i uruchom ciągłe, powolne dozowanie chemii.', 'start.step4.detail': 'Wlej dawkę startową antyglonu. Do dozownika pływającego (nigdy bezpośrednio na dno — odbarwi!) wrzuć tabletkę multifunkcyjną 20g lub 200g. Będzie się powoli rozpuszczać utrzymując higienę wody.',
                'start.hint': '💡 Kliknij w kafelek, żeby rozwinąć szczegóły.',
                'equipment.heading': '💡 Od czego zacząć wyposażenie?', 'equipment.desc': 'Nie wiesz co kupić do nowego basenu? Wybierz rozmiar zbiornika — wyświetlimy dopasowane rekomendacje sprzętu i chemii.',
                'equipment.sizeSmall': 'Basen do 10m³', 'equipment.sizeLarge': 'Basen powyżej 10m³',
                'equipment.acc.heading': '🛠️ Sprzęt który warto mieć',
                'equipment.acc.filter.name': 'Zestaw filtrujący + rury i dysze', 'equipment.acc.filter.desc': 'Serce systemu — bez filtracji woda szybko zamienia się w siedlisko glonów i bakterii.',
                'equipment.acc.ladder.name': 'Drabinka', 'equipment.acc.ladder.desc': 'Obowiązkowa przy basenie stelażowym — ułatwia bezpieczne wchodzenie i wychodzenie.',
                'equipment.acc.solar.name': 'Pokrywa solarna (izotermiczna)', 'equipment.acc.solar.desc': 'Utrzymuje temperaturę i zmniejsza zużycie chemii ograniczając parowanie wody.',
                'equipment.acc.cover.name': 'Pokrywa ochronna (zimowa / leśna)', 'equipment.acc.cover.desc': 'Blokuje liście i owady podczas dłuższej przerwy w użytkowaniu.',
                'equipment.acc.skimmer.name': 'Siatka na wysięgniku (podbierak)', 'equipment.acc.skimmer.desc': 'Najszybszy sposób na owady i liście z powierzchni wody.',
                'equipment.acc.thermo.name': 'Termometr basenowy', 'equipment.acc.thermo.desc': 'Kontrola temperatury wody — pomocna też przy dawkowaniu chemii.',
                'equipment.acc.dispenser.name': 'Dozownik pływający', 'equipment.acc.vacuum.name': 'Odkurzacz basenowy',
                'equipment.acc.tester.name': 'Tester pH i chloru / tlenu', 'equipment.acc.tester.desc': 'Mierz parametry co tydzień — to podstawa zdrowej wody.',
                'equipment.chem.heading': '🧪 Niezbędna chemia',
                'equipment.chem.shock.name': 'Chlor Szok', 'equipment.chem.shock.desc': 'Błyskawiczna dezynfekcja przy starcie sezonu lub gdy coś pójdzie nie tak.',
                'equipment.chem.phMinus.name': 'pH Minus', 'equipment.chem.phMinus.desc': 'Obniża za wysokie pH — najczęstszy problem z wodą wodociągową.',
                'equipment.chem.phPlus.name': 'pH Plus', 'equipment.chem.phPlus.desc': 'Podnosi pH gdy woda jest zbyt kwaśna.',
                'equipment.chem.algae.name': 'Środek przeciwglonowy (Antyglon)', 'equipment.chem.algae.desc': 'Zatrzymuje wzrost glonów zanim zdążą zabarwić ściany basenu.',
                'equipment.chem.floc.name': 'Flokulant / Koagulant', 'equipment.chem.floc.desc': 'Skleja zawieszone drobiny w większe płatki — woda robi się przejrzysta.',
                'equipment.chem.tabs.name': 'Tabletki wielofunkcyjne',
                'equipment.method.heading': '🩺 Jak utrzymać czystą wodę krok po kroku?', 'equipment.method.desc': 'Dwie sprawdzone metody — wybierz tę, która pasuje do Twojego stylu:',
                'equipment.method.chlor': 'Chlor', 'equipment.method.oxygen': 'Aktywny tlen',
                'diy.heading': '🪣 Filtr wiaderkowy DIY — ratunek przy zażelazieniu', 'diy.desc': 'Brązowa woda po dolaniu chloru? Pompa kartuszowa nie zbiera osadu? Ten prosty filtr możesz złożyć w 10 minut za kilka złotych.',
                'diy.instructions': 'Instrukcja krok po kroku:',
                'diy.li1': 'Weź plastikowe wiadro o pojemności 10–20L.', 'diy.li2': 'W dnie wywierć gęsto małe otwory wiertłem 4–6mm.', 'diy.li3': 'Wypełnij szczelnie watą filtracyjną', 'diy.li4': 'Wsadź wąż z pompy basenowej od góry wiadra.', 'diy.li5': 'Zawieś nad poziomem wody i filtruj bez przerwy.',
                'diy.vizTitle': 'Przekrój filtra wiaderkowego', 'diy.hose': 'Wąż', 'diy.filterMaterial': 'WARSTWA FILTRACYJNA', 'diy.filterNote': '', 'diy.cleanWater': 'Czysta woda', 'diy.caption': 'Powrót czystej wody do basenu',
                'params.heading': 'Chemia i Filtracja — Liczby Które Musisz Znać', 'params.desc': 'Prawidłowe pH to warunek konieczny skuteczności chloru. Poniżej znajdziesz wizualizację skali pH oraz kalkulatory do obliczenia dawek i czasu filtrowania.',
                'params.dosage.heading': '🧪 Ile preparatu dodać?', 'params.dosage.error': 'Wprowadź prawidłowe dane — objętość musi być większa od zera, pH w przedziale 0–14.',
                'params.dosage.volumeLabel': 'Objętość basenu (m³)', 'params.dosage.volumeHint': '1 m³ = 1000 litrów', 'params.dosage.productLabel': 'Preparat do obliczenia', 'params.dosage.phLabel': 'Aktualne pH wody', 'params.dosage.calcBtn': 'Oblicz potrzebną dawkę',
                'params.dosage.opt.default': 'Regulator pH (pH Plus / pH Minus)', 'params.dosage.opt.chlor': 'Chlor Szok (dezynfekcja uderzeniowa)', 'params.dosage.opt.algae': 'Antyglon (zapobieganie algom)', 'params.dosage.opt.floc': 'Flokulant / Koagulant (klarowanie wody)', 'params.dosage.opt.vitc': 'Kwas askorbinowy (brązowa woda / żelazo)',
                'params.filtration.heading': '🌀 Ile godzin pracuje pompa?', 'params.filtration.error': 'Objętość i wydajność pompy muszą być większe od zera.',
                'params.filtration.volumeLabel': 'Objętość basenu (L)', 'params.filtration.flowLabel': 'Wydajność pompy (l/h)', 'params.filtration.wattsLabel': 'Pobór mocy (W)', 'params.filtration.costLabel': 'Taryfa prądu (PLN/kWh)',
                'params.filtration.calcBtn': 'Oblicz czas filtracji i koszty', 'params.filtration.resultHeading': '⏱️ Podsumowanie:',
                'params.filtration.turnover1': 'Czas jednego obiegu:', 'params.filtration.throughput': 'Przepustowość godzinowa:', 'params.filtration.throughputSuffix': 'objętości basenu',
                'params.filtration.dailyNorm': 'Dzienna norma pracy pompy:', 'params.filtration.double': 'Minimum (2 obiegi):', 'params.filtration.triple': 'Intensywnie / upały (3 obiegi):',
                'problems.heading': 'Co się dzieje z Twoją wodą?', 'problems.desc': 'Wybierz objaw — wyjaśnimy co to oznacza i jak to naprawić bez wylewania wody.',
                'problems.addBtn': '+ Dodaj własną diagnozę', 'problems.loginHint': 'Zaloguj się przez Google, aby zapisywać własne diagnozy w chmurze.',
                'modal.deleteConfirm': 'Usunąć tę diagnozę?',
                'modal.heading': 'Dodaj własną diagnozę', 'modal.iconLabel': 'Ikona', 'modal.labelLabel': 'Krótki opis przycisku', 'modal.labelPlaceholder': 'np. Woda śmierdzi siarką',
                'modal.titleLabel': 'Tytuł diagnozy', 'modal.titlePlaceholder': 'np. Siarkowodór w wodzie', 'modal.descLabel': 'Opis i rozwiązanie', 'modal.descPlaceholder': 'Opisz problem i kroki które pomogły...',
                'modal.cancel': 'Anuluj', 'modal.save': 'Zapisz w chmurze',
                'footer.text': 'Dobra woda to efekt regularnej troski. Zbudowane z myślą o ogrodowych entuzjastach kąpieli.',
                'chart.title': 'Optymalne pH wody basenowej — skala wizualna',
                'chart.tooAcid': 'Zbyt Kwasowa (0 – 6.9)', 'chart.ideal': 'Idealna (7.0 – 7.4)', 'chart.tooAlk': 'Zbyt Zasadowa (7.5 – 14)',
                'chart.xLabel': 'Wartość pH',
                'step.wait': 'Czas oczekiwania:', 'step.num': 'Krok',
                'dispenser.small': 'Wystarczy <strong>mały pływający dozownik</strong> z regulacją przepływu na tabletki 20g.',
                'vacuum.small': 'Mniejsze pompy mają za słabe ssanie — wybierz <strong>odkurzacz podłączany do węża ogrodowego</strong> (działa na ciśnienie wody).',
                'tabs.small': 'Używaj <strong>tabletek 20g</strong>. Zazwyczaj wystarczą 1–2 tabletki tygodniowo w dozowniku z regulacją.',
                'dispenser.large': 'Potrzebujesz <strong>dużego dozownika pływającego z regulacją szczelin</strong> lub skimmera ściennego do dużych tabletek 200g.',
                'vacuum.large': 'Przy pompie powyżej 4 m³/h użyj <strong>końcówki odkurzacza podłączanej bezpośrednio pod ssanie pompy</strong> — to najskuteczniejsza metoda.',
                'tabs.large': 'Stosuj <strong>tabletki 200g</strong> wolnorozpuszczalne. Jedna sztuka utrzymuje czystość przez 1–2 tygodnie.',
                'auth.logout': 'Wyloguj',
                'chem.modal.heading': 'Nowy własny preparat',
                'chem.modal.name': 'Nazwa preparatu',
                'chem.modal.namePlaceholder': 'np. Mój flokulant lub środek',
                'chem.modal.dosage': 'Dawka na 1 m³ wody',
                'chem.modal.unit': 'Jednostka',
                'chem.modal.save': 'Zapisz w chmurze',
                'chem.modal.addBtn': '➕ Dodaj własny środek',
                'chem.modal.loginRequired': 'Musisz być zalogowany, aby dodać własny preparat. Zaloguj się przez Google klikając przycisk w nagłówku.',
                'chem.modal.saveError': 'Nie udało się zapisać preparatu. Sprawdź połączenie z internetem.',
                'chem.modal.validationError': 'Wypełnij wszystkie pola. Dawka musi być większa od zera.',
                'chem.modal.noSaved': 'Brak zapisanych środków',
                'chem.modal.loginPrompt': 'Zaloguj się, aby dodać własne preparaty',
                'chem.groupLabel': 'Twoje preparaty (Chmura)',
                'chem.loginHint': '☁️ Zaloguj się przez Google (przycisk w nagłówku), aby móc dodawać własne preparaty do kalkulatora i zapisywać je w chmurze.',
                'chem.result.title': 'Zalecana dawka preparatu:',
                'chem.result.notFound': 'Błąd: nie znaleziono preparatu.',
            },
            en: {
                'page.title': 'Clean Pool — Garden Guide',
                'header.h1': '🏊 Clean Pool',
                'header.lead': 'A practical guide to garden pool maintenance. Learn how to keep your water in perfect condition throughout the entire bathing season.',
                'theme.dark': 'Dark mode', 'theme.light': 'Light',
                'auth.login': 'Log in',
                'auth.loginError': 'Login error',
                'toast.saved': '✓ Saved to cloud',
                'tab.start': '🚀 Start', 'tab.equipment': '💡 Equipment',
                'tab.routine': '🧭 Maintenance',
                'tab.chemistry': '⚖️ Chemistry & Filters', 'tab.problems': '🩺 Water Problems',
                'start.badge': 'Step 0',
                'start.modeOpen': '🌞 Opening the season',
                'start.modeWinter': '❄️ Winterization',
                'start.heading': 'How to prepare water in a new pool?',
                'start.desc': 'Before you jump in — complete these four steps. Skipping any of them often leads to green or cloudy water within just a few days.',
                'start.step1.title': 'Step 1: Fill and measure', 'start.step1.short': 'After filling the pool, immediately check the water parameters — don\'t wait until tomorrow.', 'start.step1.detail': 'Tap water often has elevated pH. Well water may contain iron — if the water turns brown after adding chlorine, you\'ll need ascorbic acid. First thing: measure pH.',
                'start.step2.title': 'Step 2: Set pH', 'start.step2.short': 'Adjust the pH to the 7.0–7.4 range — without this, all pool chemistry is much less effective.', 'start.step2.detail': 'Poor pH reduces chlorine effectiveness by up to 80%. Too high? Use pH Minus. Too low? Reach for pH Plus. Wait one full pump cycle before re-testing.',
                'start.step3.title': 'Step 3: Shock chlorination', 'start.step3.short': 'Shock disinfect the water — kill bacteria and biological contaminants before they settle in.', 'start.step3.detail': 'Dissolve Shock Chlorine granules in a bucket of water, pour slowly along the pool walls and run the pump for a few hours. Only enter the water when free chlorine drops below 1 mg/l.',
                'start.step4.title': 'Step 4: Algae protection & tablet', 'start.step4.short': 'Protect the water from algae and start continuous, slow chemical dosing.', 'start.step4.detail': 'Pour a starter dose of anti-algae agent. Place a multi-function tablet (20g or 200g) in a floating dispenser — never directly on the bottom. It will slowly dissolve, maintaining water hygiene.',
                'start.hint': '💡 Click a card to expand the details.',
                'equipment.heading': '💡 Where to start with equipment?', 'equipment.desc': 'Not sure what to buy for a new pool? Select your tank size — we\'ll display matched equipment and chemical recommendations.',
                'equipment.sizeSmall': 'Pool up to 10m³', 'equipment.sizeLarge': 'Pool over 10m³',
                'equipment.acc.heading': '🛠️ Equipment worth having',
                'equipment.acc.filter.name': 'Filter set + pipes & nozzles', 'equipment.acc.filter.desc': 'The heart of the system — without filtration, water quickly becomes a breeding ground for algae and bacteria.',
                'equipment.acc.ladder.name': 'Ladder', 'equipment.acc.ladder.desc': 'Mandatory for frame pools — makes getting in and out safe and easy.',
                'equipment.acc.solar.name': 'Solar cover (isothermal)', 'equipment.acc.solar.desc': 'Maintains water temperature and reduces chemical consumption by limiting evaporation.',
                'equipment.acc.cover.name': 'Protective cover (winter / leaf)', 'equipment.acc.cover.desc': 'Keeps leaves and insects out during longer breaks from use.',
                'equipment.acc.skimmer.name': 'Skimmer net (telescopic)', 'equipment.acc.skimmer.desc': 'The fastest way to remove insects and leaves from the water surface.',
                'equipment.acc.thermo.name': 'Pool thermometer', 'equipment.acc.thermo.desc': 'Monitor water temperature — also useful when dosing chemicals.',
                'equipment.acc.dispenser.name': 'Floating dispenser', 'equipment.acc.vacuum.name': 'Pool vacuum',
                'equipment.acc.tester.name': 'pH and chlorine / oxygen tester', 'equipment.acc.tester.desc': 'Measure parameters every week — the foundation of healthy water.',
                'equipment.chem.heading': '🧪 Essential chemicals',
                'equipment.chem.shock.name': 'Shock Chlorine', 'equipment.chem.shock.desc': 'Fast disinfection at the start of the season or when something goes wrong.',
                'equipment.chem.phMinus.name': 'pH Minus', 'equipment.chem.phMinus.desc': 'Lowers overly high pH — the most common problem with tap water.',
                'equipment.chem.phPlus.name': 'pH Plus', 'equipment.chem.phPlus.desc': 'Raises pH when the water is too acidic.',
                'equipment.chem.algae.name': 'Algae inhibitor (Anti-algae)', 'equipment.chem.algae.desc': 'Stops algae growth before it has a chance to stain the pool walls.',
                'equipment.chem.floc.name': 'Flocculant / Coagulant', 'equipment.chem.floc.desc': 'Clumps suspended particles into larger flakes — water becomes crystal clear.',
                'equipment.chem.tabs.name': 'Multi-function tablets',
                'equipment.method.heading': '🩺 How to maintain clean water step by step?', 'equipment.method.desc': 'Two proven methods — pick the one that suits your style:',
                'equipment.method.chlor': 'Chlorine', 'equipment.method.oxygen': 'Active oxygen',
                'diy.heading': '🪣 DIY Bucket Filter — rescue for iron-heavy water', 'diy.desc': 'Brown water after adding chlorine? Cartridge pump can\'t collect coagulation sediment? This simple filter can be assembled in 10 minutes for a few pennies.',
                'diy.instructions': 'Step by step:',
                'diy.li1': 'Take a plastic bucket with a capacity of 10–20L.', 'diy.li2': 'Drill many small holes in the bottom with a 4–6mm drill bit.', 'diy.li3': 'Pack tightly with filter wool.', 'diy.li4': 'Insert the pump hose from the top of the bucket.', 'diy.li5': 'Hang above the water surface and filter continuously.',
                'diy.vizTitle': 'Bucket filter cross-section', 'diy.hose': 'Hose', 'diy.filterMaterial': 'FILTER LAYER', 'diy.filterNote': '', 'diy.cleanWater': 'Clean water', 'diy.caption': 'Crystal-clear water return to the pool',
                'params.heading': 'Chemistry & Filtration — Numbers You Need to Know', 'params.desc': 'Correct pH is essential for chlorine effectiveness. Below you\'ll find a pH scale visualization and calculators for chemical doses and filtration time.',
                'params.dosage.heading': '🧪 How much product to add?', 'params.dosage.error': 'Please enter valid data — volume must be greater than zero, pH between 0 and 14.',
                'params.dosage.volumeLabel': 'Pool volume (m³)', 'params.dosage.volumeHint': '1 m³ = 1,000 litres', 'params.dosage.productLabel': 'Product to calculate', 'params.dosage.phLabel': 'Current water pH', 'params.dosage.calcBtn': 'Calculate required dose',
                'params.dosage.opt.default': 'pH regulator (pH Plus / pH Minus)', 'params.dosage.opt.chlor': 'Shock Chlorine (shock disinfection)', 'params.dosage.opt.algae': 'Anti-algae agent (algae prevention)', 'params.dosage.opt.floc': 'Flocculant / Coagulant (water clarification)', 'params.dosage.opt.vitc': 'Ascorbic acid (brown water / iron)',
                'params.filtration.heading': '🌀 How many hours should the pump run?', 'params.filtration.error': 'Pool volume and pump flow rate must be greater than zero.',
                'params.filtration.volumeLabel': 'Pool volume (L)', 'params.filtration.flowLabel': 'Pump flow rate (l/h)', 'params.filtration.wattsLabel': 'Power consumption (W)', 'params.filtration.costLabel': 'Electricity rate (PLN/kWh)',
                'params.filtration.calcBtn': 'Calculate filtration time and costs', 'params.filtration.resultHeading': '⏱️ Summary:',
                'params.filtration.turnover1': 'Single cycle time:', 'params.filtration.throughput': 'Hourly throughput:', 'params.filtration.throughputSuffix': 'of pool volume',
                'params.filtration.dailyNorm': 'Daily pump operating norm:', 'params.filtration.double': 'Minimum (2 cycles):', 'params.filtration.triple': 'Intensive / hot weather (3 cycles):',
                'problems.heading': 'What\'s happening to your water?', 'problems.desc': 'Choose a symptom — we\'ll explain what it means and how to fix it without emptying the pool.',
                'problems.addBtn': '+ Add your own diagnosis', 'problems.loginHint': 'Log in with Google to save your own diagnoses to the cloud.',
                'modal.deleteConfirm': 'Delete this diagnosis?',
                'modal.heading': 'Add your own diagnosis', 'modal.iconLabel': 'Icon', 'modal.labelLabel': 'Short button description', 'modal.labelPlaceholder': 'e.g. Water smells of sulphur',
                'modal.titleLabel': 'Diagnosis title', 'modal.titlePlaceholder': 'e.g. Hydrogen sulphide in water', 'modal.descLabel': 'Description and solution', 'modal.descPlaceholder': 'Describe the problem and the steps that helped...',
                'modal.cancel': 'Cancel', 'modal.save': 'Save to cloud',
                'footer.text': 'Good water is the result of regular care. Built for garden pool enthusiasts.',
                'chart.title': 'Optimal pool water pH — visual scale',
                'chart.tooAcid': 'Too acidic (0 – 6.9)', 'chart.ideal': 'Ideal (7.0 – 7.4)', 'chart.tooAlk': 'Too alkaline (7.5 – 14)',
                'chart.xLabel': 'pH value',
                'step.wait': 'Wait time:', 'step.num': 'Step',
                'dispenser.small': 'A <strong>small floating dispenser</strong> with flow control for 20g tablets is all you need.',
                'vacuum.small': 'Smaller pumps have insufficient suction — use a <strong>vacuum that connects to a garden hose</strong> (works on water pressure).',
                'tabs.small': 'Use <strong>20g tablets</strong>. Usually 1–2 tablets per week in a flow-controlled dispenser.',
                'dispenser.large': 'You need a <strong>large floating dispenser with adjustable slots</strong> or a wall skimmer for 200g tablets.',
                'vacuum.large': 'For pumps above 4 m³/h, use a <strong>vacuum head connected directly to the pump\'s suction inlet</strong> — the most effective method.',
                'tabs.large': 'Use <strong>200g slow-release tablets</strong>. One tablet typically keeps the water clean for 1–2 weeks.',
                'auth.logout': 'Log out',
                'chem.modal.heading': 'New custom chemical',
                'chem.modal.name': 'Chemical name',
                'chem.modal.namePlaceholder': 'e.g. My flocculant',
                'chem.modal.dosage': 'Dose per 1 m³ of water',
                'chem.modal.unit': 'Unit',
                'chem.modal.save': 'Save to cloud',
                'chem.modal.addBtn': '➕ Add custom chemical',
                'chem.modal.loginRequired': 'You must be logged in to add a custom chemical. Log in with Google using the button in the header.',
                'chem.modal.saveError': 'Failed to save the chemical. Check your internet connection.',
                'chem.modal.validationError': 'Fill in all fields. Dosage must be greater than zero.',
                'chem.modal.noSaved': 'No saved chemicals',
                'chem.modal.loginPrompt': 'Log in to add custom chemicals',
                'chem.groupLabel': 'Your chemicals (Cloud)',
                'chem.loginHint': '☁️ Log in with Google (button in the header) to add your own chemicals to the calculator and save them to the cloud.',
                'chem.result.title': 'Recommended product dose:',
                'chem.result.notFound': 'Error: chemical not found.',
            }
        };

        function t(key) {
            return i18n[currentLang]?.[key] ?? i18n['pl'][key] ?? key;
        }

        function setLang(lang) {
            currentLang = lang;
            localStorage.setItem('pool-lang', lang);
            document.documentElement.lang = lang;
            document.getElementById('langToggleBtn').textContent = lang === 'pl' ? '🇬🇧 EN' : '🇵🇱 PL';
            document.title = t('page.title');

            document.querySelectorAll('[data-i18n]').forEach(el => {
                const val = t(el.dataset.i18n);
                if (val) el.textContent = val;
            });

            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const val = t(el.dataset.i18nPlaceholder);
                if (val) el.placeholder = val;
            });

            // select options
            document.querySelectorAll('option[data-i18n]').forEach(opt => {
                const val = t(opt.dataset.i18n);
                if (val) opt.textContent = val;
            });

            // theme button uses span inside
            const themeSpan = document.querySelector('#themeToggleBtn [data-i18n]');
            if (themeSpan) themeSpan.textContent = getTheme() === 'dark' ? t('theme.light') : t('theme.dark');

            if (phChartInstance) {
                phChartInstance.data.datasets[0].label = t('chart.tooAcid');
                phChartInstance.data.datasets[1].label = t('chart.ideal');
                phChartInstance.data.datasets[2].label = t('chart.tooAlk');
                phChartInstance.options.plugins.title.text = t('chart.title');
                phChartInstance.options.scales.x.title.text = t('chart.xLabel');
                phChartInstance.update();
            }

            const authText = document.getElementById('authText');
            if (authText) {
                authText.textContent = window.currentUser
                    ? t('auth.logout') + ' (' + window.currentUser.displayName.split(' ')[0] + ')'
                    : t('auth.login');
            }

            renderChemicalSelect();
            if (currentStartMode === 'winter') renderWinterSteps();
            selectMethod(currentMethod);
            initProblemSolver();
        }

        function toggleLang() { setLang(currentLang === 'pl' ? 'en' : 'pl'); }

        /* ── THEME ─────────────────────────────────────────── */
        let phChartInstance = null;

        function getTheme() {
            return document.documentElement.getAttribute('data-theme');
        }

        function applyTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('pool-theme', theme);
            const span = document.querySelector('#themeToggleBtn [data-i18n]');
            if (span) span.textContent = theme === 'dark' ? t('theme.light') : t('theme.dark');
            if (phChartInstance) updateChartColors();
        }

        function toggleTheme() {
            applyTheme(getTheme() === 'dark' ? 'light' : 'dark');
        }

        function updateChartColors() {
            const isDark = getTheme() === 'dark';
            const textColor = isDark ? '#7a9ab8' : '#4b7a7a';
            const gridColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)';
            phChartInstance.options.plugins.title.color = isDark ? '#c8d8e8' : '#1a3a3a';
            phChartInstance.options.plugins.legend.labels.color = textColor;
            phChartInstance.options.scales.x.ticks.color = textColor;
            phChartInstance.options.scales.x.title.color = textColor;
            phChartInstance.options.scales.x.grid.color = gridColor;
            phChartInstance.update();
        }

        /* ── TABS ──────────────────────────────────────────── */
        function switchTab(tabId) {
            document.querySelectorAll('.tab-content-panel').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
            const btn = document.getElementById('btn-' + tabId);
            if (btn) btn.classList.add('active');
        }

        function toggleDetail(id) {
            document.getElementById(id).classList.toggle('d-none');
        }

        function syncVolumesFromM3(val) {
            const parsed = parseFloat(val);
            if (!isNaN(parsed) && parsed > 0)
                document.getElementById('filterPoolVolume').value = Math.round(parsed * 1000);
        }

        function syncVolumesFromLiters(val) {
            const parsed = parseFloat(val);
            if (!isNaN(parsed) && parsed > 0)
                document.getElementById('poolVolume').value = (parsed / 1000).toFixed(2);
        }

        /* ── STEPS DATA ────────────────────────────────────── */
        const stepsData = {
            pl: {
                chlor: [
                    { icon:"🧪", title:"Zdobądź tester",           text:"Zanim cokolwiek dosypiesz do wody, kup tester pH i chloru — bez niego działasz w ciemno.",                                                                    wait:"Przejdź dalej od razu" },
                    { icon:"🚰", title:"Zmierz wodę po napełnieniu",text:"Tuż po napełnieniu basenu sprawdź pH, wolny chlor i opcjonalnie twardość wody. Wyniki wyznaczą dalsze działania.",                                             wait:"Kilka minut na odczyt" },
                    { icon:"⚖️", title:"Doprowadź pH do normy",     text:"Dosyp pH Minus lub pH Plus według wskazania testera. Reguła praktyczna: jeden pełny obieg pompy zanim zmierzysz ponownie.",                                    wait:"ok. 2–3 godz. (jeden pełny obieg przez pompę)" },
                    { icon:"⚡", title:"Uderzeniowe chlorowanie",    text:"Wlej dużą dawkę chloru szokowego. pH może chwilowo skoczyć — nie koryguj go od razu, samo wróci do normy po kilku godzinach.",                               wait:"12–24 h (wejście do wody gdy wolny chlor poniżej 1.5 mg/l)" },
                    { icon:"💊", title:"Tabletka w dozowniku",       text:"Gdy parametry ustabilizują się, włóż tabletkę chlorową 20g lub 200g do pływającego dozownika. Wyjmuj go przed każdą kąpielą.",                               wait:"Działa ciągle — wyjmuj na czas kąpieli" },
                    { icon:"🛡️", title:"Dawka antyglonu",           text:"Wlej płynny środek przeciwglonowy — prewencyjnie raz w tygodniu lub od razu gdy ścianki zaczną być śliskie.",                                                 wait:"ok. 1–2 godz. na wymieszanie z wodą" },
                    { icon:"🏊", title:"Czas na kąpiel!",           text:"Przejrzysta woda, dobre pH, brak zapachu chloramin — basen gotowy. Miłej kąpieli!",                                                                            wait:"—" },
                    { icon:"🔄", title:"Tygodniowa rutyna",          text:"Mierz parametry przynajmniej raz w tygodniu. Pompę włączaj codziennie na tyle godzin, by woda przefiltrowana była co najmniej dwa razy.",                     wait:"Codziennie" }
                ],
                tlen: [
                    { icon:"🧪", title:"Tester do aktywnego tlenu", text:"Kup tester kropelkowy lub tabletkowy mierzący pH i stężenie aktywnego tlenu — inny niż do chloru.",                                                           wait:"Przejdź dalej od razu" },
                    { icon:"🚰", title:"Pomiar wyjściowy",           text:"Zmierz parametry świeżo nalanej wody — pH oraz wyjściowe stężenie tlenu.",                                                                                    wait:"Kilka minut na odczyt" },
                    { icon:"⚖️", title:"Wyrównaj pH",               text:"Ustaw pH w przedziale 7.0–7.4 za pomocą pH Plus lub pH Minus. Przy metodzie tlenowej prawidłowy odczyn jest jeszcze ważniejszy niż przy chlorze.",           wait:"ok. 2–3 godz. (jeden pełny obieg przez pompę)" },
                    { icon:"💨", title:"Szok tlenowy",               text:"Wlej preparat Oxy Shock lub równoważny. Metoda tlenowa jest łagodniejsza dla skóry i oczu — idealna dla dzieci i alergików.",                               wait:"2–4 godz. (według instrukcji producenta)" },
                    { icon:"💊", title:"Tabletka tlenowa w bojce",   text:"Włóż wolnorozpuszczalną tabletkę tlenową do dozownika gdy parametry osiągną normę. Wyjmuj bojkę przed kąpielą.",                                             wait:"Działa ciągle — wyjmuj na czas kąpieli" },
                    { icon:"🛡️", title:"Aktywator tlenowy (antyglon)",text:"Stosuj aktywator glonobójczy przeznaczony do metody tlenowej — klasyczne antyglony chlorowe mogą reagować z aktywnym tlenem.",                            wait:"ok. 1–2 godz. na wymieszanie z wodą" },
                    { icon:"🏊", title:"Czas na kąpiel!",           text:"Przejrzysta woda, właściwe pH — możesz spokojnie korzystać z basenu.",                                                                                         wait:"—" },
                    { icon:"🔄", title:"Tygodniowa rutyna",          text:"Aktywny tlen ulatnia się szybciej niż chlor, szczególnie w upały — badaj wodę częściej. Pompę uruchamiaj codziennie na minimum dwa obiegi.",                 wait:"Codziennie" }
                ]
            },
            en: {
                chlor: [
                    { icon:"🧪", title:"Get a tester",              text:"Before adding anything, buy a pH and chlorine tester — without it you're working blind.",                                                                      wait:"Move on immediately" },
                    { icon:"🚰", title:"Measure after filling",      text:"Right after filling, check pH, free chlorine and optionally water hardness. The results will guide your next steps.",                                          wait:"A few minutes for the reading" },
                    { icon:"⚖️", title:"Bring pH to normal",         text:"Add pH Minus or pH Plus according to the tester reading. Rule of thumb: one full pump cycle before re-testing.",                                              wait:"approx. 2–3 hrs (one full pump cycle)" },
                    { icon:"⚡", title:"Shock chlorination",         text:"Add a large shock dose of chlorine. pH may temporarily spike — don't correct it right away, it will normalise after a few hours.",                           wait:"12–24 hrs (enter water when free chlorine below 1.5 mg/l)" },
                    { icon:"💊", title:"Tablet in the dispenser",    text:"Once parameters stabilise, place a 20g or 200g chlorine tablet in the floating dispenser. Remove it before every swim.",                                     wait:"Works continuously — remove during swimming" },
                    { icon:"🛡️", title:"Anti-algae dose",           text:"Pour liquid anti-algae agent — preventively once a week or immediately when walls start to feel slippery.",                                                   wait:"approx. 1–2 hrs to mix with water" },
                    { icon:"🏊", title:"Time to swim!",              text:"Clear water, good pH, no chloramine smell — the pool is ready. Enjoy!",                                                                                        wait:"—" },
                    { icon:"🔄", title:"Weekly routine",             text:"Test parameters at least once a week. Run the pump daily for enough hours to filter the water at least twice.",                                               wait:"Daily" }
                ],
                tlen: [
                    { icon:"🧪", title:"Active oxygen tester",       text:"Buy a droplet or tablet tester for pH and active oxygen levels — different from a chlorine tester.",                                                          wait:"Move on immediately" },
                    { icon:"🚰", title:"Initial measurement",        text:"Measure the parameters of freshly filled water — pH and baseline oxygen level.",                                                                              wait:"A few minutes for the reading" },
                    { icon:"⚖️", title:"Adjust pH",                  text:"Set pH in the 7.0–7.4 range using pH Plus or pH Minus. With the oxygen method, correct pH is even more critical than with chlorine.",                       wait:"approx. 2–3 hrs (one full pump cycle)" },
                    { icon:"💨", title:"Oxygen shock",               text:"Add Oxy Shock or an equivalent product. The oxygen method is gentler on skin and eyes — ideal for children and allergy sufferers.",                          wait:"2–4 hrs (per manufacturer's instructions)" },
                    { icon:"💊", title:"Oxygen tablet in the floater",text:"Place a slow-release oxygen tablet in the dispenser once parameters are optimal. Remove the floater before swimming.",                                      wait:"Works continuously — remove during swimming" },
                    { icon:"🛡️", title:"Oxygen algae activator",     text:"Regularly add a liquid oxygen-based algae activator — chlorine-based algaecides may react with active oxygen.",                                             wait:"approx. 1–2 hrs to mix with water" },
                    { icon:"🏊", title:"Time to swim!",              text:"Clear water, correct pH — enjoy your pool.",                                                                                                                   wait:"—" },
                    { icon:"🔄", title:"Weekly routine",             text:"Active oxygen dissipates faster than chlorine, especially in hot weather — test more frequently. Run the pump daily for at least two cycles.",              wait:"Daily" }
                ]
            }
        };

        const winterData = {
            pl: [
                { icon: '⚠️', title: 'Nie spiesz się z zamknięciem',  text: 'Dopóki nie ma prognozy ujemnych temperatur, nie odłączaj filtracji — nawet jeśli nie kąpiesz się od tygodni. Woda przy nieruchomej pompie może zakwitnąć w ciągu jednego ciepłego dnia. Pompa musi działać codziennie przez kilka godzin do samego końca.', warning: '⚠️ Zimowanie dotyczy wyłącznie basenów stalowych. Baseny stelażowe mogą nie przeżyć — wylej wodę i złóż je na zimę.' },
                { icon: '💧', title: 'Opuść poziom wody',              text: 'Gdy zbliżają się przymrozki: zatknij dolny otwór odpustowy i spuść wodę poniżej linii skimera. Skimera nie musisz zabezpieczać, jeżeli nie ma w nim wody.' },
                { icon: '🔧', title: 'Spakuj pompę i filtr',           text: 'Odłącz pompę i filtr od basenu. Wyjmij piasek, umyj wnętrze filtra, wysusz, schowaj w ciepłym i suchym miejscu — nie zostawiaj w zbiorniku! Mróz niszczy plastik i uszczelki.' },
                { icon: '🧪', title: 'Zabezpiecz wodę chemicznie',     text: 'Sprawdź i wyreguluj pH wody. Dodaj preparat do zimowania basenu (winterfluid, calzeos) według dawkowania na opakowaniu — przelicz na objętość pozostałej wody po obniżeniu poziomu.' },
                { icon: '🍶', title: 'Zabezpieczenie przed lodem',     text: 'Wrzuć do wody kilka w połowie pełnych, zakręconych butelek PET związanych liną. Przymocuj linę do boków basenu tak, żeby butelki pływały swobodnie na powierzchni. Gdy woda zamarza, butelki odkształcają się zamiast ścianek basenu — to zabezpieczenie przed pękaniem.' },
                { icon: '🛡️', title: 'Pokrywa zimowa',                 text: 'Przykryj basen dedykowaną pokrywą zimową. Sprawdź, czy jest dobrze napięta — nie powinna zbierać wody deszczowej w środku. Luźna pokrywa tworzy "miskę" z wodą, która jest ciężka i może uszkodzić basen.' },
                { icon: '🌱', title: 'Powrót wiosną',                  text: 'Wróć do basenu wcześnie, zanim nastaną ciepłe dni. Gdy nie ma już prognozy mrozów: dolej wody do normalnego poziomu, podłącz filtrację i wyreguluj parametry chemiczne. Im wcześniejszy start, tym łatwiejsze wyregulowanie wody i szybsze jej nagrzewanie.' },
            ],
            en: [
                { icon: '⚠️', title: 'Don\'t rush to close',           text: 'Until frost is forecast, don\'t stop running the filter — even if you haven\'t swum in weeks. Still water can bloom in a single warm day. Keep the pump running daily for a few hours until the very end.', warning: '⚠️ Winterization applies to steel pools only. Frame/inflatable pools may not survive — drain them and fold them up for the winter.' },
                { icon: '💧', title: 'Lower the water level',          text: 'When frost approaches: plug the bottom drain and lower the water below the skimmer line. The skimmer doesn\'t need insulating if it\'s dry.' },
                { icon: '🔧', title: 'Pack up pump and filter',        text: 'Disconnect the pump and filter. Remove the sand, wash the filter housing, dry thoroughly, store in a warm dry place — never leave them in the pool! Frost destroys plastic and seals.' },
                { icon: '🧪', title: 'Winterize the water',            text: 'Check and adjust pH. Add a winter pool chemical (winterfluid, calzeos) per the label dosage — calculate for the remaining water volume after lowering the level.' },
                { icon: '🍶', title: 'Ice expansion buffers',          text: 'Float a line of half-filled, capped PET bottles tied together. Fasten the line to the pool walls so the bottles float freely. When water freezes the bottles compress instead of the pool walls — preventing cracks.' },
                { icon: '🛡️', title: 'Winter cover',                   text: 'Cover the pool with a dedicated winter cover. Make sure it\'s properly tensioned — it should not form a bowl that collects rainwater. A loose cover fills with water which is heavy and can damage the pool.' },
                { icon: '🌱', title: 'Spring restart',                  text: 'Return early, before warm days arrive. Once frost is no longer forecast: top up the water, reconnect filtration and balance the water chemistry. Earlier start = easier balancing and faster warming.' },
            ]
        };

        let currentStartMode = 'open';

        function setStartMode(mode) {
            currentStartMode = mode;
            const openBtn   = document.getElementById('season-open-btn');
            const winterBtn = document.getElementById('season-winter-btn');
            const openDiv   = document.getElementById('start-open-content');
            const winterDiv = document.getElementById('start-winter-content');
            if (mode === 'open') {
                openBtn.classList.replace('btn-outline', 'btn-teal');
                winterBtn.classList.replace('btn-teal', 'btn-outline');
                openDiv.classList.remove('d-none');
                winterDiv.classList.add('d-none');
            } else {
                winterBtn.classList.replace('btn-outline', 'btn-teal');
                openBtn.classList.replace('btn-teal', 'btn-outline');
                openDiv.classList.add('d-none');
                winterDiv.classList.remove('d-none');
                renderWinterSteps();
            }
        }

        function renderWinterSteps() {
            const container = document.getElementById('winter-steps');
            if (!container) return;
            const steps = winterData[currentLang] ?? winterData.pl;
            container.innerHTML = steps.map((step, i) => `
                <div class="step-card p-4 d-flex flex-column flex-sm-row gap-3 align-items-start">
                    <div class="step-icon">${step.icon}</div>
                    <div class="flex-grow-1">
                        <h4 class="h6 fw-bold mb-2">
                            <span style="color:var(--teal-600);">${t('step.num')} ${i + 1}:</span> ${step.title}
                        </h4>
                        ${step.warning ? `<div class="alert-error p-2 small mb-2 rounded">${step.warning}</div>` : ''}
                        <p class="small mb-0 lh-lg" style="color:var(--text-secondary);">${step.text}</p>
                    </div>
                </div>
            `).join('');
        }

        let currentMethod = 'chlor';

        function selectMethod(method) {
            currentMethod = method;
            const chlorBtn = document.getElementById('method-chlor-btn');
            const tlenBtn  = document.getElementById('method-tlen-btn');
            if (method === 'chlor') {
                chlorBtn.classList.replace('btn-outline', 'btn-teal');
                tlenBtn.classList.replace('btn-teal',    'btn-outline');
            } else {
                tlenBtn.classList.replace('btn-outline', 'btn-teal');
                chlorBtn.classList.replace('btn-teal',   'btn-outline');
            }
            const steps = stepsData[currentLang]?.[method] ?? stepsData['pl'][method];
            document.getElementById('method-steps').innerHTML = steps.map((step, i) => `
                <div class="step-card p-4 d-flex flex-column flex-sm-row gap-3 align-items-start">
                    <div class="step-icon">${step.icon}</div>
                    <div class="flex-grow-1">
                        <h4 class="h6 fw-bold mb-2">
                            <span style="color:var(--teal-600);">${t('step.num')} ${i + 1}:</span> ${step.title}
                        </h4>
                        <p class="small mb-3 lh-lg" style="color:var(--text-secondary);">${step.text}</p>
                        <span class="wait-badge">⏳ ${t('step.wait')} <strong>${step.wait}</strong></span>
                    </div>
                </div>
            `).join('');
        }

        let currentPoolSize = 9000;

        function setPoolSize(liters) {
            currentPoolSize = liters;
            const smallBtn = document.getElementById('size-small-btn');
            const largeBtn = document.getElementById('size-large-btn');
            document.getElementById('filterPoolVolume').value = liters;
            document.getElementById('poolVolume').value = (liters / 1000).toFixed(2);
            if (liters < 10000) {
                smallBtn.classList.replace('btn-outline', 'btn-teal');
                largeBtn.classList.replace('btn-teal', 'btn-outline');
                document.getElementById('acc-dispenser-text').innerHTML = t('dispenser.small');
                document.getElementById('acc-vacuum-text').innerHTML    = t('vacuum.small');
                document.getElementById('acc-tabs-text').innerHTML      = t('tabs.small');
            } else {
                largeBtn.classList.replace('btn-outline', 'btn-teal');
                smallBtn.classList.replace('btn-teal', 'btn-outline');
                document.getElementById('acc-dispenser-text').innerHTML = t('dispenser.large');
                document.getElementById('acc-vacuum-text').innerHTML    = t('vacuum.large');
                document.getElementById('acc-tabs-text').innerHTML      = t('tabs.large');
            }
        }

        function onChemicalChange() {
            const chemType = document.getElementById('chemicalType').value;
            document.getElementById('phInputGroup').classList.toggle('d-none', chemType !== 'default');
            document.getElementById('dosageBtn').innerText = chemType === 'default' ? 'Oblicz dawkę pH' : 'Oblicz dawkę preparatu';
            document.getElementById('calcResult').classList.add('d-none');
        }

        function calculateDosage() {
            const volume = parseFloat(document.getElementById('poolVolume').value);
            const chemType = document.getElementById('chemicalType').value;
            const resBox = document.getElementById('calcResult');
            const resTitle = document.getElementById('resTitle');
            const resText = document.getElementById('resText');
            const errBox = document.getElementById('calcInputError');

            if (isNaN(volume) || volume <= 0) { errBox.classList.remove('d-none'); resBox.classList.add('d-none'); return; }
            errBox.classList.add('d-none'); resBox.classList.remove('d-none');

            if (chemType === 'default') {
                const currentPh = parseFloat(document.getElementById('currentPh').value);
                if (isNaN(currentPh) || currentPh < 0 || currentPh > 14) { errBox.classList.remove('d-none'); resBox.classList.add('d-none'); return; }
                if (currentPh >= 7.0 && currentPh <= 7.4) {
                    resTitle.innerHTML = currentLang === 'en'
                        ? '<span style="color:#16a34a;">Perfect pH — nothing to do. ✅</span>'
                        : '<span style="color:#16a34a;">Idealne pH — nic nie trzeba robić. ✅</span>';
                    resText.innerHTML = currentLang === 'en'
                        ? "Water is in perfect balance. Continue filtering and regularly check the chlorine level."
                        : "Woda jest w perfekcyjnej równowadze. Kontynuuj filtrowanie i regularnie sprawdzaj poziom chloru.";
                } else if (currentPh > 7.4) {
                    const dose = Math.round(((currentPh - 7.2) / 0.1) * 10 * volume);
                    resTitle.innerHTML = currentLang === 'en'
                        ? `<span style="color:#dc2626;">pH too high — alkaline water ⚠️</span>`
                        : `<span style="color:#dc2626;">pH zbyt wysokie — woda zasadowa ⚠️</span>`;
                    resText.innerHTML = currentLang === 'en'
                        ? `Use <strong>pH Minus</strong>.<br><br>Required amount: <strong>approx. ${dose} g</strong> (or ml).<br><br><em>How to use:</em> Dissolve in a bucket of lukewarm water. Pour evenly around the pool edge with the pump running. Wait one cycle (1–2 hrs) before the next reading.`
                        : `Zastosuj preparat <strong>pH Minus</strong>.<br><br>Potrzebna ilość: <strong>ok. ${dose} g</strong> (lub ml).<br><br><em>Jak użyć:</em> Rozpuść preparat w wiadrze letniej wody. Wlej równomiernie przy włączonej pompie, trzymając się krawędzi. Poczekaj jeden obieg (1–2 godz.) przed kolejnym pomiarem.`;
                } else {
                    const dose = Math.round(((7.2 - currentPh) / 0.1) * 10 * volume);
                    resTitle.innerHTML = currentLang === 'en'
                        ? `<span style="color:#d97706;">pH too low — acidic water ⚠️</span>`
                        : `<span style="color:#d97706;">pH zbyt niskie — woda kwaśna ⚠️</span>`;
                    resText.innerHTML = currentLang === 'en'
                        ? `Use <strong>pH Plus</strong>.<br><br>Required amount: <strong>approx. ${dose} g</strong> (or ml).<br><br><em>How to use:</em> Dissolve in a bucket of water, pour around the pool with the pump running. Re-test pH after one hour.`
                        : `Zastosuj preparat <strong>pH Plus</strong>.<br><br>Potrzebna ilość: <strong>ok. ${dose} g</strong> (lub ml).<br><br><em>Jak użyć:</em> Rozpuść w wiadrze wody, rozlej wokół basenu przy pracującej pompie. Po godzinie zmierz pH ponownie.`;
                }
            } else if (chemType === 'chlor_szok') {
                const dose = Math.round(volume * 20);
                resTitle.innerHTML = currentLang === 'en'
                    ? '<span style="color:#dc2626;">Shock Chlorine — shock disinfection ⚡</span>'
                    : '<span style="color:#dc2626;">Chlor Szok — dezynfekcja uderzeniowa ⚡</span>';
                resText.innerHTML = currentLang === 'en'
                    ? `Required amount: <strong>approx. ${dose} g</strong> of granules.<br><br><em>How to use:</em><br>1. Ensure pH is in the 7.0–7.4 range.<br>2. Dissolve granules in a bucket of warm water — never pour directly into the pool.<br>3. Add the solution in the evening near the pump inlet nozzle.<br>4. Run the pump for at least 4–6 hours.<br>5. Only enter the water when free chlorine drops to 1.0–1.5 mg/l.`
                    : `Potrzebna ilość: <strong>ok. ${dose} g</strong> granulatu.<br><br><em>Jak użyć:</em><br>1. Sprawdź że pH mieści się w zakresie 7.0–7.4.<br>2. Rozpuść granulat w wiadrze ciepłej wody — nigdy nie sypaj go bezpośrednio do basenu.<br>3. Wlej roztwór wieczorem przy dyszy wlotowej pompy.<br>4. Pracuj pompą co najmniej 4–6 godzin.<br>5. Wejście do wody dopiero gdy wolny chlor spadnie do 1.0–1.5 mg/l.`;
            } else if (chemType === 'antyglon') {
                const s = Math.round(volume * 15), m = Math.round(volume * 5);
                resTitle.innerHTML = currentLang === 'en'
                    ? '<span style="color:#2563eb;">Anti-algae agent 🦠</span>'
                    : '<span style="color:#2563eb;">Środek przeciwglonowy 🦠</span>';
                resText.innerHTML = currentLang === 'en'
                    ? `Recommended doses:<br>- Starter dose: <strong>approx. ${s} ml</strong><br>- Weekly dose: <strong>approx. ${m} ml</strong><br><br><em>How to use:</em> Pour along the pool edge or through the skimmer with the pump running. Best applied in the evening after swimming.`
                    : `Zalecane dawki:<br>- Dawka startowa: <strong>ok. ${s} ml</strong><br>- Dawka cotygodniowa: <strong>ok. ${m} ml</strong><br><br><em>Jak użyć:</em> Wlej wzdłuż brzegu basenu lub przez skimmer przy pracującej pompie. Najlepiej wieczorem po kąpieli.`;
            } else if (chemType === 'flok') {
                const dose = Math.round(volume * 3);
                resTitle.innerHTML = currentLang === 'en'
                    ? '<span style="color:#7c3aed;">Flocculant / Coagulant — water clarification ✨</span>'
                    : '<span style="color:#7c3aed;">Flokulant / Koagulant — klarowanie wody ✨</span>';
                resText.innerHTML = currentLang === 'en'
                    ? `Required amount: <strong>approx. ${dose} ml</strong> of liquid product.<br><br><em>How to use:</em><br>1. Pour in several places around the pool at pH approx. 7.2.<br>2. Run the pump for a few hours.<br>3. Switch off the pump overnight (8–10 hrs) — particles will settle to the bottom.<br>4. In the morning, vacuum the bottom directing water away from the pool.`
                    : `Potrzebna ilość: <strong>ok. ${dose} ml</strong> preparatu płynnego.<br><br><em>Jak użyć:</em><br>1. Wlej w kilku miejscach basenu przy pH ok. 7.2.<br>2. Pracuj pompą przez kilka godzin.<br>3. Wyłącz pompę na noc (8–10 godz.) — drobiny opadną na dno.<br>4. Rano odkurz dno odprowadzając wodę poza basen.`;
            } else if (chemType === 'wit_c') {
                const dose = Math.round(volume * 50);
                resTitle.innerHTML = currentLang === 'en'
                    ? '<span style="color:#d97706;">Ascorbic acid — brown water from well 🍋</span>'
                    : '<span style="color:#d97706;">Kwas askorbinowy — brązowa woda ze studni 🍋</span>';
                resText.innerHTML = currentLang === 'en'
                    ? `Required amount: <strong>approx. ${dose} g</strong> of pure ascorbic acid.<br><br><em>How to use:</em> Dissolve in a bucket of water and spread across the pool surface. Water should regain clarity within minutes. Note: Vitamin C lowers pH — check the reading after a few hours and add pH Plus if needed.`
                    : `Potrzebna ilość: <strong>ok. ${dose} g</strong> czystego kwasu askorbinowego.<br><br><em>Jak użyć:</em> Rozpuść w wiadrze wody i rozprowadź po powierzchni basenu. Woda powinna odzyskać przejrzystość w kilkanaście minut. Uwaga: witamina C obniża pH — po kilku godzinach sprawdź odczyn i w razie potrzeby dodaj pH Plus.`;
            } else if (chemType.startsWith('custom_')) {
                const chem = userChemicals.find(c => c.id === chemType);
                if (chem) {
                    const dose = chem.dosage * volume;
                    const formatted = dose % 1 === 0 ? dose : dose.toFixed(1);
                    resTitle.innerHTML = `<span style="color:var(--teal-600);">${t('chem.result.title')}</span>`;
                    resText.innerHTML = `${chem.name}: <strong>${formatted} ${chem.unit}</strong>`;
                } else {
                    resTitle.innerHTML = '';
                    resText.innerHTML = t('chem.result.notFound');
                }
            }
        }

        function calculateFiltration() {
            const liters = parseFloat(document.getElementById('filterPoolVolume').value);
            const flow = parseFloat(document.getElementById('filterPumpFlow').value);
            const watts = parseFloat(document.getElementById('filterPumpWatts').value);
            const kwhCost = parseFloat(document.getElementById('filterKwhCost').value);
            const errBox = document.getElementById('filterInputError');
            const resBox = document.getElementById('filterResult');

            if (isNaN(liters) || isNaN(flow) || liters <= 0 || flow <= 0) {
                errBox.classList.remove('d-none'); resBox.classList.add('d-none'); return;
            }
            errBox.classList.add('d-none'); resBox.classList.remove('d-none');

            const t1 = liters / flow;
            const fmt = currentLang === 'en'
                ? h => `${Math.floor(h)} hrs ${Math.round((h - Math.floor(h)) * 60)} min`
                : h => `${Math.floor(h)} godz. i ${Math.round((h - Math.floor(h)) * 60)} min.`;

            document.getElementById('resSingleTurnover').innerText = fmt(t1);
            document.getElementById('resHourlyPercentage').innerText = ((flow / liters) * 100).toFixed(1) + '%';
            document.getElementById('resDoubleTurnover').innerText = fmt(t1 * 2);
            document.getElementById('resTripleTurnover').innerText = fmt(t1 * 3);

            if (!isNaN(watts) && !isNaN(kwhCost) && watts >= 0 && kwhCost >= 0) {
                const kw = watts / 1000;
                document.getElementById('costDouble').innerText = (kw * t1 * 2 * kwhCost).toFixed(2);
                document.getElementById('costTriple').innerText = (kw * t1 * 3 * kwhCost).toFixed(2);
            } else {
                document.getElementById('costDouble').innerText = '0.00';
                document.getElementById('costTriple').innerText = '0.00';
            }
        }

        /* ── DIAGNOSIS ─────────────────────────────────────── */
        window.currentUser = null;
        let userProblems = [];
        let userChemicals = [];

        const problemsData = {
            pl: [
                { id:'zielona', label:'🟢 Zielona lub śliska woda',        icon:'🦠',  title:'Glony — woda zazieleniała',                   desc:'<strong>Co się stało:</strong> Zbyt niski chlor, zbyt wysokie pH albo brak ochrony przed algami. Ciepło przyspiesza ich wzrost.<br><br><strong>Co zrobić:</strong><ol class="mt-2"><li>Obniż pH do wartości 7.0.</li><li>Wlej podwójną dawkę Chlor Szok.</li><li>Dodaj uderzeniową dawkę środka przeciwglonowego.</li><li>Filtruj bez przerwy przez 24–48 godzin.</li><li>Odkurz dno z osadu po martwych glonach.</li></ol>' },
                { id:'metna',   label:'☁️ Mętna lub mleczna woda',          icon:'🌫️', title:'Zmętnienie — woda straciła przejrzystość',     desc:'<strong>Co się stało:</strong> Zaburzone pH, zapchany filtr, martwe glony w zawiesinie lub nadmiar substancji organicznych (pot, krem).<br><br><strong>Co zrobić:</strong><ol class="mt-2"><li>Ustaw pH na 7.0–7.4.</li><li>Wyczyść lub wymień wkład filtrujący (przy filtrze piaskowym: płukanie wsteczne).</li><li>Wydłuż dobowy czas pracy pompy.</li><li>Wlej flokulant — sklei drobiny w płatki gotowe do odkurzenia.</li></ol>' },
                { id:'zapach',  label:'🤧 Ostry zapach i pieczenie oczu',   icon:'🧪',  title:'Chloraminy — zużyty chlor w wodzie',           desc:'<strong>Co się stało:</strong> Wbrew pozorom za dużo chloru to nie problem — to jego niedobór. Zapach pochodzi z chloramin, czyli chloru związanego z zanieczyszczeniami organicznymi.<br><br><strong>Co zrobić:</strong><ol class="mt-2"><li>Ustaw pH na 7.0–7.4.</li><li>Wykonaj mocne <strong>chlorowanie szokowe</strong> — wysoka dawka rozbija chloraminy i uwalnia wolny chlor.</li><li>Pozostaw basen otwarty — gazy muszą odparować.</li></ol>' },
                { id:'brazowa', label:'🟤 Brązowa woda po chlorowaniu',      icon:'🚰',  title:'Żelazo w wodzie — typowe przy studni',         desc:'<strong>Co się stało:</strong> Woda zawiera żelazo lub mangan. Chlor utlenia te metale — stąd rdzawy lub brązowy kolor.<br><br><strong>Co zrobić:</strong><ol class="mt-2"><li>Wsyp do wody <strong>kwas askorbinowy</strong> (Witamina C) — woda odzyska przejrzystość w kilkanaście minut.</li><li>Użyj preparatu wychwytującego metale (np. Metal Magic) — pozbędzie się ich fizycznie z obiegu.</li></ol>' }
            ],
            en: [
                { id:'zielona', label:'🟢 Green or slimy water',            icon:'🦠',  title:'Algae — water has turned green',               desc:'<strong>What happened:</strong> Chlorine too low, pH too high, or no algae protection. Heat accelerates their growth.<br><br><strong>What to do:</strong><ol class="mt-2"><li>Lower pH to 7.0.</li><li>Add a double dose of Shock Chlorine.</li><li>Add a shock dose of anti-algae agent.</li><li>Run filtration non-stop for 24–48 hours.</li><li>Vacuum the bottom to remove dead algae sediment.</li></ol>' },
                { id:'metna',   label:'☁️ Cloudy or milky water',           icon:'🌫️', title:'Turbidity — water lost its clarity',           desc:'<strong>What happened:</strong> Disturbed pH, clogged filter, dead algae in suspension, or excess organic matter (sweat, sunscreen).<br><br><strong>What to do:</strong><ol class="mt-2"><li>Set pH to 7.0–7.4.</li><li>Clean or replace the filter cartridge (sand filter: backwash).</li><li>Extend daily pump run time.</li><li>Add flocculant — clumps particles ready for vacuuming.</li></ol>' },
                { id:'zapach',  label:'🤧 Sharp smell & burning eyes',      icon:'🧪',  title:'Chloramines — depleted chlorine in water',     desc:'<strong>What happened:</strong> Contrary to appearances, the problem isn\'t too much chlorine — it\'s too little free chlorine. The smell comes from chloramines, chlorine bound to organic contaminants.<br><br><strong>What to do:</strong><ol class="mt-2"><li>Set pH to 7.0–7.4.</li><li>Perform strong <strong>shock chlorination</strong> — a high dose breaks chloramine bonds and releases free chlorine.</li><li>Leave the pool uncovered so gases can evaporate.</li></ol>' },
                { id:'brazowa', label:'🟤 Brown water after chlorinating',   icon:'🚰',  title:'Iron in water — typical with well water',      desc:'<strong>What happened:</strong> Water contains iron or manganese. Chlorine oxidises these metals — causing rusty or brown discolouration.<br><br><strong>What to do:</strong><ol class="mt-2"><li>Add <strong>ascorbic acid</strong> (Vitamin C) — water will regain clarity within minutes.</li><li>Use a metal-sequestering agent (e.g. Metal Magic) to physically remove metals from circulation.</li></ol>' }
            ]
        };

        function getDefaultProblems() { return problemsData[currentLang] ?? problemsData.pl; }

        function initProblemSolver() {
            const container = document.getElementById('problemButtons');
            if (!container) return;
            container.innerHTML = '';
            [...getDefaultProblems(), ...userProblems].forEach(prob => {
                const btn = document.createElement('button');
                btn.className = 'diagnosis-btn' + (prob.custom ? ' diagnosis-btn-custom' : '');
                btn.innerText = prob.label;
                btn.onclick = () => showSolution(prob);
                if (prob.custom && prob.firestoreId) {
                    const wrapper = document.createElement('span');
                    wrapper.className = 'd-inline-flex align-items-center gap-1';
                    const del = document.createElement('button');
                    del.type = 'button';
                    del.className = 'btn btn-sm p-0 lh-1';
                    del.style.cssText = 'color:var(--text-secondary);font-size:.85rem;opacity:.6;';
                    del.title = t('modal.deleteConfirm');
                    del.textContent = '×';
                    del.onclick = (e) => { e.stopPropagation(); deleteCustomProblem(prob.firestoreId); };
                    wrapper.appendChild(btn);
                    wrapper.appendChild(del);
                    container.appendChild(wrapper);
                } else {
                    container.appendChild(btn);
                }
            });
        }

        function showSolution(prob) {
            const box = document.getElementById('solutionBox');
            document.getElementById('solTitle').innerText = prob.title;
            document.getElementById('solDesc').innerHTML = prob.desc;
            document.getElementById('solIcon').innerText = prob.icon;
            box.classList.remove('d-none');
            box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        /* ── AUTH & FIRESTORE ──────────────────────────────── */
        window.toggleLogin = function () {
            if (window.currentUser && window.signOutFirebase) {
                window.signOutFirebase();
            } else if (window.signInWithGoogle) {
                window.signInWithGoogle().catch(err => alert(t('auth.loginError') + ': ' + err.message));
            } else {
                alert('Firebase niedostępny. Sprawdź połączenie z internetem.');
            }
        };

        window.handleAuthStateChanged = async function (user) {
            const icon          = document.getElementById('authIcon');
            const text          = document.getElementById('authText');
            const addBtn        = document.getElementById('addDiagBtn');
            const diagHint      = document.getElementById('addDiagHint');
            const chemLoginHint = document.getElementById('chemLoginHint');
            if (user) {
                window.currentUser = user;
                icon.textContent = '👤';
                text.textContent = t('auth.logout') + ' (' + user.displayName.split(' ')[0] + ')';
                if (addBtn)        addBtn.classList.remove('d-none');
                if (diagHint)      diagHint.classList.add('d-none');
                if (chemLoginHint) chemLoginHint.classList.add('d-none');
                await window.fetchCloudProblems();
                await window.fetchCloudChemicals();
            } else {
                window.currentUser = null;
                icon.textContent = '☁️';
                text.textContent = t('auth.login');
                if (addBtn)        addBtn.classList.add('d-none');
                if (diagHint)      diagHint.classList.remove('d-none');
                if (chemLoginHint) chemLoginHint.classList.remove('d-none');
                userProblems = [];
                userChemicals = [];
                initProblemSolver();
                renderChemicalSelect();
            }
        };

        window.fetchCloudProblems = async function () {
            userProblems = [];
            if (!window.currentUser || !window.firebaseDb) return;
            try {
                const q = window.query(window.collectionRef(window.firebaseDb, 'users', window.currentUser.uid, 'diagnoses'));
                const snap = await window.getDocs(q);
                snap.forEach(doc => userProblems.push({ ...doc.data(), firestoreId: doc.id, custom: true }));
                initProblemSolver();
            } catch (e) {
                console.error('Firestore fetch error', e);
            }
        };

        window.saveCustomProblem = async function () {
            if (!window.currentUser) return;
            const icon  = document.getElementById('cpIcon').value.trim() || '⚠️';
            const label = document.getElementById('cpLabel').value.trim();
            const title = document.getElementById('cpTitle').value.trim();
            const desc  = document.getElementById('cpDesc').value.trim();
            if (!label || !title || !desc) { alert('Wypełnij wszystkie pola.'); return; }

            const problem = {
                id: 'custom_' + Date.now(),
                label: icon + ' ' + label,
                title,
                desc: '<span class="badge mb-2" style="background:var(--teal-500);font-size:.7rem;">Twoja diagnoza</span><br>' + desc.replace(/\n/g, '<br>'),
                icon,
                custom: true,
                timestamp: Date.now()
            };

            const saveBtn = document.querySelector('#diagModal .modal-footer .btn-teal');
            if (saveBtn) saveBtn.disabled = true;
            try {
                await window.addFirestoreDoc(window.collectionRef(window.firebaseDb, 'users', window.currentUser.uid, 'diagnoses'), problem);
                userProblems.push(problem);
                initProblemSolver();
                bootstrap.Modal.getInstance(document.getElementById('diagModal')).hide();
                document.getElementById('diagForm').reset();
                document.getElementById('cpIcon').value = '⚠️';
                showToast(t('toast.saved'));
                showSolution(problem);
            } catch (e) {
                console.error(e);
                alert(currentLang === 'en'
                    ? 'Could not save your diagnosis — check your internet connection and try again.'
                    : 'Nie udało się zapisać diagnozy — sprawdź połączenie z internetem i spróbuj ponownie.');
            } finally {
                if (saveBtn) saveBtn.disabled = false;
            }
        };

        window.deleteCustomProblem = async function (firestoreId) {
            if (!window.currentUser || !window.firebaseDb) return;
            if (!confirm(t('modal.deleteConfirm'))) return;
            try {
                const ref = window.docRef(window.firebaseDb, 'users', window.currentUser.uid, 'diagnoses', firestoreId);
                await window.deleteFirestoreDoc(ref);
                userProblems = userProblems.filter(p => p.firestoreId !== firestoreId);
                initProblemSolver();
            } catch (e) {
                console.error(e);
                alert(currentLang === 'en'
                    ? 'Could not delete the diagnosis — check your internet connection and try again.'
                    : 'Nie udało się usunąć diagnozy — sprawdź połączenie z internetem i spróbuj ponownie.');
            }
        };

        function showToast(msg) {
            const el = document.getElementById('saveToast');
            const msgEl = document.getElementById('saveToastMsg');
            if (!el) return;
            if (msgEl) msgEl.textContent = msg;
            bootstrap.Toast.getOrCreateInstance(el, { delay: 3000 }).show();
        }

        /* ── CUSTOM CHEMICALS ──────────────────────────────── */
        window.fetchCloudChemicals = async function () {
            userChemicals = [];
            if (!window.currentUser || !window.firebaseDb) return;
            try {
                const q = window.query(window.collectionRef(window.firebaseDb, 'users', window.currentUser.uid, 'chemicals'));
                const snap = await window.getDocs(q);
                snap.forEach(doc => userChemicals.push(doc.data()));
                renderChemicalSelect();
            } catch (e) {
                console.error('Firestore chemicals fetch error', e);
            }
        };

        function renderChemicalSelect() {
            const group = document.getElementById('customChemGroup');
            if (!group) return;
            group.innerHTML = '';
            group.label = t('chem.groupLabel');
            if (!window.currentUser) {
                const opt = document.createElement('option');
                opt.disabled = true;
                opt.textContent = t('chem.modal.loginPrompt');
                group.appendChild(opt);
                return;
            }
            if (userChemicals.length === 0) {
                const opt = document.createElement('option');
                opt.disabled = true;
                opt.textContent = t('chem.modal.noSaved');
                group.appendChild(opt);
                return;
            }
            userChemicals.forEach(chem => {
                const opt = document.createElement('option');
                opt.value = chem.id;
                opt.textContent = `${chem.name} (${chem.dosage} ${chem.unit}/m³)`;
                group.appendChild(opt);
            });
        }

        window.openCustomChemicalModal = function () {
            if (!window.currentUser) {
                alert(t('chem.modal.loginRequired'));
                return;
            }
            new bootstrap.Modal(document.getElementById('customChemModal')).show();
        };

        window.closeCustomChemicalModal = function () {
            const modal = bootstrap.Modal.getInstance(document.getElementById('customChemModal'));
            if (modal) modal.hide();
            document.getElementById('ccName').value = '';
            document.getElementById('ccDosage').value = '';
            document.getElementById('ccUnit').value = 'g';
        };

        window.saveCustomChemicalToCloud = async function () {
            if (!window.currentUser) return;
            const name   = document.getElementById('ccName').value.trim();
            const dosage = parseFloat(document.getElementById('ccDosage').value);
            const unit   = document.getElementById('ccUnit').value;

            if (!name || isNaN(dosage) || dosage <= 0) {
                alert(t('chem.modal.validationError'));
                return;
            }

            const chem = {
                id: 'custom_' + Date.now(),
                name,
                dosage,
                unit,
                timestamp: Date.now()
            };

            const saveBtn = document.querySelector('#customChemModal .modal-footer .btn-teal');
            if (saveBtn) saveBtn.disabled = true;
            try {
                await window.addFirestoreDoc(
                    window.collectionRef(window.firebaseDb, 'users', window.currentUser.uid, 'chemicals'),
                    chem
                );
                userChemicals.push(chem);
                renderChemicalSelect();
                window.closeCustomChemicalModal();
                showToast(t('toast.saved'));
                document.getElementById('chemicalType').value = chem.id;
                onChemicalChange();
                calculateDosage();
            } catch (e) {
                console.error(e);
                alert(t('chem.modal.saveError'));
            } finally {
                if (saveBtn) saveBtn.disabled = false;
            }
        };

        /* ── INIT ──────────────────────────────────────────── */
        document.addEventListener('DOMContentLoaded', function () {
            const saved = localStorage.getItem('pool-theme') || 'light';
            applyTheme(saved);

            const isDark = saved === 'dark';
            const textColor = isDark ? '#7a9ab8' : '#4b7a7a';
            const gridColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)';

            phChartInstance = new Chart(document.getElementById('phChart').getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['Skala pH'],
                    datasets: [
                        { label: 'Zbyt Kwasowa (0 – 6.9)', data: [6.9], backgroundColor: 'rgba(251,191,36,0.75)', borderWidth: 0 },
                        { label: 'Idealna (7.0 – 7.4)', data: [0.5], backgroundColor: 'rgba(20,184,166,0.8)', borderWidth: 0 },
                        { label: 'Zbyt Zasadowa (7.5 – 14)', data: [6.6], backgroundColor: 'rgba(239,68,68,0.7)', borderWidth: 0 }
                    ]
                },
                options: {
                    indexAxis: 'y', responsive: true, maintainAspectRatio: false,
                    plugins: {
                        tooltip: { callbacks: { label: ctx => ctx.dataset.label } },
                        legend: { position: 'bottom', labels: { color: textColor, padding: 20, font: { size: 12 } } },
                        title: { display: true, text: 'Optymalne pH wody basenowej — skala wizualna', color: isDark ? '#c8d8e8' : '#1a3a3a', font: { size: 14, weight: '600' }, padding: { bottom: 16 } }
                    },
                    scales: {
                        x: { stacked: true, max: 14, title: { display: true, text: 'Wartość pH', color: textColor }, ticks: { color: textColor }, grid: { color: gridColor } },
                        y: { stacked: true, display: false }
                    }
                }
            });

            setLang(currentLang);
            setPoolSize(9000);
            selectMethod('chlor');
            initProblemSolver();
            renderChemicalSelect();
            calculateFiltration();
        });
