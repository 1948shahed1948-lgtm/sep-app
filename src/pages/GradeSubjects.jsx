import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

export default function GradeSubjects() {
  const { grade } = useParams();
  return <Navigate to={`/question-bank/${grade}`} replace />;
}