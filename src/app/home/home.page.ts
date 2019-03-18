import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

val1 : number = 0;
val2 : number = 0;
valor: number;

somar () :void{
  let total = Number(this.val1) + Number(this.val2);
  alert("A soma é:"+total);
  if (total %2 ==0){
    alert ( "É par")
  } else {
     alert( "É impar")
  }

}
}
