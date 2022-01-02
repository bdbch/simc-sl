exports.getLeather = async (page) => {
  return {
    chest: await getChest(page),
    feet: await getFeet(page),
    hands: await getHands(page),
    head: await getHead(page),
    legs: await getLegs(page),
    shoulders: await getShoulders(page),
    waist: await getWaist(page),
    wrists: await getWrists(page),
  };
};

const getChest = async (page) => {
  const content = await page.evaluate(async () => {
    let table = document.querySelectorAll("#guide-body table.grid")[16];

    // scroll to table
    const offset = table.offsetTop;
    window.scrollTo(0, offset);

    let rows = [...table.querySelectorAll("tr")];
    let items = `# Leather Chest\n#\n\n`;

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
        itemString += `chest=,id=${id},ilevel=246,bonus_id=7359/6652/6652`;

        items += `${itemString}\n\n`;
      }
    }

    items += `#\n# ---------------\n\n`;

    return items;
  });

  return content;
};

const getFeet = async (page) => {
  const content = await page.evaluate(async () => {
    let table = document.querySelectorAll("#guide-body table.grid")[17];

    // scroll to table
    const offset = table.offsetTop;
    window.scrollTo(0, offset);

    let rows = [...table.querySelectorAll("tr")];
    let items = `# Leather Feet\n#\n\n`;

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
        itemString += `feet=,id=${id},ilevel=246,bonus_id=7359/6652/6652`;

        items += `${itemString}\n\n`;
      }
    }

    items += `#\n# ---------------\n\n`;

    return items;
  });

  return content;
};

const getHands = async (page) => {
  const content = await page.evaluate(async () => {
    let table = document.querySelectorAll("#guide-body table.grid")[18];

    // scroll to table
    const offset = table.offsetTop;
    window.scrollTo(0, offset);

    let rows = [...table.querySelectorAll("tr")];
    let items = `# Leather Hands\n#\n\n`;

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
        itemString += `hands=,id=${id},ilevel=246,bonus_id=7359/6652/6652`;

        items += `${itemString}\n\n`;
      }
    }

    items += `#\n# ---------------\n\n`;

    return items;
  });

  return content;
};

const getHead = async (page) => {
  const content = await page.evaluate(async () => {
    let table = document.querySelectorAll("#guide-body table.grid")[19];

    // scroll to table
    const offset = table.offsetTop;
    window.scrollTo(0, offset);

    let rows = [...table.querySelectorAll("tr")];
    let items = `# Leather Head\n#\n\n`;

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
        itemString += `head=,id=${id},ilevel=246,bonus_id=7359/6652/6652`;

        items += `${itemString}\n\n`;
      }
    }

    items += `#\n# ---------------\n\n`;

    return items;
  });

  return content;
};

const getLegs = async (page) => {
  const content = await page.evaluate(async () => {
    let table = document.querySelectorAll("#guide-body table.grid")[20];

    // scroll to table
    const offset = table.offsetTop;
    window.scrollTo(0, offset);

    let rows = [...table.querySelectorAll("tr")];
    let items = `# Leather Legs\n#\n\n`;

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
        itemString += `legs=,id=${id},ilevel=246,bonus_id=7359/6652/6652`;

        items += `${itemString}\n\n`;
      }
    }

    items += `#\n# ---------------\n\n`;

    return items;
  });

  return content;
};

const getShoulders = async (page) => {
  const content = await page.evaluate(async () => {
    let table = document.querySelectorAll("#guide-body table.grid")[21];

    // scroll to table
    const offset = table.offsetTop;
    window.scrollTo(0, offset);

    let rows = [...table.querySelectorAll("tr")];
    let items = `# Leather Shoulders\n#\n\n`;

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
        itemString += `shoulders=,id=${id},ilevel=246,bonus_id=7359/6652/6652`;

        items += `${itemString}\n\n`;
      }
    }

    items += `#\n# ---------------\n\n`;

    return items;
  });

  return content;
};

const getWaist = async (page) => {
  const content = await page.evaluate(async () => {
    let table = document.querySelectorAll("#guide-body table.grid")[22];

    // scroll to table
    const offset = table.offsetTop;
    window.scrollTo(0, offset);

    let rows = [...table.querySelectorAll("tr")];
    let items = `# Leather Waist\n#\n\n`;

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
        itemString += `waist=,id=${id},ilevel=246,bonus_id=7359/6652/6652`;

        items += `${itemString}\n\n`;
      }
    }

    items += `#\n# ---------------\n\n`;

    return items;
  });

  return content;
};

const getWrists = async (page) => {
  const content = await page.evaluate(async () => {
    let table = document.querySelectorAll("#guide-body table.grid")[23];

    // scroll to table
    const offset = table.offsetTop;
    window.scrollTo(0, offset);

    let rows = [...table.querySelectorAll("tr")];
    let items = `# Leather Wrists\n#\n\n`;

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
        itemString += `wrists=,id=${id},ilevel=246,bonus_id=7359/6652/6652`;

        items += `${itemString}\n\n`;
      }
    }

    items += `#\n# ---------------\n\n`;

    return items;
  });

  return content;
};
