// importation du site
import  *  as  cheerio  from  'cheerio' ;
import fs from 'fs/promises';
async function fetchData(url) {
    const response = await cheerio.fromURL('https://www.actualitix.com/capitales-du-monde-pays.html')
    const data = response.extract({
        publications: [
          {
            // Sélectionner toutes les lignes du corps du tableau
            selector: 'tbody tr',
            value: {
              // Extraire le nom de la publication
              name: 'td:nth-child(1)',
              // Extraire les notes de la publication
              capital: {
                selector: 'td:nth-child(2)',
                value: 'innerHTML',
              },
              continent: {
                selector: 'td:nth-child(3)',
                value: 'innerHTML',
              },
            },
          },
        ],
      });
    await fs.writeFile("dataTableau.json", JSON.stringify(data, null, 2))
}
fetchData()