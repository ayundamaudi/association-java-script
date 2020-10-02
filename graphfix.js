var DAG = {'A': {'C': 4, 'G': 9},
       'G': {'E': 6},
       'C': {'D': 6, 'H': 12},
       'D': {'E': 7},
       'H': {'F': 15},
       'E': {'F': 8},
       'F': {'B': 5}};

function shortest_path(DAG,source,dest){
    var result = [], current_node, local_max,weight=0;
    result.push(source);

    while (!result.includes(dest)){ 
        current_node = result[result.length-1];
       local_max = getSortedKeys(DAG[current_node]);
        weight += DAG[current_node][local_max];
        result.push(local_max);
    }
    console.log(weight);
    console.log(result);
}
shortest_path(DAG,"A","B");

function getSortedKeys(obj) {
    var keys = Object.keys(obj);
    var allKeys = keys.sort(function(a,b){return obj[b]-obj[a]});

    return allKeys[allKeys.length-1];
}