//2. create your own resume data in JSON format


let jsonResume = [ 
    {
       name: "kalaivani",
       email: "abc@gamil.com",
       phone: 123456789,
       degree: "M.tech"},
  {
         address: "1, mela st",
         postalCode: 612344,
         city: "kovai",
         state: "Tamilnadu",
         country: "India"
       },
 
       {
         company: "CTS",
         position: "Sr. Software Engineer",
         city: "Banglore"
       },
  
       {
         institution: "SASTRA College Of Engineering",
         department: "Computer Science",
         gpa: 7.5
       },
 
       {
       skill: "HTML, C, C++, JAVA",
       },
      {
       
         language: "Tamil, English, Hindi"
      },
     
       {
         hobby: "Gardening"
       }
]
     //jsonResume index
    for(var i=0;i<jsonResume.length;i++)
  //jsonResume[i] means the object at the particular index
  for( var key in jsonResume[i]){
  console.log(key+" "+":"+" ",jsonResume[i][key]);  
  }