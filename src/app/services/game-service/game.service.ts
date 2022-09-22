
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  games = [
    {
      id: 521,
      title: "Diablo Immortal",
      thumbnail: "https://www.freetogame.com/g/521/thumbnail.jpg",
      short_description: "Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.",
      game_url: "https://www.freetogame.com/open/diablo-immortal",
      genre: "MMOARPG",
      platform: "PC (Windows)",
      publisher: "Blizzard Entertainment",
      developer: "Blizzard Entertainment",
      release_date: "2022-06-02",
      freetogame_profile_url: "https://www.freetogame.com/diablo-immortal"
    },
    {
      id: 517,
      title: "Lost Ark",
      thumbnail: "https://www.freetogame.com/g/517/thumbnail.jpg",
      short_description: "Smilegate’s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed.",
      game_url: "https://www.freetogame.com/open/lost-ark",
      genre: "ARPG",
      platform: "PC (Windows)",
      publisher: "Amazon Games",
      developer: "Smilegate RPG",
      release_date: "2022-02-11",
      freetogame_profile_url: "https://www.freetogame.com/lost-ark"
    },
    {
      id: 516,
      title: "PUBG: BATTLEGROUNDS",
      thumbnail: "https://www.freetogame.com/g/516/thumbnail.jpg",
      short_description: "Get into the action in one of the longest running battle royale games PUBG Battlegrounds.",
      game_url: "https://www.freetogame.com/open/pubg",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "KRAFTON, Inc.",
      developer: "KRAFTON, Inc.",
      release_date: "2022-01-12",
      freetogame_profile_url: "https://www.freetogame.com/pubg"
    },
    {
      id: 508,
      title: "Enlisted",
      thumbnail: "https://www.freetogame.com/g/508/thumbnail.jpg",
      short_description: "Get ready to command your own World War II military squad in Gaijin and Darkflow Software’s MMO squad-based shooter Enlisted. ",
      game_url: "https://www.freetogame.com/open/enlisted",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Gaijin Entertainment",
      developer: "Darkflow Software",
      release_date: "2021-04-08",
      freetogame_profile_url: "https://www.freetogame.com/enlisted"
    },
    {
      id: 345,
      title: "Forge of Empires",
      thumbnail: "https://www.freetogame.com/g/345/thumbnail.jpg",
      short_description: "A free to play 2D browser-based online strategy game, become the leader and raise your city.",
      game_url: "https://www.freetogame.com/open/forge-of-empires",
      genre: "Strategy",
      platform: "Web Browser",
      publisher: "InnoGames",
      developer: "InnoGames",
      release_date: "2012-04-17",
      freetogame_profile_url: "https://www.freetogame.com/forge-of-empires"
    },
    {
      id: 427,
      title: "Drakensang Online",
      thumbnail: "https://www.freetogame.com/g/427/thumbnail.jpg",
      short_description: "A free to play browser-based top-down hack-and-slash 3D MMORPG similar to games in the Diablo series.",
      game_url: "https://www.freetogame.com/open/drakensang-online",
      genre: "MMORPG",
      platform: "Web Browser",
      publisher: "Bigpoint",
      developer: "Bigpoint",
      release_date: "2011-08-08",
      freetogame_profile_url: "https://www.freetogame.com/drakensang-online"
    },
    {
      id: 326,
      title: "Shot Online",
      thumbnail: "https://www.freetogame.com/g/326/thumbnail.jpg",
      short_description: "A free to play Golfing MMO that any golf lover will enjoy to play!",
      game_url: "https://www.freetogame.com/open/shot-online",
      genre: "Sports",
      platform: "PC (Windows)",
      publisher: "GamesCampus",
      developer: "OnNet Co. Ltd.",
      release_date: "2004-11-30",
      freetogame_profile_url: "https://www.freetogame.com/shot-online"
    },
    {
      id: 327,
      title: "Everquest 2",
      thumbnail: "https://www.freetogame.com/g/327/thumbnail.jpg",
      short_description: "A free to play 3D fantasy MMORPG and the sequel to EverQuest.",
      game_url: "https://www.freetogame.com/open/everquest-2",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "Daybreak Games",
      developer: "Daybreak Games",
      release_date: "2004-11-08",
      freetogame_profile_url: "https://www.freetogame.com/everquest-2"
    },
    {
      id: 328,
      title: "Dofus",
      thumbnail: "https://www.freetogame.com/g/328/thumbnail.jpg",
      short_description: "A 2D MMORPG with tons of different classes and a tactical combat system.",
      game_url: "https://www.freetogame.com/open/dofus",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "Ankama Games",
      developer: "Ankama Games",
      release_date: "2004-09-01",
      freetogame_profile_url: "https://www.freetogame.com/dofus"
    },
    {
      id: 190,
      title: "Ryzom",
      thumbnail: "https://www.freetogame.com/g/190/thumbnail.jpg",
      short_description: "An MMORPG where players are immersed in a massive sandbox world.",
      game_url: "https://www.freetogame.com/open/ryzom",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "Winch Gate",
      developer: "Nevrax",
      release_date: "2004-09-19",
      freetogame_profile_url: "https://www.freetogame.com/ryzom"
    },
    {
      id: 329,
      title: "Kal Online",
      thumbnail: "https://www.freetogame.com/g/329/thumbnail.jpg",
      short_description: "A Korean Fantasy MMORPG developed by Inixsoft.",
      game_url: "https://www.freetogame.com/open/kalonline",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "Inisxoft",
      developer: "Inisxoft",
      release_date: "2004-06-11",
      freetogame_profile_url: "https://www.freetogame.com/kalonline"
    },
    {
      id: 330,
      title: "Lineage 2",
      thumbnail: "https://www.freetogame.com/g/330/thumbnail.jpg",
      short_description: "A 3D fantasy MMORPG with a strong emphasis on PvP.",
      game_url: "https://www.freetogame.com/open/lineage-2",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "NCSoft",
      developer: "NCSoft",
      release_date: "2004-04-27",
      freetogame_profile_url: "https://www.freetogame.com/lineage-2"
    },
    {
      id: 332,
      title: "Red Stone Online",
      thumbnail: "https://www.freetogame.com/g/332/thumbnail.jpg",
      short_description: "A free to play 2D old school isometric MMORPG similar to Diablo.",
      game_url: "https://www.freetogame.com/open/red-stone-online",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "L＆K CO., LTD",
      developer: "L＆K CO., LTD",
      release_date: "2003-10-06",
      freetogame_profile_url: "https://www.freetogame.com/red-stone-online"
    },
    {
      id: 334,
      title: "Mu Online",
      thumbnail: "https://www.freetogame.com/g/334/thumbnail.jpg",
      short_description: "A free to play Dungeon Crawler game like Diablo!",
      game_url: "https://www.freetogame.com/open/mu-online",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "Webzen",
      developer: "Webzen",
      release_date: "2003-10-06",
      freetogame_profile_url: "https://www.freetogame.com/mu-online"
    },
    {
      id: 18,
      title: "Second Life",
      thumbnail: "https://www.freetogame.com/g/18/thumbnail.jpg",
      short_description: "A free to play 3D online virtual world with a huge reputation! ",
      game_url: "https://www.freetogame.com/open/second-life",
      genre: "Social",
      platform: "PC (Windows)",
      publisher: "Linden Lab",
      developer: "Linden Lab",
      release_date: "2003-06-23",
      freetogame_profile_url: "https://www.freetogame.com/second-life"
    },
    {
      id: 335,
      title: "Ragnarok Online",
      thumbnail: "https://www.freetogame.com/g/335/thumbnail.jpg",
      short_description: "A popular fantasy MMORPG, back to the golden age of MMORPGs.",
      game_url: "https://www.freetogame.com/open/ragnarok-online",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "Gravity Interactive ",
      developer: "Gravity Interactive ",
      release_date: "2003-06-01",
      freetogame_profile_url: "https://www.freetogame.com/ragnarok-online"
    },
    {
      id: 17,
      title: "Entropia Universe",
      thumbnail: "https://www.freetogame.com/g/17/thumbnail.jpg",
      short_description: "A 3D MMO Multi Virtual World Real Cash Economy Experience with RPG elements. ",
      game_url: "https://www.freetogame.com/open/entropia-universe",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "MindArk",
      developer: "MindArk",
      release_date: "2003-01-30",
      freetogame_profile_url: "https://www.freetogame.com/entropia-universe"
    },
    {
      id: 432,
      title: "Habbo",
      thumbnail: "https://www.freetogame.com/g/432/thumbnail.jpg",
      short_description: "One of the largest and most popular Social MMO.",
      game_url: "https://www.freetogame.com/open/habbo",
      genre: "Social",
      platform: "Web Browser",
      publisher: "Sulake Corporation",
      developer: "Sulake Corporation",
      release_date: "2001-09-26",
      freetogame_profile_url: "https://www.freetogame.com/habbo"
    },
    {
      id: 336,
      title: "Anarchy Online",
      thumbnail: "https://www.freetogame.com/g/336/thumbnail.jpg",
      short_description: "A free to play Sci-Fi MMO that has withstood the test of time.",
      game_url: "https://www.freetogame.com/open/anarchy-online",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "Funcom",
      developer: "Funcom",
      release_date: "2001-06-27",
      freetogame_profile_url: "https://www.freetogame.com/anarchy-online"
    },
    {
      id: 433,
      title: "RuneScape",
      thumbnail: "https://www.freetogame.com/g/433/thumbnail.jpg",
      short_description: "A popular 3D browser MMORPG boasting a huge player base and 15 years of content.",
      game_url: "https://www.freetogame.com/open/runescape",
      genre: "MMORPG",
      platform: "PC (Windows), Web Browser",
      publisher: "Jagex",
      developer: "Jagex",
      release_date: "2001-01-04",
      freetogame_profile_url: "https://www.freetogame.com/runescape"
    }
  ]

  constructor(private http: HttpClient) { }

  getGames() {
    return this.games
    // return  axios.get('https://www.freetogame.com/api/games')
    // return this.http.get('https://www.freetogame.com/api/games')
    //   .pipe(map((res: any) => res))
  }


}
