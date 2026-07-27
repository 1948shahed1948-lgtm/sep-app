import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Zap, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function RequiredSkillsPanel({ skills, localizedField, t, practiceBasePath }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="rounded-2xl bg-white border border-slate-100 p-5 space-y-4 lg:sticky lg:top-24">
      <div className="flex items-center gap-2">
        <Target className="w-5 h-5 text-amber-500" />
        <h2 className="text-base font-heading font-bold text-slate-900">{t('requiredSkills')}</h2>
      </div>

      <div className="space-y-3">
        {skills.map((skill, i) => {
          const skillName = localizedField(skill, 'name') || skill.name_ar || '';
          const skillDesc = localizedField(skill, 'description') || skill.description_ar || '';
          const skillId = skill.id || `skill_${i}`;
          const isOpen = openId === skillId;

          return (
            <motion.div
              key={skillId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
              className="rounded-xl border border-slate-100 bg-slate-50/60 overflow-hidden"
            >
              <button
                onClick={() => setOpenId(isOpen ? null : skillId)}
                className="w-full flex items-center justify-between gap-2 p-3 text-start"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 flex-shrink-0 rounded-lg bg-amber-50 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-amber-500" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-800 text-sm">{skillName}</h3>
                </div>
                <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-3 pb-3 space-y-3">
                      {skillDesc && <p className="text-xs text-slate-500 leading-relaxed">{skillDesc}</p>}
                      <Link to={`${practiceBasePath}/${skillId}/practice`}>
                        <Button size="sm" className="w-full gap-2 text-xs">
                          <Zap className="w-3 h-3" />
                          {t('practiceNow')}
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {skills.length === 0 && (
        <div className="text-center py-8 space-y-2">
          <div className="text-3xl">🎯</div>
          <p className="text-slate-500 text-sm">{t('noSkills')}</p>
        </div>
      )}
    </div>
  );
}