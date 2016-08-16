<template>
  <input type='button' @click='startRecognize' value='创建扫描控件' />
  <input type='button' @click='startScan' value='开始扫描' />
  <input type='button' id="cancel1" value='取消扫描' />
  <input type='button' @click='setFlash' value='开启闪光灯' />
  <div id= "bcid"></div>
</template>

<script>
  import { Scroller,Checklist,Box,XButton} from 'vux'
  import ajax from 'src/ajax/index.js'
  import encryption from 'src/assets/js/encryption.js'

  var scan = null;
  //扩展API加载完毕后调用onPlusReady回调函数
  document.addEventListener( "plusready", onPlusReady, false );


  var dataItem;
  export default {
		name: "checkPublished",
		ready(){
      //执行登陆
      ajax.post("checkPublished", {
        pageSize: "3",
        pageNum: "1",
        marketName:"bc96731e521811e6987cf8cab858db3f"
      }, (status,data) => {
        if(status){
          if(data.length!=null){
            this.dataItem = data;
            mui.toast("获取测试数据成功");
          }else{
            mui.toast("获取测试数据失败");
          }
        }
        //this.disablevalue=false;
      },false)
		},
		components: {
	    Scroller,Checklist,Box,XButton
	  },
		data() {
			return {
        dataItem:""
			}
		},
		methods: {
      onmarked( type, result ) {
        var text = '未知: ';
        switch(type){
          case plus.barcode.QR:
            text = 'QR: ';
            break;
          case plus.barcode.EAN13:
            text = 'EAN13: ';
            break;
          case plus.barcode.EAN8:
            text = 'EAN8: ';
            break;
        }

      },
      startRecognize() {//调用摄像头
        scan = new plus.barcode.Barcode('bcid');
        scan.onmarked = onmarked;
      },
      startScan() {//开始扫描
        scan.start();
      },
      cancelScan() {//取消扫描
        scan.cancel();
      },
      setFlash() {//开启闪光灯
        scan.setFlash();
      }
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
	-webkit-user-select: none;
}
html,body{
	margin: 0px;
	padding: 0px;
	height: 100%;
}
#bcid {
	background:#0F0;
	height:480px;
	width:360px;
}
</style>
