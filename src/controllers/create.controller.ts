import Create from "@/models/create.model"



export const insert = async (req, res)=>{
    try{
    const{name, email, mobile ,product} = req.body;
    if(!name  || !email  || !mobile  || !product){
        return res.status(400).json({ msg: "Please fill all the fields" });
    }
const create = await Create.create({
        name,
        email,
        mobile ,
        product
        
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
const {name,email,mobile,product} = req.body;
    try{
const create = await Create.findOneAndUpdate({_id: id},{$set:{name,email,mobile,product},new:true} )
res.status(200).json(create);
    }catch{
        res.status(500).json("error")
    }
}
//edit details
export const app = async(req,res)=>{
    const {id} = req.params;
const {name,email,mobile,product} = req.body;
   try{
const create = await Create. findOneAndReplace({ _id: id},{$set:{name,email,mobile,product},new:true} )
res.status(200).json(create);
   }catch{
     res.status(500).json("error")
   }

   }
//path details
export const change = async(req,res)=>{
    const createId = req.params.id;
const {name,email,mobile,product} = req.body;
   try{
const create = await Create. findOneAndUpdate({ _id: createId},{$set:{name,email,mobile,product},new:true} )
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

//     export const  product = async(req,res)=>{
//        try{
          
//         const product  = req.params;
//         const {name,email,password,city} = req.body
//         try{
//             const create = await Create. findOneAndUpdate({ product},{$set:{name,email,pass},new:true} )
//             res.status(200).json(create);
//     }catch{
//        res.status(500).json("error")
//     }
    
//     try{
//         const(name,email,mobile,product)=re.body){
//             if(!name || !email|| ! mobile || !product )
//             return re
//         }
//     }
        
// const create = await Create.create({
//      name,
//      email,
//      mobile,
//      product
//      )}
//      res.status (200).json((create)); 
// }catch(error){

//     console.log(error)
//     return res.status(400).json({$mes:"error",create})
// }
// }
    