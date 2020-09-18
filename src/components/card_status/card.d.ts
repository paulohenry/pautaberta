declare module 'card-status'{
  
  interface CardStatusProps{
    borderColor:
    'progress'|'opens'|'waitings'|'solveds'|'black';
    contentColor:
    'progress'|'opens'|'waitings'|'solveds'|'black';
    status?:string;
    quantities?:number;
  }
  
}