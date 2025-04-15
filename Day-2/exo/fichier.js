



// importation du site
import  *  as  cheerio  from  'cheerio' ;
import fs from 'fs/promises';
const newsTable = []
async function getData(url) {
    const response = await cheerio.fromURL("https://or.fr/cours/or#annual_performances") 
    const data = response.text()
    getTableau(data)
}
getData('https://or.fr/cours/or#annual_performances')
//extration du contenu
 async function getTableau(html){
    const $ = cheerio.load(html)
    $(".table-responsive", html).each(function(){
        const newTable = {
            id : newsTable.length + 1,
            titre : $("thead").children("tr").children("th").text().trim,
            attributs : $("tbody").children("tr").children("td").text().trim
        }
        newsTable.push(newTable)
        console.log(newsTable)

        })
       await fs.writeFile("dataTableau.json", JSON.stringify(newsTable))
} 