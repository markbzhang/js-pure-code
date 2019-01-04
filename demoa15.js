//根据乱序树数据，组合成根据父parent_id的有序数据

var data = [
	{id:1, parent_id:0,name:'xx1'},
	{id:6,parent_id:5,name:'xx6'},
	{id:4,parent_id:1,name:'xx4'},
	{id:7,parent_id:6,name:'xx7'},
	{id:3,parent_id:0,name:'xx3'},
	{id:2,parent_id:1,name:'xx2'},
	{id:5,parent_id:1,name:'xx5'},
	{id:99,parent_id:99,name:'xx99'},
	{id:8,parent_id:3,name:'xx8'}
];

function makeParentSortObj(data){

	var sortMap = function(filed1){
	   return function(a,b){
		  return a[filed1] - b[filed1];
	   }
	};

	data.sort(sortMap("parent_id"));
	
	var loop = function(data,inserData){
		for(let v of data)
		{
			if(v.id == inserData.parent_id)
			{
				if(Object.prototype.toString.call(v['data']) == '[object Array]')
				{
					v['data'].push(inserData);
				}else
				{
					v['data'] = [];
					v['data'].push(inserData);
				}
				return;
			}else
			{
				if( v['data'] && v['data'].length > 0)
				{
					loop(v['data'],inserData);
				}			
			}
			

		}
	}

	var newobj = [];
	for(let v of data)
	{
		if(v.parent_id == 0)
		{
			v.data = [];
			newobj.push(v);
		}else
		{
			loop(newobj,v);
		}
	}
	return newobj;
	
}

console.log('newobj:',makeParentSortObj(data));
