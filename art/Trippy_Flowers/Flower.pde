class Flower {

  //Variables

  int numPetals;
  PVector center;
  float centerRad;
  int centerFillColor;
  int petalFillColor;
  float petalLength;
  float petalWidth;
  PVector vel;
  float rotation;
  float rotationSpeed;
  
  //Methods  

  Flower() {
    numPetals = 5;
    center = new PVector(0, 0);
    centerRad = 40;
    petalWidth = 30;
    petalLength = 120;
    centerFillColor = 0xFFFF0080;
    petalFillColor = 0xFF3090FF;
    vel = new PVector(0, 0);
    rotation = 0;
    rotationSpeed = 0;
  }

  void updateMe() {
    center.add(vel);
    rotation += rotationSpeed;
  }

  void drawMe() {
    noStroke();

    pushMatrix(); // remembers current coordenate system.
    translate(center.x, center.y); // changed the coordinate of (0, 0),

    //draw petals
    rotate(rotation);
    for (int i = 0; i < numPetals; i++) {
      fill(petalFillColor);
      ellipseMode(CENTER);
      ellipse(petalLength/2, 0, petalLength, petalWidth);
      rotate(TWO_PI/numPetals);
    }

    // draw flower center
    ellipseMode(RADIUS);
    fill(centerFillColor);
    noStroke();
    ellipse(0, 0, centerRad, centerRad);

    popMatrix(); // restores the last saved coordenate system.
  }
  
  boolean belowBottom() {
    return (center.y > height + petalLength);
  }
}