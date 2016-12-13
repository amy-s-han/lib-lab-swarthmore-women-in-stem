// A $( document ).ready() block.
$( document ).ready(function() {
	console.log("hellololol?")
    var chart = c3.generate({
	    bindto: '#engineeringChart',
	    data: {
	      columns: [
	      	['year', 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
	      	['maleMajors', 11, 16, 17, 15, 13, 22, 19, 12, 12, 20, 12, 9, 17, 18, 16, 16, 15],
	      	['femaleMajors', 10, 7, 5, 7, 2, 5, 6, 2, 6, 10, 5, 5, 5, 3, 8, 2, 10],
	      	['maleMinors', 0, 1, 0, 1, 1, 0, 3, 1, 2, 2, 0, 1, 6, 3, 2, 3, 2],
	      	['femaleMinors', 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 2, 1, 1, 3, 1, 1]
	      ]
	    }
	});
});

