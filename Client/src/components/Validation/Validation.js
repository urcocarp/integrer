const validation=(userData)=>{
      const errors={};
      if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)){
           errors.email='El email ingresado no es valido'
      }
      if(!userData.email){
          errors.email='Debe ingresar un email'
      }
      if(userData.email.length > 35) {
          errors.email='el email no debe superar los 35 caracteres'
      }
      
      if(!/.*\d+.*/.test(userData.password)){
          errors.password='la contraseña debe tener al menos un numero'
        }
      if(userData.password.length < 6 || userData.length>10){
        errors.password='la contraseña tiene que tener una longitud entre 6 y 10 caracteres.'
      }
    
        return errors
    }
export default validation;