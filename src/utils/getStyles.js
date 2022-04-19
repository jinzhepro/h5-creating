/*
 * @Author: Monica
 * @Date: 2021-03-19 17:23:16
 * @LastEditors: Monica
 * @LastEditTime: 2021-03-22 11:31:40
 */
export const getResizeStyle = function (styles) {
  const obj = {}
  for (const key in styles) {
    if (Object.hasOwnProperty.call(styles, key)) {
      if (key === 'top' || key === 'left' || key === 'width' || key === 'height') {
        obj[key] = styles[key] + 'px'
      } else if (key === 'z-index') {
        obj[key] = styles[key]
      } else if (key === 'transform') {
        obj[key] = 'rotate(' + styles[key] + 'deg)'
      } else if (key === 'boxShadow') {
        obj[key] = styles.shadowX + 'px ' + styles.shadowY + 'px ' + styles.shadowW + 'px ' + styles.shadowC
      }
    }
  }
  return obj
}

export const getSelectStyle = function (styles) {
  const obj = {}
  for (const key in styles) {
    if (Object.hasOwnProperty.call(styles, key)) {
      if (key === 'width' || key === 'height') {
        obj[key] = styles[key] + 'px'
      }
    }
  }
  return obj
}

export const getComponentStyle = function (styles) {
  const result = {}
  result.textDecoration = ''
  Object.keys(styles).forEach(attr => {
    if (attr === 'width' || attr === 'height' || attr === 'fontSize') {
      result[attr] = styles[attr] + 'px'
    } else if (attr === 'writingMode') {
      result.writingMode = styles[attr] ? 'horizontal-tb' : 'vertical-lr'
    } else if (attr === 'fontStyle') {
      styles[attr].forEach(i => {
        if (i === 'bold') {
          result.fontWeight = 'bold'
        } else if (i === 'italic') {
          result.fontStyle = 'italic'
        } else if (i === 'decoration' || i === 'through') {
          if (i === 'decoration') {
            result.textDecoration += ' underline'
          } else {
            result.textDecoration += ' line-through'
          }
        }
      })
    } else if (attr === 'letterSpacing') {
      result[attr] = styles[attr] * styles.fontSize + 'px'
    } else if (attr === 'radiusType') {
      if (styles[attr] === 'all') {
        result.borderRadius = styles.borderRadius + '%'
      } else {
        result.borderRadius = styles.radiusTop + '% ' + styles.radiusRight + '% ' + styles.radiusBottom + '% ' + styles.radiusLeft + '%'
      }
    } else if (attr === 'borderShow') {
      if (styles[attr] === 'all') {
        result.borderWidth = styles.borderWidth + 'px !important'
      }
    } else if (attr === 'borderShows' && styles.borderShow === 'side') {
      if (styles[attr].indexOf('上') < 0) {
        result.borderTopWidth = '0px !important'
      } else {
        result.borderTopWidth = styles.borderWidth + 'px !important'
      }
      if (styles[attr].indexOf('下') < 0) {
        result.borderBottomWidth = '0px !important'
      } else {
        result.borderBottomWidth = styles.borderWidth + 'px !important'
      }
      if (styles[attr].indexOf('左') < 0) {
        result.borderLeftWidth = '0px !important'
      } else {
        result.borderLeftWidth = styles.borderWidth + 'px !important'
      }
      if (styles[attr].indexOf('右') < 0) {
        result.borderRightWidth = '0px !important'
      } else {
        result.borderRightWidth = styles.borderWidth + 'px !important'
      }
    } else if (attr === 'boxShadow') {
      result.boxShadow = 'inset ' + styles.insetShadowX + 'px ' + styles.insetShadowY + 'px ' + styles.insetShadowW + 'px ' + styles.insetShadowC
    } else {
      result[attr] = styles[attr]
    }
  })
  return result
}
