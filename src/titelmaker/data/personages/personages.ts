import {Personage} from '../../models/personage';
import {beroepen} from './beroepen';
import {fantasieFiguren} from './fantasie-figuren';
import {familieleden} from './familieleden';
import {dieren} from './dieren';
import {volkeren} from './nationaliteiten';
import {hofhouding} from './hofhouding';
import {voornamenMannen} from './voornamen-mannen';

export const personages: Personage[] =
  [
    ...beroepen,
    ...fantasieFiguren,
    ...familieleden,
    ...dieren,
    ...volkeren,
    ...hofhouding,
    ...voornamenMannen,
    {
      naam: 'eskimo',
      lidwoord: 'de',
      meervoud: 'eskimo\'s',
      verkleinwoord: 'eskimootje'
    },
    {
      naam: 'holbewoner',
      lidwoord: 'de',
      meervoud: 'holbewoners',
      verkleinwoord: 'holbewonertje'
    },
    {
      naam: 'viking',
      lidwoord: 'de',
      meervoud: 'vikings',
      verkleinwoord: 'vikinkje'
    },
    {
      naam: 'piraat',
      lidwoord: 'de',
      meervoud: 'piraten',
      verkleinwoord: 'piraatje'
    },
    {
      naam: 'indiaan',
      lidwoord: 'de',
      meervoud: 'indianen',
      verkleinwoord: 'indiaantje'
    },
    {
      naam: 'cowboy',
      lidwoord: 'de',
      meervoud: 'cowboys',
      verkleinwoord: 'cowboytje'
    },
    {
      naam: 'pelgrim',
      lidwoord: 'de',
      meervoud: 'pelgrims',
      verkleinwoord: 'pelgrimpje'
    },
    {
      naam: 'toerist',
      lidwoord: 'de',
      meervoud: 'toeristen',
      verkleinwoord: 'toeristje'
    },
    {
      naam: 'vogelspotter',
      lidwoord: 'de',
      meervoud: 'vogelspotters',
      verkleinwoord: 'vogelspottertje'
    },
    {
      naam: 'postzegelverzamelaar',
      lidwoord: 'de',
      meervoud: 'postzegelverzamelaars',
      verkleinwoord: 'postzegelverzamelaartje'
    },
    {
      naam: 'bergbeklimmer',
      lidwoord: 'de',
      meervoud: 'bergbeklimmers',
      verkleinwoord: 'bergbeklimmertje'
    },
    {
      naam: 'Kiss-fan',
      lidwoord: 'de',
      meervoud: 'Kiss-fans',
      verkleinwoord: 'Kiss-fannetje'
    },
    {
      naam: 'bourgondiër',
      lidwoord: 'de',
      meervoud: 'bourgondiërs',
      verkleinwoord: 'bourgondiërtje'
    },
    {
      naam: 'klant',
      lidwoord: 'de',
      meervoud: 'klanten',
      verkleinwoord: 'klantje'
    },
    {
      naam: 'veelvraat',
      lidwoord: 'de',
      meervoud: 'veelvraten',
      verkleinwoord: 'veelvraatje'
    },
    {
      naam: 'leugenaar',
      lidwoord: 'de',
      meervoud: 'leugenaars',
      verkleinwoord: 'leugenaartje'
    },
    {
      naam: 'gulzigaard',
      lidwoord: 'de',
      meervoud: 'gulzigaards',
      verkleinwoord: 'gulzigaardje'
    },
    {
      naam: 'baas',
      lidwoord: 'de',
      meervoud: 'bazen',
      verkleinwoord: 'baasje'
    },
    {
      naam: 'inwijkeling',
      lidwoord: 'de',
      meervoud: 'inwijkelingen',
      verkleinwoord: 'inwijkelingetje'
    },
    {
      naam: 'optimist',
      lidwoord: 'de',
      meervoud: 'optimisten',
      verkleinwoord: 'optimistje'
    },
    {
      naam: 'zwerver',
      lidwoord: 'de',
      meervoud: 'zwervers',
      verkleinwoord: 'zwervertje'
    },
    {
      naam: 'bedelaar',
      lidwoord: 'de',
      meervoud: 'bedelaars',
      verkleinwoord: 'bedelaartje'
    },
    {
      naam: 'kandidaat',
      lidwoord: 'de',
      meervoud: 'kandidaten',
      verkleinwoord: 'kandidaatje'
    },
    {
      naam: 'sollicitant',
      lidwoord: 'de',
      meervoud: 'sollicitanten',
      verkleinwoord: 'sollicitantje'
    },
    {
      naam: 'betoger',
      lidwoord: 'de',
      meervoud: 'betogers',
      verkleinwoord: 'betogertje'
    },
    {
      naam: 'zondaar',
      lidwoord: 'de',
      meervoud: 'zondaars',
      verkleinwoord: 'zondaartje'
    },
    {
      naam: 'laatkomer',
      lidwoord: 'de',
      meervoud: 'laatkomers',
      verkleinwoord: 'laatkomertje'
    },
    {
      naam: 'verslaafde',
      lidwoord: 'de',
      meervoud: 'verslaafden',
      verkleinwoord: null
    },
    {
      naam: 'zieke',
      lidwoord: 'de',
      meervoud: 'zieken',
      verkleinwoord: null
    },
    {
      naam: 'arme',
      lidwoord: 'de',
      meervoud: 'armen',
      verkleinwoord: null
    },
    {
      naam: 'rijke',
      lidwoord: 'de',
      meervoud: 'rijken',
      verkleinwoord: null
    },
    {
      naam: 'treuzelaar',
      lidwoord: 'de',
      meervoud: 'treuzelaars',
      verkleinwoord: 'treuzelaartje'
    },
    {
      naam: 'piekeraar',
      lidwoord: 'de',
      meervoud: 'piekeraars',
      verkleinwoord: 'piekeraartje'
    },
    {
      naam: 'filosoof',
      lidwoord: 'de',
      meervoud: 'filosofen',
      verkleinwoord: 'filosoofje'
    },
    {
      naam: 'betweter',
      lidwoord: 'de',
      meervoud: 'betweters',
      verkleinwoord: 'betwetertje'
    },
    {
      naam: 'leerling',
      lidwoord: 'de',
      meervoud: 'leerlingen',
      verkleinwoord: 'leerlingetje'
    },
    {
      naam: 'winnaar',
      lidwoord: 'de',
      meervoud: 'winnaars',
      verkleinwoord: 'winnaartje'
    },
    {
      naam: 'verliezer',
      lidwoord: 'de',
      meervoud: 'verliezers',
      verkleinwoord: 'verliezertje'
    },
    {
      naam: 'crimineel',
      lidwoord: 'de',
      meervoud: 'criminelen',
      verkleinwoord: 'crimineeltje'
    },
    {
      naam: 'stouterik',
      lidwoord: 'de',
      meervoud: 'stouteriken',
      verkleinwoord: 'stouterikje'
    },
    {
      naam: 'verleider',
      lidwoord: 'de',
      meervoud: 'verleiders',
      verkleinwoord: 'verleidertje'
    },
    {
      naam: 'dief',
      lidwoord: 'de',
      meervoud: 'dieven',
      verkleinwoord: 'diefje'
    },
    {
      naam: 'klikspaan',
      lidwoord: 'de',
      meervoud: 'klikspanen',
      verkleinwoord: 'klikspaantje'
    },
    {
      naam: 'dorpsgek',
      lidwoord: 'de',
      meervoud: 'dorpsgekken',
      verkleinwoord: 'dorpsgekje'
    },
    {
      naam: 'zot',
      lidwoord: 'de',
      meervoud: 'zotten',
      verkleinwoord: 'zotje'
    },
    {
      naam: 'rover',
      lidwoord: 'de',
      meervoud: 'rovers',
      verkleinwoord: 'rovertje'
    },
    {
      naam: 'wijnkenner',
      lidwoord: 'de',
      meervoud: 'wijnkenners',
      verkleinwoord: 'wijnkennertje'
    },
    {
      naam: 'buurman',
      lidwoord: 'de',
      meervoud: 'buurmannen',
      verkleinwoord: 'buurmannetje'
    },
    {
      naam: 'buurvrouw',
      lidwoord: 'de',
      meervoud: 'buurvrouwen',
      verkleinwoord: 'buurvrouwtje'
    },
    {
      naam: '80-jarige',
      lidwoord: 'de',
      meervoud: '80-jarigen',
      verkleinwoord: null
    },
    {
      naam: 'ADHD-kind',
      lidwoord: 'het',
      meervoud: 'ADHD-kinderen',
      verkleinwoord: 'ADHD-kindje'
    }
  ];
