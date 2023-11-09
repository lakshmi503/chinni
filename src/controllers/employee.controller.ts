import Employee from "@/models/employee.model"
export const insert = async (req, res) => {

    try {
        const { name, city, salary} = req.body;

        const create = await Employee.create({

            name,
            city,
            salary,
            
    })
    res.status(200).json(create);
}catch (error) {
    
    return res.status(400).json({ msg: "error"})
}
}
//employeeall
export const employeeall = async(req,res) =>{
      try{
        const message = await Employee.find()
        res.status(200).json(message)
      }
      catch(error){
        res.status(500).json("error")
    }
    }  
    
    
 //employee path    
    
 export const set = async(req,res)=>{
    const employeeId = req.params.id;
const {name,city,salary} = req.body;
    try{
const create = await Employee.findOneAndUpdate({_id: employeeId},{$set:{name,city,salary},new:true} )
res.status(200).json(create);
    }catch{
        res.status(500).json("error")
    }
}

   
    
//update details
export const emupdate = async(req,res)=>{
    const {id} = req.params;
const {name,city,salary} = req.body;
    try{
const create = await Employee.findOneAndReplace({_id: id},{$set:{name,city,salary},new:true} )
res.status(200).json(create);
    }catch{
        res.status(500).json("error")
    }
}

//employee delete
export const employeedelete= async(req,res)=>{
    try{
      const {id} = req.params;
      const employee = await Employee.deleteOne({_id: id});
      res.status(200).json("details deleted successfully");
    }catch(error){
        res.status(500).json("error")
    
    }
    }

