import {WoordSoort} from '../../enums/woordsoort';
import {emoties} from './emoties';
import {BijvoeglijkNaamwoord} from '../../models/bijvoeglijk-naamwoord';

export const bijvoeglijkNaamwoorden: BijvoeglijkNaamwoord[] = [
  ...emoties,
  {
    woord: 'mooi',
    tweedeVorm: 'mooie',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_LOCATIE, WoordSoort.ZNW_VOORWERP]
  },
  {
    woord: 'prachtig',
    tweedeVorm: 'prachtige',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_LOCATIE, WoordSoort.ZNW_VOORWERP]
  },
  {
    woord: 'schoon',
    tweedeVorm: 'schone',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_LOCATIE, WoordSoort.ZNW_VOORWERP]
  },
  {
    woord: 'proper',
    tweedeVorm: 'propere',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_LOCATIE, WoordSoort.ZNW_VOORWERP]
  },
  {
    woord: 'lelijk',
    tweedeVorm: 'lelijke',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_LOCATIE, WoordSoort.ZNW_VOORWERP]
  },
  {
    woord: 'afgrijselijk',
    tweedeVorm: 'afgrijselijke',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_LOCATIE, WoordSoort.ZNW_VOORWERP]
  },
  {
    woord: 'kwaadaardig',
    tweedeVorm: 'kwaadaardige',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'slechtgemutst',
    tweedeVorm: 'slechtgemutste',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'verschikkelijk',
    tweedeVorm: 'verschrikkelijke',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_LOCATIE, WoordSoort.ZNW_VOORWERP]
  },
  {
    woord: 'indrukwekkend',
    tweedeVorm: 'indrukwekkende',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_LOCATIE, WoordSoort.ZNW_VOORWERP]
  },
  {
    woord: 'onverschillig',
    tweedeVorm: 'onverschillige',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'fantasierijk',
    tweedeVorm: 'fantasierijke',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'arrogant',
    tweedeVorm: 'arrogante',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'overmoedig',
    tweedeVorm: 'overmoedige',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'lief',
    tweedeVorm: 'lieve',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'schattig',
    tweedeVorm: 'schattige',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'pienter',
    tweedeVorm: 'pientere',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'slim',
    tweedeVorm: 'slimme',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'snugger',
    tweedeVorm: 'snuggere',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'geniaal',
    tweedeVorm: 'geniale',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'onoverwinnelijk',
    tweedeVorm: 'onoverwinnelijke',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'onaantastbaar',
    tweedeVorm: 'onaantastbare',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'stevig',
    tweedeVorm: 'stevige',
    toepasbaarOp: [WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'stabiel',
    tweedeVorm: 'stabiele',
    toepasbaarOp: [WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'slap',
    tweedeVorm: 'slappe',
    toepasbaarOp: [WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'vloeibaar',
    tweedeVorm: 'vloeibare',
    toepasbaarOp: [WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'zwak',
    tweedeVorm: 'zwakke',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'sterk',
    tweedeVorm: 'sterke',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'donker',
    tweedeVorm: 'donkere',
    toepasbaarOp: [WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'gruwelijk',
    tweedeVorm: 'gruwelijke',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'voorzichtig',
    tweedeVorm: 'voorzichtige',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'verlaten',
    tweedeVorm: 'verlaten',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'leergierig',
    tweedeVorm: 'leergierige',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'obscuur',
    tweedeVorm: 'obscure',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'legendarisch',
    tweedeVorm: 'legendarische',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'berucht',
    tweedeVorm: 'beruchte',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'net',
    tweedeVorm: 'nette',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'braaf',
    tweedeVorm: 'brave',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'zorgwekkend',
    tweedeVorm: 'zorgwekkende',
    toepasbaarOp: [WoordSoort.ZNW_VOORWERP]
  },
  {
    woord: 'blauw',
    tweedeVorm: 'blauwe',
    toepasbaarOp: [WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'rood',
    tweedeVorm: 'rode',
    toepasbaarOp: [WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'groen',
    tweedeVorm: 'groene',
    toepasbaarOp: [WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'groot',
    tweedeVorm: 'grote',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'klein',
    tweedeVorm: 'kleine',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'dik',
    tweedeVorm: 'dikke',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'dun',
    tweedeVorm: 'dunne',
    toepasbaarOp: [WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'mager',
    tweedeVorm: 'magere',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'trouw',
    tweedeVorm: 'trouwe',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'slank',
    tweedeVorm: 'slanke',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'vriendelijk',
    tweedeVorm: 'vriendelijke',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'brutaal',
    tweedeVorm: 'brutale',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'gemeen',
    tweedeVorm: 'gemene',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'hardwerkend',
    tweedeVorm: 'hardwerkende',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'naief',
    tweedeVorm: 'naïeve',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'lang',
    tweedeVorm: 'lange',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'enorm',
    tweedeVorm: 'enorme',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'breed',
    tweedeVorm: 'brede',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'krankzinnig',
    tweedeVorm: 'krankzinnige',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'weerzinwekkend',
    tweedeVorm: 'weerzinwekkende',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'overspelig',
    tweedeVorm: 'overspelige',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'muzikaal',
    tweedeVorm: 'muzikale',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'machtig',
    tweedeVorm: 'machtige',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'leugenachtig',
    tweedeVorm: 'leugenachtige',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'gulzig',
    tweedeVorm: 'gulzige',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'lui',
    tweedeVorm: 'luie',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'zwanger',
    tweedeVorm: 'zwangere',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'arm',
    tweedeVorm: 'arme',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'rijk',
    tweedeVorm: 'rijke',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'revolutionair',
    tweedeVorm: 'revolutionaire',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'ouderwets',
    tweedeVorm: 'ouderwetse',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'modern',
    tweedeVorm: 'moderne',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'hedendaags',
    tweedeVorm: 'hedendaagse',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'vervelend',
    tweedeVorm: 'vervelende',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'saai',
    tweedeVorm: 'saaie',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'boeiend',
    tweedeVorm: 'boeiende',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'grappig',
    tweedeVorm: 'grappige',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'lachwekkend',
    tweedeVorm: 'lachwekkende',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'levensecht',
    tweedeVorm: 'levensechte',
    toepasbaarOp: [WoordSoort.ZNW_LOCATIE, WoordSoort.ZNW_VOORWERP]
  },
  {
    woord: 'kritisch',
    tweedeVorm: 'kritische',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'vettig',
    tweedeVorm: 'vettige',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_LOCATIE, WoordSoort.ZNW_VOORWERP]
  },
  {
    woord: 'levensgevaarlijk',
    tweedeVorm: 'levensgevaarlijke',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_LOCATIE, WoordSoort.ZNW_VOORWERP]
  },
  {
    woord: 'lichtbruin',
    tweedeVorm: 'lichtbruine',
    toepasbaarOp: [WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'lichtgevoelig',
    tweedeVorm: 'lichtgevoelige',
    toepasbaarOp: [WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'lieftallig',
    tweedeVorm: 'lieftallige',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'aangeboden',
    tweedeVorm: 'aangeboden',
    toepasbaarOp: [WoordSoort.ZNW_VOORWERP]
  },
  {
    woord: 'verboden',
    tweedeVorm: 'verboden',
    toepasbaarOp: [WoordSoort.ZNW_VOORWERP]
  },
  {
    woord: 'pril',
    tweedeVorm: 'prille',
    toepasbaarOp: [WoordSoort.ZNW_VOORWERP]
  },
  {
    woord: 'stout',
    tweedeVorm: 'stoute',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'fout',
    tweedeVorm: 'foute',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'stil',
    tweedeVorm: 'stille',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'droog',
    tweedeVorm: 'droge',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'kil',
    tweedeVorm: 'kille',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'bemeste',
    tweedeVorm: 'bemeste',
    toepasbaarOp: [WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'generiek',
    tweedeVorm: 'generieke',
    toepasbaarOp: [WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'wit',
    tweedeVorm: 'witte',
    toepasbaarOp: [WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'ziek',
    tweedeVorm: 'zieke',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE]
  },
  {
    woord: 'vet',
    tweedeVorm: 'vette',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP]
  },
  {
    woord: 'analoog',
    tweedeVorm: 'analoge',
    toepasbaarOp: [WoordSoort.ZNW_VOORWERP]
  },
  {
    woord: 'ludiek',
    tweedeVorm: 'ludieke',
    toepasbaarOp: [WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'hoog',
    tweedeVorm: 'hoge',
    toepasbaarOp: [WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  },
  {
    woord: 'chique',
    tweedeVorm: 'chique',
    toepasbaarOp: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_VOORWERP, WoordSoort.ZNW_LOCATIE]
  }
];
