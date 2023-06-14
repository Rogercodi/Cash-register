export type cashUnit = [string, number];
export type cashTotal = cashUnit[];
export type result = {
  status: string;
  change: cashTotal;
};

export type myObject = {
  rounded: Function
};
export const sayHello = ():void => console.log('hola');

const helper: myObject = {
  rounded: (num: number): number => Number(num.toFixed(2)),
};



export function checkCashRegister(price: number, cash: number, cid: cashTotal):any {
  
  let reduced: cashTotal = [...cid]; 
  let totalCash = reduced
    .reduce((a: number, b: cashUnit) => b[1] + a, 0)
    .toFixed(2); 
  let totalAmount: number = Number(totalCash);

  let change: number = cash - price;
  var obj: result = { status: "", change: [] };

  if (totalAmount < change) {
    obj.status = "INSUFFICIENT_FUNDS";
  }

  for (let i = cid.length - 1; i >= 0; i--) {
    if (totalAmount === change) {
      obj.status = "CLOSED";
      obj.change = cid;
    }
  }

  obj.change.reverse();

  if (totalAmount > change) {
    let updatedchg: number = change;

    let passhun = true;
    let passtwen = true;
    let passten = true;
    let passfive = true;
    let passone = true;
    let passquart = true;
    let passdime = true;
    let passnick = true;
    let passpen = true;
    let hundred = true;
    let twenty = true;
    let ten = true;
    let five = true;
    let one = true;
    let quarter = true;
    let dime = true;
    let nickel = true;
    let penny = true;

    for (let i = cid.length - 1; i >= 0; i--) {
      // console.log(cid[i])
      if (updatedchg >= 100 && hundred) {
        let arr: cashUnit = [...cid[i]];
        arr[1] = 0;

        while (updatedchg >= 100 && cid[i][1] > 0) {
          arr[1] += 100;
          updatedchg -= 100;
          cid[i][1] -= 100;
        }

        obj.change.push(arr);
        hundred = false;
          
      }

      if (passhun) {
          passhun = false;
          continue;
      }

      if (updatedchg >= 20 && twenty) {
        let arr: cashUnit = [...cid[i]];
        arr[1] = 0;

        while (updatedchg >= 20 && cid[i][1] > 0) {
          arr[1] += 20;
          updatedchg -= 20;
          cid[i][1] -= 20;
        }
        
        obj.change.push(arr);
        twenty = false;
        
      };


      if (passtwen) {
        passtwen = false;
        continue;
      }

      if (updatedchg >= 10 && ten) {
        let arr: cashUnit = [...cid[i]];
        arr[1] = 0;

        while (updatedchg >= 10 && cid[i][1] > 0) {
          arr[1] += 10;
          updatedchg -= 10;
          cid[i][1] -= 10;
        }
        
        obj.change.push(arr);
        ten = false;
        
        
      }

      if (passten) {
        passten = false;
        continue;
      }

      updatedchg = (helper.rounded)(updatedchg);

      if (updatedchg >= 5 && five) {
        console.log(cid[i][0], 'five')
        let arr: cashUnit = [...cid[i]];
        arr[1] = 0;

        while (updatedchg >= 5 && cid[i][1] >= 5) {
          
          arr[1] += 5;
          updatedchg -= 5;
          cid[i][1] -= 5;
        }

        obj.change.push(arr);
        five = false;
       
      }
      if (passfive) {
        
        passfive = false;
        continue;
      }

      if (updatedchg >= 1 && one) {
        
        let arr: cashUnit = [...cid[i]];
        arr[1] = 0;

        while (updatedchg >= 1 && cid[i][1] >= 1) {
          arr[1] += 1;
          updatedchg -= 1;
          cid[i][1] -= 1;
          
        }

        obj.change.push(arr);
        one = false;
      }

      if (passone) {
        passone = false;
        continue;
      }

      if (updatedchg >= 0.25 && quarter) {
        let arr: cashUnit = [...cid[i]];
        arr[1] = 0;

        while (updatedchg >= 0.25 && cid[i][1] > 0) {
          arr[1] += 0.25;
          updatedchg -= 0.25;
          cid[i][1] -= 0.25;
        }

        obj.change.push(arr);
        quarter = false;
      }
      if (passquart) {
        passquart = false;
        continue;
      }

      updatedchg = (helper.rounded as Function)(updatedchg);

      if (updatedchg >= 0.1 && dime) {
        let arr: cashUnit = [...cid[i]];
        arr[1] = 0;

        while (updatedchg >= 0.1 && cid[i][1] > 0) {
          arr[1] += 0.1;
          updatedchg -= 0.1;
          cid[i][1] -= 0.1;
        }

        obj.change.push(arr);
        dime = false;
      }
      if (passdime) {
        passdime = false;
        continue;
      }

      if (updatedchg >= 0.05 && nickel) {
        let arr: cashUnit = [...cid[i]];
        arr[1] = 0;

        while (updatedchg >= 0.05 && cid[i][1] > 0) {
          arr[1] += 0.05;
          updatedchg -= 0.05;
          cid[i][1] -= 0.05;
        }

        obj.change.push(arr);
        nickel = false;
      }

      if (passnick) {
        passnick = false;
        continue;
      }

      if (updatedchg >= 0.01 && penny) {
        let arr: cashUnit = [...cid[i]];
        arr[1] = 0;
        while (updatedchg > 0 && cid[i][1] > 0) {
          arr[1] += 0.01;
          updatedchg -= 0.01;
          updatedchg = (helper.rounded)(updatedchg);
          cid[i][1] -= 0.01;
        }

        obj.change.push(arr);
        penny = false;
      }

      if (passpen) {
        passpen = false;
        continue;
      }
    }

    obj.status = "OPEN";

    if (updatedchg !== 0) {
      obj.status = "INSUFFICIENT_FUNDS";
      obj.change = [];
    }
  }

  obj.change.sort(function (a: cashUnit, b: cashUnit) {
    return b[1] - a[1];
  });
  
 return obj;
 
};







