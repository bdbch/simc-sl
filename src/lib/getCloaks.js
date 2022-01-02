exports.getDungeonCloaks = async (page) => {
  const content = await page.evaluate(async () => {
    let table = document.querySelectorAll("#guide-body table.grid")[7];

    // scroll to table
    const offset = table.offsetTop;
    window.scrollTo(0, offset);

    let rows = [...table.querySelectorAll("tr")];
    let items = `# Cloaks\n#\n\n`;

    for (row of rows) {
      let itemString = "";
      const itemName = row.querySelector("a.q3.icontiny");

      if (itemName) {
        const dungeon = row.querySelector("td:nth-child(3)");

        itemString += `copy="${itemName.innerText
          .trim()
          .replace(",", "")} (${dungeon.innerText.trim()})"\n`;

        const url = itemName.href;

        // get the ID from the URL with regex
        const id = url.match(/item=(\d+)/)[1];
        itemString += `back=,id=${id},ilevel=246,bonus_id=7359/6652/6652`;

        items += `${itemString}\n\n`;
      }
    }

    items += `#\n# ---------------\n\n`;

    return items;
  });

  return content;
};
