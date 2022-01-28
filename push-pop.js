var nameList = ['kalam', 'molom', 'gelon'];
//var newAdd = nameList.push('balam');eta ke dekhte caile legnth show korbe
nameList.push('palam');//evabeo lekha zaite pare
nameList.push(19);
nameList.pop();
nameList.pop();
nameList.pop();
var secondLast = nameList.pop();
nameList.unshift('saim');
// nameList.unshift('saim');
// nameList.shift('kalam');
nameList.shift('kalam');
console.log(nameList);
console.log(secondLast);