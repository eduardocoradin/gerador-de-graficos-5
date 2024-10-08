const getCSS =(variavel)=>{
    const bodystyles = getComputedStyle(document.body)
    return bodystyles.getPropertyValue(variavel)
}
const tickConfig={
    family: getCSS('--font'),
    size :16,
    color: getCSS('--primary-color')
}
export{getCSS, tickConfig}