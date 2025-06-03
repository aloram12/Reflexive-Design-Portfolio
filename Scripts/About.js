  const tileData = {
    "Malcolm Todd": {
      "name": "Malcolm Todd",
      "img": "./Media/Photos/Personal/AboutMe/Sweet-Boy-Album.jpg",
      "description": "I heard '4Me4Me' and it was just so cute and sweet, I was suprised to see that most of his other songs also lovey dovey or talking about the complexities of love or self-doubt."
    },
    "tpazolite": {
      "name": "T+Pazolite",
      "img": "./Media/Photos/Personal/AboutMe/t+pazolite.jpeg",
      "description": "I grew up listening to Avicii and Deadmau5 and that led me to find other sub-genres of techno and EDM. T+pazolite is a japanese hardcore producer known for high–energy music tracks. Ideal for rhythm games and latenight cramming sessions."
    },
    "Atarashii Gakko": {
        "name": "Atarashii Gakko (新しい学校のリーダーズ)",
        "img": "./Media/Photos/Personal/AboutMe/Atarashii+Gakko.jpg",
        "description": "I was initially pulled in by their song 'Pineapple Kryptonite' because it sounded like a EDM song, but their other songs are actually very cute and high energy while challenging social norms."
      },
    "Geordie Greep": {
      "name": "Geordie Greep",
      "img": "./Media/Photos/Personal/AboutMe/geordie-greep.jpg",
      "description": "I got 'Holy, Holy' in my recommended songs and it sounded like a mix of a couple genres but his voice and the rhythm of the song is was got me to listen to his whole discography. His lyrics are different from most which is something that I always appreciate most. "
    },
    "Wacca": {
      "name": "Wacca",
      "img": "./Media/Photos/Personal/AboutMe/Wacca.jpg",
      "description": "WACCA is an arcade rhythm game made in Japan but can be found at arcades like Round1 or at conventions. I love rhythm games, but it's so rare that the games song selection includes anything that I actually listen to. WACCA has anime and video game music selection but I always play from the 'Hardcore Tano-C' category (Japanese EDM!!)"
    },
    "soulcalibur": {
      "name": "Soul Calibur Series",
      "img": "./Media/Photos/Personal/AboutMe/Soul-Calibur.jpg",
      "description": "When I was younger, my family and I would frequently visit a pho shop that had a SC2  game cabinet in their waiting area. I tried it out and fell in love with Talims' move set. I like being competitive when it comes to games so testing my memory, timing, and moveset flexibility against others is fun. I want to learn more popular fighting games like Guilty Gear Strive or Street Fighter so I can play at the local tournaments :)"
    },
    "Overwatch": {
      "name": "Overwatch",
      "img": "./Media/Photos/Personal/AboutMe/Overwatch.jpg",
      "description": "For whatever reason I can't stop playing this game. I was obsessed with Overwatch when it came out and I'll still play competitive matches for days when I get the chance. When Stadium dropped all I wanted to do was play matches to rank up. "
    },
    "Doom": {
      "name": "Doom 1-3",
      "img": "./Media/Photos/Personal/AboutMe/Doom3.jpg",
      "description": "I had heard bits and pieces about the Doom series, and when I found it for cheap at a goodwill I knew I had to find out why it was still talked about. I absolutely loved the horror elements and storytelling throughout my playthrough. I tried 1 and 2 and enjoyed those too. It was interesting to learn about the social and cultural impact that the game had on everyone both inside and outside the gaming industry."
    },
    "Petsitting": {
      "name": "Petsitting",
      "img": "./Media/Photos/Personal/AboutMe/StellaCat.jpg",
      "description": "In between my gap year from community college and studying at UWT, I knew that I wanted to have some way to work with animals every now and then. So I chose petsitting! I have petsit for 3 chickens, a turtle, a parakeet, dogs, and kitties. I'm waiting for a ferret owner to contact me." 
    },
    "Concerts": {
      "name": "Concerts",
      "img": "./Media/Photos/Personal/AboutMe/HanabieConcert.jpeg",
      "description": "I like going to concerts for new artists and groups that aren't too big yet because 1) Cheap tickets and 2) You can still get a good view at the venues they book at. The tile pic is from a HANABIE concert which was pretty fun" 
    },
    "Projects": {
      "name": "Projects",
      "img": "./Media/Photos/Personal/AboutMe/GoogleSheetProject3.png",
      "description": "I like to make digital projects that I can personally use, like a planner sheet for my goodnotes app on my tablet, or a workout tracker on google sheets, budget calculators and other useful things. I hope to use the skills I've learned to open a etsy shop in the future." 
    },
    "Thrifting": {
      "name": "Thrifting & Shopping",
      "img": "./Media/Photos/Personal/AboutMe/Zenobia Camera.jpg",
      "description": "I love to shop but what I love more is finding really cool items for a really low price. Bonus points if its something really valuable or useful. The tile pic shows a Zenobia C camera that was made in Japan in the 1950's. I bought it for 5 bucks! " 
    }
  };

  function updateTile(key, category) {
    const data = tileData[key];
    if (!data) return;
  
    document.getElementById("tileName").textContent = data.name;
    document.getElementById("tileImage").src = data.img;
    document.getElementById("tileImage").alt = data.name;
    document.getElementById("tileDescription").textContent = data.description;
  
   
  }

  window.updateTile = updateTile;
