(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,0,0,4).p("AiQgNIEhAAIAAAbIkhAAg");
	this.shape.setTransform(-0.2,-22.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8D8D8").s().p("AiPAOIAAgbIEgAAIAAAbg");
	this.shape_1.setTransform(-0.2,-22.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AgkAAIBJAA");
	this.shape_2.setTransform(-1.2,14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#BDB4B4").ss(2,1,1).p("AgkAAIBJAA");
	this.shape_3.setTransform(-1.2,14.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AgvAAIBfAA");
	this.shape_4.setTransform(-0.2,10.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#BDB4B4").ss(2,1,1).p("AgvAAIBfAA");
	this.shape_5.setTransform(-0.2,10.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AgnAAIBPAA");
	this.shape_6.setTransform(-1,5.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#BDB4B4").ss(2,1,1).p("AgnAAIBPAA");
	this.shape_7.setTransform(-1,5.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("AgpAAIBTAA");
	this.shape_8.setTransform(-0.5,20.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#BDB4B4").ss(3,1,1).p("AgpAAIBTAA");
	this.shape_9.setTransform(-0.5,20.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AgxAAIBjAA");
	this.shape_10.setTransform(-0.5,-17.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#BDB4B4").ss(3,1,1).p("AgxAAIBjAA");
	this.shape_11.setTransform(-0.5,-17.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,0,0,4).p("AgCg6IAFAAQAZAAARARQASASAAAXQAAAZgSARQgRASgZAAIgFAAQgZAAgRgSQgSgRAAgZQAAgXASgSQASgRAYAAg");
	this.shape_12.setTransform(0.3,-5.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#BDB4B4").ss(2,0,0,4).p("AgCg6IAFAAQAZAAARARQASASAAAXQAAAZgSARQgRASgZAAIgFAAQgZAAgRgSQgSgRAAgZQAAgXASgSQASgRAYAAg");
	this.shape_13.setTransform(0.3,-5.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF4647").s().p("AgBA7QgZAAgSgRQgSgRAAgZQAAgYASgRQASgSAZAAIAEAAQAZAAARASQASARAAAYQAAAZgSARQgRARgZAAg");
	this.shape_14.setTransform(0.3,-5.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#BDB4B4").ss(1,0,0,4).p("AiEkBIEJAAQAMAAAJAJQAJAIAAANIAAHHQAAANgJAIQgJAJgMAAIkJAAQgMAAgJgJQgJgIAAgNIAAnHQAAgNAJgIQAJgJAMAAg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(6,0,0,4).p("AiEkBIEJAAQAMAAAJAJQAJAIAAANIAAHHQAAANgJAIQgJAJgMAAIkJAAQgMAAgJgJQgJgIAAgNIAAnHQAAgNAJgIQAJgJAMAAg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiEECQgMAAgJgJQgJgIAAgNIAAnHQAAgNAJgIQAJgJAMAAIEJAAQAMAAAJAJQAIAIAAANIAAHHQAAANgIAIQgJAJgMAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-28.8,38.5,57.7);


(lib.tablet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgkAAIBJAA");
	this.shape.setTransform(34.6,46.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BDB4B4").ss(2,1,1).p("AgkAAIBJAA");
	this.shape_1.setTransform(34.6,46.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AgkAAIBJAA");
	this.shape_2.setTransform(14.1,46.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#BDB4B4").ss(2,1,1).p("AgkAAIBJAA");
	this.shape_3.setTransform(14.1,46.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AgvAAIBfAA");
	this.shape_4.setTransform(35.6,41.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#BDB4B4").ss(2,1,1).p("AgvAAIBfAA");
	this.shape_5.setTransform(35.6,41.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AgvAAIBfAA");
	this.shape_6.setTransform(15.1,41.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#BDB4B4").ss(2,1,1).p("AgvAAIBfAA");
	this.shape_7.setTransform(15.1,41.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AgnAAIBPAA");
	this.shape_8.setTransform(34.8,38);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#BDB4B4").ss(2,1,1).p("AgnAAIBPAA");
	this.shape_9.setTransform(34.8,38);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AgYAAIAxAA");
	this.shape_10.setTransform(25.3,55.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#BDB4B4").ss(3,1,1).p("AgYAAIAxAA");
	this.shape_11.setTransform(25.3,55.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("AhZAAICzAA");
	this.shape_12.setTransform(24.3,12.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#BDB4B4").ss(3,1,1).p("AhZAAICzAA");
	this.shape_13.setTransform(24.3,12.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AgvAAIBfAA");
	this.shape_14.setTransform(15.1,38);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#BDB4B4").ss(2,1,1).p("AgvAAIBfAA");
	this.shape_15.setTransform(15.1,38);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,0,0,4).p("AgCg7IAFAAQAZAAARASQASASAAAXQAAAZgSARQgSASgYAAIgFAAQgZAAgRgSQgSgRAAgZQAAgYASgRQARgSAZAAg");
	this.shape_16.setTransform(24.9,25.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#BDB4B4").ss(2,0,0,4).p("AgCg7IAFAAQAZAAARASQASASAAAXQAAAZgSARQgSASgYAAIgFAAQgZAAgRgSQgSgRAAgZQAAgYASgRQARgSAZAAg");
	this.shape_17.setTransform(24.9,25.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF4647").s().p("AgCA8QgYAAgSgSQgSgRAAgZQAAgYASgRQASgSAYAAIAFAAQAYAAASASQARASAAAXQAAAZgRARQgSASgYAAg");
	this.shape_18.setTransform(24.9,25.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(2,0,0,4).p("AjfgNIG/AAIAAAbIm/AAg");
	this.shape_19.setTransform(25.2,4.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D8D8D8").s().p("AjfAOIAAgbIG/AAIAAAbg");
	this.shape_20.setTransform(25.2,4.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#BDB4B4").ss(1,0,0,4).p("AjclBIG5AAQAMAAAJAJQAJAIAAANIAAJIQAAAMgJAJQgJAJgMAAIm5AAQgMAAgJgJQgJgJAAgMIAApIQAAgNAJgIQAJgJAMAAg");
	this.shape_21.setTransform(25.1,32.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(6,0,0,4).p("AjclBIG5AAQAMAAAJAJQAJAIAAANIAAJIQAAAMgJAJQgJAJgMAAIm5AAQgMAAgJgJQgJgJAAgMIAApIQAAgNAJgIQAJgJAMAAg");
	this.shape_22.setTransform(25.1,32.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AjcFCQgMAAgJgJQgJgIAAgNIAApIQAAgMAJgIQAJgJAMAAIG5AAQAMAAAJAJQAJAIAAAMIAAJIQAAANgJAIQgJAJgMAAg");
	this.shape_23.setTransform(25.1,32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,56.2,70.5);


(lib.laptop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgkAAIBJAA");
	this.shape.setTransform(80.3,47.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BDB4B4").ss(2,1,1).p("AgkAAIBJAA");
	this.shape_1.setTransform(80.3,47.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AgkAAIBJAA");
	this.shape_2.setTransform(44.9,47.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#BDB4B4").ss(2,1,1).p("AgkAAIBJAA");
	this.shape_3.setTransform(44.9,47.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AgkAAIBJAA");
	this.shape_4.setTransform(60.7,47.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#BDB4B4").ss(2,1,1).p("AgkAAIBJAA");
	this.shape_5.setTransform(60.7,47.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AgkAAIBJAA");
	this.shape_6.setTransform(24.3,47.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#BDB4B4").ss(2,1,1).p("AgkAAIBJAA");
	this.shape_7.setTransform(24.3,47.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AgvAAIBfAA");
	this.shape_8.setTransform(81.4,42.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#BDB4B4").ss(2,1,1).p("AgvAAIBfAA");
	this.shape_9.setTransform(81.4,42.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AgvAAIBfAA");
	this.shape_10.setTransform(45.9,42.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#BDB4B4").ss(2,1,1).p("AgvAAIBfAA");
	this.shape_11.setTransform(45.9,42.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AgvAAIBfAA");
	this.shape_12.setTransform(61.8,42.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#BDB4B4").ss(2,1,1).p("AgvAAIBfAA");
	this.shape_13.setTransform(61.8,42.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AgvAAIBfAA");
	this.shape_14.setTransform(25.4,42.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#BDB4B4").ss(2,1,1).p("AgvAAIBfAA");
	this.shape_15.setTransform(25.4,42.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AgnAAIBPAA");
	this.shape_16.setTransform(80.6,38.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#BDB4B4").ss(2,1,1).p("AgnAAIBPAA");
	this.shape_17.setTransform(80.6,38.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AgmAAIBOAA");
	this.shape_18.setTransform(45.1,38.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#BDB4B4").ss(2,1,1).p("AgmAAIBOAA");
	this.shape_19.setTransform(45.1,38.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(2,1,1).p("AgYAAIAxAA");
	this.shape_20.setTransform(53.3,56.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#BDB4B4").ss(3,1,1).p("AgYAAIAxAA");
	this.shape_21.setTransform(53.3,56.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(2,1,1).p("AhZAAICzAA");
	this.shape_22.setTransform(52.3,10.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#BDB4B4").ss(3,1,1).p("AhZAAICzAA");
	this.shape_23.setTransform(52.3,10.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("AgvAAIBfAA");
	this.shape_24.setTransform(61.8,38.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#BDB4B4").ss(2,1,1).p("AgvAAIBfAA");
	this.shape_25.setTransform(61.8,38.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("AgvAAIBfAA");
	this.shape_26.setTransform(25.4,38.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#BDB4B4").ss(2,1,1).p("AgvAAIBfAA");
	this.shape_27.setTransform(25.4,38.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,0,0,4).p("AgCg6IAFAAQAZAAARARQASASAAAXQAAAZgSARQgRASgZAAIgFAAQgZAAgRgSQgSgRAAgZQAAgXASgSQARgRAZAAg");
	this.shape_28.setTransform(70.6,24.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#BDB4B4").ss(2,0,0,4).p("AgCg6IAFAAQAZAAARARQASASAAAXQAAAZgSARQgRASgZAAIgFAAQgZAAgRgSQgSgRAAgZQAAgXASgSQARgRAZAAg");
	this.shape_29.setTransform(70.6,24.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF4647").s().p("AgCA8QgZgBgRgRQgRgRAAgZQAAgXARgSQARgSAZAAIAFAAQAZAAARASQARASAAAXQAAAZgRARQgRARgZABg");
	this.shape_30.setTransform(70.6,24.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,0,0,4).p("AgCg6IAFAAQAZAAARARQASASAAAXQAAAZgSARQgRASgZAAIgFAAQgZAAgRgSQgSgRAAgZQAAgXASgSQARgRAZAAg");
	this.shape_31.setTransform(34.3,24.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#BDB4B4").ss(2,0,0,4).p("AgCg6IAFAAQAZAAARARQASASAAAXQAAAZgSARQgRASgZAAIgFAAQgZAAgRgSQgSgRAAgZQAAgXASgSQARgRAZAAg");
	this.shape_32.setTransform(34.3,24.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF4647").s().p("AgCA8QgZgBgRgRQgRgRAAgZQAAgXARgSQARgSAZAAIAFAAQAZAAARASQARASABAXQgBAZgRARQgRARgZABg");
	this.shape_33.setTransform(34.3,24.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#BDB4B4").ss(1,0,0,4).p("An7gsIP3AAQAMAAAJAIQAJAJAAANIAAAdQAAANgJAIQgJAJgMAAIv3AAQgMAAgJgJQgJgIAAgNIAAgdQAAgNAJgJQAJgIAMAAg");
	this.shape_34.setTransform(53.8,68.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(6,0,0,4).p("An7gsIP3AAQAMAAAJAIQAJAJAAANIAAAdQAAANgJAIQgJAJgMAAIv3AAQgMAAgJgJQgJgIAAgNIAAgdQAAgNAJgJQAJgIAMAAg");
	this.shape_35.setTransform(53.8,68.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F5F5F5").s().p("An7AtQgMABgJgKQgJgIAAgMIAAgfQAAgMAJgIQAJgKAMABIP3AAQAMgBAJAKQAJAIAAAMIAAAfQAAAMgJAIQgJAKgMgBg");
	this.shape_36.setTransform(53.8,68.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(2,0,0,4).p("AnRgNIOjAAIAAAbIujAAg");
	this.shape_37.setTransform(53.2,4.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D8D8D8").s().p("AnRAOIAAgbIOjAAIAAAbg");
	this.shape_38.setTransform(53.2,4.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#BDB4B4").ss(1,0,0,4).p("AnJlCIOTAAQAMAAAJAJQAJAJAAANIAAJIQAAAMgJAJQgJAJgMAAIuTAAQgMAAgJgJQgJgJAAgMIAApIQAAgNAJgJQAJgJAMAAg");
	this.shape_39.setTransform(52.5,32.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(6,0,0,4).p("AnJlCIOTAAQAMAAAJAJQAJAJAAANIAAJIQAAAMgJAJQgJAJgMAAIuTAAQgMAAgJgJQgJgJAAgMIAApIQAAgNAJgJQAJgJAMAAg");
	this.shape_40.setTransform(52.5,32.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AnIFCQgNAAgJgJQgJgIAAgNIAApIQAAgMAJgIQAJgJANAAIORAAQANAAAJAJQAJAIAAAMIAAJIQAAANgJAIQgJAJgNAAg");
	this.shape_41.setTransform(52.5,32.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,0,0,4).p("AgCg6IAFAAQAZAAARARQASASAAAXQAAAYgSASQgRARgZAAIgFAAQgZAAgRgRQgSgRAAgZQAAgXASgSQARgRAZAAg");
	this.shape_42.setTransform(52.9,26.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#BDB4B4").ss(2,0,0,4).p("AgCg6IAFAAQAZAAARARQASASAAAXQAAAYgSASQgRARgZAAIgFAAQgZAAgRgRQgSgRAAgZQAAgXASgSQARgRAZAAg");
	this.shape_43.setTransform(52.9,26.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgCA7QgYAAgSgRQgRgRAAgZQAAgXARgSQASgRAYAAIAEAAQAaAAARARQASASAAAXQAAAYgSASQgRARgaAAg");
	this.shape_44.setTransform(52.9,26.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,113.6,79.2);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.instance = new lib.tablet("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,1,1,0,0,0,25.1,32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-35.2,56.2,70.5);


(lib.mbook = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.instance = new lib.laptop("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(53.8,36.6,1,1,0,0,0,53.8,36.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mbook, new cjs.Rectangle(-3,-3,113.6,79.2), null);


(lib.handy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(16.3,25.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,38.5,57.7);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.instance = new lib.mbook();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,1,1,0,0,0,53.8,36.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.7,-39.6,113.6,79.2);


// stage content:
(lib.code_icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 3
	this.instance = new lib.handy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(177.5,146.1,1,1,0,0,0,16.2,25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:25.8,x:178.3,y:142.8},0).wait(1).to({x:179,y:139.5},0).wait(1).to({x:179.5,y:136.2},0).wait(1).to({x:179.9,y:132.9},0).wait(1).to({x:180,y:129.6},0).wait(1).to({x:179.9,y:126.3},0).wait(1).to({x:179.7,y:123},0).wait(1).to({x:179.3,y:119.7},0).wait(1).to({x:178.6,y:116.5},0).wait(1).to({x:177.8,y:113.3},0).wait(1).to({x:176.8,y:110.1},0).wait(1).to({x:175.7,y:107},0).wait(1).to({x:174.4,y:104},0).wait(1).to({x:172.9,y:101},0).wait(1).to({x:171.3,y:98.1},0).wait(1).to({x:169.6,y:95.2},0).wait(1).to({x:167.7,y:92.5},0).wait(1).to({x:165.6,y:89.9},0).wait(1).to({x:163.4,y:87.4},0).wait(1).to({x:161.1,y:85.1},0).wait(1).to({x:158.7,y:82.9},0).wait(1).to({x:156.1,y:80.8},0).wait(1).to({x:153.4,y:78.9},0).wait(1).to({x:150.6,y:77.1},0).wait(1).to({x:147.7,y:75.5},0).wait(1).to({x:144.7,y:74.1},0).wait(1).to({x:141.6,y:72.8},0).wait(1).to({x:138.5,y:71.6},0).wait(1).to({x:135.3,y:70.6},0).wait(1).to({x:132.1,y:69.8},0).wait(1).to({x:128.9,y:69.2},0).wait(1).to({x:125.6,y:68.7},0).wait(1).to({x:122.3,y:68.4},0).wait(1).to({x:119,y:68.3},0).wait(1).to({x:115.7,y:68.4},0).wait(1).to({x:112.4,y:68.7},0).wait(1).to({x:109.1,y:69.1},0).wait(1).to({x:105.9,y:69.8},0).wait(1).to({x:102.7,y:70.7},0).wait(1).to({x:99.5,y:71.7},0).wait(1).to({x:96.4,y:72.8},0).wait(1).to({x:93.4,y:74.2},0).wait(1).to({x:90.4,y:75.7},0).wait(1).to({x:87.5,y:77.3},0).wait(1).to({x:84.7,y:79.1},0).wait(1).to({x:82,y:81},0).wait(1).to({x:79.4,y:83.1},0).wait(1).to({x:77,y:85.3},0).wait(1).to({x:74.6,y:87.6},0).wait(1).to({x:72.4,y:90.1},0).wait(1).to({x:70.4,y:92.7},0).wait(1).to({x:68.5,y:95.4},0).wait(1).to({x:66.8,y:98.3},0).wait(1).to({x:65.2,y:101.2},0).wait(1).to({x:63.8,y:104.2},0).wait(1).to({x:62.5,y:107.2},0).wait(1).to({x:61.4,y:110.4},0).wait(1).to({x:60.5,y:113.5},0).wait(1).to({x:59.7,y:116.8},0).wait(1).to({x:59,y:120},0).wait(1).to({x:58.6,y:123.3},0).wait(1).to({x:58.4,y:126.6},0).wait(1).to({x:58.3,y:129.9},0).wait(1).to({x:58.4,y:133.2},0).wait(1).to({x:58.8,y:136.5},0).wait(1).to({x:59.3,y:139.8},0).wait(1).to({x:60,y:143},0).wait(1).to({x:60.9,y:146.2},0).wait(1).to({x:62,y:149.3},0).wait(1).to({x:63.2,y:152.4},0).wait(1).to({x:64.6,y:155.5},0).wait(1).to({x:66.1,y:158.4},0).wait(1).to({x:67.7,y:161.3},0).wait(1).to({x:69.5,y:164.1},0).wait(1).to({x:71.5,y:166.7},0).wait(1).to({x:73.6,y:169.3},0).wait(1).to({x:75.8,y:171.7},0).wait(1).to({x:78.2,y:174.1},0).wait(1).to({x:80.7,y:176.2},0).wait(1).to({x:83.3,y:178.2},0).wait(1).to({x:86.1,y:180.1},0).wait(1).to({x:88.9,y:181.8},0).wait(1).to({x:91.8,y:183.3},0).wait(1).to({x:94.8,y:184.7},0).wait(1).to({x:97.9,y:185.9},0).wait(1).to({x:101.1,y:187},0).wait(1).to({x:104.3,y:187.9},0).wait(1).to({x:107.5,y:188.7},0).wait(1).to({x:110.7,y:189.3},0).wait(1).to({x:114,y:189.7},0).wait(1).to({x:117.3,y:189.9},0).wait(1).to({x:120.6},0).wait(1).to({x:124,y:189.7},0).wait(1).to({x:127.2,y:189.4},0).wait(1).to({x:130.5,y:188.8},0).wait(1).to({x:133.7,y:188.1},0).wait(1).to({x:136.9,y:187.1},0).wait(1).to({x:140,y:186.1},0).wait(1).to({x:143.1,y:184.8},0).wait(1).to({x:146.1,y:183.4},0).wait(1).to({x:149.1,y:181.9},0).wait(1).to({x:151.9,y:180.2},0).wait(1).to({x:154.7,y:178.3},0).wait(1).to({x:157.3,y:176.3},0).wait(1).to({x:159.8,y:174.2},0).wait(1).to({x:162.2,y:171.9},0).wait(1).to({x:164.4,y:169.4},0).wait(1).to({x:166.5,y:166.8},0).wait(1).to({x:168.4,y:164.1},0).wait(1).to({x:170.2,y:161.3},0).wait(1).to({x:171.8,y:158.4},0).wait(1).to({x:173.2,y:155.4},0).wait(1).to({x:174.6,y:152.4},0).wait(1).to({x:175.7,y:149.3},0).wait(1));

	// Ebene 7
	this.instance_1 = new lib.Tween9("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(86.6,162.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:89.1,y:165},0).wait(1).to({x:91.6,y:167},0).wait(1).to({x:94.3,y:168.9},0).wait(1).to({x:97.1,y:170.6},0).wait(1).to({x:99.9,y:172.1},0).wait(1).to({x:102.9,y:173.5},0).wait(1).to({x:105.9,y:174.6},0).wait(1).to({x:109,y:175.6},0).wait(1).to({x:112.2,y:176.4},0).wait(1).to({x:115.3,y:177},0).wait(1).to({x:118.6,y:177.5},0).wait(1).to({x:121.8,y:177.8},0).wait(1).to({x:125,y:177.9},0).wait(1).to({x:128.3},0).wait(1).to({x:131.6,y:177.7},0).wait(1).to({x:134.8,y:177.3},0).wait(1).to({x:138,y:176.8},0).wait(1).to({x:141.2,y:176.1},0).wait(1).to({x:144.3,y:175.2},0).wait(1).to({x:147.4,y:174.2},0).wait(1).to({x:150.4,y:172.9},0).wait(1).to({x:153.3,y:171.5},0).wait(1).to({x:156.1,y:169.9},0).wait(1).to({x:158.9,y:168.2},0).wait(1).to({x:161.5,y:166.3},0).wait(1).to({x:164,y:164.3},0).wait(1).to({x:166.5,y:162.1},0).wait(1).to({x:168.8,y:159.8},0).wait(1).to({x:171,y:157.5},0).wait(1).to({x:173.1,y:155},0).wait(1).to({x:175.1,y:152.4},0).wait(1).to({x:176.9,y:149.7},0).wait(1).to({x:178.5,y:146.9},0).wait(1).to({x:180,y:144},0).wait(1).to({x:181.3,y:141},0).wait(1).to({x:182.5,y:138},0).wait(1).to({x:183.4,y:134.9},0).wait(1).to({x:184.2,y:131.7},0).wait(1).to({x:184.8,y:128.5},0).wait(1).to({x:185.2,y:125.3},0).wait(1).to({x:185.5,y:122},0).wait(1).to({x:185.6,y:118.8},0).wait(1).to({x:185.5,y:115.5},0).wait(1).to({x:185.3,y:112.3},0).wait(1).to({x:184.9,y:109.1},0).wait(1).to({x:184.3,y:105.9},0).wait(1).to({x:183.6,y:102.7},0).wait(1).to({x:182.6,y:99.6},0).wait(1).to({x:181.5,y:96.5},0).wait(1).to({x:180.3,y:93.6},0).wait(1).to({x:178.8,y:90.7},0).wait(1).to({x:177.2,y:87.8},0).wait(1).to({x:175.4,y:85.1},0).wait(1).to({x:173.5,y:82.5},0).wait(1).to({x:171.5,y:80},0).wait(1).to({x:169.3,y:77.6},0).wait(1).to({x:167,y:75.3},0).wait(1).to({x:164.6,y:73.1},0).wait(1).to({x:162.1,y:71},0).wait(1).to({x:159.4,y:69.1},0).wait(1).to({x:156.7,y:67.3},0).wait(1).to({x:153.9,y:65.7},0).wait(1).to({x:151,y:64.3},0).wait(1).to({x:148,y:63},0).wait(1).to({x:144.9,y:61.9},0).wait(1).to({x:141.8,y:61},0).wait(1).to({x:138.7,y:60.3},0).wait(1).to({x:135.5,y:59.7},0).wait(1).to({x:132.2,y:59.3},0).wait(1).to({x:129,y:59.1},0).wait(1).to({x:125.7},0).wait(1).to({x:122.5},0).wait(1).to({x:119.2,y:59.4},0).wait(1).to({x:116,y:59.8},0).wait(1).to({x:112.8,y:60.4},0).wait(1).to({x:109.7,y:61.2},0).wait(1).to({x:106.6,y:62.2},0).wait(1).to({x:103.5,y:63.3},0).wait(1).to({x:100.6,y:64.6},0).wait(1).to({x:97.7,y:66.1},0).wait(1).to({x:94.9,y:67.7},0).wait(1).to({x:92.2,y:69.6},0).wait(1).to({x:89.6,y:71.5},0).wait(1).to({x:87.1,y:73.6},0).wait(1).to({x:84.7,y:75.8},0).wait(1).to({x:82.4,y:78.1},0).wait(1).to({x:80.3,y:80.6},0).wait(1).to({x:78.2,y:83.1},0).wait(1).to({x:76.4,y:85.8},0).wait(1).to({x:74.6,y:88.5},0).wait(1).to({x:73.1,y:91.4},0).wait(1).to({x:71.7,y:94.3},0).wait(1).to({x:70.4,y:97.3},0).wait(1).to({x:69.4,y:100.4},0).wait(1).to({x:68.5,y:103.5},0).wait(1).to({x:67.8,y:106.7},0).wait(1).to({x:67.3,y:109.9},0).wait(1).to({x:67,y:113.1},0).wait(1).to({x:66.8,y:116.4},0).wait(1).to({y:119.6},0).wait(1).to({x:66.9,y:122.9},0).wait(1).to({x:67.2,y:126.1},0).wait(1).to({x:67.6,y:129.3},0).wait(1).to({x:68.2,y:132.5},0).wait(1).to({x:69,y:135.7},0).wait(1).to({x:70,y:138.8},0).wait(1).to({x:71.1,y:141.8},0).wait(1).to({x:72.5,y:144.7},0).wait(1).to({x:74,y:147.6},0).wait(1).to({x:75.7,y:150.4},0).wait(1).to({x:77.6,y:153},0).wait(1).to({x:79.6,y:155.6},0).wait(1).to({x:81.7,y:158},0).wait(1).to({x:84,y:160.4},0).wait(1));

	// Ebene 6
	this.instance_2 = new lib.Tween10("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(116.8,64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:114.5,y:64.6},0).wait(1).to({x:112.1,y:64.9},0).wait(1).to({x:109.7,y:65.2},0).wait(1).to({x:107.4,y:65.6},0).wait(1).to({x:105,y:66.2},0).wait(1).to({x:102.7,y:66.8},0).wait(1).to({x:100.3,y:67.5},0).wait(1).to({x:98,y:68.4},0).wait(1).to({x:95.7,y:69.3},0).wait(1).to({x:93.4,y:70.4},0).wait(1).to({x:91.2,y:71.5},0).wait(1).to({x:89,y:72.8},0).wait(1).to({x:86.8,y:74.2},0).wait(1).to({x:84.7,y:75.6},0).wait(1).to({x:82.6,y:77.2},0).wait(1).to({x:80.6,y:78.9},0).wait(1).to({x:78.7,y:80.6},0).wait(1).to({x:76.8,y:82.5},0).wait(1).to({x:75.1,y:84.5},0).wait(1).to({x:73.4,y:86.6},0).wait(1).to({x:71.8,y:88.8},0).wait(1).to({x:70.2,y:91},0).wait(1).to({x:68.7,y:93.3},0).wait(1).to({x:67.3,y:95.6},0).wait(1).to({x:66,y:98.1},0).wait(1).to({x:64.7,y:100.6},0).wait(1).to({x:63.6,y:103.1},0).wait(1).to({x:62.5,y:105.8},0).wait(1).to({x:61.6,y:108.4},0).wait(1).to({x:60.8,y:111.2},0).wait(1).to({x:60.2,y:114},0).wait(1).to({x:59.7,y:116.8},0).wait(1).to({x:59.3,y:119.7},0).wait(1).to({x:59.1,y:122.6},0).wait(1).to({x:59,y:125.6},0).wait(1).to({x:59.1,y:128.6},0).wait(1).to({x:59.3,y:131.5},0).wait(1).to({x:59.7,y:134.5},0).wait(1).to({x:60.3,y:137.5},0).wait(1).to({x:61,y:140.4},0).wait(1).to({x:61.9,y:143.3},0).wait(1).to({x:63,y:146.2},0).wait(1).to({x:64.2,y:149},0).wait(1).to({x:65.6,y:151.8},0).wait(1).to({x:67.2,y:154.5},0).wait(1).to({x:68.8,y:157.2},0).wait(1).to({x:70.6,y:159.8},0).wait(1).to({x:72.6,y:162.3},0).wait(1).to({x:74.6,y:164.7},0).wait(1).to({x:76.8,y:167.1},0).wait(1).to({x:79.1,y:169.4},0).wait(1).to({x:81.5,y:171.6},0).wait(1).to({x:84,y:173.7},0).wait(1).to({x:86.6,y:175.6},0).wait(1).to({x:89.3,y:177.5},0).wait(1).to({x:92.2,y:179.2},0).wait(1).to({x:95.1,y:180.7},0).wait(1).to({x:98.2,y:182.1},0).wait(1).to({x:101.4,y:183.2},0).wait(1).to({x:104.6,y:184.2},0).wait(1).to({x:107.9,y:185.1},0).wait(1).to({x:111.3,y:185.7},0).wait(1).to({x:114.7,y:186.1},0).wait(1).to({x:118.1,y:186.4},0).wait(1).to({x:121.6},0).wait(1).to({x:125.1},0).wait(1).to({x:128.6,y:186.1},0).wait(1).to({x:132.1,y:185.6},0).wait(1).to({x:135.5,y:184.9},0).wait(1).to({x:139,y:184},0).wait(1).to({x:142.4,y:182.9},0).wait(1).to({x:145.7,y:181.6},0).wait(1).to({x:149,y:180},0).wait(1).to({x:152.2,y:178.3},0).wait(1).to({x:155.2,y:176.3},0).wait(1).to({x:158.2,y:174.1},0).wait(1).to({x:161,y:171.8},0).wait(1).to({x:163.8,y:169.3},0).wait(1).to({x:166.4,y:166.6},0).wait(1).to({x:168.8,y:163.8},0).wait(1).to({x:171.1,y:160.8},0).wait(1).to({x:173.3,y:157.7},0).wait(1).to({x:175.2,y:154.5},0).wait(1).to({x:176.9,y:151.1},0).wait(1).to({x:178.4,y:147.5},0).wait(1).to({x:179.7,y:143.9},0).wait(1).to({x:180.7,y:140.2},0).wait(1).to({x:181.5,y:136.4},0).wait(1).to({x:182,y:132.5},0).wait(1).to({x:182.3,y:128.6},0).wait(1).to({x:182.4,y:124.7},0).wait(1).to({x:182.2,y:120.8},0).wait(1).to({x:181.8,y:116.8},0).wait(1).to({x:181.2,y:112.9},0).wait(1).to({x:180.3,y:109},0).wait(1).to({x:179.1,y:105.1},0).wait(1).to({x:177.7,y:101.4},0).wait(1).to({x:175.9,y:97.7},0).wait(1).to({x:173.9,y:94.2},0).wait(1).to({x:171.7,y:90.8},0).wait(1).to({x:169.2,y:87.5},0).wait(1).to({x:166.5,y:84.4},0).wait(1).to({x:163.6,y:81.4},0).wait(1).to({x:160.5,y:78.6},0).wait(1).to({x:157.3,y:76},0).wait(1).to({x:153.8,y:73.6},0).wait(1).to({x:150.2,y:71.4},0).wait(1).to({x:146.4,y:69.5},0).wait(1).to({x:142.5,y:68},0).wait(1).to({x:138.4,y:66.6},0).wait(1).to({x:134.3,y:65.6},0).wait(1).to({x:130,y:64.9},0).wait(1).to({x:125.7,y:64.5},0).wait(1).to({x:121.4,y:64.4},0).wait(1));

	// kreis.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AnKHMQi/i+AAkOQAAkMC/i+QC+i/EMAAQENAAC/C/QC+C+AAEMQAAENi+C/Qi/C+kNAAQkNAAi9i+gAkCkBQhrBrAACWQAACYBrBqQBsBrCWAAQCXAABrhrQBrhqAAiYQAAiWhrhrQhrhriXAAQiWAAhsBrg");
	this.shape.setTransform(124.8,126.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AnKHMQi/i+AAkOQAAkMC/i+QC+i/EMAAQENAAC/C/QC+C+AAEMQAAENi+C/Qi/C+kNAAQkMAAi+i+gAkBkBQhsBrAACWQAACYBsBqQBrBrCWAAQCXAABrhrQBrhqAAiYQAAiWhrhrQhrhriXAAQiWAAhrBrg");
	this.shape_1.setTransform(124.8,126.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},114).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(181.1,147.4,138.2,173.3);
// library properties:
lib.properties = {
	width: 245,
	height: 245,
	fps: 29,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;