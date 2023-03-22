
const firebaseConfig = {
    apiKey: "AIzaSyDbJWkfiWPQukgaqjntxPWsOPJvcLZ2zzI",
    authDomain: "skit-student-card.firebaseapp.com",
    databaseURL: "https://skit-student-card-default-rtdb.firebaseio.com",
    projectId: "skit-student-card",
    storageBucket: "skit-student-card.appspot.com",
    messagingSenderId: "576536674875",
    appId: "1:576536674875:web:48689ffe95ffbf48ea921e",
    measurementId: "G-9E3XTC47M6"
  };

  firebase.initializeApp(firebaseConfig);

  //reference for Database

  var skitCardDB = firebase.database().ref("skitCard");

  document.getElementById("skitCard").addEventListener("submit", submitCard);

  function submitCard(e) {
    e.preventDefault();
  
    var name = getElementVal("Name");
    var usn = getElementVal("USN");
    var department = getElementVal("Department");

    var cgpa1 = getElementVal("CGPA1");
    var coCurricular1 = getElementVal("Co-curricular1");
var extraCurricular1 = getElementVal("Extra-curricular1");
var internship1 = getElementVal("Internship1");
var projects1 = getElementVal("Projects1");
var softwareLearnt1 = getElementVal("Software-Learnt1");
var parentVisit1 = getElementVal("Parent-Visit1");
var competitions1 = getElementVal("Competitions1");
var programAttended1 = getElementVal("Program-attended1");
var outsideProgramAttended1 = getElementVal("Outside-Program-attended1");
var mooc1 = getElementVal("MOOC1");
var club1 = getElementVal("Club1");
var library1 = getElementVal("Library1");
var exam1 = getElementVal("Exam1");
var issue1 = getElementVal("Issue1");
var placements1 = getElementVal("Placements1");



var cgpa2 = getElementVal("CGPA2");
var coCurricular2 = getElementVal("Co-curricular2");
var extraCurricular2 = getElementVal("Extra-curricular2");
var internship2 = getElementVal("Internship2");
var projects2 = getElementVal("Projects2");
var softwareLearnt2 = getElementVal("Software-Learnt2");
var parentVisit2 = getElementVal("Parent-Visit2");
var competitions2 = getElementVal("Competitions2");
var programAttended2 = getElementVal("Program-attended2");
var outsideProgramAttended2 = getElementVal("Outside-Program-attended2");
var mooc2 = getElementVal("MOOC2");
var club2 = getElementVal("Club2");
var library2 = getElementVal("Library2");
var exam2 = getElementVal("Exam2");
var issue2 = getElementVal("Issue2");
var placements2 = getElementVal("Placements2");



var cgpa3 = getElementVal("CGPA3");
var coCurricular3 = getElementVal("Co-curricular3");
var extraCurricular3 = getElementVal("Extra-curricular3");
var internship3 = getElementVal("Internship3");
var projects3 = getElementVal("Projects3");
var softwareLearnt3 = getElementVal("Software-Learnt3");
var parentVisit3 = getElementVal("Parent-Visit3");
var competitions3 = getElementVal("Competitions3");
var programAttended3 = getElementVal("Program-attended3");
var outsideProgramAttended3 = getElementVal("Outside-Program-attended3");
var mooc3 = getElementVal("MOOC3");
var club3 = getElementVal("Club3");
var library3 = getElementVal("Library3");
var exam3 = getElementVal("Exam3");
var issue3 = getElementVal("Issue3");
var placements3 = getElementVal("Placements3");



var cgpa4 = getElementVal("CGPA4");
var coCurricular4 = getElementVal("Co-curricular4");
var extraCurricular4 = getElementVal("Extra-curricular4");
var internship4 = getElementVal("Internship4");
var projects4 = getElementVal("Projects4");
var softwareLearnt4 = getElementVal("Software-Learnt4");
var parentVisit4 = getElementVal("Parent-Visit4");
var competitions4 = getElementVal("Competitions4");
var programAttended4 = getElementVal("Program-attended4");
var outsideProgramAttended4 = getElementVal("Outside-Program-attended4");
var mooc4 = getElementVal("MOOC4");
var club4 = getElementVal("Club4");
var library4 = getElementVal("Library4");
var exam4 = getElementVal("Exam4");
var issue4 = getElementVal("Issue4");
var placements4 = getElementVal("Placements4");

    
  
    saveMessages(name, usn, department, cgpa1,  coCurricular1, extraCurricular1, internship1, projects1, softwareLearnt1, parentVisit1, competitions1, programAttended1, outsideProgramAttended1, mooc1, club1, library1, exam1, issue1, placements1,
        cgpa2,  coCurricular2, extraCurricular2, internship2, projects2, softwareLearnt2, parentVisit2, competitions2, programAttended2, outsideProgramAttended2, mooc2, club2, library2, exam2, issue2, placements2,
        cgpa3,  coCurricular3, extraCurricular3, internship3, projects3, softwareLearnt3, parentVisit3, competitions3, programAttended3, outsideProgramAttended3, mooc3, club3, library3, exam3, issue3, placements3,
        cgpa4,  coCurricular4, extraCurricular4, internship4, projects4, softwareLearnt4, parentVisit4, competitions4, programAttended4, outsideProgramAttended4, mooc4, club4, library4, exam4, issue4, placements4 );
  }
  
  const saveMessages = (name, usn, department, cgpa1,  coCurricular1, extraCurricular1, internship1, projects1, softwareLearnt1, parentVisit1, competitions1, programAttended1, outsideProgramAttended1, mooc1, club1, library1, exam1, issue1, placements1,
    cgpa2,  coCurricular2, extraCurricular2, internship2, projects2, softwareLearnt2, parentVisit2, competitions2, programAttended2, outsideProgramAttended2, mooc2, club2, library2, exam2, issue2, placements2,
    cgpa3,  coCurricular3, extraCurricular3, internship3, projects3, softwareLearnt3, parentVisit3, competitions3, programAttended3, outsideProgramAttended3, mooc3, club3, library3, exam3, issue3, placements3,
    cgpa4,  coCurricular4, extraCurricular4, internship4, projects4, softwareLearnt4, parentVisit4, competitions4, programAttended4, outsideProgramAttended4, mooc4, club4, library4, exam4, issue4, placements4  ) => {
    var newSkitCard = skitCardDB.push();
  
    newSkitCard.set({
        Name: name,
        USN: usn,
        Department: department,

        CGPA1: cgpa1,
        CoCurricular1: coCurricular1,
        ExtraCurricular1: extraCurricular1,
        Internship1: internship1,
        Projects1: projects1,
        SoftwareLearnt1: softwareLearnt1,
        ParentVisit1: parentVisit1,
        Competitions1: competitions1,
        ProgramAttended1: programAttended1,
        OutsideProgramAttended1: outsideProgramAttended1,
        MOOC1: mooc1,
        Club1: club1,
        Library1: library1,
        Exam1: exam1,
        Issue1: issue1,
        Placements1: placements1,

        CGPA2: cgpa2,
        CoCurricular2: coCurricular2,
        ExtraCurricular2: extraCurricular2,
        Internship2: internship2,
        Projects2: projects2,
        SoftwareLearnt2: softwareLearnt2,
        ParentVisit2: parentVisit2,
        Competitions2: competitions2,
        ProgramAttended2: programAttended2,
        OutsideProgramAttended2: outsideProgramAttended2,
        MOOC2: mooc2,
        Club2: club2,
        Library2: library2,
        Exam2: exam2,
        Issue2: issue2,
        Placements2: placements2,


        CGPA3: cgpa3,
        CoCurricular3: coCurricular3,
        ExtraCurricular3: extraCurricular3,
        Internship3: internship3,
        Projects3: projects3,
        SoftwareLearnt3: softwareLearnt3,
        ParentVisit3: parentVisit3,
        Competition3: competitions3,
        ProgramAttended3: programAttended3,
        OutsideProgramAttended3: outsideProgramAttended3,
        MOOC3: mooc3,
        Club3: club3,
        Library3: library3,
        Exam3: exam3,
        Issue3: issue3,
        Placements3: placements3,


        CGPA3: cgpa4,
        CoCurricular4: coCurricular4,
        ExtraCurricular4: extraCurricular4,
        Internship4: internship4,
        Projects4: projects4,
        SoftwareLearnt4: softwareLearnt4,
        ParentVisit4: parentVisit4,
        Competitions4: competitions4,
        ProgramAttended4: programAttended4,
        OutsideProgramAttended4: outsideProgramAttended4,
        MOOC4: mooc4,
        Club4: club4,
        Library4: library4,
        Exam4: exam4,
        Issue4: issue4,
        Placements4: placements4,

      });
      
  };


  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };