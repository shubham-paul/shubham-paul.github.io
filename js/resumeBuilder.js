/*var name = "Shubham Paul";
var role = "Software Engineer";
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var skills = ["Java", "J2EE", "JavaScript", "Spring", "Hibernate", "SQL", "Google App Engine"];
$("#main").append(skills.length);
*/
var bio = {

	"name":"Shubham Paul",
	"role":"Software Engineer",
	"contacts":{
		"mobile": "+91-8800312461",
		"email" : "shubhampaul@gmail.com",
		"github": "shubham-paul",
		"twitter": "shubhampaul11",
		"location": "New Delhi, Delhi, India"
	},
	"welcomeMessage":"Welcome Everyone",
	"skills": ["Java", "J2EE", "JavaScript", "Spring", "Hibernate", "SQL", "Google App Engine"],
	"biopic": "images/IMAG2743_1_1.jpg"
};

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedImage = HTMLbioPic.replace("%data%",bio.biopic);
var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedImage);
$("#header").append(formattedMessage);

/*var work = {};
work.position = "Software Engineer";
work.employer = "EY (IT Advisory Services)"
work.years = "1+";
work.city = "Gurgaon, Haryana"

var education = {};
education["lastSchool"] = "Jaypee Institute of Information Technology";
education["years"]  = "4";
education["city"] = "Noida";

$("#main").append(work["position"]);
$("#main").append(education.lastSchool);
*/

var education = {

	"schools":[
	{
		"name": "Jaypee Institute of Information Technology",
		"location": "Noida, Uttar Pradesh, India",
		"majors": "CS",
		"minors":"Not Applicable",
		"year": "2013"
	},
	{
		"name": "Don Bosco School",
		"location": "New Delhi, Delhi, India",
		"majors":"Science",
		"minors": "Economics",
		"year": "2009"
	}
	
	],

	"Online-Education":[
	{
		"title": "JavaScript Basics",
		"school":"Udacity",
		"date":"2014",
		"url":"https://www.udacity.com/course/ud804"
	},
	{
		"title":"Developing Scalable Apps with Google App Engine",
		"school":"Udacity",
		"date": "2014",
		"url": "https://www.udacity.com/course/ud859"
	},
	{
		"title":"How to use Git and Github",
		"school":"Udacity",
		"date":"2014",
		"url":"https://www.udacity.com/course/ud775"
	}
	]
};

var work = {
    "jobs": [
        {
            "employer": "EY (IT Advisory Services)",
            "title": "Software Engineer (Full Stack Web Developer)",
            "location": "Gurgaon, Haryana, India",
            "dates": "October, 2013 to present",
            "description": "Worked on a product Resource Management Tool which is based on Technologies: Java Spring-MVC, Hibernate and JQGrid Frameworks. A report generation tool - Jaspersoft iReports is also used."
        },
        {
            "employer": "Celerity Infosolutions Pvt Ltd",
            "title": "Software Development Intern",
            "location": "Noida, Uttar Pradesh, India",
            "dates": "May, 2012 to July,2012",
            "description": "Worked on the Front end of a Web Application called Celerity Service Desk at a Summer Internship project @ Celerity Infosolutions."
        },
        {
            "employer": "HCL Infosystems",
            "title": "Software Development Intern",
            "location": "Noida, Uttar Pradesh, India",
            "dates": "May, 2011 to July, 2011",
            "description": "Live project @ HCL Infosystems based on a General CGPA Calculator developed in C++."
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "AUGMENTED VIDEO TUTORIAL",
            "dates": "August, 2012 to December, 2012",
            "description": "An android application which provided video tutorials using the concepts of image processing and 3D model augmentations.",
            "images": [
                "images/project1.png",
                "images/stages.png"
            ]
        },
        {
            "title": "IMAGE RESTORATION",
            "dates": "January, 2013 to June, 2013",
            "description": "A Java swings applet based on restoring black and white images to Colour through a Local Colour Transfer Algorithm.",
            "images": [
                "images/Project2.png",
                "images/Project3.png"
            ]
        }
    ]
};

if (bio.skills.length>0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	/*$("#skills").append("<table><tr>")*/  
	$("#skills").append(/*"<td>"+*/formattedSkill/*+"</td>"*/);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(/*"<td>" + */formattedSkill/* + "</td>"*/);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(/*"<td>" + */formattedSkill/* + "</td>"*/);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(/*"<td>" +*/ formattedSkill/* + "</td>"*/);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[4]);
	$("#skills").append(/*"<td>" +*/ formattedSkill /*+ "</td>"*/);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[5]);
	$("#skills").append(/*"<td>" + */formattedSkill/* + "</td>"*/);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[6]);
	$("#skills").append(/*"<td>" + */formattedSkill/* + "</td>"*/);
	/*$("#skills").append("</tr></table>");*/
}


function displayWork()
{
for (job in work.jobs) {
	//console.log("Error");
	
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	
	var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description)
	$(".work-entry:last").append(formattedDescription);



};
}

displayWork();

/*$(document).click(function(loc){
	logClicks(x,y);

});*/

function locationizer(work_obj)
{
	var locationArray = [];
	for(job in work_obj.jobs )
	{
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}

console.log(locationizer(work));

function inName(name){

	name = name.trim().split(" ");
	console.log(name);
	name[1]=name[1].toUpperCase();
	name[0]=name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0]+" "+name[1];

}

$("#main").append(internationalizeButton);

projects.display = function(){
	for(project in projects.projects )
	{
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length>0) {

			for(image in projects.projects[project].images)
			{
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

$("#mapDiv").append(googleMap);


