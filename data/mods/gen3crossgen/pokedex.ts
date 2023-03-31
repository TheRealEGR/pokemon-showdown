export const Pokedex: {[k: string]: ModdedSpeciesData} = {
bulbasaur: {
	"num": 1,
	"name": "Bulbasaur",
	"types": [
		"Grass",
		"Poison"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 45,
		"atk": 49,
		"def": 49,
		"spa": 65,
		"spd": 65,
		"spe": 45
	},
	"abilities": {
		"0": "Overgrow"
	},
	"weightkg": 6.9,
	"evos": [
		"Ivysaur"
	],
	"eggGroups": [
		"Monster",
		"Grass"
	]
},
ivysaur: {
	"num": 2,
	"name": "Ivysaur",
	"types": [
		"Grass",
		"Poison"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 60,
		"atk": 62,
		"def": 63,
		"spa": 80,
		"spd": 80,
		"spe": 60
	},
	"abilities": {
		"0": "Overgrow"
	},
	"weightkg": 13,
	"prevo": "Bulbasaur",
	"evoLevel": 16,
	"evos": [
		"Venusaur"
	],
	"eggGroups": [
		"Monster",
		"Grass"
	]
},
venusaur: {
	"num": 3,
	"name": "Venusaur",
	"types": [
		"Grass",
		"Poison"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 80,
		"atk": 82,
		"def": 83,
		"spa": 100,
		"spd": 100,
		"spe": 80
	},
	"abilities": {
		"0": "Overgrow",
	},
	"weightkg": 100,
	"prevo": "Ivysaur",
	"evoLevel": 32,
	"eggGroups": [
		"Monster",
		"Grass"
]
},
charmander: {
	"num": 4,
	"name": "Charmander",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 39,
		"atk": 52,
		"def": 43,
		"spa": 60,
		"spd": 50,
		"spe": 65
	},
	"abilities": {
		"0": "Blaze"
	},
	"weightkg": 8.5,
	"evos": [
		"Charmeleon"
	],
	"eggGroups": [
		"Monster",
		"Dragon"
	]
},
charmeleon: {
	"num": 5,
	"name": "Charmeleon",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 58,
		"atk": 64,
		"def": 58,
		"spa": 80,
		"spd": 65,
		"spe": 80
	},
	"abilities": {
		"0": "Blaze"
	},
	"weightkg": 19,
	"prevo": "Charmander",
	"evoLevel": 16,
	"evos": [
		"Charizard"
	],
	"eggGroups": [
		"Monster",
		"Dragon"
	]
},
charizard: {
	"num": 6,
	"name": "Charizard",
	"types": [
		"Fire",
		"Flying"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 78,
		"atk": 84,
		"def": 78,
		"spa": 109,
		"spd": 85,
		"spe": 100
	},
	"abilities": {
		"0": "Blaze"
	},
	"weightkg": 90.5,
	"prevo": "Charmeleon",
	"evoLevel": 36,
	"eggGroups": [
		"Monster",
		"Dragon"
]
},
squirtle: {
	"num": 7,
	"name": "Squirtle",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 44,
		"atk": 48,
		"def": 65,
		"spa": 50,
		"spd": 64,
		"spe": 43
	},
	"abilities": {
		"0": "Torrent"
	},
	"weightkg": 9,
	"evos": [
		"Wartortle"
	],
	"eggGroups": [
		"Monster",
		"Water 1"
	]
},
wartortle: {
	"num": 8,
	"name": "Wartortle",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 59,
		"atk": 63,
		"def": 80,
		"spa": 65,
		"spd": 80,
		"spe": 58
	},
	"abilities": {
		"0": "Torrent"
	},
	"weightkg": 22.5,
	"prevo": "Squirtle",
	"evoLevel": 16,
	"evos": [
		"Blastoise"
	],
	"eggGroups": [
		"Monster",
		"Water 1"
	]
},
blastoise: {
	"num": 9,
	"name": "Blastoise",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 79,
		"atk": 83,
		"def": 100,
		"spa": 85,
		"spd": 105,
		"spe": 78
	},
	"abilities": {
		"0": "Torrent"
	},
	"weightkg": 85.5,
	"prevo": "Wartortle",
	"evoLevel": 36,
	"eggGroups": [
		"Monster",
		"Water 1"
		]
},
caterpie: {
	"num": 10,
	"name": "Caterpie",
	"types": [
		"Bug"
	],
	"baseStats": {
		"hp": 45,
		"atk": 30,
		"def": 35,
		"spa": 20,
		"spd": 20,
		"spe": 45
	},
	"abilities": {
		"0": "Shield Dust",
		"1": "Run Away"
	},
	"weightkg": 2.9,
	"evos": [
		"Metapod"
	],
	"eggGroups": [
		"Bug"
	]
},
metapod: {
	"num": 11,
	"name": "Metapod",
	"types": [
		"Bug"
	],
	"baseStats": {
		"hp": 50,
		"atk": 20,
		"def": 55,
		"spa": 25,
		"spd": 25,
		"spe": 30
	},
	"abilities": {
		"0": "Shed Skin"
	},
	"weightkg": 9.9,
	"prevo": "Caterpie",
	"evoLevel": 7,
	"evos": [
		"Butterfree"
	],
	"eggGroups": [
		"Bug"
	]
},
butterfree: {
	"num": 12,
	"name": "Butterfree",
	"types": [
		"Bug",
		"Flying"
	],
	"baseStats": {
		"hp": 60,
		"atk": 45,
		"def": 50,
		"spa": 90,
		"spd": 80,
		"spe": 70
	},
	"abilities": {
		"0": "Compound Eyes"
	},
	"weightkg": 32,
	"prevo": "Metapod",
	"evoLevel": 10,
	"eggGroups": [
		"Bug"
		]
},
weedle: {
	"num": 13,
	"name": "Weedle",
	"types": [
		"Bug",
		"Poison"
	],
	"baseStats": {
		"hp": 40,
		"atk": 35,
		"def": 30,
		"spa": 20,
		"spd": 20,
		"spe": 50
	},
	"abilities": {
		"0": "Shield Dust",
		"1": "Run Away"
	},
	"weightkg": 3.2,
	"evos": [
		"Kakuna"
	],
	"eggGroups": [
		"Bug"
	]
},
kakuna: {
	"num": 14,
	"name": "Kakuna",
	"types": [
		"Bug",
		"Poison"
	],
	"baseStats": {
		"hp": 45,
		"atk": 25,
		"def": 50,
		"spa": 25,
		"spd": 25,
		"spe": 35
	},
	"abilities": {
		"0": "Shed Skin"
	},
	"weightkg": 10,
	"prevo": "Weedle",
	"evoLevel": 7,
	"evos": [
		"Beedrill"
	],
	"eggGroups": [
		"Bug"
	]
},
beedrill: {
	"num": 15,
	"name": "Beedrill",
	"types": [
		"Bug",
		"Poison"
	],
	"baseStats": {
		"hp": 65,
		"atk": 90,
		"def": 40,
		"spa": 45,
		"spd": 80,
		"spe": 75
	},
	"abilities": {
		"0": "Swarm"
	},
	"weightkg": 29.5,
	"prevo": "Kakuna",
	"evoLevel": 10,
	"eggGroups": [
		"Bug"
		]
},
pidgey: {
	"num": 16,
	"name": "Pidgey",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 40,
		"atk": 45,
		"def": 40,
		"spa": 35,
		"spd": 35,
		"spe": 56
	},
	"abilities": {
		"0": "Keen Eye"
	},
	"weightkg": 1.8,
	"evos": [
		"Pidgeotto"
	],
	"eggGroups": [
		"Flying"
	]
},
pidgeotto: {
	"num": 17,
	"name": "Pidgeotto",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 63,
		"atk": 60,
		"def": 55,
		"spa": 50,
		"spd": 50,
		"spe": 71
	},
	"abilities": {
		"0": "Keen Eye"
	},
	"weightkg": 30,
	"prevo": "Pidgey",
	"evoLevel": 18,
	"evos": [
		"Pidgeot"
	],
	"eggGroups": [
		"Flying"
	]
},
pidgeot: {
	"num": 18,
	"name": "Pidgeot",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 83,
		"atk": 80,
		"def": 75,
		"spa": 70,
		"spd": 70,
		"spe": 101
	},
	"abilities": {
		"0": "Keen Eye"
	},
	"weightkg": 39.5,
	"prevo": "Pidgeotto",
	"evoLevel": 36,
	"eggGroups": [
		"Flying"
		]
},
rattata: {
	"num": 19,
	"name": "Rattata",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 30,
		"atk": 56,
		"def": 35,
		"spa": 25,
		"spd": 35,
		"spe": 72
	},
	"abilities": {
		"0": "Run Away",
		"1": "Guts"
	},
	"weightkg": 3.5,
	"evos": [
		"Raticate"
	],
	"eggGroups": [
		"Field"
		]
},
raticate: {
	"num": 20,
	"name": "Raticate",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 55,
		"atk": 81,
		"def": 60,
		"spa": 50,
		"spd": 70,
		"spe": 97
	},
	"abilities": {
		"0": "Run Away",
		"1": "Guts"
	},
	"weightkg": 18.5,
	"prevo": "Rattata",
	"evoLevel": 20,
	"eggGroups": [
		"Field"
		]
},
spearow: {
	"num": 21,
	"name": "Spearow",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 40,
		"atk": 60,
		"def": 30,
		"spa": 31,
		"spd": 31,
		"spe": 70
	},
	"abilities": {
		"0": "Keen Eye"
	},
	"weightkg": 2,
	"evos": [
		"Fearow"
	],
	"eggGroups": [
		"Flying"
	]
},
fearow: {
	"num": 22,
	"name": "Fearow",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 65,
		"atk": 90,
		"def": 65,
		"spa": 61,
		"spd": 61,
		"spe": 100
	},
	"abilities": {
		"0": "Keen Eye"
	},
	"weightkg": 38,
	"prevo": "Spearow",
	"evoLevel": 20,
	"eggGroups": [
		"Flying"
	]
},
ekans: {
	"num": 23,
	"name": "Ekans",
	"types": [
		"Poison"
	],
	"baseStats": {
		"hp": 35,
		"atk": 60,
		"def": 44,
		"spa": 40,
		"spd": 54,
		"spe": 55
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Shed Skin"
	},
	"weightkg": 6.9,
	"evos": [
		"Arbok"
	],
	"eggGroups": [
		"Field",
		"Dragon"
	]
},
arbok: {
	"num": 24,
	"name": "Arbok",
	"types": [
		"Poison"
	],
	"baseStats": {
		"hp": 60,
		"atk": 95,
		"def": 69,
		"spa": 65,
		"spd": 79,
		"spe": 80
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Shed Skin"
	},
	"weightkg": 65,
	"prevo": "Ekans",
	"evoLevel": 22,
	"eggGroups": [
		"Field",
		"Dragon"
	]
},
pikachu: {
	"num": 25,
	"name": "Pikachu",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 35,
		"atk": 55,
		"def": 40,
		"spa": 50,
		"spd": 50,
		"spe": 90
	},
	"abilities": {
		"0": "Static",
		"1": "Lightning Rod"
	},
	"weightkg": 6,
	"prevo": "Pichu",
	"evoType": "levelFriendship",
	"evos": [
		"Raichu"
	],
	"eggGroups": [
		"Field",
		"Fairy"
		]
},
raichu: {
	"num": 26,
	"name": "Raichu",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 60,
		"atk": 90,
		"def": 55,
		"spa": 90,
		"spd": 80,
		"spe": 110
	},
	"abilities": {
		"0": "Static",
		"1": "Lightning Rod"
	},
	"weightkg": 30,
	"prevo": "Pikachu",
	"evoType": "useItem",
	"evoItem": "Thunder Stone",
	"eggGroups": [
		"Field",
		"Fairy"
		]
},
sandshrew: {
	"num": 27,
	"name": "Sandshrew",
	"types": [
		"Ground"
	],
	"baseStats": {
		"hp": 50,
		"atk": 75,
		"def": 85,
		"spa": 20,
		"spd": 30,
		"spe": 40
	},
	"abilities": {
		"0": "Sand Veil"
	},
	"weightkg": 12,
	"evos": [
		"Sandslash"
	],
	"eggGroups": [
		"Field"
		]
},
sandslash: {
	"num": 28,
	"name": "Sandslash",
	"types": [
		"Ground"
	],
	"baseStats": {
		"hp": 75,
		"atk": 100,
		"def": 110,
		"spa": 45,
		"spd": 55,
		"spe": 65
	},
	"abilities": {
		"0": "Sand Veil"
	},
	"weightkg": 29.5,
	"prevo": "Sandshrew",
	"evoLevel": 22,
	"eggGroups": [
		"Field"
		]
},
nidoranf: {
	"num": 29,
	"name": "Nidoran-F",
	"types": [
		"Poison"
	],
	"gender": "F",
	"baseStats": {
		"hp": 55,
		"atk": 47,
		"def": 52,
		"spa": 40,
		"spd": 40,
		"spe": 41
	},
	"abilities": {
		"0": "Poison Point",
	},
	"weightkg": 7,
	"evos": [
		"Nidorina"
	],
	"eggGroups": [
		"Monster",
		"Field"
	]
},
nidorina: {
	"num": 30,
	"name": "Nidorina",
	"types": [
		"Poison"
	],
	"gender": "F",
	"baseStats": {
		"hp": 70,
		"atk": 62,
		"def": 67,
		"spa": 55,
		"spd": 55,
		"spe": 56
	},
	"abilities": {
		"0": "Poison Point"
	},
	"weightkg": 20,
	"prevo": "Nidoran-F",
	"evoLevel": 16,
	"evos": [
		"Nidoqueen"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
nidoqueen: {
	"num": 31,
	"name": "Nidoqueen",
	"types": [
		"Poison",
		"Ground"
	],
	"gender": "F",
	"baseStats": {
		"hp": 90,
		"atk": 92,
		"def": 87,
		"spa": 75,
		"spd": 85,
		"spe": 76
	},
	"abilities": {
		"0": "Poison Point"
	},
	"weightkg": 60,
	"prevo": "Nidorina",
	"evoType": "useItem",
	"evoItem": "Moon Stone",
	"eggGroups": [
		"Undiscovered"
	]
},
nidoranm: {
	"num": 32,
	"name": "Nidoran-M",
	"types": [
		"Poison"
	],
	"gender": "M",
	"baseStats": {
		"hp": 46,
		"atk": 57,
		"def": 40,
		"spa": 40,
		"spd": 40,
		"spe": 50
	},
	"abilities": {
		"0": "Poison Point"
	},
	"weightkg": 9,
	"evos": [
		"Nidorino"
	],
	"eggGroups": [
		"Monster",
		"Field"
	]
},
nidorino: {
	"num": 33,
	"name": "Nidorino",
	"types": [
		"Poison"
	],
	"gender": "M",
	"baseStats": {
		"hp": 61,
		"atk": 72,
		"def": 57,
		"spa": 55,
		"spd": 55,
		"spe": 65
	},
	"abilities": {
		"0": "Poison Point"
	},
	"weightkg": 19.5,
	"prevo": "Nidoran-M",
	"evoLevel": 16,
	"evos": [
		"Nidoking"
	],
	"eggGroups": [
		"Monster",
		"Field"
	]
},
nidoking: {
	"num": 34,
	"name": "Nidoking",
	"types": [
		"Poison",
		"Ground"
	],
	"gender": "M",
	"baseStats": {
		"hp": 81,
		"atk": 102,
		"def": 77,
		"spa": 85,
		"spd": 75,
		"spe": 85
	},
	"abilities": {
		"0": "Poison Point"
	},
	"weightkg": 62,
	"prevo": "Nidorino",
	"evoType": "useItem",
	"evoItem": "Moon Stone",
	"eggGroups": [
		"Monster",
		"Field"
	]
},
clefairy: {
	"num": 35,
	"name": "Clefairy",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 70,
		"atk": 45,
		"def": 48,
		"spa": 60,
		"spd": 65,
		"spe": 35
	},
	"abilities": {
		"0": "Cute Charm"
	},
	"weightkg": 7.5,
	"prevo": "Cleffa",
	"evoType": "levelFriendship",
	"evos": [
		"Clefable"
	],
	"eggGroups": [
		"Fairy"
	]
},
clefable: {
	"num": 36,
	"name": "Clefable",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 95,
		"atk": 70,
		"def": 73,
		"spa": 95,
		"spd": 90,
		"spe": 60
	},
	"abilities": {
		"0": "Cute Charm"
	},
	"weightkg": 40,
	"prevo": "Clefairy",
	"evoType": "useItem",
	"evoItem": "Moon Stone",
	"eggGroups": [
		"Fairy"
	]
},
vulpix: {
	"num": 37,
	"name": "Vulpix",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 38,
		"atk": 41,
		"def": 40,
		"spa": 50,
		"spd": 65,
		"spe": 65
	},
	"abilities": {
		"0": "Flash Fire"
	},
	"weightkg": 9.9,
	"evos": [
		"Ninetales"
	],
	"eggGroups": [
		"Field"
		]
},
ninetales: {
	"num": 38,
	"name": "Ninetales",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 73,
		"atk": 76,
		"def": 75,
		"spa": 81,
		"spd": 100,
		"spe": 100
	},
	"abilities": {
		"0": "Flash Fire"
	},
	"weightkg": 19.9,
	"prevo": "Vulpix",
	"evoType": "useItem",
	"evoItem": "Fire Stone",
	"eggGroups": [
		"Field"
		]
},
jigglypuff: {
	"num": 39,
	"name": "Jigglypuff",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 115,
		"atk": 45,
		"def": 20,
		"spa": 45,
		"spd": 25,
		"spe": 20
	},
	"abilities": {
		"0": "Cute Charm"
	},
	"weightkg": 5.5,
	"prevo": "Igglybuff",
	"evoType": "levelFriendship",
	"evos": [
		"Wigglytuff"
	],
	"eggGroups": [
		"Fairy"
	]
},
wigglytuff: {
	"num": 40,
	"name": "Wigglytuff",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 140,
		"atk": 70,
		"def": 45,
		"spa": 85,
		"spd": 50,
		"spe": 45
	},
	"abilities": {
		"0": "Cute Charm"
	},
	"weightkg": 12,
	"prevo": "Jigglypuff",
	"evoType": "useItem",
	"evoItem": "Moon Stone",
	"eggGroups": [
		"Fairy"
	]
},
zubat: {
	"num": 41,
	"name": "Zubat",
	"types": [
		"Poison",
		"Flying"
	],
	"baseStats": {
		"hp": 40,
		"atk": 45,
		"def": 35,
		"spa": 30,
		"spd": 40,
		"spe": 55
	},
	"abilities": {
		"0": "Inner Focus"
	},
	"weightkg": 7.5,
	"evos": [
		"Golbat"
	],
	"eggGroups": [
		"Flying"
	]
},
golbat: {
	"num": 42,
	"name": "Golbat",
	"types": [
		"Poison",
		"Flying"
	],
	"baseStats": {
		"hp": 75,
		"atk": 80,
		"def": 70,
		"spa": 65,
		"spd": 75,
		"spe": 90
	},
	"abilities": {
		"0": "Inner Focus"
	},
	"weightkg": 55,
	"prevo": "Zubat",
	"evoLevel": 22,
	"evos": [
		"Crobat"
	],
	"eggGroups": [
		"Flying"
	]
},
oddish: {
	"num": 43,
	"name": "Oddish",
	"types": [
		"Grass",
		"Poison"
	],
	"baseStats": {
		"hp": 45,
		"atk": 50,
		"def": 55,
		"spa": 75,
		"spd": 65,
		"spe": 30
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Run Away"
	},
	"weightkg": 5.4,
	"evos": [
		"Gloom"
	],
	"eggGroups": [
		"Grass"
	]
},
gloom: {
	"num": 44,
	"name": "Gloom",
	"types": [
		"Grass",
		"Poison"
	],
	"baseStats": {
		"hp": 60,
		"atk": 65,
		"def": 70,
		"spa": 85,
		"spd": 75,
		"spe": 40
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Stench"
	},
	"weightkg": 8.6,
	"prevo": "Oddish",
	"evoLevel": 21,
	"evos": [
		"Vileplume",
		"Bellossom"
	],
	"eggGroups": [
		"Grass"
	]
},
vileplume: {
	"num": 45,
	"name": "Vileplume",
	"types": [
		"Grass",
		"Poison"
	],
	"baseStats": {
		"hp": 75,
		"atk": 80,
		"def": 85,
		"spa": 110,
		"spd": 90,
		"spe": 50
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Effect Spore"
	},
	"weightkg": 18.6,
	"prevo": "Gloom",
	"evoType": "useItem",
	"evoItem": "Leaf Stone",
	"eggGroups": [
		"Grass"
	]
},
paras: {
	"num": 46,
	"name": "Paras",
	"types": [
		"Bug",
		"Grass"
	],
	"baseStats": {
		"hp": 35,
		"atk": 70,
		"def": 55,
		"spa": 45,
		"spd": 55,
		"spe": 25
	},
	"abilities": {
		"0": "Effect Spore",
		"1": "Damp"
	},
	"weightkg": 5.4,
	"evos": [
		"Parasect"
	],
	"eggGroups": [
		"Bug",
		"Grass"
	]
},
parasect: {
	"num": 47,
	"name": "Parasect",
	"types": [
		"Bug",
		"Grass"
	],
	"baseStats": {
		"hp": 60,
		"atk": 95,
		"def": 80,
		"spa": 60,
		"spd": 80,
		"spe": 30
	},
	"abilities": {
		"0": "Effect Spore",
		"1": "Damp"
	},
	"weightkg": 29.5,
	"prevo": "Paras",
	"evoLevel": 24,
	"eggGroups": [
		"Bug",
		"Grass"
	]
},
venonat: {
	"num": 48,
	"name": "Venonat",
	"types": [
		"Bug",
		"Poison"
	],
	"baseStats": {
		"hp": 60,
		"atk": 55,
		"def": 50,
		"spa": 40,
		"spd": 55,
		"spe": 45
	},
	"abilities": {
		"0": "Compound Eyes",
		"1": "Run Away"
	},
	"weightkg": 30,
	"evos": [
		"Venomoth"
	],
	"eggGroups": [
		"Bug"
	]
},
venomoth: {
	"num": 49,
	"name": "Venomoth",
	"types": [
		"Bug",
		"Poison"
	],
	"baseStats": {
		"hp": 70,
		"atk": 65,
		"def": 60,
		"spa": 90,
		"spd": 75,
		"spe": 90
	},
	"abilities": {
		"0": "Shield Dust"
	},
	"weightkg": 12.5,
	"prevo": "Venonat",
	"evoLevel": 31,
	"eggGroups": [
		"Bug"
	]
},
diglett: {
	"num": 50,
	"name": "Diglett",
	"types": [
		"Ground"
	],
	"baseStats": {
		"hp": 10,
		"atk": 55,
		"def": 25,
		"spa": 35,
		"spd": 45,
		"spe": 95
	},
	"abilities": {
		"0": "Sand Veil",
		"1": "Arena Trap"
	},
	"weightkg": 0.8,
	"evos": [
		"Dugtrio"
	],
	"eggGroups": [
		"Field"
		]
},
dugtrio: {
	"num": 51,
	"name": "Dugtrio",
	"types": [
		"Ground"
	],
	"baseStats": {
		"hp": 35,
		"atk": 100,
		"def": 50,
		"spa": 50,
		"spd": 70,
		"spe": 120
	},
	"abilities": {
		"0": "Illuminate",
		"1": "Arena Trap"
	},
	"weightkg": 33.3,
	"prevo": "Diglett",
	"evoLevel": 26,
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Dugtrio-Alola"
	],
	"formeOrder": [
		"Dugtrio",
		"Dugtrio-Alola"
	]
},
dugtrioalola: {
	"num": 51,
	"name": "Dugtrio-Alola",
	"baseSpecies": "Dugtrio",
	"forme": "Alola",
	"types": [
		"Ground",
		"Steel"
	],
	"baseStats": {
		"hp": 35,
		"atk": 100,
		"def": 60,
		"spa": 50,
		"spd": 70,
		"spe": 110
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 66.6,
	"prevo": "Diglett-Alola",
	"evoLevel": 26,
	"eggGroups": [
		"Field"
	]
},
meowth: {
	"num": 52,
	"name": "Meowth",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 40,
		"atk": 45,
		"def": 35,
		"spa": 40,
		"spd": 40,
		"spe": 90
	},
	"abilities": {
		"0": "Pickup",
		"1": "Illuminate"
	},
	"weightkg": 4.2,
	"evos": [
		"Persian"
	],
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Meowth-Alola",
		"Meowth-Galar"
	],
	"formeOrder": [
		"Meowth",
		"Meowth-Alola",
		"Meowth-Galar"
	],
	"canGigantamax": "G-Max Gold Rush"
},
meowthalola: {
	"num": 52,
	"name": "Meowth-Alola",
	"baseSpecies": "Meowth",
	"forme": "Alola",
	"types": [
		"Dark"
	],
	"baseStats": {
		"hp": 40,
		"atk": 35,
		"def": 35,
		"spa": 50,
		"spd": 40,
		"spe": 90
	},
	"abilities": {
		"0": "Pickup",
		"1": "Illuminate"
	},
	"weightkg": 4.2,
	"evos": [
		"Persian-Alola"
	],
	"eggGroups": [
		"Field"
	]
},
meowthgalar: {
	"num": 52,
	"name": "Meowth-Galar",
	"baseSpecies": "Meowth",
	"forme": "Galar",
	"types": [
		"Steel"
	],
	"baseStats": {
		"hp": 50,
		"atk": 65,
		"def": 55,
		"spa": 40,
		"spd": 40,
		"spe": 40
	},
	"abilities": {
		"0": "Pickup",
		"1": "Illuminate"
	},
	"weightkg": 7.5,
	"evos": [
		"Perrserker"
	],
	"eggGroups": [
		"Field"
	]
},
meowthgmax: {
	"num": 52,
	"name": "Meowth-Gmax",
	"baseSpecies": "Meowth",
	"forme": "Gmax",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 40,
		"atk": 45,
		"def": 35,
		"spa": 40,
		"spd": 40,
		"spe": 90
	},
	"abilities": {
		"0": "Pickup",
		"1": "Illuminate"
	},
	"weightkg": 0,
	"eggGroups": [
		"Field"
	],
	"changesFrom": "Meowth"
},
persian: {
	"num": 53,
	"name": "Persian",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 65,
		"atk": 70,
		"def": 60,
		"spa": 65,
		"spd": 65,
		"spe": 115
	},
	"abilities": {
		"0": "Limber",
		"1": "Illuminate"
	},
	"weightkg": 32,
	"prevo": "Meowth",
	"evoLevel": 28,
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Persian-Alola"
	],
	"formeOrder": [
		"Persian",
		"Persian-Alola"
	]
},
persianalola: {
	"num": 53,
	"name": "Persian-Alola",
	"baseSpecies": "Persian",
	"forme": "Alola",
	"types": [
		"Dark"
	],
	"baseStats": {
		"hp": 65,
		"atk": 60,
		"def": 60,
		"spa": 75,
		"spd": 65,
		"spe": 115
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 33,
	"prevo": "Meowth-Alola",
	"evoType": "levelFriendship",
	"eggGroups": [
		"Field"
	]
},
psyduck: {
	"num": 54,
	"name": "Psyduck",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 50,
		"atk": 52,
		"def": 48,
		"spa": 65,
		"spd": 50,
		"spe": 55
	},
	"abilities": {
		"0": "Damp",
		"1": "Cloud Nine",
		"H": "Swift Swim"
	},
	"weightkg": 19.6,
	"evos": [
		"Golduck"
	],
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
golduck: {
	"num": 55,
	"name": "Golduck",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 80,
		"atk": 82,
		"def": 78,
		"spa": 95,
		"spd": 80,
		"spe": 85
	},
	"abilities": {
		"0": "Damp",
		"1": "Cloud Nine",
		"H": "Swift Swim"
	},
	"weightkg": 76.6,
	"prevo": "Psyduck",
	"evoLevel": 33,
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
mankey: {
	"num": 56,
	"name": "Mankey",
	"types": [
		"Fighting"
	],
	"baseStats": {
		"hp": 40,
		"atk": 80,
		"def": 35,
		"spa": 35,
		"spd": 45,
		"spe": 70
	},
	"abilities": {
		"0": "Vital Spirit",
		"1": "Illuminate"
	},
	"weightkg": 28,
	"evos": [
		"Primeape"
	],
	"eggGroups": [
		"Field"
	]
},
primeape: {
	"num": 57,
	"name": "Primeape",
	"types": [
		"Fighting"
	],
	"baseStats": {
		"hp": 65,
		"atk": 105,
		"def": 60,
		"spa": 60,
		"spd": 70,
		"spe": 95
	},
	"abilities": {
		"0": "Vital Spirit",
		"1": "Illuminate"
	},
	"weightkg": 32,
	"prevo": "Mankey",
	"evoLevel": 28,
	"eggGroups": [
		"Field"
	]
},
growlithe: {
	"num": 58,
	"name": "Growlithe",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 55,
		"atk": 70,
		"def": 45,
		"spa": 70,
		"spd": 50,
		"spe": 60
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Flash Fire"
	},
	"weightkg": 19,
	"evos": [
		"Arcanine"
	],
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Growlithe-Hisui"
	],
	"formeOrder": [
		"Growlithe",
		"Growlithe-Hisui"
	]
},
growlithehisui: {
	"num": 58,
	"name": "Growlithe-Hisui",
	"baseSpecies": "Growlithe",
	"forme": "Hisui",
	"types": [
		"Fire",
		"Rock"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 60,
		"atk": 75,
		"def": 45,
		"spa": 65,
		"spd": 50,
		"spe": 55
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Flash Fire"
	},
	"weightkg": 22.7,
	"evos": [
		"Arcanine-Hisui"
	],
	"eggGroups": [
		"Field"
	]
},
arcanine: {
	"num": 59,
	"name": "Arcanine",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 90,
		"atk": 110,
		"def": 80,
		"spa": 100,
		"spd": 80,
		"spe": 95
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Flash Fire"
	},
	"weightkg": 155,
	"prevo": "Growlithe",
	"evoType": "useItem",
	"evoItem": "Fire Stone",
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Arcanine-Hisui"
	],
	"formeOrder": [
		"Arcanine",
		"Arcanine-Hisui"
	]
},
arcaninehisui: {
	"num": 59,
	"name": "Arcanine-Hisui",
	"baseSpecies": "Arcanine",
	"forme": "Hisui",
	"types": [
		"Fire",
		"Rock"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 95,
		"atk": 115,
		"def": 80,
		"spa": 95,
		"spd": 80,
		"spe": 90
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Flash Fire"
	},
	"weightkg": 168,
	"prevo": "Growlithe-Hisui",
	"evoType": "useItem",
	"evoItem": "Fire Stone",
	"eggGroups": [
		"Field"
	]
},
poliwag: {
	"num": 60,
	"name": "Poliwag",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 40,
		"atk": 50,
		"def": 40,
		"spa": 40,
		"spd": 40,
		"spe": 90
	},
	"abilities": {
		"0": "Water Absorb",
		"1": "Damp",
		"H": "Swift Swim"
	},
	"weightkg": 12.4,
	"evos": [
		"Poliwhirl"
	],
	"eggGroups": [
		"Water 1"
	]
},
poliwhirl: {
	"num": 61,
	"name": "Poliwhirl",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 65,
		"atk": 65,
		"def": 65,
		"spa": 50,
		"spd": 50,
		"spe": 90
	},
	"abilities": {
		"0": "Water Absorb",
		"1": "Damp",
		"H": "Swift Swim"
	},
	"weightkg": 20,
	"prevo": "Poliwag",
	"evoLevel": 25,
	"evos": [
		"Poliwrath",
		"Politoed"
	],
	"eggGroups": [
		"Water 1"
	]
},
poliwrath: {
	"num": 62,
	"name": "Poliwrath",
	"types": [
		"Water",
		"Fighting"
	],
	"baseStats": {
		"hp": 90,
		"atk": 95,
		"def": 95,
		"spa": 70,
		"spd": 90,
		"spe": 70
	},
	"abilities": {
		"0": "Water Absorb",
		"1": "Damp",
		"H": "Swift Swim"
	},
	"weightkg": 54,
	"prevo": "Poliwhirl",
	"evoType": "useItem",
	"evoItem": "Water Stone",
	"eggGroups": [
		"Water 1"
	]
},
abra: {
	"num": 63,
	"name": "Abra",
	"types": [
		"Psychic"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 25,
		"atk": 20,
		"def": 15,
		"spa": 105,
		"spd": 55,
		"spe": 90
	},
	"abilities": {
		"0": "Synchronize",
		"1": "Inner Focus"
	},
	"weightkg": 19.5,
	"evos": [
		"Kadabra"
	],
	"eggGroups": [
		"Human-Like"
	]
},
kadabra: {
	"num": 64,
	"name": "Kadabra",
	"types": [
		"Psychic"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 40,
		"atk": 35,
		"def": 30,
		"spa": 120,
		"spd": 70,
		"spe": 105
	},
	"abilities": {
		"0": "Synchronize",
		"1": "Inner Focus"
	},
	"weightkg": 56.5,
	"prevo": "Abra",
	"evoLevel": 16,
	"evos": [
		"Alakazam"
	],
	"eggGroups": [
		"Human-Like"
	]
},
alakazam: {
	"num": 65,
	"name": "Alakazam",
	"types": [
		"Psychic"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 55,
		"atk": 50,
		"def": 45,
		"spa": 135,
		"spd": 95,
		"spe": 120
	},
	"abilities": {
		"0": "Synchronize",
		"1": "Inner Focus"
	},
	"weightkg": 48,
	"prevo": "Kadabra",
	"evoType": "trade",
	"eggGroups": [
		"Human-Like"
	],
	"otherFormes": [
		"Alakazam-Mega"
	],
	"formeOrder": [
		"Alakazam",
		"Alakazam-Mega"
	]
},
alakazammega: {
	"num": 65,
	"name": "Alakazam-Mega",
	"baseSpecies": "Alakazam",
	"forme": "Mega",
	"types": [
		"Psychic"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 55,
		"atk": 50,
		"def": 55,
		"spa": 155,
		"spd": 100,
		"spe": 135
	},
	"abilities": {
		"0": "Trace"
	},
	"weightkg": 48,
	"eggGroups": [
		"Human-Like"
	]
},
machop: {
	"num": 66,
	"name": "Machop",
	"types": [
		"Fighting"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 70,
		"atk": 80,
		"def": 50,
		"spa": 35,
		"spd": 35,
		"spe": 35
	},
	"abilities": {
		"0": "Guts",
		"1": "Illuminate"
	},
	"weightkg": 19.5,
	"evos": [
		"Machoke"
	],
	"eggGroups": [
		"Human-Like"
	]
},
machoke: {
	"num": 67,
	"name": "Machoke",
	"types": [
		"Fighting"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 80,
		"atk": 100,
		"def": 70,
		"spa": 50,
		"spd": 60,
		"spe": 45
	},
	"abilities": {
		"0": "Guts",
		"1": "Illuminate"
	},
	"weightkg": 70.5,
	"prevo": "Machop",
	"evoLevel": 28,
	"evos": [
		"Machamp"
	],
	"eggGroups": [
		"Human-Like"
	]
},
machamp: {
	"num": 68,
	"name": "Machamp",
	"types": [
		"Fighting"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 90,
		"atk": 130,
		"def": 80,
		"spa": 65,
		"spd": 85,
		"spe": 55
	},
	"abilities": {
		"0": "Guts",
		"1": "Illuminate"
	},
	"weightkg": 130,
	"prevo": "Machoke",
	"evoType": "trade",
	"eggGroups": [
		"Human-Like"
	],
	"canGigantamax": "G-Max Chi Strike"
},
machampgmax: {
	"num": 68,
	"name": "Machamp-Gmax",
	"baseSpecies": "Machamp",
	"forme": "Gmax",
	"types": [
		"Fighting"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 90,
		"atk": 130,
		"def": 80,
		"spa": 65,
		"spd": 85,
		"spe": 55
	},
	"abilities": {
		"0": "Guts",
		"1": "Illuminate"
	},
	"weightkg": 0,
	"eggGroups": [
		"Human-Like"
	],
	"changesFrom": "Machamp"
},
bellsprout: {
	"num": 69,
	"name": "Bellsprout",
	"types": [
		"Grass",
		"Poison"
	],
	"baseStats": {
		"hp": 50,
		"atk": 75,
		"def": 35,
		"spa": 70,
		"spd": 30,
		"spe": 40
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Illuminate"
	},
	"weightkg": 4,
	"evos": [
		"Weepinbell"
	],
	"eggGroups": [
		"Grass"
	]
},
weepinbell: {
	"num": 70,
	"name": "Weepinbell",
	"types": [
		"Grass",
		"Poison"
	],
	"baseStats": {
		"hp": 65,
		"atk": 90,
		"def": 50,
		"spa": 85,
		"spd": 45,
		"spe": 55
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Illuminate"
	},
	"weightkg": 6.4,
	"prevo": "Bellsprout",
	"evoLevel": 21,
	"evos": [
		"Victreebel"
	],
	"eggGroups": [
		"Grass"
	]
},
victreebel: {
	"num": 71,
	"name": "Victreebel",
	"types": [
		"Grass",
		"Poison"
	],
	"baseStats": {
		"hp": 80,
		"atk": 105,
		"def": 65,
		"spa": 100,
		"spd": 70,
		"spe": 70
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Illuminate"
	},
	"weightkg": 15.5,
	"prevo": "Weepinbell",
	"evoType": "useItem",
	"evoItem": "Leaf Stone",
	"eggGroups": [
		"Grass"
	]
},
tentacool: {
	"num": 72,
	"name": "Tentacool",
	"types": [
		"Water",
		"Poison"
	],
	"baseStats": {
		"hp": 40,
		"atk": 40,
		"def": 35,
		"spa": 50,
		"spd": 100,
		"spe": 70
	},
	"abilities": {
		"0": "Clear Body",
		"1": "Liquid Ooze",
		"H": "Rain Dish"
	},
	"weightkg": 45.5,
	"evos": [
		"Tentacruel"
	],
	"eggGroups": [
		"Water 3"
	]
},
tentacruel: {
	"num": 73,
	"name": "Tentacruel",
	"types": [
		"Water",
		"Poison"
	],
	"baseStats": {
		"hp": 80,
		"atk": 70,
		"def": 65,
		"spa": 80,
		"spd": 120,
		"spe": 100
	},
	"abilities": {
		"0": "Clear Body",
		"1": "Liquid Ooze",
		"H": "Rain Dish"
	},
	"weightkg": 55,
	"prevo": "Tentacool",
	"evoLevel": 30,
	"eggGroups": [
		"Water 3"
	]
},
geodude: {
	"num": 74,
	"name": "Geodude",
	"types": [
		"Rock",
		"Ground"
	],
	"baseStats": {
		"hp": 40,
		"atk": 80,
		"def": 100,
		"spa": 30,
		"spd": 30,
		"spe": 20
	},
	"abilities": {
		"0": "Rock Head",
		"1": "Sturdy"
	},
	"weightkg": 20,
	"evos": [
		"Graveler"
	],
	"eggGroups": [
		"Mineral"
	],
	"otherFormes": [
		"Geodude-Alola"
	],
	"formeOrder": [
		"Geodude",
		"Geodude-Alola"
	]
},
geodudealola: {
	"num": 74,
	"name": "Geodude-Alola",
	"baseSpecies": "Geodude",
	"forme": "Alola",
	"types": [
		"Rock",
		"Electric"
	],
	"baseStats": {
		"hp": 40,
		"atk": 80,
		"def": 100,
		"spa": 30,
		"spd": 30,
		"spe": 20
	},
	"abilities": {
		"0": "Magnet Pull",
		"1": "Sturdy"
	},
	"weightkg": 20.3,
	"evos": [
		"Graveler-Alola"
	],
	"eggGroups": [
		"Mineral"
	]
},
graveler: {
	"num": 75,
	"name": "Graveler",
	"types": [
		"Rock",
		"Ground"
	],
	"baseStats": {
		"hp": 55,
		"atk": 95,
		"def": 115,
		"spa": 45,
		"spd": 45,
		"spe": 35
	},
	"abilities": {
		"0": "Rock Head",
		"1": "Sturdy"
	},
	"weightkg": 105,
	"prevo": "Geodude",
	"evoLevel": 25,
	"evos": [
		"Golem"
	],
	"eggGroups": [
		"Mineral"
	],
	"otherFormes": [
		"Graveler-Alola"
	],
	"formeOrder": [
		"Graveler",
		"Graveler-Alola"
	]
},
graveleralola: {
	"num": 75,
	"name": "Graveler-Alola",
	"baseSpecies": "Graveler",
	"forme": "Alola",
	"types": [
		"Rock",
		"Electric"
	],
	"baseStats": {
		"hp": 55,
		"atk": 95,
		"def": 115,
		"spa": 45,
		"spd": 45,
		"spe": 35
	},
	"abilities": {
		"0": "Magnet Pull",
		"1": "Sturdy"
	},
	"weightkg": 110,
	"prevo": "Geodude-Alola",
	"evoLevel": 25,
	"evos": [
		"Golem-Alola"
	],
	"eggGroups": [
		"Mineral"
	]
},
golem: {
	"num": 76,
	"name": "Golem",
	"types": [
		"Rock",
		"Ground"
	],
	"baseStats": {
		"hp": 80,
		"atk": 120,
		"def": 130,
		"spa": 55,
		"spd": 65,
		"spe": 45
	},
	"abilities": {
		"0": "Rock Head",
		"1": "Sturdy"
	},
	"weightkg": 300,
	"prevo": "Graveler",
	"evoType": "trade",
	"eggGroups": [
		"Mineral"
	],
	"otherFormes": [
		"Golem-Alola"
	],
	"formeOrder": [
		"Golem",
		"Golem-Alola"
	]
},
golemalola: {
	"num": 76,
	"name": "Golem-Alola",
	"baseSpecies": "Golem",
	"forme": "Alola",
	"types": [
		"Rock",
		"Electric"
	],
	"baseStats": {
		"hp": 80,
		"atk": 120,
		"def": 130,
		"spa": 55,
		"spd": 65,
		"spe": 45
	},
	"abilities": {
		"0": "Magnet Pull",
		"1": "Sturdy"
	},
	"weightkg": 316,
	"prevo": "Graveler-Alola",
	"evoType": "trade",
	"eggGroups": [
		"Mineral"
	]
},
ponyta: {
	"num": 77,
	"name": "Ponyta",
	"types": [
		"Fire"
	],
	"baseStats": {
		"hp": 50,
		"atk": 85,
		"def": 55,
		"spa": 65,
		"spd": 65,
		"spe": 90
	},
	"abilities": {
		"0": "Run Away",
		"1": "Flash Fire",
		"H": "Flame Body"
	},
	"weightkg": 30,
	"evos": [
		"Rapidash"
	],
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Ponyta-Galar"
	],
	"formeOrder": [
		"Ponyta",
		"Ponyta-Galar"
	]
},
ponytagalar: {
	"num": 77,
	"name": "Ponyta-Galar",
	"baseSpecies": "Ponyta",
	"forme": "Galar",
	"types": [
		"Psychic"
	],
	"baseStats": {
		"hp": 50,
		"atk": 85,
		"def": 55,
		"spa": 65,
		"spd": 65,
		"spe": 90
	},
	"abilities": {
		"0": "Run Away",
		"1": "Illuminate"
	},
	"weightkg": 24,
	"evos": [
		"Rapidash-Galar"
	],
	"eggGroups": [
		"Field"
	]
},
rapidash: {
	"num": 78,
	"name": "Rapidash",
	"types": [
		"Fire"
	],
	"baseStats": {
		"hp": 65,
		"atk": 100,
		"def": 70,
		"spa": 80,
		"spd": 80,
		"spe": 105
	},
	"abilities": {
		"0": "Run Away",
		"1": "Flash Fire",
		"H": "Flame Body"
	},
	"weightkg": 95,
	"prevo": "Ponyta",
	"evoLevel": 40,
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Rapidash-Galar"
	],
	"formeOrder": [
		"Rapidash",
		"Rapidash-Galar"
	]
},
rapidashgalar: {
	"num": 78,
	"name": "Rapidash-Galar",
	"baseSpecies": "Rapidash",
	"forme": "Galar",
	"types": [
		"Psychic",
		"Normal"
	],
	"baseStats": {
		"hp": 65,
		"atk": 100,
		"def": 70,
		"spa": 80,
		"spd": 80,
		"spe": 105
	},
	"abilities": {
		"0": "Run Away",
		"1": "Illuminate"
	},
	"weightkg": 80,
	"prevo": "Ponyta-Galar",
	"evoLevel": 40,
	"eggGroups": [
		"Field"
	]
},
slowpoke: {
	"num": 79,
	"name": "Slowpoke",
	"types": [
		"Water",
		"Psychic"
	],
	"baseStats": {
		"hp": 90,
		"atk": 65,
		"def": 65,
		"spa": 40,
		"spd": 40,
		"spe": 15
	},
	"abilities": {
		"0": "Oblivious",
		"1": "Own Tempo"
	},
	"weightkg": 36,
	"evos": [
		"Slowbro",
		"Slowking"
	],
	"eggGroups": [
		"Monster",
		"Water 1"
	],
	"otherFormes": [
		"Slowpoke-Galar"
	],
	"formeOrder": [
		"Slowpoke",
		"Slowpoke-Galar"
	]
},
slowpokegalar: {
	"num": 79,
	"name": "Slowpoke-Galar",
	"baseSpecies": "Slowpoke",
	"forme": "Galar",
	"types": [
		"Psychic"
	],
	"baseStats": {
		"hp": 90,
		"atk": 65,
		"def": 65,
		"spa": 40,
		"spd": 40,
		"spe": 15
	},
	"abilities": {
		"0": "Illuminate",
		"1": "Own Tempo"
	},
	"weightkg": 36,
	"evos": [
		"Slowbro-Galar",
		"Slowking-Galar"
	],
	"eggGroups": [
		"Monster",
		"Water 1"
	]
},
slowbro: {
	"num": 80,
	"name": "Slowbro",
	"types": [
		"Water",
		"Psychic"
	],
	"baseStats": {
		"hp": 95,
		"atk": 75,
		"def": 110,
		"spa": 100,
		"spd": 80,
		"spe": 30
	},
	"abilities": {
		"0": "Oblivious",
		"1": "Own Tempo"
	},
	"weightkg": 78.5,
	"prevo": "Slowpoke",
	"evoLevel": 37,
	"eggGroups": [
		"Monster",
		"Water 1"
	],
	"otherFormes": [
		"Slowbro-Mega",
		"Slowbro-Galar"
	],
	"formeOrder": [
		"Slowbro",
		"Slowbro-Mega",
		"Slowbro-Galar"
	]
},
slowbromega: {
	"num": 80,
	"name": "Slowbro-Mega",
	"baseSpecies": "Slowbro",
	"forme": "Mega",
	"types": [
		"Water",
		"Psychic"
	],
	"baseStats": {
		"hp": 95,
		"atk": 75,
		"def": 145,
		"spa": 115,
		"spd": 80,
		"spe": 30
	},
	"abilities": {
		"0": "Shell Armor"
	},
	"weightkg": 120,
	"eggGroups": [
		"Monster",
		"Water 1"
	]
},
slowbrogalar: {
	"num": 80,
	"name": "Slowbro-Galar",
	"baseSpecies": "Slowbro",
	"forme": "Galar",
	"types": [
		"Poison",
		"Psychic"
	],
	"baseStats": {
		"hp": 95,
		"atk": 100,
		"def": 95,
		"spa": 100,
		"spd": 70,
		"spe": 30
	},
	"abilities": {
		"0": "Illuminate",
		"1": "Own Tempo"
	},
	"weightkg": 70.5,
	"prevo": "Slowpoke-Galar",
	"evoType": "useItem",
	"evoItem": "Galarica Cuff",
	"eggGroups": [
		"Monster",
		"Water 1"
	]
},
magnemite: {
	"num": 81,
	"name": "Magnemite",
	"types": [
		"Electric",
		"Steel"
	],
	"gender": "N",
	"baseStats": {
		"hp": 25,
		"atk": 35,
		"def": 70,
		"spa": 95,
		"spd": 55,
		"spe": 45
	},
	"abilities": {
		"0": "Magnet Pull",
		"1": "Sturdy"
	},
	"weightkg": 6,
	"evos": [
		"Magneton"
	],
	"eggGroups": [
		"Mineral"
	]
},
magneton: {
	"num": 82,
	"name": "Magneton",
	"types": [
		"Electric",
		"Steel"
	],
	"gender": "N",
	"baseStats": {
		"hp": 50,
		"atk": 60,
		"def": 95,
		"spa": 120,
		"spd": 70,
		"spe": 70
	},
	"abilities": {
		"0": "Magnet Pull",
		"1": "Sturdy"
	},
	"weightkg": 60,
	"prevo": "Magnemite",
	"evoLevel": 30,
	"evos": [
		"Magnezone"
	],
	"eggGroups": [
		"Mineral"
	]
},
farfetchd: {
	"num": 83,
	"name": "Farfetch’d",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 52,
		"atk": 90,
		"def": 55,
		"spa": 58,
		"spd": 62,
		"spe": 60
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Inner Focus"
	},
	"weightkg": 15,
	"eggGroups": [
		"Flying",
		"Field"
	],
	"otherFormes": [
		"Farfetch’d-Galar"
	],
	"formeOrder": [
		"Farfetch’d",
		"Farfetch’d-Galar"
	]
},
farfetchdgalar: {
	"num": 83,
	"name": "Farfetch’d-Galar",
	"baseSpecies": "Farfetch’d",
	"forme": "Galar",
	"types": [
		"Fighting"
	],
	"baseStats": {
		"hp": 52,
		"atk": 95,
		"def": 55,
		"spa": 58,
		"spd": 62,
		"spe": 55
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 15,
	"evos": [
		"Sirfetch’d"
	],
	"eggGroups": [
		"Flying",
		"Field"
	]
},
doduo: {
	"num": 84,
	"name": "Doduo",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 35,
		"atk": 85,
		"def": 45,
		"spa": 35,
		"spd": 35,
		"spe": 75
	},
	"abilities": {
		"0": "Run Away",
		"1": "Early Bird"
	},
	"weightkg": 39.2,
	"evos": [
		"Dodrio"
	],
	"eggGroups": [
		"Flying"
	]
},
dodrio: {
	"num": 85,
	"name": "Dodrio",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 60,
		"atk": 110,
		"def": 70,
		"spa": 60,
		"spd": 60,
		"spe": 110
	},
	"abilities": {
		"0": "Run Away",
		"1": "Early Bird"
	},
	"weightkg": 85.2,
	"prevo": "Doduo",
	"evoLevel": 31,
	"eggGroups": [
		"Flying"
	]
},
seel: {
	"num": 86,
	"name": "Seel",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 65,
		"atk": 45,
		"def": 55,
		"spa": 45,
		"spd": 70,
		"spe": 45
	},
	"abilities": {
		"0": "Thick Fat",
		"1": "Illuminate"
	},
	"weightkg": 90,
	"evos": [
		"Dewgong"
	],
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
dewgong: {
	"num": 87,
	"name": "Dewgong",
	"types": [
		"Water",
		"Ice"
	],
	"baseStats": {
		"hp": 90,
		"atk": 70,
		"def": 80,
		"spa": 70,
		"spd": 95,
		"spe": 70
	},
	"abilities": {
		"0": "Thick Fat",
		"1": "Illuminate"
	},
	"weightkg": 120,
	"prevo": "Seel",
	"evoLevel": 34,
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
grimer: {
	"num": 88,
	"name": "Grimer",
	"types": [
		"Poison"
	],
	"baseStats": {
		"hp": 80,
		"atk": 80,
		"def": 50,
		"spa": 40,
		"spd": 50,
		"spe": 25
	},
	"abilities": {
		"0": "Stench",
		"1": "Sticky Hold"
	},
	"weightkg": 30,
	"evos": [
		"Muk"
	],
	"eggGroups": [
		"Amorphous"
	],
	"otherFormes": [
		"Grimer-Alola"
	],
	"formeOrder": [
		"Grimer",
		"Grimer-Alola"
	]
},
grimeralola: {
	"num": 88,
	"name": "Grimer-Alola",
	"baseSpecies": "Grimer",
	"forme": "Alola",
	"types": [
		"Poison",
		"Dark"
	],
	"baseStats": {
		"hp": 80,
		"atk": 80,
		"def": 50,
		"spa": 40,
		"spd": 50,
		"spe": 25
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 42,
	"evos": [
		"Muk-Alola"
	],
	"eggGroups": [
		"Amorphous"
	]
},
muk: {
	"num": 89,
	"name": "Muk",
	"types": [
		"Poison"
	],
	"baseStats": {
		"hp": 105,
		"atk": 105,
		"def": 75,
		"spa": 65,
		"spd": 100,
		"spe": 50
	},
	"abilities": {
		"0": "Stench",
		"1": "Sticky Hold"
	},
	"weightkg": 30,
	"prevo": "Grimer",
	"evoLevel": 38,
	"eggGroups": [
		"Amorphous"
	],
	"otherFormes": [
		"Muk-Alola"
	],
	"formeOrder": [
		"Muk",
		"Muk-Alola"
	]
},
mukalola: {
	"num": 89,
	"name": "Muk-Alola",
	"baseSpecies": "Muk",
	"forme": "Alola",
	"types": [
		"Poison",
		"Dark"
	],
	"baseStats": {
		"hp": 105,
		"atk": 105,
		"def": 75,
		"spa": 65,
		"spd": 100,
		"spe": 50
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 52,
	"prevo": "Grimer-Alola",
	"evoLevel": 38,
	"eggGroups": [
		"Amorphous"
	]
},
shellder: {
	"num": 90,
	"name": "Shellder",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 30,
		"atk": 65,
		"def": 100,
		"spa": 45,
		"spd": 25,
		"spe": 40
	},
	"abilities": {
		"0": "Shell Armor",
		"1": "Illuminate"
	},
	"weightkg": 4,
	"evos": [
		"Cloyster"
	],
	"eggGroups": [
		"Water 3"
	]
},
cloyster: {
	"num": 91,
	"name": "Cloyster",
	"types": [
		"Water",
		"Ice"
	],
	"baseStats": {
		"hp": 50,
		"atk": 95,
		"def": 180,
		"spa": 85,
		"spd": 45,
		"spe": 70
	},
	"abilities": {
		"0": "Shell Armor",
		"1": "Illuminate"
	},
	"weightkg": 132.5,
	"prevo": "Shellder",
	"evoType": "useItem",
	"evoItem": "Water Stone",
	"eggGroups": [
		"Water 3"
	]
},
gastly: {
	"num": 92,
	"name": "Gastly",
	"types": [
		"Ghost",
		"Poison"
	],
	"baseStats": {
		"hp": 30,
		"atk": 35,
		"def": 30,
		"spa": 100,
		"spd": 35,
		"spe": 80
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 0.1,
	"evos": [
		"Haunter"
	],
	"eggGroups": [
		"Amorphous"
	]
},
haunter: {
	"num": 93,
	"name": "Haunter",
	"types": [
		"Ghost",
		"Poison"
	],
	"baseStats": {
		"hp": 45,
		"atk": 50,
		"def": 45,
		"spa": 115,
		"spd": 55,
		"spe": 95
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 0.1,
	"prevo": "Gastly",
	"evoLevel": 25,
	"evos": [
		"Gengar"
	],
	"eggGroups": [
		"Amorphous"
	]
},
gengar: {
	"num": 94,
	"name": "Gengar",
	"types": [
		"Ghost",
		"Poison"
	],
	"baseStats": {
		"hp": 60,
		"atk": 65,
		"def": 60,
		"spa": 130,
		"spd": 75,
		"spe": 110
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 40.5,
	"prevo": "Haunter",
	"evoType": "trade",
	"eggGroups": [
		"Amorphous"
	],
	"otherFormes": [
		"Gengar-Mega"
	],
	"formeOrder": [
		"Gengar",
		"Gengar-Mega"
	],
	"canGigantamax": "G-Max Terror"
},
gengarmega: {
	"num": 94,
	"name": "Gengar-Mega",
	"baseSpecies": "Gengar",
	"forme": "Mega",
	"types": [
		"Ghost",
		"Poison"
	],
	"baseStats": {
		"hp": 60,
		"atk": 65,
		"def": 70,
		"spa": 150,
		"spd": 85,
		"spe": 120
	},
	"abilities": {
		"0": "Shadow Tag"
	},
	"weightkg": 40.5,
	"eggGroups": [
		"Amorphous"
	]
},
gengargmax: {
	"num": 94,
	"name": "Gengar-Gmax",
	"baseSpecies": "Gengar",
	"forme": "Gmax",
	"types": [
		"Ghost",
		"Poison"
	],
	"baseStats": {
		"hp": 60,
		"atk": 65,
		"def": 60,
		"spa": 130,
		"spd": 75,
		"spe": 110
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 0,
	"eggGroups": [
		"Amorphous"
	],
	"changesFrom": "Gengar"
},
onix: {
	"num": 95,
	"name": "Onix",
	"types": [
		"Rock",
		"Ground"
	],
	"baseStats": {
		"hp": 35,
		"atk": 45,
		"def": 160,
		"spa": 30,
		"spd": 45,
		"spe": 70
	},
	"abilities": {
		"0": "Rock Head",
		"1": "Sturdy"
	},
	"weightkg": 210,
	"evos": [
		"Steelix"
	],
	"eggGroups": [
		"Mineral"
	]
},
drowzee: {
	"num": 96,
	"name": "Drowzee",
	"types": [
		"Psychic"
	],
	"baseStats": {
		"hp": 60,
		"atk": 48,
		"def": 45,
		"spa": 43,
		"spd": 90,
		"spe": 42
	},
	"abilities": {
		"0": "Insomnia",
		"1": "Illuminate",
		"H": "Inner Focus"
	},
	"weightkg": 32.4,
	"evos": [
		"Hypno"
	],
	"eggGroups": [
		"Human-Like"
	]
},
hypno: {
	"num": 97,
	"name": "Hypno",
	"types": [
		"Psychic"
	],
	"baseStats": {
		"hp": 85,
		"atk": 73,
		"def": 70,
		"spa": 73,
		"spd": 115,
		"spe": 67
	},
	"abilities": {
		"0": "Insomnia",
		"1": "Illuminate",
		"H": "Inner Focus"
	},
	"weightkg": 75.6,
	"prevo": "Drowzee",
	"evoLevel": 26,
	"eggGroups": [
		"Human-Like"
	]
},
krabby: {
	"num": 98,
	"name": "Krabby",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 30,
		"atk": 105,
		"def": 90,
		"spa": 25,
		"spd": 25,
		"spe": 50
	},
	"abilities": {
		"0": "Hyper Cutter",
		"1": "Shell Armor"
	},
	"weightkg": 6.5,
	"evos": [
		"Kingler"
	],
	"eggGroups": [
		"Water 3"
	]
},
kingler: {
	"num": 99,
	"name": "Kingler",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 55,
		"atk": 130,
		"def": 115,
		"spa": 50,
		"spd": 50,
		"spe": 75
	},
	"abilities": {
		"0": "Hyper Cutter",
		"1": "Shell Armor"
	},
	"weightkg": 60,
	"prevo": "Krabby",
	"evoLevel": 28,
	"eggGroups": [
		"Water 3"
	],
	"canGigantamax": "G-Max Foam Burst"
},
kinglergmax: {
	"num": 99,
	"name": "Kingler-Gmax",
	"baseSpecies": "Kingler",
	"forme": "Gmax",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 55,
		"atk": 130,
		"def": 115,
		"spa": 50,
		"spd": 50,
		"spe": 75
	},
	"abilities": {
		"0": "Hyper Cutter",
		"1": "Shell Armor"
	},
	"weightkg": 0,
	"eggGroups": [
		"Water 3"
	],
	"changesFrom": "Kingler"
},
voltorb: {
	"num": 100,
	"name": "Voltorb",
	"types": [
		"Electric"
	],
	"gender": "N",
	"baseStats": {
		"hp": 40,
		"atk": 30,
		"def": 50,
		"spa": 55,
		"spd": 55,
		"spe": 100
	},
	"abilities": {
		"0": "Soundproof",
		"1": "Static"
	},
	"weightkg": 10.4,
	"evos": [
		"Electrode"
	],
	"eggGroups": [
		"Mineral"
	],
	"otherFormes": [
		"Voltorb-Hisui"
	],
	"formeOrder": [
		"Voltorb",
		"Voltorb-Hisui"
	]
},
voltorbhisui: {
	"num": 100,
	"name": "Voltorb-Hisui",
	"baseSpecies": "Voltorb",
	"forme": "Hisui",
	"types": [
		"Electric",
		"Grass"
	],
	"gender": "N",
	"baseStats": {
		"hp": 40,
		"atk": 30,
		"def": 50,
		"spa": 55,
		"spd": 55,
		"spe": 100
	},
	"abilities": {
		"0": "Soundproof",
		"1": "Static"
	},
	"weightkg": 13,
	"evos": [
		"Electrode-Hisui"
	],
	"eggGroups": [
		"Mineral"
	]
},
electrode: {
	"num": 101,
	"name": "Electrode",
	"types": [
		"Electric"
	],
	"gender": "N",
	"baseStats": {
		"hp": 60,
		"atk": 50,
		"def": 70,
		"spa": 80,
		"spd": 80,
		"spe": 150
	},
	"abilities": {
		"0": "Soundproof",
		"1": "Static"
	},
	"weightkg": 66.6,
	"prevo": "Voltorb",
	"evoLevel": 30,
	"eggGroups": [
		"Mineral"
	],
	"otherFormes": [
		"Electrode-Hisui"
	],
	"formeOrder": [
		"Electrode",
		"Electrode-Hisui"
	]
},
electrodehisui: {
	"num": 101,
	"name": "Electrode-Hisui",
	"baseSpecies": "Electrode",
	"forme": "Hisui",
	"types": [
		"Electric",
		"Grass"
	],
	"gender": "N",
	"baseStats": {
		"hp": 60,
		"atk": 50,
		"def": 70,
		"spa": 80,
		"spd": 80,
		"spe": 150
	},
	"abilities": {
		"0": "Soundproof",
		"1": "Static"
	},
	"weightkg": 71,
	"prevo": "Voltorb-Hisui",
	"evoType": "useItem",
	"evoItem": "Leaf Stone",
	"eggGroups": [
		"Mineral"
	]
},
exeggcute: {
	"num": 102,
	"name": "Exeggcute",
	"types": [
		"Grass",
		"Psychic"
	],
	"baseStats": {
		"hp": 60,
		"atk": 40,
		"def": 80,
		"spa": 60,
		"spd": 45,
		"spe": 40
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Illuminate"
	},
	"weightkg": 2.5,
	"evos": [
		"Exeggutor",
		"Exeggutor-Alola"
	],
	"eggGroups": [
		"Grass"
	]
},
exeggutor: {
	"num": 103,
	"name": "Exeggutor",
	"types": [
		"Grass",
		"Psychic"
	],
	"baseStats": {
		"hp": 95,
		"atk": 95,
		"def": 85,
		"spa": 125,
		"spd": 75,
		"spe": 55
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Illuminate"
	},
	"weightkg": 120,
	"prevo": "Exeggcute",
	"evoType": "useItem",
	"evoItem": "Leaf Stone",
	"eggGroups": [
		"Grass"
	],
	"otherFormes": [
		"Exeggutor-Alola"
	],
	"formeOrder": [
		"Exeggutor",
		"Exeggutor-Alola"
	]
},
exeggutoralola: {
	"num": 103,
	"name": "Exeggutor-Alola",
	"baseSpecies": "Exeggutor",
	"forme": "Alola",
	"types": [
		"Grass",
		"Dragon"
	],
	"baseStats": {
		"hp": 95,
		"atk": 105,
		"def": 85,
		"spa": 125,
		"spd": 75,
		"spe": 45
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 415.6,
	"prevo": "Exeggcute",
	"evoType": "useItem",
	"evoItem": "Leaf Stone",
	"eggGroups": [
		"Grass"
	]
},
cubone: {
	"num": 104,
	"name": "Cubone",
	"types": [
		"Ground"
	],
	"baseStats": {
		"hp": 50,
		"atk": 50,
		"def": 95,
		"spa": 40,
		"spd": 50,
		"spe": 35
	},
	"abilities": {
		"0": "Rock Head",
		"1": "Lightning Rod",
		"H": "Battle Armor"
	},
	"weightkg": 6.5,
	"evos": [
		"Marowak",
		"Marowak-Alola"
	],
	"eggGroups": [
		"Monster"
	]
},
marowak: {
	"num": 105,
	"name": "Marowak",
	"types": [
		"Ground"
	],
	"baseStats": {
		"hp": 60,
		"atk": 80,
		"def": 110,
		"spa": 50,
		"spd": 80,
		"spe": 45
	},
	"abilities": {
		"0": "Rock Head",
		"1": "Lightning Rod",
		"H": "Battle Armor"
	},
	"weightkg": 45,
	"prevo": "Cubone",
	"evoLevel": 28,
	"eggGroups": [
		"Monster"
	],
	"otherFormes": [
		"Marowak-Alola",
		"Marowak-Alola-Totem"
	],
	"formeOrder": [
		"Marowak",
		"Marowak-Alola",
		"Marowak-Alola-Totem"
	]
},
marowakalola: {
	"num": 105,
	"name": "Marowak-Alola",
	"baseSpecies": "Marowak",
	"forme": "Alola",
	"types": [
		"Fire",
		"Ghost"
	],
	"baseStats": {
		"hp": 60,
		"atk": 80,
		"def": 110,
		"spa": 50,
		"spd": 80,
		"spe": 45
	},
	"abilities": {
		"0": "Illuminate",
		"1": "Lightning Rod",
		"H": "Rock Head"
	},
	"weightkg": 34,
	"prevo": "Cubone",
	"evoLevel": 28,
	"evoCondition": "at night",
	"eggGroups": [
		"Monster"
	]
},
marowakalolatotem: {
	"num": 105,
	"name": "Marowak-Alola-Totem",
	"baseSpecies": "Marowak",
	"forme": "Alola-Totem",
	"types": [
		"Fire",
		"Ghost"
	],
	"baseStats": {
		"hp": 60,
		"atk": 80,
		"def": 110,
		"spa": 50,
		"spd": 80,
		"spe": 45
	},
	"abilities": {
		"0": "Rock Head"
	},
	"weightkg": 98,
	"eggGroups": [
		"Monster"
	]
},
hitmonlee: {
	"num": 106,
	"name": "Hitmonlee",
	"types": [
		"Fighting"
	],
	"gender": "M",
	"baseStats": {
		"hp": 50,
		"atk": 120,
		"def": 53,
		"spa": 35,
		"spd": 110,
		"spe": 87
	},
	"abilities": {
		"0": "Limber",
		"1": "Illuminate"
	},
	"weightkg": 49.8,
	"prevo": "Tyrogue",
	"evoLevel": 20,
	"evoCondition": "with an Atk stat > its Def stat",
	"eggGroups": [
		"Human-Like"
	]
},
hitmonchan: {
	"num": 107,
	"name": "Hitmonchan",
	"types": [
		"Fighting"
	],
	"gender": "M",
	"baseStats": {
		"hp": 50,
		"atk": 105,
		"def": 79,
		"spa": 35,
		"spd": 110,
		"spe": 76
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Illuminate",
		"H": "Inner Focus"
	},
	"weightkg": 50.2,
	"prevo": "Tyrogue",
	"evoLevel": 20,
	"evoCondition": "with an Atk stat < its Def stat",
	"eggGroups": [
		"Human-Like"
	]
},
lickitung: {
	"num": 108,
	"name": "Lickitung",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 90,
		"atk": 55,
		"def": 75,
		"spa": 60,
		"spd": 75,
		"spe": 30
	},
	"abilities": {
		"0": "Own Tempo",
		"1": "Oblivious",
		"H": "Cloud Nine"
	},
	"weightkg": 65.5,
	"evos": [
		"Lickilicky"
	],
	"eggGroups": [
		"Monster"
	]
},
koffing: {
	"num": 109,
	"name": "Koffing",
	"types": [
		"Poison"
	],
	"baseStats": {
		"hp": 40,
		"atk": 65,
		"def": 95,
		"spa": 60,
		"spd": 45,
		"spe": 35
	},
	"abilities": {
		"0": "Levitate",
		"1": "Illuminate",
		"H": "Stench"
	},
	"weightkg": 1,
	"evos": [
		"Weezing",
		"Weezing-Galar"
	],
	"eggGroups": [
		"Amorphous"
	]
},
weezing: {
	"num": 110,
	"name": "Weezing",
	"types": [
		"Poison"
	],
	"baseStats": {
		"hp": 65,
		"atk": 90,
		"def": 120,
		"spa": 85,
		"spd": 70,
		"spe": 60
	},
	"abilities": {
		"0": "Levitate",
		"1": "Illuminate",
		"H": "Stench"
	},
	"weightkg": 9.5,
	"prevo": "Koffing",
	"evoLevel": 35,
	"eggGroups": [
		"Amorphous"
	],
	"otherFormes": [
		"Weezing-Galar"
	],
	"formeOrder": [
		"Weezing",
		"Weezing-Galar"
	]
},
weezinggalar: {
	"num": 110,
	"name": "Weezing-Galar",
	"baseSpecies": "Weezing",
	"forme": "Galar",
	"types": [
		"Poison",
		"Normal"
	],
	"baseStats": {
		"hp": 65,
		"atk": 90,
		"def": 120,
		"spa": 85,
		"spd": 70,
		"spe": 60
	},
	"abilities": {
		"0": "Levitate",
		"1": "Illuminate"
	},
	"weightkg": 16,
	"prevo": "Koffing",
	"evoLevel": 35,
	"eggGroups": [
		"Amorphous"
	]
},
rhyhorn: {
	"num": 111,
	"name": "Rhyhorn",
	"types": [
		"Ground",
		"Rock"
	],
	"baseStats": {
		"hp": 80,
		"atk": 85,
		"def": 95,
		"spa": 30,
		"spd": 30,
		"spe": 25
	},
	"abilities": {
		"0": "Lightning Rod",
		"1": "Rock Head"
	},
	"weightkg": 115,
	"evos": [
		"Rhydon"
	],
	"eggGroups": [
		"Monster",
		"Field"
	]
},
rhydon: {
	"num": 112,
	"name": "Rhydon",
	"types": [
		"Ground",
		"Rock"
	],
	"baseStats": {
		"hp": 105,
		"atk": 130,
		"def": 120,
		"spa": 45,
		"spd": 45,
		"spe": 40
	},
	"abilities": {
		"0": "Lightning Rod",
		"1": "Rock Head"
	},
	"weightkg": 120,
	"prevo": "Rhyhorn",
	"evoLevel": 42,
	"evos": [
		"Rhyperior"
	],
	"eggGroups": [
		"Monster",
		"Field"
	]
},
chansey: {
	"num": 113,
	"name": "Chansey",
	"types": [
		"Normal"
	],
	"gender": "F",
	"baseStats": {
		"hp": 250,
		"atk": 5,
		"def": 5,
		"spa": 35,
		"spd": 105,
		"spe": 50
	},
	"abilities": {
		"0": "Natural Cure",
		"1": "Serene Grace"
	},
	"weightkg": 34.6,
	"prevo": "Happiny",
	"evoType": "levelHold",
	"evoItem": "Oval Stone",
	"evoCondition": "during the day",
	"evos": [
		"Blissey"
	],
	"eggGroups": [
		"Fairy"
	],
	"canHatch": true
},
tangela: {
	"num": 114,
	"name": "Tangela",
	"types": [
		"Grass"
	],
	"baseStats": {
		"hp": 65,
		"atk": 55,
		"def": 115,
		"spa": 100,
		"spd": 40,
		"spe": 60
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Illuminate"
	},
	"weightkg": 35,
	"evos": [
		"Tangrowth"
	],
	"eggGroups": [
		"Grass"
	]
},
kangaskhan: {
	"num": 115,
	"name": "Kangaskhan",
	"types": [
		"Normal"
	],
	"gender": "F",
	"baseStats": {
		"hp": 105,
		"atk": 95,
		"def": 80,
		"spa": 40,
		"spd": 80,
		"spe": 90
	},
	"abilities": {
		"0": "Early Bird",
		"1": "Illuminate",
		"H": "Inner Focus"
	},
	"weightkg": 80,
	"eggGroups": [
		"Monster"
	],
	"otherFormes": [
		"Kangaskhan-Mega"
	],
	"formeOrder": [
		"Kangaskhan",
		"Kangaskhan-Mega"
	]
},
kangaskhanmega: {
	"num": 115,
	"name": "Kangaskhan-Mega",
	"baseSpecies": "Kangaskhan",
	"forme": "Mega",
	"types": [
		"Normal"
	],
	"gender": "F",
	"baseStats": {
		"hp": 105,
		"atk": 110,
		"def": 90,
		"spa": 50,
		"spd": 90,
		"spe": 95
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 100,
	"eggGroups": [
		"Monster"
	]
},
horsea: {
	"num": 116,
	"name": "Horsea",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 30,
		"atk": 40,
		"def": 70,
		"spa": 70,
		"spd": 25,
		"spe": 60
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Illuminate",
		"H": "Damp"
	},
	"weightkg": 8,
	"evos": [
		"Seadra"
	],
	"eggGroups": [
		"Water 1",
		"Dragon"
	]
},
seadra: {
	"num": 117,
	"name": "Seadra",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 55,
		"atk": 65,
		"def": 95,
		"spa": 95,
		"spd": 45,
		"spe": 85
	},
	"abilities": {
		"0": "Poison Point",
		"1": "Illuminate",
		"H": "Damp"
	},
	"weightkg": 25,
	"prevo": "Horsea",
	"evoLevel": 32,
	"evos": [
		"Kingdra"
	],
	"eggGroups": [
		"Water 1",
		"Dragon"
	]
},
goldeen: {
	"num": 118,
	"name": "Goldeen",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 45,
		"atk": 67,
		"def": 60,
		"spa": 35,
		"spd": 50,
		"spe": 63
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Water Veil",
		"H": "Lightning Rod"
	},
	"weightkg": 15,
	"evos": [
		"Seaking"
	],
	"eggGroups": [
		"Water 2"
	]
},
seaking: {
	"num": 119,
	"name": "Seaking",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 80,
		"atk": 92,
		"def": 65,
		"spa": 65,
		"spd": 80,
		"spe": 68
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Water Veil",
		"H": "Lightning Rod"
	},
	"weightkg": 39,
	"prevo": "Goldeen",
	"evoLevel": 33,
	"eggGroups": [
		"Water 2"
	]
},
staryu: {
	"num": 120,
	"name": "Staryu",
	"types": [
		"Water"
	],
	"gender": "N",
	"baseStats": {
		"hp": 30,
		"atk": 45,
		"def": 55,
		"spa": 70,
		"spd": 55,
		"spe": 85
	},
	"abilities": {
		"0": "Illuminate",
		"1": "Natural Cure"
	},
	"weightkg": 34.5,
	"evos": [
		"Starmie"
	],
	"eggGroups": [
		"Water 3"
	]
},
starmie: {
	"num": 121,
	"name": "Starmie",
	"types": [
		"Water",
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 60,
		"atk": 75,
		"def": 85,
		"spa": 100,
		"spd": 85,
		"spe": 115
	},
	"abilities": {
		"0": "Illuminate",
		"1": "Natural Cure"
	},
	"weightkg": 80,
	"prevo": "Staryu",
	"evoType": "useItem",
	"evoItem": "Water Stone",
	"eggGroups": [
		"Water 3"
	]
},
mrmime: {
	"num": 122,
	"name": "Mr. Mime",
	"types": [
		"Psychic",
		"Normal"
	],
	"baseStats": {
		"hp": 40,
		"atk": 45,
		"def": 65,
		"spa": 100,
		"spd": 120,
		"spe": 90
	},
	"abilities": {
		"0": "Soundproof",
		"1": "Illuminate"
	},
	"weightkg": 54.5,
	"prevo": "Mime Jr.",
	"evoType": "levelMove",
	"evoMove": "Mimic",
	"eggGroups": [
		"Human-Like"
	],
	"canHatch": true,
	"otherFormes": [
		"Mr. Mime-Galar"
	],
	"formeOrder": [
		"Mr. Mime",
		"Mr. Mime-Galar"
	]
},
mrmimegalar: {
	"num": 122,
	"name": "Mr. Mime-Galar",
	"baseSpecies": "Mr. Mime",
	"forme": "Galar",
	"types": [
		"Ice",
		"Psychic"
	],
	"baseStats": {
		"hp": 50,
		"atk": 65,
		"def": 65,
		"spa": 90,
		"spd": 90,
		"spe": 100
	},
	"abilities": {
		"0": "Vital Spirit",
		"1": "Illuminate"
	},
	"weightkg": 56.8,
	"prevo": "Mime Jr.",
	"evoType": "levelMove",
	"evoMove": "Mimic",
	"evos": [
		"Mr. Rime"
	],
	"eggGroups": [
		"Human-Like"
	],
	"canHatch": true
},
scyther: {
	"num": 123,
	"name": "Scyther",
	"types": [
		"Bug",
		"Flying"
	],
	"baseStats": {
		"hp": 70,
		"atk": 110,
		"def": 80,
		"spa": 55,
		"spd": 80,
		"spe": 105
	},
	"abilities": {
		"0": "Swarm",
		"1": "Illuminate"
	},
	"weightkg": 56,
	"evos": [
		"Scizor",
		"Kleavor"
	],
	"eggGroups": [
		"Bug"
	]
},
jynx: {
	"num": 124,
	"name": "Jynx",
	"types": [
		"Ice",
		"Psychic"
	],
	"gender": "F",
	"baseStats": {
		"hp": 65,
		"atk": 50,
		"def": 35,
		"spa": 115,
		"spd": 95,
		"spe": 95
	},
	"abilities": {
		"0": "Oblivious",
		"1": "Illuminate"
	},
	"weightkg": 40.6,
	"prevo": "Smoochum",
	"evoLevel": 30,
	"eggGroups": [
		"Human-Like"
	]
},
electabuzz: {
	"num": 125,
	"name": "Electabuzz",
	"types": [
		"Electric"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 65,
		"atk": 83,
		"def": 57,
		"spa": 95,
		"spd": 85,
		"spe": 105
	},
	"abilities": {
		"0": "Static",
		"1": "Vital Spirit"
	},
	"weightkg": 30,
	"prevo": "Elekid",
	"evoLevel": 30,
	"evos": [
		"Electivire"
	],
	"eggGroups": [
		"Human-Like"
	]
},
magmar: {
	"num": 126,
	"name": "Magmar",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 65,
		"atk": 95,
		"def": 57,
		"spa": 100,
		"spd": 85,
		"spe": 93
	},
	"abilities": {
		"0": "Flame Body",
		"1": "Vital Spirit"
	},
	"weightkg": 44.5,
	"prevo": "Magby",
	"evoLevel": 30,
	"evos": [
		"Magmortar"
	],
	"eggGroups": [
		"Human-Like"
	]
},
pinsir: {
	"num": 127,
	"name": "Pinsir",
	"types": [
		"Bug"
	],
	"baseStats": {
		"hp": 65,
		"atk": 125,
		"def": 100,
		"spa": 55,
		"spd": 70,
		"spe": 85
	},
	"abilities": {
		"0": "Hyper Cutter",
		"1": "Illuminate"
	},
	"weightkg": 55,
	"eggGroups": [
		"Bug"
	],
	"otherFormes": [
		"Pinsir-Mega"
	],
	"formeOrder": [
		"Pinsir",
		"Pinsir-Mega"
	]
},
pinsirmega: {
	"num": 127,
	"name": "Pinsir-Mega",
	"baseSpecies": "Pinsir",
	"forme": "Mega",
	"types": [
		"Bug",
		"Flying"
	],
	"baseStats": {
		"hp": 65,
		"atk": 140,
		"def": 110,
		"spa": 60,
		"spd": 80,
		"spe": 95
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 59,
	"eggGroups": [
		"Bug"
	]
},
tauros: {
	"num": 128,
	"name": "Tauros",
	"types": [
		"Normal"
	],
	"gender": "M",
	"baseStats": {
		"hp": 75,
		"atk": 100,
		"def": 95,
		"spa": 40,
		"spd": 70,
		"spe": 110
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Illuminate"
	},
	"weightkg": 88.4,
	"eggGroups": [
		"Field"
	]
},
magikarp: {
	"num": 129,
	"name": "Magikarp",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 20,
		"atk": 10,
		"def": 55,
		"spa": 15,
		"spd": 20,
		"spe": 80
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Illuminate"
	},
	"weightkg": 10,
	"evos": [
		"Gyarados"
	],
	"eggGroups": [
		"Water 2",
		"Dragon"
	]
},
gyarados: {
	"num": 130,
	"name": "Gyarados",
	"types": [
		"Water",
		"Flying"
	],
	"baseStats": {
		"hp": 95,
		"atk": 125,
		"def": 79,
		"spa": 60,
		"spd": 100,
		"spe": 81
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Illuminate"
	},
	"weightkg": 235,
	"prevo": "Magikarp",
	"evoLevel": 20,
	"eggGroups": [
		"Water 2",
		"Dragon"
	],
	"otherFormes": [
		"Gyarados-Mega"
	],
	"formeOrder": [
		"Gyarados",
		"Gyarados-Mega"
	]
},
gyaradosmega: {
	"num": 130,
	"name": "Gyarados-Mega",
	"baseSpecies": "Gyarados",
	"forme": "Mega",
	"types": [
		"Water",
		"Dark"
	],
	"baseStats": {
		"hp": 95,
		"atk": 140,
		"def": 94,
		"spa": 65,
		"spd": 115,
		"spe": 81
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 305,
	"eggGroups": [
		"Water 2",
		"Dragon"
	]
},
lapras: {
	"num": 131,
	"name": "Lapras",
	"types": [
		"Water",
		"Ice"
	],
	"baseStats": {
		"hp": 130,
		"atk": 85,
		"def": 80,
		"spa": 85,
		"spd": 95,
		"spe": 60
	},
	"abilities": {
		"0": "Water Absorb",
		"1": "Shell Armor"
	},
	"weightkg": 220,
	"eggGroups": [
		"Monster",
		"Water 1"
	],
	"canGigantamax": "G-Max Resonance"
},
laprasgmax: {
	"num": 131,
	"name": "Lapras-Gmax",
	"baseSpecies": "Lapras",
	"forme": "Gmax",
	"types": [
		"Water",
		"Ice"
	],
	"baseStats": {
		"hp": 130,
		"atk": 85,
		"def": 80,
		"spa": 85,
		"spd": 95,
		"spe": 60
	},
	"abilities": {
		"0": "Water Absorb",
		"1": "Shell Armor"
	},
	"weightkg": 0,
	"eggGroups": [
		"Monster",
		"Water 1"
	],
	"changesFrom": "Lapras"
},
ditto: {
	"num": 132,
	"name": "Ditto",
	"types": [
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 48,
		"atk": 48,
		"def": 48,
		"spa": 48,
		"spd": 48,
		"spe": 48
	},
	"abilities": {
		"0": "Limber",
		"1": "Illuminate"
	},
	"weightkg": 4,
	"eggGroups": [
		"Ditto"
	]
},
eevee: {
	"num": 133,
	"name": "Eevee",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 55,
		"atk": 55,
		"def": 50,
		"spa": 45,
		"spd": 65,
		"spe": 55
	},
	"abilities": {
		"0": "Run Away",
		"1": "Illuminate"
	},
	"weightkg": 6.5,
	"evos": [
		"Vaporeon",
		"Jolteon",
		"Flareon",
		"Espeon",
		"Umbreon",
		"Leafeon",
		"Glaceon",
		"Sylveon"
	],
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Eevee-Starter"
	],
	"formeOrder": [
		"Eevee",
		"Eevee-Starter"
	],
	"canGigantamax": "G-Max Cuddle"
},
eeveestarter: {
	"num": 133,
	"name": "Eevee-Starter",
	"baseSpecies": "Eevee",
	"forme": "Starter",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 65,
		"atk": 75,
		"def": 70,
		"spa": 65,
		"spd": 85,
		"spe": 75
	},
	"abilities": {
		"0": "Run Away",
		"1": "Illuminate"
	},
	"weightkg": 6.5,
	"eggGroups": [
		"Undiscovered"
	]
},
eeveegmax: {
	"num": 133,
	"name": "Eevee-Gmax",
	"baseSpecies": "Eevee",
	"forme": "Gmax",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 55,
		"atk": 55,
		"def": 50,
		"spa": 45,
		"spd": 65,
		"spe": 55
	},
	"abilities": {
		"0": "Run Away",
		"1": "Illuminate"
	},
	"weightkg": 0,
	"eggGroups": [
		"Field"
	],
	"changesFrom": "Eevee"
},
vaporeon: {
	"num": 134,
	"name": "Vaporeon",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 130,
		"atk": 65,
		"def": 60,
		"spa": 110,
		"spd": 95,
		"spe": 65
	},
	"abilities": {
		"0": "Water Absorb",
		"1": "Illuminate"
	},
	"weightkg": 29,
	"prevo": "Eevee",
	"evoType": "useItem",
	"evoItem": "Water Stone",
	"eggGroups": [
		"Field"
	]
},
jolteon: {
	"num": 135,
	"name": "Jolteon",
	"types": [
		"Electric"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 65,
		"atk": 65,
		"def": 60,
		"spa": 110,
		"spd": 95,
		"spe": 130
	},
	"abilities": {
		"0": "Volt Absorb",
		"1": "Illuminate"
	},
	"weightkg": 24.5,
	"prevo": "Eevee",
	"evoType": "useItem",
	"evoItem": "Thunder Stone",
	"eggGroups": [
		"Field"
	]
},
flareon: {
	"num": 136,
	"name": "Flareon",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 65,
		"atk": 130,
		"def": 60,
		"spa": 95,
		"spd": 110,
		"spe": 65
	},
	"abilities": {
		"0": "Flash Fire",
		"1": "Guts"
	},
	"weightkg": 25,
	"prevo": "Eevee",
	"evoType": "useItem",
	"evoItem": "Fire Stone",
	"eggGroups": [
		"Field"
	]
},
porygon: {
	"num": 137,
	"name": "Porygon",
	"types": [
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 65,
		"atk": 60,
		"def": 70,
		"spa": 85,
		"spd": 75,
		"spe": 40
	},
	"abilities": {
		"0": "Trace",
		"1": "Illuminate"
	},
	"weightkg": 36.5,
	"evos": [
		"Porygon2"
	],
	"eggGroups": [
		"Mineral"
	]
},
omanyte: {
	"num": 138,
	"name": "Omanyte",
	"types": [
		"Rock",
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 35,
		"atk": 40,
		"def": 100,
		"spa": 90,
		"spd": 55,
		"spe": 35
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Shell Armor"
	},
	"weightkg": 7.5,
	"evos": [
		"Omastar"
	],
	"eggGroups": [
		"Water 1",
		"Water 3"
	]
},
omastar: {
	"num": 139,
	"name": "Omastar",
	"types": [
		"Rock",
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 70,
		"atk": 60,
		"def": 125,
		"spa": 115,
		"spd": 70,
		"spe": 55
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Shell Armor"
	},
	"weightkg": 35,
	"prevo": "Omanyte",
	"evoLevel": 40,
	"eggGroups": [
		"Water 1",
		"Water 3"
	]
},
kabuto: {
	"num": 140,
	"name": "Kabuto",
	"types": [
		"Rock",
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 30,
		"atk": 80,
		"def": 90,
		"spa": 55,
		"spd": 45,
		"spe": 55
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Battle Armor"
	},
	"weightkg": 11.5,
	"evos": [
		"Kabutops"
	],
	"eggGroups": [
		"Water 1",
		"Water 3"
	]
},
kabutops: {
	"num": 141,
	"name": "Kabutops",
	"types": [
		"Rock",
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 60,
		"atk": 115,
		"def": 105,
		"spa": 65,
		"spd": 70,
		"spe": 80
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Battle Armor"
	},
	"weightkg": 40.5,
	"prevo": "Kabuto",
	"evoLevel": 40,
	"eggGroups": [
		"Water 1",
		"Water 3"
	]
},
aerodactyl: {
	"num": 142,
	"name": "Aerodactyl",
	"types": [
		"Rock",
		"Flying"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 80,
		"atk": 105,
		"def": 65,
		"spa": 60,
		"spd": 75,
		"spe": 130
	},
	"abilities": {
		"0": "Rock Head",
		"1": "Pressure"
	},
	"weightkg": 59,
	"eggGroups": [
		"Flying"
	],
	"otherFormes": [
		"Aerodactyl-Mega"
	],
	"formeOrder": [
		"Aerodactyl",
		"Aerodactyl-Mega"
	]
},
aerodactylmega: {
	"num": 142,
	"name": "Aerodactyl-Mega",
	"baseSpecies": "Aerodactyl",
	"forme": "Mega",
	"types": [
		"Rock",
		"Flying"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 80,
		"atk": 120,
		"def": 75,
		"spa": 65,
		"spd": 85,
		"spe": 140
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 79,
	"eggGroups": [
		"Flying"
	]
},
snorlax: {
	"num": 143,
	"name": "Snorlax",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 160,
		"atk": 110,
		"def": 65,
		"spa": 65,
		"spd": 110,
		"spe": 30
	},
	"abilities": {
		"0": "Immunity",
		"1": "Thick Fat"
	},
	"weightkg": 460,
	"prevo": "Munchlax",
	"evoType": "levelFriendship",
	"eggGroups": [
		"Monster"
	],
	"canHatch": true,
	"canGigantamax": "G-Max Replenish"
},
snorlaxgmax: {
	"num": 143,
	"name": "Snorlax-Gmax",
	"baseSpecies": "Snorlax",
	"forme": "Gmax",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 160,
		"atk": 110,
		"def": 65,
		"spa": 65,
		"spd": 110,
		"spe": 30
	},
	"abilities": {
		"0": "Immunity",
		"1": "Thick Fat"
	},
	"weightkg": 0,
	"eggGroups": [
		"Monster"
	],
	"changesFrom": "Snorlax"
},
articuno: {
	"num": 144,
	"name": "Articuno",
	"types": [
		"Ice",
		"Flying"
	],
	"gender": "N",
	"baseStats": {
		"hp": 90,
		"atk": 85,
		"def": 100,
		"spa": 95,
		"spd": 125,
		"spe": 85
	},
	"abilities": {
		"0": "Pressure",
		"1": "Illuminate"
	},
	"weightkg": 55.4,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"otherFormes": [
		"Articuno-Galar"
	],
	"formeOrder": [
		"Articuno",
		"Articuno-Galar"
	]
},
articunogalar: {
	"num": 144,
	"name": "Articuno-Galar",
	"baseSpecies": "Articuno",
	"forme": "Galar",
	"types": [
		"Psychic",
		"Flying"
	],
	"gender": "N",
	"baseStats": {
		"hp": 90,
		"atk": 85,
		"def": 85,
		"spa": 125,
		"spd": 100,
		"spe": 95
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 50.9,
	"eggGroups": [
		"Undiscovered"
	]
},
zapdos: {
	"num": 145,
	"name": "Zapdos",
	"types": [
		"Electric",
		"Flying"
	],
	"gender": "N",
	"baseStats": {
		"hp": 90,
		"atk": 90,
		"def": 85,
		"spa": 125,
		"spd": 90,
		"spe": 100
	},
	"abilities": {
		"0": "Pressure",
		"1": "Static"
	},
	"weightkg": 52.6,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"otherFormes": [
		"Zapdos-Galar"
	],
	"formeOrder": [
		"Zapdos",
		"Zapdos-Galar"
	]
},
zapdosgalar: {
	"num": 145,
	"name": "Zapdos-Galar",
	"baseSpecies": "Zapdos",
	"forme": "Galar",
	"types": [
		"Fighting",
		"Flying"
	],
	"gender": "N",
	"baseStats": {
		"hp": 90,
		"atk": 125,
		"def": 90,
		"spa": 85,
		"spd": 90,
		"spe": 100
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 58.2,
	"eggGroups": [
		"Undiscovered"
	]
},
moltres: {
	"num": 146,
	"name": "Moltres",
	"types": [
		"Fire",
		"Flying"
	],
	"gender": "N",
	"baseStats": {
		"hp": 90,
		"atk": 100,
		"def": 90,
		"spa": 125,
		"spd": 85,
		"spe": 90
	},
	"abilities": {
		"0": "Pressure",
		"1": "Flame Body"
	},
	"weightkg": 60,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"otherFormes": [
		"Moltres-Galar"
	],
	"formeOrder": [
		"Moltres",
		"Moltres-Galar"
	]
},
moltresgalar: {
	"num": 146,
	"name": "Moltres-Galar",
	"baseSpecies": "Moltres",
	"forme": "Galar",
	"types": [
		"Dark",
		"Flying"
	],
	"gender": "N",
	"baseStats": {
		"hp": 90,
		"atk": 85,
		"def": 90,
		"spa": 100,
		"spd": 125,
		"spe": 90
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 66,
	"eggGroups": [
		"Undiscovered"
	]
},
dratini: {
	"num": 147,
	"name": "Dratini",
	"types": [
		"Dragon"
	],
	"baseStats": {
		"hp": 41,
		"atk": 64,
		"def": 45,
		"spa": 50,
		"spd": 50,
		"spe": 50
	},
	"abilities": {
		"0": "Shed Skin",
		"1": "Marvel Scale"
	},
	"weightkg": 3.3,
	"evos": [
		"Dragonair"
	],
	"eggGroups": [
		"Water 1",
		"Dragon"
	]
},
dragonair: {
	"num": 148,
	"name": "Dragonair",
	"types": [
		"Dragon"
	],
	"baseStats": {
		"hp": 61,
		"atk": 84,
		"def": 65,
		"spa": 70,
		"spd": 70,
		"spe": 70
	},
	"abilities": {
		"0": "Shed Skin",
		"1": "Marvel Scale"
	},
	"weightkg": 16.5,
	"prevo": "Dratini",
	"evoLevel": 30,
	"evos": [
		"Dragonite"
	],
	"eggGroups": [
		"Water 1",
		"Dragon"
	]
},
dragonite: {
	"num": 149,
	"name": "Dragonite",
	"types": [
		"Dragon",
		"Flying"
	],
	"baseStats": {
		"hp": 91,
		"atk": 134,
		"def": 95,
		"spa": 100,
		"spd": 100,
		"spe": 80
	},
	"abilities": {
		"0": "Inner Focus",
		"1": "Illuminate"
	},
	"weightkg": 210,
	"prevo": "Dragonair",
	"evoLevel": 55,
	"eggGroups": [
		"Water 1",
		"Dragon"
	]
},
mewtwo: {
	"num": 150,
	"name": "Mewtwo",
	"types": [
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 106,
		"atk": 110,
		"def": 90,
		"spa": 154,
		"spd": 90,
		"spe": 130
	},
	"abilities": {
		"0": "Pressure",
		"1": "Illuminate"
	},
	"weightkg": 122,
	"eggGroups": [
		"Undiscovered"
	],
	"tags": [
		"Restricted Legendary"
	],
	"otherFormes": [
		"Mewtwo-Mega-X",
		"Mewtwo-Mega-Y"
	],
	"formeOrder": [
		"Mewtwo",
		"Mewtwo-Mega-X",
		"Mewtwo-Mega-Y"
	]
},
mewtwomegax: {
	"num": 150,
	"name": "Mewtwo-Mega-X",
	"baseSpecies": "Mewtwo",
	"forme": "Mega-X",
	"types": [
		"Psychic",
		"Fighting"
	],
	"gender": "N",
	"baseStats": {
		"hp": 106,
		"atk": 150,
		"def": 95,
		"spa": 154,
		"spd": 95,
		"spe": 130
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 127,
	"eggGroups": [
		"Undiscovered"
	]
},
mewtwomegay: {
	"num": 150,
	"name": "Mewtwo-Mega-Y",
	"baseSpecies": "Mewtwo",
	"forme": "Mega-Y",
	"types": [
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 106,
		"atk": 130,
		"def": 80,
		"spa": 174,
		"spd": 105,
		"spe": 135
	},
	"abilities": {
		"0": "Insomnia"
	},
	"weightkg": 33,
	"eggGroups": [
		"Undiscovered"
	]
},
mew: {
	"num": 151,
	"name": "Mew",
	"types": [
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 100,
		"def": 100,
		"spa": 100,
		"spd": 100,
		"spe": 100
	},
	"abilities": {
		"0": "Synchronize"
	},
	"weightkg": 4,
	"tags": [
		"Mythical"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
chikorita: {
	"num": 152,
	"name": "Chikorita",
	"types": [
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 45,
		"atk": 49,
		"def": 65,
		"spa": 49,
		"spd": 65,
		"spe": 45
	},
	"abilities": {
		"0": "Overgrow",
		"1": "Illuminate"
	},
	"weightkg": 6.4,
	"evos": [
		"Bayleef"
	],
	"eggGroups": [
		"Monster",
		"Grass"
	]
},
bayleef: {
	"num": 153,
	"name": "Bayleef",
	"types": [
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 60,
		"atk": 62,
		"def": 80,
		"spa": 63,
		"spd": 80,
		"spe": 60
	},
	"abilities": {
		"0": "Overgrow",
		"1": "Illuminate"
	},
	"weightkg": 15.8,
	"prevo": "Chikorita",
	"evoLevel": 16,
	"evos": [
		"Meganium"
	],
	"eggGroups": [
		"Monster",
		"Grass"
	]
},
meganium: {
	"num": 154,
	"name": "Meganium",
	"types": [
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 80,
		"atk": 82,
		"def": 100,
		"spa": 83,
		"spd": 100,
		"spe": 80
	},
	"abilities": {
		"0": "Overgrow",
		"1": "Illuminate"
	},
	"weightkg": 100.5,
	"prevo": "Bayleef",
	"evoLevel": 32,
	"eggGroups": [
		"Monster",
		"Grass"
	]
},
cyndaquil: {
	"num": 155,
	"name": "Cyndaquil",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 39,
		"atk": 52,
		"def": 43,
		"spa": 60,
		"spd": 50,
		"spe": 65
	},
	"abilities": {
		"0": "Blaze",
		"1": "Flash Fire"
	},
	"weightkg": 7.9,
	"evos": [
		"Quilava"
	],
	"eggGroups": [
		"Field"
	]
},
quilava: {
	"num": 156,
	"name": "Quilava",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 58,
		"atk": 64,
		"def": 58,
		"spa": 80,
		"spd": 65,
		"spe": 80
	},
	"abilities": {
		"0": "Blaze",
		"1": "Flash Fire"
	},
	"weightkg": 19,
	"prevo": "Cyndaquil",
	"evoLevel": 14,
	"evos": [
		"Typhlosion",
		"Typhlosion-Hisui"
	],
	"eggGroups": [
		"Field"
	]
},
typhlosion: {
	"num": 157,
	"name": "Typhlosion",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 78,
		"atk": 84,
		"def": 78,
		"spa": 109,
		"spd": 85,
		"spe": 100
	},
	"abilities": {
		"0": "Blaze",
		"1": "Flash Fire"
	},
	"weightkg": 79.5,
	"prevo": "Quilava",
	"evoLevel": 36,
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Typhlosion-Hisui"
	],
	"formeOrder": [
		"Typhlosion",
		"Typhlosion-Hisui"
	]
},
typhlosionhisui: {
	"num": 157,
	"name": "Typhlosion-Hisui",
	"baseSpecies": "Typhlosion",
	"forme": "Hisui",
	"types": [
		"Fire",
		"Ghost"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 73,
		"atk": 84,
		"def": 78,
		"spa": 119,
		"spd": 85,
		"spe": 95
	},
	"abilities": {
		"0": "Blaze",
		"1": "Flash Fire"
	},
	"weightkg": 69.8,
	"prevo": "Quilava",
	"evoLevel": 36,
	"eggGroups": [
		"Field"
	]
},
totodile: {
	"num": 158,
	"name": "Totodile",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 50,
		"atk": 65,
		"def": 64,
		"spa": 44,
		"spd": 48,
		"spe": 43
	},
	"abilities": {
		"0": "Torrent",
		"1": "Illuminate"
	},
	"weightkg": 9.5,
	"evos": [
		"Croconaw"
	],
	"eggGroups": [
		"Monster",
		"Water 1"
	]
},
croconaw: {
	"num": 159,
	"name": "Croconaw",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 65,
		"atk": 80,
		"def": 80,
		"spa": 59,
		"spd": 63,
		"spe": 58
	},
	"abilities": {
		"0": "Torrent",
		"1": "Illuminate"
	},
	"weightkg": 25,
	"prevo": "Totodile",
	"evoLevel": 18,
	"evos": [
		"Feraligatr"
	],
	"eggGroups": [
		"Monster",
		"Water 1"
	]
},
feraligatr: {
	"num": 160,
	"name": "Feraligatr",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 85,
		"atk": 105,
		"def": 100,
		"spa": 79,
		"spd": 83,
		"spe": 78
	},
	"abilities": {
		"0": "Torrent",
		"1": "Illuminate"
	},
	"weightkg": 88.8,
	"prevo": "Croconaw",
	"evoLevel": 30,
	"eggGroups": [
		"Monster",
		"Water 1"
	]
},
sentret: {
	"num": 161,
	"name": "Sentret",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 35,
		"atk": 46,
		"def": 34,
		"spa": 35,
		"spd": 45,
		"spe": 20
	},
	"abilities": {
		"0": "Run Away",
		"1": "Keen Eye"
	},
	"weightkg": 6,
	"evos": [
		"Furret"
	],
	"eggGroups": [
		"Field"
	]
},
furret: {
	"num": 162,
	"name": "Furret",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 85,
		"atk": 76,
		"def": 64,
		"spa": 45,
		"spd": 55,
		"spe": 90
	},
	"abilities": {
		"0": "Run Away",
		"1": "Keen Eye"
	},
	"weightkg": 32.5,
	"prevo": "Sentret",
	"evoLevel": 15,
	"eggGroups": [
		"Field"
	]
},
hoothoot: {
	"num": 163,
	"name": "Hoothoot",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 60,
		"atk": 30,
		"def": 30,
		"spa": 36,
		"spd": 56,
		"spe": 50
	},
	"abilities": {
		"0": "Insomnia",
		"1": "Keen Eye"
	},
	"weightkg": 21.2,
	"evos": [
		"Noctowl"
	],
	"eggGroups": [
		"Flying"
	]
},
noctowl: {
	"num": 164,
	"name": "Noctowl",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 100,
		"atk": 50,
		"def": 50,
		"spa": 86,
		"spd": 96,
		"spe": 70
	},
	"abilities": {
		"0": "Insomnia",
		"1": "Keen Eye"
	},
	"weightkg": 40.8,
	"prevo": "Hoothoot",
	"evoLevel": 20,
	"eggGroups": [
		"Flying"
	]
},
ledyba: {
	"num": 165,
	"name": "Ledyba",
	"types": [
		"Bug",
		"Flying"
	],
	"baseStats": {
		"hp": 40,
		"atk": 20,
		"def": 30,
		"spa": 40,
		"spd": 80,
		"spe": 55
	},
	"abilities": {
		"0": "Swarm",
		"1": "Early Bird"
	},
	"weightkg": 10.8,
	"evos": [
		"Ledian"
	],
	"eggGroups": [
		"Bug"
	]
},
ledian: {
	"num": 166,
	"name": "Ledian",
	"types": [
		"Bug",
		"Flying"
	],
	"baseStats": {
		"hp": 55,
		"atk": 35,
		"def": 50,
		"spa": 55,
		"spd": 110,
		"spe": 85
	},
	"abilities": {
		"0": "Swarm",
		"1": "Early Bird"
	},
	"weightkg": 35.6,
	"prevo": "Ledyba",
	"evoLevel": 18,
	"eggGroups": [
		"Bug"
	]
},
spinarak: {
	"num": 167,
	"name": "Spinarak",
	"types": [
		"Bug",
		"Poison"
	],
	"baseStats": {
		"hp": 40,
		"atk": 60,
		"def": 40,
		"spa": 40,
		"spd": 40,
		"spe": 30
	},
	"abilities": {
		"0": "Swarm",
		"1": "Insomnia"
	},
	"weightkg": 8.5,
	"evos": [
		"Ariados"
	],
	"eggGroups": [
		"Bug"
	]
},
ariados: {
	"num": 168,
	"name": "Ariados",
	"types": [
		"Bug",
		"Poison"
	],
	"baseStats": {
		"hp": 70,
		"atk": 90,
		"def": 70,
		"spa": 60,
		"spd": 70,
		"spe": 40
	},
	"abilities": {
		"0": "Swarm",
		"1": "Insomnia"
	},
	"weightkg": 33.5,
	"prevo": "Spinarak",
	"evoLevel": 22,
	"eggGroups": [
		"Bug"
	]
},
crobat: {
	"num": 169,
	"name": "Crobat",
	"types": [
		"Poison",
		"Flying"
	],
	"baseStats": {
		"hp": 85,
		"atk": 90,
		"def": 80,
		"spa": 70,
		"spd": 80,
		"spe": 130
	},
	"abilities": {
		"0": "Inner Focus",
		"1": "Illuminate"
	},
	"weightkg": 75,
	"prevo": "Golbat",
	"evoType": "levelFriendship",
	"eggGroups": [
		"Flying"
	]
},
chinchou: {
	"num": 170,
	"name": "Chinchou",
	"types": [
		"Water",
		"Electric"
	],
	"baseStats": {
		"hp": 75,
		"atk": 38,
		"def": 38,
		"spa": 56,
		"spd": 56,
		"spe": 67
	},
	"abilities": {
		"0": "Volt Absorb",
		"1": "Illuminate",
		"H": "Water Absorb"
	},
	"weightkg": 12,
	"evos": [
		"Lanturn"
	],
	"eggGroups": [
		"Water 2"
	]
},
lanturn: {
	"num": 171,
	"name": "Lanturn",
	"types": [
		"Water",
		"Electric"
	],
	"baseStats": {
		"hp": 125,
		"atk": 58,
		"def": 58,
		"spa": 76,
		"spd": 76,
		"spe": 67
	},
	"abilities": {
		"0": "Volt Absorb",
		"1": "Illuminate",
		"H": "Water Absorb"
	},
	"weightkg": 22.5,
	"prevo": "Chinchou",
	"evoLevel": 27,
	"eggGroups": [
		"Water 2"
	]
},
pichu: {
	"num": 172,
	"name": "Pichu",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 20,
		"atk": 40,
		"def": 15,
		"spa": 35,
		"spd": 35,
		"spe": 60
	},
	"abilities": {
		"0": "Static",
		"1": "Lightning Rod"
	},
	"weightkg": 2,
	"evos": [
		"Pikachu"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true,
	"otherFormes": [
		"Pichu-Spiky-eared"
	],
	"formeOrder": [
		"Pichu",
		"Pichu-Spiky-eared"
	]
},
pichuspikyeared: {
	"num": 172,
	"name": "Pichu-Spiky-eared",
	"baseSpecies": "Pichu",
	"forme": "Spiky-eared",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 20,
		"atk": 40,
		"def": 15,
		"spa": 35,
		"spd": 35,
		"spe": 60
	},
	"abilities": {
		"0": "Static"
	},
	"weightkg": 2,
	"eggGroups": [
		"Undiscovered"
	],
	"gen": 4
},
cleffa: {
	"num": 173,
	"name": "Cleffa",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 50,
		"atk": 25,
		"def": 28,
		"spa": 45,
		"spd": 55,
		"spe": 15
	},
	"abilities": {
		"0": "Cute Charm",
		"1": "Illuminate"
	},
	"weightkg": 3,
	"evos": [
		"Clefairy"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
igglybuff: {
	"num": 174,
	"name": "Igglybuff",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 90,
		"atk": 30,
		"def": 15,
		"spa": 40,
		"spd": 20,
		"spe": 15
	},
	"abilities": {
		"0": "Cute Charm",
		"1": "Illuminate"
	},
	"weightkg": 1,
	"evos": [
		"Jigglypuff"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
togepi: {
	"num": 175,
	"name": "Togepi",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 35,
		"atk": 20,
		"def": 65,
		"spa": 40,
		"spd": 65,
		"spe": 20
	},
	"abilities": {
		"0": "Hustle",
		"1": "Serene Grace"
	},
	"weightkg": 1.5,
	"evos": [
		"Togetic"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
togetic: {
	"num": 176,
	"name": "Togetic",
	"types": [
		"Normal",
		"Flying"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 55,
		"atk": 40,
		"def": 85,
		"spa": 80,
		"spd": 105,
		"spe": 40
	},
	"abilities": {
		"0": "Hustle",
		"1": "Serene Grace"
	},
	"weightkg": 3.2,
	"prevo": "Togepi",
	"evoType": "levelFriendship",
	"evos": [
		"Togekiss"
	],
	"eggGroups": [
		"Flying",
		"Fairy"
	]
},
natu: {
	"num": 177,
	"name": "Natu",
	"types": [
		"Psychic",
		"Flying"
	],
	"baseStats": {
		"hp": 40,
		"atk": 50,
		"def": 45,
		"spa": 70,
		"spd": 45,
		"spe": 70
	},
	"abilities": {
		"0": "Synchronize",
		"1": "Early Bird"
	},
	"weightkg": 2,
	"evos": [
		"Xatu"
	],
	"eggGroups": [
		"Flying"
	]
},
xatu: {
	"num": 178,
	"name": "Xatu",
	"types": [
		"Psychic",
		"Flying"
	],
	"baseStats": {
		"hp": 65,
		"atk": 75,
		"def": 70,
		"spa": 95,
		"spd": 70,
		"spe": 95
	},
	"abilities": {
		"0": "Synchronize",
		"1": "Early Bird"
	},
	"weightkg": 15,
	"prevo": "Natu",
	"evoLevel": 25,
	"eggGroups": [
		"Flying"
	]
},
mareep: {
	"num": 179,
	"name": "Mareep",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 55,
		"atk": 40,
		"def": 40,
		"spa": 65,
		"spd": 45,
		"spe": 35
	},
	"abilities": {
		"0": "Static",
		"1": "Plus"
	},
	"weightkg": 7.8,
	"evos": [
		"Flaaffy"
	],
	"eggGroups": [
		"Monster",
		"Field"
	]
},
flaaffy: {
	"num": 180,
	"name": "Flaaffy",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 70,
		"atk": 55,
		"def": 55,
		"spa": 80,
		"spd": 60,
		"spe": 45
	},
	"abilities": {
		"0": "Static",
		"1": "Plus"
	},
	"weightkg": 13.3,
	"prevo": "Mareep",
	"evoLevel": 15,
	"evos": [
		"Ampharos"
	],
	"eggGroups": [
		"Monster",
		"Field"
	]
},
ampharos: {
	"num": 181,
	"name": "Ampharos",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 90,
		"atk": 75,
		"def": 85,
		"spa": 115,
		"spd": 90,
		"spe": 55
	},
	"abilities": {
		"0": "Static",
		"1": "Plus"
	},
	"weightkg": 61.5,
	"prevo": "Flaaffy",
	"evoLevel": 30,
	"eggGroups": [
		"Monster",
		"Field"
	],
	"otherFormes": [
		"Ampharos-Mega"
	],
	"formeOrder": [
		"Ampharos",
		"Ampharos-Mega"
	]
},
ampharosmega: {
	"num": 181,
	"name": "Ampharos-Mega",
	"baseSpecies": "Ampharos",
	"forme": "Mega",
	"types": [
		"Electric",
		"Dragon"
	],
	"baseStats": {
		"hp": 90,
		"atk": 85,
		"def": 95,
		"spa": 140,
		"spd": 100,
		"spe": 50
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 61.5,
	"eggGroups": [
		"Monster",
		"Field"
	]
},
bellossom: {
	"num": 182,
	"name": "Bellossom",
	"types": [
		"Grass"
	],
	"baseStats": {
		"hp": 75,
		"atk": 80,
		"def": 95,
		"spa": 90,
		"spd": 100,
		"spe": 50
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Illuminate"
	},
	"weightkg": 5.8,
	"prevo": "Gloom",
	"evoType": "useItem",
	"evoItem": "Sun Stone",
	"eggGroups": [
		"Grass"
	]
},
marill: {
	"num": 183,
	"name": "Marill",
	"types": [
		"Water",
		"Normal"
	],
	"baseStats": {
		"hp": 70,
		"atk": 20,
		"def": 50,
		"spa": 20,
		"spd": 50,
		"spe": 40
	},
	"abilities": {
		"0": "Thick Fat",
		"1": "Huge Power"
	},
	"weightkg": 8.5,
	"prevo": "Azurill",
	"evoType": "levelFriendship",
	"evos": [
		"Azumarill"
	],
	"eggGroups": [
		"Water 1",
		"Fairy"
	],
	"canHatch": true
},
azumarill: {
	"num": 184,
	"name": "Azumarill",
	"types": [
		"Water",
		"Normal"
	],
	"baseStats": {
		"hp": 100,
		"atk": 50,
		"def": 80,
		"spa": 60,
		"spd": 80,
		"spe": 50
	},
	"abilities": {
		"0": "Thick Fat",
		"1": "Huge Power"
	},
	"weightkg": 28.5,
	"prevo": "Marill",
	"evoLevel": 18,
	"eggGroups": [
		"Water 1",
		"Fairy"
	]
},
sudowoodo: {
	"num": 185,
	"name": "Sudowoodo",
	"types": [
		"Rock"
	],
	"baseStats": {
		"hp": 70,
		"atk": 100,
		"def": 115,
		"spa": 30,
		"spd": 65,
		"spe": 30
	},
	"abilities": {
		"0": "Sturdy",
		"1": "Rock Head"
	},
	"weightkg": 38,
	"prevo": "Bonsly",
	"evoType": "levelMove",
	"evoMove": "Mimic",
	"eggGroups": [
		"Mineral"
	],
	"canHatch": true
},
politoed: {
	"num": 186,
	"name": "Politoed",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 90,
		"atk": 75,
		"def": 75,
		"spa": 90,
		"spd": 100,
		"spe": 70
	},
	"abilities": {
		"0": "Water Absorb",
		"1": "Damp",
		"H": "Drizzle"
	},
	"weightkg": 33.9,
	"prevo": "Poliwhirl",
	"evoType": "trade",
	"evoItem": "King's Rock",
	"eggGroups": [
		"Water 1"
	]
},
hoppip: {
	"num": 187,
	"name": "Hoppip",
	"types": [
		"Grass",
		"Flying"
	],
	"baseStats": {
		"hp": 35,
		"atk": 35,
		"def": 40,
		"spa": 35,
		"spd": 55,
		"spe": 50
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Illuminate"
	},
	"weightkg": 0.5,
	"evos": [
		"Skiploom"
	],
	"eggGroups": [
		"Fairy",
		"Grass"
	]
},
skiploom: {
	"num": 188,
	"name": "Skiploom",
	"types": [
		"Grass",
		"Flying"
	],
	"baseStats": {
		"hp": 55,
		"atk": 45,
		"def": 50,
		"spa": 45,
		"spd": 65,
		"spe": 80
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Illuminate"
	},
	"weightkg": 1,
	"prevo": "Hoppip",
	"evoLevel": 18,
	"evos": [
		"Jumpluff"
	],
	"eggGroups": [
		"Fairy",
		"Grass"
	]
},
jumpluff: {
	"num": 189,
	"name": "Jumpluff",
	"types": [
		"Grass",
		"Flying"
	],
	"baseStats": {
		"hp": 75,
		"atk": 55,
		"def": 70,
		"spa": 55,
		"spd": 95,
		"spe": 110
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Illuminate"
	},
	"weightkg": 3,
	"prevo": "Skiploom",
	"evoLevel": 27,
	"eggGroups": [
		"Fairy",
		"Grass"
	]
},
aipom: {
	"num": 190,
	"name": "Aipom",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 55,
		"atk": 70,
		"def": 55,
		"spa": 40,
		"spd": 55,
		"spe": 85
	},
	"abilities": {
		"0": "Run Away",
		"1": "Pickup"
	},
	"weightkg": 11.5,
	"evos": [
		"Ambipom"
	],
	"eggGroups": [
		"Field"
	]
},
sunkern: {
	"num": 191,
	"name": "Sunkern",
	"types": [
		"Grass"
	],
	"baseStats": {
		"hp": 30,
		"atk": 30,
		"def": 30,
		"spa": 30,
		"spd": 30,
		"spe": 30
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Illuminate",
		"H": "Early Bird"
	},
	"weightkg": 1.8,
	"evos": [
		"Sunflora"
	],
	"eggGroups": [
		"Grass"
	]
},
sunflora: {
	"num": 192,
	"name": "Sunflora",
	"types": [
		"Grass"
	],
	"baseStats": {
		"hp": 75,
		"atk": 75,
		"def": 55,
		"spa": 105,
		"spd": 85,
		"spe": 30
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Illuminate",
		"H": "Early Bird"
	},
	"weightkg": 8.5,
	"prevo": "Sunkern",
	"evoType": "useItem",
	"evoItem": "Sun Stone",
	"eggGroups": [
		"Grass"
	]
},
yanma: {
	"num": 193,
	"name": "Yanma",
	"types": [
		"Bug",
		"Flying"
	],
	"baseStats": {
		"hp": 65,
		"atk": 65,
		"def": 45,
		"spa": 75,
		"spd": 45,
		"spe": 95
	},
	"abilities": {
		"0": "Speed Boost",
		"1": "Compound Eyes"
	},
	"weightkg": 38,
	"evos": [
		"Yanmega"
	],
	"eggGroups": [
		"Bug"
	]
},
wooper: {
	"num": 194,
	"name": "Wooper",
	"types": [
		"Water",
		"Ground"
	],
	"baseStats": {
		"hp": 55,
		"atk": 45,
		"def": 45,
		"spa": 25,
		"spd": 25,
		"spe": 15
	},
	"abilities": {
		"0": "Damp",
		"1": "Water Absorb"
	},
	"weightkg": 8.5,
	"evos": [
		"Quagsire"
	],
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
quagsire: {
	"num": 195,
	"name": "Quagsire",
	"types": [
		"Water",
		"Ground"
	],
	"baseStats": {
		"hp": 95,
		"atk": 85,
		"def": 85,
		"spa": 65,
		"spd": 65,
		"spe": 35
	},
	"abilities": {
		"0": "Damp",
		"1": "Water Absorb"
	},
	"weightkg": 75,
	"prevo": "Wooper",
	"evoLevel": 20,
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
espeon: {
	"num": 196,
	"name": "Espeon",
	"types": [
		"Psychic"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 65,
		"atk": 65,
		"def": 60,
		"spa": 130,
		"spd": 95,
		"spe": 110
	},
	"abilities": {
		"0": "Synchronize",
		"1": "Illuminate"
	},
	"weightkg": 26.5,
	"prevo": "Eevee",
	"evoType": "levelFriendship",
	"evoCondition": "during the day",
	"eggGroups": [
		"Field"
	]
},
umbreon: {
	"num": 197,
	"name": "Umbreon",
	"types": [
		"Dark"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 95,
		"atk": 65,
		"def": 110,
		"spa": 60,
		"spd": 130,
		"spe": 65
	},
	"abilities": {
		"0": "Synchronize",
		"1": "Inner Focus"
	},
	"weightkg": 27,
	"prevo": "Eevee",
	"evoType": "levelFriendship",
	"evoCondition": "at night",
	"eggGroups": [
		"Field"
	]
},
murkrow: {
	"num": 198,
	"name": "Murkrow",
	"types": [
		"Dark",
		"Flying"
	],
	"baseStats": {
		"hp": 60,
		"atk": 85,
		"def": 42,
		"spa": 85,
		"spd": 42,
		"spe": 91
	},
	"abilities": {
		"0": "Insomnia",
		"1": "Illuminate"
	},
	"weightkg": 2.1,
	"evos": [
		"Honchkrow"
	],
	"eggGroups": [
		"Flying"
	]
},
slowking: {
	"num": 199,
	"name": "Slowking",
	"types": [
		"Water",
		"Psychic"
	],
	"baseStats": {
		"hp": 95,
		"atk": 75,
		"def": 80,
		"spa": 100,
		"spd": 110,
		"spe": 30
	},
	"abilities": {
		"0": "Oblivious",
		"1": "Own Tempo"
	},
	"weightkg": 79.5,
	"prevo": "Slowpoke",
	"evoType": "trade",
	"evoItem": "King's Rock",
	"eggGroups": [
		"Monster",
		"Water 1"
	],
	"otherFormes": [
		"Slowking-Galar"
	],
	"formeOrder": [
		"Slowking",
		"Slowking-Galar"
	]
},
slowkinggalar: {
	"num": 199,
	"name": "Slowking-Galar",
	"baseSpecies": "Slowking",
	"forme": "Galar",
	"types": [
		"Poison",
		"Psychic"
	],
	"baseStats": {
		"hp": 95,
		"atk": 65,
		"def": 80,
		"spa": 110,
		"spd": 110,
		"spe": 30
	},
	"abilities": {
		"0": "Illuminate",
		"1": "Own Tempo"
	},
	"weightkg": 79.5,
	"prevo": "Slowpoke-Galar",
	"evoType": "useItem",
	"evoItem": "Galarica Wreath",
	"eggGroups": [
		"Monster",
		"Water 1"
	]
},
misdreavus: {
	"num": 200,
	"name": "Misdreavus",
	"types": [
		"Ghost"
	],
	"baseStats": {
		"hp": 60,
		"atk": 60,
		"def": 60,
		"spa": 85,
		"spd": 85,
		"spe": 85
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 1,
	"evos": [
		"Mismagius"
	],
	"eggGroups": [
		"Amorphous"
	]
},
unown: {
	"num": 201,
	"name": "Unown",
	"baseForme": "A",
	"types": [
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 48,
		"atk": 72,
		"def": 48,
		"spa": 72,
		"spd": 48,
		"spe": 48
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 5,
	"eggGroups": [
		"Undiscovered"
	],
	"cosmeticFormes": [
		"Unown-B",
		"Unown-C",
		"Unown-D",
		"Unown-E",
		"Unown-F",
		"Unown-G",
		"Unown-H",
		"Unown-I",
		"Unown-J",
		"Unown-K",
		"Unown-L",
		"Unown-M",
		"Unown-N",
		"Unown-O",
		"Unown-P",
		"Unown-Q",
		"Unown-R",
		"Unown-S",
		"Unown-T",
		"Unown-U",
		"Unown-V",
		"Unown-W",
		"Unown-X",
		"Unown-Y",
		"Unown-Z",
		"Unown-Exclamation",
		"Unown-Question"
	],
	"formeOrder": [
		"Unown",
		"Unown-B",
		"Unown-C",
		"Unown-D",
		"Unown-E",
		"Unown-F",
		"Unown-G",
		"Unown-H",
		"Unown-I",
		"Unown-J",
		"Unown-K",
		"Unown-L",
		"Unown-M",
		"Unown-N",
		"Unown-O",
		"Unown-P",
		"Unown-Q",
		"Unown-R",
		"Unown-S",
		"Unown-T",
		"Unown-U",
		"Unown-V",
		"Unown-W",
		"Unown-X",
		"Unown-Y",
		"Unown-Z",
		"Unown-Exclamation",
		"Unown-Question"
	]
},
wobbuffet: {
	"num": 202,
	"name": "Wobbuffet",
	"types": [
		"Psychic"
	],
	"baseStats": {
		"hp": 190,
		"atk": 33,
		"def": 58,
		"spa": 33,
		"spd": 58,
		"spe": 33
	},
	"abilities": {
		"0": "Shadow Tag",
		"1": "Illuminate"
	},
	"weightkg": 28.5,
	"prevo": "Wynaut",
	"evoLevel": 15,
	"eggGroups": [
		"Amorphous"
	],
	"canHatch": true
},
girafarig: {
	"num": 203,
	"name": "Girafarig",
	"types": [
		"Normal",
		"Psychic"
	],
	"baseStats": {
		"hp": 70,
		"atk": 80,
		"def": 65,
		"spa": 90,
		"spd": 65,
		"spe": 85
	},
	"abilities": {
		"0": "Inner Focus",
		"1": "Early Bird"
	},
	"weightkg": 41.5,
	"eggGroups": [
		"Field"
	]
},
pineco: {
	"num": 204,
	"name": "Pineco",
	"types": [
		"Bug"
	],
	"baseStats": {
		"hp": 50,
		"atk": 65,
		"def": 90,
		"spa": 35,
		"spd": 35,
		"spe": 15
	},
	"abilities": {
		"0": "Sturdy",
		"1": "Illuminate"
	},
	"weightkg": 7.2,
	"evos": [
		"Forretress"
	],
	"eggGroups": [
		"Bug"
	]
},
forretress: {
	"num": 205,
	"name": "Forretress",
	"types": [
		"Bug",
		"Steel"
	],
	"baseStats": {
		"hp": 75,
		"atk": 90,
		"def": 140,
		"spa": 60,
		"spd": 60,
		"spe": 40
	},
	"abilities": {
		"0": "Sturdy",
		"1": "Illuminate"
	},
	"weightkg": 125.8,
	"prevo": "Pineco",
	"evoLevel": 31,
	"eggGroups": [
		"Bug"
	]
},
dunsparce: {
	"num": 206,
	"name": "Dunsparce",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 100,
		"atk": 70,
		"def": 70,
		"spa": 65,
		"spd": 65,
		"spe": 45
	},
	"abilities": {
		"0": "Serene Grace",
		"1": "Run Away"
	},
	"weightkg": 14,
	"eggGroups": [
		"Field"
	]
},
gligar: {
	"num": 207,
	"name": "Gligar",
	"types": [
		"Ground",
		"Flying"
	],
	"baseStats": {
		"hp": 65,
		"atk": 75,
		"def": 105,
		"spa": 35,
		"spd": 65,
		"spe": 85
	},
	"abilities": {
		"0": "Hyper Cutter",
		"1": "Illuminate",
		"H": "Immunity"
	},
	"weightkg": 64.8,
	"evos": [
		"Gliscor"
	],
	"eggGroups": [
		"Bug"
	]
},
steelix: {
	"num": 208,
	"name": "Steelix",
	"types": [
		"Steel",
		"Ground"
	],
	"baseStats": {
		"hp": 75,
		"atk": 85,
		"def": 200,
		"spa": 55,
		"spd": 65,
		"spe": 30
	},
	"abilities": {
		"0": "Rock Head",
		"1": "Sturdy"
	},
	"weightkg": 400,
	"prevo": "Onix",
	"evoType": "trade",
	"evoItem": "Metal Coat",
	"eggGroups": [
		"Mineral"
	],
	"otherFormes": [
		"Steelix-Mega"
	],
	"formeOrder": [
		"Steelix",
		"Steelix-Mega"
	]
},
steelixmega: {
	"num": 208,
	"name": "Steelix-Mega",
	"baseSpecies": "Steelix",
	"forme": "Mega",
	"types": [
		"Steel",
		"Ground"
	],
	"baseStats": {
		"hp": 75,
		"atk": 105,
		"def": 215,
		"spa": 55,
		"spd": 80,
		"spe": 30
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 740,
	"eggGroups": [
		"Mineral"
	]
},
snubbull: {
	"num": 209,
	"name": "Snubbull",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 60,
		"atk": 80,
		"def": 50,
		"spa": 40,
		"spd": 40,
		"spe": 30
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Run Away"
	},
	"weightkg": 7.8,
	"evos": [
		"Granbull"
	],
	"eggGroups": [
		"Field",
		"Fairy"
	]
},
granbull: {
	"num": 210,
	"name": "Granbull",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 90,
		"atk": 120,
		"def": 75,
		"spa": 60,
		"spd": 60,
		"spe": 45
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Illuminate"
	},
	"weightkg": 48.7,
	"prevo": "Snubbull",
	"evoLevel": 23,
	"eggGroups": [
		"Field",
		"Fairy"
	]
},
qwilfish: {
	"num": 211,
	"name": "Qwilfish",
	"types": [
		"Water",
		"Poison"
	],
	"baseStats": {
		"hp": 65,
		"atk": 95,
		"def": 85,
		"spa": 55,
		"spd": 55,
		"spe": 85
	},
	"abilities": {
		"0": "Poison Point",
		"1": "Swift Swim",
		"H": "Intimidate"
	},
	"weightkg": 3.9,
	"eggGroups": [
		"Water 2"
	],
	"otherFormes": [
		"Qwilfish-Hisui"
	],
	"formeOrder": [
		"Qwilfish",
		"Qwilfish-Hisui"
	]
},
qwilfishhisui: {
	"num": 211,
	"name": "Qwilfish-Hisui",
	"baseSpecies": "Qwilfish",
	"forme": "Hisui",
	"types": [
		"Dark",
		"Poison"
	],
	"baseStats": {
		"hp": 65,
		"atk": 95,
		"def": 85,
		"spa": 55,
		"spd": 55,
		"spe": 85
	},
	"abilities": {
		"0": "Poison Point",
		"1": "Swift Swim",
		"H": "Intimidate"
	},
	"weightkg": 3.9,
	"evos": [
		"Overqwil"
	],
	"eggGroups": [
		"Water 2"
	]
},
scizor: {
	"num": 212,
	"name": "Scizor",
	"types": [
		"Bug",
		"Steel"
	],
	"baseStats": {
		"hp": 70,
		"atk": 130,
		"def": 100,
		"spa": 55,
		"spd": 80,
		"spe": 65
	},
	"abilities": {
		"0": "Swarm",
		"1": "Illuminate"
	},
	"weightkg": 118,
	"prevo": "Scyther",
	"evoType": "trade",
	"evoItem": "Metal Coat",
	"eggGroups": [
		"Bug"
	],
	"otherFormes": [
		"Scizor-Mega"
	],
	"formeOrder": [
		"Scizor",
		"Scizor-Mega"
	]
},
scizormega: {
	"num": 212,
	"name": "Scizor-Mega",
	"baseSpecies": "Scizor",
	"forme": "Mega",
	"types": [
		"Bug",
		"Steel"
	],
	"baseStats": {
		"hp": 70,
		"atk": 140,
		"def": 120,
		"spa": 60,
		"spd": 90,
		"spe": 70
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 125,
	"eggGroups": [
		"Bug"
	]
},
shuckle: {
	"num": 213,
	"name": "Shuckle",
	"types": [
		"Bug",
		"Rock"
	],
	"baseStats": {
		"hp": 20,
		"atk": 10,
		"def": 230,
		"spa": 10,
		"spd": 230,
		"spe": 5
	},
	"abilities": {
		"0": "Sturdy",
		"1": "Illuminate"
	},
	"weightkg": 20.5,
	"eggGroups": [
		"Bug"
	]
},
heracross: {
	"num": 214,
	"name": "Heracross",
	"types": [
		"Bug",
		"Fighting"
	],
	"baseStats": {
		"hp": 80,
		"atk": 125,
		"def": 75,
		"spa": 40,
		"spd": 95,
		"spe": 85
	},
	"abilities": {
		"0": "Swarm",
		"1": "Guts"
	},
	"weightkg": 54,
	"eggGroups": [
		"Bug"
	],
	"otherFormes": [
		"Heracross-Mega"
	],
	"formeOrder": [
		"Heracross",
		"Heracross-Mega"
	]
},
heracrossmega: {
	"num": 214,
	"name": "Heracross-Mega",
	"baseSpecies": "Heracross",
	"forme": "Mega",
	"types": [
		"Bug",
		"Fighting"
	],
	"baseStats": {
		"hp": 80,
		"atk": 155,
		"def": 95,
		"spa": 40,
		"spd": 100,
		"spe": 80
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 62.5,
	"eggGroups": [
		"Bug"
	]
},
sneasel: {
	"num": 215,
	"name": "Sneasel",
	"types": [
		"Dark",
		"Ice"
	],
	"baseStats": {
		"hp": 55,
		"atk": 95,
		"def": 55,
		"spa": 35,
		"spd": 75,
		"spe": 115
	},
	"abilities": {
		"0": "Inner Focus",
		"1": "Keen Eye"
	},
	"weightkg": 28,
	"evos": [
		"Weavile"
	],
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Sneasel-Hisui"
	],
	"formeOrder": [
		"Sneasel",
		"Sneasel-Hisui"
	]
},
sneaselhisui: {
	"num": 215,
	"name": "Sneasel-Hisui",
	"baseSpecies": "Sneasel",
	"forme": "Hisui",
	"types": [
		"Fighting",
		"Poison"
	],
	"baseStats": {
		"hp": 55,
		"atk": 95,
		"def": 55,
		"spa": 35,
		"spd": 75,
		"spe": 115
	},
	"abilities": {
		"0": "Inner Focus",
		"1": "Keen Eye"
	},
	"weightkg": 27,
	"evos": [
		"Sneasler"
	],
	"eggGroups": [
		"Field"
	]
},
teddiursa: {
	"num": 216,
	"name": "Teddiursa",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 60,
		"atk": 80,
		"def": 50,
		"spa": 50,
		"spd": 50,
		"spe": 40
	},
	"abilities": {
		"0": "Pickup",
		"1": "Illuminate"
	},
	"weightkg": 8.8,
	"evos": [
		"Ursaring"
	],
	"eggGroups": [
		"Field"
	]
},
ursaring: {
	"num": 217,
	"name": "Ursaring",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 90,
		"atk": 130,
		"def": 75,
		"spa": 75,
		"spd": 75,
		"spe": 55
	},
	"abilities": {
		"0": "Guts",
		"1": "Illuminate"
	},
	"weightkg": 125.8,
	"prevo": "Teddiursa",
	"evoLevel": 30,
	"evos": [
		"Ursaluna"
	],
	"eggGroups": [
		"Field"
	]
},
slugma: {
	"num": 218,
	"name": "Slugma",
	"types": [
		"Fire"
	],
	"baseStats": {
		"hp": 40,
		"atk": 40,
		"def": 40,
		"spa": 70,
		"spd": 40,
		"spe": 20
	},
	"abilities": {
		"0": "Magma Armor",
		"1": "Flame Body"
	},
	"weightkg": 35,
	"evos": [
		"Magcargo"
	],
	"eggGroups": [
		"Amorphous"
	]
},
magcargo: {
	"num": 219,
	"name": "Magcargo",
	"types": [
		"Fire",
		"Rock"
	],
	"baseStats": {
		"hp": 60,
		"atk": 50,
		"def": 120,
		"spa": 90,
		"spd": 80,
		"spe": 30
	},
	"abilities": {
		"0": "Magma Armor",
		"1": "Flame Body"
	},
	"weightkg": 55,
	"prevo": "Slugma",
	"evoLevel": 38,
	"eggGroups": [
		"Amorphous"
	]
},
swinub: {
	"num": 220,
	"name": "Swinub",
	"types": [
		"Ice",
		"Ground"
	],
	"baseStats": {
		"hp": 50,
		"atk": 50,
		"def": 40,
		"spa": 30,
		"spd": 30,
		"spe": 50
	},
	"abilities": {
		"0": "Oblivious",
		"1": "Illuminate",
		"H": "Thick Fat"
	},
	"weightkg": 6.5,
	"evos": [
		"Piloswine"
	],
	"eggGroups": [
		"Field"
	]
},
piloswine: {
	"num": 221,
	"name": "Piloswine",
	"types": [
		"Ice",
		"Ground"
	],
	"baseStats": {
		"hp": 100,
		"atk": 100,
		"def": 80,
		"spa": 60,
		"spd": 60,
		"spe": 50
	},
	"abilities": {
		"0": "Oblivious",
		"1": "Illuminate",
		"H": "Thick Fat"
	},
	"weightkg": 55.8,
	"prevo": "Swinub",
	"evoLevel": 33,
	"evos": [
		"Mamoswine"
	],
	"eggGroups": [
		"Field"
	]
},
corsola: {
	"num": 222,
	"name": "Corsola",
	"types": [
		"Water",
		"Rock"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 65,
		"atk": 55,
		"def": 95,
		"spa": 65,
		"spd": 95,
		"spe": 35
	},
	"abilities": {
		"0": "Hustle",
		"1": "Natural Cure"
	},
	"weightkg": 5,
	"eggGroups": [
		"Water 1",
		"Water 3"
	],
	"otherFormes": [
		"Corsola-Galar"
	],
	"formeOrder": [
		"Corsola",
		"Corsola-Galar"
	]
},
corsolagalar: {
	"num": 222,
	"name": "Corsola-Galar",
	"baseSpecies": "Corsola",
	"forme": "Galar",
	"types": [
		"Ghost"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 60,
		"atk": 55,
		"def": 100,
		"spa": 65,
		"spd": 100,
		"spe": 30
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 0.5,
	"evos": [
		"Cursola"
	],
	"eggGroups": [
		"Water 1",
		"Water 3"
	]
},
remoraid: {
	"num": 223,
	"name": "Remoraid",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 35,
		"atk": 65,
		"def": 35,
		"spa": 65,
		"spd": 35,
		"spe": 65
	},
	"abilities": {
		"0": "Hustle",
		"1": "Illuminate"
	},
	"weightkg": 12,
	"evos": [
		"Octillery"
	],
	"eggGroups": [
		"Water 1",
		"Water 2"
	]
},
octillery: {
	"num": 224,
	"name": "Octillery",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 75,
		"atk": 105,
		"def": 75,
		"spa": 105,
		"spd": 75,
		"spe": 45
	},
	"abilities": {
		"0": "Suction Cups",
		"1": "Illuminate"
	},
	"weightkg": 28.5,
	"prevo": "Remoraid",
	"evoLevel": 25,
	"eggGroups": [
		"Water 1",
		"Water 2"
	]
},
delibird: {
	"num": 225,
	"name": "Delibird",
	"types": [
		"Ice",
		"Flying"
	],
	"baseStats": {
		"hp": 45,
		"atk": 55,
		"def": 45,
		"spa": 65,
		"spd": 45,
		"spe": 75
	},
	"abilities": {
		"0": "Vital Spirit",
		"1": "Hustle",
		"H": "Insomnia"
	},
	"weightkg": 16,
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
mantine: {
	"num": 226,
	"name": "Mantine",
	"types": [
		"Water",
		"Flying"
	],
	"baseStats": {
		"hp": 85,
		"atk": 40,
		"def": 70,
		"spa": 80,
		"spd": 140,
		"spe": 70
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Water Absorb",
		"H": "Water Veil"
	},
	"weightkg": 220,
	"prevo": "Mantyke",
	"evoType": "levelExtra",
	"evoCondition": "with a Remoraid in party",
	"eggGroups": [
		"Water 1"
	],
	"canHatch": true
},
skarmory: {
	"num": 227,
	"name": "Skarmory",
	"types": [
		"Steel",
		"Flying"
	],
	"baseStats": {
		"hp": 65,
		"atk": 80,
		"def": 140,
		"spa": 40,
		"spd": 70,
		"spe": 70
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Sturdy"
	},
	"weightkg": 50.5,
	"eggGroups": [
		"Flying"
	]
},
houndour: {
	"num": 228,
	"name": "Houndour",
	"types": [
		"Dark",
		"Fire"
	],
	"baseStats": {
		"hp": 45,
		"atk": 60,
		"def": 30,
		"spa": 80,
		"spd": 50,
		"spe": 65
	},
	"abilities": {
		"0": "Early Bird",
		"1": "Flash Fire"
	},
	"weightkg": 10.8,
	"evos": [
		"Houndoom"
	],
	"eggGroups": [
		"Field"
	]
},
houndoom: {
	"num": 229,
	"name": "Houndoom",
	"types": [
		"Dark",
		"Fire"
	],
	"baseStats": {
		"hp": 75,
		"atk": 90,
		"def": 50,
		"spa": 110,
		"spd": 80,
		"spe": 95
	},
	"abilities": {
		"0": "Early Bird",
		"1": "Flash Fire"
	},
	"weightkg": 35,
	"prevo": "Houndour",
	"evoLevel": 24,
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Houndoom-Mega"
	],
	"formeOrder": [
		"Houndoom",
		"Houndoom-Mega"
	]
},
houndoommega: {
	"num": 229,
	"name": "Houndoom-Mega",
	"baseSpecies": "Houndoom",
	"forme": "Mega",
	"types": [
		"Dark",
		"Fire"
	],
	"baseStats": {
		"hp": 75,
		"atk": 90,
		"def": 70,
		"spa": 125,
		"spd": 85,
		"spe": 105
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 49.5,
	"eggGroups": [
		"Field"
	]
},
kingdra: {
	"num": 230,
	"name": "Kingdra",
	"types": [
		"Water",
		"Dragon"
	],
	"baseStats": {
		"hp": 75,
		"atk": 95,
		"def": 95,
		"spa": 95,
		"spd": 95,
		"spe": 85
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Illuminate",
		"H": "Damp"
	},
	"weightkg": 152,
	"prevo": "Seadra",
	"evoType": "trade",
	"evoItem": "Dragon Scale",
	"eggGroups": [
		"Water 1",
		"Dragon"
	]
},
phanpy: {
	"num": 231,
	"name": "Phanpy",
	"types": [
		"Ground"
	],
	"baseStats": {
		"hp": 90,
		"atk": 60,
		"def": 60,
		"spa": 40,
		"spd": 40,
		"spe": 40
	},
	"abilities": {
		"0": "Pickup",
		"1": "Illuminate"
	},
	"weightkg": 33.5,
	"evos": [
		"Donphan"
	],
	"eggGroups": [
		"Field"
	]
},
donphan: {
	"num": 232,
	"name": "Donphan",
	"types": [
		"Ground"
	],
	"baseStats": {
		"hp": 90,
		"atk": 120,
		"def": 120,
		"spa": 60,
		"spd": 60,
		"spe": 50
	},
	"abilities": {
		"0": "Sturdy",
		"1": "Illuminate"
	},
	"weightkg": 120,
	"prevo": "Phanpy",
	"evoLevel": 25,
	"eggGroups": [
		"Field"
	]
},
porygon2: {
	"num": 233,
	"name": "Porygon2",
	"types": [
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 85,
		"atk": 80,
		"def": 90,
		"spa": 105,
		"spd": 95,
		"spe": 60
	},
	"abilities": {
		"0": "Trace",
		"1": "Illuminate"
	},
	"weightkg": 32.5,
	"prevo": "Porygon",
	"evoType": "trade",
	"evoItem": "Up-Grade",
	"evos": [
		"Porygon-Z"
	],
	"eggGroups": [
		"Mineral"
	]
},
stantler: {
	"num": 234,
	"name": "Stantler",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 73,
		"atk": 95,
		"def": 62,
		"spa": 85,
		"spd": 65,
		"spe": 85
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Illuminate"
	},
	"weightkg": 71.2,
	"evos": [
		"Wyrdeer"
	],
	"eggGroups": [
		"Field"
	]
},
smeargle: {
	"num": 235,
	"name": "Smeargle",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 55,
		"atk": 20,
		"def": 35,
		"spa": 20,
		"spd": 45,
		"spe": 75
	},
	"abilities": {
		"0": "Own Tempo",
		"1": "Illuminate"
	},
	"weightkg": 58,
	"eggGroups": [
		"Field"
	]
},
tyrogue: {
	"num": 236,
	"name": "Tyrogue",
	"types": [
		"Fighting"
	],
	"gender": "M",
	"baseStats": {
		"hp": 35,
		"atk": 35,
		"def": 35,
		"spa": 35,
		"spd": 35,
		"spe": 35
	},
	"abilities": {
		"0": "Guts",
		"1": "Illuminate",
		"H": "Vital Spirit"
	},
	"weightkg": 21,
	"evos": [
		"Hitmonlee",
		"Hitmonchan",
		"Hitmontop"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
hitmontop: {
	"num": 237,
	"name": "Hitmontop",
	"types": [
		"Fighting"
	],
	"gender": "M",
	"baseStats": {
		"hp": 50,
		"atk": 95,
		"def": 95,
		"spa": 35,
		"spd": 110,
		"spe": 70
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Illuminate"
	},
	"weightkg": 48,
	"prevo": "Tyrogue",
	"evoLevel": 20,
	"evoCondition": "with an Atk stat equal to its Def stat",
	"eggGroups": [
		"Human-Like"
	]
},
smoochum: {
	"num": 238,
	"name": "Smoochum",
	"types": [
		"Ice",
		"Psychic"
	],
	"gender": "F",
	"baseStats": {
		"hp": 45,
		"atk": 30,
		"def": 15,
		"spa": 85,
		"spd": 65,
		"spe": 65
	},
	"abilities": {
		"0": "Oblivious",
		"1": "Illuminate"
	},
	"weightkg": 6,
	"evos": [
		"Jynx"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
elekid: {
	"num": 239,
	"name": "Elekid",
	"types": [
		"Electric"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 45,
		"atk": 63,
		"def": 37,
		"spa": 65,
		"spd": 55,
		"spe": 95
	},
	"abilities": {
		"0": "Static",
		"1": "Vital Spirit"
	},
	"weightkg": 23.5,
	"evos": [
		"Electabuzz"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
magby: {
	"num": 240,
	"name": "Magby",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 45,
		"atk": 75,
		"def": 37,
		"spa": 70,
		"spd": 55,
		"spe": 83
	},
	"abilities": {
		"0": "Flame Body",
		"1": "Vital Spirit"
	},
	"weightkg": 21.4,
	"evos": [
		"Magmar"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
miltank: {
	"num": 241,
	"name": "Miltank",
	"types": [
		"Normal"
	],
	"gender": "F",
	"baseStats": {
		"hp": 95,
		"atk": 80,
		"def": 105,
		"spa": 40,
		"spd": 70,
		"spe": 100
	},
	"abilities": {
		"0": "Thick Fat",
		"1": "Illuminate"
	},
	"weightkg": 75.5,
	"eggGroups": [
		"Field"
	]
},
blissey: {
	"num": 242,
	"name": "Blissey",
	"types": [
		"Normal"
	],
	"gender": "F",
	"baseStats": {
		"hp": 255,
		"atk": 10,
		"def": 10,
		"spa": 75,
		"spd": 135,
		"spe": 55
	},
	"abilities": {
		"0": "Natural Cure",
		"1": "Serene Grace"
	},
	"weightkg": 46.8,
	"prevo": "Chansey",
	"evoType": "levelFriendship",
	"eggGroups": [
		"Fairy"
	]
},
raikou: {
	"num": 243,
	"name": "Raikou",
	"types": [
		"Electric"
	],
	"gender": "N",
	"baseStats": {
		"hp": 90,
		"atk": 85,
		"def": 75,
		"spa": 115,
		"spd": 100,
		"spe": 115
	},
	"abilities": {
		"0": "Pressure",
		"1": "Inner Focus"
	},
	"weightkg": 178,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
entei: {
	"num": 244,
	"name": "Entei",
	"types": [
		"Fire"
	],
	"gender": "N",
	"baseStats": {
		"hp": 115,
		"atk": 115,
		"def": 85,
		"spa": 90,
		"spd": 75,
		"spe": 100
	},
	"abilities": {
		"0": "Pressure",
		"1": "Inner Focus"
	},
	"weightkg": 198,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
suicune: {
	"num": 245,
	"name": "Suicune",
	"types": [
		"Water"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 75,
		"def": 115,
		"spa": 90,
		"spd": 115,
		"spe": 85
	},
	"abilities": {
		"0": "Pressure",
		"1": "Inner Focus"
	},
	"weightkg": 187,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
larvitar: {
	"num": 246,
	"name": "Larvitar",
	"types": [
		"Rock",
		"Ground"
	],
	"baseStats": {
		"hp": 50,
		"atk": 64,
		"def": 50,
		"spa": 45,
		"spd": 50,
		"spe": 41
	},
	"abilities": {
		"0": "Guts",
		"1": "Illuminate"
	},
	"weightkg": 72,
	"evos": [
		"Pupitar"
	],
	"eggGroups": [
		"Monster"
	]
},
pupitar: {
	"num": 247,
	"name": "Pupitar",
	"types": [
		"Rock",
		"Ground"
	],
	"baseStats": {
		"hp": 70,
		"atk": 84,
		"def": 70,
		"spa": 65,
		"spd": 70,
		"spe": 51
	},
	"abilities": {
		"0": "Shed Skin"
	},
	"weightkg": 152,
	"prevo": "Larvitar",
	"evoLevel": 30,
	"evos": [
		"Tyranitar"
	],
	"eggGroups": [
		"Monster"
	]
},
tyranitar: {
	"num": 248,
	"name": "Tyranitar",
	"types": [
		"Rock",
		"Dark"
	],
	"baseStats": {
		"hp": 100,
		"atk": 134,
		"def": 110,
		"spa": 95,
		"spd": 100,
		"spe": 61
	},
	"abilities": {
		"0": "Sand Stream",
		"1": "Illuminate"
	},
	"weightkg": 202,
	"prevo": "Pupitar",
	"evoLevel": 55,
	"eggGroups": [
		"Monster"
	],
	"otherFormes": [
		"Tyranitar-Mega"
	],
	"formeOrder": [
		"Tyranitar",
		"Tyranitar-Mega"
	]
},
tyranitarmega: {
	"num": 248,
	"name": "Tyranitar-Mega",
	"baseSpecies": "Tyranitar",
	"forme": "Mega",
	"types": [
		"Rock",
		"Dark"
	],
	"baseStats": {
		"hp": 100,
		"atk": 149,
		"def": 130,
		"spa": 95,
		"spd": 110,
		"spe": 66
	},
	"abilities": {
		"0": "Sand Stream"
	},
	"weightkg": 255,
	"eggGroups": [
		"Monster"
	]
},
lugia: {
	"num": 249,
	"name": "Lugia",
	"types": [
		"Psychic",
		"Flying"
	],
	"gender": "N",
	"baseStats": {
		"hp": 106,
		"atk": 90,
		"def": 130,
		"spa": 90,
		"spd": 154,
		"spe": 110
	},
	"abilities": {
		"0": "Pressure",
		"1": "Illuminate"
	},
	"weightkg": 216,
	"tags": [
		"Restricted Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
hooh: {
	"num": 250,
	"name": "Ho-Oh",
	"types": [
		"Fire",
		"Flying"
	],
	"gender": "N",
	"baseStats": {
		"hp": 106,
		"atk": 130,
		"def": 90,
		"spa": 110,
		"spd": 154,
		"spe": 90
	},
	"abilities": {
		"0": "Pressure",
		"1": "Illuminate"
	},
	"weightkg": 199,
	"tags": [
		"Restricted Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
celebi: {
	"num": 251,
	"name": "Celebi",
	"types": [
		"Psychic",
		"Grass"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 100,
		"def": 100,
		"spa": 100,
		"spd": 100,
		"spe": 100
	},
	"abilities": {
		"0": "Natural Cure"
	},
	"weightkg": 5,
	"tags": [
		"Mythical"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
treecko: {
	"num": 252,
	"name": "Treecko",
	"types": [
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 40,
		"atk": 45,
		"def": 35,
		"spa": 65,
		"spd": 55,
		"spe": 70
	},
	"abilities": {
		"0": "Overgrow",
		"1": "Illuminate"
	},
	"weightkg": 5,
	"evos": [
		"Grovyle"
	],
	"eggGroups": [
		"Monster",
		"Dragon"
	]
},
grovyle: {
	"num": 253,
	"name": "Grovyle",
	"types": [
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 50,
		"atk": 65,
		"def": 45,
		"spa": 85,
		"spd": 65,
		"spe": 95
	},
	"abilities": {
		"0": "Overgrow",
		"1": "Illuminate"
	},
	"weightkg": 21.6,
	"prevo": "Treecko",
	"evoLevel": 16,
	"evos": [
		"Sceptile"
	],
	"eggGroups": [
		"Monster",
		"Dragon"
	]
},
sceptile: {
	"num": 254,
	"name": "Sceptile",
	"types": [
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 70,
		"atk": 85,
		"def": 65,
		"spa": 105,
		"spd": 85,
		"spe": 120
	},
	"abilities": {
		"0": "Overgrow",
		"1": "Illuminate"
	},
	"weightkg": 52.2,
	"prevo": "Grovyle",
	"evoLevel": 36,
	"eggGroups": [
		"Monster",
		"Dragon"
	],
	"otherFormes": [
		"Sceptile-Mega"
	],
	"formeOrder": [
		"Sceptile",
		"Sceptile-Mega"
	]
},
sceptilemega: {
	"num": 254,
	"name": "Sceptile-Mega",
	"baseSpecies": "Sceptile",
	"forme": "Mega",
	"types": [
		"Grass",
		"Dragon"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 70,
		"atk": 97,
		"def": 70,
		"spa": 125,
		"spd": 85,
		"spe": 132
	},
	"abilities": {
		"0": "Lightning Rod"
	},
	"weightkg": 55.2,
	"eggGroups": [
		"Monster",
		"Dragon"
	]
},
torchic: {
	"num": 255,
	"name": "Torchic",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 45,
		"atk": 60,
		"def": 40,
		"spa": 70,
		"spd": 50,
		"spe": 45
	},
	"abilities": {
		"0": "Blaze",
		"1": "Speed Boost"
	},
	"weightkg": 2.5,
	"evos": [
		"Combusken"
	],
	"eggGroups": [
		"Field"
	]
},
combusken: {
	"num": 256,
	"name": "Combusken",
	"types": [
		"Fire",
		"Fighting"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 60,
		"atk": 85,
		"def": 60,
		"spa": 85,
		"spd": 60,
		"spe": 55
	},
	"abilities": {
		"0": "Blaze",
		"1": "Speed Boost"
	},
	"weightkg": 19.5,
	"prevo": "Torchic",
	"evoLevel": 16,
	"evos": [
		"Blaziken"
	],
	"eggGroups": [
		"Field"
	]
},
blaziken: {
	"num": 257,
	"name": "Blaziken",
	"types": [
		"Fire",
		"Fighting"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 80,
		"atk": 120,
		"def": 70,
		"spa": 110,
		"spd": 70,
		"spe": 80
	},
	"abilities": {
		"0": "Blaze",
		"1": "Speed Boost"
	},
	"weightkg": 52,
	"prevo": "Combusken",
	"evoLevel": 36,
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Blaziken-Mega"
	],
	"formeOrder": [
		"Blaziken",
		"Blaziken-Mega"
	]
},
blazikenmega: {
	"num": 257,
	"name": "Blaziken-Mega",
	"baseSpecies": "Blaziken",
	"forme": "Mega",
	"types": [
		"Fire",
		"Fighting"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 80,
		"atk": 140,
		"def": 75,
		"spa": 120,
		"spd": 75,
		"spe": 90
	},
	"abilities": {
		"0": "Speed Boost"
	},
	"weightkg": 52,
	"eggGroups": [
		"Field"
	]
},
mudkip: {
	"num": 258,
	"name": "Mudkip",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 50,
		"atk": 70,
		"def": 50,
		"spa": 50,
		"spd": 50,
		"spe": 40
	},
	"abilities": {
		"0": "Torrent",
		"1": "Damp"
	},
	"weightkg": 7.6,
	"evos": [
		"Marshtomp"
	],
	"eggGroups": [
		"Monster",
		"Water 1"
	]
},
marshtomp: {
	"num": 259,
	"name": "Marshtomp",
	"types": [
		"Water",
		"Ground"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 70,
		"atk": 85,
		"def": 70,
		"spa": 60,
		"spd": 70,
		"spe": 50
	},
	"abilities": {
		"0": "Torrent",
		"1": "Damp"
	},
	"weightkg": 28,
	"prevo": "Mudkip",
	"evoLevel": 16,
	"evos": [
		"Swampert"
	],
	"eggGroups": [
		"Monster",
		"Water 1"
	]
},
swampert: {
	"num": 260,
	"name": "Swampert",
	"types": [
		"Water",
		"Ground"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 100,
		"atk": 110,
		"def": 90,
		"spa": 85,
		"spd": 90,
		"spe": 60
	},
	"abilities": {
		"0": "Torrent",
		"1": "Damp"
	},
	"weightkg": 81.9,
	"prevo": "Marshtomp",
	"evoLevel": 36,
	"eggGroups": [
		"Monster",
		"Water 1"
	],
	"otherFormes": [
		"Swampert-Mega"
	],
	"formeOrder": [
		"Swampert",
		"Swampert-Mega"
	]
},
swampertmega: {
	"num": 260,
	"name": "Swampert-Mega",
	"baseSpecies": "Swampert",
	"forme": "Mega",
	"types": [
		"Water",
		"Ground"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 100,
		"atk": 130,
		"def": 100,
		"spa": 90,
		"spd": 100,
		"spe": 65
	},
	"abilities": {
		"0": "Swift Swim"
	},
	"weightkg": 102,
	"eggGroups": [
		"Monster",
		"Water 1"
	]
},
poochyena: {
	"num": 261,
	"name": "Poochyena",
	"types": [
		"Dark"
	],
	"baseStats": {
		"hp": 35,
		"atk": 55,
		"def": 35,
		"spa": 30,
		"spd": 30,
		"spe": 35
	},
	"abilities": {
		"0": "Run Away",
		"1": "Illuminate"
	},
	"weightkg": 13.6,
	"evos": [
		"Mightyena"
	],
	"eggGroups": [
		"Field"
	]
},
mightyena: {
	"num": 262,
	"name": "Mightyena",
	"types": [
		"Dark"
	],
	"baseStats": {
		"hp": 70,
		"atk": 90,
		"def": 70,
		"spa": 60,
		"spd": 60,
		"spe": 70
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Illuminate"
	},
	"weightkg": 37,
	"prevo": "Poochyena",
	"evoLevel": 18,
	"eggGroups": [
		"Field"
	]
},
zigzagoon: {
	"num": 263,
	"name": "Zigzagoon",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 38,
		"atk": 30,
		"def": 41,
		"spa": 30,
		"spd": 41,
		"spe": 60
	},
	"abilities": {
		"0": "Pickup",
		"1": "Illuminate"
	},
	"weightkg": 17.5,
	"evos": [
		"Linoone"
	],
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Zigzagoon-Galar"
	],
	"formeOrder": [
		"Zigzagoon",
		"Zigzagoon-Galar"
	]
},
zigzagoongalar: {
	"num": 263,
	"name": "Zigzagoon-Galar",
	"baseSpecies": "Zigzagoon",
	"forme": "Galar",
	"types": [
		"Dark",
		"Normal"
	],
	"baseStats": {
		"hp": 38,
		"atk": 30,
		"def": 41,
		"spa": 30,
		"spd": 41,
		"spe": 60
	},
	"abilities": {
		"0": "Pickup",
		"1": "Illuminate"
	},
	"weightkg": 17.5,
	"evos": [
		"Linoone-Galar"
	],
	"eggGroups": [
		"Field"
	]
},
linoone: {
	"num": 264,
	"name": "Linoone",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 78,
		"atk": 70,
		"def": 61,
		"spa": 50,
		"spd": 61,
		"spe": 100
	},
	"abilities": {
		"0": "Pickup",
		"1": "Illuminate"
	},
	"weightkg": 32.5,
	"prevo": "Zigzagoon",
	"evoLevel": 20,
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Linoone-Galar"
	],
	"formeOrder": [
		"Linoone",
		"Linoone-Galar"
	]
},
linoonegalar: {
	"num": 264,
	"name": "Linoone-Galar",
	"baseSpecies": "Linoone",
	"forme": "Galar",
	"types": [
		"Dark",
		"Normal"
	],
	"baseStats": {
		"hp": 78,
		"atk": 70,
		"def": 61,
		"spa": 50,
		"spd": 61,
		"spe": 100
	},
	"abilities": {
		"0": "Pickup",
		"1": "Illuminate"
	},
	"weightkg": 32.5,
	"prevo": "Zigzagoon-Galar",
	"evoLevel": 20,
	"evos": [
		"Obstagoon"
	],
	"eggGroups": [
		"Field"
	]
},
wurmple: {
	"num": 265,
	"name": "Wurmple",
	"types": [
		"Bug"
	],
	"baseStats": {
		"hp": 45,
		"atk": 45,
		"def": 35,
		"spa": 20,
		"spd": 30,
		"spe": 20
	},
	"abilities": {
		"0": "Shield Dust",
		"1": "Run Away"
	},
	"weightkg": 3.6,
	"evos": [
		"Silcoon",
		"Cascoon"
	],
	"eggGroups": [
		"Bug"
	]
},
silcoon: {
	"num": 266,
	"name": "Silcoon",
	"types": [
		"Bug"
	],
	"baseStats": {
		"hp": 50,
		"atk": 35,
		"def": 55,
		"spa": 25,
		"spd": 25,
		"spe": 15
	},
	"abilities": {
		"0": "Shed Skin"
	},
	"weightkg": 10,
	"prevo": "Wurmple",
	"evoLevel": 7,
	"evos": [
		"Beautifly"
	],
	"eggGroups": [
		"Bug"
	]
},
beautifly: {
	"num": 267,
	"name": "Beautifly",
	"types": [
		"Bug",
		"Flying"
	],
	"baseStats": {
		"hp": 60,
		"atk": 70,
		"def": 50,
		"spa": 100,
		"spd": 50,
		"spe": 65
	},
	"abilities": {
		"0": "Swarm",
		"1": "Illuminate"
	},
	"weightkg": 28.4,
	"prevo": "Silcoon",
	"evoLevel": 10,
	"eggGroups": [
		"Bug"
	]
},
cascoon: {
	"num": 268,
	"name": "Cascoon",
	"types": [
		"Bug"
	],
	"baseStats": {
		"hp": 50,
		"atk": 35,
		"def": 55,
		"spa": 25,
		"spd": 25,
		"spe": 15
	},
	"abilities": {
		"0": "Shed Skin"
	},
	"weightkg": 11.5,
	"prevo": "Wurmple",
	"evoLevel": 7,
	"evos": [
		"Dustox"
	],
	"eggGroups": [
		"Bug"
	]
},
dustox: {
	"num": 269,
	"name": "Dustox",
	"types": [
		"Bug",
		"Poison"
	],
	"baseStats": {
		"hp": 60,
		"atk": 50,
		"def": 70,
		"spa": 50,
		"spd": 90,
		"spe": 65
	},
	"abilities": {
		"0": "Shield Dust",
		"1": "Compound Eyes"
	},
	"weightkg": 31.6,
	"prevo": "Cascoon",
	"evoLevel": 10,
	"eggGroups": [
		"Bug"
	]
},
lotad: {
	"num": 270,
	"name": "Lotad",
	"types": [
		"Water",
		"Grass"
	],
	"baseStats": {
		"hp": 40,
		"atk": 30,
		"def": 30,
		"spa": 40,
		"spd": 50,
		"spe": 30
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Rain Dish",
		"H": "Own Tempo"
	},
	"weightkg": 2.6,
	"evos": [
		"Lombre"
	],
	"eggGroups": [
		"Water 1",
		"Grass"
	]
},
lombre: {
	"num": 271,
	"name": "Lombre",
	"types": [
		"Water",
		"Grass"
	],
	"baseStats": {
		"hp": 60,
		"atk": 50,
		"def": 50,
		"spa": 60,
		"spd": 70,
		"spe": 50
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Rain Dish",
		"H": "Own Tempo"
	},
	"weightkg": 32.5,
	"prevo": "Lotad",
	"evoLevel": 14,
	"evos": [
		"Ludicolo"
	],
	"eggGroups": [
		"Water 1",
		"Grass"
	]
},
ludicolo: {
	"num": 272,
	"name": "Ludicolo",
	"types": [
		"Water",
		"Grass"
	],
	"baseStats": {
		"hp": 80,
		"atk": 70,
		"def": 70,
		"spa": 90,
		"spd": 100,
		"spe": 70
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Rain Dish",
		"H": "Own Tempo"
	},
	"weightkg": 55,
	"prevo": "Lombre",
	"evoType": "useItem",
	"evoItem": "Water Stone",
	"eggGroups": [
		"Water 1",
		"Grass"
	]
},
seedot: {
	"num": 273,
	"name": "Seedot",
	"types": [
		"Grass"
	],
	"baseStats": {
		"hp": 40,
		"atk": 40,
		"def": 50,
		"spa": 30,
		"spd": 30,
		"spe": 30
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Early Bird"
	},
	"weightkg": 4,
	"evos": [
		"Nuzleaf"
	],
	"eggGroups": [
		"Field",
		"Grass"
	]
},
nuzleaf: {
	"num": 274,
	"name": "Nuzleaf",
	"types": [
		"Grass",
		"Dark"
	],
	"baseStats": {
		"hp": 70,
		"atk": 70,
		"def": 40,
		"spa": 60,
		"spd": 40,
		"spe": 60
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Early Bird"
	},
	"weightkg": 28,
	"prevo": "Seedot",
	"evoLevel": 14,
	"evos": [
		"Shiftry"
	],
	"eggGroups": [
		"Field",
		"Grass"
	]
},
shiftry: {
	"num": 275,
	"name": "Shiftry",
	"types": [
		"Grass",
		"Dark"
	],
	"baseStats": {
		"hp": 90,
		"atk": 100,
		"def": 60,
		"spa": 90,
		"spd": 60,
		"spe": 80
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Early Bird"
	},
	"weightkg": 59.6,
	"prevo": "Nuzleaf",
	"evoType": "useItem",
	"evoItem": "Leaf Stone",
	"eggGroups": [
		"Field",
		"Grass"
	]
},
taillow: {
	"num": 276,
	"name": "Taillow",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 40,
		"atk": 55,
		"def": 30,
		"spa": 30,
		"spd": 30,
		"spe": 85
	},
	"abilities": {
		"0": "Guts",
		"1": "Illuminate"
	},
	"weightkg": 2.3,
	"evos": [
		"Swellow"
	],
	"eggGroups": [
		"Flying"
	]
},
swellow: {
	"num": 277,
	"name": "Swellow",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 60,
		"atk": 85,
		"def": 60,
		"spa": 75,
		"spd": 50,
		"spe": 125
	},
	"abilities": {
		"0": "Guts",
		"1": "Illuminate"
	},
	"weightkg": 19.8,
	"prevo": "Taillow",
	"evoLevel": 22,
	"eggGroups": [
		"Flying"
	]
},
wingull: {
	"num": 278,
	"name": "Wingull",
	"types": [
		"Water",
		"Flying"
	],
	"baseStats": {
		"hp": 40,
		"atk": 30,
		"def": 30,
		"spa": 55,
		"spd": 30,
		"spe": 85
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Illuminate",
		"H": "Rain Dish"
	},
	"weightkg": 9.5,
	"evos": [
		"Pelipper"
	],
	"eggGroups": [
		"Water 1",
		"Flying"
	]
},
pelipper: {
	"num": 279,
	"name": "Pelipper",
	"types": [
		"Water",
		"Flying"
	],
	"baseStats": {
		"hp": 60,
		"atk": 50,
		"def": 100,
		"spa": 95,
		"spd": 70,
		"spe": 65
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Drizzle",
		"H": "Rain Dish"
	},
	"weightkg": 28,
	"prevo": "Wingull",
	"evoLevel": 25,
	"eggGroups": [
		"Water 1",
		"Flying"
	]
},
ralts: {
	"num": 280,
	"name": "Ralts",
	"types": [
		"Psychic",
		"Normal"
	],
	"baseStats": {
		"hp": 28,
		"atk": 25,
		"def": 25,
		"spa": 45,
		"spd": 35,
		"spe": 40
	},
	"abilities": {
		"0": "Synchronize",
		"1": "Trace"
	},
	"weightkg": 6.6,
	"evos": [
		"Kirlia"
	],
	"eggGroups": [
		"Human-Like",
		"Amorphous"
	]
},
kirlia: {
	"num": 281,
	"name": "Kirlia",
	"types": [
		"Psychic",
		"Normal"
	],
	"baseStats": {
		"hp": 38,
		"atk": 35,
		"def": 35,
		"spa": 65,
		"spd": 55,
		"spe": 50
	},
	"abilities": {
		"0": "Synchronize",
		"1": "Trace"
	},
	"weightkg": 20.2,
	"prevo": "Ralts",
	"evoLevel": 20,
	"evos": [
		"Gardevoir",
		"Gallade"
	],
	"eggGroups": [
		"Human-Like",
		"Amorphous"
	]
},
gardevoir: {
	"num": 282,
	"name": "Gardevoir",
	"types": [
		"Psychic",
		"Normal"
	],
	"baseStats": {
		"hp": 68,
		"atk": 65,
		"def": 65,
		"spa": 125,
		"spd": 115,
		"spe": 80
	},
	"abilities": {
		"0": "Synchronize",
		"1": "Trace"
	},
	"weightkg": 48.4,
	"prevo": "Kirlia",
	"evoLevel": 30,
	"eggGroups": [
		"Human-Like",
		"Amorphous"
	],
	"otherFormes": [
		"Gardevoir-Mega"
	],
	"formeOrder": [
		"Gardevoir",
		"Gardevoir-Mega"
	]
},
gardevoirmega: {
	"num": 282,
	"name": "Gardevoir-Mega",
	"baseSpecies": "Gardevoir",
	"forme": "Mega",
	"types": [
		"Psychic",
		"Normal"
	],
	"baseStats": {
		"hp": 68,
		"atk": 75,
		"def": 65,
		"spa": 145,
		"spd": 125,
		"spe": 90
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 48.4,
	"eggGroups": [
		"Amorphous"
	]
},
surskit: {
	"num": 283,
	"name": "Surskit",
	"types": [
		"Bug",
		"Water"
	],
	"baseStats": {
		"hp": 40,
		"atk": 30,
		"def": 32,
		"spa": 50,
		"spd": 52,
		"spe": 65
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Rain Dish"
	},
	"weightkg": 1.7,
	"evos": [
		"Masquerain"
	],
	"eggGroups": [
		"Water 1",
		"Bug"
	]
},
masquerain: {
	"num": 284,
	"name": "Masquerain",
	"types": [
		"Bug",
		"Flying"
	],
	"baseStats": {
		"hp": 70,
		"atk": 60,
		"def": 62,
		"spa": 100,
		"spd": 82,
		"spe": 80
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Illuminate"
	},
	"weightkg": 3.6,
	"prevo": "Surskit",
	"evoLevel": 22,
	"eggGroups": [
		"Water 1",
		"Bug"
	]
},
shroomish: {
	"num": 285,
	"name": "Shroomish",
	"types": [
		"Grass"
	],
	"baseStats": {
		"hp": 60,
		"atk": 40,
		"def": 60,
		"spa": 40,
		"spd": 60,
		"spe": 35
	},
	"abilities": {
		"0": "Effect Spore",
		"1": "Illuminate"
	},
	"weightkg": 4.5,
	"evos": [
		"Breloom"
	],
	"eggGroups": [
		"Fairy",
		"Grass"
	]
},
breloom: {
	"num": 286,
	"name": "Breloom",
	"types": [
		"Grass",
		"Fighting"
	],
	"baseStats": {
		"hp": 60,
		"atk": 130,
		"def": 80,
		"spa": 60,
		"spd": 60,
		"spe": 70
	},
	"abilities": {
		"0": "Effect Spore",
		"1": "Illuminate"
	},
	"weightkg": 39.2,
	"prevo": "Shroomish",
	"evoLevel": 23,
	"eggGroups": [
		"Fairy",
		"Grass"
	]
},
slakoth: {
	"num": 287,
	"name": "Slakoth",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 60,
		"atk": 60,
		"def": 60,
		"spa": 35,
		"spd": 35,
		"spe": 30
	},
	"abilities": {
		"0": "Truant"
	},
	"weightkg": 24,
	"evos": [
		"Vigoroth"
	],
	"eggGroups": [
		"Field"
	]
},
vigoroth: {
	"num": 288,
	"name": "Vigoroth",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 80,
		"atk": 80,
		"def": 80,
		"spa": 55,
		"spd": 55,
		"spe": 90
	},
	"abilities": {
		"0": "Vital Spirit"
	},
	"weightkg": 46.5,
	"prevo": "Slakoth",
	"evoLevel": 18,
	"evos": [
		"Slaking"
	],
	"eggGroups": [
		"Field"
	]
},
slaking: {
	"num": 289,
	"name": "Slaking",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 150,
		"atk": 160,
		"def": 100,
		"spa": 95,
		"spd": 65,
		"spe": 100
	},
	"abilities": {
		"0": "Truant"
	},
	"weightkg": 130.5,
	"prevo": "Vigoroth",
	"evoLevel": 36,
	"eggGroups": [
		"Field"
	]
},
nincada: {
	"num": 290,
	"name": "Nincada",
	"types": [
		"Bug",
		"Ground"
	],
	"baseStats": {
		"hp": 31,
		"atk": 45,
		"def": 90,
		"spa": 30,
		"spd": 30,
		"spe": 40
	},
	"abilities": {
		"0": "Compound Eyes",
		"1": "Run Away"
	},
	"weightkg": 5.5,
	"evos": [
		"Ninjask",
		"Shedinja"
	],
	"eggGroups": [
		"Bug"
	]
},
ninjask: {
	"num": 291,
	"name": "Ninjask",
	"types": [
		"Bug",
		"Flying"
	],
	"baseStats": {
		"hp": 61,
		"atk": 90,
		"def": 45,
		"spa": 50,
		"spd": 50,
		"spe": 160
	},
	"abilities": {
		"0": "Speed Boost",
		"1": "Illuminate"
	},
	"weightkg": 12,
	"prevo": "Nincada",
	"evoLevel": 20,
	"eggGroups": [
		"Bug"
	]
},
shedinja: {
	"num": 292,
	"name": "Shedinja",
	"types": [
		"Bug",
		"Ghost"
	],
	"gender": "N",
	"baseStats": {
		"hp": 1,
		"atk": 90,
		"def": 45,
		"spa": 30,
		"spd": 30,
		"spe": 40
	},
	"maxHP": 1,
	"abilities": {
		"0": "Wonder Guard"
	},
	"weightkg": 1.2,
	"prevo": "Nincada",
	"evoLevel": 20,
	"eggGroups": [
		"Mineral"
	]
},
whismur: {
	"num": 293,
	"name": "Whismur",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 64,
		"atk": 51,
		"def": 23,
		"spa": 51,
		"spd": 23,
		"spe": 28
	},
	"abilities": {
		"0": "Soundproof",
		"1": "Illuminate"
	},
	"weightkg": 16.3,
	"evos": [
		"Loudred"
	],
	"eggGroups": [
		"Monster",
		"Field"
	]
},
loudred: {
	"num": 294,
	"name": "Loudred",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 84,
		"atk": 71,
		"def": 43,
		"spa": 71,
		"spd": 43,
		"spe": 48
	},
	"abilities": {
		"0": "Soundproof",
		"1": "Illuminate"
	},
	"weightkg": 40.5,
	"prevo": "Whismur",
	"evoLevel": 20,
	"evos": [
		"Exploud"
	],
	"eggGroups": [
		"Monster",
		"Field"
	]
},
exploud: {
	"num": 295,
	"name": "Exploud",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 104,
		"atk": 91,
		"def": 63,
		"spa": 91,
		"spd": 73,
		"spe": 68
	},
	"abilities": {
		"0": "Soundproof",
		"1": "Illuminate"
	},
	"weightkg": 84,
	"prevo": "Loudred",
	"evoLevel": 40,
	"eggGroups": [
		"Monster",
		"Field"
	]
},
makuhita: {
	"num": 296,
	"name": "Makuhita",
	"types": [
		"Fighting"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 72,
		"atk": 60,
		"def": 30,
		"spa": 20,
		"spd": 30,
		"spe": 25
	},
	"abilities": {
		"0": "Thick Fat",
		"1": "Guts"
	},
	"weightkg": 86.4,
	"evos": [
		"Hariyama"
	],
	"eggGroups": [
		"Human-Like"
	]
},
hariyama: {
	"num": 297,
	"name": "Hariyama",
	"types": [
		"Fighting"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 144,
		"atk": 120,
		"def": 60,
		"spa": 40,
		"spd": 60,
		"spe": 50
	},
	"abilities": {
		"0": "Thick Fat",
		"1": "Guts"
	},
	"weightkg": 253.8,
	"prevo": "Makuhita",
	"evoLevel": 24,
	"eggGroups": [
		"Human-Like"
	]
},
azurill: {
	"num": 298,
	"name": "Azurill",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 50,
		"atk": 20,
		"def": 40,
		"spa": 20,
		"spd": 40,
		"spe": 20
	},
	"abilities": {
		"0": "Thick Fat",
		"1": "Huge Power"
	},
	"weightkg": 2,
	"evos": [
		"Marill"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
nosepass: {
	"num": 299,
	"name": "Nosepass",
	"types": [
		"Rock"
	],
	"baseStats": {
		"hp": 30,
		"atk": 45,
		"def": 135,
		"spa": 45,
		"spd": 90,
		"spe": 30
	},
	"abilities": {
		"0": "Sturdy",
		"1": "Magnet Pull"
	},
	"weightkg": 97,
	"evos": [
		"Probopass"
	],
	"eggGroups": [
		"Mineral"
	]
},
skitty: {
	"num": 300,
	"name": "Skitty",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 50,
		"atk": 45,
		"def": 45,
		"spa": 35,
		"spd": 35,
		"spe": 50
	},
	"abilities": {
		"0": "Cute Charm",
		"1": "Illuminate"
	},
	"weightkg": 11,
	"evos": [
		"Delcatty"
	],
	"eggGroups": [
		"Field",
		"Fairy"
	]
},
delcatty: {
	"num": 301,
	"name": "Delcatty",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 70,
		"atk": 65,
		"def": 65,
		"spa": 55,
		"spd": 55,
		"spe": 90
	},
	"abilities": {
		"0": "Cute Charm",
		"1": "Illuminate"
	},
	"weightkg": 32.6,
	"prevo": "Skitty",
	"evoType": "useItem",
	"evoItem": "Moon Stone",
	"eggGroups": [
		"Field",
		"Fairy"
	]
},
sableye: {
	"num": 302,
	"name": "Sableye",
	"types": [
		"Dark",
		"Ghost"
	],
	"baseStats": {
		"hp": 50,
		"atk": 75,
		"def": 75,
		"spa": 65,
		"spd": 65,
		"spe": 50
	},
	"abilities": {
		"0": "Keen Eye",
		"1": "Illuminate"
	},
	"weightkg": 11,
	"eggGroups": [
		"Human-Like"
	],
	"otherFormes": [
		"Sableye-Mega"
	],
	"formeOrder": [
		"Sableye",
		"Sableye-Mega"
	]
},
sableyemega: {
	"num": 302,
	"name": "Sableye-Mega",
	"baseSpecies": "Sableye",
	"forme": "Mega",
	"types": [
		"Dark",
		"Ghost"
	],
	"baseStats": {
		"hp": 50,
		"atk": 80,
		"def": 100,
		"spa": 75,
		"spd": 90,
		"spe": 35
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 161,
	"eggGroups": [
		"Human-Like"
	]
},
mawile: {
	"num": 303,
	"name": "Mawile",
	"types": [
		"Steel",
		"Normal"
	],
	"baseStats": {
		"hp": 50,
		"atk": 85,
		"def": 85,
		"spa": 55,
		"spd": 55,
		"spe": 50
	},
	"abilities": {
		"0": "Hyper Cutter",
		"1": "Intimidate"
	},
	"weightkg": 11.5,
	"eggGroups": [
		"Field",
		"Fairy"
	],
	"otherFormes": [
		"Mawile-Mega"
	],
	"formeOrder": [
		"Mawile",
		"Mawile-Mega"
	]
},
mawilemega: {
	"num": 303,
	"name": "Mawile-Mega",
	"baseSpecies": "Mawile",
	"forme": "Mega",
	"types": [
		"Steel",
		"Normal"
	],
	"baseStats": {
		"hp": 50,
		"atk": 95,
		"def": 105,
		"spa": 55,
		"spd": 75,
		"spe": 50
	},
	"abilities": {
		"0": "Huge Power"
	},
	"weightkg": 23.5,
	"eggGroups": [
		"Field",
		"Fairy"
	]
},
aron: {
	"num": 304,
	"name": "Aron",
	"types": [
		"Steel",
		"Rock"
	],
	"baseStats": {
		"hp": 50,
		"atk": 70,
		"def": 100,
		"spa": 40,
		"spd": 40,
		"spe": 30
	},
	"abilities": {
		"0": "Sturdy",
		"1": "Rock Head"
	},
	"weightkg": 60,
	"evos": [
		"Lairon"
	],
	"eggGroups": [
		"Monster"
	]
},
lairon: {
	"num": 305,
	"name": "Lairon",
	"types": [
		"Steel",
		"Rock"
	],
	"baseStats": {
		"hp": 60,
		"atk": 90,
		"def": 140,
		"spa": 50,
		"spd": 50,
		"spe": 40
	},
	"abilities": {
		"0": "Sturdy",
		"1": "Rock Head"
	},
	"weightkg": 120,
	"prevo": "Aron",
	"evoLevel": 32,
	"evos": [
		"Aggron"
	],
	"eggGroups": [
		"Monster"
	]
},
aggron: {
	"num": 306,
	"name": "Aggron",
	"types": [
		"Steel",
		"Rock"
	],
	"baseStats": {
		"hp": 70,
		"atk": 110,
		"def": 180,
		"spa": 60,
		"spd": 60,
		"spe": 50
	},
	"abilities": {
		"0": "Sturdy",
		"1": "Rock Head"
	},
	"weightkg": 360,
	"prevo": "Lairon",
	"evoLevel": 42,
	"eggGroups": [
		"Monster"
	],
	"otherFormes": [
		"Aggron-Mega"
	],
	"formeOrder": [
		"Aggron",
		"Aggron-Mega"
	]
},
aggronmega: {
	"num": 306,
	"name": "Aggron-Mega",
	"baseSpecies": "Aggron",
	"forme": "Mega",
	"types": [
		"Steel"
	],
	"baseStats": {
		"hp": 70,
		"atk": 125,
		"def": 205,
		"spa": 60,
		"spd": 70,
		"spe": 50
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 395,
	"eggGroups": [
		"Monster"
	]
},
meditite: {
	"num": 307,
	"name": "Meditite",
	"types": [
		"Fighting",
		"Psychic"
	],
	"baseStats": {
		"hp": 30,
		"atk": 40,
		"def": 55,
		"spa": 40,
		"spd": 55,
		"spe": 60
	},
	"abilities": {
		"0": "Pure Power",
		"1": "Illuminate"
	},
	"weightkg": 11.2,
	"evos": [
		"Medicham"
	],
	"eggGroups": [
		"Human-Like"
	]
},
medicham: {
	"num": 308,
	"name": "Medicham",
	"types": [
		"Fighting",
		"Psychic"
	],
	"baseStats": {
		"hp": 60,
		"atk": 60,
		"def": 75,
		"spa": 60,
		"spd": 75,
		"spe": 80
	},
	"abilities": {
		"0": "Pure Power",
		"1": "Illuminate"
	},
	"weightkg": 31.5,
	"prevo": "Meditite",
	"evoLevel": 37,
	"eggGroups": [
		"Human-Like"
	],
	"otherFormes": [
		"Medicham-Mega"
	],
	"formeOrder": [
		"Medicham",
		"Medicham-Mega"
	]
},
medichammega: {
	"num": 308,
	"name": "Medicham-Mega",
	"baseSpecies": "Medicham",
	"forme": "Mega",
	"types": [
		"Fighting",
		"Psychic"
	],
	"baseStats": {
		"hp": 60,
		"atk": 80,
		"def": 80,
		"spa": 70,
		"spd": 80,
		"spe": 90
	},
	"abilities": {
		"0": "Pure Power"
	},
	"weightkg": 31.5,
	"eggGroups": [
		"Human-Like"
	]
},
electrike: {
	"num": 309,
	"name": "Electrike",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 40,
		"atk": 45,
		"def": 40,
		"spa": 65,
		"spd": 40,
		"spe": 65
	},
	"abilities": {
		"0": "Static",
		"1": "Lightning Rod",
		"H": "Minus"
	},
	"weightkg": 15.2,
	"evos": [
		"Manectric"
	],
	"eggGroups": [
		"Field"
	]
},
manectric: {
	"num": 310,
	"name": "Manectric",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 70,
		"atk": 75,
		"def": 60,
		"spa": 105,
		"spd": 60,
		"spe": 105
	},
	"abilities": {
		"0": "Static",
		"1": "Lightning Rod",
		"H": "Minus"
	},
	"weightkg": 40.2,
	"prevo": "Electrike",
	"evoLevel": 26,
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Manectric-Mega"
	],
	"formeOrder": [
		"Manectric",
		"Manectric-Mega"
	]
},
manectricmega: {
	"num": 310,
	"name": "Manectric-Mega",
	"baseSpecies": "Manectric",
	"forme": "Mega",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 70,
		"atk": 75,
		"def": 70,
		"spa": 120,
		"spd": 70,
		"spe": 120
	},
	"abilities": {
		"0": "Intimidate"
	},
	"weightkg": 44,
	"eggGroups": [
		"Field"
	]
},
plusle: {
	"num": 311,
	"name": "Plusle",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 60,
		"atk": 50,
		"def": 40,
		"spa": 85,
		"spd": 75,
		"spe": 95
	},
	"abilities": {
		"0": "Plus",
		"1": "Lightning Rod"
	},
	"weightkg": 4.2,
	"eggGroups": [
		"Fairy"
	]
},
minun: {
	"num": 312,
	"name": "Minun",
	"types": [
		"Electric"
	],
	"baseStats": {
		"hp": 60,
		"atk": 40,
		"def": 50,
		"spa": 75,
		"spd": 85,
		"spe": 95
	},
	"abilities": {
		"0": "Minus",
		"1": "Volt Absorb"
	},
	"weightkg": 4.2,
	"eggGroups": [
		"Fairy"
	]
},
volbeat: {
	"num": 313,
	"name": "Volbeat",
	"types": [
		"Bug"
	],
	"gender": "M",
	"baseStats": {
		"hp": 65,
		"atk": 73,
		"def": 75,
		"spa": 47,
		"spd": 85,
		"spe": 85
	},
	"abilities": {
		"0": "Illuminate",
		"1": "Swarm"
	},
	"weightkg": 17.7,
	"eggGroups": [
		"Bug",
		"Human-Like"
	]
},
illumise: {
	"num": 314,
	"name": "Illumise",
	"types": [
		"Bug"
	],
	"gender": "F",
	"baseStats": {
		"hp": 65,
		"atk": 47,
		"def": 75,
		"spa": 73,
		"spd": 85,
		"spe": 85
	},
	"abilities": {
		"0": "Oblivious",
		"1": "Illuminate"
	},
	"weightkg": 17.7,
	"eggGroups": [
		"Bug",
		"Human-Like"
	]
},
roselia: {
	"num": 315,
	"name": "Roselia",
	"types": [
		"Grass",
		"Poison"
	],
	"baseStats": {
		"hp": 50,
		"atk": 60,
		"def": 45,
		"spa": 100,
		"spd": 80,
		"spe": 65
	},
	"abilities": {
		"0": "Natural Cure",
		"1": "Poison Point"
	},
	"weightkg": 2,
	"prevo": "Budew",
	"evoType": "levelFriendship",
	"evoCondition": "during the day",
	"evos": [
		"Roserade"
	],
	"eggGroups": [
		"Fairy",
		"Grass"
	],
	"canHatch": true
},
gulpin: {
	"num": 316,
	"name": "Gulpin",
	"types": [
		"Poison"
	],
	"baseStats": {
		"hp": 70,
		"atk": 43,
		"def": 53,
		"spa": 43,
		"spd": 53,
		"spe": 40
	},
	"abilities": {
		"0": "Liquid Ooze",
		"1": "Sticky Hold"
	},
	"weightkg": 10.3,
	"evos": [
		"Swalot"
	],
	"eggGroups": [
		"Amorphous"
	]
},
swalot: {
	"num": 317,
	"name": "Swalot",
	"types": [
		"Poison"
	],
	"baseStats": {
		"hp": 100,
		"atk": 73,
		"def": 83,
		"spa": 73,
		"spd": 83,
		"spe": 55
	},
	"abilities": {
		"0": "Liquid Ooze",
		"1": "Sticky Hold"
	},
	"weightkg": 80,
	"prevo": "Gulpin",
	"evoLevel": 26,
	"eggGroups": [
		"Amorphous"
	]
},
carvanha: {
	"num": 318,
	"name": "Carvanha",
	"types": [
		"Water",
		"Dark"
	],
	"baseStats": {
		"hp": 45,
		"atk": 90,
		"def": 20,
		"spa": 65,
		"spd": 20,
		"spe": 65
	},
	"abilities": {
		"0": "Rough Skin",
		"1": "Speed Boost"
	},
	"weightkg": 20.8,
	"evos": [
		"Sharpedo"
	],
	"eggGroups": [
		"Water 2"
	]
},
sharpedo: {
	"num": 319,
	"name": "Sharpedo",
	"types": [
		"Water",
		"Dark"
	],
	"baseStats": {
		"hp": 70,
		"atk": 120,
		"def": 40,
		"spa": 95,
		"spd": 40,
		"spe": 95
	},
	"abilities": {
		"0": "Rough Skin",
		"1": "Speed Boost"
	},
	"weightkg": 88.8,
	"prevo": "Carvanha",
	"evoLevel": 30,
	"eggGroups": [
		"Water 2"
	],
	"otherFormes": [
		"Sharpedo-Mega"
	],
	"formeOrder": [
		"Sharpedo",
		"Sharpedo-Mega"
	]
},
sharpedomega: {
	"num": 319,
	"name": "Sharpedo-Mega",
	"baseSpecies": "Sharpedo",
	"forme": "Mega",
	"types": [
		"Water",
		"Dark"
	],
	"baseStats": {
		"hp": 70,
		"atk": 130,
		"def": 55,
		"spa": 102,
		"spd": 52,
		"spe": 100
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 130.3,
	"eggGroups": [
		"Water 2"
	]
},
wailmer: {
	"num": 320,
	"name": "Wailmer",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 130,
		"atk": 70,
		"def": 35,
		"spa": 70,
		"spd": 35,
		"spe": 60
	},
	"abilities": {
		"0": "Water Veil",
		"1": "Oblivious",
		"H": "Pressure"
	},
	"weightkg": 130,
	"evos": [
		"Wailord"
	],
	"eggGroups": [
		"Field",
		"Water 2"
	]
},
wailord: {
	"num": 321,
	"name": "Wailord",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 170,
		"atk": 90,
		"def": 45,
		"spa": 90,
		"spd": 45,
		"spe": 60
	},
	"abilities": {
		"0": "Water Veil",
		"1": "Oblivious",
		"H": "Pressure"
	},
	"weightkg": 398,
	"prevo": "Wailmer",
	"evoLevel": 40,
	"eggGroups": [
		"Field",
		"Water 2"
	]
},
numel: {
	"num": 322,
	"name": "Numel",
	"types": [
		"Fire",
		"Ground"
	],
	"baseStats": {
		"hp": 60,
		"atk": 60,
		"def": 40,
		"spa": 65,
		"spd": 45,
		"spe": 35
	},
	"abilities": {
		"0": "Oblivious",
		"1": "Illuminate",
		"H": "Own Tempo"
	},
	"weightkg": 24,
	"evos": [
		"Camerupt"
	],
	"eggGroups": [
		"Field"
	]
},
camerupt: {
	"num": 323,
	"name": "Camerupt",
	"types": [
		"Fire",
		"Ground"
	],
	"baseStats": {
		"hp": 70,
		"atk": 100,
		"def": 70,
		"spa": 105,
		"spd": 75,
		"spe": 40
	},
	"abilities": {
		"0": "Magma Armor",
		"1": "Illuminate"
	},
	"weightkg": 220,
	"prevo": "Numel",
	"evoLevel": 33,
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Camerupt-Mega"
	],
	"formeOrder": [
		"Camerupt",
		"Camerupt-Mega"
	]
},
cameruptmega: {
	"num": 323,
	"name": "Camerupt-Mega",
	"baseSpecies": "Camerupt",
	"forme": "Mega",
	"types": [
		"Fire",
		"Ground"
	],
	"baseStats": {
		"hp": 70,
		"atk": 110,
		"def": 85,
		"spa": 125,
		"spd": 90,
		"spe": 30
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 320.5,
	"eggGroups": [
		"Field"
	]
},
torkoal: {
	"num": 324,
	"name": "Torkoal",
	"types": [
		"Fire"
	],
	"baseStats": {
		"hp": 70,
		"atk": 85,
		"def": 140,
		"spa": 85,
		"spd": 70,
		"spe": 20
	},
	"abilities": {
		"0": "White Smoke",
		"1": "Drought",
		"H": "Shell Armor"
	},
	"weightkg": 80.4,
	"eggGroups": [
		"Field"
	]
},
spoink: {
	"num": 325,
	"name": "Spoink",
	"types": [
		"Psychic"
	],
	"baseStats": {
		"hp": 60,
		"atk": 25,
		"def": 35,
		"spa": 70,
		"spd": 80,
		"spe": 60
	},
	"abilities": {
		"0": "Thick Fat",
		"1": "Own Tempo"
	},
	"weightkg": 30.6,
	"evos": [
		"Grumpig"
	],
	"eggGroups": [
		"Field"
	]
},
grumpig: {
	"num": 326,
	"name": "Grumpig",
	"types": [
		"Psychic"
	],
	"baseStats": {
		"hp": 80,
		"atk": 45,
		"def": 65,
		"spa": 90,
		"spd": 110,
		"spe": 80
	},
	"abilities": {
		"0": "Thick Fat",
		"1": "Own Tempo"
	},
	"weightkg": 71.5,
	"prevo": "Spoink",
	"evoLevel": 32,
	"eggGroups": [
		"Field"
	]
},
spinda: {
	"num": 327,
	"name": "Spinda",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 60,
		"atk": 60,
		"def": 60,
		"spa": 60,
		"spd": 60,
		"spe": 60
	},
	"abilities": {
		"0": "Own Tempo",
		"1": "Illuminate"
	},
	"weightkg": 5,
	"eggGroups": [
		"Field",
		"Human-Like"
	]
},
trapinch: {
	"num": 328,
	"name": "Trapinch",
	"types": [
		"Ground"
	],
	"baseStats": {
		"hp": 45,
		"atk": 100,
		"def": 45,
		"spa": 45,
		"spd": 45,
		"spe": 10
	},
	"abilities": {
		"0": "Hyper Cutter",
		"1": "Arena Trap"
	},
	"weightkg": 15,
	"evos": [
		"Vibrava"
	],
	"eggGroups": [
		"Bug",
		"Dragon"
	]
},
vibrava: {
	"num": 329,
	"name": "Vibrava",
	"types": [
		"Ground",
		"Dragon"
	],
	"baseStats": {
		"hp": 50,
		"atk": 70,
		"def": 50,
		"spa": 50,
		"spd": 50,
		"spe": 70
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 15.3,
	"prevo": "Trapinch",
	"evoLevel": 35,
	"evos": [
		"Flygon"
	],
	"eggGroups": [
		"Bug",
		"Dragon"
	]
},
flygon: {
	"num": 330,
	"name": "Flygon",
	"types": [
		"Ground",
		"Dragon"
	],
	"baseStats": {
		"hp": 80,
		"atk": 100,
		"def": 80,
		"spa": 80,
		"spd": 80,
		"spe": 100
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 82,
	"prevo": "Vibrava",
	"evoLevel": 45,
	"eggGroups": [
		"Bug",
		"Dragon"
	]
},
cacnea: {
	"num": 331,
	"name": "Cacnea",
	"types": [
		"Grass"
	],
	"baseStats": {
		"hp": 50,
		"atk": 85,
		"def": 40,
		"spa": 85,
		"spd": 40,
		"spe": 35
	},
	"abilities": {
		"0": "Illuminate",
		"1": "Water Absorb"
	},
	"weightkg": 51.3,
	"evos": [
		"Cacturne"
	],
	"eggGroups": [
		"Grass",
		"Human-Like"
	]
},
cacturne: {
	"num": 332,
	"name": "Cacturne",
	"types": [
		"Grass",
		"Dark"
	],
	"baseStats": {
		"hp": 70,
		"atk": 115,
		"def": 60,
		"spa": 115,
		"spd": 60,
		"spe": 55
	},
	"abilities": {
		"0": "Illuminate",
		"1": "Water Absorb"
	},
	"weightkg": 77.4,
	"prevo": "Cacnea",
	"evoLevel": 32,
	"eggGroups": [
		"Grass",
		"Human-Like"
	]
},
swablu: {
	"num": 333,
	"name": "Swablu",
	"types": [
		"Normal",
		"Flying"
	],
	"baseStats": {
		"hp": 45,
		"atk": 40,
		"def": 60,
		"spa": 40,
		"spd": 75,
		"spe": 50
	},
	"abilities": {
		"0": "Natural Cure",
		"1": "Cloud Nine"
	},
	"weightkg": 1.2,
	"evos": [
		"Altaria"
	],
	"eggGroups": [
		"Flying",
		"Dragon"
	]
},
altaria: {
	"num": 334,
	"name": "Altaria",
	"types": [
		"Dragon",
		"Flying"
	],
	"baseStats": {
		"hp": 75,
		"atk": 70,
		"def": 90,
		"spa": 70,
		"spd": 105,
		"spe": 80
	},
	"abilities": {
		"0": "Natural Cure",
		"1": "Cloud Nine"
	},
	"weightkg": 20.6,
	"prevo": "Swablu",
	"evoLevel": 35,
	"eggGroups": [
		"Flying",
		"Dragon"
	],
	"otherFormes": [
		"Altaria-Mega"
	],
	"formeOrder": [
		"Altaria",
		"Altaria-Mega"
	]
},
altariamega: {
	"num": 334,
	"name": "Altaria-Mega",
	"baseSpecies": "Altaria",
	"forme": "Mega",
	"types": [
		"Dragon",
		"Normal"
	],
	"baseStats": {
		"hp": 75,
		"atk": 90,
		"def": 100,
		"spa": 90,
		"spd": 105,
		"spe": 80
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 20.6,
	"eggGroups": [
		"Flying",
		"Dragon"
	]
},
zangoose: {
	"num": 335,
	"name": "Zangoose",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 73,
		"atk": 115,
		"def": 60,
		"spa": 60,
		"spd": 60,
		"spe": 90
	},
	"abilities": {
		"0": "Immunity",
		"1": "Illuminate"
	},
	"weightkg": 40.3,
	"eggGroups": [
		"Field"
	]
},
seviper: {
	"num": 336,
	"name": "Seviper",
	"types": [
		"Poison"
	],
	"baseStats": {
		"hp": 73,
		"atk": 100,
		"def": 60,
		"spa": 100,
		"spd": 60,
		"spe": 65
	},
	"abilities": {
		"0": "Shed Skin",
		"1": "Illuminate"
	},
	"weightkg": 52.5,
	"eggGroups": [
		"Field",
		"Dragon"
	]
},
lunatone: {
	"num": 337,
	"name": "Lunatone",
	"types": [
		"Rock",
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 90,
		"atk": 55,
		"def": 65,
		"spa": 95,
		"spd": 85,
		"spe": 70
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 168,
	"eggGroups": [
		"Mineral"
	]
},
solrock: {
	"num": 338,
	"name": "Solrock",
	"types": [
		"Rock",
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 90,
		"atk": 95,
		"def": 85,
		"spa": 55,
		"spd": 65,
		"spe": 70
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 154,
	"eggGroups": [
		"Mineral"
	]
},
barboach: {
	"num": 339,
	"name": "Barboach",
	"types": [
		"Water",
		"Ground"
	],
	"baseStats": {
		"hp": 50,
		"atk": 48,
		"def": 43,
		"spa": 46,
		"spd": 41,
		"spe": 60
	},
	"abilities": {
		"0": "Oblivious",
		"1": "Illuminate"
	},
	"weightkg": 1.9,
	"evos": [
		"Whiscash"
	],
	"eggGroups": [
		"Water 2"
	]
},
whiscash: {
	"num": 340,
	"name": "Whiscash",
	"types": [
		"Water",
		"Ground"
	],
	"baseStats": {
		"hp": 110,
		"atk": 78,
		"def": 73,
		"spa": 76,
		"spd": 71,
		"spe": 60
	},
	"abilities": {
		"0": "Oblivious",
		"1": "Illuminate"
	},
	"weightkg": 23.6,
	"prevo": "Barboach",
	"evoLevel": 30,
	"eggGroups": [
		"Water 2"
	]
},
corphish: {
	"num": 341,
	"name": "Corphish",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 43,
		"atk": 80,
		"def": 65,
		"spa": 50,
		"spd": 35,
		"spe": 35
	},
	"abilities": {
		"0": "Hyper Cutter",
		"1": "Shell Armor"
	},
	"weightkg": 11.5,
	"evos": [
		"Crawdaunt"
	],
	"eggGroups": [
		"Water 1",
		"Water 3"
	]
},
crawdaunt: {
	"num": 342,
	"name": "Crawdaunt",
	"types": [
		"Water",
		"Dark"
	],
	"baseStats": {
		"hp": 63,
		"atk": 120,
		"def": 85,
		"spa": 90,
		"spd": 55,
		"spe": 55
	},
	"abilities": {
		"0": "Hyper Cutter",
		"1": "Shell Armor"
	},
	"weightkg": 32.8,
	"prevo": "Corphish",
	"evoLevel": 30,
	"eggGroups": [
		"Water 1",
		"Water 3"
	]
},
baltoy: {
	"num": 343,
	"name": "Baltoy",
	"types": [
		"Ground",
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 40,
		"atk": 40,
		"def": 55,
		"spa": 40,
		"spd": 70,
		"spe": 55
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 21.5,
	"evos": [
		"Claydol"
	],
	"eggGroups": [
		"Mineral"
	]
},
claydol: {
	"num": 344,
	"name": "Claydol",
	"types": [
		"Ground",
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 60,
		"atk": 70,
		"def": 105,
		"spa": 70,
		"spd": 120,
		"spe": 75
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 108,
	"prevo": "Baltoy",
	"evoLevel": 36,
	"eggGroups": [
		"Mineral"
	]
},
lileep: {
	"num": 345,
	"name": "Lileep",
	"types": [
		"Rock",
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 66,
		"atk": 41,
		"def": 77,
		"spa": 61,
		"spd": 87,
		"spe": 23
	},
	"abilities": {
		"0": "Suction Cups",
		"1": "Illuminate"
	},
	"weightkg": 23.8,
	"evos": [
		"Cradily"
	],
	"eggGroups": [
		"Water 3"
	]
},
cradily: {
	"num": 346,
	"name": "Cradily",
	"types": [
		"Rock",
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 86,
		"atk": 81,
		"def": 97,
		"spa": 81,
		"spd": 107,
		"spe": 43
	},
	"abilities": {
		"0": "Suction Cups",
		"1": "Illuminate"
	},
	"weightkg": 60.4,
	"prevo": "Lileep",
	"evoLevel": 40,
	"eggGroups": [
		"Water 3"
	]
},
anorith: {
	"num": 347,
	"name": "Anorith",
	"types": [
		"Rock",
		"Bug"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 45,
		"atk": 95,
		"def": 50,
		"spa": 40,
		"spd": 50,
		"spe": 75
	},
	"abilities": {
		"0": "Battle Armor",
		"1": "Swift Swim"
	},
	"weightkg": 12.5,
	"evos": [
		"Armaldo"
	],
	"eggGroups": [
		"Water 3"
	]
},
armaldo: {
	"num": 348,
	"name": "Armaldo",
	"types": [
		"Rock",
		"Bug"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 75,
		"atk": 125,
		"def": 100,
		"spa": 70,
		"spd": 80,
		"spe": 45
	},
	"abilities": {
		"0": "Battle Armor",
		"1": "Swift Swim"
	},
	"weightkg": 68.2,
	"prevo": "Anorith",
	"evoLevel": 40,
	"eggGroups": [
		"Water 3"
	]
},
feebas: {
	"num": 349,
	"name": "Feebas",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 20,
		"atk": 15,
		"def": 20,
		"spa": 10,
		"spd": 55,
		"spe": 80
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Oblivious"
	},
	"weightkg": 7.4,
	"evos": [
		"Milotic"
	],
	"eggGroups": [
		"Water 1",
		"Dragon"
	]
},
milotic: {
	"num": 350,
	"name": "Milotic",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 95,
		"atk": 60,
		"def": 79,
		"spa": 100,
		"spd": 125,
		"spe": 81
	},
	"abilities": {
		"0": "Marvel Scale",
		"1": "Illuminate",
		"H": "Cute Charm"
	},
	"weightkg": 162,
	"prevo": "Feebas",
	"evoType": "trade",
	"evoItem": "Prism Scale",
	"eggGroups": [
		"Water 1",
		"Dragon"
	]
},
castform: {
	"num": 351,
	"name": "Castform",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 70,
		"atk": 70,
		"def": 70,
		"spa": 70,
		"spd": 70,
		"spe": 70
	},
	"abilities": {
		"0": "Forecast"
	},
	"weightkg": 0.8,
	"eggGroups": [
		"Fairy",
		"Amorphous"
	],
	"otherFormes": [
		"Castform-Sunny",
		"Castform-Rainy",
		"Castform-Snowy"
	],
	"formeOrder": [
		"Castform",
		"Castform-Sunny",
		"Castform-Rainy",
		"Castform-Snowy"
	]
},
castformsunny: {
	"num": 351,
	"name": "Castform-Sunny",
	"baseSpecies": "Castform",
	"forme": "Sunny",
	"types": [
		"Fire"
	],
	"baseStats": {
		"hp": 70,
		"atk": 70,
		"def": 70,
		"spa": 70,
		"spd": 70,
		"spe": 70
	},
	"abilities": {
		"0": "Forecast"
	},
	"weightkg": 0.8,
	"eggGroups": [
		"Fairy",
		"Amorphous"
	],
	"battleOnly": "Castform"
},
castformrainy: {
	"num": 351,
	"name": "Castform-Rainy",
	"baseSpecies": "Castform",
	"forme": "Rainy",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 70,
		"atk": 70,
		"def": 70,
		"spa": 70,
		"spd": 70,
		"spe": 70
	},
	"abilities": {
		"0": "Forecast"
	},
	"weightkg": 0.8,
	"eggGroups": [
		"Fairy",
		"Amorphous"
	],
	"battleOnly": "Castform"
},
castformsnowy: {
	"num": 351,
	"name": "Castform-Snowy",
	"baseSpecies": "Castform",
	"forme": "Snowy",
	"types": [
		"Ice"
	],
	"baseStats": {
		"hp": 70,
		"atk": 70,
		"def": 70,
		"spa": 70,
		"spd": 70,
		"spe": 70
	},
	"abilities": {
		"0": "Forecast"
	},
	"weightkg": 0.8,
	"eggGroups": [
		"Fairy",
		"Amorphous"
	],
	"battleOnly": "Castform"
},
kecleon: {
	"num": 352,
	"name": "Kecleon",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 60,
		"atk": 90,
		"def": 70,
		"spa": 60,
		"spd": 120,
		"spe": 40
	},
	"abilities": {
		"0": "Color Change",
		"1": "Illuminate"
	},
	"weightkg": 22,
	"eggGroups": [
		"Field"
	]
},
shuppet: {
	"num": 353,
	"name": "Shuppet",
	"types": [
		"Ghost"
	],
	"baseStats": {
		"hp": 44,
		"atk": 75,
		"def": 35,
		"spa": 63,
		"spd": 33,
		"spe": 45
	},
	"abilities": {
		"0": "Insomnia",
		"1": "Illuminate"
	},
	"weightkg": 2.3,
	"evos": [
		"Banette"
	],
	"eggGroups": [
		"Amorphous"
	]
},
banette: {
	"num": 354,
	"name": "Banette",
	"types": [
		"Ghost"
	],
	"baseStats": {
		"hp": 64,
		"atk": 115,
		"def": 65,
		"spa": 83,
		"spd": 63,
		"spe": 65
	},
	"abilities": {
		"0": "Insomnia",
		"1": "Illuminate"
	},
	"weightkg": 12.5,
	"prevo": "Shuppet",
	"evoLevel": 37,
	"eggGroups": [
		"Amorphous"
	],
	"otherFormes": [
		"Banette-Mega"
	],
	"formeOrder": [
		"Banette",
		"Banette-Mega"
	]
},
banettemega: {
	"num": 354,
	"name": "Banette-Mega",
	"baseSpecies": "Banette",
	"forme": "Mega",
	"types": [
		"Ghost"
	],
	"baseStats": {
		"hp": 64,
		"atk": 140,
		"def": 70,
		"spa": 88,
		"spd": 73,
		"spe": 70
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 13,
	"eggGroups": [
		"Amorphous"
	]
},
duskull: {
	"num": 355,
	"name": "Duskull",
	"types": [
		"Ghost"
	],
	"baseStats": {
		"hp": 20,
		"atk": 40,
		"def": 90,
		"spa": 30,
		"spd": 90,
		"spe": 25
	},
	"abilities": {
		"0": "Levitate",
		"1": "Illuminate"
	},
	"weightkg": 15,
	"evos": [
		"Dusclops"
	],
	"eggGroups": [
		"Amorphous"
	]
},
dusclops: {
	"num": 356,
	"name": "Dusclops",
	"types": [
		"Ghost"
	],
	"baseStats": {
		"hp": 40,
		"atk": 70,
		"def": 130,
		"spa": 60,
		"spd": 130,
		"spe": 25
	},
	"abilities": {
		"0": "Pressure",
		"1": "Illuminate"
	},
	"weightkg": 30.6,
	"prevo": "Duskull",
	"evoLevel": 37,
	"evos": [
		"Dusknoir"
	],
	"eggGroups": [
		"Amorphous"
	]
},
tropius: {
	"num": 357,
	"name": "Tropius",
	"types": [
		"Grass",
		"Flying"
	],
	"baseStats": {
		"hp": 99,
		"atk": 68,
		"def": 83,
		"spa": 72,
		"spd": 87,
		"spe": 51
	},
	"abilities": {
		"0": "Chlorophyll",
		"1": "Illuminate"
	},
	"weightkg": 100,
	"eggGroups": [
		"Monster",
		"Grass"
	]
},
chimecho: {
	"num": 358,
	"name": "Chimecho",
	"types": [
		"Psychic"
	],
	"baseStats": {
		"hp": 75,
		"atk": 50,
		"def": 80,
		"spa": 95,
		"spd": 90,
		"spe": 65
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 1,
	"prevo": "Chingling",
	"evoType": "levelFriendship",
	"evoCondition": "at night",
	"eggGroups": [
		"Amorphous"
	],
	"canHatch": true
},
absol: {
	"num": 359,
	"name": "Absol",
	"types": [
		"Dark"
	],
	"baseStats": {
		"hp": 65,
		"atk": 130,
		"def": 60,
		"spa": 75,
		"spd": 60,
		"spe": 75
	},
	"abilities": {
		"0": "Pressure",
		"1": "Illuminate"
	},
	"weightkg": 47,
	"eggGroups": [
		"Field"
	],
	"otherFormes": [
		"Absol-Mega"
	],
	"formeOrder": [
		"Absol",
		"Absol-Mega"
	]
},
absolmega: {
	"num": 359,
	"name": "Absol-Mega",
	"baseSpecies": "Absol",
	"forme": "Mega",
	"types": [
		"Dark"
	],
	"baseStats": {
		"hp": 65,
		"atk": 140,
		"def": 60,
		"spa": 95,
		"spd": 60,
		"spe": 95
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 49,
	"eggGroups": [
		"Field"
	]
},
wynaut: {
	"num": 360,
	"name": "Wynaut",
	"types": [
		"Psychic"
	],
	"baseStats": {
		"hp": 95,
		"atk": 23,
		"def": 48,
		"spa": 23,
		"spd": 48,
		"spe": 23
	},
	"abilities": {
		"0": "Shadow Tag",
		"1": "Illuminate"
	},
	"weightkg": 14,
	"evos": [
		"Wobbuffet"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
snorunt: {
	"num": 361,
	"name": "Snorunt",
	"types": [
		"Ice"
	],
	"baseStats": {
		"hp": 50,
		"atk": 50,
		"def": 50,
		"spa": 50,
		"spd": 50,
		"spe": 50
	},
	"abilities": {
		"0": "Inner Focus",
		"1": "Illuminate"
	},
	"weightkg": 16.8,
	"evos": [
		"Glalie",
		"Froslass"
	],
	"eggGroups": [
		"Fairy",
		"Mineral"
	]
},
glalie: {
	"num": 362,
	"name": "Glalie",
	"types": [
		"Ice"
	],
	"baseStats": {
		"hp": 80,
		"atk": 80,
		"def": 80,
		"spa": 80,
		"spd": 80,
		"spe": 80
	},
	"abilities": {
		"0": "Inner Focus",
		"1": "Illuminate"
	},
	"weightkg": 256.5,
	"prevo": "Snorunt",
	"evoLevel": 42,
	"eggGroups": [
		"Fairy",
		"Mineral"
	],
	"otherFormes": [
		"Glalie-Mega"
	],
	"formeOrder": [
		"Glalie",
		"Glalie-Mega"
	]
},
glaliemega: {
	"num": 362,
	"name": "Glalie-Mega",
	"baseSpecies": "Glalie",
	"forme": "Mega",
	"types": [
		"Ice"
	],
	"baseStats": {
		"hp": 80,
		"atk": 100,
		"def": 80,
		"spa": 100,
		"spd": 80,
		"spe": 90
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 350.2,
	"eggGroups": [
		"Fairy",
		"Mineral"
	]
},
spheal: {
	"num": 363,
	"name": "Spheal",
	"types": [
		"Ice",
		"Water"
	],
	"baseStats": {
		"hp": 70,
		"atk": 40,
		"def": 50,
		"spa": 55,
		"spd": 50,
		"spe": 25
	},
	"abilities": {
		"0": "Thick Fat",
		"1": "Illuminate",
		"H": "Oblivious"
	},
	"weightkg": 39.5,
	"evos": [
		"Sealeo"
	],
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
sealeo: {
	"num": 364,
	"name": "Sealeo",
	"types": [
		"Ice",
		"Water"
	],
	"baseStats": {
		"hp": 90,
		"atk": 60,
		"def": 70,
		"spa": 75,
		"spd": 70,
		"spe": 45
	},
	"abilities": {
		"0": "Thick Fat",
		"1": "Illuminate",
		"H": "Oblivious"
	},
	"weightkg": 87.6,
	"prevo": "Spheal",
	"evoLevel": 32,
	"evos": [
		"Walrein"
	],
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
walrein: {
	"num": 365,
	"name": "Walrein",
	"types": [
		"Ice",
		"Water"
	],
	"baseStats": {
		"hp": 110,
		"atk": 80,
		"def": 90,
		"spa": 95,
		"spd": 90,
		"spe": 65
	},
	"abilities": {
		"0": "Thick Fat",
		"1": "Illuminate",
		"H": "Oblivious"
	},
	"weightkg": 150.6,
	"prevo": "Sealeo",
	"evoLevel": 44,
	"eggGroups": [
		"Water 1",
		"Field"
	]
},
clamperl: {
	"num": 366,
	"name": "Clamperl",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 35,
		"atk": 64,
		"def": 85,
		"spa": 74,
		"spd": 55,
		"spe": 32
	},
	"abilities": {
		"0": "Shell Armor",
		"1": "Illuminate"
	},
	"weightkg": 52.5,
	"evos": [
		"Huntail",
		"Gorebyss"
	],
	"eggGroups": [
		"Water 1"
	]
},
huntail: {
	"num": 367,
	"name": "Huntail",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 55,
		"atk": 104,
		"def": 105,
		"spa": 94,
		"spd": 75,
		"spe": 52
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Water Veil"
	},
	"weightkg": 27,
	"prevo": "Clamperl",
	"evoType": "trade",
	"evoItem": "Deep Sea Tooth",
	"eggGroups": [
		"Water 1"
	]
},
gorebyss: {
	"num": 368,
	"name": "Gorebyss",
	"types": [
		"Water"
	],
	"baseStats": {
		"hp": 55,
		"atk": 84,
		"def": 105,
		"spa": 114,
		"spd": 75,
		"spe": 52
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Illuminate"
	},
	"weightkg": 22.6,
	"prevo": "Clamperl",
	"evoType": "trade",
	"evoItem": "Deep Sea Scale",
	"eggGroups": [
		"Water 1"
	]
},
relicanth: {
	"num": 369,
	"name": "Relicanth",
	"types": [
		"Water",
		"Rock"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 100,
		"atk": 90,
		"def": 130,
		"spa": 45,
		"spd": 65,
		"spe": 55
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Rock Head",
		"H": "Sturdy"
	},
	"weightkg": 23.4,
	"eggGroups": [
		"Water 1",
		"Water 2"
	]
},
luvdisc: {
	"num": 370,
	"name": "Luvdisc",
	"types": [
		"Water"
	],
	"genderRatio": {
		"M": 0.25,
		"F": 0.75
	},
	"baseStats": {
		"hp": 43,
		"atk": 30,
		"def": 55,
		"spa": 40,
		"spd": 65,
		"spe": 97
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Illuminate"
	},
	"weightkg": 8.7,
	"eggGroups": [
		"Water 2"
	]
},
bagon: {
	"num": 371,
	"name": "Bagon",
	"types": [
		"Dragon"
	],
	"baseStats": {
		"hp": 45,
		"atk": 75,
		"def": 60,
		"spa": 40,
		"spd": 30,
		"spe": 50
	},
	"abilities": {
		"0": "Rock Head",
		"1": "Illuminate"
	},
	"weightkg": 42.1,
	"evos": [
		"Shelgon"
	],
	"eggGroups": [
		"Dragon"
	]
},
shelgon: {
	"num": 372,
	"name": "Shelgon",
	"types": [
		"Dragon"
	],
	"baseStats": {
		"hp": 65,
		"atk": 95,
		"def": 100,
		"spa": 60,
		"spd": 50,
		"spe": 50
	},
	"abilities": {
		"0": "Rock Head",
		"1": "Illuminate"
	},
	"weightkg": 110.5,
	"prevo": "Bagon",
	"evoLevel": 30,
	"evos": [
		"Salamence"
	],
	"eggGroups": [
		"Dragon"
	]
},
salamence: {
	"num": 373,
	"name": "Salamence",
	"types": [
		"Dragon",
		"Flying"
	],
	"baseStats": {
		"hp": 95,
		"atk": 135,
		"def": 80,
		"spa": 110,
		"spd": 80,
		"spe": 100
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Illuminate"
	},
	"weightkg": 102.6,
	"prevo": "Shelgon",
	"evoLevel": 50,
	"eggGroups": [
		"Dragon"
	],
	"otherFormes": [
		"Salamence-Mega"
	],
	"formeOrder": [
		"Salamence",
		"Salamence-Mega"
	]
},
salamencemega: {
	"num": 373,
	"name": "Salamence-Mega",
	"baseSpecies": "Salamence",
	"forme": "Mega",
	"types": [
		"Dragon",
		"Flying"
	],
	"baseStats": {
		"hp": 95,
		"atk": 140,
		"def": 105,
		"spa": 115,
		"spd": 85,
		"spe": 110
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 112.6,
	"eggGroups": [
		"Dragon"
	]
},
beldum: {
	"num": 374,
	"name": "Beldum",
	"types": [
		"Steel",
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 40,
		"atk": 55,
		"def": 80,
		"spa": 35,
		"spd": 60,
		"spe": 30
	},
	"abilities": {
		"0": "Clear Body",
		"1": "Illuminate"
	},
	"weightkg": 95.2,
	"evos": [
		"Metang"
	],
	"eggGroups": [
		"Mineral"
	]
},
metang: {
	"num": 375,
	"name": "Metang",
	"types": [
		"Steel",
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 60,
		"atk": 75,
		"def": 100,
		"spa": 55,
		"spd": 80,
		"spe": 50
	},
	"abilities": {
		"0": "Clear Body",
		"1": "Illuminate"
	},
	"weightkg": 202.5,
	"prevo": "Beldum",
	"evoLevel": 20,
	"evos": [
		"Metagross"
	],
	"eggGroups": [
		"Mineral"
	]
},
metagross: {
	"num": 376,
	"name": "Metagross",
	"types": [
		"Steel",
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 80,
		"atk": 135,
		"def": 130,
		"spa": 95,
		"spd": 90,
		"spe": 70
	},
	"abilities": {
		"0": "Clear Body",
		"1": "Illuminate"
	},
	"weightkg": 550,
	"prevo": "Metang",
	"evoLevel": 45,
	"eggGroups": [
		"Mineral"
	],
	"otherFormes": [
		"Metagross-Mega"
	],
	"formeOrder": [
		"Metagross",
		"Metagross-Mega"
	]
},
metagrossmega: {
	"num": 376,
	"name": "Metagross-Mega",
	"baseSpecies": "Metagross",
	"forme": "Mega",
	"types": [
		"Steel",
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 80,
		"atk": 140,
		"def": 140,
		"spa": 100,
		"spd": 100,
		"spe": 90
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 942.9,
	"eggGroups": [
		"Mineral"
	]
},
regirock: {
	"num": 377,
	"name": "Regirock",
	"types": [
		"Rock"
	],
	"gender": "N",
	"baseStats": {
		"hp": 80,
		"atk": 100,
		"def": 200,
		"spa": 50,
		"spd": 100,
		"spe": 50
	},
	"abilities": {
		"0": "Clear Body",
		"1": "Sturdy"
	},
	"weightkg": 230,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
regice: {
	"num": 378,
	"name": "Regice",
	"types": [
		"Ice"
	],
	"gender": "N",
	"baseStats": {
		"hp": 80,
		"atk": 50,
		"def": 100,
		"spa": 100,
		"spd": 200,
		"spe": 50
	},
	"abilities": {
		"0": "Clear Body",
		"1": "Illuminate"
	},
	"weightkg": 175,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
registeel: {
	"num": 379,
	"name": "Registeel",
	"types": [
		"Steel"
	],
	"gender": "N",
	"baseStats": {
		"hp": 80,
		"atk": 75,
		"def": 150,
		"spa": 75,
		"spd": 150,
		"spe": 50
	},
	"abilities": {
		"0": "Clear Body",
		"1": "Illuminate"
	},
	"weightkg": 205,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
latias: {
	"num": 380,
	"name": "Latias",
	"types": [
		"Dragon",
		"Psychic"
	],
	"gender": "F",
	"baseStats": {
		"hp": 80,
		"atk": 80,
		"def": 90,
		"spa": 110,
		"spd": 130,
		"spe": 110
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 40,
	"tags": [
		"Sub-Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"otherFormes": [
		"Latias-Mega"
	],
	"formeOrder": [
		"Latias",
		"Latias-Mega"
	]
},
latiasmega: {
	"num": 380,
	"name": "Latias-Mega",
	"baseSpecies": "Latias",
	"forme": "Mega",
	"types": [
		"Dragon",
		"Psychic"
	],
	"gender": "F",
	"baseStats": {
		"hp": 80,
		"atk": 90,
		"def": 105,
		"spa": 125,
		"spd": 140,
		"spe": 110
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 52,
	"eggGroups": [
		"Undiscovered"
	]
},
latios: {
	"num": 381,
	"name": "Latios",
	"types": [
		"Dragon",
		"Psychic"
	],
	"gender": "M",
	"baseStats": {
		"hp": 80,
		"atk": 90,
		"def": 80,
		"spa": 130,
		"spd": 110,
		"spe": 110
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 60,
	"eggGroups": [
		"Undiscovered"
	],
	"tags": [
		"Sub-Legendary"
	],
	"otherFormes": [
		"Latios-Mega"
	],
	"formeOrder": [
		"Latios",
		"Latios-Mega"
	]
},
latiosmega: {
	"num": 381,
	"name": "Latios-Mega",
	"baseSpecies": "Latios",
	"forme": "Mega",
	"types": [
		"Dragon",
		"Psychic"
	],
	"gender": "M",
	"baseStats": {
		"hp": 80,
		"atk": 110,
		"def": 90,
		"spa": 145,
		"spd": 115,
		"spe": 110
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 70,
	"eggGroups": [
		"Undiscovered"
	]
},
kyogre: {
	"num": 382,
	"name": "Kyogre",
	"types": [
		"Water"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 100,
		"def": 90,
		"spa": 150,
		"spd": 140,
		"spe": 90
	},
	"abilities": {
		"0": "Drizzle"
	},
	"weightkg": 352,
	"tags": [
		"Restricted Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"otherFormes": [
		"Kyogre-Primal"
	],
	"formeOrder": [
		"Kyogre",
		"Kyogre-Primal"
	]
},
kyogreprimal: {
	"num": 382,
	"name": "Kyogre-Primal",
	"baseSpecies": "Kyogre",
	"forme": "Primal",
	"types": [
		"Water"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 150,
		"def": 90,
		"spa": 180,
		"spd": 160,
		"spe": 90
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 430,
	"eggGroups": [
		"Undiscovered"
	]
},
groudon: {
	"num": 383,
	"name": "Groudon",
	"types": [
		"Ground"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 150,
		"def": 140,
		"spa": 100,
		"spd": 90,
		"spe": 90
	},
	"abilities": {
		"0": "Drought"
	},
	"weightkg": 950,
	"tags": [
		"Restricted Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"otherFormes": [
		"Groudon-Primal"
	],
	"formeOrder": [
		"Groudon",
		"Groudon-Primal"
	]
},
groudonprimal: {
	"num": 383,
	"name": "Groudon-Primal",
	"baseSpecies": "Groudon",
	"forme": "Primal",
	"types": [
		"Ground",
		"Fire"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 180,
		"def": 160,
		"spa": 150,
		"spd": 90,
		"spe": 90
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 999.7,
	"eggGroups": [
		"Undiscovered"
	]
},
rayquaza: {
	"num": 384,
	"name": "Rayquaza",
	"types": [
		"Dragon",
		"Flying"
	],
	"gender": "N",
	"baseStats": {
		"hp": 105,
		"atk": 150,
		"def": 90,
		"spa": 150,
		"spd": 90,
		"spe": 95
	},
	"abilities": {
		"0": "Air Lock"
	},
	"weightkg": 206.5,
	"tags": [
		"Restricted Legendary"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"otherFormes": [
		"Rayquaza-Mega"
	],
	"formeOrder": [
		"Rayquaza",
		"Rayquaza-Mega"
	]
},
rayquazamega: {
	"num": 384,
	"name": "Rayquaza-Mega",
	"baseSpecies": "Rayquaza",
	"forme": "Mega",
	"types": [
		"Dragon",
		"Flying"
	],
	"gender": "N",
	"baseStats": {
		"hp": 105,
		"atk": 165,
		"def": 95,
		"spa": 165,
		"spd": 95,
		"spe": 105
	},
	"abilities": {
		"0": "Illuminate"
	},
	"weightkg": 392,
	"eggGroups": [
		"Undiscovered"
	]
},
jirachi: {
	"num": 385,
	"name": "Jirachi",
	"types": [
		"Steel",
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 100,
		"atk": 100,
		"def": 100,
		"spa": 100,
		"spd": 100,
		"spe": 100
	},
	"abilities": {
		"0": "Serene Grace"
	},
	"weightkg": 1.1,
	"tags": [
		"Mythical"
	],
	"eggGroups": [
		"Undiscovered"
	]
},
deoxys: {
	"num": 386,
	"name": "Deoxys",
	"baseForme": "Normal",
	"types": [
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 50,
		"atk": 150,
		"def": 50,
		"spa": 150,
		"spd": 50,
		"spe": 150
	},
	"abilities": {
		"0": "Pressure"
	},
	"weightkg": 60.8,
	"eggGroups": [
		"Undiscovered"
	],
	"tags": [
		"Mythical"
	],
	"otherFormes": [
		"Deoxys-Attack",
		"Deoxys-Defense",
		"Deoxys-Speed"
	],
	"formeOrder": [
		"Deoxys",
		"Deoxys-Attack",
		"Deoxys-Defense",
		"Deoxys-Speed"
	]
},
deoxysattack: {
	"num": 386,
	"name": "Deoxys-Attack",
	"baseSpecies": "Deoxys",
	"forme": "Attack",
	"types": [
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 50,
		"atk": 180,
		"def": 20,
		"spa": 180,
		"spd": 20,
		"spe": 150
	},
	"abilities": {
		"0": "Pressure"
	},
	"weightkg": 60.8,
	"eggGroups": [
		"Undiscovered"
	],
	"changesFrom": "Deoxys"
},
deoxysdefense: {
	"num": 386,
	"name": "Deoxys-Defense",
	"baseSpecies": "Deoxys",
	"forme": "Defense",
	"types": [
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 50,
		"atk": 70,
		"def": 160,
		"spa": 70,
		"spd": 160,
		"spe": 90
	},
	"abilities": {
		"0": "Pressure"
	},
	"weightkg": 60.8,
	"eggGroups": [
		"Undiscovered"
	],
	"changesFrom": "Deoxys"
},
deoxysspeed: {
	"num": 386,
	"name": "Deoxys-Speed",
	"baseSpecies": "Deoxys",
	"forme": "Speed",
	"types": [
		"Psychic"
	],
	"gender": "N",
	"baseStats": {
		"hp": 50,
		"atk": 95,
		"def": 90,
		"spa": 95,
		"spd": 90,
		"spe": 180
	},
	"abilities": {
		"0": "Pressure"
	},
	"weightkg": 60.8,
	"eggGroups": [
		"Undiscovered"
	],
	"changesFrom": "Deoxys"
},
budew: {
	"num": 406,
	"name": "Budew",
	"types": [
		"Grass",
		"Poison"
	],
	"baseStats": {
		"hp": 40,
		"atk": 30,
		"def": 35,
		"spa": 50,
		"spd": 70,
		"spe": 55
	},
	"abilities": {
		"0": "Natural Cure",
		"1": "Poison Point"
	},
	"weightkg": 1.2,
	"evos": [
		"Roselia"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
roserade: {
	"num": 407,
	"name": "Roserade",
	"types": [
		"Grass",
		"Poison"
	],
	"baseStats": {
		"hp": 60,
		"atk": 70,
		"def": 65,
		"spa": 125,
		"spd": 105,
		"spe": 90
	},
	"abilities": {
		"0": "Natural Cure",
		"1": "Poison Point"
	},
	"weightkg": 14.5,
	"prevo": "Roselia",
	"evoType": "useItem",
	"evoItem": "Leaf Stone",
	"eggGroups": [
		"Fairy",
		"Grass"
	]
},
ambipom: {
	"num": 424,
	"name": "Ambipom",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 75,
		"atk": 100,
		"def": 66,
		"spa": 60,
		"spd": 66,
		"spe": 115
	},
	"abilities": {
		"0": "Run Away",
		"1": "Pickup"
	},
	"weightkg": 20.3,
	"prevo": "Aipom",
	"evoLevel": 33,
	"eggGroups": [
		"Field"
	]
},
mismagius: {
	"num": 429,
	"name": "Mismagius",
	"types": [
		"Ghost"
	],
	"baseStats": {
		"hp": 60,
		"atk": 60,
		"def": 60,
		"spa": 105,
		"spd": 105,
		"spe": 105
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 4.4,
	"prevo": "Misdreavus",
	"evoType": "useItem",
	"evoItem": "Moon Stone",
	"eggGroups": [
		"Amorphous"
	]
},
honchkrow: {
	"num": 430,
	"name": "Honchkrow",
	"types": [
		"Dark",
		"Flying"
	],
	"baseStats": {
		"hp": 100,
		"atk": 125,
		"def": 52,
		"spa": 105,
		"spd": 52,
		"spe": 71
	},
	"abilities": {
		"0": "Insomnia",
	},
	"weightkg": 27.3,
	"prevo": "Murkrow",
	"evoType": "useItem",
	"evoItem": "Moon Stone",
	"eggGroups": [
		"Flying"
	]
},
chingling: {
	"num": 433,
	"name": "Chingling",
	"types": [
		"Psychic"
	],
	"baseStats": {
		"hp": 45,
		"atk": 30,
		"def": 50,
		"spa": 65,
		"spd": 50,
		"spe": 45
	},
	"abilities": {
		"0": "Levitate"
	},
	"weightkg": 0.6,
	"evos": [
		"Chimecho"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
bonsly: {
	"num": 438,
	"name": "Bonsly",
	"types": [
		"Rock"
	],
	"baseStats": {
		"hp": 50,
		"atk": 80,
		"def": 95,
		"spa": 10,
		"spd": 45,
		"spe": 10
	},
	"abilities": {
		"0": "Sturdy",
		"1": "Rock Head"
	},
	"weightkg": 15,
	"evos": [
		"Sudowoodo"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
mimejr: {
	"num": 439,
	"name": "Mime Jr.",
	"types": [
		"Psychic",
		"Normal"
	],
	"baseStats": {
		"hp": 20,
		"atk": 25,
		"def": 45,
		"spa": 70,
		"spd": 90,
		"spe": 60
	},
	"abilities": {
		"0": "Soundproof",
	},
	"weightkg": 13,
	"evos": [
		"Mr. Mime",
		"Mr. Mime-Galar"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
happiny: {
	"num": 440,
	"name": "Happiny",
	"types": [
		"Normal"
	],
	"gender": "F",
	"baseStats": {
		"hp": 100,
		"atk": 5,
		"def": 5,
		"spa": 15,
		"spd": 65,
		"spe": 30
	},
	"abilities": {
		"0": "Natural Cure",
		"1": "Serene Grace"
	},
	"weightkg": 24.4,
	"evos": [
		"Chansey"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
munchlax: {
	"num": 446,
	"name": "Munchlax",
	"types": [
		"Normal"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 135,
		"atk": 85,
		"def": 40,
		"spa": 40,
		"spd": 85,
		"spe": 5
	},
	"abilities": {
		"0": "Pickup",
		"1": "Thick Fat"
	},
	"weightkg": 105,
	"evos": [
		"Snorlax"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
mantyke: {
	"num": 458,
	"name": "Mantyke",
	"types": [
		"Water",
		"Flying"
	],
	"baseStats": {
		"hp": 45,
		"atk": 20,
		"def": 50,
		"spa": 60,
		"spd": 120,
		"spe": 50
	},
	"abilities": {
		"0": "Swift Swim",
		"1": "Water Absorb",
		"H": "Water Veil"
	},
	"weightkg": 65,
	"evos": [
		"Mantine"
	],
	"eggGroups": [
		"Undiscovered"
	],
	"canHatch": true
},
weavile: {
	"num": 461,
	"name": "Weavile",
	"types": [
		"Dark",
		"Ice"
	],
	"baseStats": {
		"hp": 70,
		"atk": 120,
		"def": 65,
		"spa": 45,
		"spd": 85,
		"spe": 125
	},
	"abilities": {
		"0": "Pressure",
		"1": "Inner Focus"
	},
	"weightkg": 34,
	"prevo": "Sneasel",
	"evoType": "levelHold",
	"evoItem": "Quick Claw",
	"evoCondition": "at night",
	"eggGroups": [
		"Field"
	]
},
magnezone: {
	"num": 462,
	"name": "Magnezone",
	"types": [
		"Electric",
		"Steel"
	],
	"gender": "N",
	"baseStats": {
		"hp": 70,
		"atk": 70,
		"def": 115,
		"spa": 130,
		"spd": 90,
		"spe": 60
	},
	"abilities": {
		"0": "Magnet Pull",
		"1": "Sturdy"
	},
	"weightkg": 180,
	"prevo": "Magneton",
	"evoType": "useItem",
	"evoItem": "Thunder Stone",
	"eggGroups": [
		"Mineral"
	]
},
lickilicky: {
	"num": 463,
	"name": "Lickilicky",
	"types": [
		"Normal"
	],
	"baseStats": {
		"hp": 110,
		"atk": 85,
		"def": 95,
		"spa": 80,
		"spd": 95,
		"spe": 50
	},
	"abilities": {
		"0": "Own Tempo",
		"1": "Oblivious",
		"H": "Cloud Nine"
	},
	"weightkg": 140,
	"prevo": "Lickitung",
	"evoType": "levelMove",
	"evoMove": "Rollout",
	"eggGroups": [
		"Monster"
	]
},
rhyperior: {
	"num": 464,
	"name": "Rhyperior",
	"types": [
		"Ground",
		"Rock"
	],
	"baseStats": {
		"hp": 115,
		"atk": 140,
		"def": 130,
		"spa": 55,
		"spd": 55,
		"spe": 40
	},
	"abilities": {
		"0": "Lightning Rod",
		"1": "Rock Head"
	},
	"weightkg": 282.8,
	"prevo": "Rhydon",
	"evoType": "trade",
	"evoItem": "Hard Stone",
	"eggGroups": [
		"Monster",
		"Field"
	]
},
tangrowth: {
	"num": 465,
	"name": "Tangrowth",
	"types": [
		"Grass"
	],
	"baseStats": {
		"hp": 100,
		"atk": 100,
		"def": 125,
		"spa": 110,
		"spd": 50,
		"spe": 50
	},
	"abilities": {
		"0": "Chlorophyll",
	},
	"weightkg": 128.6,
	"prevo": "Tangela",
	"evoType": "levelMove",
	"evoMove": "Ancient Power",
	"eggGroups": [
		"Grass"
	]
},
electivire: {
	"num": 466,
	"name": "Electivire",
	"types": [
		"Electric"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 75,
		"atk": 123,
		"def": 67,
		"spa": 95,
		"spd": 85,
		"spe": 95
	},
	"abilities": {
		"0": "Static",
		"1": "Vital Spirit"
	},
	"weightkg": 138.6,
	"prevo": "Electabuzz",
	"evoType": "trade",
	"evoItem": "Electirizer",
	"eggGroups": [
		"Human-Like"
	]
},
magmortar: {
	"num": 467,
	"name": "Magmortar",
	"types": [
		"Fire"
	],
	"genderRatio": {
		"M": 0.75,
		"F": 0.25
	},
	"baseStats": {
		"hp": 75,
		"atk": 95,
		"def": 67,
		"spa": 125,
		"spd": 95,
		"spe": 83
	},
	"abilities": {
		"0": "Flame Body",
		"1": "Vital Spirit"
	},
	"weightkg": 68,
	"prevo": "Magmar",
	"evoType": "trade",
	"evoItem": "Magmarizer",
	"eggGroups": [
		"Human-Like"
	]
},
togekiss: {
	"num": 468,
	"name": "Togekiss",
	"types": [
		"Normal",
		"Flying"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 85,
		"atk": 50,
		"def": 95,
		"spa": 120,
		"spd": 115,
		"spe": 80
	},
	"abilities": {
		"0": "Hustle",
		"1": "Serene Grace"
	},
	"weightkg": 38,
	"prevo": "Togetic",
	"evoType": "useItem",
	"evoItem": "Shiny Stone",
	"eggGroups": [
		"Flying",
		"Fairy"
	]
},
yanmega: {
	"num": 469,
	"name": "Yanmega",
	"types": [
		"Bug",
		"Flying"
	],
	"baseStats": {
		"hp": 86,
		"atk": 76,
		"def": 86,
		"spa": 116,
		"spd": 56,
		"spe": 95
	},
	"abilities": {
		"0": "Speed Boost",
		"1": "Compound Eyes"
	},
	"weightkg": 51.5,
	"prevo": "Yanma",
	"evoType": "levelMove",
	"evoMove": "Ancient Power",
	"eggGroups": [
		"Bug"
	]
},
leafeon: {
	"num": 470,
	"name": "Leafeon",
	"types": [
		"Grass"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 65,
		"atk": 110,
		"def": 130,
		"spa": 60,
		"spd": 65,
		"spe": 95
	},
	"abilities": {
		"0": "Chlorophyll"
	},
	"weightkg": 25.5,
	"prevo": "Eevee",
	"evoType": "useItem",
	"evoItem": "Leaf Stone",
	"eggGroups": [
		"Field"
	]
},
glaceon: {
	"num": 471,
	"name": "Glaceon",
	"types": [
		"Ice"
	],
	"genderRatio": {
		"M": 0.875,
		"F": 0.125
	},
	"baseStats": {
		"hp": 65,
		"atk": 60,
		"def": 110,
		"spa": 130,
		"spd": 95,
		"spe": 65
	},
	"abilities": {
		"0": "Run Away"
	},
	"weightkg": 25.9,
	"prevo": "Eevee",
	"evoType": "useItem",
	"evoItem": "Ice Stone",
	"eggGroups": [
		"Field"
	]
},
gliscor: {
	"num": 472,
	"name": "Gliscor",
	"types": [
		"Ground",
		"Flying"
	],
	"baseStats": {
		"hp": 75,
		"atk": 95,
		"def": 125,
		"spa": 45,
		"spd": 75,
		"spe": 95
	},
	"abilities": {
		"0": "Hyper Cutter",
		"1": "Immunity"
	},
	"weightkg": 42.5,
	"prevo": "Gligar",
	"evoType": "levelHold",
	"evoItem": "Razor Fang",
	"evoCondition": "at night",
	"eggGroups": [
		"Bug"
	]
},
mamoswine: {
	"num": 473,
	"name": "Mamoswine",
	"types": [
		"Ice",
		"Ground"
	],
	"baseStats": {
		"hp": 110,
		"atk": 130,
		"def": 80,
		"spa": 70,
		"spd": 60,
		"spe": 80
	},
	"abilities": {
		"0": "Oblivious",
		"1": "Thick Fat"
	},
	"weightkg": 291,
	"prevo": "Piloswine",
	"evoType": "levelMove",
	"evoMove": "Ancient Power",
	"eggGroups": [
		"Field"
	]
},
porygonz: {
	"num": 474,
	"name": "Porygon-Z",
	"types": [
		"Normal"
	],
	"gender": "N",
	"baseStats": {
		"hp": 85,
		"atk": 80,
		"def": 70,
		"spa": 135,
		"spd": 75,
		"spe": 90
	},
	"abilities": {
		"0": "Trace",
	},
	"weightkg": 34,
	"prevo": "Porygon2",
	"evoType": "trade",
	"evoItem": "Dubious Disc",
	"eggGroups": [
		"Mineral"
	]
},
gallade: {
	"num": 475,
	"name": "Gallade",
	"types": [
		"Psychic",
		"Fighting"
	],
	"gender": "M",
	"baseStats": {
		"hp": 68,
		"atk": 125,
		"def": 65,
		"spa": 65,
		"spd": 115,
		"spe": 80
	},
	"abilities": {
		"0": "Synchronize",
		"1": "Trace"
	},
	"weightkg": 52,
	"prevo": "Kirlia",
	"evoType": "useItem",
	"evoItem": "Dawn Stone",
	"eggGroups": [
		"Human-Like",
		"Amorphous"
	],
},
probopass: {
	"num": 476,
	"name": "Probopass",
	"types": [
		"Rock",
		"Steel"
	],
	"baseStats": {
		"hp": 60,
		"atk": 55,
		"def": 145,
		"spa": 75,
		"spd": 150,
		"spe": 40
	},
	"abilities": {
		"0": "Sturdy",
		"1": "Magnet Pull"
	},
	"weightkg": 340,
	"prevo": "Nosepass",
	"evoType": "useItem",
	"evoItem": "Thunder Stone",
	"eggGroups": [
		"Mineral"
	]
},
dusknoir: {
	"num": 477,
	"name": "Dusknoir",
	"types": [
		"Ghost"
	],
	"baseStats": {
		"hp": 45,
		"atk": 100,
		"def": 135,
		"spa": 65,
		"spd": 135,
		"spe": 45
	},
	"abilities": {
		"0": "Pressure"
	},
	"weightkg": 106.6,
	"prevo": "Dusclops",
	"evoType": "trade",
	"evoItem": "Reaper Cloth",
	"eggGroups": [
		"Amorphous"
	]
},
froslass: {
	"num": 478,
	"name": "Froslass",
	"types": [
		"Ice",
		"Ghost"
	],
	"gender": "F",
	"baseStats": {
		"hp": 70,
		"atk": 80,
		"def": 70,
		"spa": 80,
		"spd": 70,
		"spe": 110
	},
	"abilities": {
		"0": "Inner Focus"
	},
	"weightkg": 26.6,
	"prevo": "Snorunt",
	"evoType": "useItem",
	"evoItem": "Dawn Stone",
	"eggGroups": [
		"Fairy",
		"Mineral"
	]
},
wyrdeer: {
	"num": 899,
	"name": "Wyrdeer",
	"types": [
		"Normal",
		"Psychic"
	],
	"baseStats": {
		"hp": 103,
		"atk": 105,
		"def": 72,
		"spa": 105,
		"spd": 75,
		"spe": 65
	},
	"abilities": {
		"0": "Intimidate",
		"1": "Illuminate"
	},
	"weightkg": 95.1,
	"prevo": "Stantler",
	"evoType": "other",
	"evoCondition": "Use Agile style Psyshield Bash 20 times",
	"eggGroups": [
		"Field"
	]
},
kleavor: {
	"num": 900,
	"name": "Kleavor",
	"types": [
		"Bug",
		"Rock"
	],
	"baseStats": {
		"hp": 70,
		"atk": 135,
		"def": 95,
		"spa": 45,
		"spd": 70,
		"spe": 85
	},
	"abilities": {
		"0": "Swarm",
		"1": "Illuminate"
	},
	"weightkg": 89,
	"prevo": "Scyther",
	"evoType": "other",
	"evoCondition": "Black Augurite",
	"eggGroups": [
		"Bug"
	]
},
ursaluna: {
	"num": 901,
	"name": "Ursaluna",
	"types": [
		"Ground",
		"Normal"
	],
	"baseStats": {
		"hp": 130,
		"atk": 140,
		"def": 105,
		"spa": 45,
		"spd": 80,
		"spe": 50
	},
	"abilities": {
		"0": "Guts",
		"1": "Illuminate"
	},
	"weightkg": 290,
	"prevo": "Ursaring",
	"evoType": "other",
	"evoCondition": "Peat Block when there's a full moon",
	"eggGroups": [
		"Field"
	] 
},
};