// A $( document ).ready() block.
$( document ).ready(function() {
	console.log("hellololol?")

	var undergradChart = c3.generate({
		bindto: '#undergradChart',
		data: {
			columns: [
				["Women", 823],
				["Men", 796]
			],
			type: 'donut'
		},
		donut: {
        	title: "Undergrad Total: 1620"
    	},
    	
	});

	var facultyChart = c3.generate({
		bindto: '#facultyChart',
		data: {
			columns: [
				["Women", 102],
				["Men", 118]
			],
			type: 'donut',	
		},
		donut: {
        	title: "Faculty Total: 220"
    	}
	});

	var top5PopMajors = c3.generate({
		bindto: '#top5PopMajors',
		data: {
			columns: [
				["Economics", 16.4],
				["Political Science", 12.8],
				["Biology", 12],
				["Computer Science", 10.6],
				["Mathematics", 8.1],
				["Other", 40.1]
			],
			type: 'donut'
		},
		donut: {
			title: "Top 5 Majors"
		}
	});

	var STEMnonSTEM = c3.generate({
		bindto: '#STEMnonSTEM',
		data: {
			columns: [
				["STEM", 140],
				["Non STEM", 261]

			],
			type: 'donut'
		},
		donut: {
			title: "STEM / Non-STEM Majors"
		}
	});

	var majorDivisions = c3.generate({
		bindto: '#majorDivisions',
		data: {
			columns: [
				["Social Science", 50],
				["Natural Science and Engineering", 37],
				["Humanities", 21],
				["Across Divisions", 12]

			],
			type: 'donut'
		},
		donut: {
			title: "One or more majors*"
		}
	});

	var STEMmajors = c3.generate({
		bindto: '#STEMMajors',
		data: {
			columns: [
				["Biology", 42],
				["Chemistry", 10],
				["Computer Science", 37],
				["Engineering", 24],
				["Mathematics", 24],
				["Physics", 3],
				["Other STEM", 18]
			],
			type: 'donut'
		},
		donut: {
			title: "STEM Majors"
		}
	})

    var engineChart = c3.generate({
	    bindto: '#engineeringChart',
	    data: {
			xs: {
				'maleMajors' : 'year',
				'femaleMajors' : 'year',
				'maleMinors' : 'year',
				'femaleMinors' : 'year',
			},
			columns: [
				['year', 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
				['maleMajors', 11, 16, 17, 15, 13, 22, 19, 12, 12, 20, 12, 9, 17, 18, 16, 16, 15],
				['femaleMajors', 10, 7, 5, 7, 2, 5, 6, 2, 6, 10, 5, 5, 5, 3, 8, 2, 10],
				
			]
	    },
	    axis: {
	        x: {
	            label: 'Year',
	            position: 'outer-center'
	        },
	        y: {
	            label: 'Number of Students',
	            position: 'outer-middle',
	            min: 0
	        }
    	}, 
	});

	engineChart.zoom.enable(true);

	setTimeout(function () {
	    engineChart.load({
	        columns: [
	            ['maleMinors', 0, 1, 0, 1, 1, 0, 3, 1, 2, 2, 0, 1, 6, 3, 2, 3, 2],
				['femaleMinors', 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 2, 1, 1, 3, 1, 1]
	        ]
	    });
	}, 2000);

	setTimeout(function () {
	    engineChart.unload({
			ids: ['maleMajors', 'femaleMajors']
	    });
	}, 4000);

	setTimeout(function () {
	    engineChart.load({
	        columns: [
           		['maleMajors', 11, 16, 17, 15, 13, 22, 19, 12, 12, 20, 12, 9, 17, 18, 16, 16, 15],
				['femaleMajors', 10, 7, 5, 7, 2, 5, 6, 2, 6, 10, 5, 5, 5, 3, 8, 2, 10],
			]
	    });
	}, 6000);

	// -----------------------------------------------------------------------------------------------

	
	var engineeringPercentages = c3.generate({
	    bindto: '#engineeringPercentages',
	    data: {
			xs: {
				'maleMajorPercentages' : 'year',
				'femaleMajorPercentages' : 'year',
				'maleMinorPercentages' : 'year',
				'femaleMinorPercentages' : 'year',
			},
			columns: [
				['year', 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
				['maleMajorPercentages', 52.38, 69.57, 77.27, 68.18, 86.67, 81.48, 76, 85.71, 66.67, 66.67, 70.59, 64.29, 77.27, 85.71, 66.67, 88.89, 60],
				['femaleMajorPercentages', 47.62, 30.43, 22.73, 31.82, 13.33, 18.52, 24, 14.29, 33.33, 33.33, 29.41, 35.71, 22.73, 14.29, 33.33, 11.11, 40]				

			]
	    },
	    axis: {
	        x: {
	            label: 'Year',
	            position: 'outer-center'
	        },
	        y: {
	            label: 'Percentage',
	            position: 'outer-middle',
	            min: 0
	        }
    	}, 
	});

	engineeringPercentages.zoom.enable(true);

	setTimeout(function () {
	    engineeringPercentages.load({
	        columns: [
	            ['maleMinorPercentages', 0, 50, 0, 50, 100, 0, 100, 100, 66.67, 100, 0, 33.33, 85.71, 75, 40, 75, 66.67],
				['femaleMinorPercentages', 0, 50, 0, 50, 0, 0, 0, 0, 33.33, 0, 0, 66.67, 14.29, 25, 60, 25, 33.33]
	        ]
	    });
	}, 2000);

	setTimeout(function () {
	    engineeringPercentages.unload({
			ids: ['maleMajorPercentages', 'femaleMajorPercentages']
	    });
	}, 4000);

	setTimeout(function () {
	    engineeringPercentages.load({
	        columns: [
           		['maleMajorPercentages', 52.38, 69.57, 77.27, 68.18, 86.67, 81.48, 76, 85.71, 66.67, 66.67, 70.59, 64.29, 77.27, 85.71, 66.67, 88.89, 60],
				['femaleMajorPercentages', 47.62, 30.43, 22.73, 31.82, 13.33, 18.52, 24, 14.29, 33.33, 33.33, 29.41, 35.71, 22.73, 14.29, 33.33, 11.11, 40]				

			]
	    });
	}, 6000);
});

