import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

export default function CurriculumPicker({ includeSkill = false, onLessonChange, onSkillChange }) {
  const [subjects, setSubjects] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [skills, setSkills] = useState([]);
  const [subjectId, setSubjectId] = useState('');
  const [lessonId, setLessonId] = useState('');
  const [skillId, setSkillId] = useState('');

  useEffect(() => { base44.entities.Subject.list().then(setSubjects); }, []);

  const handleSubjectChange = (val) => {
    setSubjectId(val);
    setLessonId(''); setLessons([]);
    setSkillId(''); setSkills([]);
    onLessonChange?.(null);
    onSkillChange?.(null);
    base44.entities.Lesson.filter({ subject_id: val }).then(setLessons);
  };

  const handleLessonChange = (val) => {
    setLessonId(val);
    setSkillId(''); setSkills([]);
    onLessonChange?.(val);
    onSkillChange?.(null);
    if (includeSkill) {
      base44.entities.Skill.filter({ lesson_id: val }).then(setSkills);
    }
  };

  const handleSkillChange = (val) => {
    setSkillId(val);
    onSkillChange?.(val);
  };

  return (
    <div className="grid sm:grid-cols-3 gap-3">
      <Select value={subjectId} onValueChange={handleSubjectChange}>
        <SelectTrigger><SelectValue placeholder="اختر المادة" /></SelectTrigger>
        <SelectContent>
          {subjects.map((s) => (
            <SelectItem key={s.id} value={s.id}>{s.name_ar} ({s.curriculum} - {s.grade})</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={lessonId} onValueChange={handleLessonChange} disabled={!subjectId}>
        <SelectTrigger><SelectValue placeholder="اختر الدرس" /></SelectTrigger>
        <SelectContent>
          {lessons.map((l) => (
            <SelectItem key={l.id} value={l.id}>{l.title_ar}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      {includeSkill && (
        <Select value={skillId} onValueChange={handleSkillChange} disabled={!lessonId}>
          <SelectTrigger><SelectValue placeholder="اختر المهارة" /></SelectTrigger>
          <SelectContent>
            {skills.map((sk) => (
              <SelectItem key={sk.id} value={sk.id}>{sk.name_ar}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  );
}