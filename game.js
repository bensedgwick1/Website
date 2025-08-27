// --- DATA ---

const passages = {
  // --- STARTING AREA ---
  "Start": {
    title: "The Forgotten Valley",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    text: "You awaken in a lush, forgotten valley with no memory of how you arrived. A dense forest looms to the north, and a gentle river flows eastward.",
    options: [
      { text: "Enter the forest", target: "Forest" },
      { text: "Follow the river", target: "River" }
    ],
    effects: { energy: -5 }
  },
  "Forest": {
    title: "Enchanted Forest",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
    text: "The ancient trees of the forest hum with a strange energy. You spot a faintly glowing path and a dark, foreboding cave.",
    options: [
      { text: "Follow the glowing path", target: "Path" },
      { text: "Enter the dark cave", target: "Cave" },
      { text: "Return to the valley", target: "Start" }
    ],
    effects: { mana: -5, energy: -10 }
  },
  "River": {
    title: "Whispering River",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
    text: "The river whispers secrets as it flows over smooth stones. You see a rickety wooden bridge and a small, abandoned boat.",
    options: [
      { text: "Cross the bridge", target: "Crossroads" },
      { text: "Take the boat", target: "Boat" },
      { text: "Return to the valley", target: "Start" }
    ],
    effects: { happiness: 5 }
  },
  "Path": {
    title: "Glowing Path",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
    text: "The path leads you to a serene clearing filled with luminescent flowers. The air here feels pure and restorative.",
    options: [
      { text: "Pick a glowing petal", target: "Flower" },
      { text: "Rest in the clearing", target: "Rest" },
      { text: "Go back", target: "Forest" }
    ],
    effects: { health: 10, mana: 10, energy: 10, happiness: 10 }
  },
  "Cave": {
    title: "Murky Cave",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    text: "The air in the cave is damp and cold. You hear the skittering of claws in the darkness.",
    monster: "Giant Rat",
    options: []
  },
  "CaveInterior": {
      title: "Cave Interior",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
      text: "You are in a damp, murky cave. You can see some ancient drawings on the walls, depicting a great city beyond the mountains.",
      options: [
        { text: "Explore deeper", target: "DeepCave" },
        { text: "Leave the cave", target: "Forest" }
      ]
  },
  "Boat": {
    title: "Adrift",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80",
    text: "You climb into the small boat and push off into the current. The river pulls you gently downstream, away from the valley.",
    options: [
      { text: "Continue downstream", target: "RiverJourney" }
    ],
    effects: { energy: 10, happiness: 10 }
  },
    "RiverJourney": {
    title: "Down the River",
    image: "https://images.unsplash.com/photo-1505164294233-8b27cc3d34f9?auto=format&fit=crop&w=800&q=80",
    text: "The river widens and slows as the landscape changes. The trees become twisted and the air grows heavy and humid. You are entering a swamp.",
    options: [
      { text: "Navigate the swamp", target: "Swamp" },
      { text: "Try to paddle back", target: "River" }
    ],
    effects: { energy: -10, happiness: -5 }
  },
  "Swamp": {
      title: "Murky Swamp",
      image: "https://images.unsplash.com/photo-1504984392439-e4a8a044a86f?auto=format&fit=crop&w=800&q=80",
      text: "The swamp is a maze of murky water and tangled roots. Something slithers beneath the surface. You spot a small, dilapidated shack on a patch of dry land.",
      options: [
          { text: "Investigate the shack", target: "Shack" },
          { text: "Press on through the swamp", target: "SwampDanger" }
      ]
  },
  "Shack": {
      title: "The Hermit's Shack",
      image: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=800&q=80",
      text: "Inside the shack, you find a strange hermit who offers you a mysterious potion. 'It will help you on your way,' she cackles.",
      options: [
          { text: "Drink the potion", target: "Potion" },
          { text: "Leave the shack", target: "Swamp" }
      ]
  },
  "Potion": {
      title: "A Strange Brew",
      image: "https://images.unsplash.com/photo-1550482598-6b2a04a358c6?auto=format&fit=crop&w=800&q=80",
      text: "You drink the potion. It tastes of moss and starlight. You feel... different.",
      options: [
          { text: "Thank the hermit", target: "Swamp" }
      ],
      effects: { mana: 20, happiness: -10, health: 10 }
  },
  "SwampDanger": {
      title: "Swamp Lurker",
      image: "https://images.unsplash.com/photo-1504984392439-e4a8a044a86f?auto=format&fit=crop&w=800&q=80",
      text: "As you pole the boat through the murky water, a giant, slimy tentacle erupts from the depths and attacks!",
      options: [],
      monster: "Swamp Tentacle"
  },
  "SwampAftermath": {
      title: "Out of the Swamp",
      image: "https://images.unsplash.com/photo-1559825481-6d452d899f88?auto=format&fit=crop&w=800&q=80",
      text: "You've defeated the creature and finally see a way out of the oppressive swamp. You emerge onto a muddy path leading towards the city.",
      options: [
          { text: "Follow the path", target: "Outskirts" }
      ]
  },
  "Flower": {
    title: "Magical Flower",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    text: "The petal glows warmly in your hand. You feel a surge of strength.",
    options: [
      { text: "Return to the clearing", target: "Path" }
    ],
    effects: { health: 20, mana: 10, happiness: 20 },
    item: "Glowing Petal"
  },
  "Rest": {
    title: "Peaceful Rest",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
    text: "You rest in the clearing, feeling your wounds mend and your spirit lift. You are ready for the path ahead.",
    options: [
      { text: "Continue onward", target: "Path" }
    ],
    effects: { health: 50, mana: 30, energy: 40, happiness: 30 }
  },
  "DeepCave": {
    title: "Hidden Cache",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    text: "Tucked away in a small alcove, you find a leather pouch containing an old, but shiny coin.",
    options: [
      { text: "Leave the cave", target: "Forest" }
    ],
    item: "Old Coin"
  },

  // --- THE JOURNEY ---
  "Crossroads": {
      title: "The Crossroads",
      image: "https://images.unsplash.com/photo-1478860409698-8707f313ee8b?auto=format&fit=crop&w=800&q=80",
      text: "Having crossed the river, you arrive at a crossroads. A signpost points in two directions: 'To the mountains' and 'To the plains'.",
      options: [
          { text: "Take the mountain path", target: "MountainPath" },
          { text: "Take the plains path", target: "PlainsPath" },
          { text: "Go back across the bridge", target: "River" }
      ]
  },
  "MountainPath": {
      title: "The Winding Trail",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
      text: "The path into the mountains is steep and treacherous. The air grows thin and cold.",
      options: [
          { text: "Press on", target: "MountainPass" }
      ],
      effects: { energy: -20, happiness: -5 }
  },
  "MountainPass": {
      title: "The Skeleton's Grip",
      image: "https://images.unsplash.com/photo-1564769719542-736d4a033e48?auto=format&fit=crop&w=800&q=80",
      text: "At the highest point of the pass, you find the remains of a long-dead adventurer, their skeletal hand still clutching a rusty sword.",
      options: [
          { text: "Take the sword", target: "MountainPass_Sword" },
          { text: "Continue without it", target: "MountainExit" }
      ]
  },
  "MountainPass_Sword": {
      title: "A Rusty Blade",
      image: "https://images.unsplash.com/photo-1564769719542-736d4a033e48?auto=format&fit=crop&w=800&q=80",
      text: "You pry the sword from the skeleton's fingers. It's old and notched, but better than nothing.",
      options: [
          { text: "Descend the mountain", target: "MountainExit" }
      ],
      item: "Rusty Sword"
  },
  "MountainExit": {
      title: "Mountain Vista",
      image: "https://images.unsplash.com/photo-1508921914833-2b2c911b3394?auto=format&fit=crop&w=800&q=80",
      text: "As you descend, the clouds part, revealing a breathtaking view of a sprawling city in the distance. Your destination.",
      options: [
          { text: "Head towards the city", target: "Outskirts" }
      ]
  },
  "PlainsPath": {
      title: "The Endless Plains",
      image: "https://images.unsplash.com/photo-1473115439229-a75dd3b41334?auto=format&fit=crop&w=800&q=80",
      text: "An ocean of grass stretches before you under a wide-open sky. The journey is long, and you feel exposed.",
      options: [
          { text: "Scan the horizon", target: "PlainsEncounter" }
      ],
      effects: { energy: -15 }
  },
  "PlainsEncounter": {
      title: "A Lone Wolf",
      image: "https://images.unsplash.com/photo-1547471080-774b9b013a3b?auto=format&fit=crop&w=800&q=80",
      text: "Your eyes catch movement. A lean, hungry-looking wolf is stalking you from the tall grass.",
      options: [],
      monster: "Wolf"
  },
  "PlainsAftermath": {
      title: "Victory on the Plains",
      image: "https://images.unsplash.com/photo-1473115439229-a75dd3b41334?auto=format&fit=crop&w=800&q=80",
      text: "The wolf lies defeated. The plains fall silent once more. In the distance, you see what looks like a small farmstead.",
      options: [
          { text: "Head for the farmstead", target: "Farmstead" }
      ]
  },
  "Farmstead": {
      title: "The Old Farmstead",
      image: "https://images.unsplash.com/photo-1598963972456-538965c69348?auto=format&fit=crop&w=800&q=80",
      text: "You arrive at a small, peaceful farm. An old farmer looks up from his work, leaning on his rake.",
      options: [
          { text: "Ask for a place to rest", target: "FarmsteadRest" },
          { text: "Ask about the city", target: "FarmsteadCity" },
          { text: "Leave", target: "Outskirts" }
      ],
      effects: { happiness: 10 }
  },
  "FarmsteadRest": {
      title: "A Moment's Peace",
      image: "https://images.unsplash.com/photo-1598963972456-538965c69348?auto=format&fit=crop&w=800&q=80",
      text: "The farmer offers you a bed in his barn. You get a solid night's sleep, feeling much better for it.",
      options: [
          { text: "Thank the farmer and leave", target: "Outskirts" }
      ],
      effects: { health: 40, energy: 50 }
  },
  "FarmsteadCity": {
      title: "A Farmer's Tale",
      image: "https://images.unsplash.com/photo-1598963972456-538965c69348?auto=format&fit=crop&w=800&q=80",
      text: "'The city?' he says, wiping his brow. 'That's Silverhaven. Big walls, bigger rules. The guards at the main gate can be... particular. Be careful, stranger.'",
      options: [
          { text: "Thank him for the warning", target: "Outskirts" }
      ]
  },
  "Outskirts": {
      title: "The City Outskirts",
      image: "https://images.unsplash.com/photo-1519819224351-f1bf141e6a25?auto=format&fit=crop&w=800&q=80",
      text: "You're on the outskirts of the great city. You can see the towering walls and hear the distant sounds of civilization. The main gate is just ahead.",
      options: [
          { text: "Approach the main gate", target: "CityGates" }
      ]
  },
  "CityGates": {
      title: "The Gates of Silverhaven",
      image: "https://images.unsplash.com/photo-1613425116127-14223c72de88?auto=format&fit=crop&w=800&q=80",
      text: "Two imposing guards block the gate. One steps forward, hand on his sword. 'Halt! State your business in Silverhaven.'",
      options: [
          { text: "Show them the Old Coin", target: "CityEntry", condition: { type: "hasItem", item: "Old Coin"} },
          { text: "Try to bribe the guards (25 Gold)", target: "CityEntryBribe", condition: { type: "hasGold", amount: 25 } },
          { text: "Leave", target: "Outskirts" }
      ]
  },
    "CityEntry": {
        title: "A Surprising Welcome",
        image: "https://images.unsplash.com/photo-1613425116127-14223c72de88?auto=format&fit=crop&w=800&q=80",
        text: "You present the Old Coin. The guard's eyes widen. 'A Founder's Coin! My apologies, citizen. Welcome to Silverhaven. The city is open to you.' The gates swing open.",
        options: [
            { text: "Enter the city", target: "CitySquare" }
        ],
        effects: { happiness: 20 }
    },
    "CityEntryBribe": {
        title: "Greasing the Palms",
        image: "https://images.unsplash.com/photo-1613425116127-14223c72de88?auto=format&fit=crop&w=800&q=80",
        text: "You discreetly pass 25 Gold to the guard. He makes it disappear and nods. 'Alright, move along. Don't cause any trouble.' The gates open just enough for you to slip through.",
        options: [
            { text: "Enter the city", target: "CitySquare" }
        ],
        effects: { gold: -25, happiness: -5 }
    },
    "CitySquare": {
        title: "Silverhaven Square",
        image: "https://images.unsplash.com/photo-1564594245192-381467475a7c?auto=format&fit=crop&w=800&q=80",
        text: "You step into a bustling city square. Merchants hawk their wares, children chase pigeons, and a grand fountain bubbles at the center. The city is alive with possibility.",
        options: [
            { text: "Visit the market", target: "Market" },
            { text: "Find the tavern", target: "Tavern" },
            { text: "Look for the guardhouse", target: "Guardhouse" },
            { text: "Investigate the ominous alley", target: "CatacombsEntrance" }
        ]
    },
    "Market": {
        title: "The Gilded Goods",
        image: "https://images.unsplash.com/photo-1580915228225-4c6a43f8df85?auto=format&fit=crop&w=800&q=80",
        text: "The market is a riot of sights, sounds, and smells. A blacksmith sells weapons and armor, an alchemist offers potions, and a general goods vendor has a bit of everything.",
        options: [
            { text: "Visit the Blacksmith", action: "shop", shopId: "blacksmith" },
            { text: "Visit the Alchemist", action: "shop", shopId: "alchemist" },
            { text: "Return to the Square", target: "CitySquare" }
        ]
    },
    "Tavern": {
        title: "The Rusty Flagon",
        image: "https://images.unsplash.com/photo-1543007185-3220260526c7?auto=format&fit=crop&w=800&q=80",
        text: "The tavern is warm and filled with the sound of laughter and lute music. You can buy a drink, rent a room to rest, or listen for rumors.",
        options: [
            { text: "Buy a drink (2 Gold)", target: "TavernDrink", condition: { type: "hasGold", amount: 2 } },
            { text: "Rent a room (15 Gold)", target: "TavernRest", condition: { type: "hasGold", amount: 15 } },
            { text: "Listen for rumors", target: "TavernRumors" },
            { text: "Leave", target: "CitySquare" }
        ]
    },
    "TavernDrink": {
        title: "A Quick Drink",
        image: "https://images.unsplash.com/photo-1543007185-3220260526c7?auto=format&fit=crop&w=800&q=80",
        text: "You slide a couple of coins to the barkeep, who serves you a frothy ale. It's not the best you've ever had, but it lifts your spirits.",
        options: [
            { text: "Back to the bar", target: "Tavern" }
        ],
        effects: { gold: -2, happiness: 10, energy: 5 }
    },
    "TavernRest": {
        title: "A Soft Bed",
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80",
        text: "You pay for a room and sink into the surprisingly comfortable bed. The night passes without incident, and you wake feeling completely refreshed.",
        options: [
            { text: "Back to the bar", target: "Tavern" }
        ],
        action: "fullHeal"
    },
    "TavernRumors": {
        title: "Whispers and Rumors",
        image: "https://images.unsplash.com/photo-1543007185-3220260526c7?auto=format&fit=crop&w=800&q=80",
        text: "You lean against the bar and listen to the chatter around you...",
        action: "random",
        options: [
            { target: "Rumor1" },
            { target: "Rumor2" },
            { target: "Rumor3" }
        ]
    },
    "Rumor1": {
        title: "The Skeletal Knight",
        text: "A grizzled prospector whispers about the catacombs. 'They say a skeletal knight guards the lower levels... wields a blade of pure shadow.'",
        options: [{ text: "Back to the bar", target: "Tavern" }]
    },
    "Rumor2": {
        title: "The Alchemist's Secret",
        text: "Two merchants are talking about the alchemist. 'She's been buying up all the silverleaf in the region. Rumor is, she's working on a potion of true invisibility.'",
        options: [{ text: "Back to the bar", target: "Tavern" }]
    },
    "Rumor3": {
        title: "The Beggar's Plea",
        text: "A beggar near the door mutters about a lost family heirloom. 'It was a simple silver locket... but it was everything to me. It must be somewhere in the catacombs.'",
        options: [
            { text: "Offer to find the locket", target: "AcceptLocketQuest", condition: { type: "questNotStarted", questId: "LostLocket" } },
            { text: "Back to the bar", target: "Tavern" }
        ]
    },
    "AcceptLocketQuest": {
        title: "A Glimmer of Hope",
        text: "The beggar's eyes light up. 'You... you would do that for me? Thank you, kind stranger. May fortune favor you.' The quest 'The Lost Locket' has been added to your journal.",
        onEnter: () => acceptQuest("LostLocket"),
        options: [{ text: "Back to the bar", target: "Tavern" }]
    },
    "Guardhouse": {
        title: "Silverhaven Guardhouse",
        image: "https://images.unsplash.com/photo-1561049289-7244c78093c3?auto=format&fit=crop&w=800&q=80",
        text: "The guardhouse is a stern stone building. Guards in shining armor drill in the courtyard. It doesn't look like a place for idle hands.",
        options: [
            { text: "Leave", target: "CitySquare" }
        ]
    },
    "CatacombsEntrance": {
        title: "The Sunken Alley",
        image: "https://images.unsplash.com/photo-1532371950395-19d5cda77666?auto=format&fit=crop&w=800&q=80",
        text: "At the back of a dark, narrow alley, you find a heavy iron grate set into the cobblestones. A cold draft seeps from below, carrying the smell of dust and death. This must be the entrance to the catacombs.",
        options: [
            { text: "Descend into the darkness", target: "Catacombs_Level1_Start" },
            { text: "Leave the alley", target: "CitySquare" }
        ]
    },
    // --- CATACOMBS LEVEL 1 ---
    "Catacombs_Level1_Start": {
        title: "The First Descent",
        image: "https://images.unsplash.com/photo-1546156923-45a762492a28?auto=format&fit=crop&w=800&q=80",
        text: "You descend a crumbling stone staircase into the darkness. The air is stale and thick with the silence of the dead. The passage ahead splits.",
        options: [
            { text: "Go left", target: "Catacombs_L1_Hallway" },
            { text: "Go right", target: "Catacombs_L1_SarcophagusRoom" },
            { text: "Climb back to the city", target: "CitySquare" }
        ]
    },
    "Catacombs_L1_Hallway": {
        title: "Dusty Hallway",
        image: "https://images.unsplash.com/photo-1546156923-45a762492a28?auto=format&fit=crop&w=800&q=80",
        text: "A long hallway stretches before you, lined with empty burial niches. The sound of rattling bones echoes from the far end.",
        options: [
            { text: "Proceed cautiously", target: "Catacombs_L1_SkeletonEncounter" },
            { text: "Go back", target: "Catacombs_Level1_Start" }
        ]
    },
    "Catacombs_L1_SkeletonEncounter": {
        title: "Rattling Bones",
        monster: "Skeleton",
        text: "As you move down the hall, a skeleton animated by dark magic lurches out of a niche, its empty eye sockets fixed on you.",
        options: []
    },
    "Catacombs_L1_DeadEnd": {
        title: "A Dead End",
        image: "https://images.unsplash.com/photo-1546156923-45a762492a28?auto=format&fit=crop&w=800&q=80",
        text: "The hallway ends in a collapse. Searching the rubble, you find a small, ornate key.",
        item: "Rusted Key",
        options: [
            { text: "Go back", target: "Catacombs_L1_Hallway" }
        ]
    },
    "Catacombs_L1_SarcophagusRoom": {
        title: "Sarcophagus Room",
        image: "https://images.unsplash.com/photo-1517984928543-85d02a2656a8?auto=format&fit=crop&w=800&q=80",
        text: "This circular room is dominated by a large, stone sarcophagus. On the far side is a heavy, rusted iron door.",
        options: [
            { text: "Try to open the sarcophagus", target: "Catacombs_L1_ZombieEncounter" },
            { text: "Try the iron door", target: "Catacombs_L1_LockedDoor" },
            { text: "Go back", target: "Catacombs_Level1_Start" }
        ]
    },
    "Catacombs_L1_ZombieEncounter": {
        title: "The Lid Grinds Open",
        monster: "Zombie",
        text: "With a great effort, you push the lid of the sarcophagus aside. The groaning, preserved corpse of a long-dead warrior sits up and lunges at you!",
        options: []
    },
    "Catacombs_L1_EmptySarcophagus": {
        title: "An Empty Tomb",
        image: "https://images.unsplash.com/photo-1517984928543-85d02a2656a8?auto=format&fit=crop&w=800&q=80",
        text: "The zombie is defeated. You look inside the sarcophagus. Amidst the dust and cobwebs, a small, silver locket glints in the corner.",
        item: "Silver Locket",
        options: [
            { text: "Try the iron door", target: "Catacombs_L1_LockedDoor" },
            { text: "Go back", target: "Catacombs_Level1_Start" }
        ]
    },
    "Catacombs_L1_LockedDoor": {
        title: "The Iron Door",
        image: "https://images.unsplash.com/photo-1574933934529-3a13375753a8?auto=format&fit=crop&w=800&q=80",
        text: "The large iron door is sealed shut with a heavy, rusted lock.",
        options: [
            { text: "Use the Rusted Key", target: "Catacombs_L1_BossRoom", condition: { type: "hasItem", item: "Rusted Key" } },
            { text: "Leave the door", target: "Catacombs_L1_SarcophagusRoom" }
        ]
    },
    "Catacombs_L1_BossRoom": {
        title: "The Knight's Antechamber",
        image: "https://images.unsplash.com/photo-1574933934529-3a8a13375753a8?auto=format&fit=crop&w=800&q=80",
        text: "The key turns with a loud CLUNK. The door swings open into a large, vaulted chamber. In the center, a towering skeleton in plate armor rises to its feet, drawing a greatsword that seems to be forged from shadows.",
        monster: "Skeletal Knight",
        options: []
    },
    "Catacombs_L1_Victory": {
        title: "The Knight's Defeat",
        image: "https://images.unsplash.com/photo-1574933934529-3a8a13375753a8?auto=format&fit=crop&w=800&q=80",
        text: "The Skeletal Knight shatters into a pile of dust and cursed armor. Behind its throne, you find a gleaming sword, the Shadow Blade, and a passage leading deeper into the catacombs.",
        item: "Shadow Blade",
        options: [
            { text: "Descend to the next level", target: "Catacombs_Level2_Start" }
        ]
    },

    // --- CATACOMBS LEVEL 2 ---
    "Catacombs_Level2_Start": {
        title: "The Second Level",
        image: "https://source.unsplash.com/800x600/?dark,crypt",
        text: "The stairs lead you deeper into the earth. The air here is colder, and a faint, unnatural mist clings to the floor. You hear a low moaning from a hallway to your left.",
        options: [
            { text: "Go towards the moaning", target: "Catacombs_L2_GhoulHall" },
            { text: "Take the other path", target: "Catacombs_L2_PuzzleRoom" },
            { text: "Return to the first level", target: "Catacombs_L1_Victory" }
        ]
    },
    "Catacombs_L2_GhoulHall": {
        title: "The Ghoul's Hall",
        image: "https://source.unsplash.com/800x600/?dark,dungeon,hallway",
        text: "The hallway is littered with gnawed bones. A hunched, grotesque creature with long claws is feasting on a corpse. It turns its head and hisses at you.",
        monster: "Ghoul",
        options: []
    },
    "Catacombs_L2_GhoulLair": {
        title: "The Ghoul's Lair",
        image: "https://source.unsplash.com/800x600/?dark,dungeon,lair",
        text: "You have defeated the ghoul. In the filth of its lair, you find a sturdy-looking shield.",
        item: "Iron Shield",
        options: [
            { text: "Continue down the hall", target: "Catacombs_L2_FloodedRoom" }
        ]
    },
    "Catacombs_L2_PuzzleRoom": {
        title: "The Room of Scales",
        image: "https://source.unsplash.com/800x600/?dungeon,puzzle",
        text: "You enter a room with a large, sealed stone door. In front of it are three pressure plates. An inscription reads: 'Only the humble may pass.'",
        options: [
            { text: "Step on the left plate", action: "puzzle", puzzleId: "scales", choice: "left" },
            { text: "Step on the middle plate", action: "puzzle", puzzleId: "scales", choice: "middle" },
            { text: "Step on the right plate", action: "puzzle", puzzleId: "scales", choice: "right" },
            { text: "Leave the room", target: "Catacombs_Level2_Start" }
        ]
    },
    "Catacombs_L2_Puzzle_Fail": {
        title: "A Fool's Choice",
        image: "https://source.unsplash.com/800x600/?dungeon,trap",
        text: "You step on the plate, and a volley of poison darts shoots from the walls!",
        effects: { health: -30 },
        options: [
            { text: "Try again", target: "Catacombs_L2_PuzzleRoom" }
        ]
    },
    "Catacombs_L2_Puzzle_Success": {
        title: "The Way is Open",
        image: "https://source.unsplash.com/800x600/?dungeon,door,open",
        text: "You step on the plate, and with a low groan, the stone door grinds open, revealing a treasure room.",
        options: [
            { text: "Enter the treasure room", target: "Catacombs_L2_Treasure" }
        ]
    },
    "Catacombs_L2_Treasure": {
        title: "The Hidden Treasury",
        image: "https://source.unsplash.com/800x600/?treasure,chest",
        text: "The room contains a single, iron-bound chest. You open it to find a finely crafted set of chainmail armor.",
        item: "Chainmail Armor",
        options: [
            { text: "Return to the puzzle room", target: "Catacombs_L2_PuzzleRoom" }
        ]
    }
};

const items = {
    "Rusty Sword": { type: "weapon", attack: 5, description: "An old and notched, but serviceable sword.", value: 10 },
    "Iron Sword": { type: "weapon", attack: 10, description: "A simple but sturdy iron sword.", value: 50 },
    "Shadow Blade": { type: "weapon", attack: 20, description: "A blade forged from shadows, humming with dark energy.", value: 200 },
    "Leather Armor": { type: "armor", defense: 5, description: "Hardened leather armor.", value: 40 },
    "Chainmail Armor": { type: "armor", defense: 10, description: "A full set of interlocking iron rings.", value: 120 },
    "Iron Shield": { type: "armor", defense: 2, description: "A simple but effective iron shield.", value: 30 },
    "Rusted Key": { type: "key", description: "A small, ornate key, covered in rust." },
    "Glowing Petal": { type: "trinket", description: "Glows with a soft, warm light.", value: 5 },
    "Old Coin": { type: "quest", description: "A shiny coin from a forgotten era.", value: 0 },
    "Silver Locket": { type: "quest", description: "A simple silver locket, clearly cherished.", value: 0 },
    "Health Potion": { type: "potion", effect: "health", amount: 30, description: "A vial of red liquid that restores health.", value: 20 }
};

const quests = {
    "LostLocket": {
        title: "The Lost Locket",
        description: "A beggar in the city square has lost a precious silver locket. He believes it might be somewhere in the catacombs.",
        objective: { type: "hasItem", item: "Silver Locket" },
        reward: { gold: 50, xp: 20 }
    }
};

const shops = {
    "blacksmith": {
        name: "The Steel Sentinel",
        inventory: ["Iron Sword", "Leather Armor", "Iron Shield"]
    },
    "alchemist": {
        name: "The Bubbling Beaker",
        inventory: ["Health Potion"]
    }
}

const monsters = {
    "Giant Rat": {
        health: 30,
        attack: 5,
        xp: 10,
        gold: 5,
        image: "https://place-hold.it/800x600/a85a32/ffffff?text=Giant+Rat",
        deathText: "The giant rat squeals and collapses.",
        nextPassage: "CaveInterior"
    },
    "Wolf": {
        health: 50,
        attack: 8,
        xp: 20,
        gold: 10,
        image: "https://place-hold.it/800x600/607d8b/ffffff?text=Wolf",
        deathText: "The wolf whimpers and falls still.",
        nextPassage: "PlainsAftermath"
    },
    "Swamp Tentacle": {
        health: 70,
        attack: 12,
        xp: 25,
        gold: 15,
        image: "https://place-hold.it/800x600/4caf50/ffffff?text=Swamp+Tentacle",
        deathText: "The tentacle recoils with a gurgle and sinks back into the murky water.",
        nextPassage: "SwampAftermath"
    },
    "Skeleton": {
        health: 40,
        attack: 10,
        xp: 15,
        gold: 8,
        image: "https://place-hold.it/800x600/e0e0e0/000000?text=Skeleton",
        deathText: "The skeleton clatters into a pile of bones.",
        nextPassage: "Catacombs_L1_DeadEnd"
    },
    "Zombie": {
        health: 60,
        attack: 8,
        xp: 20,
        gold: 12,
        image: "https://place-hold.it/800x600/795548/ffffff?text=Zombie",
        deathText: "The zombie groans and falls silent.",
        nextPassage: "Catacombs_L1_EmptySarcophagus"
    },
    "Skeletal Knight": {
        health: 100,
        attack: 15,
        xp: 50,
        gold: 50,
        image: "https://place-hold.it/800x600/212121/ffffff?text=Skeletal+Knight",
        deathText: "The Skeletal Knight shatters into a pile of dust and cursed armor.",
        nextPassage: "Catacombs_L1_Victory"
    },
    "Ghoul": {
        health: 80,
        attack: 18,
        xp: 40,
        gold: 30,
        image: "https://place-hold.it/800x600/9e9e9e/000000?text=Ghoul",
        deathText: "The ghoul lets out a final, wretched scream and dissolves into shadow.",
        nextPassage: "Catacombs_L2_GhoulLair"
    }
};

const xpPerLevel = [0, 10, 30, 60, 100, 200]; // XP needed to reach level 1, 2, 3, 4, 5

// --- GAME LOGIC ---

let player = {};

function initializePlayer() {
    player = {
        stats: { health: 100, mana: 80, energy: 100, happiness: 50 },
        maxStats: { health: 100, mana: 80, energy: 100, happiness: 100 },
        baseAttack: 5,
        defense: 0,
        level: 1,
        xp: 0,
        gold: 20,
        inventory: [],
        equipment: { weapon: null, armor: null },
        quests: {}, // status: 'active', 'completed'
        visits: {},
        currentPassage: "Start",
        history: [],
        forwardHistory: []
    };
}

function getPlayerAttack() {
    let attack = player.baseAttack;
    if (player.equipment.weapon && items[player.equipment.weapon]) {
        attack += items[player.equipment.weapon].attack;
    }
    return attack;
}

function getPlayerDefense() {
    let defense = player.defense;
    if (player.equipment.armor && items[player.equipment.armor]) {
        defense += items[player.equipment.armor].defense;
    }
    return defense;
}

function clamp(value, min = 0, max = 100) {
  return Math.min(max, Math.max(min, value));
}

function updateAllUI() {
    updateStats();
    updateVisitList();
    updateInventory();
    updateQuestList();
}

function updateStats() {
  for (const stat in player.stats) {
    const val = clamp(player.stats[stat], 0, player.maxStats[stat]);
    document.getElementById(`${stat}-val`).textContent = val;
    document.getElementById(`${stat}-bar`).style.width = (val / player.maxStats[stat] * 100) + '%';
  }
  document.getElementById('level-val').textContent = player.level;
  document.getElementById('xp-val').textContent = `${player.xp} / ${xpPerLevel[player.level] || 'Max'}`;
}

function updateInventory() {
    const ul = document.getElementById('inventory-list');
    ul.innerHTML = '';
    if (player.inventory.length === 0) {
        ul.innerHTML = '<li>Empty</li>';
    } else {
        player.inventory.forEach(itemName => {
            const item = items[itemName];
            if (!item) return; // Skip if item not found

            const li = document.createElement('li');
            let text = itemName;
            const isEquipped = player.equipment.weapon === itemName || player.equipment.armor === itemName;

            if (isEquipped) {
                text += " (Equipped)";
            }
            li.textContent = text;

            if (item.type === 'weapon' || item.type === 'armor') {
                li.classList.add('equippable');
                li.dataset.itemName = itemName;
                li.addEventListener('click', () => equipItem(itemName));
            }

            let tooltipText = item.description;
            if (item.attack) tooltipText += ` | Attack: ${item.attack}`;
            if (item.defense) tooltipText += ` | Defense: ${item.defense}`;
            if (item.value) tooltipText += ` | Value: ${item.value}`;

            const tooltip = document.createElement('span');
            tooltip.className = 'tooltip';
            tooltip.textContent = tooltipText;
            li.appendChild(tooltip);

            ul.appendChild(li);
        });
    }
    const goldLi = document.createElement('li');
    goldLi.innerHTML = `<strong>Gold:</strong> ${player.gold}`;
    ul.appendChild(goldLi);
}

function equipItem(itemName) {
    const item = items[itemName];
    if (!item || (item.type !== 'weapon' && item.type !== 'armor')) {
        return;
    }

    const itemType = item.type; // 'weapon' or 'armor'

    // If the item is already equipped, unequip it
    if (player.equipment[itemType] === itemName) {
        player.equipment[itemType] = null;
    } else {
        // Otherwise, equip it
        player.equipment[itemType] = itemName;
    }

    // A full UI refresh is the simplest way to show all changes
    updateAllUI();
}

function updateQuestList() {
    const ul = document.getElementById('quest-list');
    ul.innerHTML = '';
    const activeQuests = Object.keys(player.quests).filter(qId => player.quests[qId] && player.quests[qId].status === 'active');

    if (activeQuests.length === 0) {
        ul.innerHTML = '<li>No active quests.</li>';
    } else {
        activeQuests.forEach(questId => {
            const quest = quests[questId];
            const li = document.createElement('li');
            li.textContent = quest.title;

            const tooltip = document.createElement('span');
            tooltip.className = 'tooltip';
            tooltip.textContent = quest.description;
            li.appendChild(tooltip);

            ul.appendChild(li);
        });
    }
}

function acceptQuest(questId) {
    if (quests[questId] && !player.quests[questId]) {
        player.quests[questId] = { status: 'active' };
        updateQuestList();
    }
}

function checkQuestCompletion() {
    const activeQuests = Object.keys(player.quests).filter(qId => player.quests[qId] && player.quests[qId].status === 'active');
    activeQuests.forEach(questId => {
        const quest = quests[questId];
        const objective = quest.objective;
        let completed = false;

        if (objective.type === 'hasItem' && player.inventory.includes(objective.item)) {
            completed = true;
        }
        // Future quest types could be added here

        if (completed) {
            completeQuest(questId);
        }
    });
}

function completeQuest(questId) {
    if (!player.quests[questId] || player.quests[questId].status === 'completed') return; // Don't complete twice

    player.quests[questId].status = 'completed';
    const quest = quests[questId];

    let rewardText = "";
    if (quest.reward.gold) {
        player.gold += quest.reward.gold;
        rewardText += `${quest.reward.gold} gold`;
    }
    if (quest.reward.xp) {
        player.xp += quest.reward.xp;
        if (rewardText) rewardText += " and ";
        rewardText += `${quest.reward.xp} XP`;
    }

    // This will be replaced by the modal system later.
    showModal({
        title: "Quest Complete!",
        text: `<strong>${quest.title}</strong><br>You received ${rewardText}.`,
        buttons: [{ text: "Continue", value: () => true }]
    });

    // Remove quest item from inventory
    const objective = quest.objective;
    if (objective.type === 'hasItem') {
        const itemIndex = player.inventory.indexOf(objective.item);
        if (itemIndex > -1) {
            player.inventory.splice(itemIndex, 1);
        }
    }

    levelUp();
    updateAllUI(); // Full UI update to reflect all changes
}

function updateVisitList() {
  const ul = document.getElementById('visit-list');
  ul.innerHTML = '';
  const uniqueVisits = [...new Set(Object.keys(player.visits).map(p => passages[p] ? passages[p].title : p))];
  uniqueVisits.forEach(title => {
      if (title) {
        const li = document.createElement('li');
        li.textContent = title;
        ul.appendChild(li);
      }
  });
}

function showDeathScreen() {
    const storyDiv = document.getElementById('story');
    storyDiv.innerHTML = `
        <article role="article" aria-label="You Died">
            <h1 class="passage-title">You Have Died</h1>
            <img class="passage-image" src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=800&q=80" alt="Death image" />
            <p class="passage-text">Your adventure has come to a premature end. But every end is a new beginning.</p>
            <nav class="nav-buttons" role="navigation" aria-label="Choices">
                <a href="#" data-target="Start">Restart</a>
            </nav>
        </article>
    `;
    storyDiv.querySelector('a').addEventListener('click', e => {
        e.preventDefault();
        restartGame();
    });
}

function restartGame() {
    initializePlayer();
    updateAllUI();
    renderPassage("Start", true);
}

function checkCondition(condition) {
    if (!condition) return true;

    if (condition.type === "hasItem" && player.inventory.includes(condition.item)) {
        return true;
    }
    if (condition.type === "hasGold" && player.gold >= condition.amount) {
        return true;
    }
    if (condition.type === "questNotStarted" && (!player.quests[condition.questId] || player.quests[condition.questId].status !== 'completed')) {
        return !player.quests[condition.questId];
    }
    return false;
}

function levelUp() {
    while (player.level < xpPerLevel.length - 1 && player.xp >= xpPerLevel[player.level]) {
        player.level++;
        player.maxStats.health += 10;
        player.stats.health = player.maxStats.health; // Full heal on level up
        player.baseAttack += 2;
        showModal({
            title: "Level Up!",
            text: `Congratulations! You have reached Level ${player.level}!<br>Your max health and base attack have increased.`,
            buttons: [{ text: "Awesome!", value: () => true }]
        });
    }
}

function handlePuzzle(puzzleId, choice) {
    if (puzzleId === 'scales') {
        if (choice === 'middle') { // The 'humble' choice
            renderPassage('Catacombs_L2_Puzzle_Success', false);
        } else {
            renderPassage('Catacombs_L2_Puzzle_Fail', false);
        }
    }
}

function renderPassage(passageName, isHistoryNavigation = false) {
  if (!isHistoryNavigation && passageName !== player.currentPassage) {
    player.history.push(player.currentPassage);
    player.forwardHistory = [];
  }
  player.currentPassage = passageName;
  const passage = passages[passageName];

  if (passage && passage.onEnter) {
    passage.onEnter();
  }

  if (!passage) {
      console.error("Passage not found: " + passageName);
      renderPassage("Start", true); // Avoid history loop
      return;
  }

  if (passage.action) {
      switch (passage.action) {
          case "fullHeal":
              player.stats.health = player.maxStats.health;
              player.stats.mana = player.maxStats.mana;
              player.stats.energy = player.maxStats.energy;
              player.gold -= 15;
              break;
          case "random":
              const randomOption = passage.options[Math.floor(Math.random() * passage.options.length)];
              const parentText = passage.text;
              const childPassage = passages[randomOption.target];
              const storyDiv = document.getElementById('story');
              storyDiv.innerHTML = `
                <article role="article" aria-label="${childPassage.title}">
                  <h1 class="passage-title">${childPassage.title}</h1>
                  <img class="passage-image" src="${passage.image}" alt="${passage.title} image" />
                  <p class="passage-text">${parentText}<br><br><em>"${childPassage.text}"</em></p>
                  <nav class="nav-buttons" role="navigation" aria-label="Choices">
                    ${childPassage.options.map(opt => `<a href="#" data-target="${opt.target}">${opt.text}</a>`).join('')}
                  </nav>
                </article>
              `;
              storyDiv.querySelector('a').addEventListener('click', e => {
                  e.preventDefault();
                  renderPassage(e.target.getAttribute('data-target'), false);
              });
              updateAllUI();
              return;
      }
  }


  if (passageName === "Start" && Object.keys(player.visits).length > 0) {
      restartGame();
      return;
  }

  if (!player.visits[passageName]) {
      player.visits[passageName] = 0;
  }
  player.visits[passageName]++;

  if (passage.effects) {
      for(const effect in passage.effects) {
          if(player.stats[effect] !== undefined) {
              player.stats[effect] = clamp(player.stats[effect] + passage.effects[effect], 0, player.maxStats[effect]);
          } else if (player[effect] !== undefined) {
              player[effect] += passage.effects[effect];
          }
      }
  }

  if (passage.item && !player.inventory.includes(passage.item)) {
      player.inventory.push(passage.item);
      checkQuestCompletion(); // Check if this item completes a quest
  }

  updateAllUI();
  updateHistoryButtons();

  if (player.stats.health <= 0) {
      showDeathScreen();
      return;
  }

  const monsterName = passage.monster;
  if (monsterName) {
      startCombat(monsterName);
      return;
  }

  const storyDiv = document.getElementById('story');
  const availableOptions = passage.options.filter(opt => checkCondition(opt.condition));

  storyDiv.innerHTML = `
    <article role="article" aria-label="${passage.title}">
      <h1 class="passage-title">${passage.title}</h1>
      <img class="passage-image" src="${passage.image}" alt="${passage.title} image" />
      <p class="passage-text">${passage.text}</p>
      <nav class="nav-buttons" role="navigation" aria-label="Choices">
        ${availableOptions.map(opt => `<a href="#" data-target="${opt.target}" data-action="${opt.action || ''}" data-shopid="${opt.shopId || ''}" data-puzzleid="${opt.puzzleId || ''}" data-choice="${opt.choice || ''}">${opt.text}</a>`).join('')}
      </nav>
    </article>
  `;

  storyDiv.querySelectorAll('.nav-buttons a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = e.target.getAttribute('data-target');
      const action = e.target.getAttribute('data-action');
      const shopId = e.target.getAttribute('data-shopid');
      const puzzleId = e.target.getAttribute('data-puzzleid');
      const choice = e.target.getAttribute('data-choice');

      if (action === 'shop') {
          renderShop(shopId);
      } else if (action === 'puzzle') {
          handlePuzzle(puzzleId, choice);
      } else {
          renderPassage(target, false);
      }
    });
  });
}

function renderShop(shopId) {
    const shop = shops[shopId];
    const storyDiv = document.getElementById('story');
    let shopItemsHtml = "";

    shop.inventory.forEach(itemName => {
        const item = items[itemName];
        if (!player.inventory.includes(itemName)) {
            shopItemsHtml += `<li>${itemName} - ${item.description} (${item.value} Gold) <button class="buy-btn" data-item="${itemName}">Buy</button></li>`;
        }
    });

    if (shopItemsHtml === "") {
        shopItemsHtml = "<li>You've bought everything I have!</li>";
    }

    storyDiv.innerHTML = `
        <article role="article" aria-label="${shop.name}">
            <h1 class="passage-title">${shop.name}</h1>
            <div class="passage-text">
                <p>Welcome! What can I get for you? (You have ${player.gold} Gold)</p>
                <ul>${shopItemsHtml}</ul>
            </div>
            <nav class="nav-buttons">
                <a href="#" id="leave-shop-btn">Leave</a>
            </nav>
        </article>
    `;

    document.getElementById('leave-shop-btn').addEventListener('click', e => {
        e.preventDefault();
        renderPassage('Market', false);
    });

    storyDiv.querySelectorAll('.buy-btn').forEach(button => {
        button.addEventListener('click', e => {
            e.preventDefault();
            const itemName = e.target.getAttribute('data-item');
            buyItem(itemName, shopId);
        });
    });
}

function buyItem(itemName, shopId) {
    const item = items[itemName];
    if (player.gold >= item.value) {
        player.gold -= item.value;
        player.inventory.push(itemName);
        if (item.type === 'weapon') {
            player.equipment.weapon = itemName;
        } else if (item.type === 'armor') {
            player.equipment.armor = itemName;
        }
        updateAllUI();
        renderShop(shopId);
    } else {
        showModal({
            title: "Transaction Failed",
            text: "You don't have enough gold to purchase this item.",
            buttons: [{ text: "OK", value: () => true }]
        });
    }
}


function startCombat(monsterName) {
    let monster = { ...monsters[monsterName] };
    const storyDiv = document.getElementById('story');
    let combatLog = `A wild ${monsterName} appears!`;

    function renderCombatUI() {
        storyDiv.innerHTML = `
            <article role="article" aria-label="Combat with ${monsterName}">
                <h1 class="passage-title">In Combat!</h1>
                <img class="passage-image" src="${monster.image}" alt="${monsterName} image" />
                <div class="passage-text">
                    <p><strong>${monsterName}</strong> | Health: ${monster.health}</p>
                    <p><strong>You</strong> | Health: ${player.stats.health}</p>
                    <hr>
                    <p>${combatLog}</p>
                </div>
                <nav class="nav-buttons" role="navigation" aria-label="Combat Choices">
                    <a href="#" id="attack-btn">Attack</a>
                    <a href="#" id="flee-btn">Flee</a>
                </nav>
            </article>
        `;

        document.getElementById('attack-btn').addEventListener('click', e => { e.preventDefault(); handlePlayerAttack(); });
        document.getElementById('flee-btn').addEventListener('click', e => { e.preventDefault(); handleFlee(); });
    }

    function handlePlayerAttack() {
        const playerDamage = getPlayerAttack();
        monster.health -= playerDamage;
        combatLog = `You strike the ${monsterName} for ${playerDamage} damage.`;

        if (monster.health <= 0) {
            winCombat();
            return;
        }

        renderCombatUI();
        setTimeout(handleMonsterAttack, 1000);
    }

    function handleMonsterAttack() {
        const monsterDamage = Math.max(0, monster.attack - getPlayerDefense());
        player.stats.health = clamp(player.stats.health - monsterDamage, 0, player.maxStats.health);
        combatLog = `The ${monsterName} retaliates, hitting you for ${monsterDamage} damage.`;

        updateStats();

        if (player.stats.health <= 0) {
            showDeathScreen();
            return;
        }
        renderCombatUI();
    }

    function handleFlee() {
        if (Math.random() > 0.5) {
            combatLog = "You successfully escaped!";
            goBack();
        } else {
            combatLog = "You failed to escape!";
            renderCombatUI();
            setTimeout(handleMonsterAttack, 1000);
        }
    }

    function winCombat() {
        player.xp += monster.xp;
        if(monster.gold) {
            player.gold += monster.gold;
        }
        levelUp();
        combatLog = monster.deathText;

        const storyDiv = document.getElementById('story');
        storyDiv.innerHTML = `
            <article role="article" aria-label="Victory">
              <h1 class="passage-title">Victory!</h1>
              <img class="passage-image" src="${monster.image}" alt="${monsterName} image" />
              <p class="passage-text">${combatLog}<br>You gained ${monster.xp} XP and ${monster.gold || 0} gold.</p>
              <nav class="nav-buttons">
                <a href="#" id="continue-btn">Continue</a>
                <a href="#" id="leave-btn">Leave Area</a>
              </nav>
            </article>
        `;
        document.getElementById('continue-btn').addEventListener('click', e => {
            e.preventDefault();
            renderPassage(monster.nextPassage || player.currentPassage, false);
        });
        document.getElementById('leave-btn').addEventListener('click', e => {
            e.preventDefault();
            goBack();
        });
        updateAllUI();
    }

    renderCombatUI();
}

async function saveGame() {
    try {
        localStorage.setItem('textAdventureSaveData', JSON.stringify(player));
        await showModal({
            title: "Game Saved",
            text: "Your progress has been saved successfully.",
            buttons: [{ text: "OK", value: () => true }]
        });
    } catch (e) {
        console.error('Sorry, your game could not be saved.', e);
        await showModal({
            title: "Save Failed",
            text: "Sorry, your game could not be saved. Your browser might not support local storage or it might be full.",
            buttons: [{ text: "OK", value: () => true }]
        });
    }
}

async function newGame() {
    const confirmed = await showModal({
        title: "New Game",
        text: "Are you sure you want to start a new game? This will erase any saved progress.",
        buttons: [
            { text: "Cancel", class: "secondary", value: () => false },
            { text: "Start New Game", value: () => true }
        ]
    });
    if (confirmed) {
        localStorage.removeItem('textAdventureSaveData');
        restartGame();
    }
}

async function loadGame() {
    try {
        const savedData = localStorage.getItem('textAdventureSaveData');
        if (savedData) {
            player = JSON.parse(savedData);
            await showModal({
                title: "Game Loaded",
                text: "Your saved game has been loaded successfully.",
                buttons: [{ text: "Continue", value: () => true }]
            });
            // After loading, we need to re-render the current state
            updateAllUI();
            renderPassage(player.currentPassage, true);
            updateHistoryButtons();
        } else {
            await showModal({
                title: "Load Failed",
                text: "No saved game data was found.",
                buttons: [{ text: "OK", value: () => true }]
            });
        }
    } catch (e) {
        console.error('Sorry, your game could not be loaded.', e);
        await showModal({
            title: "Load Error",
            text: "Sorry, your game could not be loaded. The save data might be corrupted.",
            buttons: [{ text: "OK", value: () => true }]
        });
    }
}

async function applyCheat() {
    const password = await showModal({
        title: "Cheat Code",
        text: "Enter the secret code to activate cheats.",
        input: { placeholder: "Code..." },
        buttons: [
            { text: "Cancel", class: "secondary", value: () => null },
            { text: "Activate", value: (inputValue) => inputValue }
        ]
    });

    if (password === "JULES") {
        player.stats = { ...player.maxStats };
        player.gold = 9999;
        player.level = xpPerLevel.length - 1;
        player.xp = xpPerLevel[xpPerLevel.length - 1];

        const allItems = Object.keys(items);
        player.inventory = [...new Set([...player.inventory, ...allItems])];

        await showModal({
            title: "Cheats Activated",
            text: "You are now a god. Go have fun.",
            buttons: [{ text: "Nice.", value: () => true }]
        });
        updateAllUI();
    } else if (password !== null) { // Don't show alert if user cancels the prompt
        await showModal({
            title: "Access Denied",
            text: "The code you entered is incorrect.",
            buttons: [{ text: "OK", value: () => true }]
        });
    }
}

function goBack() {
    if (player.history.length > 0) {
        player.forwardHistory.push(player.currentPassage);
        const previousPassageName = player.history.pop();
        renderPassage(previousPassageName, true);
    }
}

function goForward() {
    if (player.forwardHistory.length > 0) {
        player.history.push(player.currentPassage);
        const nextPassageName = player.forwardHistory.pop();
        renderPassage(nextPassageName, true);
    }
}

function updateHistoryButtons() {
    document.getElementById('back-btn').disabled = player.history.length === 0;
    document.getElementById('forward-btn').disabled = player.forwardHistory.length === 0;
}

function showModal({ title, text, input, buttons }) {
    return new Promise(resolve => {
        const backdrop = document.getElementById('modal-backdrop');
        const titleEl = document.getElementById('modal-title');
        const textEl = document.getElementById('modal-text');
        const inputContainer = document.getElementById('modal-input-container');
        const buttonsContainer = document.getElementById('modal-buttons');

        titleEl.textContent = title;
        textEl.innerHTML = text; // Use innerHTML to allow for line breaks
        inputContainer.innerHTML = '';
        buttonsContainer.innerHTML = '';

        if (input) {
            const inputEl = document.createElement('input');
            inputEl.type = input.type || 'text';
            inputEl.placeholder = input.placeholder || '';
            inputContainer.appendChild(inputEl);
        }

        buttons.forEach(button => {
            const btnEl = document.createElement('button');
            btnEl.textContent = button.text;
            btnEl.className = button.class || '';
            btnEl.addEventListener('click', () => {
                const inputValue = input ? inputContainer.querySelector('input').value : null;
                backdrop.classList.add('hidden');
                resolve(button.value(inputValue));
            });
            buttonsContainer.appendChild(btnEl);
        });

        backdrop.classList.remove('hidden');
    });
}

function initializeGame() {
    // Attach event listeners
    document.getElementById('save-btn').addEventListener('click', e => {
        e.preventDefault();
        saveGame();
    });

    document.getElementById('load-btn').addEventListener('click', e => {
        e.preventDefault();
        loadGame();
    });

    document.getElementById('new-game-btn').addEventListener('click', e => {
        e.preventDefault();
        newGame();
    });

    document.getElementById('cheat-btn').addEventListener('click', e => {
        e.preventDefault();
        applyCheat();
    });

    document.getElementById('back-btn').addEventListener('click', e => {
        e.preventDefault();
        goBack();
    });

    document.getElementById('forward-btn').addEventListener('click', e => {
        e.preventDefault();
        goForward();
    });

    const savedData = localStorage.getItem('textAdventureSaveData');
    if (savedData) {
        showModal({
            title: "Welcome Back!",
            text: "A previous game was found. Would you like to load it?",
            buttons: [
                { text: "Start New Game", class: "secondary", value: () => "new" },
                { text: "Load Game", value: () => "load" }
            ]
        }).then(choice => {
            if (choice === 'load') {
                loadGame();
            } else {
                initializePlayer();
                updateAllUI();
                renderPassage("Start", true);
            }
        });
    } else {
        // Start a new game
        initializePlayer();
        updateAllUI();
        renderPassage("Start", true);
    }

    const collapseBtn = document.getElementById('collapse-btn');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content-wrapper');

    collapseBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        content.classList.toggle('collapsed');
        if (sidebar.classList.contains('collapsed')) {
            collapseBtn.innerHTML = '>';
        } else {
            collapseBtn.innerHTML = '<';
        }
    });

    updateHistoryButtons();
}

// --- START GAME ---
initializeGame();
