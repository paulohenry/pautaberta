const chooseColor = (color:string):string=>{
    if(color==='progress') {
        return '#0091FF'
    }
    if(color==='opens'){
        return '#E6E6E6'
    }
    if(color==='waitings'){
        return '#C8372D'
    }
    if(color==='solveds'){
        return '#29CC97'
    }else{
        return '#252733'
    }
}
export default chooseColor
