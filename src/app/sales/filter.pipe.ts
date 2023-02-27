import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(salesInfo:any, input:number):any {
   if(input===salesInfo.ID)
   {
    return salesInfo.filter((val:any) => val.indexOf(input) >= 0)
   }else{
    return salesInfo 
    }
   }
  }


