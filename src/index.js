module.exports = function check(str, bracketsConfig) {
//function check(str, bracketsConfig) {
  // your solution
  const templates = bracketsConfig.map(e => new RegExp (`(${e[0]}${e[1]})`,'g'));
  const templatesMasked = bracketsConfig.map(e => new RegExp (`(\\${e[0]}\\${e[1]})`,'g'));
  
 while (str.length>0){
    let len = str.length;
    for (let i = 0; i< templates.length; i++){
        str = str.replace(templates[i],'')
        str = str.replace(templatesMasked[i],'')
    }
        if (len === str.length) return false
  }
  return true
}


