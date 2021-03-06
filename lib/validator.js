var _private = {
    testString: function(){
        var pattern = /^.+$/i;
        return pattern.test(arguments[0]);
    },
    testInteger: function(){
        var pattern = /^-{0,1}\d+$/;
        return pattern.test(arguments[0]);
    },
    testPositiveInteger: function(){
        var pattern = /^\d+$/;
        return pattern.test(arguments[0]);
    },
    testNegativeInteger: function(){
        var pattern = /^-\d+$/;
        return pattern.test(arguments[0]);
    },
    testCurrency: function(){
        var pattern = /^-{0,1}\d*\.{0,2}\d+$/;
        return pattern.test(arguments[0]);
    },
    testDouble: function(){
        var pattern = /^-{0,1}\d*\.{0,1}\d+$/;
        return pattern.test(arguments[0]);
    },
    testPositiveDouble: function(){
        var pattern = /^\d*\.{0,1}\d+$/;
        return pattern.test(arguments[0]);
    },
    testNegativeDouble: function(){
        var pattern = /^-\d*\.{0,1}\d+$/;
        return pattern.test(arguments[0]);
    },
    testPhone: function(){
        var pattern = /^\+?[0-9\s]{8,16}/;
        return pattern.test(arguments[0]);
    },
    testYear: function(){
        var pattern = /^(19|20)[\d]{2,2}$/;
        return pattern.test(arguments[0]);
    },
    testDate: function(){
        return !isNaN(Date.parse(arguments[0]));
    },
    testIP: function(){
        var pattern = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return pattern.test(arguments[0]);
    },
    testPassword: function(){
        var pattern = /^[a-z0-9_-]{6,18}$/i;
        var pass = pattern.test(arguments[0]);
        return pass;
    },
    testEmail: function(){
        var pattern = /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i;
        return pattern.test(arguments[0]);
    },
    testDomain: function(){
        var pattern = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i;
        return pattern.test(arguments[0]);
    },
    testSubDomain: function(){
        var pattern = /^[a-z\d]+([-_][a-z\d]+)*$/i;
        return pattern.test(arguments[0]);
    },
	testHandle: function(){
		var pattern = /^[a-z\d\/\+\-\.]+$/i;
		return pattern.test(arguments[0]);
	},
    testURL: function(){
        var pattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i;
        return pattern.test(arguments[0]);
    },
	testUUID: function(){
		var pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
		return pattern.test(arguments[0]);
	}
};
module.exports = {
	test: function(type, input){
		switch(type){
			case "required":
				return String(input).length;
				break;
			case "string":
				return _private.testString(input);
				break;
			case "integer":
				return _private.testInteger(input);
				break;
			case "positiveinteger":
				return _private.testPositiveInteger(input);
				break;
			case "negativeinteger":
				return _private.testNegativeInteger(input);
				break;
			case "currency":
				return _private.testCurrency(input);
				break;
			case "double":
				return _private.testDouble(input);
				break;
			case "positivedouble":
				return _private.testPositiveDouble(input);
				break;
			case "negativedouble":
				return _private.testNegativeDouble(input);
				break;
			case "phone":
				return _private.testPhone(input);
				break;
			case "year":
				return _private.testYear(input);
				break;
			case "date":
				return _private.testDate(input);
				break;
			case "ip":
				return _private.testIP(input);
				break;
			case "password":
				return _private.testPassword(input);
				break;
			case "email":
				return _private.testEmail(input);
				break;
			case "domain":
				return _private.testDomain(input);
				break;
			case "subdomain":
				return _private.testSubDomain(input);
				break;
			case "handle":
				return _private.testHandle(input);
				break;
			case "url":
				return _private.testURL(input);
				break;
			case "uuid":
				return _private.testUUID(input);
				break;
			case "boolean":
				return (typeof input == "boolean");
				break;
		}
	}
};
