export default {

      firstName:{
         
            required:{value:true,message:'missing first name!'},
            minLength:{value:3,message:'first name too short'},
            maxLength:{value:30,message:'first name too long'}
      },
      lastName:{
            required:{value:true,message:'missing last name!'},
            minLength:{value:3,message:'last name too short'},
            maxLength:{value:30,message:'last name too long'}
      },
      title:{
            required:{value:true,message:'missing your title'},
            minLength:{value:3,message:'title too short'},
            maxLength:{value:20,message:'title too long'}
      },
      city:{
            required:{value:true,message:'missing city!'},
            minLength:{value:3,message:'city too short'},
            maxLength:{value:15,message:'city too long'}
      },
      country:{
            required:{value:true,message:'missing country!'},
            minLength:{value:3,message:'country too short'},
            maxLength:{value:15,message:'country too long'}
      }
}