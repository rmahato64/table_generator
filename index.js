const rowsNumber = document.querySelector('.rows')
const columnNumber = document.querySelector('.column')
const widthPercentage = document.querySelector('.width')
const borderpixel = document.querySelector('.border-pixel')
const backgroundColor= document.querySelector('.background-color')
const headingColor = document.querySelector('.headColor')
const bordercolor = document.querySelector('.borderColor')
const fontType = document.querySelector('.fontType')
const fontSizeInput = document.querySelector('.font-size')
const fontW = document.querySelector('.fontweight')
const fontC = document.querySelector('.font-color')
const borderCollasp = document.querySelector('.BorderColl')
const textAlighOption = document.querySelector('.textAling')
const generateButton = document.querySelector('.generate')
const generatorDiv = document.querySelector('.divgenerate')
const getCode = document.querySelector('.code')
const codeBox = document.querySelector('.codeBox')

function getTable(){
  generatorDiv.innerHTML = ''
  let rowInput = rowsNumber.value
  let colInput = columnNumber.value
 /*  if(rowInput.value =='null' && colInput.value == 'null'){
    console.log('Please give the row number and column number')
  } */
  const tbl = document.createElement('table')
  const row = document.createElement('trow')
  //for loop here fix the heading of the table
  for(let i = 1; i<=colInput; i++){
    let thead = document.createElement('th')
    thead.textContent = 'Head' + i
    tbl.appendChild(thead)
    let h = headingColor.value
    if(h){
      thead.style.background = h
    }
    else if(h ='null'){
      thead.style.background = '#DCD5D5'
    }
  }

    for(let j = 1; j<=rowInput; j++){
      let tr = document.createElement('tr')
      for(let k = 1; k<=colInput; k++){
        let data = document.createElement('td')
        data.textContent = 'value'
        tr.appendChild(data)
      }
      
      tbl.appendChild(tr)

    }
  generatorDiv.appendChild(tbl)

  //down here all the field has been set for input field

let w=widthPercentage.value
if(w){
  tbl.style.width = w + '%'
}
else if(w="null"){
  tbl.style.width = 100 + '%'
}

let b = borderpixel.value
if(b){
  tbl.border = b +"%"
}
else if(b="null"){
  tbl.border = 5 + '%'
}
let bc = backgroundColor.value
if(bc %2 == 0){
  tbl.style.background = bc
}
else if(bc='null'){
  tbl.style.background = '#D0BBBB'
}

let bb = bordercolor.value
if(bb){
  tbl.style.borderColor = bb
}
else if(bb ='null'){
  tbl.style.background = '#DCD5D5'
}

let borderColl = borderCollasp.checked
if(borderColl == true){
  tbl.style.borderCollapse = "collapse"
}

let ft = fontType.value
if(ft){
  tbl.style.fontFamily = ft
}
else if(ft ='null'){
  tbl.style.fontFamily = '#DCD5D5'
}

let FC = fontC.value
if(FC){
  tbl.style.color = FC
}

let fs=fontSizeInput.value
if(fs){
  tbl.style.fontSize= fs + 'px'
}
else if(fs = 'null') {
  tbl.style.fontSize = 12 + 'px'
}

let align = textAlighOption.value
if(align){
  tbl.style.textAlign = align
}
let fW = fontW.value
if(fW){
  tbl.style.fontWeight = fW
} 
}
//adding the eventlistner to get code button
generateButton.addEventListener('click',getTable)
getCode.addEventListener('click',function(){
  let htmlcode = generatorDiv.outerHTML
  codeBox.textContent = htmlcode

})

