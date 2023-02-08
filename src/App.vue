<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import wx from 'weixin-js-sdk'
import { isWeChatDevTools } from '@/utils/env'
import Api from '@/API/api'
const shareCount = ref(0)
const isWeChat = isWeChatDevTools()

onMounted(() => {
  if (isWeChat) {
    share()
  }
})
const share = async () => {
  //获取微信分享参数
  let res = await Api.GetSign({ url: location.href })

  console.log(res, '微信二次分享')
  if (res.data.Code != 0) {
    shareCount.value++
    if (shareCount.value < 3) {
      share()
    }
    return
  }
  shareCount.value++
  let data = res.data.data
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: data.appId, // 必填，公众号的唯一标识
    timestamp: data.timestamp, // 必填，生成签名的时间戳
    nonceStr: data.nonceStr, // 必填，生成签名的随机串
    signature: data.signature, // 必填，签名
    jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'] // 必填，需要使用的JS接口列表
  })
  /** 
			字段解释：
				1、H5点击，eventType是传2，type传7。
				2、H5曝光，eventType是传1，type传2。
				如果表示页面的曝光（进入），eventType失去意义，可以不传。
				3、channel，项目名。
				4、pageId，页面名。
				5、spaceId，点击事件传。
				6、dayid，日期
				7、pv和uv

			页面读取：
				dayid（某天）+ channel（项目）+ pageId（页面）+ pv + uv

			事件格式：
				dayid（某天）+ channel（项目）+ pageId（页面）+  spaceId（事件/按钮） + pv + uv
		*/
  wx.ready(function () {
    let share_info = {
      title: '',
      desc: '',
      // link:location.href.split('#')[0],
      link: location.href + '&ts=' + new Date().getTime(),
      imgUrl: 'https://jq.zuimeitianqi.com/webPage/bloodMoon/img/share_icon.png'
    }
    //分享至朋友/QQ好友
    wx.updateAppMessageShareData({
      title: share_info.title, // 分享标题
      desc: share_info.desc, // 分享描述
      link: share_info.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: share_info.imgUrl,
      success: () => {
        console.log('修改分享参数成功')
      },
      fail: () => {
        shareCount.value++
        if (shareCount.value < 3) {
          share()
        }
      }
    })
    //分享至QQ空间/朋友圈
    wx.updateTimelineShareData({
      title: share_info.title, // 分享标题
      link: share_info.link,
      imgUrl: share_info.imgUrl
    })
  })
}
</script>
