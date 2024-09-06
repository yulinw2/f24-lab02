package edu.cmu.cs.cs214.lab02;

import edu.cmu.cs.cs214.lab02.shapes.*;

public class Renderer {
    private Shape rectangle;
    
    Renderer(Shape rectangle) {
        this.rectangle = rectangle;
    }

    void draw() {
        double area = this.rectangle.getArea();

        // assume implementation

        System.out.println("Shape printed\n" + "Its area is " + area);
    }
}
