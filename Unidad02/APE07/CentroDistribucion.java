package APE07;

import java.util.*;

public class CentroDistribucion {
    static Random random = new Random(42);
    private final List<Paquete> inventario;  // List para soportar ordenamiento y FIFO
    private ColaPaquetes colaRecepcion;
    private PilaPaquete pilaUrgentes;

    public CentroDistribucion(int capacidad) {
        this.inventario = new ArrayList<>();
        this.colaRecepcion = new ColaPaquetes(capacidad);
        this.pilaUrgentes = new PilaPaquete(capacidad);
    }

    public void recibirCajaCamion(Paquete p) {
        this.inventario.add(p);
        this.colaRecepcion.enqueue(p); // Agrega al final
    }

    public void recibirUrgentes(Paquete p) {
        this.inventario.add(p);
        this.pilaUrgentes.push(p);
    }

    // Despacha al cliente en orden FIFO (Queue)
    public Paquete despacharACliente() {
        Paquete urgente = pilaUrgentes.pop();
        if (urgente != null) return urgente;
        return colaRecepcion.dequeue();
    }

    public void ordenarRuta() {
        Paquete[] arr = inventario.toArray(new Paquete[0]);
        GestorRutas.ordenar(arr);
        inventario.clear();
        inventario.addAll(Arrays.asList(arr));
    }

        public void ordenarRutaBurbuja(){
        int n = this.inventario.size();
        for (int i = 0; i < n-1; i++) {
            for (int j = 0; j < n-i-1; j++) {
                if (this.inventario.get(j).getCodigoPostal() > this.inventario.get(j+1).getCodigoPostal()) {
                    // Intercambiar
                    Paquete temp = this.inventario.get(j);
                    this.inventario.set(j, this.inventario.get(j+1));
                    this.inventario.set(j+1, temp);
                }
            }
        }
    }

    public void ordenarRutaQuickSort() {
        quickSort(0, inventario.size() - 1);
    }

    private void quickSort(int low, int high) {
        if (low < high) {
            int pi = particion(low, high);
            quickSort(low, pi - 1);
            quickSort(pi + 1, high);
        }
    }

    private int particion(int low, int high) {
        int randomIndex = low + random.nextInt(high - low + 1);
        intercambio(randomIndex, high);


        int pivot = inventario.get(high).getCodigoPostal();
        int i = low - 1;

        for (int j = low; j < high; j++) {
            if (inventario.get(j).getCodigoPostal() <= pivot) {
                i++;
                intercambio(i, j);
            }
        }
        intercambio(i + 1, high);
        return i + 1;
    }

    private void intercambio(int i, int j) {
        Paquete temp = inventario.get(i);
        inventario.set(i, inventario.get(j));
        inventario.set(j, temp);
    }




    private static void mostrarDatos(int cantidad) {
        int capacidad = cantidad + 5;
        CentroDistribucion cd = new CentroDistribucion(capacidad);


        System.out.println("=========================================================");
        System.out.println("Generar " + cantidad + " paquetes... \n");

        long inicioGeneracion = System.currentTimeMillis();
        for (int i = 1; i <= cantidad; i++) {
            int cp = random.nextInt(1000000) + 110100; // Genera un código postal entre 110100 y 99999
            cd.recibirCajaCamion(new Paquete(i, cp));
        }
        for (int i = 1; i <= 5; i++) {
            int cp = random.nextInt(1000000) + 110100;
            cd.recibirUrgentes(new Paquete(i, cp));
        }
        long finGeneracion = System.currentTimeMillis();
        System.out.println("Generación: " + ((finGeneracion - inicioGeneracion) / 1000.0) + " segundos\n");

        System.out.println("Ordenando...");
        long inicio = System.currentTimeMillis();

        if (cantidad <= 100000) {
            cd.ordenarRuta();
            System.out.println("Método: BubbleSort");
        } else {
            cd.ordenarRutaQuickSort();
            System.out.println("Método: QuickSort");
        }
        long fin = System.currentTimeMillis();                                                                                                                                                            double duracion = (fin - inicio) / 1000.0;
        System.out.println("Duración: " + duracion + " segundos\n");

        System.out.println("Despachar paquete al cliente... ");
        Paquete paquete = cd.despacharACliente();
        if (paquete != null) {
            System.out.println("Paquete despachado con ID: " + paquete.getId() + " y Codigo Postal: " + paquete.getCodigoPostal());
        } else {
            System.out.println("No hay paquetes");
        }

        System.out.println("=========================================================\n");
    }

    public static int buscarLineal(Paquete[] lista, int id) {
        for (int i = 0; i < lista.length; i++) {
            if (lista[i].getId() == id) return i;
        }
        return -1;
    }

    public static int buscarBinario(Paquete[] lista, int id) {
        int bajo = 0, alto = lista.length - 1;
        while (bajo <= alto) {
            int medio = bajo + (alto - bajo) / 2;
            if (lista[medio].getId() == id) return medio;
            if (lista[medio].getId() < id) bajo = medio + 1;
            else alto = medio - 1;
        }
        return -1;
    }

    public static void main(String[] args) {
        mostrarDatos(10_000);
        mostrarDatos(50_000);
        mostrarDatos(1_000_000);
    }

}
