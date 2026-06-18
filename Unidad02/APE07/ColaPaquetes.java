package APE07;

public class ColaPaquetes {
    private Paquete[] queue;
    private int frente, fin , total;

    public ColaPaquetes(int capacidad){
        this.queue = new Paquete[capacidad];
        this.frente = 0;
        this.fin = 0;
        this.total = 0;
    }

    public void enqueue(Paquete p){
        //TODO Construir la logica mediante el uso de operador módulo (%)
        if (total < queue.length){
            queue[fin] = p;
            fin = (fin + 1) % queue.length;
            total++;
        }
    }

    public Paquete dequeue(){
        //TODO: Implementar la logica FIFO
        if (total == 0){
            return null;
        }
        Paquete p = queue[frente];
        queue[frente] = null;
        frente = (frente + 1) % queue.length;
        total--;
        return p;
    }

}
