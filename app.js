// Sample fallback champions (always available)
const FALLBACK_CHAMPIONS = [
  { id: 'Ahri', name: 'Ahri', title: 'The Nine-Tailed Fox', role: 'Mage', tags: ['Mage'], race: 'Spirit', affiliation: 'Ionia' },
  { id: 'Akali', name: 'Akali', title: 'The Rogue Assassin', role: 'Assassin', tags: ['Assassin'], race: 'Human', affiliation: 'Ionia' },
  { id: 'Annie', name: 'Annie', title: 'The Dark Child', role: 'Mage', tags: ['Mage'], race: 'Human', affiliation: 'Noxus' },
  { id: 'Ashe', name: 'Ashe', title: 'The Frost Archer', role: 'Marksman', tags: ['Marksman'], race: 'Human', affiliation: 'Freljord' },
  { id: 'Aatrox', name: 'Aatrox', title: 'The Darkin Blade', role: 'Fighter', tags: ['Fighter'], race: 'Demon', affiliation: 'Noxus' },
  { id: 'Anivia', name: 'Anivia', title: 'The Cryophoenix', role: 'Mage', tags: ['Mage'], race: 'Spirit', affiliation: 'Freljord' },
  { id: 'Blitzcrank', name: 'Blitzcrank', title: 'The Great Steam Golem', role: 'Support', tags: ['Support'], race: 'Golem', affiliation: 'Zaun' },
  { id: 'Brand', name: 'Brand', title: 'The Burning Vengeance', role: 'Mage', tags: ['Mage'], race: 'Human', affiliation: 'Noxus' },
  { id: 'Braum', name: 'Braum', title: 'The Heart of the Freljord', role: 'Support', tags: ['Support'], race: 'Human', affiliation: 'Freljord' },
  { id: 'Caitlyn', name: 'Caitlyn', title: 'The Sheriff of Piltover', role: 'Marksman', tags: ['Marksman'], race: 'Human', affiliation: 'Piltover' },
  { id: 'Camille', name: 'Camille', title: 'The Steel Shadow', role: 'Fighter', tags: ['Fighter'], race: 'Human', affiliation: 'Piltover' },
  { id: 'Cassiopeia', name: 'Cassiopeia', title: 'The Serpent\'s Embrace', role: 'Mage', tags: ['Mage'], race: 'Naga', affiliation: 'Noxus' },
  { id: 'ChoGath', name: 'Cho\'Gath', title: 'The Terror of the Void', role: 'Tank', tags: ['Tank'], race: 'Void', affiliation: 'Void' },
  { id: 'Corki', name: 'Corki', title: 'The Daring Bombardier', role: 'Marksman', tags: ['Marksman'], race: 'Yordle', affiliation: 'Piltover' },
  { id: 'Darius', name: 'Darius', title: 'The Hand of Noxus', role: 'Fighter', tags: ['Fighter'], race: 'Human', affiliation: 'Noxus' },
  { id: 'Diana', name: 'Diana', title: 'Scorn of the Moon', role: 'Fighter', tags: ['Fighter'], race: 'Human', affiliation: 'Targon' },
  { id: 'Draven', name: 'Draven', title: 'The Glorious Executioner', role: 'Marksman', tags: ['Marksman'], race: 'Human', affiliation: 'Noxus' },
  { id: 'DrMundo', name: 'Dr. Mundo', title: 'The Madman of Zaun', role: 'Tank', tags: ['Tank'], race: 'Troll', affiliation: 'Zaun' },
  { id: 'Ekko', name: 'Ekko', title: 'The Boy Who Shattered Time', role: 'Fighter', tags: ['Fighter'], race: 'Human', affiliation: 'Zaun' },
  { id: 'Elise', name: 'Elise', title: 'The Spider Queen', role: 'Mage', tags: ['Mage'], race: 'Spider', affiliation: 'Shadow Isles' },
  { id: 'Evelynn', name: 'Evelynn', title: 'Agony\'s Embrace', role: 'Assassin', tags: ['Assassin'], race: 'Demon', affiliation: 'Runeterra' },
  { id: 'Ezreal', name: 'Ezreal', title: 'The Prodigal Explorer', role: 'Marksman', tags: ['Marksman'], race: 'Human', affiliation: 'Piltover' },
  { id: 'Fiora', name: 'Fiora', title: 'The Grand Duelist', role: 'Fighter', tags: ['Fighter'], race: 'Human', affiliation: 'Demacia' },
  { id: 'Fizz', name: 'Fizz', title: 'The Tidal Trickster', role: 'Assassin', tags: ['Assassin'], race: 'Amphibian', affiliation: 'Bilgewater' },
  { id: 'Garen', name: 'Garen', title: 'Might of Demacia', role: 'Tank', tags: ['Tank'], race: 'Human', affiliation: 'Demacia' },
  { id: 'Gnar', name: 'Gnar', title: 'The Missing Link', role: 'Fighter', tags: ['Fighter'], race: 'Yordle', affiliation: 'Freljord' },
  { id: 'Gragas', name: 'Gragas', title: 'The Rabble Rouser', role: 'Fighter', tags: ['Fighter'], race: 'Troll', affiliation: 'Freljord' },
  { id: 'Graves', name: 'Graves', title: 'The Outlaw', role: 'Marksman', tags: ['Marksman'], race: 'Human', affiliation: 'Bilgewater' },
  { id: 'Gwen', name: 'Gwen', title: 'The Hallowed Seamstress', role: 'Fighter', tags: ['Fighter'], race: 'Doll', affiliation: 'Shadow Isles' },
  { id: 'Hecarim', name: 'Hecarim', title: 'The Shadow of War', role: 'Fighter', tags: ['Fighter'], race: 'Centaur', affiliation: 'Shadow Isles' },
  { id: 'Heimerdinger', name: 'Heimerdinger', title: 'The Revered Inventor', role: 'Mage', tags: ['Mage'], race: 'Yordle', affiliation: 'Piltover' },
  { id: 'Illaoi', name: 'Illaoi', title: 'The Kraken Priestess', role: 'Fighter', tags: ['Fighter'], race: 'Human', affiliation: 'Bilgewater' },
  { id: 'Irelia', name: 'Irelia', title: 'The Blade Dancer', role: 'Fighter', tags: ['Fighter'], race: 'Human', affiliation: 'Ionia' },
  { id: 'Ivern', name: 'Ivern', title: 'The Green Father', role: 'Support', tags: ['Support'], race: 'Spirit', affiliation: 'Ionia' },
  { id: 'Janna', name: 'Janna', title: 'The Storm\'s Fury', role: 'Support', tags: ['Support'], race: 'Spirit', affiliation: 'Zaun' },
  { id: 'JarvanIV', name: 'Jarvan IV', title: 'The Exemplar of Demacia', role: 'Fighter', tags: ['Fighter'], race: 'Human', affiliation: 'Demacia' },
  { id: 'Jax', name: 'Jax', title: 'Grandmaster at Arms', role: 'Fighter', tags: ['Fighter'], race: 'Human', affiliation: 'Icathia' },
  { id: 'Jayce', name: 'Jayce', title: 'The Defender of Tomorrow', role: 'Fighter', tags: ['Fighter'], race: 'Human', affiliation: 'Piltover' },
  { id: 'Jhin', name: 'Jhin', title: 'The Virtuoso', role: 'Marksman', tags: ['Marksman'], race: 'Human', affiliation: 'Noxus' },
  { id: 'Jinx', name: 'Jinx', title: 'The Loose Cannon', role: 'Marksman', tags: ['Marksman'], race: 'Human', affiliation: 'Zaun' },
  { id: 'KSante', name: 'K\'Sante', title: 'The Pride of Nazumah', role: 'Fighter', tags: ['Fighter'], race: 'Human', affiliation: 'Ixtal' },
  { id: 'Kaisa', name: 'Kai\'Sa', title: 'Daughter of the Void', role: 'Marksman', tags: ['Marksman'], race: 'Human', affiliation: 'Void' },
  { id: 'Kalista', name: 'Kalista', title: 'The Spear of Vengeance', role: 'Marksman', tags: ['Marksman'], race: 'Spirit', affiliation: 'Shadow Isles' },
  { id: 'Karma', name: 'Karma', title: 'The Enlightened One', role: 'Support', tags: ['Support'], race: 'Human', affiliation: 'Ionia' },
  { id: 'Karthus', name: 'Karthus', title: 'The Deathsinger', role: 'Mage', tags: ['Mage'], race: 'Undead', affiliation: 'Shadow Isles' },
  { id: 'Kassadin', name: 'Kassadin', title: 'The Void Walker', role: 'Mage', tags: ['Mage'], race: 'Human', affiliation: 'Void' },
  { id: 'Katarina', name: 'Katarina', title: 'The Sinister Blade', role: 'Assassin', tags: ['Assassin'], race: 'Human', affiliation: 'Noxus' },
  { id: 'Kayle', name: 'Kayle', title: 'The Righteous', role: 'Fighter', tags: ['Fighter'], race: 'Celestial', affiliation: 'Targon' },
  { id: 'Kayn', name: 'Kayn', title: 'The Shadow Reaper', role: 'Assassin', tags: ['Assassin'], race: 'Human', affiliation: 'Noxus' },
  { id: 'Kennen', name: 'Kennen', title: 'The Heart of the Tempest', role: 'Mage', tags: ['Mage'], race: 'Yordle', affiliation: 'Ionia' },
  { id: 'Khazix', name: 'Kha\'Zix', title: 'The Void Reaver', role: 'Assassin', tags: ['Assassin'], race: 'Void', affiliation: 'Void' },
  { id: 'Kindred', name: 'Kindred', title: 'The Eternal Hunters', role: 'Marksman', tags: ['Marksman'], race: 'Spirit', affiliation: 'Runeterra' },
  { id: 'Kled', name: 'Kled', title: 'The Cantankerous Cavalier', role: 'Fighter', tags: ['Fighter'], race: 'Human', affiliation: 'Noxus' },
  { id: 'KogMaw', name: 'Kog\'Maw', title: 'The Mouth of the Abyss', role: 'Marksman', tags: ['Marksman'], race: 'Void', affiliation: 'Void' },
  { id: 'LeBlanc', name: 'LeBlanc', title: 'The Deceiver', role: 'Mage', tags: ['Mage'], race: 'Demon', affiliation: 'Noxus' },
  { id: 'LeeSin', name: 'Lee Sin', title: 'The Blind Monk', role: 'Fighter', tags: ['Fighter'], race: 'Human', affiliation: 'Ionia' },
  { id: 'Leona', name: 'Leona', title: 'The Radiant Dawn', role: 'Support', tags: ['Support'], race: 'Human', affiliation: 'Targon' },
  { id: 'Lillia', name: 'Lillia', title: 'The Bashful Bloom', role: 'Fighter', tags: ['Fighter'], race: 'Spirit', affiliation: 'Ionia' },
  { id: 'Lissandra', name: 'Lissandra', title: 'The Ice Witch', role: 'Mage', tags: ['Mage'], race: 'Human', affiliation: 'Freljord' },
  { id: 'Lucian', name: 'Lucian', title: 'The Purifier', role: 'Marksman', tags: ['Marksman'], race: 'Human', affiliation: 'Demacia' },
  { id: 'Lulu', name: 'Lulu', title: 'The Fae Sorceress', role: 'Support', tags: ['Support'], race: 'Yordle', affiliation: 'Bandle' },
  { id: 'Lux', name: 'Lux', title: 'The Lady of Luminosity', role: 'Mage', tags: ['Mage'], race: 'Human', affiliation: 'Demacia' },
  { id: 'Malphite', name: 'Malphite', title: 'Shard of the Earth', role: 'Tank', tags: ['Tank'], race: 'Elemental', affiliation: 'Shurima' },
  { id: 'Malzahar', name: 'Malzahar', title: 'The Prophet of the Void', role: 'Mage', tags: ['Mage'], race: 'Human', affiliation: 'Void' },
  { id: 'Maokai', name: 'Maokai', title: 'The Twisted Treant', role: 'Tank', tags: ['Tank'], race: 'Plant', affiliation: 'Shadow Isles' },
  { id: 'MasterYi', name: 'Master Yi', title: 'The Wuju Bladesman', role: 'Assassin', tags: ['Assassin'], race: 'Human', affiliation: 'Ionia' },
  { id: 'MissFortune', name: 'Miss Fortune', title: 'The Bounty Huntress', role: 'Marksman', tags: ['Marksman'], race: 'Human', affiliation: 'Bilgewater' },
  { id: 'Mordekaiser', name: 'Mordekaiser', title: 'The Iron Revenant', role: 'Fighter', tags: ['Fighter'], race: 'Undead', affiliation: 'Noxus' },
  { id: 'Morgana', name: 'Morgana', title: 'Fallen Angel', role: 'Support', tags: ['Support'], race: 'Celestial', affiliation: 'Demacia' },
  { id: 'Nami', name: 'Nami', title: 'The Tidecaller', role: 'Support', tags: ['Support'], race: 'Merfolk', affiliation: 'Bilgewater' },
  { id: 'Nasus', name: 'Nasus', title: 'The Curator of the Sands', role: 'Tank', tags: ['Tank'], race: 'Ascended', affiliation: 'Shurima' },
  { id: 'Nautilus', name: 'Nautilus', title: 'The Titan of the Depths', role: 'Support', tags: ['Support'], race: 'Golem', affiliation: 'Bilgewater' },
  { id: 'Neeko', name: 'Neeko', title: 'The Curious Chameleon', role: 'Mage', tags: ['Mage'], race: 'Human', affiliation: 'Ixtal' },
  { id: 'Nidalee', name: 'Nidalee', title: 'The Bestial Huntress', role: 'Fighter', tags: ['Fighter'], race: 'Human', affiliation: 'Shurima' },
  { id: 'Nilah', name: 'Nilah', title: 'The Joy Unbound', role: 'Fighter', tags: ['Fighter'], race: 'Human', affiliation: 'Ixtal' },
  { id: 'Nocturne', name: 'Nocturne', title: 'The Eternal Nightmare', role: 'Assassin', tags: ['Assassin'], race: 'Demon', affiliation: 'Runeterra' },
  { id: 'Nunu', name: 'Nunu & Willump', title: 'The Boy and His Yeti', role: 'Tank', tags: ['Tank'], race: 'Human', affiliation: 'Freljord' },
  { id: 'Olaf', name: 'Olaf', title: 'The Berserker', role: 'Fighter', tags: ['Fighter'], race: 'Human', affiliation: 'Freljord' },
  { id: 'Orianna', name: 'Orianna', title: 'The Lady of Clockwork', role: 'Mage', tags: ['Mage'], race: 'Automaton', affiliation: 'Piltover' },
  { id: 'Ornn', name: 'Ornn', title: 'The Fire below the Mountain', role: 'Tank', tags: ['Tank'], race: 'Demi-God', affiliation: 'Freljord' },
  { id: 'Pantheon', name: 'Pantheon', title: 'The Unbreakable Spear', role: 'Fighter', tags: ['Fighter'], race: 'Celestial', affiliation: 'Targon' },
  { id: 'Poppy', name: 'Poppy', title: 'Keeper of the Hammer', role: 'Fighter', tags: ['Fighter'], race: 'Yordle', affiliation: 'Bandle' },
  { id: 'Pyke', name: 'Pyke', title: 'The Bloodharbor Ripper', role: 'Support', tags: ['Support'], race: 'Undead', affiliation: 'Bilgewater' },
  { id: 'Qiyana', name: 'Qiyana', title: 'Empress of the Elements', role: 'Assassin', tags: ['Assassin'], race: 'Human', affiliation: 'Ixtal' },
  { id: 'Quinn', name: 'Quinn', title: 'Demacia\'s Wings', role: 'Marksman', tags: ['Marksman'], race: 'Human', affiliation: 'Demacia' },
  { id: 'Rakan', name: 'Rakan', title: 'The Charmer', role: 'Support', tags: ['Support'], race: 'Vastaya', affiliation: 'Ionia' },
  { id: 'Rammus', name: 'Rammus', title: 'The Armordillo', role: 'Tank', tags: ['Tank'], race: 'Armordillo', affiliation: 'Shurima' },
  { id: 'RekSai', name: 'Rek\'Sai', title: 'The Void Burrower', role: 'Fighter', tags: ['Fighter'], race: 'Void', affiliation: 'Void' },
  { id: 'Renata', name: 'Renata Glasc', title: 'The Chembaroness', role: 'Support', tags: ['Support'], race: 'Human', affiliation: 'Zaun' },
  { id: 'Renekton', name: 'Renekton', title: 'The Butcher of the Sands', role: 'Fighter', tags: ['Fighter'], race: 'Ascended', affiliation: 'Shurima' },
  { id: 'Rengar', name: 'Rengar', title: 'The Pridestalker', role: 'Assassin', tags: ['Assassin'], race: 'Vastaya', affiliation: 'Shurima' },
  { id: 'Riven', name: 'Riven', title: 'The Exile', role: 'Fighter', tags: ['Fighter'], race: 'Human', affiliation: 'Noxus' },
  { id: 'Rumble', name: 'Rumble', title: 'The Mechanized Menace', role: 'Fighter', tags: ['Fighter'], race: 'Yordle', affiliation: 'Bandle' },
  { id: 'Ryze', name: 'Ryze', title: 'The Rogue Mage', role: 'Mage', tags: ['Mage'], race: 'Human', affiliation: 'Runeterra' },
  { id: 'Samira', name: 'Samira', title: 'The Desert Rose', role: 'Marksman', tags: ['Marksman'], race: 'Human', affiliation: 'Noxus' },
  { id: 'Sejuani', name: 'Sejuani', title: 'Fury of the North', role: 'Tank', tags: ['Tank'], race: 'Human', affiliation: 'Freljord' },
  { id: 'Senna', name: 'Senna', title: 'The Redeemer', role: 'Marksman', tags: ['Marksman'], race: 'Human', affiliation: 'Shadow Isles' },
  { id: 'Seraphine', name: 'Seraphine', title: 'The Voice of Piltover', role: 'Support', tags: ['Support'], race: 'Human', affiliation: 'Piltover' },
  { id: 'Sett', name: 'Sett', title: 'The Boss', role: 'Fighter', tags: ['Fighter'], race: 'Vastaya', affiliation: 'Ionia' },
  { id: 'Shaco', name: 'Shaco', title: 'The Demon Jester', role: 'Assassin', tags: ['Assassin'], race: 'Demon', affiliation: 'Runeterra' },
  { id: 'Shen', name: 'Shen', title: 'The Eye of Twilight', role: 'Tank', tags: ['Tank'], race: 'Human', affiliation: 'Ionia' },
  { id: 'Shyvana', name: 'Shyvana', title: 'The Half-Dragon', role: 'Fighter', tags: ['Fighter'], race: 'Dragon', affiliation: 'Demacia' },
  { id: 'Singed', name: 'Singed', title: 'The Chemist', role: 'Tank', tags: ['Tank'], race: 'Human', affiliation: 'Zaun' },
  { id: 'Sion', name: 'Sion', title: 'The Undead Juggernaut', role: 'Tank', tags: ['Tank'], race: 'Undead', affiliation: 'Noxus' },
  { id: 'Sivir', name: 'Sivir', title: 'The Battle Mistress', role: 'Marksman', tags: ['Marksman'], race: 'Human', affiliation: 'Shurima' },
  { id: 'Skarner', name: 'Skarner', title: 'The Crystal Vanguard', role: 'Tank', tags: ['Tank'], race: 'Brackern', affiliation: 'Shurima' },
  { id: 'Sona', name: 'Sona', title: 'Maven of the Strings', role: 'Support', tags: ['Support'], race: 'Human', affiliation: 'Demacia' },
  { id: 'Soraka', name: 'Soraka', title: 'The Starchild', role: 'Support', tags: ['Support'], race: 'Celestial', affiliation: 'Targon' },
  { id: 'Swain', name: 'Swain', title: 'The Noxian Grand General', role: 'Fighter', tags: ['Fighter'], race: 'Human', affiliation: 'Noxus' },
  { id: 'Sylas', name: 'Sylas', title: 'The Unshackled', role: 'Fighter', tags: ['Fighter'], race: 'Human', affiliation: 'Demacia' },
  { id: 'Syndra', name: 'Syndra', title: 'The Dark Sovereign', role: 'Mage', tags: ['Mage'], race: 'Human', affiliation: 'Ionia' },
  { id: 'TahmKench', name: 'Tahm Kench', title: 'The River King', role: 'Support', tags: ['Support'], race: 'Demon', affiliation: 'Bilgewater' },
  { id: 'Taliah', name: 'Taliyah', title: 'The Stoneweaver', role: 'Mage', tags: ['Mage'], race: 'Human', affiliation: 'Shurima' },
  { id: 'Talon', name: 'Talon', title: 'The Blade\'s Shadow', role: 'Assassin', tags: ['Assassin'], race: 'Human', affiliation: 'Noxus' },
  { id: 'Taric', name: 'Taric', title: 'The Gemstone Radiance', role: 'Support', tags: ['Support'], race: 'Human', affiliation: 'Targon' },
  { id: 'Teemo', name: 'Teemo', title: 'The Swift Scout', role: 'Marksman', tags: ['Marksman'], race: 'Yordle', affiliation: 'Bandle' },
  { id: 'Thresh', name: 'Thresh', title: 'The Chain Warden', role: 'Support', tags: ['Support'], race: 'Undead', affiliation: 'Shadow Isles' },
  { id: 'Tristana', name: 'Tristana', title: 'The Yordle Gunner', role: 'Marksman', tags: ['Marksman'], race: 'Yordle', affiliation: 'Bandle' },
  { id: 'Trundle', name: 'Trundle', title: 'The Troll King', role: 'Tank', tags: ['Tank'], race: 'Troll', affiliation: 'Freljord' },
  { id: 'Tryndamere', name: 'Tryndamere', title: 'The Barbarian King', role: 'Fighter', tags: ['Fighter'], race: 'Human', affiliation: 'Freljord' },
  { id: 'TwistedFate', name: 'Twisted Fate', title: 'The Card Master', role: 'Mage', tags: ['Mage'], race: 'Human', affiliation: 'Bilgewater' },
  { id: 'Twitch', name: 'Twitch', title: 'The Plague Rat', role: 'Marksman', tags: ['Marksman'], race: 'Rat', affiliation: 'Zaun' },
  { id: 'Udyr', name: 'Udyr', title: 'The Spirit Walker', role: 'Fighter', tags: ['Fighter'], race: 'Human', affiliation: 'Ionia' },
  { id: 'Urgot', name: 'Urgot', title: 'The Headsman\'s Pride', role: 'Fighter', tags: ['Fighter'], race: 'Cyborg', affiliation: 'Zaun' },
  { id: 'Varus', name: 'Varus', title: 'The Arrow of Retribution', role: 'Marksman', tags: ['Marksman'], race: 'Human', affiliation: 'Noxus' },
  { id: 'Vayne', name: 'Vayne', title: 'The Night Hunter', role: 'Marksman', tags: ['Marksman'], race: 'Human', affiliation: 'Demacia' },
  { id: 'Veigar', name: 'Veigar', title: 'The Tiny Master of Evil', role: 'Mage', tags: ['Mage'], race: 'Yordle', affiliation: 'Bandle' },
  { id: 'VelKoz', name: 'Vel\'Koz', title: 'The Eye of the Void', role: 'Mage', tags: ['Mage'], race: 'Void', affiliation: 'Void' },
  { id: 'Vex', name: 'Vex', title: 'The Gloomist', role: 'Mage', tags: ['Mage'], race: 'Yordle', affiliation: 'Bandle' },
  { id: 'Vi', name: 'Vi', title: 'The Enforcer', role: 'Fighter', tags: ['Fighter'], race: 'Human', affiliation: 'Zaun' },
  { id: 'Viego', name: 'Viego', title: 'The Ruined King', role: 'Fighter', tags: ['Fighter'], race: 'Undead', affiliation: 'Shadow Isles' },
  { id: 'Viktor', name: 'Viktor', title: 'The Machine Herald', role: 'Mage', tags: ['Mage'], race: 'Human', affiliation: 'Zaun' },
  { id: 'Vladimir', name: 'Vladimir', title: 'The Crimson Reaper', role: 'Mage', tags: ['Mage'], race: 'Human', affiliation: 'Noxus' },
  { id: 'Volibear', name: 'Volibear', title: 'The Relentless Storm', role: 'Fighter', tags: ['Fighter'], race: 'Demi-God', affiliation: 'Freljord' },
  { id: 'Warwick', name: 'Warwick', title: 'The Uncaged Wrath of Zaun', role: 'Fighter', tags: ['Fighter'], race: 'Werewolf', affiliation: 'Zaun' },
  { id: 'Wukong', name: 'Wukong', title: 'The Monkey King', role: 'Fighter', tags: ['Fighter'], race: 'Spirit', affiliation: 'Ionia' },
  { id: 'Xayah', name: 'Xayah', title: 'The Rebel', role: 'Marksman', tags: ['Marksman'], race: 'Vastaya', affiliation: 'Ionia' },
  { id: 'Xerath', name: 'Xerath', title: 'The Magus Ascendant', role: 'Mage', tags: ['Mage'], race: 'Ascended', affiliation: 'Shurima' },
  { id: 'XinZhao', name: 'Xin Zhao', title: 'The Seneschal of Demacia', role: 'Fighter', tags: ['Fighter'], race: 'Human', affiliation: 'Demacia' },
  { id: 'Yasuo', name: 'Yasuo', title: 'The Unforgiven', role: 'Fighter', tags: ['Fighter'], race: 'Human', affiliation: 'Ionia' },
  { id: 'Yone', name: 'Yone', title: 'The Gathering Storm', role: 'Fighter', tags: ['Fighter'], race: 'Human', affiliation: 'Ionia' },
  { id: 'Yorick', name: 'Yorick', title: 'The Shepherd of Souls', role: 'Fighter', tags: ['Fighter'], race: 'Human', affiliation: 'Shadow Isles' },
  { id: 'Yuumi', name: 'Yuumi', title: 'The Magical Cat', role: 'Support', tags: ['Support'], race: 'Spirit', affiliation: 'Bandle' },
  { id: 'Zac', name: 'Zac', title: 'The Secret Weapon', role: 'Tank', tags: ['Tank'], race: 'Ooze', affiliation: 'Zaun' },
  { id: 'Zed', name: 'Zed', title: 'The Master of Shadows', role: 'Assassin', tags: ['Assassin'], race: 'Human', affiliation: 'Ionia' },
  { id: 'Zeri', name: 'Zeri', title: 'The Spark Pack', role: 'Marksman', tags: ['Marksman'], race: 'Human', affiliation: 'Zaun' },
  { id: 'Ziggs', name: 'Ziggs', title: 'The Hexplosives Expert', role: 'Mage', tags: ['Mage'], race: 'Yordle', affiliation: 'Bandle' },
  { id: 'Zilean', name: 'Zilean', title: 'The Chronokeeper', role: 'Support', tags: ['Support'], race: 'Human', affiliation: 'Zaun' },
  { id: 'Zoe', name: 'Zoe', title: 'The Aspect of Twilight', role: 'Mage', tags: ['Mage'], race: 'Celestial', affiliation: 'Targon' },
  { id: 'Zyra', name: 'Zyra', title: 'Rise of the Thorns', role: 'Support', tags: ['Support'], race: 'Plant', affiliation: 'Zaun' },
];

const VERSION = '15.2.1';
const DDRAGON_BASE = `https://ddragon.leagueoflegends.com/cdn/${VERSION}`;
let champions = [];
let favorites = new Set();



//  INITIALIZATION


document.addEventListener('DOMContentLoaded', () => {
  console.log('🎮 League Companion - Initializing...');
  initTheme();
  initNavigation();
  loadFavorites();
  
  const championsGrid = document.getElementById('championsGrid');
  if (championsGrid) {
    console.log('📊 Champions page detected - loading champions...');
    // Load fallback champions immediately
    champions = FALLBACK_CHAMPIONS;
    renderChampions();
    initializeFilters();
    console.log('✅ Loaded ' + champions.length + ' champions');
  }
});


//  THEME MANAGEMENT


function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;
  
  const savedTheme = localStorage.getItem('theme') || 'dark';
  
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.textContent = '🌙';
  } else {
    themeToggle.textContent = '☀️';
  }
  
  themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
  const themeToggle = document.getElementById('themeToggle');
  document.body.classList.toggle('light-mode');
  const isDark = !document.body.classList.contains('light-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
}

//  NAVIGATION


function initNavigation() {
  const brand = document.querySelector('.brand');
  if (brand) {
    brand.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }
}

//  RENDER CHAMPIONS GRID


function renderChampions() {
  console.log('🎨 Rendering ' + champions.length + ' champions...');
  
  const grid = document.getElementById('championsGrid');
  if (!grid) {
    console.error('❌ Champions grid element not found!');
    return;
  }
  
  const searchInput = document.getElementById('championsSearch');
  const roleFilter = document.getElementById('roleFilter');
  const raceFilter = document.getElementById('raceFilter');
  const affiliationFilter = document.getElementById('affiliationFilter');
  
  const search = searchInput ? searchInput.value.toLowerCase() : '';
  const role = roleFilter ? roleFilter.value : 'all';
  const race = raceFilter ? raceFilter.value : 'all';
  const affiliation = affiliationFilter ? affiliationFilter.value : 'all';
  
  const filtered = champions.filter(c => {
    const matchSearch = !search || c.name.toLowerCase().includes(search) || c.title.toLowerCase().includes(search);
    const matchRole = role === 'all' || (c.tags && c.tags.includes(role));
    const matchRace = race === 'all' || c.race === race;
    const matchAffiliation = affiliation === 'all' || c.affiliation === affiliation;
    return matchSearch && matchRole && matchRace && matchAffiliation;
  });
  
  console.log('📌 Filtered to ' + filtered.length + ' champions');
  
  if (filtered.length === 0) {
    grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 3rem;">No champions found matching your criteria.</p>';
    return;
  }
  
  grid.innerHTML = filtered.map(c => `
    <div class="champion-card" data-id="${c.id}" title="${c.name}: ${c.title}">
      <div class="champion-image" style="background-image: url('${getDDragonSplash(c.id)}')"></div>
      <div class="champion-info">
        <div>
          <div class="champion-name">${c.name}</div>
          <div class="champion-role">${c.role}</div>
          <div style="color: var(--accent); font-size: 0.8rem; margin-top: 0.25rem;">${c.race} • ${c.affiliation}</div>
        </div>
        <button class="favorite-btn ${favorites.has(c.id) ? 'active' : ''}" data-id="${c.id}">★</button>
      </div>
    </div>
  `).join('');
  
  attachChampionCardListeners();
}

function getDDragonSplash(champId) {
  return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champId}_0.jpg`;
}


//  EVENT LISTENERS


function attachChampionCardListeners() {
  document.querySelectorAll('.champion-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.classList.contains('favorite-btn')) {
        const id = card.getAttribute('data-id');
        const champ = champions.find(c => c.id === id);
        if (champ) openChampionModal(champ);
      }
    });
  });
  
  document.querySelectorAll('.favorite-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      toggleFavorite(id);
      btn.classList.toggle('active');
    });
  });
}

function initializeFilters() {
  const searchInput = document.getElementById('championsSearch');
  const roleFilter = document.getElementById('roleFilter');
  const raceFilter = document.getElementById('raceFilter');
  const affiliationFilter = document.getElementById('affiliationFilter');
  const filterButtons = document.querySelectorAll('.role-btn');
  const raceButtons = document.querySelectorAll('.race-btn');
  const affiliationButtons = document.querySelectorAll('.affiliation-btn');
  
  if (searchInput) searchInput.addEventListener('input', renderChampions);
  if (roleFilter) roleFilter.addEventListener('change', renderChampions);
  if (raceFilter) raceFilter.addEventListener('change', renderChampions);
  if (affiliationFilter) affiliationFilter.addEventListener('change', renderChampions);
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const role = e.target.getAttribute('data-role');
      if (roleFilter) roleFilter.value = role;
      renderChampions();
    });
  });

  raceButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      raceButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const race = e.target.getAttribute('data-race');
      if (raceFilter) raceFilter.value = race;
      renderChampions();
    });
  });

  affiliationButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      affiliationButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const affiliation = e.target.getAttribute('data-affiliation');
      if (affiliationFilter) affiliationFilter.value = affiliation;
      renderChampions();
    });
  });
}

//  FAVORITES SYSTEM


function toggleFavorite(champId) {
  if (favorites.has(champId)) {
    favorites.delete(champId);
  } else {
    favorites.add(champId);
  }
  saveFavorites();
}

function saveFavorites() {
  localStorage.setItem('favorites', JSON.stringify([...favorites]));
}

function loadFavorites() {
  const saved = localStorage.getItem('favorites');
  if (saved) {
    try {
      favorites = new Set(JSON.parse(saved));
    } catch (e) {
      favorites = new Set();
    }
  }
}


//  CHAMPION MODAL


async function openChampionModal(champ) {
  const modal = document.getElementById('championModal');
  if (!modal) return;
  
  const header = modal.querySelector('.modal-header');
  const body = modal.querySelector('.modal-body');
  
  if (header) {
    header.style.backgroundImage = `url('${getDDragonSplash(champ.id)}')`;
  }
  
  // Try to fetch champion details from API
  let detail = null;
  try {
    const res = await fetch(`${DDRAGON_BASE}/data/en_US/champion/${champ.id}.json`);
    if (res.ok) {
      const data = await res.json();
      detail = data.data[champ.id];
    }
  } catch (error) {
    console.log('Could not fetch detailed champion data, using basic info');
  }
  
  const lore = detail?.lore || `${champ.name} is a powerful champion from ${champ.affiliation}.`;
  const spells = detail?.spells || [];
  const skins = detail?.skins || [];
  
  const abilitiesHtml = spells.length > 0 ? spells.map((spell, i) => `
    <div class="ability">
      <h4>${['Q', 'W', 'E', 'R'][i]} - ${spell.name}</h4>
      <p>${spell.description}</p>
    </div>
  `).join('') : '<p>Abilities data not available</p>';
  
  const skinsHtml = skins.length > 0 ? `
    <div class="skins-gallery">
      <div class="skins-main" id="skinsMain" style="background-image: url('${getDDragonSplash(champ.id)}')"></div>
      <div class="skins-thumbnails" id="skinsThumbnails">
        ${skins.map((skin, i) => `
          <div class="skin-thumb ${i === 0 ? 'active' : ''}" data-num="${skin.num}" data-name="${skin.name}" style="background-image: url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_${skin.num}.jpg')"></div>
        `).join('')}
      </div>
      <p id="skinName" style="margin-top: 1rem; color: var(--text-secondary);">${skins[0]?.name || 'Default'}</p>
    </div>
  ` : '<p>Skins data not available</p>';
  
  if (body) {
    body.innerHTML = `
      <h2>${champ.name}</h2>
      <p class="title">${champ.title}</p>
      <p style="color: var(--text-secondary); margin: 0.5rem 0;">
        <strong>Race:</strong> ${champ.race} | <strong>Affiliation:</strong> ${champ.affiliation} | <strong>Role:</strong> ${champ.role}
      </p>
      
      <div class="modal-tabs">
        <button class="modal-tab active" data-tab="lore">Lore</button>
        <button class="modal-tab" data-tab="abilities">Abilities</button>
        <button class="modal-tab" data-tab="skins">Skins</button>
      </div>
      
      <div id="lore" class="tab-content active">
        <p>${lore}</p>
      </div>
      
      <div id="abilities" class="tab-content">
        ${abilitiesHtml}
      </div>
      
      <div id="skins" class="tab-content">
        ${skinsHtml}
      </div>
    `;
  }
  
  // Setup tab switching
  setTimeout(() => {
    document.querySelectorAll('.modal-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        e.target.classList.add('active');
        const tabId = e.target.getAttribute('data-tab');
        const tabContent = document.getElementById(tabId);
        if (tabContent) tabContent.classList.add('active');
      });
    });
    
    // Setup skin switching
    document.querySelectorAll('.skin-thumb').forEach(thumb => {
      thumb.addEventListener('click', (e) => {
        document.querySelectorAll('.skin-thumb').forEach(t => t.classList.remove('active'));
        e.currentTarget.classList.add('active');
        const skinsMain = document.getElementById('skinsMain');
        const skinName = document.getElementById('skinName');
        if (skinsMain) {
          skinsMain.style.backgroundImage = `url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_${e.currentTarget.getAttribute('data-num')}.jpg')`;
        }
        if (skinName) {
          skinName.textContent = e.currentTarget.getAttribute('data-name');
        }
      });
    });
  }, 100);
  
  modal.classList.add('active');
}

function closeChampionModal() {
  const modal = document.getElementById('championModal');
  if (modal) {
    modal.classList.remove('active');
  }
}
