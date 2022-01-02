const { get1HDungeonAgilityWeapons } = require("./lib/getDungeonWeapons");

const { mkdirSync, writeFileSync, existsSync, rmdirSync } = require("fs");
const { getData } = require("./lib/getData");

(async () => {
  if (existsSync("data")) {
    rmdirSync("data", { recursive: true });
  }
  if (!existsSync("data")) {
    console.log("creating data directory");
    mkdirSync("data");
  }

  if (!existsSync("data/dungeons")) {
    console.log("creating dungeons directory");
    mkdirSync("data/dungeons");
  }

  if (!existsSync("data/dungeons/weapons")) {
    console.log("creating dungeon weapons directory");
    mkdirSync("data/dungeons/weapons");
  }

  if (!existsSync("data/dungeons/trinkets")) {
    console.log("creating dungeon trinkets directory");
    mkdirSync("data/dungeons/trinkets");
  }

  if (!existsSync("data/dungeons/cloth")) {
    console.log("creating dungeon cloth directory");
    mkdirSync("data/dungeons/cloth");
  }

  if (!existsSync("data/dungeons/leather")) {
    console.log("creating dungeon leather directory");
    mkdirSync("data/dungeons/leather");
  }

  if (!existsSync("data/dungeons/mail")) {
    console.log("creating dungeon mail directory");
    mkdirSync("data/dungeons/mail");
  }

  if (!existsSync("data/dungeons/plate")) {
    console.log("creating dungeon plate directory");
    mkdirSync("data/dungeons/plate");
  }

  const data = await getData();

  writeFileSync(
    "data/dungeons/weapons/1h_agility.txt",
    data.weapons.onehanded_agility
  );
  writeFileSync(
    "data/dungeons/weapons/2h_agility.txt",
    data.weapons.twohanded_agility
  );
  writeFileSync(
    "data/dungeons/weapons/ranged_agility.txt",
    data.weapons.ranged_agility
  );
  writeFileSync("data/dungeons/weapons/1h_int.txt", data.weapons.onehanded_int);
  writeFileSync("data/dungeons/weapons/2h_int.txt", data.weapons.twohanded_int);
  writeFileSync(
    "data/dungeons/weapons/1h_strength.txt",
    data.weapons.onehanded_strength
  );
  writeFileSync(
    "data/dungeons/weapons/2h_strength.txt",
    data.weapons.twohanded_strength
  );
  writeFileSync("data/dungeons/weapons/offhand.txt", data.weapons.offhand);

  writeFileSync("data/dungeons/rings.txt", data.rings);
  writeFileSync("data/dungeons/necks.txt", data.necks);
  writeFileSync("data/dungeons/cloaks.txt", data.cloaks);

  writeFileSync("data/dungeons/trinkets/agility.txt", data.agility_trinkets);
  writeFileSync("data/dungeons/trinkets/haste.txt", data.haste_trinkets);
  writeFileSync("data/dungeons/trinkets/int.txt", data.int_trinkets);
  writeFileSync("data/dungeons/trinkets/stamina.txt", data.stamina_trinkets);
  writeFileSync("data/dungeons/trinkets/strength.txt", data.strength_trinkets);

  // cloth
  writeFileSync("data/dungeons/cloth/chest.txt", data.cloth.chest);
  writeFileSync("data/dungeons/cloth/feet.txt", data.cloth.feet);
  writeFileSync("data/dungeons/cloth/hands.txt", data.cloth.hands);
  writeFileSync("data/dungeons/cloth/head.txt", data.cloth.head);
  writeFileSync("data/dungeons/cloth/legs.txt", data.cloth.legs);
  writeFileSync("data/dungeons/cloth/shoulders.txt", data.cloth.shoulders);
  writeFileSync("data/dungeons/cloth/waist.txt", data.cloth.waist);
  writeFileSync("data/dungeons/cloth/wrists.txt", data.cloth.wrists);

  // leather
  writeFileSync("data/dungeons/leather/chest.txt", data.leather.chest);
  writeFileSync("data/dungeons/leather/feet.txt", data.leather.feet);
  writeFileSync("data/dungeons/leather/hands.txt", data.leather.hands);
  writeFileSync("data/dungeons/leather/head.txt", data.leather.head);
  writeFileSync("data/dungeons/leather/legs.txt", data.leather.legs);
  writeFileSync("data/dungeons/leather/shoulders.txt", data.leather.shoulders);
  writeFileSync("data/dungeons/leather/waist.txt", data.leather.waist);
  writeFileSync("data/dungeons/leather/wrists.txt", data.leather.wrists);

  // mail
  writeFileSync("data/dungeons/mail/chest.txt", data.mail.chest);
  writeFileSync("data/dungeons/mail/feet.txt", data.mail.feet);
  writeFileSync("data/dungeons/mail/hands.txt", data.mail.hands);
  writeFileSync("data/dungeons/mail/head.txt", data.mail.head);
  writeFileSync("data/dungeons/mail/legs.txt", data.mail.legs);
  writeFileSync("data/dungeons/mail/shoulders.txt", data.mail.shoulders);
  writeFileSync("data/dungeons/mail/waist.txt", data.mail.waist);
  writeFileSync("data/dungeons/mail/wrists.txt", data.mail.wrists);

  // plate
  writeFileSync("data/dungeons/plate/chest.txt", data.plate.chest);
  writeFileSync("data/dungeons/plate/feet.txt", data.plate.feet);
  writeFileSync("data/dungeons/plate/hands.txt", data.plate.hands);
  writeFileSync("data/dungeons/plate/head.txt", data.plate.head);
  writeFileSync("data/dungeons/plate/legs.txt", data.plate.legs);
  writeFileSync("data/dungeons/plate/shoulders.txt", data.plate.shoulders);
  writeFileSync("data/dungeons/plate/waist.txt", data.plate.waist);
  writeFileSync("data/dungeons/plate/wrists.txt", data.plate.wrists);

  process.exit(0);
})();
