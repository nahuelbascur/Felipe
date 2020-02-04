
function returnlargest(x){
	var max=x[0];
 	for(var i=0;i<x.length;i++) {
	 	if(x[i] > max) {
	 	max=x[i];
		}
	}
		return max;
	 }	
	a=returnlargest([1,3,10]);
	console.log(a);

	describe("returnlargest", function() { 
    it("should return 10 when we pass [1,3,10] as an argument", function() { 
        expect(returnlargest([1,3,10])).toEqual(10); 
    }); 
    it("should return 6 when we pass [6,2.18,1] as an argument", function() { 
        expect(returnlargest([6,2.18,1])).toEqual(6); 
    }); 
    it("should return -8 when we pass [-66,-11.5,-8.000001] as an argument", function() { 
        expect(returnlargest([-66,-11.5,-8.000001,-8])).toEqual(-8); 
    }); 
});