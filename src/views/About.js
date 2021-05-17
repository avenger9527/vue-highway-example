// new
import VH from "vue-highway";

let Tips = new VH()
  .template(() => (
    <div>
      <div style="height:50px;border:1px solid red">
        <h1 class="isShow" v-if="isShow">
          tips
        </h1>
      </div>
      <button v-on:click="changeIsShow">changeIsShow</button>
    </div>
  ))
  .done()
  //compose api
  .race("data-methods", [
    {
      isShow: false,
    },
    (ctx) => ({
      changeIsShow: () => (ctx.data.isShow = !ctx.data.isShow),
    }),
  ]);

let About = new VH()
  .components({
    Tips,
  })
  .template(() => (
    <div class="box">
      <Tips />
      about
    </div>
  ))
  .done();

export default About;
