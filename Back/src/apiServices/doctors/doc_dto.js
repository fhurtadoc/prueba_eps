var single = (resource, authUser) => ({
    id: resource.id_doctor,
    name: resource.name,
    specialty: {
      id: resource.id_specialty,
      name: resource.name_specialty,
      description: resource.description
    
    }
  });

var multiple = (resources, authUser) => resources.map((resource) => single(resource, authUser));

module.exports = {
  single,
  multiple,
};
