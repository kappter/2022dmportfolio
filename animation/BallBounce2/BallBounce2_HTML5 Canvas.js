(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.pexelshristofidanov1252890 = function() {
	this.initialize(img.pexelshristofidanov1252890);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6016,3385);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pexelshristofidanov1252890();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,6016,3385), null);


(lib.Surface = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Egg3gEPMBBvAAAIAAIfMhBvAAAg");
	this.shape.setTransform(210.4,27.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Egg3AEQIAAofMBBvAAAIAAIfg");
	this.shape_1.setTransform(210.4,27.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,422.8,56.4);


(lib.Ball = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ALIAAQAAEnjRDQQjQDRknAAQkmAAjRjRQjQjQAAknQAAkmDQjRQDRjQEmAAQEnAADQDQQDRDRAAEmg");
	this.shape.setTransform(71.2,71.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FF0000","#000000"],[0,1],-23.2,-31.2,0,-23.2,-31.2,111).s().p("An2H4QjRjRAAknQAAkmDRjQQDQjREmAAQEnAADRDRQDQDQAAEmQAAEnjQDRQjRDQknAAQkmAAjQjQg");
	this.shape_1.setTransform(71.2,71.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,144.4,144.4);


// stage content:
(lib.BallBounce2_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Surface
	this.instance = new lib.Surface("synched",0);
	this.instance.setTransform(917.6,523.2,1,1,0,0,0,210.4,27.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:899.95},0).wait(1).to({x:882.3},0).wait(1).to({x:864.7},0).wait(1).to({x:847.05},0).wait(1).to({x:829.45},0).wait(1).to({x:811.8},0).wait(1).to({x:794.2},0).wait(1).to({x:776.55},0).wait(1).to({x:758.95},0).wait(1).to({x:741.3},0).wait(1).to({x:723.7},0).wait(1).to({x:706.05},0).wait(1).to({x:688.4},0).wait(1).to({x:670.8},0).wait(1).to({x:653.15},0).wait(1).to({x:635.55},0).wait(1).to({x:617.9},0).wait(1).to({x:600.3},0).wait(1).to({x:582.65},0).wait(1).to({x:565.05},0).wait(1).to({x:547.4},0).wait(1).to({x:529.8},0).wait(1).to({x:512.15},0).wait(1).to({x:494.5},0).wait(1).to({x:476.9},0).wait(1).to({x:459.25},0).wait(1).to({x:441.65},0).wait(1).to({x:424},0).wait(1).to({x:406.4},0).wait(1).to({x:388.75},0).wait(1).to({x:371.15},0).wait(1).to({x:353.5},0).wait(1).to({x:335.9},0).wait(1).to({x:318.25},0).wait(1).to({x:300.65},0).wait(1).to({x:283},0).wait(1).to({x:265.35},0).wait(1).to({x:247.75},0).wait(1).to({x:230.1},0).wait(1).to({x:212.5},0).wait(1).to({x:194.9},0).wait(1).to({x:177.3},0).wait(1).to({x:159.65},0).wait(1).to({x:142.05},0).wait(1).to({x:124.4},0).wait(1).to({x:106.8},0).wait(1).to({x:89.15},0).wait(1).to({x:71.5},0).wait(1).to({x:53.9},0).wait(1).to({x:36.25},0).wait(1).to({x:18.65},0).wait(1).to({x:1},0).wait(1).to({x:-16.6},0).wait(1).to({x:-34.25},0).wait(1).to({x:-51.85},0).wait(1).to({x:-69.5},0).wait(1).to({x:-87.1},0).wait(1).to({x:-104.75},0).wait(1).to({x:-122.4},0).wait(1));

	// Ball
	this.instance_1 = new lib.Ball("synched",0);
	this.instance_1.setTransform(-74.4,-24.8,1,1,0,0,0,71.2,71.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.0929,scaleY:1.0929,x:-58.95,y:-6.5},0).wait(1).to({scaleX:1.1858,scaleY:1.1858,x:-43.45,y:11.8},0).wait(1).to({scaleX:1.2787,scaleY:1.2787,x:-28.05,y:30.05},0).wait(1).to({scaleX:1.3715,scaleY:1.3715,x:-12.6,y:48.3},0).wait(1).to({scaleX:1.4644,scaleY:1.4644,x:2.8,y:66.55},0).wait(1).to({scaleX:1.5573,scaleY:1.5573,x:18.3,y:84.85},0).wait(1).to({scaleX:1.6502,scaleY:1.6502,x:33.7,y:103.1},0).wait(1).to({scaleX:1.7431,scaleY:1.7431,x:49.15,y:121.35},0).wait(1).to({scaleX:1.836,scaleY:1.836,x:64.55,y:139.55},0).wait(1).to({scaleX:1.9288,scaleY:1.9288,x:80.05,y:157.85},0).wait(1).to({scaleX:2.0217,scaleY:2.0217,x:95.45,y:176.1},0).wait(1).to({scaleX:2.1146,scaleY:2.1146,x:110.9,y:194.35},0).wait(1).to({scaleX:2.2075,scaleY:2.2075,x:126.3,y:212.6},0).wait(1).to({scaleX:2.3004,scaleY:2.3004,x:141.8,y:230.9},0).wait(1).to({scaleX:2.3933,scaleY:2.3933,x:157.2,y:249.2},0).wait(1).to({scaleX:2.4861,scaleY:2.4861,x:172.65,y:267.45},0).wait(1).to({scaleX:2.579,scaleY:2.579,x:188.05,y:285.75},0).wait(1).to({scaleX:2.6719,scaleY:2.6719,x:203.5,y:304},0).wait(1).to({scaleX:2.7648,scaleY:2.7648,x:218.9,y:322.25},0).wait(1).to({scaleX:2.8577,scaleY:2.8577,x:234.35,y:340.5},0).wait(1).to({scaleX:2.9506,scaleY:2.9506,x:249.8,y:358.8},0).wait(1).to({scaleX:3.0434,scaleY:3.0434,x:265.25,y:377.05},0).wait(1).to({scaleX:3.1363,scaleY:3.1363,x:280.65,y:395.3},0).wait(1).to({scaleX:3.2292,scaleY:3.2292,x:296.1,y:413.55},0).wait(1).to({scaleX:3.3221,scaleY:3.3221,x:311.55,y:431.85},0).wait(1).to({scaleX:3.415,scaleY:3.415,x:327,y:450.1},0).wait(1).to({scaleX:3.5079,scaleY:3.5079,x:342.4,y:468.35},0).wait(1).to({scaleX:3.6007,scaleY:3.6007,x:357.85,y:486.6},0).wait(1).to({scaleX:3.6936,scaleY:3.6936,x:373.3,y:504.9},0).wait(1).to({scaleX:3.7865,scaleY:3.7865,x:388.75,y:523.2},0).wait(1).to({scaleX:3.678,scaleY:3.678,x:393.4,y:519.8},0).wait(1).to({scaleX:3.5696,scaleY:3.5696,x:399.15,y:515.25},0).wait(1).to({scaleX:3.4611,scaleY:3.4611,x:406.15,y:509.65},0).wait(1).to({scaleX:3.3526,scaleY:3.3526,x:414.25,y:502.85},0).wait(1).to({scaleX:3.2441,scaleY:3.2441,x:423.55,y:495},0).wait(1).to({scaleX:3.1357,scaleY:3.1357,x:434,y:486},0).wait(1).to({scaleX:3.0272,scaleY:3.0272,x:445.65,y:475.9},0).wait(1).to({scaleX:2.9187,scaleY:2.9187,x:458.4,y:464.6},0).wait(1).to({scaleX:2.8103,scaleY:2.8103,x:472.35,y:452.3},0).wait(1).to({scaleX:2.7018,scaleY:2.7018,x:487.4,y:438.8},0).wait(1).to({scaleX:2.5933,scaleY:2.5933,x:503.7,y:424.2},0).wait(1).to({scaleX:2.4848,scaleY:2.4848,x:521.1,y:408.45},0).wait(1).to({scaleX:2.3764,scaleY:2.3764,x:539.7,y:391.65},0).wait(1).to({scaleX:2.2679,scaleY:2.2679,x:559.4,y:373.65},0).wait(1).to({scaleX:2.1594,scaleY:2.1594,x:580.3,y:354.6},0).wait(1).to({scaleX:2.051,scaleY:2.051,x:602.4,y:334.45},0).wait(1).to({scaleX:1.9425,scaleY:1.9425,x:625.6,y:313.1},0).wait(1).to({scaleX:1.834,scaleY:1.834,x:650,y:290.65},0).wait(1).to({scaleX:1.7255,scaleY:1.7255,x:675.55,y:267.05},0).wait(1).to({scaleX:1.6171,scaleY:1.6171,x:702.25,y:242.4},0).wait(1).to({scaleX:1.5086,scaleY:1.5086,x:730.1,y:216.6},0).wait(1).to({scaleX:1.4001,scaleY:1.4001,x:759.2,y:189.65},0).wait(1).to({scaleX:1.2916,scaleY:1.2916,x:789.35,y:161.6},0).wait(1).to({scaleX:1.1832,scaleY:1.1832,x:820.75,y:132.4},0).wait(1).to({scaleX:1.0747,scaleY:1.0747,x:853.3,y:102.1},0).wait(1).to({scaleX:0.9662,scaleY:0.9662,x:887,y:70.65},0).wait(1).to({scaleX:0.8578,scaleY:0.8578,x:921.85,y:38.15},0).wait(1).to({scaleX:0.7493,scaleY:0.7493,x:957.95,y:4.45},0).wait(1).to({scaleX:0.6408,scaleY:0.6408,x:995.15,y:-30.4},0).wait(1));

	// Background
	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(2787,-758.5,1,1,0,0,0,3008,1692.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:2795.3,y:-759.8},0).wait(1).to({x:2800.85,y:-759.9},0).wait(1).to({x:2803.65,y:-758.8},0).wait(1).to({x:2803.75,y:-756.4},0).wait(1).to({x:2801.1,y:-752.8},0).wait(1).to({x:2795.75,y:-747.95},0).wait(1).to({x:2787.65,y:-741.85},0).wait(1).to({x:2776.85,y:-734.55},0).wait(1).to({x:2763.3,y:-726},0).wait(1).to({x:2747.05,y:-716.2},0).wait(1).to({x:2728.05,y:-705.15},0).wait(1).to({x:2706.35,y:-692.9},0).wait(1).to({x:2681.9,y:-679.4},0).wait(1).to({x:2654.75,y:-664.7},0).wait(1).to({x:2624.85,y:-648.7},0).wait(1).to({x:2592.25,y:-631.5},0).wait(1).to({x:2556.95,y:-613.1},0).wait(1).to({x:2518.9,y:-593.4},0).wait(1).to({x:2478.15,y:-572.5},0).wait(1).to({x:2434.65,y:-550.35},0).wait(1).to({x:2388.45,y:-527},0).wait(1).to({x:2339.55,y:-502.4},0).wait(1).to({x:2287.9,y:-476.55},0).wait(1).to({x:2233.5,y:-449.5},0).wait(1).to({x:2176.45,y:-421.2},0).wait(1).to({x:2116.65,y:-391.65},0).wait(1).to({x:2054.1,y:-360.85},0).wait(1).to({x:1988.85,y:-328.85},0).wait(1).to({x:1920.9,y:-295.6},0).wait(1).to({x:1850.2,y:-261.15},0).wait(1).to({x:1776.8,y:-225.45},0).wait(1).to({x:1700.65,y:-188.5},0).wait(1).to({x:1621.8,y:-150.3},0).wait(1).to({x:1540.25,y:-110.9},0).wait(1).to({x:1455.95,y:-70.25},0).wait(1).to({x:1368.9,y:-28.35},0).wait(1).to({x:1279.15,y:14.75},0).wait(1).to({x:1186.7,y:59.15},0).wait(1).to({x:1091.5,y:104.7},0).wait(1).to({x:993.6,y:151.55},0).wait(1).to({x:892.95,y:199.6},0).wait(1).to({x:789.55,y:248.9},0).wait(1).to({x:683.45,y:299.45},0).wait(1).to({x:574.65,y:351.25},0).wait(1).to({x:463.1,y:404.25},0).wait(1).to({x:348.8,y:458.5},0).wait(1).to({x:231.8,y:514},0).wait(1).to({x:112.05,y:570.75},0).wait(1).to({x:-10.45,y:628.7},0).wait(1).to({x:-135.65,y:687.9},0).wait(1).to({x:-263.6,y:748.35},0).wait(1).to({x:-394.3,y:810.05},0).wait(1).to({x:-527.7,y:873},0).wait(1).to({x:-663.85,y:937.15},0).wait(1).to({x:-802.75,y:1002.6},0).wait(1).to({x:-944.4,y:1069.25},0).wait(1).to({x:-1088.75,y:1137.15},0).wait(1).to({x:-1235.9,y:1206.3},0).wait(1).to({x:-1385.8,y:1276.7},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-3913.8,-2132.4,9725.5,5101.6);
// library properties:
lib.properties = {
	id: 'CF47BF39289E4CB6B2FB3D1E660C7F3E',
	width: 960,
	height: 640,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/pexelshristofidanov1252890.jpg", id:"pexelshristofidanov1252890"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CF47BF39289E4CB6B2FB3D1E660C7F3E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;