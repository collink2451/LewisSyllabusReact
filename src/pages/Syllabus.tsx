import axios from "axios";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CourseInformation, InstructorInformation } from "src/components";
import SyllabusHeader from "src/components/SyllabusHeader";
import { ClassSection } from "src/models";

function Syllabus() {
  const id = useParams().id!;

  const [syllabus, setSyllabus] = React.useState<ClassSection>();

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/api/csci/${id}`)
        .then((response) => {
          setSyllabus(response.data);
        })
        .catch(() => {
          // console.error(error);
        });
    }

    fetchData();
  }, [id]);

  return (
    <Container>
      {syllabus === undefined ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <SyllabusHeader section={syllabus} />
          <InstructorInformation instructor={syllabus?.instructor} />
          <CourseInformation section={syllabus} />
        </>
      )}
    </Container>
  );
}

export default Syllabus;
