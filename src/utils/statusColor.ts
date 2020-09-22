const statusColor = (color:string) =>{
  if(color==='urgency') {
     return '#FEC400'
  }
  if(color==='normal'){
     return '#9FA2B4'
  }
  if(color==='high'){
   return '#C8372D'
  }
  if(color==='important'){
    return '#29CC97'
  }else{
    return '#252733'
  }
}
export default statusColor
