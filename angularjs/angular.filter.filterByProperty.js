/**
 * filter an array with AngularJS' filter method
 */

.filter('filterByProperty', function(){
    return function( items, propMatch ){
        var filtered = [];
        for (var i = 0; i < items.length; i++) {
          var item = items[i];
          for(var property in propMatch){
            if (propMatch[property] == item[property]) {
              filtered.push(item);
            }
          }
        }
        return filtered;
    };
})
