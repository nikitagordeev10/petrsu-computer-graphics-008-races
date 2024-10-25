(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"lab_8_gordeev_atlas_1", frames: [[0,1127,1600,900],[1602,1127,326,326],[1602,1455,326,326],[0,0,1688,1125]]}
];


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



(lib.back = function() {
	this.initialize(ss["lab_8_gordeev_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.btn_finishpngcopy = function() {
	this.initialize(ss["lab_8_gordeev_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.btn_start = function() {
	this.initialize(ss["lab_8_gordeev_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.car = function() {
	this.initialize(ss["lab_8_gordeev_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.car();
	this.instance.setTransform(223.6,149,0.1324,0.1324,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0.1,0,223.5,149), null);


(lib.btn_stop_new = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.btn_finishpngcopy();
	this.instance.setTransform(-87.95,-87.95,0.5395,0.5395);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.9,-87.9,175.9,175.9);


(lib.btn_start_new = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.btn_start();
	this.instance.setTransform(-84.75,-84.75,0.52,0.52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.7,-84.7,169.5,169.5);


// stage content:
(lib.lab_8_gordeev = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.btn_start_new.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			this.play();
			// End your custom code
		}
		
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.btn_stop_new.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		
		function fl_MouseClickHandler_5()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			this.stop();
			// End your custom code
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50));

	// btn_stop_new
	this.btn_stop_new = new lib.btn_stop_new();
	this.btn_stop_new.name = "btn_stop_new";
	this.btn_stop_new.setTransform(1051.95,540.95);
	new cjs.ButtonHelper(this.btn_stop_new, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_stop_new).wait(50));

	// btn_start_new
	this.btn_start_new = new lib.btn_start_new();
	this.btn_start_new.name = "btn_start_new";
	this.btn_start_new.setTransform(789.75,544.75);
	new cjs.ButtonHelper(this.btn_start_new, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_start_new).wait(50));

	// car_new
	this.instance = new lib.Symbol5();
	this.instance.setTransform(1381.8,345.2,1,1,0,0,0,111.8,74.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:74.5,x:1263.5,y:345.5},0).wait(1).to({x:1145.2},0).wait(1).to({x:1026.9},0).wait(1).to({x:908.6},0).wait(1).to({x:790.3},0).wait(1).to({x:672},0).wait(1).to({x:553.7},0).wait(1).to({x:435.45},0).wait(1).to({rotation:-29.9992,x:359,y:386.75},0).wait(1).to({rotation:-44.9996,x:282.55,y:428.15},0).wait(1).to({rotation:-59.9997,x:259.05,y:470.3},0).wait(1).to({rotation:-74.9999,x:235.65,y:512.45},0).wait(1).to({rotation:-90,x:212.2,y:554.65},0).wait(1).to({rotation:-105,x:235.6,y:611.3},0).wait(1).to({rotation:-120,x:259,y:668.1},0).wait(1).to({rotation:-135,x:282.45,y:724.8},0).wait(1).to({rotation:-161.251,x:321.35,y:740.85},0).wait(1).to({rotation:-167.502,x:360.3,y:756.95},0).wait(1).to({rotation:6.249,x:399.4,y:773.6},0).wait(1).to({rotation:180,x:438.4,y:789.15},0).wait(1).to({x:535.5},0).wait(1).to({x:632.6},0).wait(1).to({x:729.7},0).wait(1).to({x:826.85,y:789.2},0).wait(1).to({x:923.95},0).wait(1).to({x:1021.05},0).wait(1).to({x:1118.2,y:789.25},0).wait(1).to({x:1191.7},0).wait(1).to({x:1265.2},0).wait(1).to({x:1338.7},0).wait(1).to({x:1412.2},0).wait(1).to({rotation:165.0005,x:1494.75,y:758.6},0).wait(1).to({rotation:150.001,x:1577.4,y:727.95},0).wait(1).to({rotation:140.001,x:1604,y:705.5},0).wait(1).to({rotation:130.001,x:1630.65,y:683},0).wait(1).to({rotation:120.001,x:1657.25,y:660.55},0).wait(1).to({rotation:114.0012,x:1665.1,y:647.3},0).wait(1).to({rotation:108.0013,x:1673.05,y:634.05},0).wait(1).to({rotation:102.0015,x:1680.95,y:620.7},0).wait(1).to({rotation:96.0016,x:1688.85,y:607.45},0).wait(1).to({rotation:90.0018,x:1696.8,y:594.2},0).wait(1).to({rotation:78.752,x:1685.35,y:540.5},0).wait(1).to({rotation:67.5022,x:1673.9,y:486.8},0).wait(1).to({rotation:56.2524,x:1662.45,y:433.1},0).wait(1).to({rotation:45.0026,x:1651.05,y:379.4},0).wait(1).to({rotation:33.752,x:1583.65,y:370.15},0).wait(1).to({rotation:22.5013,x:1516.35,y:361},0).wait(1).to({rotation:11.2507,x:1448.9,y:351.7},0).wait(1).to({rotation:0,x:1381.6,y:342.5},0).wait(1));

	// background
	this.instance_1 = new lib.back();
	this.instance_1.setTransform(0,0,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,960.0999999999999,540);
// library properties:
lib.properties = {
	id: '6F8AD57179A88E4CA0F024BC2376AD98',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/lab_8_gordeev_atlas_1.png?1671622101538", id:"lab_8_gordeev_atlas_1"}
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
an.compositions['6F8AD57179A88E4CA0F024BC2376AD98'] = {
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