// data.js — DinoExplorer data layer
// All taxonomic groups and dinosaur species live here.
// Every other module imports from this file.

export const GRUPOS = {
  "dinosauria": {
    id: "dinosauria",
    nombre: "Dinosauria",
    descripcion: "Los dinosaurios son un grupo de reptiles arcosaurios que dominaron los ecosistemas terrestres durante más de 160 millones de años. Aparecieron en el Triásico y, exceptuando a las aves, se extinguieron al final del Cretácico.",
    padre: null,
    hijos: ["saurischia", "ornithischia"]
  },

  // === SAURISCHIA ===
  "saurischia": {
    id: "saurischia",
    nombre: "Saurischia",
    descripcion: "Los saurisquios son uno de los dos grandes órdenes de dinosaurios, caracterizados originalmente por una pelvis con disposición similar a la de los lagartos. Incluyen a los gigantescos saurópodos y a todos los terópodos, incluidas las aves actuales.",
    padre: "dinosauria",
    hijos: ["eoraptoridae", "herrerasauridae", "sauropodomorpha", "theropoda"]
  },

  "eoraptoridae": {
    id: "eoraptoridae",
    nombre: "Eoraptoridae",
    descripcion: "Familia de dinosaurios basales del Triásico tardío de América del Sur, representada por Eoraptor lunensis. Son considerados uno de los grupos más primitivos dentro de Dinosauria, con características mezcladas de carnívoros y herbívoros.",
    padre: "saurischia",
    hijos: []
  },

  "herrerasauridae": {
    id: "herrerasauridae",
    nombre: "Herrerasauridae",
    descripcion: "Familia de dinosaurios depredadores basales del Triásico tardío de América del Sur. Los herrerasáuridos son uno de los grupos de dinosaurios carnívoros más antiguos conocidos, con una posición filogenética debatida entre los terópodos basales.",
    padre: "saurischia",
    hijos: []
  },

  "sauropodomorpha": {
    id: "sauropodomorpha",
    nombre: "Sauropodomorpha",
    descripcion: "Subgrupo de saurisquios herbívoros con cuello largo, cabeza pequeña y cuerpo robusto. Incluye a los primeros dinosaurios grandes del Triásico y a los colosales saurópodos del Jurásico y Cretácico.",
    padre: "saurischia",
    hijos: ["plateosauridae", "sauropoda"]
  },

  "plateosauridae": {
    id: "plateosauridae",
    nombre: "Plateosauridae",
    descripcion: "Familia de sauropodomorfos basales del Triásico tardío, conocidos como prosaurópodos. Fueron de los primeros dinosaurios verdaderamente grandes, bípedos facultativos con largos cuellos y dientes en forma de hoja.",
    padre: "sauropodomorpha",
    hijos: []
  },

  "sauropoda": {
    id: "sauropoda",
    nombre: "Sauropoda",
    descripcion: "Los saurópodos fueron los animales terrestres más grandes que han existido, con cuellos y colas extremadamente largos y cuerpos sostenidos por cuatro patas columnares. Dominaron los ecosistemas herbívoros del Jurásico y Cretácico.",
    padre: "sauropodomorpha",
    hijos: ["diplodocidae", "brachiosauridae", "titanosauria"]
  },

  "diplodocidae": {
    id: "diplodocidae",
    nombre: "Diplodocidae",
    descripcion: "Familia de saurópodos del Jurásico caracterizados por cuellos y colas extraordinariamente largas y delgadas. Tenían dientes en forma de clavija agrupados en la parte frontal del hocico, ideales para arrancar vegetación.",
    padre: "sauropoda",
    hijos: []
  },

  "brachiosauridae": {
    id: "brachiosauridae",
    nombre: "Brachiosauridae",
    descripcion: "Familia de saurópodos con patas delanteras más largas que las traseras, lo que les daba una postura inclinada hacia arriba, similar a la de una jirafa. Esto les permitía alcanzar el follaje de los árboles más altos.",
    padre: "sauropoda",
    hijos: []
  },

  "titanosauria": {
    id: "titanosauria",
    nombre: "Titanosauria",
    descripcion: "Grupo diverso de saurópodos del Cretácico que incluye a los animales terrestres más pesados que han existido. Muchos titanosaurios tenían pequeñas placas óseas dérmicas (osteodermos) incrustadas en la piel.",
    padre: "sauropoda",
    hijos: []
  },

  "theropoda": {
    id: "theropoda",
    nombre: "Theropoda",
    descripcion: "Los terópodos son dinosaurios saurisquios principalmente bípedos y carnívoros, con huesos huecos y patas de tres dedos funcionales. De este grupo evolucionaron las aves modernas, sus únicos descendientes vivos.",
    padre: "saurischia",
    hijos: [
      "megalosauridae",
      "allosauridae",
      "carcharodontosauridae",
      "abelisauridae",
      "ceratosauria",
      "tyrannosauridae",
      "ornithomimosauria",
      "therizinosauridae",
      "oviraptoridae",
      "dromaeosauridae"
    ]
  },

  "megalosauridae": {
    id: "megalosauridae",
    nombre: "Megalosauridae",
    descripcion: "Familia de grandes terópodos depredadores del Jurásico medio al Cretácico temprano. Incluye al primer dinosaurio descrito científicamente, Megalosaurus, y a los espinosáuridos pescadores como Spinosaurus y Baryonyx.",
    padre: "theropoda",
    hijos: []
  },

  "allosauridae": {
    id: "allosauridae",
    nombre: "Allosauridae",
    descripcion: "Familia de grandes terópodos depredadores del Jurásico tardío con cráneos ligeros pero potentes, mandíbulas amplias y crestas sobre los ojos. Eran los superdepredadores de Norteamérica antes de los tiranosáuridos.",
    padre: "theropoda",
    hijos: []
  },

  "carcharodontosauridae": {
    id: "carcharodontosauridae",
    nombre: "Carcharodontosauridae",
    descripcion: "Familia de terópodos colosales del Cretácico, entre los carnívoros terrestres más grandes que jamás hayan existido. Sus dientes serrados, semejantes a los de un tiburón blanco, les dan su nombre.",
    padre: "theropoda",
    hijos: []
  },

  "abelisauridae": {
    id: "abelisauridae",
    nombre: "Abelisauridae",
    descripcion: "Familia de terópodos del Cretácico característicos de Gondwana, con cráneos cortos y altos, brazos diminutos casi inútiles y, a menudo, cuernos o crestas óseas. Fueron los principales depredadores de Sudamérica, África e India.",
    padre: "theropoda",
    hijos: []
  },

  "ceratosauria": {
    id: "ceratosauria",
    nombre: "Ceratosauria",
    descripcion: "Grupo de terópodos primitivos que incluye a algunos de los carnívoros más antiguos. A menudo presentaban crestas o cuernos óseos sobre el cráneo y conservaban rasgos primitivos en pelvis y patas.",
    padre: "theropoda",
    hijos: []
  },

  "tyrannosauridae": {
    id: "tyrannosauridae",
    nombre: "Tyrannosauridae",
    descripcion: "Familia de gigantescos terópodos del Cretácico tardío, con cráneos enormes y mandíbulas capaces de triturar hueso. Sus brazos eran sorprendentemente pequeños, pero sus patas traseras los hacían corredores eficientes.",
    padre: "theropoda",
    hijos: []
  },

  "ornithomimosauria": {
    id: "ornithomimosauria",
    nombre: "Ornithomimosauria",
    descripcion: "Terópodos ligeros y veloces con cuerpos similares a los de un avestruz: cuellos largos, picos desdentados y patas adaptadas para correr. Probablemente eran omnívoros u herbívoros oportunistas.",
    padre: "theropoda",
    hijos: []
  },

  "therizinosauridae": {
    id: "therizinosauridae",
    nombre: "Therizinosauridae",
    descripcion: "Terópodos extraños y herbívoros con cuerpos voluminosos, cuellos largos y enormes garras curvas en las manos. Probablemente estaban cubiertos de plumaje y son uno de los grupos más peculiares de dinosaurios.",
    padre: "theropoda",
    hijos: []
  },

  "oviraptoridae": {
    id: "oviraptoridae",
    nombre: "Oviraptoridae",
    descripcion: "Pequeños y medianos terópodos del Cretácico con picos desdentados, crestas óseas en la cabeza y abundante plumaje. Eran omnívoros y cuidaban activamente de sus nidos, como demuestran numerosos fósiles encontrados incubando huevos.",
    padre: "theropoda",
    hijos: []
  },

  "dromaeosauridae": {
    id: "dromaeosauridae",
    nombre: "Dromaeosauridae",
    descripcion: "Familia de terópodos ágiles y emplumados, conocidos como raptores, con una garra retráctil en forma de hoz en cada pie. Estrechamente emparentados con las aves, eran depredadores inteligentes y rápidos.",
    padre: "theropoda",
    hijos: []
  },

  // === ORNITHISCHIA ===
  "ornithischia": {
    id: "ornithischia",
    nombre: "Ornithischia",
    descripcion: "Los ornitisquios son el segundo gran orden de dinosaurios, todos ellos herbívoros, caracterizados por una pelvis con disposición similar a la de las aves. Incluyen a los acorazados, los con cuernos, los pico de pato y los cabeza dura.",
    padre: "dinosauria",
    hijos: ["thyreophora", "ornithopoda", "marginocephalia"]
  },

  "thyreophora": {
    id: "thyreophora",
    nombre: "Thyreophora",
    descripcion: "Los tireóforos son ornitisquios acorazados con hileras de placas, espinas o nódulos óseos cubriendo el dorso. Caminaban a cuatro patas y se defendían de los depredadores con su armadura y armas caudales.",
    padre: "ornithischia",
    hijos: ["stegosauria", "ankylosauria"]
  },

  "stegosauria": {
    id: "stegosauria",
    nombre: "Stegosauria",
    descripcion: "Grupo de tireóforos del Jurásico y Cretácico temprano caracterizados por dos hileras de grandes placas o espinas óseas a lo largo del dorso, y por las espinas defensivas de la cola, conocidas como tagomizador.",
    padre: "thyreophora",
    hijos: []
  },

  "ankylosauria": {
    id: "ankylosauria",
    nombre: "Ankylosauria",
    descripcion: "Tireóforos del Cretácico cubiertos por una armadura ósea masiva sobre el lomo, los costados y la cabeza. Muchos remataban su cola en un mazo de hueso capaz de romper los huesos de un depredador.",
    padre: "thyreophora",
    hijos: []
  },

  "ornithopoda": {
    id: "ornithopoda",
    nombre: "Ornithopoda",
    descripcion: "Los ornitópodos fueron uno de los grupos de herbívoros más exitosos del Mesozoico, capaces de caminar tanto en dos como en cuatro patas. Incluyen a los hadrosaurios o dinosaurios pico de pato, con sofisticadas baterías dentales.",
    padre: "ornithischia",
    hijos: []
  },

  "marginocephalia": {
    id: "marginocephalia",
    nombre: "Marginocephalia",
    descripcion: "Grupo de ornitisquios que comparten un reborde óseo en la parte posterior del cráneo. Incluye a los dinosaurios con cuernos y volantes (ceratopsios) y a los de cráneo abovedado (paquicefalosaurios).",
    padre: "ornithischia",
    hijos: ["ceratopsia", "pachycephalosauria"]
  },

  "ceratopsia": {
    id: "ceratopsia",
    nombre: "Ceratopsia",
    descripcion: "Ornitisquios herbívoros del Cretácico caracterizados por un pico similar al de un loro y, en las especies más derivadas, por cuernos faciales y un gran volante óseo sobre el cuello. Vivían en manadas en lo que hoy es Asia y Norteamérica.",
    padre: "marginocephalia",
    hijos: []
  },

  "pachycephalosauria": {
    id: "pachycephalosauria",
    nombre: "Pachycephalosauria",
    descripcion: "Ornitisquios bípedos del Cretácico con cráneos abovedados de hueso extremadamente grueso, posiblemente usados en combates de empuje cabeza con cabeza o contra los flancos de rivales. Eran herbívoros u omnívoros pequeños y ágiles.",
    padre: "marginocephalia",
    hijos: []
  }
};

export const DINOS = [
  // ===================== TRIÁSICO =====================
  {
    id: "eoraptor",
    nombre: "Eoraptor lunensis",
    nombreComun: "Eoraptor",
    emoji: "🦎",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "sauropodomorpha",
      familia: "eoraptoridae"
    },
    periodo: "Triásico",
    rangoMa: [231, 228],
    dieta: "Omnívoro",
    longitud: 1,
    peso: 10,
    alturaFosil: 0.4,
    region: ["América del Sur"],
    descubrimiento: { año: 1991, autor: "Paul Sereno y colegas" },
    descripcion: "Eoraptor es uno de los dinosaurios más antiguos conocidos, hallado en la Formación Ischigualasto de Argentina. Era un pequeño bípedo ágil con dientes tanto de herbívoro como de carnívoro, lo que sugiere una dieta omnívora.",
    curiosidad: "Su nombre significa 'ladrón del amanecer', en referencia a su antigüedad casi en los albores de la era de los dinosaurios."
  },
  {
    id: "herrerasaurus",
    nombre: "Herrerasaurus ischigualastensis",
    nombreComun: "Herrerasaurio",
    emoji: "🦖",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "theropoda",
      familia: "herrerasauridae"
    },
    periodo: "Triásico",
    rangoMa: [231, 229],
    dieta: "Carnívoro",
    longitud: 4,
    peso: 350,
    alturaFosil: 1.1,
    region: ["América del Sur"],
    descubrimiento: { año: 1959, autor: "Victorino Herrera (descubridor) y Osvaldo Reig (descriptor)" },
    descripcion: "Herrerasaurus fue uno de los primeros grandes depredadores dinosaurianos, ligero y ágil. Tenía mandíbulas con una articulación deslizante única que le ayudaba a sujetar a sus presas.",
    curiosidad: "Vivió cuando los dinosaurios aún eran una rara minoría entre otros reptiles dominantes del Triásico."
  },
  {
    id: "coelophysis",
    nombre: "Coelophysis bauri",
    nombreComun: "Celofisis",
    emoji: "🦖",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "theropoda",
      familia: "ceratosauria"
    },
    periodo: "Triásico",
    rangoMa: [216, 196],
    dieta: "Carnívoro",
    longitud: 3,
    peso: 20,
    alturaFosil: 1,
    region: ["América del Norte"],
    descubrimiento: { año: 1889, autor: "Edward Drinker Cope" },
    descripcion: "Coelophysis era un terópodo esbelto y ligero, con huesos huecos y un cuello largo y flexible. En Ghost Ranch, Nuevo México, se han encontrado cientos de ejemplares juntos, lo que sugiere comportamiento gregario.",
    curiosidad: "En 1998 viajó al espacio a bordo del transbordador Endeavour, convirtiéndose en uno de los primeros dinosaurios en órbita."
  },
  {
    id: "plateosaurus",
    nombre: "Plateosaurus engelhardti",
    nombreComun: "Plateosaurio",
    emoji: "🦕",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "sauropodomorpha",
      familia: "plateosauridae"
    },
    periodo: "Triásico",
    rangoMa: [214, 204],
    dieta: "Herbívoro",
    longitud: 8,
    peso: 4000,
    alturaFosil: 2.5,
    region: ["Europa"],
    descubrimiento: { año: 1837, autor: "Hermann von Meyer" },
    descripcion: "Plateosaurus fue uno de los primeros dinosaurios verdaderamente grandes, un prosaurópodo bípedo facultativo con un cuello largo y dientes en forma de hoja. Se conocen decenas de esqueletos completos en yacimientos de Alemania, Suiza y Francia.",
    curiosidad: "Es uno de los dinosaurios mejor conocidos del mundo gracias a los más de 100 esqueletos encontrados en la cantera de Trossingen."
  },
  {
    id: "liliensternus",
    nombre: "Liliensternus liliensterni",
    nombreComun: "Liliensternus",
    emoji: "🦖",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "theropoda",
      familia: "ceratosauria"
    },
    periodo: "Triásico",
    rangoMa: [210, 201],
    dieta: "Carnívoro",
    longitud: 5,
    peso: 200,
    alturaFosil: 1.5,
    region: ["Europa"],
    descubrimiento: { año: 1934, autor: "Friedrich von Huene" },
    descripcion: "Liliensternus fue uno de los terópodos más grandes del Triásico europeo, un cazador bípedo y ágil. Probablemente se alimentaba de prosaurópodos como Plateosaurus, con los que compartía su entorno.",
    curiosidad: "Recibió su nombre en honor a Hugo Rühle von Lilienstern, un paleontólogo aficionado alemán."
  },

  // ===================== JURÁSICO =====================
  {
    id: "brachiosaurus",
    nombre: "Brachiosaurus altithorax",
    nombreComun: "Braquiosaurio",
    emoji: "🦕",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "sauropodomorpha",
      familia: "brachiosauridae"
    },
    periodo: "Jurásico",
    rangoMa: [154, 150],
    dieta: "Herbívoro",
    longitud: 22,
    peso: 35000,
    alturaFosil: 9,
    region: ["América del Norte"],
    descubrimiento: { año: 1903, autor: "Elmer S. Riggs" },
    descripcion: "Brachiosaurus tenía patas delanteras más largas que las traseras, una postura única entre los saurópodos. Esto le permitía alcanzar copas de árboles a más de 9 metros del suelo para alimentarse.",
    curiosidad: "Su nombre significa 'lagarto brazo' por sus enormes extremidades delanteras."
  },
  {
    id: "diplodocus",
    nombre: "Diplodocus carnegii",
    nombreComun: "Diplodocus",
    emoji: "🦕",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "sauropodomorpha",
      familia: "diplodocidae"
    },
    periodo: "Jurásico",
    rangoMa: [154, 152],
    dieta: "Herbívoro",
    longitud: 26,
    peso: 15000,
    alturaFosil: 4,
    region: ["América del Norte"],
    descubrimiento: { año: 1878, autor: "Othniel Charles Marsh" },
    descripcion: "Diplodocus es uno de los dinosaurios más largos conocidos, con un cuello esbelto y una cola en forma de látigo. Estudios sugieren que la punta de su cola podía moverse a velocidad supersónica produciendo un chasquido.",
    curiosidad: "El industrial Andrew Carnegie regaló réplicas de 'Dippy' a museos de todo el mundo a principios del siglo XX."
  },
  {
    id: "apatosaurus",
    nombre: "Apatosaurus louisae",
    nombreComun: "Apatosaurio",
    emoji: "🦕",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "sauropodomorpha",
      familia: "diplodocidae"
    },
    periodo: "Jurásico",
    rangoMa: [152, 151],
    dieta: "Herbívoro",
    longitud: 23,
    peso: 22000,
    alturaFosil: 4.5,
    region: ["América del Norte"],
    descubrimiento: { año: 1877, autor: "Othniel Charles Marsh" },
    descripcion: "Apatosaurus era un saurópodo robusto, más corto pero mucho más pesado que su pariente Diplodocus. Durante décadas se le conoció erróneamente como 'Brontosaurus' debido a una confusión taxonómica.",
    curiosidad: "El nombre Brontosaurus fue rehabilitado como género válido en 2015 tras un estudio detallado de sus huesos."
  },
  {
    id: "camarasaurus",
    nombre: "Camarasaurus supremus",
    nombreComun: "Camarasaurio",
    emoji: "🦕",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "sauropodomorpha",
      familia: "brachiosauridae"
    },
    periodo: "Jurásico",
    rangoMa: [155, 145],
    dieta: "Herbívoro",
    longitud: 18,
    peso: 18000,
    alturaFosil: 5,
    region: ["América del Norte"],
    descubrimiento: { año: 1877, autor: "Edward Drinker Cope" },
    descripcion: "Camarasaurus es el saurópodo más común de la Formación Morrison, conocido por sus dientes en forma de cuchara, robustos y adaptados a vegetación dura. Su cráneo corto y alto lo distingue de diplodócidos esbeltos.",
    curiosidad: "Su nombre significa 'lagarto con cámaras' por los huecos de aire en sus vértebras, que aligeraban su esqueleto."
  },
  {
    id: "giraffatitan",
    nombre: "Giraffatitan brancai",
    nombreComun: "Girafatitán",
    emoji: "🦕",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "sauropodomorpha",
      familia: "brachiosauridae"
    },
    periodo: "Jurásico",
    rangoMa: [154, 150],
    dieta: "Herbívoro",
    longitud: 23,
    peso: 35000,
    alturaFosil: 12,
    region: ["África"],
    descubrimiento: { año: 1914, autor: "Werner Janensch" },
    descripcion: "Giraffatitan fue durante décadas considerado una especie africana de Brachiosaurus. Su esqueleto montado en Berlín, de más de 13 metros de altura, es uno de los esqueletos de dinosaurio más grandes expuestos en el mundo.",
    curiosidad: "Su cráneo lucía una espectacular cresta nasal que pudo servir para regular la temperatura o como exhibición."
  },
  {
    id: "stegosaurus",
    nombre: "Stegosaurus stenops",
    nombreComun: "Estegosaurio",
    emoji: "🦖",
    taxonomia: {
      clado: "dinosauria",
      orden: "ornithischia",
      suborden: "thyreophora",
      familia: "stegosauria"
    },
    periodo: "Jurásico",
    rangoMa: [155, 145],
    dieta: "Herbívoro",
    longitud: 9,
    peso: 5000,
    alturaFosil: 4,
    region: ["América del Norte"],
    descubrimiento: { año: 1877, autor: "Othniel Charles Marsh" },
    descripcion: "Stegosaurus es famoso por las dos hileras de grandes placas óseas a lo largo de su lomo y por las cuatro púas defensivas en su cola, llamadas tagomizador. Su cerebro era sorprendentemente pequeño, del tamaño de una nuez.",
    curiosidad: "Las placas probablemente sirvieron para regular la temperatura o para exhibirse ante rivales y parejas."
  },
  {
    id: "kentrosaurus",
    nombre: "Kentrosaurus aethiopicus",
    nombreComun: "Kentrosaurio",
    emoji: "🦖",
    taxonomia: {
      clado: "dinosauria",
      orden: "ornithischia",
      suborden: "thyreophora",
      familia: "stegosauria"
    },
    periodo: "Jurásico",
    rangoMa: [154, 150],
    dieta: "Herbívoro",
    longitud: 4.5,
    peso: 700,
    alturaFosil: 1.5,
    region: ["África"],
    descubrimiento: { año: 1915, autor: "Edwin Hennig" },
    descripcion: "Kentrosaurus era un estegosaurio africano más pequeño y mucho más espinoso que su primo americano. Sus largas púas defensivas se extendían desde la cadera hasta la punta de la cola.",
    curiosidad: "Su nombre significa 'lagarto puntiagudo' y se han encontrado más de 70 ejemplares en el yacimiento de Tendaguru, Tanzania."
  },
  {
    id: "allosaurus",
    nombre: "Allosaurus fragilis",
    nombreComun: "Alosaurio",
    emoji: "🦖",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "theropoda",
      familia: "allosauridae"
    },
    periodo: "Jurásico",
    rangoMa: [155, 145],
    dieta: "Carnívoro",
    longitud: 9,
    peso: 2000,
    alturaFosil: 3,
    region: ["América del Norte", "Europa"],
    descubrimiento: { año: 1877, autor: "Othniel Charles Marsh" },
    descripcion: "Allosaurus fue el superdepredador dominante de la Formación Morrison durante el Jurásico tardío. Tenía un cráneo grande pero ligero con crestas óseas sobre los ojos y mandíbulas que se abrían enormemente.",
    curiosidad: "Algunos estudios sugieren que usaba sus mandíbulas como un hacha, golpeando a sus presas en lugar de morderlas como un león."
  },
  {
    id: "saurophaganax",
    nombre: "Saurophaganax maximus",
    nombreComun: "Saurofaganax",
    emoji: "🦖",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "theropoda",
      familia: "allosauridae"
    },
    periodo: "Jurásico",
    rangoMa: [151, 150],
    dieta: "Carnívoro",
    longitud: 11,
    peso: 3000,
    alturaFosil: 3.5,
    region: ["América del Norte"],
    descubrimiento: { año: 1932, autor: "John Willis Stovall" },
    descripcion: "Saurophaganax fue uno de los terópodos más grandes del Jurásico, un pariente cercano y aún más grande de Allosaurus. Sus restos se han hallado principalmente en Oklahoma.",
    curiosidad: "Su nombre significa 'señor de los devoradores de lagartos', un título digno del depredador más grande de su tiempo."
  },
  {
    id: "ceratosaurus",
    nombre: "Ceratosaurus nasicornis",
    nombreComun: "Ceratosaurio",
    emoji: "🦖",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "theropoda",
      familia: "ceratosauria"
    },
    periodo: "Jurásico",
    rangoMa: [153, 148],
    dieta: "Carnívoro",
    longitud: 6,
    peso: 700,
    alturaFosil: 2,
    region: ["América del Norte", "Europa", "África"],
    descubrimiento: { año: 1884, autor: "Othniel Charles Marsh" },
    descripcion: "Ceratosaurus se distingue por un característico cuerno nasal y dos cuernos más pequeños sobre los ojos. Tenía una hilera de pequeñas placas óseas a lo largo del lomo, algo poco común entre los terópodos.",
    curiosidad: "Sus dientes eran tan largos que sobresalían de la mandíbula cerrada, casi como los de un sable."
  },
  {
    id: "dilophosaurus",
    nombre: "Dilophosaurus wetherilli",
    nombreComun: "Dilofosaurio",
    emoji: "🦖",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "theropoda",
      familia: "ceratosauria"
    },
    periodo: "Jurásico",
    rangoMa: [193, 183],
    dieta: "Carnívoro",
    longitud: 7,
    peso: 400,
    alturaFosil: 2.4,
    region: ["América del Norte"],
    descubrimiento: { año: 1954, autor: "Samuel P. Welles" },
    descripcion: "Dilophosaurus es famoso por las dos delgadas crestas paralelas sobre su cráneo, probablemente usadas para exhibición. Fue uno de los primeros grandes terópodos del Jurásico, ágil y de constitución ligera.",
    curiosidad: "La película Jurassic Park lo mostró como un dinosaurio pequeño con collar desplegable y veneno; ambas características son ficticias."
  },
  {
    id: "megalosaurus",
    nombre: "Megalosaurus bucklandii",
    nombreComun: "Megalosaurio",
    emoji: "🦖",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "theropoda",
      familia: "megalosauridae"
    },
    periodo: "Jurásico",
    rangoMa: [168, 166],
    dieta: "Carnívoro",
    longitud: 9,
    peso: 1400,
    alturaFosil: 3,
    region: ["Europa"],
    descubrimiento: { año: 1824, autor: "William Buckland" },
    descripcion: "Megalosaurus tiene el honor de ser el primer dinosaurio en recibir un nombre científico, en 1824. Fue un gran terópodo depredador del Jurásico medio en lo que hoy es Inglaterra.",
    curiosidad: "Charles Dickens lo menciona en la primera página de su novela 'Casa desolada' (1852), una de las primeras apariciones de un dinosaurio en la literatura."
  },
  {
    id: "compsognathus",
    nombre: "Compsognathus longipes",
    nombreComun: "Compsognato",
    emoji: "🦎",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "theropoda",
      familia: "dromaeosauridae"
    },
    periodo: "Jurásico",
    rangoMa: [150, 148],
    dieta: "Carnívoro",
    longitud: 1.2,
    peso: 3,
    alturaFosil: 0.3,
    region: ["Europa"],
    descubrimiento: { año: 1859, autor: "Johann A. Wagner" },
    descripcion: "Compsognathus era uno de los dinosaurios más pequeños conocidos, del tamaño de un pavo. Cazaba pequeños lagartos y otros vertebrados, como demuestra un ejemplar con presa fosilizada en el estómago.",
    curiosidad: "Durante mucho tiempo se le consideró el dinosaurio más pequeño jamás descubierto."
  },
  {
    id: "archaeopteryx",
    nombre: "Archaeopteryx lithographica",
    nombreComun: "Arqueopterix",
    emoji: "🪶",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "theropoda",
      familia: "dromaeosauridae"
    },
    periodo: "Jurásico",
    rangoMa: [150, 148],
    dieta: "Carnívoro",
    longitud: 0.5,
    peso: 1,
    alturaFosil: 0.3,
    region: ["Europa"],
    descubrimiento: { año: 1861, autor: "Hermann von Meyer" },
    descripcion: "Archaeopteryx es el fósil de transición más famoso entre los dinosaurios terópodos y las aves modernas. Tenía plumas y alas, pero también dientes, una larga cola ósea y garras en las manos.",
    curiosidad: "Sus fósiles, hallados en las calizas de Solnhofen (Alemania), son tan detallados que conservan la impresión de cada pluma."
  },
  {
    id: "camptosaurus",
    nombre: "Camptosaurus dispar",
    nombreComun: "Camptosaurio",
    emoji: "🦖",
    taxonomia: {
      clado: "dinosauria",
      orden: "ornithischia",
      suborden: "ornithopoda",
      familia: "ornithopoda"
    },
    periodo: "Jurásico",
    rangoMa: [155, 145],
    dieta: "Herbívoro",
    longitud: 6,
    peso: 500,
    alturaFosil: 2,
    region: ["América del Norte", "Europa"],
    descubrimiento: { año: 1885, autor: "Othniel Charles Marsh" },
    descripcion: "Camptosaurus fue un ornitópodo herbívoro mediano, antepasado evolutivo de los iguanodontes y hadrosaurios. Caminaba habitualmente a cuatro patas pero podía levantarse sobre dos para alcanzar follaje.",
    curiosidad: "Su nombre significa 'lagarto flexible', en alusión a su columna vertebral más flexible que la de sus parientes posteriores."
  },

  // ===================== CRETÁCICO =====================
  {
    id: "tyrannosaurus-rex",
    nombre: "Tyrannosaurus rex",
    nombreComun: "T. rex",
    emoji: "🦖",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "theropoda",
      familia: "tyrannosauridae"
    },
    periodo: "Cretácico",
    rangoMa: [68, 66],
    dieta: "Carnívoro",
    longitud: 12,
    peso: 8000,
    alturaFosil: 4,
    region: ["América del Norte"],
    descubrimiento: { año: 1905, autor: "Henry Fairfield Osborn" },
    descripcion: "Tyrannosaurus rex fue uno de los mayores depredadores terrestres jamás conocidos, con un cráneo de más de 1,5 metros y una mordida capaz de triturar hueso. Vivió en los últimos momentos de la era de los dinosaurios.",
    curiosidad: "Su mordida se estima en más de 35.000 newtons, la más potente de cualquier animal terrestre conocido."
  },
  {
    id: "albertosaurus",
    nombre: "Albertosaurus sarcophagus",
    nombreComun: "Albertosaurio",
    emoji: "🦖",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "theropoda",
      familia: "tyrannosauridae"
    },
    periodo: "Cretácico",
    rangoMa: [71, 68],
    dieta: "Carnívoro",
    longitud: 9,
    peso: 2000,
    alturaFosil: 3,
    region: ["América del Norte"],
    descubrimiento: { año: 1905, autor: "Henry Fairfield Osborn" },
    descripcion: "Albertosaurus fue un tiranosáurido más esbelto y veloz que su pariente T. rex, perfectamente adaptado para cazar hadrosaurios. Los descubrimientos de varios individuos juntos sugieren comportamiento social o de manada.",
    curiosidad: "Recibe su nombre de la provincia de Alberta, Canadá, donde se descubrieron los primeros restos."
  },
  {
    id: "tarbosaurus",
    nombre: "Tarbosaurus bataar",
    nombreComun: "Tarbosaurio",
    emoji: "🦖",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "theropoda",
      familia: "tyrannosauridae"
    },
    periodo: "Cretácico",
    rangoMa: [70, 68],
    dieta: "Carnívoro",
    longitud: 10,
    peso: 5000,
    alturaFosil: 3.5,
    region: ["Asia"],
    descubrimiento: { año: 1955, autor: "Evgeny Maleev" },
    descripcion: "Tarbosaurus es el pariente asiático más cercano de T. rex y el principal depredador del desierto de Gobi durante el Cretácico tardío. Sus brazos eran aún más cortos que los del propio T. rex.",
    curiosidad: "Su nombre significa 'lagarto alarmante' y es uno de los dinosaurios más comunes en la Formación Nemegt de Mongolia."
  },
  {
    id: "velociraptor",
    nombre: "Velociraptor mongoliensis",
    nombreComun: "Velocirráptor",
    emoji: "🦅",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "theropoda",
      familia: "dromaeosauridae"
    },
    periodo: "Cretácico",
    rangoMa: [75, 71],
    dieta: "Carnívoro",
    longitud: 2,
    peso: 15,
    alturaFosil: 0.5,
    region: ["Asia"],
    descubrimiento: { año: 1924, autor: "Henry Fairfield Osborn" },
    descripcion: "Velociraptor era un pequeño depredador emplumado del tamaño de un pavo, con una garra retráctil en forma de hoz en cada pie. Los fósiles muestran inserciones para plumas en sus brazos, confirmando su aspecto avícola.",
    curiosidad: "El famoso fósil del 'combate' lo muestra con sus garras clavadas en la garganta de un Protoceratops, enterrados juntos por una duna."
  },
  {
    id: "deinonychus",
    nombre: "Deinonychus antirrhopus",
    nombreComun: "Deinoniquio",
    emoji: "🦅",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "theropoda",
      familia: "dromaeosauridae"
    },
    periodo: "Cretácico",
    rangoMa: [115, 108],
    dieta: "Carnívoro",
    longitud: 3.4,
    peso: 80,
    alturaFosil: 0.9,
    region: ["América del Norte"],
    descubrimiento: { año: 1969, autor: "John Ostrom" },
    descripcion: "Deinonychus revolucionó la paleontología en los años 60 al mostrar que algunos dinosaurios eran ágiles, activos y posiblemente de sangre caliente. Su garra del pie, en forma de hoz, le da su nombre: 'garra terrible'.",
    curiosidad: "Inspiró a Michael Crichton para los 'velociraptores' de Jurassic Park, que en realidad son del tamaño de un Deinonychus."
  },
  {
    id: "utahraptor",
    nombre: "Utahraptor ostrommaysi",
    nombreComun: "Utahrraptor",
    emoji: "🦅",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "theropoda",
      familia: "dromaeosauridae"
    },
    periodo: "Cretácico",
    rangoMa: [135, 130],
    dieta: "Carnívoro",
    longitud: 6,
    peso: 500,
    alturaFosil: 1.8,
    region: ["América del Norte"],
    descubrimiento: { año: 1993, autor: "James Kirkland, Robert Gaston y Donald Burge" },
    descripcion: "Utahraptor es el dromeosáurido más grande conocido, un depredador del Cretácico temprano del tamaño de un oso. Sus garras del pie podían medir hasta 24 centímetros, capaces de causar heridas terribles.",
    curiosidad: "Se han encontrado bloques con varios Utahraptor juntos, posiblemente una manada que quedó atrapada en arenas movedizas."
  },
  {
    id: "spinosaurus",
    nombre: "Spinosaurus aegyptiacus",
    nombreComun: "Espinosaurio",
    emoji: "🐊",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "theropoda",
      familia: "megalosauridae"
    },
    periodo: "Cretácico",
    rangoMa: [99, 93],
    dieta: "Piscívoro",
    longitud: 15,
    peso: 7500,
    alturaFosil: 4,
    region: ["África"],
    descubrimiento: { año: 1915, autor: "Ernst Stromer" },
    descripcion: "Spinosaurus es probablemente el terópodo carnívoro más grande conocido, con una espectacular vela dorsal y un hocico alargado como el de un cocodrilo. Estudios recientes sugieren que era semiacuático y se alimentaba principalmente de peces grandes.",
    curiosidad: "El holotipo original fue destruido en un bombardeo aliado sobre Múnich en 1944; los hallazgos modernos lo han rehabilitado."
  },
  {
    id: "baryonyx",
    nombre: "Baryonyx walkeri",
    nombreComun: "Bariónix",
    emoji: "🐊",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "theropoda",
      familia: "megalosauridae"
    },
    periodo: "Cretácico",
    rangoMa: [130, 125],
    dieta: "Piscívoro",
    longitud: 9.5,
    peso: 1700,
    alturaFosil: 2.5,
    region: ["Europa"],
    descubrimiento: { año: 1986, autor: "Alan Charig y Angela Milner" },
    descripcion: "Baryonyx fue un espinosáurido con un hocico alargado y una enorme garra curva en cada mano, ideal para pescar. En su estómago se encontraron escamas de pez y huesos de un joven Iguanodon, mostrando su dieta variada.",
    curiosidad: "Su nombre significa 'garra pesada', en referencia a su impresionante garra del pulgar de 31 centímetros."
  },
  {
    id: "giganotosaurus",
    nombre: "Giganotosaurus carolinii",
    nombreComun: "Giganotosaurio",
    emoji: "🦖",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "theropoda",
      familia: "carcharodontosauridae"
    },
    periodo: "Cretácico",
    rangoMa: [99, 97],
    dieta: "Carnívoro",
    longitud: 13,
    peso: 8000,
    alturaFosil: 4,
    region: ["América del Sur"],
    descubrimiento: { año: 1995, autor: "Rodolfo Coria y Leonardo Salgado" },
    descripcion: "Giganotosaurus es uno de los carnívoros terrestres más grandes conocidos, rivalizando en tamaño con T. rex. Cazaba en una Argentina cretácica habitada por saurópodos titanosaurios gigantescos.",
    curiosidad: "Su nombre significa 'lagarto gigante del sur' y fue descubierto por un mecánico aficionado, Rubén Carolini."
  },
  {
    id: "carcharodontosaurus",
    nombre: "Carcharodontosaurus saharicus",
    nombreComun: "Carcarodontosaurio",
    emoji: "🦖",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "theropoda",
      familia: "carcharodontosauridae"
    },
    periodo: "Cretácico",
    rangoMa: [99, 94],
    dieta: "Carnívoro",
    longitud: 12.5,
    peso: 7000,
    alturaFosil: 4,
    region: ["África"],
    descubrimiento: { año: 1931, autor: "Ernst Stromer" },
    descripcion: "Carcharodontosaurus es uno de los mayores depredadores que pisaron el norte de África en el Cretácico medio, contemporáneo de Spinosaurus. Sus dientes, largos y serrados, recordaban a los de un tiburón blanco.",
    curiosidad: "Su nombre significa literalmente 'lagarto con dientes de tiburón blanco'."
  },
  {
    id: "carnotaurus",
    nombre: "Carnotaurus sastrei",
    nombreComun: "Carnotauro",
    emoji: "🦖",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "theropoda",
      familia: "abelisauridae"
    },
    periodo: "Cretácico",
    rangoMa: [72, 69],
    dieta: "Carnívoro",
    longitud: 8,
    peso: 1500,
    alturaFosil: 3,
    region: ["América del Sur"],
    descubrimiento: { año: 1985, autor: "José F. Bonaparte" },
    descripcion: "Carnotaurus se distingue por dos cuernos óseos sobre los ojos, un hocico corto y unos brazos diminutos casi atrofiados. Era un corredor veloz, perfectamente adaptado para cazar en las llanuras patagónicas.",
    curiosidad: "Sus brazos eran tan cortos que se cree que solo servían como exhibición, sin función práctica para cazar."
  },
  {
    id: "majungasaurus",
    nombre: "Majungasaurus crenatissimus",
    nombreComun: "Majungasaurio",
    emoji: "🦖",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "theropoda",
      familia: "abelisauridae"
    },
    periodo: "Cretácico",
    rangoMa: [70, 66],
    dieta: "Carnívoro",
    longitud: 7,
    peso: 1100,
    alturaFosil: 2.5,
    region: ["África"],
    descubrimiento: { año: 1896, autor: "Charles Depéret" },
    descripcion: "Majungasaurus fue el depredador dominante de Madagascar en el Cretácico tardío, con un cuerno único sobre el cráneo. Marcas de dientes en huesos de otros Majungasaurus sugieren que practicaba el canibalismo.",
    curiosidad: "Es uno de los pocos dinosaurios para los que existe evidencia directa y sólida de canibalismo."
  },
  {
    id: "argentinosaurus",
    nombre: "Argentinosaurus huinculensis",
    nombreComun: "Argentinosaurio",
    emoji: "🦕",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "sauropodomorpha",
      familia: "titanosauria"
    },
    periodo: "Cretácico",
    rangoMa: [96, 92],
    dieta: "Herbívoro",
    longitud: 35,
    peso: 75000,
    alturaFosil: 7,
    region: ["América del Sur"],
    descubrimiento: { año: 1993, autor: "José F. Bonaparte y Rodolfo Coria" },
    descripcion: "Argentinosaurus es uno de los animales terrestres más grandes y pesados que jamás haya existido. Sus vértebras alcanzaban 1,3 metros de altura y se estima que sus crías necesitaban más de 15 años para alcanzar el tamaño adulto.",
    curiosidad: "Una sola de sus vértebras puede pesar más que un coche pequeño."
  },
  {
    id: "saltasaurus",
    nombre: "Saltasaurus loricatus",
    nombreComun: "Saltasaurio",
    emoji: "🦕",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "sauropodomorpha",
      familia: "titanosauria"
    },
    periodo: "Cretácico",
    rangoMa: [72, 66],
    dieta: "Herbívoro",
    longitud: 12,
    peso: 7000,
    alturaFosil: 3,
    region: ["América del Sur"],
    descubrimiento: { año: 1980, autor: "José F. Bonaparte y Jaime Powell" },
    descripcion: "Saltasaurus era un titanosaurio relativamente pequeño y robusto, único por la armadura de osteodermos óseos incrustados en su piel. Esta protección lo defendía contra grandes depredadores como los abelisáuridos.",
    curiosidad: "Recibe su nombre de la provincia argentina de Salta, donde se encontraron sus restos."
  },
  {
    id: "triceratops",
    nombre: "Triceratops horridus",
    nombreComun: "Triceratops",
    emoji: "🦏",
    taxonomia: {
      clado: "dinosauria",
      orden: "ornithischia",
      suborden: "marginocephalia",
      familia: "ceratopsia"
    },
    periodo: "Cretácico",
    rangoMa: [68, 66],
    dieta: "Herbívoro",
    longitud: 9,
    peso: 8000,
    alturaFosil: 3,
    region: ["América del Norte"],
    descubrimiento: { año: 1889, autor: "Othniel Charles Marsh" },
    descripcion: "Triceratops es el ceratopsio más famoso, con un enorme volante óseo y tres cuernos faciales que le servían tanto para defenderse como para combatir con rivales. Convivió y rivalizó con T. rex en sus últimos días.",
    curiosidad: "Su cráneo, que puede medir más de 2,5 metros, es uno de los más grandes de cualquier animal terrestre que haya existido."
  },
  {
    id: "protoceratops",
    nombre: "Protoceratops andrewsi",
    nombreComun: "Protoceratops",
    emoji: "🐃",
    taxonomia: {
      clado: "dinosauria",
      orden: "ornithischia",
      suborden: "marginocephalia",
      familia: "ceratopsia"
    },
    periodo: "Cretácico",
    rangoMa: [75, 71],
    dieta: "Herbívoro",
    longitud: 2,
    peso: 180,
    alturaFosil: 0.7,
    region: ["Asia"],
    descubrimiento: { año: 1923, autor: "Walter W. Granger y W. K. Gregory" },
    descripcion: "Protoceratops es un pequeño ceratopsio del tamaño de una oveja, con un volante óseo prominente pero sin cuernos verdaderos. Es uno de los dinosaurios mejor conocidos, con cientos de ejemplares hallados en el desierto del Gobi.",
    curiosidad: "Sus cráneos pudieron inspirar las leyendas griegas del grifo, traídas a Europa por mercaderes escitas."
  },
  {
    id: "styracosaurus",
    nombre: "Styracosaurus albertensis",
    nombreComun: "Estiracosaurio",
    emoji: "🦏",
    taxonomia: {
      clado: "dinosauria",
      orden: "ornithischia",
      suborden: "marginocephalia",
      familia: "ceratopsia"
    },
    periodo: "Cretácico",
    rangoMa: [75, 74],
    dieta: "Herbívoro",
    longitud: 5.5,
    peso: 2700,
    alturaFosil: 1.8,
    region: ["América del Norte"],
    descubrimiento: { año: 1913, autor: "Lawrence Lambe" },
    descripcion: "Styracosaurus es uno de los ceratopsios más espectaculares, con un largo cuerno nasal y una corona de cuernos en su volante. Vivía en manadas en lo que hoy es Alberta, Canadá.",
    curiosidad: "Su nombre significa 'lagarto con pinchos', una descripción muy acertada para su llamativo cráneo."
  },
  {
    id: "pachyrhinosaurus",
    nombre: "Pachyrhinosaurus canadensis",
    nombreComun: "Paquirrinosaurio",
    emoji: "🦏",
    taxonomia: {
      clado: "dinosauria",
      orden: "ornithischia",
      suborden: "marginocephalia",
      familia: "ceratopsia"
    },
    periodo: "Cretácico",
    rangoMa: [73, 69],
    dieta: "Herbívoro",
    longitud: 7,
    peso: 4000,
    alturaFosil: 2,
    region: ["América del Norte"],
    descubrimiento: { año: 1950, autor: "Charles M. Sternberg" },
    descripcion: "Pachyrhinosaurus es inusual entre los ceratopsios porque, en lugar de cuernos, tenía un enorme jefe óseo en lugar del cuerno nasal. Vivía en grandes manadas que recorrían el Ártico de Norteamérica.",
    curiosidad: "Sus huesos se han encontrado en yacimientos masivos con cientos de individuos, posiblemente víctimas de inundaciones."
  },
  {
    id: "parasaurolophus",
    nombre: "Parasaurolophus walkeri",
    nombreComun: "Parasaurolofo",
    emoji: "🦆",
    taxonomia: {
      clado: "dinosauria",
      orden: "ornithischia",
      suborden: "ornithopoda",
      familia: "ornithopoda"
    },
    periodo: "Cretácico",
    rangoMa: [76, 73],
    dieta: "Herbívoro",
    longitud: 10,
    peso: 2500,
    alturaFosil: 3,
    region: ["América del Norte"],
    descubrimiento: { año: 1922, autor: "William Parks" },
    descripcion: "Parasaurolophus es un hadrosaurio famoso por su larga y curva cresta hueca en la cabeza, conectada a las fosas nasales. Esta cresta funcionaba como una caja de resonancia para producir sonidos graves y profundos.",
    curiosidad: "Los científicos han recreado digitalmente el sonido de su cresta, similar al de un cuerno alpino."
  },
  {
    id: "edmontosaurus",
    nombre: "Edmontosaurus annectens",
    nombreComun: "Edmontosaurio",
    emoji: "🦆",
    taxonomia: {
      clado: "dinosauria",
      orden: "ornithischia",
      suborden: "ornithopoda",
      familia: "ornithopoda"
    },
    periodo: "Cretácico",
    rangoMa: [73, 66],
    dieta: "Herbívoro",
    longitud: 12,
    peso: 4000,
    alturaFosil: 3.5,
    region: ["América del Norte"],
    descubrimiento: { año: 1917, autor: "Lawrence Lambe" },
    descripcion: "Edmontosaurus fue uno de los hadrosaurios más grandes y exitosos, con un característico pico de pato y baterías dentales con cientos de dientes. Vivía en enormes manadas que recorrían las llanuras costeras del Cretácico final.",
    curiosidad: "Se han encontrado momias con piel fosilizada que conservan detalles de escamas y hasta colores parciales."
  },
  {
    id: "iguanodon",
    nombre: "Iguanodon bernissartensis",
    nombreComun: "Iguanodonte",
    emoji: "🦖",
    taxonomia: {
      clado: "dinosauria",
      orden: "ornithischia",
      suborden: "ornithopoda",
      familia: "ornithopoda"
    },
    periodo: "Cretácico",
    rangoMa: [126, 122],
    dieta: "Herbívoro",
    longitud: 10,
    peso: 3500,
    alturaFosil: 2.7,
    region: ["Europa"],
    descubrimiento: { año: 1825, autor: "Gideon Mantell" },
    descripcion: "Iguanodon fue uno de los primeros dinosaurios descritos y un ornitópodo grande con un pulgar puntiagudo en forma de espolón. Podía caminar tanto en dos como en cuatro patas, alternando posturas según necesidad.",
    curiosidad: "En 1878 se descubrieron en Bernissart, Bélgica, 38 esqueletos casi completos en una mina de carbón, un hallazgo histórico."
  },
  {
    id: "hypsilophodon",
    nombre: "Hypsilophodon foxii",
    nombreComun: "Hipsilofodonte",
    emoji: "🦎",
    taxonomia: {
      clado: "dinosauria",
      orden: "ornithischia",
      suborden: "ornithopoda",
      familia: "ornithopoda"
    },
    periodo: "Cretácico",
    rangoMa: [130, 125],
    dieta: "Herbívoro",
    longitud: 1.8,
    peso: 20,
    alturaFosil: 0.6,
    region: ["Europa"],
    descubrimiento: { año: 1869, autor: "Thomas Henry Huxley" },
    descripcion: "Hypsilophodon era un pequeño ornitópodo ágil y veloz, parecido a una gacela. Vivía en la zona que hoy es la isla de Wight, en Reino Unido, donde se han recuperado decenas de ejemplares.",
    curiosidad: "Durante mucho tiempo se pensó erróneamente que vivía en los árboles, una idea hoy descartada."
  },
  {
    id: "ankylosaurus",
    nombre: "Ankylosaurus magniventris",
    nombreComun: "Anquilosaurio",
    emoji: "🐢",
    taxonomia: {
      clado: "dinosauria",
      orden: "ornithischia",
      suborden: "thyreophora",
      familia: "ankylosauria"
    },
    periodo: "Cretácico",
    rangoMa: [68, 66],
    dieta: "Herbívoro",
    longitud: 8,
    peso: 6000,
    alturaFosil: 1.7,
    region: ["América del Norte"],
    descubrimiento: { año: 1908, autor: "Barnum Brown" },
    descripcion: "Ankylosaurus es el anquilosáurido más grande conocido, un verdadero tanque blindado con osteodermos cubriendo el lomo y un mazo óseo en la cola. Convivió con T. rex y podía defenderse de su mordida con un golpe demoledor.",
    curiosidad: "Un golpe de su mazo caudal podía romper los huesos de un tiranosaurio, según estudios biomecánicos."
  },
  {
    id: "euoplocephalus",
    nombre: "Euoplocephalus tutus",
    nombreComun: "Euoplocéfalo",
    emoji: "🐢",
    taxonomia: {
      clado: "dinosauria",
      orden: "ornithischia",
      suborden: "thyreophora",
      familia: "ankylosauria"
    },
    periodo: "Cretácico",
    rangoMa: [76, 70],
    dieta: "Herbívoro",
    longitud: 6,
    peso: 2500,
    alturaFosil: 1.5,
    region: ["América del Norte"],
    descubrimiento: { año: 1902, autor: "Lawrence Lambe" },
    descripcion: "Euoplocephalus tenía una armadura tan completa que incluso sus párpados estaban protegidos por placas óseas móviles. Como Ankylosaurus, también remataba su cola con un mazo defensivo.",
    curiosidad: "Su nombre significa 'cabeza bien armada', reflejando su impresionante protección craneal."
  },
  {
    id: "pachycephalosaurus",
    nombre: "Pachycephalosaurus wyomingensis",
    nombreComun: "Paquicefalosaurio",
    emoji: "🦏",
    taxonomia: {
      clado: "dinosauria",
      orden: "ornithischia",
      suborden: "marginocephalia",
      familia: "pachycephalosauria"
    },
    periodo: "Cretácico",
    rangoMa: [70, 66],
    dieta: "Omnívoro",
    longitud: 4.5,
    peso: 450,
    alturaFosil: 1.8,
    region: ["América del Norte"],
    descubrimiento: { año: 1943, autor: "Barnum Brown y Erich Maren Schlaikjer" },
    descripcion: "Pachycephalosaurus es famoso por su cráneo abovedado de hasta 25 cm de grosor, rodeado por pequeñas púas óseas. Su cúpula craneal pudo usarse para combates de empuje contra rivales o flancos de oponentes.",
    curiosidad: "Su cráneo es tan grueso que durante años se pensó que servía para topetazos como los carneros, idea que aún se debate."
  },
  {
    id: "stygimoloch",
    nombre: "Stygimoloch spinifer",
    nombreComun: "Estigimoloc",
    emoji: "🦏",
    taxonomia: {
      clado: "dinosauria",
      orden: "ornithischia",
      suborden: "marginocephalia",
      familia: "pachycephalosauria"
    },
    periodo: "Cretácico",
    rangoMa: [68, 66],
    dieta: "Omnívoro",
    longitud: 3,
    peso: 80,
    alturaFosil: 1.2,
    region: ["América del Norte"],
    descubrimiento: { año: 1983, autor: "Peter Galton y Hans-Dieter Sues" },
    descripcion: "Stygimoloch tenía una cúpula craneal más pequeña que la de Pachycephalosaurus pero estaba rodeada por largas púas óseas. Su nombre, 'demonio del río Estigia', evoca su aspecto diabólico.",
    curiosidad: "Algunos paleontólogos creen que Stygimoloch era en realidad una etapa juvenil de Pachycephalosaurus, no una especie distinta."
  },
  {
    id: "therizinosaurus",
    nombre: "Therizinosaurus cheloniformis",
    nombreComun: "Terizinosaurio",
    emoji: "🦥",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "theropoda",
      familia: "therizinosauridae"
    },
    periodo: "Cretácico",
    rangoMa: [72, 68],
    dieta: "Herbívoro",
    longitud: 10,
    peso: 5000,
    alturaFosil: 4,
    region: ["Asia"],
    descubrimiento: { año: 1954, autor: "Evgeny Maleev" },
    descripcion: "Therizinosaurus es uno de los dinosaurios más extraños: un terópodo herbívoro con cuello largo, cuerpo robusto y enormes garras curvas en las manos, las más largas de cualquier animal conocido. Probablemente estaba cubierto de plumaje.",
    curiosidad: "Sus garras podían medir hasta un metro, pero servían más para alcanzar ramas o defenderse que para cazar."
  },
  {
    id: "gallimimus",
    nombre: "Gallimimus bullatus",
    nombreComun: "Galimimo",
    emoji: "🦃",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "theropoda",
      familia: "ornithomimosauria"
    },
    periodo: "Cretácico",
    rangoMa: [70, 68],
    dieta: "Omnívoro",
    longitud: 6,
    peso: 450,
    alturaFosil: 2,
    region: ["Asia"],
    descubrimiento: { año: 1972, autor: "Rinchen Barsbold, Halszka Osmólska y Ewa Roniewicz" },
    descripcion: "Gallimimus era el ornitomimosaurio más grande conocido, similar en aspecto a un avestruz gigante desdentado. Sus largas patas le permitían alcanzar velocidades de hasta 50 km/h para escapar de los depredadores.",
    curiosidad: "Apareció en una escena memorable de Jurassic Park, corriendo en manada por la pradera."
  },
  {
    id: "struthiomimus",
    nombre: "Struthiomimus altus",
    nombreComun: "Estrutiomimo",
    emoji: "🦃",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "theropoda",
      familia: "ornithomimosauria"
    },
    periodo: "Cretácico",
    rangoMa: [76, 70],
    dieta: "Omnívoro",
    longitud: 4.3,
    peso: 150,
    alturaFosil: 1.4,
    region: ["América del Norte"],
    descubrimiento: { año: 1902, autor: "Lawrence Lambe" },
    descripcion: "Struthiomimus es el 'imitador de avestruz', un ornitomimosaurio esbelto y veloz de Norteamérica. Su pico desdentado sugiere una dieta variada de plantas, insectos y pequeños animales.",
    curiosidad: "Estudios recientes sugieren que sus brazos y manos pudieron usarse para sujetar ramas mientras comía."
  },
  {
    id: "oviraptor",
    nombre: "Oviraptor philoceratops",
    nombreComun: "Oviraptor",
    emoji: "🐓",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "theropoda",
      familia: "oviraptoridae"
    },
    periodo: "Cretácico",
    rangoMa: [75, 71],
    dieta: "Omnívoro",
    longitud: 2,
    peso: 35,
    alturaFosil: 0.8,
    region: ["Asia"],
    descubrimiento: { año: 1924, autor: "Henry Fairfield Osborn" },
    descripcion: "Oviraptor fue descrito originalmente como un 'ladrón de huevos' porque se halló junto a un nido. Décadas después se demostró que en realidad estaba incubando sus propios huevos, no robándolos.",
    curiosidad: "Su nombre injusto ('ladrón de huevos') no se ha cambiado, pero hoy sabemos que era un padre dedicado."
  },
  {
    id: "citipati",
    nombre: "Citipati osmolskae",
    nombreComun: "Citipati",
    emoji: "🐓",
    taxonomia: {
      clado: "dinosauria",
      orden: "saurischia",
      suborden: "theropoda",
      familia: "oviraptoridae"
    },
    periodo: "Cretácico",
    rangoMa: [75, 71],
    dieta: "Omnívoro",
    longitud: 3,
    peso: 80,
    alturaFosil: 1,
    region: ["Asia"],
    descubrimiento: { año: 2001, autor: "James Clark, Mark Norell y Rinchen Barsbold" },
    descripcion: "Citipati es uno de los oviraptóridos mejor conocidos, con una cresta ósea alta en la cabeza, similar a la de un casuario. Los famosos fósiles de 'big mama' lo muestran incubando un nido como una gallina moderna.",
    curiosidad: "Su postura sobre el nido, con los brazos cubriendo los huevos, es prácticamente idéntica a la de las aves actuales."
  }
];

// ===================== HELPER FUNCTIONS =====================

export function getDinoById(id) {
  return DINOS.find(d => d.id === id) ?? null;
}

export function getGrupoById(id) {
  return GRUPOS[id] ?? null;
}

export function getDinosByFamilia(familiaId) {
  return DINOS.filter(d => d.taxonomia.familia === familiaId);
}

export function getDinosByPeriodo(periodo) {
  return DINOS.filter(d => d.periodo === periodo);
}

export function getDinosByGrupo(grupoId) {
  return DINOS.filter(d => Object.values(d.taxonomia).includes(grupoId));
}

export function getBreadcrumb(grupoId) {
  const chain = [];
  let current = GRUPOS[grupoId];
  while (current) {
    chain.unshift(current);
    current = current.padre ? GRUPOS[current.padre] : null;
  }
  return chain;
}
