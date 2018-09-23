int bgColor;
int numFlowers;
Flower[] flowers; //declaring array of flowers

void setup() {
  size(800, 600);
  bgColor = 0xFFFFFFFF;
  background(bgColor);

  numFlowers = 100;


  flowers = new Flower[numFlowers]; //CREATING the array of flowers
  for (int i = 0; i < numFlowers; i++) {
    flowers[i] = new Flower();
    setUpFlower(i);
  }
}

void setUpFlower(int j) {
  float centerRad = random(3, 10);
  float petalLength = random(3*centerRad, 7*centerRad);
  flowers[j].centerRad = centerRad;
  flowers[j].petalLength = petalLength;
  flowers[j].vel = new PVector(0, random(1, 4));
  flowers[j].center = new PVector(random(width), -petalLength);
  flowers[j].centerFillColor = color(random(255), random(255), random(255));
  flowers[j].petalFillColor = color(random(255), random(255), random(255));
  flowers[j].numPetals = floor(random(4, 7));
  flowers[j].rotation = random(TWO_PI);
  flowers[j].rotationSpeed = random(0.05*TWO_PI/60, 0.3*TWO_PI/60);
  if (random(1) < 0.5) {
    flowers[j].rotationSpeed *= -1;
  }
}

void draw() {
  //background(bgColor);
  for (int i = 0; i < numFlowers; i++) {
    flowers[i].updateMe();
    flowers[i].drawMe();
    if (flowers[i].belowBottom()) {
      setUpFlower(i);
    }
  }
}