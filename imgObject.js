let objectArray = [];
function ImgObject(name, description) {
  let ImgObj = this;
  ImgObj.name = name;
  ImgObj.description = description;
  console.log(name);
}
function createObject() {
  for (let counter = 0; counter < Fotos.length; counter++) {
    objectArray.push(new ImgObject(Fotos[counter], counter));
  }
}
createObject();


function plaatsfoto(obj) {
  let item = document.createElement("div");
  item.className = "item";
  let deFoto = document.createElement("img");
  deFoto.src = obj.name;
  deFoto.alt = obj.description;
  deFoto.title = obj.description;
  item.append(deFoto);
  all.append(item);
}

for (let i = Fotos.length; i > 0; i--) {
  let randomGetal = Math.floor(Math.random() * Fotos.length);
  plaatsfoto(objectArray[randomGetal]);
  objectArray.splice(randomGetal, 1);
}
