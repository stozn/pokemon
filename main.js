/*
  global: POKEDEX
  global: TYPES
  global: EXP_TABLE
  global: ENEMIES_RECIPES
*/
'use strict'

const pokeById = (id) => POKEDEX[id - 1]
const pokeByName = (name) => POKEDEX.filter((el) => el.pokemon[0].Pokemon === name)[0]

const EXP_TABLE = {}
EXP_TABLE["Slow"] = [0, 1, 10, 33, 80, 156, 270, 428, 640, 911, 1250, 1663, 2160, 2746, 3430, 4218, 5120, 6141, 7290, 8573, 10000, 11576, 13310, 15208, 17280, 19531, 21970, 24603, 27440, 30486, 33750, 37238, 40960, 44921, 49130, 53593, 58320, 63316, 68590, 74148, 80000, 86151, 92610, 99383, 106480, 113906, 121670, 129778, 138240, 147061, 156250, 165813, 175760, 186096, 196830, 207968, 219520, 231491, 243890, 256723, 270000, 283726, 297910, 312558, 327680, 343281, 359370, 375953, 393040, 410636, 428750, 447388, 466560, 486271, 506530, 527343, 548720, 570666, 593190, 616298, 640000, 664301, 689210, 714733, 740880, 767656, 795070, 823128, 851840, 881211, 911250, 941963, 973360, 1005446, 1038230, 1071718, 1105920, 1140841, 1176490, 1212873, 1250000]
EXP_TABLE["Medium Slow"] = [0, -53, 9, 57, 96, 135, 179, 236, 314, 419, 560, 742, 973, 1261, 1612, 2035, 2535, 3120, 3798, 4575, 5460, 6458, 7577, 8825, 10208, 11735, 13411, 15244, 17242, 19411, 21760, 24294, 27021, 29949, 33084, 36435, 40007, 43808, 47846, 52127, 56660, 61450, 66505, 71833, 77440, 83335, 89523, 96012, 102810, 109923, 117360, 125126, 133229, 141677, 150476, 159635, 169159, 179056, 189334, 199999, 211060, 222522, 234393, 246681, 259392, 272535, 286115, 300140, 314618, 329555, 344960, 360838, 377197, 394045, 411388, 429235, 447591, 466464, 485862, 505791, 526260, 547274, 568841, 590969, 613664, 636935, 660787, 685228, 710266, 735907, 762160, 789030, 816525, 844653, 873420, 902835, 932903, 963632, 995030, 1027103, 1059860]
EXP_TABLE["Medium Fast"] = [0, 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000, 1331, 1728, 2197, 2744, 3375, 4096, 4913, 5832, 6859, 8000, 9261, 10648, 12167, 13824, 15625, 17576, 19683, 21952, 24389, 27000, 29791, 32768, 35937, 39304, 42875, 46656, 50653, 54872, 59319, 64000, 68921, 74088, 79507, 85184, 91125, 97336, 103823, 110592, 117649, 125000, 132651, 140608, 148877, 157464, 166375, 175616, 185193, 195112, 205379, 216000, 226981, 238328, 250047, 262144, 274625, 287496, 300763, 314432, 328509, 343000, 357911, 373248, 389017, 405224, 421875, 438976, 456533, 474552, 493039, 512000, 531441, 551368, 571787, 592704, 614125, 636056, 658503, 681472, 704969, 729000, 753571, 778688, 804357, 830584, 857375, 884736, 912673, 941192, 970299, 1000000]
EXP_TABLE["Fast"] = [0, 0, 6, 21, 51, 100, 172, 274, 409, 583, 800, 1064, 1382, 1757, 2195, 2700, 3276, 3930, 4665, 5487, 6400, 7408, 8518, 9733, 11059, 12500, 14060, 15746, 17561, 19511, 21600, 23832, 26214, 28749, 31443, 34300, 37324, 40522, 43897, 47455, 51200, 55136, 59270, 63605, 68147, 72900, 77868, 83058, 88473, 94119, 100000, 106120, 112486, 119101, 125971, 133100, 140492, 148154, 156089, 164303, 172800, 181584, 190662, 200037, 209715, 219700, 229996, 240610, 251545, 262807, 274400, 286328, 298598, 311213, 324179, 337500, 351180, 365226, 379641, 394431, 409600, 425152, 441094, 457429, 474163, 491300, 508844, 526802, 545177, 563975, 583200, 602856, 622950, 643485, 664467, 685900, 707788, 730138, 752953, 776239, 800000]

const ENEMIES_RECIPES = {
  easy: {
    pokes: ['Rattata', 'Pidgey']
  , maxLevel: 5
  }
}

const RNG = (func, chance) => {
  if ((Math.random() * 100) < chance) {
    func()
  }
}

const cloneJsonObject = (object) => JSON.parse(JSON.stringify(object))
const randomArrayElement = (array) => array[Math.floor(Math.random() * array.length)]

const makeDomHandler = () => {
  const domQuery = (cssQuery) => document.querySelector(cssQuery)
  const $ = domQuery
  const setValue = (domElement, newValue, append) => {
    if (append === undefined) { append = false }
    if (append) {
      domElement.innerHTML += newValue
    }
    if (!append) {
      domElement.innerHTML = newValue
    }
  }
  const getValue = (domElement) => {
    return domElement.innerHTML
  }
  const seProp = (domElement, attribute, newValue) => {
      domElement[attribute] = newValue
  }
  const renderPokeOnContainer = (id, poke) => {
    const pokeStatusAsText = (poke) => {
      var output = ''
      output += 'Attack Speed: ' + poke.attackSpeed()/1000 + '<br>'
      output += '\nAttack: ' + poke.allCombat().attack() + '<br>'
      output += '\nDefense: ' + poke.allCombat().defense() + '<br>'
      return output
    }
    const containerCssQuery = '.container.poke' + '#' + id
    const container = $(containerCssQuery)
    const domElements  = {
      name: container.querySelector('.name')
    , img: container.querySelector('.img')
    , hp: container.querySelector('.hp')
    , hpBar: container.querySelector('.hpBar')
    , status: container.querySelector('.status')
    }
    setValue(domElements.name, poke.pokeName() + ' (' + poke.level() + ')')
    seProp(domElements.img, 'src', poke.image())
    setValue(domElements.hp, poke.lifeAsText())
    seProp(domElements.hpBar, 'value', poke.life.current())
    seProp(domElements.hpBar, 'max', poke.life.max())
    setValue(domElements.status, pokeStatusAsText(poke))
  }
  const renderPokeList = (id, pokemons) => {
    const listCssQuery = '.container.list' + '#' + id
    const pokeListContainer = $(listCssQuery)
    const list = pokeListContainer.querySelector('.list')
    setValue(list, '')
    pokemons.forEach((poke, index) => {
      setValue(
        list
      , `<li>
           <a
           href="#"
           onclick="userInteractions.changePokemon(${index})"
           style="color: ${poke.alive()
                            && 'green'
                            || 'red'
                          }"
           >
             ${poke.pokeName()} (${poke.level()})
           </a>
        <li>`
      , true
      )
    })
  }
  const bindEvents = () => {
    $('#heal').addEventListener( 'click'
    , () => { userInteractions.healAllPlayerPokemons() }
    )
  }
  bindEvents()
  return {
    renderPokeOnContainer: renderPokeOnContainer
  , renderPokeList: renderPokeList
  }
}

const makePoke = (pokeModel, initialLevel) => {
  const poke = cloneJsonObject(pokeModel)
  const expTable = EXP_TABLE[poke.stats[0]["growth rate"]]
  var exp = initialLevel
              && expTable[initialLevel - 1]
              || 0
  const currentLevel = () => {
      return expTable
        .filter((xp_requirement) => xp_requirement <= exp)
        .length
    }
  const statValue = (raw) => {
    return Math.floor((((raw + 50) * currentLevel()) / 50 + 5))
  }
  const hp = (rawHp) => {
    return Math.floor(((rawHp * currentLevel()) / 50) + 10)
  }
  const combat = {
    mutable: {
      hp: hp(poke.stats[0].hp) * 4
    }
  , maxHp: () => hp(poke.stats[0].hp) * 4
  , attack: () => statValue(poke.stats[0].attack)
  , defense: () => statValue(poke.stats[0].defense)
  , spAttack: () => statValue(poke.stats[0]['sp atk'])
  , spDefense: () => statValue(poke.stats[0]['sp def'])
  , speed: () => statValue(poke.stats[0].speed)
  }
  const poke_interface = {
    pokeName: () => poke.pokemon[0].Pokemon
  , image: () => poke.images.front
  , type: () => poke.stats[0].types.text
  , lifeAsText: () => '' + combat.mutable.hp + ' / ' + combat.maxHp()
  , life: {
      current: () => combat.mutable.hp
    , max: () => combat.maxHp()
    }
  , alive: () => combat.mutable.hp > 0
  , giveExp: (ammount) => exp += ammount
  , level: () => currentLevel()
  , attackSpeed: () => Math.floor(1000 / (500 + combat.speed()) * 800)
  , attack: () => combat.attack()
  , takeDamage: (enemyAttack) => combat.mutable.hp -= (enemyAttack - combat.defense()/10) > 0
                                                    && Math.ceil((enemyAttack - combat.defense()/10) * (Math.random() * 2) / 100)
                                                    || 0
  , baseExp: () => Number(poke.exp[0]['base exp'])
  , heal: () => combat.mutable.hp = combat.maxHp()
  , allCombat: () => combat
  }
  return poke_interface
}
const makeRandomPoke = (level) => makePoke(randomArrayElement(POKEDEX), level)

const makePlayer = () => {
  const pokemons = []
  var activePoke = 0
  const player_interface = {
    addPoke: (poke) => {
      pokemons.push(poke)
    }
  , setActive: (index) => {
      activePoke = index
    }
  , activePoke: () => pokemons[activePoke]
  , pokemons: () => pokemons
  , healAllPokemons: () => pokemons.forEach((poke) => poke.heal())
  }
  return player_interface
}

const makeEnemy = (starter) => {
  var active = starter

  const generateNew = (recipe) => {
    const poke = pokeByName(randomArrayElement(recipe.pokes))
    return makePoke(poke, Math.ceil(Math.random() * recipe.maxLevel))
  }

  return {
    activePoke: () => active,
    generateNew: (recipe) => active = generateNew(recipe)
  }
}

const makeUserInteractions = (player, enemy, dom, combatLoop) => {
  return {
    changePokemon: (newActiveIndex) => {
      player.setActive(newActiveIndex)
      combatLoop.changePlayerPoke(player.activePoke())
      renderView(dom, enemy, player)
    },
    healAllPlayerPokemons: () => {
      player.healAllPokemons()
      combatLoop.changePlayerPoke(player.activePoke())
      renderView(dom, enemy, player)
    }
  }
}

const makeCombatLoop = (enemy, player, dom) => {
  var playerActivePoke = player.activePoke()
  var enemyActivePoke = enemy.activePoke()
  var playerTimerId = null
  var enemyTimerId = null
  const playerTimer = () => {
    playerTimerId = window.setTimeout(
      () => dealDamage(playerActivePoke, enemyActivePoke, 'player')
    , playerActivePoke.attackSpeed()
    )
  }
  const enemyTimer = () => {
    enemyTimerId = window.setTimeout(
      () => dealDamage(enemyActivePoke, playerActivePoke, 'enemy')
    , enemyActivePoke.attackSpeed()
    )
  }
  const dealDamage = (attacker, defender, who) => {
    if (attacker.alive() && defender.alive()) {
      // both alive
      const damageMultiplier = TYPES[attacker.type()][defender.type()]
      defender.takeDamage(attacker.attack() * damageMultiplier)
      if (who === 'player') {
        playerTimer()
      }
      if (who === 'enemy') {
        enemyTimer()
      }
      renderView(dom, enemy, player)
    }
    if (!attacker.alive() || !defender.alive()) {
      // one is dead
      window.clearTimeout(playerTimerId)
      window.clearTimeout(enemyTimerId)

      if ((who === 'enemy') && !attacker.alive()
      || (who === 'player') && !defender.alive())
      {
        //enemyActivePoke is dead
        RNG(
          player.addPoke.bind(null, enemy.activePoke())
        , 1
        )

        playerActivePoke.giveExp((enemyActivePoke.baseExp() / 8) + enemyActivePoke.level())
        enemy.generateNew(ENEMIES_RECIPES.easy)
        enemyActivePoke = enemy.activePoke()
        enemyTimer()
        playerTimer()
      }
      renderView(dom, enemy, player)
    }
  }
  const init = () => {
    playerTimer()
    enemyTimer()
  }
  const stop = () => {
    window.clearTimeout(playerTimerId)
    window.clearTimeout(enemyTimerId)
  }
  const refresh = () => {
    stop()
    init()
  }
  return {
    init: init
  , stop: stop
  , changePlayerPoke: (newPoke) => {
      playerActivePoke = newPoke
      refresh()
    }
  , refresh: refresh
  }
}

const renderView = (dom, enemy, player) => {
  dom.renderPokeOnContainer('enemy', enemy.activePoke())
  dom.renderPokeOnContainer('player', player.activePoke())
  dom.renderPokeList('playerPokes', player.pokemons())
}

// main

//var enemy = pokeAleatorio(3)
const enemy = makeEnemy()
enemy.generateNew(ENEMIES_RECIPES.easy)

const player = makePlayer()
player.addPoke(makePoke(pokeById(1), 6))
player.addPoke(makePoke(pokeByName('Charmander'), 6))
player.addPoke(makePoke(pokeByName('Squirtle'), 6))
const dom = makeDomHandler()
const combatLoop = makeCombatLoop(enemy, player, dom)
const userInteractions = makeUserInteractions(player, enemy, dom, combatLoop)

renderView(dom, enemy, player)

combatLoop.init()
