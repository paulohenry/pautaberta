

const compareDate = (createDate:string)=>{
    const createdDate = new Date(createDate)
    const currentDate = new Date()

    if(currentDate.getFullYear() === createdDate.getFullYear()){
      if(currentDate.getMonth() === createdDate.getMonth()){
        const currentDay = currentDate.getDate() > 9 ? currentDate.getDate() : `0${currentDate.getDate()}`
        const createdDay = createdDate.getDate() > 9 ? createdDate.getDate() : `0${createdDate.getDate()}`

        const result = Number(currentDay) - Number(createdDay)

        if(result>0){
          return `atualizado há ${result} dias`
        }else{
          return `atualizado hoje`
        }
      }
    }

}

export default compareDate
