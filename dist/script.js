"use strict";function randomize_cards(){for(var e=["pair1.png","pair1.png","pair2.png","pair2.png","pair3.png","pair3.png","pair4.png","pair4.png","pair5.png","pair5.png","pair6.png","pair6.png","pair7.png","pair7.png","pair8.png","pair8.png","pair9.png","pair9.png"],s=[];e.length>0;){var a=Math.floor(Math.random()*e.length);s.push(e[a]),e.splice(a,1)}for(var i=0;i<s.length;i++)$("#hex"+i).attr("src","dist/images/"+s[i])}function restart_game(e){$(".stat-bar button").click(function(){$(".card").addClass("locked"),$(".card .back img").removeClass("hidden"),$(".message_prompt > h2").text("-Choose A Hex To Reveal-"),animateDisplayMessage(e),matches=0,guesses=0,games_played+=1,$(".display_matches").html(matches),$(".display_guesses").html(guesses),$(".display_games_played").html(games_played),$(".display_accuracy").html("--"),$(".clockwise-icon > img").css("display","none"),$(".counterclockwise-icon > img").css("display","none"),$(".no-rotate-button > img").css("display","none"),reset_flipped_variables(),setTimeout(function(){$(".hexagon").css("transition","1s").addClass("deg-180").removeClass("deg-0 deg-60 deg-120 deg-240 deg-300 deg-360"),randomize_cards(),$(".card").removeClass("locked")},1e3)})}function updateStats(){guesses++,$(".display_matches").html(matches),$(".display_guesses").html(guesses),matches>0&&$(".display_accuracy").html(Math.floor(matches/guesses*100)+"%"),matches>=9&&($(".no-rotate-button > img").css("display","none"),$(".message_prompt > h2").text("-YOU WIN!-"),animateDisplayMessage())}function rotate_hex_clockwise(e){e.css("transition","1s"),e.hasClass("deg-60")?e.addClass("deg-120").removeClass("deg-60"):e.hasClass("deg-120")?e.addClass("deg-180").removeClass("deg-120"):e.hasClass("deg-180")?e.addClass("deg-240").removeClass("deg-180"):e.hasClass("deg-240")?e.addClass("deg-300").removeClass("deg-240"):e.hasClass("deg-300")&&e.addClass("deg-360").removeClass("deg-300"),setTimeout(function(){e.css("transition","0s")},1e3)}function rotate_hex_counterclockwise(e){e.css("transition","1s"),e.hasClass("deg-60")?e.addClass("deg-0").removeClass("deg-60"):e.hasClass("deg-120")?e.addClass("deg-60").removeClass("deg-120"):e.hasClass("deg-180")?e.addClass("deg-120").removeClass("deg-180"):e.hasClass("deg-240")?e.addClass("deg-180").removeClass("deg-240"):e.hasClass("deg-300")&&e.addClass("deg-240").removeClass("deg-300"),setTimeout(function(){e.css("transition","0s")},1e3)}function reset_rotate(e){(e.hasClass("deg-360")||e.hasClass("deg-0"))&&e.addClass("deg-180").removeClass("deg-360").removeClass("deg-0")}function reset_flipped_variables(){first_card_flipped=null,second_card_flipped=null}function show_rotators(){$(".card:not(.locked)").find(".clockwise-icon > img, .counterclockwise-icon > img").css("display","inline-block"),$(".no-rotate-button > img").css("display","block"),$(".message_prompt > h2").text("-Choose A Hex To Rotate-"),animateDisplayMessage()}function choose_rotate(){var e=!0;$(".clockwise-icon > img").click(function(){if(e){e=!1;var s=$(this).parent().parent().find(".front img"),a=$(this).parent().parent().find(".back img");$(".clockwise-icon > img").css("display","none"),$(".counterclockwise-icon > img").css("display","none"),$(".no-rotate-button > img").css("display","none"),rotate_hex_clockwise(s),rotate_hex_clockwise(a),setTimeout(function(){reset_rotate(s),reset_rotate(a),reset_flipped_variables(),$(".message_prompt > h2").text("-Choose A Hex To Reveal-"),animateDisplayMessage(),e=!0},1e3)}}),$(".counterclockwise-icon > img").click(function(){if(e){e=!1;var s=$(this).parent().parent().find(".front img"),a=$(this).parent().parent().find(".back img");$(".clockwise-icon > img").css("display","none"),$(".counterclockwise-icon > img").css("display","none"),$(".no-rotate-button > img").css("display","none"),rotate_hex_counterclockwise(s),rotate_hex_counterclockwise(a),setTimeout(function(){reset_rotate(s),reset_rotate(a),reset_flipped_variables(),$(".message_prompt > h2").text("-Choose A Hex To Reveal-"),animateDisplayMessage(),e=!0},1e3)}}),$(".no-rotate-button > img").click(function(){$(".clockwise-icon > img").css("display","none"),$(".counterclockwise-icon > img").css("display","none"),$(".no-rotate-button > img").css("display","none"),$(".message_prompt > h2").text("-Choose A Hex To Reveal-"),animateDisplayMessage(),setTimeout(reset_flipped_variables,100)})}function no_match(){$(first_card_flipped).find(".back img").removeClass("hidden"),$(first_card_flipped).removeClass("locked"),$(second_card_flipped).find(".back img").removeClass("hidden"),$(second_card_flipped).removeClass("locked"),rotate_hex_clockwise($(first_card_flipped).find(".back img")),rotate_hex_clockwise($(first_card_flipped).find(".front img")),rotate_hex_counterclockwise($(second_card_flipped).find(".back img")),rotate_hex_counterclockwise($(second_card_flipped).find(".front img")),setTimeout(function(){reset_rotate($(second_card_flipped).find(".back img")),reset_rotate($(second_card_flipped).find(".front img")),reset_rotate($(first_card_flipped).find(".back img")),reset_rotate($(first_card_flipped).find(".front img")),reset_flipped_variables()},1e3)}function flip_hex(){$(".card").click(function(){$(this).hasClass("locked")||null===second_card_flipped&&($(this).find(".back img").css("transition","1s"),$(this).find(".back > img").addClass("hidden"),$(this).addClass("locked"),null===first_card_flipped?(first_card_flipped=this,$(".message_prompt > h2").text("-Choose A Second Hex To Reveal-"),animateDisplayMessage()):$(first_card_flipped).find(".front img").attr("src")===$(this).find(".front img").attr("src")?(second_card_flipped=this,$(first_card_flipped).find(".front img").hasClass("deg-180")&&$(second_card_flipped).find(".front img").hasClass("deg-180")||$(first_card_flipped).find(".front img").hasClass("deg-60")&&$(second_card_flipped).find(".front img").hasClass("deg-60")||$(first_card_flipped).find(".front img").hasClass("deg-60")&&$(second_card_flipped).find(".front img").hasClass("deg-240")||$(first_card_flipped).find(".front img").hasClass("deg-120")&&$(second_card_flipped).find(".front img").hasClass("deg-120")||$(first_card_flipped).find(".front img").hasClass("deg-120")&&$(second_card_flipped).find(".front img").hasClass("deg-300")||$(first_card_flipped).find(".front img").hasClass("deg-240")&&$(second_card_flipped).find(".front img").hasClass("deg-240")||$(first_card_flipped).find(".front img").hasClass("deg-240")&&$(second_card_flipped).find(".front img").hasClass("deg-60")||$(first_card_flipped).find(".front img").hasClass("deg-300")&&$(second_card_flipped).find(".front img").hasClass("deg-300")||$(first_card_flipped).find(".front img").hasClass("deg-300")&&$(second_card_flipped).find(".front img").hasClass("deg-120")?(matches++,updateStats(),matches<9&&show_rotators()):($(".message_prompt > h2").text("-The Orientations Do Not Match-"),animateDisplayMessage(),updateStats(),setTimeout(no_match,800))):(second_card_flipped=this,updateStats(),$(".message_prompt > h2").text("-The Inventors Do Not Match-"),animateDisplayMessage(),setTimeout(no_match,800)))})}function animateDisplayMessage(){setTimeout(function(){$(".message_prompt > h2").addClass("highlightAnimation")},100),setTimeout(function(){$(".message_prompt > h2").removeClass("highlightAnimation")},400)}var matches=0,guesses=0,games_played=0,first_card_flipped=null,second_card_flipped=null;$(document).ready(function(){flip_hex(),choose_rotate(),randomize_cards(),restart_game()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJyYW5kb21pemVfY2FyZHMiLCJjYXJkcyIsInJhbmRvbUNhcmRzIiwibGVuZ3RoIiwiaSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJzcGxpY2UiLCJqIiwiJCIsImF0dHIiLCJyZXN0YXJ0X2dhbWUiLCJlIiwiY2xpY2siLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwidGV4dCIsImFuaW1hdGVEaXNwbGF5TWVzc2FnZSIsIm1hdGNoZXMiLCJndWVzc2VzIiwiZ2FtZXNfcGxheWVkIiwiaHRtbCIsImNzcyIsInJlc2V0X2ZsaXBwZWRfdmFyaWFibGVzIiwic2V0VGltZW91dCIsInVwZGF0ZVN0YXRzIiwicm90YXRlX2hleF9jbG9ja3dpc2UiLCJzZWxlY3RlZF9jYXJkIiwiaGFzQ2xhc3MiLCJyb3RhdGVfaGV4X2NvdW50ZXJjbG9ja3dpc2UiLCJyZXNldF9yb3RhdGUiLCJmaXJzdF9jYXJkX2ZsaXBwZWQiLCJzZWNvbmRfY2FyZF9mbGlwcGVkIiwic2hvd19yb3RhdG9ycyIsImZpbmQiLCJjaG9vc2Vfcm90YXRlIiwibm90Q2xpY2tlZCIsImN1cnJlbnRIZXhGcm9udCIsInRoaXMiLCJwYXJlbnQiLCJjdXJyZW50SGV4QmFjayIsIm5vX21hdGNoIiwiZmxpcF9oZXgiLCJkb2N1bWVudCIsInJlYWR5Il0sIm1hcHBpbmdzIjoiQUFBQSxhQVNBLFNBQVNBLGtCQUdMLElBRkEsSUFBSUMsR0FBUyxZQUFhLFlBQWEsWUFBYSxZQUFhLFlBQWEsWUFBYSxZQUFhLFlBQWEsWUFBYSxZQUFhLFlBQWEsWUFBYSxZQUFhLFlBQWEsWUFBYSxZQUFhLFlBQWEsYUFDdE9DLEtBQ0dELEVBQU1FLE9BQVMsR0FBRyxDQUNyQixJQUFJQyxFQUFJQyxLQUFLQyxNQUFNRCxLQUFLRSxTQUFXTixFQUFNRSxRQUN6Q0QsRUFBWU0sS0FBS1AsRUFBTUcsSUFDdkJILEVBQU1RLE9BQU9MLEVBQUcsR0FFcEIsSUFBSyxJQUFJTSxF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QWNOLFNBQVMsWUFBY25CLEVBQUV1QixxQkFBcUJFLEtBQUssY0FBY04sU0FBUyxZQUFjbkIsRUFBRXNCLG9CQUFvQkcsS0FBSyxjQUFjTixTQUFTLFlBQWNuQixFQUFFdUIscUJBQXFCRSxLQUFLLGNBQWNOLFNBQVMsWUFBY25CLEVBQUVzQixvQkFBb0JHLEtBQUssY0FBY04sU0FBUyxZQUFjbkIsRUFBRXVCLHFCQUFxQkUsS0FBSyxjQUFjTixTQUFTLFlBQWNuQixFQUFFc0Isb0JBQW9CRyxLQUFLLGNBQWNOLFNBQVMsWUFBY25CLEVBQUV1QixxQkFBcUJFLEtBQUssY0FBY04sU0FBUyxXQUFhbkIsRUFBRXNCLG9CQUFvQkcsS0FBSyxjQUFjTixTQUFTLFlBQWNuQixFQUFFdUIscUJBQXFCRSxLQUFLLGNBQWNOLFNBQVMsWUFBY25CLEVBQUVzQixvQkFBb0JHLEtBQUssY0FBY04sU0FBUyxZQUFjbkIsRUFBRXVCLHFCQUFxQkUsS0FBSyxjQUFjTixTQUFTLFlBQ3ZuQ1YsVUFDQU8sY0FDSVAsUUFBVSxHQUNWZSxrQkFHSnhCLEVBQUUsd0JBQXdCTyxLQUFLLG1DQUMvQkMsd0JBQ0FRLGNBQ0FELFdBQVdpQixTQUFVLFFBR3pCVCxvQkFBc0JNLEtBQ3RCYixjQUNBaEIsRUFBRSx3QkFBd0JPLEtBQUssZ0NBQy9CQyx3QkFDQU8sV0FBV2lCLFNBQVUsU0FPckMsU0FBU3hCLHdCQUNMTyxXQUFXLFdBQ1BmLEVBQUUsd0JBQXdCSyxTQUFTLHVCQUNwQyxLQUVIVSxXQUFXLFdBQ1BmLEVBQUUsd0JBQXdCTSxZQUFZLHVCQUN2QyxLQXZQUCxJQUFJRyxRQUFVLEVBQ1ZDLFFBQVUsRUFDVkMsYUFBZSxFQUNmVyxtQkFBcUIsS0FDckJDLG9CQUFzQixLQXVQMUJ2QixFQUFFa0MsVUFBVUMsTUFBTSxXQUNkRixXQUNBUCxnQkFDQXJDLGtCQUNBYSIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBtYXRjaGVzID0gMDtcbnZhciBndWVzc2VzID0gMDtcbnZhciBnYW1lc19wbGF5ZWQgPSAwO1xudmFyIGZpcnN0X2NhcmRfZmxpcHBlZCA9IG51bGw7XG52YXIgc2Vjb25kX2NhcmRfZmxpcHBlZCA9IG51bGw7XG5cbi8vRnVuY3Rpb24gdG8gU2h1ZmZsZSBIZXggQ2FyZHMgVXBvbiBJbml0IGFuZCBHYW1lIFJlc2V0XG5mdW5jdGlvbiByYW5kb21pemVfY2FyZHMoKSB7XG4gICAgdmFyIGNhcmRzID0gWydwYWlyMS5wbmcnLCAncGFpcjEucG5nJywgJ3BhaXIyLnBuZycsICdwYWlyMi5wbmcnLCAncGFpcjMucG5nJywgJ3BhaXIzLnBuZycsICdwYWlyNC5wbmcnLCAncGFpcjQucG5nJywgJ3BhaXI1LnBuZycsICdwYWlyNS5wbmcnLCAncGFpcjYucG5nJywgJ3BhaXI2LnBuZycsICdwYWlyNy5wbmcnLCAncGFpcjcucG5nJywgJ3BhaXI4LnBuZycsICdwYWlyOC5wbmcnLCAncGFpcjkucG5nJywgJ3BhaXI5LnBuZyddO1xuICAgIHZhciByYW5kb21DYXJkcyA9IFtdO1xuICAgIHdoaWxlIChjYXJkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2FyZHMubGVuZ3RoKTtcbiAgICAgICAgcmFuZG9tQ2FyZHMucHVzaChjYXJkc1tpXSk7XG4gICAgICAgIGNhcmRzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCByYW5kb21DYXJkcy5sZW5ndGg7IGorKykge1xuICAgICAgICAkKCcjaGV4JyArIGopLmF0dHIoJ3NyYycsICdkaXN0L2ltYWdlcy8nICsgcmFuZG9tQ2FyZHNbal0pO1xuICAgIH1cbn1cblxuLy9GdW5jdGlvbiB0byBSZXNldCB0aGUgR2FtZVxuZnVuY3Rpb24gcmVzdGFydF9nYW1lKGUpIHtcbiAgICAkKCcuc3RhdC1iYXIgYnV0dG9uJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuY2FyZCcpLmFkZENsYXNzKCdsb2NrZWQnKTtcbiAgICAgICAgJCgnLmNhcmQgLmJhY2sgaW1nJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAkKCcubWVzc2FnZV9wcm9tcHQgPiBoMicpLnRleHQoJy1DaG9vc2UgQSBIZXggVG8gUmV2ZWFsLScpO1xuICAgICAgICBhbmltYXRlRGlzcGxheU1lc3NhZ2UoZSk7XG4gICAgICAgIG1hdGNoZXMgPSAwO1xuICAgICAgICBndWVzc2VzID0gMDtcbiAgICAgICAgZ2FtZXNfcGxheWVkICs9IDE7XG4gICAgICAgICQoJy5kaXNwbGF5X21hdGNoZXMnKS5odG1sKG1hdGNoZXMpO1xuICAgICAgICAkKCcuZGlzcGxheV9ndWVzc2VzJykuaHRtbChndWVzc2VzKTtcbiAgICAgICAgJCgnLmRpc3BsYXlfZ2FtZXNfcGxheWVkJykuaHRtbChnYW1lc19wbGF5ZWQpO1xuICAgICAgICAkKCcuZGlzcGxheV9hY2N1cmFjeScpLmh0bWwoXCItLVwiKTtcbiAgICAgICAgJCgnLmNsb2Nrd2lzZS1pY29uID4gaW1nJykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgICQoJy5jb3VudGVyY2xvY2t3aXNlLWljb24gPiBpbWcnKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgJCgnLm5vLXJvdGF0ZS1idXR0b24gPiBpbWcnKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgcmVzZXRfZmxpcHBlZF92YXJpYWJsZXMoKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcuaGV4YWdvbicpLmNzcygndHJhbnNpdGlvbicsICcxcycpLmFkZENsYXNzKCdkZWctMTgwJykucmVtb3ZlQ2xhc3MoJ2RlZy0wIGRlZy02MCBkZWctMTIwIGRlZy0yNDAgZGVnLTMwMCBkZWctMzYwJyk7XG4gICAgICAgICAgICByYW5kb21pemVfY2FyZHMoKTtcbiAgICAgICAgICAgICQoJy5jYXJkJykucmVtb3ZlQ2xhc3MoJ2xvY2tlZCcpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9KTtcbn1cblxuLy9UaGlzIGZ1bmN0aW9uIGZpcmVkIGFmdGVyIGV2ZXJ5IGd1ZXNzIHRvIHVwZGF0ZSBzdGF0cyBhbmQgY2hlY2sgaWYgd2luIGNvbmRpdGlvbnMgYXJlIG1ldFxuZnVuY3Rpb24gdXBkYXRlU3RhdHMoKSB7XG4gICAgZ3Vlc3NlcysrO1xuICAgICQoJy5kaXNwbGF5X21hdGNoZXMnKS5odG1sKG1hdGNoZXMpO1xuICAgICQoJy5kaXNwbGF5X2d1ZXNzZXMnKS5odG1sKGd1ZXNzZXMpO1xuICAgIGlmIChtYXRjaGVzID4gMCkge1xuICAgICAgICAkKCcuZGlzcGxheV9hY2N1cmFjeScpLmh0bWwoTWF0aC5mbG9vcihtYXRjaGVzIC8gZ3Vlc3NlcyAqIDEwMCkgKyBcIiVcIik7XG4gICAgfVxuICAgIGlmIChtYXRjaGVzID49IDkpIHtcbiAgICAgICAgJCgnLm5vLXJvdGF0ZS1idXR0b24gPiBpbWcnKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgJCgnLm1lc3NhZ2VfcHJvbXB0ID4gaDInKS50ZXh0KCctWU9VIFdJTiEtJyk7XG4gICAgICAgIGFuaW1hdGVEaXNwbGF5TWVzc2FnZSgpO1xuICAgIH1cbn1cblxuLy9UaGlzIGZ1bmN0aW9uIHJlbW92ZXMgdGhlIGN1cnJlbnQgcm90YXRpb24gY2xhc3MgYW5kIGFkZHMgdGhlIG5leHQgcm90YXRpb24gY2xhc3MgbW92aW5nIGNsb2Nrd2lzZVxuZnVuY3Rpb24gcm90YXRlX2hleF9jbG9ja3dpc2Uoc2VsZWN0ZWRfY2FyZCkge1xuICAgIHNlbGVjdGVkX2NhcmQuY3NzKCd0cmFuc2l0aW9uJywgJzFzJyk7XG4gICAgaWYgKHNlbGVjdGVkX2NhcmQuaGFzQ2xhc3MoJ2RlZy02MCcpKSB7XG4gICAgICAgIHNlbGVjdGVkX2NhcmQuYWRkQ2xhc3MoJ2RlZy0xMjAnKS5yZW1vdmVDbGFzcygnZGVnLTYwJyk7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZF9jYXJkLmhhc0NsYXNzKCdkZWctMTIwJykpIHtcbiAgICAgICAgc2VsZWN0ZWRfY2FyZC5hZGRDbGFzcygnZGVnLTE4MCcpLnJlbW92ZUNsYXNzKCdkZWctMTIwJyk7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZF9jYXJkLmhhc0NsYXNzKCdkZWctMTgwJykpIHtcbiAgICAgICAgc2VsZWN0ZWRfY2FyZC5hZGRDbGFzcygnZGVnLTI0MCcpLnJlbW92ZUNsYXNzKCdkZWctMTgwJyk7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZF9jYXJkLmhhc0NsYXNzKCdkZWctMjQwJykpIHtcbiAgICAgICAgc2VsZWN0ZWRfY2FyZC5hZGRDbGFzcygnZGVnLTMwMCcpLnJlbW92ZUNsYXNzKCdkZWctMjQwJyk7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZF9jYXJkLmhhc0NsYXNzKCdkZWctMzAwJykpIHtcbiAgICAgICAgc2VsZWN0ZWRfY2FyZC5hZGRDbGFzcygnZGVnLTM2MCcpLnJlbW92ZUNsYXNzKCdkZWctMzAwJyk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxlY3RlZF9jYXJkLmNzcygndHJhbnNpdGlvbicsICcwcycpO1xuICAgIH0sIDEwMDApO1xufVxuXG4vL1RoaXMgZnVuY3Rpb24gcmVtb3ZlcyB0aGUgY3VycmVudCByb3RhdGlvbiBjbGFzcyBhbmQgYWRkcyB0aGUgbmV4dCByb3RhdGlvbiBjbGFzcyBtb3ZpbmcgY291bnRlci1jbG9ja3dpc2VcbmZ1bmN0aW9uIHJvdGF0ZV9oZXhfY291bnRlcmNsb2Nrd2lzZShzZWxlY3RlZF9jYXJkKSB7XG4gICAgc2VsZWN0ZWRfY2FyZC5jc3MoJ3RyYW5zaXRpb24nLCAnMXMnKTtcbiAgICBpZiAoc2VsZWN0ZWRfY2FyZC5oYXNDbGFzcygnZGVnLTYwJykpIHtcbiAgICAgICAgc2VsZWN0ZWRfY2FyZC5hZGRDbGFzcygnZGVnLTAnKS5yZW1vdmVDbGFzcygnZGVnLTYwJyk7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZF9jYXJkLmhhc0NsYXNzKCdkZWctMTIwJykpIHtcbiAgICAgICAgc2VsZWN0ZWRfY2FyZC5hZGRDbGFzcygnZGVnLTYwJykucmVtb3ZlQ2xhc3MoJ2RlZy0xMjAnKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkX2NhcmQuaGFzQ2xhc3MoJ2RlZy0xODAnKSkge1xuICAgICAgICBzZWxlY3RlZF9jYXJkLmFkZENsYXNzKCdkZWctMTIwJykucmVtb3ZlQ2xhc3MoJ2RlZy0xODAnKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkX2NhcmQuaGFzQ2xhc3MoJ2RlZy0yNDAnKSkge1xuICAgICAgICBzZWxlY3RlZF9jYXJkLmFkZENsYXNzKCdkZWctMTgwJykucmVtb3ZlQ2xhc3MoJ2RlZy0yNDAnKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkX2NhcmQuaGFzQ2xhc3MoJ2RlZy0zMDAnKSkge1xuICAgICAgICBzZWxlY3RlZF9jYXJkLmFkZENsYXNzKCdkZWctMjQwJykucmVtb3ZlQ2xhc3MoJ2RlZy0zMDAnKTtcbiAgICB9XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGVjdGVkX2NhcmQuY3NzKCd0cmFuc2l0aW9uJywgJzBzJyk7XG4gICAgfSwgMTAwMCk7XG59XG5cbi8vVGhpcyBmdW5jdGlvbiByZXNldHMgdGhlIHJvdGF0aW9uIGZyb20gMzYwIG9yIDAgdG8gMTgwLiBUaGlzIGhlbHBzIG1hbmFnZSBpbmZpdGUgcm90YXRpb24gaW4gb25lIGRpcmVjdGlvblxuZnVuY3Rpb24gcmVzZXRfcm90YXRlKHNlbGVjdGVkX2NhcmQpIHtcbiAgICBpZiAoc2VsZWN0ZWRfY2FyZC5oYXNDbGFzcygnZGVnLTM2MCcpIHx8IHNlbGVjdGVkX2NhcmQuaGFzQ2xhc3MoJ2RlZy0wJykpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3RpbGUgcmVzZXQnKTtcbiAgICAgICAgc2VsZWN0ZWRfY2FyZC5hZGRDbGFzcygnZGVnLTE4MCcpLnJlbW92ZUNsYXNzKCdkZWctMzYwJykucmVtb3ZlQ2xhc3MoJ2RlZy0wJyk7XG4gICAgfVxufVxuXG4vL1doZW4gdGhlIHR3byBjYXJkcyBmcm9tIGEgZ3Vlc3MgZG8gbm90IG1hdGNoLCB0aGV5IHdpbGwgZmxpcCBiYWNrIG92ZXJcbmZ1bmN0aW9uIHJlc2V0X2ZsaXBwZWRfdmFyaWFibGVzKCkge1xuICAgIGZpcnN0X2NhcmRfZmxpcHBlZCA9IG51bGw7XG4gICAgc2Vjb25kX2NhcmRfZmxpcHBlZCA9IG51bGw7XG59XG5cbi8vV2hlbiBhIHVzZXIgbWFrZXMgYSBzdWNjZXNzZnVsIG1hdGNoLCB0aGV5IGhhdmUgdGhlIGNob2ljZSBvZiByb3RhdGluZyBhIHJlbWFpbmluZyBjYXJkXG4vL1RoaXMgZnVuY3Rpb24gZGlzcGxheXMgdGhlIGJ1dHRvbnMgZm9yIHJvdGF0aW5nIG9uIGFsbCByZW1haW5pbmcgY2FyZHNcbmZ1bmN0aW9uIHNob3dfcm90YXRvcnMoKSB7XG4gICAgJChcIi5jYXJkOm5vdCgubG9ja2VkKVwiKS5maW5kKCcuY2xvY2t3aXNlLWljb24gPiBpbWcsIC5jb3VudGVyY2xvY2t3aXNlLWljb24gPiBpbWcnKS5jc3MoXCJkaXNwbGF5XCIsIFwiaW5saW5lLWJsb2NrXCIpO1xuICAgICQoXCIubm8tcm90YXRlLWJ1dHRvbiA+IGltZ1wiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgJChcIi5tZXNzYWdlX3Byb21wdCA+IGgyXCIpLnRleHQoXCItQ2hvb3NlIEEgSGV4IFRvIFJvdGF0ZS1cIik7XG4gICAgYW5pbWF0ZURpc3BsYXlNZXNzYWdlKCk7XG59XG5cbi8vVGhpcyBmdW5jdGlvbiBoYW5kbGVzIHJvdGF0aW5nIHRoZSBoZXggY2FyZCBvZiB0aGUgcGxheWVyJ3MgY2hvb3NpbmcsIHRoZW4gaGlkZXMgYWxsIG9mIHRoZSByb3RhdGlvbiBidXR0b25zXG5mdW5jdGlvbiBjaG9vc2Vfcm90YXRlKCkge1xuICAgIHZhciBub3RDbGlja2VkID0gdHJ1ZTtcbiAgICAkKCcuY2xvY2t3aXNlLWljb24gPiBpbWcnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChub3RDbGlja2VkKSB7XG4gICAgICAgICAgICBub3RDbGlja2VkID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgY3VycmVudEhleEZyb250ID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCcuZnJvbnQgaW1nJyk7XG4gICAgICAgICAgICB2YXIgY3VycmVudEhleEJhY2sgPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJy5iYWNrIGltZycpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1JvdGF0b3IgaGFzIGJlZW4gY2xpY2tlZCcpO1xuICAgICAgICAgICAgJCgnLmNsb2Nrd2lzZS1pY29uID4gaW1nJykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgICAgICAkKCcuY291bnRlcmNsb2Nrd2lzZS1pY29uID4gaW1nJykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgICAgICAkKCcubm8tcm90YXRlLWJ1dHRvbiA+IGltZycpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICAgICAgcm90YXRlX2hleF9jbG9ja3dpc2UoY3VycmVudEhleEZyb250KTtcbiAgICAgICAgICAgIHJvdGF0ZV9oZXhfY2xvY2t3aXNlKGN1cnJlbnRIZXhCYWNrKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJlc2V0X3JvdGF0ZShjdXJyZW50SGV4RnJvbnQpO1xuICAgICAgICAgICAgICAgIHJlc2V0X3JvdGF0ZShjdXJyZW50SGV4QmFjayk7XG4gICAgICAgICAgICAgICAgcmVzZXRfZmxpcHBlZF92YXJpYWJsZXMoKTtcbiAgICAgICAgICAgICAgICAkKCcubWVzc2FnZV9wcm9tcHQgPiBoMicpLnRleHQoJy1DaG9vc2UgQSBIZXggVG8gUmV2ZWFsLScpO1xuICAgICAgICAgICAgICAgIGFuaW1hdGVEaXNwbGF5TWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgIG5vdENsaWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAkKCcuY291bnRlcmNsb2Nrd2lzZS1pY29uID4gaW1nJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobm90Q2xpY2tlZCkge1xuICAgICAgICAgICAgbm90Q2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRIZXhGcm9udCA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCkuZmluZCgnLmZyb250IGltZycpO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRIZXhCYWNrID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCcuYmFjayBpbWcnKTtcbiAgICAgICAgICAgICQoJy5jbG9ja3dpc2UtaWNvbiA+IGltZycpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICAgICAgJCgnLmNvdW50ZXJjbG9ja3dpc2UtaWNvbiA+IGltZycpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICAgICAgJCgnLm5vLXJvdGF0ZS1idXR0b24gPiBpbWcnKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgICAgIHJvdGF0ZV9oZXhfY291bnRlcmNsb2Nrd2lzZShjdXJyZW50SGV4RnJvbnQpO1xuICAgICAgICAgICAgcm90YXRlX2hleF9jb3VudGVyY2xvY2t3aXNlKGN1cnJlbnRIZXhCYWNrKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJlc2V0X3JvdGF0ZShjdXJyZW50SGV4RnJvbnQpO1xuICAgICAgICAgICAgICAgIHJlc2V0X3JvdGF0ZShjdXJyZW50SGV4QmFjayk7XG4gICAgICAgICAgICAgICAgcmVzZXRfZmxpcHBlZF92YXJpYWJsZXMoKTtcbiAgICAgICAgICAgICAgICAkKCcubWVzc2FnZV9wcm9tcHQgPiBoMicpLnRleHQoJy1DaG9vc2UgQSBIZXggVG8gUmV2ZWFsLScpO1xuICAgICAgICAgICAgICAgIGFuaW1hdGVEaXNwbGF5TWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgIG5vdENsaWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAkKCcubm8tcm90YXRlLWJ1dHRvbiA+IGltZycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmNsb2Nrd2lzZS1pY29uID4gaW1nJykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgICQoJy5jb3VudGVyY2xvY2t3aXNlLWljb24gPiBpbWcnKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgJCgnLm5vLXJvdGF0ZS1idXR0b24gPiBpbWcnKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgJCgnLm1lc3NhZ2VfcHJvbXB0ID4gaDInKS50ZXh0KCctQ2hvb3NlIEEgSGV4IFRvIFJldmVhbC0nKTtcbiAgICAgICAgYW5pbWF0ZURpc3BsYXlNZXNzYWdlKCk7XG4gICAgICAgIHNldFRpbWVvdXQocmVzZXRfZmxpcHBlZF92YXJpYWJsZXMsIDEwMCk7XG4gICAgfSk7XG59XG5cbi8vV2hlbiBhIHBsYXllciBkb2VzIG5vdCBnZXQgYSBtYXRjaCwgdGhlIGNhcmQgaGV4IGlzIGZsaXBwZWQgYmFjayBhbmQgaXMgcm90YXRlZFxuZnVuY3Rpb24gbm9fbWF0Y2goKSB7XG4gICAgJChmaXJzdF9jYXJkX2ZsaXBwZWQpLmZpbmQoJy5iYWNrIGltZycpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAkKGZpcnN0X2NhcmRfZmxpcHBlZCkucmVtb3ZlQ2xhc3MoJ2xvY2tlZCcpO1xuICAgICQoc2Vjb25kX2NhcmRfZmxpcHBlZCkuZmluZCgnLmJhY2sgaW1nJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoc2Vjb25kX2NhcmRfZmxpcHBlZCkucmVtb3ZlQ2xhc3MoJ2xvY2tlZCcpO1xuICAgIHJvdGF0ZV9oZXhfY2xvY2t3aXNlKCQoZmlyc3RfY2FyZF9mbGlwcGVkKS5maW5kKCcuYmFjayBpbWcnKSk7XG4gICAgcm90YXRlX2hleF9jbG9ja3dpc2UoJChmaXJzdF9jYXJkX2ZsaXBwZWQpLmZpbmQoJy5mcm9udCBpbWcnKSk7XG4gICAgcm90YXRlX2hleF9jb3VudGVyY2xvY2t3aXNlKCQoc2Vjb25kX2NhcmRfZmxpcHBlZCkuZmluZCgnLmJhY2sgaW1nJykpO1xuICAgIHJvdGF0ZV9oZXhfY291bnRlcmNsb2Nrd2lzZSgkKHNlY29uZF9jYXJkX2ZsaXBwZWQpLmZpbmQoJy5mcm9udCBpbWcnKSk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlc2V0X3JvdGF0ZSgkKHNlY29uZF9jYXJkX2ZsaXBwZWQpLmZpbmQoJy5iYWNrIGltZycpKTtcbiAgICAgICAgcmVzZXRfcm90YXRlKCQoc2Vjb25kX2NhcmRfZmxpcHBlZCkuZmluZCgnLmZyb250IGltZycpKTtcbiAgICAgICAgcmVzZXRfcm90YXRlKCQoZmlyc3RfY2FyZF9mbGlwcGVkKS5maW5kKCcuYmFjayBpbWcnKSk7XG4gICAgICAgIHJlc2V0X3JvdGF0ZSgkKGZpcnN0X2NhcmRfZmxpcHBlZCkuZmluZCgnLmZyb250IGltZycpKTtcbiAgICAgICAgcmVzZXRfZmxpcHBlZF92YXJpYWJsZXMoKTtcbiAgICB9LCAxMDAwKTtcbn1cblxuLy9BIGZ1bmN0aW9uIHRoYXQgZmlyZXMgd2hlbmV2ZXIgdGhlIHVzZXIgY2xpY2tzIG9uIGEgaGV4IGNhcmRcbi8vSWYgaXQncyB0aGUgc2Vjb25kIGNhcmQgZmxpcHBlZCBpdCB0aGVuIGV2YWx1YXRlZCBpZiBpdCBpcyBhIG1hdGNoIGluIHBpY3R1cmUgYW5kIG9yaWVudGF0aW9uXG5mdW5jdGlvbiBmbGlwX2hleCgpIHtcbiAgICAkKCcuY2FyZCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2xvY2tlZCcpKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnVGhpcyB0aWxlIGlzIGxvY2tlZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKHNlY29uZF9jYXJkX2ZsaXBwZWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdQbGVhc2Ugcm90YXRlIGEgdGlsZSBmaXJzdCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICQodGhpcykuZmluZCgnLmJhY2sgaW1nJykuY3NzKCd0cmFuc2l0aW9uJywgJzFzJyk7XG4gICAgICAgICQodGhpcykuZmluZChcIi5iYWNrID4gaW1nXCIpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbG9ja2VkJyk7XG4gICAgICAgIGlmIChmaXJzdF9jYXJkX2ZsaXBwZWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGZpcnN0X2NhcmRfZmxpcHBlZCA9IHRoaXM7XG4gICAgICAgICAgICAkKFwiLm1lc3NhZ2VfcHJvbXB0ID4gaDJcIikudGV4dChcIi1DaG9vc2UgQSBTZWNvbmQgSGV4IFRvIFJldmVhbC1cIik7XG4gICAgICAgICAgICBhbmltYXRlRGlzcGxheU1lc3NhZ2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICgkKGZpcnN0X2NhcmRfZmxpcHBlZCkuZmluZCgnLmZyb250IGltZycpLmF0dHIoJ3NyYycpID09PSAkKHRoaXMpLmZpbmQoJy5mcm9udCBpbWcnKS5hdHRyKCdzcmMnKSkge1xuICAgICAgICAgICAgICAgIHNlY29uZF9jYXJkX2ZsaXBwZWQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGlmICgkKGZpcnN0X2NhcmRfZmxpcHBlZCkuZmluZCgnLmZyb250IGltZycpLmhhc0NsYXNzKCdkZWctMTgwJykgJiYgJChzZWNvbmRfY2FyZF9mbGlwcGVkKS5maW5kKCcuZnJvbnQgaW1nJykuaGFzQ2xhc3MoJ2RlZy0xODAnKSB8fCAkKGZpcnN0X2NhcmRfZmxpcHBlZCkuZmluZCgnLmZyb250IGltZycpLmhhc0NsYXNzKCdkZWctNjAnKSAmJiAkKHNlY29uZF9jYXJkX2ZsaXBwZWQpLmZpbmQoJy5mcm9udCBpbWcnKS5oYXNDbGFzcygnZGVnLTYwJykgfHwgJChmaXJzdF9jYXJkX2ZsaXBwZWQpLmZpbmQoJy5mcm9udCBpbWcnKS5oYXNDbGFzcygnZGVnLTYwJykgJiYgJChzZWNvbmRfY2FyZF9mbGlwcGVkKS5maW5kKCcuZnJvbnQgaW1nJykuaGFzQ2xhc3MoJ2RlZy0yNDAnKSB8fCAkKGZpcnN0X2NhcmRfZmxpcHBlZCkuZmluZCgnLmZyb250IGltZycpLmhhc0NsYXNzKCdkZWctMTIwJykgJiYgJChzZWNvbmRfY2FyZF9mbGlwcGVkKS5maW5kKCcuZnJvbnQgaW1nJykuaGFzQ2xhc3MoJ2RlZy0xMjAnKSB8fCAkKGZpcnN0X2NhcmRfZmxpcHBlZCkuZmluZCgnLmZyb250IGltZycpLmhhc0NsYXNzKCdkZWctMTIwJykgJiYgJChzZWNvbmRfY2FyZF9mbGlwcGVkKS5maW5kKCcuZnJvbnQgaW1nJykuaGFzQ2xhc3MoJ2RlZy0zMDAnKSB8fCAkKGZpcnN0X2NhcmRfZmxpcHBlZCkuZmluZCgnLmZyb250IGltZycpLmhhc0NsYXNzKCdkZWctMjQwJykgJiYgJChzZWNvbmRfY2FyZF9mbGlwcGVkKS5maW5kKCcuZnJvbnQgaW1nJykuaGFzQ2xhc3MoJ2RlZy0yNDAnKSB8fCAkKGZpcnN0X2NhcmRfZmxpcHBlZCkuZmluZCgnLmZyb250IGltZycpLmhhc0NsYXNzKCdkZWctMjQwJykgJiYgJChzZWNvbmRfY2FyZF9mbGlwcGVkKS5maW5kKCcuZnJvbnQgaW1nJykuaGFzQ2xhc3MoJ2RlZy02MCcpIHx8ICQoZmlyc3RfY2FyZF9mbGlwcGVkKS5maW5kKCcuZnJvbnQgaW1nJykuaGFzQ2xhc3MoJ2RlZy0zMDAnKSAmJiAkKHNlY29uZF9jYXJkX2ZsaXBwZWQpLmZpbmQoJy5mcm9udCBpbWcnKS5oYXNDbGFzcygnZGVnLTMwMCcpIHx8ICQoZmlyc3RfY2FyZF9mbGlwcGVkKS5maW5kKCcuZnJvbnQgaW1nJykuaGFzQ2xhc3MoJ2RlZy0zMDAnKSAmJiAkKHNlY29uZF9jYXJkX2ZsaXBwZWQpLmZpbmQoJy5mcm9udCBpbWcnKS5oYXNDbGFzcygnZGVnLTEyMCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXMrKztcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlU3RhdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMgPCA5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93X3JvdGF0b3JzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKCcubWVzc2FnZV9wcm9tcHQgPiBoMicpLnRleHQoJy1UaGUgT3JpZW50YXRpb25zIERvIE5vdCBNYXRjaC0nKTtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZURpc3BsYXlNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVN0YXRzKCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQobm9fbWF0Y2gsIDgwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWNvbmRfY2FyZF9mbGlwcGVkID0gdGhpcztcbiAgICAgICAgICAgICAgICB1cGRhdGVTdGF0cygpO1xuICAgICAgICAgICAgICAgICQoJy5tZXNzYWdlX3Byb21wdCA+IGgyJykudGV4dCgnLVRoZSBJbnZlbnRvcnMgRG8gTm90IE1hdGNoLScpO1xuICAgICAgICAgICAgICAgIGFuaW1hdGVEaXNwbGF5TWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQobm9fbWF0Y2gsIDgwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy9UaGlzIGZ1bmN0aW9uIGFkZHMgYSBzdWJ0bGUgYW5pbWF0aW9uIHdoZW5ldmVyIHRoZSBib3R0b20gZGlzcGxheSBtZXNzYWdlIGlzIGNoYW5nZWRcbmZ1bmN0aW9uIGFuaW1hdGVEaXNwbGF5TWVzc2FnZSgpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLm1lc3NhZ2VfcHJvbXB0ID4gaDInKS5hZGRDbGFzcygnaGlnaGxpZ2h0QW5pbWF0aW9uJyk7XG4gICAgfSwgMTAwKTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcubWVzc2FnZV9wcm9tcHQgPiBoMicpLnJlbW92ZUNsYXNzKCdoaWdobGlnaHRBbmltYXRpb24nKTtcbiAgICB9LCA0MDApO1xufVxuXG4vL1RoZSBEb2N1bWVudCBSZWFkeSBmdW5jdGlvbiB0byBhc3NpZ24gYWxsIGV2ZW50IGxpc3RlbmVycyBhbmQgcnVuIHRoZSBpbml0aWFsIHJhbmRvbWl6ZSBjYXJkcyBmdW5jdGlvblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIGZsaXBfaGV4KCk7XG4gICAgY2hvb3NlX3JvdGF0ZSgpO1xuICAgIHJhbmRvbWl6ZV9jYXJkcygpO1xuICAgIHJlc3RhcnRfZ2FtZSgpO1xufSk7Il19