package APE07;

public class GestorRutas {
//    public static void ordenar(Paquete[] datos) {
//        //TODO: Implementar inicialmente un metodo de ordenamiento burbuja
//        int n = datos.length;
//        for (int i = 0; i < n - 1; i++) {
//            for (int j = 0; j < n -1; j++) {
//                if (datos[j].getCodigoPostal() > datos[j + 1].getCodigoPostal()) {
//                    Paquete aux = datos[j];
//                    datos[j] = datos[j + 1];
//                    datos[j + 1] = aux;
//                }
//            }
//        }
//    }

    public static void ordenar(Paquete[] datos) {
        int n = datos.length;
        boolean swapped;
        for (int i = 0; i < n - 1; i++) {
            swapped = false;
            for (int j = 0; j < n - i - 1; j++) {
                if (datos[j].getCodigoPostal() > datos[j + 1].getCodigoPostal()) {
                    Paquete aux = datos[j];
                    datos[j] = datos[j + 1];
                    datos[j + 1] = aux;
                    swapped = true;
                }
            }
            if (!swapped) break; // si no hubo intercambios, ya está ordenado
        }
    }
}
