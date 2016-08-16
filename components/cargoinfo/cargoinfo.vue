<template>
<!-- 布局容器 -->
<section class="container-fluid">
    <section class="header">
      <header class="title">
        <div class="up">
          <a href="javascript:history.go(-1);">
            <img src="../../assets/images/left_1.png" alt="">
          </a>
        </div>
        <div class="food_name">
          <a href="">入货信息</a>
        </div>
        <div class="history">
          <a href="">历史记录</a>
        </div>
      </header>
    </section>
    <!-- 头部 -->
    <div v-if="type==0">
        <!-- 入货信息 -->
        <section class="message">
          <table>
            <tr>
              <td>菜名</td>
              <td>进货渠道</td>
              <td>档口</td>
            </tr>
          </table>
          <article class="install">
            <div class="paragraph">
              <p>亲爱的用户您好，初次登录，</p>
              <p>请设置您档口的常进蔬菜，<a href="JavaScript:void(0)" @click="goClassification">立即设置</a>!</p>
            </div>
          </article>
        </section>
      </section>
   </div>

   <div v-if="type===1">
           <!-- 入货信息2 -->
           <section class="message_1">
             <table>
               <tr>
                 <td>菜名</td>
                 <td>进货渠道</td>
                 <td>档口</td>
                 <td>数量</td>
               </tr>
             </table>
             <!-- 蔬菜名 -->
             <article class="vegetables">
               <div class="greens">
                 <div class="greens_up">
                   <a href="stock_market.html">生菜</a>
                   <a href="">秋刀鱼</a>
                   <a href="">卷芯包菜</a>
                   <a href="">草鱼</a>
                 </div>
                 <div class="greens_dowm">
                   <a href="">鸡蛋</a>
                   <a href="">千张</a>
                   <a href="JavaScript:void(0)" @click="goClassification">+</a>
                 </div>
               </div>
             </article>
             <!-- 今天没有进货信息 -->
             <article class="today">
               <div class="none">
                 <span>您今天还没有录入进货信息哦！</span>
               </div>
             </article>
           </section>
         </section>
  </div>
  <div v-if="type===2">
          <!-- 入货信息2 -->
          <section class="message_1 message_2">
            <table>
              <tr>
                <td>菜名</td>
                <td>进货渠道</td>
                <td>档口</td>
                <td>数量</td>
              </tr>
              <tr class="message_3">
                <td>生菜</td>
                <td>山东祁连大棚蔬菜···</td>
                <td>12号</td>
                <td>80kg</td>
              </tr>
            </table>
            <!-- 蔬菜名 -->
            <article class="vegetables">
              <div class="greens">
                <div class="greens_up">
                  <a href="">生菜</a>
                  <a href="">秋刀鱼</a>
                  <a href="">卷芯包菜</a>
                  <a href="">草鱼</a>
                </div>
                <div class="greens_dowm">
                  <a href="">鸡蛋</a>
                  <a href="">千张</a>
                  <a href="">+</a>
                </div>
              </div>
            </article>
          </section>
            <!-- 提交 -->
          <section class="submit">
            <article class="button">
              <div class="but">
                <input type="submit">
              </div>
            </article>
          </section>
        </section>
  </div>
  <div v-if="type==3">
            <!-- 入货信息3 -->
            <section class="message_1 message_2">
              <table>
                <tr>
                  <td>菜名</td>
                  <td>进货渠道</td>
                  <td>档口</td>
                  <td>数量</td>
                </tr>
                <tr class="message_3">
                  <td>生菜</td>
                  <td>山东祁连大棚蔬菜···</td>
                  <td>12号</td>
                  <td>80kg</td>
                </tr>
                <tr class="message_3">
                  <td>秋刀鱼</td>
                  <td>山东祁连大棚蔬菜···</td>
                  <td>12号</td>
                  <td>80kg</td>
                </tr>
                <tr class="message_3">
                  <td>千张</td>
                  <td>山东祁连大棚蔬菜···</td>
                  <td>12号</td>
                  <td>80kg</td>
                </tr>
              </table>
              <!-- 蔬菜名 -->
              <article class="vegetables">
                <div class="greens">
                  <div class="greens_dowm">
                    <a href="">+</a>
                  </div>
                </div>
              </article>
            </section>
              <!-- 提交 -->
            <section class="submit">
              <article class="button">
                <div class="add">
                  <input type="submit">
                </div>
              </article>
            </section>
            <!-- 显示框 -->
            <section class="win">
                <article class="complete">
                  <div class="code">
                    <span>今日进货信息提交成功！</span>
                    <div class="confirm">
                      <button>确认</button>
                    </div>
                  </div>
                </article>
              </section>
          </section>
          <script>
          // 显示框
          document.querySelector('.add').onclick = function(){
              document.querySelector('.win').style.display = "block";
          }

          document.querySelector('button').onclick = function(){

              document.querySelector('.win').style.display = "none";
          }
        </script>
  </div>
  <div v-if="type==4">
            <!-- 入货信息4 -->
            <section class="message_1 message_2">
              <div class="date">
                <span>*以下为上次数据，若无出入可直接提交，若有不同，可点击操作</span>
              </div>
              <table>
                <tr>
                  <td>菜名</td>
                  <td>进货渠道</td>
                  <td>档口</td>
                  <td>数量</td>
                </tr>
                <tr class="message_3 message_4">
                  <td>千张</td>
                  <td>山东祁连大棚蔬菜···</td>
                  <td>12号</td>
                  <td>80kg</td>
                </tr>
              </table>
              <!-- 蔬菜名 -->
              <article class="vegetables">
                <div class="greens">
                  <div class="greens_dowm">
                    <a class="add">+</a>
                  </div>
                </div>
              </article>
            </section>
              <!-- 提交 -->
            <section class="submit">
              <article class="button">
                <div>
                  <input type="submit">
                </div>
              </article>
            </section>
            <!-- 显示框1 -->
            <section class="win_1">
                <article class="complete">
                  <div class="code">
                    <p>生菜</p>
                    <hr>
                    <p>编辑</p>
                    <hr>
                    <p>删除</p>
                  </div>
                </article>
              </section>
          </section>
          <script>
          // 显示框
          document.querySelector('.add').onclick = function(){
              document.querySelector('.win_1').style.display = "block";
          }

          document.querySelector('p').onclick = function(){

              document.querySelector('.win_1').style.display = "none";
          }
        </script>
  </div>

</template>

<script>
  import { Scroller,Checklist,Box,XButton} from 'vux'
  import ajax from 'src/ajax/index.js'
  import encryption from 'src/assets/js/encryption.js'

  var dataItem;
  export default {
		name: "cargoinfo",
		ready(){
      this.type = 1;
		},
		components: {
	    Scroller,Checklist,Box,XButton
	  },
		data() {
			return {
        type:""
			}
		},
		methods: {
      goClassification() {
        this.$router.go('/classification');
      },

			//登陆
			onLogin(){
					this.disablevalue=true;
					//执行登陆
					ajax.post("checkPublished", {
						pageSize: "3",
						pageNum: "1",
						marketName:"bc96731e521811e6987cf8cab858db3f"
					}, (status,data) => {
						if(status){
							if(data.length>0){
								mui.toast("获取测试数据成功");
							}else{
								mui.toast("获取测试数据失败");
							}
						}
						this.disablevalue=false;
					},false)
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../../assets/css/allCss.css"></style>
