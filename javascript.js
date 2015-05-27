console.log("===============");
console.log('START Problem 001');
function Point(x,y) {
	this.x = x;
	this.y = y;
}
function Line(a, b) {
	this.a = a;
	this.b = b;
}
var point001 = new Point(0,3);
var point002 = new Point(5,1);
var point003 = new Point(0,1);
var point004 = new Point(10,10);
var lines = [];
lines[0] = new Line(point001,point002);
lines[1] = new Line(point004,point003);
lines[2] = new Line(point002,point003);
lines[3] = new Line(point002,point004);
lines[4] = new Line(point001,point004);
lines[5] = new Line(point003,point004);

var distanceCalculator = function (pointA, pointB) {
		return Math.sqrt(Math.pow(pointA.x - pointB.x, 2)+ Math.pow(pointA.y - pointB.y, 2));
};
var possibleTriangle = function (lineA, lineB, lineC) {
	var a1 = lineA.a;
	var a2 = lineA.b;
	var b1 = lineB.a;
	var b2 = lineB.b;
	var c1 = lineC.a;
	var c2 = lineC.b;
	if (   (distanceCalculator(a1, a2) + distanceCalculator(b1, b2) > distanceCalculator(c1, c2))  
        || (distanceCalculator(b1, b2) + distanceCalculator(c1, c2) > distanceCalculator(a1, a2))
        || (distanceCalculator(a1, a2) + distanceCalculator(c1, c2) > distanceCalculator(b1, b2))) {
            return true;
        }
    else {
    	return false;	
    }
};
console.log(distanceCalculator(point001,point002));
console.log(distanceCalculator(point002,point003));
console.log(distanceCalculator(point001,point004));
console.log(distanceCalculator(point004,point002));
console.log("and now the triangle check..");
for (var i = lines.length - 1; i >= 0; i--) {
	console.log(lines[i]);
}
for (var i = lines.length -1; i > 1; i--) {
	console.log( 'Is triangle possible : ' + possibleTriangle(lines[i],lines[i-1],lines[i-2]));
}
console.log('END Problem 001');
console.log("===============");
console.log("===============");
console.log('START Problem 002');
Array.prototype.remove = function (toRemove) {
	while (true) {
	    var index = this.indexOf(toRemove, index);
	    if (index !== -1) this.splice(index, 1);
	    else break;
	}
};
var arrOne = ['ala','bala','nica','bala', 45, 32, 45, 32,'bala'];
console.log("Before REMOVE : ");
for (var i = arrOne.length - 1; i >= 0; i--) {
	console.log(arrOne[i]);
}
arrOne.remove('bala');
arrOne.remove(45);
console.log("AFTER remove : ");
for (var i = arrOne.length - 1; i >= 0; i--) {
	console.log(arrOne[i]);
}
console.log('END Problem 002');
console.log("===============");
console.log("===============");
console.log('START Problem 003');
function deepCopy(customObject) {
	if (typeof customObject !== 'object' ) {
		return customObject;
	}
	var resultObject = new Object();
	for (var prop in customObject) {
		resultObject[prop] = customObject[prop];
	}
	return resultObject;
}
var james = {
    job: "programmer",
    married: false
};
var stamat = deepCopy(james);
console.log('Stamat is just as james now..')
console.log(stamat);
console.log('Stamat is '+stamat.job+' and he '+(stamat.married ?'is married':'is not married'));
console.log('END Problem 003');
console.log("===============");
console.log("===============");
console.log('START Problem 004');
var findProperty = function(customObject, customProp) {
	var founded = false;
	for (var prop in customObject) {
		if (customObject[prop] === customProp) {
			founded = true;
		};
	}
	return founded;
}
var text = 'abv';
var jobProperty = james.job;
var lengthProperty = text.length;
var answer = findProperty(stamat, jobProperty);
console.log('Do object [stamat] contains property [job] : ' + answer);
var answer2 = findProperty(stamat, lengthProperty);
console.log('Do object [stamat] contains property [lenght] : ' + answer2);
console.log('END Problem 004');
console.log("===============");
console.log("===============");
console.log('START Problem 005');
var people = [
  { firstname : 'Gosho', lastname: 'Petrov', age: 32 }, 
  { firstname : 'Pesho', lastname: 'Ivanov', age: 26},
  { firstname : 'Stamat', lastname: 'Petrov', age: 18 }, 
  { firstname : 'Gosho', lastname: 'Pehlivanski', age: 78},
  { firstname : 'Maria', lastname: 'Deva', age: 26},
  { firstname : 'Gosho', lastname: 'Petrov', age: 18 }, 
  { firstname : 'Petur', lastname: 'Pehlivanski', age: 18},
  { firstname : 'Maria', lastname: 'Ivanova', age: 26}
];
var findYongest = function(arr) {
	var youngestAge = arr[0].age;
	var youngestPerson = arr[0];
	for(var person in arr) {
		if (youngestAge > arr[person].age ) {
			youngestAge = arr[person].age;
			youngestPerson = arr[person];
		}
	}
	return youngestPerson;
};
console.log('The yougest person in the array is : ');
console.log(findYongest(people));
console.log('END Problem 005');
console.log("===============");
console.log("===============");
console.log('START Problem 006');
var group = function(arr, prop) {
	var resultArr = new Object();
	for (var person in arr) {
		var temp = arr[person][prop];
		if (resultArr[temp] === undefined || resultArr[temp] === null) {
			resultArr[temp] = [];
		};
		resultArr[arr[person][prop]].push(arr[person]);
	}
	return resultArr;
};

for (var i = people.length - 1; i >= 0; i--) {
	console.log(people[i]);
};
var groupedByAge = group(people, 'age');
console.log('Grouped by AGE:')
console.log(groupedByAge);
var groupedByFirstname = group(people, 'firstname');
console.log('Grouped by first name:')
console.log(groupedByFirstname);
var groupedByLastName = group(people, 'lastname');
console.log('Grouped by last name:')
console.log(groupedByLastName);
console.log('END Problem 006');
console.log("===============");