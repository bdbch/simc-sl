const puppeteer = require("puppeteer");
const { getDungeonCloaks } = require("./getCloaks");
const { getCloth } = require("./getCloth");
const {
  get1HDungeonAgilityWeapons,
  get2HDungeonAgilityWeapons,
  getRangedDungeonAgilityWeapons,
  get1HDungeonIntWeapons,
  get2HDungeonIntWeapons,
  get1HDungeonStrengthWeapons,
  get2HDungeonStrengthWeapons,
  getDungeonOffhands,
} = require("./getDungeonWeapons");
const { getLeather } = require("./getLeather");
const { getMail } = require("./getMail");
const { getDungeonNecks } = require("./getNecks");
const { getPlate } = require("./getPlate");
const { getDungeonRings } = require("./getRings");
const {
  getDungeonAgilityTrinkets,
  getDungeonHasteTrinkets,
  getDungeonIntTrinkets,
  getDungeonStaminaTrinkets,
  getDungeonStrngthTrinkets,
} = require("./getTrinkets");

exports.getData = async () => {
  const url = `https://www.wowhead.com/guides/shadowlands-dungeon-loot-guide-gear-armor-weapons-conduits-legendary-recipes`;

  const browser = await puppeteer.launch({
    defaultViewport: { width: 1920, height: 1080 },
    headless: true,
  });

  const page = await browser.newPage();
  await page.goto(url);

  return {
    weapons: {
      onehanded_agility: await get1HDungeonAgilityWeapons(page),
      twohanded_agility: await get2HDungeonAgilityWeapons(page),
      ranged_agility: await getRangedDungeonAgilityWeapons(page),
      onehanded_int: await get1HDungeonIntWeapons(page),
      twohanded_int: await get2HDungeonIntWeapons(page),
      onehanded_strength: await get1HDungeonStrengthWeapons(page),
      twohanded_strength: await get2HDungeonStrengthWeapons(page),
      offhand: await getDungeonOffhands(page),
    },
    rings: await getDungeonRings(page),
    necks: await getDungeonNecks(page),
    agility_trinkets: await getDungeonAgilityTrinkets(page),
    haste_trinkets: await getDungeonHasteTrinkets(page),
    int_trinkets: await getDungeonIntTrinkets(page),
    stamina_trinkets: await getDungeonStaminaTrinkets(page),
    strength_trinkets: await getDungeonStrngthTrinkets(page),
    cloaks: await getDungeonCloaks(page),
    cloth: await getCloth(page),
    leather: await getLeather(page),
    mail: await getMail(page),
    plate: await getPlate(page),
  };

  await page.close();
  await browser.close();
};
