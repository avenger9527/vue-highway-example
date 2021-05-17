import VH from "vue-highway";
import "./globalClass.css";

export default new VH()
  .template(() => (
    <div>
      <router-view />
    </div>
  ))
  .done();
