exports.get1HDungeonAgilityWeapons = async (page) => {
  const content = await page.evaluate(async () => {
    let table = document.querySelectorAll("#guide-body table.grid")[40];

    // scroll to table
    const offset = table.offsetTop;
    window.scrollTo(0, offset);

    let rows = [...table.querySelectorAll("tr")];
    let items = `# 1H Agility Weapons\n#\n\n`;

    for (row of rows) {
      let itemString = "";
      const itemName = row.querySelector("a.q3.icontiny");

      if (itemName) {
        const dungeon = row.querySelector("td:nth-child(5)");

        itemString += `copy="${itemName.innerText
          .trim()
          .replace(",", "")} (${dungeon.innerText.trim()})"\n`;

        const url = itemName.href;

        // get the ID from the URL with regex
        const id = url.match(/item=(\d+)/)[1];
        itemString += `main_hand=,id=${id},ilevel=246,bonus_id=7359/6652/6652`;

        items += `${itemString}\n\n`;
      }
    }

    items += `#\n# ---------------\n\n`;
    items += `# 1H Agility Weapons (Offhand)\n#\n\n`;

    for (row of rows) {
      let itemString = "";
      const itemName = row.querySelector("a.q3.icontiny");

      if (itemName) {
        const dungeon = row.querySelector("td:nth-child(5)");

        itemString += `copy="${itemName.innerText
          .trim()
          .replace(",", "")} (${dungeon.innerText.trim()})"\n`;

        const url = itemName.href;

        // get the ID from the URL with regex
        const id = url.match(/item=(\d+)/)[1];
        itemString += `off_hand=,id=${id},ilevel=246,bonus_id=7359/6652/6652`;

        items += `${itemString}\n\n`;
      }
    }

    items += `#\n# ---------------\n\n`;

    return items;
  });

  return content;
};

exports.get2HDungeonAgilityWeapons = async (page) => {
  const content = await page.evaluate(async () => {
    let table = document.querySelectorAll("#guide-body table.grid")[41];

    // scroll to table
    const offset = table.offsetTop;
    window.scrollTo(0, offset);

    let rows = [...table.querySelectorAll("tr")];
    let items = `# 2H Agility Weapons\n#\n\n`;

    for (row of rows) {
      let itemString = "";
      const itemName = row.querySelector("a.q3.icontiny");

      if (itemName) {
        const dungeon = row.querySelector("td:nth-child(5)");

        itemString += `copy="${itemName.innerText
          .trim()
          .replace(",", "")} (${dungeon.innerText.trim()})"\n`;

        const url = itemName.href;

        // get the ID from the URL with regex
        const id = url.match(/item=(\d+)/)[1];
        itemString += `main_hand=,id=${id},ilevel=246,bonus_id=7359/6652/6652`;

        items += `${itemString}\n\n`;
      }
    }

    items += `#\n# ---------------\n\n`;
    items += `# 2H Agility Weapons (Offhand)\n#\n\n`;

    for (row of rows) {
      let itemString = "";
      const itemName = row.querySelector("a.q3.icontiny");

      if (itemName) {
        const dungeon = row.querySelector("td:nth-child(5)");

        itemString += `copy="${itemName.innerText
          .trim()
          .replace(",", "")} (${dungeon.innerText.trim()})"\n`;

        const url = itemName.href;

        // get the ID from the URL with regex
        const id = url.match(/item=(\d+)/)[1];
        itemString += `off_hand=,id=${id},ilevel=246,bonus_id=7359/6652/6652`;

        items += `${itemString}\n\n`;
      }
    }

    items += `#\n# ---------------\n\n`;

    return items;
  });

  return content;
};

exports.getRangedDungeonAgilityWeapons = async (page) => {
  const content = await page.evaluate(async () => {
    let table = document.querySelectorAll("#guide-body table.grid")[42];

    // scroll to table
    const offset = table.offsetTop;
    window.scrollTo(0, offset);

    let rows = [...table.querySelectorAll("tr")];
    let items = `# Ranged Agility Weapons\n#\n\n`;

    for (row of rows) {
      let itemString = "";
      const itemName = row.querySelector("a.q3.icontiny");

      if (itemName) {
        const dungeon = row.querySelector("td:nth-child(5)");

        itemString += `copy="${itemName.innerText
          .trim()
          .replace(",", "")} (${dungeon.innerText.trim()})"\n`;

        const url = itemName.href;

        // get the ID from the URL with regex
        const id = url.match(/item=(\d+)/)[1];
        itemString += `main_hand=,id=${id},ilevel=246,bonus_id=7359/6652/6652`;

        items += `${itemString}\n\n`;
      }
    }

    items += `#\n# ---------------`;

    return items;
  });

  return content;
};

exports.get1HDungeonIntWeapons = async (page) => {
  const content = await page.evaluate(async () => {
    let table = document.querySelectorAll("#guide-body table.grid")[43];

    // scroll to table
    const offset = table.offsetTop;
    window.scrollTo(0, offset);

    let rows = [...table.querySelectorAll("tr")];
    let items = `# 1H Int Weapons\n#\n\n`;

    for (row of rows) {
      let itemString = "";
      const itemName = row.querySelector("a.q3.icontiny");

      if (itemName) {
        const dungeon = row.querySelector("td:nth-child(5)");

        itemString += `copy="${itemName.innerText
          .trim()
          .replace(",", "")} (${dungeon.innerText.trim()})"\n`;

        const url = itemName.href;

        // get the ID from the URL with regex
        const id = url.match(/item=(\d+)/)[1];
        itemString += `main_hand=,id=${id},ilevel=246,bonus_id=7359/6652/6652`;

        items += `${itemString}\n\n`;
      }
    }

    items += `#\n# ---------------`;

    return items;
  });

  return content;
};

exports.get2HDungeonIntWeapons = async (page) => {
  const content = await page.evaluate(async () => {
    let table = document.querySelectorAll("#guide-body table.grid")[44];

    // scroll to table
    const offset = table.offsetTop;
    window.scrollTo(0, offset);

    let rows = [...table.querySelectorAll("tr")];
    let items = `# 2H Int Weapons\n#\n\n`;

    for (row of rows) {
      let itemString = "";
      const itemName = row.querySelector("a.q3.icontiny");

      if (itemName) {
        const dungeon = row.querySelector("td:nth-child(5)");

        itemString += `copy="${itemName.innerText
          .trim()
          .replace(",", "")} (${dungeon.innerText.trim()})"\n`;

        const url = itemName.href;

        // get the ID from the URL with regex
        const id = url.match(/item=(\d+)/)[1];
        itemString += `main_hand=,id=${id},ilevel=246,bonus_id=7359/6652/6652`;

        items += `${itemString}\n\n`;
      }
    }

    items += `#\n# ---------------`;

    return items;
  });

  return content;
};

exports.get1HDungeonStrengthWeapons = async (page) => {
  const content = await page.evaluate(async () => {
    let table = document.querySelectorAll("#guide-body table.grid")[45];

    // scroll to table
    const offset = table.offsetTop;
    window.scrollTo(0, offset);

    let rows = [...table.querySelectorAll("tr")];
    let items = `# 1H Strength Weapons\n#\n\n`;

    for (row of rows) {
      let itemString = "";
      const itemName = row.querySelector("a.q3.icontiny");

      if (itemName) {
        const dungeon = row.querySelector("td:nth-child(5)");

        itemString += `copy="${itemName.innerText
          .trim()
          .replace(",", "")} (${dungeon.innerText.trim()})"\n`;

        const url = itemName.href;

        // get the ID from the URL with regex
        const id = url.match(/item=(\d+)/)[1];
        itemString += `main_hand=,id=${id},ilevel=246,bonus_id=7359/6652/6652`;

        items += `${itemString}\n\n`;
      }
    }

    items += `#\n# ---------------\n\n`;
    items += `# 1H Strength Weapons (Offhand)\n#\n\n`;

    for (row of rows) {
      let itemString = "";
      const itemName = row.querySelector("a.q3.icontiny");

      if (itemName) {
        const dungeon = row.querySelector("td:nth-child(5)");

        itemString += `copy="${itemName.innerText
          .trim()
          .replace(",", "")} (${dungeon.innerText.trim()})"\n`;

        const url = itemName.href;

        // get the ID from the URL with regex
        const id = url.match(/item=(\d+)/)[1];
        itemString += `off_hand=,id=${id},ilevel=246,bonus_id=7359/6652/6652`;

        items += `${itemString}\n\n`;
      }
    }

    items += `#\n# ---------------\n\n`;

    return items;
  });

  return content;
};

exports.get2HDungeonStrengthWeapons = async (page) => {
  const content = await page.evaluate(async () => {
    let table = document.querySelectorAll("#guide-body table.grid")[46];

    // scroll to table
    const offset = table.offsetTop;
    window.scrollTo(0, offset);

    let rows = [...table.querySelectorAll("tr")];
    let items = `# 2H Strength Weapons\n#\n\n`;

    for (row of rows) {
      let itemString = "";
      const itemName = row.querySelector("a.q3.icontiny");

      if (itemName) {
        const dungeon = row.querySelector("td:nth-child(5)");

        itemString += `copy="${itemName.innerText
          .trim()
          .replace(",", "")} (${dungeon.innerText.trim()})"\n`;

        const url = itemName.href;

        // get the ID from the URL with regex
        const id = url.match(/item=(\d+)/)[1];
        itemString += `main_hand=,id=${id},ilevel=246,bonus_id=7359/6652/6652`;

        items += `${itemString}\n\n`;
      }
    }

    items += `#\n# ---------------\n\n`;
    items += `# 2H Strength Weapons (Offhand)\n#\n\n`;

    for (row of rows) {
      let itemString = "";
      const itemName = row.querySelector("a.q3.icontiny");

      if (itemName) {
        const dungeon = row.querySelector("td:nth-child(5)");

        itemString += `copy="${itemName.innerText
          .trim()
          .replace(",", "")} (${dungeon.innerText.trim()})"\n`;

        const url = itemName.href;

        // get the ID from the URL with regex
        const id = url.match(/item=(\d+)/)[1];
        itemString += `off_hand=,id=${id},ilevel=246,bonus_id=7359/6652/6652`;

        items += `${itemString}\n\n`;
      }
    }

    items += `#\n# ---------------\n\n`;

    return items;
  });

  return content;
};

exports.getDungeonOffhands = async (page) => {
  const content = await page.evaluate(async () => {
    let table = document.querySelectorAll("#guide-body table.grid")[47];

    // scroll to table
    const offset = table.offsetTop;
    window.scrollTo(0, offset);

    let rows = [...table.querySelectorAll("tr")];
    let items = `# Offhands\n#\n\n`;

    for (row of rows) {
      let itemString = "";
      const itemName = row.querySelector("a.q3.icontiny");

      if (itemName) {
        const dungeon = row.querySelector("td:nth-child(5)");

        itemString += `copy="${itemName.innerText
          .trim()
          .replace(",", "")} (${dungeon.innerText.trim()})"\n`;

        const url = itemName.href;

        // get the ID from the URL with regex
        const id = url.match(/item=(\d+)/)[1];
        itemString += `off_hand=,id=${id},ilevel=246,bonus_id=7359/6652/6652`;

        items += `${itemString}\n\n`;
      }
    }

    items += `#\n# ---------------\n\n`;

    return items;
  });

  return content;
};
