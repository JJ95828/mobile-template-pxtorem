<script lang="ts" setup>
interface PropsType {
  /**
   * 是否显示弹出窗
   */
  show: boolean
  /**
   * z-index 弹窗层叠值
   */
  zIndex?: number
  /**
   * 弹窗显示的位置
   */
  position?: 'center' | 'left' | 'right' | 'bottom'
  /**
   * 弹窗 插入的位置，默认当前位置。可改为 body。
   * 参数类型Element ｜ 选择器的值 string
   */
  teleport?: string
  /**
   * 是否显示关闭按钮
   */
  isCloseBtn?: boolean
  /**
   * 是否开启点击遮罩层关闭
   * 默认开启
   */
  isShadeClose?: boolean
}
const props = withDefaults(defineProps<PropsType>(), {
  show: false,
  zIndex: 2000,
  position: 'center',
  isShadeClose: true
})
const emit = defineEmits<{
  /**
   * 触发更新弹出窗变更
   */
  (e: 'update:show', value: boolean): void
  /**
   * popup 关闭时触发
   */
  (e: 'close'): void
  /**
   * 打开弹出层时触发
   */
  (e: 'open'): void
}>()
const close = () => {
  emit('update:show', false)
  emit('close')
}

watchEffect(() => {
  if (props.show) {
    emit('open')
  }
})
</script>
<template>
  <Transition name="fade-away">
    <Teleport :disabled="!props.teleport" :to="props.teleport">
      <div v-show="props.show" :class="`zm-popup zm-popup-${props.position}`" v-bind:="$attrs" :style="{ zIndex: props.zIndex + 1 }">
        <div class="zm-popup-content">
          <div class="zm-popup-close-btn" @click="close"></div>
          <div class="zm-popup-body">
            <slot></slot>
          </div>
        </div>
      </div>
      <div v-show="props.show" class="zm-shade" :style="{ zIndex: props.zIndex }" @click="props.isShadeClose ? close : () => {}"></div>
    </Teleport>
  </Transition>
</template>
<style lang="less" scoped>
.zm {
  &-shade {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(#000000, 0.6);
  }
  &-popup {
    position: fixed;
    box-sizing: border-box;
    background-color: #ffffff;
    transition: all 0.28s;

    /**
     * 布局
     */
    &-center {
      left: 50%;
      top: 50%;
      width: fit-content;
      transform: translate3d(-50%, -50%, 0);
    }
    &-left {
      left: 0;
      top: 50%;
      transform: translate3d(0, -50%, 0);
    }
    &-bottom {
      left: 50%;
      bottom: 0;
      transform: translate3d(-50%, 0, 0);
    }
    &-top {
      left: 50%;
      top: 0;
      transform: translate3d(-50%, 0, 0);
    }
    &-right {
      top: 50%;
      right: 0;
      transform: translate3d(0, -50%, 0);
    }
  }
}
.before-after(@rotate) {
  position: absolute;
  display: inline-block;
  content: '';
  width: 0.03rem;
  height: 0.25rem;
  background-color: #505050;
  border-radius: 0.05rem;
  transform: rotate(@rotate);
}
.zm-popup {
  &-content {
    position: relative;
  }
  &-body {
    width: fit-content;
    max-height: 100vh;
    overflow-y: auto;
  }
  &-close-btn {
    position: absolute;
    top: -0.6rem;
    right: 0.2rem;
    width: 0.4rem;
    height: 0.4rem;
    background: rgba(#fefff2, 0.5);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &::after {
      .before-after(45deg);
    }
    &::before {
      .before-after(-45deg);
    }
  }
}
</style>
