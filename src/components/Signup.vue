<template>
    <div class="form">
        <span class="errmsg" v-if="emsg.length!=0">{{emsg}}</span>
        <div class="sign"  >
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
            <label for="dname">Display Name</label>
            <input type="text" 
                   id="dname" @change="setDisplayName($event.target.value)" :value="dname">
           
            <button @click="submitForm">SignUp</button>
            <button @click="loginWithGoogle">SignUp with Google</button>
            
        </div>
    </div>
</template>
<style scoped>
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
    name:'signup',
    directives:{
        validate: Validate,
    }
})
export default class Signup extends Vue{
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
    async submitForm(){
        firebaseStore.setPassword(this.password)
        firebaseStore.setEmail(this.email)
        firebaseStore.setDname(this.dname)
        await firebaseStore.submitForm()
        this.$router.push('/')
        this.emsg= firebaseStore.error
        
    }
  async loginWithGoogle(){
    try{
        await firebaseStore.loginWithGoogle()
        this.$router.push('/')
    }
    catch(e){
        this.emsg= firebaseStore.error
    }
   
  }
}
</script>
