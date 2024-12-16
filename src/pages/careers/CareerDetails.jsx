import { useParams, useLoaderData } from "react-router-dom";

function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2> Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location:{career.location} </p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
          dignissimos ipsa sapiente officiis ad optio exercitationem totam sint
          nisi iste. In, molestias! Sit impedit quae minima ipsum, dolorem
          accusamus quas.Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Facilis beatae commodi explicabo culpa tenetur natus deserunt.
          Rerum sed, quas possimus corrupti voluptatum numquam dicta, molestiae,
          suscipit et animi perspiciatis quia.
        </p>
      </div>
    </div>
  );
}

export default CareerDetails;

//loader function
const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:4000/careers/" + id);

  if (!res.ok) {
    throw Error("Could not find that career");
  }

  return res.json();
};

export { careerDetailsLoader };
