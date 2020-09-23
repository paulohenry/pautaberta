const choosePriority = (status:string):string=>{
  if(status==='high') {
      return 'alta'
  }
  if(status==='normal'){
      return 'normal'
  }
  if(status==='important'){
      return 'importante'
  }
  if(status==='urgency'){
      return 'urgente'
  }else{
      return 'não definido'
  }
}
export default choosePriority
