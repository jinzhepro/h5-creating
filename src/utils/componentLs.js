/*
 * @Author: Monica
 * @Date: 2021-03-19 13:29:57
 * @LastEditors: Monica
 * @LastEditTime: 2021-03-24 10:59:24
 */
/*
  width: 200,
  height: 200,
  left: 100,
  top: 100,
  fontFamily: 'FangSong', 字体
  fontSize: 14, 字体大小
  color: "#000", 字体颜色
  backgroundColor: "pink", 背景颜色
  textAlign: "left",
  writingMode: true, 对齐方式：true 水平对齐 false 垂直对齐
  fontStyle: ["bold"], 字体样式 bold，italic倾斜，decoration下划线，through删除线
  lineHeight: 1, 行间距
  letterSpacing: 0, 字间距
  opacity: 0.7, 透明度
  transform: 0, 旋转
  borderStyle: 'solid', 边框样式
  borderColor: '#000',
  borderWidth: 10,
  borderShow: 'side', // all 全部，side单边
  borderShows: ['下'], //上下左右
  borderRadius: 0,
  radiusType: 'all', // all 全部圆角，side独立圆角
  radiusTop: 0,
  radiusRight: 20,
  radiusLeft: 0,
  radiusBottom: 10,
  boxShadow: 'default', //default 外阴影， inset 内阴影
  shadowC: '', 阴影颜色
  shadowX: 0, x偏移
  shadowY: 0, y偏移
  shadowW: 10, 模糊度
  insetShadowC: '',
  insetShadowX: 0,
  insetShadowY: 0,
  insetShadowW: 20,
  openType: 'blank', 打开方式
 */
export const baseLs = [
  {
    type: 'i-text',
    label: '文字',
    propValue: '请输入文字',
    id: 1,
    attr: {
      title: '文字名称',
      fontFamily: 'FangSong',
      fontSize: 14,
      color: '#000',
      backgroundColor: 'pink',
      textAlign: 'left',
      writingMode: true,
      fontStyle: []
    },
    styles: {
      width: 200,
      height: 200,
      left: 100,
      top: 100,
      // fontFamily: 'FangSong',
      // fontSize: 14,
      // color: "#000",
      // backgroundColor: "pink",
      // textAlign: "left",
      // writingMode: true,
      // fontStyle: ["bold"],
      // lineHeight: 1,
      // letterSpacing: 0,
      // opacity: 0.7,
      // transform: 0,
      // borderStyle: 'solid',
      // borderColor: '#000',
      // borderWidth: 0,
      // borderShow: 'all', // all 全部，side单边
      // borderShows: ['下'], //上下左右
      // borderRadius: 0,
      // radiusType: 'all', // all 全部圆角，side独立圆角
      // radiusTop: 0,
      // radiusRight: 20,
      // radiusLeft: 0,
      // radiusBottom: 10,
      // boxShadow: 'default', //default 外阴影， inset 内阴影
      // shadowC: '',
      // shadowX: 0,
      // shadowY: 0,
      // shadowW: 0,
      // insetShadowC: '',
      // insetShadowX: 0,
      // insetShadowY: 0,
      // insetShadowW: 0,
      'z-index': 0
    }
  },
  {
    type: 'i-color-block',
    label: '色块',
    propValue: '#cccccc',
    id: 76176023981754,
    attr: {
      title: '色块名称',
      backgroundColor: 'pink'
    },
    styles: {
      width: 200,
      height: 30,
      left: 100,
      top: 100,
      backgroundColor: 'pink',
      borderStyle: 'solid',
      borderColor: '#000',
      borderWidth: 0,
      borderShow: 'all',
      borderShows: ['下'],
      borderRadius: 0,
      radiusType: 'all',
      radiusTop: 0,
      radiusRight: 20,
      radiusLeft: 0,
      radiusBottom: 10,
      boxShadow: 'default',
      shadowC: '',
      shadowX: 0,
      shadowY: 0,
      shadowW: 0,
      insetShadowC: '',
      insetShadowX: 0,
      insetShadowY: 0,
      insetShadowW: 0,
      'z-index': 0
    }
  },
  {
    type: 'i-link',
    label: '链接',
    propValue: '#cccccc',
    id: 61696859099967,
    attr: {
      title: '链接名称'
    },
    styles: {
      width: 200,
      height: 30,
      left: 100,
      top: 100,
      openType: 'blank',
      'z-index': 0
    }
  },
  {
    type: 'i-img',
    label: '图片',
    attr: {
      title: '商品图片'
    },
    id: 52467012067362,
    propValue: 'https://placehold.it/100',
    styles: {
      width: 200,
      height: 200,
      left: 100,
      top: 100,
      opacity: 0.7,
      borderStyle: 'solid',
      borderColor: '#000',
      borderWidth: 0,
      borderShow: 'side',
      borderShows: ['下'],
      borderRadius: 0,
      radiusType: 'all',
      radiusTop: 0,
      radiusRight: 20,
      radiusLeft: 0,
      radiusBottom: 10,
      boxShadow: 'default',
      shadowC: '',
      shadowX: 0,
      shadowY: 0,
      shadowW: 0,
      'z-index': 0,
      boxSizing: 'border-box'
    }
  }
  // { "type": "i-group", "label": "组合", "id": 1615941654721, "attr": [{ "type": "i-color-block", "value": "#cccccc", "id": "1615941646970" }, { "title": "商品名称", "type": "i-text", "value": "请输入文字", "id": "1615941648198" }], "propValue": [{ "type": "i-color-block", "label": "色块", "propValue": "#cccccc", "styles": { "width": 200, "height": 30, "left": 1, "top": 0, "z-index": 0 }, "id": "1615941646970" }, { "type": "i-text", "label": "文字", "propValue": "请输入文字", "attr": { "title": "商品名称" }, "styles": { "width": 200, "height": 30, "left": 0, "top": 34, "fontFamily": "FangSong", "fontSize": 14, "color": "#000", "backgroundColor": "rgba(255, 255, 255, 0)", "textAlign": "left", "fontStyle": ["bold"], "z-index": 0 }, "id": "1615941648198" }], "styles": { "top": 92, "left": 227, "width": 201, "height": 64 } },
  // { "type": "i-group", "label": "组合", "id": 1615800408364, "propValue": [{ "type": "i-text", "label": "文字", "propValue": "请输入文字", "attr": { "title": "商品名称" }, "styles": { "width": 200, "height": 30, "left": 5, "top": 0, "fontFamily": "FangSong", "fontSize": 14, "color": "#000", "backgroundColor": "rgba(255, 255, 255, 0)", "textAlign": "left", "fontStyle": ["bold"], "z-index": 0 }, "id": "1615800401877" }, { "type": "i-img", "label": "图片", "attr": { "title": "商品图片" }, "propValue": "https://placehold.it/100", "styles": { "width": 200, "height": 200, "left": 0, "top": 28, "color": "blue", "z-index": 0 }, "id": "1615800402965" }], "styles": { "top": 147, "left": 255, "width": 205, "height": 228 } }
]

export const a = '{"type":"i-group","label":"组合","id":1616554743365,"attr":[{"title":"文字名称","fontFamily":"FangSong","fontSize":14,"color":"#000","backgroundColor":"pink","textAlign":"left","writingMode":true,"fontStyle":[],"type":"i-text","value":"请输入文字","id":"1616554154197"},{"title":"色块名称","backgroundColor":"pink","type":"i-color-block","value":"#cccccc","id":"1616554163565"},{"title":"色块名称","backgroundColor":"pink","type":"i-color-block","value":"#cccccc","id":"1616554197205"}],"propValue":[{"type":"i-text","label":"文字","propValue":"请输入文字","id":"1616554154197","attr":{"title":"文字名称","fontFamily":"FangSong","fontSize":14,"color":"#000","backgroundColor":"pink","textAlign":"left","writingMode":true,"fontStyle":[]},"styles":{"width":716,"height":204,"left":14,"top":15,"fontFamily":"FangSong","fontSize":27,"color":"#000","backgroundColor":"pink","textAlign":"center","writingMode":true,"fontStyle":["bold"],"lineHeight":4.9,"letterSpacing":0,"opacity":0.7,"transform":0,"borderStyle":"solid","borderColor":"#B179E1","borderWidth":6,"borderShow":"all","borderShows":["下"],"borderRadius":4,"radiusType":"all","radiusTop":0,"radiusRight":20,"radiusLeft":0,"radiusBottom":10,"boxShadow":"default","shadowC":"","shadowX":0,"shadowY":0,"shadowW":0,"insetShadowC":"","insetShadowX":0,"insetShadowY":0,"insetShadowW":0,"z-index":0}},{"type":"i-color-block","label":"色块","propValue":"#cccccc","id":"1616554163565","attr":{"title":"色块名称","backgroundColor":"pink"},"styles":{"width":370,"height":300,"left":18,"top":234,"backgroundColor":"#46C1F5","borderStyle":"solid","borderColor":"#F50B32","borderWidth":2,"borderShow":"all","borderShows":["下"],"borderRadius":1,"radiusType":"all","radiusTop":0,"radiusRight":20,"radiusLeft":0,"radiusBottom":10,"boxShadow":"default","shadowC":"","shadowX":0,"shadowY":0,"shadowW":0,"insetShadowC":"","insetShadowX":0,"insetShadowY":0,"insetShadowW":0,"z-index":0}},{"type":"i-color-block","label":"色块","propValue":"#cccccc","id":"1616554197205","attr":{"title":"色块名称","backgroundColor":"pink"},"styles":{"width":300,"height":300,"left":422,"top":234,"backgroundColor":"pink","borderStyle":"solid","borderColor":"#8CD2BF","borderWidth":2,"borderShow":"all","borderShows":["下"],"borderRadius":1,"radiusType":"all","radiusTop":0,"radiusRight":20,"radiusLeft":0,"radiusBottom":10,"boxShadow":"default","shadowC":"","shadowX":0,"shadowY":0,"shadowW":0,"insetShadowC":"","insetShadowX":0,"insetShadowY":0,"insetShadowW":0,"z-index":0}}],"styles":{"top":0,"left":0,"width":0,"height":"560"}}'
