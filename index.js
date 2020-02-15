const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  return res.json({
    games: [
      {
        id: "kPDxpJZ8PD",
        name: "Spirit Island",
        year_published: 2016,
        min_players: 1,
        max_players: 4,
        min_playtime: 90,
        max_playtime: 120,
        min_age: 13,
        description:
          "Powerful Spirits have existed on this isolated island for time immemorial. They are both part of the natural world and - at the same time - something beyond nature. Native Islanders, known as the Dahan, have learned how to co-exist with the spirits, but with a healthy dose of fear and reverence. However, now, the island has been &quot;discovered&quot; by invaders from a far-off land. These would-be colonists are taking over the land and upsetting the natural balance, destroying the presence of Spirits as they go. As Spirits, you must grow in power and work together to drive the invaders from your island... before it's too late!",
        description_preview:
          'Powerful Spirits have existed on this isolated island for time immemorial. They are both part of the natural world and - at the same time - something beyond nature. Native Islanders, known as the Dahan, have learned how to co-exist with the spirits, but with a healthy dose of fear and reverence. However, now, the island has been "discovered" by invaders from a far-off land. These would-be colonists are taking over the land and upsetting the natural balance, destroying the presence of Spirits as they go. As Spirits, you must grow in power and work together to drive the invaders from your island... before it\'s too late!',
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254941010-61PJxjjnbfL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254941010-61PJxjjnbfL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254941010-61PJxjjnbfL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254941010-61PJxjjnbfL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254941010-61PJxjjnbfL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254941010-61PJxjjnbfL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254941010-61PJxjjnbfL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/kPDxpJZ8PD/spirit-island",
        price: "52.99",
        msrp: "79.95",
        discount: "0.34",
        primary_publisher: "Greater Than Games",
        publishers: ["Greater Than Games"],
        mechanics: [
          {
            id: "PGjmKGi26h"
          },
          {
            id: "05zCZoLvQJ"
          },
          {
            id: "33UT4gTFqy"
          },
          {
            id: "WPytek5P8l"
          },
          {
            id: "U3zhCQH7Et"
          },
          {
            id: "lA3KUtVFCy"
          },
          {
            id: "DEvPj5twid"
          },
          {
            id: "XM2FYZmBHH"
          }
        ],
        categories: [
          {
            id: "nWDac9tQzt"
          },
          {
            id: "gsekjrPJz0"
          },
          {
            id: "ZTneo8TaIO"
          },
          {
            id: "upXZ8vNfNO"
          },
          {
            id: "MHkqIVxwtx"
          },
          {
            id: "nuHYRFmMjU"
          },
          {
            id: "O0ogzwLUe8"
          },
          {
            id: "buDTYyPw4D"
          }
        ],
        designers: ["R. Eric Reuss"],
        developers: [],
        artists: [
          "Jason Behnke",
          "Kat G Bermelin",
          "Loïc Billiau",
          "Cari Corene",
          "Lucas Durham",
          "Rocky Hammer",
          "Sydni Kruger",
          "Nolan Nasser",
          "Jorge Ramos",
          "Adam Rebottaro",
          "Moro Rogers",
          "Graham Sternberg",
          "Shane Tyree",
          "Joshua Wright (I)"
        ],
        names: [
          "Spirit Island (5th Edition) (Ding & Dent)",
          "Spirit Island (Ding & Dent)"
        ],
        num_user_ratings: 175,
        average_user_rating: 3.8742857142857146,
        official_url:
          "https://store.greaterthangames.com/spirit-island.html?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://drive.google.com/file/d/0B9kp130SgLtdcGxTcTFodlhaWDg/view",
        weight_amount: 2,
        weight_units: "lbs",
        size_height: 11.6,
        size_width: 3,
        size_depth: 11.6,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 1729,
        reddit_week_count: 63,
        reddit_day_count: 13,
        historical_low_price: 39.97,
        historical_low_date: {
          $date: "2019-12-27T11:56:05.953Z"
        }
      },
      {
        id: "RLlDWHh7hR",
        name: "Gloomhaven",
        year_published: 2017,
        min_players: 1,
        max_players: 4,
        min_playtime: 60,
        max_playtime: 150,
        min_age: 12,
        description:
          "Gloomhaven is a game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world.<br />\r\n<br />\r\nPlayers must work together out of necessity to clear out menacing dungeons and forgotten ruins. In the process they will enhance their abilities with experience and loot, discover new locations to explore and plunder, and expand an ever-branching story fueled by the decisions they make.<br />\r\n<br />\r\nThis is a legacy game with a persistent and changing world that is ideally played over many game sessions. After a scenario, players will make decisions on what to do, which will determine how the story continues, kind of like a &quot;Choose Your Own Adventure&quot; book. Playing through a scenario is a cooperative affair where players will fight against automated monsters using an innovative card system to determine the order of play and what a player does on their turn.",
        description_preview:
          'Gloomhaven is a game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world. \r\n \r\nPlayers must work together out of necessity to clear out menacing dungeons and forgotten ruins. In the process they will enhance their abilities with experience and loot, discover new locations to explore and plunder, and expand an ever-branching story fueled by the decisions they make. \r\n \r\nThis is a legacy game with a persistent and changing world that is ideally played over many game sessions. After a scenario, players will make decisions on what to do, which will determine how the story continues, kind of like a "Choose Your Own Adventure" book. Playing through a scenario is a cooperative affair where players will fight against automated monsters using an innovative card system to determine the order of play and what a player does on their turn.',
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254920151-51ulRXlJ7LL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254920151-51ulRXlJ7LL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254920151-51ulRXlJ7LL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254920151-51ulRXlJ7LL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254920151-51ulRXlJ7LL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254920151-51ulRXlJ7LL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254920151-51ulRXlJ7LL.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/RLlDWHh7hR/gloomhaven",
        price: "99.40",
        msrp: "139.99",
        discount: "0.29",
        primary_publisher: "Cephalofair Games",
        publishers: ["Cephalofair Games"],
        mechanics: [
          {
            id: "xuphiSlrxI"
          },
          {
            id: "9mNukNBxfZ"
          },
          {
            id: "qu5BcGjAzk"
          },
          {
            id: "WPytek5P8l"
          },
          {
            id: "DwmsVEvNVd"
          },
          {
            id: "U3zhCQH7Et"
          },
          {
            id: "EVeAdboGUA"
          },
          {
            id: "za4PP1LH00"
          },
          {
            id: "GUoWg3Mfh5"
          },
          {
            id: "XM2FYZmBHH"
          }
        ],
        categories: [
          {
            id: "KUBCKBkGxV"
          },
          {
            id: "ZTneo8TaIO"
          },
          {
            id: "O0ogzwLUe8"
          }
        ],
        designers: ["Isaac Childres"],
        developers: [],
        artists: ["Alexandr Elichev", "Josh T. McDowell", "Alvaro Nebot"],
        names: [
          "Gloomhaven",
          "Gloomhaven",
          "Gloomhaven",
          "Gloomhaven",
          "Gloomhaven"
        ],
        num_user_ratings: 200,
        average_user_rating: 4.1,
        official_url:
          "http://www.cephalofair.com/gloomhaven?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "https://online.flippingbook.com/view/598058/",
        weight_amount: 21.6,
        weight_units: "lbs",
        size_height: 16.2,
        size_width: 7.5,
        size_depth: 11.8,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "kIVSjvh0fG"
          }
        ],
        reddit_all_time_count: 1537,
        reddit_week_count: 25,
        reddit_day_count: 26,
        historical_low_price: 80.75,
        historical_low_date: {
          $date: "2019-07-15T05:07:39.057Z"
        }
      },
      {
        id: "i5Oqu5VZgP",
        name: "Azul",
        year_published: 2017,
        min_players: 2,
        max_players: 4,
        min_playtime: 30,
        max_playtime: 60,
        min_age: 8,
        description:
          "Azul was designed by the world famous, award winning game author Michael Riesling. Azul captures the beautiful aesthetics of Moorish art in a contemporary board game. Players compete as artisans decorating the walls of the royal Palace of Dvora. By carefully drafting the correct Quantity and style of tiles, the most clever of artisans plan ahead to maximize the beauty of their work (not to mention their scores!) while ensuring they wasted no supplies in the process. Introduced by the moors, &quot;azulejos&quot; (originally white and blue ceramic tiles) were fully embraced by the Portuguese, when their King Manuel I, on a visit to the Alhambra Palace in Southern Spain, was mesmerized by the stunning beauty of the Moorish decorative tiles. The King, awestruck by the interior beauty of the Alhambra, immediately ordered that his own Palace in Portugal be decorated with similar wall tiles. As a tile-laying artist, you have been challenged to embellish the walls of the royal Palace of Dvora.",
        description_preview:
          'Azul was designed by the world famous, award winning game author Michael Riesling. Azul captures the beautiful aesthetics of Moorish art in a contemporary board game. Players compete as artisans decorating the walls of the royal Palace of Dvora. By carefully drafting the correct Quantity and style of tiles, the most clever of artisans plan ahead to maximize the beauty of their work (not to mention their scores!) while ensuring they wasted no supplies in the process. Introduced by the moors, "azulejos" (originally white and blue ceramic tiles) were fully embraced by the Portuguese, when their King Manuel I, on a visit to the Alhambra Palace in Southern Spain, was mesmerized by the stunning beauty of the Moorish decorative tiles. The King, awestruck by the interior beauty of the Alhambra, immediately ordered that his own Palace in Portugal be decorated with similar wall tiles. As a tile-laying artist, you have been challenged to embellish the walls of the royal Palace of Dvora.',
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254200327-61EFZADvURL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254200327-61EFZADvURL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254200327-61EFZADvURL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254200327-61EFZADvURL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254200327-61EFZADvURL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254200327-61EFZADvURL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254200327-61EFZADvURL.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/i5Oqu5VZgP/azul",
        price: "28.39",
        msrp: "39.99",
        discount: "0.29",
        primary_publisher: "Next Move Games",
        publishers: ["Next Move Games", "Plan B Games"],
        mechanics: [
          {
            id: "8PN2HE86wg"
          }
        ],
        categories: [
          {
            id: "hBqZ3Ar4RJ"
          },
          {
            id: "O0ogzwLUe8"
          }
        ],
        designers: ["Michael Kiesling"],
        developers: [],
        artists: ["Philippe Guérin", "Chris Quilliams"],
        names: [],
        num_user_ratings: 313,
        average_user_rating: 3.641010746442055,
        official_url:
          "https://www.nextmovegames.com/en/home/48-azul.html?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://www.nextmovegames.com/en/index.php?controller=attachment&id_attachment=9",
        weight_amount: 3,
        weight_units: "lbs",
        size_height: 10.2,
        size_width: 2.8,
        size_depth: 10.2,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "sE1IPv0KDT"
          },
          {
            id: "ERJvhXgUtZ"
          },
          {
            id: "yp3JSY6bZv"
          }
        ],
        reddit_all_time_count: 1394,
        reddit_week_count: 36,
        reddit_day_count: 11,
        historical_low_price: 17.99,
        historical_low_date: {
          $date: "2019-08-03T03:10:26.821Z"
        }
      },
      {
        id: "yqR4PtpO8X",
        name: "Scythe",
        year_published: 2016,
        min_players: 1,
        max_players: 5,
        min_playtime: 90,
        max_playtime: 120,
        min_age: 14,
        description:
          "<i>Scythe</i> gives players almost complete control over their fate. Other than each player's individual hidden objective card, the only elements of luck or variability are &quot;Encounter&quot; cards that players will draw as they interact with the citizens of newly explored lands. Each encounter card provides the player with several options, allowing them to mitigate the luck of the draw through their selection. Combat is also driven by choices, not luck or randomness.<br />\r\n<br />\r\n<i>Scythe</i> uses a streamlined action-selection mechanism (no rounds or phases) to keep gameplay moving at a brisk pace and reduce downtime between turns. While there is plenty of direct conflict for players who seek it, there is no player elimination.<br />\r\n<br />\r\nEvery part of <i>Scythe</i> has an aspect of engine-building to it. Players can upgrade actions to become more efficient, build structures that improve their position on the map, enlist new recruits to enhance character abilities, activate mechs to deter opponents from invading, and expand their borders to reap greater types and quantities of resources. These engine-building aspects create a sense of momentum and progress throughout the game. The order in which players improve their engine adds to the unique feel of each game, even when playing one faction multiple times.",
        description_preview:
          ' Scythe  gives players almost complete control over their fate. Other than each player\'s individual hidden objective card, the only elements of luck or variability are "Encounter" cards that players will draw as they interact with the citizens of newly explored lands. Each encounter card provides the player with several options, allowing them to mitigate the luck of the draw through their selection. Combat is also driven by choices, not luck or randomness. \r\n \r\n Scythe  uses a streamlined action-selection mechanism (no rounds or phases) to keep gameplay moving at a brisk pace and reduce downtime between turns. While there is plenty of direct conflict for players who seek it, there is no player elimination. \r\n \r\nEvery part of  Scythe  has an aspect of engine-building to it. Players can upgrade actions to become more efficient, build structures that improve their position on the map, enlist new recruits to enhance character abilities, activate mechs to deter opponents from invading, and expand their borders to reap greater types and quantities of resources. These engine-building aspects create a sense of momentum and progress throughout the game. The order in which players improve their engine adds to the unique feel of each game, even when playing one faction multiple times.',
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254971843-513-lrmjs2L.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254971843-513-lrmjs2L.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254971843-513-lrmjs2L.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254971843-513-lrmjs2L.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254971843-513-lrmjs2L.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254971843-513-lrmjs2L.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254971843-513-lrmjs2L.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/yqR4PtpO8X/scythe",
        price: "57.97",
        msrp: "79.99",
        discount: "0.28",
        primary_publisher: "Stonemaier Games",
        publishers: ["Stonemaier Games"],
        mechanics: [
          {
            id: "Bc7R8pLoGk"
          },
          {
            id: "05zCZoLvQJ"
          },
          {
            id: "yu3eas6v7A"
          },
          {
            id: "hUn7uJHrYm"
          },
          {
            id: "kS8npG0jl8"
          },
          {
            id: "qu5BcGjAzk"
          },
          {
            id: "XM2FYZmBHH"
          },
          {
            id: "fBOTEBUAmV"
          }
        ],
        categories: [
          {
            id: "85OKv8p5Ow"
          },
          {
            id: "nWDac9tQzt"
          },
          {
            id: "h8wfZG0j3I"
          },
          {
            id: "zyj9ZK3mHB"
          },
          {
            id: "3B3QpKvXD3"
          },
          {
            id: "O0ogzwLUe8"
          },
          {
            id: "buDTYyPw4D"
          }
        ],
        designers: ["Jamey Stegmaier"],
        developers: [],
        artists: ["Jakub Różalski"],
        names: ["Scythe (Ding & Dent)", "Scythe"],
        num_user_ratings: 326,
        average_user_rating: 3.883040222209178,
        official_url:
          "https://stonemaiergames.com/games/scythe/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "https://app.box.com/s/rj3jrw0rab2uiz02up89kbant5g8ew1p",
        weight_amount: 7.1,
        weight_units: "lbs",
        size_height: 11.8,
        size_width: 4,
        size_depth: 14.6,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "DgUgwpJBdB"
          },
          {
            id: "4t4ckaX5rW"
          },
          {
            id: "SUAehOp3O5"
          }
        ],
        reddit_all_time_count: 1297,
        reddit_week_count: 43,
        reddit_day_count: 11,
        historical_low_price: 39.99,
        historical_low_date: {
          $date: "2019-07-15T18:31:02.109Z"
        }
      },
      {
        id: "6FmFeux5xH",
        name: "Pandemic",
        year_published: 2008,
        min_players: 2,
        max_players: 4,
        min_playtime: 45,
        max_playtime: 60,
        min_age: 8,
        description:
          "After five years of Pandemic, hundreds of thousands of players have contracted the virus! To celebrate this milestone, Pandemic has been completely re-designed. With new artwork by Chris Quilliams (Clash of Cultures, Merchants &amp; Marauders), Pandemic will now have a more modern look, inside and outside the box. With two new characters (the Contingency Planner and the Quarantine Specialist) face the game in ways you never thought possible as brand-new, virulent challenges await you!",
        description_preview:
          "After five years of Pandemic, hundreds of thousands of players have contracted the virus! To celebrate this milestone, Pandemic has been completely re-designed. With new artwork by Chris Quilliams (Clash of Cultures, Merchants & Marauders), Pandemic will now have a more modern look, inside and outside the box. With two new characters (the Contingency Planner and the Quarantine Specialist) face the game in ways you never thought possible as brand-new, virulent challenges await you!",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254186140-51iNoyxoamL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254186140-51iNoyxoamL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254186140-51iNoyxoamL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254186140-51iNoyxoamL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254186140-51iNoyxoamL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254186140-51iNoyxoamL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254186140-51iNoyxoamL.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/6FmFeux5xH/pandemic",
        price: "30.99",
        msrp: "39.99",
        discount: "0.23",
        primary_publisher: "Z-Man Games",
        publishers: [
          "Z-Man Games",
          "Κάισσα (Greece)",
          "Hobby Japan (Japan)",
          "Filosofia (France)"
        ],
        mechanics: [
          {
            id: "oeg6wN9Eoc"
          },
          {
            id: "9mNukNBxfZ"
          },
          {
            id: "WPytek5P8l"
          },
          {
            id: "MEAoOygZsA"
          },
          {
            id: "lA3KUtVFCy"
          },
          {
            id: "AVY6EvSQTP"
          },
          {
            id: "XM2FYZmBHH"
          }
        ],
        categories: [
          {
            id: "AeWXMxbm91"
          },
          {
            id: "2Gu62aKdma"
          }
        ],
        designers: ["Matt Leacock"],
        developers: [],
        artists: [
          "Joshua Cappel (graphics and illustration)",
          "Régis Moulun (cover painting)",
          "Chris Quilliams (2013 edition)"
        ],
        names: [
          "Pandemic Board Game",
          "Pandemic",
          "Pandemic: 10th Anniversary Edition"
        ],
        num_user_ratings: 427,
        average_user_rating: 3.3996685812892893,
        official_url:
          "https://www.zmangames.com/en/products/pandemic?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://images-cdn.zmangames.com/us-east-1/filer_public/25/12/251252dd-1338-4f78-b90d-afe073c72363/zm7101_pandemic_rules.pdf",
        weight_amount: 2.3,
        weight_units: "lbs",
        size_height: 12,
        size_width: 8.6,
        size_depth: 1.7,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 1265,
        reddit_week_count: 28,
        reddit_day_count: 37,
        historical_low_price: 20.46,
        historical_low_date: {
          $date: "2019-11-29T18:13:23.713Z"
        }
      },
      {
        id: "oGVgRSAKwX",
        name: "Carcassonne",
        year_published: 2000,
        min_players: 2,
        max_players: 5,
        min_playtime: 30,
        max_playtime: 45,
        min_age: 7,
        description:
          "Each game of <em>Carcassonne</em> reveals a unique environment as tiles form a landscape of cities, roads, fields, and monasteries. Claim these features with your followers to win the game.\r\n\r\n<p><em>Carcassonne</em> is a tile placement game where players collectively construct the area around the medieval French city of Carcassonne while competing to place followers on various features and score the most points. First published in 2000, the game's accessible yet deep design has attracted a wide fan base and led to the development of numerous expansions and standalone titles in the <em>Carcassonne</em> line.</p>",
        description_preview:
          "Each game of  Carcassonne  reveals a unique environment as tiles form a landscape of cities, roads, fields, and monasteries. Claim these features with your followers to win the game.\r\n\r\n  Carcassonne  is a tile placement game where players collectively construct the area around the medieval French city of Carcassonne while competing to place followers on various features and score the most points. First published in 2000, the game's accessible yet deep design has attracted a wide fan base and led to the development of numerous expansions and standalone titles in the  Carcassonne  line. ",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254282618-61HduAZGE7L.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254282618-61HduAZGE7L.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254282618-61HduAZGE7L.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254282618-61HduAZGE7L.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254282618-61HduAZGE7L.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254282618-61HduAZGE7L.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254282618-61HduAZGE7L.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/oGVgRSAKwX/carcassonne",
        price: "24.23",
        msrp: "34.99",
        discount: "0.31",
        primary_publisher: "Z-Man Games",
        publishers: [
          "Z-Man Games",
          "Hans im Gluck (Germany)",
          "999 Games (Netherlands)",
          "Фантасмагория (Bulgaria)",
          "Lautapelit.fi (Finland)",
          "Κάισσα (Greece)",
          "メビウスゲームズ (Japan)",
          "Giochi Uniti (Italy)",
          "Piatnik Budapest Kft. (Hungary)",
          "Grow (Brazil)",
          "Rio Grande Games (Sweden)",
          "Hobby World (Russia)"
        ],
        mechanics: [
          {
            id: "8PN2HE86wg"
          },
          {
            id: "fBOTEBUAmV"
          }
        ],
        categories: [
          {
            id: "7rV11PKqME"
          }
        ],
        designers: ["Klaus-Jurgen Wrede"],
        developers: [],
        artists: [
          "Doris Matthäus",
          "Anne Pätzke",
          "Chris Quilliams",
          "Klaus-Jürgen Wrede"
        ],
        names: ["carcassone"],
        num_user_ratings: 390,
        average_user_rating: 3.351282051282052,
        official_url:
          "https://www.zmangames.com/en/products/carcassonne/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://images-cdn.zmangames.com/us-east-1/filer_public/d5/20/d5208d61-8583-478b-a06d-b49fc9cd7aaa/zm7810_carcassonne_rules.pdf",
        weight_amount: 1.55,
        weight_units: "lbs",
        size_height: 2.6,
        size_width: 7.5,
        size_depth: 10.8,
        size_units: "inches",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 1255,
        reddit_week_count: 28,
        reddit_day_count: 16,
        historical_low_price: 17.49,
        historical_low_date: {
          $date: "2019-11-29T00:40:57.812Z"
        }
      },
      {
        id: "fDn9rQjH9O",
        name: "Terraforming Mars",
        year_published: 2016,
        min_players: 1,
        max_players: 5,
        min_playtime: 90,
        max_playtime: 120,
        min_age: 12,
        description:
          "In the 2400s, mankind begins to terraform the planet Mars. Giant corporations, sponsored by the World Government on Earth, initiate huge projects to raise the temperature, the oxygen level and the ocean coverage until the environment is habitable. In Terraforming Mars you play one of those corporations and work together in the terraforming process, but compete in doing the best work, with victory points awarded not only for your contribution to the terraforming, but also for advancing human infrastructure throughout the solar systems and other commendable achievements. The players acquire unique project cards, which represent anything from introducing plant life or animals, hurling asteroids at the surface, building cities, and establishing greenhouse gas industries to heat up the atmosphere. You compete for the best places for your city tiles, ocean tiles and greenery tiles. When the terraforming process is complete, the player corporation with the most victory points wins.",
        description_preview:
          "In the 2400s, mankind begins to terraform the planet Mars. Giant corporations, sponsored by the World Government on Earth, initiate huge projects to raise the temperature, the oxygen level and the ocean coverage until the environment is habitable. In Terraforming Mars you play one of those corporations and work together in the terraforming process, but compete in doing the best work, with victory points awarded not only for your contribution to the terraforming, but also for advancing human infrastructure throughout the solar systems and other commendable achievements. The players acquire unique project cards, which represent anything from introducing plant life or animals, hurling asteroids at the surface, building cities, and establishing greenhouse gas industries to heat up the atmosphere. You compete for the best places for your city tiles, ocean tiles and greenery tiles. When the terraforming process is complete, the player corporation with the most victory points wins.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254934477-61ys4u7ejfL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254934477-61ys4u7ejfL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254934477-61ys4u7ejfL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254934477-61ys4u7ejfL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254934477-61ys4u7ejfL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254934477-61ys4u7ejfL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254934477-61ys4u7ejfL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/fDn9rQjH9O/terraforming-mars",
        price: "42.99",
        msrp: "69.95",
        discount: "0.39",
        primary_publisher: "Stronghold Games",
        publishers: ["Stronghold Games", "\tFryxGames "],
        mechanics: [
          {
            id: "05zCZoLvQJ"
          },
          {
            id: "33UT4gTFqy"
          }
        ],
        categories: [
          {
            id: "3B3QpKvXD3"
          }
        ],
        designers: ["Jacob Fryxelius"],
        developers: [],
        artists: ["Isaac Fryxelius"],
        names: ["Terraforming Mars", "Terraforming Mars"],
        num_user_ratings: 281,
        average_user_rating: 3.742605448923634,
        official_url:
          "https://strongholdgames.com/store/board-games/terraforming-mars/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "http://www.fryxgames.se/TerraformingMars/TMRULESFINAL.pdf",
        weight_amount: 4,
        weight_units: "lbs ",
        size_height: 2.8,
        size_width: 11.6,
        size_depth: 11.6,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "8vuqfr7Z0j"
          }
        ],
        reddit_all_time_count: 1230,
        reddit_week_count: 40,
        reddit_day_count: 13,
        historical_low_price: 34.99,
        historical_low_date: {
          $date: "2019-09-14T10:02:25.433Z"
        }
      },
      {
        id: "TAAifFP590",
        name: "Root",
        year_published: 2018,
        min_players: 2,
        max_players: 4,
        min_playtime: 60,
        max_playtime: 90,
        min_age: 10,
        description:
          "Find adventure in this marvelous asymmetric game. Root provides limitless replay value as you and your friends explore the unique factions all wanting to rule a fantastic forest kingdom. Play as the Marquise de Cat and dominate the woods, extracting its riches and policing its inhabitants, as the Woodland Alliance, gathering supporters and coordinate revolts against the ruling regime, the Eyrie Dynasties, regaining control of the woods while keeping your squabbling court at bay, or as the Vagabond, seeking fame and fortune as you forge alliances and rivalries with the other players. Each faction has its own play style and paths to victory, providing an immersive game experience you will want to play again and again.",
        description_preview:
          "Find adventure in this marvelous asymmetric game. Root provides limitless replay value as you and your friends explore the unique factions all wanting to rule a fantastic forest kingdom. Play as the Marquise de Cat and dominate the woods, extracting its riches and policing its inhabitants, as the Woodland Alliance, gathering supporters and coordinate revolts against the ruling regime, the Eyrie Dynasties, regaining control of the woods while keeping your squabbling court at bay, or as the Vagabond, seeking fame and fortune as you forge alliances and rivalries with the other players. Each faction has its own play style and paths to victory, providing an immersive game experience you will want to play again and again.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1540147295104",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1540147295104",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1540147295104",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1540147295104",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1540147295104",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1540147295104",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1540147295104"
        },
        url: "https://www.boardgameatlas.com/search/game/TAAifFP590/root",
        price: "107.47",
        msrp: "60.00",
        discount: "-0.79",
        primary_publisher: "Leder Games",
        publishers: ["Leder Games"],
        mechanics: [
          {
            id: "PGjmKGi26h"
          },
          {
            id: "05zCZoLvQJ"
          },
          {
            id: "amcImLdOmD"
          },
          {
            id: "R0bGq4cAl4"
          },
          {
            id: "yu3eas6v7A"
          },
          {
            id: "WPytek5P8l"
          },
          {
            id: "MEAoOygZsA"
          },
          {
            id: "XM2FYZmBHH"
          }
        ],
        categories: [
          {
            id: "KUBCKBkGxV"
          },
          {
            id: "ssZjU3HETz"
          }
        ],
        designers: ["Cole Wehrle", "Patrick Leder"],
        developers: [],
        artists: ["Kyle Ferrin"],
        names: ["root ", "Root "],
        num_user_ratings: 132,
        average_user_rating: 3.8484848484848495,
        official_url:
          "http://ledergames.com/root/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://drive.google.com/drive/folders/1i9-iCUDzfGMs7HjFHhahwMS6efvvfX5w",
        weight_amount: 4,
        weight_units: "lbs ",
        size_height: 11.4,
        size_width: 8.9,
        size_depth: 2.9,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 1165,
        reddit_week_count: 39,
        reddit_day_count: 10,
        historical_low_price: 12.37,
        historical_low_date: {
          $date: "2019-02-13T20:33:09.360Z"
        }
      },
      {
        id: "5H5JS0KLzK",
        name: "Wingspan",
        year_published: 2019,
        min_players: 1,
        max_players: 5,
        min_playtime: 40,
        max_playtime: 70,
        min_age: 10,
        description:
          "<p><em><strong>Wingspan</strong></em> is a competitive, medium-weight, card-driven, engine-building board game from Stonemaier Games.</p>\r\n\r\n<p>You are bird enthusiasts—researchers, bird watchers, ornithologists, and collectors—seeking to discover and attract the best birds to your aviary. Each bird extends a chain of powerful combinations in one of your habitats (actions). These habitats  focus on several key aspects of growth:</p>\r\n\r\n<ul><li>Gain food tokens via custom dice in a birdfeeder dice tower</li><li>Lay eggs using egg miniatures in a variety of colors</li><li>Draw from hundreds of unique bird cards and play them</li></ul>\r\n\r\n<p>The winner is the player with the most points after 4 rounds.</p>\r\n\r\n<p>If you enjoy Terraforming Mars and Gizmos, we think this game will take flight at your table. The official announcement and pre-orders will be available on January 2, 2019.</p>",
        description_preview:
          "   Wingspan   is a competitive, medium-weight, card-driven, engine-building board game from Stonemaier Games. \r\n\r\n You are bird enthusiasts—researchers, bird watchers, ornithologists, and collectors—seeking to discover and attract the best birds to your aviary. Each bird extends a chain of powerful combinations in one of your habitats (actions). These habitats  focus on several key aspects of growth: \r\n\r\n  Gain food tokens via custom dice in a birdfeeder dice tower  Lay eggs using egg miniatures in a variety of colors  Draw from hundreds of unique bird cards and play them  \r\n\r\n The winner is the player with the most points after 4 rounds. \r\n\r\n If you enjoy Terraforming Mars and Gizmos, we think this game will take flight at your table. The official announcement and pre-orders will be available on January 2, 2019. ",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1545152463996",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1545152463996",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1545152463996",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1545152463996",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1545152463996",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1545152463996",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1545152463996"
        },
        url: "https://www.boardgameatlas.com/search/game/5H5JS0KLzK/wingspan",
        price: "117.96",
        msrp: "55.00",
        discount: "-1.14",
        primary_publisher: "Stonemaier Games",
        publishers: [
          "Stonemaier Games",
          "999 Games",
          "Delta Vision Publishing",
          "Maldito Games",
          "Matagot"
        ],
        mechanics: [
          {
            id: "R0bGq4cAl4"
          },
          {
            id: "yu3eas6v7A"
          },
          {
            id: "lA3KUtVFCy"
          }
        ],
        categories: [
          {
            id: "MWoxgHrOJD"
          },
          {
            id: "eX8uuNlQkQ"
          },
          {
            id: "mavSOM8vjH"
          },
          {
            id: "N0TkEGfEsF"
          },
          {
            id: "zyj9ZK3mHB"
          }
        ],
        designers: ["Elizabeth Hargrave"],
        developers: [],
        artists: [
          "Ana Maria Martinez Jaramillo",
          "Natalia Rojas",
          "Beth Sobel"
        ],
        names: [
          "Wingspan (2nd Edition)",
          "Wingspan (with Swift-Start Pack)",
          "Wingspan (1st Edition) (Ding & Dent)",
          "Wingspan"
        ],
        num_user_ratings: 158,
        average_user_rating: 3.8037974683544324,
        official_url:
          "https://stonemaiergames.com/games/wingspan/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "https://stonemaiergames.com/games/wingspan/rules/",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 1143,
        reddit_week_count: 45,
        reddit_day_count: 14,
        historical_low_price: 38.47,
        historical_low_date: {
          $date: "2019-07-04T13:02:17.707Z"
        }
      },
      {
        id: "FCuXPSfhDR",
        name: "Concordia",
        year_published: 2013,
        min_players: 2,
        max_players: 5,
        min_playtime: 90,
        max_playtime: 120,
        min_age: 13,
        description:
          "2,000 years ago, the Roman Empire ruled the lands around the Mediterranean Sea. With peace at the borders, harmony inside the provinces, uniform law, and a common currency, the economy thrived and gave rise to mighty Roman dynasties as they expanded throughout the numerous cities. Guide one of these dynasties and send colonists to the remote realms of the Empire, develop your trade network, and appease the ancient gods to curry their favor - all to gain the chance to emerge victorious in Concordia.",
        description_preview:
          "2,000 years ago, the Roman Empire ruled the lands around the Mediterranean Sea. With peace at the borders, harmony inside the provinces, uniform law, and a common currency, the economy thrived and gave rise to mighty Roman dynasties as they expanded throughout the numerous cities. Guide one of these dynasties and send colonists to the remote realms of the Empire, develop your trade network, and appease the ancient gods to curry their favor - all to gain the chance to emerge victorious in Concordia.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1538065470418",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1538065470418",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1538065470418",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1538065470418",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1538065470418",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1538065470418",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1538065470418"
        },
        url: "https://www.boardgameatlas.com/search/game/FCuXPSfhDR/concordia",
        price: "44.99",
        msrp: "64.95",
        discount: "0.31",
        primary_publisher: "Rio Grande Games",
        publishers: ["Rio Grande Games"],
        mechanics: [
          {
            id: "05zCZoLvQJ"
          },
          {
            id: "iWODHwRGuU"
          },
          {
            id: "vZsDDAdOoe"
          },
          {
            id: "WPytek5P8l"
          },
          {
            id: "MEAoOygZsA"
          },
          {
            id: "ea1eaPBQn8"
          }
        ],
        categories: [
          {
            id: "a8NM5cugJX"
          },
          {
            id: "h8wfZG0j3I"
          },
          {
            id: "O0ogzwLUe8"
          },
          {
            id: "KSBdPfxs6F"
          }
        ],
        designers: ["Mac Gerdts"],
        developers: [],
        artists: ["Dominik Mayer", "Marina Fahrenbach", "Mac Gerdts"],
        names: ["Concordia (Ding & Dent)"],
        num_user_ratings: 192,
        average_user_rating: 3.916666666666667,
        official_url:
          "http://riograndegames.com/Game/1279-Concordia?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "http://riograndegames.com/getFile.php?id=1812",
        weight_amount: 3.44,
        weight_units: "lbs ",
        size_height: 10.8,
        size_width: 7.5,
        size_depth: 2.8,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 1122,
        reddit_week_count: 32,
        reddit_day_count: 14,
        historical_low_price: 34.97,
        historical_low_date: {
          $date: "2019-11-03T18:37:00.855Z"
        }
      },
      {
        id: "6VQXkkC5ql",
        name: "Dominion: Second Edition",
        year_published: 2016,
        min_players: 2,
        max_players: 4,
        min_playtime: 15,
        max_playtime: 60,
        min_age: 14,
        description:
          "You are a monarch, like your parents before you, a ruler of a small pleasant kingdom of rivers and evergreens. Unlike your parents, however, you have hopes and dreams! You want a bigger and more pleasant kingdom, with more rivers and a wider variety of trees. You want a Dominion! <br />\r\n<br />\r\nIn all directions lie fiefs, freeholds, and feodums. All are small bits of land, controlled by petty lords and verging on anarchy. You will bring civilization to these people, uniting them under your banner.<br />\r\n<br />\r\nRio Grande Games has updated Dominion in this Second Edition. New cover and replaced a few cards; cleaned up rules and card text. Artwork on the Base cards have been changed to be similar to that found previously in Base Cards.",
        description_preview:
          "You are a monarch, like your parents before you, a ruler of a small pleasant kingdom of rivers and evergreens. Unlike your parents, however, you have hopes and dreams! You want a bigger and more pleasant kingdom, with more rivers and a wider variety of trees. You want a Dominion!  \r\n \r\nIn all directions lie fiefs, freeholds, and feodums. All are small bits of land, controlled by petty lords and verging on anarchy. You will bring civilization to these people, uniting them under your banner. \r\n \r\nRio Grande Games has updated Dominion in this Second Edition. New cover and replaced a few cards; cleaned up rules and card text. Artwork on the Base cards have been changed to be similar to that found previously in Base Cards.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254994298-61H6ZZGTpdL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254994298-61H6ZZGTpdL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254994298-61H6ZZGTpdL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254994298-61H6ZZGTpdL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254994298-61H6ZZGTpdL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254994298-61H6ZZGTpdL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254994298-61H6ZZGTpdL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/6VQXkkC5ql/dominion-2nd-edition",
        price: "31.99",
        msrp: "44.95",
        discount: "0.29",
        primary_publisher: "Rio Grande Games",
        publishers: ["Rio Grande Games"],
        mechanics: [
          {
            id: "vZsDDAdOoe"
          },
          {
            id: "yu3eas6v7A"
          },
          {
            id: "WPytek5P8l"
          }
        ],
        categories: [
          {
            id: "O0ogzwLUe8"
          }
        ],
        designers: ["Donald X. Vaccarino"],
        developers: [],
        artists: ["Matthias Catrein", "Julien Delval", "Tomasz Jedruszek"],
        names: ["Dominion", "Dominion (Second Edition)"],
        num_user_ratings: 212,
        average_user_rating: 3.4205233413423737,
        official_url:
          "http://riograndegames.com/Game/1312-Dominion-2nd-edition?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "riograndegames.com/getFile.php?id=348",
        weight_amount: 3,
        weight_units: "lbs ",
        size_height: 11.6,
        size_width: 2.9,
        size_depth: 11.6,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "3liIBe9Z4z"
          },
          {
            id: "yeNNtaBC3E"
          }
        ],
        reddit_all_time_count: 1079,
        reddit_week_count: 42,
        reddit_day_count: 15,
        historical_low_price: 24.99,
        historical_low_date: {
          $date: "2019-12-03T05:04:57.476Z"
        }
      },
      {
        id: "E4ELA8cG85",
        name: "Race for the Galaxy",
        year_published: 2007,
        min_players: 2,
        max_players: 4,
        min_playtime: 30,
        max_playtime: 60,
        min_age: 14,
        description:
          "In Race for the Galaxy from Rio Grande Games, players build galactic civilizations using game cards that represent worlds or technical and social developments. Each round consists of one or more of five possible phases. In each round, each player secretly and simultaneously chooses one of seven different action cards and then reveals it. Only the selected phases occur. For these phases, every player performs the phasea€s action, while the selecting player(s) also get a bonus for that phase. For example, if at least one player chooses the Develop action, then the Develop phase will occur, otherwise it is skipped. In it, each player may simultaneously select a development from his hand of cards to build. After revealing the cards, each player adds his development to his tableau of cards on the table and then discards cards from his hand equal to its cost. Each player who chose Develop discards one card fewer as his bonus. Explore allows a player to draw cards and select which of them to add to his hand. Settle allows a player to place a world in his tableau. Some worlds produce goods, represented by face down cards, when Produce is selected. These goods can be discarded for victory points or sold to add cards to the player's hand by selecting Consume. With cards, players can settle new worlds and build more developments, gaining both victory points and card powers that provide advantages in certain phases. The player who best manages his cards, phase and bonus selections, and card powers to build the greatest space empire, wins. The winner is the player with the most victory points.",
        description_preview:
          "In Race for the Galaxy from Rio Grande Games, players build galactic civilizations using game cards that represent worlds or technical and social developments. Each round consists of one or more of five possible phases. In each round, each player secretly and simultaneously chooses one of seven different action cards and then reveals it. Only the selected phases occur. For these phases, every player performs the phasea€s action, while the selecting player(s) also get a bonus for that phase. For example, if at least one player chooses the Develop action, then the Develop phase will occur, otherwise it is skipped. In it, each player may simultaneously select a development from his hand of cards to build. After revealing the cards, each player adds his development to his tableau of cards on the table and then discards cards from his hand equal to its cost. Each player who chose Develop discards one card fewer as his bonus. Explore allows a player to draw cards and select which of them to add to his hand. Settle allows a player to place a world in his tableau. Some worlds produce goods, represented by face down cards, when Produce is selected. These goods can be discarded for victory points or sold to add cards to the player's hand by selecting Consume. With cards, players can settle new worlds and build more developments, gaining both victory points and card powers that provide advantages in certain phases. The player who best manages his cards, phase and bonus selections, and card powers to build the greatest space empire, wins. The winner is the player with the most victory points.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254200326-516WSoozIAL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254200326-516WSoozIAL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254200326-516WSoozIAL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254200326-516WSoozIAL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254200326-516WSoozIAL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254200326-516WSoozIAL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254200326-516WSoozIAL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/E4ELA8cG85/race-for-the-galaxy",
        price: "23.99",
        msrp: "34.99",
        discount: "0.31",
        primary_publisher: "Rio Grande Games",
        publishers: ["Rio Grande Games"],
        mechanics: [
          {
            id: "yu3eas6v7A"
          },
          {
            id: "WPytek5P8l"
          },
          {
            id: "DEvPj5twid"
          }
        ],
        categories: [
          {
            id: "3B3QpKvXD3"
          },
          {
            id: "O0ogzwLUe8"
          }
        ],
        designers: ["Thomas Lehmann"],
        developers: [],
        artists: ["Claus Stephan", "Martin Hoffmann", "Mirko Suzuki"],
        names: [],
        num_user_ratings: 189,
        average_user_rating: 3.593970874701773,
        official_url:
          "http://riograndegames.com/games.html?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "http://riograndegames.com/getFile.php?id=273",
        weight_amount: 1.3,
        weight_units: "lbs",
        size_height: 7.5,
        size_width: 2.8,
        size_depth: 10.8,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "c69qmDp1SX"
          }
        ],
        reddit_all_time_count: 949,
        reddit_week_count: 42,
        reddit_day_count: 6,
        historical_low_price: 21.82,
        historical_low_date: {
          $date: "2019-08-03T10:02:50.286Z"
        }
      },
      {
        id: "M5treAlrHc",
        name: "Agricola (Revised Edition)",
        year_published: 2016,
        min_players: 1,
        max_players: 4,
        min_playtime: 30,
        max_playtime: 120,
        min_age: 10,
        description:
          "Updated and streamlined for a new generation of players, <i>Agricola</i>, the award-winning and highly acclaimed game by Uwe Rosenberg, features a revised rulebook and gameplay, along with wood pieces and components for up to four players.",
        description_preview:
          "Updated and streamlined for a new generation of players,  Agricola , the award-winning and highly acclaimed game by Uwe Rosenberg, features a revised rulebook and gameplay, along with wood pieces and components for up to four players.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254915322-61vm3wX33lL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254915322-61vm3wX33lL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254915322-61vm3wX33lL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254915322-61vm3wX33lL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254915322-61vm3wX33lL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254915322-61vm3wX33lL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254915322-61vm3wX33lL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/M5treAlrHc/agricola-revised-edition",
        price: "46.95",
        msrp: "50.99",
        discount: "0.08",
        primary_publisher: "Lookout Games",
        publishers: ["Lookout Games", "Mayfair Games"],
        mechanics: [
          {
            id: "wV5peB05xs"
          },
          {
            id: "WPytek5P8l"
          }
        ],
        categories: [
          {
            id: "N0TkEGfEsF"
          },
          {
            id: "O0ogzwLUe8"
          }
        ],
        designers: ["Uwe Rosenberg"],
        developers: [],
        artists: ["Klemens Franz"],
        names: [],
        num_user_ratings: 178,
        average_user_rating: 3.6596100528684796,
        official_url: null,
        rules_url:
          "http://www.tabladejoc.ro/userfiles/downloads/agricola-rules.pdf",
        weight_amount: 5,
        weight_units: "lbs ",
        size_height: 8.9,
        size_width: 2.8,
        size_depth: 12.4,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "3liIBe9Z4z"
          },
          {
            id: "qRmWOyGrea"
          }
        ],
        reddit_all_time_count: 894,
        reddit_week_count: 1,
        reddit_day_count: 0,
        historical_low_price: 31.99,
        historical_low_date: {
          $date: "2019-11-29T09:37:13.411Z"
        }
      },
      {
        id: "O0G8z5Wgz1",
        name: "Splendor",
        year_published: 2014,
        min_players: 2,
        max_players: 4,
        min_playtime: 30,
        max_playtime: 60,
        min_age: 10,
        description:
          "As a wealthy Renaissance merchant, acquire mines and transportation, hire artisans and woo the nobility. Create the most fantastic jewelry to become the best-known merchant of them all! Acquire precious stones to trade them for development cards. Use development cards to acquire more gem stones. Use your gems and gold to create the most fantastic jewelry, and appeal to the nobles to gain the prestige you need to win.<br />\r\n<br />\r\nSplendor is a fast-paced and addictive game of chip-collecting and card development. Players are merchants of the Renaissance trying to buy gem mines, means of transportation, shops; all in order to acquire the most prestige points. If you're wealthy enough, you might even receive a visit from a noble at some point, which of course will further increase your prestige.<br />\r\n <br />\r\nOn your turn, you may (1) collect chips (gems), or (2) buy and build a card, or (3) reserve one card. If you collect chips, you take either three different kinds of chips or two chips of the same kind. If you buy a card, you pay its price in chips and add it to your playing area. To reserve a card, you place it in front of you face down for later building; this costs you a round, but you also get gold in the form of a joker chip, which you can use as any gem.<br />\r\n <br />\r\nAll of the cards you buy increase your wealth as they give you a permanent gem bonus for later buys; some of the cards also give you prestige points. In order to win the game, you must reach 15 prestige points before your opponents do.",
        description_preview:
          "As a wealthy Renaissance merchant, acquire mines and transportation, hire artisans and woo the nobility. Create the most fantastic jewelry to become the best-known merchant of them all! Acquire precious stones to trade them for development cards. Use development cards to acquire more gem stones. Use your gems and gold to create the most fantastic jewelry, and appeal to the nobles to gain the prestige you need to win. \r\n \r\nSplendor is a fast-paced and addictive game of chip-collecting and card development. Players are merchants of the Renaissance trying to buy gem mines, means of transportation, shops; all in order to acquire the most prestige points. If you're wealthy enough, you might even receive a visit from a noble at some point, which of course will further increase your prestige. \r\n  \r\nOn your turn, you may (1) collect chips (gems), or (2) buy and build a card, or (3) reserve one card. If you collect chips, you take either three different kinds of chips or two chips of the same kind. If you buy a card, you pay its price in chips and add it to your playing area. To reserve a card, you place it in front of you face down for later building; this costs you a round, but you also get gold in the form of a joker chip, which you can use as any gem. \r\n  \r\nAll of the cards you buy increase your wealth as they give you a permanent gem bonus for later buys; some of the cards also give you prestige points. In order to win the game, you must reach 15 prestige points before your opponents do.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254164722-51AHDwGznvL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254164722-51AHDwGznvL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254164722-51AHDwGznvL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254164722-51AHDwGznvL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254164722-51AHDwGznvL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254164722-51AHDwGznvL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254164722-51AHDwGznvL.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/O0G8z5Wgz1/splendor",
        price: "34.98",
        msrp: "39.99",
        discount: "0.13",
        primary_publisher: "Asmodee Editions",
        publishers: ["Asmodee Editions", "Space Cowboys"],
        mechanics: [
          {
            id: "wV5peB05xs"
          },
          {
            id: "lA3KUtVFCy"
          }
        ],
        categories: [
          {
            id: "eX8uuNlQkQ"
          },
          {
            id: "N0TkEGfEsF"
          },
          {
            id: "zyj9ZK3mHB"
          }
        ],
        designers: ["Marc Andre"],
        developers: [],
        artists: ["Pascal Quidault"],
        names: [],
        num_user_ratings: 312,
        average_user_rating: 3.3406394330307374,
        official_url:
          "https://www.daysofwonder.com/online/en/splendor/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://www.spacecowboys.fr/img/games/splendor/details/rules/Rules_Splendor_US.pdf",
        weight_amount: 3.95,
        weight_units: "lbs ",
        size_height: 8.5,
        size_width: 2.4,
        size_depth: 10.8,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 875,
        reddit_week_count: 22,
        reddit_day_count: 5,
        historical_low_price: 16.54,
        historical_low_date: {
          $date: "2019-11-29T20:48:00.462Z"
        }
      },
      {
        id: "GP7Y2xOUzj",
        name: "Codenames",
        year_published: 2015,
        min_players: 2,
        max_players: 8,
        min_playtime: 15,
        max_playtime: 20,
        min_age: 14,
        description:
          "The two rival spymasters know the secret identities of 25 agents. Their teammates know the agents only by their CODENAMES.<br />\r\n<br />\r\nThe teams compete to see who can make contact with all of their agents first. Spymasters give one-word clues that can point to multiple words on the board. Their teammates try to guess words of the right color while avoiding those that belong to the opposing team. And everyone wants to avoid the assassin.<br />\r\n<br />\r\nCodenames: win or lose, it's fun to figure out the clues.",
        description_preview:
          "The two rival spymasters know the secret identities of 25 agents. Their teammates know the agents only by their CODENAMES. \r\n \r\nThe teams compete to see who can make contact with all of their agents first. Spymasters give one-word clues that can point to multiple words on the board. Their teammates try to guess words of the right color while avoiding those that belong to the opposing team. And everyone wants to avoid the assassin. \r\n \r\nCodenames: win or lose, it's fun to figure out the clues.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254183526-51f6ysXCMmL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254183526-51f6ysXCMmL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254183526-51f6ysXCMmL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254183526-51f6ysXCMmL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254183526-51f6ysXCMmL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254183526-51f6ysXCMmL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254183526-51f6ysXCMmL.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/GP7Y2xOUzj/codenames",
        price: "13.49",
        msrp: "20.00",
        discount: "0.33",
        primary_publisher: "Czech Games Edition",
        publishers: ["Czech Games Edition"],
        mechanics: [
          {
            id: "r6yIFvyXDD"
          }
        ],
        categories: [
          {
            id: "eX8uuNlQkQ"
          },
          {
            id: "X8J7RM6dxX"
          }
        ],
        designers: ["Vlaada Chvátil"],
        developers: [],
        artists: ["Stéphane Gantiez", "Tomáš Kučerovský"],
        names: ["שם-קוד "],
        num_user_ratings: 393,
        average_user_rating: 3.4923465330788828,
        official_url:
          "https://czechgames.com/en/codenames/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "https://czechgames.com/files/rules/codenames-rules-en.pdf",
        weight_amount: 1.25,
        weight_units: "lbs ",
        size_height: 2.8,
        size_width: 6.3,
        size_depth: 9,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "Dxj6IrT1Rn"
          },
          {
            id: "9iEx7000oe"
          }
        ],
        reddit_all_time_count: 835,
        reddit_week_count: 11,
        reddit_day_count: 6,
        historical_low_price: 9.74,
        historical_low_date: {
          $date: "2019-11-24T20:29:56.960Z"
        }
      },
      {
        id: "AuBvbISHR6",
        name: "Ticket To Ride",
        year_published: 2004,
        min_players: 2,
        max_players: 5,
        min_playtime: 45,
        max_playtime: 90,
        min_age: 8,
        description:
          "Ticket to Ride is a cross-country train adventure game. Players collect train cards that enable them to claim railway routes connecting cities throughout North America. The longer the routes, the more points they earn. Additional points come to those who can fulfill their Destination Tickets by connecting two distant cities, and to the player who builds the longest continuous railway. So climb aboard for some railroading fun and adventure. You've got a Ticket to Ride!<br />\r\n<br />\r\nOctober 2, 1900 -- it's 28 years to the day that noted London eccentric, Phileas Fogg accepted and then won a 20,000 bet that he could travel Around the World in 80 Days. Now at the dawn of the century some old friends have gathered to celebrate Fogg's impetuous and lucrative gamble -- and to propose a new wager of their own. The stakes: $1 million in a winner-takes-all competition. The objective: to see the most cities in North America -- in just 7 days. <br />\r\n<br />\r\n-Spiel Des Jahres 2004(German game of the year)<br />\r\n-As d'Or Cannes 2004 (French game of the year)<br />\r\n-Game of the year 2004 - Japan<br />\r\n-Game of the year 2004 - Sweden<br />\r\n-Game of the year 2004 - Finland<br />\r\n-Diana Jones Excellence in Gaming Award 2004<br />\r\n-Origins Award Winner - Best Board Game 2005<br />\r\n-Game of the year 2004 - Spain<br />\r\n-Parent's Choice Foundation Silver Medal 2004",
        description_preview:
          "Ticket to Ride is a cross-country train adventure game. Players collect train cards that enable them to claim railway routes connecting cities throughout North America. The longer the routes, the more points they earn. Additional points come to those who can fulfill their Destination Tickets by connecting two distant cities, and to the player who builds the longest continuous railway. So climb aboard for some railroading fun and adventure. You've got a Ticket to Ride! \r\n \r\nOctober 2, 1900 -- it's 28 years to the day that noted London eccentric, Phileas Fogg accepted and then won a 20,000 bet that he could travel Around the World in 80 Days. Now at the dawn of the century some old friends have gathered to celebrate Fogg's impetuous and lucrative gamble -- and to propose a new wager of their own. The stakes: $1 million in a winner-takes-all competition. The objective: to see the most cities in North America -- in just 7 days.  \r\n \r\n-Spiel Des Jahres 2004(German game of the year) \r\n-As d'Or Cannes 2004 (French game of the year) \r\n-Game of the year 2004 - Japan \r\n-Game of the year 2004 - Sweden \r\n-Game of the year 2004 - Finland \r\n-Diana Jones Excellence in Gaming Award 2004 \r\n-Origins Award Winner - Best Board Game 2005 \r\n-Game of the year 2004 - Spain \r\n-Parent's Choice Foundation Silver Medal 2004",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254202421-61wLscAHHSL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254202421-61wLscAHHSL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254202421-61wLscAHHSL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254202421-61wLscAHHSL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254202421-61wLscAHHSL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254202421-61wLscAHHSL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254202421-61wLscAHHSL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/AuBvbISHR6/ticket-to-ride",
        price: "44.99",
        msrp: "49.99",
        discount: "0.10",
        primary_publisher: "Days of Wonder",
        publishers: ["Days of Wonder"],
        mechanics: [
          {
            id: "wV5peB05xs"
          },
          {
            id: "WPytek5P8l"
          },
          {
            id: "c6gkRM7rSy"
          },
          {
            id: "lA3KUtVFCy"
          }
        ],
        categories: [
          {
            id: "h8wfZG0j3I"
          }
        ],
        designers: ["Alan R. Moon"],
        developers: [],
        artists: ["Julien Delval", "Cyrille Daujean"],
        names: [],
        num_user_ratings: 325,
        average_user_rating: 3.282852601329537,
        official_url:
          "https://www.daysofwonder.com/tickettoride/en/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://ncdn0.daysofwonder.com/tickettoride/en/img/tt_rules_2015_en.pdf",
        weight_amount: 2.8,
        weight_units: "lbs ",
        size_height: 11.8,
        size_width: 11.8,
        size_depth: 3,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "FbhyxVWcOu"
          }
        ],
        reddit_all_time_count: 785,
        reddit_week_count: 15,
        reddit_day_count: 14,
        historical_low_price: 24.99,
        historical_low_date: {
          $date: "2019-12-02T10:02:47.070Z"
        }
      },
      {
        id: "8YYQ8Q3dGv",
        name: "Arboretum",
        year_published: 2015,
        min_players: 2,
        max_players: 4,
        min_playtime: 30,
        max_playtime: 45,
        min_age: 8,
        description:
          "Arboretum is a strategic card game that challenges players to create the most beautiful path through the garden. Choosing the correct cards and placing them in the most efficient orientation will score you the most points at the end of the game. With elegantly simple rules, Arboretum offers players surprisingly complex choices.",
        description_preview:
          "Arboretum is a strategic card game that challenges players to create the most beautiful path through the garden. Choosing the correct cards and placing them in the most efficient orientation will score you the most points at the end of the game. With elegantly simple rules, Arboretum offers players surprisingly complex choices.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254997948-513u-lZqyZL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254997948-513u-lZqyZL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254997948-513u-lZqyZL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254997948-513u-lZqyZL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254997948-513u-lZqyZL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254997948-513u-lZqyZL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254997948-513u-lZqyZL.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/8YYQ8Q3dGv/arboretum",
        price: "13.97",
        msrp: "14.49",
        discount: "0.04",
        primary_publisher: "Renegade Game Studios",
        publishers: [
          "Renegade Game Studios",
          " Filosofia Éditions",
          "Z-Man Games",
          "ABACUSSPIELE",
          "Fractal Juegos",
          "Rebel",
          "Vagabund"
        ],
        mechanics: [
          {
            id: "WPytek5P8l"
          },
          {
            id: "lA3KUtVFCy"
          },
          {
            id: "8PN2HE86wg"
          }
        ],
        categories: [
          {
            id: "eX8uuNlQkQ"
          }
        ],
        designers: ["Dan Cassar"],
        developers: [],
        artists: [
          "Philippe Guérin",
          "Chris Quilliams",
          "Beth Sobel",
          "Waldo Ramirez"
        ],
        names: [],
        num_user_ratings: 132,
        average_user_rating: 3.41993006993007,
        official_url:
          "https://www.renegadegamestudios.com/arboretum/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        weight_amount: 10.6,
        weight_units: "oz",
        size_height: 10,
        size_width: 10,
        size_depth: 2,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 781,
        reddit_week_count: 25,
        reddit_day_count: 6,
        historical_low_price: 11.97,
        historical_low_date: {
          $date: "2019-11-27T23:23:35.387Z"
        }
      },
      {
        id: "7NYbgH2Z2I",
        name: "Viticulture: Essential Edition",
        year_published: 2015,
        min_players: 1,
        max_players: 6,
        min_playtime: 90,
        max_playtime: 120,
        min_age: 13,
        description:
          "Viticulture is a worker-placement game set in the foothills of Tuscany. The Essential Edition includes the second edition of Viticulture along with several elements from the original Tuscany expansion pack, hand-picked by famed designer Uwe Rosenberg.",
        description_preview:
          "Viticulture is a worker-placement game set in the foothills of Tuscany. The Essential Edition includes the second edition of Viticulture along with several elements from the original Tuscany expansion pack, hand-picked by famed designer Uwe Rosenberg.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254894908-61llEAverzL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254894908-61llEAverzL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254894908-61llEAverzL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254894908-61llEAverzL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254894908-61llEAverzL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254894908-61llEAverzL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254894908-61llEAverzL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/7NYbgH2Z2I/viticulture-essential-edition",
        price: "40.99",
        msrp: "60.00",
        discount: "0.32",
        primary_publisher: "Stonemaier Games",
        publishers: ["Stonemaier Games"],
        mechanics: [
          {
            id: "WPytek5P8l"
          },
          {
            id: "fBOTEBUAmV"
          }
        ],
        categories: [
          {
            id: "N0TkEGfEsF"
          },
          {
            id: "Wr8uXcoR9p"
          }
        ],
        designers: ["Morten Monrad Pedersen", "Jamey Stegmaier", "Alan Stone"],
        developers: [],
        artists: ["Jacqui Davis", "David Montgomery", "Beth Sobel"],
        names: [
          "Viticulture",
          "Viticulture: Essential Edition (Deal of the Day)"
        ],
        num_user_ratings: 219,
        average_user_rating: 3.7983257229832574,
        official_url:
          "https://stonemaiergames.com/games/viticulture/essential-edition/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "https://app.box.com/s/c3u4rk2dg59jf7fp3b47amu97w0sw8qi",
        weight_amount: 3.51,
        weight_units: "lbs ",
        size_height: 8.7,
        size_width: 3.9,
        size_depth: 10.6,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "2AG2GTfMTR"
          }
        ],
        reddit_all_time_count: 774,
        reddit_week_count: 18,
        reddit_day_count: 5,
        historical_low_price: 32.97,
        historical_low_date: {
          $date: "2019-09-11T17:28:50.178Z"
        }
      },
      {
        id: "9iBOPn3lES",
        name: "Patchwork",
        year_published: 2014,
        min_players: 2,
        max_players: 2,
        min_playtime: 15,
        max_playtime: 30,
        min_age: 8,
        description:
          "Patchwork is a form of needlework that involves sewing together pieces of fabric into a larger design. In the past, it was a way to make use of leftover pieces of cloth to create clothing and quilts. Today, patchwork is a form of art, in which the designers use precious fabrics to create beautiful textiles. The use of uneven pieces of fabric in particular can result in real masterpieces and is therefore being practiced by a large number of textile artists.<br />\r\n<br />\r\nTo create a beautiful quilt, however, requires effort and time, but the available patches just do not want to fit together. So choose your patches carefully and keep a healthy supply of buttons to not only finish your quilt, but to make it better and more beautiful than your opponent's.",
        description_preview:
          "Patchwork is a form of needlework that involves sewing together pieces of fabric into a larger design. In the past, it was a way to make use of leftover pieces of cloth to create clothing and quilts. Today, patchwork is a form of art, in which the designers use precious fabrics to create beautiful textiles. The use of uneven pieces of fabric in particular can result in real masterpieces and is therefore being practiced by a large number of textile artists. \r\n \r\nTo create a beautiful quilt, however, requires effort and time, but the available patches just do not want to fit together. So choose your patches carefully and keep a healthy supply of buttons to not only finish your quilt, but to make it better and more beautiful than your opponent's.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254997949-61iejxLClRL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254997949-61iejxLClRL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254997949-61iejxLClRL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254997949-61iejxLClRL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254997949-61iejxLClRL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254997949-61iejxLClRL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254997949-61iejxLClRL.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/9iBOPn3lES/patchwork",
        price: "23.96",
        msrp: "29.99",
        discount: "0.20",
        primary_publisher: "Lookout Games",
        publishers: [
          "Lookout Games",
          "999 Games ",
          "Compaya.hu - Gamer Café Kft.",
          "Crowd Games",
          "Funforge",
          "GeGe Co. Ltd.",
          "Kaissa Chess & Games",
          "Korea Boardgames co.",
          " Ltd.",
          "Lacerta",
          "Lautapelit.fi",
          "Ludicus",
          "Ludofy Creative",
          "Maldito Games",
          "Mayfair Games",
          "MINDOK",
          "NeoTroy Games",
          "Rebel",
          "uplay.it edizioni",
          "Нескучные игры"
        ],
        mechanics: [
          {
            id: "wV5peB05xs"
          },
          {
            id: "8PN2HE86wg"
          },
          {
            id: "cXd5KaXXZo"
          }
        ],
        categories: [
          {
            id: "hBqZ3Ar4RJ"
          },
          {
            id: "O0ogzwLUe8"
          }
        ],
        designers: ["Uwe Rosenberg"],
        developers: [],
        artists: ["Klemens Franz "],
        names: ["Patchwork", "Patchwork"],
        num_user_ratings: 253,
        average_user_rating: 3.4907918632174892,
        weight_amount: 1.19,
        weight_units: "lbs ",
        size_height: 7.7,
        size_width: 7.7,
        size_depth: 1.8,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 730,
        reddit_week_count: 23,
        reddit_day_count: 3,
        historical_low_price: 16.99,
        historical_low_date: {
          $date: "2019-11-29T13:00:12.730Z"
        }
      },
      {
        id: "OIXt3DmJU0",
        name: "Catan",
        year_published: 1995,
        min_players: 3,
        max_players: 4,
        min_playtime: 45,
        max_playtime: 90,
        min_age: 10,
        description:
          "<p>The women and men of your expedition build the first two settlements. Fortunately, the land is rich in natural resources. You build roads and new settlements that eventually become cities. Will you succeed in gaining supremacy on Catan? Barter trade dominates the scene. Some resources you have in abundance, other resources are scarce. Ore for wool, brick for lumber - you trade according to what is needed for your current building projects. Proceed strategically! If you found your settlements in the right places and skillfully trade your resources, then the odds will be in your favor. But your opponents are smart too.</p>\r\n\r\n<p>To begin the game, we build the game board using hexagonal terrain tiles. Catan is born - a beautiful island with mountains, pastures, hills, fields, and forests, surrounded by the sea.</p>\r\n\r\n<p>Each of us places two small houses on spaces where three terrain hexes meet. They are our starting settlements.</p>\r\n\r\n<p>And so it begins. I roll two dice. An “11”! Each terrain hex is marked with a die roll number. Each player who owns a settlement adjacent to a terrain hex marked with the number rolled receives a resource produced by this hex. Hills produce brick, forests produce lumber, mountains produce ore, fields produce grain, and pastures produce wool.</p>\r\n\r\n<p>We use these resources to expand across Catan: we build roads and new settlements, or we upgrade our existing settlements to cities. For example, a road costs 1 brick and 1 lumber. If we do not have the necessary resources, we can acquire them by trading with our opponents.</p>\r\n\r\n<p>Each settlement is worth 1 victory point and each city is worth 2 victory points. If you expand cleverly, you may be the first player to reach 10 victory points and thus win the game!</p>",
        description_preview:
          " The women and men of your expedition build the first two settlements. Fortunately, the land is rich in natural resources. You build roads and new settlements that eventually become cities. Will you succeed in gaining supremacy on Catan? Barter trade dominates the scene. Some resources you have in abundance, other resources are scarce. Ore for wool, brick for lumber - you trade according to what is needed for your current building projects. Proceed strategically! If you found your settlements in the right places and skillfully trade your resources, then the odds will be in your favor. But your opponents are smart too. \r\n\r\n To begin the game, we build the game board using hexagonal terrain tiles. Catan is born - a beautiful island with mountains, pastures, hills, fields, and forests, surrounded by the sea. \r\n\r\n Each of us places two small houses on spaces where three terrain hexes meet. They are our starting settlements. \r\n\r\n And so it begins. I roll two dice. An “11”! Each terrain hex is marked with a die roll number. Each player who owns a settlement adjacent to a terrain hex marked with the number rolled receives a resource produced by this hex. Hills produce brick, forests produce lumber, mountains produce ore, fields produce grain, and pastures produce wool. \r\n\r\n We use these resources to expand across Catan: we build roads and new settlements, or we upgrade our existing settlements to cities. For example, a road costs 1 brick and 1 lumber. If we do not have the necessary resources, we can acquire them by trading with our opponents. \r\n\r\n Each settlement is worth 1 victory point and each city is worth 2 victory points. If you expand cleverly, you may be the first player to reach 10 victory points and thus win the game! ",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559258096678-51Eiofu9mqL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559258096678-51Eiofu9mqL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559258096678-51Eiofu9mqL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559258096678-51Eiofu9mqL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559258096678-51Eiofu9mqL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559258096678-51Eiofu9mqL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559258096678-51Eiofu9mqL.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/OIXt3DmJU0/catan",
        price: "44.10",
        msrp: "49.00",
        discount: "0.10",
        primary_publisher: "Catan Studio",
        publishers: [
          "Catan Studio",
          "Kosmos (Germany)",
          "Filosofia (France)",
          "999 Games (Benelux)",
          "Capcom (Japan)",
          "Smart (Russia)",
          "Κάισσα (Greece)",
          "Devir (Brazil)",
          "HaKubia (Israel)",
          "Grow Jogos e Brinquedos (Brazil)",
          "Galakta (Poland)",
          "Albi (Czech republic and Slovakia)"
        ],
        mechanics: [
          {
            id: "R0bGq4cAl4"
          },
          {
            id: "c6gkRM7rSy"
          },
          {
            id: "AVY6EvSQTP"
          }
        ],
        categories: [
          {
            id: "7rV11PKqME"
          },
          {
            id: "O0ogzwLUe8"
          }
        ],
        designers: ["Klaus Teuber"],
        developers: [],
        artists: [
          "Volkan Baga",
          "Tanja Donner",
          "Pete Fenlon",
          "Jason Hawkins",
          "Michaela Kienle",
          "Harald Lieske",
          "Michael Menzel",
          "Marion Pott",
          "Matt Schwabel",
          "Franz Vohwinkel",
          "Stephen Graham Walsh"
        ],
        names: [
          "Settlers of Catan",
          "Settlers",
          "trade build settle",
          "Catan 5th Edition",
          "Catan: 5th Edition",
          "Die Siedler von Catan ",
          "Catan - Das Spiel",
          "Les Colons de Catane"
        ],
        num_user_ratings: 379,
        average_user_rating: 2.9595823500841894,
        official_url:
          "https://www.catan.com/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "https://www.catan.com/game/catan#prof-easy",
        weight_amount: 2,
        weight_units: "lbs ",
        size_height: 11.6,
        size_width: 9.5,
        size_depth: 3,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "Dxj6IrT1Rn"
          }
        ],
        reddit_all_time_count: 721,
        reddit_week_count: 16,
        reddit_day_count: 20,
        historical_low_price: 24.99,
        historical_low_date: {
          $date: "2019-12-07T18:14:01.946Z"
        }
      },
      {
        id: "OF145SrX44",
        name: "7 Wonders",
        year_published: 2010,
        min_players: 2,
        max_players: 7,
        min_playtime: 30,
        max_playtime: 45,
        min_age: 10,
        description:
          "<i>Winner of the 2011 Kennerspiel des Jahres (Enthusiasts Game of the Year) Award.</i><br /><br />\r\nYou are the leader of one of the 7 great cities of the Ancient World. Gather resources, develop commercial routes and affirm your military supremacy. Build your city and erect an architectural wonder which will transcend future times!<br /><br />\r\n7 wonders is a simple and addictive game for the whole family. In 30 minutes you can raise a complete civilization and build the greatest Wonders of the World.",
        description_preview:
          " Winner of the 2011 Kennerspiel des Jahres (Enthusiasts Game of the Year) Award.   \r\nYou are the leader of one of the 7 great cities of the Ancient World. Gather resources, develop commercial routes and affirm your military supremacy. Build your city and erect an architectural wonder which will transcend future times!  \r\n7 wonders is a simple and addictive game for the whole family. In 30 minutes you can raise a complete civilization and build the greatest Wonders of the World.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559253945470-61dlm9QcXpL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559253945470-61dlm9QcXpL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559253945470-61dlm9QcXpL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559253945470-61dlm9QcXpL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559253945470-61dlm9QcXpL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559253945470-61dlm9QcXpL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559253945470-61dlm9QcXpL.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/OF145SrX44/7-wonders",
        price: "30.99",
        msrp: "49.99",
        discount: "0.38",
        primary_publisher: "Repos Production",
        publishers: [
          "Repos Production",
          "ADC Blackfire Entertainment",
          "Asmodee",
          "Asterion Press",
          "Galápagos Jogos",
          "Gém Klub Kft.",
          "Hobby Japan",
          "Kaissa Chess & Games",
          "Lautapelit.fi",
          "Lifestyle Boardgames Ltd",
          "NeoTroy Games",
          "Rebel"
        ],
        mechanics: [
          {
            id: "wV5peB05xs"
          },
          {
            id: "WPytek5P8l"
          },
          {
            id: "lA3KUtVFCy"
          }
        ],
        categories: [
          {
            id: "a8NM5cugJX"
          },
          {
            id: "eX8uuNlQkQ"
          },
          {
            id: "ODWOjWAJj3"
          },
          {
            id: "O0ogzwLUe8"
          }
        ],
        designers: ["Antoine Bauza"],
        developers: [],
        artists: ["Antoine Bauza", "Miguel Coimbra"],
        names: ["7 Wonders", "7 Wonders"],
        num_user_ratings: 362,
        average_user_rating: 3.4182123125493313,
        official_url:
          "http://www.7wonders.net/7-wonders/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "http://www.7wonders.net/wp-content/uploads/2017/06/7WONDERS_RULES_US.pdf",
        weight_amount: 2.65,
        weight_units: "lbs",
        size_height: 11,
        size_width: 11,
        size_depth: 3,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "EVHPHypCaC"
          },
          {
            id: "uds4Zc4pbA"
          }
        ],
        reddit_all_time_count: 708,
        reddit_week_count: 23,
        reddit_day_count: 9,
        historical_low_price: 24.99,
        historical_low_date: {
          $date: "2019-12-02T10:02:15.628Z"
        }
      },
      {
        id: "pPZnlKC4G3",
        name: "Inis",
        year_published: 2016,
        min_players: 2,
        max_players: 4,
        min_playtime: 60,
        max_playtime: 90,
        min_age: 14,
        description:
          "<div><p>The game's elegant mechanics combine card drafting and area control to produce a system rich in strategic options and interpersonal interactions.<br />At the same time, brilliantly crafted tiles give every game a unique, gradually unfolding geography. The gorgeous original art brings Ireland's ancient epics and audacious heroes to life.<br /></p><p><br />There are three different types of cards in <i>Inis</i>:<br />Action Cards - These are drafted each round and provide the base actions to deploy troops, move troops, attack, and play new regions.<br />Advantage Cards - These are acquired as a result of controlling certain regions. Each region has its own Advantage Card you receive as a result of having the most troops in it.<br />Epic Tales Cards - These unique and powerful cards evoke the Celtic gods and heroes to inspire the clans to accomplish legendary feats.</p></div>",
        description_preview:
          "  The game's elegant mechanics combine card drafting and area control to produce a system rich in strategic options and interpersonal interactions. At the same time, brilliantly crafted tiles give every game a unique, gradually unfolding geography. The gorgeous original art brings Ireland's ancient epics and audacious heroes to life.    There are three different types of cards in  Inis : Action Cards - These are drafted each round and provide the base actions to deploy troops, move troops, attack, and play new regions. Advantage Cards - These are acquired as a result of controlling certain regions. Each region has its own Advantage Card you receive as a result of having the most troops in it. Epic Tales Cards - These unique and powerful cards evoke the Celtic gods and heroes to inspire the clans to accomplish legendary feats.  ",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255828707-61nsxy2BledL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255828707-61nsxy2BledL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559255828707-61nsxy2BledL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559255828707-61nsxy2BledL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559255828707-61nsxy2BledL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559255828707-61nsxy2BledL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255828707-61nsxy2BledL.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/pPZnlKC4G3/inis",
        price: "56.99",
        msrp: "69.99",
        discount: "0.19",
        primary_publisher: "Asmodee Editions",
        publishers: [
          "Asmodee Editions",
          "Matagot",
          "Gen-X Games",
          "Hobby Japan",
          "Lavka Games",
          "Pegasus Spiele",
          "Portal Games",
          "Surfin' Meeple China"
        ],
        mechanics: [
          {
            id: "05zCZoLvQJ"
          },
          {
            id: "wV5peB05xs"
          },
          {
            id: "WPytek5P8l"
          },
          {
            id: "r6yIFvyXDD"
          },
          {
            id: "8PN2HE86wg"
          }
        ],
        categories: [
          {
            id: "a8NM5cugJX"
          },
          {
            id: "eX8uuNlQkQ"
          },
          {
            id: "MHkqIVxwtx"
          }
        ],
        designers: [" Christian Martinez"],
        developers: [],
        artists: ["Dimitri Bielak", "Jim Fitzpatrick"],
        names: [],
        num_user_ratings: 99,
        average_user_rating: 3.7555096418732776,
        official_url:
          "http://www.matagot.com/en/catalog/details/expert-games/1/inis/794#scrol?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "http://www.matagot.com/data/atasamente/INIS_RULES_EN.pdf",
        weight_amount: 4.72,
        weight_units: "lbs ",
        size_height: 10.9,
        size_width: 3.1,
        size_depth: 15.6,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 705,
        reddit_week_count: 37,
        reddit_day_count: 9,
        historical_low_price: 45.87,
        historical_low_date: {
          $date: "2019-07-16T10:01:07.520Z"
        }
      },
      {
        id: "vBBhuJjFVE",
        name: "Food Chain Magnate",
        year_published: 2015,
        min_players: 2,
        max_players: 5,
        min_playtime: 120,
        max_playtime: 240,
        min_age: 14,
        description:
          "&quot;Lemonade? They want lemonade? What is the world coming to? I want commercials for burgers on all channels, every 15 minutes. We are the Home of the Original Burger, not a hippie health haven. And place a billboard next to that new house on the corner. I want them craving beer every second they sit in their posh new garden.&quot; <br />\r\n<br />\r\nThe new management trainee trembles in front of the CEO and tries to politely point out that... &quot;How do you mean, we don't have enough staff? The HR director reports to you. Hire more people! Train them! But whatever you do, don't pay them any real wages. I did not go into business to become poor. And fire that discount manager, she is only costing me money. From now on, we'll sell gourmet burgers. Same crap, double the price. Get my marketing director in here!&quot;<br />\r\n<br />\r\nFood Chain Magnate is a heavy strategy game about building a fast food chain. The focus is on building your company using a card-driven (human) resource management system. Players compete on a variable city map through purchasing, marketing and sales, and on a job market for key staff members.",
        description_preview:
          '"Lemonade? They want lemonade? What is the world coming to? I want commercials for burgers on all channels, every 15 minutes. We are the Home of the Original Burger, not a hippie health haven. And place a billboard next to that new house on the corner. I want them craving beer every second they sit in their posh new garden."  \r\n \r\nThe new management trainee trembles in front of the CEO and tries to politely point out that... "How do you mean, we don\'t have enough staff? The HR director reports to you. Hire more people! Train them! But whatever you do, don\'t pay them any real wages. I did not go into business to become poor. And fire that discount manager, she is only costing me money. From now on, we\'ll sell gourmet burgers. Same crap, double the price. Get my marketing director in here!" \r\n \r\nFood Chain Magnate is a heavy strategy game about building a fast food chain. The focus is on building your company using a card-driven (human) resource management system. Players compete on a variable city map through purchasing, marketing and sales, and on a job market for key staff members.',
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1539447098564",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1539447098564",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1539447098564",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1539447098564",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1539447098564",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1539447098564",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1539447098564"
        },
        url:
          "https://www.boardgameatlas.com/search/game/vBBhuJjFVE/food-chain-magnate",
        price: "94.99",
        msrp: "149.99",
        discount: "0.37",
        primary_publisher: "Splotter Spellen",
        publishers: [
          "Splotter Spellen",
          "Angry Lion Games",
          "New Games Order",
          "LLC",
          "One Moment Games"
        ],
        mechanics: [
          {
            id: "vZsDDAdOoe"
          },
          {
            id: "wV5peB05xs"
          },
          {
            id: "DEvPj5twid"
          }
        ],
        categories: [
          {
            id: "N0TkEGfEsF"
          }
        ],
        designers: ["Jeroen Doumen", "Joris Wiersinga"],
        developers: [],
        artists: ["Iris de Haan", "Ynze Moedt"],
        names: [
          "FCM",
          "Funforge Passport Game Studios Food Chain Magnate Strategy Board Game",
          "Food Chain Magnate"
        ],
        num_user_ratings: 93,
        average_user_rating: 3.8372566114501607,
        official_url:
          "https://www.splottershop.com/ProductDetails.asp?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://www.fgbradleys.com/rules/rules4/Food%20Chain%20Magnate%20-%20rules.pdf",
        weight_amount: 3.81,
        weight_units: "lbs ",
        size_height: 12.2,
        size_width: 8.7,
        size_depth: 2,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 704,
        reddit_week_count: 28,
        reddit_day_count: 16,
        historical_low_price: 82.97,
        historical_low_date: {
          $date: "2019-11-27T10:01:59.477Z"
        }
      },
      {
        id: "BBg2uXXdB8",
        name: "Kingdomino",
        year_published: 2016,
        min_players: 2,
        max_players: 4,
        min_playtime: 15,
        max_playtime: 20,
        min_age: 8,
        description:
          "Kingdomino is a 2-4 player strategy game that plays like dominoes with a kingdom-building twist. Each turn you will connect a new domino to your existing kingdom, making sure that at least one of its sides connects to a matching element already in play.<br />\r\n<br />\r\nMake sure to include dominoes with crowns on them, because at the end of the game you will score points equal to the total number of  matching elements multiplied by the number of crowns.",
        description_preview:
          "Kingdomino is a 2-4 player strategy game that plays like dominoes with a kingdom-building twist. Each turn you will connect a new domino to your existing kingdom, making sure that at least one of its sides connects to a matching element already in play. \r\n \r\nMake sure to include dominoes with crowns on them, because at the end of the game you will score points equal to the total number of  matching elements multiplied by the number of crowns.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254188772-515tbFJ5C8L.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254188772-515tbFJ5C8L.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254188772-515tbFJ5C8L.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254188772-515tbFJ5C8L.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254188772-515tbFJ5C8L.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254188772-515tbFJ5C8L.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254188772-515tbFJ5C8L.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/BBg2uXXdB8/kingdomino",
        price: "13.49",
        msrp: "19.99",
        discount: "0.33",
        primary_publisher: "Blue Orange Games",
        publishers: [
          "Blue Orange Games",
          "Fantasmagoria",
          "Feelindigo",
          "FoxMind Israel",
          "Games Factory Publishing",
          "Gém Klub Kft.",
          "Le Grand Massif",
          "Happy Baobab",
          "Kaissa Chess & Games",
          "Lautapelit.fi",
          "Lifestyle Boardgames Ltd",
          "MINDOK",
          "PaperGames (III)",
          "Pegasus Spiele",
          "Pridemage Games",
          "Swan Panasia Co.",
          "Ltd.",
          "テンデイズゲームズ (Ten Days Games)",
          "White Goblin Games"
        ],
        mechanics: [
          {
            id: "vZsDDAdOoe"
          },
          {
            id: "wV5peB05xs"
          },
          {
            id: "8PN2HE86wg"
          }
        ],
        categories: [
          {
            id: "ODWOjWAJj3"
          },
          {
            id: "ZTneo8TaIO"
          },
          {
            id: "QAYkTHK1Dd"
          },
          {
            id: "buDTYyPw4D"
          }
        ],
        designers: ["Bruno Cathala"],
        developers: [],
        artists: ["Cyril Bouquet"],
        names: ["Giant Kingdomino", "Kingdomino", "Kingdomino (Giant Version)"],
        num_user_ratings: 234,
        average_user_rating: 3.340344514853517,
        official_url:
          "http://www.blueorangegames.com/index.php/games/king-domino?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "http://www.blueorangegames.com/administrator/components/com_bogames/files/rules/cfa0f38157341a002eab1100aab478ea-Kingdomino-Rules-US-2nd-Edition.pdf",
        weight_amount: 1,
        weight_units: "lb",
        size_height: 2,
        size_width: 7.9,
        size_depth: 7.9,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 698,
        reddit_week_count: 13,
        reddit_day_count: 3,
        historical_low_price: 8.99,
        historical_low_date: {
          $date: "2019-09-14T10:03:22.306Z"
        }
      },
      {
        id: "exdy1Z2bSC",
        name: "Mage Knight",
        year_published: 2011,
        min_players: 1,
        max_players: 4,
        min_playtime: 60,
        max_playtime: 240,
        min_age: 14,
        description:
          "Designed by one of world’s leading game designers, Vlaada Chvátil, WizKids is pleased to announce the Mage Knight Board Game: Ultimate Edition is arriving this fall! Current or new fans can find all of the released content plus a few new and exciting components all in one place!<br /><br />The critically acclaimed, award winning Mage Knight board game combines elements of RPGs, deckbuilding, and traditional board games while capturing the rich history of the Mage Knight universe. Now, after wowing solo game players and groups of up to 5, this Ultimate Edition brings it all together in a self-contained gaming experience.<br /><br />The Ultimate Edition includes the original base game plus all three expansions: The Lost Legion, Krang, and Shades of Tezla. It features comprehensive integrated rules text, 5 all-new cards, alternate paint jobs, and a great price that can’t be beat!<br /><br />This is the Ultimate Edition fans have waited for!",
        description_preview:
          "Designed by one of world’s leading game designers, Vlaada Chvátil, WizKids is pleased to announce the Mage Knight Board Game: Ultimate Edition is arriving this fall! Current or new fans can find all of the released content plus a few new and exciting components all in one place!  The critically acclaimed, award winning Mage Knight board game combines elements of RPGs, deckbuilding, and traditional board games while capturing the rich history of the Mage Knight universe. Now, after wowing solo game players and groups of up to 5, this Ultimate Edition brings it all together in a self-contained gaming experience.  The Ultimate Edition includes the original base game plus all three expansions: The Lost Legion, Krang, and Shades of Tezla. It features comprehensive integrated rules text, 5 all-new cards, alternate paint jobs, and a great price that can’t be beat!  This is the Ultimate Edition fans have waited for!",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1545256271910",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1545256271910",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1545256271910",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1545256271910",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1545256271910",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1545256271910",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1545256271910"
        },
        url:
          "https://www.boardgameatlas.com/search/game/exdy1Z2bSC/mage-knight",
        price: "60.51",
        msrp: "80.00",
        discount: "0.24",
        primary_publisher: "WizKids",
        publishers: [
          "WizKids",
          "Asmodee",
          "Giochi Uniti",
          "Intrafin Games",
          "Lacerta",
          "NECA",
          "Pegasus Spiele",
          "REXhry"
        ],
        mechanics: [
          {
            id: "33UT4gTFqy"
          },
          {
            id: "vZsDDAdOoe"
          },
          {
            id: "R0bGq4cAl4"
          },
          {
            id: "wV5peB05xs"
          },
          {
            id: "qu5BcGjAzk"
          },
          {
            id: "WPytek5P8l"
          },
          {
            id: "U3zhCQH7Et"
          },
          {
            id: "8PN2HE86wg"
          }
        ],
        categories: [
          {
            id: "KUBCKBkGxV"
          },
          {
            id: "yq6hVlbM2R"
          },
          {
            id: "ZTneo8TaIO"
          },
          {
            id: "upXZ8vNfNO"
          },
          {
            id: "2Gu62aKdma"
          }
        ],
        designers: [" Vlaada Chvátil"],
        developers: [],
        artists: [" J. Lonnee", "Chris Raimo", "Milan Vavroň"],
        names: [
          "Mage Knight Board Game",
          "Mage Knight: Das Brettspiel ",
          "NECA Mage Knight Board Game"
        ],
        num_user_ratings: 104,
        average_user_rating: 3.553396072013094,
        official_url:
          "https://wizkids.com/mage-knight/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "http://wizkidsgames.com/wp-content/uploads/mage/MK_rulebook_ENG_searchable-mar2012.pdf",
        weight_amount: 3.8,
        weight_units: "lbs",
        size_height: 14,
        size_width: 10,
        size_depth: 3,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 595,
        reddit_week_count: 13,
        reddit_day_count: 6,
        historical_low_price: 54.99,
        historical_low_date: {
          $date: "2019-03-30T16:31:15.133Z"
        }
      },
      {
        id: "I77I9HybTm",
        name: "Welcome to...",
        year_published: 2018,
        min_players: 1,
        max_players: 100,
        min_playtime: 25,
        max_playtime: 30,
        min_age: 10,
        description:
          "A roll and write without dice! Players will become architects in the American 50's as they use combinations of cards and actions to construct American dream real estate.<br />\r\n<br />\r\nAs an architect in Welcome to, you want to build the best new town in the United States during the 1950s. Players are developing estates, parks, pools, hiring employees, and more. Welcome to plays like a roll-and-write dice game in which you mark results on a scoresheet... but without dice.",
        description_preview:
          "A roll and write without dice! Players will become architects in the American 50's as they use combinations of cards and actions to construct American dream real estate. \r\n \r\nAs an architect in Welcome to, you want to build the best new town in the United States during the 1950s. Players are developing estates, parks, pools, hiring employees, and more. Welcome to plays like a roll-and-write dice game in which you mark results on a scoresheet... but without dice.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1538760984196",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1538760984196",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1538760984196",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1538760984196",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1538760984196",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1538760984196",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1538760984196"
        },
        url: "https://www.boardgameatlas.com/search/game/I77I9HybTm/welcome-to",
        price: "17.46",
        msrp: "24.95",
        discount: "0.30",
        primary_publisher: "Blue Cocker",
        publishers: ["Blue Cocker"],
        mechanics: [
          {
            id: "zIPRS41oiN"
          }
        ],
        categories: [
          {
            id: "ODWOjWAJj3"
          }
        ],
        designers: ["Benoit Turpin"],
        developers: [],
        artists: ["Anne Heidsieck"],
        names: ["Welcome to Your Perfect Home", "Welcome To..."],
        num_user_ratings: 108,
        average_user_rating: 3.5887037037037044,
        official_url:
          "http://www.bluecocker.com/index.php/en/jeux/welcome/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "http://www.bluecocker.com/wp-content/uploads/jeux/Welcome/Regles_fr&en.pdf",
        weight_amount: 1.68,
        weight_units: "lbs ",
        size_height: 15.8,
        size_width: 5.9,
        size_depth: 15.8,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 585,
        reddit_week_count: 11,
        reddit_day_count: 1,
        historical_low_price: 16.47,
        historical_low_date: {
          $date: "2019-10-06T02:26:25.028Z"
        }
      },
      {
        id: "1dWE5BIcOm",
        name: "Star Realms",
        year_published: 2014,
        min_players: 2,
        max_players: 2,
        min_playtime: 15,
        max_playtime: 30,
        min_age: 12,
        description:
          "Star Realms is a spaceship combat deck building game designed by Magic Pro Tour Champions and Hall of Famers Darwin Kastle and Rob Dougherty (developer and cofounder of the Ascension Deck building Game). Star Realms offers all the thrills of traditional trading card game style combat, combined with the fun of a deck building game. Play powerful ships, destroy enemy bases or blast your opponent directly on your way to victory! CONTENTS 128 beautifully illustrated cards: 80 card main deck, 10 Explorer cards, Two 10 card personal decks, 18 double-sided score cards And two full-color rule sheet.",
        description_preview:
          "Star Realms is a spaceship combat deck building game designed by Magic Pro Tour Champions and Hall of Famers Darwin Kastle and Rob Dougherty (developer and cofounder of the Ascension Deck building Game). Star Realms offers all the thrills of traditional trading card game style combat, combined with the fun of a deck building game. Play powerful ships, destroy enemy bases or blast your opponent directly on your way to victory! CONTENTS 128 beautifully illustrated cards: 80 card main deck, 10 Explorer cards, Two 10 card personal decks, 18 double-sided score cards And two full-color rule sheet.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559258032901-51VCCs9ppIL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559258032901-51VCCs9ppIL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559258032901-51VCCs9ppIL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559258032901-51VCCs9ppIL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559258032901-51VCCs9ppIL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559258032901-51VCCs9ppIL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559258032901-51VCCs9ppIL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/1dWE5BIcOm/star-realms",
        price: "10.49",
        msrp: "14.95",
        discount: "0.30",
        primary_publisher: "Flat River Group",
        publishers: ["Flat River Group"],
        mechanics: [
          {
            id: "vZsDDAdOoe"
          },
          {
            id: "wV5peB05xs"
          },
          {
            id: "WPytek5P8l"
          },
          {
            id: "T8JEFYwoqy"
          }
        ],
        categories: [
          {
            id: "eX8uuNlQkQ"
          },
          {
            id: "upXZ8vNfNO"
          },
          {
            id: "3B3QpKvXD3"
          }
        ],
        designers: ["Robert Dougherty", "Darwin Kastle"],
        developers: [],
        artists: ["Vito Gesualdi"],
        names: ["Star Realms"],
        num_user_ratings: 245,
        average_user_rating: 3.391630999507241,
        official_url:
          "https://www.shop.whitewizardgames.com/collections/star-realms?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "http://bigbag.bg/userfiles/editor/file/star%20realms%20rules.pdf",
        weight_amount: 7,
        weight_units: "oz",
        size_height: 2.8,
        size_width: 1.8,
        size_depth: 3.8,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "OCe2uLfnfy"
          },
          {
            id: "heXJ68EESG"
          },
          {
            id: "K8fdquFjhm"
          },
          {
            id: "ndiK8YPRAl"
          }
        ],
        reddit_all_time_count: 584,
        reddit_week_count: 13,
        reddit_day_count: 9,
        historical_low_price: 6,
        historical_low_date: {
          $date: "2019-06-29T22:01:26.158Z"
        }
      },
      {
        id: "eh0GTvESIX",
        name: "Jaipur",
        year_published: 2009,
        min_players: 2,
        max_players: 2,
        min_playtime: 30,
        max_playtime: 42,
        min_age: 12,
        description:
          "Jaipur, capital of Rajasthan. You are one of the two most powerful traders in the city.<br />\r\n<br />\r\nBut that's not enough for you, because only the merchant with two Seals of Excellence will have the privilege of being invited to the Maharaja's court.<br />\r\n<br />\r\nYou are therefore going to have to do better than your direct competitor by buying, exchanging and selling at better prices, all while keeping an eye on both your camel herds.<br />\r\n<br />\r\nA card game for two seasoned traders!",
        description_preview:
          "Jaipur, capital of Rajasthan. You are one of the two most powerful traders in the city. \r\n \r\nBut that's not enough for you, because only the merchant with two Seals of Excellence will have the privilege of being invited to the Maharaja's court. \r\n \r\nYou are therefore going to have to do better than your direct competitor by buying, exchanging and selling at better prices, all while keeping an eye on both your camel herds. \r\n \r\nA card game for two seasoned traders!",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255087050-51M00D0S-8L.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255087050-51M00D0S-8L.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559255087050-51M00D0S-8L.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559255087050-51M00D0S-8L.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559255087050-51M00D0S-8L.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559255087050-51M00D0S-8L.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255087050-51M00D0S-8L.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/eh0GTvESIX/jaipur",
        price: "21.29",
        msrp: "24.99",
        discount: "0.15",
        primary_publisher: "Asmodee Editions",
        publishers: ["Asmodee Editions"],
        mechanics: [
          {
            id: "wV5peB05xs"
          },
          {
            id: "WPytek5P8l"
          },
          {
            id: "lA3KUtVFCy"
          }
        ],
        categories: [
          {
            id: "eX8uuNlQkQ"
          }
        ],
        designers: [" Sébastien Pauchon"],
        developers: [],
        artists: [" Alexandre Roche"],
        names: ["Jaipur", "Jaipur (New Edition) (Preorder)"],
        num_user_ratings: 233,
        average_user_rating: 3.4286606519491905,
        official_url:
          "https://drafts.asmodee.us/en/games/jaipur/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "https://www.fgbradleys.com/rules/rules2/Jaipur-rules.pdf",
        weight_amount: 7,
        weight_units: "oz.",
        size_height: 3.8,
        size_width: 1.5,
        size_depth: 7.8,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 583,
        reddit_week_count: 15,
        reddit_day_count: 9,
        historical_low_price: 15.69,
        historical_low_date: {
          $date: "2019-10-09T16:04:04.978Z"
        }
      },
      {
        id: "Meszt3IFfX",
        name: "Power Grid",
        year_published: 2004,
        min_players: 2,
        max_players: 6,
        min_playtime: 120,
        max_playtime: 150,
        min_age: 12,
        description:
          "Power Grid is the updated release of the Friedemann Friese crayon game Funkenschlag. The latest cooperative publishing effort from Friedemann Friese and Rio Grande Games, removes the crayon aspect from network building in the original editionwhile retaining the fluctuating commodities market like McMulti and an auction round intensity reminiscent of The Princes of Florence.<br />\r\n<br />\r\nThe object of Power Grid is to supply the most cities with power when someone?s network gains a predetermined size. In this new edition, players mark pre-existing routes between cities for connection, and then vie against other players to purchase the powerplants that you use to supply the power. However, as plants are purchased, newer more efficient plants become available so you?re potentially allowing others to access to superior equipment merely by purchasing at all. <br />\r\n<br />\r\nAdditionally, players must acquire the raw materials, like coal, oil, garbage, or uranium, to power said plants (except for the highly valuable renewable energy wind/solar plants), making it a constant struggle to upgrade your plants for maximum efficiency while still retaining enough wealth to quickly expand your network to get the cheapest routes.",
        description_preview:
          "Power Grid is the updated release of the Friedemann Friese crayon game Funkenschlag. The latest cooperative publishing effort from Friedemann Friese and Rio Grande Games, removes the crayon aspect from network building in the original editionwhile retaining the fluctuating commodities market like McMulti and an auction round intensity reminiscent of The Princes of Florence. \r\n \r\nThe object of Power Grid is to supply the most cities with power when someone?s network gains a predetermined size. In this new edition, players mark pre-existing routes between cities for connection, and then vie against other players to purchase the powerplants that you use to supply the power. However, as plants are purchased, newer more efficient plants become available so you?re potentially allowing others to access to superior equipment merely by purchasing at all.  \r\n \r\nAdditionally, players must acquire the raw materials, like coal, oil, garbage, or uranium, to power said plants (except for the highly valuable renewable energy wind/solar plants), making it a constant struggle to upgrade your plants for maximum efficiency while still retaining enough wealth to quickly expand your network to get the cheapest routes.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254181135-51HP3ND04VL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254181135-51HP3ND04VL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254181135-51HP3ND04VL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254181135-51HP3ND04VL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254181135-51HP3ND04VL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254181135-51HP3ND04VL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254181135-51HP3ND04VL.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/Meszt3IFfX/power-grid",
        price: "79.96",
        msrp: "44.95",
        discount: "-0.78",
        primary_publisher: "Rio Grande Games",
        publishers: [
          "Rio Grande Games",
          "2F-Spiele",
          "999 Games",
          "Albi",
          "Arclight",
          "Brain Games",
          "Edge Entertainment",
          "Galápagos Jogos",
          "Gém Klub Kft.",
          "Giochi Uniti",
          "Hobby World",
          "Ideal Board Games",
          "Kaissa Chess & Games",
          "Korea Boardgames co.",
          " Ltd.",
          "Lacerta",
          "Lautapelit.fi",
          "Runadrake",
          "Siam Board Games",
          "Smart Ltd",
          "Stratelibri",
          "Swan Panasia Co.",
          " Ltd."
        ],
        mechanics: [
          {
            id: "AZxlPpi5oq"
          },
          {
            id: "c6gkRM7rSy"
          }
        ],
        categories: [
          {
            id: "N0TkEGfEsF"
          }
        ],
        designers: [" Friedemann Friese"],
        developers: [],
        artists: [
          " Antonio Dessi",
          "Lars-Arne ",
          "Prapach Lapamnuaysap",
          "Harald Lieske"
        ],
        names: [],
        num_user_ratings: 133,
        average_user_rating: 3.5112781954887216,
        official_url:
          "http://riograndegames.com/Game/5-Power-Grid?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "http://riograndegames.com/getFile.php?id=698",
        weight_amount: 2.65,
        weight_units: "lbs ",
        size_height: 14,
        size_width: 8,
        size_depth: 2,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 571,
        reddit_week_count: 13,
        reddit_day_count: 19,
        historical_low_price: 25.9,
        historical_low_date: {
          $date: "2019-02-13T00:37:15.283Z"
        }
      },
      {
        id: "T5lx9elSDt",
        name: "Love Letter",
        year_published: 2012,
        min_players: 2,
        max_players: 4,
        min_playtime: 20,
        max_playtime: 20,
        min_age: 10,
        description:
          "All of the eligible young men (and many of the not-so-young) seek to woo the princess of Tempest. Unfortunately, she has locked herself in the Palace, and you must rely on others to bring your romantic letters to her. Will yours reach her first? love letter is a game of risk, deduction, and luck for 2 to 4 players. Your goal is to get your love letter into princess Annette's hands while deflecting the letters from competing suitors. From a deck with only sixteen cards, each player starts with only one card in hand; one card is removed from play. On a turn, you draw one card, and play one card, trying to expose others and knock them from the game. Powerful cards lead to early gains, but make you a target. Rely on weaker cards for too long, however, and your letter may be tossed in the fire.",
        description_preview:
          "All of the eligible young men (and many of the not-so-young) seek to woo the princess of Tempest. Unfortunately, she has locked herself in the Palace, and you must rely on others to bring your romantic letters to her. Will yours reach her first? love letter is a game of risk, deduction, and luck for 2 to 4 players. Your goal is to get your love letter into princess Annette's hands while deflecting the letters from competing suitors. From a deck with only sixteen cards, each player starts with only one card in hand; one card is removed from play. On a turn, you draw one card, and play one card, trying to expose others and knock them from the game. Powerful cards lead to early gains, but make you a target. Rely on weaker cards for too long, however, and your letter may be tossed in the fire.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1539298538869",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1539298538869",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1539298538869",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1539298538869",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1539298538869",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1539298538869",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1539298538869"
        },
        url:
          "https://www.boardgameatlas.com/search/game/T5lx9elSDt/love-letter",
        price: "10.19",
        msrp: "9.99",
        discount: "-0.02",
        primary_publisher: "Z-Man Games",
        publishers: [
          "Z-Man Games",
          "Alderac Entertainment Group",
          "Kanai Factory",
          "963.com",
          "999 Games",
          "Arclight",
          "Bard Centrum Gier",
          "Black Monk",
          "BoardM Factory",
          "Brain Games",
          "cutia.ro",
          "Delta Vision Publishing",
          "Devir",
          "Filosofia Éditions",
          "Galápagos Jogos",
          "Hobby World",
          "HomoLudicus",
          "Japon Brand",
          "Kaissa Chess & Games",
          "Lautapelit.fi",
          "Magpie (Korean Co)",
          "MINDOK",
          "Pegasus Spiele",
          "Siam Board Games",
          "Steve Jackson Games",
          "Swan Panasia Co.",
          "Ltd.",
          "uplay.it edizioni"
        ],
        mechanics: [
          {
            id: "WPytek5P8l"
          },
          {
            id: "BGrhzIN69D"
          }
        ],
        categories: [
          {
            id: "eX8uuNlQkQ"
          }
        ],
        designers: ["Seiji Kanai"],
        developers: [],
        artists: [
          "Kali Fitzgerald",
          "Andrew Hepworth",
          "Jeff Himmelman",
          "John Kovalic",
          "Robb Miller",
          "Ken Niimura",
          "Noboru Sugiura",
          "Yating Sun"
        ],
        names: ["Love Letter (Clamshell)", "Love Letter - Clamshell Edition"],
        num_user_ratings: 301,
        average_user_rating: 3.2065124797682927,
        official_url:
          "https://www.zmangames.com/en/products/love-letter/love-letter-purchase/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: null,
        weight_amount: 3.2,
        weight_units: "oz",
        size_height: 3.9,
        size_width: 5.5,
        size_depth: 1.5,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "c69qmDp1SX"
          }
        ],
        reddit_all_time_count: 566,
        reddit_week_count: 9,
        reddit_day_count: 1,
        historical_low_price: 7.99,
        historical_low_date: {
          $date: "2019-01-05T08:00:00.000Z"
        }
      },
      {
        id: "yPwGVk8lB2",
        name: "Gaia Project",
        year_published: 2017,
        min_players: 1,
        max_players: 4,
        min_playtime: 60,
        max_playtime: 150,
        min_age: 14,
        description:
          "&quot;Set your sights on distant stars and strive to colonize the galaxy in Gaia project, the follow-up to the smash hit Terra Mystica! true to the foundations that made Terra Mystica a massive success, this box invites one to four players to forge their own galactic empires. Explore the vast reaches of space and convert planets to meet your faction unique environmental needs as you seek to tighten your grasp on the galaxy. Fourteen unique factions stand ready to boldly take their first steps into the cosmos while building structures to generate resources, researching new technology, and uniting planets to form powerful federations. Chart your course and remake planets as you see fit in Gaia project. In the end, only the most advanced faction will win.&quot;",
        description_preview:
          '"Set your sights on distant stars and strive to colonize the galaxy in Gaia project, the follow-up to the smash hit Terra Mystica! true to the foundations that made Terra Mystica a massive success, this box invites one to four players to forge their own galactic empires. Explore the vast reaches of space and convert planets to meet your faction unique environmental needs as you seek to tighten your grasp on the galaxy. Fourteen unique factions stand ready to boldly take their first steps into the cosmos while building structures to generate resources, researching new technology, and uniting planets to form powerful federations. Chart your course and remake planets as you see fit in Gaia project. In the end, only the most advanced faction will win."',
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257981433-6180cLr3gZL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257981433-6180cLr3gZL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559257981433-6180cLr3gZL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559257981433-6180cLr3gZL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559257981433-6180cLr3gZL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559257981433-6180cLr3gZL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257981433-6180cLr3gZL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/yPwGVk8lB2/gaia-project",
        price: "77.98",
        msrp: "84.99",
        discount: "0.08",
        primary_publisher: "Z-Man Games",
        publishers: ["Z-Man Games"],
        mechanics: [
          {
            id: "05zCZoLvQJ"
          },
          {
            id: "c6gkRM7rSy"
          }
        ],
        categories: [
          {
            id: "N0TkEGfEsF"
          },
          {
            id: "3B3QpKvXD3"
          },
          {
            id: "buDTYyPw4D"
          }
        ],
        designers: ["Jens Drögemüller", "Helge Ostertag"],
        developers: [],
        artists: ["Dennis Lohausen"],
        names: [
          "Gaia Project: A Terra Mystica Game",
          "Progetto Gaia ",
          "Gaia Project"
        ],
        num_user_ratings: 74,
        average_user_rating: 4.027027027027027,
        official_url:
          "https://www.zmangames.com/en/products/gaia-project/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://howdoyouplayit.com/gaia-project-rules-directions-instructions/",
        weight_amount: 7,
        weight_units: "lbs ",
        size_height: 11.8,
        size_width: 14.4,
        size_depth: 2.7,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 562,
        reddit_week_count: 24,
        reddit_day_count: 9,
        historical_low_price: 69.95,
        historical_low_date: {
          $date: "2019-01-06T00:35:14.036Z"
        }
      },
      {
        id: "wkBw955xS3",
        name: "Great Western Trail",
        year_published: 2016,
        min_players: 2,
        max_players: 4,
        min_playtime: 75,
        max_playtime: 150,
        min_age: 12,
        description:
          "<div><p>This ain't your average, everyday Euro game! Welcome to the Great Western Trail, where players take on the role of cattle drivers attempting to wrangle their herd to market. The trail will be tough, and countless hazards await you. Can you make it to the end of your journey and turn a tidy profit? Find out in Great Western Trail!<br /><br /><b>Simple Mechanics, Complex Decisions</b><br />Turns in Great Western Trail are broken into three simple phases that will carry you through the entire game. These simple phases belie a web of deep and complex decisions players will face as they make their way down the trail. The mechanics are simple, but mastering the trail is where the fun lies.<br /><br /><b>Make Your Move!</b><br />A turn starts by moving your cattleman down the trail. The number of spaces a player is allowed to move is dictated by their player board, and there are hazards a plenty all along the trail. Wherever you end up, the next phase is ...<br /><br /><b>Take Action!</b><br />When a player ends their movement, they perform the action listed on the space they ended on. Depending on where you land, you will have different options available to you. Neutral locations or buildings you own will allow you to perform a special action specific to that location or a single auxiliary action. On locations owned by other players, hazard tiles, or teepee tiles, your only option is to use an auxiliary action. Last, there's Kansas City!<br /><br /><b>Kansas City or Bust!</b><br />Landing on Kansas City sets off a series of subphases that must be resolved in order: Three Foresight phases, the Income Phase, and the Delivery Phase. The Foresight subphases give players a choice between two tiles to add to the board (hazard, teepee, or worker). These tiles will affect future trips down the trail, so choose wisely. Earn income from your journey down the trail by revealing and discarding your hand. Finally, choose a city to deliver your cattle to. This leg of your journey is over. Now it's time to do it all again!<br /><br /><b>Draw!</b><br />Draw up to your hand limit and your turn is over! Time to start planning your next move and figure out the choices you'll face in the coming turns.</p></div>",
        description_preview:
          "  This ain't your average, everyday Euro game! Welcome to the Great Western Trail, where players take on the role of cattle drivers attempting to wrangle their herd to market. The trail will be tough, and countless hazards await you. Can you make it to the end of your journey and turn a tidy profit? Find out in Great Western Trail!   Simple Mechanics, Complex Decisions  Turns in Great Western Trail are broken into three simple phases that will carry you through the entire game. These simple phases belie a web of deep and complex decisions players will face as they make their way down the trail. The mechanics are simple, but mastering the trail is where the fun lies.   Make Your Move!  A turn starts by moving your cattleman down the trail. The number of spaces a player is allowed to move is dictated by their player board, and there are hazards a plenty all along the trail. Wherever you end up, the next phase is ...   Take Action!  When a player ends their movement, they perform the action listed on the space they ended on. Depending on where you land, you will have different options available to you. Neutral locations or buildings you own will allow you to perform a special action specific to that location or a single auxiliary action. On locations owned by other players, hazard tiles, or teepee tiles, your only option is to use an auxiliary action. Last, there's Kansas City!   Kansas City or Bust!  Landing on Kansas City sets off a series of subphases that must be resolved in order: Three Foresight phases, the Income Phase, and the Delivery Phase. The Foresight subphases give players a choice between two tiles to add to the board (hazard, teepee, or worker). These tiles will affect future trips down the trail, so choose wisely. Earn income from your journey down the trail by revealing and discarding your hand. Finally, choose a city to deliver your cattle to. This leg of your journey is over. Now it's time to do it all again!   Draw!  Draw up to your hand limit and your turn is over! Time to start planning your next move and figure out the choices you'll face in the coming turns.  ",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254200326-51nQKg6k7DL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254200326-51nQKg6k7DL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254200326-51nQKg6k7DL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254200326-51nQKg6k7DL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254200326-51nQKg6k7DL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254200326-51nQKg6k7DL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254200326-51nQKg6k7DL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/wkBw955xS3/great-western-trail",
        price: "119.99",
        msrp: "69.99",
        discount: "-0.71",
        primary_publisher: "Eggertspiele",
        publishers: ["Eggertspiele"],
        mechanics: [
          {
            id: "vZsDDAdOoe"
          },
          {
            id: "WPytek5P8l"
          },
          {
            id: "lA3KUtVFCy"
          }
        ],
        categories: [
          {
            id: "4mOtRRwSoj"
          }
        ],
        designers: ["Alexander Pfister"],
        developers: [],
        artists: ["Andreas Resch"],
        names: [
          "Great Western Trail: Aventură prin Vestul Sălbatic ",
          "Great Western Trail: Aventura prin Vestul Salbatic ",
          "PEG54590G Great Western Trail Board Game",
          "Great Western Trail"
        ],
        num_user_ratings: 155,
        average_user_rating: 3.881593927893739,
        official_url:
          "https://strongholdgames.com/store/board-games/great-western-trail/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://www.fgbradleys.com/rules/rules4/Great%20Western%20Trail%20-%20rules.pdf",
        weight_amount: 2,
        weight_units: "lbs ",
        size_height: 3.4,
        size_width: 11.6,
        size_depth: 11.6,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 553,
        reddit_week_count: 14,
        reddit_day_count: 3,
        historical_low_price: 34.97,
        historical_low_date: {
          $date: "2019-08-22T17:53:59.991Z"
        }
      },
      {
        id: "VibNUMwsqr",
        name: "Santorini",
        year_published: 2016,
        min_players: 2,
        max_players: 4,
        min_playtime: 15,
        max_playtime: 30,
        min_age: 8,
        description:
          "<div><p>Welcome to the world of <i>Santorini</i>, a fantastic reimagining of the classic abstract game from 2004. Players are given a sandbox in which to play as gods, moving their workers around the board to build up a beautiful, multi-tiered city. Do you have what it takes to outsmart your opponents? Find out, in <i>Santorini</i>!<br /><br />Build it Up! <br /><br />Turns in <i>Santorini</i> are made up of two simple step: Move and Build. Move around the board and build a building in a spot adjacent to one of your workers. The first player to move their worker from a second level building to a third level building wins the game! Though, there are a few things that add a wrinkle to the basic formula.<br /><br />Invoke the Power of the gods!<br />Each player will have access to a god power which lets them do things a little differently than normal. Be it changing the rules for how you can build or move, changing how you interact with other players, or providing you with an alternate victory condition, the 30 different god powers are sure to make every game of <i>Santorini</i> different and exciting!</p>\r\n</div>",
        description_preview:
          "  Welcome to the world of  Santorini , a fantastic reimagining of the classic abstract game from 2004. Players are given a sandbox in which to play as gods, moving their workers around the board to build up a beautiful, multi-tiered city. Do you have what it takes to outsmart your opponents? Find out, in  Santorini !  Build it Up!   Turns in  Santorini  are made up of two simple step: Move and Build. Move around the board and build a building in a spot adjacent to one of your workers. The first player to move their worker from a second level building to a third level building wins the game! Though, there are a few things that add a wrinkle to the basic formula.  Invoke the Power of the gods! Each player will have access to a god power which lets them do things a little differently than normal. Be it changing the rules for how you can build or move, changing how you interact with other players, or providing you with an alternate victory condition, the 30 different god powers are sure to make every game of  Santorini  different and exciting! \r\n ",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254194904-61JlvFn9fqL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254194904-61JlvFn9fqL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254194904-61JlvFn9fqL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254194904-61JlvFn9fqL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254194904-61JlvFn9fqL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254194904-61JlvFn9fqL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254194904-61JlvFn9fqL.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/VibNUMwsqr/santorini",
        price: "20.97",
        msrp: "29.99",
        discount: "0.30",
        primary_publisher: "Spin Master",
        publishers: ["Spin Master", "Roxley"],
        mechanics: [
          {
            id: "qu5BcGjAzk"
          },
          {
            id: "8PN2HE86wg"
          }
        ],
        categories: [
          {
            id: "MHkqIVxwtx"
          },
          {
            id: "O0ogzwLUe8"
          }
        ],
        designers: ["Gord!"],
        developers: [],
        artists: ["Lina Cossette", "David Forest"],
        names: [
          "Santorini (Multi) Strategy Board Game",
          "Santorini (Ding & Dent)"
        ],
        num_user_ratings: 213,
        average_user_rating: 3.5901714635639923,
        official_url:
          "https://roxley.com/product/santorini/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://roxley.com/wp-content/uploads/2016/08/Santorini-Rulebook-Web-2016.08.14.pdf",
        weight_amount: 1,
        weight_units: "lb",
        size_height: 2,
        size_width: 10.5,
        size_depth: 10.5,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "jg1HPKor10"
          }
        ],
        reddit_all_time_count: 530,
        reddit_week_count: 19,
        reddit_day_count: 2,
        historical_low_price: 11.99,
        historical_low_date: {
          $date: "2019-12-06T08:23:50.886Z"
        }
      },
      {
        id: "ilkKd5gDhg",
        name: "A Feast For Odin",
        year_published: 2016,
        min_players: 1,
        max_players: 4,
        min_playtime: 30,
        max_playtime: 120,
        min_age: 12,
        description:
          "Delve into the world of Vikings and dabble in trading, hunting, raiding, pillaging, plundering, and raiding some more. Build houses, explore new worlds, and every round, have a feast in Odin's name. <br />\r\n<br />\r\nThe large variety of actions and occupations guarantees your Notherners long-lasting fun, with each game creating a new world on your player board!",
        description_preview:
          "Delve into the world of Vikings and dabble in trading, hunting, raiding, pillaging, plundering, and raiding some more. Build houses, explore new worlds, and every round, have a feast in Odin's name.  \r\n \r\nThe large variety of actions and occupations guarantees your Notherners long-lasting fun, with each game creating a new world on your player board!",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254971843-51FVPlTTtoL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254971843-51FVPlTTtoL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254971843-51FVPlTTtoL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254971843-51FVPlTTtoL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254971843-51FVPlTTtoL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254971843-51FVPlTTtoL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254971843-51FVPlTTtoL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/ilkKd5gDhg/a-feast-for-odin",
        price: "78.75",
        msrp: "99.99",
        discount: "0.21",
        primary_publisher: "Z-Man Games",
        publishers: ["Z-Man Games"],
        mechanics: [
          {
            id: "R0bGq4cAl4"
          },
          {
            id: "8PN2HE86wg"
          },
          {
            id: "fBOTEBUAmV"
          }
        ],
        categories: [
          {
            id: "N0TkEGfEsF"
          },
          {
            id: "QAYkTHK1Dd"
          }
        ],
        designers: [" Uwe Rosenberg"],
        developers: [],
        artists: [" Dennis Lohausen"],
        names: [],
        num_user_ratings: 108,
        average_user_rating: 3.709595959595961,
        official_url:
          "https://www.zmangames.com/en/products/feast-odin/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://images-cdn.zmangames.com/us-east-1/filer_public/8f/91/8f91d9ae-edde-426b-a237-72877647958e/affo-rules.pdf",
        weight_amount: 7,
        weight_units: "lbs",
        size_height: 4.6,
        size_width: 12.3,
        size_depth: 8.8,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 529,
        reddit_week_count: 18,
        reddit_day_count: 1,
        historical_low_price: 67.49,
        historical_low_date: {
          $date: "2019-07-29T07:58:15.961Z"
        }
      },
      {
        id: "FldbgzsTYH",
        name: "Blood Rage",
        year_published: 2015,
        min_players: 2,
        max_players: 4,
        min_playtime: 60,
        max_playtime: 60,
        min_age: 14,
        description:
          "In Blood Rage, each player controls their own Viking clan's warriors, leader, and ship. Ragnarok has come, and it's the end of the world! It's the Vikings' last chance to go down in a blaze of glory and secure their place in Valhalla at Odin's side! For a Viking there are many pathways to glory. You can invade and pillage the land for its rewards, crush your opponents in epic battles, fulfil quests, increase your clan's stats, or even die gloriously either in battle or from Ragnarok, the ultimate inescapable doom. Most player strategies are guided by the cards drafted at the beginning of each of the three game rounds (or Ages). These &quot;Gods' Gifts&quot; grant you numerous boons for your clan including: increased Viking strength and devious battle strategies, upgrades to your clan, or even the aid of legendary creatures from Norse mythology. They may also include various quests, from dominating specific provinces, to having lots of your Vikings sent to Valhalla. Most of these cards are aligned with one of the Norse gods, hinting at the kind of strategy they support. For example, Thor gives more glory for victory in battle, Heimdall grants you foresight and surprises, Tyr strengthens you in battle, while the trickster Loki actually rewards you for losing battles, or punishes the winner. Players must choose their strategies carefully during the draft phase, but also be ready to adapt and react to their opponents' strategies as the action phase unfolds. Battles are decided not only by the strength of the figures involved, but also by cards played in secret. By observing your opponents' actions and allegiances to specific gods, you may predict what card they are likely to play, and plan accordingly. Winning battles is not always the best course of action, as the right card can get you even more rewards by being crushed. The only losing strategy in Blood Rage is to shy away from battle and a glorious death!",
        description_preview:
          "In Blood Rage, each player controls their own Viking clan's warriors, leader, and ship. Ragnarok has come, and it's the end of the world! It's the Vikings' last chance to go down in a blaze of glory and secure their place in Valhalla at Odin's side! For a Viking there are many pathways to glory. You can invade and pillage the land for its rewards, crush your opponents in epic battles, fulfil quests, increase your clan's stats, or even die gloriously either in battle or from Ragnarok, the ultimate inescapable doom. Most player strategies are guided by the cards drafted at the beginning of each of the three game rounds (or Ages). These \"Gods' Gifts\" grant you numerous boons for your clan including: increased Viking strength and devious battle strategies, upgrades to your clan, or even the aid of legendary creatures from Norse mythology. They may also include various quests, from dominating specific provinces, to having lots of your Vikings sent to Valhalla. Most of these cards are aligned with one of the Norse gods, hinting at the kind of strategy they support. For example, Thor gives more glory for victory in battle, Heimdall grants you foresight and surprises, Tyr strengthens you in battle, while the trickster Loki actually rewards you for losing battles, or punishes the winner. Players must choose their strategies carefully during the draft phase, but also be ready to adapt and react to their opponents' strategies as the action phase unfolds. Battles are decided not only by the strength of the figures involved, but also by cards played in secret. By observing your opponents' actions and allegiances to specific gods, you may predict what card they are likely to play, and plan accordingly. Winning battles is not always the best course of action, as the right card can get you even more rewards by being crushed. The only losing strategy in Blood Rage is to shy away from battle and a glorious death!",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254863709-51lrsCB5VWL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254863709-51lrsCB5VWL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254863709-51lrsCB5VWL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254863709-51lrsCB5VWL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254863709-51lrsCB5VWL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254863709-51lrsCB5VWL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254863709-51lrsCB5VWL.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/FldbgzsTYH/blood-rage",
        price: "94.99",
        msrp: "79.99",
        discount: "-0.19",
        primary_publisher: "CMON",
        publishers: ["CMON"],
        mechanics: [
          {
            id: "05zCZoLvQJ"
          },
          {
            id: "wV5peB05xs"
          },
          {
            id: "WPytek5P8l"
          },
          {
            id: "DEvPj5twid"
          }
        ],
        categories: [
          {
            id: "ZTneo8TaIO"
          },
          {
            id: "upXZ8vNfNO"
          },
          {
            id: "MHkqIVxwtx"
          }
        ],
        designers: ["Eric M. Lang"],
        developers: [],
        artists: ["Henning Ludvigsen", "Mike McVey", "Adrian Smith"],
        names: ["Blood Rage: Core Box"],
        num_user_ratings: 191,
        average_user_rating: 3.6315555949951186,
        official_url:
          "https://cmon.com/product/blood-rage/blood-rage?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "https://cmon-files.s3.amazonaws.com/BLR001-Rulebook.pdf",
        weight_amount: 4.5,
        weight_units: "lbs ",
        size_height: 4.1,
        size_width: 12.1,
        size_depth: 12.1,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 521,
        reddit_week_count: 21,
        reddit_day_count: 6,
        historical_low_price: 52.97,
        historical_low_date: {
          $date: "2019-11-28T11:25:11.373Z"
        }
      },
      {
        id: "q4g2Y5eqyZ",
        name: "The Fox in the Forest",
        year_published: 2017,
        min_players: 2,
        max_players: 2,
        min_playtime: 30,
        max_playtime: 45,
        min_age: 10,
        description:
          "<div><p>Enter the fairy tale world of <i>The Fox in the Forest</i>, a trick-taking game for two based on a story about a woodcutter's clever daughter who sets out on a journey to uncover the secrets of why monsters have begun to plague the kingdom. Players will play cards from their hands in a battle to take tricks and score points. <br /></p><p><br /><i>The Fox in the Forest</i> has a unique take on scoring that introduces tension into the trick-taking formula. If a player takes too many tricks, they are determined to be greedy and won't get any points at all. Do you want to win this trick and risk winning too many over the course of the round? What is your opponent trying to do?<br /></p><p><br />Each of the three suits has a set of special cards that have unique effects when played. The Swan allows you to lead the next trick even if you lose this one. The Fox lets you switch a card in your hand with the decree card setting the trump suit. The Woodcutter lets you swap a card in your hand with one of the extra cards. The Treasure will give the winner of a trick a free point for each 7 in the trick. The Witch will act as the trump suit if it's the only witch in the trick. Finally, the Monarch forces your opponent to play either the 1 of that suit, or their highest ranked card of that suit.</p>\r\n</div>",
        description_preview:
          "  Enter the fairy tale world of  The Fox in the Forest , a trick-taking game for two based on a story about a woodcutter's clever daughter who sets out on a journey to uncover the secrets of why monsters have begun to plague the kingdom. Players will play cards from their hands in a battle to take tricks and score points.      The Fox in the Forest  has a unique take on scoring that introduces tension into the trick-taking formula. If a player takes too many tricks, they are determined to be greedy and won't get any points at all. Do you want to win this trick and risk winning too many over the course of the round? What is your opponent trying to do?    Each of the three suits has a set of special cards that have unique effects when played. The Swan allows you to lead the next trick even if you lose this one. The Fox lets you switch a card in your hand with the decree card setting the trump suit. The Woodcutter lets you swap a card in your hand with one of the extra cards. The Treasure will give the winner of a trick a free point for each 7 in the trick. The Witch will act as the trump suit if it's the only witch in the trick. Finally, the Monarch forces your opponent to play either the 1 of that suit, or their highest ranked card of that suit. \r\n ",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254190595-41CjWbXSlWL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254190595-41CjWbXSlWL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254190595-41CjWbXSlWL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254190595-41CjWbXSlWL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254190595-41CjWbXSlWL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254190595-41CjWbXSlWL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254190595-41CjWbXSlWL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/q4g2Y5eqyZ/the-fox-in-the-forest",
        price: "10.99",
        msrp: "15.00",
        discount: "0.27",
        primary_publisher: "Renegade Game Studios",
        publishers: ["Renegade Game Studios"],
        mechanics: [
          {
            id: "WPytek5P8l"
          }
        ],
        categories: [
          {
            id: "eX8uuNlQkQ"
          },
          {
            id: "ZTneo8TaIO"
          }
        ],
        designers: ["Joshua Buergel"],
        developers: [],
        artists: ["Jennifer L. Meyer", "Keith Pishnery"],
        names: ["Fox in the Forest", "The Fox in the Forest"],
        num_user_ratings: 108,
        average_user_rating: 3.5254629629629637,
        official_url:
          "https://www.renegadegamestudios.com/products/the-fox-in-the-forest?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://www.dropbox.com/s/5vonqyghu0ofwom/the-fox-in-the-forest-rulebook.pdf?dl=0",
        weight_amount: 3.52,
        weight_units: "oz",
        size_height: 4.2,
        size_width: 1.2,
        size_depth: 6.2,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 520,
        reddit_week_count: 20,
        reddit_day_count: 1,
        historical_low_price: 10.29,
        historical_low_date: {
          $date: "2019-02-01T23:19:03.889Z"
        }
      },
      {
        id: "axOr9uuOwN",
        name: "Lords of Waterdeep",
        year_published: 2012,
        min_players: 2,
        max_players: 5,
        min_playtime: 60,
        max_playtime: 60,
        min_age: 12,
        description:
          "Waterdeep, the City of Splendors--the most resplendent jewel in the <b>Forgotten Realms</b>, and a den of political intrigue and shady back-alley dealings. In this game, the players are powerful lords vying for control of this great city. Its treasures and resources are ripe for the taking, and that which cannot be gained through trickery and negotiation must be taken by force!<br /><br /><i>Lords of Waterdeep</i> is a Euro-style board game for 2-5 players.<br /><br />Components:<br /> Game board<br /> Rulebook<br /> 5 card stock player mats<br /> 121 Intrigue, Quest, and Role cards<br /> 130 wooden cubes, pawns, and score pieces<br /> Wooden player markers<br /> Card stock tiles and tokens representing buildings, gold coins, and victory points",
        description_preview:
          "Waterdeep, the City of Splendors--the most resplendent jewel in the  Forgotten Realms , and a den of political intrigue and shady back-alley dealings. In this game, the players are powerful lords vying for control of this great city. Its treasures and resources are ripe for the taking, and that which cannot be gained through trickery and negotiation must be taken by force!   Lords of Waterdeep  is a Euro-style board game for 2-5 players.  Components:  Game board  Rulebook  5 card stock player mats  121 Intrigue, Quest, and Role cards  130 wooden cubes, pawns, and score pieces  Wooden player markers  Card stock tiles and tokens representing buildings, gold coins, and victory points",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1538677407703",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1538677407703",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1538677407703",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1538677407703",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1538677407703",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1538677407703",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1538677407703"
        },
        url:
          "https://www.boardgameatlas.com/search/game/axOr9uuOwN/lords-of-waterdeep",
        price: "34.97",
        msrp: "49.99",
        discount: "0.30",
        primary_publisher: "Wizards of the Coast",
        publishers: ["Wizards of the Coast"],
        mechanics: [
          {
            id: "lA3KUtVFCy"
          },
          {
            id: "T8JEFYwoqy"
          },
          {
            id: "fBOTEBUAmV"
          }
        ],
        categories: [
          {
            id: "ODWOjWAJj3"
          },
          {
            id: "ZEW7DPFAE6"
          },
          {
            id: "ZTneo8TaIO"
          }
        ],
        designers: ["Peter Lee", "Rodney Thompson"],
        developers: [],
        artists: [
          "Eric Belisle",
          "Steven Belledin",
          "Zoltan Boros",
          "Noah Bradley",
          "Eric Deschamps",
          "Wayne England",
          "Tony Foti",
          "Todd Harris",
          "Ralph Horsley",
          "Tyler Jacobson",
          "Ron Lemen",
          "Howard Lyon",
          "Warren Mahy",
          "Patrick McEvoy",
          "Jim Nelson",
          "William O'Connor",
          "Adam Paquette",
          "Lucio Parrillo",
          "Dave Rapoza",
          "Richard Sardinha",
          "Mike Schley",
          "Andrew Silver",
          "Anne Stokes",
          "Gábor Szikszai",
          "Matias Tapia",
          "Kevin Walker",
          "Tyler Walpole",
          "Eva Widermann",
          "Eric Williams (I)",
          "Matt Wilson",
          "Sam Wood",
          "Ben Wootten",
          "James Zhang"
        ],
        names: ["Lords of Waterdeep: Dungeons & Dragons"],
        num_user_ratings: 227,
        average_user_rating: 3.4303912610117338,
        official_url:
          "http://dnd.wizards.com/products/tabletop-games/board-games/lords-waterdeep?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "https://media.dnd.wizards.com/DnD_LOW_Rulebook_EN_1.pdf",
        weight_amount: 3.7,
        weight_units: "lbs ",
        size_height: 14.1,
        size_width: 11.1,
        size_depth: 2.9,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "c69qmDp1SX"
          }
        ],
        reddit_all_time_count: 516,
        reddit_week_count: 11,
        reddit_day_count: 1,
        historical_low_price: 26.32,
        historical_low_date: {
          $date: "2019-06-22T20:24:07.077Z"
        }
      },
      {
        id: "3IPVIROfvl",
        name: "Brass: Birmingham",
        year_published: 2018,
        min_players: 2,
        max_players: 4,
        min_playtime: 120,
        max_playtime: 180,
        min_age: 14,
        description:
          "Brass: Birmingham is an economic strategy game sequel to Martin Wallace' 2007 masterpiece, Brass. Birmingham tells the story of competing entrepreneurs in Birmingham during the industrial revolution, between the years of 1770-1870. As in its predecessor, you must develop, build, and establish your industries and network, in an effort to exploit low or high market demands.",
        description_preview:
          "Brass: Birmingham is an economic strategy game sequel to Martin Wallace' 2007 masterpiece, Brass. Birmingham tells the story of competing entrepreneurs in Birmingham during the industrial revolution, between the years of 1770-1870. As in its predecessor, you must develop, build, and establish your industries and network, in an effort to exploit low or high market demands.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254167105-512dvhVT-iL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254167105-512dvhVT-iL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254167105-512dvhVT-iL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254167105-512dvhVT-iL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254167105-512dvhVT-iL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254167105-512dvhVT-iL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254167105-512dvhVT-iL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/3IPVIROfvl/brass-birmingham",
        price: "49.99",
        msrp: "59.99",
        discount: "0.17",
        primary_publisher: "Roxley Games",
        publishers: ["Roxley Games", "Crowd Games", "Funforge"],
        mechanics: [
          {
            id: "WPytek5P8l"
          },
          {
            id: "c6gkRM7rSy"
          }
        ],
        categories: [
          {
            id: "N0TkEGfEsF"
          }
        ],
        designers: ["Gavan Brown", "Matt Tolman", "Martin Wallace"],
        developers: [],
        artists: ["Lina Cossette", "David Forest", "Damien Mammoliti"],
        names: ["Brass: Birmingham"],
        num_user_ratings: 94,
        average_user_rating: 4.053191489361704,
        official_url:
          "http://roxley.com/brass-birmingham-rulebook/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "http://files.roxley.com/Brass-Birmingham-Rulebook-2018.11.20-highlights.pdf",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 515,
        reddit_week_count: 22,
        reddit_day_count: 2,
        historical_low_price: 37.9,
        historical_low_date: {
          $date: "2019-10-07T22:08:38.110Z"
        }
      },
      {
        id: "19C9ka2hEx",
        name: "Coup",
        year_published: 2012,
        min_players: 2,
        max_players: 6,
        min_playtime: 15,
        max_playtime: 30,
        min_age: 10,
        description:
          "<p><div></div><div></div><div></div><div></div><div><div></div></div><div></div></p><div><div><div><div><p>In the not too distant future, the government is run for profit by a new &quot;royal class&quot; of multi-national CEOs. Their greed and absolute control of the economy has reduced all but a privileged few to lives of poverty and desperation. Out of the oppressed masses rose The Resistance, an underground organization focused on overthrowing these powerful rulers. The valiant efforts of The Resistance have created discord, intrigue and weakness in the political courts of the novena royal, bringing the government to brink of collapse. But for you, a powerful government official, this is your opportunity to manipulate, bribe and bluff your way into absolute power.</p></div></div></div></div>",
        description_preview:
          '                     In the not too distant future, the government is run for profit by a new "royal class" of multi-national CEOs. Their greed and absolute control of the economy has reduced all but a privileged few to lives of poverty and desperation. Out of the oppressed masses rose The Resistance, an underground organization focused on overthrowing these powerful rulers. The valiant efforts of The Resistance have created discord, intrigue and weakness in the political courts of the novena royal, bringing the government to brink of collapse. But for you, a powerful government official, this is your opportunity to manipulate, bribe and bluff your way into absolute power.     ',
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254971843-51cnlYAh-6L.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254971843-51cnlYAh-6L.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254971843-51cnlYAh-6L.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254971843-51cnlYAh-6L.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254971843-51cnlYAh-6L.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254971843-51cnlYAh-6L.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254971843-51cnlYAh-6L.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/19C9ka2hEx/coup",
        price: "9.99",
        msrp: "14.99",
        discount: "0.33",
        primary_publisher: "Indie Boards and Cards",
        publishers: ["Indie Boards and Cards"],
        mechanics: [
          {
            id: "BGrhzIN69D"
          },
          {
            id: "T8JEFYwoqy"
          }
        ],
        categories: [
          {
            id: "PinhJrhnxU"
          },
          {
            id: "eX8uuNlQkQ"
          },
          {
            id: "TKQncFVX74"
          }
        ],
        designers: ["Rikki Tahta"],
        developers: [],
        artists: [
          "Luis Francisco ",
          "Stephanie Gustafsson",
          "Andrew Higgins",
          "Alexandr Kiselev",
          "Prapach Lapamnuaysap",
          "Tomasz Larek",
          "Jarek Nocoń",
          "Guillermo H. Nuñez",
          "Alejo Vigliani",
          "Uros Vuckovic",
          "Weberson Santiago"
        ],
        names: [],
        num_user_ratings: 251,
        average_user_rating: 3.1045978824715665,
        official_url:
          "http://www.indieboardsandcards.com/index.php/games/coup/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "http://indieboardsandcards.com/wp-content/uploads/2017/06/COUP-REVISED-RB-PROOF.pdf",
        weight_amount: 3.2,
        weight_units: "oz",
        size_height: 1.2,
        size_width: 4.1,
        size_depth: 6.2,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 509,
        reddit_week_count: 10,
        reddit_day_count: 5,
        historical_low_price: 9.1,
        historical_low_date: {
          $date: "2019-10-08T05:21:04.595Z"
        }
      },
      {
        id: "61SwzHG7fB",
        name: "Sushi Go!",
        year_published: 2013,
        min_players: 2,
        max_players: 5,
        min_playtime: 15,
        max_playtime: 30,
        min_age: 8,
        description:
          "Pass the sushi!<br />\r\n<br />\r\nIn this fast-playing card game, the goal is to grab the best combination of sushi dishes as they whiz by. Score points for making the most maki rolls or for collecting a full set of sashimi. Dip your favorite nigiri in wasabi to triple its value! But be sure to leave room for dessert or else you'll eat into your score! Gather the most points and consider yourself the sushi master!",
        description_preview:
          "Pass the sushi! \r\n \r\nIn this fast-playing card game, the goal is to grab the best combination of sushi dishes as they whiz by. Score points for making the most maki rolls or for collecting a full set of sashimi. Dip your favorite nigiri in wasabi to triple its value! But be sure to leave room for dessert or else you'll eat into your score! Gather the most points and consider yourself the sushi master!",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254990668-51CIdEFrKKL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254990668-51CIdEFrKKL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254990668-51CIdEFrKKL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254990668-51CIdEFrKKL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254990668-51CIdEFrKKL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254990668-51CIdEFrKKL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254990668-51CIdEFrKKL.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/61SwzHG7fB/sushi-go",
        price: "8.95",
        msrp: "11.99",
        discount: "0.25",
        primary_publisher: "Gamewright",
        publishers: [
          "Gamewright",
          "Adventureland Games",
          "ADC Blackfire Entertainment",
          "AURUM",
          "Inc.",
          "Cocktail Games",
          "Devir",
          "FoxMind Israel",
          "Hemz Universal Games Co. Ltd.",
          "Kanga Games",
          "Lifestyle Boardgames Ltd",
          "NeoTroy Games",
          "Rebel",
          "Reflexshop",
          "uplay.it edizioni",
          "White Goblin Games",
          "Zoch Verlag"
        ],
        mechanics: [
          {
            id: "wV5peB05xs"
          },
          {
            id: "WPytek5P8l"
          },
          {
            id: "lA3KUtVFCy"
          }
        ],
        categories: [
          {
            id: "eX8uuNlQkQ"
          }
        ],
        designers: ["Phil Walker-Harding"],
        developers: [],
        artists: ["Nan Rangsima", "Tobias Schweiger", "Phil Walker-Harding"],
        names: ["sushi go"],
        num_user_ratings: 221,
        average_user_rating: 3.158868778280543,
        official_url:
          "https://gamewright.com/product/Sushi-Go?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://www.gamewright.com/gamewright/pdfs/Rules/SushiGoTM-RULES.pdf",
        weight_amount: 8.5,
        weight_units: "oz",
        size_height: 4.2,
        size_width: 5.8,
        size_depth: 1.5,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "FbhyxVWcOu"
          }
        ],
        reddit_all_time_count: 502,
        reddit_week_count: 8,
        reddit_day_count: 2,
        historical_low_price: 5.84,
        historical_low_date: {
          $date: "2019-08-24T09:04:12.937Z"
        }
      },
      {
        id: "nRGa6zZTQu",
        name: "Twilight Struggle",
        year_published: 2005,
        min_players: 1,
        max_players: 2,
        min_playtime: 150,
        max_playtime: 180,
        min_age: 13,
        description:
          "This Deluxe Edition of Twilight Struggle seeks to capture the feeling of that earlier era. Twilight Struggle is a two-player game simulating the forty-five year dance of intrigue, prestige, and occasional flares of warfare between the Soviet Union and the United States. Twilight Struggle recreates the conflict between the most powerful nation states the world has ever known. The scope of the game covers the entire world as it was found in 1945. Players move units and exert influence in attempts to gain allies and control for their superpower.",
        description_preview:
          "This Deluxe Edition of Twilight Struggle seeks to capture the feeling of that earlier era. Twilight Struggle is a two-player game simulating the forty-five year dance of intrigue, prestige, and occasional flares of warfare between the Soviet Union and the United States. Twilight Struggle recreates the conflict between the most powerful nation states the world has ever known. The scope of the game covers the entire world as it was found in 1945. Players move units and exert influence in attempts to gain allies and control for their superpower.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254888822-51yDrXS9TRL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254888822-51yDrXS9TRL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254888822-51yDrXS9TRL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254888822-51yDrXS9TRL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254888822-51yDrXS9TRL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254888822-51yDrXS9TRL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254888822-51yDrXS9TRL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/nRGa6zZTQu/twilight-struggle",
        price: "39.99",
        msrp: "60.00",
        discount: "0.33",
        primary_publisher: "Flat River Group",
        publishers: ["Flat River Group"],
        mechanics: [
          {
            id: "05zCZoLvQJ"
          },
          {
            id: "xuphiSlrxI"
          },
          {
            id: "R0bGq4cAl4"
          },
          {
            id: "WPytek5P8l"
          },
          {
            id: "DEvPj5twid"
          }
        ],
        categories: [
          {
            id: "TKQncFVX74"
          }
        ],
        designers: ["Ananda Gupta", "Jason Matthews"],
        developers: [],
        artists: [
          "Viktor Csete",
          "Rodger B. MacGowan",
          "Chechu Nieto",
          "Guillaume Ries",
          "Mark Simonitch"
        ],
        names: [
          "Twilight Struggle Deluxe Edition",
          "Twilight Struggle (2016 Edition)",
          "Twilight Struggle: Deluxe Edition (7th Printing)"
        ],
        num_user_ratings: 140,
        average_user_rating: 3.628571428571428,
        official_url:
          "https://www.gmtgames.com/p-588-twilight-struggle-deluxe-edition-2016-reprint.aspx?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "https://www.gmtgames.com/nnts/TS_Rules-2015.pdf",
        weight_amount: 3.53,
        weight_units: "lbs ",
        size_height: 12,
        size_width: 9.1,
        size_depth: 2.1,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 501,
        reddit_week_count: 12,
        reddit_day_count: 10,
        historical_low_price: 29.99,
        historical_low_date: {
          $date: "2020-01-02T10:02:12.464Z"
        }
      },
      {
        id: "NYMPJIwU5Y",
        name: "Kemet",
        year_published: 2012,
        min_players: 2,
        max_players: 5,
        min_playtime: 90,
        max_playtime: 120,
        min_age: 10,
        description:
          "<p>Conquer Territory! Defeat Your Enemies! Appease the Gods! </p><p>In Kemet, players lead a tribe of ancient Egyptians as they strategically maneuver their troops to control the most territories and battle against their rivals. Draw upon the powers of the Egyptian gods and recruit mythical creatures to reinforce your armies and vanquish those who oppose you and your ambitions!</p>",
        description_preview:
          " Conquer Territory! Defeat Your Enemies! Appease the Gods!   In Kemet, players lead a tribe of ancient Egyptians as they strategically maneuver their troops to control the most territories and battle against their rivals. Draw upon the powers of the Egyptian gods and recruit mythical creatures to reinforce your armies and vanquish those who oppose you and your ambitions! ",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1539298062211",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1539298062211",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1539298062211",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1539298062211",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1539298062211",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1539298062211",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1539298062211"
        },
        url: "https://www.boardgameatlas.com/search/game/NYMPJIwU5Y/kemet",
        price: "45.70",
        msrp: "69.99",
        discount: "0.35",
        primary_publisher: "Publisher Services Inc (PSI)",
        publishers: ["Matagot"],
        mechanics: [
          {
            id: "05zCZoLvQJ"
          },
          {
            id: "wV5peB05xs"
          },
          {
            id: "WPytek5P8l"
          }
        ],
        categories: [
          {
            id: "upXZ8vNfNO"
          },
          {
            id: "MHkqIVxwtx"
          }
        ],
        designers: ["Jacques Bariot", "Guillaume Montiage"],
        developers: [],
        artists: ["Dimitri Bielak", "Emile Denis", "Nicolas Fructus"],
        names: [],
        num_user_ratings: 100,
        average_user_rating: 3.5400000000000014,
        official_url:
          "http://drafts.asmodee.us/en/games/kemet/products/kemet/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "https://www.matagot.com/data/atasamente/ReglesKemet_EN.pdf",
        weight_amount: 4.1,
        weight_units: "lbs ",
        size_height: 10.8,
        size_width: 3.1,
        size_depth: 15.6,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 501,
        reddit_week_count: 15,
        reddit_day_count: 6,
        historical_low_price: 45.7,
        historical_low_date: {
          $date: "2020-01-30T10:03:47.131Z"
        }
      },
      {
        id: "j8LdPFmePE",
        name: "7 Wonders Duel",
        year_published: 2015,
        min_players: 2,
        max_players: 2,
        min_playtime: 30,
        max_playtime: 45,
        min_age: 10,
        description:
          "Create the greatest civilization the Ancient World has ever known! In 7 Wonders, you lead an ancient civilization as it rises from its barbaric roots to become a world power. Build an architectural wonder that will fascinate for eons to come, and rule the most powerful civilization on Earth! 7 Wonders: Duel is a fast-paced, two-player edition of Antoine Bauza's award-winning civilization-building game.",
        description_preview:
          "Create the greatest civilization the Ancient World has ever known! In 7 Wonders, you lead an ancient civilization as it rises from its barbaric roots to become a world power. Build an architectural wonder that will fascinate for eons to come, and rule the most powerful civilization on Earth! 7 Wonders: Duel is a fast-paced, two-player edition of Antoine Bauza's award-winning civilization-building game.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255812092-51S3zQnsPBL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255812092-51S3zQnsPBL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559255812092-51S3zQnsPBL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559255812092-51S3zQnsPBL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559255812092-51S3zQnsPBL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559255812092-51S3zQnsPBL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255812092-51S3zQnsPBL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/j8LdPFmePE/7-wonders-duel",
        price: "21.59",
        msrp: "29.99",
        discount: "0.28",
        primary_publisher: "Asmodee Editions",
        publishers: ["Asmodee Editions"],
        mechanics: [
          {
            id: "wV5peB05xs"
          },
          {
            id: "yu3eas6v7A"
          },
          {
            id: "lA3KUtVFCy"
          }
        ],
        categories: [
          {
            id: "a8NM5cugJX"
          },
          {
            id: "eX8uuNlQkQ"
          },
          {
            id: "329DxyFL9D"
          }
        ],
        designers: ["Antoine Bauza", "Bruno Cathala"],
        developers: [],
        artists: ["Miguel Coimbra"],
        names: ["7 Wonders Duel"],
        num_user_ratings: 286,
        average_user_rating: 3.6138451101137647,
        official_url:
          "http://www.7wondersduel.com/7wonders-duel.php?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "http://www.7wondersduel.com/files/rules/7-Wonders-Duel-Rules-US.pdf",
        weight_amount: 1.2,
        weight_units: "lbs",
        size_height: 2,
        size_width: 8,
        size_depth: 8,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "Dxj6IrT1Rn"
          },
          {
            id: "uds4Zc4pbA"
          }
        ],
        reddit_all_time_count: 491,
        reddit_week_count: 23,
        reddit_day_count: 4,
        historical_low_price: 21.59,
        historical_low_date: {
          $date: "2020-01-30T10:02:49.333Z"
        }
      },
      {
        id: "CT18FG3Yz5",
        name: "Aeon's End",
        year_published: 2016,
        min_players: 1,
        max_players: 4,
        min_playtime: 60,
        max_playtime: 75,
        min_age: 14,
        description:
          "The survivors of a long-ago invasion have taken refuge in the forgotten underground city of Gravehold. There, the desperate remnants of society have learned that the energy of the very breaches the beings use to attack them can be repurposed through various gems, transforming the malign energies within into beneficial spells and weapons to aid their last line of defense: the breach mages. \r\n\r\nAeon's End is a cooperative game that explores the deckbuilding genre with a number of innovative mechanisms, including a variable turn order system that simulates the chaos of an attack, and deck management rules that require careful planning with every discarded card. Players will struggle to defend Gravehold from The Nameless and their hordes using unique abilities, powerful spells, and, most importantly of all, their collective wits.",
        description_preview:
          "The survivors of a long-ago invasion have taken refuge in the forgotten underground city of Gravehold. There, the desperate remnants of society have learned that the energy of the very breaches the beings use to attack them can be repurposed through various gems, transforming the malign energies within into beneficial spells and weapons to aid their last line of defense: the breach mages. \r\n\r\nAeon's End is a cooperative game that explores the deckbuilding genre with a number of innovative mechanisms, including a variable turn order system that simulates the chaos of an attack, and deck management rules that require careful planning with every discarded card. Players will struggle to defend Gravehold from The Nameless and their hordes using unique abilities, powerful spells, and, most importantly of all, their collective wits.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1541007215157",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1541007215157",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1541007215157",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1541007215157",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1541007215157",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1541007215157",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1541007215157"
        },
        url: "https://www.boardgameatlas.com/search/game/CT18FG3Yz5/aeons-end",
        price: "33.99",
        msrp: "49.99",
        discount: "0.32",
        primary_publisher: "Publisher Services Inc (PSI)",
        publishers: ["Indie Boards & Cards"],
        mechanics: [
          {
            id: "33UT4gTFqy"
          },
          {
            id: "vZsDDAdOoe"
          },
          {
            id: "wV5peB05xs"
          },
          {
            id: "WPytek5P8l"
          }
        ],
        categories: [
          {
            id: "eX8uuNlQkQ"
          },
          {
            id: "ZTneo8TaIO"
          },
          {
            id: "3B3QpKvXD3"
          }
        ],
        designers: ["Kevin Riley"],
        developers: [],
        artists: ["Gong Studios", "Scott Hartman"],
        names: ["Aeon's End (Second Edition)", "aons end"],
        num_user_ratings: 63,
        average_user_rating: 3.7460317460317465,
        official_url:
          "http://www.indieboardsandcards.com/index.php/games/aeons-end/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "http://indieboardsandcards.com/wp-content/uploads/2017/06/Aeons_End_rulebook.pdf",
        weight_amount: 3.05,
        weight_units: "lbs",
        size_height: 11,
        size_width: 3.5,
        size_depth: 11,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "c69qmDp1SX"
          }
        ],
        reddit_all_time_count: 486,
        reddit_week_count: 22,
        reddit_day_count: 5,
        historical_low_price: 33.49,
        historical_low_date: {
          $date: "2019-01-09T00:35:44.388Z"
        }
      },
      {
        id: "D0OHY8b8Oc",
        name: "Hive",
        year_published: 2001,
        min_players: 2,
        max_players: 2,
        min_playtime: 15,
        max_playtime: 30,
        min_age: 8,
        description:
          "Hive is a boardless, strategic game for 2 players ages 8 and up. The object of the game is to surround your opponent's queen bee while trying to block your opponent from doing the same to your queen bee.<br />\r\n<br />\r\nEach player has 11 tiles, all in all, representing 5 different insects. The players take turns, either choosing to add a tile to the hive or moving a tile in the hive. <br />\r\n<br />\r\nEach tile has a unique way of moving (like in chess) and resembles the movement of the insect depicted on the tile. For instance, the grasshopper is the only tile which can jump.<br />\r\nHive is a fun game to play because of its simple rules, yet challenging for its depth. Hive enhances each player's skills of strategic planning, tactical thinking and spatial vision. To win, you must play both the offense (surround your opponent's bee) and the defense (to protect your queen bee).<br />\r\n<br />\r\nA nice decorative storage bag makes it easy to carry, store and play anywhere.",
        description_preview:
          "Hive is a boardless, strategic game for 2 players ages 8 and up. The object of the game is to surround your opponent's queen bee while trying to block your opponent from doing the same to your queen bee. \r\n \r\nEach player has 11 tiles, all in all, representing 5 different insects. The players take turns, either choosing to add a tile to the hive or moving a tile in the hive.  \r\n \r\nEach tile has a unique way of moving (like in chess) and resembles the movement of the insect depicted on the tile. For instance, the grasshopper is the only tile which can jump. \r\nHive is a fun game to play because of its simple rules, yet challenging for its depth. Hive enhances each player's skills of strategic planning, tactical thinking and spatial vision. To win, you must play both the offense (surround your opponent's bee) and the defense (to protect your queen bee). \r\n \r\nA nice decorative storage bag makes it easy to carry, store and play anywhere.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254188773-51RWSpIj3wL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254188773-51RWSpIj3wL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254188773-51RWSpIj3wL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254188773-51RWSpIj3wL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254188773-51RWSpIj3wL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254188773-51RWSpIj3wL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254188773-51RWSpIj3wL.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/D0OHY8b8Oc/hive",
        price: "23.50",
        msrp: "31.45",
        discount: "0.25",
        primary_publisher: "Gen Four Two Games",
        publishers: ["Gen Four Two Games"],
        mechanics: [
          {
            id: "qu5BcGjAzk"
          },
          {
            id: "8PN2HE86wg"
          }
        ],
        categories: [
          {
            id: "hBqZ3Ar4RJ"
          },
          {
            id: "O0ogzwLUe8"
          }
        ],
        designers: ["John Yianni"],
        developers: [],
        artists: ["John Yianni"],
        names: ["Hive"],
        num_user_ratings: 135,
        average_user_rating: 3.335480407944176,
        official_url:
          "https://gen42.com/shop/board-games/hive-2015-edition?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "http://www.ultraboardgames.com/hive/game-rules.php",
        weight_amount: 1.7,
        weight_units: "lbs ",
        size_height: 8.3,
        size_width: 8.2,
        size_depth: 2.5,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 483,
        reddit_week_count: 17,
        reddit_day_count: 6,
        historical_low_price: 22.99,
        historical_low_date: {
          $date: "2019-03-04T00:38:41.841Z"
        }
      },
      {
        id: "Rq3eREYb0e",
        name: "The Mind",
        year_published: 2018,
        min_players: 1,
        max_players: 4,
        min_playtime: 20,
        max_playtime: 30,
        min_age: 10,
        description: "The addictive card game you play without talking.",
        description_preview:
          "The addictive card game you play without talking.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254973792-5168RvipmCL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254973792-5168RvipmCL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254973792-5168RvipmCL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254973792-5168RvipmCL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254973792-5168RvipmCL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254973792-5168RvipmCL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254973792-5168RvipmCL.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/Rq3eREYb0e/the-mind",
        price: "10.39",
        msrp: "14.99",
        discount: "0.31",
        primary_publisher: "Pandasaurus Games",
        publishers: ["Pandasaurus Games"],
        mechanics: [
          {
            id: "33UT4gTFqy"
          },
          {
            id: "WPytek5P8l"
          }
        ],
        categories: [
          {
            id: "eX8uuNlQkQ"
          }
        ],
        designers: ["Wolfgang Warsch"],
        developers: [],
        artists: ["Oliver Freudenreich"],
        names: ["The Mind (Ding & Dent)"],
        num_user_ratings: 142,
        average_user_rating: 3.233421361502348,
        official_url:
          "https://www.pandasaurusgames.com/product/the-mind/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "http://www.nsv.de/spielregeln/TheMind_GB.pdf",
        weight_amount: 8,
        weight_units: "oz",
        size_height: 3.9,
        size_width: 1,
        size_depth: 5.2,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 468,
        reddit_week_count: 8,
        reddit_day_count: 5,
        historical_low_price: 6.99,
        historical_low_date: {
          $date: "2019-08-23T19:56:40.793Z"
        }
      },
      {
        id: "Y2WacykMm5",
        name: "King of Tokyo",
        year_published: 2011,
        min_players: 2,
        max_players: 6,
        min_playtime: 30,
        max_playtime: 36,
        min_age: 8,
        description:
          "This new edition of the best-seller boasts new artwork, clearer rules, and revamped card abilities. Monsters have a new look, and the coveted space penguin character takes his place in Tokyo! King of Tokyo is a game for 2 to 6 players where you play as Mutant monsters, rampaging robots, or even abominable aliens battling in a fun, chaotic atmosphere.  Roll dice and choose your strategy: will you attack your enemies? Heal your wounds? improve your monster? Stomp your path to victory.",
        description_preview:
          "This new edition of the best-seller boasts new artwork, clearer rules, and revamped card abilities. Monsters have a new look, and the coveted space penguin character takes his place in Tokyo! King of Tokyo is a game for 2 to 6 players where you play as Mutant monsters, rampaging robots, or even abominable aliens battling in a fun, chaotic atmosphere.  Roll dice and choose your strategy: will you attack your enemies? Heal your wounds? improve your monster? Stomp your path to victory.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257600208-61doPBeJTjL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257600208-61doPBeJTjL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559257600208-61doPBeJTjL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559257600208-61doPBeJTjL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559257600208-61doPBeJTjL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559257600208-61doPBeJTjL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257600208-61doPBeJTjL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/Y2WacykMm5/king-of-tokyo",
        price: "31.98",
        msrp: "39.99",
        discount: "0.20",
        primary_publisher: "IELLO",
        publishers: ["IELLO"],
        mechanics: [
          {
            id: "05zCZoLvQJ"
          },
          {
            id: "R0bGq4cAl4"
          },
          {
            id: "wV5peB05xs"
          },
          {
            id: "BGrhzIN69D"
          }
        ],
        categories: [
          {
            id: "upXZ8vNfNO"
          },
          {
            id: "3B3QpKvXD3"
          }
        ],
        designers: ["Richard Garfield"],
        developers: [],
        artists: [
          "Gabriel Butik",
          "Romain Gaschet",
          "Igor Polouchine",
          "Benjamin Raynal",
          "Jean-Baptiste Reynaud",
          "Jonathan Silvertre",
          "Régis Torres",
          "Anthony Wolff"
        ],
        names: ["King of Tokyo 2nd Edition"],
        num_user_ratings: 300,
        average_user_rating: 3.100263960825316,
        official_url:
          "https://iellousa.com/products/king-of-tokyo?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "http://www.iellogames.com/downloads/KOT2-rulebook_EN.pdf",
        weight_amount: 2,
        weight_units: "lbs ",
        size_height: 10,
        size_width: 2.8,
        size_depth: 10,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "c69qmDp1SX"
          }
        ],
        reddit_all_time_count: 466,
        reddit_week_count: 14,
        reddit_day_count: 1,
        historical_low_price: 22.97,
        historical_low_date: {
          $date: "2019-03-18T00:37:49.643Z"
        }
      },
      {
        id: "nHJNyAWsoo",
        name: "Mysterium",
        year_published: 2015,
        min_players: 2,
        max_players: 7,
        min_playtime: 30,
        max_playtime: 60,
        min_age: 10,
        description:
          "A horrible crime has been committed on the grounds of Warwick Manor and it's up to the psychic investigators to get to the bottom of it.<br />\r\n<br />\r\nIn Mysterium, one player takes on the role of the ghost and over the course of a week, tries to lead the investigators to their culprit. Each night the team will be met with visions, but what is the ghost trying to tell you? Can the psychics determine the weapon, location and killer or will a violent criminal pull off the perfect murder?",
        description_preview:
          "A horrible crime has been committed on the grounds of Warwick Manor and it's up to the psychic investigators to get to the bottom of it. \r\n \r\nIn Mysterium, one player takes on the role of the ghost and over the course of a week, tries to lead the investigators to their culprit. Each night the team will be met with visions, but what is the ghost trying to tell you? Can the psychics determine the weapon, location and killer or will a violent criminal pull off the perfect murder?",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255824772-51iPxTb5g7L.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255824772-51iPxTb5g7L.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559255824772-51iPxTb5g7L.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559255824772-51iPxTb5g7L.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559255824772-51iPxTb5g7L.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559255824772-51iPxTb5g7L.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255824772-51iPxTb5g7L.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/nHJNyAWsoo/mysterium",
        price: "30.63",
        msrp: "44.99",
        discount: "0.32",
        primary_publisher: "Asmodee Editions",
        publishers: ["Asmodee Editions"],
        mechanics: [
          {
            id: "33UT4gTFqy"
          },
          {
            id: "WPytek5P8l"
          }
        ],
        categories: [
          {
            id: "bCBXJy9qDw"
          },
          {
            id: "X8J7RM6dxX"
          }
        ],
        designers: ["Oleksandr Nevskiy", "Oleg Sidorenko"],
        developers: [],
        artists: [
          " Igor Burlakov",
          "Xavier Collette",
          "Oleksandr Nevskiy",
          "Oleg Sidorenko"
        ],
        names: [],
        num_user_ratings: 167,
        average_user_rating: 3.245508982035928,
        official_url:
          "https://drafts.asmodee.us/en/games/mysterium/products/mysterium/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "https://www.fgbradleys.com/rules/rules3/MysteriumRules.pdf",
        weight_amount: 3,
        weight_units: "lbs ",
        size_height: 3,
        size_width: 11.2,
        size_depth: 11.2,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "7q9Avc90D2"
          }
        ],
        reddit_all_time_count: 464,
        reddit_week_count: 14,
        reddit_day_count: 1,
        historical_low_price: 30.63,
        historical_low_date: {
          $date: "2020-01-30T02:23:45.705Z"
        }
      },
      {
        id: "KpKepc41At",
        name: "Sushi Go Party!",
        year_published: 2016,
        min_players: 2,
        max_players: 8,
        min_playtime: 30,
        max_playtime: 45,
        min_age: 8,
        description:
          "Sushi Go!, is a party platter of mega maki, super sashimi, and endless edamame. You still earn points by picking winning sushi combos, but now you can customize each game by choosing a la carte from a menu of more than twenty delectable dishes. What's more, up to eight players can join in on the sushi-feast. Let the good times roll!<br />\r\n<br />\r\nThis deluxe edition features lots of opportunities to customize your playing experience. You'll find that while the overall game is basically the same, the variety of cards offers many new opportunities. You'll also notice that the strategy changes from game to game.",
        description_preview:
          "Sushi Go!, is a party platter of mega maki, super sashimi, and endless edamame. You still earn points by picking winning sushi combos, but now you can customize each game by choosing a la carte from a menu of more than twenty delectable dishes. What's more, up to eight players can join in on the sushi-feast. Let the good times roll! \r\n \r\nThis deluxe edition features lots of opportunities to customize your playing experience. You'll find that while the overall game is basically the same, the variety of cards offers many new opportunities. You'll also notice that the strategy changes from game to game.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254183526-61DkuJEhUWL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254183526-61DkuJEhUWL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254183526-61DkuJEhUWL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254183526-61DkuJEhUWL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254183526-61DkuJEhUWL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254183526-61DkuJEhUWL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254183526-61DkuJEhUWL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/KpKepc41At/sushi-go-party",
        price: "15.99",
        msrp: "22.00",
        discount: "0.27",
        primary_publisher: "Gamewright",
        publishers: ["Gamewright"],
        mechanics: [
          {
            id: "iWODHwRGuU"
          },
          {
            id: "wV5peB05xs"
          },
          {
            id: "WPytek5P8l"
          },
          {
            id: "lA3KUtVFCy"
          },
          {
            id: "DEvPj5twid"
          }
        ],
        categories: [
          {
            id: "eX8uuNlQkQ"
          },
          {
            id: "7rV11PKqME"
          },
          {
            id: "X8J7RM6dxX"
          }
        ],
        designers: ["Phil Walker-Harding"],
        developers: [],
        artists: ["Nan Rangsima"],
        names: ["sushi go party"],
        num_user_ratings: 185,
        average_user_rating: 3.3258968058968055,
        official_url:
          "https://gamewright.com/product/Sushi-Go-Party?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://www.gamewright.com/gamewright/pdfs/Rules/SushiGoPartyTM-RULES.pdf",
        weight_amount: 1,
        weight_units: "lb",
        size_height: 8.7,
        size_width: 3.1,
        size_depth: 6.3,
        size_units: "inches",
        matches_specs: null,
        spec: [
          {
            id: "FbhyxVWcOu"
          }
        ],
        reddit_all_time_count: 456,
        reddit_week_count: 10,
        reddit_day_count: 1,
        historical_low_price: 12.99,
        historical_low_date: {
          $date: "2019-11-29T16:46:09.820Z"
        }
      },
      {
        id: "fGZawn3ipZ",
        name: "Hanabi",
        year_published: 2010,
        min_players: 2,
        max_players: 5,
        min_playtime: 30,
        max_playtime: 45,
        min_age: 8,
        description:
          "<b> Winner of the prestigious Spiel des Jahres Award for 2013. </b> <br />\r\n<br />\r\nFrom 7 Wonders designer Antoine Bauza comes this innovative, cooperative card game where players race against the clock to build a dazzling fireworks finale. Trouble is, you can see the cards that everyone holds - except your own!<br />\r\n<br />\r\nWorking together, players exchange vital information in order to play their cards in the proper launch sequence. Build and light each firework correctly to win the game and avoid a fizzling fiasco!",
        description_preview:
          "  Winner of the prestigious Spiel des Jahres Award for 2013.    \r\n \r\nFrom 7 Wonders designer Antoine Bauza comes this innovative, cooperative card game where players race against the clock to build a dazzling fireworks finale. Trouble is, you can see the cards that everyone holds - except your own! \r\n \r\nWorking together, players exchange vital information in order to play their cards in the proper launch sequence. Build and light each firework correctly to win the game and avoid a fizzling fiasco!",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254186139-51pzPvGxjCL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254186139-51pzPvGxjCL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254186139-51pzPvGxjCL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254186139-51pzPvGxjCL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254186139-51pzPvGxjCL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254186139-51pzPvGxjCL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254186139-51pzPvGxjCL.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/fGZawn3ipZ/hanabi",
        price: "6.97",
        msrp: "10.95",
        discount: "0.36",
        primary_publisher: "R and R Games",
        publishers: ["R and R Games"],
        mechanics: [
          {
            id: "33UT4gTFqy"
          },
          {
            id: "WPytek5P8l"
          },
          {
            id: "r6yIFvyXDD"
          },
          {
            id: "lA3KUtVFCy"
          }
        ],
        categories: [
          {
            id: "eX8uuNlQkQ"
          },
          {
            id: "bCBXJy9qDw"
          }
        ],
        designers: ["Antoine Bauza"],
        developers: [],
        artists: ["Antoine Bauza", "Gérald Guerlais", "Albertine Ralenti"],
        names: [],
        num_user_ratings: 230,
        average_user_rating: 3.069820971867008,
        official_url:
          "http://rnrgames.com/hanabi?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://www.spillehulen.dk/media/102616/hanabi-card-game-rules.pdf",
        weight_amount: 5.4,
        weight_units: "oz.",
        size_height: 7,
        size_width: 4.2,
        size_depth: 2,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "FbhyxVWcOu"
          }
        ],
        reddit_all_time_count: 454,
        reddit_week_count: 10,
        reddit_day_count: 5,
        historical_low_price: 5.99,
        historical_low_date: {
          $date: "2020-01-28T23:46:19.328Z"
        }
      },
      {
        id: "mJr3oebP6p",
        name: "Sagrada",
        year_published: 2017,
        min_players: 1,
        max_players: 4,
        min_playtime: 20,
        max_playtime: 40,
        min_age: 14,
        description:
          "As a skilled artisan, use tools-of-the-trade and careful planning to construct a stained glass window masterpiece in the Sagrada Familia. Gain prestige by adapting to the preferences of your fickle admirers, and, of course, by adding your own artistic flair while completing your glass masterpiece in Sagrada, a game of dice-drafting and window-crafting.",
        description_preview:
          "As a skilled artisan, use tools-of-the-trade and careful planning to construct a stained glass window masterpiece in the Sagrada Familia. Gain prestige by adapting to the preferences of your fickle admirers, and, of course, by adding your own artistic flair while completing your glass masterpiece in Sagrada, a game of dice-drafting and window-crafting.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254943589-61wqSdWtkHL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254943589-61wqSdWtkHL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254943589-61wqSdWtkHL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254943589-61wqSdWtkHL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254943589-61wqSdWtkHL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254943589-61wqSdWtkHL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254943589-61wqSdWtkHL.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/mJr3oebP6p/sagrada",
        price: "26.99",
        msrp: "39.95",
        discount: "0.32",
        primary_publisher: "Floodgate Games",
        publishers: ["Floodgate Games"],
        mechanics: [
          {
            id: "R0bGq4cAl4"
          },
          {
            id: "wV5peB05xs"
          },
          {
            id: "lA3KUtVFCy"
          }
        ],
        categories: [
          {
            id: "WVMOS3s2pb"
          }
        ],
        designers: ["Adrian Adamescu", "Daryl Andrews"],
        developers: [],
        artists: [" Adrian Adamescu", "Daryl Andrews", "Peter Wocken"],
        names: [],
        num_user_ratings: 182,
        average_user_rating: 3.4976452119309256,
        official_url:
          "https://floodgategames.com/Sagrada/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://floodgategames.com/Sagrada/Sagrada-Rules-Floodgate-Games-SA01.pdf",
        weight_amount: 2,
        weight_units: "lbs ",
        size_height: 8.9,
        size_width: 4,
        size_depth: 11.6,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 452,
        reddit_week_count: 6,
        reddit_day_count: 3,
        historical_low_price: 20.97,
        historical_low_date: {
          $date: "2019-10-30T17:35:57.277Z"
        }
      },
      {
        id: "FVKaz7JhBO",
        name: "Cosmic Encounter",
        year_published: 2008,
        min_players: 3,
        max_players: 5,
        min_playtime: 90,
        max_playtime: 120,
        min_age: 12,
        description:
          "Build a galactic empire...<br />\r\nIn the depths of space, the alien races of the Cosmos vie with each other for control of the universe. Alliances form and shift from moment to moment, while cataclysmic battles send starships screaming into the warp.<br />\r\n<br />\r\nPlayers choose from dozens of alien races, each with its own unique power to further its efforts to build an empire that spans the galaxy. Many classic aliens from earlier editions of this beloved game return, such as the Oracle, the Loser, and the Clone. Newly discovered aliens also join the fray, including Remora, Mite, and Tick-Tock.<br />\r\n<br />\r\nThis classic game of alien politics returns from the warp once more. It features 50 alien races, flare cards to boost their powers, 100 plastic ships, a host of premium components, and all-new tech cards that let players research and build extraordinary technological marvels!<br />\r\n<br />\r\nNo two games are the same!",
        description_preview:
          "Build a galactic empire... \r\nIn the depths of space, the alien races of the Cosmos vie with each other for control of the universe. Alliances form and shift from moment to moment, while cataclysmic battles send starships screaming into the warp. \r\n \r\nPlayers choose from dozens of alien races, each with its own unique power to further its efforts to build an empire that spans the galaxy. Many classic aliens from earlier editions of this beloved game return, such as the Oracle, the Loser, and the Clone. Newly discovered aliens also join the fray, including Remora, Mite, and Tick-Tock. \r\n \r\nThis classic game of alien politics returns from the warp once more. It features 50 alien races, flare cards to boost their powers, 100 plastic ships, a host of premium components, and all-new tech cards that let players research and build extraordinary technological marvels! \r\n \r\nNo two games are the same!",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559253933920-61BaOTar9nL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559253933920-61BaOTar9nL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559253933920-61BaOTar9nL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559253933920-61BaOTar9nL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559253933920-61BaOTar9nL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559253933920-61BaOTar9nL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559253933920-61BaOTar9nL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/FVKaz7JhBO/cosmic-encounter",
        price: "50.99",
        msrp: "50.99",
        discount: "0.00",
        primary_publisher: "Fantasy Flight Games",
        publishers: ["Fantasy Flight Games"],
        mechanics: [
          {
            id: "AZxlPpi5oq"
          },
          {
            id: "WPytek5P8l"
          },
          {
            id: "DEvPj5twid"
          },
          {
            id: "T8JEFYwoqy"
          }
        ],
        categories: [
          {
            id: "PinhJrhnxU"
          },
          {
            id: "jZEDOpx07e"
          },
          {
            id: "3B3QpKvXD3"
          }
        ],
        designers: [
          "Bill Eberle",
          "Jack Kittredge",
          "Bill Norton",
          "Peter Olotka",
          "Kevin Wilson"
        ],
        developers: [],
        artists: [
          "Andrew Navaro",
          "Ryan Barger",
          "Felicia Cano",
          "Henning Ludvigsen",
          "Sabe Lewellyn",
          "Brian Schomburg",
          "WiL Springer"
        ],
        names: [
          "Cosmic Encounter (42nd Anniversary Edition)",
          "Cosmic Encounter",
          "Cosmic Encounter",
          "Cosmic Encounter"
        ],
        num_user_ratings: 171,
        average_user_rating: 3.4169488047604375,
        official_url:
          "https://www.fantasyflightgames.com/en/products/cosmic-encounter/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://images-cdn.fantasyflightgames.com/filer_public/a8/bf/a8bfc766-193c-4f40-a4ea-9864b8ae7953/ce01_rulebook_web.pdf",
        weight_amount: 3.46,
        weight_units: "lbs",
        size_height: 2.8,
        size_width: 11.8,
        size_depth: 11.8,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "FbhyxVWcOu"
          }
        ],
        reddit_all_time_count: 443,
        reddit_week_count: 18,
        reddit_day_count: 8,
        historical_low_price: 40.5,
        historical_low_date: {
          $date: "2019-04-22T23:50:25.820Z"
        }
      },
      {
        id: "K92cryrFW5",
        name: "Skull",
        year_published: 2011,
        min_players: 3,
        max_players: 6,
        min_playtime: 15,
        max_playtime: 45,
        min_age: 8,
        description:
          "An ancient game of ornate skulls and dangerous roses, Skull is simple to learn but dangerously difficult to win. You must bluff, lie and pierce through the deceptions to expose the roses. Be wary, though - if you happen across a skull, the consequences are dire! <br />\r\n<br />\r\nPlayers will hold three rose cards and one skull. Add a card to the pile in front of you, and when you feel lucky, announce your challenge and declare how many cards you will flip. Cards that show a rose are safe, but if you expose your opponent's hidden skull, you lose one of your own cards. Keep your cards to the bitter end to win this clever game of deception and perception!",
        description_preview:
          "An ancient game of ornate skulls and dangerous roses, Skull is simple to learn but dangerously difficult to win. You must bluff, lie and pierce through the deceptions to expose the roses. Be wary, though - if you happen across a skull, the consequences are dire!  \r\n \r\nPlayers will hold three rose cards and one skull. Add a card to the pile in front of you, and when you feel lucky, announce your challenge and declare how many cards you will flip. Cards that show a rose are safe, but if you expose your opponent's hidden skull, you lose one of your own cards. Keep your cards to the bitter end to win this clever game of deception and perception!",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559256420495-614L8vwopqL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559256420495-614L8vwopqL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559256420495-614L8vwopqL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559256420495-614L8vwopqL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559256420495-614L8vwopqL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559256420495-614L8vwopqL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559256420495-614L8vwopqL.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/K92cryrFW5/skull",
        price: "23.99",
        msrp: "21.29",
        discount: "-0.13",
        primary_publisher: "Asmodee Editions",
        publishers: ["Asmodee Editions", "Gém Klub Kft.", "Granna", "Lui-même"],
        mechanics: [
          {
            id: "AZxlPpi5oq"
          },
          {
            id: "WPytek5P8l"
          },
          {
            id: "BGrhzIN69D"
          }
        ],
        categories: [
          {
            id: "PinhJrhnxU"
          },
          {
            id: "eX8uuNlQkQ"
          }
        ],
        designers: ["Hervé Marly"],
        developers: [],
        artists: ["Rose Kipik", "Thomas Vuarchex"],
        names: [],
        num_user_ratings: 126,
        average_user_rating: 3.412698412698412,
        official_url:
          "https://drafts.asmodee.us/en/games/skull/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "https://www.skull-and-roses.com/pdf/Skull_EnP.pdf",
        weight_amount: 1.01,
        weight_units: "lbs ",
        size_height: 2.1,
        size_width: 5.2,
        size_depth: 5.2,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 436,
        reddit_week_count: 7,
        reddit_day_count: 6,
        historical_low_price: 9.99,
        historical_low_date: {
          $date: "2019-03-03T08:37:35.531Z"
        }
      },
      {
        id: "sxLwbJHu77",
        name: "Terra Mystica",
        year_published: 2012,
        min_players: 2,
        max_players: 5,
        min_playtime: 60,
        max_playtime: 150,
        min_age: 12,
        description:
          "In Terra Mystica, players govern one of 14 factions seeking to terraform and colonize the landscape in their favor in order to build structures and preserve their race and culture. <br />\r\n<br />\r\nUpgrade structures to provide even more resources, like workers, priests, money, and power, erect temples to gain expanded influence in the four cults of Fire, Earth, Water, and Air, and fortify your stronghold to activate your group's special ability. Will your people prosper, persevere, and stand the test of time in Terra Mystica!",
        description_preview:
          "In Terra Mystica, players govern one of 14 factions seeking to terraform and colonize the landscape in their favor in order to build structures and preserve their race and culture.  \r\n \r\nUpgrade structures to provide even more resources, like workers, priests, money, and power, erect temples to gain expanded influence in the four cults of Fire, Earth, Water, and Air, and fortify your stronghold to activate your group's special ability. Will your people prosper, persevere, and stand the test of time in Terra Mystica!",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254163037-613xYkP1f2BL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254163037-613xYkP1f2BL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254163037-613xYkP1f2BL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254163037-613xYkP1f2BL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254163037-613xYkP1f2BL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254163037-613xYkP1f2BL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254163037-613xYkP1f2BL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/sxLwbJHu77/terra-mystica",
        price: "58.98",
        msrp: "79.99",
        discount: "0.26",
        primary_publisher: "Z-Man Games",
        publishers: ["Z-Man Games"],
        mechanics: [
          {
            id: "05zCZoLvQJ"
          },
          {
            id: "c6gkRM7rSy"
          }
        ],
        categories: [
          {
            id: "N0TkEGfEsF"
          },
          {
            id: "ZTneo8TaIO"
          }
        ],
        designers: ["Jens Drögemüller", "Helge Ostertag"],
        developers: [],
        artists: [" Dennis Lohausen"],
        names: [],
        num_user_ratings: 142,
        average_user_rating: 3.7042253521126765,
        official_url:
          "https://www.zmangames.com/en/products/terra-mystica/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://images-cdn.zmangames.com/us-east-1/filer_public/3c/b1/3cb1119d-85cb-4905-bfe6-d428a3024e1b/zm7240_terra_mystica_rules.pdf",
        weight_amount: 5.51,
        weight_units: "lbs ",
        size_height: 8.8,
        size_width: 3.6,
        size_depth: 12.4,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 433,
        reddit_week_count: 13,
        reddit_day_count: 5,
        historical_low_price: 49.64,
        historical_low_date: {
          $date: "2019-04-08T00:39:23.807Z"
        }
      },
      {
        id: "E35EBpxuDX",
        name: "Century: Spice Road",
        year_published: 2017,
        min_players: 2,
        max_players: 5,
        min_playtime: 30,
        max_playtime: 45,
        min_age: 8,
        description:
          "<div><p>Centuries ago, the spice trade was the most important market in the world. It established and destroyed empires, compelled men to explore the far corners of the earth, and led to the discovery of new worlds. At that time, the value of spices even rivaled that of gold! In the old days, they carried a sense of mystery and allure. Spice merchants would weave fantastic tales of danger to reach these spices in hopes of selling their wares at higher prices. In later centuries, the demand on spices became so great, that those who controlled the spices generated immense wealth and renown. It is at this time, you find yourself leading your caravan across the eastern lands to the Mediterranean Sea in search of wealth and fortune. As a caravan leader, your journey begins on the Spice Road. This is Century: Spice Road!<br /><br /><br /><b>The Spice Must Flow</b><br />In Century: Spice Road, players aim to collect and trade spices in order to acquire point cards and coins that are worth points at the end of the game. Players play cards from their hands to acquire spices for their caravan and trade those spices in for wealth and power (point cards and money), or to purchase new merchant cards to more efficiently acquire rare and valuable spices. Players take one action a turn until someone has acquired their fifth (or sixth in 2-3 player game) point card, players will finish out the current round of play and the person with the most points wins!<br /><br /><b>Play or Acquire Cards</b><br />\r\nAt the start of the game, each player is given two merchant cards to start with and some preliminary spices. On their turn, each player may choose, as their action for the turn, to play a card from their hand, or spend spices to acquire a new merchant card from the row and place it in their hand. Merchant cards allow players to acquire new spices, exchange spices they currently have for different ones, or upgrade a spice to one worth more. Building up a good spice trading engine of merchant cards is an important part of succeeding on the Spice Road, so look out for powerful play sequences when taking new cards!<br /><br /><b>Rest</b><br />\r\nOnce they've played all the cards from their hands, players must use their turn action to rest and return their cards to their hand. Now they'll be able to play their cards again on future turns, building up their caravan and further developing their hand of merchant cards to start acquiring point cards.<br /><br /><b>Claim Point Cards</b><br />\r\nThe way to win in Century: Spice Road is to have the most points at the end of the game. Players get points when they acquire Point Cards and Coins by trading in their spices. Each point card in the row will have a different cost and overall point value listed on it, and the spice cost must be paid to acquire that card. If the two leftmost cards in the row are acquired, whoever acquired one of those point cards can take a coin from the pile above it. Silver coins are worth 1 point at the end of the game and gold coins are worth 3 points! Once a player has bought their fifth point card, the round of play finishes and a winner is crowned!</p>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>",
        description_preview:
          "  Centuries ago, the spice trade was the most important market in the world. It established and destroyed empires, compelled men to explore the far corners of the earth, and led to the discovery of new worlds. At that time, the value of spices even rivaled that of gold! In the old days, they carried a sense of mystery and allure. Spice merchants would weave fantastic tales of danger to reach these spices in hopes of selling their wares at higher prices. In later centuries, the demand on spices became so great, that those who controlled the spices generated immense wealth and renown. It is at this time, you find yourself leading your caravan across the eastern lands to the Mediterranean Sea in search of wealth and fortune. As a caravan leader, your journey begins on the Spice Road. This is Century: Spice Road!    The Spice Must Flow  In Century: Spice Road, players aim to collect and trade spices in order to acquire point cards and coins that are worth points at the end of the game. Players play cards from their hands to acquire spices for their caravan and trade those spices in for wealth and power (point cards and money), or to purchase new merchant cards to more efficiently acquire rare and valuable spices. Players take one action a turn until someone has acquired their fifth (or sixth in 2-3 player game) point card, players will finish out the current round of play and the person with the most points wins!   Play or Acquire Cards  \r\nAt the start of the game, each player is given two merchant cards to start with and some preliminary spices. On their turn, each player may choose, as their action for the turn, to play a card from their hand, or spend spices to acquire a new merchant card from the row and place it in their hand. Merchant cards allow players to acquire new spices, exchange spices they currently have for different ones, or upgrade a spice to one worth more. Building up a good spice trading engine of merchant cards is an important part of succeeding on the Spice Road, so look out for powerful play sequences when taking new cards!   Rest  \r\nOnce they've played all the cards from their hands, players must use their turn action to rest and return their cards to their hand. Now they'll be able to play their cards again on future turns, building up their caravan and further developing their hand of merchant cards to start acquiring point cards.   Claim Point Cards  \r\nThe way to win in Century: Spice Road is to have the most points at the end of the game. Players get points when they acquire Point Cards and Coins by trading in their spices. Each point card in the row will have a different cost and overall point value listed on it, and the spice cost must be paid to acquire that card. If the two leftmost cards in the row are acquired, whoever acquired one of those point cards can take a coin from the pile above it. Silver coins are worth 1 point at the end of the game and gold coins are worth 3 points! Once a player has bought their fifth point card, the round of play finishes and a winner is crowned! \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n ",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254192344-51tjV3rKyRL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254192344-51tjV3rKyRL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254192344-51tjV3rKyRL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254192344-51tjV3rKyRL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254192344-51tjV3rKyRL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254192344-51tjV3rKyRL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254192344-51tjV3rKyRL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/E35EBpxuDX/century-spice-road",
        price: "26.99",
        msrp: "39.99",
        discount: "0.33",
        primary_publisher: "Plan B Games",
        publishers: ["Plan B Games"],
        mechanics: [
          {
            id: "vZsDDAdOoe"
          },
          {
            id: "wV5peB05xs"
          },
          {
            id: "WPytek5P8l"
          },
          {
            id: "lA3KUtVFCy"
          }
        ],
        categories: [
          {
            id: "eX8uuNlQkQ"
          },
          {
            id: "N0TkEGfEsF"
          },
          {
            id: "QAYkTHK1Dd"
          }
        ],
        designers: ["Emerson Matsuuchi"],
        developers: [],
        artists: [" David Richards", "Fernanda Suárez"],
        names: ["century", "Century: Spice Road (Ding & Destroyed)"],
        num_user_ratings: 145,
        average_user_rating: 3.4236881559220387,
        official_url:
          "https://www.planbgames.com/en/all-our-games/8-century-spice-road.html?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://www.fgbradleys.com/rules/rules5/Century-Spice_Road_EN_Rules.pdf",
        weight_amount: 1,
        weight_units: "lbs",
        size_height: 7.4,
        size_width: 2.8,
        size_depth: 10.8,
        size_units: "inches",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 431,
        reddit_week_count: 8,
        reddit_day_count: 2,
        historical_low_price: 9.97,
        historical_low_date: {
          $date: "2019-12-05T19:16:45.896Z"
        }
      },
      {
        id: "F1aw7kyGTA",
        name: "Bohnanza",
        year_published: 1997,
        min_players: 2,
        max_players: 7,
        min_playtime: 45,
        max_playtime: 60,
        min_age: 13,
        description:
          "This great card game is about planting, trading, and selling beans - 11 kinds of beans (this English version includes all the cards from the original game and the first expansion). <br />\r\n<br />\r\nPlayers try to collect large sets of beans to sell for gold. There is limited growing space and always new beans to plant. To avoid planting unwanted beans, players trade them to other players who want them for their bean fields.",
        description_preview:
          "This great card game is about planting, trading, and selling beans - 11 kinds of beans (this English version includes all the cards from the original game and the first expansion).  \r\n \r\nPlayers try to collect large sets of beans to sell for gold. There is limited growing space and always new beans to plant. To avoid planting unwanted beans, players trade them to other players who want them for their bean fields.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254186139-51cXhVYYHwL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254186139-51cXhVYYHwL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254186139-51cXhVYYHwL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254186139-51cXhVYYHwL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254186139-51cXhVYYHwL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254186139-51cXhVYYHwL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254186139-51cXhVYYHwL.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/F1aw7kyGTA/bohnanza",
        price: "13.49",
        msrp: "19.95",
        discount: "0.32",
        primary_publisher: "Rio Grande Games",
        publishers: ["Rio Grande Games"],
        mechanics: [
          {
            id: "WPytek5P8l"
          },
          {
            id: "lA3KUtVFCy"
          },
          {
            id: "AVY6EvSQTP"
          }
        ],
        categories: [
          {
            id: "eX8uuNlQkQ"
          },
          {
            id: "Wr8uXcoR9p"
          },
          {
            id: "jZEDOpx07e"
          }
        ],
        designers: [" Uwe Rosenberg"],
        developers: [],
        artists: [
          "Fréderic Bertrand",
          "Marek Bláha",
          "Andrea Boekhoff",
          "Klemens Franz",
          "Oliver Freudenreich",
          "Inge George",
          "Guido Hoffmann",
          "Alexander Jung",
          "Harald Lieske",
          "Atelier Löwentor",
          "Doris Matthäus",
          "Björn Pertoft",
          "Uwe Rosenberg",
          "Johann Rüttinger",
          "Barbara Stachuletz",
          "Franz Vohwinkel",
          "Markus Wagner"
        ],
        names: [],
        num_user_ratings: 163,
        average_user_rating: 3.1298276365761035,
        official_url:
          "http://riograndegames.com/Game/36-Bohnanza?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "http://riograndegames.com/getFile.php?id=535",
        weight_amount: 13.6,
        weight_units: "oz",
        size_height: 6,
        size_width: 1,
        size_depth: 3,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 426,
        reddit_week_count: 16,
        reddit_day_count: 6,
        historical_low_price: 12.97,
        historical_low_date: {
          $date: "2019-09-11T21:01:25.675Z"
        }
      },
      {
        id: "4G32qGJZWs",
        name: "Arkham Horror: The Card Game",
        year_published: 2016,
        min_players: 1,
        max_players: 2,
        min_playtime: 60,
        max_playtime: 120,
        min_age: 14,
        description:
          "&quot;Something evil stirs in Arkham, and only you can stop it. Blurring the traditional lines between roleplaying and card game experiences, Arkham horror: the card game is the living card game of love craft I an mystery, monsters, and madness! you and your friend (or up to three friends with two core sets) become characters within the quiet new England town of Arkham. You have your talents, sure, but you also have your flaws. Perhaps you've dabbled a little too much in the writings of the Necronomicon, and its words continue to haunt you. Perhaps you feel compelled to cover up any signs of otherworldly evils, hampering your own investigations in order to protect the quiet confidence of the greater population. Perhaps you'll be scarred by your encounters with a ghoulish cult. No matter what compels you, no matter what haunts you, you'll find both your strengths and weaknesses reflected in your custom deck of cards, and these cards will be your resources as you work with your friends to unravel the world's most terrifying mysteries. Meanwhile, each of your adventures in Arkham horror LCG carries you deeper into mystery. You'll find cultists and foul rituals. You'll find haunted houses and strange creatures. And you may find signs of the ancient ones straining against the barriers to our world… the basic mode of play in Arkham LCG is not the adventure, but the campaign. You might be scarred by your adventures, your sanity may be strained, and you may alter Arkham's landscape, burning buildings to the ground. All your choices and actions have consequences that reach far beyond the immediate resolution of the scenario at hand. And your actions may earn you valuable experience with which you can better prepare yourself for the adventures that still lie before you&quot;.",
        description_preview:
          "\"Something evil stirs in Arkham, and only you can stop it. Blurring the traditional lines between roleplaying and card game experiences, Arkham horror: the card game is the living card game of love craft I an mystery, monsters, and madness! you and your friend (or up to three friends with two core sets) become characters within the quiet new England town of Arkham. You have your talents, sure, but you also have your flaws. Perhaps you've dabbled a little too much in the writings of the Necronomicon, and its words continue to haunt you. Perhaps you feel compelled to cover up any signs of otherworldly evils, hampering your own investigations in order to protect the quiet confidence of the greater population. Perhaps you'll be scarred by your encounters with a ghoulish cult. No matter what compels you, no matter what haunts you, you'll find both your strengths and weaknesses reflected in your custom deck of cards, and these cards will be your resources as you work with your friends to unravel the world's most terrifying mysteries. Meanwhile, each of your adventures in Arkham horror LCG carries you deeper into mystery. You'll find cultists and foul rituals. You'll find haunted houses and strange creatures. And you may find signs of the ancient ones straining against the barriers to our world… the basic mode of play in Arkham LCG is not the adventure, but the campaign. You might be scarred by your adventures, your sanity may be strained, and you may alter Arkham's landscape, burning buildings to the ground. All your choices and actions have consequences that reach far beyond the immediate resolution of the scenario at hand. And your actions may earn you valuable experience with which you can better prepare yourself for the adventures that still lie before you\".",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257204681-515mUPxEHZL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257204681-515mUPxEHZL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559257204681-515mUPxEHZL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559257204681-515mUPxEHZL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559257204681-515mUPxEHZL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559257204681-515mUPxEHZL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257204681-515mUPxEHZL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/4G32qGJZWs/arkham-horror-the-card-game",
        price: "35.95",
        msrp: "0.00",
        discount: "0.00",
        primary_publisher: "Fantasy Flight Publishing",
        publishers: ["Fantasy Flight Publishing"],
        mechanics: [
          {
            id: "33UT4gTFqy"
          },
          {
            id: "vZsDDAdOoe"
          },
          {
            id: "WPytek5P8l"
          }
        ],
        categories: [
          {
            id: "KUBCKBkGxV"
          },
          {
            id: "eX8uuNlQkQ"
          },
          {
            id: "ZTneo8TaIO"
          },
          {
            id: "cAIkk5aLdQ"
          }
        ],
        designers: ["Nate French", "Matthew Newman"],
        developers: [],
        artists: [
          " Christopher Hosch",
          "Marcin Jakubowski",
          "Ignacio Bazán Lazcano",
          "Henning Ludvigsen",
          "Mercedes Opheim",
          "Zoe Robinson",
          "Evan Simonet"
        ],
        names: ["Arkham Horror LCG", "Arkham Horror: Das Kartenspiel "],
        num_user_ratings: 150,
        average_user_rating: 3.7851515151515143,
        official_url:
          "https://www.fantasyflightgames.com/en/products/arkham-horror-the-card-game/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://images-cdn.fantasyflightgames.com/filer_public/88/53/88538d11-5274-4b4a-ac8c-e8d758f71132/ahc01_learn_to_play_web.pdf",
        weight_amount: 2,
        weight_units: "lbs",
        size_height: 10,
        size_width: 2,
        size_depth: 10,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "L7kGfX7JlX"
          },
          {
            id: "j4bHFijdvS"
          }
        ],
        reddit_all_time_count: 426,
        reddit_week_count: 14,
        reddit_day_count: 4,
        historical_low_price: 18.39,
        historical_low_date: {
          $date: "2019-03-18T12:51:44.989Z"
        }
      },
      {
        id: "2eoe0273LD",
        name: "Rising Sun",
        year_published: 2018,
        min_players: 3,
        max_players: 5,
        min_playtime: 90,
        max_playtime: 120,
        min_age: 13,
        description:
          "Lead your clan to honor and victory!<br />\r\n<br />\r\nWarring clans struggle for control of provinces in Feudal Japan; however, a conflict is not only won on the battlefield. Diplomacy and alliances will play a large part in winning the war.<br />\r\n<br />\r\nIn Rising Sun, from the acclaimed team that brought fans Blood Rage, players enter a fantastical version of Feudal Japan and control different Clans with unique abilities. They will engage in combat, make offerings to the Gods, and form and break treaties. After three hard fought years have passed, only the player who earned the most victory points will win. <br />\r\n<br />\r\n<b>Components:</b><br />\r\n<br />\r\n* Main Board (Map of Japan) <br />\r\n* 7 God Tiles 30 Coins<br />\r\n* 5 Clan Screens <br />\r\n* 10 Colored Clan Tokens<br />\r\n* 5 Clan Alliance Tokens<br />\r\n* 30 Bushi (Samurai) Figures (6 Per Clan)<br />\r\n* 15 Shinto (Monk) Figures (3 Per Clan)<br />\r\n* 5 Daimyo (Warlord) Figures (1 Per Clan)<br />\r\n* 8 Monster Figures 20 Strongholds Tokens (4 Per Clan)<br />\r\n* 10 Ships Tokens (2 Per Clan) <br />\r\n* 9 Political Mandate Cards<br />\r\n* 24 War Tokens<br />\r\n* 8 Numbered War Tokens<br />\r\n* 5 Two-Sided Reference Tiles <br />\r\n* Rulebook",
        description_preview:
          "Lead your clan to honor and victory! \r\n \r\nWarring clans struggle for control of provinces in Feudal Japan; however, a conflict is not only won on the battlefield. Diplomacy and alliances will play a large part in winning the war. \r\n \r\nIn Rising Sun, from the acclaimed team that brought fans Blood Rage, players enter a fantastical version of Feudal Japan and control different Clans with unique abilities. They will engage in combat, make offerings to the Gods, and form and break treaties. After three hard fought years have passed, only the player who earned the most victory points will win.  \r\n \r\n Components:  \r\n \r\n* Main Board (Map of Japan)  \r\n* 7 God Tiles 30 Coins \r\n* 5 Clan Screens  \r\n* 10 Colored Clan Tokens \r\n* 5 Clan Alliance Tokens \r\n* 30 Bushi (Samurai) Figures (6 Per Clan) \r\n* 15 Shinto (Monk) Figures (3 Per Clan) \r\n* 5 Daimyo (Warlord) Figures (1 Per Clan) \r\n* 8 Monster Figures 20 Strongholds Tokens (4 Per Clan) \r\n* 10 Ships Tokens (2 Per Clan)  \r\n* 9 Political Mandate Cards \r\n* 24 War Tokens \r\n* 8 Numbered War Tokens \r\n* 5 Two-Sided Reference Tiles  \r\n* Rulebook",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1541007861613",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1541007861613",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1541007861613",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1541007861613",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1541007861613",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1541007861613",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1541007861613"
        },
        url: "https://www.boardgameatlas.com/search/game/2eoe0273LD/rising-sun",
        price: "99.88",
        msrp: "99.99",
        discount: "0.00",
        primary_publisher: "CMON",
        publishers: ["CMON"],
        mechanics: [
          {
            id: "05zCZoLvQJ"
          },
          {
            id: "wV5peB05xs"
          },
          {
            id: "lA3KUtVFCy"
          },
          {
            id: "DEvPj5twid"
          },
          {
            id: "T8JEFYwoqy"
          }
        ],
        categories: [
          {
            id: "PinhJrhnxU"
          },
          {
            id: "ZTneo8TaIO"
          },
          {
            id: "QAYkTHK1Dd"
          },
          {
            id: "jZEDOpx07e"
          }
        ],
        designers: [" Eric M. Lang"],
        developers: [],
        artists: [" Edgar Skomorowski", "Adrian Smith"],
        names: [],
        num_user_ratings: 69,
        average_user_rating: 3.675724637681159,
        official_url:
          "https://cmon.com/product/rising-sun/rising-sun?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://cmon-files.s3.amazonaws.com/pdf/assets_item/resource/79/Rulebook_RisingSun.pdf",
        weight_amount: 2.2,
        weight_units: "lbs",
        size_height: 12.7,
        size_width: 4.7,
        size_depth: 12.7,
        size_units: "inches",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 422,
        reddit_week_count: 28,
        reddit_day_count: 5,
        historical_low_price: 71.97,
        historical_low_date: {
          $date: "2019-03-06T11:01:21.188Z"
        }
      },
      {
        id: "H3yXWu5No0",
        name: "Dixit",
        year_published: 2008,
        min_players: 3,
        max_players: 6,
        min_playtime: 30,
        max_playtime: 42,
        min_age: 8,
        description:
          "<i>Winner of the 2010 &quot;Spiel des Jahres&quot; German Board Game of the Year Award.</i><br /><br />\r\nEach player at his turn plays the storyteller. <br /><br />\r\nHe is given a single picture, while the other players get a hand of six pictures. <br /><br />\r\nThe storyteller says a sentence or a word connected to his picture, then each player chooses one of his pictures to bet upon. <br /><br />\r\nAll pictures are showed face up, and every player have to bet upon what picture was the storyteller's.<br /><br />",
        description_preview:
          ' Winner of the 2010 "Spiel des Jahres" German Board Game of the Year Award.   \r\nEach player at his turn plays the storyteller.   \r\nHe is given a single picture, while the other players get a hand of six pictures.   \r\nThe storyteller says a sentence or a word connected to his picture, then each player chooses one of his pictures to bet upon.   \r\nAll pictures are showed face up, and every player have to bet upon what picture was the storyteller\'s.  ',
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559258092947-61SvciVJLlL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559258092947-61SvciVJLlL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559258092947-61SvciVJLlL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559258092947-61SvciVJLlL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559258092947-61SvciVJLlL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559258092947-61SvciVJLlL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559258092947-61SvciVJLlL.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/H3yXWu5No0/dixit",
        price: "28.57",
        msrp: "34.99",
        discount: "0.18",
        primary_publisher: "Asmodee Editions",
        publishers: ["Asmodee Editions"],
        mechanics: [
          {
            id: "DEvPj5twid"
          },
          {
            id: "JYYdBW6UCE"
          }
        ],
        categories: [
          {
            id: "eX8uuNlQkQ"
          },
          {
            id: "TYnxiuiI3X"
          },
          {
            id: "X8J7RM6dxX"
          }
        ],
        designers: ["Jean-Louis Roubira"],
        developers: [],
        artists: ["Marie Cardouat"],
        names: ["Dixit"],
        num_user_ratings: 207,
        average_user_rating: 3.16585545722714,
        official_url:
          "https://www.asmodee.co.uk/featured-product/dixit/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        weight_amount: 1.8,
        weight_units: "lbs",
        size_height: 11,
        size_width: 11,
        size_depth: 2.2,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "7q9Avc90D2"
          }
        ],
        reddit_all_time_count: 414,
        reddit_week_count: 8,
        reddit_day_count: 1,
        historical_low_price: 9.98,
        historical_low_date: {
          $date: "2019-11-26T15:45:58.989Z"
        }
      },
      {
        id: "fmSDkAqJbH",
        name: "Modern Art",
        year_published: 1992,
        min_players: 3,
        max_players: 5,
        min_playtime: 60,
        max_playtime: 90,
        min_age: 14,
        description:
          "Beauty is in the eye of the beholder, but in the high-stakes world of fine art auctions, there's nothing more beautiful than making a buck.<br /><br />\r\nIn Modern Art, players take on the role of curators, buying and selling paintings for their museum. Over the course of four rounds, they take part in a number of auctions, trying to get the best value for the pieces in their collection. Whoever makes the most money wins the game (and keeps their job).",
        description_preview:
          "Beauty is in the eye of the beholder, but in the high-stakes world of fine art auctions, there's nothing more beautiful than making a buck.  \r\nIn Modern Art, players take on the role of curators, buying and selling paintings for their museum. Over the course of four rounds, they take part in a number of auctions, trying to get the best value for the pieces in their collection. Whoever makes the most money wins the game (and keeps their job).",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559253470032-51wRe458cEL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559253470032-51wRe458cEL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559253470032-51wRe458cEL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559253470032-51wRe458cEL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559253470032-51wRe458cEL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559253470032-51wRe458cEL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559253470032-51wRe458cEL.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/fmSDkAqJbH/modern-art",
        price: "34.99",
        msrp: "29.99",
        discount: "-0.17",
        primary_publisher: "CMON",
        publishers: ["CMON"],
        mechanics: [
          {
            id: "AZxlPpi5oq"
          },
          {
            id: "WPytek5P8l"
          }
        ],
        categories: [
          {
            id: "eX8uuNlQkQ"
          },
          {
            id: "N0TkEGfEsF"
          }
        ],
        designers: [" Reiner Knizia"],
        developers: [],
        artists: [
          "Carole Carrion",
          "Manuel Carvalho",
          "Chen Cheng-po",
          "Mike Doyle (I)",
          "Pete Fenlon",
          "Paul Laane",
          "Ramon Martins",
          "Daniel Melim",
          "Rafael Silveira",
          "Sigrid Thaler",
          "Zeilbeck & Natzeck Design Company"
        ],
        names: [],
        num_user_ratings: 74,
        average_user_rating: 3.5810810810810807,
        official_url:
          "https://cmon.com/product/modern-art/modern-art?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://cmon-files.s3.amazonaws.com/pdf/assets_item/resource/80/MA_Rulebbok_Artbook_v18-low.pdf",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 405,
        reddit_week_count: 22,
        reddit_day_count: 9,
        historical_low_price: 20.68,
        historical_low_date: {
          $date: "2019-12-12T10:02:31.891Z"
        }
      },
      {
        id: "sMTDq4Zeif",
        name: "Five Tribes",
        year_published: 2014,
        min_players: 2,
        max_players: 4,
        min_playtime: 60,
        max_playtime: 90,
        min_age: 13,
        description:
          "Crossing into the Land of 1001 Nights, your caravan arrives at the fabled Sultanate of Naqala.<br />\r\n<br />\r\nThe old sultan just died and control of Naqala is up for grabs!<br />\r\n<br />\r\nThe oracles foretold of strangers who would maneuver the Five Tribes to gain influence over the legendary city-state.<br />\r\n<br />\r\nWill you fulfill the prophecy? Invoke the old Djinns, move the Tribes into position at the right time and the Sultanate may become yours!",
        description_preview:
          "Crossing into the Land of 1001 Nights, your caravan arrives at the fabled Sultanate of Naqala. \r\n \r\nThe old sultan just died and control of Naqala is up for grabs! \r\n \r\nThe oracles foretold of strangers who would maneuver the Five Tribes to gain influence over the legendary city-state. \r\n \r\nWill you fulfill the prophecy? Invoke the old Djinns, move the Tribes into position at the right time and the Sultanate may become yours!",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254126853-611YVb5GCwL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254126853-611YVb5GCwL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254126853-611YVb5GCwL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254126853-611YVb5GCwL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254126853-611YVb5GCwL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254126853-611YVb5GCwL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254126853-611YVb5GCwL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/sMTDq4Zeif/five-tribes",
        price: "41.99",
        msrp: "60.00",
        discount: "0.30",
        primary_publisher: "Days of Wonder",
        publishers: ["Days of Wonder"],
        mechanics: [
          {
            id: "05zCZoLvQJ"
          },
          {
            id: "AZxlPpi5oq"
          },
          {
            id: "wV5peB05xs"
          },
          {
            id: "lA3KUtVFCy"
          }
        ],
        categories: [
          {
            id: "ZTneo8TaIO"
          },
          {
            id: "MHkqIVxwtx"
          }
        ],
        designers: ["Bruno Cathala"],
        developers: [],
        artists: ["Clément Masson"],
        names: [],
        num_user_ratings: 178,
        average_user_rating: 3.6172865854889436,
        official_url:
          "https://www.daysofwonder.com/five-tribes/en/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://ncdn0.daysofwonder.com/five-tribes/en/img/ft_rules_2015-06_en.pdf",
        weight_amount: 3.75,
        weight_units: "lbs ",
        size_height: 11.8,
        size_width: 11.8,
        size_depth: 3,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 401,
        reddit_week_count: 18,
        reddit_day_count: 2,
        historical_low_price: 36.99,
        historical_low_date: {
          $date: "2019-11-28T15:49:25.173Z"
        }
      },
      {
        id: "lDg8hjuvRb",
        name: "Keyflower",
        year_published: 2012,
        min_players: 2,
        max_players: 6,
        min_playtime: 90,
        max_playtime: 120,
        min_age: 12,
        description:
          "Keyflower is a game for two to six players played over four rounds. Each round represents a season: spring, summer, autumn, and finally winter. Each player starts the game with a &quot;home&quot; tile and an initial team of eight workers, each of which is colored red, yellow, or blue. Workers of matching colors are used by the players to bid for tiles to add to their villages. Matching workers may alternatively be used to generate resources, skills and additional workers, not only from the player's own tiles, but also from the tiles in the other players' villages and from the new tiles being auctioned.<br />\r\n<br />\r\nIn spring, summer, and autumn, more workers will arrive on board the Keyflower and her sister boats, with some of these workers possessing skills in the working of the key resources of iron, stone, and wood. In each of these seasons, village tiles are set out at random for auction. In the winter, no new workers arrive, and the players select the village tiles for auction from those they received at the beginning of the game. Each winter village tile offers VPs for certain combinations of resources, skills, and workers. The player whose village and workers generate the most VPs wins the game.<br />\r\n<br />\r\nKeyflower presents players with many different challenges, and each game will be different due to the mix of village tiles that appear in that particular game. Throughout the game, players will need to be alert to the opportunities to best utilize their various resources, transport and upgrade capability, skills, and workers.<br />\r\n<br />\r\nKeyflower, a joint design between Richard Breese and Sebastian Bleasdale, is the seventh game in the &quot;Key&quot; series from R&amp;D Games set in the medieval &quot;Key&quot; land.",
        description_preview:
          'Keyflower is a game for two to six players played over four rounds. Each round represents a season: spring, summer, autumn, and finally winter. Each player starts the game with a "home" tile and an initial team of eight workers, each of which is colored red, yellow, or blue. Workers of matching colors are used by the players to bid for tiles to add to their villages. Matching workers may alternatively be used to generate resources, skills and additional workers, not only from the player\'s own tiles, but also from the tiles in the other players\' villages and from the new tiles being auctioned. \r\n \r\nIn spring, summer, and autumn, more workers will arrive on board the Keyflower and her sister boats, with some of these workers possessing skills in the working of the key resources of iron, stone, and wood. In each of these seasons, village tiles are set out at random for auction. In the winter, no new workers arrive, and the players select the village tiles for auction from those they received at the beginning of the game. Each winter village tile offers VPs for certain combinations of resources, skills, and workers. The player whose village and workers generate the most VPs wins the game. \r\n \r\nKeyflower presents players with many different challenges, and each game will be different due to the mix of village tiles that appear in that particular game. Throughout the game, players will need to be alert to the opportunities to best utilize their various resources, transport and upgrade capability, skills, and workers. \r\n \r\nKeyflower, a joint design between Richard Breese and Sebastian Bleasdale, is the seventh game in the "Key" series from R&D Games set in the medieval "Key" land.',
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1545336456800",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1545336456800",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1545336456800",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1545336456800",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1545336456800",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1545336456800",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1545336456800"
        },
        url: "https://www.boardgameatlas.com/search/game/lDg8hjuvRb/keyflower",
        price: "49.49",
        msrp: "60.00",
        discount: "0.18",
        primary_publisher: "R&D Games",
        publishers: ["R&D Games"],
        mechanics: [
          {
            id: "AZxlPpi5oq"
          },
          {
            id: "r6yIFvyXDD"
          },
          {
            id: "c6gkRM7rSy"
          },
          {
            id: "lA3KUtVFCy"
          },
          {
            id: "8PN2HE86wg"
          },
          {
            id: "fBOTEBUAmV"
          }
        ],
        categories: [
          {
            id: "N0TkEGfEsF"
          },
          {
            id: "buDTYyPw4D"
          }
        ],
        designers: ["Sebastian Bleasdale", "Richard Breese"],
        developers: [],
        artists: ["Juliet Breese", "Jo Breese", "Gemma Tegelaers"],
        names: [],
        num_user_ratings: 118,
        average_user_rating: 3.652542372881356,
        rules_url:
          "https://gewa.gsfc.nasa.gov/clubs/geek/files/Keyflower%20English.pdf",
        weight_amount: 3,
        weight_units: "lbs ",
        size_height: 9,
        size_width: 2.8,
        size_depth: 12.6,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 400,
        reddit_week_count: 35,
        reddit_day_count: 3,
        historical_low_price: 41.07,
        historical_low_date: {
          $date: "2019-09-12T10:01:55.836Z"
        }
      },
      {
        id: "2e7YkCwYCY",
        name: "Railroad Ink: Deep Blue Edition",
        year_published: 2018,
        min_players: 1,
        max_players: 6,
        min_playtime: 20,
        max_playtime: 30,
        min_age: 8,
        description:
          "<p>New lands have opened up and the race is on to create the best network of rail and road lines through it. In Railroad Ink, players roll the Route dice and must then draw the subsequent results on their individual Route boards. Players score points for having long interconnected Routes, as well as connecting the entry points to their board, plus having Routes through the center of their boards. But beware, they’ll lose points for leaving unfinished lines. In the Deep Blue Edition, the Lake and River dice add in some cool, refreshing waterways to the maps. But in the Blazing Red Edition, Meteors fall from the sky and Volcanoes erupt from underground. It’s a challenge to keep their roads and rails from getting destroyed, and having to repair them when they are. Or, players can combine the two for epic, 12-player games!</p>",
        description_preview:
          " New lands have opened up and the race is on to create the best network of rail and road lines through it. In Railroad Ink, players roll the Route dice and must then draw the subsequent results on their individual Route boards. Players score points for having long interconnected Routes, as well as connecting the entry points to their board, plus having Routes through the center of their boards. But beware, they’ll lose points for leaving unfinished lines. In the Deep Blue Edition, the Lake and River dice add in some cool, refreshing waterways to the maps. But in the Blazing Red Edition, Meteors fall from the sky and Volcanoes erupt from underground. It’s a challenge to keep their roads and rails from getting destroyed, and having to repair them when they are. Or, players can combine the two for epic, 12-player games! ",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1540456471813",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1540456471813",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1540456471813",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1540456471813",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1540456471813",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1540456471813",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1540456471813"
        },
        url:
          "https://www.boardgameatlas.com/search/game/2e7YkCwYCY/railroad-ink-deep-blue-edition",
        price: "16.99",
        msrp: "19.99",
        discount: "0.15",
        primary_publisher: null,
        publishers: ["Horrible Games", "CMON Limited"],
        mechanics: [
          {
            id: "R0bGq4cAl4"
          },
          {
            id: "UHdPUeuqyZ"
          },
          {
            id: "zIPRS41oiN"
          },
          {
            id: "c6gkRM7rSy"
          }
        ],
        categories: [
          {
            id: "mavSOM8vjH"
          },
          {
            id: "JwHcKqxh33"
          }
        ],
        designers: ["Hjalmar Hach", "Lorenzo Silva"],
        developers: [],
        artists: ["Marta Tranquilli"],
        names: ["Railroad Ink", "Railroad Ink: Deep Blue"],
        num_user_ratings: 37,
        average_user_rating: 3.756756756756756,
        official_url:
          "https://cmon.com/product/railroad-ink/railroad-ink?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: null,
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 400,
        reddit_week_count: 13,
        reddit_day_count: 4,
        historical_low_price: 15.29,
        historical_low_date: {
          $date: "2019-07-12T08:25:23.472Z"
        }
      },
      {
        id: "cb1DcPrnkz",
        name: "Secret Hitler",
        year_published: 2016,
        min_players: 5,
        max_players: 10,
        min_playtime: 30,
        max_playtime: 45,
        min_age: 17,
        description:
          "Secret Hitler is a dramatic game of political intrigue and betrayal set in 1930's Germany. Players are secretly divided into two teams - liberals and fascists. Known only to each other, the fascists coordinate to sow distrust and install their cold-blooded leader. The liberals must find and stop the Secret Hitler before it's too late. Secret Hitler introduces new mechanics to the hidden-identity game genre. The first is the element of randomness. When laws are passed, the President draws three policies, passes two to the Chancellor, and the Chancellor enacts one. Only the enacted policy is revealed, so players have to rely on the President and Chancellor's word to know what got discarded. The deck has a known initial composition (11 Fascist policies, 6 Liberal policies), and players can roughly track deck contents based on what the President and Chancellor report, though someone might have lied about what was discarded. That means players can form reasonable expectations and plan around probability, but they can also manipulate future probabilities and expectations in a way that benefits their team. The second new mechanic is the &quot;Hitler&quot; identity: If Hitler is elected as Chancellor after the third fascist policy has already been enacted, the game ends immediately and the fascists win. This means Hitler will spend most of the game playing as a liberal to gain players' trust. Once the third fascist policy is enacted, anyone who has helped the group becomes immediately suspect; if the liberals make a wrong move at this point, they lose immediately. This creates incredible moments of tension and relief in the game.",
        description_preview:
          "Secret Hitler is a dramatic game of political intrigue and betrayal set in 1930's Germany. Players are secretly divided into two teams - liberals and fascists. Known only to each other, the fascists coordinate to sow distrust and install their cold-blooded leader. The liberals must find and stop the Secret Hitler before it's too late. Secret Hitler introduces new mechanics to the hidden-identity game genre. The first is the element of randomness. When laws are passed, the President draws three policies, passes two to the Chancellor, and the Chancellor enacts one. Only the enacted policy is revealed, so players have to rely on the President and Chancellor's word to know what got discarded. The deck has a known initial composition (11 Fascist policies, 6 Liberal policies), and players can roughly track deck contents based on what the President and Chancellor report, though someone might have lied about what was discarded. That means players can form reasonable expectations and plan around probability, but they can also manipulate future probabilities and expectations in a way that benefits their team. The second new mechanic is the \"Hitler\" identity: If Hitler is elected as Chancellor after the third fascist policy has already been enacted, the game ends immediately and the fascists win. This means Hitler will spend most of the game playing as a liberal to gain players' trust. Once the third fascist policy is enacted, anyone who has helped the group becomes immediately suspect; if the liberals make a wrong move at this point, they lose immediately. This creates incredible moments of tension and relief in the game.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257704919-51BpeBNTi-L.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257704919-51BpeBNTi-L.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559257704919-51BpeBNTi-L.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559257704919-51BpeBNTi-L.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559257704919-51BpeBNTi-L.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559257704919-51BpeBNTi-L.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257704919-51BpeBNTi-L.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/cb1DcPrnkz/secret-hitler",
        price: "35.00",
        msrp: "35.00",
        discount: "0.00",
        primary_publisher: "Secret Hitler",
        publishers: ["Secret Hitler"],
        mechanics: [
          {
            id: "ZX3hYcF9H7"
          },
          {
            id: "hwyCo1W0hi"
          },
          {
            id: "BGrhzIN69D"
          },
          {
            id: "9jnCsVuRat"
          },
          {
            id: "JYYdBW6UCE"
          }
        ],
        categories: [
          {
            id: "PinhJrhnxU"
          },
          {
            id: "eX8uuNlQkQ"
          },
          {
            id: "TYnxiuiI3X"
          },
          {
            id: "X8J7RM6dxX"
          },
          {
            id: "TKQncFVX74"
          }
        ],
        designers: ["Mike Boxleiter", "Tommy Maranges", "Max Temkin"],
        developers: [],
        artists: ["Mackenzie Schubert"],
        names: [],
        num_user_ratings: 120,
        average_user_rating: 3.4499999999999997,
        official_url:
          "http://secrethitler.com/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "http://secrethitler.com/assets/Secret_Hitler_Rules.pdf",
        weight_amount: 2.05,
        weight_units: "lbs",
        size_height: 15.4,
        size_width: 6.3,
        size_depth: 2.2,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 398,
        reddit_week_count: 12,
        reddit_day_count: 10,
        historical_low_price: 34.95,
        historical_low_date: {
          $date: "2019-04-17T00:38:40.559Z"
        }
      },
      {
        id: "4rn2FX1Eon",
        name: "Forbidden Island",
        year_published: 2010,
        min_players: 2,
        max_players: 4,
        min_playtime: 30,
        max_playtime: 45,
        min_age: 10,
        description:
          "<i>Nominated for the 2011 Spiel des Jahres (Game of the Year) Award.</i><br /><br />\r\nDare to discover Forbidden Island! Join a team of fearless adventurers on a do-or-die mission to capture four sacred treasures from the ruins of this perilous paradise. Your team will have to work together and make some pulse-pounding maneuvers, as the island will sink beneath every step! Race to collect the treasures and make a triumphant escape before you are swallowed into the watery abyss!",
        description_preview:
          " Nominated for the 2011 Spiel des Jahres (Game of the Year) Award.   \r\nDare to discover Forbidden Island! Join a team of fearless adventurers on a do-or-die mission to capture four sacred treasures from the ruins of this perilous paradise. Your team will have to work together and make some pulse-pounding maneuvers, as the island will sink beneath every step! Race to collect the treasures and make a triumphant escape before you are swallowed into the watery abyss!",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1539384798707",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1539384798707",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1539384798707",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1539384798707",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1539384798707",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1539384798707",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1539384798707"
        },
        url:
          "https://www.boardgameatlas.com/search/game/4rn2FX1Eon/forbidden-island",
        price: "14.19",
        msrp: "19.99",
        discount: "0.29",
        primary_publisher: "Gamewright",
        publishers: ["Gamewright"],
        mechanics: [
          {
            id: "33UT4gTFqy"
          },
          {
            id: "qu5BcGjAzk"
          },
          {
            id: "WPytek5P8l"
          },
          {
            id: "lA3KUtVFCy"
          }
        ],
        categories: [
          {
            id: "KUBCKBkGxV"
          },
          {
            id: "ZTneo8TaIO"
          }
        ],
        designers: ["Matt Leacock"],
        developers: [],
        artists: ["C. B. Canga"],
        names: ["Forbidden Island", "Forbidden Island", "Forbidden Island"],
        num_user_ratings: 266,
        average_user_rating: 3.0639097744360893,
        official_url:
          "https://gamewright.com/product/Forbidden-Island?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://www.fgbradleys.com/rules/rules2/ForbiddenIsland-rules.pdf",
        weight_amount: 1.36,
        weight_units: "lbs ",
        size_height: 6.5,
        size_width: 8.8,
        size_depth: 2.8,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "c69qmDp1SX"
          }
        ],
        reddit_all_time_count: 387,
        reddit_week_count: 9,
        reddit_day_count: 1,
        historical_low_price: 9.99,
        historical_low_date: {
          $date: "2019-12-06T08:23:29.705Z"
        }
      },
      {
        id: "y56td93iXw",
        name: "Dead of Winter: A Crossroads Game",
        year_published: 2014,
        min_players: 2,
        max_players: 5,
        min_playtime: 45,
        max_playtime: 210,
        min_age: 14,
        description:
          "Dead of Winter puts 2-5 players together in a small, weakened colony of survivors in a world where most of humanity are either dead or diseased, flesh-craving monsters. Each player leads a faction of survivors with dozens of different characters in the game.<br />\r\n<br />\r\nDead of Winter is a meta-cooperative psychological survival game. This means players are working together toward one common victory condition--but for each individual player to achieve victory, they must also complete their personal secret objective. This secret objective could relate to a psychological tick that's fairly harmless to most others in the colony, a dangerous obsession that could put the main objective at risk, a desire for sabotage of the main mission, or worst of all: vengeance against the colony! Certain games could end with all players winning, some winning and some losing, or all players losing. Work toward the group's goal but don't get walked all over by a loudmouth who's only looking out for their own interests!",
        description_preview:
          "Dead of Winter puts 2-5 players together in a small, weakened colony of survivors in a world where most of humanity are either dead or diseased, flesh-craving monsters. Each player leads a faction of survivors with dozens of different characters in the game. \r\n \r\nDead of Winter is a meta-cooperative psychological survival game. This means players are working together toward one common victory condition--but for each individual player to achieve victory, they must also complete their personal secret objective. This secret objective could relate to a psychological tick that's fairly harmless to most others in the colony, a dangerous obsession that could put the main objective at risk, a desire for sabotage of the main mission, or worst of all: vengeance against the colony! Certain games could end with all players winning, some winning and some losing, or all players losing. Work toward the group's goal but don't get walked all over by a loudmouth who's only looking out for their own interests!",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1574700781988",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1574700781988",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1574700781988",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1574700781988",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1574700781988",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1574700781988",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1574700781988"
        },
        url:
          "https://www.boardgameatlas.com/search/game/y56td93iXw/dead-of-winter-a-crossroads-game",
        price: "37.97",
        msrp: "59.95",
        discount: "0.37",
        primary_publisher: "Plaid Hat Games",
        publishers: ["Plaid Hat Games"],
        mechanics: [
          {
            id: "33UT4gTFqy"
          },
          {
            id: "R0bGq4cAl4"
          },
          {
            id: "WPytek5P8l"
          },
          {
            id: "Voqy2dgrIM"
          },
          {
            id: "AVY6EvSQTP"
          },
          {
            id: "JYYdBW6UCE"
          }
        ],
        categories: [
          {
            id: "eFaACC6y2c"
          },
          {
            id: "PinhJrhnxU"
          },
          {
            id: "bCBXJy9qDw"
          },
          {
            id: "cAIkk5aLdQ"
          },
          {
            id: "FmGV9rVu1c"
          }
        ],
        designers: ["Jonathan Gilmour", "Isaac Vega"],
        developers: [],
        artists: ["David Richards", "Fernanda Suárez", "Peter Wocken"],
        names: [" Dead of Winter"],
        num_user_ratings: 198,
        average_user_rating: 3.3926870329309353,
        official_url:
          "https://www.plaidhatgames.com/games/dead-of-winter?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://www.plaidhatgames.com/images/games/dead-of-winter/rules.pdf",
        weight_amount: 4,
        weight_units: "lbs",
        size_height: 2.8,
        size_width: 11.6,
        size_depth: 11.6,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "c69qmDp1SX"
          }
        ],
        reddit_all_time_count: 386,
        reddit_week_count: 10,
        reddit_day_count: 1,
        historical_low_price: 31.99,
        historical_low_date: {
          $date: "2019-11-29T09:35:55.772Z"
        }
      },
      {
        id: "vFMkVLRu8x",
        name: "Ethnos",
        year_published: 2017,
        min_players: 2,
        max_players: 6,
        min_playtime: 45,
        max_playtime: 60,
        min_age: 14,
        description:
          "<div><p></p><p>In the faraway land of Ethnos, a new Age Is dawning. The ashes of the old Age have left the Six Kingdoms empty and the twelve Tribes scattered to the winds. Now is the time for a clever leader to unite them into a powerful alliance, skillfully using the unique talents of each tribe to control the Kingdoms.</p>\r\nDo you have the wit and the wisdom to become the next Lord of <i>Ethnos</i> and usher in a Golden Age? Up to six players can evoke the assistance of the Tribes of <i>Ethnos</i> to earn themselves enough glory to be named the Lord of <i>Ethnos</i>. Find out if you're up to the task!<br /> <br /><b>The Tribes of <i>Ethnos</i></b><br /><br />There are twelve distinct tribes that inhabit the land of <i>Ethnos</i>, and each has their own unique ability that will help you take control of the Kingdoms and gain glory for yourself. Call on the Centaurs when swift and decisive actions must be taken! Overwhelm your opponents with sheer numbers by relying on the Halflings! The Dwarves, Elves, Giants, Merfolk, Minotaurs, Orcs, Skeletons, Trolls, Wingfolk, and Wizards are all at your disposal!<br />\r\nUse the special abilities of each tribe to your advantage to take control of territories and gain yourself some extra glory along the way. Work with what you're given to spread your influence and unite the tribes of <i>Ethnos</i> to be crowned the victor!<br /><br /><b>Beginning a New Age</b><br />A game of <i>Ethnos</i> is divided into three Ages in which players will try to gain as much glory as possible. On their turn, players will choose to Recruit an Ally (from either the deck or the face up options on the table) or Play a Band of Allies. Recruiting allies to your cause is necessary if you want to gain any influence in the Six Kingdoms, which you do by playing Bands.<br /><br /><b>Band Together<br /></b>\r\nWhen you play a Band of Allies from your hand (from 1 to 10 cards), each ally within the band must belong to the same Tribe or the same Kingdom (color). Each band has a leader which will determine the ability you get to resolve when playing the band. If the band is large enough, you may place one of your control markers in that kingdom that matches the color of your leader card. You then use your leader card's ability. Then you must discard the cards remaining in your hand face up for other players to recruit from. These bands will be important for scoring at the end of the round, so leave them in front of you.<br /><br /><b>Control the Kingdoms<br /></b>\r\nAs you gain more influence in a Kingdom, the bigger your bands must be to place your control markers there. Each Kingdom will reward players with an amount of glory at the end of an Age according to who has the most influence in each Kingdom. As Ages pass, the players with the second-most and third-most influence in each Kingdom will also gain glory.<br /><br /><b> A New Age Dawns<br /></b>\r\nThe game will play out over three Ages, and the heralding of a new Age is brought on by the arrival of three dragons. Once the third dragon has been drawn from the deck, the Age ends and scoring for that Age begins. Control markers persist between Ages, representing the influence gained in Ages past. Once this has happened three times, the game is over and final scores can be tallied!<p></p>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>",
        description_preview:
          "    In the faraway land of Ethnos, a new Age Is dawning. The ashes of the old Age have left the Six Kingdoms empty and the twelve Tribes scattered to the winds. Now is the time for a clever leader to unite them into a powerful alliance, skillfully using the unique talents of each tribe to control the Kingdoms. \r\nDo you have the wit and the wisdom to become the next Lord of  Ethnos  and usher in a Golden Age? Up to six players can evoke the assistance of the Tribes of  Ethnos  to earn themselves enough glory to be named the Lord of  Ethnos . Find out if you're up to the task!    The Tribes of  Ethnos    There are twelve distinct tribes that inhabit the land of  Ethnos , and each has their own unique ability that will help you take control of the Kingdoms and gain glory for yourself. Call on the Centaurs when swift and decisive actions must be taken! Overwhelm your opponents with sheer numbers by relying on the Halflings! The Dwarves, Elves, Giants, Merfolk, Minotaurs, Orcs, Skeletons, Trolls, Wingfolk, and Wizards are all at your disposal! \r\nUse the special abilities of each tribe to your advantage to take control of territories and gain yourself some extra glory along the way. Work with what you're given to spread your influence and unite the tribes of  Ethnos  to be crowned the victor!   Beginning a New Age  A game of  Ethnos  is divided into three Ages in which players will try to gain as much glory as possible. On their turn, players will choose to Recruit an Ally (from either the deck or the face up options on the table) or Play a Band of Allies. Recruiting allies to your cause is necessary if you want to gain any influence in the Six Kingdoms, which you do by playing Bands.   Band Together  \r\nWhen you play a Band of Allies from your hand (from 1 to 10 cards), each ally within the band must belong to the same Tribe or the same Kingdom (color). Each band has a leader which will determine the ability you get to resolve when playing the band. If the band is large enough, you may place one of your control markers in that kingdom that matches the color of your leader card. You then use your leader card's ability. Then you must discard the cards remaining in your hand face up for other players to recruit from. These bands will be important for scoring at the end of the round, so leave them in front of you.   Control the Kingdoms  \r\nAs you gain more influence in a Kingdom, the bigger your bands must be to place your control markers there. Each Kingdom will reward players with an amount of glory at the end of an Age according to who has the most influence in each Kingdom. As Ages pass, the players with the second-most and third-most influence in each Kingdom will also gain glory.    A New Age Dawns  \r\nThe game will play out over three Ages, and the heralding of a new Age is brought on by the arrival of three dragons. Once the third dragon has been drawn from the deck, the Age ends and scoring for that Age begins. Control markers persist between Ages, representing the influence gained in Ages past. Once this has happened three times, the game is over and final scores can be tallied!  \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n ",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254188773-61u2CWRFSlL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254188773-61u2CWRFSlL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254188773-61u2CWRFSlL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254188773-61u2CWRFSlL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254188773-61u2CWRFSlL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254188773-61u2CWRFSlL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254188773-61u2CWRFSlL.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/vFMkVLRu8x/ethnos",
        price: "24.00",
        msrp: "39.99",
        discount: "0.40",
        primary_publisher: "CMON",
        publishers: ["CMON"],
        mechanics: [
          {
            id: "05zCZoLvQJ"
          },
          {
            id: "wV5peB05xs"
          },
          {
            id: "WPytek5P8l"
          },
          {
            id: "lA3KUtVFCy"
          }
        ],
        categories: [
          {
            id: "ZTneo8TaIO"
          }
        ],
        designers: [" Paolo Mori"],
        developers: [],
        artists: ["John Howe"],
        names: [],
        num_user_ratings: 90,
        average_user_rating: 3.3999999999999995,
        official_url:
          "https://cmon.com/product/ethnos/ethnos?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://cmon-files.s3.amazonaws.com/pdf/assets_item/resource/84/Rulebook_Ethnos.pdf",
        weight_amount: 2.8,
        weight_units: "lbs ",
        size_height: 11.8,
        size_width: 2.4,
        size_depth: 11.8,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 374,
        reddit_week_count: 8,
        reddit_day_count: 5,
        historical_low_price: 24,
        historical_low_date: {
          $date: "2020-02-11T14:59:37.344Z"
        }
      },
      {
        id: "E3BD2egiOX",
        name: "Decrypto",
        year_published: 2018,
        min_players: 3,
        max_players: 8,
        min_playtime: 30,
        max_playtime: 45,
        min_age: 12,
        description:
          "New party game where teammates try to transmit secret codes without letting the opposing team intercept them.<br />\r\n<br />\r\nClever components use anaglyph effects to scramble the codes. Slide cards into the screen to decode your words!<br />\r\n<br />\r\nStrong interaction between players and no down time between turns! Everyone needs to focus while the other team plays.",
        description_preview:
          "New party game where teammates try to transmit secret codes without letting the opposing team intercept them. \r\n \r\nClever components use anaglyph effects to scramble the codes. Slide cards into the screen to decode your words! \r\n \r\nStrong interaction between players and no down time between turns! Everyone needs to focus while the other team plays.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559253468275-51F0C1w8WdL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559253468275-51F0C1w8WdL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559253468275-51F0C1w8WdL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559253468275-51F0C1w8WdL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559253468275-51F0C1w8WdL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559253468275-51F0C1w8WdL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559253468275-51F0C1w8WdL.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/E3BD2egiOX/decrypto",
        price: "15.99",
        msrp: "19.99",
        discount: "0.20",
        primary_publisher: "IELLO",
        publishers: ["IELLO"],
        mechanics: [
          {
            id: "GsNGxZFNCK"
          },
          {
            id: "9jnCsVuRat"
          }
        ],
        categories: [
          {
            id: "u5ZiYctU6T"
          },
          {
            id: "X8J7RM6dxX"
          }
        ],
        designers: ["Thomas Dagenais-Lespérance"],
        developers: [],
        artists: [" Fabien Fulchiron", "NILS", "Manuel Sanchez"],
        names: ["Decrypto (Deal of the Day)"],
        num_user_ratings: 67,
        average_user_rating: 3.611940298507463,
        official_url:
          "https://www.scorpionmasque.com/en/decrypto?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "https://youtu.be/2DBg7Z2-pQ4",
        weight_amount: 1.15,
        weight_units: "lbs",
        size_height: 9,
        size_width: 6,
        size_depth: 2,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 372,
        reddit_week_count: 4,
        reddit_day_count: 0,
        historical_low_price: 15.97,
        historical_low_date: {
          $date: "2019-07-16T12:01:10.542Z"
        }
      },
      {
        id: "LTnLSWIcbH",
        name: "Lost Cities",
        year_published: 1999,
        min_players: 2,
        max_players: 2,
        min_playtime: 30,
        max_playtime: 45,
        min_age: 10,
        description:
          "Who will discover the ancient civilizations?<br />\r\n<br />\r\nTwo explorers embark on research journeys to remote corners of the world: the Himalayan mountains, the Central American rainforest, the Egyptian desert, a mysterious volcano, and the bottom of the sea. As the cards are played, the expedition routes take shape and the explorers earn points. The most daring adventurers make bets on the success of their expeditions. The explorer with the highest score after three rounds of expeditions wins. The rules of the game are simple, but beware: The lost cities hold many unseen mysteries!",
        description_preview:
          "Who will discover the ancient civilizations? \r\n \r\nTwo explorers embark on research journeys to remote corners of the world: the Himalayan mountains, the Central American rainforest, the Egyptian desert, a mysterious volcano, and the bottom of the sea. As the cards are played, the expedition routes take shape and the explorers earn points. The most daring adventurers make bets on the success of their expeditions. The explorer with the highest score after three rounds of expeditions wins. The rules of the game are simple, but beware: The lost cities hold many unseen mysteries!",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255036680-61aoxvt332BL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255036680-61aoxvt332BL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559255036680-61aoxvt332BL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559255036680-61aoxvt332BL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559255036680-61aoxvt332BL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559255036680-61aoxvt332BL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255036680-61aoxvt332BL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/LTnLSWIcbH/lost-cities",
        price: "13.79",
        msrp: "19.99",
        discount: "0.31",
        primary_publisher: "Thames & Kosmos",
        publishers: ["Thames & Kosmos"],
        mechanics: [
          {
            id: "WPytek5P8l"
          },
          {
            id: "lA3KUtVFCy"
          }
        ],
        categories: [
          {
            id: "eX8uuNlQkQ"
          },
          {
            id: "yq6hVlbM2R"
          }
        ],
        designers: [" Reiner Knizia"],
        developers: [],
        artists: [
          "Vincent Dutrait",
          "Grafik Studio Krüger",
          "Michaela Kienle",
          "Anke Pohl",
          "Thilo Rick",
          "Claus Stephan"
        ],
        names: [
          "Lost Cities: The Card Game",
          "Lost Cities",
          "Lost Cities Card Game with Expansion",
          "Lost Cities",
          "Lost Cities: The Card Game (With 6th Expedition)"
        ],
        num_user_ratings: 198,
        average_user_rating: 3.2727272727272716,
        official_url:
          "https://www.thamesandkosmos.com/index.php/product/category/games/lost-cities-card-game?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://www.happymeeple.com/en/board-games/lost-cities/rules/",
        weight_amount: 15.2,
        weight_units: "oz",
        size_height: 7.9,
        size_width: 7.9,
        size_depth: 1.8,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 363,
        reddit_week_count: 11,
        reddit_day_count: 16,
        historical_low_price: 12.97,
        historical_low_date: {
          $date: "2019-11-15T10:02:00.705Z"
        }
      },
      {
        id: "YfElAOb9o7",
        name: "Sidereal Confluence",
        year_published: 2017,
        min_players: 4,
        max_players: 9,
        min_playtime: 120,
        max_playtime: 150,
        min_age: 14,
        description:
          "Sidereal Confluence: Trading and Negotiation in the Elysian Quadrant is a singularly unique trading and negotiation game for 4 to 9 players. Over the course of the game, each race must trade and negotiate with the rest to acquire the resources necessary to fund their economy and allow it to produce goods for the next turn. While technically a competitive game, Sidereal Confluence: Trading and Negotiation in the Elysian Quadrant has a uniquely cooperative feel during the trading phase as no race has the ability to thrive on its own. Trade well, and you'll develop technologies and colonize planets to form a civilization that is the envy of the galaxy.<br />\r\n<br />\r\nEach player chooses one of the nine unique and asymmetrical alien races that have come together to form a trade federation in their quadrant. Each race has its own deck of cards representing all the existing and future technologies it might research. Some races also have other cards related to unique features of their culture. These cards represent portions of the culture's economy and require spending some number of resources to use, resulting in an output of more resources, ships, and possibly victory points. Since each culture's outputs rarely match their inputs, players need to trade goods with one another to run their converters to create the resources they truly need to run their society most efficiently and have an effective economy. Almost everything is negotiable, including colonies, ships, VP and all kinds of resources. <br />\r\n<br />\r\nEach game round contains an open trading phase in which all players can negotiate and execute deals for resources, ships, colonies, even the temporary use of technologies! Players with enough resources can also research technologies, upgrade colonies, and spend resources on their race's special cards during this phase. Once complete, all players simultaneously run their economies, spending resources to gain more resources. The Convocation follows, starting with players sharing newly researched technologies with all other races and following with bidding to acquire new colonies and research teams. Researching a new technology grants many victory points for the prestige of helping galactic society advance. When one race builds a new technology, it is shared with everyone else. Technologies can be upgraded when combined with other technologies.<br />\r\n<br />\r\nThe ultimate goal is victory points, which are acquired by researching technologies, using your economy to convert resources to goods, and converting your leftover goods into points at the end of the game.<br />\r\n<br />\r\nThe game is almost all simultaneous play, keeping the game play moving.",
        description_preview:
          "Sidereal Confluence: Trading and Negotiation in the Elysian Quadrant is a singularly unique trading and negotiation game for 4 to 9 players. Over the course of the game, each race must trade and negotiate with the rest to acquire the resources necessary to fund their economy and allow it to produce goods for the next turn. While technically a competitive game, Sidereal Confluence: Trading and Negotiation in the Elysian Quadrant has a uniquely cooperative feel during the trading phase as no race has the ability to thrive on its own. Trade well, and you'll develop technologies and colonize planets to form a civilization that is the envy of the galaxy. \r\n \r\nEach player chooses one of the nine unique and asymmetrical alien races that have come together to form a trade federation in their quadrant. Each race has its own deck of cards representing all the existing and future technologies it might research. Some races also have other cards related to unique features of their culture. These cards represent portions of the culture's economy and require spending some number of resources to use, resulting in an output of more resources, ships, and possibly victory points. Since each culture's outputs rarely match their inputs, players need to trade goods with one another to run their converters to create the resources they truly need to run their society most efficiently and have an effective economy. Almost everything is negotiable, including colonies, ships, VP and all kinds of resources.  \r\n \r\nEach game round contains an open trading phase in which all players can negotiate and execute deals for resources, ships, colonies, even the temporary use of technologies! Players with enough resources can also research technologies, upgrade colonies, and spend resources on their race's special cards during this phase. Once complete, all players simultaneously run their economies, spending resources to gain more resources. The Convocation follows, starting with players sharing newly researched technologies with all other races and following with bidding to acquire new colonies and research teams. Researching a new technology grants many victory points for the prestige of helping galactic society advance. When one race builds a new technology, it is shared with everyone else. Technologies can be upgraded when combined with other technologies. \r\n \r\nThe ultimate goal is victory points, which are acquired by researching technologies, using your economy to convert resources to goods, and converting your leftover goods into points at the end of the game. \r\n \r\nThe game is almost all simultaneous play, keeping the game play moving.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559258094785-619ibe9JFFL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559258094785-619ibe9JFFL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559258094785-619ibe9JFFL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559258094785-619ibe9JFFL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559258094785-619ibe9JFFL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559258094785-619ibe9JFFL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559258094785-619ibe9JFFL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/YfElAOb9o7/sidereal-confluence",
        price: "51.00",
        msrp: "46.99",
        discount: "-0.09",
        primary_publisher: "WizKids Games",
        publishers: ["WizKids Games"],
        mechanics: [
          {
            id: "AZxlPpi5oq"
          },
          {
            id: "AVY6EvSQTP"
          }
        ],
        categories: [
          {
            id: "N0TkEGfEsF"
          },
          {
            id: "jZEDOpx07e"
          },
          {
            id: "3B3QpKvXD3"
          }
        ],
        designers: ["TauCeti Deichmann"],
        developers: [],
        artists: ["Jesse Seidule", "Nakarin Sukontakorn"],
        names: [
          "Sidereal Confluence: Trading and Negotiation in the Elysian Quadrant"
        ],
        num_user_ratings: 37,
        average_user_rating: 3.6486486486486482,
        official_url:
          "https://wizkids.com/sidereal-confluence/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        weight_amount: 4.7,
        weight_units: "lbs",
        size_height: 11.1,
        size_width: 2.1,
        size_depth: 11.1,
        size_units: "inches",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 356,
        reddit_week_count: 12,
        reddit_day_count: 6,
        historical_low_price: 40.37,
        historical_low_date: {
          $date: "2019-11-10T23:27:23.078Z"
        }
      },
      {
        id: "DMR3bbyxu2",
        name: "For Sale",
        year_published: 1997,
        min_players: 3,
        max_players: 6,
        min_playtime: 15,
        max_playtime: 30,
        min_age: 8,
        description:
          "Going once! Going twice! Sold to the highest bidder! Bid and bluff your way to purchase the most valuable real estate for the lowest amount of money, then turn around and sell those houses (and shacks) for cold hard cash. Be the richest mogul at the end of the game to win this Stefan Dorra classic.<br />\r\n<br />\r\nConsidered one of the finest bidding games of all time, For Sale has a well-deserved following of fans. In this perfectly-crafted bidding game, players are forced to make a multitude of difficult decisions every minute - and that's just in the first phase of the game! GRYPHON BOOKSHELF SERIES #4",
        description_preview:
          "Going once! Going twice! Sold to the highest bidder! Bid and bluff your way to purchase the most valuable real estate for the lowest amount of money, then turn around and sell those houses (and shacks) for cold hard cash. Be the richest mogul at the end of the game to win this Stefan Dorra classic. \r\n \r\nConsidered one of the finest bidding games of all time, For Sale has a well-deserved following of fans. In this perfectly-crafted bidding game, players are forced to make a multitude of difficult decisions every minute - and that's just in the first phase of the game! GRYPHON BOOKSHELF SERIES #4",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559253931430-61c9XsPKOdL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559253931430-61c9XsPKOdL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559253931430-61c9XsPKOdL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559253931430-61c9XsPKOdL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559253931430-61c9XsPKOdL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559253931430-61c9XsPKOdL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559253931430-61c9XsPKOdL.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/DMR3bbyxu2/for-sale",
        price: "23.99",
        msrp: "18.49",
        discount: "-0.30",
        primary_publisher: "Eagle-Gryphon Games",
        publishers: ["Eagle-Gryphon Games"],
        mechanics: [
          {
            id: "AZxlPpi5oq"
          },
          {
            id: "WPytek5P8l"
          }
        ],
        categories: [
          {
            id: "eX8uuNlQkQ"
          },
          {
            id: "N0TkEGfEsF"
          }
        ],
        designers: ["Stefan Dorra"],
        developers: [],
        artists: [
          "Óscar Aguado",
          "Alvin Madden",
          "Catell Ruz",
          "Uros Vuckovic",
          "Klaus Wilinski"
        ],
        names: ["For Sale Travel Edition", "For Sale", "For Sale"],
        num_user_ratings: 140,
        average_user_rating: 3.300000000000001,
        official_url:
          "http://www.eggrules.com/games/games-d-l/for-sale/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        weight_amount: 12.2,
        weight_units: "oz",
        size_height: 8.5,
        size_width: 6.2,
        size_depth: 2,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 354,
        reddit_week_count: 12,
        reddit_day_count: 4,
        historical_low_price: 9.29,
        historical_low_date: {
          $date: "2020-01-07T03:13:22.685Z"
        }
      },
      {
        id: "ZdHlXy4uxe",
        name: "Dominant Species",
        year_published: 2010,
        min_players: 2,
        max_players: 6,
        min_playtime: 120,
        max_playtime: 240,
        min_age: 12,
        description:
          "<br />\r\n<b>2nd Edition, 3rd Printing</b><br />\r\n<br />\r\n90,000 B.C. - A great Ice Age is fast approaching. Another titanic struggle for global supremacy has unwittingly commenced between the varying animal species.<br />\r\n<br />\r\nDominant Species is a game for 2 to 6 players that abstractly recreates a tiny portion of ancient history: the ponderous encroachment of an Ice Age and what that entails for the living creatures trying to adapt to the slowly-changing Earth.<br />\r\nEach player will assume the role of one of six major Animal groups-Mammal, Reptile, Bird, Amphibian, Arachnid or Insect. Each begins the game in a state of natural balance with regards to one another. But that won't last: It is indeed ''survival of the fittest.''<br />\r\n<br />\r\nThrough wily Action Pawn placement, players will strive to become Dominant on as many different Terrain tiles as possible in order to draw beneficial Dominance Cards. Players will also want to propagate their individual Species in order to earn Victory Points for his particular Animal. Players will be aided in these endeavors via Growth, Migration and Domination actions, among others.<br />\r\n<br />\r\nAll of this eventually leads to the end game - the final ascent of the Ice Age - where the player with the most Victory Points will have his Animal crowned the Dominant Species.<br />\r\n<br />\r\nBut somebody better become dominant quickly, because it's getting mighty cold....",
        description_preview:
          " \r\n 2nd Edition, 3rd Printing  \r\n \r\n90,000 B.C. - A great Ice Age is fast approaching. Another titanic struggle for global supremacy has unwittingly commenced between the varying animal species. \r\n \r\nDominant Species is a game for 2 to 6 players that abstractly recreates a tiny portion of ancient history: the ponderous encroachment of an Ice Age and what that entails for the living creatures trying to adapt to the slowly-changing Earth. \r\nEach player will assume the role of one of six major Animal groups-Mammal, Reptile, Bird, Amphibian, Arachnid or Insect. Each begins the game in a state of natural balance with regards to one another. But that won't last: It is indeed ''survival of the fittest.'' \r\n \r\nThrough wily Action Pawn placement, players will strive to become Dominant on as many different Terrain tiles as possible in order to draw beneficial Dominance Cards. Players will also want to propagate their individual Species in order to earn Victory Points for his particular Animal. Players will be aided in these endeavors via Growth, Migration and Domination actions, among others. \r\n \r\nAll of this eventually leads to the end game - the final ascent of the Ice Age - where the player with the most Victory Points will have his Animal crowned the Dominant Species. \r\n \r\nBut somebody better become dominant quickly, because it's getting mighty cold....",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255079876-512B4kbGbkGL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255079876-512B4kbGbkGL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559255079876-512B4kbGbkGL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559255079876-512B4kbGbkGL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559255079876-512B4kbGbkGL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559255079876-512B4kbGbkGL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255079876-512B4kbGbkGL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/ZdHlXy4uxe/dominant-species",
        price: "54.99",
        msrp: "79.00",
        discount: "0.30",
        primary_publisher: "GMT Games",
        publishers: ["GMT Games"],
        mechanics: [
          {
            id: "05zCZoLvQJ"
          },
          {
            id: "wV5peB05xs"
          },
          {
            id: "qu5BcGjAzk"
          },
          {
            id: "8PN2HE86wg"
          },
          {
            id: "fBOTEBUAmV"
          }
        ],
        categories: [
          {
            id: "a8NM5cugJX"
          }
        ],
        designers: ["Chad Jensen"],
        developers: [],
        artists: [
          " Chad Jensen",
          "Rodger B. MacGowan",
          "Chechu Nieto",
          "Eric Williams (I)"
        ],
        names: [],
        num_user_ratings: 82,
        average_user_rating: 3.670731707317073,
        official_url:
          "https://www.gmtgames.com/p-621-dominant-species-5th-printing.aspx?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://www.gmtgames.com/domspecies/DomSpec_Rules_FINAL.pdf",
        weight_amount: 5.05,
        weight_units: "lbs ",
        size_height: 12,
        size_width: 9,
        size_depth: 3.1,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 352,
        reddit_week_count: 13,
        reddit_day_count: 1,
        historical_low_price: 46.1,
        historical_low_date: {
          $date: "2019-09-18T10:03:22.395Z"
        }
      },
      {
        id: "Sb1CIhPwOu",
        name: "The Estates",
        year_published: 2018,
        min_players: 2,
        max_players: 5,
        min_playtime: 45,
        max_playtime: 60,
        min_age: 10,
        description:
          "The City Council recently approved the zoning map for a new urban development - The Estates - featuring high-end infrastructure and a modern atmosphere for its citizens. Soon after, the banks awarded millions of dollars in loans to six real estate investment firms to help develop this new area. The zoning map for The Estates calls for two rows of four buildings each, located between the River and Main Street. The meadows on the other side of the River are to remain a recreational area for the City.<br />\r\n<br />\r\nBut, with hopes of larger profits, investors and building tycoons entirely ignore the City Council's demands and begin developing three rows of buildings instead. The Mayor catches wind of the potential for profit and begins planning a new mansion in The Estates, which would double the value of one of the building rows! With some sketchy Building Permits, investors begin developing buildings on the other side of the River, beyond the designated building zone.<br />\r\n<br />\r\nHowever, the City Council takes rigorous steps to put an end to the racketeering with an ultimatum: as soon as the first two rows are completed, the buildings in the uncompleted row will be torn down, resulting in a huge loss for all who invested there. At the end of the day, the investor with the highest-valued buildings will come out on top! <br />\r\n<br />\r\n<b>Contents:</b><br />\r\n* 1 Game Board <br />\r\n* 36 Floor Cubes <br />\r\n* 12 Rooftops <br />\r\n* 6 Company Certificates <br />\r\n* 3 Building Permits <br />\r\n* 1 Cancel Cube <br />\r\n* 1 Mayor <br />\r\n* 2 Linen Bags <br />\r\n* 60 Checks <br />\r\n* 1 Rulebook",
        description_preview:
          "The City Council recently approved the zoning map for a new urban development - The Estates - featuring high-end infrastructure and a modern atmosphere for its citizens. Soon after, the banks awarded millions of dollars in loans to six real estate investment firms to help develop this new area. The zoning map for The Estates calls for two rows of four buildings each, located between the River and Main Street. The meadows on the other side of the River are to remain a recreational area for the City. \r\n \r\nBut, with hopes of larger profits, investors and building tycoons entirely ignore the City Council's demands and begin developing three rows of buildings instead. The Mayor catches wind of the potential for profit and begins planning a new mansion in The Estates, which would double the value of one of the building rows! With some sketchy Building Permits, investors begin developing buildings on the other side of the River, beyond the designated building zone. \r\n \r\nHowever, the City Council takes rigorous steps to put an end to the racketeering with an ultimatum: as soon as the first two rows are completed, the buildings in the uncompleted row will be torn down, resulting in a huge loss for all who invested there. At the end of the day, the investor with the highest-valued buildings will come out on top!  \r\n \r\n Contents:  \r\n* 1 Game Board  \r\n* 36 Floor Cubes  \r\n* 12 Rooftops  \r\n* 6 Company Certificates  \r\n* 3 Building Permits  \r\n* 1 Cancel Cube  \r\n* 1 Mayor  \r\n* 2 Linen Bags  \r\n* 60 Checks  \r\n* 1 Rulebook",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1548972081099",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1548972081099",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1548972081099",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1548972081099",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1548972081099",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1548972081099",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1548972081099"
        },
        url:
          "https://www.boardgameatlas.com/search/game/Sb1CIhPwOu/the-estates",
        price: "29.99",
        msrp: "59.99",
        discount: "0.50",
        primary_publisher: "Capstone Games",
        publishers: ["Capstone Games"],
        mechanics: [
          {
            id: "05zCZoLvQJ"
          },
          {
            id: "AZxlPpi5oq"
          }
        ],
        categories: [
          {
            id: "ODWOjWAJj3"
          },
          {
            id: "N0TkEGfEsF"
          }
        ],
        designers: ["Klaus Zoch"],
        developers: [],
        artists: ["Daan van Paridon", "Thijs van Paridon"],
        names: [],
        num_user_ratings: 27,
        average_user_rating: 3.740740740740741,
        official_url:
          "https://www.capstone-games.com/the-estates-1?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "http://geekdo-files.com.s3.amazonaws.com/bgg220177?response-content-disposition=inline%3B%20filename%3D%22TheEstates_Rulebook_LR.pdf%22&response-content-type=application%2Fpdf&AWSAccessKeyId=AKIAJYFNCT7FKCE4O6TA&Expires=1547747569&Signature=soIA6yH%2BJiwe5k9AZES%2BoAhva5Y%3D",
        weight_amount: 2.54,
        weight_units: "lbs",
        size_height: 10.2,
        size_width: 2.8,
        size_depth: 10.2,
        size_units: "inches",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 347,
        reddit_week_count: 22,
        reddit_day_count: 11,
        historical_low_price: 27.49,
        historical_low_date: {
          $date: "2019-11-16T12:01:34.702Z"
        }
      },
      {
        id: "ZwlnfX1J2z",
        name: "Eldritch Horror",
        year_published: 2013,
        min_players: 1,
        max_players: 8,
        min_playtime: 120,
        max_playtime: 240,
        min_age: 14,
        description:
          "Across the globe, ancient evil is stirring. Now, you and your trusted circle of colleagues must travel around the world, working against all odds to hold back the approaching horror. Foul monsters, brutal encounters, and obscure mysteries will take you to your limit and beyond. All the while, you and your fellow investigators must unravel the otherworldy mysteries scattered around the globe in order to push back the gathering mayhem that threatens to overwhelm humanity. The end draws near! Do you have the courage to prevent global destruction? <br />\r\n<br />\r\nEldritch Horror is a cooperative game of terror and adventure in which one to eight players take the roles of globetrotting investigators working to solve mysteries, gather clues, and protect the world from an Ancient One - an elder being intent on destroying our world. Each Ancient One comes with its own unique decks of Mystery and Research cards, which draw you deeper into the lore surrounding each loathsome creature.<br />\r\n<br />\r\nDiscover the true name of Azathoth or battle Cthulhu on the high seas. With twelve unique investigators, two hundred-fifty tokens, and over three hundred cards, Eldritch Horror presents an epic, world-spanning adventure with each and every game.",
        description_preview:
          "Across the globe, ancient evil is stirring. Now, you and your trusted circle of colleagues must travel around the world, working against all odds to hold back the approaching horror. Foul monsters, brutal encounters, and obscure mysteries will take you to your limit and beyond. All the while, you and your fellow investigators must unravel the otherworldy mysteries scattered around the globe in order to push back the gathering mayhem that threatens to overwhelm humanity. The end draws near! Do you have the courage to prevent global destruction?  \r\n \r\nEldritch Horror is a cooperative game of terror and adventure in which one to eight players take the roles of globetrotting investigators working to solve mysteries, gather clues, and protect the world from an Ancient One - an elder being intent on destroying our world. Each Ancient One comes with its own unique decks of Mystery and Research cards, which draw you deeper into the lore surrounding each loathsome creature. \r\n \r\nDiscover the true name of Azathoth or battle Cthulhu on the high seas. With twelve unique investigators, two hundred-fifty tokens, and over three hundred cards, Eldritch Horror presents an epic, world-spanning adventure with each and every game.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254957620-61KqujHT2B4L.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254957620-61KqujHT2B4L.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254957620-61KqujHT2B4L.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254957620-61KqujHT2B4L.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254957620-61KqujHT2B4L.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254957620-61KqujHT2B4L.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254957620-61KqujHT2B4L.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/ZwlnfX1J2z/eldritch-horror",
        price: "44.99",
        msrp: "59.95",
        discount: "0.25",
        primary_publisher: "Fantasy Flight Games",
        publishers: ["Fantasy Flight Games"],
        mechanics: [
          {
            id: "33UT4gTFqy"
          },
          {
            id: "R0bGq4cAl4"
          }
        ],
        categories: [
          {
            id: "KUBCKBkGxV"
          },
          {
            id: "ZTneo8TaIO"
          },
          {
            id: "upXZ8vNfNO"
          },
          {
            id: "cAIkk5aLdQ"
          }
        ],
        designers: [" Corey Konieczka", "Nikki Valens"],
        developers: [],
        artists: [
          "Anders Finér",
          "David Griffith",
          "Ed Mattinian",
          "Patrick McEvoy",
          "Dallas Mehlhoff",
          "Emilio Rodriguez",
          "Magali Villeneuve",
          "Drew Whitmore"
        ],
        names: [],
        num_user_ratings: 126,
        average_user_rating: 3.4682539682539697,
        official_url:
          "https://www.fantasyflightgames.com/en/products/eldritch-horror/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://images-cdn.fantasyflightgames.com/filer_public/c7/d6/c7d6cff6-7025-41f9-8538-bb0626feb4f4/eh01_rulebook.pdf",
        weight_amount: 2,
        weight_units: "lbs",
        size_height: 11.8,
        size_width: 11.8,
        size_depth: 3,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 343,
        reddit_week_count: 8,
        reddit_day_count: 2,
        historical_low_price: 36.53,
        historical_low_date: {
          $date: "2019-07-29T07:53:50.778Z"
        }
      },
      {
        id: "omFfdCNOD1",
        name: "Architects of the West Kingdom",
        year_published: 2018,
        min_players: 1,
        max_players: 5,
        min_playtime: 60,
        max_playtime: 80,
        min_age: 12,
        description:
          "Architects of the West Kingdom is set at the end of the Carolingian Empire, circa 850 AD. As royal architects, players compete to impress their King and maintain their noble status by constructing various landmarks throughout his newly appointed domain. Players will need to collect raw materials, hire apprentices and keep a watchful eye on their workforce. These are treacherous times. Rival architects will stop at nothing to slow your progress. Will you remain virtuous, or be found in the company of thieves and black marketeers?<br />\r\n<br />\r\nThe aim of Architects of the West Kingdom is to be the player with the most Victory Points (VP) at the game's end. Points are gained by constructing various Buildings and advancing work on the Archbishop's Cathedral. Throughout the game, players will need to make a lot of moral decisions. However, only at the game's end will their virtue be judged. A few underhanded deals here and there might not seem like much, but fall too far and you will be punished. The game ends once a set number of constructions have been completed.",
        description_preview:
          "Architects of the West Kingdom is set at the end of the Carolingian Empire, circa 850 AD. As royal architects, players compete to impress their King and maintain their noble status by constructing various landmarks throughout his newly appointed domain. Players will need to collect raw materials, hire apprentices and keep a watchful eye on their workforce. These are treacherous times. Rival architects will stop at nothing to slow your progress. Will you remain virtuous, or be found in the company of thieves and black marketeers? \r\n \r\nThe aim of Architects of the West Kingdom is to be the player with the most Victory Points (VP) at the game's end. Points are gained by constructing various Buildings and advancing work on the Archbishop's Cathedral. Throughout the game, players will need to make a lot of moral decisions. However, only at the game's end will their virtue be judged. A few underhanded deals here and there might not seem like much, but fall too far and you will be punished. The game ends once a set number of constructions have been completed.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1540939581145",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1540939581145",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1540939581145",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1540939581145",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1540939581145",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1540939581145",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1540939581145"
        },
        url:
          "https://www.boardgameatlas.com/search/game/omFfdCNOD1/architects-of-the-west-kingdom",
        price: "35.03",
        msrp: "35.99",
        discount: "0.03",
        primary_publisher: "Renegade Game Studios",
        publishers: ["Renegade Game Studios"],
        mechanics: [
          {
            id: "wV5peB05xs"
          },
          {
            id: "lA3KUtVFCy"
          },
          {
            id: "fBOTEBUAmV"
          }
        ],
        categories: [
          {
            id: "ODWOjWAJj3"
          },
          {
            id: "QAYkTHK1Dd"
          }
        ],
        designers: ["Shem Phillips", "S J Macdonald"],
        developers: [],
        artists: ["Mihajlo Dimitrievski"],
        names: ["Architects of the West Kingdom (Ding & Dent)"],
        num_user_ratings: 97,
        average_user_rating: 3.6804123711340213,
        official_url:
          "http://garphill.com/product/architects-of-the-west-kingdom?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "http://geekdo-files.com.s3.amazonaws.com/bgg208862?response-content-disposition=inline%3B%20filename%3D%22ArchitectsRulebook-WithAppendix.pdf%22&response-content-type=application%2Fpdf&AWSAccessKeyId=AKIAJYFNCT7FKCE4O6TA&Expires=1547576367&Signature=GlH3mC8NkwsqhjIQ57je1tWNhxs%3D",
        weight_amount: 3.04,
        weight_units: "lbs ",
        size_height: 9,
        size_width: 9,
        size_depth: 2.5,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "Dxj6IrT1Rn"
          }
        ],
        reddit_all_time_count: 341,
        reddit_week_count: 12,
        reddit_day_count: 1,
        historical_low_price: 32,
        historical_low_date: {
          $date: "2019-06-14T01:35:18.603Z"
        }
      },
      {
        id: "1sQP1kNHja",
        name: "Roll For The Galaxy",
        year_published: 2014,
        min_players: 2,
        max_players: 5,
        min_playtime: 45,
        max_playtime: 60,
        min_age: 13,
        description:
          "Roll for the Galaxy is a dice game of building space empires for 2-5 players. Your dice represent your populace, whom you direct to develop new technologies, settle worlds, and ship goods. The player who best manages his workers and builds the most prosperous empire wins!<br />\r\n<br />\r\nThis dice version of Race for the Galaxy takes players on a new journey through the Galaxy, but with the the feel of the original game.",
        description_preview:
          "Roll for the Galaxy is a dice game of building space empires for 2-5 players. Your dice represent your populace, whom you direct to develop new technologies, settle worlds, and ship goods. The player who best manages his workers and builds the most prosperous empire wins! \r\n \r\nThis dice version of Race for the Galaxy takes players on a new journey through the Galaxy, but with the the feel of the original game.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254202422-61MFI-RHExL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254202422-61MFI-RHExL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254202422-61MFI-RHExL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254202422-61MFI-RHExL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254202422-61MFI-RHExL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254202422-61MFI-RHExL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254202422-61MFI-RHExL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/1sQP1kNHja/roll-for-the-galaxy",
        price: "39.99",
        msrp: "59.95",
        discount: "0.33",
        primary_publisher: "Rio Grande Games",
        publishers: ["Rio Grande Games"],
        mechanics: [
          {
            id: "R0bGq4cAl4"
          },
          {
            id: "yu3eas6v7A"
          },
          {
            id: "DEvPj5twid"
          },
          {
            id: "XM2FYZmBHH"
          }
        ],
        categories: [
          {
            id: "329DxyFL9D"
          },
          {
            id: "mavSOM8vjH"
          },
          {
            id: "N0TkEGfEsF"
          },
          {
            id: "v4SfYtS2Lr"
          },
          {
            id: "yq6hVlbM2R"
          },
          {
            id: "3B3QpKvXD3"
          }
        ],
        designers: ["Wei-Hwa Huang", "Thomas Lehmann"],
        developers: [],
        artists: ["Martin Hoffmann", "Claus Stephan", "Mirko Suzuki"],
        names: [],
        num_user_ratings: 189,
        average_user_rating: 3.6513424693548915,
        official_url:
          "http://riograndegames.com/Game/442-Roll-for-the-Galaxy?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "http://riograndegames.com/getFile.php?id=1837",
        weight_amount: 2.2,
        weight_units: "lbs ",
        size_height: 11.8,
        size_width: 3,
        size_depth: 11.8,
        size_units: "inches",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 341,
        reddit_week_count: 6,
        reddit_day_count: 1,
        historical_low_price: 38.98,
        historical_low_date: {
          $date: "2019-09-17T11:08:47.450Z"
        }
      },
      {
        id: "unMxq0jVdk",
        name: "Camel Up",
        year_published: 2014,
        min_players: 2,
        max_players: 8,
        min_playtime: 15,
        max_playtime: 30,
        min_age: 8,
        description:
          "As members of Egyptian high society, you gather in the desert with one simple goal: to gain the most money by backing the right camel to win a leg or even the entire race. <br /><br />\r\nHowever, in this race, its not just the lucky ones who can beat the odds. Reading the dynamics of the race and having a good sense of timing is just as important when it comes to backing the right camels and taking the victory. <br /><br />\r\nPlace your bids wisely and decide when it is time to strike, and maybe just maybe with a little bit of timing and a lot of luck, your bid will pay off!",
        description_preview:
          "As members of Egyptian high society, you gather in the desert with one simple goal: to gain the most money by backing the right camel to win a leg or even the entire race.   \r\nHowever, in this race, its not just the lucky ones who can beat the odds. Reading the dynamics of the race and having a good sense of timing is just as important when it comes to backing the right camels and taking the victory.   \r\nPlace your bids wisely and decide when it is time to strike, and maybe just maybe with a little bit of timing and a lot of luck, your bid will pay off!",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254190595-61DAGcQ3umL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254190595-61DAGcQ3umL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254190595-61DAGcQ3umL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254190595-61DAGcQ3umL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254190595-61DAGcQ3umL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254190595-61DAGcQ3umL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254190595-61DAGcQ3umL.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/unMxq0jVdk/camel-up",
        price: "44.95",
        msrp: "39.99",
        discount: "-0.12",
        primary_publisher: "Z-Man Games",
        publishers: ["Z-Man Games"],
        mechanics: [
          {
            id: "R0bGq4cAl4"
          }
        ],
        categories: [
          {
            id: "tQGLgwdbYH"
          }
        ],
        designers: ["Steffen Bogen"],
        developers: [],
        artists: ["Dennis Lohausen", "Chris Quilliams"],
        names: [],
        num_user_ratings: 134,
        average_user_rating: 3.180580613416433,
        official_url:
          "https://www.zmangames.com/en/products/camel-up/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "https://www.fgbradleys.com/rules/rules2/CamelUp-rules.pdf",
        weight_amount: 2.79,
        weight_units: "lbs ",
        size_height: 2.8,
        size_width: 11.7,
        size_depth: 11.7,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "Dxj6IrT1Rn"
          }
        ],
        reddit_all_time_count: 339,
        reddit_week_count: 6,
        reddit_day_count: 0,
        historical_low_price: 27.99,
        historical_low_date: {
          $date: "2019-06-29T12:01:26.476Z"
        }
      },
      {
        id: "0iNuJdgbmq",
        name: "One Deck Dungeon",
        year_published: 2016,
        min_players: 1,
        max_players: 2,
        min_playtime: 30,
        max_playtime: 45,
        min_age: 14,
        description:
          "ALL THE EXCITEMENT OF A ROGUE-LIKE DUNGEON CRAWL IN ONE DECK OF CARDS!<br />\r\n<br />\r\nOne Deck Dungeon is a roguelike game in a small box. Choose a hero, and a dungeon to delve into, and setup is done! The game is very easy to learn, features intuitive dice mechanics and is attractive on a demo table. While the game only supports 1-2 players, you can combine two sets to have a four player dungeon delve.<br />\r\n<br />\r\nOne Deck Dungeon has generated much excitement over the all-female, realistically-clad cast of heroes, something that is quite unique in the tabletop realm!",
        description_preview:
          "ALL THE EXCITEMENT OF A ROGUE-LIKE DUNGEON CRAWL IN ONE DECK OF CARDS! \r\n \r\nOne Deck Dungeon is a roguelike game in a small box. Choose a hero, and a dungeon to delve into, and setup is done! The game is very easy to learn, features intuitive dice mechanics and is attractive on a demo table. While the game only supports 1-2 players, you can combine two sets to have a four player dungeon delve. \r\n \r\nOne Deck Dungeon has generated much excitement over the all-female, realistically-clad cast of heroes, something that is quite unique in the tabletop realm!",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1539300977697",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1539300977697",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1539300977697",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1539300977697",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1539300977697",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1539300977697",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1539300977697"
        },
        url:
          "https://www.boardgameatlas.com/search/game/0iNuJdgbmq/one-deck-dungeon",
        price: "17.29",
        msrp: "25.00",
        discount: "0.31",
        primary_publisher: "Asmadi Games",
        publishers: ["Asmadi Games"],
        mechanics: [
          {
            id: "33UT4gTFqy"
          },
          {
            id: "vZsDDAdOoe"
          },
          {
            id: "R0bGq4cAl4"
          }
        ],
        categories: [
          {
            id: "eX8uuNlQkQ"
          },
          {
            id: "ZTneo8TaIO"
          },
          {
            id: "QAYkTHK1Dd"
          }
        ],
        designers: [" Chris Cieslik"],
        developers: [],
        artists: [" Alanna Cervenak", "Will Pitzer"],
        names: [],
        num_user_ratings: 74,
        average_user_rating: 3.1486486486486482,
        official_url:
          "http://www.onedeckdungeon.com/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "http://asmadigames.com/rules/OneDeckDungeon_Rules.pdf",
        weight_amount: 1,
        weight_units: "lb",
        size_height: 4,
        size_width: 1.4,
        size_depth: 5.5,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "OR2muWUGLH"
          }
        ],
        reddit_all_time_count: 337,
        reddit_week_count: 3,
        reddit_day_count: 0,
        historical_low_price: 16.99,
        historical_low_date: {
          $date: "2019-02-09T23:14:12.465Z"
        }
      },
      {
        id: "k7pnwdyDfC",
        name: "Puerto Rico",
        year_published: 2002,
        min_players: 2,
        max_players: 5,
        min_playtime: 90,
        max_playtime: 150,
        min_age: 12,
        description:
          "Prospector, captain, mayor, trader, settler, craftsman, or builder? Which roles will you play in the new world? Will you own the most prosperous plantations? Will you build the most valuable buildings? You have but one goal: achieve the greatest prosperity and highest respect! This is shown by the player who earns the most victory points. He will win the game!",
        description_preview:
          "Prospector, captain, mayor, trader, settler, craftsman, or builder? Which roles will you play in the new world? Will you own the most prosperous plantations? Will you build the most valuable buildings? You have but one goal: achieve the greatest prosperity and highest respect! This is shown by the player who earns the most victory points. He will win the game!",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255812091-51jb0LuMmEL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255812091-51jb0LuMmEL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559255812091-51jb0LuMmEL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559255812091-51jb0LuMmEL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559255812091-51jb0LuMmEL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559255812091-51jb0LuMmEL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255812091-51jb0LuMmEL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/k7pnwdyDfC/puerto-rico",
        price: "27.88",
        msrp: "44.95",
        discount: "0.38",
        primary_publisher: "Rio Grande Games",
        publishers: ["Rio Grande Games"],
        mechanics: [
          {
            id: "zzsE4jtI1b"
          }
        ],
        categories: [
          {
            id: "ODWOjWAJj3"
          },
          {
            id: "N0TkEGfEsF"
          },
          {
            id: "Wr8uXcoR9p"
          }
        ],
        designers: ["Andreas Seyfarth"],
        developers: [],
        artists: ["Harald Lieske", "Franz Vohwinkel"],
        names: [],
        num_user_ratings: 192,
        average_user_rating: 3.5572916666666665,
        official_url:
          "http://riograndegames.com/games.html?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "http://riograndegames.com/getFile.php?id=675",
        weight_amount: 4,
        weight_units: "lbs ",
        size_height: 12,
        size_width: 8.5,
        size_depth: 2.8,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 336,
        reddit_week_count: 5,
        reddit_day_count: 11,
        historical_low_price: 22.49,
        historical_low_date: {
          $date: "2019-10-01T10:02:45.007Z"
        }
      },
      {
        id: "wa7tVs4Di1",
        name: "Chicago Express",
        year_published: 2007,
        min_players: 2,
        max_players: 6,
        min_playtime: 60,
        max_playtime: 60,
        min_age: 12,
        description:
          "A railroad game designed by Harry Wu. The industrial boom in the 19th century America continues, along with the struggle to become the most successful railroad in the country! Names such as Cornelius Vanderbilt and Charles Morgan bear witness to this period of money making. But financing the railroads was not the only thing they all had in mind…the most important goal of all was to make as much profit as possible. The players assume the role of an investor and attempt to achieve dividends that are as high as possible. But the more companies there are, the more difficult it gets. Which investor has the best skills…",
        description_preview:
          "A railroad game designed by Harry Wu. The industrial boom in the 19th century America continues, along with the struggle to become the most successful railroad in the country! Names such as Cornelius Vanderbilt and Charles Morgan bear witness to this period of money making. But financing the railroads was not the only thing they all had in mind…the most important goal of all was to make as much profit as possible. The players assume the role of an investor and attempt to achieve dividends that are as high as possible. But the more companies there are, the more difficult it gets. Which investor has the best skills…",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257935041-51rdxTno9OL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257935041-51rdxTno9OL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559257935041-51rdxTno9OL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559257935041-51rdxTno9OL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559257935041-51rdxTno9OL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559257935041-51rdxTno9OL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257935041-51rdxTno9OL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/wa7tVs4Di1/chicago-express",
        price: "39.95",
        msrp: "62.95",
        discount: "0.37",
        primary_publisher: "Queen Games",
        publishers: ["Queen Games", "Winsome Games"],
        mechanics: [
          {
            id: "AZxlPpi5oq"
          },
          {
            id: "c6gkRM7rSy"
          }
        ],
        categories: [
          {
            id: "N0TkEGfEsF"
          }
        ],
        designers: ["Harry Wu (John Bohrer)"],
        developers: [],
        artists: ["Michael Menzel"],
        names: [],
        num_user_ratings: 38,
        average_user_rating: 3.2894736842105257,
        official_url: null,
        rules_url:
          "https://www.fgbradleys.com/rules/rules4/Chicago%20Express%20-%20rules.pdf",
        weight_amount: 3.17,
        weight_units: "lbs",
        size_height: 12.3,
        size_width: 8.7,
        size_depth: 3.9,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 333,
        reddit_week_count: 9,
        reddit_day_count: 9,
        historical_low_price: 28.17,
        historical_low_date: {
          $date: "2019-04-08T15:56:25.631Z"
        }
      },
      {
        id: "jgUiAHDCTK",
        name: "Captain Sonar",
        year_published: 2016,
        min_players: 2,
        max_players: 8,
        min_playtime: 30,
        max_playtime: 60,
        min_age: 14,
        description:
          "<div><p>Captain Sonar is packed with over three dozen high quality components!</p>\r\n<li>24 role sheets<br />\r\n</li><li>2 transparent radio operator sheets<br />\r\n</li><li>8 erasable marker pens<br />\r\n</li><li>2 screens<br />\r\n</li><li>Rulebook<br />\r\n<br />\r\n<p><b>Choose Your Role</b></p>Be organized and communicate because a captain is nothing without his crew: the First Mate, the Radio Operator, and the Engineer.<br />\r\n<br />\r\nAll the members of a team sit on one side of the table, and they each take a particular role on the submarine, with the division of labor for these roles being dependent on the number of players in the game: One player might be the captain, who is responsible for moving the submarine and announcing some details of this movement; another player is manning the sonar in order to listen to the opposing captain's orders and try to decipher where that sub might be in the water; a third player might be working in the munitions room to prepare torpedoes, mines and other devices that will allow for combat.<br />\r\n<br />\r\n<p><b>Five Maps Included</b></p>Multiple maps are included with varying levels of difficulty.<br />\r\n<br />\r\nUse the option best suited for your playgroup, or try more difficult maps to increase the challenge!<br />\r\n<br />\r\n<p><b>Two Modes of Play</b></p>Captain Sonar can be played in two modes: turn-by-turn or simultaneous. In the latter set-up, all the members of a team take their actions simultaneously while trying to track what the opponents are doing, too. When a captain is ready to launch an attack, the action pauses for a moment to see whether a hit has been recorded--then play resumes with the target having snuck away while the attacker paused or with bits of metal now scattered across the ocean floor.<br />\r\n<br />\r\n<p><b>Duty Calls!</b></p></li></div>",
        description_preview:
          "  Captain Sonar is packed with over three dozen high quality components! \r\n 24 role sheets \r\n  2 transparent radio operator sheets \r\n  8 erasable marker pens \r\n  2 screens \r\n  Rulebook \r\n \r\n  Choose Your Role  Be organized and communicate because a captain is nothing without his crew: the First Mate, the Radio Operator, and the Engineer. \r\n \r\nAll the members of a team sit on one side of the table, and they each take a particular role on the submarine, with the division of labor for these roles being dependent on the number of players in the game: One player might be the captain, who is responsible for moving the submarine and announcing some details of this movement; another player is manning the sonar in order to listen to the opposing captain's orders and try to decipher where that sub might be in the water; a third player might be working in the munitions room to prepare torpedoes, mines and other devices that will allow for combat. \r\n \r\n  Five Maps Included  Multiple maps are included with varying levels of difficulty. \r\n \r\nUse the option best suited for your playgroup, or try more difficult maps to increase the challenge! \r\n \r\n  Two Modes of Play  Captain Sonar can be played in two modes: turn-by-turn or simultaneous. In the latter set-up, all the members of a team take their actions simultaneously while trying to track what the opponents are doing, too. When a captain is ready to launch an attack, the action pauses for a moment to see whether a hit has been recorded--then play resumes with the target having snuck away while the attacker paused or with bits of metal now scattered across the ocean floor. \r\n \r\n  Duty Calls!    ",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254198504-51MUo6Lpt7L.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254198504-51MUo6Lpt7L.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254198504-51MUo6Lpt7L.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254198504-51MUo6Lpt7L.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254198504-51MUo6Lpt7L.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254198504-51MUo6Lpt7L.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254198504-51MUo6Lpt7L.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/jgUiAHDCTK/captain-sonar",
        price: "39.99",
        msrp: "44.99",
        discount: "0.11",
        primary_publisher: "Asmodee Editions",
        publishers: ["Asmodee Editions"],
        mechanics: [
          {
            id: "qu5BcGjAzk"
          },
          {
            id: "aQZ40lKv8O"
          },
          {
            id: "24FWssBC3o"
          },
          {
            id: "E9VKQ8uMSP"
          },
          {
            id: "9jnCsVuRat"
          }
        ],
        categories: [
          {
            id: "bCBXJy9qDw"
          },
          {
            id: "upXZ8vNfNO"
          },
          {
            id: "WVMOS3s2pb"
          },
          {
            id: "O0ogzwLUe8"
          }
        ],
        designers: [" Roberto Fraga", "Yohan Lemonnier"],
        developers: [],
        artists: [" Ervin", "Sabrina Tobal"],
        names: [],
        num_user_ratings: 128,
        average_user_rating: 3.476562499999999,
        official_url:
          "https://drafts.asmodee.us/en/games/captain-sonar/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "http://www.matagot.com/IMG/pdf/SONAR_RULES_EN_lr.pdf",
        weight_amount: 4,
        weight_units: "lbs",
        size_height: 3,
        size_width: 11.6,
        size_depth: 11.6,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 331,
        reddit_week_count: 15,
        reddit_day_count: 0,
        historical_low_price: 23.99,
        historical_low_date: {
          $date: "2020-01-30T21:55:05.713Z"
        }
      },
      {
        id: "3RVcHxhPEZ",
        name: "Betrayal at House on the Hill",
        year_published: 2004,
        min_players: 3,
        max_players: 6,
        min_playtime: 60,
        max_playtime: 72,
        min_age: 12,
        description:
          "<b>Second Edition</b><br />\r\nThe creak of footsteps on the stairs, the smell of something foul and dead, the feel of something crawling down your back - this and more can be found in the exciting refresh of the Avalon Hill favorite Betrayal at House on the Hill. This fun and suspenseful game is a new experience almost every time you play - you and your friends explore ''that creepy old place on the hill'' until enough mystic misadventures happen that one of the players turns on all of the others! Hours of fun for all your friends and family.<br />\r\n<br />\r\nDesigned for 3-6 players aged 12 and up, this boardgame features multiple scenarios, a different lay-out with every game, and enough chills to freeze the heart of any horror fan.<br />",
        description_preview:
          " Second Edition  \r\nThe creak of footsteps on the stairs, the smell of something foul and dead, the feel of something crawling down your back - this and more can be found in the exciting refresh of the Avalon Hill favorite Betrayal at House on the Hill. This fun and suspenseful game is a new experience almost every time you play - you and your friends explore ''that creepy old place on the hill'' until enough mystic misadventures happen that one of the players turns on all of the others! Hours of fun for all your friends and family. \r\n \r\nDesigned for 3-6 players aged 12 and up, this boardgame features multiple scenarios, a different lay-out with every game, and enough chills to freeze the heart of any horror fan. ",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254204252-51B5pW2B2aRL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254204252-51B5pW2B2aRL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254204252-51B5pW2B2aRL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254204252-51B5pW2B2aRL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254204252-51B5pW2B2aRL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254204252-51B5pW2B2aRL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254204252-51B5pW2B2aRL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/3RVcHxhPEZ/betrayal-at-house-on-the-hill",
        price: "23.18",
        msrp: "50.00",
        discount: "0.54",
        primary_publisher: "Wizards of the Coast",
        publishers: ["Wizards of the Coast"],
        mechanics: [
          {
            id: "33UT4gTFqy"
          },
          {
            id: "R0bGq4cAl4"
          },
          {
            id: "BGrhzIN69D"
          }
        ],
        categories: [
          {
            id: "KUBCKBkGxV"
          },
          {
            id: "v4SfYtS2Lr"
          },
          {
            id: "cAIkk5aLdQ"
          }
        ],
        designers: [
          " Rob Daviau",
          "Bruce Glassco",
          "Bill McQuillan",
          "Mike Selinker",
          "Teeuwynn Woodruff"
        ],
        developers: [],
        artists: [
          "Dennis Crabapple McClain",
          "Christopher Moeller",
          "Peter Whitley"
        ],
        names: [
          "Betrayal at House on the Hill - 2nd edition",
          "Betrayl at House on the Hill",
          "Betrayal at House on the Hill"
        ],
        num_user_ratings: 196,
        average_user_rating: 3.0255102040816317,
        official_url:
          "http://avalonhill.wizards.com/avalon-hill-betrayal-house-hill?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://media.wizards.com/2018/downloads/rules/betrayal_rules.pdf",
        weight_amount: 1.34,
        weight_units: "lbs ",
        size_height: 10.5,
        size_width: 3.2,
        size_depth: 10.5,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "0SnahMGapj"
          }
        ],
        reddit_all_time_count: 328,
        reddit_week_count: 14,
        reddit_day_count: 5,
        historical_low_price: 23.18,
        historical_low_date: {
          $date: "2020-02-11T10:03:46.433Z"
        }
      },
      {
        id: "WF5Jwf8RK9",
        name: "Just One",
        year_published: 2018,
        min_players: 3,
        max_players: 7,
        min_playtime: 20,
        max_playtime: 30,
        min_age: 8,
        description:
          "Just One is a cooperative party game in which you play together to discover as many mystery words as possible. Find the best clue to help your teammate. Be unique, as all identical clues will be cancelled!",
        description_preview:
          "Just One is a cooperative party game in which you play together to discover as many mystery words as possible. Find the best clue to help your teammate. Be unique, as all identical clues will be cancelled!",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1542147060146",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1542147060146",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1542147060146",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1542147060146",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1542147060146",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1542147060146",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1542147060146"
        },
        url: "https://www.boardgameatlas.com/search/game/WF5Jwf8RK9/just-one",
        price: "22.49",
        msrp: "24.99",
        discount: "0.10",
        primary_publisher: "Repos Production",
        publishers: ["Repos Production"],
        mechanics: [
          {
            id: "33UT4gTFqy"
          }
        ],
        categories: [
          {
            id: "X8J7RM6dxX"
          }
        ],
        designers: ["Ludovic Roudy", "Bruno Sautter"],
        developers: [],
        artists: ["Ludovic Roudy", "Bruno Sautter"],
        names: ["Just One (New Box)", "Just One (1st Edition)", "Just One"],
        num_user_ratings: 58,
        average_user_rating: 3.5000000000000013,
        official_url:
          "https://press.rprod.com/blog/jeu/just-one/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "http://justone-the-game.com/index.php?lang=en#download",
        weight_amount: 1,
        weight_units: "lb",
        size_height: 3.6,
        size_width: 9.1,
        size_depth: 2,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 325,
        reddit_week_count: 15,
        reddit_day_count: 5,
        historical_low_price: 16.99,
        historical_low_date: {
          $date: "2019-04-25T12:49:41.107Z"
        }
      },
      {
        id: "VCoAcOrQX6",
        name: "Deception: Murder in Hong Kong",
        year_published: 2014,
        min_players: 4,
        max_players: 12,
        min_playtime: 15,
        max_playtime: 25,
        min_age: 14,
        description:
          "<div>A social game of deduction and deception. Who among you can see through the lies? Who is capable of getting away with murder?</div><div><p>In <em>Deception: Murder in Hong Kong</em>, players find themselves in a scenario of intrigue and murder, deduction and deception. One player is the Murderer, secretly choosing their weapon and the evidence they leave behind. Another is the Forensic Scientist who holds the key to convicting the criminal but is only able to express their knowledge through analysis of the scene. The rest are investigators, interpreting the clues to solve the crime – and the killer is among them. Investigators must collaborate and use their wits, their hunches, and their keen deductive insight to correctly identify the means of murder and the key evidence to convict the killer. The murderer must mislead and confuse the investigators to save themselves.</p><p>Do you have what it takes to see through the lies and catch the criminal in your ranks or will they muddy the waters long enough to get away with murder?</p></div>",
        description_preview:
          " A social game of deduction and deception. Who among you can see through the lies? Who is capable of getting away with murder?   In  Deception: Murder in Hong Kong , players find themselves in a scenario of intrigue and murder, deduction and deception. One player is the Murderer, secretly choosing their weapon and the evidence they leave behind. Another is the Forensic Scientist who holds the key to convicting the criminal but is only able to express their knowledge through analysis of the scene. The rest are investigators, interpreting the clues to solve the crime – and the killer is among them. Investigators must collaborate and use their wits, their hunches, and their keen deductive insight to correctly identify the means of murder and the key evidence to convict the killer. The murderer must mislead and confuse the investigators to save themselves.  Do you have what it takes to see through the lies and catch the criminal in your ranks or will they muddy the waters long enough to get away with murder?  ",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559258094785-51kpEY4cOtL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559258094785-51kpEY4cOtL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559258094785-51kpEY4cOtL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559258094785-51kpEY4cOtL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559258094785-51kpEY4cOtL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559258094785-51kpEY4cOtL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559258094785-51kpEY4cOtL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/VCoAcOrQX6/deception-murder-in-hong-kong",
        price: "39.46",
        msrp: "39.99",
        discount: "0.01",
        primary_publisher: "Grey Fox Games",
        publishers: ["Grey Fox Games"],
        mechanics: [
          {
            id: "GNtouC8NLm"
          },
          {
            id: "GUoWg3Mfh5"
          }
        ],
        categories: [
          {
            id: "PinhJrhnxU"
          },
          {
            id: "bCBXJy9qDw"
          },
          {
            id: "Kk70K0524Z"
          },
          {
            id: "X8J7RM6dxX"
          }
        ],
        designers: [" Tobey Ho"],
        developers: [],
        artists: ["Marcin Adamski", "Ben Carre", "Tommy Ng", "Ari Wong"],
        names: [],
        num_user_ratings: 134,
        average_user_rating: 3.3731343283582094,
        official_url:
          "http://www.greyfoxgames.com/games/deception-murder-in-hong-kong/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "http://www.greyfoxgames.com/wp-content/uploads/2017/05/Rulebook-jpg-version.pdf",
        weight_amount: 2.29,
        weight_units: "lbs",
        size_height: 12,
        size_width: 3,
        size_depth: 12,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 325,
        reddit_week_count: 6,
        reddit_day_count: 1,
        historical_low_price: 22.99,
        historical_low_date: {
          $date: "2019-12-06T08:25:11.525Z"
        }
      },
      {
        id: "b1nBQaNdH6",
        name: "Istanbul",
        year_published: 2014,
        min_players: 2,
        max_players: 5,
        min_playtime: 40,
        max_playtime: 60,
        min_age: 10,
        description:
          "Hustle and bustle in the bazaar district of Istanbul: merchants and their assistants are hurrying through the narrow alleys attempting to be more successful than their competitors. Good organization is key: wheelbarrows have to be filled with goods at the warehouses and then swiftly transported by the assistants to the various destinations. The goal of the merchants is to be the first to collect a certain amount of rubies.<br />\r\n<br />\r\nYou are leading a merchant and four assistants through the 16 Places of the bazaar. At each Place, you can carry out a specific action. The challenge is that, to carry out an action at any of those Places, your merchant needs the help of an assistant and has to leave him behind. To use that assistant again later, your merchant has to come back to that Place and pick him up. So plan ahead carefully to avoid being left with no assistants and thus unable to do anything...",
        description_preview:
          "Hustle and bustle in the bazaar district of Istanbul: merchants and their assistants are hurrying through the narrow alleys attempting to be more successful than their competitors. Good organization is key: wheelbarrows have to be filled with goods at the warehouses and then swiftly transported by the assistants to the various destinations. The goal of the merchants is to be the first to collect a certain amount of rubies. \r\n \r\nYou are leading a merchant and four assistants through the 16 Places of the bazaar. At each Place, you can carry out a specific action. The challenge is that, to carry out an action at any of those Places, your merchant needs the help of an assistant and has to leave him behind. To use that assistant again later, your merchant has to come back to that Place and pick him up. So plan ahead carefully to avoid being left with no assistants and thus unable to do anything...",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254173065-51atw15TEHL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254173065-51atw15TEHL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254173065-51atw15TEHL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254173065-51atw15TEHL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254173065-51atw15TEHL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254173065-51atw15TEHL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254173065-51atw15TEHL.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/b1nBQaNdH6/istanbul",
        price: "31.41",
        msrp: "49.99",
        discount: "0.37",
        primary_publisher: "Alderac Entertainment Group",
        publishers: ["Alderac Entertainment Group"],
        mechanics: [
          {
            id: "R0bGq4cAl4"
          },
          {
            id: "qu5BcGjAzk"
          }
        ],
        categories: [
          {
            id: "N0TkEGfEsF"
          }
        ],
        designers: ["Rüdiger Dorn"],
        developers: [],
        artists: ["Andreas Resch", "Hans-Georg Schneider"],
        names: [],
        num_user_ratings: 141,
        average_user_rating: 3.5389988262328678,
        official_url:
          "https://www.alderac.com/istanbul/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://www.fgbradleys.com/rules/rules4/Istanbul%20-%20rules.pdf",
        weight_amount: 2.63,
        weight_units: "lbs ",
        size_height: 12.6,
        size_width: 9.1,
        size_depth: 3,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 324,
        reddit_week_count: 10,
        reddit_day_count: 0,
        historical_low_price: 24.99,
        historical_low_date: {
          $date: "2019-09-30T10:38:09.224Z"
        }
      },
      {
        id: "J9W6vjCo0I",
        name: "Kingdom Death: Monster",
        year_published: 2015,
        min_players: 1,
        max_players: 4,
        min_playtime: 60,
        max_playtime: 180,
        min_age: 17,
        description:
          "19 lbs of Nightmare Horror Gaming<div><br /></div><div>235 page hardcover rulebook, 18 hard plastic sprues of miniatures, 1000+ matte game cards, 400+ unique pieces of art, and 86 full page illustrations.</div><div><br /></div><div>Kingdom Death: Monster is a fully cooperative, tabletop, hobby game experience. Unite to survive by hunting monsters and collectively guiding the development of your settlement through a 30 year, self-running campaign.</div><div><br /></div><div>Every decision matters. A space moved during the showdown, every resource spent to craft a piece of gear, what principles your settlement upholds - all can have lasting impact on this highly replayable and challenging game. </div><h3><br />Campaign System</h3><div>Embark alone or with up to 4 friends (6 with game variant) on a 30 lantern year campaign. Each lantern year will cycle through a chaotic hunt, a showdown with a monster, and the development of your settlement. With so much emphasis on player choice, no two campaign runs will be alike.</div><div><br /></div><h3>Monster AI System</h3><div>You will fight 8 monsters, each controlled by their own pair of decks that scale to 3 levels of difficulty. (Except for the final encounter, it has only 1 level and it's HARD!) Every encounter, even with the same monster, is diverse and valuable. No two showdowns will resolve the same way. Players will have to plan their gear and keep their minds sharp to prevail.</div><div><br /></div><h3>Gear System</h3><div>In Monster, survivors will craft gear using resources earned from defeating monsters or found on their hunt. Each survivor has a gear grid, and can slot up to 9 pieces of gear at a time. What gear you will carry and how you arrange it can unlock advantages that may make the difference between life and death.</div><div><br /></div><h3>Story Event System</h3><div>You will encounter 40+ story events that will shape the story of your unique campaign. Your settlement's decisions and discoveries affect how the story events unfold. Story Events cover everything from setting up and fighting a monster to dramatic turning points in your settlements history. </div><div><br /></div><div><br /></div><h3>Kingdom Death: Monster Contents</h3><div><br /></div><div>1 x Hardcover Rule Book - 11&quot; x 8.5&quot; 235 Pages.</div><div>1 x Showdown Board - 2' x 3' ( Heavy 3mm Game Board Matte )</div><div>1 x Hunt / Settlement Board ( Heavy 3mm Game Board Matte )</div><div>2 x Token Sheet - 127 Tokens</div><div>1 x Terrain Token Sheet - 31 Terrain Tiles</div><div>1 x Monster Controller Panel</div><div>4 x Gear Grids</div><div>1 x Character Record Sheet Pad ( 50 Sheets, 6&quot;x6&quot;)</div><div>1 x Settlement Record Sheet Pad ( 50 Sheets, 8.5&quot; x 11&quot;)</div><div>5 x 10 sided black Kingdom Death dice</div><div>1 x 10 sided white Kingdom Death dice</div><div>4 x 6 sided Hit location dice</div><div>1 x 10 sided translucent orange Kingdom Death Death Die</div><div>Kingdom Death: Monster Contents - Miniatures</div><div><br /></div><div>4 x Starting Survivors</div><div>1 x White Lion</div><div>1 x Butcher</div><div>1 x Screaming Antelope</div><div>1 x Kings Man</div><div>1 x The Hand</div><div>1 x Phoenix</div><div>1 x Watcher</div><div>1 x Gold Smoke Knight</div><div>1 x Unarmored Armor Kit (Creates 4 Survivors.)</div><div>1 x Rawhide Armor Kit (Creates 4 Survivors.)</div><div>1 x Leather Armor Kit (Creates 4 Survivors.)</div><div>1 x White Lion Armor Kit (Creates 4 Survivors.)</div><div>1 x Screaming Fur Armor Kit (Creates 4 Survivors.)</div><div>1 x Phoenix Armor Kit (Creates 4 Survivors.)</div><div>1 x Lantern Armor Kit (Creates 4 Survivors.)</div><div>4 x Bonus Mystery Miniatures</div><div>4 x Starting Survivor Heads for Armor Kit customization</div><div>9 x Assorted Survivor Heads for Armor Kit customization</div><div>150+ Gear for Armor Kit customization (Every weapon in the game represented!)</div><div>10+ Masks</div><div>10 x Decorative Stone Face Base Inserts</div><div>36 x Kingdom Death 30mm Base + Insert</div><div>6 x Kingdom Death 50mm Base + Insert</div><div>1 x Kingdom Death 100mm Base + Insert </div>",
        description_preview:
          '19 lbs of Nightmare Horror Gaming    235 page hardcover rulebook, 18 hard plastic sprues of miniatures, 1000+ matte game cards, 400+ unique pieces of art, and 86 full page illustrations.     Kingdom Death: Monster is a fully cooperative, tabletop, hobby game experience. Unite to survive by hunting monsters and collectively guiding the development of your settlement through a 30 year, self-running campaign.     Every decision matters. A space moved during the showdown, every resource spent to craft a piece of gear, what principles your settlement upholds - all can have lasting impact on this highly replayable and challenging game.    Campaign System  Embark alone or with up to 4 friends (6 with game variant) on a 30 lantern year campaign. Each lantern year will cycle through a chaotic hunt, a showdown with a monster, and the development of your settlement. With so much emphasis on player choice, no two campaign runs will be alike.     Monster AI System  You will fight 8 monsters, each controlled by their own pair of decks that scale to 3 levels of difficulty. (Except for the final encounter, it has only 1 level and it\'s HARD!) Every encounter, even with the same monster, is diverse and valuable. No two showdowns will resolve the same way. Players will have to plan their gear and keep their minds sharp to prevail.     Gear System  In Monster, survivors will craft gear using resources earned from defeating monsters or found on their hunt. Each survivor has a gear grid, and can slot up to 9 pieces of gear at a time. What gear you will carry and how you arrange it can unlock advantages that may make the difference between life and death.     Story Event System  You will encounter 40+ story events that will shape the story of your unique campaign. Your settlement\'s decisions and discoveries affect how the story events unfold. Story Events cover everything from setting up and fighting a monster to dramatic turning points in your settlements history.         Kingdom Death: Monster Contents     1 x Hardcover Rule Book - 11" x 8.5" 235 Pages.  1 x Showdown Board - 2\' x 3\' ( Heavy 3mm Game Board Matte )  1 x Hunt / Settlement Board ( Heavy 3mm Game Board Matte )  2 x Token Sheet - 127 Tokens  1 x Terrain Token Sheet - 31 Terrain Tiles  1 x Monster Controller Panel  4 x Gear Grids  1 x Character Record Sheet Pad ( 50 Sheets, 6"x6")  1 x Settlement Record Sheet Pad ( 50 Sheets, 8.5" x 11")  5 x 10 sided black Kingdom Death dice  1 x 10 sided white Kingdom Death dice  4 x 6 sided Hit location dice  1 x 10 sided translucent orange Kingdom Death Death Die  Kingdom Death: Monster Contents - Miniatures     4 x Starting Survivors  1 x White Lion  1 x Butcher  1 x Screaming Antelope  1 x Kings Man  1 x The Hand  1 x Phoenix  1 x Watcher  1 x Gold Smoke Knight  1 x Unarmored Armor Kit (Creates 4 Survivors.)  1 x Rawhide Armor Kit (Creates 4 Survivors.)  1 x Leather Armor Kit (Creates 4 Survivors.)  1 x White Lion Armor Kit (Creates 4 Survivors.)  1 x Screaming Fur Armor Kit (Creates 4 Survivors.)  1 x Phoenix Armor Kit (Creates 4 Survivors.)  1 x Lantern Armor Kit (Creates 4 Survivors.)  4 x Bonus Mystery Miniatures  4 x Starting Survivor Heads for Armor Kit customization  9 x Assorted Survivor Heads for Armor Kit customization  150+ Gear for Armor Kit customization (Every weapon in the game represented!)  10+ Masks  10 x Decorative Stone Face Base Inserts  36 x Kingdom Death 30mm Base + Insert  6 x Kingdom Death 50mm Base + Insert  1 x Kingdom Death 100mm Base + Insert  ',
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1540326550888",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1540326550888",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1540326550888",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1540326550888",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1540326550888",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1540326550888",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1540326550888"
        },
        url:
          "https://www.boardgameatlas.com/search/game/J9W6vjCo0I/kingdom-death-monster",
        price: "999.99",
        msrp: "400.00",
        discount: "-1.50",
        primary_publisher: "Adam Poots Games, LLC",
        publishers: [
          "Adam Poots Games, LLC",
          "Adam Poots Games",
          "LLC",
          "Adam Poots Games",
          "LLC"
        ],
        mechanics: [
          {
            id: "9mNukNBxfZ"
          },
          {
            id: "R0bGq4cAl4"
          },
          {
            id: "qu5BcGjAzk"
          },
          {
            id: "EVeAdboGUA"
          },
          {
            id: "GUoWg3Mfh5"
          }
        ],
        categories: [
          {
            id: "KUBCKBkGxV"
          },
          {
            id: "ZTneo8TaIO"
          },
          {
            id: "cAIkk5aLdQ"
          },
          {
            id: "ZhlfIPxYsw"
          },
          {
            id: "FC6ElKI9tk"
          },
          {
            id: "MHkqIVxwtx"
          }
        ],
        designers: ["Adam Poots"],
        developers: [],
        artists: ["Adam Poots"],
        names: ["kdm", "kingdom death"],
        num_user_ratings: 27,
        average_user_rating: 3.851851851851852,
        official_url:
          "http://kingdomdeath.com/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "http://www.kingdomdeath.com/1-4-updates/",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 320,
        reddit_week_count: 7,
        reddit_day_count: 8,
        historical_low_price: 400,
        historical_low_date: {
          $date: "2019-01-24T19:45:51.602Z"
        }
      },
      {
        id: "iEEoo9hTRo",
        name: "Tiny Towns",
        year_published: 2019,
        min_players: 1,
        max_players: 6,
        min_playtime: 45,
        max_playtime: 60,
        min_age: 14,
        description:
          "<p>You are the mayor of a tiny town in the forest in which the smaller creatures of the woods have created a civilization hidden away from predators. This new land is small and the resources are scarce, so you take what you can get and never say no to building materials. Cleverly plan and construct a thriving town, and don't let it fill up with wasted resources! Whoever builds the most prosperous tiny town wins!</p>\r\n\r\n<p>In <em><strong>Tiny Towns</strong></em>, your town is represented by a 4x4 grid on which you will place resource cubes in specific layouts to construct buildings. Each building scores victory points (VPs) in a unique way. When no player can place any more resources or construct any buildings, the game ends, and any squares without a building are worth -1 VP. The player with the most VP wins!</p>",
        description_preview:
          " You are the mayor of a tiny town in the forest in which the smaller creatures of the woods have created a civilization hidden away from predators. This new land is small and the resources are scarce, so you take what you can get and never say no to building materials. Cleverly plan and construct a thriving town, and don't let it fill up with wasted resources! Whoever builds the most prosperous tiny town wins! \r\n\r\n In   Tiny Towns  , your town is represented by a 4x4 grid on which you will place resource cubes in specific layouts to construct buildings. Each building scores victory points (VPs) in a unique way. When no player can place any more resources or construct any buildings, the game ends, and any squares without a building are worth -1 VP. The player with the most VP wins! ",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1547098937524",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1547098937524",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1547098937524",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1547098937524",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1547098937524",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1547098937524",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1547098937524"
        },
        url: "https://www.boardgameatlas.com/search/game/iEEoo9hTRo/tiny-towns",
        price: "27.97",
        msrp: "39.99",
        discount: "0.30",
        primary_publisher: "Alderac Entertainment Group",
        publishers: ["Alderac Entertainment Group"],
        mechanics: [
          {
            id: "9YdRn9J9oZ"
          }
        ],
        categories: [
          {
            id: "MWoxgHrOJD"
          },
          {
            id: "ODWOjWAJj3"
          }
        ],
        designers: ["Peter McPherson"],
        developers: [],
        artists: ["Gong Studios"],
        names: ["Tiny Towns"],
        num_user_ratings: 68,
        average_user_rating: 3.529411764705882,
        official_url:
          "https://www.alderac.com/tiny-towns/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: null,
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 317,
        reddit_week_count: 10,
        reddit_day_count: 0,
        historical_low_price: 16.97,
        historical_low_date: {
          $date: "2019-09-01T12:01:52.219Z"
        }
      },
      {
        id: "6bu6MAewdv",
        name: "KeyForge: Call of the Archons",
        year_published: 2018,
        min_players: 2,
        max_players: 2,
        min_playtime: 15,
        max_playtime: 45,
        min_age: 14,
        description:
          "Enter a world where anything is possible in KeyForge! Here in the world's first Unique Deck Game, two players become Archons racing to forge keys that unlock the hidden vaults of the Crucible, an artificial world built from pieces of countless planets. With an incredible array of creatures, artifacts, and abilities, no two decks are alike, and no two battles will ever be the same!<br />\r\n<br />\r\nThe Keyforge: Call of the Archons starter set is the perfect place to begin your adventures on the Crucible. As you race to gather AEmber and unlock the Crucible's hidden vaults, you need to all the help you can get, and in this set you will find all the implements you need to begin your journey. Providing you with two training decks: Miss &quot;Onyx&quot; Censorius and Radiant Argus the Supreme, as well as two unique Archon Decks and a collection of keys, tokens, chain trackers, and status cards, this set provides you with everything that you and your chosen opponent need to start playing!",
        description_preview:
          "Enter a world where anything is possible in KeyForge! Here in the world's first Unique Deck Game, two players become Archons racing to forge keys that unlock the hidden vaults of the Crucible, an artificial world built from pieces of countless planets. With an incredible array of creatures, artifacts, and abilities, no two decks are alike, and no two battles will ever be the same! \r\n \r\nThe Keyforge: Call of the Archons starter set is the perfect place to begin your adventures on the Crucible. As you race to gather AEmber and unlock the Crucible's hidden vaults, you need to all the help you can get, and in this set you will find all the implements you need to begin your journey. Providing you with two training decks: Miss \"Onyx\" Censorius and Radiant Argus the Supreme, as well as two unique Archon Decks and a collection of keys, tokens, chain trackers, and status cards, this set provides you with everything that you and your chosen opponent need to start playing!",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1539316536650",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1539316536650",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1539316536650",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1539316536650",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1539316536650",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1539316536650",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1539316536650"
        },
        url:
          "https://www.boardgameatlas.com/search/game/6bu6MAewdv/keyforge-call-of-the-archons",
        price: "31.99",
        msrp: "39.95",
        discount: "0.20",
        primary_publisher: "Fantasy Flight Games",
        publishers: ["Fantasy Flight Games"],
        mechanics: [
          {
            id: "WPytek5P8l"
          },
          {
            id: "T8JEFYwoqy"
          }
        ],
        categories: [
          {
            id: "eX8uuNlQkQ"
          },
          {
            id: "ZTneo8TaIO"
          },
          {
            id: "upXZ8vNfNO"
          }
        ],
        designers: ["RIchard Garfield "],
        developers: [],
        artists: [],
        names: ["KeyForge", "KeyForge: Call of the Archons"],
        num_user_ratings: 82,
        average_user_rating: 3.3658536585365857,
        official_url:
          "https://www.fantasyflightgames.com/en/products/keyforge/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://images-cdn.fantasyflightgames.com/filer_public/45/78/4578fac4-728a-4e3e-9160-40b5af5ac3f9/keyforge_rulebook_web_good.pdf",
        weight_amount: 1.55,
        weight_units: "lbs ",
        size_height: 10,
        size_width: 10,
        size_depth: 2,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 312,
        reddit_week_count: 3,
        reddit_day_count: 16,
        historical_low_price: 19.97,
        historical_low_date: {
          $date: "2019-12-28T12:03:02.237Z"
        }
      },
      {
        id: "Zspd2nNHfz",
        name: "Mansions of Madness: 2nd Edition",
        year_published: null,
        min_players: 1,
        max_players: 5,
        min_playtime: 120,
        max_playtime: 180,
        min_age: 13,
        description:
          "<div><p>The monster figures in <i>Mansions of Madness Second Edition</i> are set on the same bases as the Arkham Horror Premium Figures and those featured in the first edition of Mansions of Madness. These bases allow you to slide information tokens underneath them, so you have quick and easy access to the monsters' traits and abilities. Because of the consistency between editions, you can seamlessly incorporate your first edition and painted minis into your new game, expanding the possibilities of your game and further immersing you in the bone-chilling happenings that have befallen Arkham's residents.</p><p><br />In the <i>Mansions of Madness Second Edition</i> companion app, you will have the option to incorporate some or all of your old components. Whether you have the first edition and its expansions or just one of the products, you can still incorporate it into your game. Each product you add to your collection will allow you to play as that game's investigators, introduce the possibility for those monsters to spawn, include a few new people to encounter, and widen the pool of maps the app could generate for your chosen scenario. If you decide to play without certain expansions or add more to your collection, you can always go back and change your collection within the app, thereby altering the possible combinations of monsters, maps, and investigators.</p>\r\n\r\n\r\n</div>",
        description_preview:
          "  The monster figures in  Mansions of Madness Second Edition  are set on the same bases as the Arkham Horror Premium Figures and those featured in the first edition of Mansions of Madness. These bases allow you to slide information tokens underneath them, so you have quick and easy access to the monsters' traits and abilities. Because of the consistency between editions, you can seamlessly incorporate your first edition and painted minis into your new game, expanding the possibilities of your game and further immersing you in the bone-chilling happenings that have befallen Arkham's residents.   In the  Mansions of Madness Second Edition  companion app, you will have the option to incorporate some or all of your old components. Whether you have the first edition and its expansions or just one of the products, you can still incorporate it into your game. Each product you add to your collection will allow you to play as that game's investigators, introduce the possibility for those monsters to spawn, include a few new people to encounter, and widen the pool of maps the app could generate for your chosen scenario. If you decide to play without certain expansions or add more to your collection, you can always go back and change your collection within the app, thereby altering the possible combinations of monsters, maps, and investigators. \r\n\r\n\r\n ",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254973792-51Z2Bp88KhgL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254973792-51Z2Bp88KhgL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254973792-51Z2Bp88KhgL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254973792-51Z2Bp88KhgL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254973792-51Z2Bp88KhgL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254973792-51Z2Bp88KhgL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254973792-51Z2Bp88KhgL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/Zspd2nNHfz/mansions-of-madness-2nd-edition",
        price: "83.98",
        msrp: "89.99",
        discount: "0.07",
        primary_publisher: "Fantasy Flight Games",
        publishers: ["Fantasy Flight Games"],
        mechanics: [],
        categories: [],
        designers: [],
        developers: [],
        artists: [],
        names: [
          "Mansions of Madness 2e",
          "Mansions of Madness: Second Edition",
          "Mansions of Madness",
          "Mansions of Madness: Second Edition"
        ],
        num_user_ratings: 124,
        average_user_rating: 3.5241935483870974,
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 311,
        reddit_week_count: 11,
        reddit_day_count: 1,
        historical_low_price: 51.99,
        historical_low_date: {
          $date: "2019-11-29T12:42:59.188Z"
        }
      },
      {
        id: "YIBcOZqGkI",
        name: "Battlestar Galactica",
        year_published: 2008,
        min_players: 3,
        max_players: 6,
        min_playtime: 120,
        max_playtime: 300,
        min_age: 10,
        description:
          "Battlestar Galactica: The Board Game is an exciting game of mistrust, intrigue, and the struggle for survival. Based on the epic and widely-acclaimed Sci Fi Channel series, Battlestar Galactica: The Board Game puts players in the role of one of ten of their favorite characters from the show. Each playable character has their own abilities and weaknesses, and must all work together in order for humanity to have any hope of survival. However, one or more players in every game secretly side with the Cylons. Players must attempt to expose the traitor while fuel shortages, food contaminations, and political unrest threatens to tear the fleet apart. \r\n<br /> \r\n<br /> After the Cylon attack on the Colonies, the battered remnants of the human race are on the run, constantly searching for the next signpost on the road to Earth. They face the threat of Cylon attack from without, and treachery and crisis from within. Humanity must work together if they are to have any hope of survival...but how can they, when any of them may, in fact, be a Cylon agent? \r\n<br /> \r\n<br /> Battlestar Galactica: The Board Game is a semi-cooperative game for 3-6 players ages 10 and up that can be played in 2-3 hours.",
        description_preview:
          "Battlestar Galactica: The Board Game is an exciting game of mistrust, intrigue, and the struggle for survival. Based on the epic and widely-acclaimed Sci Fi Channel series, Battlestar Galactica: The Board Game puts players in the role of one of ten of their favorite characters from the show. Each playable character has their own abilities and weaknesses, and must all work together in order for humanity to have any hope of survival. However, one or more players in every game secretly side with the Cylons. Players must attempt to expose the traitor while fuel shortages, food contaminations, and political unrest threatens to tear the fleet apart. \r\n  \r\n  After the Cylon attack on the Colonies, the battered remnants of the human race are on the run, constantly searching for the next signpost on the road to Earth. They face the threat of Cylon attack from without, and treachery and crisis from within. Humanity must work together if they are to have any hope of survival...but how can they, when any of them may, in fact, be a Cylon agent? \r\n  \r\n  Battlestar Galactica: The Board Game is a semi-cooperative game for 3-6 players ages 10 and up that can be played in 2-3 hours.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559258003590-613F9Ue01nL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559258003590-613F9Ue01nL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559258003590-613F9Ue01nL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559258003590-613F9Ue01nL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559258003590-613F9Ue01nL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559258003590-613F9Ue01nL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559258003590-613F9Ue01nL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/YIBcOZqGkI/battlestar-galactica",
        price: "279.99",
        msrp: "0.00",
        discount: "0.00",
        primary_publisher: "Fantasy Flight Publishing",
        publishers: ["Fantasy Flight Publishing"],
        mechanics: [
          {
            id: "33UT4gTFqy"
          },
          {
            id: "R0bGq4cAl4"
          },
          {
            id: "WPytek5P8l"
          },
          {
            id: "Voqy2dgrIM"
          }
        ],
        categories: [
          {
            id: "PinhJrhnxU"
          },
          {
            id: "bCBXJy9qDw"
          },
          {
            id: "FC6ElKI9tk"
          },
          {
            id: "TKQncFVX74"
          },
          {
            id: "3B3QpKvXD3"
          }
        ],
        designers: ["Corey Konieczka"],
        developers: [],
        artists: [
          "Kevin Childress",
          "Andrew Navaro",
          "Brian Schomburg",
          "WiL Springer"
        ],
        names: ["Battlestar Galactica: The Board Game"],
        num_user_ratings: 127,
        average_user_rating: 3.4686870536531766,
        official_url:
          "https://www.fantasyflightgames.com/en/products/battlestar-galactica/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://images-cdn.fantasyflightgames.com/ffg_content/Battlestar_Galactica/bsg-rulebook-web.pdf",
        weight_amount: 3.35,
        weight_units: "lbs",
        size_height: 3,
        size_width: 11.8,
        size_depth: 11.8,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "FbhyxVWcOu"
          },
          {
            id: "8yNHQaaOfx"
          }
        ],
        reddit_all_time_count: 308,
        reddit_week_count: 6,
        reddit_day_count: 1,
        historical_low_price: 247.49,
        historical_low_date: {
          $date: "2019-06-25T04:20:28.369Z"
        }
      },
      {
        id: "1LkeNOwWbB",
        name: "Hanamikoji",
        year_published: 2013,
        min_players: 2,
        max_players: 2,
        min_playtime: 15,
        max_playtime: 30,
        min_age: 10,
        description:
          "<div><p><b>Win the favor of the Geisha!</b><br />Hanamikoji is a simple, yet deep game of careful consideration for two players. Each player takes the role of a restaurateur, attempting to curry the favor of the beloved geisha. Can you sequence your plays in thoughtful reflection to outmaneuver your opponent.? Find out in <i>Hanamikoji</i>!<br /><br /><b>Play Your Cards Right</b><br />Gameplay is focused around the geisha, and the use of cards representing instruments of entertainment to sway them to your establishment. Playing the majority of a color's cards in a round will draw the matching geisha to your restaurant. However, each of your offerings must be planned in advance, as you can only present the geisha with gifts based on what offering tiles you have available.</p><p><br />\r\nAt the start of a player's turn, they draw a card from the deck and decide which of the four offerings to perform. Each player begins the round with the same four offering tiles available, and each tile must be used exactly once during the round to play or discard cards in certain patterns.</p><p><br />\r\nOnce each player has performed all four of their actions, the Victory Markers on each Geisha are moved toward whoever curried the most favor with the Geisha that round. If the two players tied on how much favor they curried, then the Victory Marker stays put. If at the end of a round a player has earned the favor of four Geisha or Geisha whose points total 11 or more, then that player wins the game!</p>\r\n\r\n\r\n\r\n\r\n</div>",
        description_preview:
          "   Win the favor of the Geisha!  Hanamikoji is a simple, yet deep game of careful consideration for two players. Each player takes the role of a restaurateur, attempting to curry the favor of the beloved geisha. Can you sequence your plays in thoughtful reflection to outmaneuver your opponent.? Find out in  Hanamikoji !   Play Your Cards Right  Gameplay is focused around the geisha, and the use of cards representing instruments of entertainment to sway them to your establishment. Playing the majority of a color's cards in a round will draw the matching geisha to your restaurant. However, each of your offerings must be planned in advance, as you can only present the geisha with gifts based on what offering tiles you have available.   \r\nAt the start of a player's turn, they draw a card from the deck and decide which of the four offerings to perform. Each player begins the round with the same four offering tiles available, and each tile must be used exactly once during the round to play or discard cards in certain patterns.   \r\nOnce each player has performed all four of their actions, the Victory Markers on each Geisha are moved toward whoever curried the most favor with the Geisha that round. If the two players tied on how much favor they curried, then the Victory Marker stays put. If at the end of a round a player has earned the favor of four Geisha or Geisha whose points total 11 or more, then that player wins the game! \r\n\r\n\r\n\r\n\r\n ",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254198504-51djEXpTEiL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254198504-51djEXpTEiL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254198504-51djEXpTEiL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254198504-51djEXpTEiL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254198504-51djEXpTEiL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254198504-51djEXpTEiL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254198504-51djEXpTEiL.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/1LkeNOwWbB/hanamikoji",
        price: "28.27",
        msrp: "17.99",
        discount: "-0.57",
        primary_publisher: "Quick Simple Fun",
        publishers: ["Quick Simple Fun"],
        mechanics: [
          {
            id: "05zCZoLvQJ"
          },
          {
            id: "wV5peB05xs"
          },
          {
            id: "WPytek5P8l"
          }
        ],
        categories: [
          {
            id: "eX8uuNlQkQ"
          },
          {
            id: "QAYkTHK1Dd"
          }
        ],
        designers: [" Kota Nakayama (中山 宏太)"],
        developers: [],
        artists: [" Maisherly"],
        names: [],
        num_user_ratings: 83,
        average_user_rating: 3.5060240963855414,
        official_url:
          "https://en.emperors4.com/game/hanamikoji?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://drive.google.com/file/d/0B-UUhGhkNzLsdTBYX1U5a25xWjg/view",
        weight_amount: 1.6,
        weight_units: "oz",
        size_height: 15.8,
        size_width: 5.9,
        size_depth: 15.8,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 307,
        reddit_week_count: 13,
        reddit_day_count: 2,
        historical_low_price: 13.49,
        historical_low_date: {
          $date: "2019-03-12T00:40:22.750Z"
        }
      },
      {
        id: "Yq6uL19JmQ",
        name: "Res Arcana",
        year_published: 2019,
        min_players: 2,
        max_players: 4,
        min_playtime: 20,
        max_playtime: 60,
        min_age: 12,
        description:
          "<p>In a high tower, an Alchemist prepares potions, using vials filled with otherworldly fluids. In a sacred grove, a Druid grinds herbs for a mystical ritual. In the catacombs, a Necromancer summons a bone dragon... Welcome to the world of Res Arcana™! <br />\r\nIn it, Life, Death, Elan, Calm, and Gold are the essences that fuel the art of magic. Choose your mage, gather essences, craft unique artifacts, and use them to summon dragons, conquer places of power, and achieve victory! <br />\r\nDesigned by Tom Lehmann and richly illustrated by Julien Delval, Res Arcana offers a unique gaming experience!</p>",
        description_preview:
          " In a high tower, an Alchemist prepares potions, using vials filled with otherworldly fluids. In a sacred grove, a Druid grinds herbs for a mystical ritual. In the catacombs, a Necromancer summons a bone dragon... Welcome to the world of Res Arcana™!  \r\nIn it, Life, Death, Elan, Calm, and Gold are the essences that fuel the art of magic. Choose your mage, gather essences, craft unique artifacts, and use them to summon dragons, conquer places of power, and achieve victory!  \r\nDesigned by Tom Lehmann and richly illustrated by Julien Delval, Res Arcana offers a unique gaming experience! ",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1558468582893",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1558468582893",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1558468582893",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1558468582893",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1558468582893",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1558468582893",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1558468582893"
        },
        url: "https://www.boardgameatlas.com/search/game/Yq6uL19JmQ/res-arcana",
        price: "34.99",
        msrp: "0.00",
        discount: "0.00",
        primary_publisher: "Sand Castle Games",
        publishers: ["Sand Castle Games"],
        mechanics: [
          {
            id: "iWODHwRGuU"
          },
          {
            id: "WPytek5P8l"
          },
          {
            id: "XM2FYZmBHH"
          }
        ],
        categories: [
          {
            id: "eX8uuNlQkQ"
          },
          {
            id: "ZTneo8TaIO"
          }
        ],
        designers: ["Thomas Lehmann"],
        developers: [],
        artists: ["Julien Delval"],
        names: ["Res Arcana"],
        num_user_ratings: 31,
        average_user_rating: 3.64516129032258,
        official_url: null,
        rules_url: null,
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 307,
        reddit_week_count: 38,
        reddit_day_count: 2,
        historical_low_price: 24.51,
        historical_low_date: {
          $date: "2019-11-21T03:56:07.189Z"
        }
      },
      {
        id: "YL5DYnG28Y",
        name: "The Resistance",
        year_published: 2009,
        min_players: 5,
        max_players: 10,
        min_playtime: 30,
        max_playtime: 45,
        min_age: 13,
        description:
          "The Resistance is a very intense game of secret identities deductiona and deception for 5-10 players.",
        description_preview:
          "The Resistance is a very intense game of secret identities deductiona and deception for 5-10 players.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254432300-51X5r1nBOnL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254432300-51X5r1nBOnL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254432300-51X5r1nBOnL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254432300-51X5r1nBOnL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254432300-51X5r1nBOnL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254432300-51X5r1nBOnL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254432300-51X5r1nBOnL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/YL5DYnG28Y/the-resistance",
        price: "13.49",
        msrp: "19.99",
        discount: "0.33",
        primary_publisher: "Indie Boards & Cards",
        publishers: ["Indie Boards & Cards"],
        mechanics: [
          {
            id: "DEvPj5twid"
          },
          {
            id: "JYYdBW6UCE"
          }
        ],
        categories: [
          {
            id: "PinhJrhnxU"
          },
          {
            id: "eX8uuNlQkQ"
          },
          {
            id: "bCBXJy9qDw"
          },
          {
            id: "jZEDOpx07e"
          },
          {
            id: "X8J7RM6dxX"
          },
          {
            id: "3B3QpKvXD3"
          }
        ],
        designers: ["Don Eskridge"],
        developers: [],
        artists: [
          "Luis Francisco",
          "Luis Franco",
          "Piotr Haraszczak",
          "Jihoon Jang",
          "Maryam Khatoon",
          "Jordy Knoop",
          "Vinh Mac",
          "Alex Murur",
          "Jarek Nocoń",
          "George Patsouras",
          "Michael Rasmussen",
          "Jordan Saia",
          "Luis Thomas"
        ],
        names: [
          "The Resistance (3rd Edition)",
          "The Resistance 2nd Edition (Ding & Dent)"
        ],
        num_user_ratings: 201,
        average_user_rating: 3.1849420504813155,
        official_url:
          "http://www.indieboardsandcards.com/index.php/games/the-resistance/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "http://www.ultraboardgames.com/the-resistance/game-rules.php",
        weight_amount: 0.16,
        weight_units: "oz",
        size_height: 8,
        size_width: 1.8,
        size_depth: 6,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 306,
        reddit_week_count: 10,
        reddit_day_count: 3,
        historical_low_price: 13.29,
        historical_low_date: {
          $date: "2019-01-24T21:52:19.312Z"
        }
      },
      {
        id: "Yzurao9vqw",
        name: "Targi",
        year_published: 2012,
        min_players: 2,
        max_players: 2,
        min_playtime: 60,
        max_playtime: 75,
        min_age: 12,
        description:
          "A Targi is a male member of the Tuareg people, who live in the Sahara desert. As tribe leader, you will be trading dates, salt, and pepper to obtain coveted gold coins and advantages. In the game, the desert is a five-by-five grid of cards. Position your Targi figures on the cards that border the desert. You carry out the actions of those cards as well as the cards at the crossroads between them. If you don?t go to the merchant, you won?t be able to trade ? and even worse, your opponent will. Or maybe a caravan will bring the merchandise you desire. There are many choices to consider. But don?t wait too long, the desert is harsh and you might miss an opportunity to make a deal. In the next round, a completely different set of offerings will be on the table. The goods cards are the means to the end of getting highly desired tribe cards. These in turn bring advantages during the game and victory points at the end. You can win only if you plan shrewdly and always keep some gold in your pocket.",
        description_preview:
          "A Targi is a male member of the Tuareg people, who live in the Sahara desert. As tribe leader, you will be trading dates, salt, and pepper to obtain coveted gold coins and advantages. In the game, the desert is a five-by-five grid of cards. Position your Targi figures on the cards that border the desert. You carry out the actions of those cards as well as the cards at the crossroads between them. If you don?t go to the merchant, you won?t be able to trade ? and even worse, your opponent will. Or maybe a caravan will bring the merchandise you desire. There are many choices to consider. But don?t wait too long, the desert is harsh and you might miss an opportunity to make a deal. In the next round, a completely different set of offerings will be on the table. The goods cards are the means to the end of getting highly desired tribe cards. These in turn bring advantages during the game and victory points at the end. You can win only if you plan shrewdly and always keep some gold in your pocket.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1574264202495",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1574264202495",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1574264202495",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1574264202495",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1574264202495",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1574264202495",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1574264202495"
        },
        url: "https://www.boardgameatlas.com/search/game/Yzurao9vqw/targi",
        price: "14.19",
        msrp: "19.95",
        discount: "0.29",
        primary_publisher: "Thames & Kosmos",
        publishers: ["Thames & Kosmos"],
        mechanics: [
          {
            id: "ngCSHHk0H2"
          },
          {
            id: "hUn7uJHrYm"
          },
          {
            id: "lA3KUtVFCy"
          },
          {
            id: "jCRze30VP1"
          },
          {
            id: "fBOTEBUAmV"
          }
        ],
        categories: [
          {
            id: "a8NM5cugJX"
          },
          {
            id: "zyj9ZK3mHB"
          }
        ],
        designers: ["Andreas Steiger"],
        developers: [],
        artists: ["Taira Akitsu", "Franz Vohwinkel"],
        names: ["Targi: Die Erweiterung", "Targi: Die Erweiterung", "Targi"],
        num_user_ratings: 72,
        average_user_rating: 3.6388888888888884,
        official_url:
          "http://www.thamesandkosmos.com/index.php/kosmosgames/targi?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: null,
        matches_specs: null,
        spec: [
          {
            id: "3liIBe9Z4z"
          }
        ],
        reddit_all_time_count: 305,
        reddit_week_count: 20,
        reddit_day_count: 1,
        historical_low_price: 11.4,
        historical_low_date: {
          $date: "2019-10-07T23:50:03.478Z"
        }
      },
      {
        id: "zBikUpC51l",
        name: "Champions of Midgard",
        year_published: 2015,
        min_players: 2,
        max_players: 4,
        min_playtime: 60,
        max_playtime: 90,
        min_age: 10,
        description:
          "Trolls attack your town. Draugr terrorize nearby villages. Monsters strike at travelers and merchants alike. The people are suffering - will you be their champion?<br />\r\n<br />\r\nGrey Fox Games is pleased to announce the release of Champions of Midgard - a Viking Era worker placement game with dice driven combat between players and mythical Norse beasts. The game has enjoyed much praise from playtesters and has received the Dice Tower Seal of Excellence!<br />\r\n<br />\r\nThis newest release is Grey Fox Games' largest game yet with an impressive list of components including a 20&quot; x 30&quot; board, 34 custom dice, wooden meeples, carboard tokens, and 121 monster, draugr, and troll cards. In Champions of Midgard players assume the role of a Viking Leader attempting to earn the title of Jarl in a besieged harbor town. They will collect the weapons, wood, and food needed to build ships, carve runes and send their warriors across the sea to defeat the most savage beasts and earn the glory befitting a champion.<br />\r\n<br />\r\n&quot;The combat is what sets this game apart from other games in the genre,&quot; says Joshua Lobkowicz, Head of Game Development at Grey Fox Games. &quot;It's as approachable as Lords of Waterdeep but with the added thrill of rolling handfuls of Viking Warrior Dice in an attempt to kill awesome monsters.&quot;",
        description_preview:
          'Trolls attack your town. Draugr terrorize nearby villages. Monsters strike at travelers and merchants alike. The people are suffering - will you be their champion? \r\n \r\nGrey Fox Games is pleased to announce the release of Champions of Midgard - a Viking Era worker placement game with dice driven combat between players and mythical Norse beasts. The game has enjoyed much praise from playtesters and has received the Dice Tower Seal of Excellence! \r\n \r\nThis newest release is Grey Fox Games\' largest game yet with an impressive list of components including a 20" x 30" board, 34 custom dice, wooden meeples, carboard tokens, and 121 monster, draugr, and troll cards. In Champions of Midgard players assume the role of a Viking Leader attempting to earn the title of Jarl in a besieged harbor town. They will collect the weapons, wood, and food needed to build ships, carve runes and send their warriors across the sea to defeat the most savage beasts and earn the glory befitting a champion. \r\n \r\n"The combat is what sets this game apart from other games in the genre," says Joshua Lobkowicz, Head of Game Development at Grey Fox Games. "It\'s as approachable as Lords of Waterdeep but with the added thrill of rolling handfuls of Viking Warrior Dice in an attempt to kill awesome monsters."',
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254152677-61-TxEzoAJL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254152677-61-TxEzoAJL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254152677-61-TxEzoAJL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254152677-61-TxEzoAJL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254152677-61-TxEzoAJL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254152677-61-TxEzoAJL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254152677-61-TxEzoAJL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/zBikUpC51l/champions-of-midgard",
        price: "41.99",
        msrp: "42.99",
        discount: "0.02",
        primary_publisher: "Grey Fox Games",
        publishers: ["Grey Fox Games"],
        mechanics: [
          {
            id: "R0bGq4cAl4"
          },
          {
            id: "wV5peB05xs"
          },
          {
            id: "lA3KUtVFCy"
          },
          {
            id: "fBOTEBUAmV"
          }
        ],
        categories: [
          {
            id: "KUBCKBkGxV"
          },
          {
            id: "ZTneo8TaIO"
          },
          {
            id: "upXZ8vNfNO"
          },
          {
            id: "QAYkTHK1Dd"
          },
          {
            id: "MHkqIVxwtx"
          }
        ],
        designers: [" Ole Steiness"],
        developers: [],
        artists: ["Víctor Pérez Corbella"],
        names: [],
        num_user_ratings: 103,
        average_user_rating: 3.627217944425845,
        official_url:
          "https://www.greyfoxgames.com/games/champions-of-midgard/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "http://www.greyfoxgames.com/wp-content/uploads/2016/09/Champions-of-Midguard-Rulebook-Small-File.pdf",
        weight_amount: 2,
        weight_units: "lbs ",
        size_height: 12,
        size_width: 3,
        size_depth: 12,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 299,
        reddit_week_count: 3,
        reddit_day_count: 2,
        historical_low_price: 27.7,
        historical_low_date: {
          $date: "2019-12-06T08:26:58.892Z"
        }
      },
      {
        id: "uVD7OzRUNZ",
        name: "Space Alert",
        year_published: 2008,
        min_players: 1,
        max_players: 5,
        min_playtime: 30,
        max_playtime: 45,
        min_age: 14,
        description:
          "Space Alert is a team survival game. Players take on the role of a crew of space explorers sent out through hyperspace to survey a dangerous sector of the Galaxy. The pace of the game is set by 10-minute soundtracks on included CDs (or by scenario cards, if you don't have a CD player). During these 10 minutes, the crew must defend the ship while it scans the enemy sector. If they succeed, the ship brings back valuable data. If they fail... it is time to train a new crew.<br /><br />\r\nPlayers do not compete against each other. Instead, they work together against the challenge presented by the game. The difficulty of this  challenge can be chosen by the players themselves. Completing the most difficult missions requires close teamwork.",
        description_preview:
          "Space Alert is a team survival game. Players take on the role of a crew of space explorers sent out through hyperspace to survey a dangerous sector of the Galaxy. The pace of the game is set by 10-minute soundtracks on included CDs (or by scenario cards, if you don't have a CD player). During these 10 minutes, the crew must defend the ship while it scans the enemy sector. If they succeed, the ship brings back valuable data. If they fail... it is time to train a new crew.  \r\nPlayers do not compete against each other. Instead, they work together against the challenge presented by the game. The difficulty of this  challenge can be chosen by the players themselves. Completing the most difficult missions requires close teamwork.",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254968358-512yA0s-XGL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254968358-512yA0s-XGL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254968358-512yA0s-XGL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254968358-512yA0s-XGL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254968358-512yA0s-XGL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254968358-512yA0s-XGL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254968358-512yA0s-XGL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/uVD7OzRUNZ/space-alert",
        price: "39.99",
        msrp: "59.95",
        discount: "0.33",
        primary_publisher: "Czech Games Edition",
        publishers: ["Czech Games Edition"],
        mechanics: [
          {
            id: "05zCZoLvQJ"
          },
          {
            id: "33UT4gTFqy"
          },
          {
            id: "WPytek5P8l"
          }
        ],
        categories: [
          {
            id: "3B3QpKvXD3"
          }
        ],
        designers: [" Vlaada Chvátil"],
        developers: [],
        artists: [" Radim Pech", "Milan Vavroň"],
        names: [],
        num_user_ratings: 65,
        average_user_rating: 3.2615384615384615,
        official_url:
          "https://czechgames.com/en/space-alert/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://czechgames.com/files/rules/space-alert-rules-en.pdf",
        weight_amount: 3.67,
        weight_units: "lbs ",
        size_height: 2,
        size_width: 6.3,
        size_depth: 2,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 299,
        reddit_week_count: 8,
        reddit_day_count: 4,
        historical_low_price: 38.99,
        historical_low_date: {
          $date: "2019-02-05T00:38:40.482Z"
        }
      },
      {
        id: "3tAwjRDw8q",
        name: "Raiders of the North Sea",
        year_published: 2015,
        min_players: 2,
        max_players: 4,
        min_playtime: 60,
        max_playtime: 120,
        min_age: 12,
        description:
          "<p>Do you have what it takes to be a Viking? There's only one way to find out in ... Raiders of the North Sea. Your rewards await you as you assemble a crew, grab a ship and set out to claim victory in this fun game for 2-4 players!</p><p>Your choices lie before you - work or raid? The key to any Vikings' successful attack on a harbor or fortress, is making sure you have enough provisions and crew. Place workers throughout the town to collect supplies and build your crew. And of course, what's more fun than raiding, pillaging and stealing plunder? Throughout the game, you'll be immersed in the Viking age with beautiful artwork and amazing quality components. Win the game through military strength, plunder and Valkyrie (victory points).</p><p>Will the Chieftain be impressed with your conquest? Grab your war ax and put on your helmet, the North Sea awaits!</p><p>Raiders of the North Sea uses hand management, set collection and worker placement mechanics in this great Garphill Games, 2-4 player game.</p><p>Players: 2-4<br />Recommended Age: 12+<br />Playtime in minutes: 60-80</p><p>Contents:</p><ul><li>1 Illustrated Rulebook</li><li>1 Game Board</li><li>122 Wooden Tokens</li><li>16 Offering Tiles</li><li>32 Silver Coins</li><li>32 Provisions</li><li>75 Cards</li><li>1 Cotton Bag</li><li>2 Dice</li></ul>",
        description_preview:
          " Do you have what it takes to be a Viking? There's only one way to find out in ... Raiders of the North Sea. Your rewards await you as you assemble a crew, grab a ship and set out to claim victory in this fun game for 2-4 players!  Your choices lie before you - work or raid? The key to any Vikings' successful attack on a harbor or fortress, is making sure you have enough provisions and crew. Place workers throughout the town to collect supplies and build your crew. And of course, what's more fun than raiding, pillaging and stealing plunder? Throughout the game, you'll be immersed in the Viking age with beautiful artwork and amazing quality components. Win the game through military strength, plunder and Valkyrie (victory points).  Will the Chieftain be impressed with your conquest? Grab your war ax and put on your helmet, the North Sea awaits!  Raiders of the North Sea uses hand management, set collection and worker placement mechanics in this great Garphill Games, 2-4 player game.  Players: 2-4 Recommended Age: 12+ Playtime in minutes: 60-80  Contents:   1 Illustrated Rulebook  1 Game Board  122 Wooden Tokens  16 Offering Tiles  32 Silver Coins  32 Provisions  75 Cards  1 Cotton Bag  2 Dice  ",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257168802-61WCyEwpyOL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257168802-61WCyEwpyOL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559257168802-61WCyEwpyOL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559257168802-61WCyEwpyOL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559257168802-61WCyEwpyOL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559257168802-61WCyEwpyOL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257168802-61WCyEwpyOL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/3tAwjRDw8q/raiders-of-the-north-sea",
        price: "33.99",
        msrp: "50.00",
        discount: "0.32",
        primary_publisher: "Garphill Games",
        publishers: ["Garphill Games"],
        mechanics: [
          {
            id: "WPytek5P8l"
          },
          {
            id: "lA3KUtVFCy"
          },
          {
            id: "fBOTEBUAmV"
          }
        ],
        categories: [
          {
            id: "QAYkTHK1Dd"
          }
        ],
        designers: ["Shem Phillips"],
        developers: [],
        artists: ["Mihajlo Dimitrievski"],
        names: [
          "Raiders of the North Sea Second Edition",
          "Raiders of the North Sea 2nd Edition",
          "Raiders of the North Sea"
        ],
        num_user_ratings: 109,
        average_user_rating: 3.7222222222222223,
        official_url:
          "http://garphill.com/product/raiders-of-the-north-sea?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://www.fgbradleys.com/rules/rules5/Raiders%20of%20the%20North%20Sea%20-%20rules.pdf",
        weight_amount: 2,
        weight_units: "lbs",
        size_height: 9,
        size_width: 2.8,
        size_depth: 9,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 295,
        reddit_week_count: 7,
        reddit_day_count: 2,
        historical_low_price: 33.99,
        historical_low_date: {
          $date: "2020-01-09T01:12:47.739Z"
        }
      },
      {
        id: "usmFRWCFjI",
        name: "Chinatown",
        year_published: 1999,
        min_players: 3,
        max_players: 5,
        min_playtime: 60,
        max_playtime: 75,
        min_age: 12,
        description:
          "New York in the 1960s. A new wave of Chinese immigrants is moving into Chinatown. The adoption of the new immigration act has launched the district into a demographic boom! It now reaches Canal Street to the north and Bowery Street to the east. Arriving by the thousands, the immigrants seek to buy buildings, establish businesses, and fulfill the American Dream! Take a bite of the Big Apple and use your talents to acquire the most extraordinary fortune in America in Chinatown!",
        description_preview:
          "New York in the 1960s. A new wave of Chinese immigrants is moving into Chinatown. The adoption of the new immigration act has launched the district into a demographic boom! It now reaches Canal Street to the north and Bowery Street to the east. Arriving by the thousands, the immigrants seek to buy buildings, establish businesses, and fulfill the American Dream! Take a bite of the Big Apple and use your talents to acquire the most extraordinary fortune in America in Chinatown!",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559258092947-5185I63BjJL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559258092947-5185I63BjJL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559258092947-5185I63BjJL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559258092947-5185I63BjJL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559258092947-5185I63BjJL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559258092947-5185I63BjJL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559258092947-5185I63BjJL.jpg"
        },
        url: "https://www.boardgameatlas.com/search/game/usmFRWCFjI/chinatown",
        price: "37.49",
        msrp: "33.99",
        discount: "-0.10",
        primary_publisher: "Z-Man Games",
        publishers: ["Z-Man Games"],
        mechanics: [
          {
            id: "lA3KUtVFCy"
          },
          {
            id: "8PN2HE86wg"
          }
        ],
        categories: [
          {
            id: "ODWOjWAJj3"
          },
          {
            id: "N0TkEGfEsF"
          }
        ],
        designers: ["Karsten Hartwig"],
        developers: [],
        artists: ["Mathieu Leyssenne", "Franz Vohwinkel"],
        names: [],
        num_user_ratings: 52,
        average_user_rating: 3.51923076923077,
        official_url:
          "https://www.zmangames.com/en/products/chinatown/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://images-cdn.zmangames.com/us-east-1/filer_public/01/bf/01bfdafd-99f7-4cb0-b14d-2e5914854027/zm7044_chinatown_rules.pdf",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 295,
        reddit_week_count: 12,
        reddit_day_count: 8,
        historical_low_price: 32.99,
        historical_low_date: {
          $date: "2019-06-26T21:58:29.742Z"
        }
      },
      {
        id: "VbH6pNiGCH",
        name: "War of the Ring (Second Edition)",
        year_published: 2012,
        min_players: 2,
        max_players: 4,
        min_playtime: 120,
        max_playtime: 180,
        min_age: 13,
        description:
          "The War of the Ring has begun!<br />\r\nThe War of the Ring is a grand strategy board game that allows its players to immerse themselves in the world of J.R.R Tolkien's The Lord of the Rings and experience its epic action, dramatic conflict, and memorable characters.<br />\r\n<br />\r\nAs the Free Peoples player you command the proud hosts of the most important kingdoms of the Third Age. From the horse-lords of Rohan to the soldiers of Gondor and the Elven lords of Rivendell, you lead the defense of the last free realms of Middle-earth.<br />\r\n<br />\r\nFace the evil minions of Sauron on the field of battle in a desperate attempt to delay their onslaught, while you lead the Fellowship of the Ring in the Quest for Mount Doom.<br />\r\n<br />\r\nAs the Shadow player you lead the hordes of the Dark Lord and his most powerful minions as they try to bring darkness to Middle-earth. Legions of Orcs, Trolls, Wolfriders, and the dreadful Ringwraiths await your command. Hunt the Ring-bearer and bring the precious Ring to his Master, or crush your enemies with your unstoppable armies.<br />\r\n<br />\r\nThis is your chance to forge the destiny of an age!",
        description_preview:
          "The War of the Ring has begun! \r\nThe War of the Ring is a grand strategy board game that allows its players to immerse themselves in the world of J.R.R Tolkien's The Lord of the Rings and experience its epic action, dramatic conflict, and memorable characters. \r\n \r\nAs the Free Peoples player you command the proud hosts of the most important kingdoms of the Third Age. From the horse-lords of Rohan to the soldiers of Gondor and the Elven lords of Rivendell, you lead the defense of the last free realms of Middle-earth. \r\n \r\nFace the evil minions of Sauron on the field of battle in a desperate attempt to delay their onslaught, while you lead the Fellowship of the Ring in the Quest for Mount Doom. \r\n \r\nAs the Shadow player you lead the hordes of the Dark Lord and his most powerful minions as they try to bring darkness to Middle-earth. Legions of Orcs, Trolls, Wolfriders, and the dreadful Ringwraiths await your command. Hunt the Ring-bearer and bring the precious Ring to his Master, or crush your enemies with your unstoppable armies. \r\n \r\nThis is your chance to forge the destiny of an age!",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254157926-512zX-IDXOL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254157926-512zX-IDXOL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254157926-512zX-IDXOL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254157926-512zX-IDXOL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254157926-512zX-IDXOL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254157926-512zX-IDXOL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254157926-512zX-IDXOL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/VbH6pNiGCH/war-of-the-ring-second-edition",
        price: "59.99",
        msrp: "89.90",
        discount: "0.33",
        primary_publisher: "Ares Games",
        publishers: ["Ares Games"],
        mechanics: [
          {
            id: "05zCZoLvQJ"
          },
          {
            id: "xuphiSlrxI"
          },
          {
            id: "R0bGq4cAl4"
          },
          {
            id: "WPytek5P8l"
          }
        ],
        categories: [
          {
            id: "KUBCKBkGxV"
          },
          {
            id: "ZTneo8TaIO"
          },
          {
            id: "upXZ8vNfNO"
          }
        ],
        designers: ["Roberto Di Meglio", "Marco Maggi", "Francesco Nepitello"],
        developers: [],
        artists: ["John Howe", "Fabio Maiorana"],
        names: ["War of the ring", "War of the Ring 2nd Edition (Ding & Dent)"],
        num_user_ratings: 59,
        average_user_rating: 4.033898305084746,
        official_url:
          "http://www.aresgames.eu/games/war-of-the-ring-line/war-of-the-ring-second-edition?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url: "https://www.aresgames.eu/download/20980/",
        weight_amount: 6.5,
        weight_units: "lbs",
        size_height: 16,
        size_width: 11,
        size_depth: 3.6,
        size_units: "inches ",
        matches_specs: null,
        spec: [
          {
            id: "PIHKeqLET6"
          }
        ],
        reddit_all_time_count: 290,
        reddit_week_count: 11,
        reddit_day_count: 0,
        historical_low_price: 52.97,
        historical_low_date: {
          $date: "2019-11-26T12:01:58.128Z"
        }
      },
      {
        id: "A38ipJ48QE",
        name: "Galaxy Trucker",
        year_published: 2007,
        min_players: 2,
        max_players: 4,
        min_playtime: 60,
        max_playtime: 90,
        min_age: 14,
        description:
          "Corporation Incorporated is an interplanetary construction firm that builds sewer systems and low-income housing on the less-developed planets of the Galaxy. For years, Corp Inc. has tottered on the brink of bankruptcy: transporting building materials to the edge of the Galaxy, where the need for their services is greatest, is a risky business.<br />\r\n<br />\r\nThe company was saved by a few visionaries on the board of directors. Instead of shipping materials to the Periphery, they reasoned, why not build the materials into spacecraft and let them ship themselves? Furthermore, why hire pilots if there are nut-cases who will do it for free?<br />\r\n<br />\r\nThat's where you come in. Just sign the contract, and you gain unrestricted access to a Corp Inc. Warehouse. Build your own space ship from the available prefabricated components, and fly it to the Periphery. Of course, you may have to eat a loss, but any profits you make along the way are yours to keep, and Corporation Incorporated will pay you a bonus for quick delivery.<br />\r\n<br />\r\nIt's possible that you will end up with an insurmountable debt and finish your days panhandling on the streets of Deneb III, but if Lady Luck should smile upon you, you just might find yourself among the 10 billion richest people in the Galaxy!",
        description_preview:
          "Corporation Incorporated is an interplanetary construction firm that builds sewer systems and low-income housing on the less-developed planets of the Galaxy. For years, Corp Inc. has tottered on the brink of bankruptcy: transporting building materials to the edge of the Galaxy, where the need for their services is greatest, is a risky business. \r\n \r\nThe company was saved by a few visionaries on the board of directors. Instead of shipping materials to the Periphery, they reasoned, why not build the materials into spacecraft and let them ship themselves? Furthermore, why hire pilots if there are nut-cases who will do it for free? \r\n \r\nThat's where you come in. Just sign the contract, and you gain unrestricted access to a Corp Inc. Warehouse. Build your own space ship from the available prefabricated components, and fly it to the Periphery. Of course, you may have to eat a loss, but any profits you make along the way are yours to keep, and Corporation Incorporated will pay you a bonus for quick delivery. \r\n \r\nIt's possible that you will end up with an insurmountable debt and finish your days panhandling on the streets of Deneb III, but if Lady Luck should smile upon you, you just might find yourself among the 10 billion richest people in the Galaxy!",
        image_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254997948-517JqXFm1TL.jpg",
        thumb_url:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254997948-517JqXFm1TL.jpg",
        images: {
          thumb:
            "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254997948-517JqXFm1TL.jpg",
          small:
            "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254997948-517JqXFm1TL.jpg",
          medium:
            "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254997948-517JqXFm1TL.jpg",
          large:
            "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254997948-517JqXFm1TL.jpg",
          original:
            "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254997948-517JqXFm1TL.jpg"
        },
        url:
          "https://www.boardgameatlas.com/search/game/A38ipJ48QE/galaxy-trucker",
        price: "41.99",
        msrp: "59.95",
        discount: "0.30",
        primary_publisher: "Czech Games Edition",
        publishers: ["Czech Games Edition"],
        mechanics: [
          {
            id: "R0bGq4cAl4"
          },
          {
            id: "BbTMRkwL0b"
          },
          {
            id: "24FWssBC3o"
          },
          {
            id: "DEvPj5twid"
          },
          {
            id: "8PN2HE86wg"
          }
        ],
        categories: [
          {
            id: "TYnxiuiI3X"
          },
          {
            id: "WVMOS3s2pb"
          },
          {
            id: "3B3QpKvXD3"
          },
          {
            id: "CWYOF9xu7O"
          }
        ],
        designers: [" Vlaada Chvátil"],
        developers: [],
        artists: ["Tomáš Kučerovský", "Radim Pech"],
        names: ["Galaxy Trucker"],
        num_user_ratings: 138,
        average_user_rating: 3.3569676700111497,
        official_url:
          "https://czechgames.com/en/galaxy-trucker/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        rules_url:
          "https://czechgames.com/files/rules/galaxy-trucker-rules-en.pdf",
        weight_amount: 3.7,
        weight_units: "lbs",
        size_height: 9,
        size_width: 3,
        size_depth: 12.6,
        size_units: "inches ",
        matches_specs: null,
        spec: [],
        reddit_all_time_count: 288,
        reddit_week_count: 8,
        reddit_day_count: 2,
        historical_low_price: 35.94,
        historical_low_date: {
          $date: "2019-11-21T04:23:24.348Z"
        }
      }
    ]
  });
});

app.listen(process.env.PORT || 3200, () => {
  console.log("Server started");
});
