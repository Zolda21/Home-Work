// Agung Nur Hakim Somantri
// 220102008

import java.util.Scanner;

/**
 *
 * @author Agung
 */
public class Java {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String nama, kelas;
        System.out.print("Masukkan Nama : ");
        nama = scanner.nextLine();
        System.out.print("Masukkan Kelas : ");
        kelas = scanner.nextLine();
        System.out.println("Nama Saya " + nama + " Dari Kelas " + kelas);
    }
}