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
	"role":"Software Developer",
	"contacts":{
		"mobile": "+91-8800312461",
		"email" : "shubhampaul@gmail.com",
		"github": "shubham-paul",
		"twitter": "shubhampaul11",
		"location": "New Delhi, Delhi, India"
	},
	"welcomeMessage":"Welcome Everyone",
	"skills": ["Java", "J2EE", "JavaScript", "Spring", "Hibernate", "SQL", "Release Management"],
	"biopic": "images/Profpic.jpg"
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
		"majors": "Programming, Web Architecture, Data Structure and Data Mining",
		"minors":"Not Applicable",
		"dates": "2009 - 2013",
		"degree":"Bachelors of Technology - Information Technology"
	},
	{
		"name": "Don Bosco School",
		"location": "New Delhi, Delhi, India",
		"majors":"Science: Physics, Chemistry, Maths, Economics",
		"minors": "Economics",
		"dates": "1997 - 2009",
		"degree": "High-School"
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
            "employer": "S&P Global, Inc.",
            "title": "Software Developer Engineer - 2",
            "location": "Gurgaon, Haryana, India",
            "dates": "November, 2016 to present",
            "description": "- Developed and Enhanced a Data Feed Management Solution, XpressFeed, based on user requirements documentation and detailed design documentation.<br>- Also, Worked on delivering proprietary Data Packages through Xpressfeed to a number of clients subscribed to it.<br>- Participate in software design meetings to write technical design documents and to propose design solutions.<br>- Developed solutions to automate various parts of the development process.<br>- Resolve defects and provide bug fixes to the application on Production.<br>- Develop innovative methodologies to improve project quality, scalability and profitability.<br>- Coordinate with various teams to develop and support XpressFeed.<br>- "
        },
        {
            "employer": "EY",
            "title": "Senior Software Engineer",
            "location": "Gurgaon, Haryana, India",
            "dates": "October, 2013 to October,2016",
            "description": "- Designed and developed a Financial service solution software, Office of Continuity (OC), that helps firms develop strategic goals around regulatory-driven imperatives. <br>- Also, enhanced a popularly used AML Tool, EY CMT (Case Management Tool) which is used to investigate FOREX as well as DEPOSIT transactions made all over the world.  <br>- Develop Java/J2EE code based on user requirements documentation and detailed design documentation.<br>- Also, Design and develop SQL procedures, query performance tunings, develop underlying data models and databases.<br>- Perform unit testing of application codes.<br>-Guide Junior Software Engineers in designing and implementing application codes.<br>"
        }
    ]
};

var projects = {
    "projects": [
    	{
    		"title": "EY - Case Management Tool",
            "dates": "July, 2015 to Present",
            "description": "Case Management Tool is a tool to investigate FOREX as well as DEPOSIT transactions made all over the world for Money Laundering. Using our AML (Anti Money Laundering) case management tool we can produce targeted metrics which increases the efficiency of the process and streamlines the workflow management.",
            "images": ""
    	},
    	

    	{

    		"title": "EY - LINC",
            "dates": "December, 2014 to June, 2015",
            "description": "Automate the  benefits amount calculation process to check for compliance against regulatory compliance an identify potential red flags and non-compliance issues. To interpret the client’s data using pre defined business rules and highlight instances where the organization maybe non compliant or issues that need to be addressed. ",
            "images": ""
    	},

        {
            "title": "JIIT (Academic) - Augement Video Tutorial",
            "dates": "August, 2012 to December, 2012",
            "description": "An android application which provided video tutorials using the concepts of image processing and 3D model augmentations.",
            "images": [
                "images/project1.png",
                "images/stages.png"
            ]
        },
        {
            "title": "JIIT (Academic) - Image Restoration",
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

(function displayEducation(){

	for(school in education.schools)
	{
		$("#education").append(HTMLschoolStart);
		var formattedSchool = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree)
		var formatteSchoolDegree = formattedSchool + formattedDegree;
		$(".education-entry:last").append(formatteSchoolDegree);

		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedMajor);

	};

})();




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

//$("#mapDiv").append(googleMap);


