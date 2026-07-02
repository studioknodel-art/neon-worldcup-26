const API="https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=20260611-20260719&limit=300";
const TZ="America/Chicago";
const CACHE_KEY="wc2026_espn_cache_v1";
const CHEV='<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>';

const SNAPSHOT="Jul 1, 2026 · 7:24 PM CDT";
const SEED=[{"id":"s1","iso":"2026-06-11T19:00Z","grp":"A","stage":"group","state":"post","aAbbr":"MEX","aName":"Mexico","bAbbr":"RSA","bName":"South Africa","sa":2,"sb":0,"ch":"FOX","city":"Mexico City","dallas":false,"wa":true,"wb":false},{"id":"s2","iso":"2026-06-12T02:00Z","grp":"A","stage":"group","state":"post","aAbbr":"KOR","aName":"South Korea","bAbbr":"CZE","bName":"Czechia","sa":2,"sb":1,"ch":"FS1","city":"Guadalajara","dallas":false,"wa":true,"wb":false},{"id":"s3","iso":"2026-06-18T16:00Z","grp":"A","stage":"group","state":"post","aAbbr":"CZE","aName":"Czechia","bAbbr":"RSA","bName":"South Africa","sa":1,"sb":1,"ch":"FOX","city":"Atlanta","dallas":false},{"id":"s4","iso":"2026-06-19T01:00Z","grp":"A","stage":"group","state":"post","aAbbr":"MEX","aName":"Mexico","bAbbr":"KOR","bName":"South Korea","sa":1,"sb":0,"ch":"FOX","city":"Guadalajara","dallas":false,"wa":true,"wb":false},{"id":"s5","iso":"2026-06-25T01:00Z","grp":"A","stage":"group","state":"post","aAbbr":"MEX","aName":"Mexico","bAbbr":"CZE","bName":"Czechia","sa":3,"sb":0,"ch":"FOX","city":"Mexico City","dallas":false,"wa":true,"wb":false},{"id":"s6","iso":"2026-06-25T01:00Z","grp":"A","stage":"group","state":"post","aAbbr":"RSA","aName":"South Africa","bAbbr":"KOR","bName":"South Korea","sa":1,"sb":0,"ch":"FS1","city":"Monterrey","dallas":false,"wa":true,"wb":false},{"id":"s7","iso":"2026-06-12T19:00Z","grp":"B","stage":"group","state":"post","aAbbr":"CAN","aName":"Canada","bAbbr":"BIH","bName":"Bosnia","sa":1,"sb":1,"ch":"FOX","city":"Toronto","dallas":false},{"id":"s8","iso":"2026-06-13T19:00Z","grp":"B","stage":"group","state":"post","aAbbr":"QAT","aName":"Qatar","bAbbr":"SUI","bName":"Switzerland","sa":1,"sb":1,"ch":"FOX","city":"San Francisco","dallas":false},{"id":"s9","iso":"2026-06-18T19:00Z","grp":"B","stage":"group","state":"post","aAbbr":"SUI","aName":"Switzerland","bAbbr":"BIH","bName":"Bosnia","sa":4,"sb":1,"ch":"FOX","city":"Los Angeles","dallas":false,"wa":true,"wb":false},{"id":"s10","iso":"2026-06-18T22:00Z","grp":"B","stage":"group","state":"post","aAbbr":"CAN","aName":"Canada","bAbbr":"QAT","bName":"Qatar","sa":6,"sb":0,"ch":"FS1","city":"Vancouver","dallas":false,"wa":true,"wb":false},{"id":"s11","iso":"2026-06-24T19:00Z","grp":"B","stage":"group","state":"post","aAbbr":"SUI","aName":"Switzerland","bAbbr":"CAN","bName":"Canada","sa":2,"sb":1,"ch":"FOX","city":"Vancouver","dallas":false,"wa":true,"wb":false},{"id":"s12","iso":"2026-06-24T19:00Z","grp":"B","stage":"group","state":"post","aAbbr":"BIH","aName":"Bosnia","bAbbr":"QAT","bName":"Qatar","sa":3,"sb":1,"ch":"FS1","city":"Seattle","dallas":false,"wa":true,"wb":false},{"id":"s13","iso":"2026-06-13T22:00Z","grp":"C","stage":"group","state":"post","aAbbr":"BRA","aName":"Brazil","bAbbr":"MAR","bName":"Morocco","sa":1,"sb":1,"ch":"FS1","city":"New Jersey","dallas":false},{"id":"s14","iso":"2026-06-14T01:00Z","grp":"C","stage":"group","state":"post","aAbbr":"HTI","aName":"Haiti","bAbbr":"SCO","bName":"Scotland","sa":0,"sb":1,"ch":"FS1","city":"Boston","dallas":false,"wa":false,"wb":true},{"id":"s15","iso":"2026-06-19T22:00Z","grp":"C","stage":"group","state":"post","aAbbr":"SCO","aName":"Scotland","bAbbr":"MAR","bName":"Morocco","sa":0,"sb":1,"ch":"FOX","city":"Boston","dallas":false,"wa":false,"wb":true},{"id":"s16","iso":"2026-06-20T00:30Z","grp":"C","stage":"group","state":"post","aAbbr":"BRA","aName":"Brazil","bAbbr":"HTI","bName":"Haiti","sa":3,"sb":0,"ch":"FOX","city":"Philadelphia","dallas":false,"wa":true,"wb":false},{"id":"s17","iso":"2026-06-24T22:00Z","grp":"C","stage":"group","state":"post","aAbbr":"BRA","aName":"Brazil","bAbbr":"SCO","bName":"Scotland","sa":3,"sb":0,"ch":"FOX","city":"Miami","dallas":false,"wa":true,"wb":false},{"id":"s18","iso":"2026-06-24T22:00Z","grp":"C","stage":"group","state":"post","aAbbr":"MAR","aName":"Morocco","bAbbr":"HTI","bName":"Haiti","sa":4,"sb":2,"ch":"FS1","city":"Atlanta","dallas":false,"wa":true,"wb":false},{"id":"s19","iso":"2026-06-13T01:00Z","grp":"D","stage":"group","state":"post","aAbbr":"USA","aName":"USA","bAbbr":"PAR","bName":"Paraguay","sa":4,"sb":1,"ch":"FOX","city":"Los Angeles","dallas":false,"wa":true,"wb":false},{"id":"s20","iso":"2026-06-14T04:00Z","grp":"D","stage":"group","state":"post","aAbbr":"AUS","aName":"Australia","bAbbr":"TUR","bName":"Türkiye","sa":2,"sb":0,"ch":"FS1","city":"Vancouver","dallas":false,"wa":true,"wb":false},{"id":"s21","iso":"2026-06-19T19:00Z","grp":"D","stage":"group","state":"post","aAbbr":"USA","aName":"USA","bAbbr":"AUS","bName":"Australia","sa":2,"sb":0,"ch":"FOX","city":"Seattle","dallas":false,"wa":true,"wb":false},{"id":"s22","iso":"2026-06-20T03:00Z","grp":"D","stage":"group","state":"post","aAbbr":"TUR","aName":"Türkiye","bAbbr":"PAR","bName":"Paraguay","sa":0,"sb":1,"ch":"FS1","city":"San Francisco","dallas":false,"wa":false,"wb":true},{"id":"s23","iso":"2026-06-26T02:00Z","grp":"D","stage":"group","state":"post","aAbbr":"USA","aName":"USA","bAbbr":"TUR","bName":"Türkiye","sa":2,"sb":3,"ch":"FOX","city":"Los Angeles","dallas":false,"wa":false,"wb":true},{"id":"s24","iso":"2026-06-26T02:00Z","grp":"D","stage":"group","state":"post","aAbbr":"PAR","aName":"Paraguay","bAbbr":"AUS","bName":"Australia","sa":0,"sb":0,"ch":"FS1","city":"San Francisco","dallas":false},{"id":"s25","iso":"2026-06-14T17:00Z","grp":"E","stage":"group","state":"post","aAbbr":"GER","aName":"Germany","bAbbr":"CUW","bName":"Curaçao","sa":7,"sb":1,"ch":"FOX","city":"Houston","dallas":false,"wa":true,"wb":false},{"id":"s26","iso":"2026-06-14T23:00Z","grp":"E","stage":"group","state":"post","aAbbr":"CIV","aName":"Ivory Coast","bAbbr":"ECU","bName":"Ecuador","sa":1,"sb":0,"ch":"FS1","city":"Philadelphia","dallas":false,"wa":true,"wb":false},{"id":"s27","iso":"2026-06-20T20:00Z","grp":"E","stage":"group","state":"post","aAbbr":"GER","aName":"Germany","bAbbr":"CIV","bName":"Ivory Coast","sa":2,"sb":1,"ch":"FOX","city":"Toronto","dallas":false,"wa":true,"wb":false},{"id":"s28","iso":"2026-06-21T00:00Z","grp":"E","stage":"group","state":"post","aAbbr":"ECU","aName":"Ecuador","bAbbr":"CUW","bName":"Curaçao","sa":0,"sb":0,"ch":"FS1","city":"Kansas City","dallas":false},{"id":"s29","iso":"2026-06-25T20:00Z","grp":"E","stage":"group","state":"post","aAbbr":"ECU","aName":"Ecuador","bAbbr":"GER","bName":"Germany","sa":2,"sb":1,"ch":"FOX","city":"New Jersey","dallas":false,"wa":true,"wb":false},{"id":"s30","iso":"2026-06-25T20:00Z","grp":"E","stage":"group","state":"post","aAbbr":"CUW","aName":"Curaçao","bAbbr":"CIV","bName":"Ivory Coast","sa":0,"sb":2,"ch":"FS1","city":"Philadelphia","dallas":false,"wa":false,"wb":true},{"id":"s31","iso":"2026-06-14T20:00Z","grp":"F","stage":"group","state":"post","aAbbr":"NED","aName":"Netherlands","bAbbr":"JPN","bName":"Japan","sa":2,"sb":2,"ch":"FOX","city":"Dallas","dallas":true},{"id":"s32","iso":"2026-06-15T02:00Z","grp":"F","stage":"group","state":"post","aAbbr":"SWE","aName":"Sweden","bAbbr":"TUN","bName":"Tunisia","sa":5,"sb":1,"ch":"FS1","city":"Monterrey","dallas":false,"wa":true,"wb":false},{"id":"s33","iso":"2026-06-20T17:00Z","grp":"F","stage":"group","state":"post","aAbbr":"NED","aName":"Netherlands","bAbbr":"SWE","bName":"Sweden","sa":5,"sb":1,"ch":"FOX","city":"Houston","dallas":false,"wa":true,"wb":false},{"id":"s34","iso":"2026-06-21T04:00Z","grp":"F","stage":"group","state":"post","aAbbr":"TUN","aName":"Tunisia","bAbbr":"JPN","bName":"Japan","sa":0,"sb":4,"ch":"FS1","city":"Monterrey","dallas":false,"wa":false,"wb":true},{"id":"s35","iso":"2026-06-25T23:00Z","grp":"F","stage":"group","state":"post","aAbbr":"JPN","aName":"Japan","bAbbr":"SWE","bName":"Sweden","sa":1,"sb":1,"ch":"FS1","city":"Dallas","dallas":true},{"id":"s36","iso":"2026-06-25T23:00Z","grp":"F","stage":"group","state":"post","aAbbr":"TUN","aName":"Tunisia","bAbbr":"NED","bName":"Netherlands","sa":1,"sb":3,"ch":"FOX","city":"Kansas City","dallas":false,"wa":false,"wb":true},{"id":"s37","iso":"2026-06-15T19:00Z","grp":"G","stage":"group","state":"post","aAbbr":"BEL","aName":"Belgium","bAbbr":"EGY","bName":"Egypt","sa":1,"sb":1,"ch":"FOX","city":"Seattle","dallas":false},{"id":"s38","iso":"2026-06-16T01:00Z","grp":"G","stage":"group","state":"post","aAbbr":"IRN","aName":"Iran","bAbbr":"NZL","bName":"New Zealand","sa":2,"sb":2,"ch":"FS1","city":"Los Angeles","dallas":false},{"id":"s39","iso":"2026-06-21T19:00Z","grp":"G","stage":"group","state":"post","aAbbr":"BEL","aName":"Belgium","bAbbr":"IRN","bName":"Iran","sa":0,"sb":0,"ch":"FS1","city":"Los Angeles","dallas":false},{"id":"s40","iso":"2026-06-22T01:00Z","grp":"G","stage":"group","state":"post","aAbbr":"NZL","aName":"New Zealand","bAbbr":"EGY","bName":"Egypt","sa":1,"sb":3,"ch":"FS1","city":"Vancouver","dallas":false,"wa":false,"wb":true},{"id":"s41","iso":"2026-06-27T03:00Z","grp":"G","stage":"group","state":"post","aAbbr":"EGY","aName":"Egypt","bAbbr":"IRN","bName":"Iran","sa":1,"sb":1,"ch":"FS1","city":"Seattle","dallas":false},{"id":"s42","iso":"2026-06-27T03:00Z","grp":"G","stage":"group","state":"post","aAbbr":"NZL","aName":"New Zealand","bAbbr":"BEL","bName":"Belgium","sa":1,"sb":5,"ch":"FOX","city":"Vancouver","dallas":false,"wa":false,"wb":true},{"id":"s43","iso":"2026-06-15T16:00Z","grp":"H","stage":"group","state":"post","aAbbr":"ESP","aName":"Spain","bAbbr":"CPV","bName":"Cape Verde","sa":0,"sb":0,"ch":"FOX","city":"Atlanta","dallas":false},{"id":"s44","iso":"2026-06-15T22:00Z","grp":"H","stage":"group","state":"post","aAbbr":"KSA","aName":"Saudi Arabia","bAbbr":"URU","bName":"Uruguay","sa":1,"sb":1,"ch":"FS1","city":"Miami","dallas":false},{"id":"s45","iso":"2026-06-21T16:00Z","grp":"H","stage":"group","state":"post","aAbbr":"ESP","aName":"Spain","bAbbr":"KSA","bName":"Saudi Arabia","sa":4,"sb":0,"ch":"FOX","city":"Atlanta","dallas":false,"wa":true,"wb":false},{"id":"s46","iso":"2026-06-21T22:00Z","grp":"H","stage":"group","state":"post","aAbbr":"URU","aName":"Uruguay","bAbbr":"CPV","bName":"Cape Verde","sa":2,"sb":2,"ch":"FS1","city":"Miami","dallas":false},{"id":"s47","iso":"2026-06-27T00:00Z","grp":"H","stage":"group","state":"post","aAbbr":"CPV","aName":"Cape Verde","bAbbr":"KSA","bName":"Saudi Arabia","sa":0,"sb":0,"ch":"FS1","city":"Houston","dallas":false},{"id":"s48","iso":"2026-06-27T00:00Z","grp":"H","stage":"group","state":"post","aAbbr":"URU","aName":"Uruguay","bAbbr":"ESP","bName":"Spain","sa":0,"sb":1,"ch":"FOX","city":"Guadalajara","dallas":false,"wa":false,"wb":true},{"id":"s49","iso":"2026-06-16T19:00Z","grp":"I","stage":"group","state":"post","aAbbr":"FRA","aName":"France","bAbbr":"SEN","bName":"Senegal","sa":3,"sb":1,"ch":"FOX","city":"New Jersey","dallas":false,"wa":true,"wb":false},{"id":"s50","iso":"2026-06-16T22:00Z","grp":"I","stage":"group","state":"post","aAbbr":"NOR","aName":"Norway","bAbbr":"IRQ","bName":"Iraq","sa":4,"sb":1,"ch":"FOX","city":"Boston","dallas":false,"wa":true,"wb":false},{"id":"s51","iso":"2026-06-22T21:00Z","grp":"I","stage":"group","state":"post","aAbbr":"FRA","aName":"France","bAbbr":"IRQ","bName":"Iraq","sa":3,"sb":0,"ch":"FOX","city":"Philadelphia","dallas":false,"wa":true,"wb":false},{"id":"s52","iso":"2026-06-23T00:00Z","grp":"I","stage":"group","state":"post","aAbbr":"NOR","aName":"Norway","bAbbr":"SEN","bName":"Senegal","sa":3,"sb":2,"ch":"FOX","city":"New Jersey","dallas":false,"wa":true,"wb":false},{"id":"s53","iso":"2026-06-26T19:00Z","grp":"I","stage":"group","state":"post","aAbbr":"NOR","aName":"Norway","bAbbr":"FRA","bName":"France","sa":1,"sb":4,"ch":"FOX","city":"Boston","dallas":false,"wa":false,"wb":true},{"id":"s54","iso":"2026-06-26T19:00Z","grp":"I","stage":"group","state":"post","aAbbr":"SEN","aName":"Senegal","bAbbr":"IRQ","bName":"Iraq","sa":5,"sb":0,"ch":"FS1","city":"Toronto","dallas":false,"wa":true,"wb":false},{"id":"s55","iso":"2026-06-17T01:00Z","grp":"J","stage":"group","state":"post","aAbbr":"ARG","aName":"Argentina","bAbbr":"DZA","bName":"Algeria","sa":3,"sb":0,"ch":"FOX","city":"Kansas City","dallas":false,"wa":true,"wb":false},{"id":"s56","iso":"2026-06-17T04:00Z","grp":"J","stage":"group","state":"post","aAbbr":"AUT","aName":"Austria","bAbbr":"JOR","bName":"Jordan","sa":3,"sb":1,"ch":"FS1","city":"San Francisco","dallas":false,"wa":true,"wb":false},{"id":"s57","iso":"2026-06-22T17:00Z","grp":"J","stage":"group","state":"post","aAbbr":"ARG","aName":"Argentina","bAbbr":"AUT","bName":"Austria","sa":2,"sb":0,"ch":"FOX","city":"Dallas","dallas":true,"wa":true,"wb":false},{"id":"s58","iso":"2026-06-23T03:00Z","grp":"J","stage":"group","state":"post","aAbbr":"JOR","aName":"Jordan","bAbbr":"DZA","bName":"Algeria","sa":1,"sb":2,"ch":"FS1","city":"San Francisco","dallas":false,"wa":false,"wb":true},{"id":"s59","iso":"2026-06-28T02:00Z","grp":"J","stage":"group","state":"post","aAbbr":"ARG","aName":"Argentina","bAbbr":"JOR","bName":"Jordan","sa":3,"sb":1,"ch":"FOX","city":"Dallas","dallas":true,"wa":true,"wb":false},{"id":"s60","iso":"2026-06-28T02:00Z","grp":"J","stage":"group","state":"post","aAbbr":"DZA","aName":"Algeria","bAbbr":"AUT","bName":"Austria","sa":3,"sb":3,"ch":"FS1","city":"Kansas City","dallas":false},{"id":"s61","iso":"2026-06-17T17:00Z","grp":"K","stage":"group","state":"post","aAbbr":"POR","aName":"Portugal","bAbbr":"COD","bName":"Congo DR","sa":1,"sb":1,"ch":"FOX","city":"Houston","dallas":false},{"id":"s62","iso":"2026-06-18T02:00Z","grp":"K","stage":"group","state":"post","aAbbr":"UZB","aName":"Uzbekistan","bAbbr":"COL","bName":"Colombia","sa":1,"sb":3,"ch":"FS1","city":"Mexico City","dallas":false,"wa":false,"wb":true},{"id":"s63","iso":"2026-06-23T17:00Z","grp":"K","stage":"group","state":"post","aAbbr":"POR","aName":"Portugal","bAbbr":"UZB","bName":"Uzbekistan","sa":5,"sb":0,"ch":"FOX","city":"Houston","dallas":false,"wa":true,"wb":false},{"id":"s64","iso":"2026-06-24T02:00Z","grp":"K","stage":"group","state":"post","aAbbr":"COL","aName":"Colombia","bAbbr":"COD","bName":"Congo DR","sa":1,"sb":0,"ch":"FS1","city":"Guadalajara","dallas":false,"wa":true,"wb":false},{"id":"s65","iso":"2026-06-27T23:30Z","grp":"K","stage":"group","state":"post","aAbbr":"COL","aName":"Colombia","bAbbr":"POR","bName":"Portugal","sa":0,"sb":0,"ch":"FOX","city":"Miami","dallas":false},{"id":"s66","iso":"2026-06-27T23:30Z","grp":"K","stage":"group","state":"post","aAbbr":"COD","aName":"Congo DR","bAbbr":"UZB","bName":"Uzbekistan","sa":3,"sb":1,"ch":"FS1","city":"Atlanta","dallas":false,"wa":true,"wb":false},{"id":"s67","iso":"2026-06-17T20:00Z","grp":"L","stage":"group","state":"post","aAbbr":"ENG","aName":"England","bAbbr":"CRO","bName":"Croatia","sa":4,"sb":2,"ch":"FOX","city":"Dallas","dallas":true,"wa":true,"wb":false},{"id":"s68","iso":"2026-06-17T23:00Z","grp":"L","stage":"group","state":"post","aAbbr":"GHA","aName":"Ghana","bAbbr":"PAN","bName":"Panama","sa":1,"sb":0,"ch":"FS1","city":"Toronto","dallas":false,"wa":true,"wb":false},{"id":"s69","iso":"2026-06-23T20:00Z","grp":"L","stage":"group","state":"post","aAbbr":"ENG","aName":"England","bAbbr":"GHA","bName":"Ghana","sa":0,"sb":0,"ch":"FOX","city":"Boston","dallas":false},{"id":"s70","iso":"2026-06-23T23:00Z","grp":"L","stage":"group","state":"post","aAbbr":"PAN","aName":"Panama","bAbbr":"CRO","bName":"Croatia","sa":0,"sb":1,"ch":"FOX","city":"Toronto","dallas":false,"wa":false,"wb":true},{"id":"s71","iso":"2026-06-27T21:00Z","grp":"L","stage":"group","state":"post","aAbbr":"PAN","aName":"Panama","bAbbr":"ENG","bName":"England","sa":0,"sb":2,"ch":"FOX","city":"New Jersey","dallas":false,"wa":false,"wb":true},{"id":"s72","iso":"2026-06-27T21:00Z","grp":"L","stage":"group","state":"post","aAbbr":"CRO","aName":"Croatia","bAbbr":"GHA","bName":"Ghana","sa":2,"sb":1,"ch":"FS1","city":"Philadelphia","dallas":false,"wa":true,"wb":false},{"id":"s73","iso":"2026-06-28T19:00Z","grp":null,"stage":"r32","state":"post","aAbbr":"RSA","aName":"South Africa","bAbbr":"CAN","bName":"Canada","sa":0,"sb":1,"ch":"FOX","city":"Los Angeles","dallas":false,"wa":false,"wb":true},{"id":"s74","iso":"2026-06-29T17:00Z","grp":null,"stage":"r32","state":"post","aAbbr":"BRA","aName":"Brazil","bAbbr":"JPN","bName":"Japan","sa":2,"sb":1,"ch":"FOX","city":"Houston","dallas":false,"wa":true,"wb":false},{"id":"s75","iso":"2026-06-29T20:30Z","grp":null,"stage":"r32","state":"post","aAbbr":"GER","aName":"Germany","bAbbr":"PAR","bName":"Paraguay","sa":1,"sb":1,"ch":"FOX","city":"Boston","dallas":false,"wa":false,"wb":true},{"id":"s76","iso":"2026-06-30T01:00Z","grp":null,"stage":"r32","state":"post","aAbbr":"NED","aName":"Netherlands","bAbbr":"MAR","bName":"Morocco","sa":1,"sb":1,"ch":"FOX","city":"Monterrey","dallas":false,"wa":false,"wb":true},{"id":"s77","iso":"2026-06-30T17:00Z","grp":null,"stage":"r32","state":"post","aAbbr":"CIV","aName":"Ivory Coast","bAbbr":"NOR","bName":"Norway","sa":1,"sb":2,"ch":"FOX","city":"Dallas","dallas":true,"wa":false,"wb":true},{"id":"s78","iso":"2026-06-30T21:00Z","grp":null,"stage":"r32","state":"post","aAbbr":"FRA","aName":"France","bAbbr":"SWE","bName":"Sweden","sa":3,"sb":0,"ch":"FOX","city":"New Jersey","dallas":false,"wa":true,"wb":false},{"id":"s79","iso":"2026-07-01T01:00Z","grp":null,"stage":"r32","state":"pre","aAbbr":"","aName":"Winner A","bAbbr":"","bName":"3rd C/E/F/H/I","sa":null,"sb":null,"ch":"FOX","city":"Mexico City","dallas":false},{"id":"s80","iso":"2026-07-01T16:00Z","grp":null,"stage":"r32","state":"post","aAbbr":"ENG","aName":"England","bAbbr":"COD","bName":"Congo DR","sa":2,"sb":1,"ch":"FOX","city":"Atlanta","dallas":false,"wa":true,"wb":false},{"id":"s81","iso":"2026-07-01T20:00Z","grp":null,"stage":"r32","state":"post","aAbbr":"BEL","aName":"Belgium","bAbbr":"SEN","bName":"Senegal","sa":3,"sb":2,"ch":"FS1","city":"Seattle","dallas":false,"wa":true,"wb":false},{"id":"s82","iso":"2026-07-02T00:00Z","grp":null,"stage":"r32","state":"in","aAbbr":"USA","aName":"USA","bAbbr":"BIH","bName":"Bosnia-Herz","sa":0,"sb":0,"ch":"FOX","city":"San Francisco","dallas":false},{"id":"s83","iso":"2026-07-02T19:00Z","grp":null,"stage":"r32","state":"pre","aAbbr":"ESP","aName":"Spain","bAbbr":"AUT","bName":"Austria","sa":0,"sb":0,"ch":"FOX","city":"Los Angeles","dallas":false},{"id":"s84","iso":"2026-07-02T23:00Z","grp":null,"stage":"r32","state":"pre","aAbbr":"POR","aName":"Portugal","bAbbr":"CRO","bName":"Croatia","sa":0,"sb":0,"ch":"FOX","city":"Toronto","dallas":false},{"id":"s85","iso":"2026-07-03T03:00Z","grp":null,"stage":"r32","state":"pre","aAbbr":"SUI","aName":"Switzerland","bAbbr":"ALG","bName":"Algeria","sa":0,"sb":0,"ch":"FS1","city":"Vancouver","dallas":false},{"id":"s86","iso":"2026-07-03T18:00Z","grp":null,"stage":"r32","state":"pre","aAbbr":"AUS","aName":"Australia","bAbbr":"EGY","bName":"Egypt","sa":0,"sb":0,"ch":"FOX","city":"Dallas","dallas":true},{"id":"s87","iso":"2026-07-03T22:00Z","grp":null,"stage":"r32","state":"pre","aAbbr":"ARG","aName":"Argentina","bAbbr":"CPV","bName":"Cape Verde","sa":0,"sb":0,"ch":"FOX","city":"Miami","dallas":false},{"id":"s88","iso":"2026-07-04T01:30Z","grp":null,"stage":"r32","state":"pre","aAbbr":"COL","aName":"Colombia","bAbbr":"GHA","bName":"Ghana","sa":0,"sb":0,"ch":"FOX","city":"Kansas City","dallas":false},{"id":"s89","iso":"2026-07-04T17:00Z","grp":null,"stage":"r16","state":"pre","aAbbr":"CAN","aName":"Canada","bAbbr":"MAR","bName":"Morocco","sa":0,"sb":0,"ch":"FOX","city":"Houston","dallas":false},{"id":"s90","iso":"2026-07-04T21:00Z","grp":null,"stage":"r16","state":"pre","aAbbr":"PAR","aName":"Paraguay","bAbbr":"FRA","bName":"France","sa":0,"sb":0,"ch":"FOX","city":"Philadelphia","dallas":false},{"id":"s91","iso":"2026-07-05T20:00Z","grp":null,"stage":"r16","state":"pre","aAbbr":"BRA","aName":"Brazil","bAbbr":"NOR","bName":"Norway","sa":0,"sb":0,"ch":"FOX","city":"New Jersey","dallas":false},{"id":"s92","iso":"2026-07-06T00:00Z","grp":null,"stage":"r16","state":"pre","aAbbr":"MEX","aName":"Mexico","bAbbr":"ENG","bName":"England","sa":0,"sb":0,"ch":"FOX","city":"Mexico City","dallas":false},{"id":"s93","iso":"2026-07-06T19:00Z","grp":null,"stage":"r16","state":"pre","aAbbr":"","aName":"RD32 W11","bAbbr":"","bName":"RD32 W12","sa":0,"sb":0,"ch":"FOX","city":"Dallas","dallas":true},{"id":"s94","iso":"2026-07-07T00:00Z","grp":null,"stage":"r16","state":"pre","aAbbr":"","aName":"RD32 W9","bAbbr":"BEL","bName":"Belgium","sa":0,"sb":0,"ch":"FOX","city":"Seattle","dallas":false},{"id":"s95","iso":"2026-07-07T16:00Z","grp":null,"stage":"r16","state":"pre","aAbbr":"","aName":"RD32 W14","bAbbr":"","bName":"RD32 W16","sa":0,"sb":0,"ch":"FOX","city":"Atlanta","dallas":false},{"id":"s96","iso":"2026-07-07T20:00Z","grp":null,"stage":"r16","state":"pre","aAbbr":"","aName":"RD32 W13","bAbbr":"","bName":"RD32 W15","sa":0,"sb":0,"ch":"FOX","city":"Vancouver","dallas":false},{"id":"s97","iso":"2026-07-09T20:00Z","grp":null,"stage":"qf","state":"pre","aAbbr":"","aName":"RD16 W1","bAbbr":"","bName":"RD16 W2","sa":0,"sb":0,"ch":"FOX","city":"Boston","dallas":false},{"id":"s98","iso":"2026-07-10T19:00Z","grp":null,"stage":"qf","state":"pre","aAbbr":"","aName":"RD16 W5","bAbbr":"","bName":"RD16 W6","sa":0,"sb":0,"ch":"FOX","city":"Los Angeles","dallas":false},{"id":"s99","iso":"2026-07-11T21:00Z","grp":null,"stage":"qf","state":"pre","aAbbr":"","aName":"RD16 W3","bAbbr":"","bName":"RD16 W4","sa":0,"sb":0,"ch":"FOX","city":"Miami","dallas":false},{"id":"s100","iso":"2026-07-12T01:00Z","grp":null,"stage":"qf","state":"pre","aAbbr":"","aName":"RD16 W7","bAbbr":"","bName":"RD16 W8","sa":0,"sb":0,"ch":"FOX","city":"Kansas City","dallas":false},{"id":"s101","iso":"2026-07-14T19:00Z","grp":null,"stage":"sf","state":"pre","aAbbr":"QFW1","aName":"QF W1","bAbbr":"QFW2","bName":"QF W2","sa":0,"sb":0,"ch":"FOX","city":"Dallas","dallas":true},{"id":"s102","iso":"2026-07-15T19:00Z","grp":null,"stage":"sf","state":"pre","aAbbr":"QFW3","aName":"QF W3","bAbbr":"QW4","bName":"QF W4","sa":0,"sb":0,"ch":"FOX","city":"Atlanta","dallas":false},{"id":"s103","iso":"2026-07-18T21:00Z","grp":null,"stage":"sf","state":"pre","aAbbr":"","aName":"SF L1","bAbbr":"","bName":"SF L2","sa":0,"sb":0,"ch":"FOX","city":"Miami","dallas":false},{"id":"s104","iso":"2026-07-19T19:00Z","grp":null,"stage":"sf","state":"pre","aAbbr":"SFW1","aName":"SF W1","bAbbr":"SFW2","bName":"SF W2","sa":0,"sb":0,"ch":"FOX","city":"New Jersey","dallas":false}];
function seedToMatches(){return SEED.map(function(s){return {id:s.id,date:new Date(s.iso),grp:s.grp,stage:s.stage,state:s.state,a:{abbr:s.aAbbr,name:s.aName},b:{abbr:s.bAbbr,name:s.bName},sa:s.sa,sb:s.sb,winA:!!s.wa,winB:!!s.wb,detail:s.state==='post'?'FT':(s.state==='in'?'LIVE':''),clock:'',ch:s.ch,venueCity:s.city,venueName:'',dallas:s.dallas};});}

let MATCHES=[], curStage="all", curQ="", openGroups=new Set(), pollTimer=null, lastPayload=null;

/* ---------- helpers ---------- */
function fmtDay(d){return d.toLocaleDateString('en-US',{timeZone:TZ,weekday:'short',month:'short',day:'numeric'});}
function fmtTime(d){return d.toLocaleTimeString('en-US',{timeZone:TZ,hour:'numeric',minute:'2-digit'});}
function fmtShortDay(d){return d.toLocaleDateString('en-US',{timeZone:TZ,month:'short',day:'numeric'});}
function cacheSet(s){try{localStorage.setItem(CACHE_KEY,s);}catch(e){}}
function cacheGet(){try{return localStorage.getItem(CACHE_KEY);}catch(e){return null;}}

function pickChannel(names){
  if(!names) return "";
  if(names.includes("FOX")) return "FOX";
  if(names.includes("FS1")) return "FS1";
  const tv=names.find(n=>n!=="Peacock"&&n!=="Tele"&&n!=="Telemundo"&&n!=="Universo");
  return tv||names[0]||"";
}
function stageOf(note,date){
  if(note){
    const g=note.match(/Group ([A-L])/i);
    if(g) return {grp:g[1].toUpperCase(),stage:"group"};
    const n=note.toLowerCase();
    if(n.includes("round of 32"))return{grp:null,stage:"r32"};
    if(n.includes("round of 16"))return{grp:null,stage:"r16"};
    if(n.includes("quarter"))return{grp:null,stage:"qf"};
    if(n.includes("semi"))return{grp:null,stage:"sf"};
    if(n.includes("third")||n.includes("3rd")||n.includes("final"))return{grp:null,stage:"sf"};
  }
  // fallback by date (UTC ms)
  const t=date.getTime(), D=(y,m,d)=>Date.UTC(y,m,d);
  if(t<D(2026,5,28))return{grp:null,stage:"group"};
  if(t<D(2026,6,4))return{grp:null,stage:"r32"};
  if(t<D(2026,6,8))return{grp:null,stage:"r16"};
  if(t<D(2026,6,13))return{grp:null,stage:"qf"};
  return{grp:null,stage:"sf"};
}
function isDallas(comp){
  const v=comp.venue||{}; const city=(v.address&&v.address.city)||"";
  return /AT&T/i.test(v.fullName||"")||/Arlington|Dallas/i.test(city);
}

/* ---------- parse ESPN ---------- */
function parseEvents(json){
  const out=[];
  (json.events||[]).forEach(ev=>{
    const comp=(ev.competitions&&ev.competitions[0])||{};
    const date=new Date(ev.date);
    const st=stageOf(comp.altGameNote||ev.name,date);
    const cs=comp.competitors||[];
    const home=cs.find(c=>c.homeAway==="home")||cs[0]||{};
    const away=cs.find(c=>c.homeAway==="away")||cs[1]||{};
    const stType=(comp.status&&comp.status.type)||{};
    const state=stType.state||"pre";          // pre | in | post
    const names=(comp.broadcasts&&comp.broadcasts[0]&&comp.broadcasts[0].names)||[];
    const team=c=>({abbr:(c.team&&c.team.abbreviation)||"",
                    name:(c.team&&(c.team.shortDisplayName||c.team.displayName))||"TBD"});
    out.push({
      id:ev.id, date, grp:st.grp, stage:st.stage, state,
      a:team(home), b:team(away),
      sa:home.score!=null&&home.score!==""?parseInt(home.score):null,
      sb:away.score!=null&&away.score!==""?parseInt(away.score):null,
      winA:!!home.winner, winB:!!away.winner,
      detail:stType.shortDetail||stType.detail||"",
      clock:(comp.status&&comp.status.displayClock)||"",
      ch:pickChannel(names),
      venueCity:(comp.venue&&comp.venue.address&&comp.venue.address.city)||"",
      venueName:(comp.venue&&comp.venue.fullName)||"",
      dallas:isDallas(comp)
    });
  });
  out.sort((x,y)=>x.date-y.date);
  return out;
}

/* ---------- merge live data onto the complete seed ---------- */
function keyTeams(d,a,b){return new Date(d).toISOString().slice(0,10)+"|"+[a,b].sort().join("-");}
function keyTime(d){return new Date(d).toISOString().slice(0,16);}
function applyLive(base,live){
  const byTeams={},byTime={};
  base.forEach(m=>{
    if(m.a.abbr&&m.b.abbr)byTeams[keyTeams(m.date,m.a.abbr,m.b.abbr)]=m;
    else byTime[keyTime(m.date)]=m;            // knockout placeholders
  });
  (live||[]).forEach(L=>{
    let m=(L.a.abbr&&L.b.abbr)?byTeams[keyTeams(L.date,L.a.abbr,L.b.abbr)]:null;
    if(!m)m=byTime[keyTime(L.date)];
    if(!m)return;
    m.state=L.state;m.sa=L.sa;m.sb=L.sb;m.detail=L.detail;m.clock=L.clock;
    m.winA=L.winA;m.winB=L.winB;
    if(L.ch)m.ch=L.ch;
    if(L.venueName)m.venueName=L.venueName;
    if(!m.a.abbr&&L.a.abbr)m.a={abbr:L.a.abbr,name:L.a.name};
    if(!m.b.abbr&&L.b.abbr)m.b={abbr:L.b.abbr,name:L.b.name};
  });
  return base;
}

/* ---------- standings ---------- */
function computeStandings(matches){
  const groups={};
  matches.forEach(m=>{
    if(!m.grp) return;
    groups[m.grp]=groups[m.grp]||{};
    [m.a,m.b].forEach(t=>{ if(t.abbr) groups[m.grp][t.abbr]=groups[m.grp][t.abbr]||{abbr:t.abbr,name:t.name,w:0,d:0,l:0,gf:0,ga:0,pts:0}; });
  });
  matches.forEach(m=>{
    if(!m.grp||m.state!=="post"||m.sa==null||m.sb==null) return;
    const G=groups[m.grp]; if(!G||!G[m.a.abbr]||!G[m.b.abbr]) return;
    const A=G[m.a.abbr], B=G[m.b.abbr];
    A.gf+=m.sa;A.ga+=m.sb;B.gf+=m.sb;B.ga+=m.sa;
    if(m.sa>m.sb){A.w++;B.l++;A.pts+=3;}
    else if(m.sb>m.sa){B.w++;A.l++;B.pts+=3;}
    else{A.d++;B.d++;A.pts++;B.pts++;}
  });
  const sorted={};
  Object.keys(groups).sort().forEach(g=>{
    sorted[g]=Object.values(groups[g]).map(t=>({...t,gd:t.gf-t.ga}))
      .sort((p,q)=>q.pts-p.pts||q.gd-p.gd||q.gf-p.gf||p.name.localeCompare(q.name));
  });
  return sorted;
}

/* ---------- country flags (native emoji) ---------- */
var ISO={MEX:'MX',RSA:'ZA',KOR:'KR',CZE:'CZ',CAN:'CA',BIH:'BA',QAT:'QA',SUI:'CH',BRA:'BR',MAR:'MA',
HTI:'HT',HAI:'HT',USA:'US',AUS:'AU',TUR:'TR',PAR:'PY',GER:'DE',CUW:'CW',CIV:'CI',ECU:'EC',NED:'NL',
JPN:'JP',SWE:'SE',TUN:'TN',BEL:'BE',EGY:'EG',IRN:'IR',NZL:'NZ',ESP:'ES',URU:'UY',KSA:'SA',CPV:'CV',
FRA:'FR',SEN:'SN',NOR:'NO',IRQ:'IQ',ARG:'AR',AUT:'AT',JOR:'JO',DZA:'DZ',ALG:'DZ',COL:'CO',COD:'CD',
CGO:'CD',POR:'PT',UZB:'UZ',GHA:'GH',PAN:'PA',CRO:'HR'};
var NMAP={'south africa':'ZA','korea':'KR','czechia':'CZ','bosnia':'BA','switzerland':'CH','morocco':'MA',
'haiti':'HT','australia':'AU','turkiye':'TR','turkey':'TR','paraguay':'PY','germany':'DE','curacao':'CW',
'ivory coast':'CI','ecuador':'EC','netherlands':'NL','japan':'JP','sweden':'SE','tunisia':'TN','belgium':'BE',
'egypt':'EG','iran':'IR','new zealand':'NZ','spain':'ES','uruguay':'UY','saudi arabia':'SA','cape verde':'CV',
'france':'FR','senegal':'SN','norway':'NO','iraq':'IQ','argentina':'AR','austria':'AT','jordan':'JO',
'algeria':'DZ','colombia':'CO','congo':'CD','portugal':'PT','uzbekistan':'UZ','ghana':'GH','panama':'PA',
'croatia':'HR','mexico':'MX','canada':'CA','qatar':'QA','brazil':'BR','scotland':'_SCO','england':'_ENG',
'united states':'US','usa':'US'};
var FENG=String.fromCodePoint(0x1F3F4,0xE0067,0xE0062,0xE0065,0xE006E,0xE0067,0xE007F);
var FSCO=String.fromCodePoint(0x1F3F4,0xE0067,0xE0062,0xE0073,0xE0063,0xE0074,0xE007F);
function emoji(cc){return cc.replace(/./g,function(c){return String.fromCodePoint(127397+c.charCodeAt(0));});}
function resolve(v){return v==='_ENG'?FENG:(v==='_SCO'?FSCO:emoji(v));}
function flag(abbr,name){
  var a=(abbr||'').toUpperCase();
  if(a==='ENG')return FENG; if(a==='SCO')return FSCO;
  if(ISO[a])return emoji(ISO[a]);
  var n=(name||'').toLowerCase().trim();
  if(NMAP[n])return resolve(NMAP[n]);
  for(var k in NMAP){ if(n.indexOf(k)>=0)return resolve(NMAP[k]); }
  return '';
}
function tn(t,bold){var f=flag(t.abbr,t.name);return (f?'<span class="flag">'+f+'</span>':'')+(bold?'<b>'+t.name+'</b>':t.name);}

/* ---------- render groups ---------- */
function gameRow(m){
  const dl=m.dallas?' dl':'';
  if(m.state==="post"){
    const aw=m.sa>m.sb,bw=m.sb>m.sa;
    return `<div class="grow${dl}"><span class="gleft">${fmtShortDay(m.date)}</span>
      <div class="gmatch">${tn(m.a,aw)}<span class="sc">${m.sa}–${m.sb}</span>${tn(m.b,bw)}</div>
      <span class="gright ft">FT</span></div>`;
  }
  if(m.state==="in"){
    return `<div class="grow${dl}"><span class="gleft"><span class="livetag blink">● LIVE</span><span class="tt">${m.clock||m.detail||''}</span></span>
      <div class="gmatch">${tn(m.a)}<span class="sc">${m.sa??0}–${m.sb??0}</span>${tn(m.b)}</div>
      <span class="gright ft">live</span></div>`;
  }
  const chCls=(m.ch==="FOX"||m.ch==="FS1")?m.ch:"TV";
  return `<div class="grow${dl}"><span class="gleft">${fmtShortDay(m.date)}<span class="tt">${fmtTime(m.date)} CDT</span></span>
    <div class="gmatch">${tn(m.a)}<span class="vs">vs</span>${tn(m.b)}</div>
    <span class="gright ${chCls}">${m.ch||'TBD'}</span></div>`;
}

function renderGroups(){
  const wrap=document.getElementById('groups');
  const standings=computeStandings(MATCHES);
  const letters=Object.keys(standings);
  if(letters.length===0){wrap.innerHTML='<div class="none">Standings will appear once data loads.</div>';return;}
  wrap.innerHTML="";
  letters.forEach(g=>{
    const rows=standings[g];
    const card=document.createElement('div');card.className="gcard"+(openGroups.has(g)?" open":"");
    let table=`<div class="gkey"><span>#</span><span>Team</span><span>W-D-L</span><span>GD</span><span>Pts</span></div>`;
    rows.forEach((t,i)=>{
      table+=`<div class="trow ${i<2?'adv':''}">
        <span class="pos">${i+1}</span>
        <span class="tm"><span class="flag">${flag(t.abbr,t.name)}</span>${t.name}</span>
        <span class="wdl">${t.w}-${t.d}-${t.l}</span>
        <span class="gd">${t.gd>0?'+':''}${t.gd}</span>
        <span class="pts">${t.pts}</span></div>`;
    });
    const gm=MATCHES.filter(m=>m.grp===g);
    const played=gm.filter(m=>m.state!=="pre").map(gameRow).join("")||'<div class="gleft" style="padding:6px 4px">No matches played yet.</div>';
    const upcoming=gm.filter(m=>m.state==="pre").map(gameRow).join("")||'<div class="gleft" style="padding:6px 4px">Group complete.</div>';
    card.innerHTML=`
      <div class="ghead">
        <h3>Group <b>${g}</b></h3>
        <span class="htip">Games ${CHEV}</span>
      </div>
      <div class="gtable">${table}</div>
      <div class="gbody"><div class="gbody-inner"><div class="games">
        <div class="glabel">Results</div>${played}
        <div class="glabel" style="margin-top:12px">Upcoming</div>${upcoming}
      </div></div></div>`;
    card.querySelector('.ghead').addEventListener('click',()=>{
      card.classList.toggle('open');
      if(card.classList.contains('open'))openGroups.add(g);else openGroups.delete(g);
    });
    wrap.appendChild(card);
  });
}

/* ---------- render schedule ---------- */
const STAGEL={group:"Group Stage",r32:"Round of 32",r16:"Round of 16",qf:"Quarterfinals",sf:"Semis · Final"};
function passStage(m){
  if(curStage==="all")return true;
  if(curStage==="dallas")return m.dallas;
  if(curStage==="usa")return m.a.abbr==="USA"||m.b.abbr==="USA"||/\bUSA\b|United States/i.test(m.a.name+" "+m.b.name);
  return m.stage===curStage;
}
function passQ(m){
  if(!curQ)return true;
  return (m.a.name+" "+m.b.name+" "+m.venueCity+" "+m.ch).toLowerCase().includes(curQ);
}
function renderSchedule(){
  const list=document.getElementById('list');
  const now=Date.now();
  const GRACE=150*60*1000; // keep a match visible while it could still be in progress (~2.5h)
  const items=MATCHES.filter(m=>{
    if(!(passStage(m)&&passQ(m))) return false;
    if(m.state==="post") return false;          // completed — hide
    if(m.state==="in") return true;             // live — show
    return m.date.getTime()>=now-GRACE;         // upcoming only — drop games whose time has passed
  }).sort((a,b)=>a.date-b.date);
  list.innerHTML="";let lastDay="",dayEl=null;
  if(items.length===0){list.innerHTML='<div class="none">No live or upcoming matches match your filter.</div>';return;}
  items.forEach(m=>{
    const day=fmtDay(m.date);
    if(day!==lastDay){
      lastDay=day;dayEl=document.createElement('div');dayEl.className="day";
      const h=document.createElement('div');h.className="dayhdr";
      h.innerHTML=`<span>${day}</span><small>${STAGEL[m.stage]||''}</small>`;
      dayEl.appendChild(h);list.appendChild(dayEl);
    }
    const live=m.state==="in";
    const chCls=(m.ch==="FOX"||m.ch==="FS1")?m.ch:"TV";
    const r=document.createElement('div');r.className="row"+(m.dallas?" dl":"")+(live?" lv":"")+(isFav(m)?" fav":"");
    const timecell=live
      ? `<span class="livep blink">● LIVE</span><span class="clk">${m.clock||m.detail||''}</span>`
      : (m.state==="post"?`${fmtTime(m.date)}<small>FT</small>`:`${fmtTime(m.date)}<small>CDT</small>`);
    const score=(live||m.sa!=null)?`<span class="sc">${m.sa??0}–${m.sb??0}</span>`:"";
    r.innerHTML=`
      <div class="time">${timecell}</div>
      <div class="match">${tn(m.a)} <span class="vs" style="color:var(--mut);font-size:12px">vs</span> ${tn(m.b)}${score}${m.dallas?'<span class="dlflag">▸ DALLAS</span>':''}<span class="stage">${m.grp?'Group '+m.grp:(STAGEL[m.stage]||'')}</span></div>
      <div class="venue"><b>${m.venueCity||m.venueName||''}</b>${m.venueName||''}</div>
      <div class="ch ${chCls}">${m.ch||'TBD'}</div>`;
    dayEl.appendChild(r);
  });
}

/* ---------- today's games ---------- */
function renderToday(){
  const host=document.getElementById('today');
  const today=new Date().toLocaleDateString('en-US',{timeZone:TZ,weekday:'short',month:'short',day:'numeric'});
  const dl=document.getElementById('todayDate'); if(dl)dl.textContent=today;
  const items=MATCHES.filter(m=>fmtDay(m.date)===today).sort((x,y)=>x.date-y.date);
  if(items.length===0){host.innerHTML='<div class="none" style="padding:16px">No matches today — upcoming games are in the schedule below.</div>';return;}
  host.innerHTML=items.map(function(m){
    const live=m.state==='in', post=m.state==='post';
    const chCls=(m.ch==='FOX'||m.ch==='FS1')?m.ch:'TV';
    let when;
    if(live) when='<span class="livep blink">● LIVE</span>'+(m.clock?'<span class="clk">'+m.clock+'</span>':'');
    else if(post) when=fmtTime(m.date)+'<small>FT</small>';
    else when=fmtTime(m.date)+'<small>CDT</small>';
    const hasScore=live||m.sa!=null;
    const scoreReveal=hasScore
      ?'<div class="tscore-drop">'+tn(m.a,post&&m.sa>m.sb)+' <span class="sc">'+(m.sa==null?0:m.sa)+'–'+(m.sb==null?0:m.sb)+'</span> '+tn(m.b,post&&m.sb>m.sa)+(post?' <span class="sclabel">Final</span>':live?' <span class="sclabel">Live</span>':'')+'</div>'
      :'';
    const hint=hasScore?'<span class="score-hint">▾ tap to reveal score</span>':'';
    const clickAttr=hasScore?' role="button" tabindex="0" aria-expanded="false"'
      +' onclick="this.classList.toggle(\'open\');this.setAttribute(\'aria-expanded\',this.classList.contains(\'open\'))"'
      +' onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();this.click()}"':'';
    return '<div class="tgame'+(m.dallas?' dl':'')+(live?' lv':'')+(isFav(m)?' fav':'')+(hasScore?' has-score':'')+'"'+clickAttr+'>'
      +'<div class="ttime">'+when+'</div>'
      +'<div class="tmatch">'+tn(m.a,false)+' <span class="vs">vs</span> '+tn(m.b,false)+hint+'</div>'
      +'<div class="ch '+chCls+'">'+(m.ch||'TBD')+'</div>'
      +scoreReveal+'</div>';
  }).join('');
}

/* ---------- round of 32 ---------- */
function r32Outcome(m){
  if(m.state!=='post'||m.sa==null||m.sb==null) return null;
  const hasFlag=(m.winA===true||m.winB===true);
  const winA=hasFlag?m.winA===true:m.sa>m.sb;
  const winB=hasFlag?m.winB===true:m.sb>m.sa;
  if(!winA&&!winB) return null;                 // undecided / level with no winner flag
  const pens=/pen|pso|shootout|\(p\)/i.test((m.detail||'')+' '+(m.clock||''));
  return winA?{winner:m.a,pens:pens}:{winner:m.b,pens:pens};
}
function renderR32(){
  const host=document.getElementById('r32list');
  if(!host) return;
  const sumEl=document.getElementById('r32sum');
  const tabcnt=document.getElementById('r32tabcnt');
  const items=MATCHES.filter(m=>m.stage==='r32').sort((a,b)=>a.date-b.date);
  const total=items.length;
  const played=items.filter(m=>m.state==='post').length;
  const live=items.filter(m=>m.state==='in').length;
  if(tabcnt) tabcnt.textContent=total?('· '+played+'/'+total):'';
  if(sumEl) sumEl.innerHTML=
    '<div class="r32stat"><div class="n">'+total+'</div><div class="l">Ties</div></div>'+
    '<div class="r32stat"><div class="n">'+played+'</div><div class="l">Decided</div></div>'+
    (live?'<div class="r32stat"><div class="n">'+live+'</div><div class="l">Live now</div></div>':'')+
    '<div class="r32stat"><div class="n">'+(total-played)+'</div><div class="l">Remaining</div></div>';
  if(total===0){host.innerHTML='<div class="none" style="padding:16px">Round of 32 fixtures will appear once the bracket is set.</div>';return;}
  let html='',lastDay='';
  items.forEach(function(m){
    const day=fmtDay(m.date);
    if(day!==lastDay){lastDay=day;html+='<div class="r32day">'+day+'</div>';}
    const isLive=m.state==='in', post=m.state==='post', oc=r32Outcome(m);
    const chCls=(m.ch==='FOX'||m.ch==='FS1')?m.ch:'TV';
    let when;
    if(isLive) when='<span class="livep blink">● LIVE</span>'+(m.clock?'<small>'+m.clock+'</small>':'');
    else if(post) when=fmtTime(m.date)+'<small>FT</small>';
    else when=fmtTime(m.date)+'<small>CDT</small>';
    const showScore=isLive||post||m.sa!=null;
    const mid=showScore
      ? '<span class="sc">'+(m.sa==null?0:m.sa)+'–'+(m.sb==null?0:m.sb)+'</span>'
      : '<span class="vs">vs</span>';
    const teams=tn(m.a,!!(oc&&oc.winner===m.a))+' '+mid+' '+tn(m.b,!!(oc&&oc.winner===m.b));
    let foot;
    if(oc) foot='<div class="r32adv">→ '+oc.winner.name+' advance to Round of 16'+(oc.pens?'<span class="pens">(on penalties)</span>':'')+'</div>';
    else if(isLive) foot='<div class="r32tag">In progress'+(m.clock?(' · '+m.clock):'')+'</div>';
    else foot='<div class="r32tag">Winner advances to Round of 16</div>';
    html+='<div class="r32card'+(m.dallas?' dl':'')+(isLive?' lv':'')+(post?' done':'')+(isFav(m)?' fav':'')+'">'
      +'<div class="r32when">'+when+'</div>'
      +'<div class="r32teams">'+teams+'</div>'
      +'<div class="r32meta"><b>'+(m.venueCity||'TBD')+'</b><span class="ch '+chCls+'">'+(m.ch||'TBD')+'</span></div>'
      +foot+'</div>';
  });
  host.innerHTML=html;
  renderBracket();
}

/* ---------- knockout bracket ---------- */
// Fixed knockout tree (FIFA match numbering, verified against ESPN feeder refs: RD16 W1 = 1st R16 match, QF W1 = 1st QF, etc.).
// Column position p feeds parent floor(p/2) in the next column.
const BRACKET={columns:[
  {key:'r32',label:'Round of 32',ids:['s75','s73','s74','s77','s83','s84','s81','s82','s76','s78','s79','s80','s86','s88','s85','s87']},
  {key:'r16',label:'Round of 16',ids:['s89','s90','s93','s94','s91','s92','s95','s96']},
  {key:'qf',label:'Quarterfinals',ids:['s97','s98','s99','s100']},
  {key:'sf',label:'Semifinals',ids:['s101','s102']},
  {key:'final',label:'Final',ids:['s104']}
],thirdId:'s103'};
let bktSel=null, bktLit=null;
function bIsPlaceholder(t){return !t.abbr && /^(winner|runner|3rd|quarterfinal|semifinal|third|final|tbd|rd32|rd16|qf|sf)\b/i.test(t.name||'');}
function bRow(team,score,won,lost,showScore){
  const f=flag(team.abbr,team.name), pl=bIsPlaceholder(team);
  return '<div class="bteam'+(won?' win':'')+(lost?' los':'')+'">'
    +(f?'<span class="flag">'+f+'</span>':'')
    +'<span class="bnm'+(pl?' bplc':'')+'">'+team.name+'</span>'
    +(showScore?'<span class="bsc">'+(score==null?'':score)+'</span>':'')
    +'</div>';
}
function bMakeNode(m,ci,pi){
  const live=m.state==='in', post=m.state==='post', oc=r32Outcome(m);
  const showScore=live||post||m.sa!=null;
  const aWon=!!(oc&&oc.winner===m.a), bWon=!!(oc&&oc.winner===m.b);
  const el=document.createElement('div');
  el.className='bnode'+(m.dallas?' dl':'')+(live?' live':'')+(post?' done':'')+(isFav(m)?' fav':'');
  el.dataset.id=m.id; el.dataset.col=ci; el.dataset.pos=pi;
  el.innerHTML=bRow(m.a,m.sa,aWon,post&&!aWon,showScore)+bRow(m.b,m.sb,bWon,post&&!bWon,showScore);
  el.setAttribute('role','button');el.tabIndex=0;
  el.setAttribute('aria-label',m.a.name+' versus '+m.b.name+(post?', final score '+m.sa+' to '+m.sb:''));
  el.addEventListener('click',function(){bktSelect(m.id);});
  el.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();bktSelect(m.id);}});
  return el;
}
function renderBracket(){
  const inner=document.getElementById('bktInner'); if(!inner) return;
  const byId={}; MATCHES.forEach(m=>byId[m.id]=m);
  Array.from(inner.querySelectorAll('.bcol')).forEach(e=>e.remove());
  BRACKET.columns.forEach(function(col,ci){
    const c=document.createElement('div'); c.className='bcol'+(col.key==='final'?' bfinal':'');
    const h=document.createElement('div'); h.className='bcolh'; h.textContent=col.label; c.appendChild(h);
    col.ids.forEach(function(id,pi){ const m=byId[id]; if(m) c.appendChild(bMakeNode(m,ci,pi)); });
    inner.appendChild(c);
  });
  const third=document.getElementById('bthird');
  if(third){
    third.innerHTML='';
    if(BRACKET.thirdId&&byId[BRACKET.thirdId]){
      const h=document.createElement('div'); h.className='bcolh'; h.textContent='Third-Place Match'; third.appendChild(h);
      const n=bMakeNode(byId[BRACKET.thirdId],-1,-1); n.style.maxWidth='240px'; third.appendChild(n);
    }
  }
  if(bktSel&&!byId[bktSel]) bktSel=null;
  applyBracketSelection();
  requestAnimationFrame(drawBracketConnectors);
}
function bktSelect(id){ bktSel=(bktSel===id?null:id); applyBracketSelection(); drawBracketConnectors(); }
function applyBracketSelection(){
  const inner=document.getElementById('bktInner'); if(!inner) return;
  const nodes=Array.from(inner.querySelectorAll('.bnode'));
  nodes.forEach(n=>n.classList.remove('sel','lit'));
  const lit=new Set();
  if(bktSel){
    const sel=nodes.find(n=>n.dataset.id===bktSel);
    if(sel && +sel.dataset.col>=0){
      const c=+sel.dataset.col, p=+sel.dataset.pos, last=BRACKET.columns.length-1;
      lit.add(c+':'+p);
      let cc=c,pp=p; while(cc<last){pp=Math.floor(pp/2);cc++;lit.add(cc+':'+pp);}            // path to final
      (function down(col,pos){ if(col<=0)return; lit.add((col-1)+':'+(pos*2)); lit.add((col-1)+':'+(pos*2+1)); down(col-1,pos*2); down(col-1,pos*2+1); })(c,p); // feeders
    }
  }
  nodes.forEach(function(n){
    const k=n.dataset.col+':'+n.dataset.pos;
    if(n.dataset.id===bktSel) n.classList.add('sel');
    else if(lit.has(k)) n.classList.add('lit');
  });
  bktLit=lit;
  renderBracketDetail();
}
function drawBracketConnectors(){
  const inner=document.getElementById('bktInner'), svg=document.getElementById('bktSvg');
  if(!inner||!svg||inner.offsetParent===null) return;                                       // skip when hidden
  const W=inner.scrollWidth, H=inner.scrollHeight;
  svg.setAttribute('width',W); svg.setAttribute('height',H);
  const map={};
  inner.querySelectorAll('.bnode').forEach(function(n){ const c=+n.dataset.col; if(c<0)return; (map[c]=map[c]||{})[+n.dataset.pos]=n; });
  let paths=''; const last=BRACKET.columns.length-1;
  for(let c=0;c<last;c++){
    const col=map[c]; if(!col)continue;
    Object.keys(col).forEach(function(ps){
      const p=+ps, child=col[p], parent=(map[c+1]||{})[Math.floor(p/2)]; if(!parent)return;
      const cx=child.offsetLeft+child.offsetWidth, cy=child.offsetTop+child.offsetHeight/2;
      const px=parent.offsetLeft, py=parent.offsetTop+parent.offsetHeight/2, mx=(cx+px)/2;
      const on=bktLit&&bktLit.has(c+':'+p)&&bktLit.has((c+1)+':'+Math.floor(p/2));
      paths+='<path d="M'+cx+' '+cy+' H'+mx+' V'+py+' H'+px+'" fill="none" stroke="'+(on?'#00e8ff':'rgba(0,232,255,.32)')+'" stroke-width="'+(on?2:1.5)+'" opacity="'+(on?0.95:0.6)+'"/>';
    });
  }
  svg.innerHTML=paths;
}
function renderBracketDetail(){
  const box=document.getElementById('bdetail'); if(!box) return;
  if(!bktSel){ box.innerHTML='<span class="none2">Tap any match in the bracket to see details, the result, and the highlighted path to the Final.</span>'; return; }
  const m=MATCHES.find(x=>x.id===bktSel); if(!m){ box.innerHTML=''; return; }
  const oc=r32Outcome(m), live=m.state==='in', post=m.state==='post';
  const col=BRACKET.columns.find(c=>c.ids.indexOf(m.id)>=0);
  const label=col?col.label:(m.id===BRACKET.thirdId?'Third-Place Match':'Knockout');
  const head=(live||post||m.sa!=null)?(m.a.name+' '+(m.sa==null?0:m.sa)+'–'+(m.sb==null?0:m.sb)+' '+m.b.name):(m.a.name+' vs '+m.b.name);
  let html='<h4>'+head+'</h4><div class="meta"><span>'+label+'</span><span>'+fmtDay(m.date)+' · '+fmtTime(m.date)+' CDT</span><span>'+(m.venueCity||'TBD')+(m.dallas?' · Dallas':'')+'</span><span>'+(m.ch||'TBD')+'</span>'+(live?'<span style="color:var(--live)">● LIVE'+(m.clock?' '+m.clock:'')+'</span>':'')+'</div>';
  if(oc) html+='<div class="adv">→ '+oc.winner.name+' advance'+(oc.pens?' (on penalties)':'')+'</div>';
  box.innerHTML=html;
}

/* ---------- follow your team ---------- */
const FOLLOW_KEY='wc2026_follow_team';
let FOLLOW=''; try{FOLLOW=localStorage.getItem(FOLLOW_KEY)||'';}catch(e){}
function isFav(m){return !!FOLLOW&&(m.a.abbr===FOLLOW||m.b.abbr===FOLLOW);}
function fmtCountdown(ms){
  if(ms<=0)return 'now';
  const mins=Math.floor(ms/60000),d=Math.floor(mins/1440),h=Math.floor(mins%1440/60),mm=mins%60;
  if(d)return d+'d '+h+'h'; if(h)return h+'h '+mm+'m'; return mm+'m';
}
function renderFollow(){
  const sel=document.getElementById('followSel'), strip=document.getElementById('fstrip');
  if(!sel||!strip)return;
  const seen={},teams=[];
  MATCHES.forEach(m=>[m.a,m.b].forEach(t=>{if(t.abbr&&!seen[t.abbr]){seen[t.abbr]=1;teams.push(t);}}));
  teams.sort((x,y)=>x.name.localeCompare(y.name));
  if(document.activeElement!==sel){  // don't rebuild while the user has the picker open
    sel.innerHTML='<option value="">Follow a team…</option>'
      +teams.map(t=>'<option value="'+t.abbr+'"'+(t.abbr===FOLLOW?' selected':'')+'>'+t.name+'</option>').join('');
  }
  if(!FOLLOW){strip.hidden=true;return;}
  const tm=teams.find(t=>t.abbr===FOLLOW);
  const mine=MATCHES.filter(isFav).sort((a,b)=>a.date-b.date);
  const live=mine.find(m=>m.state==='in');
  const next=mine.find(m=>m.state==='pre');
  const played=mine.filter(m=>m.state==='post');
  const last=played[played.length-1];
  const f=tm?flag(tm.abbr,tm.name):'';
  let html='<span>'+(f?'<span class="flag">'+f+'</span>':'')+'<b>'+(tm?tm.name:FOLLOW)+'</b></span>';
  if(live){
    const opp=live.a.abbr===FOLLOW?live.b:live.a;
    html+='<span class="flv">● LIVE '+(live.sa==null?0:live.sa)+'–'+(live.sb==null?0:live.sb)+' vs '+opp.name+(live.clock?' · '+live.clock:'')+'</span>';
  }else if(next){
    const opp=next.a.abbr===FOLLOW?next.b:next.a;
    html+='<span>Next: vs '+opp.name+' · '+fmtDay(next.date)+' '+fmtTime(next.date)+' CDT · '+(next.ch||'TBD')+'</span>'
      +'<span class="cd">in '+fmtCountdown(next.date-new Date())+'</span>';
  }else if(last&&last.stage!=='group'){
    const oc=r32Outcome(last);
    if(oc&&oc.winner.abbr===FOLLOW) html+='<span class="fadv">Through to the next round — opponent TBD</span>';
    else html+='<span class="fmut">Eliminated · '+(last.sa+'–'+last.sb)+(oc?' vs '+oc.winner.name:'')+(oc&&oc.pens?' (pens)':'')+'</span>';
  }else{
    html+='<span class="fmut">No upcoming matches scheduled</span>';
  }
  html+='<button type="button" onclick="followShowPath()">Bracket path →</button>';
  strip.hidden=false; strip.innerHTML=html;
}
function followShowPath(){
  if(!FOLLOW)return;
  const ko=MATCHES.filter(m=>isFav(m)&&m.stage!=='group').sort((a,b)=>a.date-b.date);
  const target=ko.find(m=>m.state==='in')||ko.find(m=>m.state==='pre')||ko[ko.length-1];
  if(target)bktSel=target.id;
  document.querySelector('#tabnav button[data-view="r32"]').click();
  document.querySelector('#r32switch button[data-mode="bracket"]').click();
  const el=document.getElementById('bktInner');
  if(el)setTimeout(function(){el.scrollIntoView({behavior:'smooth',block:'center'});},60);
}

/* ---------- status / live indicator ---------- */
function updateStatus(fromCache){
  const live=MATCHES.filter(m=>m.state==="in");
  const lb=document.getElementById('livebadge');
  const kl=document.getElementById('kickline');
  const now=new Date().toLocaleTimeString('en-US',{timeZone:TZ,hour:'numeric',minute:'2-digit',second:'2-digit'});
  if(live.length){
    lb.innerHTML='<span class="livedot"></span>';
    kl.textContent=live.length+" match"+(live.length>1?"es":"")+" live now";
  }else{
    lb.innerHTML='';
    kl.textContent="FIFA World Cup · USA · Canada · Mexico";
  }
  const u=document.getElementById('updated');
  if(fromCache){ u.textContent="Snapshot "+SNAPSHOT+" — open in a web browser for live updates"; }
  else { u.textContent="Updated "+now+(live.length?" · live, auto-refreshing every 30s":""); }
}

/* ---------- load + poll ---------- */
async function load(manual){
  const btn=document.getElementById('refreshBtn');
  if(manual)btn.classList.add('spin');
  try{
    const res=await fetch(API+"&_="+Date.now(),{cache:"no-store"});
    if(!res.ok) throw new Error("HTTP "+res.status);
    const txt=await res.text();
    if(!manual&&txt===lastPayload){updateStatus(false);schedulePoll();return;}  // nothing changed — keep UI state (open cards, selections)
    const json=JSON.parse(txt);
    const live=parseEvents(json);
    if(live.length===0) throw new Error("no events");
    lastPayload=txt;
    MATCHES=applyLive(seedToMatches(), live);   // seed = full schedule, ESPN = live overlay
    cacheSet(txt);
    document.getElementById('banner').classList.remove('show');
    renderToday();renderGroups();renderSchedule();renderR32();renderFollow();updateStatus(false);
    schedulePoll();
  }catch(err){
    let cached=cacheGet(), used=false;
    if(cached){ try{ MATCHES=applyLive(seedToMatches(), parseEvents(JSON.parse(cached))); used=true; }catch(e){} }
    if(!used){ MATCHES=seedToMatches(); }
    renderToday();renderGroups();renderSchedule();renderR32();renderFollow();updateStatus(true);
    showBanner((used?"Showing the last live data saved on this device":"Showing the built-in snapshot from "+SNAPSHOT)+". Live scores need a network connection — if you're viewing this inside an app preview, download the file and open it in Safari or Chrome, then tap Refresh.","soft");
  }finally{
    if(manual)setTimeout(()=>btn.classList.remove('spin'),500);
  }
}
function showBanner(msg,cls){const b=document.getElementById('banner');b.textContent=msg;b.className='banner show'+(cls?(' '+cls):'');}
function schedulePoll(){
  if(pollTimer)clearTimeout(pollTimer);
  const anyLive=MATCHES.some(m=>m.state==="in");
  const anySoon=MATCHES.some(m=>m.state==="pre"&&(m.date-new Date())<30*60000&&(m.date-new Date())>-3*3600000);
  const interval=anyLive?30000:(anySoon?60000:300000); // 30s live, 1m near kickoff, else 5m
  pollTimer=setTimeout(()=>load(false),interval);
}

/* ---------- controls ---------- */
document.querySelectorAll('button.f').forEach(b=>{
  b.addEventListener('click',()=>{
    document.querySelectorAll('button.f').forEach(x=>x.classList.remove('on'));
    b.classList.add('on');curStage=b.dataset.s;renderSchedule();
  });
});
document.getElementById('q').addEventListener('input',e=>{curQ=e.target.value.toLowerCase().trim();renderSchedule();});
document.getElementById('refreshBtn').addEventListener('click',()=>load(true));
(function(){
  var t=document.getElementById('groupsToggle'),c=document.getElementById('groupsCollapse'),h=document.getElementById('grpHint');
  function toggle(){var open=c.classList.toggle('open');t.classList.toggle('open',open);if(h)h.textContent=open?'Hide':'Show';}
  t.addEventListener('click',toggle);
  t.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle();}});
})();
(function(){
  var nav=document.getElementById('tabnav');
  var views={main:document.getElementById('view-main'),r32:document.getElementById('view-r32')};
  nav.querySelectorAll('button').forEach(function(btn){
    btn.addEventListener('click',function(){
      var v=btn.dataset.view;
      nav.querySelectorAll('button').forEach(function(x){x.classList.toggle('on',x===btn);x.setAttribute('aria-selected',x===btn?'true':'false');});
      Object.keys(views).forEach(function(k){if(views[k])views[k].hidden=(k!==v);});
      if(v==='r32'){renderR32();requestAnimationFrame(drawBracketConnectors);}
      window.scrollTo({top:0,behavior:'smooth'});
    });
  });
})();
(function(){
  var sw=document.getElementById('r32switch');
  var modes={list:document.getElementById('r32mode-list'),bracket:document.getElementById('r32mode-bracket')};
  sw.querySelectorAll('button').forEach(function(b){
    b.addEventListener('click',function(){
      var mode=b.dataset.mode;
      sw.querySelectorAll('button').forEach(function(x){x.classList.toggle('on',x===b);});
      Object.keys(modes).forEach(function(k){if(modes[k])modes[k].hidden=(k!==mode);});
      if(mode==='bracket'){renderBracket();requestAnimationFrame(drawBracketConnectors);}
    });
  });
})();
(function(){var rT=null;window.addEventListener('resize',function(){clearTimeout(rT);rT=setTimeout(drawBracketConnectors,120);});})();
document.getElementById('followSel').addEventListener('change',function(e){
  FOLLOW=e.target.value;
  try{localStorage.setItem(FOLLOW_KEY,FOLLOW);}catch(err){}
  renderToday();renderSchedule();renderR32();renderFollow();
});
setInterval(function(){if(FOLLOW)renderFollow();},30000);  // keep the countdown fresh
document.addEventListener('visibilitychange',()=>{if(!document.hidden)load(false);});

MATCHES=seedToMatches();renderToday();renderGroups();renderSchedule();renderR32();renderFollow();updateStatus(true);
load(false);
