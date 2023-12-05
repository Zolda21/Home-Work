// Agung Nur Hakim Somantri
// 220102008

let nameList = [];

function addNameAndClass(name, kelas) {
    nameList.push({name: name, kelas: kelas});
}

function displayNames() {
    console.log("Nama dan Kelas:");
    for (let i = 0; i < nameList.length; i++) {
        console.log(nameList[i].name + " - " + nameList[i].kelas);
    }
}

function main() {
    let name = "";
    let kelas = "";

        name = prompt("Masukkan Nama : ");
        kelas = prompt("Masukkan Kelas : ");
        addNameAndClass(name, kelas);

    displayNames();
}

main();