package APE07;

public class Paquete {
    private int id;
    private int CodigoPostal;

    //private double peso;


    public Paquete(int id /*, double peso */) {
        this.id = id;
        //this.peso = peso;
    }

    public Paquete(int id, int codigoPostal /*, double peso */) {
        this.id = id;
        this.CodigoPostal = codigoPostal;
        //this.peso = peso;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCodigoPostal() {
        return CodigoPostal;
    }

    public void setCodigoPostal(int codigoPostal) {
        CodigoPostal = codigoPostal;
    }

}
