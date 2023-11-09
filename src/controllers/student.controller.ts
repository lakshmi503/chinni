import Student from "@/models/student.model"

export const insert = async (req, res) => {

    try {
        const { name, age, marks} = req.body;

        const create = await Student.create({

            name,
            age,
            marks,
            
    })
    res.status(200).json(create);
}catch (error) {
    
    return res.status(400).json({ msg: "error"})
}
}
//registerall
export const registerall = async(req,res) =>{
      try{
        const message = await Student.find()
        res.status(200).json(message)
      }
      catch(error){
        res.status(500).json("error")
    }
    }  
    
    
 //path    
    
 export const edit = async(req,res)=>{
    const studentId = req.params.id;
const {name,age,marks} = req.body;
    try{
const create = await Student.findOneAndUpdate({_id: studentId},{$set:{name,age,marks},new:true} )
res.status(200).json(create);
    }catch{
        res.status(500).json("error")
    }
}

   
    
//update details
export const update = async(req,res)=>{
    const {id} = req.params;
const {name} = req.body;
    try{
const create = await Student.findOneAndUpdate({_id: id},{$set:{name},new:true} )
res.status(200).json(create);
    }catch{
        res.status(500).json("error")
    }
}

//register delete
export const registerdelete= async(req,res)=>{
    try{
      const {id} = req.params;
      const student = await Student.deleteOne({_id: id});
      res.status(200).json("details deleted successfully");
    }catch(error){
        res.status(500).json("error")
    
    }
    }

