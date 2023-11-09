import User from "@/models/user.model"
import bycrpt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = (req,res,next) => {
    bycrpt.hash(req.body.password,10,function(err,hashedpass){
        if(err){
            res.json({
                error : err
            })
        }
    })
    let user = new User({
        name :req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        password : req.body.hashedpass

    })
    user.save()
    .then(user => {
        res.json({
            message : 'User Added Successfully!'

        })
    })
    .catch(error => {
        res.json({
            message : 'An error occured'
        })
    })
   
    
}
const login = (req,res,next) => {
    var username = req.body.username
    var password = req.body.password
    User.findOne({$or: [{email:username},{phone:username}]})
    .then(user => {
        if(user){
            bycrpt.compare(password, user.password,function(err,result){
                if(err){
                    res.json({
                    error: err
                    })

                }   
                if(result){ 
                      let token = jwt.sign({name: User.name}, 'SecretValue',{expiresIn : '1h'})
                      res.json({
                        message:'Login Successful!',
                        token
                      })

                } else{
                    res.json({
                        message:'password does not matched!'
                    })
                }   
            })
        }else{
            res.json({
                message:'No user found!'
            })
        }

    })
}  
module.exports = {
    register, login
}  
            



export function Login (arg0: string, login: any) {
    throw new Error('Function not implemented.')
}
  