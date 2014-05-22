var ArrayIterator = function(){
			var iter = function(array,index) {
    			this.items = array;
    			this.index = index;
			}

			iter.prototype = {
				next: function() {
					if (!this.hasNext()){
	    			this.index = -1;
	    		}
	        return this.items[++this.index];
	    	},
	    	hasNext: function() {
	        return this.index != this.items.length-1;
	    	},
	    	reset: function() {
	        this.index = 0;
		    },
		    previous: function() {
	    		if (!this.hasPrevious()) {
	    			this.index = this.items.length;
	    		}
	        return this.items[--this.index];
	    	},
	    	hasPrevious: function() {
	        	return this.index != 0;
	    	}
			}

			return iter;
		}
