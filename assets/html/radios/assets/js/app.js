$(document).ready(function(){

		$("#jquery_jplayer_1").jPlayer({
			ready: function () {
				$(this).jPlayer("setMedia", {
					title: "CDL FM - Belo Horizonte",
					mp3: "http://streaming.xtremdesign.net:8028/;"
				});
			},
			swfPath: "assets/js/jPlayer-2.9.2/dist/jplayer",
			supplied: "mp3",
			wmode: "window",
			globalVolume: true,
			useStateClassSkin: true,
			autoBlur: false,
			smoothPlayBar: true,
			keyEnabled: true
		});

		$("#jquery_jplayer_2").jPlayer({
				ready: function () {
						$(this).jPlayer("setMedia", {
								title: "Antena1 - Vitória",
								mp3: "https://antenaone.crossradio.com.br/stream/1;"
						});
				},
				swfPath: "assets/js/jPlayer-2.9.2/dist/jplayer",
				supplied: "mp3",
				cssSelectorAncestor: "#jp_container_2",
				wmode: "window",
				globalVolume: true,
				useStateClassSkin: true,
				autoBlur: false,
				smoothPlayBar: true,
				keyEnabled: true
		});

		$("#jquery_jplayer_3").jPlayer({
				ready: function () {
						$(this).jPlayer("setMedia", {
								title: "Hits 99.7 FM - RJ",
								mp3: "http://ice44f.crossradio.com.br:14016/stream"
						});
				},
				swfPath: "assets/js/jPlayer-2.9.2/dist/jplayer",
				supplied: "mp3",
				cssSelectorAncestor: "#jp_container_3",
				wmode: "window",
				globalVolume: true,
				useStateClassSkin: true,
				autoBlur: false,
				smoothPlayBar: true,
				keyEnabled: true
		});

		$("#jquery_jplayer_4").jPlayer({
				ready: function () {
						$(this).jPlayer("setMedia", {
								title: "Tribuna FM 99.1 - Vitória",
								mp3: "http://cast.midiaip.com.br:6060/stream"
						});
				},
				swfPath: "assets/js/jPlayer-2.9.2/dist/jplayer",
				supplied: "mp3",
				cssSelectorAncestor: "#jp_container_4",
				wmode: "window",
				globalVolume: true,
				useStateClassSkin: true,
				autoBlur: false,
				smoothPlayBar: true,
				keyEnabled: true
		});

		$("#jquery_jplayer_5").jPlayer({
				ready: function () {
						$(this).jPlayer("setMedia", {
								title: "Alvorada FM 94.9",
								mp3: "http://playerservices.streamtheworld.com/api/livestream-redirect/RADIO_ALVORADAAAC.aac"
						});
				},
				swfPath: "assets/js/jPlayer-2.9.2/dist/jplayer",
				supplied: "mp3",
				cssSelectorAncestor: "#jp_container_5",
				wmode: "window",
				globalVolume: true,
				useStateClassSkin: true,
				autoBlur: false,
				smoothPlayBar: true,
				keyEnabled: true
		});

		$("#jquery_jplayer_6").jPlayer({
				ready: function () {
						$(this).jPlayer("setMedia", {
								title: "Jovempan 99.1 FM",
								mp3: "http://8a3c.live.upx.net.br:8036/stream.mp3"
						});
				},
				swfPath: "assets/js/jPlayer-2.9.2/dist/jplayer",
				supplied: "mp3",
				cssSelectorAncestor: "#jp_container_6",
				wmode: "window",
				globalVolume: true,
				useStateClassSkin: true,
				autoBlur: false,
				smoothPlayBar: true,
				keyEnabled: true
		});

		$("#jquery_jplayer_7").jPlayer({
				ready: function () {
						$(this).jPlayer("setMedia", {
								title: "UFMG 104.5 FM",
								mp3: "http://150.164.63.210:8000/stream"
						});
				},
				swfPath: "assets/js/jPlayer-2.9.2/dist/jplayer",
				supplied: "mp3",
				cssSelectorAncestor: "#jp_container_7",
				wmode: "window",
				globalVolume: true,
				useStateClassSkin: true,
				autoBlur: false,
				smoothPlayBar: true,
				keyEnabled: true
		});

		$("#jquery_jplayer_8").jPlayer({
				ready: function () {
						$(this).jPlayer("setMedia", {
								title: "Brazilian FM",
								mp3: "http://s17.maxcast.com.br:8228/live"
						});
				},
				swfPath: "assets/js/jPlayer-2.9.2/dist/jplayer",
				supplied: "mp3",
				cssSelectorAncestor: "#jp_container_8",
				wmode: "window",
				globalVolume: true,
				useStateClassSkin: true,
				autoBlur: false,
				smoothPlayBar: true,
				keyEnabled: true
		});

		$("#jquery_jplayer_9").jPlayer({
				ready: function () {
						$(this).jPlayer("setMedia", {
								title: "Aika",
								mp3: "http://server01.ouvir.radio.br:8050/stream"
						});
				},
				swfPath: "assets/js/jPlayer-2.9.2/dist/jplayer",
				supplied: "mp3",
				cssSelectorAncestor: "#jp_container_9",
				wmode: "window",
				globalVolume: true,
				useStateClassSkin: true,
				autoBlur: false,
				smoothPlayBar: true,
				keyEnabled: true
		});

		$("#jquery_jplayer_10").jPlayer({
				ready: function () {
						$(this).jPlayer("setMedia", {
								title: "Rádio de Minas",
								mp3: "http://216.245.217.18:8018/live"
						});
				},
				swfPath: "assets/js/jPlayer-2.9.2/dist/jplayer",
				supplied: "mp3",
				cssSelectorAncestor: "#jp_container_10",
				wmode: "window",
				globalVolume: true,
				useStateClassSkin: true,
				autoBlur: false,
				smoothPlayBar: true,
				keyEnabled: true
		});

		$("#jquery_jplayer_11").jPlayer({
				ready: function () {
						$(this).jPlayer("setMedia", {
								title: "Itatiaia",
								mp3: "http://8903.brasilstream.com.br:8903/stream"
						});
				},
				swfPath: "assets/js/jPlayer-2.9.2/dist/jplayer",
				supplied: "mp3",
				cssSelectorAncestor: "#jp_container_11",
				wmode: "window",
				globalVolume: true,
				useStateClassSkin: true,
				autoBlur: false,
				smoothPlayBar: true,
				keyEnabled: true
		});

		$("#jquery_jplayer_12").jPlayer({
				ready: function () {
						$(this).jPlayer("setMedia", {
								title: "CBN AM 1010",
								mp3: "http://stream.ouveai.com.br:8027/live"
						});
				},
				swfPath: "assets/js/jPlayer-2.9.2/dist/jplayer",
				supplied: "mp3",
				cssSelectorAncestor: "#jp_container_12",
				wmode: "window",
				globalVolume: true,
				useStateClassSkin: true,
				autoBlur: false,
				smoothPlayBar: true,
				keyEnabled: true
		});
});

