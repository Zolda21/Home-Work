// Agung Nur Hakim Somantri
// 220102008

import Foundation

struct Student {
    var name: String
    var kelas: String
}

func add(name: String, kelas: String) {
    let nama = Student(name: name)
    let kelas = Student(kelas: kelas)
}

func displayStudents() {
    print("Nama saya \(student.name) dari kelas \(student.grade)")
}

func main() {
        print("Masukkan Nama : ")
        let name = readLine()!
        
        print("Masukkan Kelas : ")
        let kelas = readLine()!
        
        add(name: name, kelas: kelas)

    displayStudents()
}

main()