const ROUTES = {
  Kanto: {
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
  },
  Johto: {
    starter2: {
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
    , pokes: ['Ho-Oh'] 
    , minLevel: 60
    , maxLevel: 60
    , unlocked: true
    }
	, special40: {
      name: 'Altar of Time'
    , pokes: ['Celebi'] 
    , minLevel: 30
    , maxLevel: 30
    , unlocked: true
    }
	, special41: {
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
  },
  Hoenn: {
    starter3: {
      name: 'Littleroot Town'
    , pokes: ['Treecko', 'Torchic', 'Mudkip'] 
    , minLevel: 5
    , maxLevel: 5
    , unlocked: true
    } 
	, route43: {
      name: 'Route 101'
    , pokes: ['Zigzagoon', 'Wurmple', 'Poochyena'] 
    , minLevel: 2
    , maxLevel: 3
    , unlocked: true
    }
	, route44: {
      name: 'Route 103'
    , pokes: ['Zigzagoon', 'Poochyena', 'Wingull'] 
    , minLevel: 2
    , maxLevel: 4
    , unlocked: true
    }
	, route45: {
      name: 'Route 102'
    , pokes: ['Zigzagoon', 'Poochyena', 'Lotad', 'Wurmple', 'Seedot', 'Ralts', 'Surskit'] 
    , minLevel: 3
    , maxLevel: 4
    , unlocked: true
    }
	, route46: {
      name: 'Route 104'
    , pokes: ['Zigzagoon', 'Poochyena', 'Wurmple', 'Wingull', 'Taillow'] 
    , minLevel: 3
    , maxLevel: 5
    , unlocked: true
    }
	, special42: {
      name: 'Petalburg Woods'
    , pokes: ['Zigzagoon', 'Poochyena', 'Wurmple', 'Shroomish', 'Silcoon', 'Cascoon', 'Taillow', 'Slakoth'] 
    , minLevel: 5
    , maxLevel: 6
    , unlocked: true
    }
	, route47: {
      name: 'Route 116'
    , pokes: ['Zigzagoon', 'Poochyena', 'Whismur', 'Taillow', 'Nincada', 'Skitty'] 
    , minLevel: 6
    , maxLevel: 8
    , unlocked: true
    }
	, special43: {
      name: 'Rusturf Tunnel'
    , pokes: ['Whismur'] 
    , minLevel: 5
    , maxLevel: 8
    , unlocked: true
    }
	, route48: {
      name: 'Route 105'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, route49: {
      name: 'Route 106'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, special44: {
      name: 'Granite Cave'
    , pokes: ['Makuhita', 'Aron', 'Mawile', 'Sableye', 'Nosepass'] 
    , minLevel: 6
    , maxLevel: 12
    , unlocked: true
    }
	, route50: {
      name: 'Route 107'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, route51: {
      name: 'Route 108'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, route52: {
      name: 'Route 109'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, route53: {
      name: 'Route 110'
    , pokes: ['Zigzagoon', 'Poochyena', 'Electrike', 'Gulpin', 'Minun', 'Wingull', 'Plulse'] 
    , minLevel: 12
    , maxLevel: 13
    , unlocked: true
    }
	, special45: {
      name: 'New Mauville'
    , pokes: ['Magnemite', 'Magneton', 'Voltorb', 'Electrode'] 
    , minLevel: 22
    , maxLevel: 26
    , unlocked: true
    }
	, route54: {
      name: 'Route 117'
    , pokes: ['Poochyena', 'Zigzagoon', 'Roselia', 'Illumise', 'Volbeat', 'Seedot', 'Surskit'] 
    , minLevel: 13
    , maxLevel: 14
    , unlocked: true
    }
	, route55: {
      name: 'Route 111'
    , pokes: ['Trapinch', 'Baltoy', 'Cacnea'] 
    , minLevel: 19
    , maxLevel: 22
    , unlocked: true
    }
	, special45: {
      name: 'Mirage Tower'
    , pokes: ['Anorith', 'Lileep'] 
    , minLevel: 20
    , maxLevel: 20
    , unlocked: true
    }
	, route56: {
      name: 'Route 112'
    , pokes: ['Numel'] 
    , minLevel: 14
    , maxLevel: 16
    , unlocked: true
    }
	, special46: {
      name: 'Fiery Path'
    , pokes: ['Numel', 'Torkoal'] 
    , minLevel: 14
    , maxLevel: 16
    , unlocked: true
    }
	, special47: {
      name: 'Jagged Pass'
    , pokes: ['Numel', 'Spoink'] 
    , minLevel: 20
    , maxLevel: 22
    , unlocked: true
    }
	, route57: {
      name: 'Route 113'
    , pokes: ['Spinda'] 
    , minLevel: 14
    , maxLevel: 16
    , unlocked: true
    }
	, route58: {
      name: 'Route 114'
    , pokes: ['Swablu', 'Seedot', 'Zangoose', 'Nuzleaf', 'Surskit', 'Lotad', 'Seviper', 'Lombre'] 
    , minLevel: 15
    , maxLevel: 18
    , unlocked: true
    }
	, special48: {
      name: 'Meteor Falls'
    , pokes: ['Solrock', 'Lunatone', 'Bagon'] 
    , minLevel: 14
    , maxLevel: 35
    , unlocked: true
    }
	, route59: {
      name: 'Route 115'
    , pokes: ['Taillow', 'Swablu', 'Swellow', 'Wingull'] 
    , minLevel: 23
    , maxLevel: 26
    , unlocked: true
    }
	, route60: {
      name: 'Route 118'
    , pokes: ['Zigzagoon', 'Electrike', 'Wingull', 'Linoone', 'Manectric', 'Kecleon'] 
    , minLevel: 24
    , maxLevel: 27
    , unlocked: true
    }
	, route61: {
      name: 'Route 119'
    , pokes: ['Zigzagoon', 'Linoone', 'Tropius', 'Kecleon'] 
    , minLevel: 25
    , maxLevel: 27
    , unlocked: true
    }
	, special49: {
      name: 'Weather Institute'
    , pokes: ['Castform'] 
    , minLevel: 25
    , maxLevel: 25
    , unlocked: true
    }
	, route62: {
      name: 'Route 120'
    , pokes: ['Linoone', 'Mightyena', 'Zigzagoon', 'Poochyena', 'Seedot', 'Surskit', 'Absol'] 
    , minLevel: 25
    , maxLevel: 27
    , unlocked: true
    }
	, route63: {
      name: 'Route 121'
    , pokes: ['Duskull', 'Zigzagoon', 'Linoone', 'Wingull', 'Kecleon'] 
    , minLevel: 25
    , maxLevel: 28
    , unlocked: true
    }
	, special50: {
      name: 'Safari Zone (RS Edition)'
    , pokes: ['Oddish', 'Girafarig', 'Doduo', 'Natu', 'Wobbuffet', 'Pikachu', 'Gloom', 'Rhyhorn', 'Phanpy', 'Dodrio', 'Xatu', 'Heracross', 'Pinsir'] 
    , minLevel: 25
    , maxLevel: 31
    , unlocked: true
    }
	, special51: {
      name: 'Safari Zone (Emerald Edition)'
    , pokes: ['Aipom', 'Teddiursa', 'Ledyba', 'Sunkern', 'Hoothoot','Pineco', 'Houndour','Miltank', 'Mareep', 'Spinarak', 'Gligar','Snubbull', 'Stantler']
	, minLevel: 33
    , maxLevel: 40
    , unlocked: true
    }
	, route64: {
      name: 'Route 122'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, special52: {
      name: 'Mt. Pyre'
    , pokes: ['Duskull', 'Shuppet', 'Meditite', 'Chimecho', 'Wingull']
	, minLevel: 22
    , maxLevel: 30
    , unlocked: true
    }
	, special53: {
      name: 'Too much Hideouts'
    , pokes: ['Electrode']
	, minLevel: 40
    , maxLevel: 40
    , unlocked: true
    }
	, route65: {
      name: 'Route 123'
    , pokes: ['Shuppet', 'Duskull', 'Poochyena', 'Mightyena', 'Zigzagoon', 'Wingull', 'Linoone', 'Kecleon'] 
    , minLevel: 25
    , maxLevel: 28
    , unlocked: true
    }
	, route66: {
      name: 'Route 124'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, special54: {
      name: 'Mossdeep City'
    , pokes: ['Beldum']
	, minLevel: 5
    , maxLevel: 5
    , unlocked: true
    }
	, route67: {
      name: 'Route 125'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, special55: {
      name: 'Shoal Cave'
    , pokes: ['Spheal', 'Snorunt']
	, minLevel: 26
    , maxLevel: 32
    , unlocked: true
    }
	, route68: {
      name: 'Route 126'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, route69: {
      name: 'Route 127'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, route70: {
      name: 'Route 128'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, special56: {
      name: 'Victory Road'
    , pokes: ['Lairon', 'Hariyama', 'Medicham', 'Loudred', 'Makuhita', 'Lairon', 'Whismur', 'Aron', 'Sableye', 'Mawile']
    , minLevel: 36
    , maxLevel: 42
    , unlocked: true
    }
	, route71: {
      name: 'Route 129'
    , pokes: ['Wingull', 'Pelipper', 'Wailord'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, route72: {
      name: 'Route 130'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, special57: {
      name: 'Mirage Island'
    , pokes: ['Wynaut', 'Shedinja']
	, minLevel: 5
    , maxLevel: 50
    , unlocked: true
    }
	, route73: {
      name: 'Route 131'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, special58: {
      name: 'Sky Pillar'
    , pokes: ['Mawile', 'Claydol', 'Dusclops', 'Sableye', 'Banette', 'Altaria']
    , minLevel: 34
    , maxLevel: 60
    , unlocked: true
    }
	, route74: {
      name: 'Route 132'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, route75: {
      name: 'Route 133'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, special59: {
      name: 'Ruins'
    , pokes: ['Regice', 'Regirock', 'Registeel']
	, minLevel: 40
    , maxLevel: 40
    , unlocked: true
    }
	, special60: {
      name: 'Southern Island'
    , pokes: ['Latios', 'Latias']
	, minLevel: 50
    , maxLevel: 50
    , unlocked: true
    }
	, special61: {
      name: 'Cave of Origin'
    , pokes: ['Kyogre', 'Groudon']
	, minLevel: 45
    , maxLevel: 45
    , unlocked: true
    }
	, special62: {
      name: 'Sky Pillar (Top)'
    , pokes: ['Rayquaza']
	, minLevel: 70
    , maxLevel: 70
    , unlocked: true
    }
	, special63: {
      name: 'Wishmaker'
    , pokes: ['Jirachi']
	, minLevel: 5
    , maxLevel: 5
    , unlocked: true
    }
	, special64: {
      name: 'THE UNIVERSE'
    , pokes: ['Deoxys']
	, minLevel: 30
    , maxLevel: 30
    , unlocked: true
    }
	, special65: {
      name: 'Underwater 7.1'
    , pokes: ['Clamperl', 'Relicanth']
	, minLevel: 20
    , maxLevel: 35
    , unlocked: true
    }
	, water6: {
      name: 'Old Rod'
    , pokes: ['Feebas', 'Azurill'] 
    , minLevel: 5
    , maxLevel: 5
    , unlocked: true
    }  
   , water7: {
      name: 'Good Rod'
    , pokes: ['Luvdisc', 'Barboach', 'Corphish'] 
    , minLevel: 20
    , maxLevel: 20
    , unlocked: true
    }  
   , water8: {
      name: 'Super Rod'
    , pokes: ['Wailmer', 'Carvanha', 'Huntail'] 
    , minLevel: 40
    , maxLevel: 40
    , unlocked: true
    } 
  }
}
