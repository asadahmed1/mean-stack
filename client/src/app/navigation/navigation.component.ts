import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
 public box1 = ''

 public tests = ['test1','test 2','test 3']



  constructor() {

  }

  ngOnInit() {

  }


  add(){
    // var operators = ["/","*","+","-"]
    // for (var i=0;i<operators.length;i++){
        // var splitting = this.box1.split();

    // var  for_split = this.box1.split('+')
    // var result = parseFloat(this.box1)
    // // console.log(for_split[2])
    // // return parseInt(for_split[0])+parseInt(for_split[1])
    // console.log(result)
    // return result
    // return parseInt(this.box1)+parseInt(this.box2)
    var expression = this.box1;
    var result= (eval(expression))
    return result
// var splitUp = expression.match(/[^\d()]+|[\d.]+/g);
// console.log(splitUp)
// var splits = (splitUp.join())
// console.log(splits)
// console.log(split.replace(',',''))
// for (var i=0;i<splitUp.length;i++){
  // var split = ((splitUp[i]))
  // console.log(split)
//   // console.log(split.join())
}
  // }
  // }

}

