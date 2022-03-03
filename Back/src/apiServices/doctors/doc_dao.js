const pool=require('../../services/conexionMYSQL');

const LIST=("SELECT d.*, e.id_especialidad as 'id_specialty', e.name as 'name_specialty', e.Descripcion as 'description'  from doctors d inner join especialidades e on d.especialidad=e.id_especialidad");
const LIST_SPECIALTY=("SELECT * from especialidades");

module.exports={
    async findAll(done){
        pool.query(LIST, (err, res)=>{
            if(err){                                
                done(err);
            }else{                  
                done(res)
            }
        })
    },

    async findAll_specialty(done){
        pool.query(LIST_SPECIALTY, (err, res)=>{
            if(err){                
                done(err);
            }else{                  
                done(res)
            }
        })
    },
}