import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float"

actor DBank{
  var currentValue:Float = 300;
  currentValue:=100;

  stable var startTime=Time.now();
  Debug.print(debug_show(startTime));

  public func topUp(amount:Float){
    currentValue+=amount;
    Debug.print(debug_show(currentValue));
  };

  public func topDown(amount:Float){
    // let tempValue:Float=currentValue-amount;
    //     Debug.print(debug_show(tempValue));
    // }
    // else{

    // }
    currentValue-=amount;
    Debug.print(debug_show(currentValue));
  };

  public query func getAmount():async Float{
    Debug.print(debug_show(currentValue));
    return currentValue;
  };

  public func compoundInterest(){
    var timeDiff=(Time.now()-startTime)/1000000000;
    Debug.print(debug_show(timeDiff));
    currentValue:= currentValue * ((1.0000001) ** Float.fromInt(timeDiff)); 
  }



  // topUp();

  // Debug.print("hello");
  // Debug.print(debug_show(currentValue));
  // Debug.print(debug_show(id));
}
