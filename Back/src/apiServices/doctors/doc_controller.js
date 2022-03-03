const Doctor_dto=require('./doc_dto');
const specialty_dto=require('./spec_dto');
const Doctor_dao=require('./doc_dao')

module.exports = {
    
    
    async listDoctors(req, res){        
        Doctor_dao.findAll((Doctors, err)=>{
            if(err) return res.send({menssaje:"error en query", codigo: 404})
            console.log(Doctors);
            if(Doctors)return res.send(Doctor_dto.multiple(Doctors, req.users));
        })
    },

    async list_specialty(req, res){        
        Doctor_dao.findAll_specialty((specialty, err)=>{
            if(err) return res.send({menssaje:"error en query", codigo: 404})            
            if(specialty)return res.send(specialty_dto.multiple(specialty, req.users));
        })
    },

}