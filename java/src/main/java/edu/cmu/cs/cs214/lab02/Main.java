package edu.cmu.cs.cs214.lab02;

// import edu.cmu.cs.cs214.lab02.shapes.Rectangle;
import edu.cmu.cs.cs214.lab02.shapes.*;

public class Main {
    public static void main(String[] args) {
        // Shape object = new Rectangle(2, 3);
        Shape object = new Square(3);
        Renderer renderer = new Renderer(object);
        renderer.draw();
    }
}
