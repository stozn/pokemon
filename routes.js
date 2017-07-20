const ROUTES = {
    starter: {
      name: 'Pallet Town'
    , pokes: ['Bulbasaur', 'Charmander', 'Squirtle']
    , minLevel: 5
    , maxLevel: 5
    , unlocked: true
    }
   , route: {
      name: 'Route 1'
    , pokes: ['Pidgey', 'Rattata']
    , minLevel: 2
    , maxLevel: 5
    , unlocked: true
    }
   , route1: {
      name: 'Route 2'
    , pokes: ['Pidgey', 'Rattata', 'Caterpie', 'Weedle']
    , minLevel: 3
    , maxLevel: 5
    , unlocked: true
    }
   , special: {
      name: 'Virdian Forest'
    , pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pikachu']
    , minLevel: 3
    , maxLevel: 6
    , unlocked: true
    }
   , special1: {
      name: 'Pewter City'
    , pokes: ['Omanyte', 'Kabuto', 'Aerodactyl']
    , minLevel: 5
    , maxLevel: 5
    , unlocked: true
    }
   , route2: {
      name: 'Route 3'
    , pokes: ['Pidgey', 'Spearow', 'Jigglypuff']
    , minLevel: 5
    , maxLevel: 12
    , unlocked: true
    }
   , special2: {
      name: 'Mt. Moon'
    , pokes: ['Zubat', 'Clefairy', 'Paras', 'Geodude']
    , minLevel: 6
    , maxLevel: 12
    , unlocked: true
    }
   , route3: {
      name: 'Route 4'
    , pokes: ['Rattata', 'Spearow', 'Ekans', 'Sandshrew']
    , minLevel: 6
    , maxLevel: 12
    , unlocked: true
    }
   , route4: {
      name: 'Route 5'
    , pokes: ['Pidgey', 'Oddish', 'Meowth', 'Mankey', 'Bellsprout']
    , minLevel: 10
    , maxLevel: 16
    , unlocked: true
    }
   , route5: {
      name: 'Route 6'
    , pokes: ['Pidgey',	'Pidgeotto', 'Oddish', 'Meowth', 'Mankey', 'Abra', 'Bellsprout']
    , minLevel: 10
    , maxLevel: 16
    , unlocked: true
    }
   , route6: {
      name: 'Route 7'
    , pokes: ['Pidgey', 'Vulpix', 'Oddish', 'Meowth', 'Mankey', 'Growlithe', 'Bellsprout']
    , minLevel: 18
    , maxLevel: 22
    , unlocked: true
    }
   , route7: {
      name: 'Route 8'
    , pokes: ['Pidgey', 'Pidgeotto', 'Vulpix', 'Oddish', 'Meowth', 'Mankey', 'Growlithe', 'Abra', 'Kadabra', 'Bellsprout']
    , minLevel: 15
    , maxLevel: 20
    , unlocked: true
    }
   , special3: {
      name: 'Diglett Cave'
    , pokes: ['Diglett', 'Dugtrio']
    , minLevel: 15
    , maxLevel: 31
    , unlocked: true
    }
   , route8: {
      name: 'Route 9'
    , pokes: ['Spearow', 'Ekans', 'Sandshrew', 'Drowzee']
    , minLevel: 9
    , maxLevel: 17
    , unlocked: true
    }
   , route9: {
      name: 'Route 10'
    , pokes: ['Spearow', 'Ekans', 'Sandshrew', 'Voltorb']
    , minLevel: 11
    , maxLevel: 17
    , unlocked: true
    }
   , special4: {
      name: 'Rock Tunnel'
    , pokes: ['Zubat', 'Machop', 'Geodude', 'Onix']
    , minLevel: 11
    , maxLevel: 17
    , unlocked: true
    }
   , special5: {
      name: 'Power Plant'
    , pokes: ['Pikachu', 'Raichu', 'Magnemite', 'Magneton', 'Voltorb', 'Electrode', 'Electabuzz']
    , minLevel: 25
    , maxLevel: 35
    , unlocked: true
    }
   , special6: {
      name: 'Pokemon Tower'
    , pokes: ['Gastly',	'Haunter', 'Cubone']
    , minLevel: 13
    , maxLevel: 18
    , unlocked: true
    }
   , route10: {
      name: 'Route 11'
    , pokes: ['Spearow', 'Ekans', 'Sandshrew', 'Drowzee']
    , minLevel: 18
    , maxLevel: 25
    , unlocked: true
    }
   , special7: {
      name: 'Celadon City'
    , pokes: ['Eevee', 'Vaporeon', 'Flareon', 'Jolteon', 'Porygon']
    , minLevel: 25
    , maxLevel: 30
    , unlocked: true
    }
   , special8: {
      name: 'Saffron City'
    , pokes: ['Hitmonlee', 'Hitmonchan', 'Lapras']
    , minLevel: 30
    , maxLevel: 30
    , unlocked: true
    }
   , route11: {
      name: 'Route 12'
    , pokes: ['Pidgey', 'Oddish', 'Gloom', 'Venonat', 'Bellsprout', 'Weepinbell', 'Snorlax']
    , minLevel: 22
    , maxLevel: 30
    , unlocked: true
    }
   , route12: {
      name: 'Route 13'
    , pokes: ['Pidgey', 'Oddish', 'Gloom', 'Venonat', 'Bellsprout', 'Weepinbell', 'Ditto']
    , minLevel: 22
    , maxLevel: 30
    , unlocked: true
    }
   , route13: {
      name: 'Route 14'
    , pokes: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Bellsprout', 'Weepinbell', 'Ditto']
    , minLevel: 23
    , maxLevel: 30
    , unlocked: true
    }
   , route14: {
      name: 'Route 15'
    , pokes: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Bellsprout', 'Weepinbell', 'Ditto']
    , minLevel: 22
    , maxLevel: 30
    , unlocked: true
    }
   , route15: {
      name: 'Route 16'
    , pokes: ['Rattata', 'Raticate', 'Spearow', 'Doduo', 'Snorlax']
    , minLevel: 18
    , maxLevel: 30
    , unlocked: true
    }
   , route16: {
      name: 'Route 17'
    , pokes: ['Raticate', 'Spearow', 'Fearow', 'Doduo']
    , minLevel: 20
    , maxLevel: 29
    , unlocked: true
    }
   , route17: {
      name: 'Route 18'
    , pokes: ['Rattata', 'Raticate', 'Spearow', 'Fearow', 'Doduo']
    , minLevel: 20
    , maxLevel: 29
    , unlocked: true
    }
   , special9: {
      name: 'Safari Zone'
    , pokes: ['Nidoran f', 'Nidorina', 'Nidoran m', 'Nidorino', 'Parasect', 'Venonat', 'Exeggcute', 'Rhyhorn', 'Kangaskhan', 'Scyther', 'Pinsir', 'Tauros']
    , minLevel: 22
    , maxLevel: 31
    , unlocked: true
    }
   , special10: {
      name: 'Trading Center'
    , pokes: ['Farfetchd', 'Jynx', 'Lickitung', 'Mr. Mime'] 
    , minLevel: 30
    , maxLevel: 30
    , unlocked: true
    }
   , route18: {
      name: 'Route 19'
    , pokes: ['Raticate', 'Pidgeotto', 'Oddish', 'Ditto']
    , minLevel: 26
    , maxLevel: 30
    , unlocked: true
    }
   , special11: {
      name: 'Seafom Island'
    , pokes: ['Zubat', 'Golbat', 'Psyduck', 'Golduck', 'Slowpoke', 'Slowbro', 'Seel', 'Dewgong'] 
    , minLevel: 29
    , maxLevel: 37
    , unlocked: true
    }  
   , route19: {
      name: 'Route 20'
    , pokes: ['Raticate', 'Pidgeotto', 'Weepinbell', 'Kadabra']
    , minLevel: 27
    , maxLevel: 31
    , unlocked: true
    }
   , special12: {
      name: 'Pkmn Mansion'
    , pokes: ['Vulpix', 'Growlithe', 'Ponyta', 'Grimer', 'Muk', 'Koffing', 'Weezing', 'Magmar'] 
    , minLevel: 32
    , maxLevel: 40
    , unlocked: true
    }  
   , route20: {
      name: 'Route 21'
    , pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Raticate', 'Tangela']
    , minLevel: 21
    , maxLevel: 32
    , unlocked: true
    }
   , route21: {
      name: 'Route 22'
    , pokes: ['Pidgey', 'Rattata', 'Nidoran f', 'Nidoran m']
    , minLevel: 2
    , maxLevel: 5
    , unlocked: true
    }
   , route22: {
      name: 'Route 23'
    , pokes: ['Spearow', 'Fearow', 'Ekans', 'Arbok', 'Sandshrew', 'Sandslash', 'Ditto']
    , minLevel: 33
    , maxLevel: 43
    , unlocked: true
    }
   , route23: {
      name: 'Route 24'
    , pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Oddish', 'Abra', 'Bellsprout']
    , minLevel: 7
    , maxLevel: 14
    , unlocked: true
    }
   , route24: {
      name: 'Route 25'
    , pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Oddish', 'Abra', 'Bellsprout']
    , minLevel: 7
    , maxLevel: 14
    , unlocked: true
    }
   , special13: {
      name: 'Victory Road'
    , pokes: ['Zubat', 'Golbat', 'Venomoth', 'Machop', 'Machoke', 'Geodude', 'Graveler', 'Marowak'] 
    , minLevel: 36
    , maxLevel: 45
    , unlocked: true
    } 
   , special14: {
      name: 'Cerulean Cave'
    , pokes: ['Wigglytuff', 'Venomoth', 'Kadabra', 'Dodrio', 'Electrode', 'Marowak', 'Rhydon', 'Chansey', 'Ditto'] 
    , minLevel: 51
    , maxLevel: 60
    , unlocked: true
    }  
   , special15: {
      name: 'Legendary Island'
    , pokes: ['Articuno', 'Zapdos', 'Moltres'] 
    , minLevel: 50
    , maxLevel: 50
    , unlocked: true
    }  
   , special16: {
      name: 'The Movie'
    , pokes: ['Mewtwo', 'Mew'] 
    , minLevel: 70
    , maxLevel: 70
    , unlocked: true
    }  
   , water: {
      name: 'Old Rod'
    , pokes: ['Magikarp'] 
    , minLevel: 5
    , maxLevel: 5
    , unlocked: true
    }  
   , water1: {
      name: 'Good Rod'
    , pokes: ['Psyduck', 'Poliwag', 'Goldeen', 'Tentacool'] 
    , minLevel: 20
    , maxLevel: 25
    , unlocked: true
    }  
   , water2: {
      name: 'Super Rod'
    , pokes: ['Shellder', 'Krabby', 'Horsea', 'Staryu',	'Dratini'] 
    , minLevel: 35
    , maxLevel: 40
    , unlocked: true
    }  
   , special41: {
      name: 'New Bark Town'
    , pokes: ['Chikorita', 'Cyndaquil', 'Totodile'] 
    , minLevel: 5
    , maxLevel: 5
    , unlocked: true
    } 
	, route25: {
      name: 'Route 29'
    , pokes: ['Sentret', 'Hoothoot', 'Hoppip'] 
    , minLevel: 2
    , maxLevel: 3
    , unlocked: true
    } 
	, route26: {
      name: 'Route 46'
    , pokes: ['Geodude', 'Rattata', 'Spearow', 'Jigglypuff'] 
    , minLevel: 2
    , maxLevel: 5
    , unlocked: true
    } 
	, route27: {
      name: 'Route 30'
    , pokes: ['Ledyba', 'Hoppip', 'Spinarak', 'Hoothoot'] 
    , minLevel: 3
    , maxLevel: 5
    , unlocked: true
    } 
	, special17: {
      name: 'Dark Cave'
    , pokes: ['Teddiursa', 'Dunsparce', 'Ursaring', 'Wobbuffet', 'Slugma'] 
    , minLevel: 2
    , maxLevel: 25
    , unlocked: true
    } 
	, special18: {
      name: 'Sprout Tower'
    , pokes: ['Rattata', 'Gastly'] 
    , minLevel: 3
    , maxLevel: 6
    , unlocked: true
    } 
	, route28: {
      name: 'Route 32'
    , pokes: ['Mareep', 'Hoppip', 'Wooper', 'Hoothoot'] 
    , minLevel: 4
    , maxLevel: 7
    , unlocked: true
    } 
	, special19: {
      name: 'Ruin of Alph'
    , pokes: ['Natu', 'Smeargle'] 
    , minLevel: 18
    , maxLevel: 24
    , unlocked: true
    } 
	, special20: {
      name: 'Inside the Ruins'
    , pokes: ['Unown'] 
    , minLevel: 5
    , maxLevel: 5
    , unlocked: true
    } 
	, special21: {
      name: 'Union Cave'
    , pokes: ['Zubat', 'Geodude', 'Onix', 'Rattata', 'Golbat', 'Raticate', 'Lapras'] 
    , minLevel: 6
    , maxLevel: 23
    , unlocked: true
    } 
	, route29: {
      name: 'Route 33'
    , pokes: ['Rattata', 'Spearow', 'Ekans', 'Geodude', 'Zubat'] 
    , minLevel: 6
    , maxLevel: 7
    , unlocked: true
    } 
	, special22: {
      name: 'Slowpoke Well'
    , pokes: ['Zubat', 'Slowpoke', 'Slowbro', 'Golbat', 'Slowking'] 
    , minLevel: 5
    , maxLevel: 24
    , unlocked: true
    }
	, special23: {
      name: 'Ilex Forest'
    , pokes: ['Caterpie', 'Weedle', 'Metapod', 'Kakuna', 'Paras', 'Pidgey', 'Venonat'] 
    , minLevel: 5
    , maxLevel: 7
    , unlocked: true
    }
	, route30: {
      name: 'Route 34'
    , pokes: ['Snubbull', 'Murkrow', 'Houndour'] 
    , minLevel: 10
    , maxLevel: 10
    , unlocked: true
    }
	, special24: {
      name: 'Daycare House'
    , pokes: ['Pichu', 'Cleffa', 'Igglybuff', 'Tyrogue', 'Smoochum', 'Elekid', 'Magby', 'Togepi'] 
    , minLevel: 5
    , maxLevel: 5
    , unlocked: true
    }
	, special25: {
      name: 'Goldenrod City'
    , pokes: ['Umbreon', 'Espeon'] 
    , minLevel: 20
    , maxLevel: 20
    , unlocked: true
    }
	, route31: {
      name: 'Route 35'
    , pokes: ['Yanma', 'Noctowl'] 
    , minLevel: 20
    , maxLevel: 20
    , unlocked: true
    }
	, special26: {
      name: 'National Park'
    , pokes: ['Sunkern', 'Ledyba', 'Spinarak', 'Hoothoot'] 
    , minLevel: 10
    , maxLevel: 15
    , unlocked: true
    }
	, route32: {
      name: 'Route 36'
    , pokes: ['Stantler', 'Sudowoodo', 'Ledyba', 'Spinarak', 'Hoothoot'] 
    , minLevel: 13
    , maxLevel: 20
    , unlocked: true
    }
	, route33: {
      name: 'Route 37'
    , pokes: ['Stantler', 'Spinarak', 'Ledyba', 'Hoothoot', 'Ledian', 'Ariados'] 
    , minLevel: 13
    , maxLevel: 16
    , unlocked: true
    }
	, special27: {
      name: 'Burned Tower'
    , pokes: ['Rattata', 'Raticate', 'Zubat', 'Koffing', 'Weezing', 'Magmar'] 
    , minLevel: 12
    , maxLevel: 16
    , unlocked: true
    }
	, special28: {
      name: 'Tin Tower'
    , pokes: ['Rattata', 'Gastly'] 
    , minLevel: 20
    , maxLevel: 24
    , unlocked: true
    }
	, route34: {
      name: 'Route 38'
    , pokes: ['Snubull', 'Miltank', 'Noctowl'] 
    , minLevel: 13
    , maxLevel: 16
    , unlocked: true
    }
	, route35: {
      name: 'Route 39'
    , pokes: ['Miltank', 'Noctowl'] 
    , minLevel: 15
    , maxLevel: 16
    , unlocked: true
    }
	, route36: {
      name: 'Route 40'
    , pokes: ['Tentacool', 'Tentacruel'] 
    , minLevel: 15
    , maxLevel: 24
    , unlocked: true
    }
	, route37: {
      name: 'Route 41'
    , pokes: ['Mantine'] 
    , minLevel: 20
    , maxLevel: 24
    , unlocked: true
    }
	, special29: {
      name: 'Whirl Island'
    , pokes: ['Krabby', 'Zubat', 'Seel', 'Golbat'] 
    , minLevel: 22
    , maxLevel: 26
    , unlocked: true
    }
	, special30: {
      name: 'Cianwood City'
    , pokes: ['Shuckle'] 
    , minLevel: 15
    , maxLevel: 15
    , unlocked: true
    }
	, route38: {
      name: 'Route 42'
    , pokes: ['Mareep', 'Flaaffy', 'Marill', 'Bellossom'] 
    , minLevel: 13
    , maxLevel: 17
    , unlocked: true
    }
	, special31: {
      name: 'Mt.Mortar'
    , pokes: ['Zubat', 'Golbat', 'Machop', 'Machoke', 'Geodude', 'Graveler', 'Raticate'] 
    , minLevel: 15
    , maxLevel: 32
    , unlocked: true
    }
	, special32: {
      name: 'Rocket Hideout'
    , pokes: ['Electrode'] 
    , minLevel: 23
    , maxLevel: 23
    , unlocked: true
    }
	, route39: {
      name: 'Route 43'
    , pokes: ['Girafarig', 'Flaaffy', 'Mareep', 'Noctowl', 'Sentret', 'Furret'] 
    , minLevel: 15
    , maxLevel: 17
    , unlocked: true
    }
	, special33: {
      name: 'Lake of Rage'
    , pokes: ['Gyarados'] 
    , minLevel: 30
    , maxLevel: 30
    , unlocked: true
    }
	, route40: {
      name: 'Route 44'
    , pokes: ['Lickitung', 'Tangela', 'Bellsprout', 'Weepinbell', 'Poliwag', 'Poliwhirl'] 
    , minLevel: 22
    , maxLevel: 26
    , unlocked: true
    }
	, special34: {
      name: 'Ice Path'
    , pokes: ['Swinub', 'Delibird', 'Sneasel'] 
    , minLevel: 21
    , maxLevel: 24
    , unlocked: true
    }
	, special35: {
      name: 'Dragons Den'
    , pokes: ['Dratini'] 
    , minLevel: 10
    , maxLevel: 14
    , unlocked: true
    }
	, route41: {
      name: 'Route 45'
    , pokes: ['Teddiursa', 'Gligar', 'Phanpy', 'Skarmory', 'Donphan'] 
    , minLevel: 20
    , maxLevel: 27
    , unlocked: true
    }
	, route42: {
      name: 'Route 48'
    , pokes: ['Ursaring', 'Sneasel', 'Donphan'] 
    , minLevel: 40
    , maxLevel: 43
    , unlocked: true
    }
	, special36: {
      name: 'Mt.Silver'
    , pokes: ['Ursaring', 'Donphan', 'Misdreavus', 'Larvitar', 'Pupitar', 'Politoed'] 
    , minLevel: 44
    , maxLevel: 48
    , unlocked: true
    }
	, special37: {
      name: 'Felines, Cats or Dogs ?'
    , pokes: ['Raikou', 'Entei', 'Suicune'] 
    , minLevel: 40
    , maxLevel: 40
    , unlocked: true
    }
	, special38: {
      name: 'Whirl Island B2F Inner'
    , pokes: ['Lugia'] 
    , minLevel: 60
    , maxLevel: 60
    , unlocked: true
    }
	, special39: {
      name: 'Tin Tower 10F'
    , pokes: ['Ho-oh'] 
    , minLevel: 60
    , maxLevel: 60
    , unlocked: true
    }
	, special39: {
      name: 'Altar of Time'
    , pokes: ['Celebi'] 
    , minLevel: 30
    , maxLevel: 30
    , unlocked: true
    }
	, special40: {
      name: 'Headbutt'
    , pokes: ['Aipom', 'Pineco', 'Heracross', 'Spinarak', 'Ledyba', 'Hoothoot', 'Noctowl'] 
    , minLevel: 10
    , maxLevel: 10
    , unlocked: true
    }
	, water3: {
      name: 'Old Rod'
    , pokes: ['Remoraid'] 
    , minLevel: 10
    , maxLevel: 10
    , unlocked: true
    }  
   , water4: {
      name: 'Good Rod'
    , pokes: ['Marill', 'Chinchou', 'Wooper'] 
    , minLevel: 20
    , maxLevel: 20
    , unlocked: true
    }  
   , water5: {
      name: 'Super Rod'
    , pokes: ['Corsola', 'Qwilfish', 'Lanturn', 'Octillery'] 
    , minLevel: 40
    , maxLevel: 40
    , unlocked: true
    }  
}
