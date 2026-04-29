import axios from "axios";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { ClassSection } from "src/models";

function Home() {
  const [sections, setSections] = React.useState<ClassSection[]>([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/api/csci/`)
        .then((response) => {
          setSections(response.data);
        })
        .catch(() => {
          // console.error(error);
        });
    }

    fetchData();
  }, []);

  return (
    <Container>
      {sections.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h2>Available Lewis University Syllibi</h2>
          <ol>
            {sections.map((section) => (
              <li key={section.section_code}>
                <a href={`/syllabus/${section.section_code}`}>{section.section_code}</a>
              </li>
            ))}
          </ol>
        </>
      )}
    </Container>
  );
}

export default Home;
