function test(arg) {
	log(open_windows)
	/*var objEntries = Object.entries(open_windows);
	log(objEntries)
	for (var i = 0; i < objEntries.length; i++) {
      log(objEntries[i][0],objEntries[i][1].items)
    }*/
    var dic = items.dict
    var vals = Object.values(dic);
    log(items)
}