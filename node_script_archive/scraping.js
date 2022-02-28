let fs = require('fs');
const axios = require('axios');

const key = 'b1c1a8bf18428fbb724beccdbc7d8075'

let shelters = {
    sheltersPoznan : []
}

let tempShelter = {}
let id = 1

// pobieranie wspolrzednych geo
async function getLatAngLng(key, address){
    await axios.get(`http://api.positionstack.com/v1/forward?access_key=${key}&query=${address}`).then(response => {
        (response.data.data).map(record => {
            if(record.locality === "Poznan"){
                //console.log(record)
                return record
            } 
        })
    })
}

// odczyt wszystkich linijek z pliku
async function getAllLines(file){
    const allFileContent = fs.readFileSync(file, 'utf-8');
    allFileContent.split(/\r?\n/).forEach(line =>  {
        if(line.startsWith('schron')){
            tempShelter = {}
            let tempAddress = ''
            let tempCountPerson = 0
            let tempLat = 0
            let tempLng = 0
            tempAddress = line.substring(line.indexOf('schron')+7, line.indexOf('pomieści')-2);
            tempCountPerson = line.substring(line.indexOf('osób')+6)    
            tempShelter = {
                id: id,
                address: tempAddress,
                lat: tempLat,
                lng: tempLng,
                personCount: tempCountPerson
            }
            id++;
        }
        else if(line.startsWith('dodatkowe')){
            let tempDesc = ''
            tempDesc = line.substring(line.indexOf('dodatkowe')+22)
            tempShelter.desc = tempDesc
            shelters.sheltersPoznan.push(tempShelter)
        }
    });
}

getAllLines('./schrony.txt')

for(let i = 0; i < shelters.sheltersPoznan.length; i++){
        let queryAddress = encodeURIComponent(shelters.sheltersPoznan[i].address)
        let promises = []
        promises.push(axios.get(`http://api.positionstack.com/v1/forward?access_key=${key}&query=${queryAddress}`))
        Promise.all(promises).then(result => {
            (result[0].data.data).map(record => {
                if(record.locality === 'Poznan'){
                    shelters.sheltersPoznan[i].lat = record.latitude
                    shelters.sheltersPoznan[i].lng = record.longitude
                    let json = JSON.stringify(shelters, null, 4);

                    fs.writeFile('shelters.json', json, 'utf-8', function(err){
                        if(err){
                            console.log("An error occured while writing JSON Object to File.");
                            return console.log(err);
                        }
                    })
                }        
            })
        })
}
