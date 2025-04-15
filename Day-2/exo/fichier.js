// importation du site
import fetch from "node-fetch";
import  *  as  cheerio  from  'cheerio' ;
import fs from 'fs/promises';
const newsTable = []
async function fetchData(url) {
    const response = await fetch(url)
    const data = await response.text()
    getTableau(data)
    //console.log(data)
}
fetchData('https://or.fr/cours/or#annual_performances')
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
        })
       await fs.writeFile("dataTableau.json", JSON.stringify(newsTable))
} 
