var single = (resource, authUser) => ({
    id: resource.id_especialidad,
    name: resource.name,
    Descripcion: resource.Descripcion,
    
  });

var multiple = (resources, authUser) => resources.map((resource) => single(resource, authUser));

module.exports = {
  single,
  multiple,
};