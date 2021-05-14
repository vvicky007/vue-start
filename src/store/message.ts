import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";

@Module()
class UserModule extends VuexModule {
  // state
  message = "foo";
  // getters
  get Message() {
    return this.message + "Ts";
  }

  // mutations
  @Mutation
  setMessage(msg: string) {
    this.message = msg;
  }

  // actions
  @Action
  loadMessage() {
    this.setMessage("");
  }
}

// register module (could be in any file)
import store from "@/store/store";
export const userModule: any = new UserModule({ store, name: "user" });
// export default UserModule
