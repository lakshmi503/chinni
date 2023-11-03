import Create from "@/models/create.model";


export const insert = async (req, res)=>{
    try{
    const{name, phone, password} = req.body;
    if(!name  || !phone  || !password){
        return res.status(400).json({ msg: "Please fill all the fields" });
    }
const create = await Create.create({
        name,
        phone,
        password
    })
    
    res.status(200).json(create);
}catch(error){
    console.log(error);
    return res.status(400).json({ msg: "error ",Create});
}
}

//get the details

export const getall = async(req,res) =>{
    try{
        const messages= await Create.find();
        res.status(200).json(messages)

    }catch(error){
        res.status(500).json("error")
    }
}

//edit details

export const edit = async(req,res)=>{
    const {id} = req.params;
const {name,phone,password} = req.body;
    try{
const create = await Create.findOneAndUpdate({_id: id},{$set:{name,phone,password},new:true} )
res.status(200).json(create);
    }catch{
        res.status(500).json("error")
    }
}



//delete by id


export const deletebyId = async(req,res)=>{
    try{
      const {id} = req.params;
      const create= await Create.deleteOne({_id: id});
      res.status(200).json("details deleted successfully");
    }catch(error){
        res.status(500).json("error")
    
    }
    }
