let fs = require('fs');

let shelters = {
    "sheltersPoznan" : []
}

const allFileContent = fs.readFileSync('./schrony.txt', 'utf-8');

let tempShelter = {}
let id = 1

allFileContent.split(/\r?\n/).forEach(line =>  {
    if(line.startsWith('schron')){
        tempShelter = {}
        let tempAddress = ''
        let tempCountPerson = 0
        tempAddress = line.substring(line.indexOf('schron')+7, line.indexOf('pomieści')-2);
        tempCountPerson = line.substring(line.indexOf('osób')+6)
        tempShelter = {
            id: id,
            address: tempAddress,
            lat: 12.345,
            lng: 12.345,
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

let json = JSON.stringify(shelters, null, 4);

fs.writeFile('shelters.json', json, 'utf-8', function(err){
    if(err){
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
})

console.log(shelters)