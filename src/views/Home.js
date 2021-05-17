import VH from "vue-highway";
import HelloWorld from "../components/HelloWorld.vue";
// v-on:enlarge-text="postFontSize += 0.1"
let HomeDialog = new VH()
  .template(() => (
    <div>
      <el-button type="text" v-on:click="dialogVisible = true">
        点击打开 Dialog
      </el-button>
      <el-dialog
        title="提示"
        v-bind:visible="dialogVisible"
        width="30%"
        v-bind:before-close="handleClose"
      >
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button v-on:click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" v-on:click="dialogVisible = false">
            确 定
          </el-button>
        </span>
      </el-dialog>
    </div>
  ))
  .done()
  .data({
    dialogVisible: false,
  })
  .methods((ctx) => ({
    handleClose: (done) => {
      console.log("han", ctx, done);
      // this.$confirm("确认关闭？").then(done);
      ctx.vue
        .$confirm("确认关闭？")
        .then(() => (ctx.data.dialogVisible = false));
    },
  }))
  .mounted((ctx) => {
    console.log("mounted", ctx);
  });

export default new VH()
  .components({ HelloWorld, HomeDialog })
  .template(() => (
    <div>
      <HomeDialog />
      <HelloWorld msg="Welcome to Your Vue.js App" class="box" />
      <Router-link to="/about">to about</Router-link>
    </div>
  ))
  .done();
