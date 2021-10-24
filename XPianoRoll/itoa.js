function p (args){
	post(args)
	post("\n")
}
function p2 (args){
	var t = []
	for (var a in arguments){
		t.push(arguments[a])
	}
	post(t.join(" "))
	post("\n")
}
function info(ob) {
	for (var o in ob) p(["info: ",o,ob[o]])
}
function itoa(){
	var bytes = arrayfromargs(arguments)
	var bstr = String.fromCharCode.apply(String, bytes)
	var barray = bstr.split(' ')
	var ba = barray.slice(2,barray.length-2)
	var ba2 = ba.map(str2int)
	
	outlet(0,ba2)
}
function str2int(s){
	var s2 = parseInt(s)
	if (!isNaN(s)) return s2
	else return s
}
