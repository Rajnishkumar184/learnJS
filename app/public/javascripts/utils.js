// Generated by CoffeeScript 1.8.0
var util, utils;

utils = {
  print: {

    /*
    
    			To log data with different notifications like normal, error, warning ...
    
    			* @data String | Object
    			* @type String
     */
    log: function(data, type) {
      return console.log(data);
    },

    /*
    			
    			To simplify multiple log for priting the data and a pattern
    
    			* @data 		String | Object
    			* @pattern 	String 
    			* @count 		Integer
     */
    pattern: function(data, pattern, count) {
      var newPattern;
      if (data == null) {
        data = 'Sample Data';
      }
      if (pattern == null) {
        pattern = '*';
      }
      if (count == null) {
        count = 50;
      }
      newPattern = '';

      /*
      			 
      			 avoid for(i = 0; i < count; i++) to reduce variable count
      
      			 use below when array
      
      					max  = array.length
      
      					* cache length in local var
      					while max--
      						..do something
       */
      while (count--) {
        newPattern = newPattern.concat(pattern);
      }
      console.log(data);
      return console.log(newPattern);
    }
  }
};

for (util in utils) {
  if (Object.prototype.hasOwnProperty.call(utils, util)) {
    window[util] = utils[util];
  }
}