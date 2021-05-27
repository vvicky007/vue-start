import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store';
import Auth from '@/firebase/init'
import firebase from 'firebase'
@Module({name:'firebase',namespaced:true,store})
export default class FireBaseModule extends VuexModule {
  // state
    email=""
    password = ""
    dname = ""
    error = ""
    user:firebase.User|null = null
    @Mutation
    setUser(user:firebase.User|null){
        this.user = user
    }
    getUser(){
        return this.user
    }
    @Mutation
    setEmail(email:string){
        this.email = email
    }
   
    @Mutation
    setPassword(password:string){
        this.password = password
    }
    
    @Mutation
    setDname(dname:string){
        this.dname = dname
    }
    @Mutation
    setError(e:string){
        this.error = e
    }
    @Action
    async submitForm(){
        try{
            const user = await Auth.createUserWithEmailAndPassword(this.email,this.password)
            this.setError('')
            console.log(firebase.auth().currentUser)
            //@ts-ignore
            this.setUser(user)
            //@ts-ignore
            this.setEmail(user.email)
            //@ts-ignore
            this.setDname(user.displayName)
        }
        catch (e){
            this.setError(e.message)
        }
    }
    @Action
    async loginWithGoogle(){
        try{
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await firebase.auth().signInWithPopup(provider)
        this.setUser(user)
        if(user!=null){
            //@ts-ignore
            this.setEmail(user.email)
            //@ts-ignore
            this.setDname(user.displayName)
            
        }
        
        }
        catch(e){
            this.setError(e.message)
        }
    }
    @Action
    async logOut(){
        try{
            console.log('inside logout')
            const res = await firebase.auth().signOut()
            this.setUser(null)
            this.setEmail('')
            this.setDname('')
        }
        catch(e){
            this.setError(e.message)
            
        }
    }
    @Action
    async logIn(){
        try{
            const user = await Auth.signInWithEmailAndPassword(this.email,this.password)
            this.setError('')
            //@ts-ignore
            this.setUser(user)
            //@ts-ignore
            this.setDname(user.displayName)
            //@ts-ignore
            this.setEmail(user.email)
        }
        catch (e){
            this.setError(e.message)
        }
    }
    @Action
    getUserOnChange(){
          Auth.onAuthStateChanged((u)=>{
            if(u!=null){
                this.setUser(u)
                //@ts-ignore
                this.setEmail(u.email)
                //@ts-ignore
                this.setDname(u.displayName)
            }
            else{
                this.setUser(null)
            }
        })
    }
}


