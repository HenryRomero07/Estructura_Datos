package APE07;

public class PilaPaquete {
    private Paquete[] stack;
    private int top;

    /// Trabajar con LIFO
    public PilaPaquete(int capacidad) {
        this.stack = new Paquete[capacidad];
        this.top = -1; //Porque empezamos en -1?
    }

    public void push(Paquete p) {
        if (top + 1 < stack.length) {
            stack[++top] = p;
        }
    }

    public Paquete pop() {
        if (top == -1) {
            return null;
        }
        return stack[top--];
    }

}
