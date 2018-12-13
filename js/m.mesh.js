function Mesh(id, mesh_location, description, color, opacity, link, label ) {
  this.id = id;
  this.landmarks = {}
  this.xtkObject = new X.mesh()
  this.xtkObject.color = color;

  this.setMeshData(mesh_location);
}

Mesh.prototype.setMeshData = function(mesh_data_location) {
  if(typeof mesh_data_location == "object") { // this is a local file
    if( mesh_data_location instanceof File) {
      this.xtkObject.file = mesh_data_location.name;
      readLocal2Mesh(this.xtkObject, mesh_data_location);
    } else {
      throw new Error("local mesh must be a File object type!");
    }
  } else {
    this.xtkObject.file = safeEncodeURI(mesh_data_location);
  }
}

Mesh.prototype.addLandmark = function (landmark) {
  this.landmarks[landmark.id] = landmark;
}

Mesh.prototype.getLandmarks = function () {
  return Object.values(this.landmarks);
}