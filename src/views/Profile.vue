<template>
    <div class="profile">
        <div class="info">
            <div>
                <img 
                :src="url" 
                alt="" class="avatar">
            </div>
            <span class="dname">{{name}} </span>
            <span>{{email}}</span>
            <span>{{phnum}}</span>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { firebaseStore } from "@/store";
@Component({
  name: "Profile",
  components: {},
})
export default class Profile extends Vue {
    name :string|null|undefined = null
    email:string|null|undefined = null
    phnum:string|null|undefined = null
    url:string|null|undefined = null
    created() {
        this.email = firebaseStore.user?.email
        this.url = firebaseStore.user?.photoURL
        this.name = firebaseStore.user?.displayName
        this.phnum = firebaseStore.user?.phoneNumber
    }
}
</script>
<style scoped>
.profile{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    padding: 1%;
}
.info{
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: flex-start;
    justify-items: flex-start;
    font: 1em sans-serif;
    flex-wrap: wrap;
    margin: 2%;
    
}
.avatar{
    border-radius: 50%;
    flex-basis: 100%;
    flex-wrap: wrap;
}
.dname{
    font-size: 200%;
}
</style>