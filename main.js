$(".add_car").html("Add car");
$(".control_panel_right").hide(0)

let carPos = 0;

$("#right").click(function() {

	carPos = carPos + 25;
	$(".icon_car").css("left", carPos + "px")
	$(".icon_car_2").css("left", carPos + "px")
	$(".icon_car_3").css("left", carPos + "px")
	$(".icon_car_4").css("left", carPos + "px")

	$(".icon_car").css("transition", "1s linear")
	$(".icon_car_2").css("transition", "1s linear")
	$(".icon_car_3").css("transition", "1s linear")
	$(".icon_car_4").css("transition", "1s linear")

	

})

$("#left").click(function() {

	carPos = carPos - 25;
	$(".icon_car").css("left", carPos + "px")
	$(".icon_car_2").css("left", carPos + "px")
	$(".icon_car_3").css("left", carPos + "px")
	$(".icon_car_4").css("left", carPos + "px")

	$(".icon_car").css("transition", "1s linear")
	$(".icon_car_2").css("transition", "1s linear")
	$(".icon_car_3").css("transition", "1s linear")
	$(".icon_car_4").css("transition", "1s linear")

	

})

let carPosTop = 0;

$("#right_right").click(function() {

	carPosTop = carPosTop + 25;
	$(".icon_car_top").css("left", carPosTop + "px")
	$(".icon_car_2_top").css("left", carPosTop + "px")
	$(".icon_car_3_top").css("left", carPosTop + "px")
	$(".icon_car_4_top").css("left", carPosTop + "px")

	$(".icon_car").css("transition", "1s linear")
	$(".icon_car_2").css("transition", "1s linear")
	$(".icon_car_3").css("transition", "1s linear")
	$(".icon_car_4").css("transition", "1s linear")

	

})

$("#left_right").click(function() {

	carPosTop = carPosTop - 25;
	$(".icon_car_top").css("left", carPosTop + "px")
	$(".icon_car_2_top").css("left", carPosTop + "px")
	$(".icon_car_3_top").css("left", carPosTop + "px")
	$(".icon_car_4_top").css("left", carPosTop + "px")

	$(".icon_car").css("transition", "1s linear")
	$(".icon_car_2").css("transition", "1s linear")
	$(".icon_car_3").css("transition", "1s linear")
	$(".icon_car_4").css("transition", "1s linear")

	

})

let rotatePos = 0;

$("#rotate").click(function() {

	if (rotatePos === 0) {

		$(".icon_car").css("transform", "scale(-1, 1)")
		$(".icon_car_2").css("transform", "scale(-1, 1)")
		$(".icon_car_3").css("transform", "scale(-1, 1)")
		$(".icon_car_4").css("transform", "scale(-1, 1)")
		rotatePos = 1;

		

	} else if (rotatePos === 1) {

		$(".icon_car").css("transform", "scale(1, 1)")
		$(".icon_car_2").css("transform", "scale(1, 1)")
		$(".icon_car_3").css("transform", "scale(1, 1)")
		$(".icon_car_4").css("transform", "scale(1, 1)")
		rotatePos = 0;

		

	}

})

$("#rotate_right").click(function() {

	if (rotatePos === 0) {

		$(".icon_car_top").css("transform", "scale(-1, 1)")
		$(".icon_car_2_top").css("transform", "scale(-1, 1)")
		$(".icon_car_3_top").css("transform", "scale(-1, 1)")
		$(".icon_car_4_top").css("transform", "scale(-1, 1)")
		rotatePos = 1;

		

	} else if (rotatePos === 1) {

		$(".icon_car_top").css("transform", "scale(1, 1)")
		$(".icon_car_2_top").css("transform", "scale(1, 1)")
		$(".icon_car_3_top").css("transform", "scale(1, 1)")
		$(".icon_car_4_top").css("transform", "scale(1, 1)")
		rotatePos = 0;

		

	}

})

let color = 0;

$("#color").click(function() {

	$(".car_color").css("display", "flex")
	$(".car_color_right").css("display", "none")

	// if (color === 0) {

	// 	$(".car_color").css("display", "flex")
	// 	$(".car_color_right").css("display", "none")
	// 	color = 1;

	// 	// $(".road_center").css("bottom", "63px")
	// 	// $(".road_top").css("bottom", "63px")
	// 	// $(".road_top_black").css("bottom", "63px")

	// } else if (color === 1) {

	// 	$(".car_color").css("display", "none")
	// 	color = 0;

	// 	// $(".road_center").css("bottom", "125px")
	// 	// $(".road_top").css("bottom", "125px")
	// 	// $(".road_top_black").css("bottom", "125px")
	// 	// $(".road_marker").css("top", "60px")

	// }

})

let colorRight = 0;

$("#color_right").click(function() {

	$(".car_color_right").css("display", "flex")
	$(".car_color").css("display", "none")

	// if (colorRight === 0) {

	// 	$(".car_color_right").css("display", "flex")
	// 	$(".car_color").css("display", "none")
	// 	colorRight = 1;

	// 	// $(".road_center").css("bottom", "63px")
	// 	// $(".road_top").css("bottom", "63px")
	// 	// $(".road_top_black").css("bottom", "63px")
	// 	// $(".road_marker").css("top", "61px")

	// } else if (colorRight === 1) {

	// 	$(".car_color_right").css("display", "none")
	// 	colorRight = 0;

	// 	// $(".road_center").css("bottom", "125px")
	// 	// $(".road_top").css("bottom", "125px")
	// 	// $(".road_top_black").css("bottom", "125px")
	// 	// $(".road_marker").css("top", "60px")

	// }

})

$("#car_1").click(function() {

	$(".icon_car").css("display", "block");
	$(".car_color").css("display", "none")

	$(".icon_car_2").css("display", "none");
	$(".icon_car_3").css("display", "none");
	$(".icon_car_4").css("display", "none");

})

$("#car_2").click(function() {

	$(".icon_car_2").css("display", "block");
	$(".car_color").css("display", "none")

	$(".icon_car").css("display", "none");
	$(".icon_car_3").css("display", "none");
	$(".icon_car_4").css("display", "none");

})

$("#car_3").click(function() {

	$(".icon_car_3").css("display", "block");
	$(".car_color").css("display", "none")

	$(".icon_car_2").css("display", "none");
	$(".icon_car").css("display", "none");
	$(".icon_car_4").css("display", "none");

})

$("#car_4").click(function() {

	$(".icon_car_4").css("display", "block");
	$(".car_color").css("display", "none")

	$(".icon_car_2").css("display", "none");
	$(".icon_car_3").css("display", "none");
	$(".icon_car").css("display", "none");

})

$("#car_1_right").click(function() {

	$(".icon_car_top").css("display", "block");
	$(".car_color_right").css("display", "none")
	// $(".icon_car_top").css("top", "0px");

	$(".icon_car_2_top").css("display", "none");
	$(".icon_car_3_top").css("display", "none");
	$(".icon_car_4_top").css("display", "none");

})

$("#car_2_right").click(function() {

	$(".icon_car_2_top").css("display", "block");
	$(".car_color_right").css("display", "none")
	// $(".icon_car_2_top").css("top", "0px");

	$(".icon_car_top").css("display", "none");
	$(".icon_car_3_top").css("display", "none");
	$(".icon_car_4_top").css("display", "none");

})

$("#car_3_right").click(function() {

	$(".icon_car_3_top").css("display", "block");
	$(".car_color_right").css("display", "none")
	// $(".icon_car_3_top").css("top", "0px");

	$(".icon_car_2_top").css("display", "none");
	$(".icon_car_top").css("display", "none");
	$(".icon_car_4_top").css("display", "none");

})

$("#car_4_right").click(function() {

	$(".icon_car_4_top").css("display", "block");
	$(".car_color_right").css("display", "none")
	// $(".icon_car_4_top").css("top", "0px");

	$(".icon_car_2_top").css("display", "none");
	$(".icon_car_3_top").css("display", "none");
	$(".icon_car_top").css("display", "none");

})

let addCar = 0;

$("#add_car").click(function() {

	if (addCar === 0) {

		// $(".road_marker").css("top", "-2px")
		$(".icon_car_2_top").css("display", "block")
		$(".icon_car").css("transition", "0s")
		$(".icon_car").css("top", "13px")
		$(".icon_car_2").css("transition", "0s")
		$(".icon_car_2").css("top", "13px")
		$(".icon_car_3").css("transition", "0s")
		$(".icon_car_3").css("top", "13px")
		$(".icon_car_4").css("transition", "0s")
		$(".icon_car_4").css("top", "13px")

		$(".road_marker").css("margin-top", "15px")
		$(".control_panel_right").show(250)
		$(".control_panel").css("margin-left", "-950px")
		// $(".control_panel_right").css("margin-right", "-950px")
		// $(".control_panel_right").css("margin-top", "-175px")
		$(".car_color").css("margin-left", "-950px")
		// $(".car_color_right").css("margin-right", "-950px")

		// $(".control_panel_right").css("left", "1000px")
		// $(".control_panel_right").css("display", "block")
		// $(".car_color").css("margin-left", "-700px")
		// $(".car_color_right").css("margin-right", "-700px")
		// $(".red").css("top", "77px")
		// $(".yellow").css("top", "-50px")

		$(".add_car").html("Clear car")

		addCar = 1;

	} else if (addCar === 1) {

		$(".icon_car_top").css("display", "none")
		$(".icon_car_2_top").css("display", "none")
		$(".icon_car_3_top").css("display", "none")
		$(".icon_car_4_top").css("display", "none")
		// $(".road_marker").css("top", "60px")
		// $(".icon_car").css("top", "75px")
		// $(".icon_car_2").css("top", "75px")
		// $(".icon_car_3").css("top", "75px")
		// $(".icon_car_4").css("top", "75px")

		$(".road_marker").css("margin-top", "140px")
		$(".control_panel").css("margin-left", "0px")
		$(".car_color").css("margin-left", "-0px")

		// $(".control_panel").css("right", "650px")
		$(".control_panel_right").hide(250)
		$(".car_color").css("display", "none")
		// $(".car_color").css("margin-left", "-0px")
		$(".car_color_right").css("display", "none")
		// $(".red").css("top", "139px")
		// $(".yellow").css("top", "13px")

		// $(".road_center").css("bottom", "125px")
		// $(".road_top").css("bottom", "125px")
		// $(".road_top_black").css("bottom", "125px")

		$(".add_car").html("Add car")

		addCar = 0;

	}

})

let light = 0;

$("#light_btn").click(function() {

	$("#red").css("opacity", "1")
	$("#yellow").css("opacity", "1")
	$(".icon_light_active").css("display", "block")
	$(".icon_light").css("display", "none")

})

$("#light_btn_active").click(function() {

	$("#red").css("opacity", "0")
	$("#yellow").css("opacity", "0")
	$(".icon_light_active").css("display", "none")
	$(".icon_light").css("display", "block")

})

let night_mode = 0;

$("#dark_mode").click(function() {

	if (night_mode === 0) {

		$(".wrap").css("background-color", "#005e18");
		$(".road_top").css("background-color", "white");
		night_mode = 1;

	} else if (night_mode === 1) {

		$(".wrap").css("background-color", "#00ff40");
		$(".road_top").css("background-color", "#999");
		night_mode = 0;

	}
	
})