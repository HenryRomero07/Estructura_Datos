package APE07;

import java.util.Arrays;
import java.util.Random;

public class Main {
    public static void main(String[] args) {
        Paquete[] paquetes = new Paquete[10000];
        Random rnd = new Random();
        for (int i = 0; i < 10000; i++) paquetes[i] = new Paquete(rnd.nextInt(100000));
        int idObjetivo = paquetes[9999].getId();

        long inicio = System.nanoTime();
        CentroDistribucion.buscarLineal(paquetes, idObjetivo);
        System.out.println("Tiempo Lineal: " + (System.nanoTime() - inicio) / 1e9 + " s");

        Arrays.sort(paquetes, (a, b) -> Integer.compare(a.getId(), b.getId()));
        inicio = System.nanoTime();
        CentroDistribucion.buscarBinario(paquetes, idObjetivo);
        System.out.println("Tiempo Binario: " + (System.nanoTime() - inicio) / 1e9 + " s");
    

    }
}
