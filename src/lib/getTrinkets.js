exports.getDungeonAgilityTrinkets = async (page) => {
  const content = await page.evaluate(async () => {
    let table = document.querySelectorAll("#guide-body table.grid")[2];

    // scroll to table
    const offset = table.offsetTop;
    window.scrollTo(0, offset);

    let rows = [...table.querySelectorAll("tr")];
    let items = `# Agility Trinkets\n#\n\n`;

    for (row of rows) {
      let itemString = "";
      const itemName = row.querySelector("a.q3.icontiny");

      if (itemName) {
        const dungeon = row.querySelector("td:nth-child(4)");

        itemString += `copy="${itemName.innerText
          .trim()
          .replace(",", "")} (${dungeon.innerText.trim()})"\n`;

        const url = itemName.href;

        // get the ID from the URL with regex
        const id = url.match(/item=(\d+)/)[1];
        itemString += `trinket1=,id=${id},ilevel=246,bonus_id=7359/6652/6652`;

        items += `${itemString}\n\n`;
      }
    }

    items += `#\n# ---------------\n\n`;

    return items;
  });

  return content;
};

exports.getDungeonHasteTrinkets = async (page) => {
  const content = await page.evaluate(async () => {
    let table = document.querySelectorAll("#guide-body table.grid")[3];

    // scroll to table
    const offset = table.offsetTop;
    window.scrollTo(0, offset);

    let rows = [...table.querySelectorAll("tr")];
    let items = `# Agility Trinkets\n#\n\n`;

    for (row of rows) {
      let itemString = "";
      const itemName = row.querySelector("a.q3.icontiny");

      if (itemName) {
        const dungeon = row.querySelector("td:nth-child(4)");

        itemString += `copy="${itemName.innerText
          .trim()
          .replace(",", "")} (${dungeon.innerText.trim()})"\n`;

        const url = itemName.href;

        // get the ID from the URL with regex
        const id = url.match(/item=(\d+)/)[1];
        itemString += `trinket1=,id=${id},ilevel=246,bonus_id=7359/6652/6652`;

        items += `${itemString}\n\n`;
      }
    }

    items += `#\n# ---------------\n\n`;

    return items;
  });

  return content;
};

exports.getDungeonIntTrinkets = async (page) => {
  const content = await page.evaluate(async () => {
    let table = document.querySelectorAll("#guide-body table.grid")[4];

    // scroll to table
    const offset = table.offsetTop;
    window.scrollTo(0, offset);

    let rows = [...table.querySelectorAll("tr")];
    let items = `# Agility Trinkets\n#\n\n`;

    for (row of rows) {
      let itemString = "";
      const itemName = row.querySelector("a.q3.icontiny");

      if (itemName) {
        const dungeon = row.querySelector("td:nth-child(4)");

        itemString += `copy="${itemName.innerText
          .trim()
          .replace(",", "")} (${dungeon.innerText.trim()})"\n`;

        const url = itemName.href;

        // get the ID from the URL with regex
        const id = url.match(/item=(\d+)/)[1];
        itemString += `trinket1=,id=${id},ilevel=246,bonus_id=7359/6652/6652`;

        items += `${itemString}\n\n`;
      }
    }

    items += `#\n# ---------------\n\n`;

    return items;
  });

  return content;
};

exports.getDungeonStaminaTrinkets = async (page) => {
  const content = await page.evaluate(async () => {
    let table = document.querySelectorAll("#guide-body table.grid")[5];

    // scroll to table
    const offset = table.offsetTop;
    window.scrollTo(0, offset);

    let rows = [...table.querySelectorAll("tr")];
    let items = `# Stamina Trinkets\n#\n\n`;

    for (row of rows) {
      let itemString = "";
      const itemName = row.querySelector("a.q3.icontiny");

      if (itemName) {
        const dungeon = row.querySelector("td:nth-child(4)");

        itemString += `copy="${itemName.innerText
          .trim()
          .replace(",", "")} (${dungeon.innerText.trim()})"\n`;

        const url = itemName.href;

        // get the ID from the URL with regex
        const id = url.match(/item=(\d+)/)[1];
        itemString += `trinket1=,id=${id},ilevel=246,bonus_id=7359/6652/6652`;

        items += `${itemString}\n\n`;
      }
    }

    items += `#\n# ---------------\n\n`;

    return items;
  });

  return content;
};

exports.getDungeonStrngthTrinkets = async (page) => {
  const content = await page.evaluate(async () => {
    let table = document.querySelectorAll("#guide-body table.grid")[6];

    // scroll to table
    const offset = table.offsetTop;
    window.scrollTo(0, offset);

    let rows = [...table.querySelectorAll("tr")];
    let items = `# Strength Trinkets\n#\n\n`;

    for (row of rows) {
      let itemString = "";
      const itemName = row.querySelector("a.q3.icontiny");

      if (itemName) {
        const dungeon = row.querySelector("td:nth-child(4)");

        itemString += `copy="${itemName.innerText
          .trim()
          .replace(",", "")} (${dungeon.innerText.trim()})"\n`;

        const url = itemName.href;

        // get the ID from the URL with regex
        const id = url.match(/item=(\d+)/)[1];
        itemString += `trinket1=,id=${id},ilevel=246,bonus_id=7359/6652/6652`;

        items += `${itemString}\n\n`;
      }
    }

    items += `#\n# ---------------\n\n`;

    return items;
  });

  return content;
};
