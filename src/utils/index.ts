class Storage {
  private instance
  private keys: { [key: string]: string } = {}
  constructor(instance: any) {
    this.instance = instance
    // window.addEventListener('beforeunload', this.clearAll)
  }
  clearAll() {
    Object.keys(this.keys).forEach((key) => {
      this.remove(key)
    })
  }
  /**
   * 添加前缀
   * @param {string} key
   * @returns {string} 'ms_' + key
   */
  _getKey(key: string) {
    return `ms_${key}`
  }
  /**
   * 移除localStorage key value
   * @param {string} key 键值
   * @returns
   */
  remove(key: string) {
    return key && this.instance.removeItem(this._getKey(key))
  }
  /**
   * setItem key value
   * @param {string} key
   * @param {any} value
   * @returns
   */
  setItem(key: string, value: any) {
    this.keys[key] = key
    return key && this.instance.setItem(this._getKey(key), JSON.stringify(value))
  }
  /**
   * getItem
   * @param {string} key
   * @returns {any}
   */
  getItem(key: string) {
    return JSON.parse(this.instance.getItem(this._getKey(key)))
  }
}
/**
 * localStorage 存储
 */
export const storage = new Storage(window.sessionStorage)
