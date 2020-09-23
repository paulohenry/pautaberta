const dataFormatted2 = (date?:string)=>{
  if(date){
    const formattedDate = new Date(date);
    const year = formattedDate.getFullYear();

    const day = formattedDate.getDate() > 9 ? formattedDate.getDate() : `0${formattedDate.getDate()}`
    const month = (formattedDate.getMonth() + 1) > 9 ? (formattedDate.getMonth()+1) : `0${(formattedDate.getMonth()+1)}`;

    return `${year}/${month}/${day}`

  }else{
    const formattedDate = new Date();
    const year = formattedDate.getFullYear();

    const day = formattedDate.getDate() > 9 ? formattedDate.getDate() : `0${formattedDate.getDate()}`
    const month = (formattedDate.getMonth() + 1) > 9 ? (formattedDate.getMonth()+1) : `0${(formattedDate.getMonth()+1)}`;
    console.log(`${year}/${month}/${day}`)
    return `${year}/${month}/${day}`
  }
}
export default dataFormatted2
