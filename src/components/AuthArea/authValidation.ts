export default {
      firstName:{
            required:{value:true,message:'missing first name!'},
            minLength:{value:2,message:'first name too short'},
            maxLength:{value:20,message:'first name too long'}
      },
      lastName:{
            required:{value:true,message:'missing last name!'},
            minLength:{value:2,message:'last name too short'},
            maxLength:{value:20,message:'last name too long'}
      },
      username:{
            required:{value:true,message:'missing username!'},
            minLength:{value:3,message:'username too short'},
            maxLength:{value:20,message:'username too long'}
      },
      password:{
            required:{value:true,message:'missing password!'},
            minLength:{value:3,message:'password too short'},
            maxLength:{value:15,message:'password too long'}
      }
}