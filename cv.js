//fetch

const getInfo = async () => {
  const request = new Request("./cv.json");

  const response = await fetch(request);

  const cvObj = await response.json();

  console.log(cvObj);
  return cvObj;
};

const populateCv = (cvObj) => {
  let employmentHtml = ``;
  cvObj.employment.forEach((element) => {
    const listItem = `
        <li>
        <h4>${element.time}</h4>
        <p>
        <span>${element.jobTitle}</span>
        <span>${element.location}</span>
        <span>${element.text}</span>
        </p>
        </li>`;

    employmentHtml += listItem;
    console.log(cvObj.employment);
  });
  document.getElementById("employmentList").innerHTML = employmentHtml;

  let educationHtml = ``;

  cvObj.education.forEach((element) => {
    const listItem = `<li>${element}</li>`;

    educationHtml += listItem;
    console.log(cvObj.education);
  });
  document.getElementById("educationList").innerHTML = educationHtml;

  let internshipsHtml = ``;
  cvObj.internships.forEach((element) => {
    let listItem = `<li>
        <p>
        <span >${element.companyName}</span>
        <span>${element.text}</span><br>
        </p>
        </li>`;
    listItem = listItem.replace(
      "#companyName",
      `<span>${element.companyName}</span>`
    );

    internshipsHtml += listItem;
    console.log(cvObj.internships);
  });
  document.getElementById("internshipsList").innerHTML = internshipsHtml;
};

const cvObj = await getInfo();
populateCv(cvObj);

// Dynamisk delen
var btn = document.querySelector("button");
btn.onclick = () => {
  window.print();
};
