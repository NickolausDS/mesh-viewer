function Landmark(id, mesh, location, description, color, link, radius) {

  // Base Properties
  this.id = id;
  this.mesh = mesh;
  this.description = description;
  this.link = link || {'url': null, 'label': null};

  this.xtkObject = new X.sphere()

  this.xtkObject.center = location;
  this.xtkObject.radius = radius || 0.1;
  this.xtkObject.color = color;
  this.xtkObject.visible = true;
}
