<template>
  <div class="form">
    <span class="errmsg" v-if="emsg.length!=0">{{emsg}}</span>
      
    <div class="sign">
      <label for="email">Email</label>
            <input 
            v-validate="{ val: this.email, type: 'email' }"
            type="email" 
            name="email"
            id="email"
            :value="email" 
            @change="setEmail($event.target.value)">
            <label for="pwd">Password</label>
            <input type="password" 
                   id="pwd" @change="setPassword($event.target.value)" :value="password">
            
      <button @click="logIn">Login</button>
      <button @click="loginWithGoogle">Login With Google</button>
    </div>
  </div>
</template>
<style>
.form {
  border: 1px solid #dee2e6;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  width: 50%;
}
.sign {
  display: flex;
  flex-direction: column;
  padding: 10px;
  flex-wrap: wrap;
  align-content: center;
  font-size: 90%;
  width: 100%;
}
.sign > input {
  display: block;
  margin-top: 2px;
  margin-bottom: 10px;
  align-self: flex-start;
}
.sign > label {
  align-self: flex-start;
}
.sign > button {
  height: 40px;
  background: #343a40;
  color: #fff;
}
.errmsg{
    display: block;
    color: rgb(255,0,0);
    width: 40%;
    align-self: center;
}
.invalid{
    border-color: red;
    padding: 5px;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Validate from "@/shared/validate";
import { firebaseStore } from "@/store";

@Component({
  name: "signin",
   directives:{
        validate: Validate,
    }
})
export default class Signin extends Vue {
    email = ""
    password = ""
    dname = ""
    emsg= firebaseStore.error
    setEmail(email:string):void{
        this.email = email
    }
    setPassword(password:string):void{
        this.password = password
    }
    setDisplayName(dname:string):void{
        this.dname = dname
    }
    async logIn(){
        firebaseStore.setPassword(this.password)
        firebaseStore.setEmail(this.email)
        firebaseStore.setDname(this.dname)

        await firebaseStore.logIn()
        if(firebaseStore.user!=null){
            this.$router.push('/')
        }
        this.emsg= firebaseStore.error
        
        
    }
  async loginWithGoogle(){
    await firebaseStore.loginWithGoogle()
    this.emsg= firebaseStore.error
  }
}
</script>
